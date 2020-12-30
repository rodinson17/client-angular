import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Post } from '../entities/post';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


const endpoint: string = "https://jsonplaceholder.typicode.com/posts";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listPost: Post[] = [];

  constructor(private httpClient: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getListData(): Observable<any> {
    return this.httpClient.get(endpoint)
      .pipe(map(this.extractData));
  }

  getData() {
    this.httpClient.get(endpoint)
      .subscribe(
        (posts: Post[]) => {
          console.log("list:.. " + posts)
          this.listPost = posts;
        },
        error => console.log("Error: " + error)
      );
  }

  getPostForID() {
    let id: number = 1;
    this.httpClient.get<Post>(endpoint + '/' + id)
      .subscribe(
        (post) => {
          console.log("result....: " + JSON.stringify(post));
        },
        error => console.log("Error: " + JSON.stringify(error))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /*
  getProducts(): Observable<any> {
    return this.http.get<Product>(endpoint + 'products').pipe(
      catchError(this.handleError)
    );
  }

  getProduct(id: string): Observable<any> {
    return this.http.get<Product>(endpoint + 'products/' + id).pipe(
      catchError(this.handleError)
    );
  } */

  /*
  addProduct(product: any): Observable<any> {
    return this.http.post(endpoint + 'products', product).pipe(
      catchError(this.handleError)
    );
  } */

  /*
  updateProduct(id: string, product: Product): Observable<any> {
    return this.http.put<Product>(endpoint + 'products/' + id, product).pipe(
      catchError(this.handleError)
    );
  } */

  /* deleteProduct(id: string): Observable<any> {
    return this.http.delete<Product>(endpoint + 'products/' + id).pipe(
      catchError(this.handleError)
    );
  } */

}
