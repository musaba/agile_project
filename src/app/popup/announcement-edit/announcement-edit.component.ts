import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-announcement-edit',
  templateUrl: './announcement-edit.component.html',
  styleUrls: ['./announcement-edit.component.css']
})
export class AnnouncementEditComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AnnouncementEditComponent>) { }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
