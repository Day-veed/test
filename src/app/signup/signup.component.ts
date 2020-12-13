import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
f: string = ""
m: string = ""
c: string = ""
  constructor() { }

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
    let gender = target.querySelector('.gender').value
    

//mega is a fresh boy
    console.log(firstName, surname, email, password, Cpassword, dob, mob, yob, gender)
  }
}
