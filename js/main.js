function change() {
    var dollar = document.getElementById('dollar').value;
    var result = document.getElementById('result');
    var rashFord = document.getElementById('rashFord');
    var video = document.querySelector('.rashford');
    var x = 15
    video.play();
    rashFord.style.display = 'block';

    if(dollar == "") {
        result.innerHTML = "ادخل المبلغ المطلوب";
        rashFord.style.display = 'none';
        video.pause();
        return false;
    }
    else if(isNaN(dollar)) {
        result.innerHTML = "المبلغ المطلوب يجب أن يكون رقم";
        rashFord.style.display = 'none'; 
        video.pause();
        return false;
    }
    else if (dollar <= 0) {
        result.innerHTML = "المبلغ المطلوب يجب أن يكون أكبر من 0";
        rashFord.style.display = 'none'; 
        video.pause();
        return false;
    }
    else if (dollar == 0) {
        result.innerHTML = "ادخل رقم اخر غير الصفر";
        rashFord.style.display = 'none'; 
        video.pause();
        return false;
    }
    else {
        result.innerHTML = dollar *50 ;
        result.style.marginTop = "120px";
        result.style.color = "#fff";
        result.style.fontSize = "22px";
        result.style.backgroundColor = "#f4180058";
        result.style.border = "solid 2px #09addfbe";
        result.style.boxShadow = "0 0 10px #00baf3b1";
        result.style.display = "block";
        result.style.padding = "7px 20px";
        result.style.borderRadius = "10px";
        
        titel.innerHTML = "😂 قولتلك بلاش , انا مش برشلوني اصلا لكن بحب استفز جماهير اسبانيا عموما ";
        titel.style.marginTop = "-25px";
        titel.style.fontFamily = "Cairo, sans-serif";
        titel.style.color = "#fff";
        titel.style.fontSize = "24px";
        rashFord.style.display = 'block';
        video.play();
        return false;
    }
}
