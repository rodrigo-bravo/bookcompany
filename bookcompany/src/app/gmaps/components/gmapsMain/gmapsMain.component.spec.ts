import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GmapsMainComponent} from './gmapsMain.component';


describe('GmapsMainComponent', () => {
  let component: GmapsMainComponent;
  let fixture: ComponentFixture<GmapsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmapsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmapsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
