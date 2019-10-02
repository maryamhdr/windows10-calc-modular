
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
