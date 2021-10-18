import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carimage';
import { CarService } from 'src/app/services/car.service';
import { CarimageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit {

  carDetails : Car [] = []
  carImages : CarImage [] = []

  constructor(private carService : CarService, 
    private carImageService : CarimageService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if(params["carId"]){
        this.getCarDetails(params["carId"]),
        this.getCarImagesByCarId(params["carId"])
      }
    })
  }

  getCarDetails(carId:number){
    this.carService.getCarDetails(carId).subscribe((response) => {
      this.carDetails = response.data
      console.log(response.data)
    })
  }

  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data
      console.log(response)
    })
  }

  getImagePath(carImage:string){
    let imagePath = "https://localhost:44340"
    return imagePath + carImage
  }
}
