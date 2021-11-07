import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLoaderComponent } from './logo-loader.component';

describe('LogoLoaderComponent', () => {
  let component: LogoLoaderComponent;
  let fixture: ComponentFixture<LogoLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
