import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Feb21Component } from './feb21/feb21.component';
import { Feb22Component } from './feb22/feb22.component';
import { ProductListComponent } from './product-list/product-list.component';
import { sexFilter } from './product-list/sexFilter';
import { DependancyComponent } from './dependancy/dependancy.component';
import{HttpClientModule} from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { HttpComponent } from './http/http.component'

@NgModule({
  declarations: [
    AppComponent,
    Feb21Component,
    Feb22Component,
    ProductListComponent,    
    sexFilter,
    DependancyComponent,
    UserComponent,
    HttpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
