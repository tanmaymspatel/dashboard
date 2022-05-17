import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pharmacy, PharmacyList } from './models/pharmacy.model';
import { Observable } from 'rxjs/internal/Observable';


@Injectable()

export class DoctorService {

  public apiLink: string;


  constructor(private http : HttpClient) { 
    this.apiLink = environment.baseUrl;
  }

  /**
   * @author Tanmay Patel 
   * @name getPharmacy
   * @description get all the pharmacies 
   * @returns Observable of type Pharmacy
   */
   
  public getPharmacy() : Observable<PharmacyList[]>{
    return this.http.get<PharmacyList[]>(`${this.apiLink}/pharmacies`);
  }

  public getPharmacyByMobileNumber(mobileNumber:string) : Observable<Pharmacy[]>{
    return this.http.get<Pharmacy[]>(`${this.apiLink}/pharmacyDetails/${mobileNumber}`)
  }
}
