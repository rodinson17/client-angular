import { Component, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @ViewChild('nav') slider: NgImageSliderComponent;

  imageObject: Array<object> = [
    {
      image: 'assets/img/sliders/slider-angular-3.png',
      thumbImage: 'assets/img/sliders/slider-angular-3.png',
      alt: 'alt of image',
      title: 'Angular JS Black'
    },
    {
      image: 'assets/img/sliders/slider-angular-2.jpg', // Support base64 image
      thumbImage: 'assets/img/sliders/slider-angular-2.jpg', // Support base64 image
      title: 'Angular JS by Google', //Optional: You can use this key if want to show image with title
      alt: 'Image alt' //Optional: You can use this key if want to show image with alt
    },
    {
      image: 'assets/img/sliders/slider-angular-4.jpeg',
      thumbImage: 'assets/img/sliders/slider-angular-4.jpeg',
      title: 'Angular Education',
      alt: 'Image alt'
    }
  ];

  constructor() { }

  /* prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
      this.slider.next();
  } */

  ngOnInit(): void {
  }

}
