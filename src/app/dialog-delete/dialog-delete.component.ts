import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent implements OnInit {
  constructor( public dialogRef: MatDialogRef<DialogDeleteComponent>) { }

  ngOnInit(): void {
  }



 close(){
  this.dialogRef.close();
 }
}
