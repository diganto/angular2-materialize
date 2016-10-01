import { Component,ElementRef,OnInit,AfterContentInit} from '@angular/core';
import * as Materialize from 'angular2-materialize';
declare var jQuery:any;
@Component({
  selector: 'my-app',
  template: `<div class="parallax-container">
    <div materialize="parallax" class="parallax"><img src="http://materializecss.com/images/parallax1.jpg"></div>
  </div>
  <div class="section white">
      <div class="row container">
        This is a fixed html <div id="hdiv"></div>
        <h2 class="header">Parallax</h2>
        <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image  move at a different speed than the foreground content while scrolling.</p>
        
       
    <dropdown></dropdown> 
      
      <gallery></gallery>
    
     </div>
  </div>
  <div class="parallax-container">
    <div materialize="parallax" class="parallax"><img src="http://materializecss.com/images/parallax2.jpg"></div>
  </div>`

})
export class AppComponent implements OnInit{
  elemref:ElementRef;
  constructor(elementref:ElementRef){
    this.elemref=elementref;
  }
  ngOnInit(){
    jQuery(this.elemref.nativeElement).find('#hdiv').append('<h5>|This div is added using DOM query|</h5>');
   
  }
  ngAfterContentInit(){
    Materialize.toast("Hello Materialize -Angular 2.x RC7",5000);
  }
 }
/*Created by Diganta -Tritan Technologies*/
/*Component is an metadata directive
The component acts as an core header file for the entire framework
*/
/*So for UI coding the /app folder will only matter</br> However for any JS config changes look into systemjs.config.js</br>And for TS compiler adjustments change tsconfig.json'*/
