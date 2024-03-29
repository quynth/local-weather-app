import { useAnimation } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ICurrentWeather } from '../icurrent-weather';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css'],
})
export class CurrentWeatherComponent implements OnInit {
  @Input() current: ICurrentWeather = {
    city: '',
    country: '',
    date: new Date(),
    image: '',
    description: '',
    temperature: 0
  }
  constructor() {}

  ngOnInit(): void {
  
  }
}
