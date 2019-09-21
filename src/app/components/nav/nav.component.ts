import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
@NgModule({
  exports: [NavComponent],
  declarations: [NavComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
