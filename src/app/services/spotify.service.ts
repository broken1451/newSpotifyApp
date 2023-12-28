import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, take } from 'rxjs';
import { NewReleases } from '../components/interfaces/artist.interface';
import { ArtistsArray } from '../components/interfaces/artistas.interface';

@Injectable()
export class SpotifyService {

  public paises: any[] = [];

  constructor(private httpClient: HttpClient) { }

  getNewReleases(): Observable<NewReleases> {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDJEfZ_bw6ln7EgCH3GDD_nWPytc64etEt284_12Fhx4lyi2X1rSk81nzV7mE_2gllBOO6JKUQ8VBb7iQzaVlJoxktmCUvmowMSb4FObfaIKfmQ6Yo'
    // });
    return this.httpClient.get<NewReleases>(`${environment.url}/v1/browse/new-releases`, {  }).pipe();
  }


  getArtistByTermino(termino: string): Observable<ArtistsArray> {
    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer BQDJEfZ_bw6ln7EgCH3GDD_nWPytc64etEt284_12Fhx4lyi2X1rSk81nzV7mE_2gllBOO6JKUQ8VBb7iQzaVlJoxktmCUvmowMSb4FObfaIKfmQ6Yo'
    // });
    return this.httpClient.get<ArtistsArray>(`${environment.url}/v1/search?q=${termino}&type=artist&limit=20&include_external=audio`,{  }).pipe();
  }
}
