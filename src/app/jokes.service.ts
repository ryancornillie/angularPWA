import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private http: HttpClient) { }

  getJokes() {
    return this.http.get('https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke')
  }
  
}
