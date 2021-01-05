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
          this.listPost = posts;
          console.log("listado: ", this.listPost);
        },
        error => console.log("Error: " + error)
      );
  }

  getPostForID(id): Observable<any> {
    return this.httpClient.get(endpoint + '/' + id)
      .pipe( map(this.extractData),
             catchError( this.handleError() )
    );
  }

  createNewPost(post: any): Observable<any> {
    return this.httpClient.post(endpoint, post)
      .pipe( catchError(this.handleError) );
  }

  updatePost(post: Post): Observable<any> {
    return this.httpClient.put(endpoint + `/${ post.id }`, post)
      .pipe( catchError(this.handleError) );
  }

  deletePost(idPost: any, index: any): Observable<any> {
    this.listPost.splice(index, 1);

    return this.httpClient.delete(endpoint + `/${ idPost }`)
      .pipe( catchError(this.handleError) );
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
