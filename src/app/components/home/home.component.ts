import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { GetDataService } from 'src/app/services/get-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Form: FormGroup;
  message;
  constructor(private fb: FormBuilder, private getData: GetDataService, private router: Router) {
    this.Form = fb.group({
      username: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
    this.getData.CurrentData
      .subscribe(mess => this.message = mess);

  }
  onSubmit(values) {
    console.log(values);
    this.getData.postData(values);
    this.getData.changeData(values);
    this.router.navigate(['view']);

  }

}
