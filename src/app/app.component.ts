import { Component, OnInit } from '@angular/core';
import { SpotifyService } from './services/spotify.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(private spotifyService: SpotifyService) {}

  ngOnInit() {

  }
}
