// Em photo-list.component.ts, a lista de imagens começa com um array vazia (photos: Photo[] = []), 
// então, quando o componente é carregado, a lista será considerada vazia no *ngIf e a mensagem que não 
// existe fotos será exibida quando na verdade existe mas demora um pouco ate chegar da api. 
// Depois, na inicialização ngOnInit(), os dados serão trazidos da API e colocados na propriedade photos, 
// que então terá dados, fazendo com que a mensagem de que não existe fotos deixe de ser exibida.
// O problema é que a busca destes dados está sendo feita no componente, então, 
// para que a mensagem não apareça, o ideal é que o componente receba a lista de imagens pronta 
// antes de navegarmos a ele. Em suma, entraremos na rota e, antes do componente ser criado e 
// renderizado, resolveremos e disponibilizaremos os dados de que ele precisa. Deste modo, o 
// componente receberá os dados prontos, sem precisar buscá-los, e o array de imagens será preenchido.
// Podemos resolver este tipo de problema com o Angular, por meio do Resolver, capaz de lidar com 
// dados durante a navegação de uma rota para disponibilizá-los a um componente antes deste ser carregado.

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PhotoService } from '../photo/photo.service';
import { Photo } from '../photo/photo';

@Injectable({ providedIn: 'root'})
export class PhotoListResolver implements Resolve<Observable<Photo[]>>{//observable do tipo photo

    //importar photoService do tipo PhotoService para buscar as fotos
    constructor(private service: PhotoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]>{
        const userName = route.paramMap.get("userName")////pegando parametro da rota
        return this.service.listFromUserPaginated(userName || '',1);
    }

}