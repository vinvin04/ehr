import { Component, OnInit } from '@angular/core';
import { RecordService } from 'src/app/record.service';
import { Record } from '../../record';
import { Router } from '@angular/router';
import { Block } from 'src/app/Block';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  constructor(private recordService: RecordService, private route: Router) {  }
  records: Record[]  = [];
  blocks: Block[] = [];
  user;
  data = [];
  ngOnInit() {
    this.user = localStorage.getItem('user');
    if (this.user === null)
    {
      this.route.navigate(['landing']);
    }
    this.data[0] = parseInt(localStorage.getItem('userid'));
    console.log(this.data);
    this.recordService.getUserRecords(this.data)
    .subscribe(records => this.records = records);
    //this.records = this.recordService.records;

    this.recordService.getBlocks()
      .subscribe(blocks => {
        this.blocks = blocks;
        console.log(this.blocks);
      });
  }

}
