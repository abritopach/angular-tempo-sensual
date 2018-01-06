import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appTelephoneNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: TelephoneNumberFormatValidatorDirective, multi: true}]
})
export class TelephoneNumberFormatValidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    const isValidPhoneNumber = /^\d{3,3}-\d{3,3}-\d{3,3}$/.test(c.value);
    const message = {
      'telephoneNumber': {
        'message': 'Formato teléfono incorrecto.'
      }
    };
    console.log(isValidPhoneNumber);
    return isValidPhoneNumber ? null : message;
  }
}
