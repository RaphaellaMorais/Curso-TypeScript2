/*minha classe abstrata/generica*/
/*TypeScript está aplicando o paradigma da orientação a objeto*/
/*aplicando conceito de herança, classes abstrata, metodos abstratos. */
export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
/*temos um código fléxivel e estáticamente tipado.
tentamos isolar em uma única classe view a maior quantidade de sódigo possível
*/
