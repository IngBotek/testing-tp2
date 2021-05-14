/**
 * Cuando se agrega un elemento al principio la lista de claves esta ordenada.
 * Cuando se agrega un elemento al final la lista de claves esta ordenada.
 */

 const assert = require("chai").assert; //importa los assert para poder usar la funcion
 const Lista = require("../src/lista.js");

 describe("en una lista vacia" , function() { //define un conjunto de pruebas
    var lista = new Lista(); 
    it("hay cero elementos", function() { //verifica un aspecto de ese conjunto de pruebas
         assert.equal(lista.count(),0);
     })
    it("no se encuentra ninguna clave", function(){
        assert.isNaN(lista.find("clave"));
    })
 })

 describe("cuando se agrega un elemento a una lista vacia", function(){
     var lista = new Lista();
     lista.add("clave", "valor");
     it("hay un elemento", function(){
         assert.equal(lista.count(),1);
     })
     it("se puede recuperar el valor a partir de la clave", function(){
         assert.equal(lista.find("clave"), "valor");
     })
     it("la lista de claves esta ordenada", function(){
        assert.equal(lista.showClave(), "clave");
     })
 })

 describe("cuando se agrega una clave que ya está en la lista",function(){
    var lista = new Lista();
    it("se actualiza el valor correspondiente", function(){
        lista.add("clave", "valor");
        lista.add("clave", "newvalor");
        assert.equal(lista.find("clave"), "newvalor");
    })
 })

 describe("cuando se agrega un elemento al principio de la lista", function(){
     var lista = new Lista();
     it("la lista de claves esta ordenada", function(){
        lista.add("clave", "valor");
        lista.add("auto","value");
        assert.deepEqual(lista.showClave(), ["auto" , "clave"]);
     })
 })

 describe("cuando se agrega un elemento al final de la lista", function(){
    var lista = new Lista();
    it("la lista de claves esta ordenada", function(){
       lista.add("clave", "valor");
       lista.add("zorro","value");
       assert.deepEqual(lista.showClave(), ["clave" , "zorro"]);
    })
})



