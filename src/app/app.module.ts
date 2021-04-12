import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TerminalComponent } from './terminal/terminal.component';

import { MatSlideToggleModule  } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgTerminalModule } from 'ng-terminal';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TerminalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}),
    NgTerminalModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgxJsonViewerModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [ DataService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
