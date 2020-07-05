import { Component, OnInit } from '@angular/core';
import { RecordService } from 'src/app/record.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editrecord',
  templateUrl: './editrecord.component.html',
  styleUrls: ['./editrecord.component.css']
})
export class EditrecordComponent implements OnInit {

  constructor(private recordService: RecordService, private route: ActivatedRoute,private router:Router) { }
  record:any ;
  id: number;
  ngOnInit() {
    this.getRecord();
    //this.getRecords();
  }
  getRecord(): void{
    this.id = +this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.recordService.getRecord(this.id)
    .subscribe(record => this.record = record[0]);
    console.log(this.id+" "+this.record );
  }
  // getRecords(): void{
  //   this.records = this.recordService.getRecords();
  // }
  editRecord()
  {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.recordService.editRecord(this.record);
  }
}
