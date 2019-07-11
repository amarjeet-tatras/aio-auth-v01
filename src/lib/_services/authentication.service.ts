import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError, Subscriber } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../_models/user';
import { AuthConfig, AuthConfigService } from '../auth-config';
//import { AioAuthV01Service } from '../aio-auth-v01.service';
 

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient,  @Inject(AuthConfigService) private authconfig: AuthConfig) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
 
    /**
     * validate username and password 
     * @method: login
     * @input: username & password
     * @output: Users data object      * 
     */

    login(dataObj) {
       
       return this.http.post<any>(this.authconfig.ApiURL+'/login', dataObj)
            .pipe( tap( // Log the result or error
                user => {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user; 
                },
                error => {
                    throwError(error);
                }
              ));

    }

    /**
     * Facebook Login
     */
    FBlogin( data : any ){
        var username = data.email;
        var password = data.id;
        return this.http.post<any>(this.authconfig.ApiURL+'/login', { username, password })
            .pipe( tap( // Log the result or error
                user => {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                    return user; 
                },
                error => {
                    throwError(error);
                }
              ));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
    
    /**
     * @method: register()
     * @input: user data in Object
     * @output: boolean  
     */
    register(dataObj){
       // console.log(displayName, full_name, email, password, provider, photoURL, access_token)
        return this.http.post<any>(this.authconfig.ApiURL+'/create_user', dataObj)
        .pipe( tap(
            user => {               
                return user; 
            },
            error => {                
                throwError(error);
            }
          ));

    }

    /**
     * check email existance
     * @input: email
     * @output: object
     */
    checkEmailExis(email){  
        return this.http.post<any>(this.authconfig.ApiURL+'/users/auth', { email: email })
        .pipe( tap(
            resp => {             
                return resp; 
            },
            error => { 
                throwError(error);
            }
          ));
    }

    /**
     * Facebook Registration/login
     */
    fbRegister(data : any){
         
        return this.http.post<any>(this.authconfig.ApiURL+'/create_user', { username: data.email, password: data.id, firstName: data.firstName, lastName: data.lastName, provider: data.provider, img_url: data.photoURL })
        .pipe( tap(
            user => {               
                return user; 
            },
            error => {                
                throwError(error);
            }
          ));
    }

    /**
     * Get Instagram User Data
     * @input: auth token id
     * @output: object
     */
    getInstaUserData(AccessToken){ 
        return this.http.get<any>('https://api.instagram.com/v1/users/self/?access_token='+AccessToken) .pipe( tap(
            user => {               
                return user; 
            },
            error => {                
                throwError(error);
            }
          ));
    }

    /**
     * Method to send the reset password link to user's email
     * @input: email/user Id
     * @ouput: boolean
     */
    resetPassword(emailAdd: string){
        return this.http.post<any>(this.authconfig.ApiURL+'/reset_password', { email: emailAdd })
        .pipe( tap(
            resp => {             
                return resp; 
            },
            error => { 
                throwError(error);
            }
          ));

    }
}
