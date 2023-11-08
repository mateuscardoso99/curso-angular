//diretiva para aplicar hover em varios componentes

import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[apDarkenOnHover]' //nome que vai referenciar a diretiva
})
export class DarkenOnHoverDirective {

    constructor(private element: ElementRef, private render: Renderer2){} 
    //elementRef faz pegar o elemento do DOM em que a diretiva foi adicionada

    @HostListener('mouseover')//HostListener pega um evento do elemento em que a diretiva foi adicionada e passa pra diretiva
    darkenOn(){
        this.render.setStyle(this.element.nativeElement,'filter','brightness(70%)')
        //setStyle(elemento, propriedade css, valor)
    }

    @HostListener('mouseleave')
    darkenOf(){
        this.render.setStyle(this.element.nativeElement,'filter','brightness(100%)')
    }
}