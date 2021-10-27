import {TeamMemberLinksModel} from "./team-member-links.model";
import {Model} from "./interfaces/model";

export class TeamMemberModel implements Model{
  readonly image: string;
  readonly name: string;
  readonly text: string;
  readonly isActive?: boolean;
  readonly links: TeamMemberLinksModel;

  constructor(input: Partial<TeamMemberModel>) {
    this.image = input.image || '';
    this.name = input.name || '';
    this.text = input.text || '';
    this.isActive = input.isActive || false;
    this.links = new TeamMemberLinksModel(input.links || {});
  }
}
