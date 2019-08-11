import { ConfigService } from './config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-runtime-config';

  constructor(public srv: ConfigService) {

  }

  ngOnInit(): void {
    console.log('test');
    console.log(`${this.srv.getConfig().apiurl}`);
  }
}
