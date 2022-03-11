import { Component, NgModule } from '@angular/core';
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
import { HttpComponent } from './http/http.component';
import { ParentBlogComponent } from './parent-blog/parent-blog.component';
import { ChildModtifyComponent } from './child-modtify/child-modtify.component';
import { ChildPictureComponent } from './child-picture/child-picture.component';
import { IndexComponent } from './index/index.component';
import { ProductList2Component } from './product-list2/product-list2.component';
import { ProductDetaiComponent } from './product-detai/product-detai.component';
import { UserCenterComponent } from './user-center/user-center.component'
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
let routes =[
  {path:'',redirectTo:'index',pathMatch:'full'},
  {path:'index',component:IndexComponent},
  {path:'detail',component:ProductDetaiComponent},
  {path:'center',component:UserCenterComponent},
  {path:'plist2',component:ProductList2Component},
  {path:'**', component:NotFoundComponent}
]
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
    ParentBlogComponent,
    ChildModtifyComponent,
    ChildPictureComponent,
    IndexComponent,
    ProductList2Component,
    ProductDetaiComponent,
    UserCenterComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
