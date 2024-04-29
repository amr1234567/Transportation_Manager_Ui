import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  isBrowser = isPlatformBrowser(this.platformId);
  // Set a value in local storage
  setItem(key: string, value: string): void {
    if (this.isBrowser) {
      window.localStorage.setItem(key, value);
    }
  }

  // Get a value from local storage
  getItem(key: string): string | null {
    if (this.isBrowser) {
      return window.localStorage.getItem(key);
    }
    return "";
  }

  // Remove a value from local storage
  removeItem(key: string): void {
    if (this.isBrowser) {
      window.localStorage.removeItem(key);
    }
  }

  // Clear all items from local storage
  clear(): void {
    if (this.isBrowser) {
      window.localStorage.clear();
    }
  }
}
