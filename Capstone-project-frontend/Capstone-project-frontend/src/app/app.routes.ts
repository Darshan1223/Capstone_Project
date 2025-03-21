import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { ViewProductComponent } from './components/product/view-product/view-product.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path:'',component: WelcomeComponent},
    {path:'login',component: LoginComponent},
    {path:'register',component: RegisterComponent},
    {path:'products',component: ProductListComponent},
    {path:'product/add',component: AddProductComponent},
    {path:'product/edit/:id',component: EditProductComponent},
    { path: 'product/view/:id', component: ViewProductComponent },
    {path:'about',component: AboutComponent}

];
