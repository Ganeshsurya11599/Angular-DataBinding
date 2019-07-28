import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import { PropertyComponent } from './property/property.component';
import { EventComponent } from './event/event.component';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    EventComponent,
    OnewayComponent,
    TwowayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
