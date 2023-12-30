import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Item, NewReleases } from '../interfaces/artist.interface';
import { interval } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class HomeComponent implements OnInit {

  public nuevosReleases: Item[] = [];
  public loading: boolean = true;
  public error: boolean = false;
  public msgError: string = '';

  constructor(private spotifyService: SpotifyService, public router: Router) { }

  async ngOnInit() {
    this.refresToken();
    if (localStorage.getItem('token') === null) {
      this.router.navigate(['/search']);
   }
    this.getNewReleases();
  }

  getNewReleases() {
    this.loading = true;
    this.spotifyService.getNewReleases().subscribe({
      next: data => {
        this.nuevosReleases = data;
        this.loading = false;
      },
      error: err => {
        this.error = true;
        this.loading = false;
        this.msgError = 'Error en el servidor, por favor intente más tarde.';
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