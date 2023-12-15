import { Component } from '@angular/core';
import {BookService} from "./services/book.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Demo-Json-Server';

  books! : any[];

  constructor(
    private readonly _bookService: BookService
  ) {
    this._bookService.get().subscribe((data : any) => this.books = data)
  }
}
