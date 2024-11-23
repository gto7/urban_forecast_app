import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleTileComponent } from './circle-tile.component';

describe('CircleTileComponent', () => {
  let component: CircleTileComponent;
  let fixture: ComponentFixture<CircleTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CircleTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
