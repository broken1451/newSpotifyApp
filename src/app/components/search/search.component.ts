import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistsArray } from '../interfaces/artistas.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  
  public artistas!: ArtistsArray | undefined;
  public showAlert: boolean = false;

  constructor(private spotifyService: SpotifyService) { }
    
  ngOnInit(): void {
  }

  public buscar(termino: string) {
  console.log(termino);
    if (termino.length === 0) {
      this.artistas = undefined;
      return;
    }

    this.spotifyService.getArtistByTermino(termino).subscribe({
      next: (data) => { 
        console.log(data);
        this.artistas = data;
        if (this.artistas.artists.items.length === 0) {
          this.showAlert = true;
          return;
        } else {
          this.showAlert = false;
        }
        localStorage.setItem('artistas', JSON.stringify(data));
      },
      error: (error) => {
        console.log(error);
      }
    })

  }

}
