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

//3 实现左右按钮
var leftBtn = document.createElement('div');
leftBtn.innerHTML = '《';
leftBtn.classList.add('arrow');
leftBtn.style.background = 'linear-gradient(to right,rgba(0,0,0,0,5),rgba(0,0,0,0))';
get_scroll.appendChild(leftBtn);


var rightBtn = document.createElement('div');
rightBtn.innerHTML = '》';
rightBtn.classList.add('arrow');
rightBtn.style.right = '0';
rightBtn.style.background = 'linear-gradient(to left,rgba(0,0,0,0,5),rgba(0,0,0,0))';
get_scroll.appendChild(rightBtn);

//4. 左右按钮实现翻页事件
//4.1实现向右移动
var page = 1;// 设置记录当前页码1代表第一页

//4.3实现移动功能
function move(){
    for (var index = 0; index < imgs.length; index++) {
        imgs[index].style.left = s_width*(index - page + 1)+ 'px';
    }
}

//4.2 实现向左移动
function moveLeft(){
    page++;
    if(page > imgs.length){
        page = imgs.length;
    }
    // 移动
    move();
}

//4.4绑定 Dom0事件
leftBtn.onclick = function(){
    moveLeft();
}

//实现向右移动

function moveRight(){
    page--;
    if(page < 1) {
        page = 1;
    }
    move();
}

rightBtn.onclick = function(){
    moveRight();
}