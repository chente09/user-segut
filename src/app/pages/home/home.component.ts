import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardComponent } from 'ng-zorro-antd/card';
import { NzCardMetaComponent } from 'ng-zorro-antd/card';
import { NzAvatarComponent } from 'ng-zorro-antd/avatar';
import { SliderService, ImageData } from '../../services/slider/slider.service';
import { CardsHomeService, CardData } from '../../services/cards-home/cards-home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NzCardComponent, NzCardMetaComponent, NzAvatarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imagenes: ImageData[] = [];
  cards: CardData[] = []; // Almacenará las tarjetas obtenidas

  constructor(
    private sliderService: SliderService,
    private cardsHomeService: CardsHomeService
  ) {}

  ngOnInit(): void {
    this.cargarImagenes();
    this.loadCards();
  }

  cargarImagenes(): void {
    this.sliderService.getImages().subscribe({
      next: (images: ImageData[]) => {
        this.imagenes = images;
      },
      error: (err) => console.error('Error al cargar imágenes:', err)
    });
  }
  loadCards(): void {
    this.cardsHomeService.getCards().subscribe({
      next: (cards: CardData[]) => {
        this.cards = cards; // Asignar las tarjetas al array
      },
      error: (err) => console.error('Error al cargar tarjetas:', err) // Manejo de errores
    });
  }
}
