/// <reference path="JsThirdParty/jquery.d.ts" />


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
            if(html == null || html == "")
                return '<ul><li></li></ul>';

            var jinput = $(html);
            var siblings = jinput.siblings();
            var tags = new Array();

            // sabemos que no es vacío, así que significa que no tiene hermanos
            // o bien es un nodo de texto o bien es un solo tag
            if (siblings.length == 0) {
                // Vacio, por lo tanto es solo texto
                if (jinput.length == 0) {
                    tags.push(html);
                }
                else {
                    // Es un tag con texto
                    tags.push(jinput.text());
                }
            } 
            else { // Caso "normal". Varios tags
                for (var i = 0; i < siblings.length; i++) {
                    tags.push(siblings[i]);
                }
            }
            
            var list = $('<ul></ul>');
            
            for (var i = 0; i < tags.length; i++) {
                var tag = tags[i];
                var listItem = $('<li></li>');
                var jtag = $(tag);
                if (jtag.length == 0) { // no es un tag
                    listItem.html(tag);
                }
                else {
                    listItem.html(jtag.html());
                }
                
                list.append(listItem);
            }
            return list[0].outerHTML;
        }
    }
}

