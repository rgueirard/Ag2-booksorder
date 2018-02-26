import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {OrderRow} from "../../order-row";

@Component({
  selector: 'app-order-manual-form',
  templateUrl: './order-manual-form.component.html',
  styleUrls: ['./order-manual-form.component.css']
})
export class OrderManualFormComponent implements OnInit {

  @Output() addBook = new EventEmitter<OrderRow>();

  newRow = new OrderRow();

  constructor() { }

  emitAdd(): void {
    this.addBook.emit(this.newRow);
    this.newRow = new OrderRow();
  }

  ngOnInit() {
  }

}
