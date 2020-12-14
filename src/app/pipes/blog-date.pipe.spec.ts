import { BlogDatePipe } from './blog-date.pipe';

describe('BlogDatePipe', () => {
  it('create an instance', () => {
    const pipe = new BlogDatePipe();
    expect(pipe).toBeTruthy();
  });
});
