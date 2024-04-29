import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NavLayerComponent } from './nav-layer/nav-layer.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { RouterOutlet } from '@angular/router';
import { PowerBIEmbedModule } from 'powerbi-client-angular';
import { PiComponent } from './dash-board/pi/pi.component';



@NgModule({
  declarations: [
    NavLayerComponent,
    DashBoardComponent,
    CreateManagerComponent,
    PiComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    AsyncPipe,
    RouterOutlet,
    PowerBIEmbedModule
  ],
  exports: [
    NavLayerComponent,
    DashBoardComponent,
    CreateManagerComponent,
    PiComponent
  ]
})
export class AdminModule { }
