//modulo de photo-list, submodulo de photos-module, isto é opcional só pra melhorar a organizacao

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { DarkenOnHoverModule } from "../../shared/directives/dark-on-hover/dark-on-hover.module";
import { CardModule } from "../../shared/components/card/card.module";
import { PhotoModule } from "../photo/photo.module";
import { FilterByDescription } from "./filter-by-description.pipe";
import { LoadButtonComponent } from "./load-button/load-button.component";
import { PhotoListComponent } from "./photo-list.component";
import { PhotosComponent } from "./photos/photos.component";
import { SearchComponent } from "./search/search.component";

@NgModule({
    declarations:[
        PhotoListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescription,
        SearchComponent
    ],
    imports:[
        CommonModule, //torna as diretivas ngfor, ngif ... disponiveis para ser acessadas
        PhotoModule, //importando modulo que tem componentes que são usados por componentes desse modulo
        CardModule,
        DarkenOnHoverModule
    ]
    //nao tem exports porque os componentes desse modulo nao sao chamados em outros modulos
})

export class PhotoListModule{}