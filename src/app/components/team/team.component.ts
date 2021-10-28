import {ChangeDetectorRef, Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {TeamMemberModel} from "../../models/team-member.model";
import {TeamMemberLinksModel} from "../../models/team-member-links.model";
import * as faker from "faker";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})

export class TeamComponent implements OnInit {

  teamMemberList: TeamMemberModel[];
  @Input() toggleSocialLinks: boolean;

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) {

    this.teamMemberList = [
      new TeamMemberModel({
        image: faker.image.imageUrl(140, 140, undefined, true, true),
        name: '@' + faker.name.firstName() + ' ' + faker.name.lastName(),
        text: faker.lorem.sentence(12),
        links: new TeamMemberLinksModel({
          // github : 'https://github.com/user/username',
          skype: 'https://github.com/user/username',
          twitter: 'https://github.com/user/username'
        })
      }),
      new TeamMemberModel({
        image: faker.image.imageUrl(140, 140, undefined, true, true),
        name: '@' + faker.name.firstName() + ' ' + faker.name.lastName(),
        text: faker.lorem.sentence(12),
        isActive: true,
        links: new TeamMemberLinksModel({
          github: 'https://github.com/user/username',
          // skype : 'https://github.com/user/username',
          twitter: 'https://github.com/user/username'
        })
      }),
      new TeamMemberModel({
        image: faker.image.imageUrl(140, 140, undefined, true, true),
        name: '@' + faker.name.firstName() + ' ' + faker.name.lastName(),
        text: faker.lorem.sentence(12),
        isActive: false,
        links: new TeamMemberLinksModel({
          github: 'https://github.com/user/username',
          skype: 'https://github.com/user/username',
          twitter: 'https://github.com/user/username'
        })
      })
    ];
  }

  ngOnInit(): void {
    this.changeDetectorRef.detectChanges();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('teamComponent ngOnChanges' + changes);
    // Permet d'afficher l'objet
    console.log('teamComponent ngOnChanges', changes);
    this.changeDetectorRef.detectChanges();
  }

}
