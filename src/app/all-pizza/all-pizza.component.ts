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
  selector: 'app-all-pizza',
  templateUrl: './all-pizza.component.html',
  styleUrls: ['./all-pizza.component.scss']
})
export class AllPizzaComponent implements OnInit {

  constructor() { }
  pizzas:Pizza[] = pizzaData;

  ngOnInit(): void {
  }

}
