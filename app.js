+ function (app) {
    const _elm = app.elements;

    window.onclick = function () {
        _elm.myNav.style.width = "0";
        _elm.memory.style.display = "none";
        _elm.historyPad.style.display = "none";
        _elm.keypad.style.display = "flex";
    }

    _elm.memory.onclick = function (e) {
        e.stopPropagation();
    }

    _elm.historyPad.onclick = function (e) {
        e.stopPropagation();
    }

    _elm.body.onresize = function () {
        if (window.outerWidth <= 712) return;
        _elm.keypad.style.display = "flex";
        _elm.memory.style.display = "none";
        _elm.historyPad.style.display = "none";
    }

    _elm.openNavIcon.onclick = function (e) {
        e.stopPropagation();
        _elm.myNav.style.width = "265px";
    }

    _elm.closeNavIcon.onclick = function () {
        _elm.myNav.style.width = "0";
    }

    _elm.historyIcon.onclick = function (e) {
        e.stopPropagation();
        _elm.historyPad.style.display = "flex";
        _elm.memory.style.display = "none";
        _elm.keypad.style.display = "none";
    }

    _elm.mBtn.onclick = function (e) {
        e.stopPropagation();
        _elm.memory.style.display = "flex";
        _elm.keypad.style.display = "none";
        _elm.historyPad.style.display = "none";
    }

    _elm.memoryHead.onclick = function (e) {
        switch (e.target.textContent) {
            case 'History':
                _elm.memoryScreen.style.display = "none";
                _elm.historyScreen.style.display = "block";
                _elm.tabs[1].className = _elm.tabs[1].className.replace(" active-memorytab-item", "");
                e.target.className += " active-memorytab-item";
                break;
            case 'Memory':
                _elm.historyScreen.style.display = "none";
                _elm.memoryScreen.style.display = "block";
                _elm.tabs[0].className = _elm.tabs[0].className.replace(" active-memorytab-item", "");
                e.target.className += " active-memorytab-item";
                break;
        }
    }

    _elm.keypad.onclick = function (e) {
        app.calc(e.target.getAttribute('data-type'), e.target.getAttribute('data-value'));
    }

    _elm.memorypad.onclick = function (e) {
        app.mem(e.target.getAttribute('data-value'));
    }

    _elm.trashIcon1.parentNode.onclick = function () {
        app.mem('mc');
    }

    _elm.trashIcon2.parentNode.onclick = function () {
        app.mem('mc');
    }

}(app);