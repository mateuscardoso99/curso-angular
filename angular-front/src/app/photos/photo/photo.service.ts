//isolaremos o acesso à API em uma classe especializada em consumi-las.
//chamamos estas classes de serviços

import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Photo } from "./photo";

const API = 'http://localhost:3000';


/**
 * ao criarmos um serviço, usamos @Injectable().
 * Este decorator indica que photoService é injetável, ou seja, pode receber HttpClient e outros. 
 * No entanto, precisamos informar o seu escopo, se será um único PhotoService para a 
 * aplicação inteira, ou não. No nosso caso, se tivermos trinta componentes e quisermos usar o 
 * PhotoService, e o mesmo objeto, então passaremos a configuração providedIn, 
 * um objeto JavaScript cujo valor é root. Com isso, sinalizamos que quando o Angular for criá-lo, 
 * será no escopo raiz, isto é, qualquer componente da nossa aplicação que precisar de 
 * PhotoService o terá disponível.
 */

@Injectable({ providedIn: 'root' })

export class PhotoService {

    /**
     * Vamos utilizar o modificador de acesso private no parâmetro do construtor. 
     * Assim, o TypeScript entende que queremos não apenas receber este parâmetro como torná-lo 
     * uma propriedade da classe. Com o private, tudo que estiver fora de PhotoService não poderá 
     * usar o http, e isto justifica o uso de this.http também. Sem o modificador, 
     * teremos um erro de compilação.
     */
    constructor(private http: HttpClient) {}


    /**
     * Também não podemos usar o subscribe() aqui, já que isto deverá ser feito no momento da busca 
     * de dados. O responsável por isso é aquele que for chamar o método listFromUser()
     */
    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(`${API}/${userName}/photos`);       
    }

    //paginação, criando um objeto HttpParams que será convertido em query params quando passado na url
    listFromUserPaginated(userName: string, page: number) {
        const param = new HttpParams().append('page',page.toString())
        return this.http
            .get<Photo[]>(`${API}/${userName}/photos`,{params: param});       
    }
}