import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Staff } from './staff'
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class StaffService {
  path = environment.path;
  staff: Staff[];
  constructor(private http: HttpClient) { }

  getAllPost(): Observable<Staff[]> {
    return this.http.get<Staff[]>(this.path + "/staffs")
  }
}
