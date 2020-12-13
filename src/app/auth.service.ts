import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface registerResponse {
  success: boolean,
  message: string,
  token: any
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(firstName, surname, email,password, Cpassword, dob, mob, yob, gender){
    return this.http.post<registerResponse>('http://localhost:1234/signup', {
      firstName, 
      surname, 
      email,
      password, 
      Cpassword, 
      dob, 
      mob, 
      yob, 
      gender
    })
  }

}
