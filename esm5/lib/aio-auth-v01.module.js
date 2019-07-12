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
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { IonResetPasswordComponent } from './ion-reset-password/ion-reset-password.component';
/** @type {?} */
var routes = [
    {
        path: 'login',
        component: LoginComponent
    }
];
var AioAuthV01Module = /** @class */ (function () {
    function AioAuthV01Module() {
    }
    /**
     * @param {?} config
     * @return {?}
     */
    AioAuthV01Module.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
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
    };
    AioAuthV01Module.decorators = [
        { type: NgModule, args: [{
                    declarations: [AioAuthV01Component, LoginComponent, RegisterComponent, FbloginComponent, GmailloginComponent, LogOutComponent, InstaLoginComponent, IonLoginComponent, IonRegComponent, ResetPasswordComponent, IonResetPasswordComponent],
                    imports: [
                        CommonModule,
                        FormsModule,
                        ReactiveFormsModule,
                        HttpClientModule,
                        IonicModule,
                        RouterModule.forChild(routes)
                    ],
                    providers: [
                        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                    ],
                    exports: [AioAuthV01Component, LoginComponent, RegisterComponent, FbloginComponent, GmailloginComponent, LogOutComponent, InstaLoginComponent, IonLoginComponent, IonRegComponent, ResetPasswordComponent, IonResetPasswordComponent, RouterModule]
                },] }
    ];
    return AioAuthV01Module;
}());
export { AioAuthV01Module };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWlvLWF1dGgtdjAxLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25wbS1haW8tYXV0aC8iLCJzb3VyY2VzIjpbImxpYi9haW8tYXV0aC12MDEubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFdBQVcsRUFBQyxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxZQUFZLEVBQVUsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDakUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBYyxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7SUFHeEYsTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsY0FBYztLQUMxQjtDQUNGO0FBQ0Q7SUFBQTtJQWtDQyxDQUFDOzs7OztJQWRPLHdCQUFPOzs7O0lBQWQsVUFBZSxNQUFrQjtRQUUvQixPQUFPO1lBQ0wsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixTQUFTLEVBQUU7Z0JBQ1QsaUJBQWlCO2dCQUNqQjtvQkFDRSxPQUFPLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUUsTUFBTTtpQkFDakI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFoQ0YsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsaUJBQWlCLEVBQUUsZUFBZSxFQUFFLHNCQUFzQixFQUFFLHlCQUF5QixDQUFDO29CQUMxTyxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsZ0JBQWdCO3dCQUNoQixXQUFXO3dCQUNYLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO3FCQUM5QjtvQkFDRCxTQUFTLEVBQUU7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO3dCQUNyRSxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtxQkFFeEU7b0JBQ0QsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxpQkFBaUIsRUFBRSxlQUFlLEVBQUUsc0JBQXNCLEVBQUUseUJBQXlCLEVBQUUsWUFBWSxDQUFDO2lCQUNwUDs7SUFrQkEsdUJBQUM7Q0FBQSxBQWxDRixJQWtDRTtTQWZXLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBJbmplY3Rpb25Ub2tlbiwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgIFxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSwgUm91dGVzIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUsIEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSnd0SW50ZXJjZXB0b3IgfSBmcm9tICcuLi9saWIvX2hlbHBlcnMvand0LmludGVyY2VwdG9yJztcbmltcG9ydCB7IEVycm9ySW50ZXJjZXB0b3IgfSBmcm9tICcuLi9saWIvX2hlbHBlcnMvZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQWlvQXV0aFYwMUNvbXBvbmVudCB9IGZyb20gJy4vYWlvLWF1dGgtdjAxLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IFJlZ2lzdGVyQ29tcG9uZW50IH0gZnJvbSAnLi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmJsb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vZmJsb2dpbi9mYmxvZ2luLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBHbWFpbGxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9nbWFpbGxvZ2luL2dtYWlsbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IEFpb0F1dGhWMDFTZXJ2aWNlIH0gZnJvbSAnLi9haW8tYXV0aC12MDEuc2VydmljZSc7IFxuaW1wb3J0IHsgQXV0aENvbmZpZywgQXV0aENvbmZpZ1NlcnZpY2UgfSBmcm9tICcuL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IExvZ091dENvbXBvbmVudCB9IGZyb20gJy4vbG9nLW91dC9sb2ctb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJbnN0YUxvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9pbnN0YS1sb2dpbi9pbnN0YS1sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgSW9uTG9naW5Db21wb25lbnQgfSBmcm9tICcuL2lvbi1sb2dpbi9pb24tbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IElvbmljTW9kdWxlIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgSW9uUmVnQ29tcG9uZW50IH0gZnJvbSAnLi9pb24tcmVnL2lvbi1yZWcuY29tcG9uZW50JztcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRDb21wb25lbnQgfSBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBJb25SZXNldFBhc3N3b3JkQ29tcG9uZW50IH0gZnJvbSAnLi9pb24tcmVzZXQtcGFzc3dvcmQvaW9uLXJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudCc7XG4gXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJ2xvZ2luJyxcbiAgICBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50XG4gIH1cbl07XG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtBaW9BdXRoVjAxQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsIEZibG9naW5Db21wb25lbnQsIEdtYWlsbG9naW5Db21wb25lbnQsIExvZ091dENvbXBvbmVudCwgSW5zdGFMb2dpbkNvbXBvbmVudCwgSW9uTG9naW5Db21wb25lbnQsIElvblJlZ0NvbXBvbmVudCwgUmVzZXRQYXNzd29yZENvbXBvbmVudCwgSW9uUmVzZXRQYXNzd29yZENvbXBvbmVudF0sXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIElvbmljTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpICAgIFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7IHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLCB1c2VDbGFzczogSnd0SW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAgeyBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUywgdXNlQ2xhc3M6IEVycm9ySW50ZXJjZXB0b3IsIG11bHRpOiB0cnVlIH0sXG4gICAgXG4gIF0sXG4gIGV4cG9ydHM6IFtBaW9BdXRoVjAxQ29tcG9uZW50LCBMb2dpbkNvbXBvbmVudCwgUmVnaXN0ZXJDb21wb25lbnQsIEZibG9naW5Db21wb25lbnQsIEdtYWlsbG9naW5Db21wb25lbnQsIExvZ091dENvbXBvbmVudCwgSW5zdGFMb2dpbkNvbXBvbmVudCwgSW9uTG9naW5Db21wb25lbnQsIElvblJlZ0NvbXBvbmVudCwgUmVzZXRQYXNzd29yZENvbXBvbmVudCwgSW9uUmVzZXRQYXNzd29yZENvbXBvbmVudCwgUm91dGVyTW9kdWxlXVxufSlcblxuXG5leHBvcnQgY2xhc3MgQWlvQXV0aFYwMU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQXV0aENvbmZpZyk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgXG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBaW9BdXRoVjAxTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIEFpb0F1dGhWMDFTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQXV0aENvbmZpZ1NlcnZpY2UsXG4gICAgICAgICAgdXNlVmFsdWU6IGNvbmZpZ1xuICAgICAgICB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuICBcbiB9XG4iXX0=