import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { mainSearchComponent } from './main.component';

describe('mainSearchComponent', () => {
  let component: mainSearchComponent;
  let fixture: ComponentFixture<mainSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ mainSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(mainSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
