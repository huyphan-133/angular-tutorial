import { FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class PasswordValidators {
    static validOldPassword(control: FormControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            if (control.value != '1234')
                resolve({ 'invalidOldPassword': true })
            else
                resolve(null)
        });
    }

    static passwordShouldMatch(control: FormGroup): ValidationErrors | null {
        let newPassword = control.get('newPassword')?.value;
        let confirmPassword = control.get('confirmPassword')?.value;
        if (confirmPassword != newPassword)
            return { 'passwordShouldMatch': true }
        return null
    }
}