import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-heroe-tarjeta",
  templateUrl: "./heroe-tarjeta.component.html",
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroesSeleccionado: EventEmitter<number>;

  constructor(private router: Router) {
    this.heroesSeleccionado = new EventEmitter();
  }

  ngOnInit() {}
  verHeroe() {
    //this.router.navigate(["/hero", this.index]);
    this.heroesSeleccionado.emit(this.index);
  }
}
