import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMailProvider } from './imail-provider';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailProviderFormspreeService implements IMailProvider {
  private readonly _apiKey = '';
  private readonly _apiHost = `https://formspree.io/tempo.sensual@gmail.com`;
  private readonly _statusApiUrl = 'https://formspree.io';

  constructor(private http: HttpClient) {}

  public get isConfigured(): boolean {
    return Boolean(this._apiKey);
  }

  private get _headers(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return headers;
  }


  sendMail(from: string, to: string, subject: string, message: string): Observable<any> {
    const body = this._getSendMailRequestBody(from, to, subject, message);
    return this.http.post(this._apiHost, body, {
      headers: this._headers,
      responseType: 'text'
    });
  }

  checkStatus(): Observable<any> {
    if (!this.isConfigured) {
      return Observable.create(null);
    }
    return this.http.get(this._statusApiUrl, {
      responseType: 'text'
    });
  }

  private _getSendMailRequestBody(
    from: string,
    to: string,
    subject: string,
    message: string
  ) {
    const body = new URLSearchParams();
    body.set('from', from);
    body.set('to', to);
    body.set('subject', subject);
    body.set('text', message);
    return body.toString();
    // return `from=${from}&to=${to}&subject=${subject}&text=${message}`;
  }

}
