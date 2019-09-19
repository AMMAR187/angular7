import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.Form = fb.group({
      username: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.min(10), Validators.max(15)]),
      email: new FormControl('', [Validators.email, Validators.required]),
      message: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {
  }
  onSubmit(values) {
    console.log(values);

  }

}
