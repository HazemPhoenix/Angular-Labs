import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  imageSource: string;
  technologies: string[];
  demoLink?: string;
  githubLink?: string;
}

@Component({
  selector: 'app-portfolio',
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      title: 'Reservio Web Application',
      description:
        'A comprehensive appointment booking system with user-friendly interface, real-time notifications, and admin dashboard for managing bookings and users.',
      imageSource:
        'https://res.cloudinary.com/dbymxe1wb/image/upload/v1748527664/reservio_pejhbq.png',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Node.js'],
      demoLink: 'https://reservio-two.vercel.app/',
      githubLink: 'https://github.com/HazemPhoenix/Reservio',
    },
    {
      title: 'VaniFit E-commerce Website',
      description:
        'An online clothing store with a modern design, featuring product listings, shopping cart functionality, and secure payment integration.',
      imageSource:
        'https://res.cloudinary.com/dbymxe1wb/image/upload/v1748529929/Screenshot_from_2025-05-29_17-45-12_naresc.png',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      demoLink: 'https://prototype-9fedd.web.app/',
      githubLink: 'https://github.com/e-commerce-itians/VaniFit',
    },
    {
      title: 'Reservio Web Application',
      description:
        'A comprehensive appointment booking system with user-friendly interface, real-time notifications, and admin dashboard for managing bookings and users.',
      imageSource:
        'https://res.cloudinary.com/dbymxe1wb/image/upload/v1748527664/reservio_pejhbq.png',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Node.js'],
      demoLink: 'https://reservio-two.vercel.app/',
      githubLink: 'https://github.com/HazemPhoenix/Reservio',
    },
    {
      title: 'VaniFit E-commerce Website',
      description:
        'An online clothing store with a modern design, featuring product listings, shopping cart functionality, and secure payment integration.',
      imageSource:
        'https://res.cloudinary.com/dbymxe1wb/image/upload/v1748529929/Screenshot_from_2025-05-29_17-45-12_naresc.png',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      demoLink: 'https://prototype-9fedd.web.app/',
      githubLink: 'https://github.com/e-commerce-itians/VaniFit',
    },
    {
      title: 'Reservio Web Application',
      description:
        'A comprehensive appointment booking system with user-friendly interface, real-time notifications, and admin dashboard for managing bookings and users.',
      imageSource:
        'https://res.cloudinary.com/dbymxe1wb/image/upload/v1748527664/reservio_pejhbq.png',
      technologies: ['Vue.js', 'Firebase', 'Tailwind CSS', 'Node.js'],
      demoLink: 'https://reservio-two.vercel.app/',
      githubLink: 'https://github.com/HazemPhoenix/Reservio',
    },
    {
      title: 'VaniFit E-commerce Website',
      description:
        'An online clothing store with a modern design, featuring product listings, shopping cart functionality, and secure payment integration.',
      imageSource:
        'https://res.cloudinary.com/dbymxe1wb/image/upload/v1748529929/Screenshot_from_2025-05-29_17-45-12_naresc.png',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
      demoLink: 'https://prototype-9fedd.web.app/',
      githubLink: 'https://github.com/e-commerce-itians/VaniFit',
    },
  ];
}
