import { HousingService } from './../../services/housing.service';
import { Component, inject } from '@angular/core';
import { HousingLocation } from 'src/app/interfaces/HousingLocation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocation();
  }
}
