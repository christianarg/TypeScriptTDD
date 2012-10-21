/// <reference path="JsThirdParty/jquery.d.ts" />
/// <reference path="JQueryUtils.ts" />


// Module
module RichEdition {
    // Interface
    export interface IListManager {
        createList(html:string): string;
    }

    // Class
    export class ListManager implements IListManager {
        // Constructor
        //constructor (public x: number, public y: number) { }

        createList(html: string): string {
            var list = $("<ul></ul>");

            if(html == null || html == "")
                return list.append("<li></li>")[0].outerHTML;
            
            var container = $("<listmarker></listmarker>").append(html);
            var contents = container.contents();

            // Obtener todos los nodos tipo texto, envolver con li  quitar br's
            contents.filter(function () {
                return this.nodeType == 3;
            }).wrap('<li></li>')
                .end()
                .filter('br')
                    .remove();
            
            // Obtener todos los nodos tag, y reemplazarlos por li
            var tags = contents.filter(function () {
                return this.nodeType == 1;
            });
            $.each(tags, function (i, tag) {
                var jtag = $(tag);
                jtag.replaceWith('<li>' + jtag.text() + '</li>');
            });
            
            list.append(container.html());
            return list[0].outerHTML;
        }
    }
}

