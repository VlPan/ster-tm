import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Activity } from 'src/app/store/models/activity.model';
import { trigger, state, style, transition, animate } from '@angular/animations';



@Component({
  selector: 'st-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() activity: Activity;

  @Output() deleted: EventEmitter<any> = new EventEmitter();
  currentState = 'initial';
  constructor() { }

  ngOnInit() {
  }

  deleteCard() {
      this.deleted.emit();
  }

}
