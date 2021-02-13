"use strict;"//严格模式
// 1.翻页功能实现
//1.1获取 滑动容器宽度
var get_scroll = document.querySelector("#scroll");
// clientwidth属性是专门用来获取当前元素在当前html页面中的css宽度
var s_width = get_scroll.clientWidth;

//2 设置图片的初始位置
var imgs = document.querySelectorAll('#scroll>img');
for (let index = 0; index < imgs.length; index++) {
    imgs[index].style.left = index * s_width + 'px';
}

//3 实现js滑动功能
//page 用于记录当前显示的第几页
var page = 0;
//3.2 图片移动
function move(){
    //根据当前page 去改变 每一个img的left
    for (var index = 0; index < imgs.length; index++) {
        //根据当前显示页，计算出没一张图片的位置
        imgs[index].style.left = (index - page)*sWidth + 'px';
    }
    // 要在移动中来定时 判断当前 是不是 最后一张
    setTimeout(function(){
        if(page == imgs.length - 1){
            page = 0;
            //再把所有的imgs的过渡取消
            //因为回到第一张不需要动画
            for (var index =0; index < imgs.length; index++){
                imgs[index].style.transition = 'none';
            }
            //把所有的图片回归到初始位置
            for (var index = 0; index < imgs.length; index++) {
                imgs[index].style.left = (index - page)*sWidth + 'px';
            }
            //回归之后 设置 动画过渡属性
            //如果不延迟 就会立刻赋值，导致刷新界面的时候就已经有了 过度属性 导致 在回来的 就看到动画了 
            setTimeout(function(){
                for (var index = 0; index < imgs.length; index++) {
                    imgs[index].style.transition = 'left 0.7s ease-in-out';
                }
            },100);
        }
    },700);//transition:left 0.7s ease-in-out;
}

//3.1定时器 只能按一个方向进行滚动
function moveLeft(){
    page++;
    if(page > imgs.length - 1 ){
        page = imgs.length - 1;
    }
    //控制 图片的移动
    move();
}

//4. 启动定时器
var timer = setInterval(moveLeft,3000);