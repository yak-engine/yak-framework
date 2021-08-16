import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TilemapPaletteComponent } from './tilemap-palette.component';

describe('TilemapPaletteComponent', () => {
  let component: TilemapPaletteComponent;
  let fixture: ComponentFixture<TilemapPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TilemapPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TilemapPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
