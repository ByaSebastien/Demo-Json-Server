import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private readonly _http : HttpClient
  ) { }

  get(){
    return this._http.get('http://localhost:3000/books');
  }
  post(book : any){
    return this._http.post('http://localhost:3000/books',book);
  }
}
