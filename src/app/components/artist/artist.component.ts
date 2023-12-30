import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';
import { Observable, switchMap } from 'rxjs';
import { ArtistByID } from '../interfaces/artist-by-id.interface';
import { ArtistByIDTopTrack, Track } from '../interfaces/artist-by-id-top-tracks.interface';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent implements OnInit {

  public artist!: ArtistByID; 
  public topTrack!: ArtistByIDTopTrack; 
  public loading: boolean = true;

  constructor(private activateRoute: ActivatedRoute, private spotifyService: SpotifyService) { }
  
  /**
   * Método que se ejecuta al inicializar el componente.
   * Realiza una serie de operaciones asincrónicas para obtener los datos del artista y sus mejores canciones.
   * @returns {void}
   */
  ngOnInit(): void {
    this.refresToken();
    this.activateRoute.params.pipe(
      switchMap(({ id }) => {
        return forkJoin([
          this.getArtist(id),
          this.getArtistTopTracks(id)
        ]);
      })
    ).subscribe({
      next: ([artist, topTracks]) => {
        // Handle the combined data here
        this.artist = artist;
        this.topTrack = topTracks;
        this.loading = false;
      },
      error: error => console.error({ error })
    });
  }

  getArtist(id: string): Observable<ArtistByID> {
    return this.spotifyService.getArtistById(id);
  }

  getArtistTopTracks(id: string): Observable<ArtistByIDTopTrack> {
    return this.spotifyService.getArtistByIdTopTracks(id)
  }

  refresToken() {
    this.spotifyService.refresToken().subscribe((data: any) => {
      this.spotifyService.setToken(data.access_token);
      localStorage.setItem('token', data.access_token);
    });
  }
}
