import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return 'hi nest!';
  }

  @Get('/xy')
  getXandY() {
    return 'X&Y';
  }
}