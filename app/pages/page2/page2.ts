import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
  templateUrl: 'pages/page2/page2.html'
})

export class Page2 {
    public constructor(private titleService: Title){
       this.titleService.setTitle( 'Page 2' );
    }
}
