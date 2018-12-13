import { Component, OnInit } from '@angular/core';
import { reservetedList } from 'src/app/services/reserve/reserveted-list';
import { ReserveService } from 'src/app/services/reserve/reserve.service';

@Component({
  selector: 'app-reserved-list',
  templateUrl: './reserved-list.component.html',
  styleUrls: ['./reserved-list.component.css'],
  providers:[ReserveService]
})
export class ReservedListComponent implements OnInit {

  constructor(private reserve : ReserveService) { }
  reservetedlists: reservetedList[];

  ngOnInit() {
    this.getAllPost();
  }
  getAllPost() {
    this.reserve.getAllPost().subscribe(data => {
      this.reservetedlists = data
    })
  }
}
