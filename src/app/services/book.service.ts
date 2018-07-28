import {Car} from '../entities/car';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  getCarsLarge() {
    return this.http.get('/assets/cars-large.json')
      .toPromise()
      .then(res => <Car[]> res['data'])
      .then(data => { return data; });
  }
}
