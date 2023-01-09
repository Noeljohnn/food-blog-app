import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PizzaService } from '../services/pizza.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  onSubmit(){
    console.warn(this.useremailForm.value);
  }

  constructor(private userService:UserService) { }

    subscribers: any
  
    ngOnInit(): void {
    this.getAllSubscribers()
  }

  getAllSubscribers(){
    this.userService.getSubscribers()
    .subscribe(res=>{
    this.subscribers = res
  })
  }

  useremailForm = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required)
  });

  postUser(){
    //debugger
    this.userService.postUser(this.useremailForm.value);
    this.useremailForm.reset()
    this.getAllSubscribers()
  }
}
