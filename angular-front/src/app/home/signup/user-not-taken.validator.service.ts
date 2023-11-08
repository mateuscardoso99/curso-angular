import { Injectable } from '@angular/core';
import { SignUpService } from './signup.service';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs';

//@Injectable({ providedIn: 'root' }) 
//nao precisar ser 'root' pois esse service só é usado no signup.component e nao no app inteiro

@Injectable()
export class UserNotTakenValidatorService {

    constructor(private signUpService: SignUpService) {}

    checkUserNameTaken() {
        return (control: AbstractControl) => {
            return control
                .valueChanges
                .pipe(debounceTime(300))
                .pipe(switchMap(userName => {
                    return this.signUpService.checkUserNameTaken(userName);
                }))
                .pipe(map(isTaken => isTaken ? { userNameTaken: true } : null))
                .pipe(first());//first encerra a operação e retorna o primeiro resultado encontrado
        }

        ////pipe() roda entre a execução da operação e o subscribe(),
        //debounceTime faz com que a busca na API pra ver se o userName já existe seja depois de um intervalo de 300ms de digitação
        //pois não queremos que o validador assíncrono verifique cada dígito que fizermos no input, e sim que haja algum tipo de intervalo
        
        //switchMap faz com que ele pare de ouvir a digitação para fazer a requisição pra API
        //ele muda o foco
    }
}