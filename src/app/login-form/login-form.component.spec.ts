import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ]
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
