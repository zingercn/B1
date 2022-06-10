class g_easy_music{
    __music_src = null
    constructor(music_src){
        this.__music_src = music_src
    }
    __create(music_src){
        const tmp = `
            <span id="g-easy-music-play">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                </svg>
            </span>
            <span id="g-easy-music-pause" style="display: none;">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
                </svg>
            </span>
            <audio id="g-easy-music-audio" src=${music_src}></audio>
            `
        const div = document.createElement('div')
            div.setAttribute('id','g-easy-music')
            div.style.position ='fixed'
            div.style.right = '10px'
            div.style.bottom = '10px'
            div.style.textAlign = 'right'
            div.innerHTML = tmp
        document.body.appendChild(div)
    }
    init(){
        this.__create(this.__music_src)
        document.querySelector('#g-easy-music-play').addEventListener('click',(e)=>{
            document.querySelector('#g-easy-music-play').style.display='none'
            document.querySelector('#g-easy-music-pause').style.display='inline-block'
            document.querySelector('#g-easy-music-audio').play()
        })
        document.querySelector('#g-easy-music-pause').addEventListener('click',(e)=>{
            document.querySelector('#g-easy-music-pause').style.display='none'
            document.querySelector('#g-easy-music-play').style.display='inline-block'
            document.querySelector('#g-easy-music-audio').pause()
        })
        document.querySelector('#g-easy-music-audio').addEventListener('ended',(e)=>{
            document.querySelector('#g-easy-music-play').style.display='inline-block'
            document.querySelector('#g-easy-music-pause').style.display='none'
        })
    }
}

export {g_easy_music}