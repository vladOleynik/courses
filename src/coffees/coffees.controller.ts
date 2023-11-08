import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
import { PaginationQueryDto } from '../common/dto/pagination/pagination-query.dto';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}
  @Get()
  async findAll(
    @Query() paginationQuery: PaginationQueryDto,
  ): Promise<Coffee[]> {
    return await this.coffeesService.findAll(paginationQuery);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Coffee> {
    return await this.coffeesService.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.BAD_REQUEST)
  async create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return await this.coffeesService.create(createCoffeeDto);
  }
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(id, updateCoffeeDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return `${id}`;
  }
}
