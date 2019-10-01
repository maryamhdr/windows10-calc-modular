function storeInMemory() {
    if (memoryItmId === 0) {
        memoryList1.innerHTML = "";
        trashIcon1.style.display = "flex";
        memoryList2.innerHTML = "";
        trashIcon2.style.display = "flex";

        mcBtn.className = mcBtn.className.replace(" disabled", "");
        mrBtn.className = mrBtn.className.replace(" disabled", "");
        mBtn.className = mBtn.className.replace(" disabled", "");
        sortDownImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAAAmJLR0QA/4ePzL8AAADuSURBVHja7dhNDgFREEXh2kBjR2Yk5qwBwdTQ/liOjvQMnRhI0Prn3XrvJeerDZw7LTMAAAAAAAAAAAAATVZ2scruoqvsbEtl/k6W/n5bVf7ESpcBVxtpBixc8uub5T5grhkwtptLfmmFZoDZxmXAWpVfO8rzT8p8/QR5vnaCS75uglu+ZoJrfvgJ7vlhJ0TJDzchWn6YCVHzh0+Inj9sQhL5/Sckk99vQlL53Sckl99tQpL57Sckm99uQtL5/yckn988IYv83xOyyf8+Iav8zwnZ5dcOr1dkafvYKX0VNn2e7E0FAAAAAAAAAMjUA8pY0AAlkHWaAAAAAElFTkSuQmCC";
    }

    var id1 = "item1_" + memoryItmId;
    var id2 = "item2_" + memoryItmId;

    var value = parseFloat(result.textContent);

    var listItem1 = document.createElement("li");
    var savedValue1 = document.createElement("div");
    var savedValueControls1 = document.createElement("div");
    var btnDelete1 = document.createElement("button");
    var btnIncrement1 = document.createElement("button");
    var btnDecrement1 = document.createElement("button");

    var listItem2 = document.createElement("li");
    var savedValue2 = document.createElement("div");
    var savedValueControls2 = document.createElement("div");
    var btnDelete2 = document.createElement("button");
    var btnIncrement2 = document.createElement("button");
    var btnDecrement2 = document.createElement("button");


    listItem1.className = "memory-item";
    savedValue1.className = "saved-value";
    savedValueControls1.className = "saved-value-controls";
    btnDecrement1.className = "control-btn";
    btnIncrement1.className = "control-btn";
    btnDelete1.className = "control-btn";

    listItem2.className = "memory-item";
    savedValue2.className = "saved-value";
    savedValueControls2.className = "saved-value-controls";
    btnDecrement2.className = "control-btn";
    btnIncrement2.className = "control-btn";
    btnDelete2.className = "control-btn";


    savedValue1.textContent = value;
    btnDelete1.textContent = "MC";
    btnIncrement1.textContent = "M+";
    btnDecrement1.textContent = "M-";
    listItem1.value = value;

    savedValue2.textContent = value;
    btnDelete2.textContent = "MC";
    btnIncrement2.textContent = "M+";
    btnDecrement2.textContent = "M-";
    listItem2.value = value;


    btnDelete1.onclick = deleteMemoryItem;
    btnIncrement1.onclick = incremetMemoryItem;
    btnDecrement1.onclick = decrementMemoryItem;

    btnDelete2.onclick = deleteMemoryItem;
    btnIncrement2.onclick = incremetMemoryItem;
    btnDecrement2.onclick = decrementMemoryItem;


    savedValueControls1.appendChild(btnDelete1);
    savedValueControls1.appendChild(btnIncrement1);
    savedValueControls1.appendChild(btnDecrement1);

    savedValueControls2.appendChild(btnDelete2);
    savedValueControls2.appendChild(btnIncrement2);
    savedValueControls2.appendChild(btnDecrement2);

    var lastChild1 = memoryList1.firstChild;
    var lastChild2 = memoryList2.firstChild;

    listItem1.appendChild(savedValue1);
    listItem1.appendChild(savedValueControls1);
    memoryList1.insertBefore(listItem1, lastChild1);

    listItem2.appendChild(savedValue2);
    listItem2.appendChild(savedValueControls2);
    memoryList2.insertBefore(listItem2, lastChild2);


    listItem1.id = id1;
    listItem2.id = id2;

    memoryItmId++;
    txtResult = "";
}


