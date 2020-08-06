import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ManagerComponent } from './product-management/manager/managements/manager.component';
import { ProductFromComponent } from './product-management/product/components/product-from/product-from.component';
import { ProductListComponent } from './product-management/product/components/product-list/product-list.component';
import { ProductDialogComponent } from './product-management/product/components/product-dialog/product-dialog.component';
import { ProductPageComponent } from './product-management/product/containers/product-page/product-page.component';


const routes: Routes = [
  {
    path:'',
    canActivate:[],
    loadChildren:() => import('./home/home.module').then(m =>m.HomeModule)
  },
  {
    path:'login',
    canActivate:[],
    loadChildren:() => import('./login-management/login-management.module').then(m => m.LoginManagementModule)
  },
  {
    path:'manager',
    component:ManagerComponent,
    children:[
      {path:'list',component:ProductListComponent},
      {path:'form',component:ProductPageComponent}
    ]
  }
  // {
  //   path:'product',
  //   canActivate:[],
  //   loadChildren:() => import('./product-management/product/product.module').then(m => m.ProductModule)
  // },
  // {
  //   path:'manager',
  //   canActivate:[],
  //   loadChildren:() => import('./product-management/product-management.module').then(m =>m.ProductManagementModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules
  })],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
