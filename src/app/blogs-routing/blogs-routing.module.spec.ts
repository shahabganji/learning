import { BlogsRoutingModule } from './blogs-routing.module';

describe('BlogsRoutingModule', () => {
  let blogsRoutingModule: BlogsRoutingModule;

  beforeEach(() => {
    blogsRoutingModule = new BlogsRoutingModule();
  });

  it('should create an instance', () => {
    expect(blogsRoutingModule).toBeTruthy();
  });
});
