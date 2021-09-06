/*
 * BrowserModule 브라우저에서 앱이 동작할 때 필요한 인프라를 제공하는 모듈
 * AppRoutingModule 라우팅 관련 디렉티브 및 모듈
 * Form Module 폼 관련 디렉티브 및 모듈
 * HttpClientModule HTTP 통신 관련 모듈
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component'; 

/*
 * 
 */
@NgModule({ declarations: [ AppComponent ], 
  imports: [ BrowserModule, AppRoutingModule, FormsModule, HttpClientModule ],
  providers: [],
  bootstrap: [AppComponent]
 }) 
 export class AppModule {}

