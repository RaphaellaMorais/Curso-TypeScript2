/*minha classe abstrata/generica*/
/*TypeScript está aplicando o paradigma da orientação a objeto*/
/*aplicando conceito de herança, classes abstrata, metodos abstratos. */


export abstract class View <T> { /*Tornamos a classe view genérica passando esse T*/ 
    protected elemento: HTMLElement; /* modificador protected diz que só a propria classe ou
    filhas que herdarem dessa classe podem ter acesso a propriedade*/
    private escapar = false;

    constructor(seletor: string, escapar?: boolean) {
        const elemento = document.querySelector(seletor);
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        } else {
            throw Error(`Seletor ${seletor} não existe no DOM. Verifique`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }


    public update(model: T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
                .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;
       
}

/*temos um código fléxivel e estáticamente tipado.
tentamos isolar em uma única classe view a maior quantidade de sódigo possível
*/
