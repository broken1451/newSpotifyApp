import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { NewReleases } from '../interfaces/artist.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  host: { ngSkipHydration: 'true' }
})
export class HomeComponent implements OnInit {

  public nuevosReleases!: NewReleases;

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.getNewReleases();
  }

  getNewReleases() {

    this.spotifyService.getNewReleases().subscribe({
      next: data => {
        this.nuevosReleases = data;
      },
      error: error => console.error({ error })
    });
  }

} 