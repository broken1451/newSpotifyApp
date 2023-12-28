import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withHttpTransferCacheOptions, withNoHttpTransferCache } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { SpotifyService } from './services/spotify.service';
import { InterceptorModule } from './services/interceptor/interceptor.module';
import { interceptorSpotify } from './services/interceptor/interceptor.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    ComponentsModule,
    HttpClientModule,
    SharedModule,
    InterceptorModule
  ],
  providers: [
    provideClientHydration(), 
    provideHttpClient(withFetch(),
      withInterceptorsFromDi()
      // withInterceptors([interceptorSpotify])
    ), // con esto se puede usar el fetch en vez de http
    SpotifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
