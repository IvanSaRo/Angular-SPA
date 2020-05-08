import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";

/* RUTAS */
import { APP_ROUTING } from "./app.routes";
/* SERVICIOS */
import { HeroesService } from "./servicios/heroes.service";

/* COMPONENTES */
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { RouterLinkActive } from "@angular/router";
import { from } from "rxjs";
import { HeroComponent } from './components/hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, APP_ROUTING],
  providers: [HeroesComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
