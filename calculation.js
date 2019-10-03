+ function (app) {
    var txtResult = app.globals.txtResult,
        txtExpression = app.globals.txtExpression,
        recalled = app.globals.recalled,
        temp = "",
        lastResult = 0,
        lastOperator = "+",
        sqrtAcc = 0,
        sqrAcc = 0,
        cubeAcc = 0,
        divideAcc = 0,
        specSymbol = false,
        _elm = app.elements,
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
        let a = _elm.expression.textContent.lastIndexOf("+");
        let b = _elm.expression.textContent.lastIndexOf("-");
        let c = _elm.expression.textContent.lastIndexOf("×");
        let d = _elm.expression.textContent.lastIndexOf("÷");
        let max = Math.max(a, b, c, d);
        let str = _elm.expression.textContent.substr(max + 2, _elm.expression.textContent.length - 1);
        _elm.expression.textContent = _elm.expression.textContent.substr(0, max + 2);
        _elm.result.textContent = str;
        recalled = false;
    }

    function onOperandClicked(value) {
        if (recalled) recalled = false;

        if (!txtResult && !txtExpression && value === "0") return;

        if (value === "." && txtResult.includes(".")) return;

        if (value === "." && !txtResult) {
            txtResult = "0";
        }

        txtResult += value;
        _elm.result.textContent = txtResult;
        lastResult = parseFloat(txtResult);
    }

    function onOperatorClicked(value) {
        var action;

        if (!txtExpression && !txtResult) {
            if (value !== "√" && value !== "1/") return;
        }

        if (txtResult.charAt(txtResult.length - 1) === ".") {
            txtResult = txtResult.substr(0, txtResult.length - 1);
        }

        if (value === "√" && _elm.result.textContent.includes("-")) {
            onClearAllClicked("Invalid input");
            return;
        }

        if (value === "1/" && _elm.result.textContent === "0") {
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
            default:
                action = onNormalClicked;
                break;
        }

        action(value);
        return;
    }

    function onPlusMinesClicked() {
        if(recalled) isRecalled();
        txtResult = _elm.result.textContent.includes("-") ?
            _elm.result.textContent.replace("-", "") :
            "-" + _elm.result.textContent;
        _elm.result.textContent = txtResult;
        return;
    }

    function checkIndexOfSpecOperand() {
        if (txtResult.indexOf('cube') === 0 ||
            txtResult.indexOf('sqr') === 0 ||
            txtResult.indexOf('1/') === 0 ||
            txtResult.indexOf("√") === 0) return true;
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
        if (txtExpression.charAt(txtExpression.length - 1) === "+" ||
            txtExpression.charAt(txtExpression.length - 1) === "-" ||
            txtExpression.charAt(txtExpression.length - 1) === "÷" ||
            txtExpression.charAt(txtExpression.length - 1) === "×") {
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
            txtResult = `${v}(${txtResult})`;
        } else {
            switch (v) {
                case "√":
                    temp = `Math.sqrt(${_elm.result.textContent})`;
                    break;
                case "sqr":
                    temp = `Math.pow(${_elm.result.textContent},2)`;
                    break;
                case "cube":
                    temp = `Math.pow(${_elm.result.textContent},3)`;
                    break;
                case "1/":
                    temp = `1/(${_elm.result.textContent})`;
                    break;
            }
            txtResult = `${v}(${_elm.result.textContent})`;
        }
    }

    function evaluate(value) {
        _elm.result.textContent = eval(value);
    }

    function computeAccurances() {
        divideAcc = (txtResult.match(/\//g) || []).length;
        cubeAcc = (txtResult.match(/cube/g) || []).length;
        sqrAcc = (txtResult.match(/sqr/g) || []).length;
        sqrtAcc = (txtResult.match(/√/g) || []).length;
    }

    function onSpecOperatorClicked(value) {
        specSymbol = true;
        if(recalled) isRecalled();
        computeTemp(value);
        evaluate(temp);

        if (sqrtAcc + sqrAcc + divideAcc + cubeAcc === 0) {
            _elm.expression.textContent += txtResult + " ";
            computeAccurances();
            return;
        }

        if (includesSpecOperand(_elm.expression.textContent)) {
            let max = _elm.expression.textContent.lastIndexOf("(");
            _elm.expression.textContent = _elm.expression.textContent.substr(0, max + 1 - (cubeAcc * 5 + sqrAcc * 4 + sqrtAcc * 2 + divideAcc * 3));
        }

        computeAccurances();
        _elm.expression.textContent += txtResult + " ";
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
        txtExpression = txtExpression.replace("÷", "/");
        txtExpression = txtExpression.replace("×", "*");
    }

    function onNormalClicked(value) {
        computeLastOpr(value);
        resetAccurance();

        if (specSymbol) {
            txtExpression += temp;
            temp = "";
            specSymbol = false;
        } else {
            txtExpression += txtResult;
        }

        if (checkTheEndOfExp()) {
            txtExpression = txtExpression.substr(0, txtExpression.length - 1) + value;
            _elm.expression.textContent = _elm.expression.textContent.substr(0, _elm.expression.textContent.length - 2) + value + " ";
            return;
        }

        replaceOpr();

        lastResult = eval(txtExpression);
        txtExpression = lastResult + value;

        result.textContent = lastResult;
        _elm.expression.textContent += includesSpecOperand(txtResult) ? value + " " : txtResult + " " + value + " ";
        txtResult = "";
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
        let recursiveResult = parseFloat(_elm.result.textContent);

        _elm.result.textContent = eval(recursiveResult + lastOperator + lastResult);
        _elm.expression.textContent = recursiveResult + " " + operator + " " + lastResult;
        app.his('ha');
        _elm.expression.textContent = "";
        return;
    }

    function onEqualSecState() {
        onEqualFirstState();
        txtResult = "";
        txtExpression = "";
        return;
    }

    function onEqualClicked() {
        txtExpression += txtResult;
        if (!txtExpression) {
            onEqualFirstState();
            return;
        }

        if (checkTheEndOfExp()) {
            onEqualSecState();
            return;
        }

        replaceOpr();

        _elm.result.textContent = eval(txtExpression);
        _elm.expression.textContent += txtResult;
        app.his('ha');
        _elm.expression.textContent = "";
        txtResult = "";
        txtExpression = "";
    }

    function onCEClicked() {
        txtResult = "";
        _elm.result.textContent = "0";
    }

    function onClearAllClicked(v) {
        if (!v) v = "0";
        txtResult = "";
        txtExpression = "";
        _elm.result.textContent = v;
        _elm.expression.textContent = "";
    }

    function onBackspaceClicked() {
        if (!txtResult) {
            _elm.result.textContent = "0";
            return;
        }
        txtResult = txtResult.substring(0, txtResult.length - 1);
        lastResult = parseFloat(txtResult);
        _elm.result.textContent = txtResult === "" ? "0" : txtResult;
    }

}(app);