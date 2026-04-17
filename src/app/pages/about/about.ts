import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  name: string = 'Anna';
  email: string = 'anna@example.com';
  isActive: boolean = true;
}
