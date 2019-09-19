import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  url = 'http://localhost:3000/';
  private DataSource = new BehaviorSubject(null);
  CurrentData = this.DataSource.asObservable();
  constructor(private http: HttpClient) { }
  changeData(Data) {
    this.DataSource.next(Data);
  }
  getAllData(Data) {
    this.http.get(this.url + 'data');
  }
  getData(id) {
    this.http.get(this.url + 'data/' + id);
  }
  postData(data) {
    this.http.post(this.url, JSON.stringify(data));
  }
}
