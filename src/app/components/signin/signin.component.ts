import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private userSevice: UserService , private route: Router) { }
  user: User = {
    username: "",
    password: "",
    email: "sdf",
    location: "df",
    phone: "dsfd",
    website: "dfdf",
  };
  username: string = '';
  password: string = '';
  status;
  ngOnInit() {
  }

  signIn() {
    this.user.username = this.username;
    this.user.password = this.password;
    console.log(this.user);
    this.userSevice.signInUser(this.user)
    .subscribe((data) => {
      console.log(data);
      if (data[0] === 'User Authed')
      {
        localStorage.setItem('user', this.user.username);
        console.log(localStorage.getItem('user'));
        localStorage.setItem('userid', data[1]);
        console.log(localStorage.getItem('userid'));
        this.route.navigate(['home']);
      }
      else {
        alert("wrong details");
      }
    } , (error)=>{
      console.log("Error login: "+ error);
    });

  }
}
