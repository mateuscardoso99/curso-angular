import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RequestInterceptor } from "./auth/request.interceptor";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    declarations: [HeaderComponent],
    imports:[CommonModule,RouterModule],//routermodule permite usar o routerlink
    exports: [HeaderComponent], //como será usado em outros modulos precisa ser exportado
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        }//especifica que todo http interceptor usará a class RequestInterceptor, multi: true pra caso precisar ter mais de um interceptor
    ]
})
export class CoreModule{}