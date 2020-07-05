import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Record } from "../../record";

@Component({
  selector: "app-accessedrecords",
  templateUrl: "./accessedrecords.component.html",
  styleUrls: ["./accessedrecords.component.css"]
})
export class AccessedrecordsComponent implements OnInit {
  constructor(private http: HttpClient) {}
  userid: number;
  data = [];
  records: any[]=[];
  ngOnInit() {
    this.userid = parseInt(localStorage.getItem("userid"));
    this.getRecords();
  }

  verify(recordid: number){
    this.data[0] = recordid;
    this.http
      .post<any>("http://127.0.0.1:3000/verifyblock", this.data)
      .subscribe(response => {
        console.log(response);
        if(response==='valid'){
          document.getElementById("verifymodalbtn").click();
        }
      });
  }

  getRecords() {
    this.data[0] = this.userid;
    this.http
      .post<any>("http://127.0.0.1:3000/accessedrecords", this.data)
      .subscribe(records => {
        //console.log(records[0].records[0].id);
        records.forEach(element => {
          //console.log(element.records[0]);
          this.records.push(element.records[0]);
        });
        //this.records = records;
        console.log(this.records);
      });
  }
}
