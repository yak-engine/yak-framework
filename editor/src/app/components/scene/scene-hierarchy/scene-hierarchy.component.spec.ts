import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneHierarchyComponent } from './scene-hierarchy.component';

describe('SceneHierarchyComponent', () => {
  let component: SceneHierarchyComponent;
  let fixture: ComponentFixture<SceneHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneHierarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
