import { Component, OnInit } from "@angular/core";
import { UserService } from "./user.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public isUserAuthenticated = false;
  title = "ehr";
  data = [];
  req = [];
  notifications = [];
  username;

  constructor(
    private userService: UserService,
    private route: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // if (this.userService.getUser() != null) {
    //   this.isUserAuthenticated = true;
    // }
  }

  profile() {
    if(localStorage.getItem('user'))
      this.username = localStorage.getItem("user");
    else
      this.username= 'not loggedIn';
  }

  allow(userid: number, recordid: number) {
    this.req[0] = userid;
    this.req[1] = recordid;
    this.http
      .post<any>("http://127.0.0.1:3000/allowrequest", this.req)
      .subscribe(records => {
        console.log(records);
        this.notifications = records;
        document.getElementById("notificationmodalbtn").click();
      });
  }

  notify() {
    if (localStorage.getItem("userid")) {
      this.data[0] = parseInt(localStorage.getItem("userid"));
      this.http
        .post<any>("http://127.0.0.1:3000/notify", this.data)
        .subscribe(notes => {
          console.log(notes);
          this.notifications = notes;
          document.getElementById("notificationmodalbtn").click();
        });
    } else {
      alert("you must log in first");
    }
  }

  userStatus() {
    if (localStorage.getItem("user") === null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.userService.logout();
    this.isUserAuthenticated = false;
    this.route.navigate(["landing"]);
  }
}
