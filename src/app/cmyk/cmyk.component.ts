import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {parseIntAutoRadix} from '@angular/common/src/i18n/format_number';

@Component({
  selector: 'app-cmyk',
  templateUrl: './cmyk.component.html',
  styleUrls: ['./cmyk.component.scss']
})
export class CmykComponent implements OnInit {
  R = 0;
  G = 0;
  B = 0;

  @Output() rgbChange = new EventEmitter<number []>();

  @Input() colorValue = 'rgb(0,0,0)';
  @Output() colorValueChange = new EventEmitter<string>();

  @Input() C = 0;
  @Input() M = 0;
  @Input() Y = 0;
  @Input() K = 100;

  constructor() {
  }

  ngOnInit() {
  }

  calculateRGB() {
    this.R = 255 * (1 - this.C / 100) * (1 - this.K / 100);
    this.G = 255 * (1 - this.M / 100) * (1 - this.K / 100);
    this.B = 255 * (1 - this.Y / 100) * (1 - this.K / 100);
  }


  onSliderChangeC(event: any) {
    this.C = event.value;
    this.calculateRGB();
    this.concatRGB();
  }

  onSliderChangeM(event: any) {
    this.M = event.value;
    this.calculateRGB();
    this.concatRGB();
  }

  onSliderChangeY(event: any) {
    this.Y = event.value;
    this.calculateRGB();
    this.concatRGB();
  }

  onSliderChangeK(event: any) {
    this.K = event.value;
    this.calculateRGB();
    this.concatRGB();
  }

  concatRGB() {
    this.colorValue = `rgb(${Math.round(this.R)},${Math.round(this.G)},${Math.round(this.B)})`;
    this.rgbChange.emit([Math.round(this.R), Math.round(this.G), Math.round(this.B), 1]);
    this.colorValueChange.emit(this.colorValue);
  }

  onChangeInput(event: any) {
    this.calculateRGB();
    this.concatRGB();
  }

}
