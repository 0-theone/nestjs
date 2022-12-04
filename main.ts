import { Controller, Module, Get } from '@nestjs/common';

@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return 'How about some X and Y?';
    }
}