import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Models } from '../model/models.component';
import { ModelPojo } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  deleteModel: any;
  updateUser(value: any, mobileNumber: number) {
    throw new Error('Method not implemented.');
  }
  getModelBasedOnId(mobileNumber: number) {
    throw new Error('Method not implemented.');
  }
  baseUrl = environment.baseUrl;
  shokoneUrl = this.baseUrl+"/models/";
  constructor(private http: HttpClient) { }
  getAllModels() {
    console.log("calling backend"+this.shokoneUrl)
    return this.http.get<Models>(this.shokoneUrl).pipe(catchError(this.handleError));
  }
  // getModelBasedOnId(mobileNumber: number){
  //   return this.http.get<ModelPojo>(this.modelUrl+mobileNumber).pipe(catchError(this.handleError));
  // }

  saveUser(user:ModelPojo) {
    return this.http.post<ModelPojo>(this.shokoneUrl,user);
  }
  // updateUser(user:ModelPojo,mobileNumber:number){
  //   return this.http.put<ModelPojo>(this.modelUrl+mobileNumber,user).pipe(catchError(this.handleError));
  // }
  // deleteModel(mobileNumber: number) {
  //   return this.http.delete(this.modelUrl+mobileNumber).pipe(catchError(this.handleError));
  // }

  private handleError(httpError: HttpErrorResponse) {
    if (httpError.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', httpError.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${httpError.status}, ` +
        `body was: ${httpError.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
}
