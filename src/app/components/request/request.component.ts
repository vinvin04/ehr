import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from 'src/app/record.service';
import {Location} from '@angular/common';
import { Record } from '../../record';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private route: ActivatedRoute, private recordService: RecordService,
    private router: Router, private location: Location) { }
  id;
  record;
  data = [];
  ngOnInit() {
    this.getRecord();
  }
  goBack() {
    this.location.back();
  }
  getRecord(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.recordService.getRecord(this.id)
    .subscribe(record => this.record = record[0]);
    console.log(this.record);
  }

  request(){

    document.getElementById('requestmodalbtn').click();
    this.data[0] = this.id;
    this.data[1] = parseInt(localStorage.getItem('userid'));
    this.data[2] = this.record.userid;
    this.recordService.addRequest(this.data)
    .subscribe();
  }
}
