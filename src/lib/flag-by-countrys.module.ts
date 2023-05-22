import { NgModule } from '@angular/core';
import { FlagByCountrysComponent } from './flag-by-countrys.component';
import { FlagsPipe } from './flags.pipe';



@NgModule({
  declarations: [
    FlagByCountrysComponent,
    FlagsPipe
  ],
  imports: [
  ],
  exports: [
    FlagByCountrysComponent,
    FlagsPipe
  ]
})
export class FlagByCountrysModule { }
