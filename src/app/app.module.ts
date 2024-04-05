import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LocalStorageService } from '@shared/services/local-storage.service';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  providers: [
    LocalStorageService,
    { provide: 'WINDOW', useValue: window },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
