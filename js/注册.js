window.onload = function(){
    var shoujihao = document.getElementById("shoujihao");
    var warn = document.getElementById("warn");
    shoujihao.onblur = function(){
        if (!isNaN(shoujihao.value) && shoujihao.value.length==11) {
            warn.innerText = "输入合法";
        } else {
            warn.innerText = "输入不合法";
        }
    }
    var warn2 = document.getElementById("warn2");
    var yanzhengma = document.getElementById("yanzhengma");
    yanzhengma.addEventListener("blur",inputYanZhengMa,false);
    function inputYanZhengMa(){
        if (yanzhengma.value == 92794) {
            warn2.innerText = "输入正确";
        } else {
            warn2.innerText = "输入错误";
        }
    }
} 