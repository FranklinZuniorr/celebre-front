import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

interface CreateNewCelebrationParams {
  celebrationTitle: string;
  personName: string;
  description: string;
  youtubeUrl: string;
  endPhrase: string;
  imageLink: string;
  email: string;
  [key: string]: string;
}

interface CreateNewCelebrationReturn {
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class CheckoutService {
  constructor(private http: HttpClient) {}

  createNewCelebration(params: CreateNewCelebrationParams): Observable<CreateNewCelebrationReturn> {
    const apiUrl: string = `${environment.apiUrl}/payment/checkout-product-base`;
    
    /* let httpParams = new HttpParams();
    
    Object.keys(params).forEach(key => {
      httpParams = httpParams.set(key, params[key]);
    }); */
  
    const response: Observable<CreateNewCelebrationReturn> = 
      this.http.post<CreateNewCelebrationReturn>(apiUrl, params);
    
    return response;
  }
}
