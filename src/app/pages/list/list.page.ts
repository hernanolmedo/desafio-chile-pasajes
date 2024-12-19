import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/services/duck.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  imageList: string[] = [];

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.loadImageList();
  }

  loadImageList() {
    this.apiService.getImageList().subscribe({
      next: (data: any) => {
        const images = data.images || [];
        const gifs = data.gifs || [];
        const httpImages = data.http?.map((img: string) => `http/${img}`) || []; 
  
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
