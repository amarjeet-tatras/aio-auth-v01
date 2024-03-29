/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// custom validator to check that two fields match
/**
 * @param {?} controlName
 * @param {?} matchingControlName
 * @return {?}
 */
export function MustMatch(controlName, matchingControlName) {
    return (/**
     * @param {?} formGroup
     * @return {?}
     */
    (formGroup) => {
        /** @type {?} */
        const control = formGroup.controls[controlName];
        /** @type {?} */
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVzdC1tYXRjaC52YWxpZGF0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9ucG0tYWlvLWF1dGgvIiwic291cmNlcyI6WyJsaWIvX2hlbHBlcnMvbXVzdC1tYXRjaC52YWxpZGF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQVNBLE1BQU0sVUFBVSxTQUFTLENBQUMsV0FBbUIsRUFBRSxtQkFBMkI7SUFDdEU7Ozs7SUFBTyxDQUFDLFNBQW9CLEVBQUUsRUFBRTs7Y0FDdEIsT0FBTyxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDOztjQUN6QyxlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQztRQUUvRCxJQUFJLGVBQWUsQ0FBQyxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtZQUM3RCxnRkFBZ0Y7WUFDaEYsT0FBTztTQUNWO1FBRUQsbURBQW1EO1FBQ25ELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxlQUFlLENBQUMsS0FBSyxFQUFFO1lBQ3pDLGVBQWUsQ0FBQyxTQUFTLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNsRDthQUFNO1lBQ0gsZUFBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNuQztJQUNMLENBQUMsRUFBQTtBQUNMLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9fc2VydmljZXMvYXV0aGVudGljYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuXG4vLyBjdXN0b20gdmFsaWRhdG9yIHRvIGNoZWNrIHRoYXQgdHdvIGZpZWxkcyBtYXRjaFxuXG5cbmV4cG9ydCBmdW5jdGlvbiBNdXN0TWF0Y2goY29udHJvbE5hbWU6IHN0cmluZywgbWF0Y2hpbmdDb250cm9sTmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChmb3JtR3JvdXA6IEZvcm1Hcm91cCkgPT4ge1xuICAgICAgICBjb25zdCBjb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW2NvbnRyb2xOYW1lXTtcbiAgICAgICAgY29uc3QgbWF0Y2hpbmdDb250cm9sID0gZm9ybUdyb3VwLmNvbnRyb2xzW21hdGNoaW5nQ29udHJvbE5hbWVdO1xuXG4gICAgICAgIGlmIChtYXRjaGluZ0NvbnRyb2wuZXJyb3JzICYmICFtYXRjaGluZ0NvbnRyb2wuZXJyb3JzLm11c3RNYXRjaCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGlmIGFub3RoZXIgdmFsaWRhdG9yIGhhcyBhbHJlYWR5IGZvdW5kIGFuIGVycm9yIG9uIHRoZSBtYXRjaGluZ0NvbnRyb2xcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNldCBlcnJvciBvbiBtYXRjaGluZ0NvbnRyb2wgaWYgdmFsaWRhdGlvbiBmYWlsc1xuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gbWF0Y2hpbmdDb250cm9sLnZhbHVlKSB7XG4gICAgICAgICAgICBtYXRjaGluZ0NvbnRyb2wuc2V0RXJyb3JzKHsgbXVzdE1hdGNoOiB0cnVlIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWF0Y2hpbmdDb250cm9sLnNldEVycm9ycyhudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qXG5leHBvcnQgZnVuY3Rpb24gdXNlckV4aXN0KGNvbnRyb2xOYW1lOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKGZvcm1Hcm91cDogRm9ybUdyb3VwLCBhdXRoU2VydiA6IEF1dGhlbnRpY2F0aW9uU2VydmljZSkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyQ29udHJvbCA9IGZvcm1Hcm91cC5jb250cm9sc1tjb250cm9sTmFtZV07IFxuXG4gICAgICAgIGlmICh1c2VyQ29udHJvbC5lcnJvcnMgJiYgIXVzZXJDb250cm9sLmVycm9ycy51c2VyRXhpc3QpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBpZiBhbm90aGVyIHZhbGlkYXRvciBoYXMgYWxyZWFkeSBmb3VuZCBhbiBlcnJvciBvbiB0aGUgbWF0Y2hpbmdDb250cm9sXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICBhdXRoU2Vydi5jaGVja0VtYWlsRXhpcyh1c2VyQ29udHJvbClcbiAgICAgICAgLnBpcGUoZmlyc3QoKSwgZGVib3VuY2VUaW1lKDIwMCkpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICByZXNwID0+IHtcbiAgICAgICAgICAgICAgIHJldHVybiByZXNwOyBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvciA9PiB7IFxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvcjtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNldCBlcnJvciBvbiBtYXRjaGluZ0NvbnRyb2wgaWYgdmFsaWRhdGlvbiBmYWlsc1xuICAgICAgICBpZiAodXNlckNvbnRyb2wudmFsdWUgIT09ICdhbWFyamVldCcpIHtcbiAgICAgICAgICAgIHVzZXJDb250cm9sLnNldEVycm9ycyh7IHVzZXJFeGlzdDogdHJ1ZSB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHVzZXJDb250cm9sLnNldEVycm9ycyhudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbn0qLyJdfQ==