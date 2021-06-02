/**
 * En una lista vacia: 
 *      - Hay cero elementos.
 *      - No se encuentra ninguna clave.
 * Cuando se agrega un elemento a una lista vacia:
 *      - Hay un elemento.
 *      - Se puede recuperar la clave a partir del valor.
 *      - La lista de claves esta ordenada.
 * Cuando se agrega una clave que ya esta en la lista:
 *      - Se actualiza el valor correspondiente
 * Cuando se agrega un elemento al principio de la lista:
 *      - La lista de claves esta ordenada.
 *      - La lista tiene mas de un elemento.
 * Cuando se agrega un elemento al final de la lista:
 *      - La lista de claves esta ordenada. 
 *      - La lista tiene mas de un elemento.
 * Cuando se agrega un elemento:
 *      - La clave debe ser una cadena de caracteres.
 * Cuando se quiere borrar un elemento:
 *      - Se puede borrar a partir de su clave. 
 */

 const assert = require("chai").assert; 
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
    lista.add("clave", "valor");
    lista.add("clave", "newvalor");
    it("se actualiza el valor correspondiente", function(){
        assert.equal(lista.find("clave"), "newvalor");
    })
 })

 describe("cuando se agrega un elemento al principio de la lista", function(){
     var lista = new Lista();
     lista.add("clave", "valor");
     lista.add("auto","value");
     it("la lista de claves esta ordenada", function(){
        assert.deepEqual(lista.showClave(), ["auto" , "clave"]);
     })
     it("la lista tiene mas de un elemento", function(){
        assert.equal(lista.count(),2);
     })
 })

 describe("cuando se agrega un elemento al final de la lista", function(){
    var lista = new Lista();
    lista.add("clave", "valor");
    lista.add("zorro","value");
    it("la lista de claves esta ordenada", function(){
       assert.deepEqual(lista.showClave(), ["clave" , "zorro"]);
    })
    it("la lista tiene mas de un elemento", function(){
        assert.equal(lista.count(),2);
    })
})

 describe("cuando se agrega un elemento", function(){
     var lista = new Lista();
     it("la clave debe ser una cadena de caracteres", function(){
        assert.equal(lista.add(12315541, "valor"),false);
     })
 })

 describe("cuando se quiere borrar un elemento",function(){
     var lista = new Lista();
     lista.add("clave", "valor");
     lista.delete("clave");
     it("se puede borrar a partir de su clave",function(){
        assert.equal(lista.delete(),0);
     })
 })



