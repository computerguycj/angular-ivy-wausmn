import { Component, OnInit,  VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    of(2, 4, 6, 8).subscribe(console.log);
    from([20, 15, 10, 5]).subscribe(
      next => console.log(`resulting item .. ${next}`),
      err => console.error(`does not compute ${err}`),
      () => console.log('complete')
    );
    of('of', 'course', 'this', 'will', 'work').subscribe(
      next => console.log(next),
      err => {},
      () => console.log('Did you doubt me?')
    )
  }

  name = 'Angular ' + VERSION.major;
}
