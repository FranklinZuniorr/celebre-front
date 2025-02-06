import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface CelebrationExternal {
  celebrationTitle: string;
  personName: string;
  description: string;
  youtubeUrl: string;
  endPhrase: string;
  imageLink: string;
  email: string;
}

export interface CelebrationGetByIdReturn {
  celebration: CelebrationExternal;
}

@Injectable({
  providedIn: 'root'
})
export class CelebrationService {
  constructor(private http: HttpClient) {}
  
  getById(celebrationId: string): Observable<CelebrationGetByIdReturn>  {
    const apiUrl: string = `${environment.apiUrl}/celebration/product-base/${celebrationId}`;
  
    const response: Observable<CelebrationGetByIdReturn> = 
      this.http.get<CelebrationGetByIdReturn>(apiUrl);
    
    return response;
  }
}
