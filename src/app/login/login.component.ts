import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(event){
    event.preventDefault()
    const errors = []
    const target = event.target
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value

    console.log(email, password)
  }

  signup(){
    this.router.navigate(['signup'])
  }

}
