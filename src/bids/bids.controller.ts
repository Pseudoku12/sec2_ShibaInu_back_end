import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { BidsService } from './bids.service';
import { CreateBidDto } from './bids.dto';

@Controller('bids')
export class BidsController {
    constructor(private readonly bidService: BidsService) {}

    @Get(':bidId')
    async getBidById(@Param('bidId') bidId: number) {
        return this.bidService.getBidById(bidId);
    }

    @Get('bidId/:jobId')
    async getBidIdByjobId(@Param('jobId') jobId: number) {
        return this.bidService.getBidIdByJobId(jobId);
    }

    @Get('job/:userId')
    async getJobByUserId(@Param('userId') userId: number) {
        return this.bidService.getJobByUserId(userId);
    }

    @Post()
    async createNewBid(@Body() createBidDto: CreateBidDto) {
        return this.bidService.createNewBid(createBidDto);
    }
}
