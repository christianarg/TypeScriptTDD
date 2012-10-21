var RichEdition;
(function (RichEdition) {
    var ListManager = (function () {
        function ListManager() { }
        ListManager.prototype.createList = function (html) {
            var list = $("<ul></ul>");
            if(html == null || html == "") {
                return list.append("<li></li>")[0].outerHTML;
            }
            var brCleanHtml = this.convert_BrTags_Into_PTags(html);
            var container = $("<listmarker></listmarker>").append(brCleanHtml);
            var contents = container.contents();
            var tags = this.filterByNodeType(contents, RichEdition.NodeType.Tag);
            if(tags.length == 0) {
                this.filterByNodeType(contents, RichEdition.NodeType.TextNode).wrap('<li></li>');
            } else {
                $.each(tags, function (i, tag) {
                    var jtag = $(tag);
                    jtag.replaceWith('<li>' + jtag.html() + '</li>');
                });
            }
            list.append(container.html());
            return list[0].outerHTML;
        };
        ListManager.prototype.convert_BrTags_Into_PTags = function (html) {
            var ar = html.split('<br />');
            if(ar.length == 1) {
                return html;
            }
            var result = "";
            for(var i = 0; i < ar.length; i++) {
                if(ar[i] != "") {
                    result += '<p>' + ar[i] + '</p>';
                }
            }
            return result;
        };
        ListManager.prototype.filterByNodeType = function (jelement, nodeType) {
            return jelement.filter(function () {
                return this.nodeType == nodeType;
            });
        };
        return ListManager;
    })();
    RichEdition.ListManager = ListManager;    
    var NodeType = (function () {
        function NodeType() { }
        NodeType.TextNode = 3;
        NodeType.Tag = 1;
        return NodeType;
    })();
    RichEdition.NodeType = NodeType;    
})(RichEdition || (RichEdition = {}));

