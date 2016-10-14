import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }         from './app.component';
import { routing,
         appRoutingProviders }  from './app.routing';

import { Page1 }    from './pages/page1/page1';
import { Page2 }    from './pages/page2/page2';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    Page1,
    Page2
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}