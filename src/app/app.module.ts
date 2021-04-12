import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { DataService } from './data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlertComponent } from './_alert/alert.component';
import { AlertService } from './_alert/alert.service';
import { TerminalComponent } from './terminal/terminal.component';
import { MatSlideToggleModule  } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NgTerminalModule } from 'ng-terminal';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CodeCompleteComponent } from './code_complete/code_complete.component';
import {MatTableModule} from '@angular/material/table';
import { TokensTableComponent } from './tokens-table/tokens-table.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TerminalComponent,
    TokensTableComponent,
    CodeCompleteComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {onSameUrlNavigation: 'reload'}),
    HttpClientModule,

    NgTerminalModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    NgxJsonViewerModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [ DataService, AlertService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
