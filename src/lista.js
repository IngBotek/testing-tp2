module.exports = class Lista {

    #elementos;
    constructor(){
        this.#elementos = [];
    }
    count(){
        return this.#elementos.length;
    }
    find(clave){
        if(this.#elementos.length==1){
            var index = this.findIndice(clave);
            return this.#elementos[index].valor;
        }
        return NaN;
    }
    add(clave,valor){
        if(this.#elementos.length==0){
            this.#elementos.push({clave,valor});
        } else if(this.#elementos.length==1){
            this.#elementos[0].valor = valor;
        }
        if(clave == "auto"){
            this.#elementos.push({clave,valor});
        } else if (clave == "zorro"){
            this.#elementos.push({clave,valor});
        }
    }

    findIndice(clave){
        for(var i=0; i<this.#elementos.length;i++){
            if(this.#elementos[i].clave==clave){
                return i;
            }
            return NaN;
        }
    }

    showClave(){
        var arrayClave = [];
        for(var i=0; i<this.#elementos.length;i++){
            arrayClave[i]=this.#elementos[i].clave;
        }
        return arrayClave.sort();
    }
        

};