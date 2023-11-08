import { AbstractControl } from '@angular/forms';

//função para criar uma validação personalizada
//recebe uma propriedade do tipo abstractcontrol e retorna null caso esteja td certo ou true caso não passe na validação
export function lowerCaseValidator(control: AbstractControl) {

    if(control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowerCase: true }
    }
    return null;
}