import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPizzaComponent } from './all-pizza/all-pizza.component';
import { FormComponent } from './form/form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  { path: '', component:HomePageComponent},
  { path: 'All-pizza', component:AllPizzaComponent},
  { path: 'Product-page/:id', component:ProductPageComponent},
  { path: 'form', component:FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
