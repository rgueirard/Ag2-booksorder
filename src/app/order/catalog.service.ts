import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { OrderRow } from "./order-row";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Book } from "./book";

const url = 'https://api.mongolab.com/api/1/databases/sfbooks/collections/sfbooks/?apiKey=d3qvB8ldYFW2KSynHRediqLuBLP8JA8i';

@Injectable()
export class CatalogService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(url);
  }

}
