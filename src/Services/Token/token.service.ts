import { Injectable } from '@angular/core';
import { LocalStorageService } from '../LocalStorage/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenName = "token";
  constructor(public LocalstorgeService: LocalStorageService) { }

  addToken(token: string): void {
    this.LocalstorgeService.setItem(this.tokenName, token);
  }

  hasToken(): boolean {
    return this.LocalstorgeService.getItem(this.tokenName) ? true : false;
  }

  removeToken(): void {
    this.LocalstorgeService.removeItem(this.tokenName)
  }
  getToken(): string {
    return this.LocalstorgeService.getItem(this.tokenName) ?? "";
  }
}
