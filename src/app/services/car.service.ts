import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44340/api/";
  constructor(private httpClient : HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let carApiUrl = this.apiUrl + "cars/getall"
    return this.httpClient.get<ListResponseModel<Car>>(carApiUrl)
  }

  getCarsByBrand(id:number):Observable<ListResponseModel<Car>>{
    let newCarApiUrl = this.apiUrl + "cars/getbybrandid?id=" + id
    return this.httpClient.get<ListResponseModel<Car>>(newCarApiUrl)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newCarApiUrl = this.apiUrl + "cars/getbycolorid?id=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newCarApiUrl)
  }
}
