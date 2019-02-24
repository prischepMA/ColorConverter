import {Component} from '@angular/core';
import {split} from 'ts-node';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'color-converter';

  colorValue = 'rgb(0,0,0)';

  R = 0;
  G = 0;
  B = 0;

  C = 0;
  M = 0;
  Y = 0;
  K = 100;

  H = 0;
  S = 0;
  V = 0;

  changeRGB(rgb: number[]) {
    this.R = rgb[0];
    this.G = rgb[1];
    this.B = rgb[2];
    console.log(rgb.length);
    if (rgb.length !== 4) {
      this.calcCMYK();
    }
    this.calcHSV();
  }

  constructor() {
  }

  onChange(event: any): void {
    this.setRGB(event);
    this.colorValue = event;
    this.calcCMYK();
    this.calcHSV();
  }

  setRGB(rgb: string) {
    this.R = +rgb.split(',')[0].split('(')[1];
    this.G = +rgb.split(',')[1];
    this.B = +rgb.split(',')[2].split(')')[0];
  }

  calcCMYK() {
    const min = Math.min(1 - this.R / 255, 1 - this.G / 255, 1 - this.B / 255);
    let K = 0;
    let C = 0;
    let M = 0;
    let Y = 0;
    K = min;

    if (K !== 1) {
      C = (1 - this.R / 255 - K) / (1 - K);
      M = (1 - this.G / 255 - K) / (1 - K);
      Y = (1 - this.B / 255 - K) / (1 - K);
    }

    this.C = Math.round(C * 100);
    this.M = Math.round(M * 100);
    this.Y = Math.round(Y * 100);
    this.K = Math.round(K * 100);
  }

  calcHSV() {
    const R = this.R / 255;
    const G = this.G / 255;
    const B = this.B / 255;
    const max = Math.max(R, G, B);
    const min = Math.min(R, G, B);
    let H = 0;
    let S = 0;
    let V = 0;
    if (max === min) {
      H = 0;
    } else if (max === R && G >= B) {
      H = 60 * (G - B) / (max - min);
    } else if (max === R && G < B) {
      H = 60 * (G - B) / (max - min) + 360;
    } else if (max === G) {
      H = 60 * (B - R) / (max - min) + 120;
    } else if (max === B) {
      H = 60 * (R - G) / (max - min) + 240;
    }

    H = Math.round(H);

    if (max === 0) {
      S = 0;
    } else {
      S = 1 - min / max;
      S = Math.round(S * 100);
    }

    V = Math.round(max * 100);

    this.H = H;
    this.S = S;
    this.V = V;
  }

}
