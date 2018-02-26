import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';
import {ReduceUtils} from "../../reduce-utils";
import {OrderRow} from "../../order-row";

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit/*, OnChanges*/ {

  @Input() rows: OrderRow [];
  @Output() removeBook = new EventEmitter<OrderRow>();

  constructor() { }

  ngOnInit() {
  }

  /*ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['rows']) {
      this.rows = changes['rows'].currentValue;
    }
  }*/

  getTotalHT(): number {

    return this.rows && this.rows
      .map((r) => r.getHTPrices())
      .reduce(ReduceUtils.total, 0);
  }

  getTotalTTC(): number {
    return this.rows && this.rows
      .map((r) => r.getTTCPrices())
      .reduce(ReduceUtils.total, 0);
  }

  isBig(row: OrderRow): boolean {
    return row.getHTPrices() > 1000;
  }

  percent(row: OrderRow): number {
    return 100 * row.getHTPrices() / this.getTotalHT()
  }
}
