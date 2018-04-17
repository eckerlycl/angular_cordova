import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Http,HttpModule } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { OrderModule } from 'ngx-order-pipe';
import { SelectControlValueAccessor,FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { LightboxModule } from 'angular2-lightbox';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
   {
      path: '', 
      component: HomeComponent 
   },
   {
      path:'admin/',
      component: AdminComponent
   }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'brsApp' }),
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ModalModule.forRoot(),
    LightboxModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy}
    ],
  bootstrap: [AppComponent]
})

export class AppModule {
 
}
