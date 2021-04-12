import {Routes} from '@angular/router';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import {TerminalComponent} from './terminal/terminal.component';
import {TokensTableComponent} from './tokens-table/tokens-table.component';

export const ROUTES: Routes = [
    {
        path: '',  component: HomeComponent
    },
    {
        path: 'a',  component: TerminalComponent
    },
    {
        path: 'b',  component: TokensTableComponent
    },
    
];
