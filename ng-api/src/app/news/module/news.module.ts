import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { NewsComponent } from '../component/news.component';
import { NewsService } from '../service/news.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NewsComponent
  ],
  exports: [
    NewsComponent
  ],
  providers: [NewsService, HttpClientModule],
})
export class NewsModule { }
