import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './views/homepage/homepage.component';
import {CampaignComponent} from './views/campaign/campaign.component';
import {AboutPageComponent} from './views/about-page/about-page.component';
import {ShopPageComponent} from './views/shop-page/shop-page.component';
import {ArchivesPageComponent} from './views/archives-page/archives-page.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'campaign', component: CampaignComponent},
  {path: 'about', component: AboutPageComponent},
  {path: 'shop', component: ShopPageComponent},
  {path: 'shop/pack-ballistic', component: ArchivesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
