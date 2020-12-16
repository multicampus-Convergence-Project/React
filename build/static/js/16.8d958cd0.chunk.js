(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{846:function(e,l,a){"use strict";a.r(l),a.d(l,"amplify_auth_fields",function(){return s}),a.d(l,"amplify_code_field",function(){return d}),a.d(l,"amplify_country_dial_code",function(){return b}),a.d(l,"amplify_email_field",function(){return f}),a.d(l,"amplify_form_section",function(){return p}),a.d(l,"amplify_password_field",function(){return h}),a.d(l,"amplify_phone_field",function(){return E}),a.d(l,"amplify_select",function(){return m}),a.d(l,"amplify_username_field",function(){return O});var t=a(22),i=a(899),n=a(89),r=a(896),u=a(895),o={username:function(e){return Object(t.i)("amplify-username-field",{label:e.label,placeholder:e.placeholder,required:e.required,handleInputChange:e.handleInputChange,value:e.value,inputProps:e.inputProps,disabled:e.disabled})},password:function(e){return Object(t.i)("amplify-password-field",{label:e.label,placeholder:e.placeholder,hint:e.hint,required:e.required,handleInputChange:e.handleInputChange,value:e.value,inputProps:e.inputProps,disabled:e.disabled})},email:function(e){return Object(t.i)("amplify-email-field",{label:e.label,placeholder:e.placeholder,required:e.required,handleInputChange:e.handleInputChange,value:e.value,inputProps:e.inputProps,disabled:e.disabled})},code:function(e){return Object(t.i)("amplify-code-field",{label:e.label,placeholder:e.placeholder,hint:e.hint,required:e.required,handleInputChange:e.handleInputChange,value:e.value,inputProps:Object.assign(Object.assign({},e.inputProps),{min:"0"}),disabled:e.disabled})},phone_number:function(e){return Object(t.i)("amplify-phone-field",{label:e.label,placeholder:e.placeholder,required:e.required,handleInputChange:e.handleInputChange,value:e.value,inputProps:e.inputProps,disabled:e.disabled,dialCode:e.dialCode})},default:function(e){return Object(t.i)("amplify-form-field",{label:e.label,placeholder:e.placeholder,required:e.required,handleInputChange:e.handleInputChange,value:e.value,inputProps:e.inputProps,disabled:e.disabled})}},s=function(){function e(e){Object(t.k)(this,e)}return e.prototype.constructFormFieldOptions=function(e){var l=[];return void 0===e?"":(e.forEach(function(e){"string"===typeof e?l.push(o[e](e)):Object.keys(o).includes(e.type)?l.push(o[e.type](e)):l.push(o.default(e))}),l)},e.prototype.render=function(){return Object(t.i)("div",{class:"auth-fields"},this.constructFormFieldOptions(this.formFields))},e}();s.style=".auth-fields{margin-bottom:2rem}";var d=function(){function e(e){Object(t.k)(this,e),this.fieldId=u.t,this.label=r.a.CODE_LABEL,this.placeholder=r.a.CODE_PLACEHOLDER,this.required=!1}return e.prototype.render=function(){return Object(t.i)("amplify-form-field",{fieldId:this.fieldId,label:i.a.get(this.label),placeholder:i.a.get(this.placeholder),type:"number",hint:this.hint,required:this.required,handleInputChange:this.handleInputChange,value:this.value,inputProps:this.inputProps,disabled:this.disabled})},e}(),c=[{label:"+1",value:"+1"},{label:"+7",value:"+7"},{label:"+20",value:"+20"},{label:"+27",value:"+27"},{label:"+30",value:"+30"},{label:"+31",value:"+31"},{label:"+32",value:"+32"},{label:"+33",value:"+33"},{label:"+34",value:"+34"},{label:"+36",value:"+36"},{label:"+39",value:"+39"},{label:"+40",value:"+40"},{label:"+41",value:"+41"},{label:"+43",value:"+43"},{label:"+44",value:"+44"},{label:"+45",value:"+45"},{label:"+46",value:"+46"},{label:"+47",value:"+47"},{label:"+48",value:"+48"},{label:"+49",value:"+49"},{label:"+51",value:"+51"},{label:"+52",value:"+52"},{label:"+53",value:"+53"},{label:"+54",value:"+54"},{label:"+55",value:"+55"},{label:"+56",value:"+56"},{label:"+57",value:"+57"},{label:"+58",value:"+58"},{label:"+60",value:"+60"},{label:"+61",value:"+61"},{label:"+62",value:"+62"},{label:"+63",value:"+63"},{label:"+64",value:"+64"},{label:"+65",value:"+65"},{label:"+66",value:"+66"},{label:"+81",value:"+81"},{label:"+82",value:"+82"},{label:"+84",value:"+84"},{label:"+86",value:"+86"},{label:"+90",value:"+90"},{label:"+91",value:"+91"},{label:"+92",value:"+92"},{label:"+93",value:"+93"},{label:"+94",value:"+94"},{label:"+95",value:"+95"},{label:"+98",value:"+98"},{label:"+212",value:"+212"},{label:"+213",value:"+213"},{label:"+216",value:"+216"},{label:"+218",value:"+218"},{label:"+220",value:"+220"},{label:"+221",value:"+221"},{label:"+222",value:"+222"},{label:"+223",value:"+223"},{label:"+224",value:"+224"},{label:"+225",value:"+225"},{label:"+226",value:"+226"},{label:"+227",value:"+227"},{label:"+228",value:"+228"},{label:"+229",value:"+229"},{label:"+230",value:"+230"},{label:"+231",value:"+231"},{label:"+232",value:"+232"},{label:"+233",value:"+233"},{label:"+234",value:"+234"},{label:"+235",value:"+235"},{label:"+236",value:"+236"},{label:"+237",value:"+237"},{label:"+238",value:"+238"},{label:"+239",value:"+239"},{label:"+240",value:"+240"},{label:"+241",value:"+241"},{label:"+242",value:"+242"},{label:"+243",value:"+243"},{label:"+244",value:"+244"},{label:"+245",value:"+245"},{label:"+246",value:"+246"},{label:"+248",value:"+248"},{label:"+249",value:"+249"},{label:"+250",value:"+250"},{label:"+251",value:"+251"},{label:"+252",value:"+252"},{label:"+253",value:"+253"},{label:"+254",value:"+254"},{label:"+255",value:"+255"},{label:"+256",value:"+256"},{label:"+257",value:"+257"},{label:"+258",value:"+258"},{label:"+260",value:"+260"},{label:"+261",value:"+261"},{label:"+262",value:"+262"},{label:"+263",value:"+263"},{label:"+264",value:"+264"},{label:"+265",value:"+265"},{label:"+266",value:"+266"},{label:"+267",value:"+267"},{label:"+268",value:"+268"},{label:"+269",value:"+269"},{label:"+290",value:"+290"},{label:"+291",value:"+291"},{label:"+297",value:"+297"},{label:"+298",value:"+298"},{label:"+299",value:"+299"},{label:"+345",value:"+345"},{label:"+350",value:"+350"},{label:"+351",value:"+351"},{label:"+352",value:"+352"},{label:"+353",value:"+353"},{label:"+354",value:"+354"},{label:"+355",value:"+355"},{label:"+356",value:"+356"},{label:"+357",value:"+357"},{label:"+358",value:"+358"},{label:"+359",value:"+359"},{label:"+370",value:"+370"},{label:"+371",value:"+371"},{label:"+372",value:"+372"},{label:"+373",value:"+373"},{label:"+374",value:"+374"},{label:"+375",value:"+375"},{label:"+376",value:"+376"},{label:"+377",value:"+377"},{label:"+378",value:"+378"},{label:"+379",value:"+379"},{label:"+380",value:"+380"},{label:"+381",value:"+381"},{label:"+382",value:"+382"},{label:"+385",value:"+385"},{label:"+386",value:"+386"},{label:"+387",value:"+387"},{label:"+389",value:"+389"},{label:"+420",value:"+420"},{label:"+421",value:"+421"},{label:"+423",value:"+423"},{label:"+500",value:"+500"},{label:"+501",value:"+501"},{label:"+502",value:"+502"},{label:"+503",value:"+503"},{label:"+504",value:"+504"},{label:"+505",value:"+505"},{label:"+506",value:"+506"},{label:"+507",value:"+507"},{label:"+508",value:"+508"},{label:"+509",value:"+509"},{label:"+537",value:"+537"},{label:"+590",value:"+590"},{label:"+591",value:"+591"},{label:"+593",value:"+593"},{label:"+594",value:"+594"},{label:"+595",value:"+595"},{label:"+596",value:"+596"},{label:"+597",value:"+597"},{label:"+598",value:"+598"},{label:"+599",value:"+599"},{label:"+670",value:"+670"},{label:"+672",value:"+672"},{label:"+673",value:"+673"},{label:"+674",value:"+674"},{label:"+675",value:"+675"},{label:"+676",value:"+676"},{label:"+677",value:"+677"},{label:"+678",value:"+678"},{label:"+679",value:"+679"},{label:"+680",value:"+680"},{label:"+681",value:"+681"},{label:"+682",value:"+682"},{label:"+683",value:"+683"},{label:"+685",value:"+685"},{label:"+686",value:"+686"},{label:"+687",value:"+687"},{label:"+688",value:"+688"},{label:"+689",value:"+689"},{label:"+690",value:"+690"},{label:"+691",value:"+691"},{label:"+692",value:"+692"},{label:"+850",value:"+850"},{label:"+852",value:"+852"},{label:"+853",value:"+853"},{label:"+855",value:"+855"},{label:"+856",value:"+856"},{label:"+872",value:"+872"},{label:"+880",value:"+880"},{label:"+886",value:"+886"},{label:"+960",value:"+960"},{label:"+961",value:"+961"},{label:"+962",value:"+962"},{label:"+963",value:"+963"},{label:"+964",value:"+964"},{label:"+965",value:"+965"},{label:"+966",value:"+966"},{label:"+967",value:"+967"},{label:"+968",value:"+968"},{label:"+970",value:"+970"},{label:"+971",value:"+971"},{label:"+972",value:"+972"},{label:"+973",value:"+973"},{label:"+974",value:"+974"},{label:"+975",value:"+975"},{label:"+976",value:"+976"},{label:"+977",value:"+977"},{label:"+992",value:"+992"},{label:"+993",value:"+993"},{label:"+994",value:"+994"},{label:"+995",value:"+995"},{label:"+996",value:"+996"},{label:"+998",value:"+998"}],b=function(){function e(e){Object(t.k)(this,e),this.fieldId=u.b,this.options=c,this.dialCode="+1"}return e.prototype.componentWillLoad=function(){this.setSelectedDialCode()},e.prototype.watchDialCodeHandler=function(){this.setSelectedDialCode()},e.prototype.setSelectedDialCode=function(){"number"===typeof this.dialCode?this.selectedDialCode="+"+this.dialCode:this.selectedDialCode=this.dialCode},e.prototype.render=function(){return Object(t.i)("amplify-select",{fieldId:this.fieldId,options:this.options,handleInputChange:this.handleInputChange,selected:this.selectedDialCode})},Object.defineProperty(e,"watchers",{get:function(){return{dialCode:["watchDialCodeHandler"]}},enumerable:!1,configurable:!0}),e}(),f=function(){function e(e){Object(t.k)(this,e),this.fieldId=u.c,this.label=r.a.EMAIL_LABEL,this.placeholder=r.a.EMAIL_PLACEHOLDER,this.required=!1}return e.prototype.render=function(){return Object(t.i)("amplify-form-field",{fieldId:this.fieldId,label:i.a.get(this.label),placeholder:i.a.get(this.placeholder),type:"email",required:this.required,handleInputChange:this.handleInputChange,value:this.value,inputProps:this.inputProps,disabled:this.disabled})},e}(),p=function(){function e(e){Object(t.k)(this,e),this.submitButtonText="Submit",this.testDataPrefix="form-section",this.loading=!1,this.secondaryFooterContent=null}return e.prototype.handleFormSubmit=function(e){this.handleSubmit(e.detail)},e.prototype.render=function(){return Object(t.i)("form",{onSubmit:this.handleSubmit},Object(t.i)("amplify-section",null,Object(t.i)("div",null,Object(t.i)("slot",{name:"amplify-form-section-header"},Object(t.i)("div",{class:"form-section-header"},Object(t.i)("h3",{class:"header","data-test":this.testDataPrefix+"-header-section"},this.headerText),Object(t.i)("div",{class:"subtitle"},Object(t.i)("slot",{name:"subtitle"}))))),Object(t.i)("slot",null),Object(t.i)("div",null,Object(t.i)("slot",{name:"amplify-form-section-footer"},Object(t.i)("div",{class:"form-section-footer"},Object(t.i)("amplify-button",{type:"submit","data-test":this.testDataPrefix+"-"+this.testDataPrefix+"-button"},this.loading?Object(t.i)("amplify-loading-spinner",null):Object(t.i)("span",null,this.submitButtonText)),this.secondaryFooterContent)))))},e}();p.style=":host{--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-md-sub);--subtitle-size:var(--amplify-grey);--subtitle-color:var(--amplify-grey);--footer-color:var(--amplify-grey);--footer-size:var(--amplify-text-sm);--font-family:var(--amplify-font-family);--font-weight:var(--amplify-font-weight)}.form-section-header{margin:1rem 0 1.5rem 0}.form-section-header .header{color:var(--header-color);font-size:var(--header-size);font-weight:700;margin-bottom:0.75rem}.form-section-header .subtitle{font-weight:400;font-size:var(--amplify-text-sm);color:var(--subtitle-color)}.form-section-footer{font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--footer-size);color:var(--footer-color);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:distribute;justify-content:space-around}@media (min-width: 672px){.form-section-footer{display:-ms-flexbox;display:flex;-ms-flex-direction:row-reverse;flex-direction:row-reverse;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:baseline;align-items:baseline}}.form-section-footer *+*{margin-top:15px}";var h=function(){function e(e){Object(t.k)(this,e),this.fieldId=u.u,this.label=r.a.PASSWORD_LABEL,this.placeholder=r.a.PASSWORD_PLACEHOLDER,this.required=!1}return e.prototype.render=function(){return Object(t.i)("amplify-form-field",{type:"password",fieldId:this.fieldId,label:i.a.get(this.label),placeholder:i.a.get(this.placeholder),hint:this.hint,required:this.required,handleInputChange:this.handleInputChange,value:this.value,inputProps:this.inputProps,disabled:this.disabled})},e}(),E=function(){function e(e){Object(t.k)(this,e),this.fieldId=u.k,this.label=r.a.PHONE_LABEL,this.placeholder=r.a.PHONE_PLACEHOLDER,this.required=!1}return e.prototype.render=function(){return Object(t.i)("div",null,Object(t.i)("amplify-form-field",{label:i.a.get(this.label),hint:this.hint,required:this.required},Object(t.i)("div",{class:"phone-field",slot:"input"},Object(t.i)("amplify-country-dial-code",{dialCode:this.dialCode,handleInputChange:this.handleInputChange}),Object(t.i)("amplify-input",{fieldId:this.fieldId,type:"tel",handleInputChange:this.handleInputChange,placeholder:i.a.get(this.placeholder),name:this.fieldId,value:this.value,inputProps:this.inputProps,disabled:this.disabled}))))},e}();E.style=".phone-field{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:start;align-items:flex-start;width:100%}.phone-field input{border-left:none;border-radius:0 3px 3px 0}";var v=[{label:"",value:1}],_=new n.a("amplify-select"),m=function(){function e(e){Object(t.k)(this,e),this.options=v}return e.prototype.componentWillLoad=function(){this.selectOptions=this.contructSelectOptions(this.options)},e.prototype.handleSelectOptionsChange=function(){this.selectOptions=this.contructSelectOptions(this.options)},e.prototype.isSelectedOptionValid=function(e){return!(e&&!this.options.some(function(l){return l.value===e}))||(_.warn("Selected option does not exist in options values, falling back to initial option"),!1)},e.prototype.contructSelectOptions=function(e){var l=this;this.isSelectedOptionValid(this.selected);var a=[];return e.forEach(function(e){a.push(Object(t.i)("option",{value:e.value,selected:e.value===l.selected},e.label))}),a},e.prototype.render=function(){return Object(t.i)("select",{name:this.fieldId,id:this.fieldId,class:"select",onChange:this.handleInputChange},this.selectOptions)},Object.defineProperty(e,"watchers",{get:function(){return{options:["handleSelectOptionsChange"],selected:["handleSelectOptionsChange"]}},enumerable:!1,configurable:!0}),e}();m.style=":host{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-focus:var(--amplify-primary-color);--background-image:linear-gradient(45deg, transparent 50%, gray 50%),\n    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc)}.select{padding:1rem 1.75rem 1rem 1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);border:1px solid var(--border-color);border-radius:3px 0 0 3px;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;-ms-flex-preferred-size:auto;flex-basis:auto;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:0;height:3.125rem;background-image:var(--background-image);background-position:calc(100% - 1rem) calc(1em + 0.5rem), calc(100% - 0.7rem) calc(1em + 0.5rem), calc(100% - 2.5em) 0.5em;background-size:6px 5px, 6px 5px, 0px 1.5em;background-repeat:no-repeat}.select :focus{outline:none;border-color:var(--border-focus)}";var O=function(){function e(e){Object(t.k)(this,e),this.fieldId=u.v,this.label=r.a.USERNAME_LABEL,this.placeholder=r.a.USERNAME_PLACEHOLDER,this.required=!1}return e.prototype.render=function(){return Object(t.i)("amplify-form-field",{fieldId:this.fieldId,label:i.a.get(this.label),placeholder:i.a.get(this.placeholder),required:this.required,handleInputChange:this.handleInputChange,value:this.value,inputProps:this.inputProps,disabled:this.disabled})},e}()},895:function(e,l,a){"use strict";a.d(l,"a",function(){return C}),a.d(l,"b",function(){return o}),a.d(l,"c",function(){return i}),a.d(l,"d",function(){return p}),a.d(l,"e",function(){return f}),a.d(l,"f",function(){return c}),a.d(l,"g",function(){return v}),a.d(l,"h",function(){return g}),a.d(l,"i",function(){return L}),a.d(l,"j",function(){return A}),a.d(l,"k",function(){return r}),a.d(l,"l",function(){return b}),a.d(l,"m",function(){return E}),a.d(l,"n",function(){return h}),a.d(l,"o",function(){return _}),a.d(l,"p",function(){return m}),a.d(l,"q",function(){return s}),a.d(l,"r",function(){return O}),a.d(l,"s",function(){return d}),a.d(l,"t",function(){return n}),a.d(l,"u",function(){return u}),a.d(l,"v",function(){return t});var t="username",i="email",n="code",r="phone",u="password",o="country-dial-code-select",s="+1",d="amplify-auth-source",c="amplify-redirected-from-hosted-ui",b="amplify-authenticator-authState",f="Phone number can not be empty",p="No Auth module found, please ensure @aws-amplify/auth is imported",h="No Storage module found, please ensure @aws-amplify/storage is imported",E="No Interactions module found, please ensure @aws-amplify/interactions is imported",v="SETUP_TOTP",_="User has not set up software token mfa",m="User has not verified software token mfa",O="SUCCESS",C="auth",L="UI Auth",g="ToastAuthError",A="AuthStateChange"},896:function(e,l,a){"use strict";a.d(l,"a",function(){return r});var t,i,n=a(46);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two mfa types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancilliary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(t||(t={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(i||(i={}));var r=Object.assign(Object.assign(Object.assign({},t),n.a),i)},899:function(e,l,a){"use strict";var t=a(89),i=new t.a("I18n"),n=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),i.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,l){if(void 0===l&&(l=void 0),!this._lang)return"undefined"!==typeof l?l:e;var a=this._lang,t=this.getByLanguage(e,a);return t||(a.indexOf("-")>0&&(t=this.getByLanguage(e,a.split("-")[0])),t||("undefined"!==typeof l?l:e))},e.prototype.getByLanguage=function(e,l,a){if(void 0===a&&(a=null),!l)return a;var t=this._dict[l];return t?t[e]:a},e.prototype.putVocabulariesForLanguage=function(e,l){var a=this._dict[e];a||(a=this._dict[e]={}),Object.assign(a,l)},e.prototype.putVocabularies=function(e){var l=this;Object.keys(e).map(function(a){l.putVocabulariesForLanguage(a,e[a])})},e}(),r=a(55);a.d(l,"a",function(){return d});var u=new t.a("I18n"),o=null,s=null,d=function(){function e(){}return e.configure=function(l){return u.debug("configure I18n"),l?(o=Object.assign({},o,l.I18n||l),e.createInstance(),o):o},e.getModuleName=function(){return"I18n"},e.createInstance=function(){u.debug("create I18n instance"),s||(s=new n(o))},e.setLanguage=function(l){return e.checkConfig(),s.setLanguage(l)},e.get=function(l,a){return e.checkConfig()?s.get(l,a):"undefined"===typeof a?l:a},e.putVocabulariesForLanguage=function(l,a){return e.checkConfig(),s.putVocabulariesForLanguage(l,a)},e.putVocabularies=function(l){return e.checkConfig(),s.putVocabularies(l)},e.checkConfig=function(){return s||(s=new n(o)),!0},e}();r.a.register(d)}}]);
//# sourceMappingURL=16.8d958cd0.chunk.js.map