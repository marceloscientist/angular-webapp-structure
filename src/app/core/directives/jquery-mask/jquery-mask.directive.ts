import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import 'jquery-mask-plugin';

@Directive({
 selector: "[mask]"
})
class Mask {
 constructor(private el: ElementRef) {}
 ngAfterViewInit() {
   $(this.el.nativeElement).mask();
 }
}