import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';

import { CallbackComponent } from './components/callback/callback.component';
import { LeeTopTracksComponent } from './components/lee-top-tracks/lee-top-tracks.component';
import { TimGreenPageComponent } from './components/tim-green-page/tim-green-page.component';
import { SashaPageComponent } from './components/sasha-page/sasha-page.component';
import { TimGreenComponent } from './pages/tim-green/tim-green.component';
import { SashaComponent } from './pages/sasha/sasha.component';
import { TimGreenTopTracksComponent } from './components/tim-green-top-tracks/tim-green-top-tracks.component';
import { SashaTopTracksComponent } from './components/sasha-top-tracks/sasha-top-tracks.component';
import { MDekayComponent } from './pages/m-dekay/m-dekay.component';
import { DekayTopTracksComponent } from './components/dekay-top-tracks/dekay-top-tracks.component';
import { SliderGreenComponent } from './components/slider-green/slider-green.component';
import { SliderSashaComponent } from './components/slider-sasha/slider-sasha.component';
import { SliderDekayComponent } from './components/slider-dekay/slider-dekay.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent,
    BannerComponent,
    CallbackComponent,
    LeeTopTracksComponent,
    TimGreenPageComponent,
    SashaPageComponent,
    TimGreenComponent,
    SashaComponent,
    TimGreenTopTracksComponent,
    SashaTopTracksComponent,
    MDekayComponent,
    DekayTopTracksComponent,
    SliderGreenComponent,
    SliderSashaComponent,
    SliderDekayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
