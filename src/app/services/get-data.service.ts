import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  url = 'http://localhost:3000/';
  private DataSource = new BehaviorSubject(null);
  CurrentData = this.DataSource.asObservable();
  constructor(private http: HttpClient) { }
  changeData(Data) {
    return this.DataSource.next(Data);
  }
  getAllData(): Observable<any> {
    return this.http.get(this.url + 'data');
  }
  getData(id) {
    return this.http.get(this.url + 'data/' + id);
  }
  postData(data) {
    return this.http.post(this.url + 'data/', JSON.stringify(data));
  }
}
