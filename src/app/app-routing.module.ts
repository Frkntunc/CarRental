import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { CardetailComponent } from './components/car/cardetail/cardetail.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
{path:"", pathMatch:"full",component:CarComponent},
{path:"cars",component:CarComponent},
{path:"cars/brand/:brandId",component:CarComponent},
{path:"cars/color/:colorId",component:CarComponent},
{path:"cars/cardetails/:carId",component:CardetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
