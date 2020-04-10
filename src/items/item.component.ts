import {Component} from "@angular/core";
import {ItemService} from "./item.service";

@Component({
  selector:'item-grid',
  templateUrl: './item.component.html',
  styleUrls: [ './item.component.css' ]
})
export class ItemComponent{
   items:object[];
   constructor(itemService:ItemService)
   {
      this.items=itemService.getItems();
   }
}