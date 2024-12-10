import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-auto-slider',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './auto-slider.component.html',
  styleUrl: './auto-slider.component.css',
})
export class AutoSliderComponent implements OnInit {
  images: string[] = [
    'assets/images/slide4.jpg',
    'assets/images/slide1.jpg',
    'assets/images/slide2.jpg',
    'assets/images/slide3.jpg',
    'assets/images/slide5.jpg',
    'assets/images/slide6.jpg',
    'assets/images/slide7.jpg',
    'assets/images/slide8.jpg',
    'assets/images/slide9.jpg',
    'assets/images/slide10.jpg',
  ];

  controls = true
  selectedIndex = 0;
  indicators = true;
  autoslide = true
  slideInterval = 2500

  ngOnInit(): void {
    if (this.autoslide) {
      this.autoslideImages()
    }
  }

  autoslideImages(){
    setInterval(()=>{
      this.onNextClick()
    }, this.slideInterval)
  }

  selectImage(index:number){
    this.selectedIndex=index
  }

  onPrevClick(){
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1
    }else{
      this.selectedIndex--
    }
  }

  onNextClick(){
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0
    }else{
      this.selectedIndex++
    }
  }
}
