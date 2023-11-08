//ng generate component photos/photo-list
//componente para listar photos

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = ''
  hasMore: boolean = true
  currentPage: number = 1
  userName: string = ''

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService){} //construtor se usa para injecao de dependencia

  ngOnInit(): void {//semelhante ao useeffect do react e created do vue
    const dados: any = this.activatedRoute.snapshot.data //pega os dados do resolver que foi definido no arquivo de rotas
    this.photos = dados.photos //pega a propriedade photos
    this.userName = this.activatedRoute.snapshot.paramMap.get('userName') || ''    
  } 

  //carrega mais fotos da paginação
  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.filter=''
        //this.photos.push(...photos);//adiciona as novas fotos que vieram da paginação e mantem as que ja tem
        this.photos = this.photos.concat(photos)//concatenando gera uma nova lista e isso faz com que o angular perceba a mudança
        if(!photos.length) this.hasMore = false;//se vier um array da vazio paginação significa que não tem mais fotos então hasMore=false
    });
  }
}

//observable: lida com operações assincronas
//observable é lazy (preguiçoso), pois só vai buscar os dados se tiver alguém inscrito nele (observable.subscribe()). 
//Mas para não termos que ficar declarando esta variável, podemos encadear uma chamada diretamente, solicitando o get() e então um subscribe().
//O subscribe() recebe dois parâmetros, sendo o primeiro deles o callback a ser chamado caso haja sucesso, e o segundo a ser chamado passando o erro que vem do backend

