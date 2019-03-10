import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { CompraComponent } from './component/compra/compra.component';

//importar variable que exportamos de routing.ts
import { appRouter } from './routing';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    appRouter //importar la variable que exportaos de routing.ts
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
