import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  templateUrl: 'pages/page1/page1.html',
   styleUrls: ['pages/page1/page1.css']
})

export class Page1 {
 public constructor(private titleService: Title ) { 
      this.titleService.setTitle( 'Page 1' );
  }
}
