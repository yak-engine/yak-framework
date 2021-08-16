import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColliderComponent } from './collider.component';

describe('ColliderComponent', () => {
  let component: ColliderComponent;
  let fixture: ComponentFixture<ColliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
