var expression = getElement("expression");
var result = getElement("result");

var memoryList1 = getElement("memoryList1");
var memoryList2 = getElement("memoryList2");
var trashIcon1 = getElement("trashIcon1");
var trashIcon2 = getElement("trashIcon2");

var historyList1 = getElement("historyList1");
var historyList2 = getElement("historyList2");
var trashIcon3 = getElement("trashIcon3");
var trashIcon4 = getElement("trashIcon4");

var memory = getElement('memory');
var historyPad = getElement('history');
var keypad = getElement('keypad');
var myNav = getElement('myNav');

var historyIcon = getElement('historyIcon');

var mcBtn = getElement('mcBtn');
var mrBtn = getElement('mrBtn');
var mBtn = getElement('mBtn');

var memoryScreen = getElement('memoryScreen');
var historyScreen = getElement('historyScreen');

var historyIconImg = getElement('historyIconImg');
var sortDownImg = getElement('sortDownImg');


var txtResult = "";
var txtExpression = "";
var temp = "";
var lastResult = 0;
var lastOperator = "+";
var sqrtAcc = 0;
var sqrAcc = 0;
var cubeAcc = 0;
var divideAcc = 0;
var recalled = false;
var specSymbol = false;

var memoryItmId = 0;
var historyItemId = 0;

function getElement(id) {
    return document.getElementById(id);
}

memory.addEventListener('click', function (event) {
    event.stopPropagation();
})

historyPad.addEventListener('click', function (event) {
    event.stopPropagation();
})

window.onclick = function () {
    myNav.style.width = "0";
    memory.style.display = "none";
    historyPad.style.display = "none";
    this.keypad.style.display = "flex";
}

function resizeWindow() {
    if (window.outerWidth <= 712) return;

    keypad.style.display = "flex";
    memory.style.display = "none";
    historyPad.style.display = "none";
}

function openNav(event) {
    event.stopPropagation();
    myNav.style.width = "265px";
}

function closeNav() {
    myNav.style.width = "0";
}

function openMemory(evt) {
    evt.stopPropagation();
    memory.style.display = "flex";
    keypad.style.display = "none";
    historyPad.style.display = "none";
}

function changeScreenMode(evt, mode) {
    var tabs = document.getElementsByClassName("memory-tablink");
    switch (mode) {
        case 'history':
            memoryScreen.style.display = "none";
            historyScreen.style.display = "block";
            tabs[1].className = tabs[1].className.replace(" active-memorytab-item", "");
            evt.currentTarget.className += " active-memorytab-item";
            break;
        case 'memory':
            historyScreen.style.display = "none";
            memoryScreen.style.display = "block";
            tabs[0].className = tabs[0].className.replace(" active-memorytab-item", "");
            evt.currentTarget.className += " active-memorytab-item";
            break;
    }
}

function openHistory(evt) {
    evt.stopPropagation();
    historyPad.style.display = "flex";
    memory.style.display = "none";
    keypad.style.display = "none";
}
