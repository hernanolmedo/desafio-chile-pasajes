import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/duck.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  imageList: any[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadImageList();
  }

  loadImageList() {
    this.apiService.getImageList().subscribe({
      next: (data: any) => {
        const images = (data.images || []).map((img: string) => ({
          name: img,
          url: img
        }));
  
        const gifs = (data.gifs || []).map((gif: string) => ({
          name: gif,
          url: gif
        }));
  
        const httpImages = (data.http || []).map((httpImg: string) => ({
          name: httpImg,
          url: `http/${httpImg}`
        }));
  
        this.imageList = [...images, ...gifs, ...httpImages];
      },
      error: (err) => {
        console.error('Error fetching image list:', err);
      }
    });
  }
  

  viewImage(image: string) {
    console.log('Imagen seleccionada:', image);
    this.router.navigate(['/detail', image]);
  }

}
