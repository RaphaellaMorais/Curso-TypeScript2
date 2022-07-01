/*minha classe abstrata/generica*/
/*TypeScript está aplicando o paradigma da orientação a objeto*/
/*aplicando conceito de herança, classes abstrata, metodos abstratos. */


export abstract class View <T> { /*Tornamos a classe view genérica passando esse T*/ 
    protected elemento: HTMLElement; /* modificador protected diz que só a propria classe ou
    filhas que herdarem dessa classe podem ter acesso a propriedade*/

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }


    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;

    }

    protected abstract template(model: T): string;
       
}

/*temos um código fléxivel e estáticamente tipado.
tentamos isolar em uma única classe view a maior quantidade de sódigo possível
*/
