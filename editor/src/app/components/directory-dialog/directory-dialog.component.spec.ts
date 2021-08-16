import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectoryDialogComponent } from './directory-dialog.component';

describe('DirectoryDialogComponent', () => {
  let component: DirectoryDialogComponent;
  let fixture: ComponentFixture<DirectoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectoryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
