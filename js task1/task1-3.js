let formArray = [];
for (let i = 0; i < 15; i++) {
    let form = document.createElement('form');
    form.name = `fName${i+1}`;
    form.id = `fId${i+1}`;
    formArray.push(form);
    document.body.append(form);
}
let evemForms = formEven(formArray);
fillForm(formArray);

function formEven (formArray)
{
 document.write('Четные формы: <br\/>' );  
 for (let i = 0; i < 15; i++)
 {
     if( parseInt(formArray[i].id.slice(3, formArray[i].id.length ))  % 2 == 0){
        document.body.append(formArray[i].id);
        document.write('<br\/>');
     }
 }
}

function fillForm(formArray){
    for (let i = 0; i < 15 ; i++) {
        let inputTXT = document.createElement('input');
        inputTXT.type = "text";
        inputTXT.style.margin = "3px";
        inputTXT.placeholder="Логин";
        formArray[i].appendChild(inputTXT);

        let inputPSW = document.createElement('input');
        inputPSW.type = "password";
        inputPSW.placeholder="Пароль";
        inputPSW.style.margin = "3px";
        formArray[i].appendChild(inputPSW);

        let inputCheckBox = document.createElement('input');
        inputCheckBox.type = "checkbox";
        inputCheckBox.style.margin = "3px";
        formArray[i].appendChild(inputCheckBox);

        let button1 = document.createElement('button');
        button1.type = "button";
        button1.style.margin = "3px";
        button1.innerText = "Показать имя кнопки";
        button1.onclick = () => alert(button1.innerText);
        button1.style.backgroundColor = 'Gainsboro';
        button1.style.padding = '10px';
        button1.style.borderRadius = '10px';
        button1.style.border = '1px solid grey';
        let image1 = document.createElement('img');
        image1.src = "E:/html/task1/icons8-лошадь-20.png";
        button1.prepend(image1);
        button1.onmouseover = () => 
                    button1.style.backgroundColor = 'LightCyan';
        button1.onmouseleave = () => 
                    button1.style.backgroundColor = 'Gainsboro';
        formArray[i].appendChild(button1);

        let button2 = document.createElement('button');
        button2.type = "button";
        button2.style.margin = "3px";
        button2.innerText = "Принадлежность";
        button2.onclick = () => alert(button2.parentNode.id);
        button2.style.backgroundColor = 'Gainsboro';
        button2.style.padding = '10px';
        button2.style.borderRadius = '10px';
        button2.style.border = '1px solid grey';
        let image2 = document.createElement('img');
        image2.src = "E:/html/task1/icons8-карусель-20.png";
        button2.prepend(image2);
        button2.onmouseover = () => 
                    button2.style.backgroundColor = 'LightCyan';
        button2.onmouseleave = () => 
                    button2.style.backgroundColor = 'Gainsboro';
        formArray[i].appendChild(button2);

        let button3 = document.createElement('button');
        button3.type = "reset";
        button3.style.margin = "3px";
        button3.innerText = "Сброс";
        button3.style.backgroundColor = 'Gainsboro';
        button3.style.padding = '10px';
        button3.style.borderRadius = '10px';
        button3.style.border = '1px solid grey';
        let image3 = document.createElement('img');
        image3.src = "E:/html/task1/icons8-единорог-20.png";
        button3.prepend(image3);
        button3.onmouseover = () => 
                    button3.style.backgroundColor = 'LightCyan';
        button3.onmouseleave = () => 
                    button3.style.backgroundColor = 'Gainsboro';
        formArray[i].appendChild(button3);

        let button4 = document.createElement('button');
        button4.type = "button";
        button4.style.margin = "3px";
        button4.innerText = "Показать количество полей";
        button4.onclick = () => alert(`Количество полей равно ${button4.parentNode.childNodes.length}`);
        button4.style.backgroundColor = 'Gainsboro';
        button4.style.padding = '10px';
        button4.style.borderRadius = '10px';
        button4.style.border = '1px solid grey';
        let image4 = document.createElement('img');
        image4.src = "E:/html/task1/icons8-катание-на-пони-20.png";
        button4.prepend(image4);
        button4.onmouseover = () => 
                    button4.style.backgroundColor = 'LightCyan';
        button4.onmouseleave = () => 
                    button4.style.backgroundColor = 'Gainsboro';
        formArray[i].appendChild(button4);
        
    }      
}