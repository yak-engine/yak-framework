import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilemapComponent } from './tilemap.component';

describe('TilemapComponent', () => {
  let component: TilemapComponent;
  let fixture: ComponentFixture<TilemapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilemapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
