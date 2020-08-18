import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterStreamComponent } from './twitter-stream.component';

describe('TwitterStreamComponent', () => {
  let component: TwitterStreamComponent;
  let fixture: ComponentFixture<TwitterStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
