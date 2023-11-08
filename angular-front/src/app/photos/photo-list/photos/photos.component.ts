import { Input, OnChanges, Component, SimpleChanges } from '@angular/core';
import { Photo } from '../../photo/photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: Photo[] = []
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges){
    if(changes['photos']){
      this.rows = this.groupColumns(this.photos);
    }            

    //esse hook roda quando ocorrem mudanças em alguma propriedade
    //verifica se houve mudanças na propriedade photos se sim chama a função
    //ngoninit nesse caso não iria funcionar pois só roda na renderização quando photos ainda é vazio
  }

  groupColumns(photos: Photo[]) {
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3) {
      newRows.push(photos.slice(index, index + 3));
      //O primeiro parâmetro de slice é a posição inclusive na qual os elementos serão considerados. 
      //O segundo é a posição final (não inclusiva).
    }
    //na 1a iteracao i=0 o slice pega os indices 0,1,2
    //na 2a iteracao i=3 o slice pega os indices 3,4,5 e assim por diante
    //então newRows será um array com cada indice contendo 3 arrays dentro
    //ex:[ [[],[],[]],[[],[],[]] ], essa logica foi feita para usar o grid corretamente

    return newRows;
  }

}
