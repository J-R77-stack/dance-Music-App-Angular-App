import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { MusicDetailComponent } from './pages/music-detail/music-detail.component';
import { TimGreenComponent } from './pages/tim-green/tim-green.component';
import { SashaComponent } from './pages/sasha/sasha.component';
import { SashaListComponent } from './pages/sasha-list/sasha-list.component';
import { DekayComponent } from './pages/dekay/dekay.component';
import { DekayListComponent } from './pages/dekay-list/dekay-list.component';
import { CallbackComponent } from './callback/callback.component';
import { TopTracksComponent } from './components/top-tracks/top-tracks.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'music-list', component: MusicListComponent },
  { path: 'detail/:id', component: MusicDetailComponent },
  { path: 'music-list/detail/:id', component: TimGreenComponent },
  { path: 'sasha', component: SashaComponent },
  { path: 'sasha/detail/:id', component: SashaListComponent },
  { path: 'dekay', component: DekayComponent },
  { path: 'dekay/detail/:id', component: DekayListComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'top-tracks', component: TopTracksComponent },
  { path: '**', redirectTo: 'top-tracks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
