import {
  sessionPersistence,
} from '@utils/session-persistence.util';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  private token: string | null = null;
  private sessionData: any;

  constructor() {
    const userData = sessionStorage.getItem('tokenTmp');

    if (userData) {
      this.saveSessionData(userData);
    }
  }

  public getToken() {
    return this.token || '';
  }

  public setToken(token: string) {
    this.token = token;
  }

  public removeToken() {
    this.token = null;
  }

  isAuthenticated() {
    this.token = sessionStorage.getItem('tokenTmp');
    return this.token && this.token !== '';
  }

  removeSessionData() {
    sessionPersistence.delete('tokenTmp');
    sessionPersistence.deleteAll();
    this.sessionData = null;
  }

  saveSessionData(data: any) {
    this.setToken(data.token);
    sessionPersistence.set('tokenTmp', data);
    this.sessionData = data;
  }
}
