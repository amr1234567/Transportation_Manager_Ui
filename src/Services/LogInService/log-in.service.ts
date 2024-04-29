import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogIn } from '../../Interfaces/LogIn.dto.interface';
import { ILogInResponse } from '../../Interfaces/LogInResponse.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  constructor(private http: HttpClient) { }

  LogIn(model: ILogIn): Observable<ILogInResponse> {
    return this.http.post<ILogInResponse>("api/Admin/sign-in", model);
  }

}
