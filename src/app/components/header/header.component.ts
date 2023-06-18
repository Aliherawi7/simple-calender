import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from "../../state/state"
import { selectActiveDate } from 'src/app/state/reducer/reducer';
import { DateAndTimeService } from 'src/app/services/date-and-time.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  activeDate: string = "";

  constructor(private store: Store<State>, private dateTimeService: DateAndTimeService) {
    this.store.select(selectActiveDate).subscribe((date: Date) => {
      this.activeDate = this.dateTimeService.getDateFormatted(date)
    })
  }

}
