import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { WriteComponent } from './write.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    WriteComponent
  ],
  imports: [
    BrowserModule,
    WriteComponent,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [WriteComponent]
})
export class AppModule { }
