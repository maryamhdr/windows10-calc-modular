
function valueBtnHandler(value, type) {

    

    

    switch (type) {
        case 'number':
            if (recalled) {
                recalled = false;
            }
            break;
        case 'symbol':

            // if (value === "±") {

            //     if (recalled) {
            //         let a = expression.textContent.lastIndexOf("+");
            //         let b = expression.textContent.lastIndexOf("-");
            //         let c = expression.textContent.lastIndexOf("×");
            //         let d = expression.textContent.lastIndexOf("÷");
            //         let max = Math.max(a, b, c, d);
            //         let str = expression.textContent.substr(max + 2, expression.textContent.length - 1);
            //         expression.textContent = expression.textContent.substr(0, max + 2);
            //         result.textContent = str;
            //         recalled = false;
            //     }

                
            // }

            if (value === "√") {

                // if (recalled) {
                //     let a = expression.textContent.lastIndexOf("+");
                //     let b = expression.textContent.lastIndexOf("-");
                //     let c = expression.textContent.lastIndexOf("×");
                //     let d = expression.textContent.lastIndexOf("÷");
                //     let max = Math.max(a, b, c, d);
                //     let str = expression.textContent.substr(max + 2, expression.textContent.length - 1);
                //     expression.textContent = expression.textContent.substr(0, max + 2);
                //     result.textContent = str;
                //     recalled = false;
                // }

                
            }

            if (value === "sqr") {

                // if (recalled) {
                //     let a = expression.textContent.lastIndexOf("+");
                //     let b = expression.textContent.lastIndexOf("-");
                //     let c = expression.textContent.lastIndexOf("×");
                //     let d = expression.textContent.lastIndexOf("÷");
                //     let max = Math.max(a, b, c, d);
                //     let str = expression.textContent.substr(max + 2, expression.textContent.length - 1);
                //     expression.textContent = expression.textContent.substr(0, max + 2);
                //     result.textContent = str;
                //     recalled = false;
                // }

            }

            if (value === "cube") {


                // if (recalled) {
                //     let a = expression.textContent.lastIndexOf("+");
                //     let b = expression.textContent.lastIndexOf("-");
                //     let c = expression.textContent.lastIndexOf("×");
                //     let d = expression.textContent.lastIndexOf("÷");
                //     let max = Math.max(a, b, c, d);
                //     let str = expression.textContent.substr(max + 2, expression.textContent.length - 1);
                //     expression.textContent = expression.textContent.substr(0, max + 2);
                //     result.textContent = str;
                //     recalled = false;
                // }

            }

            if (value === "reverse") {
                 
                // if (recalled) {
                //     let a = expression.textContent.lastIndexOf("+");
                //     let b = expression.textContent.lastIndexOf("-");
                //     let c = expression.textContent.lastIndexOf("×");
                //     let d = expression.textContent.lastIndexOf("÷");
                //     let max = Math.max(a, b, c, d);
                //     let str = expression.textContent.substr(max + 2, expression.textContent.length - 1);
                //     expression.textContent = expression.textContent.substr(0, max + 2);
                //     result.textContent = str;
                //     recalled = false;
                // }

            }
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



    txtExpression = txtExpression.replace("÷", "/");
    txtExpression = txtExpression.replace("×", "*");

    result.textContent = eval(txtExpression);

    expression.textContent += txtResult;

    addHistory();

    expression.textContent = "";
    txtResult = "";
    txtExpression = "";
}
