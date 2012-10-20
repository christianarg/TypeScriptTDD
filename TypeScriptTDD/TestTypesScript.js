var Prueba;
(function (Prueba) {
    var HelloWorld = (function () {
        function HelloWorld() { }
        HelloWorld.prototype.Hello = function () {
            return "Hello world";
        };
        HelloWorld.prototype.HelloDom = function (domid) {
            var jDom = $('#' + domid);
            jDom.text("Hello world");
        };
        return HelloWorld;
    })();
    Prueba.HelloWorld = HelloWorld;    
})(Prueba || (Prueba = {}));

