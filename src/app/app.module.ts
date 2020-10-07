import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTES } from './app.routes';

// Modulos
import { Pagesmodule } from './pages/pages.module';

// Temporal
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

// Servicios
import { ServiceModule } from './services/service.module';
// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Pagesmodule,
    APP_ROUTES,
    FormsModule,
    ServiceModule,
  ],
providers: [] ,
  bootstrap: [AppComponent],
})
export class AppModule {}
