import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneListingComponent } from './scene-listing.component';

describe('SceneListingComponent', () => {
  let component: SceneListingComponent;
  let fixture: ComponentFixture<SceneListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
