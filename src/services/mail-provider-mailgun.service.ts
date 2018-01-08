import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMailProvider } from './imail-provider';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailProviderMailgunService implements IMailProvider {

    private readonly _apiKey = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
    private readonly _apiHost = `https://api.mailgun.net/v3/sandbox376a692e985042b18a839bd57f1c63ca.mailgun.org/messages`;
    private readonly _statusApiUrl = 'https://www.mailgun.com/';

    constructor(private http: HttpClient) {
    }

    public get isConfigured(): boolean {
        return Boolean(this._apiKey);
    }

    private get _headers(): HttpHeaders {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization', 'Basic ' + btoa(`api:${this._apiKey}`));
        headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return headers;
      }

    sendMail(from: string, to: string, subject: string, message: string): Observable<any> {
        const body = this._getSendMailRequestBody(from, to, subject, message);
        return this.http.post(this._apiHost, body, {headers: this._headers, responseType: 'text'});
    }

    checkStatus(): Observable<any> {
        if (!this.isConfigured) {
        return Observable.create(null);
        }
        return this.http.get(this._statusApiUrl, {
            responseType: 'text'
          });
    }

    private _getSendMailRequestBody(from: string, to: string, subject: string, message: string) {
        const body = new URLSearchParams();
        body.set('from', from);
        body.set('to', to);
        body.set('subject', subject);
        body.set('text', message);
        return body.toString();
    }
}
