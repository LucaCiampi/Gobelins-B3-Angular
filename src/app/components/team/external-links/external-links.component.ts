import {Component, Input, OnInit} from '@angular/core';
import {TeamMemberLinksModel} from "../../../models/team-member-links.model";

@Component({
  selector: 'app-external-links',
  templateUrl: './external-links.component.html',
  styleUrls: ['./external-links.component.css']
})

export class ExternalLinksComponent implements OnInit {
  // @Input est un décorateur
  @Input() links:TeamMemberLinksModel;

  constructor() {}

  ngOnInit(): void {
  }

}
