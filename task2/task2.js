var form = document.createElement('form');

var inputRows = document.createElement('input');
        inputRows.type = "text";
        inputRows.id = "rowN";
        inputRows.placeholder="Введите количество строк";
        inputRows.style.marginBottom = '10px';
        inputRows.style.display = 'block';
        form.appendChild(inputRows);

var inputColumns = document.createElement('input');
        inputColumns.type = "text";
        inputColumns.id = "columnN";
        inputColumns.placeholder="Введите количество столбцов";
        inputColumns.style.marginBottom = '10px';
        inputColumns.style.display = 'block';
        form.appendChild(inputColumns);
        
var button = document.createElement('button');
        button.type = "button";
        button.style.display = 'block';
        button.innerText = "Создать таблицу";
        
form.appendChild(inputRows);
form.appendChild(inputColumns);
form.appendChild(button);
document.body.appendChild(form);

// Создание таблицы, форма скрывается
button.onclick = () => {
    form.hidden = true;
    createTable(
        document.getElementById('columnN').value,
        document.getElementById('rowN').value,
    );
    createFunctionContainer();
    form.reset();
};

function createTable(columnN, rowN) {
    let table = document.createElement('table');
    
    for (let i = 0; i < rowN; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < columnN; j++) {
            let td = newCell();
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function newCell() {
    let td = document.createElement('td');
    td.style.width = '100px';
    td.style.height = '25px';
    td.style.border = '1px solid black';
    td.appendChild(fillCell(td));
    return td;
}

function fillCell(td){
    
    td.innerHTML = '';
    let form = document.createElement('form');
    let  textarea = document.createElement('textarea');
    textarea.cols = 20;
    textarea.rows = 5;

    let   button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'block';
    button.innerText = 'Сохранить';

    // Замена формы на введенный текст пользователя
    button.onclick = function(){
        td.innerText = button.previousSibling.value;
        form.hidden = true;
    };

    form.append(textarea);
    form.append(button);
    return form;
}

// Контейнер для функций
function createFunctionContainer() 
{
    let container = document.createElement('div');
    container.className = 'funcContainer';
    container.append(changeBorderStyle());
    container.append(addCaption());
    container.append(deleteRow());
    container.append(magicChoice());
    container.append(deleteAll());
    document.body.appendChild(container);
}

function createFunction(funcTitle) 
{
    let div = document.createElement('div');
    let p = document.createElement('p');
    p.innerText = funcTitle;
    div.className = 'function';
    div.appendChild(p);
    return div;
}

//случайный выбор
function magicChoice() {
    let divRand = createFunction('Случайный выбор');

    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Случайный выбор';

    button.onclick = function()  {
        let td = magicCell();
        magicCellChanhge(td);
    };

    divRand.appendChild(button);
    return divRand;
}

function magicCell() {
    let rowN = document.querySelectorAll('tr');
    let rowID = Math.floor(Math.random() * (rowN.length));
    let columnID = Math.floor(Math.random() * (rowN[rowID].cells.length));
   
    return rowN[rowID].cells[columnID];
}

function magicCellChanhge(td) {
        td.style.backgroundColor = magicColorChoice();
        magicFSChoice(td);
}

function magicFSChoice(td) {
    let color = magicColorChoice();
    td.style.color = color;

    let fontS = Math.floor(10+ Math.random()*5) + 'pt';
    td.style.fontSize = fontS;

    if (td.childNodes[0]) {
        td.childNodes[0].childNodes.forEach((elem) => {
            elem.style.color = color;
            elem.style.fontSize = fontS;
        });
    }
}

function magicColorChoice() {
    var r=Math.floor(Math.random()*(256));
    var g=Math.floor(Math.random()*(256));
    var b=Math.floor(Math.random()*(256));
    var color='#' + r.toString(16) + g.toString(16) + b.toString(16);
    return color;
}

// Добавление заголовка
function addCaption() 
{
    let divCapt = createFunction('Добавить заголовок');
    let form = document.createElement('form');

    let inputCapt = document.createElement('input');
    inputCapt.type = 'text';
    inputCapt.style.marginRight = '10px'

    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Добавить заголовок';

    button.onclick = function(){
        let caption = document.createElement('caption');
        caption.innerText = inputCapt.value;
        document.querySelector('table').appendChild(caption);
    }
    form.append(inputCapt, button);
    divCapt.appendChild(form);
    return divCapt;
}

//удаление строки
function deleteRow() {
    let divRow = createFunction('Удалить строку');
    let form = document.createElement('form');
    
    let inputRowN = document.createElement('input');
    inputRowN.type = 'text';
    inputRowN.style.marginRight = '10px'

    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Удалить';

    button.onclick = function() {
        let rowsN = document.querySelectorAll('tr');
        if (rowsN.value < 1 || inputRowN.value > rowsN.length
            || inputRowN.value.match(/([^0-9])/g)) {
            alert('Строки с таким номером в таблице нет');
        } else {
            rowsN[inputRowN.value - 1].remove();
        }
    };

    form.append(inputRowN, button);
    divRow.appendChild(form);
    return divRow;
}


//удаление таблицы
function deleteAll() {
    let divAll = createFunction('Удалить');

    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Удалить таблицу';

    button.onclick = function() {
        form.hidden = false;
        document.querySelector('table').hidden = true;
        document.querySelector('div.funcContainer').hidden = true;

    };

    divAll.appendChild(button);
    return divAll;
}


//В блок с функциями добавить элемент “Изменить границы таблицы”

function changeBorderStyle() {
    let divBord = createFunction('Изменить границы таблицы');

    let form = document.createElement('form');
   
    
    let inputWidth = document.createElement('input');
    inputWidth.type = 'text';
    inputWidth.style.marginRight = '10px';

    let select = document.createElement('select');
    let option = document.createElement('option');
    option.innerText = 'Выберите стиль рамки';
    option.disabled = true;
    option.selected = true;
    select.style.marginRight = '10px'
    select.appendChild(option);
    

    let button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Применить';

   
    borders().forEach((option) => select.appendChild(option));

    inputWidth.oninput = () => {
        button.innerText = 'Применить стиль:'  + inputWidth.value + 'px  ';
        if ((select.value !== '') && (select.value !== 'Выберите стиль рамки')) {
            button.innerText += 'рамка ' + select.value;
        }
    };

    select.onchange = () => {
        if (inputWidth.value !== '') {
            button.innerText = button.innerText = 'Применить стиль: ' + inputWidth.value +  'px  ' +  'рамка ' + select.value;
        } else {
            button.innerText = 'Применить стиль: ' + 'рамка ' + select.value;
        }
    };

    button.onclick = function() {
        let tdQuery = document.querySelectorAll('td');
        tdQuery.forEach((td) =>
            td.style.border = `${inputWidth.value}px ${select.value}`
        );
    };

    form.append(select);
    form.append(inputWidth);
    form.append(button);
    divBord.appendChild(form);
    return divBord;
}

function borders() {
    let options = [];
    ['dotted', 'dashed', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'ridge'].forEach(
        (borderStyle) => {
            let option = document.createElement('option');
            option.innerText = borderStyle;
            options.push(option);
        }
    );
    return options;
}

