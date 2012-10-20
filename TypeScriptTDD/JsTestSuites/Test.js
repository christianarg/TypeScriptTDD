/// <reference path="../TestTypesScript.js" />
/// <reference path="qunit/qunit-1.10.0.js" />
/// <reference path="../JsThirdParty/jquery-1.7.1.min.js" />

test("Hello world", function () {
    var prueba = new Prueba.HelloWorld();
    var actual = prueba.Hello();
    deepEqual(actual, 'Hello world');
});

//module("Hello World"

// TODO: No me acuerdo como se hace el init por módulo qunit
function init() {
    $('#qunit-fixture').append('<div id ="theId"></div>');
}
test("Hello world Dom", function () {
    init();
    var id = 'theId';

    var prueba = new Prueba.HelloWorld();
    prueba.HelloDom(id);

    var expected = "Hello world";
    var jDom = $('#' + id);
    //var kito = $('theId');
    var actual = jDom.text();

    deepEqual(actual, expected);

});