import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item2 } from '../../shared/interfaces/item2';
import { State } from '../../shared/enums/state.enum';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root'
})
export class Collection2Service {

  private _collection: Observable<Item2[]>;
  private url = 'api/collection';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(
    private http: HttpClient
  ) {
    this.collection = this.http.get<Item2[]>(this.url);
  }

  /**
   * getter collection
   */
  public get collection(): Observable<Item2[]> {
    return this._collection;
  }

  /**
   * setter collection
   */
  public set collection(col: Observable<Item2[]>) {
    this._collection = col;
  }

  public add(item: Item2): Observable<any> {
    return this.http.post<Item2>(this.url, item, this.httpOptions);
  }

  public delete(item: Item2): Observable<Item2> {
    console.log(item);
    return this.http.delete<Item2>(`${this.url}/${item.id}`);
  }

  public update(item: Item2, state: State): Observable<Item2> {
    let copy: Item2 = Object.assign({}, item);
    copy.state = state;
    return this.http.put<Item2>(`${this.url}/${item.id}`, copy).pipe(
      tap((res) => {
        console.log(res);
      })
    );
  }

}
