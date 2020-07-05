import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Record } from '../../record';
import { RecordService } from 'src/app/record.service';

@Component({
  selector: 'app-addrecord',
  templateUrl: './addrecord.component.html',
  styleUrls: ['./addrecord.component.css']
})
export class AddRecordComponent implements OnInit {

  constructor(private route: Router, private recordService: RecordService) { }
  id: number;
  userid: number;
  name: string;
  age: number;
  gender: string;
  date: string;
  diseasename: string;
  symptoms: string;
  nameprivacy: string;
  ageprivacy: string;
  genderprivacy: string;
  dateprivacy: string;
  diseasenameprivacy: string;
  symptomsprivacy: string;

  record: Record =
    {
      id: 1, userid: 2, name: 'a', age: 12, gender: 'male', date: '2020-03-13', diseasename: 'b', symptoms: 'c'
      , nameprivacy: 'private', ageprivacy: 'private', genderprivacy: 'private',
      diseasenameprivacy: 'private', dateprivacy: 'private', symptomsprivacy: 'private'
    };


  ngOnInit() {
    //this.record = this.recordService.getRecords();
  }
  addRecord() {
    this.record.id = 1;
    this.record.userid = parseInt(localStorage.getItem('userid'));
    this.record.name = this.name;
    this.record.age = this.age;
    this.record.gender = this.gender;
    this.record.date = this.date;
    this.record.diseasename = this.diseasename;
    this.record.symptoms = this.symptoms;
    this.record.nameprivacy = this.nameprivacy;
    this.record.ageprivacy = this.ageprivacy;
    this.record.genderprivacy = this.genderprivacy;
    this.record.dateprivacy = this.dateprivacy;
    this.record.diseasenameprivacy = this.diseasenameprivacy;
    this.record.symptomsprivacy = this.symptomsprivacy;

    //this.recordService.records.push(this.record);
    this.recordService.addRecord(this.record);
    this.route.navigate(['records']);
  }

}
