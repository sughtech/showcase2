import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalGridEditingComponent } from './hierarchical-grid-editing.component';

describe('HierarchicalGridEditingComponent', () => {
  let component: HierarchicalGridEditingComponent;
  let fixture: ComponentFixture<HierarchicalGridEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchicalGridEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchicalGridEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
