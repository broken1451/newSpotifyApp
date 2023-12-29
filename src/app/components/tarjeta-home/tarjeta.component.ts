import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../interfaces/artist.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.scss'
})
export class TarjetaComponent implements OnInit {

  @Input() newRelease!: Item;

  constructor(private router: Router) { }
  
  ngOnInit() {
  }

  verArtista(atistas: Item) {
    if (atistas.type === 'album') {
      this.router.navigate(['/artist', atistas.artists[0].id]);
    }
  }

}
