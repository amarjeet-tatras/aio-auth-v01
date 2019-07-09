import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AuthConfig } from '../auth-config';
export declare class AuthenticationService {
    private http;
    private authconfig;
    private currentUserSubject;
    currentUser: Observable<User>;
    constructor(http: HttpClient, authconfig: AuthConfig);
    readonly currentUserValue: User;
    /**
     * validate username and password
     * @method: login
     * @input: username & password
     * @output: Users data object      *
     */
    login(username: string, password: string): Observable<any>;
    /**
     * Facebook Login
     */
    FBlogin(data: any): Observable<any>;
    logout(): void;
    /**
     * @method: register()
     * @input: user data in Object
     * @output: boolean
     */
    register(firstName: any, lastName: any, email: any, password: any, provider: any, photoURL: any): Observable<any>;
    /**
     * check email existance
     * @input: email
     * @output: object
     */
    checkEmailExis(email: any): Observable<any>;
    /**
     * Facebook Registration/login
     */
    fbRegister(data: any): Observable<any>;
    /**
     * Get Instagram User Data
     * @input: auth token id
     * @output: object
     */
    getInstaUserData(AccessToken: any): Observable<any>;
}
