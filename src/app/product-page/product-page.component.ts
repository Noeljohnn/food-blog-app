import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  pizzaDetail:any
  constructor(private activatedRouter: ActivatedRoute, private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe(params =>{
      let id = params.get('id')
      if(id != null){
        this.getPizzaDetail(id)
      }
    })
  }

  getPizzaDetail(id: any) {
    this.pizzaService.getPizza()
    .subscribe(res => {
      this.pizzaDetail = res.find((a: any) => {
      return a.id == id
      })
    })    
  }
}
