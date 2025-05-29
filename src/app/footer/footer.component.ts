import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
  color: string;
}

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  isSubmitting: boolean;
  isSubmitted: boolean;
  error: string | null;
}

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  private readonly SERVICE_ID = 'service_9ja532a';
  private readonly TEMPLATE_ID = 'template_yn26a64';
  private readonly PUBLIC_KEY = 'TSaM6rRM34VFE5zsb';

  contactForm: ContactForm = {
    name: '',
    email: '',
    message: '',
  };

  formStatus: FormStatus = {
    isSubmitting: false,
    isSubmitted: false,
    error: null,
  };

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/hazemphoenix',
      icon: 'fab fa-github',
      color: 'hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hazem-abdulmoneim/',
      icon: 'fab fa-linkedin',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/hazem.98745/',
      icon: 'fab fa-facebook',
      color: 'hover:text-blue-500',
    },
  ];

  constructor() {
    emailjs.init(this.PUBLIC_KEY);
  }

  async submitForm() {
    if (
      !this.contactForm.name ||
      !this.contactForm.email ||
      !this.contactForm.message
    ) {
      this.formStatus.error = 'Please fill in all fields';
      return;
    }

    this.formStatus.isSubmitting = true;
    this.formStatus.error = null;

    try {
      const templateParams = {
        from_name: this.contactForm.name,
        from_email: this.contactForm.email,
        message: this.contactForm.message,
        to_name: 'Hazem Abdulmoneim',
        reply_to: this.contactForm.email,
      };

      const result = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams
      );

      this.contactForm = { name: '', email: '', message: '' };
      this.formStatus.isSubmitted = true;
      setTimeout(() => {
        this.formStatus.isSubmitted = false;
      }, 5000);
    } catch (error) {
      console.error('Email send failed:', error);
      this.formStatus.error =
        'Failed to send message. Please try again or contact me directly at hazemabdulmoneim@gmail.com';
    } finally {
      this.formStatus.isSubmitting = false;
    }
  }
}
