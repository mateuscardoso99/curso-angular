import { Component, Input } from "@angular/core";

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})

export class PhotoComponent{
    @Input() description='' //@input: para pegar as props passadas
    @Input() url=''
}

//Um componente obrigatoriamente precisa pertencer a um módulo.