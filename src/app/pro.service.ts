import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Subject, throwError } from 'rxjs';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProService {

  constructor(private http : HttpClient) { }
  url : string = "http://localhost:4200/assets/pcs.json";
  
  
  getProducts(){
    // let sub = new Subject<product>();
    // this.http.get<product>(this.url).pipe(
    //   catchError((error : HttpErrorResponse) => {
    //   return throwError( () => error.message || "Erreur lors de l'appel http");
    //   })).subscribe(
    //   (reponseTypee: product ) => {
    //   console.log(reponseTypee)
    //   sub.next(reponseTypee)
    //   }
    //  )
    //  return sub
    return this.http.get<product[]>(this.url);
  }

}

