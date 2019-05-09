import { ActivityHistoryItem, SavedOption } from './../../app/store/models/activity-history.model';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { Activity } from 'src/app/store/models/activity.model';

export interface DoneActivityDialogData {
  activity: Activity;
  time: number;
}


@Component({
  selector: 'st-activty-done-dialog',
  templateUrl: './activty-done-dialog.component.html',
  styleUrls: ['./activty-done-dialog.component.scss']
})
export class ActivtyDoneDialogComponent implements OnInit {

  optionsToSave: SavedOption[] = [];
  constructor(
    public dialogHistoryRef: MatDialogRef<ActivtyDoneDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: DoneActivityDialogData
  ) { }

  ngOnInit() {
    this.optionsToSave = this.data.activity.userOptions.map(o => {
      return {
        name: o.name,
        value: Math.floor(o.max / 2)
      };
    });
  }

  saveHistory() {
    const scores = this.calculateScores(this.optionsToSave);
    const historyItem: ActivityHistoryItem = {
      activity: this.data.activity,
      savedOptions: this.optionsToSave,
      time: this.data.time,
      scores
    };

    this.dialogHistoryRef.close(historyItem);
  }

  private calculateScores(optionsToSave: SavedOption[]): number {
    return optionsToSave.reduce((a, b) => {
      return a + b.value;
    }, 0);
  }
}
