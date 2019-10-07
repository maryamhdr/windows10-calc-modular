+ function (app) {
    var memoryItems = [],
        txtResult = app.globals.txtResult,
        recalled = app.globals.recalled,
        _elm = app.elements,
        _operations = {
            'mc': function () {
                onMemoryClearClicked();
            },
            'mr': function () {
                onMemoryRecallClicked();
            },
            'm-': function () {
                onMemoryMinesClicked();
            },
            'm+': function () {
                onMemoryPlusClicked();
            },
            'ms': function () {
                onMemoryClicked();
            }
        }

    app.mem = function (type) {
        var handler = _operations[type];
        if (!handler) return;
        handler();
    }

    function emptyMemoryList() {
        _elm.memoryList1.innerHTML = "<li>There's nothing saved in memory</li>";
        _elm.memoryList2.innerHTML = "<li>There's nothing saved in memory</li>";

        _elm.trashIcon1.style.display = "none";
        _elm.trashIcon2.style.display = "none";

        _elm.mcBtn.className += " disabled";
        _elm.mrBtn.className += " disabled";
        _elm.mBtn.className += " disabled";
        _elm.sortDownImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAB9UlEQVR4nO3avYoTYRhH8TPKaKGCvddgYyUWVkLuwJtQUmQiSbmWUZwUgjfhHUy/VmLhNdiLH4tKkhkbsV7XPO/Hcn5liucN/wOpApIkSZIkSZIkSZIkSZIkSZIkSZKkWjWRx/u+fzxN0zPgLnA98q0Av4CPwMuu695GPRIWoO/7p9M0vY66n1LTNE8Wi8WbkNsRR7fb7e1xHD8BNyLuZ/C9bds78/n867EPXzn2QYBxHB9wecYHuLnf7+9HHA4JcBmN4xjyaxESYLfbnQI/Im5ncnY4HN5FHA4JsF6vvwBdxO0cmqZZrlarbxG3r0YcBRiG4f1sNvsJPIp6I5GTruteRR0PCwAwDMNp5RFOuq57HvlAaACoOkL4+JAgAFQZIcn4kCgAVBUh2fiQMABUESHp+JA4ABQdIfn4kCEAFBkhy/iQKQAUFSHb+JAxABQRIev4kDkAZI2QfXwoIABkiVDE+FBIAEgaoZjxoaAAkCRCUeNDYQEgNEJx40OBASAkQpHjQ6EB4KgRih0fCg4AR4lQ9PhQeAD4rwjFjw8VBIALRahifKgkAPxThGrGh4oCwLkiVDU+VBYA/kb4DDwErv35+GyapuVyuXyR8atdSOi/oyNtNptbbdveA9jtdh+i/rcjSZIkSZIkSZIkSZIkSZIkqRK/Aatx6SzdM82mAAAAAElFTkSuQmCC";
    }

    function initializeMemoryList() {
        _elm.memoryList1.innerHTML = "";
        _elm.memoryList2.innerHTML = "";

        _elm.trashIcon1.style.display = "flex";
        _elm.trashIcon2.style.display = "flex";

        _elm.mcBtn.className = _elm.mcBtn.className.replace(" disabled", "");
        _elm.mrBtn.className = _elm.mrBtn.className.replace(" disabled", "");
        _elm.mBtn.className = _elm.mBtn.className.replace(" disabled", "");
        _elm.sortDownImg.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAAAAmJLR0QA/4ePzL8AAADuSURBVHja7dhNDgFREEXh2kBjR2Yk5qwBwdTQ/liOjvQMnRhI0Prn3XrvJeerDZw7LTMAAAAAAAAAAAAATVZ2scruoqvsbEtl/k6W/n5bVf7ESpcBVxtpBixc8uub5T5grhkwtptLfmmFZoDZxmXAWpVfO8rzT8p8/QR5vnaCS75uglu+ZoJrfvgJ7vlhJ0TJDzchWn6YCVHzh0+Inj9sQhL5/Sckk99vQlL53Sckl99tQpL57Sckm99uQtL5/yckn988IYv83xOyyf8+Iav8zwnZ5dcOr1dkafvYKX0VNn2e7E0FAAAAAAAAAMjUA8pY0AAlkHWaAAAAAElFTkSuQmCC";
    }

    function displayMemoryList() {
        if (!memoryItems.length) {
            emptyMemoryList();
        } else {
            initializeMemoryList();

            memoryItems.forEach(item => {
                const id1 = "memoryItem1_" + item.id;
                const id2 = 'memoryItem2_' + item.id;
                var value = item.value;

                const listItem1 = app.createElement('li', 'memory-item');
                const savedValue1 = app.createElement('div', 'saved-value');
                const savedValueControls1 = app.createElement('div', 'saved-value-controls');
                const btnDelete1 = app.createElement('button', 'control-btn');
                const btnIncrement1 = app.createElement('button', 'control-btn');
                const btnDecrement1 = app.createElement('button', 'control-btn');

                const listItem2 = app.createElement('li', 'memory-item');
                const savedValue2 = app.createElement('div', 'saved-value');
                const savedValueControls2 = app.createElement('div', 'saved-value-controls');
                const btnDelete2 = app.createElement('button', 'control-btn');
                const btnIncrement2 = app.createElement('button', 'control-btn');
                const btnDecrement2 = app.createElement('button', 'control-btn');

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
                btnIncrement1.onclick = incMemoryItem;
                btnDecrement1.onclick = decMemoryItem;

                btnDelete2.onclick = deleteMemoryItem;
                btnIncrement2.onclick = incMemoryItem;
                btnDecrement2.onclick = decMemoryItem;

                savedValueControls1.appendChild(btnDelete1);
                savedValueControls1.appendChild(btnIncrement1);
                savedValueControls1.appendChild(btnDecrement1);

                savedValueControls2.appendChild(btnDelete2);
                savedValueControls2.appendChild(btnIncrement2);
                savedValueControls2.appendChild(btnDecrement2);

                listItem1.id = id1;
                listItem2.id = id2;

                listItem1.appendChild(savedValue1);
                listItem1.appendChild(savedValueControls1);
                _elm.memoryList1.appendChild(listItem1);

                listItem2.appendChild(savedValue2);
                listItem2.appendChild(savedValueControls2);
                _elm.memoryList2.appendChild(listItem2);
            })
        }
    }

    function onMemoryClicked() {
        addMemoryItem(parseFloat(app.result()));
        displayMemoryList();
        txtResult = "";
    }

    function addMemoryItem(value) {
        const item = {
            id: memoryItems.length,
            value: value
        };
        memoryItems.unshift(item);
    }

    function deleteMemoryItem() {
        var id = this.parentNode.parentNode.id;
        id = id.includes('memoryItem1_') ? id.replace('memoryItem1_', '') : id.replace('memoryItem2_', '');
        id = parseInt(id);
        memoryItems = memoryItems.filter(item => item.id !== id);
        displayMemoryList();
    }

    function incMemoryItem() {
        const v = parseFloat(app.result());
        var id = this.parentNode.parentNode.id;
        id = id.includes('memoryItem1_') ? id.replace('memoryItem1_', '') : id.replace('memoryItem2_', '');
        id = parseInt(id);
        memoryItems = memoryItems.map(item => item.id === id ? {
            id: item.id,
            value: item.value + v
        } : item)
        displayMemoryList();
    }

    function decMemoryItem() {
        const v = parseFloat(app.result());
        var id = this.parentNode.parentNode.id;
        id = id.includes('memoryItem1_') ? id.replace('memoryItem1_', '') : id.replace('memoryItem2_', '');
        id = parseInt(id);
        memoryItems = memoryItems.map(item => item.id === id ? {
            id: item.id,
            value: item.value - v
        } : item)
        displayMemoryList();
    }

    function onMemoryClearClicked() {
        memoryItems = [];
        displayMemoryList();
    }

    function onMemoryRecallClicked() {
        txtResult = memoryItems[0].value;
        app.result(txtResult);
        recalled = true;
    }

    function onMemoryPlusClicked() {
        if (!memoryItems.length) {
            onMemoryClicked();
            return;
        }
        const v = parseFloat(app.result());
        var id = memoryItems.length - 1;
        memoryItems = memoryItems.map(item => item.id === id ? {
            id: item.id,
            value: item.value + v
        } : item)
        displayMemoryList();
    }

    function onMemoryMinesClicked() {
        if (!memoryItems.length) {
            onMemoryClicked();
            return;
        }
        const v = parseFloat(app.result());
        var id = memoryItems.length - 1;
        memoryItems = memoryItems.map(item => item.id === id ? {
            id: item.id,
            value: item.value - v
        } : item)
        displayMemoryList();
    }
}(app);