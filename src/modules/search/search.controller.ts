import { Controller, Get, Query } from '@nestjs/common';
import { ApiResponse, ApiTags, ApiOperation } from '@nestjs/swagger';
import { SearchService } from './search.service';
import { Public } from 'src/decorator/public.decorator';
import { V1SearchByKeyQueryDto } from './dto/search-by-key.dto';

@ApiTags('API Search')
@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Public()
  @Get()
  @ApiOperation({ summary: 'Search data by keyword' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  searchByKey(@Query() query: V1SearchByKeyQueryDto): Promise<any> {
    return this.searchService.searchByKey(query);
  }
}
