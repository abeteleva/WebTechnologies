let anchorArray = [];
for (let i = 0; i < 7; i++) {
    let anchor = document.createElement('a');
    switch (true) {
        case (i == 0):
            anchor.href = url1;
            anchor.innerText = 'Articles';
            anchor.id = 1;
        break;
        case (i == 1):
            anchor.href = url3;
            anchor.innerText = 'VK';
            anchor.id = 3;
        break;
        case (i == 2):
            anchor.href = url2;
            anchor.innerText = 'Translator';
            anchor.id = 2;
        break;
        case (i == 3):
            anchor.href = url1;
            anchor.innerText = 'Articles';
            anchor.id = 1;
        break;
        case (i == 4):
            anchor.href = url1;
            anchor.innerText = 'Articles';
            anchor.id = 1;
        break;
        case (i == 5):
            anchor.href = url2;
            anchor.innerText = 'Translator';
            anchor.id = 2;
        break;
        case (i == 6):
            anchor.href = url2;
            anchor.innerText = 'Translator';
            anchor.id = 2;
        break;
    }
    document.body.append(anchor);
    document.write('<br\/>')
}

/*let table = document.createElement('table');
table.border = '1';

anchors.forEach((anchor, index) => {
    if (!anchors.slice(0, index).some((nextAnchor) => anchor.innerText === nextAnchor.innerText)) {
    let row = document.createElement('tr');
    let text = document.createElement('td');
    let count = document.createElement('td');
    let href = document.createElement('td');
    text.innerText = anchor.innerText;
    count.innerText = anchors.filter((anchorInner) => anchor.innerText == anchorInner.innerText).length;
    href.innerText = anchor.href;
    row.appendChild(text);
    row.appendChild(count);
    row.appendChild(href);
    table.appendChild(row);
    }
});
document.body.append(table);*/