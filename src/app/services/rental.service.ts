import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rentalApiUrl = "https://localhost:44340/api/rentals/getall"
  constructor(private httpClient : HttpClient) { }

  getRenstals():Observable<RentalResponseModel>{
    return this.httpClient.get<RentalResponseModel>(this.rentalApiUrl)
  }
}
