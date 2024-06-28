import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MusicListComponent } from './pages/music-list/music-list.component';
import { MusicDetailComponent } from './pages/music-detail/music-detail.component';
import { TimGreenComponent } from './pages/tim-green/tim-green.component';
import { SashaComponent } from './pages/sasha/sasha.component';
import { SashaListComponent } from './pages/sasha-list/sasha-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'music-list', component: MusicListComponent },
  { path: 'detail/:id', component: MusicDetailComponent },
  { path: 'music-list/detail/:id', component: TimGreenComponent },
  { path: 'sasha', component: SashaComponent },
  { path: 'sasha/detail/:id', component: SashaListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
