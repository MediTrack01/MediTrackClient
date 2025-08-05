import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class GoogleAuthService {
  constructor(private http: HttpClient) {}

  verifyGoogleToken(token: string) {
    alert("Service called with token: " + token);
    return this.http.post('/api/auth/google', { token }); // TODO: Adjust the URL as needed
  }
}

