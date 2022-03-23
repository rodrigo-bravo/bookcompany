import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HereMapMainComponent } from './here-map.component';

describe('HereMapComponent', () => {
  let component: HereMapMainComponent;
  let fixture: ComponentFixture<HereMapMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HereMapMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HereMapMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
