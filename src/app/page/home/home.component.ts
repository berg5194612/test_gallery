import { Component, OnInit } from '@angular/core';
import { Image } from '../../image';
import { ImagesListService } from '../../services/images-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images: Image[] = [];
  constructor(public imageList: ImagesListService) {}

  ngOnInit(): void {
    this.imageList.getImages().subscribe((images) => {
      this.images = images;
    });
  }
}
