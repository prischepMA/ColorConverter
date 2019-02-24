import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {max, min} from 'rxjs/internal/operators';

@Component({
  selector: 'app-rgb',
  templateUrl: './rgb.component.html',
  styleUrls: ['./rgb.component.scss']
})
export class RgbComponent implements OnInit {

  minRGB = 0;
  maxRGB = 255;
  stepRGB = 1;
  @Input() R = 0;
  @Input() G = 0;
  @Input() B = 0;

  @Output() rgbChange = new EventEmitter<number []>();

  @Input() colorValue = 'rgb(0,0,0)';
  @Output() colorValueChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSliderChangeR(event: any) {
    this.R = event.value;
    this.concatRGB();
  }

  onSliderChangeG(event: any) {
    this.G = event.value;
    this.concatRGB();
  }

  onSliderChangeB(event: any) {
    this.B = event.value;
    this.concatRGB();
  }

  concatRGB() {
    this.colorValue = `rgb(${this.R},${this.G},${this.B})`;
    this.rgbChange.emit([Math.round(this.R), Math.round(this.G), Math.round(this.B)]);
    this.colorValueChange.emit(this.colorValue);
  }

  onChangeInput(event: any) {
    this.concatRGB();
  }
}
