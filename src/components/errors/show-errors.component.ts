import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
 selector: 'app-form-errors',
 template: `
   <ul *ngIf="shouldShowErrors()">
     <li style="color: red" *ngFor="let error of listOfErrors()">{{error}}</li>
   </ul>
 `,
})
export class ShowErrorsComponent {

  private static readonly errorMessages = {
    'required': () => 'Campo obligatorio.',
    'minlength': (params) => 'El número mínimo de caracteres es ' + params.requiredLength,
    'maxlength': (params) => 'El numero máximo de caracteres es ' + params.requiredLength,
    'pattern': (params) => 'El patrón requerido es: ' + params.requiredPattern,
    'email': (params) => 'Formato de email no válido.',
    'telephoneNumber': (params) => params.message
  };

 @Input() private control: AbstractControlDirective | AbstractControl;

 shouldShowErrors(): boolean {
   return this.control &&
     this.control.errors &&
     (this.control.dirty || this.control.touched);
 }

 listOfErrors(): string[] {
   return Object.keys(this.control.errors)
     .map(field => this.getMessage(field, this.control.errors[field]));
 }

 private getMessage(type: string, params: any) {
   return ShowErrorsComponent.errorMessages[type](params);
 }

}
