import {DATA, get_tmp} from '/static/earth_doc/data.js'

class Earth{
    // 数据
    __data = []
    // 当前页
    __cur = 1 
    constructor(data=[]){
        // 数据分组，每页6个
        this.__data = this.group_data(data, 6)
    }
    // 将数组data按每组num个进行分组
    group_data(data, num){
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
        for (const item of this.__data[this.__cur-1]) {
            html+= get_tmp(item)
        }
        document.querySelector('#list').innerHTML = html
        this.loadstyle()
        // prev
        document.querySelector('#prev').addEventListener('click',(e)=>{
            this.prev()
        })
        // next
        document.querySelector('#next').addEventListener('click',(e)=>{
            this.next()
        })
    }
    loadstyle(){
        if(this.__cur==1){
            document.querySelector('#prev').classList.add('disabled')
        }else{
            document.querySelector('#prev').classList.remove('disabled')
        }
        if(this.__cur==this.__data.length){
            document.querySelector('#next').classList.add('disabled')
        }else{
            document.querySelector('#next').classList.remove('disabled')
        }
    }
    prev(){
        if(this.__cur>1){
            let html = ''
            this.__cur -= 1
            for (const item of this.__data[this.__cur-1]) {
                html+= get_tmp(item)
            }
            document.querySelector('#list').innerHTML = html
            this.loadstyle()
        }
    }
    next(){
        if(this.__cur<this.__data.length){
            let html = ''
            this.__cur += 1
            for (const item of this.__data[this.__cur-1]) {
                html+= get_tmp(item)
            }
            document.querySelector('#list').innerHTML = html
            this.loadstyle()
        }
    }
}
let earth = new Earth(DATA)
earth.init()