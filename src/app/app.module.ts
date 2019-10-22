import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BuilderModule } from './builder/builder.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BuilderModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
