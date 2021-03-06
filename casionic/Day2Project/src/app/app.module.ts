import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { PantallaInicio } from '../pages/0.pantallaInicio/PantallaInicio';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { BuscadorItunes } from '../pages/1.BuscadorItunes/BuscadorItunes';
import { CalculaIMC } from '../pages/2.CalculaIMC/CalculaIMC';
import { IonicStorageModule } from '@ionic/storage';
import { EqualValidator } from './validatorpwd.directive';
import { FormsModule } from '@angular/forms';
import { FavoritosPage } from '../pages/3.Favoritos/favoritos';
import { WebMapPage } from '../pages/web-map/web-map';
import { Geolocation } from '@ionic-native/geolocation';
import { FotoCam } from '../pages/4.fotoCam/fotocam';




@NgModule({
  declarations: [
    MyApp,
    PantallaInicio,
    ItemDetailsPage,
    FavoritosPage, 
    BuscadorItunes,
    CalculaIMC,
    EqualValidator,
    WebMapPage,
    FotoCam
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    IonicStorageModule.forRoot(),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PantallaInicio,
    ItemDetailsPage,
    FavoritosPage,
    BuscadorItunes,
    CalculaIMC,
    WebMapPage,
    FotoCam
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
