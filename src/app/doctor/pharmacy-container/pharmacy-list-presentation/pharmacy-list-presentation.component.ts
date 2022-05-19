import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PharmacyList } from 'src/app/doctor/models/pharmacy.model';

@Component({
  selector: 'app-pharmacy-list-presentation',
  templateUrl: './pharmacy-list-presentation.component.html',
  styles: [
  ]
})
export class PharmacyListPresentationComponent implements OnInit {

  @Input() public set pharmacyList(pharmacy: PharmacyList[] | null) {
    if(pharmacy){
      this._pharmacyList = pharmacy;
      this.onPharmacy(this._pharmacyList[0].mobileNumber);
    }
  }

  // mobile number of the pharmacy which is selected and which is to be emmited
  @Output() public pharmacyMobileNumber : EventEmitter<string>

  public get pharmacyList(): PharmacyList[] | null {
    return this._pharmacyList;
  }

  // list of pharmacies from the backend
  private _pharmacyList !: PharmacyList[] | null;
  public selected!:string;

  constructor() {
    this.pharmacyMobileNumber = new EventEmitter();
   }

  ngOnInit(): void {
  }

  public onPharmacy(mobileNumber: string) {
    this.pharmacyMobileNumber.emit(mobileNumber);
    this.selected = mobileNumber;
  }

}
