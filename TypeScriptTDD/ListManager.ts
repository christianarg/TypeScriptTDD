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

            // Convertir <br /> en <p></p> para un tratamiento unificado y simplificado
            var brCleanHtml = this.convert_BrTags_Into_PTags(html);

            // para poder realizar gestiones con jQuery en múltiples casos
            // "envolvemos" todo en un tag inventado que luego descartamos
            var container = $("<listmarker></listmarker>").append(brCleanHtml);
            var contents = container.contents();
            
            // Obtener todos los nodos tag, y reemplazarlos por li
            var tags = contents.filter(function () {
                return this.nodeType == 1;
            });
            if (tags.length == 0) {  // Caso particular. Se trata de un nodo de texto
                contents.filter(function () { // Obtener nodos tipo texto y envolverlos con li
                    return this.nodeType == 3;
                }).wrap('<li></li>')
            }
            else {  // Caso general, varios tags.Reemplazar los tags primer nivel por li's
                $.each(tags, function (i, tag) {
                    var jtag = $(tag);
                    jtag.replaceWith('<li>' + jtag.html() + '</li>');
                });
            }
            list.append(container.html());
            return list[0].outerHTML;
        }

        convert_BrTags_Into_PTags(html: string) {
            var ar = html.split('<br />');

            if(ar.length == 1) // No hay br's
                return html;
            var result = "";
            for(var i = 0; i < ar.length; i++)
            {
                if (ar[i] != "") {
                    result += '<p>' + ar[i] + '</p>';
                }
            }
            return result;
        }

        
    }
}

