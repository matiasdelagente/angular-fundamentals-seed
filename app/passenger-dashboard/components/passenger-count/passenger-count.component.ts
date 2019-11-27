import { Component, Input } from '@angular/core';
import { Passenger } from '../../models/passenger-dashboard.interface';

@Component({
  selector: 'passenger-count',
  template: `
    <div>
      <h3>Airline Passengers!</h3>
      <div>
        Total checked in: {{checkeInCount()}}/{{items.length}}
      </div>
    </div>
  `
})

export class PassengerCountComponent {
  @Input()
  items: Passenger[]
  checkeInCount(): number {
    return this.items.filter((passenger: Passenger) => passenger.checkedIn).length
  }
}