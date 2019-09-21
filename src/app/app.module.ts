import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HttpModule } from '@angular/http'
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViewComponent } from './components/view/view.component';
import { DisplayComponent } from './components/display/display.component';
import { NavComponent } from './components/nav/nav.component';
import { GetDataService } from './services/get-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    DisplayComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    HttpModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    FormsModule

  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
