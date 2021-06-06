import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FooterComponent} from "./components/footer/footer.component";
import {HeaderComponent} from "./components/header/header.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "../material/material.module";
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {CartComponent} from "./components/cart/cart.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    MatIconModule,
    MatBadgeModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
