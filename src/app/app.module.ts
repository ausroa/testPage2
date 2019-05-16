import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SlideshowModule} from 'ng-simple-slideshow';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { FooterComponent } from './components/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogDataExampleDialog, ModalComponent} from './components/modal/modal.component';
import { MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {MatDialogModule} from '@angular/material';
import { CampaignComponent } from './views/campaign/campaign.component';
import { AboutPageComponent } from './views/about-page/about-page.component';
import { ShopPageComponent } from './views/shop-page/shop-page.component';
import { MagFlipBookComponent } from './components/mag-flip-book/mag-flip-book.component';
import { ArchivesPageComponent } from './views/archives-page/archives-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    FooterComponent,
    ModalComponent,
    DialogDataExampleDialog,
    CampaignComponent,
    AboutPageComponent,
    ShopPageComponent,
    MagFlipBookComponent,
    ArchivesPageComponent,
  ],
  entryComponents: [DialogDataExampleDialog],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideshowModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
