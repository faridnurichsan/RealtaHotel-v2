import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeController } from 'src/Controller/HR/employee/employee.controller';
import { PaymentTransactionController } from 'src/Controller/Payment/payment-transaction/payment-transaction.controller';
import { UserAccountController } from 'src/Controller/Payment/user-account/user-account.controller';
import { AppController } from 'src/Controller/app.controller';
import { EmployeeService } from 'src/Service/HR/employee/employee.service';
import { AppService } from 'src/service/app.service';
import { PaymentTransactionService } from 'src/Service/Payment/payment-transaction/payment-transaction.service';
import { UserAccountService } from 'src/Service/Payment/user-account/user-account.service';
import { Address } from 'src/entities/Address';
import { Bank } from 'src/entities/Bank';
import { BookingOrderDetail } from 'src/entities/BookingOrderDetail';
import { BookingOrderDetailExtra } from 'src/entities/BookingOrderDetailExtra';
import { BookingOrders } from 'src/entities/BookingOrders';
import { CategoryGroup } from 'src/entities/CategoryGroup';
import { Country } from 'src/entities/Country';
import { Department } from 'src/entities/Department';
import { Employee } from 'src/entities/Employee';
import { EmployeeDepartmentHistory } from 'src/entities/EmployeeDepartmentHistory';
import { EmployeePayHistory } from 'src/entities/EmployeePayHistory';
import { Entitys } from 'src/entities/Entitys';
import { JobRole } from 'src/entities/JobRole';
import { Members } from 'src/entities/Members';
import { OrderMenuDetail } from 'src/entities/OrderMenuDetail';
import { OrderMenus } from 'src/entities/OrderMenus';
import { PaymentGateway } from 'src/entities/PaymentGateway';
import { PaymentTransaction } from 'src/entities/PaymentTransaction';
import { Policy } from 'src/entities/Policy';
import { PriceItems } from 'src/entities/PriceItems';
import { Proviences } from 'src/entities/Proviences';
import { Regions } from 'src/entities/Regions';
import { RestoMenuPhotos } from 'src/entities/RestoMenuPhotos';
import { RestoMenus } from 'src/entities/RestoMenus';
import { Roles } from 'src/entities/Roles';
import { ServiceTask } from 'src/entities/ServiceTask';
import { Shift } from 'src/entities/Shift';
import { SpecialOfferCoupons } from 'src/entities/SpecialOfferCoupons';
import { SpecialOffers } from 'src/entities/SpecialOffers';
import { UserAccounts } from 'src/entities/UserAccounts';
import { UserBonusPoints } from 'src/entities/UserBonusPoints';
import { UserBreakfeast } from 'src/entities/UserBreakfeast';
import { UserMembers } from 'src/entities/UserMembers';
import { UserPassword } from 'src/entities/UserPassword';
import { UserProfiles } from 'src/entities/UserProfiles';
import { UserRoles } from 'src/entities/UserRoles';
import { Users } from 'src/entities/Users';
import { WorkOrderDetail } from 'src/entities/WorkOrderDetail';
import { WorkOrders } from 'src/entities/WorkOrders';
import { EntitysService } from 'src/Service/Payment/entitys/entitys.service';
import { BankService } from 'src/Service/Payment/bank/bank.service';
import { PaymentGatewayService } from 'src/Service/Payment/payment-gateway/payment-gateway.service';
import { EntitysController } from 'src/Controller/Payment/entitys/entitys.controller';
import { BankController } from 'src/Controller/Payment/bank/bank.controller';
import { PaymentGatewayController } from 'src/Controller/Payment/payment-gateway/payment-gateway.controller';
import { MiddlewareConsumer, NestModule } from '@nestjs/common/interfaces';
import { AuthMiddleware } from 'src/auth.middleware';
import { RestoMenusController } from 'src/Controller/Resto/resto-menus/resto-menus.controller';
import { RestoMenuPhotosController } from 'src/Controller/Resto/resto-menu-photos/resto-menu-photos.controller';
import { OrderMenusController } from 'src/Controller/Resto/order-menus/order-menus.controller';
import { RestoMenusService } from 'src/Service/Resto/resto-menus/resto-menus.service';
import { RestoMenuPhotosService } from 'src/Service/Resto/resto-menu-photos/resto-menu-photos.service';
import { OrderMenusService } from 'src/Service/Resto/order-menus/order-menus.service';

