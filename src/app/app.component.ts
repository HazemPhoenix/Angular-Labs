import { Component } from '@angular/core';
import { SearchComponent } from './search/search.component';
import { UserlistComponent } from './userlist/userlist.component';

@Component({
  selector: 'app-root',
  imports: [SearchComponent, UserlistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'day2';
  currentEmailFilter: string = '';

  onSearchEmail(email: string) {
    this.currentEmailFilter = email;
  }

  onResetSearch() {
    this.currentEmailFilter = '';
  }
}
