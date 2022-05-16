import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { PharmacyContainerComponent } from './pharmacy-container/pharmacy-container.component';
import { DoctorService } from './doctor.service';
import { PharmacyViewPresentationComponent } from './pharmacy-container/pharmacy-view-presentation/pharmacy-view-presentation.component';
import { PharmacyListPresentationComponent } from './pharmacy-container/pharmacy-list-presentation/pharmacy-list-presentation.component';


@NgModule({
  declarations: [
    DoctorComponent,
    PharmacyContainerComponent,
    PharmacyListPresentationComponent,
    PharmacyViewPresentationComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
  ],
  providers:[
    DoctorService,
  ]
})
export class DoctorModule { }
