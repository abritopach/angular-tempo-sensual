import { Injectable } from '@angular/core';
import { IMailProvider } from './imail-provider';
import { MailProviderSendgridService } from './mail-provider-sendgrid.service';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';
import { timeoutWith } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

@Injectable()
export class MailSenderService {

    private _providers: IMailProvider[] = [];

    constructor(public sendgridProvider: MailProviderSendgridService) {
        this._providers.push(sendgridProvider);
    }

    getWorkingProvider(): Observable<any> {
        const requests = [];
        for (const provider of this._providers){
            const request = provider.checkStatus();
            requests.push(request);
        }
        return forkJoin(requests);
    }

    sendMail(from: string, to: string, subject: string, message: string): Observable<any> {

        /*
        this.getWorkingProvider().subscribe(results => {
            console.log(results);

            const providerResult = results;

            if (!providerResult) {
                console.log('No provider');
            } else {
                console.log('Provider result');
            }


        }, err => {
            console.log(err);
            return Observable.create(err);
        });
        */
        return this.sendgridProvider.sendMail(from, to, subject, message);
    }

}
