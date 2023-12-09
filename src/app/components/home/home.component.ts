import { Component } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/HousingLocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocation: HousingLocation = {
    id: 9999,
    name: 'Test Home',
    city: 'Test city',
    state: 'ST',
    photo: `https://placehold.co/600x400`,
    availableUnits: 99,
    wifi: true,
    laundry: false,
  };


}
