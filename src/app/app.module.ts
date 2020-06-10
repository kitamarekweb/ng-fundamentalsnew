// ng-fundamentalsnew\src\app\app.module.ts START
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {EventsAppComponent} from './events-app.component';
import {EventsListComponent} from './events/events-list.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}
// ng-fundamentalsnew\src\app\app.module.ts END
