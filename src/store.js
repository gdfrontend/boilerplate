import { observable, action } from 'mobx'

class Store {
    @observable userName

    @action
    setUserName(userName) {
        this.userName = userName
    }
}

export default new Store()
