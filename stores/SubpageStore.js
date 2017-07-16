import { observable } from 'mobx'

class SubpageStore {
    @observable article = {}

    constructor() {
        this.article.title = ['文獻收集器', '內文智慧分析']
    }
}

export default new SubpageStore()