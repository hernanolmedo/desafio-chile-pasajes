import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/duck.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  randomImage: string | null = null;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  loadRandomImage() {
    this.apiService.getRandomImage().subscribe({
      next: (data: any) => {
        this.randomImage = data.url;
      },
      error: (err) => {
        console.error('Error fetching random image:', err);
      }
    });
  }
}
