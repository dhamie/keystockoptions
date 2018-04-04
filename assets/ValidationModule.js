//validationModule.run() is called in the end of the file

var ValidationModule = {
    languages: "",

    run: function () {
        ValidationModule.setLanguages();
        ValidationModule.JQValidationPlugin.init();
        ValidationModule.forms.validateRegisterHomepageForm();
        ValidationModule.forms.validateRegisterBinariesOptionForm();
        ValidationModule.forms.validateRegisterTradersGainForm();
        ValidationModule.forms.validateRegisterFirstStepsForm();
        ValidationModule.forms.validateRegisterCfdBasicsForm();
        ValidationModule.forms.validateMainRegistrationForm();
        ValidationModule.forms.validateFeedbackForm();
        ValidationModule.forms.validateSimpleRegisterForm();
        ValidationModule.forms.validatePayForm();
        ValidationModule.popups.validateLoginPopup();
        ValidationModule.popups.validateCallbackPopup();
    },

    popups: {
        validateLoginPopup: function () {
            $('form[name=loginForm]').validate({});
        },
        validateCallbackPopup: function () {
            $('#form_callback').validate({});
        }
    },

    forms: {
        validatePayForm: function () {
            $('form[name=payForm]').validate({});
        },

        validateSimpleRegisterForm: function () {
            $('form[name=simple-registration]').validate({
                ignore: ":hidden:not(.forceValidate_tosaccept)",
                highlight: function (element, errorClass) {
                    if (element["name"] == "tosaccept") {
                        $(".checkbox-label span").css("border", "1px solid red")
                    } else {
                        $(element).addClass(errorClass);
                    }
                },
                unhighlight: function (element, errorClass) {
                    if (element["name"] == "tosaccept") {
                        $(".checkbox-label span").css("border", "none")
                    } else {
                        $(element).removeClass(errorClass);
                    }
                }
            });
        },

        validateRegisterTradersGainForm: function () {
            $('form[name=register-form-traders-gain]').validate({
                ignore: ":hidden:not(.forceValidate_isConditionsAccepted)",
                highlight: function (element, errorClass) {
                    if (element["name"] == "isConditionsAccepted") {
                        $(".checkbox-label span").css("border", "1px solid red")
                    } else {
                        $(element).addClass(errorClass);
                    }
                },
                unhighlight: function (element, errorClass) {
                    if (element["name"] == "isConditionsAccepted") {
                        $(".checkbox-label span").css("border", "none")
                    } else {
                        $(element).removeClass(errorClass);
                    }
                }
            });
        },

        validateMainRegistrationForm: function () {
            $('form[name=registration-form]').validate({
                ignore: ":hidden:not(.forceValidate_tosaccept)",
                highlight: function (element, errorClass) {
                    if (element["name"] == "tosaccept") {
                        $(".checkbox-label span").css("border", "1px solid red")
                    } else {
                        $(element).addClass(errorClass);
                    }
                },
                unhighlight: function (element, errorClass) {
                    if (element["name"] == "tosaccept") {
                        $(".checkbox-label span").css("border", "none")
                    } else {
                        $(element).removeClass(errorClass);
                    }
                }
            });
        },

        validateRegisterCfdBasicsForm: function () {
            $('form[name=register-form-cfd-basic]').validate({
                ignore: ":hidden:not(.forceValidate_isConditionsAccepted)",
                highlight: function (element, errorClass) {
                    if (element["name"] == "isConditionsAccepted") {
                        $(".checkbox-label span").css("border", "1px solid red")
                    } else {
                        $(element).addClass(errorClass);
                    }
                },
                unhighlight: function (element, errorClass) {
                    if (element["name"] == "isConditionsAccepted") {
                        $(".checkbox-label span").css("border", "none")
                    } else {
                        $(element).removeClass(errorClass);
                    }
                }
            });
        },

        validateRegisterHomepageForm: function () {
            $('form[name=register-form-homepage]').validate({
                ignore: ":hidden:not(.forceValidate_isConditionsAccepted)",
                highlight: function (element, errorClass) {
                    if (element["name"] == "isConditionsAccepted") {
                        $(".checkbox-label span").css("border", "1px solid red")
                    } else {
                        $(element).addClass(errorClass);
                    }
                },
                unhighlight: function (element, errorClass) {
                    if (element["name"] == "isConditionsAccepted") {
                        $(".checkbox-label span").css("border", "none")
                    } else {
                        $(element).removeClass(errorClass);
                    }
                }
            });
        },

        validateRegisterBinariesOptionForm: function () {
            $('form[name=register-form-binary-options]').validate({
                ignore: ":hidden:not(.forceValidate_isConditionsAccepted)",
                highlight: function (element, errorClass) {
                    if (element["name"] == "isConditionsAccepted") {
                        $(".checkbox-label span").css("border", "1px solid red")
                    } else {
                        $(element).addClass(errorClass);
                    }
                },
                unhighlight: function (element, errorClass) {
                    if (element["name"] == "isConditionsAccepted") {
                        $(".checkbox-label span").css("border", "none")
                    } else {
                        $(element).removeClass(errorClass);
                    }
                }
            });
        },

        validateRegisterFirstStepsForm: function () {
            $('form[name=register-form-first-steps]').validate({
                ignore: ":hidden:not(.forceValidate_isConditionsAccepted)",
                highlight: function (element, errorClass) {
                    if (element["name"] == "isConditionsAccepted") {
                        $(".checkbox-label span").css("border", "1px solid red")
                    } else {
                        $(element).addClass(errorClass);
                    }
                },
                unhighlight: function (element, errorClass) {
                    if (element["name"] == "isConditionsAccepted") {
                        $(".checkbox-label span").css("border", "none")
                    } else {
                        $(element).removeClass(errorClass);
                    }
                }
            });
        },

        validateFeedbackForm: function () {
            $('#sendmail').validate({
                ignore: ":hidden:not(.jq_validate_grecaptcha)",
                highlight: function (element, errorClass) {
                    if (element["name"] == "jq_validate_grecaptcha") {
                        $(".g-recaptcha").css("border", "1px solid red")
                    } else {
                        $(element).addClass(errorClass);
                    }
                },
                unhighlight: function (element, errorClass) {
                    if (element["name"] == "jq_validate_grecaptcha") {
                        $(".g-recaptcha").css("border", "none")
                    } else {
                        $(element).removeClass(errorClass);
                    }
                }
            });
        }
    },

    JQValidationPlugin: {
        init: function () {
            this.setCurrentSiteLanguage();
            this.setErrorMessages();
            this.setJQValidationPluginGeneralConfig();
        },

        CONFIG: {
            defaultSiteLanguage: "en",
            errorMessages: "", // set in setErrorMessages() function
            currentSiteLanguage: "", // set in setCurrentSiteLanguage() function
            rules: {
                subject: {
                    required: true,
                    minlength: 3,
                    maxlength: 50,
                    topicCheck: true
                },
                message: {
                    required: true,
                    minlength: 12,
                    maxlength: 250
                },
                name: {
                    required: true,
                    minlength: 3,
                    maxlength: 30,
                    alphabetsOnly: true
                },
                firstname: {
                    required: true,
                    minlength: 3,
                    maxlength: 30,
                    alphabetsOnly: true
                },
                username: {
                    required: true,
                    minlength: 3,
                    maxlength: 30,
                    alphabetsOnly: true
                },
                lastname: {
                    required: true,
                    minlength: 3,
                    maxlength: 30,
                    alphabetsOnly: true
                },
                email: {
                    required: true,
                    email: true
                },
                login_name: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    digits: true,
                    minlength: 5,
                    maxlength: 16
                },
                fullPhone: {
                    required: true,
                    digits: true,
                    minlength: 8,
                    maxlength: 16
                },
                passgen: {
                    required: true
                },
                password: {
                    required: true,
                    minlength: 6,
                    maxlength: 16
                },
                password1: { //only main registration form
                    required: true,
                    minlength: 6,
                    maxlength: 16
                },
                password2: { //only main registration form
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    equalTo: "input[name=password1]"
                },
                confirm_password: {
                    required: true,
                    minlength: 6,
                    maxlength: 16,
                    equalTo: "password"
                },
                login_password: {
                    required: true,
                    minlength: 6,
                    maxlength: 16
                },
                phoneprefix2: {
                    required: true
                },
                tosaccept: {
                    isEqual1: true
                },
                isConditionsAccepted: {
                    isEqual1: true
                },
                currency: {
                    required: true
                },
                jq_validate_grecaptcha: {
                    checkGCaptcha: true
                },
                wmid: {
                    required: true,
                    minlength: 12,
                    maxlength: 12,
                    digits: true
                }
            }
        },

        setCurrentSiteLanguage: function () {
            if (window.__site_lng) {
                this.CONFIG.currentSiteLanguage = window.__site_lng;
            } else {
                this.CONFIG.currentSiteLanguage = this.CONFIG.defaultSiteLanguage;
            }
        },

        setErrorMessages: function () {
            if (ValidationModule.languages) {
                this.CONFIG.errorMessages = ValidationModule.languages[this.CONFIG.currentSiteLanguage];
            }
        },

        setJQValidationPluginGeneralConfig: function () {
            $.validator.addMethod("phoneCodeCheck", function (value, element) {
                return /^([+])([\d\s]{1,5})$/g.test(value);
            });

            $.validator.addMethod("hasCountryCode", function (value, element) {

                var inputedPhone = value;
                var qiwiAvailableCountryCodes = {"RU": { "name": "Russian Federation", "iso2": "RU", "code": "7" }, "AZ": { "name": "Azerbaijan", "iso2": "AZ", "code": "994" }, "IN": { "name": "India", "iso2": "IN", "code": "91" }, "BY": { "name": "Belarus", "iso2": "BY", "code": "375" }, "KZ": { "name": "Kazakhstan", "iso2": "KZ", "code": "7" }, "UA": { "name": "Ukraine", "iso2": "UA", "code": "380" }, "GB": { "name": "United Kingdom", "iso2": "GB", "code": "1473" }, "GE": { "name": "Georgia", "iso2": "GE", "code": "594" }, "LT": { "name": "Lithuania", "iso2": "LT", "code": "370" }, "TJ": { "name": "Tajikistan", "iso2": "TJ", "code": "992" }, "TH": { "name": "Thailand", "iso2": "TH", "code": "66" }, "UZ": { "name": "Uzbekistan", "iso2": "UZ", "code": "998" }, "PA": { "name": "Panama", "iso2": "PA", "code": "507" }, "AM": { "name": "Armenia", "iso2": "AM", "code": "374" }, "JP": { "name": "Japan", "iso2": "JP", "code": "81" }, "US": { "name": "United States", "iso2": "US", "code": "1" }, "LV": { "name": "Latvia", "iso2": "LV", "code": "371" }, "TR": { "name": "Turkey", "iso2": "TR", "code": "90" }, "MD": { "name": "Moldova", "iso2": "MD", "code": "373" }, "IL": { "name": "Israel", "iso2": "IL", "code": "972" }, "VN": { "name": "Viet Nam", "iso2": "VN", "code": "84" }, "EE": { "name": "Estonia", "iso2": "EE", "code": "372" }, "KR": { "name": "Korea, Republic Of", "iso2": "KR", "code": "82" }, "KG": { "name": "Kyrgyzstan", "iso2": "KG", "code": "996" }};
                var cleanedCountryCode;
                for (var key in qiwiAvailableCountryCodes) {
                    cleanedCountryCode = qiwiAvailableCountryCodes[key].code.replace(" ", "");
                    if (cleanedCountryCode !== "") {
                        if (cleanedCountryCode === inputedPhone.substring(0, cleanedCountryCode.length)) {
                            return true;
                        }
                    }
                }
                return false;
            });

            $.validator.addMethod("isEqual1", function (value, element) {
                if ((value === "1") || (value === "on")) {
                    return true;
                } else {
                    return false;
                }
            });

            $.validator.addMethod("topicCheck", function (value, element) {
                if (/[\d`~@#$%^&*()_|+=;:'",.<>\{\}\[\]\\\/]/gi.test(value)) {
                    return false;
                } else {
                    return true;
                }
            });

            $.validator.addMethod("alphabetsOnly", function (value, element) {
                if (/[\d`~!@#$%^&*()_|+=?;:'",.<>\{\}\[\]\\\/]/gi.test(value)) {
                    return false;
                } else if ( (value.split(" ").length - 1) > 1 ) {
                    return false;
                } else if ( (value.split("-").length - 1) > 1 ) {
                    return false;
                } else {
                    return true;
                }
            });

            $.validator.addMethod("checkGCaptcha", function (value, element) {
                var response = window.grecaptcha.getResponse();
                if (response.length == 0) {
                    return false;
                } else {
                    return true;
                }
            });

            $.validator.setDefaults({
                onkeyup: false,
                onclick: false,
                onfocusout: false,
                errorClass: 'invalid_input',
                rules: ValidationModule.JQValidationPlugin.CONFIG["rules"],
                messages: ValidationModule.JQValidationPlugin.CONFIG.errorMessages,
                errorPlacement: function(error, element) {
                    if ($('.error').length) {
                        $(".error").append('<li>'+error[0].innerHTML+'</li>');
                        $('.error').slideDown();
                        setTimeout(function () {
                            $('.error').slideUp();
                            $('.error').html("");
                        }, 5000);
                    } else {
                        $('body').append('<div id="error" class=\'error\'></div>');
                        $(".error").append('<li>'+error[0].innerHTML+'</li>');
                        $('.error').slideDown();
                        setTimeout(function () {
                            $('.error').slideUp();
                            $('.error').html("");
                        }, 5000);
                    }

                },
                invalidHandler: function(f, v) {
                    if ($('.error').length) {
                        $('.error').html("");
                    } else {
                        $('body').append('<div class=\'error\' id=\'error\'></div>');
                        $('.error').html("");
                    }
                }
            });
        }
    },

    setLanguages: function () {
        ValidationModule.languages = {
            "ru": {
                subject: {
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ñ‚ÐµÐ¼Ñƒ",
                    minlength: "Ð¢ÐµÐ¼Ð° ÑÐ»Ð¸ÑˆÐºÐ¾Ð¼ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ°Ñ",
                    maxlength: "Ð¢ÐµÐ¼Ð° ÑÐ»Ð¸ÑˆÐºÐ¾Ð¼ Ð´Ð»Ð¸Ð½Ð½Ð°Ñ",
                    topicCheck: "Ð¢ÐµÐ¼Ð° ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ñ‚ Ð½ÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ðµ ÑÐ¸Ð¼Ð²Ð¾Ð»Ñ‹"
                },
                message: {
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ñ‚ÐµÐºÑÑ‚ ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ",
                    minlength: "ÐÐµÐ²Ð°Ð»Ð¸Ð´Ð½Ð°Ñ Ð´Ð»Ð¸Ð½Ð° Ñ‚ÐµÐºÑÑ‚Ð° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ",
                    maxlength: "ÐÐµÐ²Ð°Ð»Ð¸Ð´Ð½Ð°Ñ Ð´Ð»Ð¸Ð½Ð° Ñ‚ÐµÐºÑÑ‚Ð° ÑÐ¾Ð¾Ð±Ñ‰ÐµÐ½Ð¸Ðµ"
                },
                name: {
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¸Ð¼Ñ",
                    minlength: "Ð˜Ð¼Ñ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ ÑÐ»Ð¸ÑˆÐºÐ¾Ð¼ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¾Ðµ",
                    maxlength: "ÐÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ð°Ñ Ð´Ð»Ð¸Ð½Ð° Ð¸Ð¼ÐµÐ½Ð¸. Ð›Ð¾Ð³Ð¸Ð½ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð±Ð¾Ð»ÐµÐµ {0} ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²!",
                    alphabetsOnly: "Ð˜Ð¼Ñ Ð¼Ð¾Ð¶ÐµÑ‚ ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð±ÑƒÐºÐ²Ñ‹"
                },
                firstname: {
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¸Ð¼Ñ",
                    minlength: "Ð˜Ð¼Ñ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ ÑÐ»Ð¸ÑˆÐºÐ¾Ð¼ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¾Ðµ",
                    maxlength: "ÐÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ð°Ñ Ð´Ð»Ð¸Ð½Ð° Ð¸Ð¼ÐµÐ½Ð¸. Ð›Ð¾Ð³Ð¸Ð½ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð±Ð¾Ð»ÐµÐµ {0} ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²!",
                    alphabetsOnly: "Ð˜Ð¼Ñ Ð¼Ð¾Ð¶ÐµÑ‚ ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð±ÑƒÐºÐ²Ñ‹"
                },
                username: {
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¸Ð¼Ñ",
                    minlength: "Ð˜Ð¼Ñ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»Ñ ÑÐ»Ð¸ÑˆÐºÐ¾Ð¼ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ¾Ðµ",
                    maxlength: "ÐÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ð°Ñ Ð´Ð»Ð¸Ð½Ð° Ð¸Ð¼ÐµÐ½Ð¸. Ð›Ð¾Ð³Ð¸Ð½ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð±Ð¾Ð»ÐµÐµ {0} ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²!",
                    alphabetsOnly: "Ð˜Ð¼Ñ Ð¼Ð¾Ð¶ÐµÑ‚ ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð±ÑƒÐºÐ²Ñ‹"
                },
                lastname: {
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ñ„Ð°Ð¼Ð¸Ð»Ð¸ÑŽ",
                    minlength: "Ð¤Ð°Ð¼Ð¸Ð»Ð¸Ñ ÑÐ»Ð¸ÑˆÐºÐ¾Ð¼ ÐºÐ¾Ñ€Ð¾Ñ‚ÐºÐ°Ñ",
                    maxlength: "ÐÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ð°Ñ Ð´Ð»Ð¸Ð½Ð° Ñ„Ð°Ð¼Ð¸Ð»Ð¸Ð¸. Ñ„Ð°Ð¼Ð¸Ð»Ð¸Ñ Ð½Ðµ Ð¼Ð¾Ð¶ÐµÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð±Ð¾Ð»ÐµÐµ {0} ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²!",
                    alphabetsOnly: "Ð¤Ð°Ð¼Ð¸Ð»Ð¸Ñ Ð¼Ð¾Ð¶ÐµÑ‚ ÑÐ¾Ð´ÐµÑ€Ð¶Ð°Ñ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ð±ÑƒÐºÐ²Ñ‹"
                },
                password: {
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    minlength: "Ð’Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð½ÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    maxlength: "Ð’Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð½ÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ"
                },
                password1: {
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    minlength: "Ð’Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð½ÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    maxlength: "Ð’Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð½ÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ"
                },
                password2: {
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ ÐµÑ‰Ñ‘ Ñ€Ð°Ð·",
                    minlength: "Ð’Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð½ÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    maxlength: "Ð’Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð½ÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    equalTo: "ÐŸÐ°Ñ€Ð¾Ð»Ð¸ Ð´Ð¾Ð»Ð¶Ð½Ñ‹ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°Ñ‚ÑŒ"
                },
                confirm_password: {
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ ÐµÑ‰Ñ‘ Ñ€Ð°Ð·",
                    minlength: "Ð’Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð½ÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    maxlength: "Ð’Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð½ÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    equalTo: "ÐŸÐ°Ñ€Ð¾Ð»Ð¸ Ð´Ð¾Ð»Ð¶Ð½Ñ‹ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°Ñ‚ÑŒ"
                },
                login_password: { //Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð¿Ð°Ñ€Ð¾Ð»Ñ Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                    required: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    minlength: "ÐŸÐ°Ñ€Ð¾Ð»ÑŒ Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð±Ñ‹Ñ‚ÑŒ Ð´Ð»Ð¸Ð½ÐµÐµ {0} ÑÐ¸Ð¼Ð²Ð¾Ð»Ð¾Ð²",
                    maxlength: "Ð’Ñ‹ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð½ÐµÐ´Ð¾Ð¿ÑƒÑÑ‚Ð¸Ð¼Ñ‹Ð¹ Ð¿Ð°Ñ€Ð¾Ð»ÑŒ",
                    equalTo: "ÐŸÐ°Ñ€Ð¾Ð»Ð¸ Ð´Ð¾Ð»Ð¶Ð½Ñ‹ ÑÐ¾Ð²Ð¿Ð°Ð´Ð°Ñ‚ÑŒ"
                },
                fullPhone: {
                    required: "Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½ Ð½Ðµ Ð¿Ñ€Ð¾ÑˆÐµÐ» Ð²Ð°Ð»Ð¸Ð´Ð°Ñ†Ð¸ÑŽ",
                    digits: "Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½ Ð½Ðµ Ð¿Ñ€Ð¾ÑˆÐµÐ» Ð²Ð°Ð»Ð¸Ð´Ð°Ñ†Ð¸ÑŽ",
                    minlength: "Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½ Ð½Ðµ Ð¿Ñ€Ð¾ÑˆÐµÐ» Ð²Ð°Ð»Ð¸Ð´Ð°Ñ†Ð¸ÑŽ",
                    maxlength: "Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½ Ð½Ðµ Ð¿Ñ€Ð¾ÑˆÐµÐ» Ð²Ð°Ð»Ð¸Ð´Ð°Ñ†Ð¸ÑŽ"
                },
                phoneprefix2: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ ÑÑ‚Ñ€Ð°Ð½Ñƒ",
                email: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð²Ð°Ð»Ð¸Ð´Ð½Ñ‹Ð¹ email",
                login_name: "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ Ð²Ð°Ð»Ð¸Ð´Ð½Ñ‹Ð¹ email",//Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð»Ð¾Ð³Ð¸Ð½Ð° Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                agree: "ÐŸÑ€Ð¸Ð¼Ð¸Ñ‚Ðµ Ð½Ð°ÑˆÐ¸ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ",
                isConditionsAccepted: "ÐŸÑ€Ð¸Ð¼Ð¸Ñ‚Ðµ Ð½Ð°ÑˆÐ¸ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ",
                tosaccept: "ÐŸÑ€Ð¸Ð¼Ð¸Ñ‚Ðµ Ð½Ð°ÑˆÐ¸ ÑƒÑÐ»Ð¾Ð²Ð¸Ñ",
                phone: "Ð¢ÐµÐ»ÐµÑ„Ð¾Ð½ Ð½Ðµ Ð¿Ñ€Ð¾ÑˆÐµÐ» Ð²Ð°Ð»Ð¸Ð´Ð°Ñ†Ð¸ÑŽ",
                currency: "Ð’Ñ‹Ð±ÐµÑ€Ð¸Ñ‚Ðµ Ð²Ð°Ð»ÑŽÑ‚Ñƒ",
                jq_validate_grecaptcha: "ÐÐµÐ²Ð°Ð»Ð¸Ð´Ð½Ñ‹Ð¹ ÐºÐ¾Ð´ Ð±ÐµÐ·Ð¾Ð¿Ð°ÑÐ½Ð¾ÑÑ‚Ð¸",
                wmid: {
                    required:  "Ð’Ð²ÐµÐ´Ð¸Ñ‚Ðµ WMID ÐºÐ¾Ð´",
                    minlength:  "WMID ÐºÐ¾Ð´ Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð¸Ð¼ÐµÑ‚ÑŒ {0} Ñ†Ð¸Ñ„Ñ€",
                    maxlength:  "WMID ÐºÐ¾Ð´ Ð´Ð¾Ð»Ð¶ÐµÐ½ Ð¸Ð¼ÐµÑ‚ÑŒ {0} Ñ†Ð¸Ñ„Ñ€",
                    digits:  "WMID ÐºÐ¾Ð´ Ð´Ð¾Ð»Ð¶ÐµÐ½ ÑÐ¾ÑÑ‚Ð¾ÑÑ‚ÑŒ Ñ‚Ð¾Ð»ÑŒÐºÐ¾ Ñ†Ð¸Ñ„Ñ€Ñ‹"
                }
            },
            "en": {
                subject: {
                    required: "Enter subject",
                    minlength: "Subject is too short",
                    maxlength: "Topic is too long",
                    topicCheck: "Subject contains invalid characters"
                },
                message: {
                    required: "Enter your message",
                    minlength: "Invalid text message length",
                    maxlength: "Invalid text message length"
                },
                name: {
                    required: "Name cannot be empty",
                    minlength: "Your username must consist of at least {0} characters",
                    maxlength: "Invalid length of the name. Username must be from 3 to {0} characters!",
                    alphabetsOnly: "Name can have only letters"
                },
                firstname: {
                    required: "Name cannot be empty",
                    minlength: "Your name must consist of at least 3 characters",
                    maxlength: "Invalid length of the name. Username must be from 3 to {0} characters!",
                    alphabetsOnly: "Name can have only letters"
                },
                username: {
                    required: "Username cannot be empty",
                    minlength: "Your username must consist of at least 3 characters",
                    maxlength: "Invalid length of the name. Username must be from 3 to {0} characters!",
                    alphabetsOnly: "Name can have only letters"
                },
                lastname: {
                    required: "Lastname cannot be empty",
                    minlength: "Lastname must consist of at least 3 characters",
                    maxlength: "Invalid length of the lastname. Username must be from 3 to {0} characters!",
                    alphabetsOnly: "Lastname can have only letters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "The password must be at least {0} characters",
                    maxlength: "Invalid password"
                },
                password1: {
                    required: "Please provide a password",
                    minlength: "The password must be at least {0} characters",
                    maxlength: "Invalid password"
                },
                password2: {
                    required: "Please provide a password",
                    minlength: "Confirmation password must be at least {0} characters long",
                    maxlength: "Invalid confirmation password",
                    equalTo: "Please enter the same password as above"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Confirmation password must be at least {0} characters long",
                    maxlength: "Invalid confirmation password",
                    equalTo: "Please enter the same password as above"
                },
                login_password: { //Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð¿Ð°Ñ€Ð¾Ð»Ñ Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                    required: "Please provide a password",
                    minlength: "The password must be at least {0} characters",
                    maxlength: "Invalid password",
                    equalTo: "Please enter the same password as above"
                },
                fullPhone: {
                    required: "Invalid phone",
                    digits: "Invalid phone",
                    minlength: "Invalid phone",
                    maxlength: "Invalid phone",
                    hasCountryCode: "Enter the phone with valid country code"
                },
                phoneprefix2: "Choose the country",
                email: "Please enter a valid email address",
                login_name: "Please enter a valid email address",//Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð»Ð¾Ð³Ð¸Ð½Ð° Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                agree: "Please accept our policy",
                isConditionsAccepted: "Please accept our policy",
                tosaccept: "Please accept our policy",
                phone: "Invalid phone",
                currency: "Select currency",
                jq_validate_grecaptcha: "Incorrect security code",
                wmid: {
                    required:  "Enter the WMID code",
                    minlength:  "WMID code must have {0} digits",
                    maxlength:  "WMID code must have {0} digits",
                    digits:  "WMID code should consist only of digits"
                }
            },
            "pl": {
                subject: {
                    required: "WprowadÅº temat",
                    minlength: "Temat jest za krÃ³tki",
                    maxlength: "Temat jest za dÅ‚ugi",
                    topicCheck: "Temat zawiera nieprawidÅ‚owe znaki"
                },
                message: {
                    required: "Wpisz swojÄ… wiadomoÅ›Ä‡",
                    minlength: "NieprawidÅ‚owa dÅ‚ugoÅ›Ä‡ wiadomoÅ›ci tekstowej",
                    maxlength: "NieprawidÅ‚owa dÅ‚ugoÅ›Ä‡ wiadomoÅ›ci tekstowej"
                },
                name: {
                    required: "Nazwa nie moÅ¼e byÄ‡ pusta",
                    minlength: "Twoja nazwa uÅ¼ytkownika musi skÅ‚adaÄ‡ siÄ™ z co najmniej {0} znakÃ³w",
                    maxlength: "NieprawidÅ‚owa dÅ‚ugoÅ›Ä‡ nazwy. Nazwa uÅ¼ytkownika musi zawieraÄ‡ od 3 do {0} znakÃ³w",
                    alphabetsOnly: "Nazwa moÅ¼e zawieraÄ‡ tylko litery"
                },
                firstname: {
                    required: "Nazwa nie moÅ¼e byÄ‡ pusta",
                    minlength: "Twoja nazwa uÅ¼ytkownika musi skÅ‚adaÄ‡ siÄ™ z co najmniej {0} znakÃ³w",
                    maxlength: "NieprawidÅ‚owa dÅ‚ugoÅ›Ä‡ nazwy. Nazwa uÅ¼ytkownika musi zawieraÄ‡ od 3 do {0} znakÃ³w",
                    alphabetsOnly: "Nazwa moÅ¼e zawieraÄ‡ tylko litery"
                },
                username: {
                    required: "Nazwa nie moÅ¼e byÄ‡ pusta",
                    minlength: "Twoja nazwa uÅ¼ytkownika musi skÅ‚adaÄ‡ siÄ™ z co najmniej {0} znakÃ³w",
                    maxlength: "NieprawidÅ‚owa dÅ‚ugoÅ›Ä‡ nazwy. Nazwa uÅ¼ytkownika musi zawieraÄ‡ od 3 do {0} znakÃ³w",
                    alphabetsOnly: "Nazwa moÅ¼e zawieraÄ‡ tylko litery"
                },
                lastname: {
                    required: "Nazwisko nie moÅ¼e byÄ‡ puste",
                    minlength: "Nazwisko musi skÅ‚adaÄ‡ siÄ™ z co najmniej 3 znakÃ³w",
                    maxlength: "NieprawidÅ‚owa dÅ‚ugoÅ›Ä‡ nazwiska. Nazwa uÅ¼ytkownika musi skÅ‚adaÄ‡ siÄ™ z 3 do {0} znakÃ³w",
                    alphabetsOnly: "Nazwisko moÅ¼e mieÄ‡ tylko litery"
                },
                password: {
                    required: "Podaj hasÅ‚o",
                    minlength: "HasÅ‚o musi mieÄ‡ co najmniej {0} znakÃ³w",
                    maxlength: "NieprawidÅ‚owe hasÅ‚o"
                },
                password1: {
                    required: "Podaj hasÅ‚o",
                    minlength: "HasÅ‚o musi mieÄ‡ co najmniej {0} znakÃ³w",
                    maxlength: "NieprawidÅ‚owe hasÅ‚o"
                },
                password2: {
                    required: "Podaj hasÅ‚o",
                    minlength: "HasÅ‚o potwierdzajÄ…ce musi mieÄ‡ co najmniej {0} znakÃ³w",
                    maxlength: "NieprawidÅ‚owe hasÅ‚o potwierdzajÄ…ce",
                    equalTo: "WprowadÅº takie samo hasÅ‚o jak powyÅ¼ej"
                },
                confirm_password: {
                    required: "Podaj hasÅ‚o",
                    minlength: "HasÅ‚o potwierdzajÄ…ce musi mieÄ‡ co najmniej {0} znakÃ³w",
                    maxlength: "NieprawidÅ‚owe hasÅ‚o potwierdzajÄ…ce",
                    equalTo: "WprowadÅº takie samo hasÅ‚o jak powyÅ¼ej"
                },
                login_password: { //Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð¿Ð°Ñ€Ð¾Ð»Ñ Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                    required: "Podaj hasÅ‚o",
                    minlength: "HasÅ‚o musi mieÄ‡ co najmniej {0} znakÃ³w",
                    maxlength: "NieprawidÅ‚owe hasÅ‚o"
                },
                fullPhone: {
                    required: "NieprawidÅ‚owy telefon",
                    digits: "NieprawidÅ‚owy telefon",
                    minlength: "NieprawidÅ‚owy telefon",
                    maxlength: "NieprawidÅ‚owy telefon",
                    hasCountryCode: "WprowadÅº telefon z prawidÅ‚owym numerem kierunkowym kraju"
                },
                phoneprefix2: "Wybierz kraj",
                email: "ProszÄ™ wpisaÄ‡ aktualny adres e-mail",
                login_name: "ProszÄ™ wpisaÄ‡ aktualny adres e-mail",//Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð»Ð¾Ð³Ð¸Ð½Ð° Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                agree: "Zaakceptuj nasze zasady",
                isConditionsAccepted: "Zaakceptuj nasze zasady",
                tosaccept: "Zaakceptuj nasze zasady",
                phone: "NieprawidÅ‚owy telefon",
                currency: "Wybierz walutÄ™",
                jq_validate_grecaptcha: "Niepoprawny kod zabezpieczajÄ…cy",
                wmid: {
                    required:  "WprowadÅº kod WMID",
                    minlength:  "Kod WMID musi skÅ‚adaÄ‡ siÄ™ z {0} cyfr",
                    maxlength:  "Kod WMID musi skÅ‚adaÄ‡ siÄ™ z {0} cyfr",
                    digits:  "Kod WMID powinien skÅ‚adaÄ‡ siÄ™ wyÅ‚Ä…cznie z cyfr"
                }
            },
            "it": {
                subject: {
                    required: "Inserisci l'oggetto",
                    minlength: "Il soggetto Ã¨ troppo corto",
                    maxlength: "L'argomento Ã¨ troppo lungo",
                    topicCheck: "L'oggetto contiene caratteri non validi"
                },
                message: {
                    required: "Inserisci il tuo messaggio",
                    minlength: "Lunghezza del messaggio di testo non valida",
                    maxlength: "Lunghezza del messaggio di testo non valida"
                },
                name: {
                    required: "Il nome non puÃ² essere vuoto",
                    minlength: "Il tuo nome utente deve contenere almeno {0} caratteri",
                    maxlength: "Lunghezza non valida del nome Il nome utente deve contenere da 3 a {0} caratteri",
                    alphabetsOnly: "Il nome puÃ² contenere solo lettere"
                },
                firstname: {
                    required: "Il nome non puÃ² essere vuoto",
                    minlength: "Il tuo nome utente deve contenere almeno {0} caratteri",
                    maxlength: "Lunghezza non valida del nome Il nome utente deve contenere da 3 a {0} caratteri",
                    alphabetsOnly: "Il nome puÃ² contenere solo lettere"
                },
                username: {
                    required: "Il nome non puÃ² essere vuoto",
                    minlength: "Il tuo nome utente deve contenere almeno {0} caratteri",
                    maxlength: "Lunghezza non valida del nome Il nome utente deve contenere da 3 a {0} caratteri",
                    alphabetsOnly: "Il nome puÃ² contenere solo lettere"
                },
                lastname: {
                    required: "Il cognome non puÃ² essere vuoto",
                    minlength: "Il cognome deve contenere almeno {0} caratteri",
                    maxlength: "Lunghezza non valida del cognome Il nome utente deve contenere da 3 a {0} caratteri",
                    alphabetsOnly: "Il cognome puÃ² contenere solo lettere"
                },
                password: {
                    required: "Si prega di fornire una password",
                    minlength: "La password deve contenere almeno {0} caratteri",
                    maxlength: "Password non valida"
                },
                password1: {
                    required: "Si prega di fornire una password",
                    minlength: "La password deve contenere almeno {0} caratteri",
                    maxlength: "Password non valida"
                },
                password2: {
                    required: "Please provide a password",
                    minlength: "La password di conferma deve essere lunga almeno {0} caratteri",
                    maxlength: "Password di conferma non valida",
                    equalTo: "Si prega di inserire la stessa password di cui sopra"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "La password di conferma deve essere lunga almeno {0} caratteri",
                    maxlength: "Password di conferma non valida",
                    equalTo: "Si prega di inserire la stessa password di cui sopra"
                },
                login_password: { //Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð¿Ð°Ñ€Ð¾Ð»Ñ Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                    required: "Si prega di fornire una password",
                    minlength: "La password deve contenere almeno {0} caratteri",
                    maxlength: "Password non valida"
                },
                fullPhone: {
                    required: "Telefono non valido",
                    digits: "Telefono non valido",
                    minlength: "Telefono non valido",
                    maxlength: "Telefono non valido",
                    hasCountryCode: "Inserire il telefono con il prefisso internazionale valido"
                },
                phoneprefix2: "Wybierz kraj",
                email: "Si prega di inserire un indirizzo email valido",
                login_name: "Si prega di inserire un indirizzo email valido",//Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð»Ð¾Ð³Ð¸Ð½Ð° Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                agree: "Si prega di accettare la nostra politica",
                isConditionsAccepted: "Si prega di accettare la nostra politica",
                tosaccept: "Si prega di accettare la nostra politica",
                phone: "Telefono non valido",
                currency: "Wybierz walutÄ™",
                jq_validate_grecaptcha: "Codice di sicurezza errato",
                wmid: {
                    required:  "Inserisci il codice WMID",
                    minlength:  "Il codice WMID deve avere {0} cifre",
                    maxlength:  "Il codice WMID deve avere {0} cifre",
                    digits:  "Il codice WMID deve essere composto solo da cifre"
                }
            },
            "fr": {
                subject: {
                    required: "Entrez le sujet",
                    minlength: "Le sujet est trop court",
                    maxlength: "Le sujet est trop long",
                    topicCheck: "Le sujet contient des caractÃ¨res non valides"
                },
                message: {
                    required: "Entrez votre message",
                    minlength: "Longueur du message texte invalide",
                    maxlength: "Longueur du message texte invalide"
                },
                name: {
                    required: "Le nom ne peut pas Ãªtre vide",
                    minlength: "Votre nom d'utilisateur doit comporter au moins {0} caractÃ¨res",
                    maxlength: "Longueur non valide du nom. Le nom d'utilisateur doit comporter de 3 Ã  {0} caractÃ¨res",
                    alphabetsOnly: "Le nom ne peut contenir que des lettres"
                },
                firstname: {
                    required: "Le nom ne peut pas Ãªtre vide",
                    minlength: "Votre nom doit comporter au moins {0} caractÃ¨res",
                    maxlength: "Longueur non valide du nom. Le nom d'utilisateur doit comporter de 3 Ã  {0} caractÃ¨res",
                    alphabetsOnly: "Le nom ne peut contenir que des lettres"
                },
                username: {
                    required: "Le nom ne peut pas Ãªtre vide",
                    minlength: "Votre nom d'utilisateur doit comporter au moins 3 caractÃ¨res",
                    maxlength: "Longueur non valide du nom. Le nom d'utilisateur doit comporter de 3 Ã  {0} caractÃ¨res",
                    alphabetsOnly: "Le nom ne peut contenir que des lettres"
                },
                lastname: {
                    required: "Le nom de famille ne peut pas Ãªtre vide",
                    minlength: "Le nom de famille doit comporter au moins {0} caractÃ¨res",
                    maxlength: "La longueur du nom de famille est invalide. Le nom d'utilisateur doit comporter de 3 Ã  {0} caractÃ¨res",
                    alphabetsOnly: "Le nom de famille ne peut contenir que des lettres"
                },
                password: {
                    required: "S'il vous plaÃ®t fournir un mot de passe",
                    minlength: "Le mot de passe doit comporter au moins {0} caractÃ¨res",
                    maxlength: "Mot de passe incorrect"
                },
                password1: {
                    required: "S'il vous plaÃ®t fournir un mot de passe",
                    minlength: "Le mot de passe doit comporter au moins 6 caractÃ¨res",
                    maxlength: "Mot de passe incorrect"
                },
                password2: {
                    required: "S'il vous plaÃ®t fournir un mot de passe",
                    minlength: "Le mot de passe de confirmation doit comporter au moins {0} caractÃ¨res",
                    maxlength: "Mot de passe de confirmation invalide",
                    equalTo: "Entrez le mÃªme mot de passe que ci-dessus"
                },
                confirm_password: {
                    required: "S'il vous plaÃ®t fournir un mot de passe",
                    minlength: "Le mot de passe de confirmation doit comporter au moins {0} caractÃ¨res",
                    maxlength: "Mot de passe de confirmation invalide",
                    equalTo: "Entrez le mÃªme mot de passe que ci-dessus"
                },
                login_password: { //Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð¿Ð°Ñ€Ð¾Ð»Ñ Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                    required: "S'il vous plaÃ®t fournir un mot de passe",
                    minlength: "Le mot de passe de confirmation doit comporter au moins {0} caractÃ¨res",
                    maxlength: "Mot de passe de confirmation invalide",
                    equalTo: "Entrez le mÃªme mot de passe que ci-dessus"
                },
                fullPhone: {
                    required: "TÃ©lÃ©phone invalide",
                    digits: "TÃ©lÃ©phone invalide",
                    minlength: "TÃ©lÃ©phone invalide",
                    maxlength: "TÃ©lÃ©phone invalide",
                    hasCountryCode: "Entrez le tÃ©lÃ©phone avec le code de pays valide"
                },
                phoneprefix2: "Choisissez le pays",
                email: "S'il vous plaÃ®t, mettez une adresse email valide\n",
                login_name: "S'il vous plaÃ®t, mettez une adresse email valide\n",//Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð»Ð¾Ð³Ð¸Ð½Ð° Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                agree: "S'il vous plaÃ®t accepter notre politique",
                isConditionsAccepted: "S'il vous plaÃ®t accepter notre politique",
                tosaccept: "S'il vous plaÃ®t accepter notre politique",
                phone: "TÃ©lÃ©phone invalide",
                currency: "Wybierz walutÄ™",
                jq_validate_grecaptcha: "Code de sÃ©curitÃ© incorrect",
                wmid: {
                    required:  "Entrez le code WMID",
                    minlength:  "Le code WMID doit avoir {0} chiffres",
                    maxlength:  "Le code WMID doit avoir {0} chiffres",
                    digits:  "Le code WMID ne doit contenir que des chiffres"
                }
            },
            "es": {
                subject: {
                    required: "Entrar sujeto",
                    minlength: "El sujeto es demasiado corto",
                    maxlength: "El tema es demasiado largo",
                    topicCheck: "Le sujet contient des caractÃ¨res non valides"
                },
                message: {
                    required: "Ingrese su mensaje",
                    minlength: "Longitud de mensaje de texto no vÃ¡lido",
                    maxlength: "Longitud de mensaje de texto no vÃ¡lido"
                },
                name: {
                    required: "El nombre no puede estar vacÃ­o",
                    minlength: "Su nombre de usuario debe constar de al menos {0} caracteres",
                    maxlength: "Longitud invÃ¡lida del nombre El nombre de usuario debe ser de 3 a {0} caracteres",
                    alphabetsOnly: "El nombre solo puede tener letras"
                },
                firstname: {
                    required: "El nombre no puede estar vacÃ­o",
                    minlength: "Tu nombre debe constar de al menos {0} caracteres",
                    maxlength: "Longitud invÃ¡lida del nombre El nombre de usuario debe ser de 3 a {0} caracteres",
                    alphabetsOnly: "El nombre solo puede tener letras"
                },
                username: {
                    required: "El nombre de usuario no puede estar vacÃ­o",
                    minlength: "Su nombre de usuario debe constar de al menos {0} caracteres",
                    maxlength: "Longitud invÃ¡lida del nombre El nombre de usuario debe ser de 3 a {0} caracteres",
                    alphabetsOnly: "El nombre solo puede tener letras"
                },
                lastname: {
                    required: "El apellido no puede estar vacÃ­o",
                    minlength: "El apellido debe constar de al menos {0} caracteres",
                    maxlength: "Longitud invÃ¡lida del apellido El nombre de usuario debe ser de 3 a {0} caracteres",
                    alphabetsOnly: "El apellido solo puede tener letras"
                },
                password: {
                    required: "Por favor ingrese una contraseÃ±a",
                    minlength: "La contraseÃ±a debe tener al menos {0} caracteres",
                    maxlength: "ContraseÃ±a invalida"
                },
                password1: {
                    required: "Por favor ingrese una contraseÃ±a",
                    minlength: "La contraseÃ±a debe tener al menos {0} caracteres",
                    maxlength: "ContraseÃ±a invalida"
                },
                password2: {
                    required: "Por favor ingrese una contraseÃ±a",
                    minlength: "La contraseÃ±a de confirmaciÃ³n debe tener al menos {0} caracteres de largo",
                    maxlength: "ContraseÃ±a de confirmaciÃ³n invÃ¡lida",
                    equalTo: "Por favor ingrese la misma contraseÃ±a que arriba"
                },
                confirm_password: {
                    required: "Por favor ingrese una contraseÃ±a",
                    minlength: "La contraseÃ±a de confirmaciÃ³n debe tener al menos {0} caracteres de largo",
                    maxlength: "ContraseÃ±a de confirmaciÃ³n invÃ¡lida",
                    equalTo: "Por favor ingrese la misma contraseÃ±a que arriba"
                },
                login_password: { //Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð¿Ð°Ñ€Ð¾Ð»Ñ Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                    required: "Por favor ingrese una contraseÃ±a",
                    minlength: "La contraseÃ±a debe tener al menos {0} caracteres",
                    maxlength: "ContraseÃ±a invalida",
                    equalTo: "Por favor ingrese la misma contraseÃ±a que arriba"
                },
                fullPhone: { // with country code
                    required: "TelÃ©fono invÃ¡lido",
                    digits: "TelÃ©fono invÃ¡lido",
                    minlength: "TelÃ©fono invÃ¡lido",
                    maxlength: "TelÃ©fono invÃ¡lido",
                    hasCountryCode: "Ingrese el telÃ©fono con el cÃ³digo de paÃ­s vÃ¡lido"
                },
                phoneprefix2: "Elija el paÃ­s",
                email: "Por favor, introduce una direcciÃ³n de correo electrÃ³nico vÃ¡lida",
                login_name: "Por favor, introduce una direcciÃ³n de correo electrÃ³nico vÃ¡lida",//Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð»Ð¾Ð³Ð¸Ð½Ð° Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                agree: "Por favor acepta nuestra polÃ­tica",
                isConditionsAccepted: "Por favor acepta nuestra polÃ­tica",
                tosaccept: "Por favor acepta nuestra polÃ­tica",
                phone: "TelÃ©fono invÃ¡lido",
                currency: "Seleccione el tipo de moneda",
                jq_validate_grecaptcha: "CÃ³digo de seguridad incorrecto",
                wmid: {
                    required:  "Ingrese el cÃ³digo WMID",
                    minlength:  "El cÃ³digo WMID debe tener {0} dÃ­gitos",
                    maxlength:  "El cÃ³digo WMID debe tener {0} dÃ­gitos",
                    digits:  "El cÃ³digo WMID debe consistir solo en dÃ­gitos"
                }
            },
            "de": {
                subject: {
                    required: "Betreff eingeben",
                    minlength: "Das Thema ist zu kurz",
                    maxlength: "Das Thema ist zu lang",
                    topicCheck: "Betreff enthÃ¤lt ungÃ¼ltige Zeichen"
                },
                message: {
                    required: "Gib deine Nachricht ein",
                    minlength: "UngÃ¼ltige LÃ¤nge der Textnachricht",
                    maxlength: "UngÃ¼ltige LÃ¤nge der Textnachricht"
                },
                name: {
                    required: "Du hast keinen Namen eingegeben",
                    minlength: "Ihr Benutzername muss aus mindestens {0} Zeichen bestehen",
                    maxlength: "UngÃ¼ltige LÃ¤nge des Namens Der Benutzername muss aus 3 bis {0} Zeichen bestehen!",
                    alphabetsOnly: "Der Name darf nur Buchstaben enthalten"
                },
                firstname: {
                    required: "Das Feld mit Vornamen darf nicht leer sein!",
                    minlength: "Ihr Benutzername muss aus mindestens {0} Zeichen bestehen",
                    maxlength: "UngÃ¼ltige LÃ¤nge des Namens Der Benutzername muss aus 3 bis {0} Zeichen bestehen!",
                    alphabetsOnly: "Der Name darf nur Buchstaben enthalten"
                },
                username: {
                    required: "Das Feld mit Vornamen darf nicht leer sein!",
                    minlength: "Ihr Benutzername muss aus mindestens {0} Zeichen bestehen",
                    maxlength: "UngÃ¼ltige LÃ¤nge des Namens Der Benutzername muss aus 3 bis {0} Zeichen bestehen!",
                    alphabetsOnly: "Der Name darf nur Buchstaben enthalten"
                },
                lastname: {
                    required: "Das Feld mit Nachnamen darf nicht leer sein!",
                    minlength: "Der Nachname muss aus mindestens {0} Zeichen bestehen",
                    maxlength: "UngÃ¼ltige LÃ¤nge des letzten Namens. Der Benutzername muss aus 3 bis {0} Zeichen bestehen!",
                    alphabetsOnly: "Nachname darf nur Buchstaben enthalten"
                },
                password: {
                    required: "Bitte geben Sie ein Passwort an",
                    minlength: "Das Passwort muss mindestens {0} Zeichen lang sein",
                    maxlength: "UngÃ¼ltiges Passwort"
                },
                password1: {
                    required: "Bitte geben Sie ein Passwort an",
                    minlength: "Das Passwort muss mindestens {0} Zeichen lang sein",
                    maxlength: "UngÃ¼ltiges Passwort"
                },
                password2: {
                    required: "Bitte geben Sie ein Passwort an",
                    minlength: "Das BestÃ¤tigungskennwort muss mindestens {0} Zeichen lang sein",
                    maxlength: "UngÃ¼ltiges BestÃ¤tigungspasswort",
                    equalTo: "Bitte geben Sie dasselbe Passwort noch einmal ein"
                },
                confirm_password: {
                    required: "Bitte geben Sie ein Passwort an",
                    minlength: "Das BestÃ¤tigungskennwort muss mindestens {0} Zeichen lang sein",
                    maxlength: "UngÃ¼ltiges BestÃ¤tigungspasswort",
                    equalTo: "Bitte geben Sie dasselbe Passwort noch einmal ein"
                },
                login_password: { //Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð¿Ð°Ñ€Ð¾Ð»Ñ Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                    required: "Bitte geben Sie ein Passwort an",
                    minlength: "Das BestÃ¤tigungskennwort muss mindestens {0} Zeichen lang sein",
                    maxlength: "UngÃ¼ltiges BestÃ¤tigungspasswort",
                    equalTo: "Bitte geben Sie dasselbe Passwort noch einmal ein"
                },
                fullPhone: { // with country code
                    required: "Telefonfeld ist nicht gÃ¼ltig",
                    digits: "Telefonfeld ist nicht gÃ¼ltig",
                    minlength: "Telefonfeld ist nicht gÃ¼ltig",
                    maxlength: "Telefonfeld ist nicht gÃ¼ltig",
                    hasCountryCode: "Geben Sie das Telefon mit gÃ¼ltigem LÃ¤ndercode ein"
                },
                phoneprefix2: "WÃ¤hle das Land aus",
                email: "E-Mail-Feld ist nicht gÃ¼ltig",
                login_name: "Bitte geben Sie eine gÃ¼ltige E-Mail-Adresse ein",//Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð»Ð¾Ð³Ð¸Ð½Ð° Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                agree: "Bitte akzeptieren Sie unsere Politik",
                isConditionsAccepted: "Bitte akzeptieren Sie unsere Politik",
                tosaccept: "Bitte akzeptieren Sie unsere Politik",
                phone: "Telefonfeld ist nicht gÃ¼ltig",
                currency: "WÃ¤hrung wÃ¤hlen",
                jq_validate_grecaptcha: "Falscher Sicherheitscode",
                wmid: {
                    required:  "Geben Sie den WMID-Code ein",
                    minlength:  "WMID-Code muss {0} Ziffern haben",
                    maxlength:  "WMID-Code muss {0} Ziffern haben",
                    digits:  "WMID-Code sollte nur aus Ziffern bestehen"
                }
            },
            "ar": {
                subject: {
                    required: "Ø£Ø¯Ø®Ù„ Ø§Ù„Ù…ÙˆØ¶ÙˆØ¹",
                    minlength: "Ø§Ù„Ù…ÙˆØ¶ÙˆØ¹ Ù‚ØµÙŠØ± Ø¬Ø¯Ø§",
                    maxlength: "Ø§Ù„Ù…ÙˆØ¶ÙˆØ¹ Ø·ÙˆÙŠÙ„ Ø¬Ø¯Ø§",
                    topicCheck: "ÙŠØ­ØªÙˆÙŠ Ø§Ù„Ù…ÙˆØ¶ÙˆØ¹ Ø¹Ù„Ù‰ Ø£Ø­Ø±Ù ØºÙŠØ± ØµØ§Ù„Ø­Ø©"
                },
                message: {
                    required: "Ø£Ø¯Ø®Ù„ Ø±Ø³Ø§Ù„ØªÙƒ",
                    minlength: "Ø·ÙˆÙ„ Ø±Ø³Ø§Ù„Ø© Ù†ØµÙŠØ© ØºÙŠØ± ØµØ§Ù„Ø­",
                    maxlength: "Ø·ÙˆÙ„ Ø±Ø³Ø§Ù„Ø© Ù†ØµÙŠØ© ØºÙŠØ± ØµØ§Ù„Ø­"
                },
                name: {
                    required: "Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ù„Ø§Ø³Ù… ÙØ§Ø±ØºØ§",
                    minlength: "ÙŠØ¬Ø¨ Ø£Ù† ÙŠØªÙƒÙˆÙ† Ø§Ø³Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† {0} Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„",
                    maxlength: "Ø·ÙˆÙ„ Ø§Ù„Ø§Ø³Ù… ØºÙŠØ± ØµØ§Ù„Ø­. ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ø³Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† 3 Ø¥Ù„Ù‰ {0} Ø­Ø±ÙØ§!",
                    alphabetsOnly: "ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØ­ØªÙˆÙŠ Ø§Ù„Ø§Ø³Ù… Ø¹Ù„Ù‰ Ø£Ø­Ø±Ù ÙÙ‚Ø·"
                },
                firstname: {
                    required: "Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ù„Ø§Ø³Ù… ÙØ§Ø±ØºØ§",
                    minlength: "ÙŠØ¬Ø¨ Ø£Ù† ÙŠØªÙƒÙˆÙ† Ø§Ø³Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† {0} Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„",
                    maxlength: "Ø·ÙˆÙ„ Ø§Ù„Ø§Ø³Ù… ØºÙŠØ± ØµØ§Ù„Ø­. ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ø³Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† 3 Ø¥Ù„Ù‰ {0} Ø­Ø±ÙØ§",
                    alphabetsOnly: "ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØ­ØªÙˆÙŠ Ø§Ù„Ø§Ø³Ù… Ø¹Ù„Ù‰ Ø£Ø­Ø±Ù ÙÙ‚Ø·"
                },
                username: {
                    required: "Ù„Ø§ ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ù„Ø§Ø³Ù… ÙØ§Ø±ØºØ§",
                    minlength: "ÙŠØ¬Ø¨ Ø£Ù† ÙŠØªÙƒÙˆÙ† Ø§Ø³Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† {0} Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„",
                    maxlength: "Ø·ÙˆÙ„ Ø§Ù„Ø§Ø³Ù… ØºÙŠØ± ØµØ§Ù„Ø­. ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ø³Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† 3 Ø¥Ù„Ù‰ {0} Ø­Ø±ÙØ§",
                    alphabetsOnly: "ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠØ­ØªÙˆÙŠ Ø§Ù„Ø§Ø³Ù… Ø¹Ù„Ù‰ Ø£Ø­Ø±Ù ÙÙ‚Ø·"
                },
                lastname: {
                    required: "Ù„Ø§ ÙŠÙ…ÙƒÙ† ØªØ±Ùƒ Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø© ÙØ§Ø±ØºØ§",
                    minlength: "ÙŠØ¬Ø¨ Ø£Ù† ÙŠØªÙƒÙˆÙ† Ø§Ø³Ù… Ø§Ù„Ø¹Ø§Ø¦Ù„Ø© Ù…Ù† {0} Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„",
                    maxlength: "Ø·ÙˆÙ„ ØºÙŠØ± ØµØ§Ù„Ø­ Ù„Ù„Ø§Ø³Ù… Ø§Ù„Ø£Ø®ÙŠØ±. ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø§Ø³Ù… Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù… Ù…Ù† 3 Ø¥Ù„Ù‰ {0} Ø­Ø±ÙØ§",
                    alphabetsOnly: "Ø§Ù„Ø§Ø³Ù… Ø§Ù„Ø£Ø®ÙŠØ± ÙŠÙ…ÙƒÙ† Ø£Ù† ÙŠÙƒÙˆÙ† ÙÙ‚Ø· Ø§Ù„Ø­Ø±ÙˆÙ"
                },
                password: {
                    required: "ÙŠØ±Ø¬Ù‰ ØªÙ‚Ø¯ÙŠÙ… ÙƒÙ„Ù…Ø© Ù…Ø±ÙˆØ±",
                    minlength: "ÙŠØ¬Ø¨ Ø£Ù† ØªØªÙƒÙˆÙ† ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ù…Ù† {0} Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„",
                    maxlength: "Ø±Ù…Ø² Ù…Ø±ÙˆØ± Ø®Ø§Ø·Ø¦"
                },
                password1: {
                    required: "ÙŠØ±Ø¬Ù‰ ØªÙ‚Ø¯ÙŠÙ… ÙƒÙ„Ù…Ø© Ù…Ø±ÙˆØ±",
                    minlength: "ÙŠØ¬Ø¨ Ø£Ù† ØªØªÙƒÙˆÙ† ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ù…Ù† {0} Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„",
                    maxlength: "Ø±Ù…Ø² Ù…Ø±ÙˆØ± Ø®Ø§Ø·Ø¦"
                },
                password2: {
                    required: "ÙŠØ±Ø¬Ù‰ ØªÙ‚Ø¯ÙŠÙ… ÙƒÙ„Ù…Ø© Ù…Ø±ÙˆØ±",
                    minlength: "ÙŠØ¬Ø¨ Ø£Ù† ØªØªÙƒÙˆÙ† ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ù…Ù† {0} Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„",
                    maxlength: "Ø±Ù…Ø² Ù…Ø±ÙˆØ± Ø®Ø§Ø·Ø¦",
                    equalTo: "ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ù†ÙØ³Ù‡Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ù†Ø­Ùˆ Ø§Ù„ÙˆØ§Ø±Ø¯ Ø£Ø¹Ù„Ø§Ù‡"
                },
                confirm_password: {
                    required: "ÙŠØ±Ø¬Ù‰ ØªÙ‚Ø¯ÙŠÙ… ÙƒÙ„Ù…Ø© Ù…Ø±ÙˆØ±",
                    minlength: "ÙŠØ¬Ø¨ Ø£Ù† ØªØªÙƒÙˆÙ† ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ù…Ù† {0} Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„",
                    maxlength: "Ø±Ù…Ø² Ù…Ø±ÙˆØ± Ø®Ø§Ø·Ø¦",
                    equalTo: "ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ù†ÙØ³Ù‡Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ù†Ø­Ùˆ Ø§Ù„ÙˆØ§Ø±Ø¯ Ø£Ø¹Ù„Ø§Ù‡"
                },
                login_password: { //Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð¿Ð°Ñ€Ð¾Ð»Ñ Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                    required: "ÙŠØ±Ø¬Ù‰ ØªÙ‚Ø¯ÙŠÙ… ÙƒÙ„Ù…Ø© Ù…Ø±ÙˆØ±",
                    minlength: "ÙŠØ¬Ø¨ Ø£Ù† ØªØªÙƒÙˆÙ† ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ù…Ù† {0} Ø£Ø­Ø±Ù Ø¹Ù„Ù‰ Ø§Ù„Ø£Ù‚Ù„",
                    maxlength: "Ø±Ù…Ø² Ù…Ø±ÙˆØ± Ø®Ø§Ø·Ø¦",
                    equalTo: "ÙŠØ±Ø¬Ù‰ Ø¥Ø¯Ø®Ø§Ù„ ÙƒÙ„Ù…Ø© Ø§Ù„Ù…Ø±ÙˆØ± Ù†ÙØ³Ù‡Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ù†Ø­Ùˆ Ø§Ù„ÙˆØ§Ø±Ø¯ Ø£Ø¹Ù„Ø§Ù‡"
                },
                fullPhone: { // with country code
                    required: "Ø§Ù„Ù‡Ø§ØªÙ ØºÙŠØ± ØµØ§Ù„Ø­",
                    digits: "Ø§Ù„Ù‡Ø§ØªÙ ØºÙŠØ± ØµØ§Ù„Ø­",
                    minlength: "Ø§Ù„Ù‡Ø§ØªÙ ØºÙŠØ± ØµØ§Ù„Ø­",
                    maxlength: "Ø§Ù„Ù‡Ø§ØªÙ ØºÙŠØ± ØµØ§Ù„Ø­",
                    hasCountryCode: "Ø£Ø¯Ø®Ù„ Ø§Ù„Ù‡Ø§ØªÙ Ø¨Ø±Ù…Ø² Ø¨Ù„Ø¯ ØµØ§Ù„Ø­"
                },
                phoneprefix2: "Ø§Ø®ØªØ± Ø§Ù„Ø¨Ù„Ø¯",
                email: "Ø±Ø¬Ø§Ø¡ Ù‚Ù… Ø¨Ø¥Ø¯Ø®Ø§Ù„ Ø¨Ø±ÙŠØ¯ Ø§Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØµØ­ÙŠØ­",
                login_name: "Ø±Ø¬Ø§Ø¡ Ù‚Ù… Ø¨Ø¥Ø¯Ø®Ø§Ù„ Ø¨Ø±ÙŠØ¯ Ø§Ù„ÙƒØªØ±ÙˆÙ†ÙŠ ØµØ­ÙŠØ­",//Ð¿Ð¾Ð»Ðµ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð½Ð°Ð·Ð²Ð°Ð½Ð¸ÐµÐ¼ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ÑÑ Ð² ÐºÐ°Ñ‡ÐµÑÑ‚Ð²Ðµ Ð»Ð¾Ð³Ð¸Ð½Ð° Ð½Ð° Ñ„Ð¾Ñ€Ð¼Ðµ Ð°Ð²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ð¸
                agree: "ÙŠØ±Ø¬Ù‰ Ù‚Ø¨ÙˆÙ„ Ø³ÙŠØ§Ø³ØªÙ†Ø§",
                isConditionsAccepted: "ÙŠØ±Ø¬Ù‰ Ù‚Ø¨ÙˆÙ„ Ø³ÙŠØ§Ø³ØªÙ†Ø§",
                tosaccept: "ÙŠØ±Ø¬Ù‰ Ù‚Ø¨ÙˆÙ„ Ø³ÙŠØ§Ø³ØªÙ†Ø§",
                phone: "Ø§Ù„Ù‡Ø§ØªÙ ØºÙŠØ± ØµØ§Ù„Ø­",
                currency: "Ø§Ø®ØªØ± Ø§Ù„Ø¹Ù…Ù„Ø©",
                jq_validate_grecaptcha: "Ø±Ù…Ø² Ø§Ù„Ø­Ù…Ø§ÙŠØ© ØºÙŠØ± ØµØ­ÙŠØ­Ø©",
                wmid: {
                    required:  "Ø£Ø¯Ø®Ù„ Ø±Ù…Ø² ÙˆÙ…ÙŠØ¯",
                    minlength:  "ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø±Ù…Ø² ÙˆÙ…ÙŠØ¯ {0} Ø±Ù‚Ù…Ø§",
                    maxlength:  "ÙŠØ¬Ø¨ Ø£Ù† ÙŠÙƒÙˆÙ† Ø±Ù…Ø² ÙˆÙ…ÙŠØ¯ {0} Ø±Ù‚Ù…Ø§",
                    digits:  "ÙŠØ¬Ø¨ Ø£Ù† ÙŠØªØ£Ù„Ù Ø±Ù…Ø² ÙˆÙ…ÙŠØ¯ Ù…Ù† Ø£Ø±Ù‚Ø§Ù… ÙÙ‚Ø·"
                }
            }
        }
    }
};

$(ValidationModule.run());