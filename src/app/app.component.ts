import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private httpClient: HttpClient) { }

  success(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/posts/1").subscribe(
      success => {
        alert("loaded data successfully")
      }
    );
  }

  error(): void {
    this.httpClient.get("https://jsonplaceholder.typicode.com/post").subscribe(
      success => {
        alert("Call Failed")
      }
    );
  }
}
