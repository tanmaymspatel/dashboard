import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorService } from '../doctor.service';
import { Pharmacy } from '../models/pharmacy.model';

@Component({
  selector: 'app-pharmacy-container',
  templateUrl: './pharmacy-container.component.html',
  styles: [
  ]
})
export class PharmacyContainerComponent {

  public pharmacylist$?:Observable<Pharmacy[] >

  constructor( private _services:DoctorService) {
    this.getPharmacyList();
   }

  private getPharmacyList(){
    this.pharmacylist$ = this._services.getPharmacy(); 
  }
  
}
