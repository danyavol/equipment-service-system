import { Injectable } from '@angular/core';
import { TuiAlertService, TuiNotification } from '@taiga-ui/core';

@Injectable()
export class NotificationService {

    constructor(private readonly alertService: TuiAlertService) { }

    error(text: string, autoClose = true) {
        this.alertService.open(text, { status: TuiNotification.Error, autoClose }).subscribe();
    }

    success(text: string) {
        this.alertService.open(text, { status: TuiNotification.Success }).subscribe();
    }
}
