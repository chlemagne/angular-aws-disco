import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ItemModel } from '../models/item.model';

const ITEM_API = `${environment.apiUrl}/item`;

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  getItems(): Observable<ItemModel[]> {
    return this.http.get<ItemModel[]>(ITEM_API);
  }
}
