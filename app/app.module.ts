import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {MyDemoComponent} from './my-demo.component';
import {MaterializeDirective} from "angular2-materialize";
import {Gallery} from './gallery.component';
import {Dropdown} from './dropdown.component';
@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ 
  AppComponent, 
  MyDemoComponent,
  MaterializeDirective,
  Gallery,
  Dropdown
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

