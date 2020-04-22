//изменение оформления
$(document).ready(function(){
    $(".ppp").css("fontSize", "20px");
    $(".ppp").css("color", "red");
    $("a").css("fontSize", "20px");
    $("a").css("color", "red");
    $("body").css("background-color", "white");
    $("p, a").css("fontWeight", "bold");
    $("body").css("text-align","center");
    $("#fff").css("background-color", "lightBlue");
    $(".ccc").attr("disabled", "true"); 
    $(".ppp").append(".");
    $(".ppp").prepend("Задание: ");
//открытие ссылок 
    $("a").attr("target", "_blank");

//добавление для всех ссылок стрелку
    $("a").prepend("↑");

//удаление прежних настроек
    $(".bbb").click(function(){
        $("a").removeAttr("target");
        $(".ccc").prop("disabled", false);
        $(".sss").each(function () {
            $(this).text(function (index, text) {
                if (text.substr(0, 1) === '↑') {
                    return text.slice(1);
                }
            });
        });
    ;});


    //настройка анимации
    $(".but1").click(function(){
        $(".fOut").fadeOut("slow")
    })
    $(".but2").click(function () {
        $(".fTo").fadeTo("slow", "0.3");
    })
    $(".but3").click(function(){
        $(".fToggle").fadeToggle("slow")
    })
    $(".fIn").fadeOut("fast");
    $(".but4").click(function(){
        $(".fIn").fadeIn("slow")
    })
});

//изменение ссылок с http на https
$("a").each(function () {
    $(this).attr("href", function (value) {
    let protocol = value.substring(0, value.indexOf(':'));
    if (protocol === 'http') 
    {
        let href = value.substring(value.indexOf(':'), value.length);
        return protocol + 's' + href;
     }
    });
});
