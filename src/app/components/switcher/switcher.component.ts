import {Component, Inject} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.scss']
})

export class SwitcherComponent {

  // en Angular, le @ est un décorateur
  constructor(@Inject(DOCUMENT) private readonly document: Document) {
  }

  isVisible = false;
  colorsData = ['default', 'pink', 'yellow', 'green', 'purple', 'light-blue'];

  public windowScroll(): void {
    const html = document.getElementById('back-to-top');
    if (!html) return;
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      html.style.display = "inline";
    } else {
      html.style.display = "none";
    }
  }

  /**
   * Toggles color settigns visibility on settings button click
   */
  public toggleSettings(): void {
    this.isVisible = !this.isVisible;
  }

  /**
   * Onclick color change
   * @param theme theme color
   */
  public setTheme(theme: string) {
    // @ts-ignore
    document
      .getElementById('color-opt')
      .setAttribute('href', 'assets/css/colors/' + theme + '.css')
  }


}
