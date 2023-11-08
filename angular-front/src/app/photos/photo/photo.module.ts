import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo.component";

@NgModule({
    declarations: [PhotoComponent],
    imports:[
        CommonModule,
        HttpClientModule
    ],
    exports:[
        PhotoComponent
    ]//caso outro um componente de outro modulo precise usar algum componente desse modulo entao precisa exportar esse componente
})
export class PhotoModule{}