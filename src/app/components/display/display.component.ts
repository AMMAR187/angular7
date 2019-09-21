import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  messages = [];
  message;
  error;

  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.getAllData()
      .subscribe(res => this.messages = res);
    this.getData.CurrentData
      .subscribe(mess => this.message = mess);

  }

}
