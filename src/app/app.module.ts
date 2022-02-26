import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Feb21Component } from './feb21/feb21.component';
import { Feb22Component } from './feb22/feb22.component';
import { ProductListComponent } from './product-list/product-list.component';
import { sexFilter } from './product-list/sexFilter';

@NgModule({
  declarations: [
    AppComponent,
    Feb21Component,
    Feb22Component,
    ProductListComponent,    
    sexFilter
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
