import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CallbackComponent } from './components/callback/callback.component';
import { TimGreenPageComponent } from './components/tim-green-page/tim-green-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  // { path: '**', redirectTo: 'callback' },
  { path: '**', redirectTo: 'timGreen' },
  { path: 'timGreen', component: TimGreenPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
