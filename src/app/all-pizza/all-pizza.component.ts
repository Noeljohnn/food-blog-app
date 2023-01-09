import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-all-pizza',
  templateUrl: './all-pizza.component.html',
  styleUrls: ['./all-pizza.component.scss']
})
export class AllPizzaComponent implements OnInit {

  constructor(private pizzaService:PizzaService) { }
  allPizza: any

  ngOnInit(): void {
    this.getAllPizza()
  }

  getAllPizza(){
    this.pizzaService.getPizza()
    .subscribe(res=>{
    this.allPizza = res
  })
  }
}
