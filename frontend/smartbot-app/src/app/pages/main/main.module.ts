import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';

import { DataService } from 'src/app/services/data.service';
import { QueryService } from 'src/app/services/query.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  //providers: [DataService, QueryService],
})
export class MainModule {}
