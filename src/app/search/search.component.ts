import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() searchEmail = new EventEmitter<string>();
  @Output() resetSearch = new EventEmitter<void>();

  searchTerm: string = '';
  isFiltered: boolean = false;

  searchForUsers() {
    if (this.searchTerm.trim()) {
      this.isFiltered = true;
      this.searchEmail.emit(this.searchTerm.trim());
    }
  }

  resetFilter() {
    this.searchTerm = '';
    this.isFiltered = false;
    this.resetSearch.emit();
  }
}
