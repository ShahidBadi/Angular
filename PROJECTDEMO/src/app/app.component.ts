import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BackgroundComponent } from './background/background.component';
import { OverflowComponent } from './overflow/overflow.component';
import { Pb5Component } from './pb5/pb5.component';
import { FeaturedComponent } from './featured/featured.component';
import { PopularComponent } from './popular/popular.component';
import { LatestComponent } from './latest/latest.component';
import { LatestBlogComponent } from './latest-blog/latest-blog.component';
import { Py4Component } from './py4/py4.component';
import { FooterBottomComponent } from './footer-bottom/footer-bottom.component';
import { Py3Component } from './py3/py3.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,BackgroundComponent,OverflowComponent,Pb5Component,Py3Component,FeaturedComponent,PopularComponent,LatestComponent,LatestBlogComponent,Py4Component,FooterBottomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectdemo';
}
