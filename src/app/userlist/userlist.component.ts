import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../interfaces/user.interface';
import usersData from '../../assets/users.json';

@Component({
  selector: 'app-userlist',
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css',
})
export class UserlistComponent implements OnInit, OnChanges {
  @Input() filterEmail!: string;
  users: User[] = usersData;
  filteredUsers: User[] = [];

  ngOnInit() {
    this.filteredUsers = this.users;
    this.applyFilter();
  }

  ngOnChanges() {
    this.applyFilter();
  }

  applyFilter() {
    if (!this.filterEmail) {
      this.filteredUsers = this.users;
    } else {
      this.filteredUsers = this.users.filter((user) =>
        user.email.toLowerCase().includes(this.filterEmail.toLowerCase())
      );
    }
  }
}
