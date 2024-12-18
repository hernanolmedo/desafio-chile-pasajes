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

  // Método para cargar la lista de imágenes
  loadImageList() {
    this.apiService.getImageList().subscribe({
      next: (data: any) => {
        this.imageList = data.images || [];
      },
      error: (err) => {
        console.error('Error fetching image list:', err);
      }
    });
  }

  viewImage(image: string) {
    console.log('Imagen seleccionada:', image);
    // Implementa la lógica para mostrar la imagen seleccionada
    this.router.navigate(['/detail', image]);
  }

}
