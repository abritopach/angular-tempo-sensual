import { Component, OnInit } from '@angular/core';
import { NgxCarousel, NgxCarouselStore } from 'ngx-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgags: string[];
  carouselBannerItems: Array<any> = [];
  carouselBanner: NgxCarousel;
  carouselTileItems: Array<any> = [];
  carouselTile: NgxCarousel;

  constructor() { }

  ngOnInit() {

    this.imgags = [
      'assets/img/canberra.jpg',
      'assets/img/canberra.jpg',
      'assets/img/canberra.jpg',
      'assets/img/canberra.jpg'
    ];

    this.carouselBanner = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      loop: true,
      touch: true
    };

    this.carouselTile = {
      grid: { xs: 2, sm: 3, md: 3, lg: 4, all: 0 },
      speed: 600,
      interval: 3000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 50%;
            border: 2px solid rgba(0, 0, 0, 0.55);
            padding: 4px;
            margin: 0 3px;
            transition-timing-function: cubic-bezier(.17, .67, .83, .67);
            transition: .4s;
          }
          .ngxcarouselPoint li.active {
              background: #6b6b6b;
              transform: scale(1.2);
          }
        `
      },
      load: 2,
      touch: true
    };

    this.carouselBannerLoad();
    this.carouselTileLoad();
  }

  carouselBannerLoad() {
    const len = this.carouselBannerItems.length;
    if (len <= 4) {
      for (let i = len; i < len + 5; i++) {
        this.carouselBannerItems.push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }

  carouselTileLoad() {
    const len = this.carouselTileItems.length;
    if (len <= 30) {
      for (let i = len; i < len + 15; i++) {
        this.carouselTileItems.push(
          this.imgags[Math.floor(Math.random() * this.imgags.length)]
        );
      }
    }
  }

  /* This will be triggered after carousel viewed.  */
  afterCarouselViewedFn(data) {
    // console.log(data);
  }

  /* It will be triggered on every slide. */
  onmoveFn(data: NgxCarouselStore) {
    // console.log(data);
  }

}
