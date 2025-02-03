import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface GetByIdReturn {
  celebrationTitle: string;
  personName: string;
  description: string;
  youtubeUrl: string;
  endPhrase: string;
  imageLink: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class CelebrationService {
  constructor(private http: HttpClient) {}
  
  getById(celebrationId: string): Observable<GetByIdReturn>  {
    const apiUrl: string = `${environment.apiUrl}/celebration/product-base/${celebrationId}`;
  
    const response: Observable<GetByIdReturn> = 
      this.http.get<GetByIdReturn>(apiUrl);
    
    return response;
  }
}
