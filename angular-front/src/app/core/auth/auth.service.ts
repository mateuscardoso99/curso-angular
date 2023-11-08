import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators'
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private userService: UserService) { }

  authenticate(userName: string, password: string){
    return this.http
      .post(
        `${API_URL}/user/login`,
        {userName, password},
        {observe: 'response'} //para poder acessar os headers
      )
      .pipe(tap(response=>{
        const authToken = response.headers.get('x-access-token')
        authToken && this.userService.setToken(authToken);
        console.log(authToken)
      }))

    //pipe() roda entre a execução da operação e o subscribe(), 
    //para que executemos um código arbitrário. Isto é, incluiremos operações a serem aplicadas 
    //(filtro, timeout e por aí vai) antes do uso do subscribe()

    //A operação tap serve para a geração de side effects, normalmente quando queremos 
    //logar no console, ou acessar e gravar algum valor
  }
}
