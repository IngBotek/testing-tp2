module.exports = class Lista {

    #elementos;
    constructor(){
        this.#elementos = [];
    }
    count(){
        return this.#elementos.length;
    }
    find(clave){
        if(this.#elementos.length>0){
            var index = this.findIndice(clave);
            return this.#elementos[index].valor;
        }
        return NaN;
    }
    add(clave,valor){
        if(typeof clave == "string"){
            if(this.#elementos.length==0){
                this.#elementos.push({clave,valor});
                } else {
	                 var indice = this.findIndice(clave);
                     if (indice == null){
		                this.#elementos.push({clave,valor});
	                } else {
		                this.#elementos[indice].valor = valor;
	                }
                }
            return true;
        }
        return false;
    }   

    findIndice(clave){
        for(var i=0; i<this.#elementos.length;i++){
            if(this.#elementos[i].clave==clave){
                return i;
            }
            return null;
        }
    }

    showClave(){
        var arrayClave = [];
        for(var i=0; i<this.#elementos.length;i++){
            arrayClave[i]=this.#elementos[i].clave;
        }
        return arrayClave.sort();
    }

    stringCheck(clave){
        return typeof clave;
    }

    delete(clave){
        var indice = this.findIndice(clave);
        this.#elementos.splice(indice,1);
        return this.#elementos.length;
    }
        

};