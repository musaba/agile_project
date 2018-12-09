import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StaffEditComponent } from 'src/app/popup/staff-edit/staff-edit.component';
import { StaffService } from 'src/app/services/staff/staff.service';
import { HttpClient } from '@angular/common/http';
import { Staff } from 'src/app/services/staff/staff';


@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
  providers: [StaffService]
})
export class StaffComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient, private staffService: StaffService ) { }

  staffs: Staff[];

  ngOnInit() {
    this.getAllPost();
  }


  getAllPost() {
    this.staffService.getAllPost().subscribe(data => {
      this.staffs = data
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StaffEditComponent, {
      width: '50%',
      height: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    })
  }

}

