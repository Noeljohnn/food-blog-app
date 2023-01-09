import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { FooterComponent } from './footer/footer.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { AllPizzaComponent } from './all-pizza/all-pizza.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    AllPizzaComponent,
    ProductPageComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbCheckboxModule,
    HttpClientModule,
    MdbCollapseModule,
    MdbCarouselModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MdbFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

const firebaseConfig = {
  apiKey: "AIzaSyCj7oUBcw2ciF6w31payxloEq9Hiu8M1xM",
  authDomain: "pizza-ca9ce.firebaseapp.com",
  databaseURL: "https://pizza-ca9ce-default-rtdb.firebaseio.com",
  projectId: "pizza-ca9ce",
  storageBucket: "pizza-ca9ce.appspot.com",
  messagingSenderId: "847083006938",
  appId: "1:847083006938:web:080be41fd5df721e0b6ee3",
  measurementId: "G-X96VD7WEB6",
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAuth(app);

