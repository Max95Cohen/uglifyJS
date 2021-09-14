(function () {
    var Person = {
        name: "Aibek",
        name_: "Aibek",
        age: 31,
        items: {
            item: "item"
        },
        items_: {
            item_: "item"
        },
        test: function () {
            console.log('Person', this.name, this.name_);
        },
        test_: function () {
            console.log('Person', this.name, this.name_);
        },
        unUsedProperty: 'unUsedProperty'
    };

    Person.test();

    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }

    Person2.prototype.getAge = function () {
        console.log('From prototype' + this.name);

        this.reserved_variable = this.name;

        console.log('Person2', this);

        return this.age;
    }

    var person2 = new Person2("Aibek", 31);
    console.log('person2', person2);

    var root = {
        api: {},
        core: {},
        names: {}
    };

    person2.getAge();

    root.Person = Person;
    root.person = person2;

    root.names.SOME_LONG_NAMED_CONST_ = "Aibek";

    root.api.perform = function (param_for_api) {
        return param_for_api;
    };

    window.perform = root.api.perform;

    document.addEventListener("click", function () {
        var div = document.createElement("div");
        var ah = window.screen.availHeight / 2;

        document.body.appendChild(div);

        div.style.height = ah + "px";
        div.style.background = '#f00';
    });
})();

function User(name) {
    this.name = name;

    this.sayHi = function () {
        console.log("Hi " + this.name);
    };
}

function unUsedFunction() {
    console.log('unUsedFunction');
}

var unUsedVariable = 1;

User.prototype.test = function () {
    alert("Test from prototype " + this.name);
};

var Aibek = new User("Aibek");
var Aibek2 = new User("Aibek2");

Aibek.sayHi();
Aibek.test();

Aibek2.sayHi();
