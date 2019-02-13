import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from 'src/app/shared/error-handler.service';
import { ApplicationUrls } from 'src/app/shared/application-urls';
import { map, catchError, tap } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [];
  constructor(private http: HttpClient, private errorHandler: ErrorHandlerService) { }

  getUsers() {
    console.log(ApplicationUrls.user);
    return this.http.get(`${ApplicationUrls.user.getUsers}?results=20`)
    .pipe(
      tap((user: any) => {
        this.users = user.results;
        return user.results;
      }),
      catchError(this.errorHandler.handleError('getUsers', [])));
  }

  getUserById(userId) {
    return this.users.find( user => {
      return (user.login.uuid === userId);
    });
  }
}
