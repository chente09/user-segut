import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Path } from '../../utils/path';
import { CommonModule } from '@angular/common';
import { PathsService } from '../../services/paths/paths.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ImagesService, ImageData } from '../../services/imagenes/images.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  paths: Path[] = [];
  logoUrl: string = 'logo.png'; // URL predeterminada para el logo

  constructor(
    private imagesService: ImagesService,
    private pathsService: PathsService, // Inyectar el servicio
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPaths();
    this.loadLogo();
  }

  loadLogo(): void {
    this.imagesService.getImages().subscribe((images: ImageData[]) => {
      // Buscar la imagen específica del logo en la colección
      const logoImage = images.find(image => image.name === 'logo.jpg'); // Suponiendo que identificas el logo por el nombre
      if (logoImage && logoImage.url) {
        this.logoUrl = logoImage.url; // Actualizar la URL del logo
      }
    });
  }

  // Método para cargar los paths desde Firestore
  loadPaths(): void {
    this.pathsService.getPaths().subscribe((data: Path[]) => {
      this.paths = data; // Actualizar la lista de paths
      console.log('Paths cargados:', this.paths);
    });
  }
}
