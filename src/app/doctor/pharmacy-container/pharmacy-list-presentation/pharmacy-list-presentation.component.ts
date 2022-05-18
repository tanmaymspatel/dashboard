import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pharmacy, PharmacyList } from 'src/app/doctor/models/pharmacy.model';

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
    }
  }

  // mobile number of the pharmacy which is selected and which is to be emmited
  @Output() public pharmacyMobileNumber : EventEmitter<string>

  public get pharmacyList(): PharmacyList[] | null {
    return this._pharmacyList;
  }

  // list of pharmacies from the backend
  private _pharmacyList !: PharmacyList[] | null;
  public selected:any;

  constructor() {
    this.pharmacyMobileNumber = new EventEmitter();
    if(this._pharmacyList)
    {
      this.selected = this._pharmacyList[0].mobileNumber;
    }
   }

  ngOnInit(): void {
  }

  public onPharmacy(mobileNumber: string) {
    this.pharmacyMobileNumber.emit(mobileNumber);
  }

}
