import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  progress: number;
  color: string;
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'Vue.js', progress: 90, color: 'from-green-500 to-emerald-600' },
    { name: 'Laravel', progress: 85, color: 'from-red-500 to-red-600' },
    {
      name: 'JavaScript',
      progress: 88,
      color: 'from-yellow-500 to-orange-600',
    },
    { name: 'PHP', progress: 82, color: 'from-blue-500 to-indigo-600' },
    { name: 'MySQL', progress: 78, color: 'from-blue-600 to-blue-700' },
    { name: 'HTML/CSS', progress: 92, color: 'from-orange-500 to-red-500' },
    { name: 'Git', progress: 50, color: 'from-gray-600 to-gray-700' },
    { name: 'Angular', progress: 30, color: 'from-red-600 to-red-700' },
  ];
}
