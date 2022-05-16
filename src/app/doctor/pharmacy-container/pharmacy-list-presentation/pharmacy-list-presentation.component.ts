import { Component, Input, OnInit } from '@angular/core';
import { Pharmacy } from 'src/app/doctor/models/pharmacy.model';

@Component({
  selector: 'app-pharmacy-list-presentation',
  templateUrl: './pharmacy-list-presentation.component.html',
  styles: [
  ]
})
export class PharmacyListPresentationComponent implements OnInit {

  @Input() public set pharmacyList(pharmacy : Pharmacy[] | null) {
    this._pharmacyList = pharmacy;
  }
  
  public get pharmacyList() : Pharmacy[] | null {
    return this._pharmacyList;
  }

  private _pharmacyList !: Pharmacy[] | null;
  

  constructor() { }

  ngOnInit(): void {
  }

  public OnClick(){
    console.log(this._pharmacyList);
    
  }

}
