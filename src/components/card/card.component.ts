import { DeleteActivityDialogComponent } from './../delete-dialog/delete-dialog';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  DoCheck,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import {
  Activity
} from 'src/app/store/models/activity.model';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'st-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements AfterViewInit {

  showTooltipDesc: boolean;
  showTooltipTitle: boolean;
  cardSettingsMenuOpen = false;
  @Input() activity: Activity;

  @Output() deleted: EventEmitter < any > = new EventEmitter();
  @ViewChild('desc') descEl: ElementRef;
  @ViewChild('title') titleEl: ElementRef;

  constructor(private cd: ChangeDetectorRef, public dialog: MatDialog) {}


  ngAfterViewInit() {

    const scrollHeight = this.descEl.nativeElement.scrollHeight;
    const offsetHeight = this.descEl.nativeElement.offsetHeight;

    const scrollWidth = this.titleEl.nativeElement.scrollWidth;
    const offsetWidth = this.titleEl.nativeElement.offsetWidth;

    if (scrollHeight > offsetHeight) {
        this.showTooltipDesc = true;
        this.cd.detectChanges();
    }

    if (scrollWidth > offsetWidth) {
      this.showTooltipTitle = true;
      this.cd.detectChanges();
    }
  }

  deleteCard(activity: Activity) {
    this.deleted.emit(activity.id);
  }

  toggleCardSettingsMenu() {
    this.cardSettingsMenuOpen = !this.cardSettingsMenuOpen;
  }

  openActivityDeleteDialog() {
    const dialogRef = this.dialog.open(DeleteActivityDialogComponent, {
      data: { activity: this.activity }
    });

    const subsriber = dialogRef.afterClosed().subscribe(confirmed => {
      if (confirmed) {
        this.deleteCard(this.activity);
        subsriber.unsubscribe();
      }
      this.toggleCardSettingsMenu();
      this.cd.detectChanges();
    });
  }

}
