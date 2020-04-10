import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ItemComponent} from '../items/item.component';
import {ItemService} from '../items/item.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,ItemComponent],
  bootstrap:    [ AppComponent ],
  providers:[ItemService]
})
export class AppModule { }
