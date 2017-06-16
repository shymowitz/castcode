import { RouterModule, Routes } from '@angular/router';

import { CartCheckoutComponent } from './cart-checkout/cart-checkout.component';
import { CheckoutBillingComponent } from './checkout-billing/checkout-billing.component';
import { CheckoutShippingComponent } from './checkout-shipping/checkout-shipping.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { CoverageMapComponent } from './coverage-map/coverage-map.component';
import { CustomerInformationCaptureComponent } from './customer-information-capture/customer-information-capture.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { CustomerShowComponent } from './customer-show/customer-show.component';
import { CustomerLinesComponent } from './customer-lines/customer-lines.component';

import { DeviceAccessoryDetailsComponent } from './device-accessory-details/device-accessory-details.component';
import { DeviceCustomizationComponent } from './device-customization/device-customization.component';
import { EstimatedBillPreviewComponent } from './estimated-bill-preview/estimated-bill-preview.component';
import { ExternalCreditCheckComponent } from './external-credit-check/external-credit-check.component';
import { NewPortInNumberComponent } from './new-port-in-number/new-port-in-number.component';
import { NotificationOpInComponent } from './notification-op-in/notification-op-in.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { PlansComponent } from './plans/plans.component';
import { ProductCatalogComponent } from './product-catalog/product-catalog.component';
import { SavingsCalculatorComponent } from './savings-calculator/savings-calculator.component';
import { ScanInComponent } from './scan-in/scan-in.component';
import { TcAcceptanceSignatureCaptureComponent } from './tc-acceptance-signature-capture/tc-acceptance-signature-capture.component';
import { MockDataComponent } from './shared/mocks/mock.component';

const routes: Routes = [
  { path: '', component: CustomerInfoComponent},
  { path: 'CartCheckoutComponent', component: CartCheckoutComponent},
  { path: 'CheckoutBillingComponent', component: CheckoutBillingComponent},
  { path: 'CheckoutShippingComponent', component: CheckoutShippingComponent},
  { path: 'ConfirmationComponent', component: ConfirmationComponent},
  { path: 'CoverageMapComponent', component: CoverageMapComponent},
  { path: 'CustomerInformationCaptureComponent', component: CustomerInformationCaptureComponent},
  { path: 'CustomerInfoComponent', component: CustomerInfoComponent},
  { path: 'CustomerShowComponent', component: CustomerShowComponent},
  { path: 'CustomerLinesComponent', component: CustomerLinesComponent},
  { path: 'DeviceAccessoryDetailsComponent', component: DeviceAccessoryDetailsComponent},
  { path: 'DeviceCustomizationComponent', component: DeviceCustomizationComponent},
  { path: 'EstimatedBillPreviewComponent', component: EstimatedBillPreviewComponent},
  { path: 'ExternalCreditCheckComponent', component: ExternalCreditCheckComponent},
  { path: 'NewPortInNumberComponent', component: NewPortInNumberComponent},
  { path: 'NotificationOpInComponent', component: NotificationOpInComponent},
  { path: 'OrderReviewComponent', component: OrderReviewComponent},
  { path: 'PlansComponent', component: PlansComponent},
  { path: 'ProductCatalogComponent', component: ProductCatalogComponent},
  { path: 'SavingsCalculatorComponent', component: SavingsCalculatorComponent},
  { path: 'ScanInComponent', component: ScanInComponent},
  { path: 'TcAcceptanceSignatureCaptureComponent', component: TcAcceptanceSignatureCaptureComponent},
  { path: 'MockDataComponent', component: MockDataComponent},
];

export const routing = RouterModule.forRoot(routes);
