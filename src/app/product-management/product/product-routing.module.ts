import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFromComponent } from './components/product-from/product-from.component';
import { ManagerComponent } from '../manager/managements/manager.component';


const routes: Routes = [
  {
    path:'',
    component:ManagerComponent
  },
  {
    path:'form',
    component:ProductFromComponent
  },
  {
    path:'list',
    component:ProductListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
