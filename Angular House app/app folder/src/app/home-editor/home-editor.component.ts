import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home-editor',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home-editor.component.html',
  styleUrl: './home-editor.component.css'
})
export class HomeEditorComponent {
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;

  editForm = new FormGroup({
    name: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    availableUnits: new FormControl(0),
    wifi: new FormControl(false),
    laundry: new FormControl(false)
  });

  async ngOnInit() {
    const locationId = 1; // Replace with dynamic ID if needed
    this.housingLocation = await this.housingService.getHousingLocationById(locationId);

    if (this.housingLocation) {
      this.editForm.patchValue({
        name: this.housingLocation.name,
        city: this.housingLocation.city,
        state: this.housingLocation.state,
        availableUnits: this.housingLocation.availableUnits,
        wifi: this.housingLocation.wifi,
        laundry: this.housingLocation.laundry
      });
    }
  }


  saveChanges() {
    if (!this.housingLocation) return;

    const updatedLocation: HousingLocation = {
      ...this.housingLocation,
      ...this.editForm.value as Partial<HousingLocation>
    };

    this.housingService.updateHousingLocation(updatedLocation);
  }

}
