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


//3.显示页码
for (var index = 0; index < imgs.length - 1; index++) {
    var div = document.createElement('div');
    get_scroll.appendChild(div);
    div.classList.add('pageControl');
    div.style.top ='80%';
    div.style.left = (s_width/2 + index * 20) - ((imgs.length-1)*10 + (imgs.length-1-1)*10)/2 + 'px';
}

//4.获取页 对应的元素
var pageControl = document.querySelectorAll('.pageControl');


//4.4 给node节点对象集合扩充一个方法 作用是初始化页码样式
pageControl.setPage = function(p){
    p = p - 1;
    for (var index = 0; index < this.length; index++) {
        this[index].style.backgroundColor = '';
    }
    this[p].style.backgroundColor = '#fff';
}

//4.2移动功能
function move(){
    for (var index = 0; index < imgs.length; index++) {
        imgs[index].style.left = (index - page + 1)*s_width + 'px';
    }
    pageControl.setPage(page);
}

//4.1 DOM级事件绑定
for (var index = 0; index < pageControl.length; index++) {
    //因要分区 每一个div 身份所有为div增加一个index属性
    pageControl[index].index = index;
    pageControl[index].onclick = function(e){
        //改变怕page
        page = e.target.index + 1;
        //移动
        move();
    };
}

var page = 1;
//4.5 初始化 page
pageControl.setPage(page);