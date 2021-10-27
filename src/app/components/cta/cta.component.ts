import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit {

  @Output() toggleSocialLinksEvent = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onEmitToggleSocialLinksEvent(value: boolean) {
    this.toggleSocialLinksEvent.emit(value);
  }

}
