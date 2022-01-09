import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  constructor(private countriesService: CountriesService) {
    this.formGroup = new FormGroup({
      email: new FormControl(null),
      customerName: new FormControl(null),
      country: new FormControl(null),
    });
  }

  //property
  countries: any;
  formGroup: FormGroup;

  ngOnInit(): void {
    of(this.countriesService.getCountries()).subscribe({
      next: (response) => (this.countries = response),
      error: (error) => console.error(error),
      complete: () => console.info('complete'),
    });
  }
}
