import {DATA, getTmp} from '/static/earth-doc/data.js'

class Earth{
    // 数据
    _data = []
    // 当前页
    _cur = 1 
    constructor(data=[]){
        // 数据分组，每页6个
        this._data = this.groupData(data, 6)
    }
    // 将数组data按每组num个进行分组
    groupData(data, num){
        const list = []
        let current = []
        for (const item of data) {
            current.push(item)
            if(current.length == num){
                list.push(current)
                current = []
            }
        }
        if (current.length) {
            list.push(current)
        }
        return list
    }
    init(){
        let html = ''
        for (const item of this._data[this._cur-1]) {
            html+= getTmp(item)
        }
        document.querySelector('#list').innerHTML = html
        this.loadStyle()
        // prev
        document.querySelector('#prev').addEventListener('click',(e)=>{
            this.prev()
        })
        // next
        document.querySelector('#next').addEventListener('click',(e)=>{
            this.next()
        })
    }
    loadStyle(){
        if(this._cur==1){
            document.querySelector('#prev').classList.add('disabled')
        }else{
            document.querySelector('#prev').classList.remove('disabled')
        }
        if(this._cur==this._data.length){
            document.querySelector('#next').classList.add('disabled')
        }else{
            document.querySelector('#next').classList.remove('disabled')
        }
    }
    prev(){
        if(this._cur>1){
            let html = ''
            this._cur -= 1
            for (const item of this._data[this._cur-1]) {
                html+= getTmp(item)
            }
            document.querySelector('#list').innerHTML = html
            this.loadStyle()
        }
    }
    next(){
        if(this._cur<this._data.length){
            let html = ''
            this._cur += 1
            for (const item of this._data[this._cur-1]) {
                html+= getTmp(item)
            }
            document.querySelector('#list').innerHTML = html
            this.loadStyle()
        }
    }
}
let earth = new Earth(DATA)
earth.init()