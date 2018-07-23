import axios from 'axios'
import appStore from '@/store'
import baseURL from '@/utils/baseURL'

const service = axios.create({
    baseURL,
    method: 'post',
    timeout: 15000
})

service.interceptors.request.use(options => {
    console.log('request: ', options)
    const config = options
    // config.headers['TOKEN'] = 'token'
    config.data = Object.assign({}, {
        token: appStore.token
    }, options.data)
    return config
}, error => Promise.reject(error))

service.interceptors.response.use(
    response => {
        console.log('response: ', response.data)
        const { code } = response.data
        // Do something
        if (code === 9000) {
            return response.data
        }

        return Promise.reject(response.data)
    },
    error => Promise.reject(error)
)

/**
 * axios封装
 * @param  {Object} params      axios 的请求参数
 * @param  {Boolean} ignoreError 是否忽略错误，用来自己处理异常
 * @return {Promise}             返回一个Promise对象
 */
function request(params, ignoreError) {
    return service(params).catch(res => {
        console.log('request.error: ', res)
        const code = res.code

        // 9001 用户不存在, 9002 无权限, 9005 token不存在，9006 token失效
        if (code === 9001 || code === 9002 || code === 9005 || code === 9006) {
            appStore.setToken(null)
            // 跳转到没有权限页面
            window.location = '/noauth'
            return false
        }

        // 接口如果需要在外边需要异常，需要设置ignoreError = true
        if (ignoreError !== true) {
            appStore.setError(res)
        }

        return Promise.reject(res)
    })
}

export default request
