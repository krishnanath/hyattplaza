import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestParComponent } from './test-par.component';

describe('TestParComponent', () => {
  let component: TestParComponent;
  let fixture: ComponentFixture<TestParComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestParComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
