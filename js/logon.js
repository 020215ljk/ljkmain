var i = 3;
function denglu(accunt, password) {
    // var result;
    if ((accunt == "peter") && (password == "123")) {
        window.location.href = './index.html';
        // result = true;
        // break;
    } else {
        i -= 1;//i每次减1
        document.getElementById('hint').innerHTML = '账号或密码错误,还剩' + i + '次机会';
            
        if (i <= 0) {//如果i<=1执行下列语句
            document.getElementById('hint').innerHTML = '3次登陆失败';
        }
        // result = false;
        // i -= 1;
        // document.getElementById('hint').innerHTML = '账号或密码错误,还剩'+i+'次机会';
    }
}

    // return result;


