import { Observable } from 'rxjs/Observable';

export interface IMailProvider {
    isConfigured: boolean;

    sendMail(from: string, to: string, subject: string, message: string): Observable<any>;
    checkStatus(): Observable<any>;
}
