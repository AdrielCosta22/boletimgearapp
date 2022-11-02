import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelainicioComponent } from './telainicio/telainicio.component';
import { TelaloginComponent } from './telalogin/telalogin.component';

@NgModule({
  declarations: [
    AppComponent,
    TelainicioComponent,
    TelaloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
