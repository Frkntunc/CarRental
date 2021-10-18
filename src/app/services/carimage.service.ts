import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carimage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarimageService {

  apiUrl ="https://localhost:44340/api/"

  constructor(private httpClient : HttpClient) { }

  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    let newApiUrl = this.apiUrl + "carimages/getbycarid?Id=" + carId
    return this.httpClient.get<ListResponseModel<CarImage>>(newApiUrl)
  }
}
