import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Subject } from "rxjs";
import { debounceTime } from 'rxjs/operators'

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit, OnDestroy{

    @Output() onTyping = new EventEmitter<string>()
    //@Output passando evento com um valor pro componente pai

    @Input() value: string = ''
    //valor do input será ligado com filter do componente pai

    debounce: Subject<string> = new Subject<string>()

    ngOnInit():void{
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.onTyping.emit(filter));
    
        //nos inscreveremos em debounce, e o valor a ser emitido ali será chamado de filter, 
        //o qual receberemos, e então indicaremos que this.filter receberá filter
        //Com isso, em vez de jogarmos o valor digitado diretamente em filter, 
        //emitiremos um valor de RxJS, a ser escutado pelo subscribe(), o qual atualizará o filtro
        //importaremos debounceTime de rxjs/operators, junto ao qual uma série de operadores 
        //poderá ser importada. A ideia é que, antes do subscribe(), pediremos para o debounce aplicar 
        //tal operação, com a estrutura pipe(), em que incluiremos debounceTime, a receber o período de 
        //tempo. E desta operação faremos o subscribe()
        //A grande sacada é que, com esta alteração chamada de Lettable operators no RxJS, 
        //por usarmos o debounceTime, quando emitimos um valor no evento keyup, todas as emissões serão 
        //ignoradas, sendo consideradas após 300ms de pausa na digitacao. E é isso que será repassado ao
        //subscribe().
    }

    //função recebe o evento do keyup e define um tipo para o evento
    //Como estamos disparando o evento keyup, a cada preenchimento do campo de busca o valor 
    //digitado será passado para filter, e deste para o Pipe. Então, a cada caractere digitado é 
    //feita a aplicação do filtro, e isso prejudica a performance, ainda mais se a quantidade de 
    //imagens é muito grande. Pior ainda se estivéssemos realizando requisição AJAX ao servidor.
    //seria uma request para cada letra digitada, Seria melhor se, ao digitarmos "farol", e fizéssemos 
    //uma pausa de 300ms na digitação aí sim o Pipe fosse aplicado
    //Subject do RxJS pode fazer isso
    //Diferentemente do Observable, com o qual podemos inscrever e obter valores, com o Subject podemos, 
    //além disso, emitir um valor e escutá-lo
    onKeyUpSearchField(event: KeyboardEvent){
        this.debounce.next((event.target as HTMLInputElement).value)
    }

    //o ouvinte do subject fica ouvindo indefinidamente mesmo quando sai da pagina
    //então quando o componente é destruido é feita a desinscrição para não ouvir mais e nao ocupar memoria
    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }
}