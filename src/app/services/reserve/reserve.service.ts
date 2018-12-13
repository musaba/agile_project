import { Injectable } from '@angular/core';
import { reservetedList } from './reserveted-list';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReserveService {

  path = environment.path;
  reservetedlist: reservetedList[];
  constructor(private http: HttpClient) { }

  getAllPost(): Observable<reservetedList[]> {
    return this.http.get<reservetedList[]>(this.path + "/reservations")
  }
}
