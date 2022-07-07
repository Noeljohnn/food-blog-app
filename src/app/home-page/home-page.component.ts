import { Component, OnInit } from '@angular/core';
import pizzaData  from '../pizza.json';
interface Pizza {
  id:Number;
  name:string;
  veg:boolean;
  price:Number;
  description:string;
  quantity:Number;
  img:string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  // pizzas: any

  constructor() { }
  pizzas:Pizza[] = pizzaData;


  ngOnInit(): void {
    // this.getAllData()
  }

//   getAllData(){
//     this.pizzaService.getPizzaData()
//     .subscribe({
//       next: (response: any) => {
//         this.pizzas = response
//         console.log(response);
//       }
//     })
// }

// getDessertData(){
//   this
// }
}
