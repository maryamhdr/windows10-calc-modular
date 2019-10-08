+ function (app) {
    var historyItems = [],
        _glob = app.globals,
        _operations = {
            'hc': function () {
                onHistoryClearClicked();
            },
            'ha': function () {
                onHistoryAddClicked();
            }
        }

    app.his = function (type) {
        var handler = _operations[type];
        if (!handler) return;
        handler();
    }

    function displayHistoryList() {
        if (!historyItems.length) {
            app.emptyHistoryList();
        } else {
            app.initializeHistoryList();
            app.createHistoryList(historyItems);
        }
    }

    function onHistoryClearClicked() {
        historyItems = [];
        displayHistoryList();
    }

    function onHistoryAddClicked() {
        addHistoryItem(app.expression() + " =", app.result());
        displayHistoryList();
    }

    function addHistoryItem(exp, res) {
        const item = {
            id: historyItems.length,
            expression: exp,
            result: res
        };
        historyItems.unshift(item);
    }

    app.onHistoryItemClicked = function () {
        var id = this.id;
        id = id.includes('historyItem1_') ? id.replace('historyItem1_', '') : id.replace('historyItem2_', '');
        id = parseInt(id);
        historyItems.map(item => {
            if (item.id === id) {
                app.expression(item.expression.substr(0, item.expression.length - 2));
                app.result(item.result);
                _glob.txtExpression = item.result;
                _glob.lastResult = parseFloat(item.result);
                _glob.txtResult = "";
                _glob.recalled = true;
            }
        })
    }

}(app);