import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { RolesModule } from './roles/roles.module';
import { ShopsModule } from './shops/shops.module';
import { ShopPickupPointsModule } from './shop-pickup-points/shop-pickup-points.module';
import { ShopProductCategoriesModule } from './shop-product-categories/shop-product-categories.module';
import { ServiceAreaModule } from './service-area/service-area.module';
import { ParcelsModule } from './parcels/parcels.module';
import { ChangePasswordModule } from './change-password/change-password.module';
import { FiledPackageHandlersModule } from './filed-package-handlers/filed-package-handlers.module';
import { ParcelTimelineModule } from './parcel-timeline/parcel-timeline.module';
import { StatisticsModule } from './statistics/statistics.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RolesModule,
    ShopsModule,
    ShopPickupPointsModule,
    ShopProductCategoriesModule,
    ServiceAreaModule,
    ParcelsModule,
    ChangePasswordModule,
    FiledPackageHandlersModule,
    ParcelTimelineModule,
    StatisticsModule,
  ],
  controllers: [AppController],
  providers: [PrismaService],
})
export class AppModule {}
