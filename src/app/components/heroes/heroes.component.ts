import { Component, OnInit } from "@angular/core";
import { HeroesService, Heroe } from "../../servicios/heroes.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private router: Router) {}

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
  }
  verHeroe(index: number) {
    this.router.navigate(["/hero", index]);
  }
}
