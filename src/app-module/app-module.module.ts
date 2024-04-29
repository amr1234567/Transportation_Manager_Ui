import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AdminModule } from './admin-module/admin.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LogInService } from '../Services/LogInService/log-in.service';
import { TokenSetterService } from '../Services/Interceptors/TokenSetter/token-setter.service';
import { LocalStorageService } from '../Services/LocalStorage/local-storage.service';
import { TokenService } from '../Services/Token/token.service';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    AdminModule,
    FormsModule,
    HttpClientModule,
    RouterLink,
    MatProgressSpinnerModule
  ],
  providers: [
    LogInService,
    LocalStorageService,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenSetterService,
      multi: true
    }
  ],
  exports: [
    LoginComponent,
    NotFoundComponent
  ]
})
export class AppModuleModule { }
