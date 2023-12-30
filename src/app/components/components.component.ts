import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss'
})
export class ComponentsComponent implements OnInit{

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit() {
    this.refresToken();
  }

  refresToken() {
    this.spotifyService.refresToken().subscribe((data: any) => {
      this.spotifyService.setToken(data.access_token);
      localStorage.setItem('token', data.access_token);
    });
  }
}
