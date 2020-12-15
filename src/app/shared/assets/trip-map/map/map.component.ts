import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mt-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit {
  @Input() fillColor;
  @Input() svgCode;

  constructor( private sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.svgCode = this.sanitizer.bypassSecurityTrustHtml(this.svgCode);
  }
}
