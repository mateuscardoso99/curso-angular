//um pipe é como um 'tubo' em que uma informação entra é alterada e depois retornada ja com a trasformação
//usado para datas, filtros, deixar letra maiuscula etc..

import { Pipe, PipeTransform } from '@angular/core';
import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {

    //1o parametro é em quem será aplicado a transformação, o 2o é os parametros que serao usados na transformação
    transform(photos: Photo[], description: string) {
        description = description.trim().toLowerCase()

        if(description){
            return photos.filter(photo => 
                photo.description.toLowerCase().includes(description)
            )
        }else{
            return photos
        }
        //se existir um parametro descrition faz o filtro retornando apenas as photos
        //que a descrição bate com o filtro, se não existir retorna todas as fotos
    }
}

//angular ajuda na organização, agilidade no desenvolvimento mas tem vezes que é preciso usar js puro