import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule} from '@ionic/angular';
import { AdmcomidasPage } from './admcomidas.page';

describe('AdmcomidasPage', () => {
  let component: AdmcomidasPage;
  let fixture: ComponentFixture<AdmcomidasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmcomidasPage ],
      imports: [IonicModule.forRoot()],
               
    }).compileComponents();

    fixture = TestBed.createComponent(AdmcomidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
