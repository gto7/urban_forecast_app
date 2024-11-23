import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParametresComponent } from './parametres/parametres.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { CircleTileComponent } from './circle-tile/circle-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ParametresComponent,
    ResultatsComponent,
    CircleTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
