import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCatComponent } from './blog-cat.component';

describe('BlogCatComponent', () => {
  let component: BlogCatComponent;
  let fixture: ComponentFixture<BlogCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
