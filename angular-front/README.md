# O Angular, ao contrário do React, por exemplo, não possui um padrão definido de gerenciamento de estado. O Rxjs possui observers (que são a nossa interface para consumir dados) e observables (nossa interface para submeter dados)

# arquivo angular.json
- contém usa série de configurações sobre o projeto, pode adicionar css globais e scripts globais no projeto entre outras coisas.


# (keyup) entre parenteses faz um event binding da propriedade keyup com uma varivel do componente levando o valor do html / evento para o componente

# [] propriedade entre colchetes significa que o valor de uma propriedade do componente virá para o componente html

# @Input()
- permite que um componente pai atualize dados no componente filho.
# @Output()
- permite que o filho envie dados para um componente pai


# Subjects:
- Um Subject RxJS é um tipo especial de Observable que permite que valores sejam multicast para muitos Observadores. Enquanto os Observables simples são unicast (cada Observer inscrito possui uma execução independente do Observable), os Subjects são multicast. Um Subject é como um Observable, mas pode fazer multicast para muitos Observadores. Cenário real, Vamos supor, temos um componente que está mostrando mensagens atualizadas, e esse componente é reutilizável e usado em 3 a 4 componentes pai, e queremos fazer isso de uma maneira que seja sincronizado com todos os lugares para mostrar mensagens atualizadas assim que ele recebeu. então, neste tipo de situações, o Subject - RxJS entra onde a sincronização está envolvida


# erro componente não é conhecido:
- Use o nome do elemento no erro para localizar o(s) arquivo(s) em que o elemento está sendo usado. Verifique se o nome e o seletor estão corretos. Certifique-se de que o componente seja importado corretamente dentro do seu NgModule ou componente autônomo, verificando sua presença no campo imports. Se o componente estiver declarado em um NgModule (ou seja, não é autônomo) certifique-se de que ele seja exportado corretamente, verificando sua presença no campo export.




# build e deploy
- ng build
vai gerar um main.js otimizado para produção, também gera o styles.css com os estilos globais
runtime.js: código utilitário usado pelo Webpack para carregar código em tempo de execução
para que o angular funcione
polyfills.js: polyfills que permitem o uso de recursos mais recentes em ambientes mais antigos (por exemplo, usando Angular em navegadores da Web desatualizados).

vai ser gerado uma pasta dist na raiz do projeto e dentro dela uma pasta com o nome do projeto
contendo todos os arquivos necessários, já otimizados e com um hash para identificar mudanças
futuras, essa pasta deve ser colocada por exemplo num servidor web apache, nginx, tomcat etc.

se alterássemos a barra de endereços do navegador, a location inevitavelmente seria modificada, e o seria feita uma requisição pro servidor web. Sabemos que isso não pode ser feito, e que esta mudança é apenas para efeito de rotas, para que o Angular detecte qual componente deve ser carregado é preciso ativar no servidor web que está hospedando o projeto angular ou de outro framework para que ele sempre retorne um index.html em qualquer requisição feita para ele pois é esse arquivo que o angular usa para poder funcionar, se não der pra fazer isso é preciso 
habilitar o '#' na URL pois ele impede que sejam disparadas reqisições pro servidor web pra que não seja disparada uma requisição pro servidor web toda vez que tentar acessar uma rota do projeto, essa configuração é feita no app.roting no RouterModule.forRoot passando useHash true: RouterModule.forRoot(routes, { useHash: true } )


# Lazy loading e code splitting (carregamento de modulos sob demanda, para não carregar tudo de uma vez tornando o carregamento lento)

- Se uma Single Page Application é aquela página que só se recarrega uma única vez durante o seu uso, ela precisará carregar tudo de que precisa já na primeira inicialização.

Para solucionarmos isto, poderemos fazer uma separação de código do nosso sistema, algo que chamamos de Code splitting. Com isso, definiremos os módulos que queremos separar e carregar sob demanda. Em um sistema existe a parte de admin, cujo acesso normalmente é restrito, e todos os seus elementos e componentes não precisam ser carregados na inicialização da página, e sim apenas quando o usuário quiser, e então o Angular baixará e fará funcionar apenas uma parte (chunk) do módulo.

Se começarmos a quebrar a aplicação em pedaços, o primeiro carregamento será bem mais rápido. Às vezes existe uma parte do sistema que é raramente utilizada pelo usuário final, ou é utilizada por um usuário muito específico, como é o caso do próprio admin (de "administrador").

Este carregamento é chamado de Lazy loading, em tradução livre, "carregamento preguiçoso". Ou seja, o Angular não carregará parte do código da aplicação até que o usuário queira, acessando uma rota, e assim em diante. Por mais que nosso main não esteja tão grande, faremos o seu Code splitting.

Normalmente, este processo é feito quando o arquivo zipado de main passa de 300KB, porém esta não é uma regra.



# CursoAngularAlura

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
