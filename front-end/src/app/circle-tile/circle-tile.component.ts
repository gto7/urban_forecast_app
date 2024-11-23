import { Component, Input } from '@angular/core';
import { Kind } from "../../app/shared/tile_kind";

@Component({
  selector: 'app-circle-tile',
  templateUrl: './circle-tile.component.html',
  styleUrl: './circle-tile.component.css'
})
export class CircleTileComponent {
  @Input() value = 0;
  @Input() type: Kind = Kind.density;
  @Input() nbHab = 0;

  get printed_value(): string {
    let result = "";

    if (this.type === Kind.density) {
      result = `${this.value} hab/km²`;
    } else if (this.type === Kind.first_extension) {
      result = `${this.value} %`;
    } else if (this.type === Kind.final_extension) {
      result = `${this.value} %`;
    }

    return result;
  }

  getTileColor(): string {
    let result = "green";

    if (this.type === Kind.density) {
      if (this.value >= 10000) {
        result = "red";
      } else if (this.value >= 1000) {
        result = "yellow";
      } 
    } else if (this.type === Kind.first_extension) {
      if (this.value > 10) {
        result = "red";
      } else if (this.value >= 1) {
        result = "yellow";
      }
    } else if (this.type === Kind.final_extension) {
      if (this.value >= 10) {
        result = "red";
      } else if (this.value >= 1) {
        result = "yellow";
      }
    }

    return result;
  }
}
