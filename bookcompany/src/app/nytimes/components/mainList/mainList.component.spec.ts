import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NytimesUserComponent } from './mainList.component';


describe('NytimesUserComponent', () => {
  let component: NytimesUserComponent;
  let fixture: ComponentFixture<NytimesUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NytimesUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NytimesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
