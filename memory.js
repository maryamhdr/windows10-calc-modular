+ function (app) {
    var memoryItems = [],
        _glob = app.globals,
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

    function displayMemoryList() {
        if (!memoryItems.length) {
            app.emptyMemoryList();
        } else {
            app.initializeMemoryList();
            app.createMemoryList(memoryItems);
        }
    }

    function onMemoryClicked() {
        addMemoryItem(parseFloat(app.result()));
        displayMemoryList();
        _glob.txtResult = "";
    }

    function addMemoryItem(value) {
        const item = {
            id: memoryItems.length,
            value: value
        };
        memoryItems.unshift(item);
    }

    app.deleteMemoryItem =  function () {
        var id = this.parentNode.parentNode.id;
        id = id.includes('memoryItem1_') ? id.replace('memoryItem1_', '') : id.replace('memoryItem2_', '');
        id = parseInt(id);
        memoryItems = memoryItems.filter(item => item.id !== id);
        displayMemoryList();
    }

    app.incMemoryItem = function () {
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

    app.decMemoryItem = function () {
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
        _glob.txtResult = memoryItems[0].value;
        app.result(_glob.txtResult);
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