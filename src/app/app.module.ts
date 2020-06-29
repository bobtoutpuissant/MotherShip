import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ContentComponent } from './content/content.component';
import { ListPeopleComponent } from './list-people/list-people.component';
import { PeopleItemCardComponent } from './people-item-card/people-item-card.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

const firebaseConfig = {
  apiKey: 'AIzaSyCzmg_p1g3HMVmN_ngpLAyHlfGoyst_RQ0',
  authDomain: 'mothership-cbd5f.firebaseapp.com',
  databaseURL: 'https://mothership-cbd5f.firebaseio.com',
  projectId: 'mothership-cbd5f',
  storageBucket: 'mothership-cbd5f.appspot.com',
  messagingSenderId: '157171008739',
  appId: '1:157171008739:web:1d4c238696eee57d73b1d6'
};

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    ContentComponent,
    ListPeopleComponent,
    PeopleItemCardComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