//master service
import { AddressService } from '../Service/Master/address/address.service';
import { CategoryGroupService } from 'src/Service/Master/category_group/category_group.service';
import { CountryService } from 'src/Service/Master/country/country.service';
import { MembersService } from 'src/Service/Master/members/members.service';
import { PolicyService } from 'src/Service/Master/policy/policy.service';
import { PolicyCategoryGroupService } from 'src/Service/Master/policy_category_group//policy_category_group.service';
import { ProvincesService } from 'src/Service/Master/provinces/provinces.service';
import { RegionsService } from 'src/Service/Master/regions/regions.service';
import { ServiceTaskService } from 'src/Service/Master/service_task/service_task.service';
import { PriceItemsService } from 'src/Service/Master/price_items/price_items.service';

//master controller
import { AddressController } from 'src/Controller/Master/address/address.controller';
import { CategoryGroupController } from 'src/Controller/Master/category_group/category_group.controller';
import { CountryController } from 'src/Controller/Master/country/country.controller';
import { MembersController } from 'src/Controller/Master/members/members.controller';
import { PolicyController } from 'src/Controller/Master/policy/policy.controller';
import { PolicyCategoryGroupController } from 'src/Controller/Master/policy_category_group/policy_category_group.controller';
import { ProvincesController } from 'src/Controller/Master/provinces/provinces.controller';
import { RegionsController } from 'src/Controller/Master/regions/regions.controller';
import { ServiceTaskController } from 'src/Controller/Master/service_task/service_task.controller';
import { PriceItemsController } from 'src/Controller/Master/price_items/price_items.controller';

import { RolesController } from 'src/Controller/Users/roles/roles.controller';
import { UsersController } from 'src/Controller/Users/users/users.controller';
import { UserRolesController } from 'src/Controller/Users/user-roles/user_roles.controller';
import { UserProfilesController } from 'src/Controller/Users/user-profiles/user-profiles.controller';
import { UserBonusPointsController } from 'src/Controller/Users/user-bonus-points/user-bonus-points.controller';
import { UsersService } from 'src/Service/Users/users/users.service';
import { UserBonusPointsService } from 'src/Service/Users/user-bonus-points/user-bonus-points.service';
import { UserProfilesService } from 'src/Service/Users/user-profiles/user-profiles.service';
import { RolesService } from 'src/Service/Users/roles/roles.service';
import { UserRolesService } from 'src/Service/Users/user-roles/user_roles.service';
import { AuthController } from 'src/Controller/Auth/auth.controller';
import { AuthService } from 'src/Service/Auth/auth.service';

//Hotel Table
import { Hotels } from 'src/entities/Hotels';
import { HotelReviews } from 'src/entities/HotelReviews';
import { Facilities } from 'src/entities/Facilities';
import { FacilityPriceHistory } from 'src/entities/FacilityPriceHistory';
import { FacilityPhoto } from 'src/entities/FacilityPhoto';

//Hotel Service
import { HotelsService } from 'src/Service/Hotel/hotels/hotels.service';
import { HotelReviewsService } from 'src/Service/Hotel/hotel_reviews/hotel_reviews.service';
import { FacilitiesService } from 'src/Service/Hotel/facilities/facilities.service';
import { FacilityPriceHistoryService } from 'src/Service/Hotel/facility_price_history/facility_price_history.service';
import { FacilityPhotosService } from 'src/Service/Hotel/facility_photos/facility_photos.service';

//Hotel Controller
import { HotelsController } from 'src/Controller/Hotel/hotels/hotels.controller';
import { HotelReviewsController } from 'src/Controller/Hotel/hotel_reviews/hotel_reviews.controller';
import { FacilitiesController } from 'src/Controller/Hotel/facilities/facilities.controller';
import { FacilityPriceHistoryController } from 'src/Controller/Hotel/facility_price_history/facility_price_history.controller';
import { FacilityPhotosController } from 'src/Controller/Hotel/facility_photos/facility_photos.controller';

