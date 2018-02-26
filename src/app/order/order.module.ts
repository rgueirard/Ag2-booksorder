import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRootComponent } from './order-root/order-root.component';
import { FormsModule } from "@angular/forms";
import { CatalogService } from "./catalog.service";
import { OrderTableComponent } from './order-root/order-table/order-table.component';
import { OrderManualFormComponent } from './order-root/order-manual-form/order-manual-form.component';
import { OrderCatalogFormComponent } from './order-root/order-catalog-form/order-catalog-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    OrderRootComponent,
    OrderTableComponent,
    OrderManualFormComponent,
    OrderCatalogFormComponent
  ],
  providers: [
    // {provide: CatalogService, useClass: CatalogService},
    CatalogService //shortcut
  ],
  exports: [OrderRootComponent]
})
export class OrderModule { }
