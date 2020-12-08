import { Component, OnInit,  VERSION } from '@angular/core';
import { of, from } from 'rxjs';
import { map, skip, take, tap } from 'rxjs/operators';

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
    of('of', 'course', 'this', 'will', 'work')
      .pipe(
        map(i => [i, i]),
        skip(2),
        take(3),
        tap(i => console.log(i))
      )
      .subscribe(
        next => {},
        err => console.error('You goofed'),
        () => console.log('Is there an echo in here?')
      )
  }

  name = 'Angular ' + VERSION.major;
}
