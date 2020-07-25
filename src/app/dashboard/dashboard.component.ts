import { Component, OnInit, ElementRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Renderer2, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private _renderer2: Renderer2,
    @Inject(DOCUMENT) private document,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.jsText();
  }
  jsText() {
    const s = this.document.createElement("script");
    s.type = "text/javascript";
    s.src = "assets/js/owl.carousel.min.js";
    const __this = this; //to store the current instance to call

    this.elementRef.nativeElement.appendChild(s);
  }
}
