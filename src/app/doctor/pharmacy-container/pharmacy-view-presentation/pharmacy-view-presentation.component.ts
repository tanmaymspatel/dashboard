import { Component, Input, OnInit } from '@angular/core';
import { Pharmacy } from '../../models/pharmacy.model';

@Component({
  selector: 'app-pharmacy-view-presentation',
  templateUrl: './pharmacy-view-presentation.component.html',
  styles: [
  ]
})
export class PharmacyViewPresentationComponent {

  // pharmacy details from a mobile number
  @Input() public set pharmacyDetailsByMobileNumber(pharmacyDetails: Pharmacy[] | null) {
    if (pharmacyDetails) {
      this._pharmacyDetailsByMobileNumber = pharmacyDetails;
    }
  }
  public get pharmacyDetailsByMobileNumber(): Pharmacy[] {
    return this._pharmacyDetailsByMobileNumber;
  }

  private _pharmacyDetailsByMobileNumber!: Pharmacy[];

}
