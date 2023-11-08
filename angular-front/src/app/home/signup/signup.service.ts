import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewUser } from './new-user.dto';

const API_URL = "http://localhost:3000";

@Injectable()
//@Injectable({ providedIn: 'root' }) 
//nao precisar ser 'root' pois esse service nao é usado no app inteiro


//serviço verifica se o nome digitado no form de criar conta já existe cadastrado
export class SignUpService {

    constructor(private http: HttpClient) {}

    checkUserNameTaken(userName: string) {
        return this.http.get(API_URL + '/user/exists/' + userName);
    }

    signup(newUser: NewUser){
        return this.http.post(API_URL + '/user/signup', newUser);
    }
}