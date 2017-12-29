import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMailProvider } from './imail-provider';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MailProviderSendgridService implements IMailProvider {

    private readonly _apiKey = 'xxxxxxxxxxxxxxxxxxxx';
    private readonly _apiHost = 'https://api.sendgrid.com/v3/mail/send';
    private readonly _statusApiUrl = 'http://3tgl2vf85cht.statuspage.io/api/v2/status.json';

    constructor(private http: HttpClient) {
    }

    public get isConfigured(): boolean {
        return Boolean(this._apiKey);
    }

    private get _headers(): HttpHeaders {
        let headers = new HttpHeaders();

        headers = headers.append('Authorization', `Bearer ${this._apiKey}`);
        headers = headers.append('Content-Type', 'application/json');

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
        return this.http.get(this._statusApiUrl);
    }

    private _getSendMailRequestBody(from: string, to: string, subject: string, message: string) {
        return {
            personalizations: [{to: [{email: to}], subject}],
            from: {email: from},
            content: [{type: 'text/plain', value: message}]
        };
    }
}
