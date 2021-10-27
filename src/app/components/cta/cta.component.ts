import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.css']
})
export class CtaComponent implements OnInit {

  @Output() toggleSocialLinksEvent = new EventEmitter<boolean>();
  toggleSocialLinks = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Toggled on cta component button click
   */
  onEmitToggleSocialLinksEvent() {
    this.toggleSocialLinks = !this.toggleSocialLinks;
    this.toggleSocialLinksEvent.emit(this.toggleSocialLinks);
  }

}
