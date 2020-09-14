import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchicalGridAdvancedFilteringComponent } from './hierarchical-grid-advanced-filtering.component';

describe('HierarchicalGridAdvancedFilteringComponent', () => {
  let component: HierarchicalGridAdvancedFilteringComponent;
  let fixture: ComponentFixture<HierarchicalGridAdvancedFilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HierarchicalGridAdvancedFilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HierarchicalGridAdvancedFilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
