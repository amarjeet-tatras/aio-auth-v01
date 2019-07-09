/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from '../lib/_helpers/jwt.interceptor';
import { ErrorInterceptor } from '../lib/_helpers/error.interceptor';
import { AioAuthV01Component } from './aio-auth-v01.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FbloginComponent } from './fblogin/fblogin.component';
import { GmailloginComponent } from './gmaillogin/gmaillogin.component';
import { AioAuthV01Service } from './aio-auth-v01.service';
import { AuthConfigService } from './auth-config';
import { LogOutComponent } from './log-out/log-out.component';
import { InstaLoginComponent } from './insta-login/insta-login.component';
import { IonLoginComponent } from './ion-login/ion-login.component';
import { IonicModule } from '@ionic/angular';
import { IonRegComponent } from './ion-reg/ion-reg.component';
export class AioAuthV01Module {
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: AioAuthV01Module,
            providers: [
                AioAuthV01Service,
                {
                    provide: AuthConfigService,
                    useValue: config
                }
            ]
        };
    }
}
AioAuthV01Module.decorators = [
    { type: NgModule, args: [{
                declarations: [AioAuthV01Component, LoginComponent, RegisterComponent, FbloginComponent, GmailloginComponent, LogOutComponent, InstaLoginComponent, IonLoginComponent, IonRegComponent],
                imports: [
                    CommonModule,
                    FormsModule,
                    ReactiveFormsModule,
                    HttpClientModule,
                    RouterModule,
                    IonicModule
                ],
                providers: [
                    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                ],
                exports: [AioAuthV01Component, LoginComponent, RegisterComponent, FbloginComponent, GmailloginComponent, LogOutComponent, InstaLoginComponent, IonLoginComponent, IonRegComponent]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlvLWF1dGgtdjAxLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2Fpby1hdXRoLXYwMS8iLCJzb3VyY2VzIjpbImxpYi9haW8tYXV0aC12MDEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBQyxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQWtCOUQsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFrQjtRQUUvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsaUJBQWlCO2dCQUNqQjtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUE5QkYsUUFBUSxTQUFDO2dCQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO2dCQUN2TCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixXQUFXO29CQUNYLG1CQUFtQjtvQkFDbkIsZ0JBQWdCO29CQUNoQixZQUFZO29CQUNaLFdBQVc7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtvQkFDckUsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7aUJBRXhFO2dCQUNELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO2FBQ25MIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nOyAgXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSxSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSnd0SW50ZXJjZXB0b3IgfSBmcm9tICcuLi9saWIvX2hlbHBlcnMvand0LmludGVyY2VwdG9yJztcbmltcG9ydCB7IEVycm9ySW50ZXJjZXB0b3IgfSBmcm9tICcuLi9saWIvX2hlbHBlcnMvZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQWlvQXV0aFYwMUNvbXBvbmVudCB9IGZyb20gJy4vYWlvLWF1dGgtdjAxLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmJsb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vZmJsb2dpbi9mYmxvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHbWFpbGxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9nbWFpbGxvZ2luL2dtYWlsbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEFpb0F1dGhWMDFTZXJ2aWNlIH0gZnJvbSAnLi9haW8tYXV0aC12MDEuc2VydmljZSc7IFxuaW1wb3J0IHsgQXV0aENvbmZpZywgQXV0aENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IExvZ091dENvbXBvbmVudCB9IGZyb20gJy4vbG9nLW91dC9sb2ctb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnN0YUxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9pbnN0YS1sb2dpbi9pbnN0YS1sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9uTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2lvbi1sb2dpbi9pb24tbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgSW9uUmVnQ29tcG9uZW50IH0gZnJvbSAnLi9pb24tcmVnL2lvbi1yZWcuY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW0Fpb0F1dGhWMDFDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgRmJsb2dpbkNvbXBvbmVudCwgR21haWxsb2dpbkNvbXBvbmVudCwgTG9nT3V0Q29tcG9uZW50LCBJbnN0YUxvZ2luQ29tcG9uZW50LCBJb25Mb2dpbkNvbXBvbmVudCwgSW9uUmVnQ29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUm91dGVyTW9kdWxlLFxuICAgIElvbmljTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHsgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsIHVzZUNsYXNzOiBKd3RJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogRXJyb3JJbnRlcmNlcHRvciwgbXVsdGk6IHRydWUgfSxcbiAgICBcbiAgXSxcbiAgZXhwb3J0czogW0Fpb0F1dGhWMDFDb21wb25lbnQsIExvZ2luQ29tcG9uZW50LCBSZWdpc3RlckNvbXBvbmVudCwgRmJsb2dpbkNvbXBvbmVudCwgR21haWxsb2dpbkNvbXBvbmVudCwgTG9nT3V0Q29tcG9uZW50LCBJbnN0YUxvZ2luQ29tcG9uZW50LCBJb25Mb2dpbkNvbXBvbmVudCwgSW9uUmVnQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBaW9BdXRoVjAxTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBBdXRoQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICBcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IEFpb0F1dGhWMDFNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQWlvQXV0aFYwMVNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBdXRoQ29uZmlnU2VydmljZSxcbiAgICAgICAgICB1c2VWYWx1ZTogY29uZmlnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9O1xuICB9XG4gIFxuIH1cbiJdfQ==