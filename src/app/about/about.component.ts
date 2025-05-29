import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  downloadCV() {
    const link = document.createElement('a');
    link.href = '/Profile.pdf';
    link.download = 'Hazem Abdulmoneim - CV.pdf';
    link.click();
    link.remove();
  }
}
