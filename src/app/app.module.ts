import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarTableComponent } from './components/calender-table/calender-table.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentsViewComponent } from './components/appointments-view/appointments-view.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/reducer/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BackdropComponent } from './components/backdrop/backdrop.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarTableComponent,
    HomeComponent,
    HeaderComponent,
    AppointmentFormComponent,
    AppointmentsViewComponent,
    BackdropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    DragDropModule,
    FormsModule,
    StoreModule.forRoot({ state: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
