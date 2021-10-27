import {AfterViewInit, ChangeDetectorRef, Component, Inject, Input, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'home-page', //selecteur html pour appeler le compo
  templateUrl: './home-page.component.html',// template associé
  styleUrls: ['./home-page.component.scss']// style associé pour surcharger les styles principaux

})

// HomePageComponent convention de nommage PascalCase pour les noms de classe
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {

  // variables et functions convention de nomage camelCase
  currentSection = 'home-page';
  timerInterval: any;
  titleTextData = [
    'Create amazing landing page with Gobelins',
    'Perfect solution for small businesses',
    'We love make things amazing and simple'
  ];
  toggleSocialLinks: boolean = true;

  constructor(@Inject(DOCUMENT) private readonly document: Document,
              private readonly changeDetectorRef: ChangeDetectorRef) {
    // exécuté en premier !

    // exemple de log à checker dans la console du navigateur
    console.log('(exemple de log) section courante: ' + this.currentSection); // utilisation de this pour appels à fonctions, variables, ...
  }

  ngOnInit() {
    // exécuté automatiquement à l'initialisation du composant
    // obligatoire si implements OnInit (qui est facultatif)
    // D'autres existent, voir https://angular.io/guide/lifecycle-hooks
  }

  ngAfterViewInit() {
    // exécuté automatiquement après l'initialisation de la vue
    // obligatoire si implements AfterViewInit (qui est facultatif)
    // D'autres existent, voir https://angular.io/guide/lifecycle-hooks

    const title = document.getElementById('text');
    if (!title) return;

    let i = 1;
    this.timerInterval = setInterval(() => {
      title.innerHTML = this.titleTextData[i];
      i++;
      if (i >= this.titleTextData.length) {
        i = 0;
        // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
      }
    }, 2500);
  }

  // Toujours utiliser public ou private pour les fonctions, variables , constantes ...
  // Si pas précisé, c'est public par défaut mais on s'expose à des soucis de lint
  // NOTE : Pour les appels depuis le html, mettre en public
  public windowScroll(): void {
    const html = document.getElementById('navbar');
    if (!html) return;
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
      html.style.backgroundColor = '#1a1a1a';
      html.style.padding = '15px 0px';
    } else {
      html.style.backgroundColor = '';
      html.style.padding = '20px';
    }
  }

  // Utiliser void si la fonction ne renvoie rien
  private returnNothing(): void {
    const fake = this.returnABoolean(false)
  }

  // Préciser le type ( boolean, any, unknown ...)
  private returnABoolean(input: boolean): boolean {
    const fake = !input;
    return fake;
  }

  public toggleMenu(): void {
    // @ts-ignore
    document.getElementById('navbarCollapse').classList.toggle('show');
  }


  public onSectionChange(sectionId: string): void {
    this.currentSection = sectionId;
  }

  /**
   * Emits an eventEmitter on cta button click
   * @param event: boolean
   */
  public onEmitToggleSocialLinksEvent(event: boolean): void {
    this.toggleSocialLinks = event;
    this.changeDetectorRef.detectChanges();
  }

  ngOnDestroy() {
    // exécuté automatiquement avant la desctruction du composant
    // obligatoire si implements OnDestroy (qui est facultatif)
    // Important : Si on a souscrit à des abonnements, se désabonner ici pour éviter les fuites de mémoires
    // D'autres existent, voir https://angular.io/guide/lifecycle-hooks

    clearInterval(this.timerInterval);
  }

}
