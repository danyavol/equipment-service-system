import { AbstractControl } from "@angular/forms";

export type FormGroupRawValue<T extends {
    [K in keyof T]?: AbstractControl<any>;
}> = {
        [K in keyof T]: RawValue<T[K]>;
    };

export type RawValue<T extends AbstractControl | undefined> =
    T extends AbstractControl<any, any> ?
    (T['setValue'] extends ((v: infer R) => void) ? R : never)
    : never;

export type FormGroupValue<T extends {
    [K in keyof T]?: AbstractControl<any>;
}> = Partial<{
    [K in keyof T]: Value<T[K]>;
}>;

export type Value<T extends AbstractControl | undefined> = T extends AbstractControl<any, any> ? T['value'] : never;
