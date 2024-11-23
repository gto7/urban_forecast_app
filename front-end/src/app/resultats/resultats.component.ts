import { Component } from '@angular/core';
import { Kind } from "../../app/shared/tile_kind";

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.component.html',
  styleUrl: './resultats.component.css'
})
export class ResultatsComponent {
  densityTile: Kind = Kind.density;
  firstStepTile: Kind = Kind.first_extension;
  lastStepTile: Kind = Kind.final_extension;
}
