/// <reference path="../ListManager.js" />
/// <reference path="qunit/qunit-1.10.0.js" />
/// <reference path="../JsThirdParty/jquery-1.7.1.min.js" />

// TODO: No me acuerdo como se hace el init por módulo qunit
function init() {
    $('#qunit-fixture').append('<div id ="theId"></div>');
}

test("List from null", function () {
    var listManager = new RichEdition.ListManager();
    var listHtml = listManager.createList(null);
    deepEqual(listHtml, '<ul><li></li></ul>');
});

test("List from empty string", function () {
    var listManager = new RichEdition.ListManager();
    var listHtml = listManager.createList("");
    deepEqual(listHtml, '<ul><li></li></ul>');
});

test("List from simple text node", function () {
    var listManager = new RichEdition.ListManager();
    var listHtml = listManager.createList("hola");
    deepEqual(listHtml, '<ul><li>hola</li></ul>');
});

test("List from paragraphs (separated by <p> tag)", function () {
    var listManager = new RichEdition.ListManager();
    var listHtml = listManager.createList("<p>hola</p>");
    deepEqual(listHtml, '<ul><li>hola</li></ul>');
});


test("List from two paragraphs (separated by <p> tag)", function () {
    var listManager = new RichEdition.ListManager();
    var listHtml = listManager.createList("<p>hola</p><p>que tal</p>");
    deepEqual(listHtml, '<ul><li>hola</li><li>que tal</li></ul>');
});

test("List from two paragraphs (separated by <br /> tag)", function () {
    var listManager = new RichEdition.ListManager();
    var listHtml = listManager.createList("hola<br />que tal<br />");
    deepEqual(listHtml, '<ul><li>hola</li><li>que tal</li></ul>');
});


//test("jquery reaserch", function () {
//    var container = $('.container');
//    var contents = container.contents();

//    contents.filter(function () {
//        return this.nodeType == 3;
//    })
//        .wrap('<p></p>')
//        .end()
//        .filter('br')
//          .remove();

//    var kito = container.html();
//});