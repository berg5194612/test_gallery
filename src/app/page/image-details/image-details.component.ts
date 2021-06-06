import { Component, OnInit } from '@angular/core';
import { ImageDetailsService } from '../../services/image-details.service';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../image';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.css'],
})
export class ImageDetailsComponent implements OnInit {
  details: Image | undefined;

  constructor(
    public getImageDetails: ImageDetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    const url = `https://picsum.photos/id/${id}/info`;
    this.getImageDetails.getDetails(url).subscribe((data) => {
      this.details = data;
    });
  }
}
