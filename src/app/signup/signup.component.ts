import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
female: string = ""
male: string = ""
custom: string = ""
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(event){
    event.preventDefault()
    const errors = []
    const target = event.target
    const firstName = target.querySelector('#fname').value
    const surname = target.querySelector('#sname').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    const Cpassword = target.querySelector('#Cpassword').value
    const dob = target.querySelector('#dob').value
    const mob = target.querySelector('#mob').value
    const yob = target.querySelector('#yob').value
    let gender;
    if(this.female){
      gender = "female"
    }
    else if(this.male){
      gender = "male"
    }
    else if(this.custom){
      gender = "custom"
    }
    else{
      gender = ""
    }
    
    if(errors.length === 0){
      this.auth.signup(firstName, surname, email,password, Cpassword, dob, mob, yob, gender).subscribe(data => {
        if (data.success) {
          this.router.navigate(['login'])
        }
      })
    }
    console.log(firstName, surname, email, password, Cpassword, dob, mob, yob, gender)
  }
}
//testing git