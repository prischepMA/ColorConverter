import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-hsv',
  templateUrl: './hsv.component.html',
  styleUrls: ['./hsv.component.scss']
})
export class HsvComponent implements OnInit {

  R = 0;
  G = 0;
  B = 0;

  @Input() colorValue = 'rgb(0,0,0)';
  @Output() colorValueChange = new EventEmitter<string>();
  @Input() H = 0;
  @Input() S = 0;
  @Input() V = 0;

  @Output() rgbChange = new EventEmitter<number[]>();

  constructor() {
  }

  ngOnInit() {
  }

  onSliderChangeH(event: any) {
    this.H = event.value;
    this.calculateRGB();
    this.concatRGB();
  }

  onSliderChangeS(event: any) {
    this.S = event.value;
    this.calculateRGB();
    this.concatRGB();
  }

  onSliderChangeV(event: any) {
    this.V = event.value;
    this.calculateRGB();
    this.concatRGB();
  }

  concatRGB() {
    this.colorValue = `rgb(${Math.round(this.R)},${Math.round(this.G)},${Math.round(this.B)})`;
    this.rgbChange.emit([Math.round(this.R), Math.round(this.G), Math.round(this.B)]);
    this.colorValueChange.emit(this.colorValue);
  }

  onChangeInput(event: any) {
    this.calculateRGB();
    this.concatRGB();
  }

  calculateRGB() {
    const H = (Math.floor(this.H / 60) % 6);
    const vMin = ((100 - this.S) * this.V) / 100;
    const a = (this.V - vMin) * (this.H % 60) / 60;
    const vInc = vMin + a;
    const vDec = this.V - a;

    switch (H) {
      case 0: {
        this.R = this.V;
        this.G = vInc;
        this.B = vMin;
        break;
      }
      case 1: {
        this.R = vDec;
        this.G = this.V;
        this.B = vMin;
        break;
      }
      case 2: {
        this.R = vMin;
        this.G = this.V;
        this.B = vInc;
        break;
      }
      case 3: {
        this.R = vMin;
        this.G = vDec;
        this.B = this.V;
        break;
      }
      case 4: {
        this.R = vInc;
        this.G = vMin;
        this.B = this.V;
        break;
      }
      case 5: {
        this.R = this.V;
        this.G = vMin;
        this.B = vDec;
        break;
      }
    }
    this.R *= 255 / 100;
    this.G *= 255 / 100;
    this.B *= 255 / 100;
  }
}
