import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {catchError} from 'rxjs/operators';
@Injectable()
export class ProductService {
  private url :String;
  constructor(
    private http: HttpClient
  ) { 
    this.url ='http://localhost:9090/';
  }
  loadListProduct(payload):Observable<any>{
    return this.http.post<any>(`/api/get-product-param`,payload)
    .pipe(catchError(error => throwError(error)));
  }

  // save
  saveProduct(payload):Observable<any>{
    return this.http.post<any>(`/api/save`,payload)
    .pipe(catchError(error => throwError(error)));
  }

  // update Product
  updateProduct(payload): Observable<any>{
    return this.http.post<any>(`/api/update`,payload)
    .pipe(catchError(error => throwError(error)))
  }
}
