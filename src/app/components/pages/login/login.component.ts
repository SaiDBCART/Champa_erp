import { Component, OnInit } from '@angular/core';
import { loginservice } from './Service/login.service';
import { Router } from '@angular/router'
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginform: FormGroup;
  invalid = false;
  errmsg: String;
  isSubmitted = false;


  constructor(private router: Router, private login: loginservice) {



  }




  ngOnInit(): void {
    this.loginform = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(8)
      ]),

    })
  }
  get f() {
    return this.loginform.controls;
  }
  onFormSubmit() {

    console.log(this.loginform.value)

    this.login.getlogin(this.loginform.value).subscribe((result) => {
      console.log(result);
      this.isSubmitted = true;
      if (result.flag === 1) {
        this.invalid = false;
        this.errmsg = String(result.message);
        console.log(this.errmsg);

      } else {
        this.invalid = true;

        this.errmsg = String(result.message);
        console.log(this.errmsg)
      }
      this.router.navigate(['/dashboard']);

    });
  }
}
