import { Component, Input, OnInit } from '@angular/core';
import { Pharmacy } from '../../models/pharmacy.model';

@Component({
  selector: 'app-pharmacy-view-presentation',
  templateUrl: './pharmacy-view-presentation.component.html',
  styles: [
  ]
})
export class PharmacyViewPresentationComponent implements OnInit {

  public pharmacyDetails!: Pharmacy[];

  @Input() public set PharmacyDetailsByMobileNumber(pharmacyDetails: Pharmacy[] | null) {
    if (pharmacyDetails) {
      this._PharmacyDetailsByMobileNumber = pharmacyDetails;
    }
  }
  public get PharmacyDetailsByMobileNumber(): Pharmacy[] {
    return this._PharmacyDetailsByMobileNumber;
  }

  private _PharmacyDetailsByMobileNumber!: Pharmacy[];


  constructor() { }

  ngOnInit(): void {
    this.pharmacyDetails = [
      {
      "name": "Happy Pharmacy",
      "email": "happypharmacy@gmail.com",
      "establishmentDate": "30-05-2000",
      "mobileNumber": "8285564294",
      "address": "A-20/21, Shreeji Arcade, Anand Mahal Road, Surat",
      "certificate": "",
      "pharmacistDegreeCertificate": "",
      "state": "Gujarat",
      "city": "Surat"
    }
  ]
  }

}
