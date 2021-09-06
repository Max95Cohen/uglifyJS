function i(i) {
    this.name = i, this.i = function () {
        alert("Hi " + this.name)
    }
}

!function () {
    function i(i, n) {
        this.name = i, this.t = n
    }

    i.prototype.o = function () {
        return this.reserved_variable = this.name, this.t
    };
    var n = new i("Aibek", 31), t = {u: {}, h: {}, names: {}};
    n.o(), t.m = {name: "Aibek", t: 31, items: {item: "item"}}, t.k = n, t.names.A = "Aibek", t.u.l = function (i) {
        return i
    }, window.l = t.u.l, document.addEventListener("click", function () {
        var i = document.createElement("div"), n = window.screen.availHeight;
        document.body.appendChild(i), i.style.height = n + "px"
    })
}();
let n = new i("Aibek"), t = new i("Baibek");
n.i(), t.i();