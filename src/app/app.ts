import { Component, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isScrolled = signal(false);
  mobileMenuOpen = signal(false);
  activeSection = signal('home');

  navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Our Doctors', href: '#team' },
    { label: 'Contact', href: '#contact' },
  ];

  teamMembers = [
    {
      name: 'Dr. Sakam Guru Abhilash',
      title: 'Chief Ophthalmologist',
      specialization: 'General & Surgical Ophthalmology',
      experience: '15+ Years',
      image: 'doc1.png',
      bio: 'A compassionate and skilled ophthalmologist dedicated to restoring and preserving vision. Leads the team with expertise in a wide range of eye conditions and surgeries.',
    },
    {
      name: 'Dr. Sakam Guru Murthy',
      title: 'Senior Eye Specialist',
      specialization: 'Cataract & Refractive Surgery',
      experience: '20+ Years',
      image: 'doc2.png',
      bio: 'An experienced eye specialist known for precision and patient care, specializing in cataract surgery and advanced refractive procedures with outstanding outcomes.',
    },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);

    const sections = ['home', 'about', 'team', 'contact'];
    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }

  toggleMenu() {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu() {
    this.mobileMenuOpen.set(false);
  }

  scrollTo(event: Event, target: string) {
    event.preventDefault();
    this.closeMenu();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
