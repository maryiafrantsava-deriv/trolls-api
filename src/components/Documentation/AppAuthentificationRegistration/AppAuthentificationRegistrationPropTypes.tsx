export type AppAuthentificationRegistrationPropTypes = {
    title: Array<string>;
    textFirstPart: Array<string>;
    textSecondPart: Array<string>;
    textFocus: Array<string>;
    button: Array<JSX.Element>;
    textFieldset: Array<string>;
    labelButton: Array<string>;
    titleRegister: Array<string>;
}
export type InputListTextPropTypes = {
    [key: string]: string | Array<string>;
}

export type RegisterYourAppPropTypes = {
    num: number;
    id: string;
    label: string;
    maxLength: number;
    helperText: string;
}