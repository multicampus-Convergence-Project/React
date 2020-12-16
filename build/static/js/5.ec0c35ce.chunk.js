(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{246:function(e,t,n){"use strict";var r=n(420);n(61);t.a=r.a},845:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_amazon_button",function(){return _}),n.d(t,"amplify_auth0_button",function(){return g}),n.d(t,"amplify_facebook_button",function(){return p}),n.d(t,"amplify_google_button",function(){return I}),n.d(t,"amplify_oauth_button",function(){return S});var r=n(22),i=n(89),a=n(899),o=n(897),u=n(420),c=n(896),s=n(895),E=n(898),l=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,u)}c((r=r.apply(e,t||[])).next())})},d=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(u){a=[6,u],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},f=new i.a("amplify-amazon-button"),_=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleAuthStateChange=E.d,this.federatedSignIn=function(e){var n=e.access_token,r=e.expires_in;if(n){if(!u.a||"function"!==typeof u.a.federatedSignIn||"function"!==typeof u.a.currentAuthenticatedUser)throw new Error(s.d);var i=1e3*r+(new Date).getTime();window.amazon.Login.retrieveProfile(function(e){return l(t,void 0,void 0,function(){var t,r;return d(this,function(a){switch(a.label){case 0:return e.success?(t={name:e.profile.Name,email:e.profile.PrimaryEmail},[4,u.a.federatedSignIn("amazon",{token:n,expires_at:i},t)]):[2,f.debug("Get user Info failed")];case 1:return a.sent(),[4,u.a.currentAuthenticatedUser()];case 2:return r=a.sent(),this.handleAuthStateChange(o.a.SignedIn,r),[2]}})})})}}}return e.prototype.signInWithAmazon=function(e){var t=this;e.preventDefault(),window.amazon.Login.setClientId(this.clientId),window.amazon.Login.authorize({scope:"profile"},function(e){if(e.error)return f.debug("Failed to login with amazon: "+e.error);try{window.localStorage.setItem(s.s,JSON.stringify({provider:"amazon"}))}catch(n){f.debug("Failed to cache auth source into localStorage",n)}t.federatedSignIn(e)})},e.prototype.render=function(){var e=this;return Object(r.i)("amplify-sign-in-button",{onClick:function(t){return e.signInWithAmazon(t)},provider:"amazon"},Object(r.i)("script",{src:"https://assets.loginwithamazon.com/sdk/na/login1.js"}),a.a.get(c.a.SIGN_IN_WITH_AMAZON))},e}(),h=new i.a("amplify-auth0-button"),g=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleAuthStateChange=E.d,this.handleLoad=function(){var e=u.a.configure().oauth,n=void 0===e?{}:e,r=t.config,i=void 0===r?n.auth0:r;i?(h.debug("auth0 configuration",i),t._auth0||(t._auth0=new window.auth0.WebAuth(i)),t._auth0.parseHash(function(e,n){if(e)h.debug("Failed to parse the url for Auth0",e);else if(n){var r={provider:"auth0",opts:{returnTo:i.returnTo,clientID:i.clientID,federated:i.federated}};try{localStorage.setItem(s.s,JSON.stringify(r))}catch(a){h.debug("Failed to cache auth source into localStorage",a)}t._auth0.client.userInfo(n.accessToken,function(e,r){return l(t,void 0,void 0,function(){var t,a,c;return d(this,function(s){switch(s.label){case 0:return t=void 0,a=void 0,e?h.debug("Failed to get the user info",e):(t=r.name,a=r.email),[4,u.a.federatedSignIn(i.domain,{token:n.idToken,expires_at:1e3*n.expiresIn+(new Date).getTime()},{name:t,email:a})];case 1:return s.sent(),[4,u.a.currentAuthenticatedUser()];case 2:return c=s.sent(),this.handleAuthStateChange(o.a.SignedIn,c),[2]}})})})}else h.debug("Auth0 found no authResult in hash")})):h.debug("Auth0 is not configured")}}return e.prototype.signInWithAuth0=function(e){if(e.preventDefault(),!this._auth0)throw new Error("the auth0 client is not configured");this._auth0.authorize()},e.prototype.render=function(){var e=this;return Object(r.i)("amplify-sign-in-button",{onClick:function(t){return e.signInWithAuth0(t)},provider:"auth0"},Object(r.i)("script",{onLoad:this.handleLoad,src:"https://cdn.auth0.com/js/auth0/9.11/auth0.min.js"}),a.a.get(c.a.SIGN_IN_WITH_AUTH0))},e}(),A=new i.a("amplify-facebook-button"),p=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleAuthStateChange=E.d,this.federatedSignIn=function(e){var n=e.accessToken,r=e.expiresIn;if(n){if(!u.a||"function"!==typeof u.a.federatedSignIn||"function"!==typeof u.a.currentAuthenticatedUser)throw new Error(s.d);var i=1e3*r+(new Date).getTime();window.FB.api("/me",{fields:"name,email"},function(e){return l(t,void 0,void 0,function(){var t,r;return d(this,function(a){switch(a.label){case 0:return t={name:e.name,email:e.email},[4,u.a.federatedSignIn("facebook",{token:n,expires_at:i},t)];case 1:return a.sent(),[4,u.a.currentAuthenticatedUser()];case 2:return r=a.sent(),this.handleAuthStateChange(o.a.SignedIn,r),[2]}})})})}},this.getLoginStatus=function(){window.FB.getLoginStatus(function(e){try{window.localStorage.setItem(s.s,JSON.stringify({provider:"facebook"}))}catch(n){A.debug("Failed to cache auth source into localStorage",n)}if("connected"===e.status)return t.federatedSignIn(e.authResponse);t.login()})},this.login=function(){window.FB.login(function(e){e&&e.authResponse&&t.federatedSignIn(e.authResponse)},{scope:"public_profile,email"})}}return e.prototype.signInWithFacebook=function(e){e.preventDefault(),window.FB.init({appId:this.appId,cookie:!0,xfbml:!1,version:"v5.0"}),this.getLoginStatus()},e.prototype.render=function(){var e=this;return Object(r.i)("amplify-sign-in-button",{onClick:function(t){return e.signInWithFacebook(t)},provider:"facebook"},Object(r.i)("script",{async:!0,defer:!0,src:"https://connect.facebook.net/en_US/sdk.js"}),a.a.get(c.a.SIGN_IN_WITH_FACEBOOK))},e}(),L=new i.a("amplify-google-button"),I=function(){function e(e){var t=this;Object(r.k)(this,e),this.handleAuthStateChange=E.d,this.handleError=function(e){console.error(e)},this.handleLoad=function(){window.gapi.load("auth2")},this.handleUser=function(e){return l(t,void 0,void 0,function(){var t,n,r,i,a;return d(this,function(c){switch(c.label){case 0:if(!u.a||"function"!==typeof u.a.federatedSignIn||"function"!==typeof u.a.currentAuthenticatedUser)throw new Error(s.d);try{window.localStorage.setItem(s.s,JSON.stringify({provider:"google"}))}catch(E){L.debug("Failed to cache auth source into localStorage",E)}return t=e.getAuthResponse(),n=t.id_token,r=t.expires_at,i=e.getBasicProfile(),[4,u.a.federatedSignIn("google",{token:n,expires_at:r},{email:i.getEmail(),name:i.getName(),picture:i.getImageUrl()})];case 1:return c.sent(),[4,u.a.currentAuthenticatedUser()];case 2:a=c.sent();try{this.handleAuthStateChange(o.a.SignedIn,a)}catch(l){this.handleError(l)}return[2]}})})}}return e.prototype.getAuthInstance=function(){return window.gapi&&window.gapi.auth2?window.gapi.auth2.getAuthInstance()||window.gapi.auth2.init({client_id:this.clientId,cookiepolicy:"single_host_origin",scope:"profile email openid"}):null},e.prototype.signInWithGoogle=function(e){e.preventDefault(),this.getAuthInstance().signIn().then(this.handleUser).catch(this.handleError)},e.prototype.render=function(){var e=this;return Object(r.i)("amplify-sign-in-button",{onClick:function(t){return e.signInWithGoogle(t)},provider:"google"},Object(r.i)("script",{onLoad:this.handleLoad,src:"https://apis.google.com/js/api:client.js"}),a.a.get(c.a.SIGN_IN_WITH_GOOGLE))},e}(),S=function(){function e(e){Object(r.k)(this,e),this.config={}}return e.prototype.signInWithOAuth=function(e){e.preventDefault(),u.a.federatedSignIn()},e.prototype.render=function(){var e=this;return Object(r.i)("amplify-sign-in-button",{onClick:function(t){return e.signInWithOAuth(t)},provider:"oauth"},this.config.label||a.a.get(c.a.SIGN_IN_WITH_AWS))},e}()},895:function(e,t,n){"use strict";n.d(t,"a",function(){return S}),n.d(t,"b",function(){return c}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return _}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return l}),n.d(t,"g",function(){return A}),n.d(t,"h",function(){return O}),n.d(t,"i",function(){return T}),n.d(t,"j",function(){return m}),n.d(t,"k",function(){return o}),n.d(t,"l",function(){return d}),n.d(t,"m",function(){return g}),n.d(t,"n",function(){return h}),n.d(t,"o",function(){return p}),n.d(t,"p",function(){return L}),n.d(t,"q",function(){return s}),n.d(t,"r",function(){return I}),n.d(t,"s",function(){return E}),n.d(t,"t",function(){return a}),n.d(t,"u",function(){return u}),n.d(t,"v",function(){return r});var r="username",i="email",a="code",o="phone",u="password",c="country-dial-code-select",s="+1",E="amplify-auth-source",l="amplify-redirected-from-hosted-ui",d="amplify-authenticator-authState",f="Phone number can not be empty",_="No Auth module found, please ensure @aws-amplify/auth is imported",h="No Storage module found, please ensure @aws-amplify/storage is imported",g="No Interactions module found, please ensure @aws-amplify/interactions is imported",A="SETUP_TOTP",p="User has not set up software token mfa",L="User has not verified software token mfa",I="SUCCESS",S="auth",T="UI Auth",O="ToastAuthError",m="AuthStateChange"},896:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r,i,a=n(46);!function(e){e.BACK_TO_SIGN_IN="Back to Sign In",e.CHANGE_PASSWORD_ACTION="Change",e.CHANGE_PASSWORD="Change Password",e.CODE_LABEL="Verification code",e.CODE_PLACEHOLDER="Enter code",e.CONFIRM_SIGN_UP_CODE_LABEL="Confirmation Code",e.CONFIRM_SIGN_UP_CODE_PLACEHOLDER="Enter your code",e.CONFIRM_SIGN_UP_HEADER_TEXT="Confirm Sign up",e.CONFIRM_SIGN_UP_LOST_CODE="Lost your code?",e.CONFIRM_SIGN_UP_RESEND_CODE="Resend Code",e.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT="Confirm",e.CONFIRM_SMS_CODE="Confirm SMS Code",e.CONFIRM_TOTP_CODE="Confirm TOTP Code",e.CONFIRM="Confirm",e.CREATE_ACCOUNT_TEXT="Create account",e.EMAIL_LABEL="Email Address *",e.EMAIL_PLACEHOLDER="Enter your email address",e.FORGOT_PASSWORD_TEXT="Forgot your password?",e.LESS_THAN_TWO_MFA_VALUES_MESSAGE="Less than two mfa types available",e.NEW_PASSWORD_LABEL="New password",e.NEW_PASSWORD_PLACEHOLDER="Enter your new password",e.NO_ACCOUNT_TEXT="No account?",e.PASSWORD_LABEL="Password *",e.PASSWORD_PLACEHOLDER="Enter your password",e.PHONE_LABEL="Phone Number *",e.PHONE_PLACEHOLDER="(555) 555-1212",e.QR_CODE_ALT="qrcode",e.RESET_PASSWORD_TEXT="Reset password",e.RESET_YOUR_PASSWORD="Reset your password",e.SELECT_MFA_TYPE_HEADER_TEXT="Select MFA Type",e.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT="Verify",e.SEND_CODE="Send Code",e.SUBMIT="Submit",e.SETUP_TOTP_REQUIRED="TOTP needs to be configured",e.SIGN_IN_ACTION="Sign In",e.SIGN_IN_HEADER_TEXT="Sign in to your account",e.SIGN_IN_TEXT="Sign in",e.SIGN_IN_WITH_AMAZON="Sign in with Amazon",e.SIGN_IN_WITH_AUTH0="Sign in with Auth0",e.SIGN_IN_WITH_AWS="Sign in with AWS",e.SIGN_IN_WITH_FACEBOOK="Sign in with Facebook",e.SIGN_IN_WITH_GOOGLE="Sign in with Google",e.SIGN_OUT="Sign Out",e.SIGN_UP_EMAIL_PLACEHOLDER="Email",e.SIGN_UP_HAVE_ACCOUNT_TEXT="Have an account?",e.SIGN_UP_HEADER_TEXT="Create a new account",e.SIGN_UP_PASSWORD_PLACEHOLDER="Password",e.SIGN_UP_SUBMIT_BUTTON_TEXT="Create Account",e.SIGN_UP_USERNAME_PLACEHOLDER="Username",e.SUCCESS_MFA_TYPE="Success! Your MFA Type is now:",e.TOTP_HEADER_TEXT="Scan then enter verification code",e.TOTP_LABEL="Enter Security Code:",e.TOTP_ISSUER="AWSCognito",e.TOTP_SETUP_FAILURE="TOTP Setup has failed",e.TOTP_SUBMIT_BUTTON_TEXT="Verify Security Token",e.TOTP_SUCCESS_MESSAGE="Setup TOTP successfully!",e.UNABLE_TO_SETUP_MFA_AT_THIS_TIME="Failed! Unable to configure MFA at this time",e.USERNAME_LABEL="Username *",e.USERNAME_PLACEHOLDER="Enter your username",e.VERIFY_CONTACT_EMAIL_LABEL="Email",e.VERIFY_CONTACT_HEADER_TEXT="Account recovery requires verified contact information",e.VERIFY_CONTACT_PHONE_LABEL="Phone Number",e.VERIFY_CONTACT_SUBMIT_LABEL="Submit",e.VERIFY_CONTACT_VERIFY_LABEL="Verify",e.ADDRESS_LABEL="Address",e.ADDRESS_PLACEHOLDER="Enter your address",e.NICKNAME_LABEL="Nickname",e.NICKNAME_PLACEHOLDER="Enter your nickname",e.BIRTHDATE_LABEL="Birthday",e.BIRTHDATE_PLACEHOLDER="Enter your birthday",e.PICTURE_LABEL="Picture URL",e.PICTURE_PLACEHOLDER="Enter your picture URL",e.FAMILY_NAME_LABEL="Family Name",e.FAMILY_NAME_PLACEHOLDER="Enter your family name",e.PREFERRED_USERNAME_LABEL="Preferred Username",e.PREFERRED_USERNAME_PLACEHOLDER="Enter your preferred username",e.GENDER_LABEL="Gender",e.GENDER_PLACEHOLDER="Enter your gender",e.PROFILE_LABEL="Profile URL",e.PROFILE_PLACEHOLDER="Enter your profile URL",e.GIVEN_NAME_LABEL="First Name",e.GIVEN_NAME_PLACEHOLDER="Enter your first name",e.ZONEINFO_LABEL="Time zone",e.ZONEINFO_PLACEHOLDER="Enter your time zone",e.LOCALE_LABEL="Locale",e.LOCALE_PLACEHOLDER="Enter your locale",e.UPDATED_AT_LABEL="Updated At",e.UPDATED_AT_PLACEHOLDER="Enter the time the information was last updated",e.MIDDLE_NAME_LABEL="Middle Name",e.MIDDLE_NAME_PLACEHOLDER="Enter your middle name",e.WEBSITE_LABEL="Website",e.WEBSITE_PLACEHOLDER="Enter your website",e.NAME_LABEL="Full Name",e.NAME_PLACEHOLDER="Enter your full name",e.PHOTO_PICKER_TITLE="Picker Title",e.PHOTO_PICKER_HINT="Ancilliary text or content may occupy this space here",e.PHOTO_PICKER_PLACEHOLDER_HINT="Placeholder hint",e.PHOTO_PICKER_BUTTON_TEXT="Button",e.IMAGE_PICKER_TITLE="Add Profile Photo",e.IMAGE_PICKER_HINT="Preview the image before upload",e.IMAGE_PICKER_PLACEHOLDER_HINT="Tap to image select",e.IMAGE_PICKER_BUTTON_TEXT="Upload",e.PICKER_TEXT="Pick a file",e.TEXT_FALLBACK_CONTENT="Fallback Content",e.CONFIRM_SIGN_UP_FAILED="Confirm Sign Up Failed",e.SIGN_UP_FAILED="Sign Up Failed"}(r||(r={})),function(e){e.CHATBOT_TITLE="ChatBot Lex",e.TEXT_INPUT_PLACEHOLDER="Write a message",e.VOICE_INPUT_PLACEHOLDER="Click mic to speak",e.CHAT_DISABLED_ERROR="Error: Either voice or text must be enabled for the chatbot",e.NO_BOT_NAME_ERROR="Error: Bot name must be provided to ChatBot"}(i||(i={}));var o=Object.assign(Object.assign(Object.assign({},r),a.a),i)},897:function(e,t,n){"use strict";var r,i,a,o,u;n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return i}),n.d(t,"d",function(){return u}),n.d(t,"e",function(){return o}),function(e){e.SignUp="signup",e.SignOut="signout",e.SignIn="signin",e.Loading="loading",e.SignedOut="signedout",e.SignedIn="signedin",e.SigningUp="signingup",e.ConfirmSignUp="confirmSignUp",e.confirmingSignUpCustomFlow="confirmsignupcustomflow",e.ConfirmSignIn="confirmSignIn",e.confirmingSignInCustomFlow="confirmingsignincustomflow",e.VerifyingAttributes="verifyingattributes",e.ForgotPassword="forgotpassword",e.ResetPassword="resettingpassword",e.SettingMFA="settingMFA",e.TOTPSetup="TOTPSetup",e.CustomConfirmSignIn="customConfirmSignIn",e.VerifyContact="verifyContact"}(r||(r={})),function(e){e.TOTP="TOTP",e.SMS="SMS",e.NOMFA="NOMFA"}(i||(i={})),function(e){e.SoftwareTokenMFA="SOFTWARE_TOKEN_MFA",e.SMSMFA="SMS_MFA",e.NewPasswordRequired="NEW_PASSWORD_REQUIRED",e.MFASetup="MFA_SETUP",e.CustomChallenge="CUSTOM_CHALLENGE"}(a||(a={})),function(e){e.Password="password"}(o||(o={})),function(e){e.username="username",e.email="email",e.phone_number="phone_number"}(u||(u={}))},898:function(e,t,n){"use strict";n.d(t,"a",function(){return _}),n.d(t,"b",function(){return g}),n.d(t,"c",function(){return A}),n.d(t,"d",function(){return h}),n.d(t,"e",function(){return f}),n.d(t,"f",function(){return S}),n.d(t,"g",function(){return L}),n.d(t,"h",function(){return p}),n.d(t,"i",function(){return I});var r=n(89),i=n(877),a=n(899),o=n(897),u=n(246),c=n(896),s=n(895),E=function(e,t,n,r){return new(n||(n=Promise))(function(i,a){function o(e){try{c(r.next(e))}catch(t){a(t)}}function u(e){try{c(r.throw(e))}catch(t){a(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,u)}c((r=r.apply(e,t||[])).next())})},l=function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function u(a){return function(u){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,r=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(u){a=[6,u],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}},d=new r.a("helpers"),f=function(e){return!!e.shadowRoot&&!!e.attachShadow},_=function(e){i.a.dispatch(s.i,{event:s.h,message:a.a.get(e.message)})},h=function(e,t){i.a.dispatch(s.i,{event:s.j,message:e,data:t})},g=function(e){if(!e.phoneNumberValue)throw new Error(s.e);var t=e.phoneNumberValue.replace(/[-()\s]/g,"");return""+e.countryDialCodeValue+t},A=function(e){if(!(e in o.d))throw new Error("Invalid username Alias - "+e+". Instead use "+Object.values(o.d))},p=function(e){var t=function(t){return E(void 0,void 0,void 0,function(){var n,r;return l(this,function(i){switch(i.label){case 0:switch(n=t.payload,n.event){case s.j:return[3,1]}return[3,8];case 1:if(!n.message)return[3,7];if(n.message!==o.a.SignedIn)return[3,6];i.label=2;case 2:return i.trys.push([2,4,,5]),[4,u.a.currentAuthenticatedUser()];case 3:return r=i.sent(),e(n.message,r),[3,5];case 4:return i.sent(),d.error("User is not authenticated"),[3,5];case 5:return[3,7];case 6:e(n.message,n.data),i.label=7;case 7:return[3,8];case 8:return[2]}})})};return i.a.listen(s.i,t),function(){return i.a.remove(s.i,t)}},L=function(e){return!(null===e.hint||"string"===typeof e.hint)},I={address:{label:a.a.get(c.a.ADDRESS_LABEL),placeholder:a.a.get(c.a.ADDRESS_PLACEHOLDER)},nickname:{label:a.a.get(c.a.NICKNAME_LABEL),placeholder:a.a.get(c.a.NICKNAME_PLACEHOLDER)},birthdate:{label:a.a.get(c.a.BIRTHDATE_LABEL),placeholder:a.a.get(c.a.BIRTHDATE_PLACEHOLDER)},phone_number:{label:a.a.get(c.a.PHONE_LABEL),placeholder:a.a.get(c.a.PHONE_PLACEHOLDER)},email:{lable:a.a.get(c.a.EMAIL_LABEL),placeholder:a.a.get(c.a.EMAIL_PLACEHOLDER)},picture:{label:a.a.get(c.a.PICTURE_LABEL),placeholder:a.a.get(c.a.PICTURE_PLACEHOLDER)},family_name:{label:a.a.get(c.a.FAMILY_NAME_LABEL),placeholder:a.a.get(c.a.FAMILY_NAME_PLACEHOLDER)},preferred_username:{label:a.a.get(c.a.PREFERRED_USERNAME_LABEL),placeholder:a.a.get(c.a.PREFERRED_USERNAME_PLACEHOLDER)},gender:{label:a.a.get(c.a.GENDER_LABEL),placeholder:a.a.get(c.a.GENDER_PLACEHOLDER)},profile:{label:a.a.get(c.a.PROFILE_LABEL),placeholder:a.a.get(c.a.PROFILE_PLACEHOLDER)},given_name:{label:a.a.get(c.a.GIVEN_NAME_LABEL),placeholder:a.a.get(c.a.GIVEN_NAME_LABEL)},zoneinfo:{label:a.a.get(c.a.ZONEINFO_LABEL),placeholder:a.a.get(c.a.ZONEINFO_PLACEHOLDER)},locale:{label:a.a.get(c.a.LOCALE_LABEL),placeholder:a.a.get(c.a.LOCALE_PLACEHOLDER)},updated_at:{label:a.a.get(c.a.UPDATED_AT_LABEL),placeholder:a.a.get(c.a.UPDATED_AT_PLACEHOLDER)},middle_name:{label:a.a.get(c.a.MIDDLE_NAME_LABEL),placeholder:a.a.get(c.a.MIDDLE_NAME_PLACEHOLDER)},website:{label:a.a.get(c.a.WEBSITE_LABEL),placeholder:a.a.get(c.a.WEBSITE_PLACEHOLDER)},name:{label:a.a.get(c.a.NAME_LABEL),placeholder:a.a.get(c.a.NAME_PLACEHOLDER)}};function S(e,t){var n=e.target.name,r=e.target.value;n===s.b&&(t.countryDialCodeValue=r),n===s.k&&(t.phoneNumberValue=r)}},899:function(e,t,n){"use strict";var r=n(89),i=new r.a("I18n"),a=function(){function e(e){this._options=null,this._lang=null,this._dict={},this._options=Object.assign({},e),this._lang=this._options.language,!this._lang&&"undefined"!==typeof window&&window&&window.navigator&&(this._lang=window.navigator.language),i.debug(this._lang)}return e.prototype.setLanguage=function(e){this._lang=e},e.prototype.get=function(e,t){if(void 0===t&&(t=void 0),!this._lang)return"undefined"!==typeof t?t:e;var n=this._lang,r=this.getByLanguage(e,n);return r||(n.indexOf("-")>0&&(r=this.getByLanguage(e,n.split("-")[0])),r||("undefined"!==typeof t?t:e))},e.prototype.getByLanguage=function(e,t,n){if(void 0===n&&(n=null),!t)return n;var r=this._dict[t];return r?r[e]:n},e.prototype.putVocabulariesForLanguage=function(e,t){var n=this._dict[e];n||(n=this._dict[e]={}),Object.assign(n,t)},e.prototype.putVocabularies=function(e){var t=this;Object.keys(e).map(function(n){t.putVocabulariesForLanguage(n,e[n])})},e}(),o=n(55);n.d(t,"a",function(){return E});var u=new r.a("I18n"),c=null,s=null,E=function(){function e(){}return e.configure=function(t){return u.debug("configure I18n"),t?(c=Object.assign({},c,t.I18n||t),e.createInstance(),c):c},e.getModuleName=function(){return"I18n"},e.createInstance=function(){u.debug("create I18n instance"),s||(s=new a(c))},e.setLanguage=function(t){return e.checkConfig(),s.setLanguage(t)},e.get=function(t,n){return e.checkConfig()?s.get(t,n):"undefined"===typeof n?t:n},e.putVocabulariesForLanguage=function(t,n){return e.checkConfig(),s.putVocabulariesForLanguage(t,n)},e.putVocabularies=function(t){return e.checkConfig(),s.putVocabularies(t)},e.checkConfig=function(){return s||(s=new a(c)),!0},e}();o.a.register(E)}}]);
//# sourceMappingURL=5.ec0c35ce.chunk.js.map