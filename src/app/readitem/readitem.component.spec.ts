import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaditemComponent } from './readitem.component';

describe('ReaditemComponent', () => {
  let component: ReaditemComponent;
  let fixture: ComponentFixture<ReaditemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaditemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReaditemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
