import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/services/get-data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  message;
  constructor(private getData: GetDataService) { }

  ngOnInit() {
    this.getData.CurrentData
      .subscribe(mess => this.message = mess);
    console.log(this.message);

  }

}
