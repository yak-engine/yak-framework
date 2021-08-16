import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpriteRendererComponent } from './sprite-renderer.component';

describe('SpriteRendererComponent', () => {
  let component: SpriteRendererComponent;
  let fixture: ComponentFixture<SpriteRendererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpriteRendererComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpriteRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
