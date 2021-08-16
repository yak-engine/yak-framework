import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneLayersComponent } from './scene-layers.component';

describe('SceneLayersComponent', () => {
  let component: SceneLayersComponent;
  let fixture: ComponentFixture<SceneLayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SceneLayersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneLayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
