import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { AddbookComponent } from './addbook/addbook.component';
import { ListbookComponent } from './listbook/listbook.component';
import { ViewComponent } from './view/view.component';
import { ReadComponent } from './read/read.component';
import { ReaditemComponent } from './readitem/readitem.component';
import { DeleteComponent } from './delete/delete.component';
import { UpdateComponent } from './update/update.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';
import { UserComponent } from './user/user.component';
import { ReadbookComponent } from './readbook/readbook.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Home1Component,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AddbookComponent,
    ListbookComponent,
    ViewComponent,
    ReadComponent,
    ReaditemComponent,
    DeleteComponent,
    UpdateComponent,
    UpdateitemComponent,
    UserComponent,
    ReadbookComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
