import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';
import { PhotosModule } from './photos/photos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotosModule, //*se usar lazyloading num modulo para que carregue de acordo com a necessidade ele não pode estar no app.module
    ErrorsModule,
    CoreModule //importando o core-module o header component que é exportado por ele pode ser usado
  ],//imports so deve ter outros modulos
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
