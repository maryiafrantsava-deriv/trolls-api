import * as Yup from "yup";

export const initialValuesRegister = {
    app_register: 1,
    scopes: [],
    name: "",
    redirect_uri: "",
    verification_uri: "",
    homepage: "",
    github: "",
    appstore: "",
    googleplay: "",
    app_markup_percentage: "",
}

const RegisterSchema = Yup.object().shape(
    {
        name: Yup.string()
            .matches(
                /^[a-zA-Z]{3,10}$/,
                "Please, enter correct name!")
            .min(3, "Should be 3 character long")
            .max(10, "should not exceed 10 characters")
            .required("Required"),
        redirect_uri: Yup.string()
            .matches(
                /^[a-z][a-z0-9.+\\-]*:\/\/[0-9a-zA-Z\\.-]+[\\%\\\/\\w \\.-]*$/,
                "Enter correct redirect url!")
            .required("Required"),
        verification_uri: Yup.string()
            .matches(
                /^[a-z][a-z0-9.+\\-]*:\/\/[0-9a-zA-Z\\.-]+[\\%\\\/\\w \\.-]*$/,
                "Enter correct verification url!")
            .required("Required"),
        homepage: Yup.string()
            .matches(
                /^https?:\/\/[0-9a-zA-Z\\.-]+[\\%\\\/\\w \\.-]*$/,
                "Enter correct homepage url!")
            .required("Required"),
        github: Yup.string()
            .matches(
                /^https?:\/\/github.com\/\S+$/,
                "Invalid github url, should be as per example 'https://github.com/name' !")
            .required("Required"),
        appstore: Yup.string()
            .matches(
                /^https?:\/\/itunes.apple.com\/\S+$/,
                "Invalid appstore url, should be as per example 'https://itunes.apple.com/yourlink' !")
            .required("Required"),
        googleplay: Yup.string()
            .matches(
                /^https?:\/\/play\.google\.com\/store\/apps\/details\?id=([\w\.]+)$/,
                "Invalid url, should be 'https://play.google.com/store/apps/details?id=yourlink'!")
            .required("Required"),
        app_markup_percentage: Yup.string()
            .matches(
                /^(?:\d{0,1}[0-4].\d{1,2})$|^[1-5]{0,1}.[0-0]{1,2}$|^[0-5]/,
                "Expected number as example!"
            )
            .required("Required"),
    }
);

export default RegisterSchema;