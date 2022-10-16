import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create <app-login-form />', () => {
    expect(component).toBeTruthy();
  });

  it('should have e-mail input', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('[data-testid="app-login__email-label"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="app-login__email-input"]')).toBeTruthy();
  });

  it('should have password input', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('[data-testid="app-login__password-label"]')).toBeTruthy();
    expect(el.querySelector('[data-testid="app-login__password-input"]')).toBeTruthy();
  });

  it('should have submit button', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.querySelector('[data-testid="app-login__submit-btn"]')).toBeTruthy();
  });
});
