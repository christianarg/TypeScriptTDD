var RichEdition;
(function (RichEdition) {
    var ListManager = (function () {
        function ListManager() { }
        ListManager.prototype.createList = function (html) {
            var list = $("<ul></ul>");
            if(html == null || html == "") {
                return list.append("<li></li>")[0].outerHTML;
            }
            var container = $("<listmarker></listmarker>").append(html);
            var contents = container.contents();
            contents.filter(function () {
                return this.nodeType == 3;
            }).wrap('<li></li>').end().filter('br').remove();
            var tags = contents.filter(function () {
                return this.nodeType == 1;
            });
            $.each(tags, function (i, tag) {
                var jtag = $(tag);
                jtag.replaceWith('<li>' + jtag.text() + '</li>');
            });
            list.append(container.html());
            return list[0].outerHTML;
        };
        return ListManager;
    })();
    RichEdition.ListManager = ListManager;    
})(RichEdition || (RichEdition = {}));

