import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModuleModule } from '../app-module/app-module.module';
import { AdminModule } from '../app-module/admin-module/admin.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModuleModule, AdminModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Transportation_Manager_Ui';
}
