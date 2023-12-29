import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) { }

  // transform(value: string, url: string, finalPath: string): SafeResourceUrl {
  //   console.log('value --->> ', value, url, finalPath);
  // https://open.spotify.com/embed/track/6xpDh0dXrkVp0Po1qrHUd8?utm_source=generator&theme=0
  //   return this.domSanitizer.bypassSecurityTrustResourceUrl(`${url}/${value}/${finalPath}`);
  // }

  /**
   * Transforma una cadena de texto en una URL segura para ser utilizada en un iframe.
   * @param value El valor de la cadena de texto que representa el identificador de la pista de Spotify - tracks.id.
   * @returns La URL segura para ser utilizada en un iframe.
   */
  transform(value: string): SafeResourceUrl {
    // https://open.spotify.com/embed/track/id_track?utm_source=generator&theme=0 
    const url = `https://open.spotify.com/embed/track/${value}?utm_source=generator&theme=0 `;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(`${url}`);
  }

}
