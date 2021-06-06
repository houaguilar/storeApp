import {Component, OnInit, ViewEncapsulation} from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";

SwiperCore.use([EffectFade, Navigation, Pagination]);

@Component({
  selector: 'app-banner',
  template: `
    <swiper
      [spaceBetween]="30"
      [effect]="'fade'"
      [navigation]="true"
      [pagination]="{
      clickable: true
    }"
      class="mySwiper"
    >
      <ng-template swiperSlide>
        <img src="assets/images/banner-1.jpeg" alt=""/>
      </ng-template>
      <ng-template swiperSlide>
        <img src="assets/images/banner-1.jpeg" alt=""/>
      </ng-template>
      <ng-template swiperSlide>
        <img src="assets/images/banner-1.jpeg" alt=""/>
      </ng-template>
    </swiper>`,
  styleUrls: ['./banner.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
