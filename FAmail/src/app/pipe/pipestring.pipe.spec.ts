import { PipestringPipe } from './pipestring.pipe';

describe('PipestringPipe', () => {
  it('create an instance', () => {
    const pipe = new PipestringPipe();
    expect(pipe).toBeTruthy();
  });
});
