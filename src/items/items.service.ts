import { Injectable } from '@nestjs/common';
import { CreateItemDto } from './items.dto';

@Injectable()
export class ItemsService {
  private readonly items: CreateItemDto[] = [];

  create(item: CreateItemDto): CreateItemDto {
    this.items.push(item);
    return item;
  }

  findAll(): CreateItemDto[] {
    return this.items;
  }

  findOne(id: number): CreateItemDto {
    return this.items[id];
  }

  update(id: number, item: CreateItemDto): CreateItemDto {
    this.items[id] = item;
    return item;
  }

  remove(id: number): CreateItemDto {
    const removedItem = this.items.splice(id, 1);
    return removedItem[0];
  }
}
