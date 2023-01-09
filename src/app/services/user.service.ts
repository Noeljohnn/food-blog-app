import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  postUser(data: any) {
    return this.http.post<any>("http://localhost:3000/subscribers", data)
      .subscribe(res => {
        return res
      })
  }

  getSubscribers(){
    return this.http.get<any>("http://localhost:3000/subscribers");
  }
}
