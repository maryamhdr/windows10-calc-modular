+ function (app) {
    var temp = "",
        lastOperator = "+",
        sqrtAcc = 0,
        sqrAcc = 0,
        cubeAcc = 0,
        divideAcc = 0,
        specSymbol = false,
        _glob = app.globals,
        _operations = {
            'operand': onOperandClicked,
            'operator': onOperatorClicked,
            'result': onEqualClicked,
            'ce': onCEClicked,
            'c': onClearAllClicked,
            'backspace': onBackspaceClicked
        };

    app.calc = function (type, value) {
        var handler = _operations[type];
        if (!handler) return;
        handler(value);
    }

    function isRecalled() {
        let a = app.expression().lastIndexOf("+");
        let b = app.expression().lastIndexOf("-");
        let c = app.expression().lastIndexOf("×");
        let d = app.expression().lastIndexOf("÷");
        let max = Math.max(a, b, c, d);
        let str = app.expression().substr(max + 2, app.expression().length - 1);
        app.expression(app.expression().substr(0, max + 2));
        _glob.txtExpression = app.expression().substr(0, max + 2);
        _glob.recalled = false;
    }

    function onOperandClicked(value) {
        if (_glob.recalled) {
            isRecalled();
        };

        if (!_glob.txtResult && !_glob.txtExpression &&
            value === "0") return;

        if (value === "." && _glob.txtResult.includes(".")) return;

        if (value === "." && !_glob.txtResult) {
            _glob.txtResult = "0";
        }

        _glob.txtResult += value;
        app.result(_glob.txtResult);
        _glob.lastResult = parseFloat(_glob.txtResult);
    }

    function onOperatorClicked(value) {

        var action;

        _glob.txtResult = !_glob.txtResult.NaN ? _glob.txtResult.toString() : _glob.txtResult;

        if (!_glob.txtExpression && !_glob.txtResult) {
            if (value !== "√" && value !== "1/") return;
        }

        if (_glob.txtResult.charAt(_glob.txtResult.length - 1) === ".") {
            _glob.txtResult = _glob.txtResult.substr(0, _glob.txtResult.length - 1);
        }

        if (value === "√" && app.result().includes("-")) {
            onClearAllClicked("Invalid input");
            return;
        }

        if (value === "1/" && app.result() === "0") {
            onClearAllClicked("Cannot divide by zero");
            return;
        }

        switch (value) {
            case "±":
                action = onPlusMinesClicked;
                break;
            case "√":
            case "sqr":
            case "cube":
            case "1/":
                action = onSpecOperatorClicked;
                break;
            case "%":
                action = onPercentageClicked;
                break;
            default:
                action = onNormalClicked;
                break;
        }

        action(value);
        return;
    }

    function onPlusMinesClicked() {
        if (_glob.recalled) isRecalled();
        _glob.txtResult = app.result().includes("-") ?
            app.result().replace("-", "") :
            "-" + app.result();
        app.result(_glob.txtResult);
        return;
    }

    function onPercentageClicked() {
        let value = eval(_glob.txtExpression.substr(0, _glob.txtExpression.length - 1));
        if (!value) {
            app.expression('');
            app.result('0');
            _glob.txtResult = "";
            _glob.txtExpression = "";
            _glob.lastResult = 0;
            return;
        }
        let percentage = parseFloat(app.result()) / 100;
        value = (value * percentage);
        _glob.txtResult = value;
        app.result(_glob.txtResult);
        _glob.lastResult = parseFloat(_glob.txtResult);
    }

    function checkIndexOfSpecOperand() {
        if (_glob.txtResult.indexOf('cube') === 0 ||
            _glob.txtResult.indexOf('sqr') === 0 ||
            _glob.txtResult.indexOf('1/') === 0 ||
            _glob.txtResult.indexOf("√") === 0) return true;
        else return false;
    }

    function includesSpecOperand(text) {
        if (text.includes("sqr") ||
            text.includes("cube") ||
            text.includes("1/") ||
            text.includes("√")) return true;
        else return false;
    }

    function checkTheEndOfExp() {
        if (_glob.txtExpression.charAt(_glob.txtExpression.length - 1) === "+" ||
            _glob.txtExpression.charAt(_glob.txtExpression.length - 1) === "-" ||
            _glob.txtExpression.charAt(_glob.txtExpression.length - 1) === "÷" ||
            _glob.txtExpression.charAt(_glob.txtExpression.length - 1) === "×") {
            return true;
        } else return false;
    }

    function computeTemp(v) {
        if (checkIndexOfSpecOperand()) {
            switch (v) {
                case "√":
                    temp = `Math.sqrt(${temp})`;
                    break;
                case "sqr":
                    temp = `Math.pow(${temp},2)`;
                    break;
                case "cube":
                    temp = `Math.pow(${temp},3)`;
                    break;
                case "1/":
                    temp = `1/(${temp})`;
                    break;
            }
            _glob.txtResult = `${v}(${_glob.txtResult})`;
        } else {
            switch (v) {
                case "√":
                    temp = `Math.sqrt(${app.result()})`;
                    break;
                case "sqr":
                    temp = `Math.pow(${app.result()},2)`;
                    break;
                case "cube":
                    temp = `Math.pow(${app.result()},3)`;
                    break;
                case "1/":
                    temp = `1/(${app.result()})`;
                    break;
            }
            _glob.txtResult = `${v}(${app.result()})`;
        }
    }

    function evaluate(value) {
        app.result(eval(value));
    }

    function computeAccurances() {
        divideAcc = (_glob.txtResult.match(/\//g) || []).length;
        cubeAcc = (_glob.txtResult.match(/cube/g) || []).length;
        sqrAcc = (_glob.txtResult.match(/sqr/g) || []).length;
        sqrtAcc = (_glob.txtResult.match(/√/g) || []).length;
    }

    function onSpecOperatorClicked(value) {
        specSymbol = true;
        if (_glob.recalled) isRecalled();
        computeTemp(value);
        evaluate(temp);

        if (sqrtAcc + sqrAcc + divideAcc + cubeAcc === 0) {
            app.expression(app.expression() + _glob.txtResult + " ");
            computeAccurances();
            return;
        }

        if (includesSpecOperand(app.expression())) {
            let max = app.expression().lastIndexOf("(");
            app.expression(app.expression().substr(0, max + 1 - (cubeAcc * 5 + sqrAcc * 4 + sqrtAcc * 2 + divideAcc * 3)));
        }

        computeAccurances();
        app.expression(app.expression() + _glob.txtResult + " ");
        return;
    }

    function computeLastOpr(v) {
        switch (v) {
            case "+":
            case "-":
                lastOperator = v;
                break;
            case "÷":
                lastOperator = "/";
                break;
            case "×":
                lastOperator = "*";
                break;
        }
    }

    function resetAccurance() {
        divideAcc = 0;
        cubeAcc = 0;
        sqrAcc = 0;
        sqrtAcc = 0;
    }

    function replaceOpr() {
        _glob.txtExpression = _glob.txtExpression.replace("÷", "/");
        _glob.txtExpression = _glob.txtExpression.replace("×", "*");
    }

    function onNormalClicked(value) {
        if (_glob.recalled) _glob.recalled = false;
        computeLastOpr(value);
        resetAccurance();

        if (specSymbol) {
            _glob.txtExpression += temp;
            temp = "";
            specSymbol = false;
        } else {
            _glob.txtExpression += _glob.txtResult;
        }

        if (checkTheEndOfExp()) {
            _glob.txtExpression = _glob.txtExpression.substr(0, _glob.txtExpression.length - 1) + value;
            app.expression(app.expression().substr(0, app.expression().length - 2) + value + " ");
            return;
        }

        replaceOpr();

        _glob.lastResult = eval(_glob.txtExpression);
        _glob.txtExpression = _glob.lastResult + value;

        app.result(_glob.lastResult);
        includesSpecOperand(_glob.txtResult) ? app.expression(app.expression() + value + " ") : app.expression(app.expression() + _glob.txtResult + " " + value + " ");
        _glob.txtResult = "";
    }

    function computeOpr() {
        let opr;
        switch (lastOperator) {
            case "*":
                opr = "×";
                break;
            case "/":
                opr = "÷";
                break;
            case "+":
            case "-":
                opr = lastOperator;
                break;
        }
        return opr;
    }

    function onEqualFirstState() {
        let operator = computeOpr();
        let recursiveResult = parseFloat(app.result());

        app.result(eval(recursiveResult + lastOperator + _glob.lastResult));
        app.expression(recursiveResult + " " + operator + " " + _glob.lastResult);
        app.his('ha');
        app.expression("");
        return;
    }

    function onEqualSecState() {
        onEqualFirstState();
        _glob.txtResult = "";
        _glob.txtExpression = "";
        return;
    }

    function onEqualClicked() {
        if (specSymbol) {
            _glob.txtExpression += temp;
            temp = "";
            specSymbol = false;
        } else {
            _glob.txtExpression += _glob.txtResult;
            app.expression(app.expression() + _glob.txtResult);
        }
        if (!_glob.txtExpression) {
            onEqualFirstState();
            return;
        }

        if (checkTheEndOfExp()) {
            onEqualSecState();
            return;
        }

        replaceOpr();

        app.result(eval(_glob.txtExpression));
        app.his('ha');
        app.expression("");
        _glob.txtResult = "";
        _glob.txtExpression = "";
    }

    function onCEClicked() {
        _glob.txtResult = "";
        app.result('0');
    }

    function onClearAllClicked(v) {
        if (!v) v = "0";
        _glob.txtResult = "";
        _glob.txtExpression = "";
        app.result(v);
        app.expression('');
    }

    function onBackspaceClicked() {
        if (!_glob.txtResult) {
            app.result('0');
            return;
        }
        _glob.txtResult = _glob.txtResult.substring(0, _glob.txtResult.length - 1);
        _glob.lastResult = parseFloat(_glob.txtResult);
        _glob.txtResult === "" ? app.result('0') : app.result(_glob.txtResult);
    }

}(app);