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



@Component({
  selector: 'st-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements AfterViewInit {

  showTooltipDesc: boolean;
  showTooltipTitle: boolean;
  @Input() activity: Activity;

  @Output() deleted: EventEmitter < any > = new EventEmitter();
  @ViewChild('desc') descEl: ElementRef;
  @ViewChild('title') titleEl: ElementRef;

  constructor(private cd: ChangeDetectorRef) {}


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

  deleteCard() {
    this.deleted.emit();
  }

}
