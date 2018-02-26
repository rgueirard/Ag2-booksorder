import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {Book} from "../../book";
import {OrderRow} from "../../order-row";

@Component({
  selector: 'app-order-catalog-form',
  templateUrl: './order-catalog-form.component.html',
  styleUrls: ['./order-catalog-form.component.css']
})
export class OrderCatalogFormComponent implements OnInit {

  @Input() books: Book [];
  @Output() addBook = new EventEmitter<OrderRow>();

  catalog: {book?: Book, quantity?:number} = {};

  constructor() { }

  emitAdd(): void {
    this.addBook.emit(new OrderRow(this.catalog.book.title, this.catalog.book.author, this.catalog.book.price, this.catalog.quantity || 1));
    this.catalog = {};
  }

  ngOnInit() {
  }

}
