import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'essCurrency'
})
export class CurrencyPipe implements PipeTransform {
    transform(value: number): string {
        return value.toFixed(2) + ' р.';
    }
}
