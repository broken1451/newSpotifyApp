import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../interfaces/artistas.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta-search',
  templateUrl: './tarjeta-search.component.html',
  styleUrl: './tarjeta-search.component.scss'
})
export class TarjetaSearchComponent implements OnInit{


  @Input() artist!: Item;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  verArtista(arti: Item) {
    if (arti.type === 'artist') {
      this.router.navigate(['/artist', arti.id]);
    }
  }


}
