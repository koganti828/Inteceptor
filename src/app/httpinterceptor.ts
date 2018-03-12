import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';

@Injectable()
export class SampleHttpInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("intercepted request ... ");

        // Use this to add any common headers before service calls.
        const authReq = req.clone(
            {
                headers: req.headers.set("userName", "xyz")
            }
        );

        console.log("request with new header....");

        return next.handle(authReq)
            .catch((error, caught) => {
                //this will intercept the respons error, so that we do some logic to redirect or handle error in however we want.
                console.log("Error Occurred");
                console.log(error);
                alert("error")
                window.location.href = "https://www.google.com"
                //returns the error to the method called
                return Observable.throw(error);
            }) as any;
    }
}