function deleteMemoryItem() {
    const id1 = this.parentNode.parentNode.id;
    const id2 = id1.replace("item1_", "item2_");

    var element1 = getElement(id1);
    var element2 = getElement(id2);

    element1.parentNode.removeChild(element1);
    element2.parentNode.removeChild(element2);

    if (!memoryList1.hasChildNodes()) {
        memoryList1.innerHTML = "<li>There's nothing saved in memory</li>";
        trashIcon1.style.display = "none";
        memoryItmId = 0;

        mcBtn.className += " disabled";
        mrBtn.className += " disabled";
        mBtn.className += " disabled";
        sortDownImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB9UlEQVR4nO3avYoTYRhH8TPKaKGCvddgYyUWVkLuwJtQUmQiSbmWUZwUgjfhHUy/VmLhNdiLH4tKkhkbsV7XPO/Hcn5liucN/wOpApIkSZIkSZIkSZIkSZIkSZIkSZKkWjWRx/u+fzxN0zPgLnA98q0Av4CPwMuu695GPRIWoO/7p9M0vY66n1LTNE8Wi8WbkNsRR7fb7e1xHD8BNyLuZ/C9bds78/n867EPXzn2QYBxHB9wecYHuLnf7+9HHA4JcBmN4xjyaxESYLfbnQI/Im5ncnY4HN5FHA4JsF6vvwBdxO0cmqZZrlarbxG3r0YcBRiG4f1sNvsJPIp6I5GTruteRR0PCwAwDMNp5RFOuq57HvlAaACoOkL4+JAgAFQZIcn4kCgAVBUh2fiQMABUESHp+JA4ABQdIfn4kCEAFBkhy/iQKQAUFSHb+JAxABQRIev4kDkAZI2QfXwoIABkiVDE+FBIAEgaoZjxoaAAkCRCUeNDYQEgNEJx40OBASAkQpHjQ6EB4KgRih0fCg4AR4lQ9PhQeAD4rwjFjw8VBIALRahifKgkAPxThGrGh4oCwLkiVDU+VBYA/kb4DDwErv35+GyapuVyuXyR8atdSOi/oyNtNptbbdveA9jtdh+i/rcjSZIkSZIkSZIkSZIkSZIkqRK/Aatx6SzdM82mAAAAAElFTkSuQmCC";
    }

    if (!memoryList2.hasChildNodes()) {
        memoryList2.innerHTML = "<li>There's nothing saved in memory</li>";
        trashIcon2.style.display = "none";
        memoryItmId = 0;

        mcBtn.className += " disabled";
        mrBtn.className += " disabled";
        mBtn.className += " disabled";
        sortDownImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB9UlEQVR4nO3avYoTYRhH8TPKaKGCvddgYyUWVkLuwJtQUmQiSbmWUZwUgjfhHUy/VmLhNdiLH4tKkhkbsV7XPO/Hcn5liucN/wOpApIkSZIkSZIkSZIkSZIkSZIkSZKkWjWRx/u+fzxN0zPgLnA98q0Av4CPwMuu695GPRIWoO/7p9M0vY66n1LTNE8Wi8WbkNsRR7fb7e1xHD8BNyLuZ/C9bds78/n867EPXzn2QYBxHB9wecYHuLnf7+9HHA4JcBmN4xjyaxESYLfbnQI/Im5ncnY4HN5FHA4JsF6vvwBdxO0cmqZZrlarbxG3r0YcBRiG4f1sNvsJPIp6I5GTruteRR0PCwAwDMNp5RFOuq57HvlAaACoOkL4+JAgAFQZIcn4kCgAVBUh2fiQMABUESHp+JA4ABQdIfn4kCEAFBkhy/iQKQAUFSHb+JAxABQRIev4kDkAZI2QfXwoIABkiVDE+FBIAEgaoZjxoaAAkCRCUeNDYQEgNEJx40OBASAkQpHjQ6EB4KgRih0fCg4AR4lQ9PhQeAD4rwjFjw8VBIALRahifKgkAPxThGrGh4oCwLkiVDU+VBYA/kb4DDwErv35+GyapuVyuXyR8atdSOi/oyNtNptbbdveA9jtdh+i/rcjSZIkSZIkSZIkSZIkSZIkqRK/Aatx6SzdM82mAAAAAElFTkSuQmCC";
    }
}


