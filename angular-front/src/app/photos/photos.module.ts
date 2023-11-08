//modulo de photos ajunta todos os componentes que são relativos a photos nele
//e depois será importado no app.module.ts
//ideia é agrupar tudo em um modulo de photos e depois exportar e importar aonde for preciso

import { HttpClientModule } from '@angular/common/http';//cliente http do angular
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';

//ngmodule declara um modulo
//Componentes declarados no array declarations de um módulo são visíveis para os componentes também declarados no array.

@NgModule({
    //exports: [PhotoComponent], //exporta para ser acessivel para quem importar esse modulo
    imports: [
        PhotoModule,//importando sub-modulos
        PhotoFormModule,
        PhotoListModule
    ]
})

export class PhotosModule{}