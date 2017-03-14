var desW = 640;
var winW = document.documentElement.clientWidth;
document.documentElement.style.fontSize = winW / desW * 100 + 'px';
var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onTransitionEnd: function(swiper){
        var curIndex = swiper.activeIndex;//当前活动滑块的索引（也就是上一个滑块滑动结束后，到下一个滑块的索引）
        var slides = swiper.slides;//获得所有的滑块
        //要做的事情：通过当前活动滑块的索引找到对应的滑块，并给它增加相应的id名
        [].forEach.call(slides,function(item,index){
            item.id = "";//在给当前滑块增加id名之前，把所有的滑块的id名去掉
            if(index == curIndex) {
                //当前活动滑块是否是第一个或者最后一个
                switch (index){
                    case 0:
                        item.id = "page"+(slides.length-2);
                        break;
                    case slides.length-1:
                        item.id = "page1";
                        break;
                    default :
                        item.id= "page"+index;
                }

            }

        })

    }
})
var audio=document.querySelector('#audio');
var music=document.querySelector('#music');
setTimeout(function () {
    music.play();
    audio.style.display='block';
    audio.className='music1';
},1000)
audio.onclick=function () {
    if(music.paused){
        music.play();
       audio.className='music1';
    }else {
        music.pause();
        audio.className='';
    }
}