// Purchasing Table
import { Stocks } from 'src/entities/Stocks';
import { StockDetail } from 'src/entities/StockDetail';
import { StockPhoto } from 'src/entities/StockPhoto';
import { Vendor } from 'src/entities/Vendor';
import { VendorProduct } from 'src/entities/VendorProduct';
import { PurchaseOrderHeader } from 'src/entities/PurchaseOrderHeader';
import { PurchaseOrderDetail } from 'src/entities/PurchaseOrderDetail';
// Purchasing Service
import { StockService } from 'src/service/Purchasing/stock/stock.service';
import { StockPhotoService } from 'src/service/Purchasing/stock-photo/stock-photo.service';
import { VendorService } from 'src/service/Purchasing/vendor/vendor.service';
import { PurchaseOrderHeaderService } from 'src/Service/Purchasing/purchase-order-header/purchase-order-header.service';
import { PurchaseOrderDetailService } from 'src/Service/Purchasing/purchase-order-detail/purchase-order-detail.service';
// Purchasing Controller
import { StockController } from 'src/Controller/Purchasing/stock/stock.controller';
import { StockPhotoController } from 'src/Controller/Purchasing/stock-photo/stock-photo.controller';
import { VendorController } from 'src/Controller/Purchasing/vendor/vendor.controller';
import { PurchaseOrderHeaderController } from 'src/Controller/Purchasing/purchase-order-header/purchase-order-header.controller';
import { PurchaseOrderDetailController } from 'src/Controller/Purchasing/purchase-order-detail/purchase-order-detail.controller';
import { DepartmentService } from 'src/Service/HR/department/department.service';
import { DepartmentController } from 'src/Controller/HR/department/department.controller';
import { PolicyCategoryGroup } from 'src/entities/PolicyCategoryGroup';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      //master
      Address,
      CategoryGroup,
      Country,
      Members,
      Policy,
      Proviences,
      Regions,
      ServiceTask,
      PriceItems,
      PolicyCategoryGroup,

      Bank,
      BookingOrderDetail,
      BookingOrderDetailExtra,
      BookingOrders,
      Department,
      Employee,
      EmployeeDepartmentHistory,
      EmployeePayHistory,
      Entitys,

      //Hotel
      Facilities,
      FacilityPriceHistory,
      FacilityPhoto,
      HotelReviews,
      Hotels,

      JobRole,
      OrderMenus,
      OrderMenuDetail,
      PaymentGateway,
      PaymentTransaction,
      RestoMenus,
      RestoMenuPhotos,

      Shift,
      SpecialOfferCoupons,
      SpecialOffers,
      UserAccounts,
      UserBreakfeast,

      // Users
      UserBonusPoints,
      UserMembers,
      UserPassword,
      UserProfiles,
      UserRoles,
      Users,
      Roles,

      // Purchasing
      Stocks,
      StockDetail,
      StockPhoto,
      Vendor,
      VendorProduct,
      PurchaseOrderHeader,
      PurchaseOrderDetail,

      WorkOrderDetail,
      WorkOrders,
    ]),
  ],
  controllers: [
    AppController,
    EntitysController,
    BankController,
    PaymentGatewayController,

    //Hotel
    FacilitiesController,
    FacilityPhotosController,
    FacilityPriceHistoryController,
    HotelsController,
    HotelReviewsController,

    UserAccountController,
    PaymentTransactionController,
    RestoMenusController,
    RestoMenuPhotosController,
    OrderMenusController,

    //master
    ServiceTaskController,
    RegionsController,
    ProvincesController,
    PriceItemsController,
    PolicyCategoryGroupController,
    PolicyController,
    MembersController,
    CountryController,
    CategoryGroupController,
    AddressController,

    //Users
    UsersController,
    UserRolesController,
    UserProfilesController,
    UserBonusPointsController,
    RolesController,
    AuthController,

    // Purchasing
    StockController,
    StockPhotoController,
    VendorController,
    PurchaseOrderHeaderController,
    PurchaseOrderDetailController,

    // HR
    EmployeeController,
    DepartmentController,
  ],
  providers: [
    AppService,
    EntitysService,
    BankService,
    PaymentGatewayService,

    //Hotel
    FacilitiesService,
    FacilityPhotosService,
    FacilityPriceHistoryService,
    HotelsService,
    HotelReviewsService,

    UserAccountService,
    PaymentTransactionService,
    RestoMenusService,
    RestoMenuPhotosService,
    OrderMenusService,
    PriceItemsService,
    ServiceTaskService,
    RegionsService,
    ProvincesService,
    PolicyCategoryGroupService,
    PolicyService,
    MembersService,
    CountryService,
    CategoryGroupService,
    AddressService,

    // Users
    UsersService,
    UserBonusPointsService,
    UserProfilesService,
    RolesService,
    UserRolesService,
    AuthService,

    // Purchasing
    StockService,
    StockPhotoService,
    VendorService,
    PurchaseOrderHeaderService,
    PurchaseOrderDetailService,

    // HR
    EmployeeService,
    DepartmentService,
  ],
  // controllers: [AppController, EntitysController, BankController, PaymentGatewayController, UserAccountController, PaymentTransactionController],
  // providers: [AppService, EntitysService, BankService, PaymentGatewayService, UserAccountService, PaymentTransactionService],
})
export class GlobalModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes();
  }
}
