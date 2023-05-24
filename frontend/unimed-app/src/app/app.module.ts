import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { LoginComponent } from './pages/login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { TemplateModule } from './pages/template/template.module';
import { AuthService } from './services/auth.service';
import { PlanoModule } from './pages/plano/plano.module';
import { PlanoService } from './services/plano.service';
import { TokenInterceptor } from 'src/interceptors/token.interceptor';
import { BeneficiarioModule } from './pages/beneficiario/beneficiarios.module';
import { BeneficiariosService } from './services/beneficiario.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TemplateModule,
    PlanoModule,
    BeneficiarioModule
  ],
  providers: [AuthService, PlanoService,BeneficiariosService, {provide : HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
