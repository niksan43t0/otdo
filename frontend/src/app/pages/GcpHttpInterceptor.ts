import {ActivatedRoute, Router} from '@angular/router';
import {Injectable, NgZone} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Constants} from './Constants';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MessageModalComponent} from "../components/message-modal/message-modal.component";

@Injectable()
export class GcpHttpInterceptor implements HttpInterceptor {
  constructor(
    private router: Router, private route: ActivatedRoute,
    private dialog: MatDialog, private ngZone: NgZone,
  ) {
  }

  private errorDialog: MatDialogRef<MessageModalComponent> | null = null;
  private errorMessage: string | null = null;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const googleUser = this.store.getCurrentUser().googleUser; //TODO google user
    const httpHeaders = req.headers
      .append('X-Ajax-call', '')
      .append('If-Modified-Since', 'Mon, 26 Jul 1997 05:00:00 GMT')
      .append('Cache-Control', 'no-cache')
      .append('Pragma', 'no-cache')
    // .append('Authorization', `Bearer ${googleUser ? googleUser.accessToken : ""}`)
    // .append(Constants.REFRESH_TOKEN_HEADER, `${googleUser ? googleUser.refreshToken : ""}`);

    return this.handleHttpRequest(req, next, httpHeaders);
  }

  private static addCacheControl(currentUrl: string): string {
    const cacheControl = 'cacheControl=' + new Date().getTime();
    if (currentUrl.includes('?')) {
      return currentUrl + '&' + cacheControl;
    } else return currentUrl + '?' + cacheControl;
  }

  private handleHttpRequest(req: HttpRequest<any>, next: HttpHandler, httpHeaders: any): Observable<HttpEvent<any>> {
    return next.handle(
      req.clone({
        headers: httpHeaders,
        url: GcpHttpInterceptor.addCacheControl(req.url)
      }))
      .pipe(catchError(error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === Constants.UNAUTHORIZED_SESSION_EXPIRED) {
            this.ngZone.run(() => {
              this.router.navigate(['login']); //TODO login page
            });
          } else if (error.status === Constants.FORBIDDEN) {
            this.displayError("Forbidden action!")
          } else if (error.status === Constants.INTERNAL_SERVER_ERROR) {
            this.displayError("Something went wrong!");
          }
        }
        return throwError(error);
      }), tap((response: HttpEvent<any>) => {
        // if (response instanceof HttpResponse) { //TODO google user
        //   const newAccessToken = response.headers.get(Constants.NEW_ACCESS_TOKEN_HEADER);
        //   if (newAccessToken) {
        //     this.loginService.setUserAccessToken(newAccessToken)
        //   }
        //   this.store.specialAccess = !!response.headers.get(Constants.SPECIAL_ACCESS_HEADER);
        // }
      }));
  }

  private displayError(errorMessages: string) {
    this.errorMessage = errorMessages;
    if (this.errorDialog != null) {
      this.errorDialog.close();
    }
    this.errorDialog = this.dialog.open(MessageModalComponent, {
      data: {message: this.errorMessage}
    });
    this.errorDialog
      .afterClosed()
      .subscribe(() => this.errorMessage = null);
  }
}
