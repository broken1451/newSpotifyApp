import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, delay, map, take } from 'rxjs';
import { Item, NewReleases } from '../components/interfaces/artist.interface';
import { ArtistsArray, Item as ItemAsSearch } from '../components/interfaces/artistas.interface';
import { ArtistByID } from '../components/interfaces/artist-by-id.interface';
import { ArtistByIDTopTrack, Track } from '../components/interfaces/artist-by-id-top-tracks.interface';

@Injectable()
export class SpotifyService {

  public token: string = '';

  constructor(private httpClient: HttpClient) { 

  }

  setToken(token: string): void {
    this.token = token;
  }

  getNewReleases(): Observable<Item[]> {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDJEfZ_bw6ln7EgCH3GDD_nWPytc64etEt284_12Fhx4lyi2X1rSk81nzV7mE_2gllBOO6JKUQ8VBb7iQzaVlJoxktmCUvmowMSb4FObfaIKfmQ6Yo'
    // });
    return this.httpClient.get<Item[]>(`${environment.url}/v1/browse/new-releases?limit=50`, {}).pipe(
      take(1),
      delay(2000),
      map((data: any) => {
        return data.albums.items;
      })
    );
  }


  getArtistByTermino(termino: string): Observable<ItemAsSearch[]> {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDJEfZ_bw6ln7EgCH3GDD_nWPytc64etEt284_12Fhx4lyi2X1rSk81nzV7mE_2gllBOO6JKUQ8VBb7iQzaVlJoxktmCUvmowMSb4FObfaIKfmQ6Yo'
    // });
    return this.httpClient.get<ItemAsSearch[]>(`${environment.url}/v1/search?q=${termino}&type=artist&limit=20&include_external=audio`, {}).pipe(
      take(1),
      delay(2000),
      map((data: any) => {
        return data.artists.items;
      })
    );
  }


  getArtistById(id: string): Observable<ArtistByID> {
    return this.httpClient.get<ArtistByID>(`${environment.url}/v1/artists/${id}`, {}).pipe(delay(2000));
  }

  getArtistByIdTopTracks(id: string): Observable<ArtistByIDTopTrack> {
    return this.httpClient.get<ArtistByIDTopTrack>(`${environment.url}/v1/artists/${id}/top-tracks?market=US&limit=20`, {}).pipe(delay(2000));
  }


  refresToken() {
      return this.httpClient.get<any>(`${environment.urlToken}`, {}).pipe();
  }
}
