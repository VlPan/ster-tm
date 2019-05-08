import { Activity } from 'src/app/store/models/activity.model';

import {Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


export interface DeleteDialogData {
  activity: Activity;
}

@Component({
  selector: 'st-delete-dialog',
  templateUrl: 'delete-dialog.html',
  styleUrls: ['delete-dialog.scss'],
})
export class DeleteActivityDialogComponent {

  constructor(
    public dialogDeleteRef: MatDialogRef<DeleteActivityDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DeleteDialogData) {}

}
