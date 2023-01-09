import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  constructor(private pizzaService:PizzaService) { }
  pizzaData: any

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData(){
    this.pizzaService.getPizza()
    .subscribe({
      next: (response: any) => {
        this.pizzaData = response
        console.log(response);
      }
    })
}
}
