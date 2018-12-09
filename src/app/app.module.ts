import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { AdminComponent } from './admin/admin/admin.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { StaffComponent } from './staff/staff/staff.component';
import { AuthService } from './services/auth.service';
import { AuthIntercaptorService } from './services/auth-intercaptor.service';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ReservationComponent } from './reservation/reservation/reservation.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReservedListComponent } from './reservation/reserved-list/reserved-list.component';
import { ReservationEditComponent } from './popup/reservation-edit/reservation-edit.component';
import { StaffEditComponent } from './popup/staff-edit/staff-edit.component';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AnnouncementEditComponent } from './popup/announcement-edit/announcement-edit.component';
import { ValidDirective } from './valid.directive';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
    StaffComponent,
    ReservationComponent,
    ReservedListComponent,
    ReservationEditComponent,
    StaffEditComponent,
    AnnouncementComponent,
    AnnouncementEditComponent,
    ValidDirective,
  ],
  entryComponents: [
    ReservationComponent,
    ReservationEditComponent,
    StaffComponent,
    StaffEditComponent,
    AnnouncementComponent,
    AnnouncementEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthIntercaptorService, multi: true },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }