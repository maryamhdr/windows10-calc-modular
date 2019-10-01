+ function (app) {
    var txtResult = "",
        txtExpression = "",
        temp = "",
        lastResult = 0,
        lastOperator = "+",
        sqrtAcc = 0,
        sqrAcc = 0,
        cubeAcc = 0,
        divideAcc = 0,
        _elm = app.elements,
        _operations = {
            'operand': onOperandClicked,
            'operator': onOperatorClicked,
            'result': onEqualClicked,
            'ce': onCEClicked,
            'c': onClearAllClicked,
            'backspace': onBackspaceClicked
        }

        app.calc = function (type, value) {
            var handler = _operations[type];
            if(!handler) return;
            handler(value);
        }

        function onOperandClicked (value) {
            console.log(value)
        }

        function onOperatorClicked (value) {
            console.log(value)
        }

        function onEqualBtnClicked () {

        }

        function onCEClicked () {

        }

        function onClearAllClicked () {

        }

        function onBackspaceClicked () {
            
        }

}(app);