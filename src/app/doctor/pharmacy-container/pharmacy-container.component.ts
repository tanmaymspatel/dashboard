import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DoctorService } from '../doctor.service';
import { Pharmacy, PharmacyList } from '../models/pharmacy.model';

@Component({
  selector: 'app-pharmacy-container',
  templateUrl: './pharmacy-container.component.html',
  styles: [
  ]
})
export class PharmacyContainerComponent implements OnInit {

  public pharmacylist$: Observable<PharmacyList[]>
  public pharmacyDetailsByMobileNumber$: Observable<Pharmacy[]>

  constructor(private _services: DoctorService) {
    this.pharmacylist$ = new Observable();
    this.pharmacyDetailsByMobileNumber$ = new Observable();

  }

  ngOnInit(): void {
    this.getPharmacyList();
  }

  private getPharmacyList() {
    this.pharmacylist$ = this._services.getPharmacy();
  }

  public pharmacyMobileNumber(mobileNumber: string) {
    this.pharmacyDetailsByMobileNumber$ = this._services.getPharmacyByMobileNumber(mobileNumber);
  }

}
