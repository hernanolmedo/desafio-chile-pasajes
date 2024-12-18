import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './pages/home/home.module';
import { ListPageModule } from './pages/list/list.module';
import { DetailPageModule } from './pages/detail/detail.module';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HomePageModule, ListPageModule, DetailPageModule],
  providers: [
    provideHttpClient(withInterceptorsFromDi()), 
    { provide: RouteReuseStrategy, 
      useClass: IonicRouteStrategy 
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
