import { Component, OnInit } from "@angular/core";
import { Record } from "../../record";
import { RecordService } from "src/app/record.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  records: Record[];
  sortby = "";
  searchtext = "";
  data = [];
  headings = ["NAME", "AGE", "GENDER", "DATE", "DISEASE", "SYMPTOMS"];
  rows = [
    ["name1", "city1", "some other info"],
    ["name2", "city2", "more info"],
  ];

  constructor(private recordService: RecordService) {}

  ngOnInit() {
    this.recordService
      .getRecords()
      .subscribe((records) => (this.records = records));
  }
  downloadcsv() {
    // let csv = "data:text/csv;charset=utf-8,";
    let csv = "";

    let headingsstring = this.headings.join(",");
    csv += headingsstring + "\r\n";
    this.records.forEach(function (rowArray) {
      let row = [];
      if (rowArray.nameprivacy === "non-private") {
        row.push(rowArray.name);
      } else {
        row.push("private");
      }
      if (rowArray.ageprivacy === "non-private") {
        row.push(rowArray.age);
      } else {
        row.push("private");
      }
      if (rowArray.genderprivacy === "non-private") {
        row.push(rowArray.gender);
      } else {
        row.push("private");
      }
      if (rowArray.dateprivacy === "non-private") {
        row.push(rowArray.date);
      } else {
        row.push("private");
      }
      if (rowArray.diseasenameprivacy === "non-private") {
        row.push(rowArray.diseasename);
      } else {
        row.push("private");
      }
      if (rowArray.symptomsprivacy === "non-private") {
        row.push(rowArray.symptoms);
      } else {
        row.push("private");
      }

      let record = row.join(",");
      csv += record + "\r\n";
    });

    console.log(csv);
    var hiddenElement = document.createElement("a");
    hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
    hiddenElement.target = "_blank";
    hiddenElement.download = "records.csv";
    hiddenElement.click();
    // this.recordService.getcsv();
  }
  search() {
    console.log(this.sortby + " " + this.searchtext);
    this.data[0] = this.sortby;
    this.data[1] = this.searchtext;
    this.recordService
      .searchRecord(this.data)
      .subscribe((records) => (this.records = records));
  }
}
