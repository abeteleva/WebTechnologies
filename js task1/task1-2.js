let url1 = "https://cyberleninka.ru/article/n/algoritm-depersonalizatsii-personalnyh-dannyh";
let url2 = "https://translate.google.ru";
let url3 = "https://vk.com/doc222295150_536791170?hash=99b8453e9803484b13&dl=ee6e12236c407e9a47"
let url4 = "https://lh5.googleusercontent.com/proxy/Ty0zETq3MWdfDbJ6BicQgsUrtDyZyjV--99-pE0Dh9dGAwyFL6dIFOe7c1G3qCTF_DZAfafd8N-LcOs-Y_g6MA"
let anchor1 = createAnchor(url3);
let anchor2 = createAnchor(url2);
let anchor3 = createAnchor(url1);
let link1 = createLink(url1);
let picture = createIMG(url4);


document.write('Количество анкоров: ' + document.body.getElementsByTagName('a').length + '<br\/>');
document.write('Количество ссылок: ', document.getElementsByTagName('link').length + '<br \/>');
document.write('Количество изображений: ', document.getElementsByTagName('img').length + '<br \/>');
//document.write(document.body.getElementsByTagName('a').innerText + '<br \/>')
document.write('Высота первого изображения: ' + document.getElementsByTagName('img').item(0).style.height + '<br\/>');
document.write('Максимальная высота изображения: ' + document.getElementsByTagName('img').item(4).style.height + '<br\/>');
var sumHeight = parseInt(document.getElementsByTagName('img').item(0).style.height.slice(0,-2)) + parseInt(document.getElementsByTagName('img').item(1).style.height.slice(0,-2)) + parseInt(document.getElementsByTagName('img').item(2).style.height.slice(0,-2)) + parseInt(document.getElementsByTagName('img').item(3).style.height.slice(0,-2)) + parseInt(document.getElementsByTagName('img').item(4).style.height.slice(0,-2));
document.write('Cуммарная высота: ' + sumHeight + '<br \/>');

function createAnchor(href) {
    var x = document.createElement('a');
    var Link = document.createTextNode("Link");
    x.setAttribute("href", href);
    x.appendChild(Link);
    document.body.appendChild(x);
    document.write('<br\/>')
  }

  function createLink(href) {
    var x = document.createElement('link');
    var Link = document.createTextNode("Link");
    x.setAttribute("href", href);
    x.appendChild(Link);
    document.body.appendChild(x);
    document.write('<br\/>')
  }

function createIMG (href){
    for (let i = 1; i < 6; i++){
        var x = document.createElement('img');
        x.src = (href);
        x.id = `id ${i+1}`;
        x.style.height = 50 + i * 35 + 'px';
        //x.style.length = 30 + i * 10 + 'px';
        document.body.append(x);
      }
      document.write('<br\/>');
}
