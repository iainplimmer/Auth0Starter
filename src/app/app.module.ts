import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { Auth } from './auth.service';

import { provideAuth } from 'angular2-jwt'
import { AuthHttp } from 'angular2-jwt'
import { AuthConfig } from 'angular2-jwt'

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig({
    tokenName: 'id_token'
  }), http, options)
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [{
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }


