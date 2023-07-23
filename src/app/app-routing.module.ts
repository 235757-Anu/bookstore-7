import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AdminComponent } from './admin/admin.component';
import { DeleteComponent } from './delete/delete.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { ListbookComponent } from './listbook/listbook.component';
import { LoginComponent } from './login/login.component';
import { RatingComponent } from './rating/rating.component';
import { ReadComponent } from './read/read.component';
import { ReadbookComponent } from './readbook/readbook.component';
import { ReaditemComponent } from './readitem/readitem.component';
import { ReadlistComponent } from './readlist/readlist.component';
import { RegisterComponent } from './register/register.component';
import { UpdateComponent } from './update/update.component';
import { UpdateitemComponent } from './updateitem/updateitem.component';
import { UserComponent } from './user/user.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'home1',component:Home1Component},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'header',component:HeaderComponent},
  {path:'admin',component:AdminComponent},
  {path:'create',component:AddbookComponent},
  {path:'view',component:ViewComponent},
  {path:'list',component:ListbookComponent},
  {path:'read',component:ReadComponent},
  {path:'readitem',component:ReaditemComponent},
  {path:'delete',component:DeleteComponent},
  {path:'update',component:UpdateComponent},
  {path:'updateitem',component:UpdateitemComponent},
  {path:'user',component:UserComponent},
  {path:'readbook',component:ReadbookComponent},
  {path:'readlist',component:ReadlistComponent},
  {path:'rating',component:RatingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
