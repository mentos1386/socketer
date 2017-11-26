import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAppComponent } from './app.component';

describe('SettingsAppComponent', () => {
  let component: SettingsAppComponent;
  let fixture: ComponentFixture<SettingsAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
