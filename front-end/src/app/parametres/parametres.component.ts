import { Component } from '@angular/core';

@Component({
  selector: 'app-parametres',
  templateUrl: './parametres.component.html',
  styleUrl: './parametres.component.css'
})
export class ParametresComponent {
  selection = "";
  sliderValue = 0;

  onSliderChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    console.log('Slider value changed:', inputElement.value);
  }
}
