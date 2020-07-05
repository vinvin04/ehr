import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordService } from 'src/app/record.service';
import {Location} from '@angular/common';
import { Record } from '../../record';

@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent implements OnInit {

  record: Record ;
  id: number;
  constructor(private route: ActivatedRoute, private recordService: RecordService,
    private router: Router, private location: Location) { }

  ngOnInit() {
    this.getRecord();
  }

  goBack(){
    this.location.back();
  }

  getRecord(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.recordService.getRecord(this.id)
    .subscribe(record => this.record = record[0]);
    console.log(this.record);
  }
}
