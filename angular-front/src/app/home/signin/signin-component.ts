import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { AuthService } from '../../core/auth/auth.service';

@Component({
    templateUrl: './signin.component.html'
    //nao precisa do selector pois nao sera usado dentro de outro componente
})
export class SignInComponent implements OnInit, AfterViewInit{
    loginForm: FormGroup = new FormGroup({
        userName: new FormControl(''),
        password: new FormControl(''),
    })
    //"strictPropertyInitialization": false tsconfig.json para remover erros de inicializacao de propriedades

    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;
    //ViewChild acessa elementos do DOM, no html tem que colocar #userNameInput
    //dessa forma será possível pegar o elemento do DOM para manipular

    constructor(
        private formBuilder: FormBuilder, 
        private authService: AuthService, 
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            userName: ['',Validators.required], //1o parametro é o valor padrão, o 2o sao as regras de validação
            password: [
                '',
                [
                    Validators.required,
                    Validators.minLength(3)
                ]
            ]
        })
    }

    ngAfterViewInit(){
        this.platformDetectorService.isPlatformBrowser() 
            && this.userNameInput.nativeElement.focus()
    }

    login(){
        const userName = this.loginForm.get('userName')?.value
        const password = this.loginForm.get('password')?.value

        this.authService
            .authenticate(userName,password)
            .subscribe({// .subscribe porque o httpclient retorna um observable
                next: () => this.router.navigate(['user', userName]),//next caso der certo redireciona pra /user/nome_do_usuario
                error: err => {
                    alert(err.error.message);
                    this.loginForm.reset();//limpar formulario
                    this.platformDetectorService.isPlatformBrowser() 
                        && this.userNameInput.nativeElement.focus()
                    //se tiver rodando no navegador executa o focus senão não executa
                }
            });
    }
}