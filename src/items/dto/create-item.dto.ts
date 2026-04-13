import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateItemDto {
  @ApiProperty({ example: 'Buy groceries', description: 'Title of the item' })
  title: string;

  @ApiPropertyOptional({ example: 'Milk, eggs, bread', description: 'Optional description' })
  description?: string;

  @ApiPropertyOptional({ example: false, description: 'Whether the item is completed' })
  completed?: boolean;
}
