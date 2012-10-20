/// <reference path="jquery.d.ts" />



// Module
module Prueba {
    export interface IHelloWorld { 
        Hello(): string;
        HelloDom(domid: string);
    }
    // Class
    export class HelloWorld implements IHelloWorld {
        // Constructor
        //constructor (public x: number, public y: number) { }

        // Instance member
        Hello():string {
             
            return "Hello world"; 
       }
        // Instance member
        HelloDom(domid: string) {
            var jDom = $('#'+domid);
            jDom.text("Hello world");
       }
        // Static member
        //static origin = new Poit(0, 0);
    }
}