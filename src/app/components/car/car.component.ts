import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars : Car[] = []
  brands : Brand[] = []

  constructor(private carService : CarService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars(){
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data
    })
  }
}
