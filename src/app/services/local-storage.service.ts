import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  getCast<T>(key: string, fallback: any): T {
    const value = localStorage.getItem(key);
    return (value) ? JSON.parse(value) as T : fallback;
  }

  get(key: string, fallback: any) {
    const value = localStorage.getItem(key);
    return (value) ? JSON.parse(value) : fallback;
  }

  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

}
