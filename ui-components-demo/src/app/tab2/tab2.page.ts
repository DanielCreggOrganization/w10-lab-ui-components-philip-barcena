import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonBadge, IonList, IonItemOption, IonAvatar, IonThumbnail } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonBadge, IonIcon, IonItemOptions, IonLabel, IonItem, IonItemSliding, IonList, IonItemOption, IonAvatar, IonThumbnail],
})
export class Tab2Page {

  constructor() {}

}
