import { Component, Input, ViewChild, ElementRef, Renderer } from '@angular/core';
/**
 * Generated class for the ExpandableFaQsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expandable-fa-qs',
  templateUrl: 'expandable-fa-qs.html'
})
export class ExpandableFaQsComponent {

  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper;
  @Input('expanded') expanded;

  constructor(public renderer: Renderer) {
  }

  ngAfterViewInit() {
      this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', 'text-wrap');
  }

}
