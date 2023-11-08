import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from '../token/token.service';
import { User } from './user';
import jwt_decode from 'jwt-decode'

@Injectable({ providedIn: 'root' })
export class UserService{
    private userSubject = new BehaviorSubject<User | null>(null)
    //diferente do Subject O BehaviorSubject armazena a última emissão até que alguém 
    //apareça para consumi-la

    private userName: string;

    constructor(private tokenService: TokenService) {
        this.tokenService.hasToken() && this.decodeAndNotify()
        //se existir um token decodifica ele
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify()
    }

    getUser() {
        return this.userSubject.asObservable()
        //quem chamar esse metodo vai receber um observable userSubject com 
        //os dados do usuario
        //observable permite você fazer um subscribe em um método ou função para que possa receber as suas modificações
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken()
        const user = jwt_decode(token || '') as User // (aqui a chamada jwt_decode)
        this.userName = user.name;
        this.userSubject.next(user)
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.userName;
    }
}