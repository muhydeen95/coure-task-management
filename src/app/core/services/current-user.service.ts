import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '@shared/services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class CurrentUserService {
  constructor(
    private localStorageAS: LocalStorageService,
    private router: Router
  ) {}

  public logOut(): void {
    localStorage.clear();
    this.localStorageAS.clear();
    this.router.navigate(['/authentication/login'], { queryParams: { returnUrl: this.router.url }});
  }

  public storeUserCredentials(responseData: any): void {
    const data_to_store = {
      username: responseData.username
    };
    localStorage.setItem('user_credential', JSON.stringify(data_to_store));
  }

  public getUser() {
    return JSON.parse(localStorage.getItem('user_credential') || 'null');
  }

  public storeTasks(responseData: any): void {
    localStorage.setItem('tasks', JSON.stringify(responseData));
  }

  public getTasks() {
    return JSON.parse(localStorage.getItem('tasks') || '[]');
  }

}