function incremetMemoryItem() {
    const id1 = this.parentNode.parentNode.id;
    const id2 = id1.replace("item1_", "item2_");

    var element1 = getElement(id1).childNodes[0];
    var element2 = getElement(id2).childNodes[0];

    const value = parseFloat(result.textContent);

    var result1 = parseFloat(element1.textContent);
    var result2 = parseFloat(element2.textContent);

    result1 += value;
    result2 += value;

    element1.textContent = result1;
    element2.textContent = result2;
}

function decrementMemoryItem() {
    const id1 = this.parentNode.parentNode.id;
    const id2 = id1.replace("item1_", "item2_");

    var element1 = getElement(id1).childNodes[0];
    var element2 = getElement(id2).childNodes[0];

    const value = parseFloat(result.textContent);

    var result1 = parseFloat(element1.textContent);
    var result2 = parseFloat(element2.textContent);

    result1 -= value;
    result2 -= value;

    element1.textContent = result1;
    element2.textContent = result2;
}

function memoryTrashFunct() {
    memoryList1.innerHTML = "<li>There's nothing saved in memory</li>";
    memoryList2.innerHTML = "<li style='margin-top: 12px'>There's nothing saved in memory</li>";

    trashIcon1.style.display = "none";
    trashIcon2.style.display = "none";

    memoryItmId = 0;

    mcBtn.className += " disabled";
    mrBtn.className += " disabled";
    mBtn.className += " disabled";

    sortDownImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB9UlEQVR4nO3avYoTYRhH8TPKaKGCvddgYyUWVkLuwJtQUmQiSbmWUZwUgjfhHUy/VmLhNdiLH4tKkhkbsV7XPO/Hcn5liucN/wOpApIkSZIkSZIkSZIkSZIkSZIkSZKkWjWRx/u+fzxN0zPgLnA98q0Av4CPwMuu695GPRIWoO/7p9M0vY66n1LTNE8Wi8WbkNsRR7fb7e1xHD8BNyLuZ/C9bds78/n867EPXzn2QYBxHB9wecYHuLnf7+9HHA4JcBmN4xjyaxESYLfbnQI/Im5ncnY4HN5FHA4JsF6vvwBdxO0cmqZZrlarbxG3r0YcBRiG4f1sNvsJPIp6I5GTruteRR0PCwAwDMNp5RFOuq57HvlAaACoOkL4+JAgAFQZIcn4kCgAVBUh2fiQMABUESHp+JA4ABQdIfn4kCEAFBkhy/iQKQAUFSHb+JAxABQRIev4kDkAZI2QfXwoIABkiVDE+FBIAEgaoZjxoaAAkCRCUeNDYQEgNEJx40OBASAkQpHjQ6EB4KgRih0fCg4AR4lQ9PhQeAD4rwjFjw8VBIALRahifKgkAPxThGrGh4oCwLkiVDU+VBYA/kb4DDwErv35+GyapuVyuXyR8atdSOi/oyNtNptbbdveA9jtdh+i/rcjSZIkSZIkSZIkSZIkSZIkqRK/Aatx6SzdM82mAAAAAElFTkSuQmCC";
}

function memoryRecall() {
    const id = memoryList1.firstChild.id;
    txtResult = getElement(id).childNodes[0].textContent;
    result.textContent = txtResult;
    recalled = true;
}

function memoryAdd() {
    if (memoryItmId === 0) {
        storeInMemory();
        return;
    }

    const id1 = memoryList1.firstChild.id;
    const id2 = memoryList2.firstChild.id;

    var element1 = getElement(id1).childNodes[0];
    var element2 = getElement(id2).childNodes[0];

    const value = parseFloat(result.textContent);

    var result1 = parseFloat(element1.textContent);
    var result2 = parseFloat(element2.textContent);

    result1 += value;
    result2 += value;

    element1.textContent = result1;
    element2.textContent = result2;
}

function memorySub() {
    if (memoryItmId === 0) {
        storeInMemory();
        return;
    }

    const id1 = memoryList1.firstChild.id;
    const id2 = memoryList2.firstChild.id;

    var element1 = getElement(id1).childNodes[0];
    var element2 = getElement(id2).childNodes[0];

    const value = parseFloat(result.textContent);

    var result1 = parseFloat(element1.textContent);
    var result2 = parseFloat(element2.textContent);

    result1 -= value;
    result2 -= value;

    element1.textContent = result1;
    element2.textContent = result2;
}