import { Component } from '@angular/core';

import { SensorsPage } from '../sensors/sensors';
import { PlacesPage } from '../places/places';
import { EventsPage } from '../events/events';
import { RelaysPage } from '../relays/relays';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PlacesPage;
  tab2Root = SensorsPage;
  tab3Root = RelaysPage;
  tab4Root = EventsPage;

  constructor() {

  }
}
