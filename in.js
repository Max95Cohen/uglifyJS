(function () {
    var Person = {
        name: 'Aibek',
        age: 31,
        items: {
            item: 'item',
        }
    };

    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }

    Person2.prototype.getAge = function () {
        this.reserved_variable = this.name;
        return this.age;
    }

    var person = new Person2('Aibek', 31);

    var root = {
        api: {},
        core: {},
        names: {}
    };

    person.getAge();

    root.Person = Person;
    root.person = person;

    root.names.SOME_LONG_NAMED_CONST_ = 'Aibek';

    root.api.perform = function (param_for_api) {
        return param_for_api;
    };

    window.perform = root.api.perform;

    document.addEventListener('click', function () {
        var div = document.createElement('div');
        var ah = window.screen.availHeight;

        document.body.appendChild(div);
        div.style.height = ah + 'px';
    });
})();

function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "Hi " + this.name );
    };
}

let Aibek = new User("Aibek");
let Baibek = new User("Baibek");

Aibek.sayHi();
Baibek.sayHi();
