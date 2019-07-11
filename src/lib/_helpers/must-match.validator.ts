import { FormGroup } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { first } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';


// custom validator to check that two fields match


export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
/*
export function userExist(controlName: string) {
    return (formGroup: FormGroup, authServ : AuthenticationService) => {
        const userControl = formGroup.controls[controlName]; 

        if (userControl.errors && !userControl.errors.userExist) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
         
        authServ.checkEmailExis(userControl)
        .pipe(first(), debounceTime(200))
        .subscribe(
            resp => {
               return resp; 
            },
            error => { 
                this.error = error;
                this.loading = false;
            });

        // set error on matchingControl if validation fails
        if (userControl.value !== 'amarjeet') {
            userControl.setErrors({ userExist: true });
        } else {
            userControl.setErrors(null);
        }
    }
}*/