import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      emailOrPhone: [
        '',
        [
          Validators.required,
          Validators.pattern(/^([\w.%+-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,4}|\d{10})$/),
        ],
      ],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      emailjs
        .send(
          'service_00deex6',
          'template_wj946yx',
          this.contactForm.value,
          {
            publicKey: '4IJLofWs1iNHPXhkV',
          }
        )
        .then(() => {
          console.log('Form Submitted', this.contactForm.value);
          alert('Thank you for contacting us!');
          this.contactForm.reset();
        });
    }
  }
}
