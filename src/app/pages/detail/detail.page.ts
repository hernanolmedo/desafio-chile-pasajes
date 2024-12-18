import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  filename: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.filename = this.route.snapshot.paramMap.get('filename');
    console.log('Filename received:', this.filename);
    // Aquí puedes agregar código para cargar la imagen usando el filename
  }

  goBack() {
    this.router.navigate(['/list']);
  }

  navigate(url: string) {
    window.open(url, '_blank'); // Abre la URL en una nueva pestaña
  }
}
