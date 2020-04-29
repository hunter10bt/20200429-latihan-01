import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { Routes, RouterModule} from '@angular/router';
import { ResultsComponent} from './results/results.component';

const routes:Routes = [
  {path:'result',component:ResultsComponent},
  {path:'main',component:AppComponent},
]

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(routes), ],
  declarations: [ AppComponent, HelloComponent, ResultsComponen ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
