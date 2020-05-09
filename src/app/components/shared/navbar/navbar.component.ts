import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import * as $ from "jquery";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  buscarHeroe(busqueda: string) {
    //console.warn(busqueda);
    this.router.navigate(["/search", busqueda]);
    $("#limpiar").val("");
  }
}
