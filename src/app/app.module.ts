import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ColorPickerModule} from 'ngx-color-picker';
import {MatCardModule} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatSliderModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RgbComponent } from './rgb/rgb.component';
import { CmykComponent } from './cmyk/cmyk.component';
import { HsvComponent } from './hsv/hsv.component';
import {NumericOnlyModule} from './directives/numeric-only/numeric-only.module';


@NgModule({
  declarations: [
    AppComponent,
    RgbComponent,
    CmykComponent,
    HsvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColorPickerModule,
    MatCardModule,
    FormsModule,
    MatSliderModule,
    MatInputModule,
    BrowserAnimationsModule,
    NumericOnlyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
