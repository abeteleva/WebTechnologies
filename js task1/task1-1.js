//#1 document.write, URL, строки

var sentence = String('Das ist sehr gut');
document.write(sentence + '<br\/>');
document.write('Количество символов: ' + sentence.length + '<br\/>');
document.write('Количество слов: ' + sentence.split(' ').length + '<br\/>');
var letter = sentence.length-(sentence.split(' ').length-1);
document.write('Количество букв: ' + letter + '<br\/>');
//document.write('<br\/');

let hrefDocument = document.location.href;
let hrefInfoDocument = getInformation(hrefDocument);
document.write('Информация о документе: <br\/>');
document.write(hrefDocument, ' - путь к файлу; ', hrefInfoDocument.protocol, ' - протокол', '<br\/>');

let hrefWeb = "https://cyberleninka.ru";
let hrefInfoWeb = getInformation(hrefWeb);
document.write('Информация о сайте: <br\/>');
document.write(hrefInfoWeb.extention, ' - расширение; ', hrefInfoWeb.protocol, ' - протокол', '<br\/>');

function getInformation(href) {
    let response = {
        protocol: href.substring(0, href.indexOf(':')),
        extention: href.substring(href.lastIndexOf('.') + 1, href.length)
    };
    return response}

let hrefQP = "https://translate.google.ru/#view=home&op=translate&sl=auto&tl=de";
//console.log(getParameters(hrefQP));

/*function getParameters(href) {
    let result = {};
    href.substring(href.indexOf('?') + 1, href.length).split('&')
    .forEach(param => {
        const paramKeyValue = param.split('=');
        queryParams[paramKeyValue[0]] = paramKeyValue[1];
    });
    return result}*/

