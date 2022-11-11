import { Provider } from "@angular/core";
import { TUI_VALIDATION_ERRORS } from '@taiga-ui/kit';

export const TUI_VALIDATION_ERRORS_PROVIDER: Provider = {
    provide: TUI_VALIDATION_ERRORS,
    useValue: {
        required: `Заполните это поле`,
        email: `Неверный адрес электронной почты`,
        maxlength: maxLengthValidator,
        minlength: minLengthValidator,
        max: maxValidator,
        min: minValidator
    },
};

function maxLengthValidator(context: { requiredLength: string }): string {
    return `Максимальная длина — ${context.requiredLength}`;
}

function minLengthValidator(context: { requiredLength: string }): string {
    return `Минимальная длина — ${context.requiredLength}`;
}

function maxValidator(context: { max: string }): string {
    return `Максимальное значение — ${context.max}`;
}

function minValidator(context: { min: string }): string {
    return `Минимальное значение — ${context.min}`;
}
