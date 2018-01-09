import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidationErrors } from '@angular/forms';


@Directive({
  selector: '[appTelephoneNumber]',
  providers: [{provide: NG_VALIDATORS, useExisting: TelephoneNumberFormatValidatorDirective, multi: true}]
})
export class TelephoneNumberFormatValidatorDirective implements Validator {

  validate(c: FormControl): ValidationErrors {
    let value = [];
    if ((c.value != null) && (c.value !== ' ')) {
      value = c.value.match(/\d/g);
    }
    if (value === null) {
      value = [];
    }
    const isValidPhoneNumber = value.length === 9;
    const message = {
      'telephoneNumber': {
        'message': 'Formato teléfono incorrecto.'
      }
    };
    return isValidPhoneNumber ? null : message;
  }
}
