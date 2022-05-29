// 列表模板
function get_tmp(data){
    const tmp =
        `<div class="col list-item">
            <a href="/earth_content/${data.foldername}">
                <div class="card h-100">
                    <img src="/static/earth_doc/${data.foldername}/${data.img}" class="card-img-top" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${data.title}</h5>
                    </div>
                </div>
            </a>
        </div>`
    return tmp
}
// 列表数据
const DATA = [
    {'foldername':'2022-5-22','img':'card.jpg','title':'网站说明'},
    {'foldername':'2022-5-25','img':'card.jpg','title':'《大时代》-中国软件行业蛮荒时代'},
    {'foldername':'2022-5-30','img':'card.jpg','title':'站在用户的角度看微软'},
    {'foldername':'2022-6-1','img':'card.jpg','title':'python与js语法对比'},
]
// 倒序
DATA.reverse()
export {DATA, get_tmp}