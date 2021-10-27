import {ChangeDetectorRef, Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {

  @Input() toggleFeaturesTitle: number;
  featuresTitles = ['Our features', 'Roule ma poule'];
  featuresData = [
    {
      image : 'mockup2.png',
      title : 'This is Improve Your Marketing business',
      text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud .',
      isOrderInverted : false
    },
    {
      image : 'mockup1.png',
      title : 'This Is Increase Your Marketing Performance',
      text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud .',
      isOrderInverted : true
    }
  ]

  constructor(private readonly changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('featuresComponent ngOnChanges');
    this.changeDetectorRef.detectChanges();
    this.changeTitle(this.toggleFeaturesTitle);
  }

  changeTitle(index: number): void {
    const title = document.getElementById('featuresTitle');
    if (!title) return;
    title.innerHTML = this.featuresTitles[index];
  }

}
