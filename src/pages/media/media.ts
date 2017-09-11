import {Component, OnInit} from '@angular/core';
import even from '../../data/media';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-media',
  templateUrl: 'media.html',
})
export class MediaPage implements OnInit{

  med: {id: string, image: string, link: string, title: string}[];

  constructor(private iab: InAppBrowser) {}

  Open(url) {
    const browser = this.iab.create(url);
    browser.show();

  }

  ngOnInit() {
    this.med = even
  }


}
