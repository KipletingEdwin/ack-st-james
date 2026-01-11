import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './pages/home/home.module';
import { NavbarComponentModule } from './pages/home/components/navbar/navbar.module';
import { FooterComponentModule } from './pages/home/components/footer/footer.module';
import { AboutComponentModule } from './pages/about/about.module';
import { SermonsComponentModule } from './pages/sermons/sermons.module';
import { ContactComponentModule } from './pages/contact/contact.module';
import { MinistriesComponentModule } from './pages/ministries/ministries.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule,NavbarComponentModule, FooterComponentModule, AboutComponentModule, MinistriesComponentModule,SermonsComponentModule,ContactComponentModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
