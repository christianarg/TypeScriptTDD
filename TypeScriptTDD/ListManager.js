var RichEdition;
(function (RichEdition) {
    var ListManager = (function () {
        function ListManager() { }
        ListManager.prototype.createList = function (html) {
            if(html == null || html == "") {
                return '<ul><li></li></ul>';
            }
            var jinput = $(html);
            var siblings = jinput.siblings();
            var tags = new Array();
            if(siblings.length == 0) {
                if(jinput.length == 0) {
                    tags.push(html);
                } else {
                    tags.push(jinput.text());
                }
            } else {
                for(var i = 0; i < siblings.length; i++) {
                    tags.push(siblings[i]);
                }
            }
            var list = $('<ul></ul>');
            for(var i = 0; i < tags.length; i++) {
                var tag = tags[i];
                var listItem = $('<li></li>');
                var jtag = $(tag);
                if(jtag.length == 0) {
                    listItem.html(tag);
                } else {
                    listItem.html(jtag.html());
                }
                list.append(listItem);
            }
            return list[0].outerHTML;
        };
        return ListManager;
    })();
    RichEdition.ListManager = ListManager;    
})(RichEdition || (RichEdition = {}));

