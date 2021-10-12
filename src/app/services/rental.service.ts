import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl = "https://localhost:44340/api/"
  constructor(private httpClient : HttpClient) { }

  getRenstals():Observable<ListResponseModel<Rental>>{
    let rentalApiUrl = this.apiUrl + "rentals/getall"
    return this.httpClient.get<ListResponseModel<Rental>>(rentalApiUrl)
  }
}
