import { NgModule } from '@angular/core';
import { NumericOnlyDirective } from './numeric-only.directive';

@NgModule({
  declarations: [
    NumericOnlyDirective
  ],

  exports: [
    NumericOnlyDirective
  ]
})
export class NumericOnlyModule {
}
