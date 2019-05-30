import { NgModule } from '@angular/core';
import { VgLibComponent } from './vg-lib.component';
import { HeaderComponent } from './header/header.component';
import { LeftsidebarComponent } from './leftsidebar/leftsidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [VgLibComponent, HeaderComponent, LeftsidebarComponent, FooterComponent, LoginComponent],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [VgLibComponent, HeaderComponent, LeftsidebarComponent, FooterComponent, LoginComponent]
})
export class VgLibModule { }
