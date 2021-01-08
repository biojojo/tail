import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HeaderModule } from './pages/header/header.module';
import { MenuService } from './shared/services/menu.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HeaderModule,
    AppRoutingModule,
    NgbModalModule,
  ],
  providers: [MenuService],
  bootstrap: [AppComponent],
})
export class AppModule {}
