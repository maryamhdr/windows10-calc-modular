
function valueBtnHandler(value, type) {

    if (txtResult === "") {
        if (txtExpression === "" && value === "0")
            return;
    }

    if (txtResult === "") {
        if (txtExpression === "" && type === 'symbol') {
            if (value !== "√" && value !== "reverse") {
                return;
            }
        }
    }

    switch (type) {
        case 'number':
            if (recalled) {
                recalled = false;
            }

            if (value === "." && txtResult.includes(".")) {
                return;
            }

            if (value === "." && txtResult === "") {
                txtResult = "0";
            }

            txtResult += value;
            result.textContent = txtResult;
            lastResult = parseFloat(txtResult);
            break;
        case 'symbol':

            if (txtResult.charAt(txtResult.length - 1) === ".") {
                txtResult = txtResult.substr(0, txtResult.length - 1);
            }

            if (value === "±") {

                if (recalled) {
                    let a = expression.textContent.lastIndexOf("+");
                    let b = expression.textContent.lastIndexOf("-");
                    let c = expression.textContent.lastIndexOf("×");
                    let d = expression.textContent.lastIndexOf("÷");
                    let max = Math.max(a, b, c, d);
                    let str = expression.textContent.substr(max + 2, expression.textContent.length - 1);
                    expression.textContent = expression.textContent.substr(0, max + 2);
                    result.textContent = str;
                    recalled = false;
                }

                if (result.textContent.includes("-")) {
                    txtResult = result.textContent.replace("-", "");
                    result.textContent = txtResult;
                    return;
                }
                txtResult = "-" + result.textContent;
                result.textContent = txtResult;
                return;
            }

            if (value === "√") {

                specSymbol = true;

                if (recalled) {
                    let a = expression.textContent.lastIndexOf("+");
                    let b = expression.textContent.lastIndexOf("-");
                    let c = expression.textContent.lastIndexOf("×");
                    let d = expression.textContent.lastIndexOf("÷");
                    let max = Math.max(a, b, c, d);
                    let str = expression.textContent.substr(max + 2, expression.textContent.length - 1);
                    expression.textContent = expression.textContent.substr(0, max + 2);
                    result.textContent = str;
                    recalled = false;
                }

                if (result.textContent.includes("-")) {
                    txtResult = "";
                    txtExpression = "";
                    result.textContent = "Invalid input";
                    expression.textContent = "";
                    return;
                }

                if (txtResult.indexOf('cube') === 0 || txtResult.indexOf('sqr') === 0 || txtResult.indexOf('1/') === 0 || txtResult.indexOf("√") === 0) {
                    temp = "Math.sqrt(" + temp + ")";
                    txtResult = "√(" + txtResult + ")";
                } else {
                    temp = "Math.sqrt(" + result.textContent + ")";
                    txtResult = "√(" + result.textContent + ")";
                }

                result.textContent = eval(temp);

                if (sqrtAcc + sqrAcc + divideAcc + cubeAcc === 0) {
                    expression.textContent += txtResult + " ";
                    divideAcc = (txtResult.match(/\//g) || []).length;
                    cubeAcc = (txtResult.match(/cube/g) || []).length;
                    sqrAcc = (txtResult.match(/sqr/g) || []).length;
                    sqrtAcc = (txtResult.match(/√/g) || []).length;
                    return;
                }

                if (expression.textContent.includes("sqr") || expression.textContent.includes("cube") || expression.textContent.includes("1/") || expression.textContent.includes("√")) {
                    let max = expression.textContent.lastIndexOf("(");
                    expression.textContent = expression.textContent.substr(0, max + 1 - (cubeAcc * 5 + sqrAcc * 4 + sqrtAcc * 2 + divideAcc * 3));
                }

                divideAcc = (txtResult.match(/\//g) || []).length;
                cubeAcc = (txtResult.match(/cube/g) || []).length;
                sqrAcc = (txtResult.match(/sqr/g) || []).length;
                sqrtAcc = (txtResult.match(/√/g) || []).length;

                expression.textContent += txtResult + " ";
                return;
            }

            if (value === "sqr") {

                specSymbol = true;

                if (recalled) {
                    let a = expression.textContent.lastIndexOf("+");
                    let b = expression.textContent.lastIndexOf("-");
                    let c = expression.textContent.lastIndexOf("×");
                    let d = expression.textContent.lastIndexOf("÷");
                    let max = Math.max(a, b, c, d);
                    let str = expression.textContent.substr(max + 2, expression.textContent.length - 1);
                    expression.textContent = expression.textContent.substr(0, max + 2);
                    result.textContent = str;
                    recalled = false;
                }


                if (txtResult.indexOf('cube') === 0 || txtResult.indexOf('sqr') === 0 || txtResult.indexOf('1/') === 0 || txtResult.indexOf("√") === 0) {
                    temp = "Math.pow(" + temp + ",2)";
                    txtResult = "sqr(" + txtResult + ")";
                } else {
                    temp = "Math.pow(" + result.textContent + ",2)";
                    txtResult = "sqr(" + result.textContent + ")";
                }

                result.textContent = eval(temp);

                if (sqrtAcc + sqrAcc + divideAcc + cubeAcc === 0) {
                    expression.textContent += txtResult + " ";
                    divideAcc = (txtResult.match(/\//g) || []).length;
                    cubeAcc = (txtResult.match(/cube/g) || []).length;
                    sqrAcc = (txtResult.match(/sqr/g) || []).length;
                    sqrtAcc = (txtResult.match(/√/g) || []).length;
                    return;
                }

                if (expression.textContent.includes("sqr") || expression.textContent.includes("cube") || expression.textContent.includes("1/") || expression.textContent.includes("√")) {
                    let max = expression.textContent.lastIndexOf("(");
                    expression.textContent = expression.textContent.substr(0, max + 1 - (cubeAcc * 5 + sqrAcc * 4 + sqrtAcc * 2 + divideAcc * 3));
                }

                divideAcc = (txtResult.match(/\//g) || []).length;
                cubeAcc = (txtResult.match(/cube/g) || []).length;
                sqrAcc = (txtResult.match(/sqr/g) || []).length;
                sqrtAcc = (txtResult.match(/√/g) || []).length;

                expression.textContent += txtResult + " ";
                return;
            }

            if (value === "cube") {

                specSymbol = true;

                if (recalled) {
                    let a = expression.textContent.lastIndexOf("+");
                    let b = expression.textContent.lastIndexOf("-");
                    let c = expression.textContent.lastIndexOf("×");
                    let d = expression.textContent.lastIndexOf("÷");
                    let max = Math.max(a, b, c, d);
                    let str = expression.textContent.substr(max + 2, expression.textContent.length - 1);
                    expression.textContent = expression.textContent.substr(0, max + 2);
                    result.textContent = str;
                    recalled = false;
                }

                if (txtResult.indexOf('cube') === 0 || txtResult.indexOf('sqr') === 0 || txtResult.indexOf('1/') === 0 || txtResult.indexOf("√") === 0) {
                    temp = "Math.pow(" + temp + ",3)";
                    txtResult = "cube(" + txtResult + ")";
                } else {
                    temp = "Math.pow(" + result.textContent + ",3)";
                    txtResult = "cube(" + result.textContent + ")";
                }

                result.textContent = eval(temp);

                if (sqrtAcc + sqrAcc + divideAcc + cubeAcc === 0) {
                    expression.textContent += txtResult + " ";
                    divideAcc = (txtResult.match(/\//g) || []).length;
                    cubeAcc = (txtResult.match(/cube/g) || []).length;
                    sqrAcc = (txtResult.match(/sqr/g) || []).length;
                    sqrtAcc = (txtResult.match(/√/g) || []).length;
                    return;
                }

                if (expression.textContent.includes("sqr") || expression.textContent.includes("cube") || expression.textContent.includes("1/") || expression.textContent.includes("√")) {
                    let max = expression.textContent.lastIndexOf("(");
                    expression.textContent = expression.textContent.substr(0, max + 1 - (cubeAcc * 5 + sqrAcc * 4 + sqrtAcc * 2 + divideAcc * 3));
                }

                divideAcc = (txtResult.match(/\//g) || []).length;
                cubeAcc = (txtResult.match(/cube/g) || []).length;
                sqrAcc = (txtResult.match(/sqr/g) || []).length;
                sqrtAcc = (txtResult.match(/√/g) || []).length;

                expression.textContent += txtResult + " ";
                return;
            }

            if (value === "reverse") {

                specSymbol = true;
                 
                if (recalled) {
                    let a = expression.textContent.lastIndexOf("+");
                    let b = expression.textContent.lastIndexOf("-");
                    let c = expression.textContent.lastIndexOf("×");
                    let d = expression.textContent.lastIndexOf("÷");
                    let max = Math.max(a, b, c, d);
                    let str = expression.textContent.substr(max + 2, expression.textContent.length - 1);
                    expression.textContent = expression.textContent.substr(0, max + 2);
                    result.textContent = str;
                    recalled = false;
                }

                if (result.textContent === "0") {
                    txtResult = "";
                    txtExpression = "";
                    result.textContent = "Cannot divide by zero";
                    expression.textContent = "";
                    return;
                }

                if (txtResult.indexOf('cube') === 0 || txtResult.indexOf('sqr') === 0 || txtResult.indexOf('1/') === 0 || txtResult.indexOf("√") === 0) {
                    temp = "1/(" + temp + ")";
                    txtResult = "1/(" + txtResult + ")";
                } else {
                    temp = "1/(" + result.textContent + ")";
                }

                result.textContent = eval(temp);

                if (sqrtAcc + sqrAcc + divideAcc + cubeAcc === 0) {
                    expression.textContent += txtResult + " ";
                    divideAcc = (txtResult.match(/\//g) || []).length;
                    cubeAcc = (txtResult.match(/cube/g) || []).length;
                    sqrAcc = (txtResult.match(/sqr/g) || []).length;
                    sqrtAcc = (txtResult.match(/√/g) || []).length;
                    return;
                }

                if (expression.textContent.includes("sqr") || expression.textContent.includes("cube") || expression.textContent.includes("1/") || expression.textContent.includes("√")) {
                    let max = expression.textContent.lastIndexOf("(");
                    expression.textContent = expression.textContent.substr(0, max + 1 - (cubeAcc * 5 + sqrAcc * 4 + sqrtAcc * 2 + divideAcc * 3));
                }

                divideAcc = (txtResult.match(/\//g) || []).length;
                cubeAcc = (txtResult.match(/cube/g) || []).length;
                sqrAcc = (txtResult.match(/sqr/g) || []).length;
                sqrtAcc = (txtResult.match(/√/g) || []).length;

                expression.textContent += txtResult + " ";
                return;
            }

            switch (value) {
                case "+":
                case "-":
                    lastOperator = value;
                    break;
                case "÷":
                    lastOperator = "/";
                    break;
                case "×":
                    lastOperator = "*";
                    break;
            }

            divideAcc = 0;
            cubeAcc = 0;
            sqrAcc = 0;
            sqrtAcc = 0;

            if(specSymbol) {
                txtExpression += temp;
                temp = "";
                specSymbol = false;
            }
            else {
                txtExpression += txtResult;
            }

            if (txtExpression.charAt(txtExpression.length - 1) === "+" ||
                txtExpression.charAt(txtExpression.length - 1) === "-" ||
                txtExpression.charAt(txtExpression.length - 1) === "÷" ||
                txtExpression.charAt(txtExpression.length - 1) === "×") {

                txtExpression = txtExpression.substr(0, txtExpression.length - 1);
                txtExpression += value;
                expression.textContent = expression.textContent.substr(0, expression.textContent.length - 2);
                expression.textContent += value + " ";
                return;
            }

            txtExpression = txtExpression.replace("÷", "/");
            txtExpression = txtExpression.replace("×", "*");

            lastResult = eval(txtExpression);

            txtExpression = lastResult + value;

            result.textContent = lastResult;
            expression.textContent += txtResult.includes("√") || txtResult.includes("sqr") || txtResult.includes("cube") || txtResult.includes("/") ? value + " " : txtResult + " " + value + " ";

            txtResult = "";
            break;
    }

}



function calculateResult() {
    txtExpression += txtResult;

    if (txtExpression === "") {

        let operator;
        let recursiveResult = parseFloat(result.textContent);

        result.textContent = eval(recursiveResult + lastOperator + lastResult);

        switch (lastOperator) {
            case "*":
                operator = "×";
                break;
            case "/":
                operator = "÷";
                break;
            case "+":
            case "-":
                operator = lastOperator;
                break;
        }

        expression.textContent = recursiveResult + " " + operator + " " + lastResult;
        addHistory();
        expression.textContent = "";
        return;
    }

    if (txtExpression.charAt(txtExpression.length - 1) === "+" ||
        txtExpression.charAt(txtExpression.length - 1) === "-" ||
        txtExpression.charAt(txtExpression.length - 1) === "÷" ||
        txtExpression.charAt(txtExpression.length - 1) === "×") {

        let operator;
        let recursiveResult = parseFloat(result.textContent);

        result.textContent = eval(recursiveResult + lastOperator + lastResult);

        switch (lastOperator) {
            case "*":
                operator = "×";
                break;
            case "/":
                operator = "÷";
                break;
            case "+":
            case "-":
                operator = lastOperator;
                break;
        }

        expression.textContent = recursiveResult + " " + operator + " " + lastResult;
        addHistory();
        expression.textContent = "";

        txtResult = "";
        txtExpression = "";
        return;
    }

    if (txtExpression.includes('sqr')) {
        txtExpression = txtExpression.replace(/\)/g, ",2)");
        txtExpression = txtExpression.replace(/sqr/g, 'Math.pow');
    }

    if (txtExpression.includes('cube')) {
        txtExpression = txtExpression.replace(/\)/g, ",3)");
        txtExpression = txtExpression.replace(/cube/g, 'Math.pow');
    }

    txtExpression = txtExpression.replace("÷", "/");
    txtExpression = txtExpression.replace("×", "*");
    txtExpression = txtExpression.replace(/√/g, "Math.sqrt");

    result.textContent = eval(txtExpression);

    expression.textContent += txtResult;

    addHistory();

    expression.textContent = "";
    txtResult = "";
    txtExpression = "";
}


function clearAllInput() {
    txtResult = "";
    txtExpression = "";
    result.textContent = "0";
    expression.textContent = "";
}

function clearResult() {
    txtResult = "";
    result.textContent = "0";
}

function backspaceResult() {
    if (txtResult === "") {
        result.textContent = "0";
        return;
    }

    txtResult = txtResult.substring(0, txtResult.length - 1);
    lastResult = parseFloat(txtResult);

    result.textContent = txtResult === "" ? "0" : txtResult;
}