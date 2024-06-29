import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerComponent } from './components/banner/banner.component';
import { MusicDetailComponent } from './pages/music-detail/music-detail.component';
import { TimGreenComponent } from './pages/tim-green/tim-green.component';
import { SashaComponent } from './pages/sasha/sasha.component';
import { SashaListComponent } from './pages/sasha-list/sasha-list.component';
import { DekayComponent } from './pages/dekay/dekay.component';
import { DekayListComponent } from './pages/dekay-list/dekay-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MusicListComponent,
    SliderComponent,
    BannerComponent,
    MusicDetailComponent,
    TimGreenComponent,
    SashaComponent,
    SashaListComponent,
    DekayComponent,
    DekayListComponent,
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
