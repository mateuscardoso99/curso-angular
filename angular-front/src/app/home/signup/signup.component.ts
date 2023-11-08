import { Component, ElementRef, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lowerCaseValidator } from '../../shared/validators/lowercase.validator';
import { NewUser } from './new-user.dto';
import { SignUpService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
    templateUrl: './signup.component.html',
    providers: [UserNotTakenValidatorService]//injeta dependencia do componente
})
export class SignUpComponent implements OnInit, AfterViewInit {

    signupForm: FormGroup;
    @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private userNotTakenValidatorService: UserNotTakenValidatorService,
        private signUpService: SignUpService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
    ) {}

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            email: ['',
                [
                    Validators.required,
                    Validators.email
                ]
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40)
                ]
            ],
            userName: ['',
                [
                    Validators.required,
                    //Validators.pattern(/^[a-z0-9_\-]+$/),//pode passar expressao regular
                    lowerCaseValidator,
                    Validators.minLength(2),
                    Validators.maxLength(30)
                ],
                this.userNotTakenValidatorService.checkUserNameTaken()
            ],//o terceiro parametro são os validadores assincronos ou seja que fazem requisicoes pra api pra verificar algo por exemplo
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14)
                ]
            ]
        })        
    }

    ngAfterViewInit() {
        this.platformDetectorService.isPlatformBrowser() 
            && this.emailInput.nativeElement.focus()
    }

    signup() {
        const newUser = this.signupForm.getRawValue() as NewUser //retorna um objeto com os valores digitados no form
        this.signUpService
        .signup(newUser)
        .subscribe({
            next: () => this.router.navigate(['']),
            error: err => console.log(err)
        });
    }
}