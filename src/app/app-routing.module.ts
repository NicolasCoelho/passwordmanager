import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntroComponent } from './pages/intro/intro.component';
import { AuthenticateComponent } from './pages/authenticate/authenticate.component';
import { HomeComponent } from './pages/home/home.component';

// Guards
import { CanActivateIntro } from './_guards/intro';
import { CanActivateAuthenticate } from './_guards/authenticate';
import { CanActivateHome } from './_guards/home';

const routes: Routes = [
  { path: '', component: AuthenticateComponent, canActivate: [CanActivateAuthenticate] },
  { path: 'intro', component: IntroComponent },
  { path: 'home', component: HomeComponent, canActivate: [CanActivateHome]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    CanActivateIntro,
    CanActivateAuthenticate,
    CanActivateHome
  ]
})
export class AppRoutingModule {  }
