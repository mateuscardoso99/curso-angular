import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { User } from "../user/user";
import { UserService } from "../user/user.service";

@Component({
    selector: 'ap-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent{
    user$: Observable<User | null>//o $ serve para indicar que aquela variavel guarda um valor de um observable
    //user: User | null; //com (user$ | async) no template faz-se desnecessario usar uma variavel user pra pegar o retorno do observable, pois pega direto no template

    constructor(
        private userService: UserService,
        private router:Router
    ) {
        this.user$ = userService.getUser();
        //this.user$.subscribe(user => this.user = user);
    }

    logout() {
        this.userService.logout();
        this.router.navigate(['']);
    }
}