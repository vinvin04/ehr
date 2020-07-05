import { Component, OnInit } from "@angular/core";
import { User } from "../../user";
import { UserService } from "src/app/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  user: User = {
    username: "fgh",
    password: "hgf",
    email: "sdf",
    location: "df",
    phone: "dsfd",
    website: "dfdf",
  };
  username: string;
  password: string;
  email: string;
  location: string;
  phone: string;
  website: string;
  constructor(private userService: UserService, private route: Router) {}

  ngOnInit() {}

  signUp() {
    console.log("signup c" + this.username + " " + this.password);
    this.user.username = this.username;
    this.user.password = this.password;
    this.user.email = this.email;
    this.user.location = this.location;
    this.user.phone = this.phone;
    this.user.website = this.website;
    localStorage.setItem("user", this.user.username);
    this.userService.signUpUser(this.user);
    this.route.navigate(["home"]);
  }
}
