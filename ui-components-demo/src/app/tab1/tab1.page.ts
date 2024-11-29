import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCardContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton , ExploreContainerComponent, IonCardContent, IonCard, IonCardSubtitle, IonCardTitle,IonCardHeader],
})
export class Tab1Page {
  constructor() {}
}
