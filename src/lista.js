module.exports = class Lista {

    #elementos;
    #index;

    constructor(){
        this.#elementos = [];
        this.#index = null;
    }

    count(){
        return this.#elementos.length;
    }

    find(clave){
        if(this.#elementos.length > 0){
            for(var i=0; i<this.#elementos.length;i++){
                if(this.#elementos[i].clave==clave){
                    this.#index = i;
                    return this.#elementos[this.#index].valor;
                }
                else {
                    this.#index = null;
                }
            }
        }
        return NaN;
    }
        
    add(clave,valor){
        if(typeof clave == "string"){
	        this.find(clave);
            if (this.#index == null){
		        this.#elementos.push({clave,valor});
	        } 
            else {
		        this.#elementos[this.#index].valor = valor;
	        }
            return true;
        }
        return false;
    }

    showClave(){
        var arrayClave = [];
        for(var i=0; i<this.#elementos.length;i++){
            arrayClave[i]=this.#elementos[i].clave;
        }
        return arrayClave.sort();
    }

    delete(clave){
        this.find(clave);
        this.#elementos.splice(this.#index,1);
        return this.#elementos.length;
    }
        
};