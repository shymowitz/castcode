import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

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

import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    CartCheckoutComponent,
    CheckoutBillingComponent,
    CheckoutShippingComponent,
    ConfirmationComponent,
    CoverageMapComponent,
    CustomerInformationCaptureComponent,
    CustomerInfoComponent,
    CustomerShowComponent,
    CustomerLinesComponent,
    DeviceAccessoryDetailsComponent,
    DeviceCustomizationComponent,
    EstimatedBillPreviewComponent,
    ExternalCreditCheckComponent,
    NewPortInNumberComponent,
    NotificationOpInComponent,
    OrderReviewComponent,
    PlansComponent,
    ProductCatalogComponent,
    SavingsCalculatorComponent,
    ScanInComponent,
    TcAcceptanceSignatureCaptureComponent,
    MockDataComponent
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
