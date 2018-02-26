import {Component, OnInit, OnDestroy} from '@angular/core';
import {OrderRow} from "../order-row";
import {ReduceUtils} from "../reduce-utils";
import {CatalogService} from "../catalog.service";
import {Book} from "../book";
import {Subscription, Observable} from "rxjs";

@Component({
  selector: 'app-order-root',
  templateUrl: './order-root.component.html',
  styleUrls: ['./order-root.component.css']
})
export class OrderRootComponent implements OnInit/*, OnDestroy*/ {

  rows = [
    new OrderRow('La Nuit des temps', 'René Barjavel', 7.43, 3),
    new OrderRow('Des fleurs pour Algernon', 'Daniel Keyes', 6.00, 5)//,
  ];

  manualMode = false;

  books$: Observable<Book []>;

  // subscription: Subscription;

  constructor(private catalogService: CatalogService) { }

  removeRow(row: OrderRow): void {
    this.rows = this.rows.filter(r => r!== row);
  }

  addRow(row: OrderRow): void {
    this.rows.push(row);
  }

  ngOnInit() {
    // this.subscription = this.catalogService.getBooks().subscribe(*
    this.books$ = this.catalogService.getBooks();
    // this.catalogService.getBooks().subscribe(
    //   datas => {
    //     this.books = datas;
    //   },
    //   error => console.error(error)
    // )
  }

  // ngOnDestroy() {
  //   if (this.subscription) {
  //     this.subscription.unsubscribe();
  //   }
  // }

}
