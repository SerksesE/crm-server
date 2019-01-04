import { JsonController, Param, Get, Post, HttpCode, Body } from 'routing-controllers'
import Company from './entity';

@JsonController()
export default class CompanyController {

  @Get('/companies')
  getAllCompanies() {
    return Company.find()
  }

  @Get('/companies/:id([0-9]+)')
  getCompanyById(
    @Param('id') id: number
  ) {
    return Company.findOne(id)
  }

  @Post('/companies')
  @HttpCode(201)
  addCompany(
    @Body() company: Company
  ) {
    return company.save()
  }
}