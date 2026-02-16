import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
  ],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo"
        alt="Exterior photo of {{housingLocation?.name}}"/>
      <section class="listing-description">
        <h2 class="listing-heading">{{housingLocation?.name}}</h2>
        <p class="listing-location">{{housingLocation?.city}}, {{housingLocation?.state}}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply now to live here</h2>
        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">

          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">

          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">
          <button type="submit" class="primary">Apply now</button>
        </form>
        <div *ngIf="submitted" class="modal-overlay">
          <div class="modal-content">
            <h3 class="dialog-heading">Thank you for applying!</h3>
            <p>We’ve received your application with the following details:</p>
            <ul>
              <li><strong>First Name:</strong> {{submittedData?.firstName}}</li>
              <li><strong>Last Name:</strong> {{submittedData?.lastName}}</li>
              <li><strong>Email:</strong> {{submittedData?.email}}</li>
            </ul>
            <button class="secondary" (click)="goHome()">Return to Home</button>
          </div>
        </div>
      </section>
    </article>
  `,
  styleUrl: './details.component.css'
})

export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  submitted = false;
  submittedData: { firstName: string; lastName: string; email: string } | null = null;

  goHome() {
    this.router.navigate(['/']);
  };

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService.getHousingLocationById(housingLocationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication() {
    const { firstName, lastName, email } = this.applyForm.value;
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );

    this.submittedData = {firstName: firstName ?? '', lastName: lastName ?? '', email: email ?? ''};
    this.submitted = true;
  }

}