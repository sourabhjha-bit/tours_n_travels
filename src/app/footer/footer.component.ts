import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  whatsappNumber: string = '9650387642'
  message: string = 'Hello! I would like to get in touch.'

  getWhatsAppLink(): string {
    const encodedMessage = encodeURIComponent(this.message);
    return `https://wa.me/${this.whatsappNumber}?text=${encodedMessage}`;
  }
  faWhatsapp = faWhatsapp;
  faInstagram = faInstagram;
}
