import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { ArtistsArray, Item } from '../interfaces/artistas.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  
  public artistas: Item[] | undefined = [];
  public showAlert: boolean = false;
  public loading: boolean = false;

  constructor(private spotifyService: SpotifyService) { }
    
  ngOnInit(): void {
    this.refresToken();
  }

  public buscar(termino: string) {
    this.loading = true;
    if (termino.length === 0) {
      this.artistas = undefined;
      this.loading = false;
      return;
    }

    this.spotifyService.getArtistByTermino(termino).subscribe({
      next: (data) => {
        this.artistas = data;
        if (this.artistas.length === 0) {
          this.showAlert = true;
          this.loading = false;
          return;
        } else {
          this.showAlert = false;
          this.loading = false;
        }
        // localStorage.setItem('artistas', JSON.stringify(data));
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  refresToken() {
    this.spotifyService.refresToken().subscribe((data: any) => {
      this.spotifyService.setToken(data.access_token);
      localStorage.setItem('token', data.access_token);
    });
  }
}
