! function(t, e) { "object" == typeof exports && "undefined" != typeof module ? e(require("@firebase/app")) : "function" == typeof define && define.amd ? define(["@firebase/app"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).firebase) }(this, function(e) { "use strict"; try {
        (function() {
            function t(t) { return t && "object" == typeof t && "default" in t ? t : { default: t } } var Yl = t(e);
            (function() { var t, o = "function" == typeof Object.defineProperties ? Object.defineProperty : function(t, e, n) { t != Array.prototype && t != Object.prototype && (t[e] = n.value) }; var u = function(t) { t = ["object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global, t]; for (var e = 0; e < t.length; ++e) { var n = t[e]; if (n && n.Math == Math) return n } return globalThis }(this);

                function c(t) { var e, n, i = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator]; return i ? i.call(t) : { next: (e = t, n = 0, function() { return n < e.length ? { done: !1, value: e[n++] } : { done: !0 } }) } }! function(t, e) { if (e) { var n = u;
                        t = t.split("."); for (var i = 0; i < t.length - 1; i++) { var r = t[i];
                            r in n || (n[r] = {}), n = n[r] }(e = e(i = n[t = t[t.length - 1]])) != i && null != e && o(n, t, { configurable: !0, writable: !0, value: e }) } }("Promise", function(t) {
                    function a(t) { this.b = 0, this.c = void 0, this.a = []; var e = this.f(); try { t(e.resolve, e.reject) } catch (t) { e.reject(t) } }

                    function e() { this.a = null }

                    function s(e) { return e instanceof a ? e : new a(function(t) { t(e) }) } if (t) return t;
                    e.prototype.b = function(t) { var e;
                        null == this.a && (this.a = [], (e = this).c(function() { e.g() })), this.a.push(t) }; var n = u.setTimeout;
                    e.prototype.c = function(t) { n(t, 0) }, e.prototype.g = function() { for (; this.a && this.a.length;) { var t = this.a;
                            this.a = []; for (var e = 0; e < t.length; ++e) { var n = t[e];
                                t[e] = null; try { n() } catch (t) { this.f(t) } } }
                        this.a = null }, e.prototype.f = function(t) { this.c(function() { throw t }) }, a.prototype.f = function() {
                        function t(e) { return function(t) { i || (i = !0, e.call(n, t)) } } var n = this,
                            i = !1; return { resolve: t(this.v), reject: t(this.g) } }, a.prototype.v = function(t) { if (t === this) this.g(new TypeError("A Promise cannot resolve to itself"));
                        else if (t instanceof a) this.o(t);
                        else { t: switch (typeof t) {
                                case "object":
                                    var e = null != t; break t;
                                case "function":
                                    e = !0; break t;
                                default:
                                    e = !1 }
                            e ? this.m(t) : this.h(t) } }, a.prototype.m = function(t) { var e = void 0; try { e = t.then } catch (t) { return void this.g(t) } "function" == typeof e ? this.u(e, t) : this.h(t) }, a.prototype.g = function(t) { this.i(2, t) }, a.prototype.h = function(t) { this.i(1, t) }, a.prototype.i = function(t, e) { if (0 != this.b) throw Error("Cannot settle(" + t + ", " + e + "): Promise already settled in state" + this.b);
                        this.b = t, this.c = e, this.l() }, a.prototype.l = function() { if (null != this.a) { for (var t = 0; t < this.a.length; ++t) r.b(this.a[t]);
                            this.a = null } }; var r = new e; return a.prototype.o = function(t) { var e = this.f();
                        t.Pa(e.resolve, e.reject) }, a.prototype.u = function(t, e) { var n = this.f(); try { t.call(e, n.resolve, n.reject) } catch (t) { n.reject(t) } }, a.prototype.then = function(t, e) {
                        function n(e, t) { return "function" == typeof e ? function(t) { try { i(e(t)) } catch (t) { r(t) } } : t } var i, r, o = new a(function(t, e) { i = t, r = e }); return this.Pa(n(t, i), n(e, r)), o }, a.prototype.catch = function(t) { return this.then(void 0, t) }, a.prototype.Pa = function(t, e) {
                        function n() { switch (i.b) {
                                case 1:
                                    t(i.c); break;
                                case 2:
                                    e(i.c); break;
                                default:
                                    throw Error("Unexpected state: " + i.b) } } var i = this;
                        null == this.a ? r.b(n) : this.a.push(n) }, a.resolve = s, a.reject = function(n) { return new a(function(t, e) { e(n) }) }, a.race = function(r) { return new a(function(t, e) { for (var n = c(r), i = n.next(); !i.done; i = n.next()) s(i.value).Pa(t, e) }) }, a.all = function(t) { var e = c(t),
                            o = e.next(); return o.done ? s([]) : new a(function(n, t) { for (var i = [], r = 0; i.push(void 0), r++, s(o.value).Pa(function(e) { return function(t) { i[e] = t, 0 == --r && n(i) } }(i.length - 1), t), !(o = e.next()).done;); }) }, a }); var h = h || {},
                    l = this || self,
                    s = /^[\w+/_-]+[=]{0,2}$/,
                    f = null;

                function a() {}

                function n(t) { var e = typeof t; if ("object" == e) { if (!t) return "null"; if (t instanceof Array) return "array"; if (t instanceof Object) return e; var n = Object.prototype.toString.call(t); if ("[object Window]" == n) return "object"; if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array"; if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function" } else if ("function" == e && void 0 === t.call) return "object"; return e }

                function d(t) { var e = n(t); return "array" == e || "object" == e && "number" == typeof t.length }

                function p(t) { return "function" == n(t) }

                function v(t) { var e = typeof t; return "object" == e && null != t || "function" == e } var e = "closure_uid_" + (1e9 * Math.random() >>> 0),
                    i = 0;

                function r(t, e, n) { return t.call.apply(t.bind, arguments) }

                function m(e, n, t) { if (!e) throw Error(); if (2 < arguments.length) { var i = Array.prototype.slice.call(arguments, 2); return function() { var t = Array.prototype.slice.call(arguments); return Array.prototype.unshift.apply(t, i), e.apply(n, t) } } return function() { return e.apply(n, arguments) } }

                function g(t, e, n) { return (g = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? r : m).apply(null, arguments) }

                function b(e) { var n = Array.prototype.slice.call(arguments, 1); return function() { var t = n.slice(); return t.push.apply(t, arguments), e.apply(this, t) } } var y = Date.now || function() { return +new Date };

                function w(t, e) {
                    function n() {}
                    n.prototype = e.prototype, t.$a = e.prototype, t.prototype = new n, t.prototype.constructor = t }

                function I(t, e, n) { this.code = A + t, this.message = e || k[t] || "", this.a = n || null }

                function T(t) { var e = t && t.code; return e ? new I(e.substring(A.length), t.message, t.serverResponse) : null }
                w(I, Error), I.prototype.w = function() { var t = { code: this.code, message: this.message }; return this.a && (t.serverResponse = this.a), t }, I.prototype.toJSON = function() { return this.w() }; var E, A = "auth/",
                    k = { "admin-restricted-operation": "This operation is restricted to administrators only.", "argument-error": "", "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.", "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.", "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.", "code-expired": "The SMS code has expired. Please re-send the verification code to try again.", "cordova-not-ready": "Cordova framework is not ready.", "cors-unsupported": "This browser is not supported.", "credential-already-in-use": "This credential is already associated with a different user account.", "custom-token-mismatch": "The custom token corresponds to a different audience.", "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.", "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.", "email-change-needs-verification": "Multi-factor users must always have a verified email.", "email-already-in-use": "The email address is already in use by another account.", "expired-action-code": "The action code has expired. ", "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.", "internal-error": "An internal error has occurred.", "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.", "invalid-app-id": "The mobile app identifier is not registed for the current project.", "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.", "invalid-auth-event": "An internal error has occurred.", "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.", "invalid-continue-uri": "The continue URL provided in the request is invalid.", "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.", "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.", "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.", "invalid-email": "The email address is badly formatted.", "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.", "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.", "invalid-credential": "The supplied auth credential is malformed or has expired.", "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.", "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.", "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.", "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.", "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.", "wrong-password": "The password is invalid or the user does not have a password.", "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.", "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].", "invalid-provider-id": "The specified provider ID is invalid.", "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.", "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.", "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.", "invalid-tenant-id": "The Auth instance's tenant ID is invalid.", "multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.", "multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.", "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.", "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.", "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.", "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.", "missing-continue-uri": "A continue URL must be provided in the request.", "missing-iframe-start": "An internal error has occurred.", "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.", "missing-multi-factor-info": "No second factor identifier is provided.", "missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.", "missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.", "missing-phone-number": "To send verification codes, provide a phone number for the recipient.", "missing-verification-id": "The phone auth credential was created with an empty verification ID.", "app-deleted": "This instance of FirebaseApp has been deleted.", "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.", "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.", "no-auth-event": "An internal error has occurred.", "no-such-provider": "User was not linked to an account with the given provider.", "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.", "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.", "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.', "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.", "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.", "provider-already-linked": "User can only be linked to one identity for the given provider.", "quota-exceeded": "The project's quota for this operation has been exceeded.", "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.", "redirect-operation-pending": "A redirect sign-in operation is already pending.", "rejected-credential": "The request contains malformed or mismatching credentials.", "second-factor-already-in-use": "The second factor is already enrolled on this account.", "maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.", "tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID", timeout: "The operation has timed out.", "user-token-expired": "The user's credential is no longer valid. The user must sign in again.", "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.", "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.", "unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.", "unsupported-persistence-type": "The current environment does not support the specified persistence type.", "unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.", "unverified-email": "The operation requires a verified email.", "user-cancelled": "The user did not grant your application the permissions it requested.", "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.", "user-disabled": "The user account has been disabled by an administrator.", "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.", "user-signed-out": "", "weak-password": "The password must be 6 characters long or more.", "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled." },
                    S = { kd: { Sa: "https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token", Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/", id: "b" }, rd: { Sa: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", Ya: "https://securetoken.googleapis.com/v1/token", Va: "https://identitytoolkit.googleapis.com/v2/", id: "p" }, td: { Sa: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/", Ya: "https://staging-securetoken.sandbox.googleapis.com/v1/token", Va: "https://staging-identitytoolkit.sandbox.googleapis.com/v2/", id: "s" }, ud: { Sa: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/", Ya: "https://test-securetoken.sandbox.googleapis.com/v1/token", Va: "https://test-identitytoolkit.sandbox.googleapis.com/v2/", id: "t" } };

                function N(t) { for (var e in S)
                        if (S[e].id === t) return t = S[e], { firebaseEndpoint: t.Sa, secureTokenEndpoint: t.Ya, identityPlatformEndpoint: t.Va };
                    return null }

                function _(t) { if (t) try { return t.$goog_Thenable } catch (t) { return } }

                function O(t) { var e;
                    Error.captureStackTrace ? Error.captureStackTrace(this, O) : (e = Error().stack) && (this.stack = e), t && (this.message = String(t)) }

                function C(t, e) { for (var n = "", i = (t = t.split("%s")).length - 1, r = 0; r < i; r++) n += t[r] + (r < e.length ? e[r] : "%s");
                    O.call(this, n + t[i]) }

                function R(t) { throw new C("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1)) }

                function D(t, e) { this.c = t, this.f = e, this.b = 0, this.a = null }

                function P(t, e) { t.f(e), t.b < 100 && (t.b++, e.next = t.a, t.a = e) }

                function L() { this.b = this.a = null }
                E = N("__EID__") ? "__EID__" : void 0, w(O, Error), O.prototype.name = "CustomError", w(C, O), C.prototype.name = "AssertionError", D.prototype.get = function() { var t; return 0 < this.b ? (this.b--, t = this.a, this.a = t.next, t.next = null) : t = this.c(), t }; var x = new D(function() { return new M }, function(t) { t.reset() });

                function M() { this.next = this.b = this.a = null }
                L.prototype.add = function(t, e) { var n = x.get();
                    n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n }, M.prototype.set = function(t, e) { this.a = t, this.b = e, this.next = null }, M.prototype.reset = function() { this.next = this.b = this.a = null }; var j = Array.prototype.indexOf ? function(t, e) { return Array.prototype.indexOf.call(t, e, void 0) } : function(t, e) { if ("string" == typeof t) return "string" != typeof e || 1 != e.length ? -1 : t.indexOf(e, 0); for (var n = 0; n < t.length; n++)
                            if (n in t && t[n] === e) return n;
                        return -1 },
                    U = Array.prototype.forEach ? function(t, e, n) { Array.prototype.forEach.call(t, e, n) } : function(t, e, n) { for (var i = t.length, r = "string" == typeof t ? t.split("") : t, o = 0; o < i; o++) o in r && e.call(n, r[o], o, t) }; var V = Array.prototype.filter ? function(t, e) { return Array.prototype.filter.call(t, e, void 0) } : function(t, e) { for (var n, i = t.length, r = [], o = 0, a = "string" == typeof t ? t.split("") : t, s = 0; s < i; s++) { s in a && (n = a[s], e.call(void 0, n, s, t) && (r[o++] = n)) } return r },
                    F = Array.prototype.map ? function(t, e) { return Array.prototype.map.call(t, e, void 0) } : function(t, e) { for (var n = t.length, i = Array(n), r = "string" == typeof t ? t.split("") : t, o = 0; o < n; o++) o in r && (i[o] = e.call(void 0, r[o], o, t)); return i },
                    q = Array.prototype.some ? function(t, e) { return Array.prototype.some.call(t, e, void 0) } : function(t, e) { for (var n = t.length, i = "string" == typeof t ? t.split("") : t, r = 0; r < n; r++)
                            if (r in i && e.call(void 0, i[r], r, t)) return !0;
                        return !1 };

                function H(t, e) { return 0 <= j(t, e) }

                function K(t, e) { var n; return (n = 0 <= (e = j(t, e))) && Array.prototype.splice.call(t, e, 1), n }

                function G(n, i) {! function(t, e) { for (var n = "string" == typeof t ? t.split("") : t, i = t.length - 1; 0 <= i; --i) i in n && e.call(void 0, n[i], i, t) }(n, function(t, e) { i.call(void 0, t, e, n) && 1 == Array.prototype.splice.call(n, e, 1).length && 0 }) }

                function B() { return Array.prototype.concat.apply([], arguments) }

                function W(t) { var e = t.length; if (0 < e) { for (var n = Array(e), i = 0; i < e; i++) n[i] = t[i]; return n } return [] } var X, J = String.prototype.trim ? function(t) { return t.trim() } : function(t) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1] },
                    Y = /&/g,
                    z = /</g,
                    $ = />/g,
                    Z = /"/g,
                    Q = /'/g,
                    tt = /\x00/g,
                    et = /[\x00&<>"']/;

                function nt(t, e) { return -1 != t.indexOf(e) }

                function it(t, e) { return t < e ? -1 : e < t ? 1 : 0 }
                t: { var rt = l.navigator; if (rt) { rt = rt.userAgent; if (rt) { X = rt; break t } }
                    X = "" }

                function ot(t) { return nt(X, t) }

                function at(t, e) { for (var n in t) e.call(void 0, t[n], n, t) }

                function st(t) { for (var e in t) return; return 1 }

                function ut(t) { var e, n = {}; for (e in t) n[e] = t[e]; return n } var ct = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

                function ht(t) { for (var e, n, i = 1; i < arguments.length; i++) { for (e in n = arguments[i]) t[e] = n[e]; for (var r = 0; r < ct.length; r++) e = ct[r], Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]) } }

                function lt(t, e) { t: { try { var n = t && t.ownerDocument,
                                n = n && (n.defaultView || n.parentWindow); if ((n = n || l).Element && n.Location) { var i = n; break t } } catch (t) {}
                        i = null } if (i && void 0 !== i[e] && (!t || !(t instanceof i[e]) && (t instanceof i.Location || t instanceof i.Element))) { if (v(t)) try { var r = t.constructor.displayName || t.constructor.name || Object.prototype.toString.call(t) } catch (t) { r = "<object could not be stringified>" } else r = void 0 === t ? "undefined" : null === t ? "null" : typeof t;
                        R("Argument is not a %s (or a non-Element, non-Location mock); got: %s", e, r) } }

                function ft(t, e) { this.a = t === vt && e || "", this.b = pt }

                function dt(t) { return t instanceof ft && t.constructor === ft && t.b === pt ? t.a : (R("expected object of type Const, got '" + t + "'"), "type_error:Const") }
                ft.prototype.sa = !0, ft.prototype.ra = function() { return this.a }, ft.prototype.toString = function() { return "Const{" + this.a + "}" }; var pt = {},
                    vt = {},
                    mt = new ft(vt, "");

                function gt(t, e) { this.a = t === Et && e || "", this.b = Tt }

                function bt(t) { return t instanceof gt && t.constructor === gt && t.b === Tt ? t.a : (R("expected object of type TrustedResourceUrl, got '" + t + "' of type " + n(t)), "type_error:TrustedResourceUrl") }

                function yt(t, n) { var i = dt(t); if (!It.test(i)) throw Error("Invalid TrustedResourceUrl format: " + i); return t = i.replace(wt, function(t, e) { if (!Object.prototype.hasOwnProperty.call(n, e)) throw Error('Found marker, "' + e + '", in format string, "' + i + '", but no valid label mapping found in args: ' + JSON.stringify(n)); return (t = n[e]) instanceof ft ? dt(t) : encodeURIComponent(String(t)) }), new gt(Et, t) }
                gt.prototype.sa = !0, gt.prototype.ra = function() { return this.a.toString() }, gt.prototype.toString = function() { return "TrustedResourceUrl{" + this.a + "}" }; var wt = /%{(\w+)}/g,
                    It = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
                    Tt = {},
                    Et = {};

                function At(t, e) { this.a = t === Ot && e || "", this.b = _t }

                function kt(t) { return t instanceof At && t.constructor === At && t.b === _t ? t.a : (R("expected object of type SafeUrl, got '" + t + "' of type " + n(t)), "type_error:SafeUrl") }
                At.prototype.sa = !0, At.prototype.ra = function() { return this.a.toString() }, At.prototype.toString = function() { return "SafeUrl{" + this.a + "}" }; var St = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

                function Nt(t) { return t instanceof At ? t : (t = "object" == typeof t && t.sa ? t.ra() : String(t), St.test(t) || (t = "about:invalid#zClosurez"), new At(Ot, t)) } var _t = {},
                    Ot = {};

                function Ct() { this.a = "", this.b = Dt }

                function Rt(t) { return t instanceof Ct && t.constructor === Ct && t.b === Dt ? t.a : (R("expected object of type SafeHtml, got '" + t + "' of type " + n(t)), "type_error:SafeHtml") }
                Ct.prototype.sa = !0, Ct.prototype.ra = function() { return this.a.toString() }, Ct.prototype.toString = function() { return "SafeHtml{" + this.a + "}" }; var Dt = {};

                function Pt(t) { var e = new Ct; return e.a = t, e }
                Pt("<!DOCTYPE html>"); var Lt = Pt("");

                function xt(t) { for (var e = t.split("%s"), n = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < e.length;) n += e.shift() + i.shift(); return n + e.join("%s") }

                function Mt(t) { return et.test(t) && (-1 != t.indexOf("&") && (t = t.replace(Y, "&amp;")), -1 != t.indexOf("<") && (t = t.replace(z, "&lt;")), -1 != t.indexOf(">") && (t = t.replace($, "&gt;")), -1 != t.indexOf('"') && (t = t.replace(Z, "&quot;")), -1 != t.indexOf("'") && (t = t.replace(Q, "&#39;")), -1 != t.indexOf("\0") && (t = t.replace(tt, "&#0;"))), t }

                function jt(t) { return jt[" "](t), t }
                Pt("<br>"), jt[" "] = a; var Ut, Vt = ot("Opera"),
                    Ft = ot("Trident") || ot("MSIE"),
                    qt = ot("Edge"),
                    Ht = qt || Ft,
                    Kt = ot("Gecko") && !(nt(X.toLowerCase(), "webkit") && !ot("Edge")) && !(ot("Trident") || ot("MSIE")) && !ot("Edge"),
                    Gt = nt(X.toLowerCase(), "webkit") && !ot("Edge");

                function Bt() { var t = l.document; return t ? t.documentMode : void 0 }
                t: { var Wt = "",
                        Xt = (Xt = X, Kt ? /rv:([^\);]+)(\)|;)/.exec(Xt) : qt ? /Edge\/([\d\.]+)/.exec(Xt) : Ft ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Xt) : Gt ? /WebKit\/(\S+)/.exec(Xt) : Vt ? /(?:Version)[ \/]?(\S+)/.exec(Xt) : void 0); if (Xt && (Wt = Xt ? Xt[1] : ""), Ft) { Xt = Bt(); if (null != Xt && Xt > parseFloat(Wt)) { Ut = String(Xt); break t } }
                    Ut = Wt }
                var Jt, Yt = {};

                function zt(s) { return t = s, e = function() { for (var t = 0, e = J(String(Ut)).split("."), n = J(String(s)).split("."), i = Math.max(e.length, n.length), r = 0; 0 == t && r < i; r++) { var o = e[r] || "",
                                a = n[r] || "";
                            do { if (o = /(\d*)(\D*)(.*)/.exec(o) || ["", "", "", ""], a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], 0 == o[0].length && 0 == a[0].length) break;
                                t = it(0 == o[1].length ? 0 : parseInt(o[1], 10), 0 == a[1].length ? 0 : parseInt(a[1], 10)) || it(0 == o[2].length, 0 == a[2].length) || it(o[2], a[2]), o = o[3], a = a[3] } while (0 == t) } return 0 <= t }, n = Yt, Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t); var t, e, n }
                Jt = l.document && Ft ? Bt() : void 0; try { new self.OffscreenCanvas(0, 0).getContext("2d") } catch (t) {} var $t = !Ft || 9 <= Number(Jt);

                function Zt(t) { var e = document; return "string" == typeof t ? e.getElementById(t) : t }

                function Qt(n, t) { at(t, function(t, e) { t && "object" == typeof t && t.sa && (t = t.ra()), "style" == e ? n.style.cssText = t : "class" == e ? n.className = t : "for" == e ? n.htmlFor = t : ne.hasOwnProperty(e) ? n.setAttribute(ne[e], t) : 0 == e.lastIndexOf("aria-", 0) || 0 == e.lastIndexOf("data-", 0) ? n.setAttribute(e, t) : n[e] = t }) } var te, ee, ne = { cellpadding: "cellPadding", cellspacing: "cellSpacing", colspan: "colSpan", frameborder: "frameBorder", height: "height", maxlength: "maxLength", nonce: "nonce", role: "role", rowspan: "rowSpan", type: "type", usemap: "useMap", valign: "vAlign", width: "width" };

                function ie() { var t, e = arguments,
                        n = document,
                        i = String(e[0]),
                        r = e[1]; return !$t && r && (r.name || r.type) && (i = ["<", i], r.name && i.push(' name="', Mt(r.name), '"'), r.type && (i.push(' type="', Mt(r.type), '"'), ht(t = {}, r), delete t.type, r = t), i.push(">"), i = i.join("")), i = re(n, i), r && ("string" == typeof r ? i.className = r : Array.isArray(r) ? i.className = r.join(" ") : Qt(i, r)), 2 < e.length && function(e, n, t) {
                        function i(t) { t && n.appendChild("string" == typeof t ? e.createTextNode(t) : t) } for (var r = 2; r < t.length; r++) { var o = t[r];!d(o) || v(o) && 0 < o.nodeType ? i(o) : U(function(t) { if (t && "number" == typeof t.length) { if (v(t)) return "function" == typeof t.item || "string" == typeof t.item; if (p(t)) return "function" == typeof t.item } return !1 }(o) ? W(o) : o, i) } }(n, i, e), i }

                function re(t, e) { return e = String(e), "application/xhtml+xml" === t.contentType && (e = e.toLowerCase()), t.createElement(e) }

                function oe(t) { l.setTimeout(function() { throw t }, 0) }

                function ae() { var t = l.MessageChannel; if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !ot("Presto") && (t = function() { var t, e, n = re(document, "IFRAME");
                            n.style.display = "none", t = n, e = new gt(Et, dt(mt)), lt(t, "HTMLIFrameElement"), t.src = bt(e).toString(), document.documentElement.appendChild(n); var i = n.contentWindow;
                            (n = i.document).open(), n.write(Rt(Lt)), n.close(); var r = "callImmediate" + Math.random(),
                                o = "file:" == i.location.protocol ? "*" : i.location.protocol + "//" + i.location.host;
                            n = g(function(t) { "*" != o && t.origin != o || t.data != r || this.port1.onmessage() }, this), i.addEventListener("message", n, !1), this.port1 = {}, this.port2 = { postMessage: function() { i.postMessage(r, o) } } }), void 0 === t || ot("Trident") || ot("MSIE")) return function(t) { l.setTimeout(t, 0) }; var e = new t,
                        n = {},
                        i = n; return e.port1.onmessage = function() { var t;
                            void 0 !== n.next && (t = (n = n.next).Fb, n.Fb = null, t()) },
                        function(t) { i.next = { Fb: t }, i = i.next, e.port2.postMessage(0) } }

                function se(t, e) { ee || function() {
                        { var t;
                            ee = l.Promise && l.Promise.resolve ? (t = l.Promise.resolve(void 0), function() { t.then(he) }) : function() { var t = he;!p(l.setImmediate) || l.Window && l.Window.prototype && !ot("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (te = te || ae())(t) : l.setImmediate(t) } } }(), ue || (ee(), ue = !0), ce.add(t, e) } var ue = !1,
                    ce = new L;

                function he() { for (var t, e, n; n = e = void 0, n = null, (e = ce).a && (n = e.a, e.a = e.a.next, e.a || (e.b = null), n.next = null), t = n;) { try { t.a.call(t.b) } catch (t) { oe(t) }
                        P(x, t) }
                    ue = !1 }

                function le(t, e) { if (this.a = fe, this.i = void 0, this.f = this.b = this.c = null, this.g = this.h = !1, t != a) try { var n = this;
                        t.call(e, function(t) { Ae(n, de, t) }, function(t) { if (!(t instanceof Re)) try { if (t instanceof Error) throw t; throw Error("Promise rejected.") } catch (t) {}
                            Ae(n, pe, t) }) } catch (t) { Ae(this, pe, t) } } var fe = 0,
                    de = 2,
                    pe = 3;

                function ve() { this.next = this.f = this.b = this.g = this.a = null, this.c = !1 }
                ve.prototype.reset = function() { this.f = this.b = this.g = this.a = null, this.c = !1 }; var me = new D(function() { return new ve }, function(t) { t.reset() });

                function ge(t, e, n) { var i = me.get(); return i.g = t, i.b = e, i.f = n, i }

                function be(t) { if (t instanceof le) return t; var e = new le(a); return Ae(e, de, t), e }

                function ye(n) { return new le(function(t, e) { e(n) }) }

                function we(t, e, n) { ke(t, e, n, null) || se(b(e, t)) }

                function Ie(n) { return new le(function(i) { var r = n.length,
                            o = []; if (r)
                            for (var t = function(t, e, n) { r--, o[t] = e ? { Ob: !0, value: n } : { Ob: !1, reason: n }, 0 == r && i(o) }, e = 0; e < n.length; e++) we(n[e], b(t, e, !0), b(t, e, !1));
                        else i(o) }) }

                function Te(t, e) { t.b || t.a != de && t.a != pe || Se(t), t.f ? t.f.next = e : t.b = e, t.f = e }

                function Ee(t, r, o, a) { var e = ge(null, null, null); return e.a = new le(function(n, i) { e.g = r ? function(t) { try { var e = r.call(a, t);
                                n(e) } catch (t) { i(t) } } : n, e.b = o ? function(t) { try { var e = o.call(a, t);
                                void 0 === e && t instanceof Re ? i(t) : n(e) } catch (t) { i(t) } } : i }), Te(e.a.c = t, e), e.a }

                function Ae(t, e, n) { var i, r;
                    t.a == fe && (t === n && (e = pe, n = new TypeError("Promise cannot resolve to itself")), t.a = 1, ke(n, t.Zc, t.$c, t) || (t.i = n, t.a = e, t.c = null, Se(t), e != pe || n instanceof Re || (r = n, (i = t).g = !0, se(function() { i.g && Ce.call(null, r) })))) }

                function ke(t, e, n, i) { if (t instanceof le) return Te(t, ge(e || a, n || null, i)), 1; if (_(t)) return t.then(e, n, i), 1; if (v(t)) try { var r = t.then; if (p(r)) return function(t, e, n, i, r) {
                            function o(t) { a || (a = !0, i.call(r, t)) } var a = !1; try { e.call(t, function(t) { a || (a = !0, n.call(r, t)) }, o) } catch (t) { o(t) } }(t, r, e, n, i), 1 } catch (t) { return n.call(i, t), 1 } }

                function Se(t) { t.h || (t.h = !0, se(t.fc, t)) }

                function Ne(t) { var e = null; return t.b && (e = t.b, t.b = e.next, e.next = null), t.b || (t.f = null), e }

                function _e(t, e, n, i) { if (n == pe && e.b && !e.c)
                        for (; t && t.g; t = t.c) t.g = !1; if (e.a) e.a.c = null, Oe(e, n, i);
                    else try { e.c ? e.g.call(e.f) : Oe(e, n, i) } catch (t) { Ce.call(null, t) }
                    P(me, e) }

                function Oe(t, e, n) { e == de ? t.g.call(t.f, n) : t.b && t.b.call(t.f, n) }
                le.prototype.then = function(t, e, n) { return Ee(this, p(t) ? t : null, p(e) ? e : null, n) }, le.prototype.$goog_Thenable = !0, (t = le.prototype).na = function(t, e) { return (t = ge(t, t, e)).c = !0, Te(this, t), this }, t.s = function(t, e) { return Ee(this, null, t, e) }, t.cancel = function(t) { var e;
                    this.a == fe && (e = new Re(t), se(function() {! function t(e, n) { if (e.a == fe)
                                if (e.c) { var i = e.c; if (i.b) { for (var r = 0, o = null, a = null, s = i.b; s && (s.c || (r++, s.a == e && (o = s), !(o && 1 < r))); s = s.next) o || (a = s);
                                        o && (i.a == fe && 1 == r ? t(i, n) : (a ? ((r = a).next == i.f && (i.f = r), r.next = r.next.next) : Ne(i), _e(i, o, pe, n))) }
                                    e.c = null } else Ae(e, pe, n) }(this, e) }, this)) }, t.Zc = function(t) { this.a = fe, Ae(this, de, t) }, t.$c = function(t) { this.a = fe, Ae(this, pe, t) }, t.fc = function() { for (var t; t = Ne(this);) _e(this, t, this.a, this.i);
                    this.h = !1 }; var Ce = oe;

                function Re(t) { O.call(this, t) }

                function De() { this.xa = this.xa, this.oa = this.oa }
                w(Re, O); var Pe = 0;

                function Le(t) { t.xa || (t.xa = !0, t.Da(), 0 == Pe) || (t = t, Object.prototype.hasOwnProperty.call(t, e) && t[e] || (t[e] = ++i)) }
                De.prototype.xa = !(Re.prototype.name = "cancel"), De.prototype.Da = function() { if (this.oa)
                        for (; this.oa.length;) this.oa.shift()() }; var xe = Object.freeze || function(t) { return t },
                    Me = !Ft || 9 <= Number(Jt),
                    je = Ft && !zt("9"),
                    Ue = function() { if (!l.addEventListener || !Object.defineProperty) return !1; var t = !1,
                            e = Object.defineProperty({}, "passive", { get: function() { t = !0 } }); try { l.addEventListener("test", a, e), l.removeEventListener("test", a, e) } catch (t) {} return t }();

                function Ve(t, e) { this.type = t, this.b = this.target = e, this.defaultPrevented = !1 }

                function Fe(t, e) { if (Ve.call(this, t ? t.type : ""), this.relatedTarget = this.b = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.a = null, t) { var n = this.type = t.type,
                            i = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : null; if (this.target = t.target || t.srcElement, this.b = e, e = t.relatedTarget) { if (Kt) { t: { try { jt(e.nodeName); var r = !0; break t } catch (t) {}
                                    r = !1 }
                                r || (e = null) } } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                        this.relatedTarget = e, i ? (this.clientX = void 0 !== i.clientX ? i.clientX : i.pageX, this.clientY = void 0 !== i.clientY ? i.clientY : i.pageY, this.screenX = i.screenX || 0, this.screenY = i.screenY || 0) : (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = "string" == typeof t.pointerType ? t.pointerType : qe[t.pointerType] || "", (this.a = t).defaultPrevented && this.preventDefault() } }
                Ve.prototype.preventDefault = function() { this.defaultPrevented = !0 }, w(Fe, Ve); var qe = xe({ 2: "touch", 3: "pen", 4: "mouse" });
                Fe.prototype.preventDefault = function() { Fe.$a.preventDefault.call(this); var t = this.a; if (t.preventDefault) t.preventDefault();
                    else if (t.returnValue = !1, je) try {
                        (t.ctrlKey || 112 <= t.keyCode && t.keyCode <= 123) && (t.keyCode = -1) } catch (t) {} }, Fe.prototype.g = function() { return this.a }; var He = "closure_listenable_" + (1e6 * Math.random() | 0),
                    Ke = 0;

                function Ge(t, e, n, i, r) { this.listener = t, this.proxy = null, this.src = e, this.type = n, this.capture = !!i, this.Ua = r, this.key = ++Ke, this.va = this.Oa = !1 }

                function Be(t) { t.va = !0, t.listener = null, t.proxy = null, t.src = null, t.Ua = null }

                function We(t) { this.src = t, this.a = {}, this.b = 0 }

                function Xe(t, e) { var n = e.type;
                    n in t.a && K(t.a[n], e) && (Be(e), 0 == t.a[n].length && (delete t.a[n], t.b--)) }

                function Je(t, e, n, i) { for (var r = 0; r < t.length; ++r) { var o = t[r]; if (!o.va && o.listener == e && o.capture == !!n && o.Ua == i) return r } return -1 }
                We.prototype.add = function(t, e, n, i, r) { var o = t.toString();
                    (t = this.a[o]) || (t = this.a[o] = [], this.b++); var a = Je(t, e, i, r); return -1 < a ? (e = t[a], n || (e.Oa = !1)) : ((e = new Ge(e, this.src, o, !!i, r)).Oa = n, t.push(e)), e }; var Ye = "closure_lm_" + (1e6 * Math.random() | 0),
                    ze = {};

                function $e(t, e, n, i, r) { if (i && i.once) Qe(t, e, n, i, r);
                    else if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) $e(t, e[o], n, i, r);
                    else n = cn(n), t && t[He] ? ln(t, e, n, v(i) ? !!i.capture : !!i, r) : Ze(t, e, n, !1, i, r) }

                function Ze(t, e, n, i, r, o) { if (!e) throw Error("Invalid event type"); var a, s, u = v(r) ? !!r.capture : !!r,
                        c = sn(t); if (c || (t[Ye] = c = new We(t)), !(n = c.add(e, n, i, u, o)).proxy)
                        if (a = an, i = s = Me ? function(t) { return a.call(s.src, s.listener, t) } : function(t) { if (!(t = a.call(s.src, s.listener, t))) return t }, (n.proxy = i).src = t, i.listener = n, t.addEventListener) Ue || (r = u), void 0 === r && (r = !1), t.addEventListener(e.toString(), i, r);
                        else if (t.attachEvent) t.attachEvent(nn(e.toString()), i);
                    else { if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                        t.addListener(i) } }

                function Qe(t, e, n, i, r) { if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) Qe(t, e[o], n, i, r);
                    else n = cn(n), t && t[He] ? fn(t, e, n, v(i) ? !!i.capture : !!i, r) : Ze(t, e, n, !0, i, r) }

                function tn(t, e, n, i, r) { if (Array.isArray(e))
                        for (var o = 0; o < e.length; o++) tn(t, e[o], n, i, r);
                    else i = v(i) ? !!i.capture : !!i, n = cn(n), t && t[He] ? (t = t.v, (e = String(e).toString()) in t.a && (-1 < (n = Je(o = t.a[e], n, i, r)) && (Be(o[n]), Array.prototype.splice.call(o, n, 1), 0 == o.length && (delete t.a[e], t.b--)))) : (t = t && sn(t)) && (e = t.a[e.toString()], t = -1, e && (t = Je(e, n, i, r)), (n = -1 < t ? e[t] : null) && en(n)) }

                function en(t) { var e, n, i; "number" != typeof t && t && !t.va && ((e = t.src) && e[He] ? Xe(e.v, t) : (n = t.type, i = t.proxy, e.removeEventListener ? e.removeEventListener(n, i, t.capture) : e.detachEvent ? e.detachEvent(nn(n), i) : e.addListener && e.removeListener && e.removeListener(i), (n = sn(e)) ? (Xe(n, t), 0 == n.b && (n.src = null, e[Ye] = null)) : Be(t))) }

                function nn(t) { return t in ze ? ze[t] : ze[t] = "on" + t }

                function rn(t, e, n, i) { var r = !0; if ((t = sn(t)) && (e = t.a[e.toString()]))
                        for (e = e.concat(), t = 0; t < e.length; t++) { var o = e[t];
                            o && o.capture == n && !o.va && (o = on(o, i), r = r && !1 !== o) }
                    return r }

                function on(t, e) { var n = t.listener,
                        i = t.Ua || t.src; return t.Oa && en(t), n.call(i, e) }

                function an(t, e) { if (t.va) return !0; if (Me) return on(t, new Fe(e, this)); if (!e) t: { e = ["window", "event"]; for (var n = l, i = 0; i < e.length; i++)
                            if (null == (n = n[e[i]])) { e = null; break t }
                        e = n }
                    if (e = new Fe(i = e, this), n = !0, !(i.keyCode < 0 || null != i.returnValue)) { t: { var r = !1; if (0 == i.keyCode) try { i.keyCode = -1; break t } catch (t) { r = !0 }!r && null != i.returnValue || (i.returnValue = !0) } for (i = [], r = e.b; r; r = r.parentNode) i.push(r); for (t = t.type, r = i.length - 1; 0 <= r; r--) { e.b = i[r]; var o = rn(i[r], t, !0, e),
                                n = n && o } for (r = 0; r < i.length; r++) e.b = i[r], o = rn(i[r], t, !1, e), n = n && o } return n }

                function sn(t) { return (t = t[Ye]) instanceof We ? t : null } var un = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);

                function cn(e) { return p(e) ? e : (e[un] || (e[un] = function(t) { return e.handleEvent(t) }), e[un]) }

                function hn() { De.call(this), this.v = new We(this), (this.$b = this).fb = null }

                function ln(t, e, n, i, r) { t.v.add(String(e), n, !1, i, r) }

                function fn(t, e, n, i, r) { t.v.add(String(e), n, !0, i, r) }

                function dn(t, e, n, i) { if (!(e = t.v.a[String(e)])) return !0;
                    e = e.concat(); for (var r = !0, o = 0; o < e.length; ++o) { var a, s, u = e[o];
                        u && !u.va && u.capture == n && (a = u.listener, s = u.Ua || u.src, u.Oa && Xe(t.v, u), r = !1 !== a.call(s, i) && r) } return r && !i.defaultPrevented }

                function pn(t, e, n) { if (p(t)) n && (t = g(t, n));
                    else { if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                        t = g(t.handleEvent, t) } return 2147483647 < Number(e) ? -1 : l.setTimeout(t, e || 0) }

                function vn(n) { var i = null; return new le(function(t, e) {-1 == (i = pn(function() { t(void 0) }, n)) && e(Error("Failed to schedule timer.")) }).s(function(t) { throw l.clearTimeout(i), t }) }

                function mn(t) { if (t.V && "function" == typeof t.V) return t.V(); if ("string" == typeof t) return t.split(""); if (d(t)) { for (var e = [], n = t.length, i = 0; i < n; i++) e.push(t[i]); return e } for (i in e = [], n = 0, t) e[n++] = t[i]; return e }

                function gn(t) { if (t.Y && "function" == typeof t.Y) return t.Y(); if (!t.V || "function" != typeof t.V) { if (d(t) || "string" == typeof t) { var e = [];
                            t = t.length; for (var n = 0; n < t; n++) e.push(n); return e } for (var i in e = [], n = 0, t) e[n++] = i; return e } }

                function bn(t, e) { this.b = {}, this.a = [], this.c = 0; var n = arguments.length; if (1 < n) { if (n % 2) throw Error("Uneven number of arguments"); for (var i = 0; i < n; i += 2) this.set(arguments[i], arguments[i + 1]) } else if (t)
                        if (t instanceof bn)
                            for (n = t.Y(), i = 0; i < n.length; i++) this.set(n[i], t.get(n[i]));
                        else
                            for (i in t) this.set(i, t[i]) }

                function yn(t) { if (t.c != t.a.length) { for (var e = 0, n = 0; e < t.a.length;) { var i = t.a[e];
                            wn(t.b, i) && (t.a[n++] = i), e++ }
                        t.a.length = n } if (t.c != t.a.length) { for (var r = {}, n = e = 0; e < t.a.length;) wn(r, i = t.a[e]) || (r[t.a[n++] = i] = 1), e++;
                        t.a.length = n } }

                function wn(t, e) { return Object.prototype.hasOwnProperty.call(t, e) }
                w(hn, De), hn.prototype[He] = !0, hn.prototype.addEventListener = function(t, e, n, i) { $e(this, t, e, n, i) }, hn.prototype.removeEventListener = function(t, e, n, i) { tn(this, t, e, n, i) }, hn.prototype.dispatchEvent = function(t) { var e, n = this.fb; if (n)
                        for (e = []; n; n = n.fb) e.push(n);
                    n = this.$b; var i = t.type || t; if ("string" == typeof t ? t = new Ve(t, n) : t instanceof Ve ? t.target = t.target || n : (a = t, ht(t = new Ve(i, n), a)), a = !0, e)
                        for (var r = e.length - 1; 0 <= r; r--) var o = t.b = e[r],
                            a = dn(o, i, !0, t) && a; if (a = dn(o = t.b = n, i, !0, t) && a, a = dn(o, i, !1, t) && a, e)
                        for (r = 0; r < e.length; r++) a = dn(o = t.b = e[r], i, !1, t) && a; return a }, hn.prototype.Da = function() { if (hn.$a.Da.call(this), this.v) { var t, e = this.v; for (t in e.a) { for (var n = e.a[t], i = 0; i < n.length; i++) Be(n[i]);
                            delete e.a[t], e.b-- } }
                    this.fb = null }, (t = bn.prototype).V = function() { yn(this); for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]); return t }, t.Y = function() { return yn(this), this.a.concat() }, t.clear = function() { this.b = {}, this.c = this.a.length = 0 }, t.get = function(t, e) { return wn(this.b, t) ? this.b[t] : e }, t.set = function(t, e) { wn(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e }, t.forEach = function(t, e) { for (var n = this.Y(), i = 0; i < n.length; i++) { var r = n[i],
                            o = this.get(r);
                        t.call(e, o, r, this) } }; var In = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

                function Tn(t, e) { var n;
                    this.a = this.l = this.f = "", this.g = null, this.h = this.c = "", this.i = !1, t instanceof Tn ? (this.i = void 0 !== e ? e : t.i, En(this, t.f), this.l = t.l, this.a = t.a, An(this, t.g), this.c = t.c, kn(this, Gn(t.b)), this.h = t.h) : t && (n = String(t).match(In)) ? (this.i = !!e, En(this, n[1] || "", !0), this.l = Cn(n[2] || ""), this.a = Cn(n[3] || "", !0), An(this, n[4]), this.c = Cn(n[5] || "", !0), kn(this, n[6] || "", !0), this.h = Cn(n[7] || "")) : (this.i = !!e, this.b = new Un(null, this.i)) }

                function En(t, e, n) { t.f = n ? Cn(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, "")) }

                function An(t, e) { if (e) { if (e = Number(e), isNaN(e) || e < 0) throw Error("Bad port number " + e);
                        t.g = e } else t.g = null }

                function kn(t, e, n) { var i, r;
                    e instanceof Un ? (t.b = e, i = t.b, (r = t.i) && !i.f && (Vn(i), i.c = null, i.a.forEach(function(t, e) { var n = e.toLowerCase();
                        e != n && (qn(this, e), Kn(this, n, t)) }, i)), i.f = r) : (n || (e = Rn(e, Mn)), t.b = new Un(e, t.i)) }

                function Sn(t, e, n) { t.b.set(e, n) }

                function Nn(t, e) { return t.b.get(e) }

                function _n(t) { return t instanceof Tn ? new Tn(t) : new Tn(t, void 0) }

                function On(t, e, n, i) { var r = new Tn(null, void 0); return t && En(r, t), e && (r.a = e), n && An(r, n), i && (r.c = i), r }

                function Cn(t, e) { return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : "" }

                function Rn(t, e, n) { return "string" == typeof t ? (t = encodeURI(t).replace(e, Dn), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null }

                function Dn(t) { return "%" + ((t = t.charCodeAt(0)) >> 4 & 15).toString(16) + (15 & t).toString(16) }
                Tn.prototype.toString = function() { var t = [],
                        e = this.f;
                    e && t.push(Rn(e, Pn, !0), ":"); var n = this.a; return !n && "file" != e || (t.push("//"), (e = this.l) && t.push(Rn(e, Pn, !0), "@"), t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.g) && t.push(":", String(n))), (n = this.c) && (this.a && "/" != n.charAt(0) && t.push("/"), t.push(Rn(n, "/" == n.charAt(0) ? xn : Ln, !0))), (n = this.b.toString()) && t.push("?", n), (n = this.h) && t.push("#", Rn(n, jn)), t.join("") }, Tn.prototype.resolve = function(t) { var e = new Tn(this),
                        n = !!t.f;
                    n ? En(e, t.f) : n = !!t.l, n ? e.l = t.l : n = !!t.a, n ? e.a = t.a : n = null != t.g; var i, r = t.c; if (n) An(e, t.g);
                    else if (n = !!t.c) { if ("/" != r.charAt(0) && (this.a && !this.c ? r = "/" + r : -1 != (i = e.c.lastIndexOf("/")) && (r = e.c.substr(0, i + 1) + r)), ".." == (i = r) || "." == i) r = "";
                        else if (nt(i, "./") || nt(i, "/.")) { r = 0 == i.lastIndexOf("/", 0), i = i.split("/"); for (var o = [], a = 0; a < i.length;) { var s = i[a++]; "." == s ? r && a == i.length && o.push("") : ".." == s ? ((1 < o.length || 1 == o.length && "" != o[0]) && o.pop(), r && a == i.length && o.push("")) : (o.push(s), r = !0) }
                            r = o.join("/") } else r = i } return n ? e.c = r : n = "" !== t.b.toString(), n ? kn(e, Gn(t.b)) : n = !!t.h, n && (e.h = t.h), e }; var Pn = /[#\/\?@]/g,
                    Ln = /[#\?:]/g,
                    xn = /[#\?]/g,
                    Mn = /[#\?@]/g,
                    jn = /#/g;

                function Un(t, e) { this.b = this.a = null, this.c = t || null, this.f = !!e }

                function Vn(n) { n.a || (n.a = new bn, n.b = 0, n.c && function(t, e) { if (t) { t = t.split("&"); for (var n = 0; n < t.length; n++) { var i, r = t[n].indexOf("="),
                                    o = null;
                                0 <= r ? (i = t[n].substring(0, r), o = t[n].substring(r + 1)) : i = t[n], e(i, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "") } } }(n.c, function(t, e) { n.add(decodeURIComponent(t.replace(/\+/g, " ")), e) })) }

                function Fn(t) { var e = gn(t); if (void 0 === e) throw Error("Keys are undefined"); var n = new Un(null, void 0);
                    t = mn(t); for (var i = 0; i < e.length; i++) { var r = e[i],
                            o = t[i];
                        Array.isArray(o) ? Kn(n, r, o) : n.add(r, o) } return n }

                function qn(t, e) { Vn(t), e = Bn(t, e), wn(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, wn((t = t.a).b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && yn(t))) }

                function Hn(t, e) { return Vn(t), e = Bn(t, e), wn(t.a.b, e) }

                function Kn(t, e, n) { qn(t, e), 0 < n.length && (t.c = null, t.a.set(Bn(t, e), W(n)), t.b += n.length) }

                function Gn(t) { var e = new Un; return e.c = t.c, t.a && (e.a = new bn(t.a), e.b = t.b), e }

                function Bn(t, e) { return e = String(e), t.f && (e = e.toLowerCase()), e }

                function Wn(t) { var e = []; return function t(e, n, i) { if (null == n) i.push("null");
                        else { if ("object" == typeof n) { if (Array.isArray(n)) { var r = n;
                                    n = r.length, i.push("["); for (var o = "", a = 0; a < n; a++) i.push(o), t(e, r[a], i), o = ","; return void i.push("]") } if (!(n instanceof String || n instanceof Number || n instanceof Boolean)) { for (r in i.push("{"), o = "", n) Object.prototype.hasOwnProperty.call(n, r) && (a = n[r], "function" != typeof a && (i.push(o), zn(r, i), i.push(":"), t(e, a, i), o = ",")); return void i.push("}") }
                                n = n.valueOf() } switch (typeof n) {
                                case "string":
                                    zn(n, i); break;
                                case "number":
                                    i.push(isFinite(n) && !isNaN(n) ? String(n) : "null"); break;
                                case "boolean":
                                    i.push(String(n)); break;
                                case "function":
                                    i.push("null"); break;
                                default:
                                    throw Error("Unknown type: " + typeof n) } } }(new Xn, t, e), e.join("") }

                function Xn() {}(t = Un.prototype).add = function(t, e) { Vn(this), this.c = null, t = Bn(this, t); var n = this.a.get(t); return n || this.a.set(t, n = []), n.push(e), this.b += 1, this }, t.clear = function() { this.a = this.c = null, this.b = 0 }, t.forEach = function(n, i) { Vn(this), this.a.forEach(function(t, e) { U(t, function(t) { n.call(i, t, e, this) }, this) }, this) }, t.Y = function() { Vn(this); for (var t = this.a.V(), e = this.a.Y(), n = [], i = 0; i < e.length; i++)
                        for (var r = t[i], o = 0; o < r.length; o++) n.push(e[i]); return n }, t.V = function(t) { Vn(this); var e = []; if ("string" == typeof t) Hn(this, t) && (e = B(e, this.a.get(Bn(this, t))));
                    else { t = this.a.V(); for (var n = 0; n < t.length; n++) e = B(e, t[n]) } return e }, t.set = function(t, e) { return Vn(this), this.c = null, Hn(this, t = Bn(this, t)) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this }, t.get = function(t, e) { return t && 0 < (t = this.V(t)).length ? String(t[0]) : e }, t.toString = function() { if (this.c) return this.c; if (!this.a) return ""; for (var t = [], e = this.a.Y(), n = 0; n < e.length; n++)
                        for (var i = e[n], r = encodeURIComponent(String(i)), i = this.V(i), o = 0; o < i.length; o++) { var a = r; "" !== i[o] && (a += "=" + encodeURIComponent(String(i[o]))), t.push(a) }
                    return this.c = t.join("&") }; var Jn = { '"': '\\"', "\\": "\\\\", "/": "\\/", "\b": "\\b", "\f": "\\f", "\n": "\\n", "\r": "\\r", "\t": "\\t", "\v": "\\u000b" },
                    Yn = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

                function zn(t, e) { e.push('"', t.replace(Yn, function(t) { var e = Jn[t]; return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), Jn[t] = e), e }), '"') }

                function $n() { var t = mi(); return Ft && Jt && 11 == Jt || /Edge\/\d+/.test(t) }

                function Zn() { return l.window && l.window.location.href || self && self.location && self.location.href || "" }

                function Qn(t, e) { e = e || l.window; var n = "about:blank";
                    t && (n = kt(Nt(t))), e.location.href = n }

                function ti(t) { return !!((t = (t || mi()).toLowerCase()).match(/android/) || t.match(/webos/) || t.match(/iphone|ipad|ipod/) || t.match(/blackberry/) || t.match(/windows phone/) || t.match(/iemobile/)) }

                function ei(t) { t = t || l.window; try { t.close() } catch (t) {} }

                function ni(t, e, n) { var i = Math.floor(1e9 * Math.random()).toString();
                    e = e || 500, n = n || 600; var r = (window.screen.availHeight - n) / 2,
                        o = (window.screen.availWidth - e) / 2; for (a in e = { width: e, height: n, top: 0 < r ? r : 0, left: 0 < o ? o : 0, location: !0, resizable: !0, statusbar: !0, toolbar: !1 }, n = mi().toLowerCase(), i && (e.target = i, nt(n, "crios/") && (e.target = "_blank")), di(mi()) == li && (t = t || "http://localhost", e.scrollbars = !0), n = t || "", (t = e) || (t = {}), i = window, e = n instanceof At ? n : Nt(void 0 !== n.href ? n.href : String(n)), n = t.target || n.target, r = [], t) switch (a) {
                        case "width":
                        case "height":
                        case "top":
                        case "left":
                            r.push(a + "=" + t[a]); break;
                        case "target":
                        case "noopener":
                        case "noreferrer":
                            break;
                        default:
                            r.push(a + "=" + (t[a] ? 1 : 0)) }
                    var a = r.join(","); if ((ot("iPhone") && !ot("iPod") && !ot("iPad") || ot("iPad") || ot("iPod")) && i.navigator && i.navigator.standalone && n && "_self" != n ? (lt(a = re(document, "A"), "HTMLAnchorElement"), e instanceof At || e instanceof At || (e = "object" == typeof e && e.sa ? e.ra() : String(e), St.test(e) || (e = "about:invalid#zClosurez"), e = new At(Ot, e)), a.href = kt(e), a.setAttribute("target", n), t.noreferrer && a.setAttribute("rel", "noreferrer"), (t = document.createEvent("MouseEvent")).initMouseEvent("click", !0, !0, i, 1), a.dispatchEvent(t), a = {}) : t.noreferrer ? (a = i.open("", n, a), t = kt(e), a && (Ht && nt(t, ";") && (t = "'" + t.replace(/'/g, "%27") + "'"), a.opener = null, t = Pt('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Mt(t) + '">'), i = a.document) && (i.write(Rt(t)), i.close())) : (a = i.open(kt(e), n, a)) && t.noopener && (a.opener = null), a) try { a.focus() } catch (t) {}
                    return a } var ii = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
                    ri = /^[^@]+@[^@]+$/;

                function oi() { var e = null; return new le(function(t) { "complete" == l.document.readyState ? t() : (e = function() { t() }, Qe(window, "load", e)) }).s(function(t) { throw tn(window, "load", e), t }) }

                function ai(t) { return t = t || mi(), !("file:" !== Ii() && "ionic:" !== Ii() || !t.toLowerCase().match(/iphone|ipad|ipod|android/)) }

                function si() { var t = l.window; try { return t && t != t.top } catch (t) { return } }

                function ui() { return void 0 !== l.WorkerGlobalScope && "function" == typeof l.importScripts }

                function ci() { return Yl.default.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : Yl.default.INTERNAL.hasOwnProperty("node") ? "Node" : ui() ? "Worker" : "Browser" }

                function hi() { var t = ci(); return "ReactNative" === t || "Node" === t } var li = "Firefox",
                    fi = "Chrome";

                function di(t) { var e = t.toLowerCase(); return nt(e, "opera/") || nt(e, "opr/") || nt(e, "opios/") ? "Opera" : nt(e, "iemobile") ? "IEMobile" : nt(e, "msie") || nt(e, "trident/") ? "IE" : nt(e, "edge/") ? "Edge" : nt(e, "firefox/") ? li : nt(e, "silk/") ? "Silk" : nt(e, "blackberry") ? "Blackberry" : nt(e, "webos") ? "Webos" : !nt(e, "safari/") || nt(e, "chrome/") || nt(e, "crios/") || nt(e, "android") ? !nt(e, "chrome/") && !nt(e, "crios/") || nt(e, "edge/") ? nt(e, "android") ? "Android" : (t = t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == t.length ? t[1] : "Other" : fi : "Safari" } var pi = { ld: "FirebaseCore-web", nd: "FirebaseUI-web" };

                function vi(t, e) { e = e || []; var n, i = [],
                        r = {}; for (n in pi) r[pi[n]] = !0; for (n = 0; n < e.length; n++) void 0 !== r[e[n]] && (delete r[e[n]], i.push(e[n])); return i.sort(), (e = i).length || (e = ["FirebaseCore-web"]), "Browser" === (i = ci()) ? i = di(r = mi()) : "Worker" === i && (i = di(r = mi()) + "-" + i), i + "/JsCore/" + t + "/" + e.join(",") }

                function mi() { return l.navigator && l.navigator.userAgent || "" }

                function gi(t, e) { t = t.split("."), e = e || l; for (var n = 0; n < t.length && "object" == typeof e && null != e; n++) e = e[t[n]]; return n != t.length && (e = void 0), e }

                function bi() { try { var t = l.localStorage,
                            e = Si(); if (t) return t.setItem(e, "1"), t.removeItem(e), !$n() || !!l.indexedDB } catch (t) { return ui() && !!l.indexedDB } return !1 }

                function yi() { return (wi() || "chrome-extension:" === Ii() || ai()) && !hi() && bi() && !ui() }

                function wi() { return "http:" === Ii() || "https:" === Ii() }

                function Ii() { return l.location && l.location.protocol || null }

                function Ti(t) { return !ti(t = t || mi()) && di(t) != li }

                function Ei(t) { return void 0 === t ? null : Wn(t) }

                function Ai(t) { var e, n = {}; for (e in t) t.hasOwnProperty(e) && null !== t[e] && void 0 !== t[e] && (n[e] = t[e]); return n }

                function ki(t) { if (null !== t) return JSON.parse(t) }

                function Si(t) { return t || Math.floor(1e9 * Math.random()).toString() }

                function Ni(t) { return "Safari" != di(t = t || mi()) && !t.toLowerCase().match(/iphone|ipad|ipod/) }

                function _i() { var t = l.___jsl; if (t && t.H)
                        for (var e in t.H)
                            if (t.H[e].r = t.H[e].r || [], t.H[e].L = t.H[e].L || [], t.H[e].r = t.H[e].L.concat(), t.CP)
                                for (var n = 0; n < t.CP.length; n++) t.CP[n] = null }

                function Oi(t, e) { if (e < t) throw Error("Short delay should be less than long delay!");
                    this.a = t, this.c = e, t = mi(), e = ci(), this.b = ti(t) || "ReactNative" === e }

                function Ci() { var t = l.document; return !t || void 0 === t.visibilityState || "visible" == t.visibilityState }

                function Ri(t) { "undefined" != typeof console && "function" == typeof console.warn && console.warn(t) }

                function Di(t) { try { var e = new Date(parseInt(t, 10)); if (!isNaN(e.getTime()) && !/[^0-9]/.test(t)) return e.toUTCString() } catch (t) {} return null }

                function Pi() { return gi("fireauth.oauthhelper", l) || gi("fireauth.iframe", l) }
                Oi.prototype.get = function() { var t = l.navigator; return !t || "boolean" != typeof t.onLine || !wi() && "chrome-extension:" !== Ii() && void 0 === t.connection || t.onLine ? this.b ? this.c : this.a : Math.min(5e3, this.a) }; var Li, xi = {};

                function Mi(t) { xi[t] || (xi[t] = !0, Ri(t)) } try { var ji = {};
                    Object.defineProperty(ji, "abcd", { configurable: !0, enumerable: !0, value: 1 }), Object.defineProperty(ji, "abcd", { configurable: !0, enumerable: !0, value: 2 }), Li = 2 == ji.abcd } catch (t) { Li = !1 }

                function Ui(t, e, n) { Li ? Object.defineProperty(t, e, { configurable: !0, enumerable: !0, value: n }) : t[e] = n }

                function Vi(t, e) { if (e)
                        for (var n in e) e.hasOwnProperty(n) && Ui(t, n, e[n]) }

                function Fi(t) { var e = {}; return Vi(e, t), e }

                function qi(t) { var e = t; if ("object" == typeof t && null != t)
                        for (var n in e = "length" in t ? [] : {}, t) Ui(e, n, qi(t[n])); return e }

                function Hi(t) { var e = t && (t[Xi] ? "phone" : null); if (!(e && t && t[Wi])) throw new I("internal-error", "Internal assert: invalid MultiFactorInfo object");
                    Ui(this, "uid", t[Wi]), Ui(this, "displayName", t[Gi] || null); var n = null;
                    t[Bi] && (n = new Date(t[Bi]).toUTCString()), Ui(this, "enrollmentTime", n), Ui(this, "factorId", e) }

                function Ki(t) { try { var e = new Ji(t) } catch (t) { e = null } return e }
                Hi.prototype.w = function() { return { uid: this.uid, displayName: this.displayName, factorId: this.factorId, enrollmentTime: this.enrollmentTime } }; var Gi = "displayName",
                    Bi = "enrolledAt",
                    Wi = "mfaEnrollmentId",
                    Xi = "phoneInfo";

                function Ji(t) { Hi.call(this, t), Ui(this, "phoneNumber", t[Xi]) }

                function Yi(t) { var e = {},
                        n = t[Qi],
                        i = t[er],
                        r = t[nr]; if (t = Ki(t[tr]), !r || r != $i && r != Zi && !n || r == Zi && !i || r == zi && !t) throw Error("Invalid checkActionCode response!");
                    r == Zi ? (e[rr] = n || null, e[ar] = n || null, e[ir] = i) : (e[rr] = i || null, e[ar] = i || null, e[ir] = n || null), e[or] = t || null, Ui(this, ur, r), Ui(this, sr, qi(e)) }
                w(Ji, Hi), Ji.prototype.w = function() { var t = Ji.$a.w.call(this); return t.phoneNumber = this.phoneNumber, t }; var zi = "REVERT_SECOND_FACTOR_ADDITION",
                    $i = "EMAIL_SIGNIN",
                    Zi = "VERIFY_AND_CHANGE_EMAIL",
                    Qi = "email",
                    tr = "mfaInfo",
                    er = "newEmail",
                    nr = "requestType",
                    ir = "email",
                    rr = "fromEmail",
                    or = "multiFactorInfo",
                    ar = "previousEmail",
                    sr = "data",
                    ur = "operation";

                function cr(t) { var e = Nn(t = _n(t), hr) || null,
                        n = Nn(t, lr) || null,
                        i = (i = Nn(t, pr) || null) && mr[i] || null; if (!e || !n || !i) throw new I("argument-error", hr + ", " + lr + "and " + pr + " are required in a valid action code URL.");
                    Vi(this, { apiKey: e, operation: i, code: n, continueUrl: Nn(t, fr) || null, languageCode: Nn(t, dr) || null, tenantId: Nn(t, vr) || null }) } var hr = "apiKey",
                    lr = "oobCode",
                    fr = "continueUrl",
                    dr = "languageCode",
                    pr = "mode",
                    vr = "tenantId",
                    mr = { recoverEmail: "RECOVER_EMAIL", resetPassword: "PASSWORD_RESET", revertSecondFactorAddition: zi, signIn: $i, verifyAndChangeEmail: Zi, verifyEmail: "VERIFY_EMAIL" };

                function gr(t) { try { return new cr(t) } catch (t) { return null } }

                function br(t) { var e = t[Er]; if (void 0 === e) throw new I("missing-continue-uri"); if ("string" != typeof e || "string" == typeof e && !e.length) throw new I("invalid-continue-uri"); if (this.h = e, this.b = this.a = null, this.g = !1, (i = t[yr]) && "object" == typeof i) { e = i[Sr]; var n = i[Ar],
                            i = i[kr]; if ("string" == typeof e && e.length) { if (this.a = e, void 0 !== n && "boolean" != typeof n) throw new I("argument-error", Ar + " property must be a boolean when specified."); if (this.g = !!n, void 0 !== i && ("string" != typeof i || "string" == typeof i && !i.length)) throw new I("argument-error", kr + " property must be a non empty string when specified.");
                            this.b = i || null } else { if (void 0 !== e) throw new I("argument-error", Sr + " property must be a non empty string when specified."); if (void 0 !== n || void 0 !== i) throw new I("missing-android-pkg-name") } } else if (void 0 !== i) throw new I("argument-error", yr + " property must be a non null object when specified."); if (this.f = null, (e = t[Tr]) && "object" == typeof e) { if ("string" == typeof(e = e[Nr]) && e.length) this.f = e;
                        else if (void 0 !== e) throw new I("argument-error", Nr + " property must be a non empty string when specified.") } else if (void 0 !== e) throw new I("argument-error", Tr + " property must be a non null object when specified."); if (void 0 !== (e = t[Ir]) && "boolean" != typeof e) throw new I("argument-error", Ir + " property must be a boolean when specified."); if (this.c = !!e, void 0 !== (t = t[wr]) && ("string" != typeof t || "string" == typeof t && !t.length)) throw new I("argument-error", wr + " property must be a non empty string when specified.");
                    this.i = t || null } var yr = "android",
                    wr = "dynamicLinkDomain",
                    Ir = "handleCodeInApp",
                    Tr = "iOS",
                    Er = "url",
                    Ar = "installApp",
                    kr = "minimumVersion",
                    Sr = "packageName",
                    Nr = "bundleId";

                function _r(t) { var e, n = {}; for (e in n.continueUrl = t.h, n.canHandleCodeInApp = t.c, (n.androidPackageName = t.a) && (n.androidMinimumVersion = t.b, n.androidInstallApp = t.g), n.iOSBundleId = t.f, n.dynamicLinkDomain = t.i, n) null === n[e] && delete n[e]; return n } var Or = null;

                function Cr(t) { var e = ""; return function(i, t) {
                        function e(t) { for (; r < i.length;) { var e = i.charAt(r++),
                                    n = Or[e]; if (null != n) return n; if (!/^[\s\xa0]*$/.test(e)) throw Error("Unknown base64 encoding at char: " + e) } return t }! function() { if (!Or) { Or = {}; for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), e = ["+/=", "+/", "-_=", "-_.", "-_"], n = 0; n < 5; n++)
                                    for (var i = t.concat(e[n].split("")), r = 0; r < i.length; r++) { var o = i[r];
                                        void 0 === Or[o] && (Or[o] = r) } } }(); for (var r = 0;;) { var n = e(-1),
                                o = e(0),
                                a = e(64),
                                s = e(64); if (64 === s && -1 === n) break;
                            t(n << 2 | o >> 4), 64 != a && (t(o << 4 & 240 | a >> 2), 64 != s && t(a << 6 & 192 | s)) } }(t, function(t) { e += String.fromCharCode(t) }), e }

                function Rr(t) { var e = Pr(t); if (!(e && e.sub && e.iss && e.aud && e.exp)) throw Error("Invalid JWT");
                    this.g = t, this.c = e.exp, this.h = e.sub, this.a = e.provider_id || e.firebase && e.firebase.sign_in_provider || null, this.f = e.firebase && e.firebase.tenant || null, this.b = !!e.is_anonymous || "anonymous" == this.a }

                function Dr(t) { try { return new Rr(t) } catch (t) { return null } }

                function Pr(t) { if (!t) return null; if (3 != (t = t.split(".")).length) return null; for (var e = (4 - (t = t[1]).length % 4) % 4, n = 0; n < e; n++) t += "."; try { return JSON.parse(Cr(t)) } catch (t) {} return null }
                Rr.prototype.S = function() { return this.f }, Rr.prototype.i = function() { return this.b }, Rr.prototype.toString = function() { return this.g }; var Lr = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
                    xr = ["client_id", "response_type", "scope", "redirect_uri", "state"],
                    Mr = { md: { Ja: "locale", ua: 700, ta: 600, fa: "facebook.com", Wa: xr }, od: { Ja: null, ua: 500, ta: 750, fa: "github.com", Wa: xr }, pd: { Ja: "hl", ua: 515, ta: 680, fa: "google.com", Wa: xr }, vd: { Ja: "lang", ua: 485, ta: 705, fa: "twitter.com", Wa: Lr }, jd: { Ja: "locale", ua: 640, ta: 600, fa: "apple.com", Wa: [] } };

                function jr(t) { for (var e in Mr)
                        if (Mr[e].fa == t) return Mr[e];
                    return null }

                function Ur(t) { var e = {};
                    e["facebook.com"] = Kr, e["google.com"] = Br, e["github.com"] = Gr, e["twitter.com"] = Wr; var n = t && t[Fr]; try { if (n) return new(e[n] ? e[n] : Hr)(t); if (void 0 !== t[Vr]) return new qr(t) } catch (t) {} return null } var Vr = "idToken",
                    Fr = "providerId";

                function qr(t) { var e, n = t[Fr]; if (n || !t[Vr] || (e = Dr(t[Vr])) && e.a && (n = e.a), !n) throw Error("Invalid additional user info!"); "anonymous" != n && "custom" != n || (n = null), e = !1, void 0 !== t.isNewUser ? e = !!t.isNewUser : "identitytoolkit#SignupNewUserResponse" === t.kind && (e = !0), Ui(this, "providerId", n), Ui(this, "isNewUser", e) }

                function Hr(t) { qr.call(this, t), Ui(this, "profile", qi((t = ki(t.rawUserInfo || "{}")) || {})) }

                function Kr(t) { if (Hr.call(this, t), "facebook.com" != this.providerId) throw Error("Invalid provider ID!") }

                function Gr(t) { if (Hr.call(this, t), "github.com" != this.providerId) throw Error("Invalid provider ID!");
                    Ui(this, "username", this.profile && this.profile.login || null) }

                function Br(t) { if (Hr.call(this, t), "google.com" != this.providerId) throw Error("Invalid provider ID!") }

                function Wr(t) { if (Hr.call(this, t), "twitter.com" != this.providerId) throw Error("Invalid provider ID!");
                    Ui(this, "username", t.screenName || null) }

                function Xr(t) { var e = Nn(i = _n(t), "link"),
                        n = Nn(_n(e), "link"),
                        i = Nn(i, "deep_link_id"); return Nn(_n(i), "link") || i || n || e || t }

                function Jr(t, e) { if (!t && !e) throw new I("internal-error", "Internal assert: no raw session string available"); if (t && e) throw new I("internal-error", "Internal assert: unable to determine the session type");
                    this.a = t || null, this.b = e || null, this.type = this.a ? Yr : zr }
                w(Hr, qr), w(Kr, Hr), w(Gr, Hr), w(Br, Hr), w(Wr, Hr); var Yr = "enroll",
                    zr = "signin";

                function $r() {}

                function Zr(t, n) { return t.then(function(t) { if (t[qa]) { var e = Dr(t[qa]); if (!e || n != e.h) throw new I("user-mismatch"); return t } throw new I("user-mismatch") }).s(function(t) { throw t && t.code && t.code == A + "user-not-found" ? new I("user-mismatch") : t }) }

                function Qr(t, e) { if (!e) throw new I("internal-error", "failed to construct a credential");
                    this.a = e, Ui(this, "providerId", t), Ui(this, "signInMethod", t) }

                function to(t) { return { pendingToken: t.a, requestUri: "http://localhost" } }

                function eo(t) { if (t && t.providerId && t.signInMethod && 0 == t.providerId.indexOf("saml.") && t.pendingToken) try { return new Qr(t.providerId, t.pendingToken) } catch (t) {}
                    return null }

                function no(t, e, n) { if (this.a = null, e.idToken || e.accessToken) e.idToken && Ui(this, "idToken", e.idToken), e.accessToken && Ui(this, "accessToken", e.accessToken), e.nonce && !e.pendingToken && Ui(this, "nonce", e.nonce), e.pendingToken && (this.a = e.pendingToken);
                    else { if (!e.oauthToken || !e.oauthTokenSecret) throw new I("internal-error", "failed to construct a credential");
                        Ui(this, "accessToken", e.oauthToken), Ui(this, "secret", e.oauthTokenSecret) }
                    Ui(this, "providerId", t), Ui(this, "signInMethod", n) }

                function io(t) { var e = {}; return t.idToken && (e.id_token = t.idToken), t.accessToken && (e.access_token = t.accessToken), t.secret && (e.oauth_token_secret = t.secret), e.providerId = t.providerId, t.nonce && !t.a && (e.nonce = t.nonce), e = { postBody: Fn(e).toString(), requestUri: "http://localhost" }, t.a && (delete e.postBody, e.pendingToken = t.a), e }

                function ro(t) { if (t && t.providerId && t.signInMethod) { var e = { idToken: t.oauthIdToken, accessToken: t.oauthTokenSecret ? null : t.oauthAccessToken, oauthTokenSecret: t.oauthTokenSecret, oauthToken: t.oauthTokenSecret && t.oauthAccessToken, nonce: t.nonce, pendingToken: t.pendingToken }; try { return new no(t.providerId, e, t.signInMethod) } catch (t) {} } return null }

                function oo(t, e) { this.Pc = e || [], Vi(this, { providerId: t, isOAuthProvider: !0 }), this.Hb = {}, this.ob = (jr(t) || {}).Ja || null, this.nb = null }

                function ao(t) { if ("string" != typeof t || 0 != t.indexOf("saml.")) throw new I("argument-error", 'SAML provider IDs must be prefixed with "saml."');
                    oo.call(this, t, []) }

                function so(t) { oo.call(this, t, xr), this.a = [] }

                function uo() { so.call(this, "facebook.com") }

                function co(t) { if (!t) throw new I("argument-error", "credential failed: expected 1 argument (the OAuth access token)."); var e = t; return v(t) && (e = t.accessToken), (new uo).credential({ accessToken: e }) }

                function ho() { so.call(this, "github.com") }

                function lo(t) { if (!t) throw new I("argument-error", "credential failed: expected 1 argument (the OAuth access token)."); var e = t; return v(t) && (e = t.accessToken), (new ho).credential({ accessToken: e }) }

                function fo() { so.call(this, "google.com"), this.Ca("profile") }

                function po(t, e) { var n = t; return v(t) && (n = t.idToken, e = t.accessToken), (new fo).credential({ idToken: n, accessToken: e }) }

                function vo() { oo.call(this, "twitter.com", Lr) }

                function mo(t, e) { var n = t; if (v(n) || (n = { oauthToken: t, oauthTokenSecret: e }), !n.oauthToken || !n.oauthTokenSecret) throw new I("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret)."); return new no("twitter.com", n, "twitter.com") }

                function go(t, e, n) { this.a = t, this.f = e, Ui(this, "providerId", "password"), Ui(this, "signInMethod", n === yo.EMAIL_LINK_SIGN_IN_METHOD ? yo.EMAIL_LINK_SIGN_IN_METHOD : yo.EMAIL_PASSWORD_SIGN_IN_METHOD) }

                function bo(t) { return t && t.email && t.password ? new go(t.email, t.password, t.signInMethod) : null }

                function yo() { Vi(this, { providerId: "password", isOAuthProvider: !1 }) }

                function wo(t, e) { if (!(e = Io(e))) throw new I("argument-error", "Invalid email link!"); return new go(t, e.code, yo.EMAIL_LINK_SIGN_IN_METHOD) }

                function Io(t) { return (t = gr(t = Xr(t))) && t.operation === $i ? t : null }

                function To(t) { if (!(t.cb && t.bb || t.La && t.ea)) throw new I("internal-error");
                    this.a = t, Ui(this, "providerId", "phone"), this.fa = "phone", Ui(this, "signInMethod", "phone") }

                function Eo(e) { if (e && "phone" === e.providerId && (e.verificationId && e.verificationCode || e.temporaryProof && e.phoneNumber)) { var n = {}; return U(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function(t) { e[t] && (n[t] = e[t]) }), new To(n) } return null }

                function Ao(t) { return t.a.La && t.a.ea ? { temporaryProof: t.a.La, phoneNumber: t.a.ea } : { sessionInfo: t.a.cb, code: t.a.bb } }

                function ko(t) { try { this.a = t || Yl.default.auth() } catch (t) { throw new I("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().") }
                    Vi(this, { providerId: "phone", isOAuthProvider: !1 }) }

                function So(t, e) { if (!t) throw new I("missing-verification-id"); if (!e) throw new I("missing-verification-code"); return new To({ cb: t, bb: e }) }

                function No(t) { if (t.temporaryProof && t.phoneNumber) return new To({ La: t.temporaryProof, ea: t.phoneNumber }); var e = t && t.providerId; if (!e || "password" === e) return null; var n = t && t.oauthAccessToken,
                        i = t && t.oauthTokenSecret,
                        r = t && t.nonce,
                        o = t && t.oauthIdToken,
                        a = t && t.pendingToken; try { switch (e) {
                            case "google.com":
                                return po(o, n);
                            case "facebook.com":
                                return co(n);
                            case "github.com":
                                return lo(n);
                            case "twitter.com":
                                return mo(n, i);
                            default:
                                return n || i || o || a ? a ? 0 == e.indexOf("saml.") ? new Qr(e, a) : new no(e, { pendingToken: a, idToken: t.oauthIdToken, accessToken: t.oauthAccessToken }, e) : new so(e).credential({ idToken: o, accessToken: n, rawNonce: r }) : null } } catch (t) { return null } }

                function _o(t) { if (!t.isOAuthProvider) throw new I("invalid-oauth-provider") }

                function Oo(t, e, n, i, r, o, a) { if (this.c = t, this.b = e || null, this.g = n || null, this.f = i || null, this.i = o || null, this.h = a || null, this.a = r || null, !this.g && !this.a) throw new I("invalid-auth-event"); if (this.g && this.a) throw new I("invalid-auth-event"); if (this.g && !this.f) throw new I("invalid-auth-event") }

                function Co(t) { return (t = t || {}).type ? new Oo(t.type, t.eventId, t.urlResponse, t.sessionId, t.error && T(t.error), t.postBody, t.tenantId) : null }

                function Ro() { this.b = null, this.a = [] }
                Jr.prototype.Ha = function() { return this.a ? be(this.a) : be(this.b) }, Jr.prototype.w = function() { return this.type == Yr ? { multiFactorSession: { idToken: this.a } } : { multiFactorSession: { pendingCredential: this.b } } }, $r.prototype.ja = function() {}, $r.prototype.b = function() {}, $r.prototype.c = function() {}, $r.prototype.w = function() {}, Qr.prototype.ja = function(t) { return cs(t, to(this)) }, Qr.prototype.b = function(t, e) { var n = to(this); return n.idToken = e, hs(t, n) }, Qr.prototype.c = function(t, e) { return Zr(ls(t, to(this)), e) }, Qr.prototype.w = function() { return { providerId: this.providerId, signInMethod: this.signInMethod, pendingToken: this.a } }, no.prototype.ja = function(t) { return cs(t, io(this)) }, no.prototype.b = function(t, e) { var n = io(this); return n.idToken = e, hs(t, n) }, no.prototype.c = function(t, e) { return Zr(ls(t, io(this)), e) }, no.prototype.w = function() { var t = { providerId: this.providerId, signInMethod: this.signInMethod }; return this.idToken && (t.oauthIdToken = this.idToken), this.accessToken && (t.oauthAccessToken = this.accessToken), this.secret && (t.oauthTokenSecret = this.secret), this.nonce && (t.nonce = this.nonce), this.a && (t.pendingToken = this.a), t }, oo.prototype.Ka = function(t) { return this.Hb = ut(t), this }, w(ao, oo), w(so, oo), so.prototype.Ca = function(t) { return H(this.a, t) || this.a.push(t), this }, so.prototype.Pb = function() { return W(this.a) }, so.prototype.credential = function(t, e) { e = v(t) ? { idToken: t.idToken || null, accessToken: t.accessToken || null, nonce: t.rawNonce || null } : { idToken: t || null, accessToken: e || null }; if (!e.idToken && !e.accessToken) throw new I("argument-error", "credential failed: must provide the ID token and/or the access token."); return new no(this.providerId, e, this.providerId) }, w(uo, so), Ui(uo, "PROVIDER_ID", "facebook.com"), Ui(uo, "FACEBOOK_SIGN_IN_METHOD", "facebook.com"), w(ho, so), Ui(ho, "PROVIDER_ID", "github.com"), Ui(ho, "GITHUB_SIGN_IN_METHOD", "github.com"), w(fo, so), Ui(fo, "PROVIDER_ID", "google.com"), Ui(fo, "GOOGLE_SIGN_IN_METHOD", "google.com"), w(vo, oo), Ui(vo, "PROVIDER_ID", "twitter.com"), Ui(vo, "TWITTER_SIGN_IN_METHOD", "twitter.com"), go.prototype.ja = function(t) { return this.signInMethod == yo.EMAIL_LINK_SIGN_IN_METHOD ? Ws(t, ys, { email: this.a, oobCode: this.f }) : Ws(t, qs, { email: this.a, password: this.f }) }, go.prototype.b = function(t, e) { return this.signInMethod == yo.EMAIL_LINK_SIGN_IN_METHOD ? Ws(t, ws, { idToken: e, email: this.a, oobCode: this.f }) : Ws(t, Ps, { idToken: e, email: this.a, password: this.f }) }, go.prototype.c = function(t, e) { return Zr(this.ja(t), e) }, go.prototype.w = function() { return { email: this.a, password: this.f, signInMethod: this.signInMethod } }, Vi(yo, { PROVIDER_ID: "password" }), Vi(yo, { EMAIL_LINK_SIGN_IN_METHOD: "emailLink" }), Vi(yo, { EMAIL_PASSWORD_SIGN_IN_METHOD: "password" }), To.prototype.ja = function(t) { return t.eb(Ao(this)) }, To.prototype.b = function(t, e) { var n = Ao(this); return n.idToken = e, Ws(t, Ks, n) }, To.prototype.c = function(t, e) { var n = Ao(this); return n.operation = "REAUTH", Zr(t = Ws(t, Gs, n), e) }, To.prototype.w = function() { var t = { providerId: "phone" }; return this.a.cb && (t.verificationId = this.a.cb), this.a.bb && (t.verificationCode = this.a.bb), this.a.La && (t.temporaryProof = this.a.La), this.a.ea && (t.phoneNumber = this.a.ea), t }, ko.prototype.eb = function(i, r) { var o = this.a.a; return be(r.verify()).then(function(n) { if ("string" != typeof n) throw new I("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string."); if ("recaptcha" !== r.type) throw new I("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.'); var t = v(i) ? i.session : null,
                            e = v(i) ? i.phoneNumber : i,
                            t = t && t.type == Yr ? t.Ha().then(function(t) { return Ws(o, xs, { idToken: t, phoneEnrollmentInfo: { phoneNumber: e, recaptchaToken: n } }).then(function(t) { return t.phoneSessionInfo.sessionInfo }) }) : t && t.type == zr ? t.Ha().then(function(t) { return e = o, t = { mfaPendingCredential: t, mfaEnrollmentId: i.multiFactorHint && i.multiFactorHint.uid || i.multiFactorUid, phoneSignInInfo: { recaptchaToken: n } }, Ws(e, Ms, t).then(function(t) { return t.phoneResponseInfo.sessionInfo }); var e }) : Ws(o, Rs, { phoneNumber: e, recaptchaToken: n }); return t.then(function(t) { return "function" == typeof r.reset && r.reset(), t }, function(t) { throw "function" == typeof r.reset && r.reset(), t }) }) }, Vi(ko, { PROVIDER_ID: "phone" }), Vi(ko, { PHONE_SIGN_IN_METHOD: "phone" }), Oo.prototype.getUid = function() { var t = []; return t.push(this.c), this.b && t.push(this.b), this.f && t.push(this.f), this.h && t.push(this.h), t.join("-") }, Oo.prototype.S = function() { return this.h }, Oo.prototype.w = function() { return { type: this.c, eventId: this.b, urlResponse: this.g, sessionId: this.f, postBody: this.i, tenantId: this.h, error: this.a && this.a.w() } }; var Do, Po = null;

                function Lo(t) { var e = "unauthorized-domain",
                        n = void 0,
                        i = _n(t);
                    t = i.a, "chrome-extension" == (i = i.f) ? n = xt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : "http" == i || "https" == i ? n = xt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", t) : e = "operation-not-supported-in-this-environment", I.call(this, e, n) }

                function xo(t, e, n) { I.call(this, t, n), (t = e || {}).Ib && Ui(this, "email", t.Ib), t.ea && Ui(this, "phoneNumber", t.ea), t.credential && Ui(this, "credential", t.credential), t.Yb && Ui(this, "tenantId", t.Yb) }

                function Mo(t) { if (t.code) { var e = t.code || "";
                        0 == e.indexOf(A) && (e = e.substring(A.length)); var n = { credential: No(t), Yb: t.tenantId }; if (t.email) n.Ib = t.email;
                        else if (t.phoneNumber) n.ea = t.phoneNumber;
                        else if (!n.credential) return new I(e, t.message || void 0); return new xo(e, n, t.message) } return null }

                function jo() {}

                function Uo(t) { return t.c || (t.c = t.b()) }

                function Vo() {}

                function Fo(t) { if (t.f || "undefined" != typeof XMLHttpRequest || "undefined" == typeof ActiveXObject) return t.f; for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < e.length; n++) { var i = e[n]; try { return new ActiveXObject(i), t.f = i } catch (t) {} } throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed") }

                function qo() {}

                function Ho() { this.a = new XDomainRequest, this.readyState = 0, this.onreadystatechange = null, this.responseType = this.responseText = this.response = "", this.status = -1, this.statusText = "", this.a.onload = g(this.pc, this), this.a.onerror = g(this.Rb, this), this.a.onprogress = g(this.qc, this), this.a.ontimeout = g(this.uc, this) }

                function Ko(t, e) { t.readyState = e, t.onreadystatechange && t.onreadystatechange() }

                function Go(t, e, n) { this.reset(t, e, n, void 0, void 0) }

                function Bo(t) { this.f = t, this.b = this.c = this.a = null }

                function Wo(t, e) { this.name = t, this.value = e }
                w(Lo, I), w(xo, I), xo.prototype.w = function() { var t = { code: this.code, message: this.message };
                    this.email && (t.email = this.email), this.phoneNumber && (t.phoneNumber = this.phoneNumber), this.tenantId && (t.tenantId = this.tenantId); var e = this.credential && this.credential.w(); return e && ht(t, e), t }, xo.prototype.toJSON = function() { return this.w() }, jo.prototype.c = null, w(Vo, jo), Vo.prototype.a = function() { var t = Fo(this); return t ? new ActiveXObject(t) : new XMLHttpRequest }, Vo.prototype.b = function() { var t = {}; return Fo(this) && (t[0] = !0, t[1] = !0), t }, Do = new Vo, w(qo, jo), qo.prototype.a = function() { var t = new XMLHttpRequest; if ("withCredentials" in t) return t; if ("undefined" != typeof XDomainRequest) return new Ho; throw Error("Unsupported browser") }, qo.prototype.b = function() { return {} }, (t = Ho.prototype).open = function(t, e, n) { if (null != n && !n) throw Error("Only async requests are supported.");
                    this.a.open(t, e) }, t.send = function(t) { if (t) { if ("string" != typeof t) throw Error("Only string data is supported");
                        this.a.send(t) } else this.a.send() }, t.abort = function() { this.a.abort() }, t.setRequestHeader = function() {}, t.getResponseHeader = function(t) { return "content-type" == t.toLowerCase() ? this.a.contentType : "" }, t.pc = function() { this.status = 200, this.response = this.responseText = this.a.responseText, Ko(this, 4) }, t.Rb = function() { this.status = 500, this.response = this.responseText = "", Ko(this, 4) }, t.uc = function() { this.Rb() }, t.qc = function() { this.status = 200, Ko(this, 1) }, t.getAllResponseHeaders = function() { return "content-type: " + this.a.contentType }, Go.prototype.a = null, Go.prototype.reset = function(t, e, n, i, r) { delete this.a }, Wo.prototype.toString = function() { return this.name }; var Xo = new Wo("SEVERE", 1e3),
                    Jo = new Wo("WARNING", 900),
                    Yo = new Wo("CONFIG", 700),
                    zo = new Wo("FINE", 500);
                Bo.prototype.log = function(t, e, n) { if (t.value >= function t(e) { return e.c ? e.c : e.a ? t(e.a) : (R("Root logger has no level set."), null) }(this).value)
                        for (p(e) && (e = e()), t = new Go(t, String(e), this.f), n && (t.a = n), n = this; n;) n = n.a }; var $o, Zo = {},
                    Qo = null;

                function ta(t) { var e, n, i; return Qo || (Qo = new Bo(""), (Zo[""] = Qo).c = Yo), (e = Zo[t]) || (e = new Bo(t), i = t.lastIndexOf("."), n = t.substr(i + 1), (i = ta(t.substr(0, i))).b || (i.b = {}), (i.b[n] = e).a = i, Zo[t] = e), e }

                function ea(t, e) { t && t.log(zo, e, void 0) }

                function na(t) { this.f = t }

                function ia(t) { hn.call(this), this.o = t, this.readyState = ra, this.status = 0, this.responseType = this.responseText = this.response = this.statusText = "", this.onreadystatechange = null, this.i = new Headers, this.b = null, this.m = "GET", this.g = "", this.a = !1, this.h = ta("goog.net.FetchXmlHttp"), this.l = this.c = this.f = null }
                w(na, jo), na.prototype.a = function() { return new ia(this.f) }, na.prototype.b = ($o = {}, function() { return $o }), w(ia, hn); var ra = 0;

                function oa(t) { t.c.read().then(t.oc.bind(t)).catch(t.Ta.bind(t)) }

                function aa(t, e) { e && t.f && (t.status = t.f.status, t.statusText = t.f.statusText), t.readyState = 4, t.f = null, t.c = null, t.l = null, sa(t) }

                function sa(t) { t.onreadystatechange && t.onreadystatechange.call(t) }

                function ua(t) { hn.call(this), this.headers = new bn, this.O = t || null, this.c = !1, this.A = this.a = null, this.h = this.P = this.l = "", this.f = this.N = this.i = this.G = !1, this.g = 0, this.o = null, this.m = ca, this.u = this.R = !1 }(t = ia.prototype).open = function(t, e) { if (this.readyState != ra) throw this.abort(), Error("Error reopening a connection");
                    this.m = t, this.g = e, this.readyState = 1, sa(this) }, t.send = function(t) { if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
                    this.a = !0; var e = { headers: this.i, method: this.m, credentials: void 0, cache: void 0 };
                    t && (e.body = t), this.o.fetch(new Request(this.g, e)).then(this.tc.bind(this), this.Ta.bind(this)) }, t.abort = function() { this.response = this.responseText = "", this.i = new Headers, this.status = 0, this.c && this.c.cancel("Request was aborted."), 1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, aa(this, !1)), this.readyState = ra }, t.tc = function(t) { this.a && (this.f = t, this.b || (this.b = t.headers, this.readyState = 2, sa(this)), this.a && (this.readyState = 3, sa(this), this.a && ("arraybuffer" === this.responseType ? t.arrayBuffer().then(this.rc.bind(this), this.Ta.bind(this)) : void 0 !== l.ReadableStream && "body" in t ? (this.response = this.responseText = "", this.c = t.body.getReader(), this.l = new TextDecoder, oa(this)) : t.text().then(this.sc.bind(this), this.Ta.bind(this))))) }, t.oc = function(t) { var e;
                    this.a && ((e = this.l.decode(t.value ? t.value : new Uint8Array(0), { stream: !t.done })) && (this.response = this.responseText += e), t.done ? aa(this, !0) : sa(this), 3 == this.readyState && oa(this)) }, t.sc = function(t) { this.a && (this.response = this.responseText = t, aa(this, !0)) }, t.rc = function(t) { this.a && (this.response = t, aa(this, !0)) }, t.Ta = function(t) { var e = this.h;
                    e && e.log(Jo, "Failed to fetch url " + this.g, t instanceof Error ? t : Error(t)), this.a && aa(this, !0) }, t.setRequestHeader = function(t, e) { this.i.append(t, e) }, t.getResponseHeader = function(t) { return this.b ? this.b.get(t.toLowerCase()) || "" : ((t = this.h) && t.log(Jo, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "") }, t.getAllResponseHeaders = function() { if (!this.b) { var t = this.h; return t && t.log(Jo, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0), "" }
                    t = []; for (var e = this.b.entries(), n = e.next(); !n.done;) n = n.value, t.push(n[0] + ": " + n[1]), n = e.next(); return t.join("\r\n") }, w(ua, hn); var ca = "";
                ua.prototype.b = ta("goog.net.XhrIo"); var ha = /^https?$/i,
                    la = ["POST", "PUT"];

                function fa(e, t, n, i, r) { if (e.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + e.l + "; newUri=" + t);
                    n = n ? n.toUpperCase() : "GET", e.l = t, e.h = "", e.P = n, e.G = !1, e.c = !0, e.a = (e.O ? e.O : Do).a(), e.A = e.O ? Uo(e.O) : Uo(Do), e.a.onreadystatechange = g(e.Ub, e); try { ea(e.b, Ia(e, "Opening Xhr")), e.N = !0, e.a.open(n, String(t), !0), e.N = !1 } catch (t) { return ea(e.b, Ia(e, "Error opening Xhr: " + t.message)), void pa(e, t) }
                    t = i || ""; var o, a = new bn(e.headers);
                    r && function(t, e) { if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                        else if (d(t) || "string" == typeof t) U(t, e, void 0);
                        else
                            for (var n = gn(t), i = mn(t), r = i.length, o = 0; o < r; o++) e.call(void 0, i[o], n && n[o], t) }(r, function(t, e) { a.set(e, t) }), r = function(t) { t: { for (var e = da, n = t.length, i = "string" == typeof t ? t.split("") : t, r = 0; r < n; r++)
                                if (r in i && e.call(void 0, i[r], r, t)) { e = r; break t }
                            e = -1 } return e < 0 ? null : "string" == typeof t ? t.charAt(e) : t[e] }(a.Y()), i = l.FormData && t instanceof l.FormData, !H(la, n) || r || i || a.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), a.forEach(function(t, e) { this.a.setRequestHeader(e, t) }, e), e.m && (e.a.responseType = e.m), "withCredentials" in e.a && e.a.withCredentials !== e.R && (e.a.withCredentials = e.R); try { ba(e), 0 < e.g && (e.u = (o = e.a, Ft && zt(9) && "number" == typeof o.timeout && void 0 !== o.ontimeout), ea(e.b, Ia(e, "Will abort after " + e.g + "ms if incomplete, xhr2 " + e.u)), e.u ? (e.a.timeout = e.g, e.a.ontimeout = g(e.Ma, e)) : e.o = pn(e.Ma, e.g, e)), ea(e.b, Ia(e, "Sending request")), e.i = !0, e.a.send(t), e.i = !1 } catch (t) { ea(e.b, Ia(e, "Send error: " + t.message)), pa(e, t) } }

                function da(t) { return "content-type" == t.toLowerCase() }

                function pa(t, e) { t.c = !1, t.a && (t.f = !0, t.a.abort(), t.f = !1), t.h = e, va(t), ga(t) }

                function va(t) { t.G || (t.G = !0, t.dispatchEvent("complete"), t.dispatchEvent("error")) }

                function ma(e) { if (e.c && void 0 !== h)
                        if (e.A[1] && 4 == ya(e) && 2 == wa(e)) ea(e.b, Ia(e, "Local request error detected and ignored"));
                        else if (e.i && 4 == ya(e)) pn(e.Ub, 0, e);
                    else if (e.dispatchEvent("readystatechange"), 4 == ya(e)) { ea(e.b, Ia(e, "Request complete")), e.c = !1; try { var t, n, i, r, o = wa(e);
                            t: switch (o) {
                                case 200:
                                case 201:
                                case 202:
                                case 204:
                                case 206:
                                case 304:
                                case 1223:
                                    var a = !0; break t;
                                default:
                                    a = !1 }
                            if ((t = a) || ((n = 0 === o) && (!(r = String(e.l).match(In)[1] || null) && l.self && l.self.location && (r = (i = l.self.location.protocol).substr(0, i.length - 1)), n = !ha.test(r ? r.toLowerCase() : "")), t = n), t) e.dispatchEvent("complete"), e.dispatchEvent("success");
                            else { try { var s = 2 < ya(e) ? e.a.statusText : "" } catch (t) { ea(e.b, "Can not get status: " + t.message), s = "" }
                                e.h = s + " [" + wa(e) + "]", va(e) } } finally { ga(e) } } }

                function ga(e, t) { if (e.a) { ba(e); var n = e.a,
                            i = e.A[0] ? a : null;
                        e.a = null, e.A = null, t || e.dispatchEvent("ready"); try { n.onreadystatechange = i } catch (t) {
                            (e = e.b) && e.log(Xo, "Problem encountered resetting onreadystatechange: " + t.message, void 0) } } }

                function ba(t) { t.a && t.u && (t.a.ontimeout = null), t.o && (l.clearTimeout(t.o), t.o = null) }

                function ya(t) { return t.a ? t.a.readyState : 0 }

                function wa(t) { try { return 2 < ya(t) ? t.a.status : -1 } catch (t) { return -1 } }

                function Ia(t, e) { return e + " [" + t.P + " " + t.l + " " + wa(t) + "]" }

                function Ta(t) { var e = Pa;
                    this.g = [], this.u = e, this.o = t || null, this.f = this.a = !1, this.c = void 0, this.m = this.A = this.i = !1, this.h = 0, this.b = null, this.l = 0 }

                function Ea(t, e, n) { t.a = !0, t.c = n, t.f = !e, Na(t) }

                function Aa(t) { if (t.a) { if (!t.m) throw new _a;
                        t.m = !1 } }

                function ka(t, e, n, i) { t.g.push([e, n, i]), t.a && Na(t) }

                function Sa(t) { return q(t.g, function(t) { return p(t[1]) }) }

                function Na(e) { var n, i;
                    e.h && e.a && Sa(e) && (n = e.h, (i = Ra[n]) && (l.clearTimeout(i.a), delete Ra[n]), e.h = 0), e.b && (e.b.l--, delete e.b), n = e.c; for (var t = i = !1; e.g.length && !e.i;) { var r = (a = e.g.shift())[0],
                            o = a[1],
                            a = a[2]; if (r = e.f ? o : r) try { var s = r.call(a || e.o, n);
                            void 0 !== s && (e.f = e.f && (s == n || s instanceof Error), e.c = n = s), (_(n) || "function" == typeof l.Promise && n instanceof l.Promise) && (t = !0, e.i = !0) } catch (t) { n = t, e.f = !0, Sa(e) || (i = !0) } }
                    e.c = n, t && (s = g(e.v, e, !0), t = g(e.v, e, !1), n instanceof Ta ? (ka(n, s, t), n.A = !0) : n.then(s, t)), i && (n = new Ca(n), Ra[n.a] = n, e.h = n.a) }

                function _a() { O.call(this) }

                function Oa() { O.call(this) }

                function Ca(t) { this.a = l.setTimeout(g(this.c, this), 0), this.b = t }(t = ua.prototype).Ma = function() { void 0 !== h && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", ea(this.b, Ia(this, this.h)), this.dispatchEvent("timeout"), this.abort(8)) }, t.abort = function() { this.a && this.c && (ea(this.b, Ia(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), ga(this)) }, t.Da = function() { this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), ga(this, !0)), ua.$a.Da.call(this) }, t.Ub = function() { this.xa || (this.N || this.i || this.f ? ma(this) : this.Ic()) }, t.Ic = function() { ma(this) }, t.getResponse = function() { try { if (!this.a) return null; if ("response" in this.a) return this.a.response; switch (this.m) {
                            case ca:
                            case "text":
                                return this.a.responseText;
                            case "arraybuffer":
                                if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer } var t = this.b; return t && t.log(Xo, "Response type " + this.m + " is not supported on this browser", void 0), null } catch (t) { return ea(this.b, "Can not get response: " + t.message), null } }, Ta.prototype.cancel = function(t) { var e;
                    this.a ? this.c instanceof Ta && this.c.cancel() : (this.b && (e = this.b, delete this.b, t ? e.cancel(t) : (e.l--, e.l <= 0 && e.cancel())), this.u ? this.u.call(this.o, this) : this.m = !0, this.a || (t = new Oa, Aa(this), Ea(this, !1, t))) }, Ta.prototype.v = function(t, e) { this.i = !1, Ea(this, t, e) }, Ta.prototype.then = function(t, e, n) { var i, r, o = new le(function(t, e) { i = t, r = e }); return ka(this, i, function(t) { t instanceof Oa ? o.cancel() : r(t) }), o.then(t, e, n) }, Ta.prototype.$goog_Thenable = !0, w(_a, O), _a.prototype.message = "Deferred has already fired", _a.prototype.name = "AlreadyCalledError", w(Oa, O), Oa.prototype.message = "Deferred was canceled", Oa.prototype.name = "CanceledError", Ca.prototype.c = function() { throw delete Ra[this.a], this.b }; var Ra = {};

                function Da(t) { var e = document,
                        n = bt(t).toString(),
                        i = re(document, "SCRIPT"),
                        r = { Vb: i, Ma: void 0 },
                        o = new Ta(r),
                        a = window.setTimeout(function() { La(i, !0); var t = new ja(Ma, "Timeout reached for loading script " + n);
                            Aa(o), Ea(o, !1, t) }, 5e3); return r.Ma = a, i.onload = i.onreadystatechange = function() { i.readyState && "loaded" != i.readyState && "complete" != i.readyState || (La(i, !1, a), Aa(o), Ea(o, !0, null)) }, i.onerror = function() { La(i, !0, a); var t = new ja(xa, "Error while loading script " + n);
                        Aa(o), Ea(o, !1, t) }, ht(r = {}, { type: "text/javascript", charset: "UTF-8" }), Qt(i, r), r = t, lt(t = i, "HTMLScriptElement"), t.src = bt(r), null === f && (f = (r = (r = l.document).querySelector && r.querySelector("script[nonce]")) && (r = r.nonce || r.getAttribute("nonce")) && s.test(r) ? r : ""), (r = f) && t.setAttribute("nonce", r), ((e = ((r = e) || document).getElementsByTagName("HEAD")) && 0 != e.length ? e[0] : r.documentElement).appendChild(i), o }

                function Pa() { var t;
                    this && this.Vb && ((t = this.Vb) && "SCRIPT" == t.tagName && La(t, !0, this.Ma)) }

                function La(t, e, n) { null != n && l.clearTimeout(n), t.onload = a, t.onerror = a, t.onreadystatechange = a, e && window.setTimeout(function() { t && t.parentNode && t.parentNode.removeChild(t) }, 0) } var xa = 0,
                    Ma = 1;

                function ja(t, e) { var n = "Jsloader error (code #" + t + ")";
                    e && (n += ": " + e), O.call(this, n), this.code = t }

                function Ua(t) { this.f = t }

                function Va(t, e, n) { if (this.c = t, t = e || {}, this.l = t.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token", this.v = t.secureTokenTimeout || Ha, this.g = ut(t.secureTokenHeaders || Ka), this.h = t.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/", this.i = t.identityPlatformEndpoint || "https://identitytoolkit.googleapis.com/v2/", this.m = t.firebaseTimeout || Ga, this.a = ut(t.firebaseHeaders || Ba), n && (this.a["X-Client-Version"] = n, this.g["X-Client-Version"] = n), n = "Node" == ci(), !(n = l.XMLHttpRequest || n && Yl.default.INTERNAL.node && Yl.default.INTERNAL.node.XMLHttpRequest) && !ui()) throw new I("internal-error", "The XMLHttpRequest compatibility library was not found.");
                    this.f = void 0, ui() ? this.f = new na(self) : hi() ? this.f = new Ua(n) : this.f = new qo, this.b = null }
                w(ja, O), w(Ua, jo), Ua.prototype.a = function() { return new this.f }, Ua.prototype.b = function() { return {} }; var Fa, qa = "idToken",
                    Ha = new Oi(3e4, 6e4),
                    Ka = { "Content-Type": "application/x-www-form-urlencoded" },
                    Ga = new Oi(3e4, 6e4),
                    Ba = { "Content-Type": "application/json" };

                function Wa(t, e) { e ? t.a["X-Firebase-Locale"] = e : delete t.a["X-Firebase-Locale"] }

                function Xa(t, e) { e && (t.l = Ja("https://securetoken.googleapis.com/v1/token", e), t.h = Ja("https://www.googleapis.com/identitytoolkit/v3/relyingparty/", e), t.i = Ja("https://identitytoolkit.googleapis.com/v2/", e)) }

                function Ja(t, e) { return t = _n(t), e = _n(e.url), t.c = t.a + t.c, En(t, e.f), t.a = e.a, An(t, e.g), t.toString() }

                function Ya(t, e) { e ? (t.a["X-Client-Version"] = e, t.g["X-Client-Version"] = e) : (delete t.a["X-Client-Version"], delete t.g["X-Client-Version"]) }

                function za(t, e, n, i, r, o, a) { var s;
                    (t = ((s = di(s = mi()) == fi && (s = s.match(/\sChrome\/(\d+)/i)) && 2 == s.length ? parseInt(s[1], 10) : null) && s < 30 || Ft && Jt && !(9 < Jt)) && !ui() ? (Fa = Fa || new le(function(t, e) {! function(t, e) {
                            {
                                ((window.gapi || {}).client || {}).request ? t() : (l[Za] = function() {
                                    ((window.gapi || {}).client || {}).request ? t() : e(Error("CORS_UNSUPPORTED")) }, function(t, e) { ka(t, null, e, void 0) }(Da(yt($a, { onload: Za })), function() { e(Error("CORS_UNSUPPORTED")) })) } }(t, e) }), g(t.o, t)) : g(t.u, t))(e, n, i, r, o, a) }
                Va.prototype.S = function() { return this.b }, Va.prototype.u = function(t, n, e, i, r, o) { if (ui() && (void 0 === l.fetch || void 0 === l.Headers || void 0 === l.Request)) throw new I("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment."); var a, s = new ua(this.f);
                    o && (s.g = Math.max(0, o), a = setTimeout(function() { s.dispatchEvent("timeout") }, o)), ln(s, "complete", function() { a && clearTimeout(a); var e = null; try { e = JSON.parse(function(e) { try { return e.a ? e.a.responseText : "" } catch (t) { return ea(e.b, "Can not get responseText: " + t.message), "" } }(this)) || null } catch (t) { e = null }
                        n && n(e) }), fn(s, "ready", function() { a && clearTimeout(a), Le(this) }), fn(s, "timeout", function() { a && clearTimeout(a), Le(this), n && n(null) }), fa(s, t, e, i, r) }; var $a = new ft(vt, "https://apis.google.com/js/client.js?onload=%{onload}"),
                    Za = "__fcb" + Math.floor(1e6 * Math.random()).toString();

                function Qa(t, e, n, i, r, o, a) { var s = _n(e + n);
                    Sn(s, "key", t.c), a && Sn(s, "cb", y().toString()); var u = "GET" == i; if (u)
                        for (var c in r) r.hasOwnProperty(c) && Sn(s, c, r[c]); return new le(function(e, n) { za(t, s.toString(), function(t) { t ? t.error ? n(Js(t, o || {})) : e(t) : n(new I("network-request-failed")) }, i, u ? void 0 : Wn(Ai(r)), t.a, t.m.get()) }) }

                function ts(t) { if ("string" != typeof(t = t.email) || !ri.test(t)) throw new I("invalid-email") }

                function es(t) { "email" in t && ts(t) }

                function ns(t) { if (!t[qa]) { if (t.mfaPendingCredential) throw new I("multi-factor-auth-required", null, ut(t)); throw new I("internal-error") } }

                function is(t) { if (t.phoneNumber || t.temporaryProof) { if (!t.phoneNumber || !t.temporaryProof) throw new I("internal-error") } else { if (!t.sessionInfo) throw new I("missing-verification-id"); if (!t.code) throw new I("missing-verification-code") } }
                Va.prototype.o = function(t, n, i, r, o) { var a = this;
                    Fa.then(function() { window.gapi.client.setApiKey(a.c); var e = window.gapi.auth.getToken();
                        window.gapi.auth.setToken(null), window.gapi.client.request({ path: t, method: i, body: r, headers: o, authType: "none", callback: function(t) { window.gapi.auth.setToken(e), n && n(t) } }) }).s(function(t) { n && n({ error: { message: t && t.message || "CORS_UNSUPPORTED" } }) }) }, Va.prototype.yb = function() { return Ws(this, Ls, {}) }, Va.prototype.Ab = function(t, e) { return Ws(this, Ds, { idToken: t, email: e }) }, Va.prototype.Bb = function(t, e) { return Ws(this, Ps, { idToken: t, password: e }) }; var rs = { displayName: "DISPLAY_NAME", photoUrl: "PHOTO_URL" };

                function os(t) { if (!t.phoneVerificationInfo) throw new I("internal-error"); if (!t.phoneVerificationInfo.sessionInfo) throw new I("missing-verification-id"); if (!t.phoneVerificationInfo.code) throw new I("missing-verification-code") }

                function as(t) { if (!t.requestUri || !t.sessionId && !t.postBody && !t.pendingToken) throw new I("internal-error") }

                function ss(t, e) { return e.oauthIdToken && e.providerId && 0 == e.providerId.indexOf("oidc.") && !e.pendingToken && (t.sessionId ? e.nonce = t.sessionId : t.postBody && (Hn(t = new Un(t.postBody), "nonce") && (e.nonce = t.get("nonce")))), e }

                function us(t) { var e = null; if (t.needConfirmation ? (t.code = "account-exists-with-different-credential", e = Mo(t)) : "FEDERATED_USER_ID_ALREADY_LINKED" == t.errorMessage ? (t.code = "credential-already-in-use", e = Mo(t)) : "EMAIL_EXISTS" == t.errorMessage ? (t.code = "email-already-in-use", e = Mo(t)) : t.errorMessage && (e = Xs(t.errorMessage)), e) throw e;
                    ns(t) }

                function cs(t, e) { return e.returnIdpCredential = !0, Ws(t, js, e) }

                function hs(t, e) { return e.returnIdpCredential = !0, Ws(t, Vs, e) }

                function ls(t, e) { return e.returnIdpCredential = !0, e.autoCreate = !1, Ws(t, Us, e) }

                function fs(t) { if (!t.oobCode) throw new I("invalid-action-code") }(t = Va.prototype).Cb = function(t, i) { var r = { idToken: t },
                        o = []; return at(rs, function(t, e) { var n = i[e];
                        null === n ? o.push(t) : e in i && (r[e] = n) }), o.length && (r.deleteAttribute = o), Ws(this, Ds, r) }, t.ub = function(t, e) { return ht(t = { requestType: "PASSWORD_RESET", email: t }, e), Ws(this, Ns, t) }, t.vb = function(t, e) { return ht(t = { requestType: "EMAIL_SIGNIN", email: t }, e), Ws(this, As, t) }, t.tb = function(t, e) { return ht(t = { requestType: "VERIFY_EMAIL", idToken: t }, e), Ws(this, ks, t) }, t.Db = function(t, e, n) { return ht(t = { requestType: "VERIFY_AND_CHANGE_EMAIL", idToken: t, newEmail: e }, n), Ws(this, Ss, t) }, t.eb = function(t) { return Ws(this, Hs, t) }, t.mb = function(t, e) { return Ws(this, Cs, { oobCode: t, newPassword: e }) }, t.Qa = function(t) { return Ws(this, ps, { oobCode: t }) }, t.ib = function(t) { return Ws(this, ds, { oobCode: t }) }; var ds = { endpoint: "setAccountInfo", B: fs, Z: "email", C: !0 },
                    ps = { endpoint: "resetPassword", B: fs, F: function(t) { var e = t.requestType; if (!e || !t.email && "EMAIL_SIGNIN" != e && "VERIFY_AND_CHANGE_EMAIL" != e) throw new I("internal-error") }, C: !0 },
                    vs = { endpoint: "signupNewUser", B: function(t) { if (ts(t), !t.password) throw new I("weak-password") }, F: ns, U: !0, C: !0 },
                    ms = { endpoint: "createAuthUri", C: !0 },
                    gs = { endpoint: "deleteAccount", M: ["idToken"] },
                    bs = { endpoint: "setAccountInfo", M: ["idToken", "deleteProvider"], B: function(t) { if ("array" != n(t.deleteProvider)) throw new I("internal-error") } },
                    ys = { endpoint: "emailLinkSignin", M: ["email", "oobCode"], B: ts, F: ns, U: !0, C: !0 },
                    ws = { endpoint: "emailLinkSignin", M: ["idToken", "email", "oobCode"], B: ts, F: ns, U: !0 },
                    Is = { endpoint: "accounts/mfaEnrollment:finalize", M: ["idToken", "phoneVerificationInfo"], B: os, F: ns, C: !0, Na: !0 },
                    Ts = { endpoint: "accounts/mfaSignIn:finalize", M: ["mfaPendingCredential", "phoneVerificationInfo"], B: os, F: ns, C: !0, Na: !0 },
                    Es = { endpoint: "getAccountInfo" },
                    As = { endpoint: "getOobConfirmationCode", M: ["requestType"], B: function(t) { if ("EMAIL_SIGNIN" != t.requestType) throw new I("internal-error");
                            ts(t) }, Z: "email", C: !0 },
                    ks = { endpoint: "getOobConfirmationCode", M: ["idToken", "requestType"], B: function(t) { if ("VERIFY_EMAIL" != t.requestType) throw new I("internal-error") }, Z: "email", C: !0 },
                    Ss = { endpoint: "getOobConfirmationCode", M: ["idToken", "newEmail", "requestType"], B: function(t) { if ("VERIFY_AND_CHANGE_EMAIL" != t.requestType) throw new I("internal-error") }, Z: "email", C: !0 },
                    Ns = { endpoint: "getOobConfirmationCode", M: ["requestType"], B: function(t) { if ("PASSWORD_RESET" != t.requestType) throw new I("internal-error");
                            ts(t) }, Z: "email", C: !0 },
                    _s = { kb: !0, endpoint: "getProjectConfig", Tb: "GET" },
                    Os = { kb: !0, endpoint: "getRecaptchaParam", Tb: "GET", F: function(t) { if (!t.recaptchaSiteKey) throw new I("internal-error") } },
                    Cs = { endpoint: "resetPassword", B: fs, Z: "email", C: !0 },
                    Rs = { endpoint: "sendVerificationCode", M: ["phoneNumber", "recaptchaToken"], Z: "sessionInfo", C: !0 },
                    Ds = { endpoint: "setAccountInfo", M: ["idToken"], B: es, U: !0 },
                    Ps = { endpoint: "setAccountInfo", M: ["idToken"], B: function(t) { if (es(t), !t.password) throw new I("weak-password") }, F: ns, U: !0 },
                    Ls = { endpoint: "signupNewUser", F: ns, U: !0, C: !0 },
                    xs = { endpoint: "accounts/mfaEnrollment:start", M: ["idToken", "phoneEnrollmentInfo"], B: function(t) { if (!t.phoneEnrollmentInfo) throw new I("internal-error"); if (!t.phoneEnrollmentInfo.phoneNumber) throw new I("missing-phone-number"); if (!t.phoneEnrollmentInfo.recaptchaToken) throw new I("missing-app-credential") }, F: function(t) { if (!t.phoneSessionInfo || !t.phoneSessionInfo.sessionInfo) throw new I("internal-error") }, C: !0, Na: !0 },
                    Ms = { endpoint: "accounts/mfaSignIn:start", M: ["mfaPendingCredential", "mfaEnrollmentId", "phoneSignInInfo"], B: function(t) { if (!t.phoneSignInInfo || !t.phoneSignInInfo.recaptchaToken) throw new I("missing-app-credential") }, F: function(t) { if (!t.phoneResponseInfo || !t.phoneResponseInfo.sessionInfo) throw new I("internal-error") }, C: !0, Na: !0 },
                    js = { endpoint: "verifyAssertion", B: as, Xa: ss, F: us, U: !0, C: !0 },
                    Us = { endpoint: "verifyAssertion", B: as, Xa: ss, F: function(t) { if (t.errorMessage && "USER_NOT_FOUND" == t.errorMessage) throw new I("user-not-found"); if (t.errorMessage) throw Xs(t.errorMessage);
                            ns(t) }, U: !0, C: !0 },
                    Vs = { endpoint: "verifyAssertion", B: function(t) { if (as(t), !t.idToken) throw new I("internal-error") }, Xa: ss, F: us, U: !0 },
                    Fs = { endpoint: "verifyCustomToken", B: function(t) { if (!t.token) throw new I("invalid-custom-token") }, F: ns, U: !0, C: !0 },
                    qs = { endpoint: "verifyPassword", B: function(t) { if (ts(t), !t.password) throw new I("wrong-password") }, F: ns, U: !0, C: !0 },
                    Hs = { endpoint: "verifyPhoneNumber", B: is, F: ns, C: !0 },
                    Ks = { endpoint: "verifyPhoneNumber", B: function(t) { if (!t.idToken) throw new I("internal-error");
                            is(t) }, F: function(t) { if (t.temporaryProof) throw t.code = "credential-already-in-use", Mo(t);
                            ns(t) } },
                    Gs = { Gb: { USER_NOT_FOUND: "user-not-found" }, endpoint: "verifyPhoneNumber", B: is, F: ns, C: !0 },
                    Bs = { endpoint: "accounts/mfaEnrollment:withdraw", M: ["idToken", "mfaEnrollmentId"], F: function(t) { if (!!t[qa] ^ !!t.refreshToken) throw new I("internal-error") }, C: !0, Na: !0 };

                function Ws(t, e, n) { if (! function(t, e) { if (!e || !e.length) return 1; if (t) { for (var n = 0; n < e.length; n++) { var i = t[e[n]]; if (null == i || "" === i) return } return 1 } }(n, e.M)) return ye(new I("internal-error")); var i, r = !!e.Na,
                        o = e.Tb || "POST"; return be(n).then(e.B).then(function() { return e.U && (n.returnSecureToken = !0), e.C && t.b && void 0 === n.tenantId && (n.tenantId = t.b), Qa(t, r ? t.i : t.h, e.endpoint, o, n, e.Gb, e.kb || !1) }).then(function(t) { return i = t, e.Xa ? e.Xa(n, i) : i }).then(e.F).then(function() { if (!e.Z) return i; if (!(e.Z in i)) throw new I("internal-error"); return i[e.Z] }) }

                function Xs(t) { return Js({ error: { errors: [{ message: t }], code: 400, message: t } }) }

                function Js(t, e) { var n, i = (t.error && t.error.errors && t.error.errors[0] || {}).reason || "",
                        r = { keyInvalid: "invalid-api-key", ipRefererBlocked: "app-not-authorized" }; if (i = r[i] ? new I(r[i]) : null) return i; for (n in i = t.error && t.error.message || "", ht(r = { INVALID_CUSTOM_TOKEN: "invalid-custom-token", CREDENTIAL_MISMATCH: "custom-token-mismatch", MISSING_CUSTOM_TOKEN: "internal-error", INVALID_IDENTIFIER: "invalid-email", MISSING_CONTINUE_URI: "internal-error", INVALID_EMAIL: "invalid-email", INVALID_PASSWORD: "wrong-password", USER_DISABLED: "user-disabled", MISSING_PASSWORD: "internal-error", EMAIL_EXISTS: "email-already-in-use", PASSWORD_LOGIN_DISABLED: "operation-not-allowed", INVALID_IDP_RESPONSE: "invalid-credential", INVALID_PENDING_TOKEN: "invalid-credential", FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use", MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce", INVALID_MESSAGE_PAYLOAD: "invalid-message-payload", INVALID_RECIPIENT_EMAIL: "invalid-recipient-email", INVALID_SENDER: "invalid-sender", EMAIL_NOT_FOUND: "user-not-found", RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests", EXPIRED_OOB_CODE: "expired-action-code", INVALID_OOB_CODE: "invalid-action-code", MISSING_OOB_CODE: "internal-error", INVALID_PROVIDER_ID: "invalid-provider-id", CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login", INVALID_ID_TOKEN: "invalid-user-token", TOKEN_EXPIRED: "user-token-expired", USER_NOT_FOUND: "user-token-expired", CORS_UNSUPPORTED: "cors-unsupported", DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated", INVALID_APP_ID: "invalid-app-id", TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests", WEAK_PASSWORD: "weak-password", OPERATION_NOT_ALLOWED: "operation-not-allowed", USER_CANCELLED: "user-cancelled", CAPTCHA_CHECK_FAILED: "captcha-check-failed", INVALID_APP_CREDENTIAL: "invalid-app-credential", INVALID_CODE: "invalid-verification-code", INVALID_PHONE_NUMBER: "invalid-phone-number", INVALID_SESSION_INFO: "invalid-verification-id", INVALID_TEMPORARY_PROOF: "invalid-credential", MISSING_APP_CREDENTIAL: "missing-app-credential", MISSING_CODE: "missing-verification-code", MISSING_PHONE_NUMBER: "missing-phone-number", MISSING_SESSION_INFO: "missing-verification-id", QUOTA_EXCEEDED: "quota-exceeded", SESSION_EXPIRED: "code-expired", REJECTED_CREDENTIAL: "rejected-credential", INVALID_CONTINUE_URI: "invalid-continue-uri", MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name", MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id", UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri", INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain", INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id", INVALID_CERT_HASH: "invalid-cert-hash", UNSUPPORTED_TENANT_OPERATION: "unsupported-tenant-operation", INVALID_TENANT_ID: "invalid-tenant-id", TENANT_ID_MISMATCH: "tenant-id-mismatch", ADMIN_ONLY_OPERATION: "admin-restricted-operation", INVALID_MFA_PENDING_CREDENTIAL: "invalid-multi-factor-session", MFA_ENROLLMENT_NOT_FOUND: "multi-factor-info-not-found", MISSING_MFA_PENDING_CREDENTIAL: "missing-multi-factor-session", MISSING_MFA_ENROLLMENT_ID: "missing-multi-factor-info", EMAIL_CHANGE_NEEDS_VERIFICATION: "email-change-needs-verification", SECOND_FACTOR_EXISTS: "second-factor-already-in-use", SECOND_FACTOR_LIMIT_EXCEEDED: "maximum-second-factor-count-exceeded", UNSUPPORTED_FIRST_FACTOR: "unsupported-first-factor", UNVERIFIED_EMAIL: "unverified-email" }, e || {}), e = (e = i.match(/^[^\s]+\s*:\s*([\s\S]*)$/)) && 1 < e.length ? e[1] : void 0, r)
                        if (0 === i.indexOf(n)) return new I(r[n], e);
                    return !e && t && (e = Ei(t)), new I("internal-error", e) }

                function Ys(t) { var o;
                    this.b = t, this.a = null, this.qb = (o = this, (Qs || (Qs = new le(function(t, e) {
                        function n() { _i(), gi("gapi.load")("gapi.iframes", { callback: t, ontimeout: function() { _i(), e(Error("Network Error")) }, timeout: $s.get() }) } var i;
                        gi("gapi.iframes.Iframe") ? t() : gi("gapi.load") ? n() : (i = "__iframefcb" + Math.floor(1e6 * Math.random()).toString(), l[i] = function() { gi("gapi.load") ? n() : e(Error("Network Error")) }, be(Da(i = yt(zs, { onload: i }))).s(function() { e(Error("Network Error")) })) }).s(function(t) { throw Qs = null, t }))).then(function() { return new le(function(i, r) { gi("gapi.iframes.getContext")().open({ where: document.body, url: o.b, messageHandlersFilter: gi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"), attributes: { style: { position: "absolute", top: "-100px", width: "1px", height: "1px" } }, dontclear: !0 }, function(t) {
                                function e() { clearTimeout(n), i() }
                                o.a = t, o.a.restyle({ setHideOnLeave: !1 }); var n = setTimeout(function() { r(Error("Network Error")) }, Zs.get());
                                t.ping(e).then(e, function() { r(Error("Network Error")) }) }) }) })) } var zs = new ft(vt, "https://apis.google.com/js/api.js?onload=%{onload}"),
                    $s = new Oi(3e4, 6e4),
                    Zs = new Oi(5e3, 15e3),
                    Qs = null;

                function tu(t, e, n, i) { this.l = t, this.h = e, this.i = n, this.g = i, this.f = null, t = this.g ? On((t = _n(this.g.url)).f, t.a, t.g, "/emulator/auth/iframe") : On("https", this.l, null, "/__/auth/iframe"), this.a = t, Sn(this.a, "apiKey", this.h), Sn(this.a, "appName", this.i), this.b = null, this.c = [] }

                function eu(t, e, n, i, r, o) { this.u = t, this.o = e, this.c = n, this.v = i, this.m = o, this.i = this.g = this.l = null, this.a = r, this.h = this.f = null }

                function nu(t) { try { return Yl.default.app(t).auth().Ga() } catch (t) { return [] } }

                function iu(t, e, n, i, r, o) { this.o = t, this.g = e, this.b = n, this.f = o, this.c = i || null, this.i = r || null, this.l = this.u = this.A = null, this.h = [], this.v = this.a = null }

                function ru(t) { var s = Zn(); return Ws(t, _s, {}).then(function(t) { return t.authorizedDomains || [] }).then(function(t) { t: { for (var e = (n = _n(s)).f, n = n.a, i = 0; i < t.length; i++) { var r = t[i],
                                    o = n,
                                    a = e; if (o = 0 == r.indexOf("chrome-extension://") ? _n(r).a == o && "chrome-extension" == a : ("http" == a || "https" == a) && (ii.test(r) ? o == r : (r = r.split(".").join("\\."), new RegExp("^(.+\\." + r + "|" + r + ")$", "i").test(o)))) { t = !0; break t } }
                            t = !1 } if (!t) throw new Lo(Zn()) }) }

                function ou(r) { return r.v || (r.v = oi().then(function() { var t, e, n, i;
                        r.u || (t = r.c, e = r.i, n = nu(r.b), (i = new tu(r.o, r.g, r.b, r.f)).f = t, i.b = e, i.c = W(n || []), r.u = i.toString()), r.m = new Ys(r.u),
                            function(i) { if (!i.m) throw Error("IfcHandler must be initialized!");! function(t, e) { t.qb.then(function() { t.a.register("authEvent", e, gi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }) }(i.m, function(t) { var e = {}; if (t && t.authEvent) { var n = !1; for (t = Co(t.authEvent), e = 0; e < i.h.length; e++) n = i.h[e](t) || n; return (e = {}).status = n ? "ACK" : "ERROR", be(e) } return e.status = "ERROR", be(e) }) }(r) })), r.v }

                function au(t) { return t.l || (t.A = t.c ? vi(t.c, nu(t.b)) : null, t.l = new Va(t.g, N(t.i), t.A), t.f && Xa(t.l, t.f)), t.l }

                function su(t, e, n, i, r, o, a, s, u, c, h, l) { return (t = new eu(t, e, n, i, r, l)).l = o, t.g = a, t.i = s, t.b = ut(u || null), t.f = c, t.xb(h).toString() }

                function uu(t) { if (this.a = t || Yl.default.INTERNAL.reactNative && Yl.default.INTERNAL.reactNative.AsyncStorage, !this.a) throw new I("internal-error", "The React Native compatibility library was not found.");
                    this.type = "asyncStorage" }

                function cu(t) { this.b = t, this.a = {}, this.f = g(this.c, this) }
                tu.prototype.toString = function() { return this.f ? Sn(this.a, "v", this.f) : qn(this.a.b, "v"), this.b ? Sn(this.a, "eid", this.b) : qn(this.a.b, "eid"), this.c.length ? Sn(this.a, "fw", this.c.join(",")) : qn(this.a.b, "fw"), this.a.toString() }, eu.prototype.xb = function(t) { return this.h = t, this }, eu.prototype.toString = function() { var t; if (Sn(t = this.m ? On((t = _n(this.m.url)).f, t.a, t.g, "/emulator/auth/handler") : On("https", this.u, null, "/__/auth/handler"), "apiKey", this.o), Sn(t, "appName", this.c), Sn(t, "authType", this.v), this.a.isOAuthProvider) { var e, n = this.a; try { var i = Yl.default.app(this.c).auth().ka() } catch (t) { i = null } for (e in n.nb = i, Sn(t, "providerId", this.a.providerId), n = Ai((i = this.a).Hb)) n[e] = n[e].toString();
                        e = i.Pc, n = ut(n); for (var r = 0; r < e.length; r++) { var o = e[r];
                            o in n && delete n[o] }
                        i.ob && i.nb && !n[i.ob] && (n[i.ob] = i.nb), st(n) || Sn(t, "customParameters", Ei(n)) } if ("function" == typeof this.a.Pb && ((i = this.a.Pb()).length && Sn(t, "scopes", i.join(","))), this.l ? Sn(t, "redirectUrl", this.l) : qn(t.b, "redirectUrl"), this.g ? Sn(t, "eventId", this.g) : qn(t.b, "eventId"), this.i ? Sn(t, "v", this.i) : qn(t.b, "v"), this.b)
                        for (var a in this.b) this.b.hasOwnProperty(a) && !Nn(t, a) && Sn(t, a, this.b[a]); return this.h ? Sn(t, "tid", this.h) : qn(t.b, "tid"), this.f ? Sn(t, "eid", this.f) : qn(t.b, "eid"), (a = nu(this.c)).length && Sn(t, "fw", a.join(",")), t.toString() }, (t = iu.prototype).Nb = function(e, n, t) { var i = new I("popup-closed-by-user"),
                        r = new I("web-storage-unsupported"),
                        o = this,
                        a = !1; return this.la().then(function() { var t, i;
                        i = { type: "webStorageSupport" }, ou(t = o).then(function() { return e = t.m, n = i, e.qb.then(function() { return new le(function(t) { e.a.send(n.type, n, t, gi("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER")) }) }); var e, n }).then(function(t) { if (t && t.length && void 0 !== t[0].webStorageSupport) return t[0].webStorageSupport; throw Error() }).then(function(t) { t || (e && ei(e), n(r), a = !0) }) }).s(function() {}).then(function() { if (!a) return n = e, new le(function(e) { return function t() { vn(2e3).then(function() { return n && !n.closed ? t() : void e() }) }() }); var n }).then(function() { if (!a) return vn(t).then(function() { n(i) }) }) }, t.Wb = function() { var t = mi(); return !Ti(t) && !Ni(t) }, t.Sb = function() { return !1 }, t.Lb = function(e, t, n, i, r, o, a, s) { if (!e) return ye(new I("popup-blocked")); if (a && !Ti()) return this.la().s(function(t) { ei(e), r(t) }), i(), be();
                    this.a || (this.a = ru(au(this))); var u = this; return this.a.then(function() { var t = u.la().s(function(t) { throw ei(e), r(t), t }); return i(), t }).then(function() { _o(n), a || Qn(su(u.o, u.g, u.b, t, n, null, o, u.c, void 0, u.i, s, u.f), e) }).s(function(t) { throw "auth/network-request-failed" == t.code && (u.a = null), t }) }, t.Mb = function(t, e, n, i) { this.a || (this.a = ru(au(this))); var r = this; return this.a.then(function() { _o(e), Qn(su(r.o, r.g, r.b, t, e, Zn(), n, r.c, void 0, r.i, i, r.f)) }).s(function(t) { throw "auth/network-request-failed" == t.code && (r.a = null), t }) }, t.la = function() { var t = this; return ou(this).then(function() { return t.m.qb }).s(function() { throw t.a = null, new I("network-request-failed") }) }, t.Zb = function() { return !0 }, t.Ea = function(t) { this.h.push(t) }, t.Ra = function(e) { G(this.h, function(t) { return t == e }) }, (t = uu.prototype).get = function(t) { return be(this.a.getItem(t)).then(function(t) { return t && ki(t) }) }, t.set = function(t, e) { return be(this.a.setItem(t, Ei(e))) }, t.T = function(t) { return be(this.a.removeItem(t)) }, t.ca = function() {}, t.ia = function() {}; var hu, lu = [];

                function fu(t, e, n) { st(t.a) && t.b.addEventListener("message", t.f), void 0 === t.a[e] && (t.a[e] = []), t.a[e].push(n) }

                function du(t) { this.a = t }

                function pu(t) { this.c = t, this.b = !1, this.a = [] }

                function vu(i, t, e, n) { var r, o, a, s, u = e || {},
                        c = null; if (i.b) return ye(Error("connection_unavailable")); var h = n ? 800 : 50,
                        l = "undefined" != typeof MessageChannel ? new MessageChannel : null; return new le(function(e, n) { l ? (r = Math.floor(Math.random() * Math.pow(10, 20)).toString(), l.port1.start(), a = setTimeout(function() { n(Error("unsupported_event")) }, h), c = { messageChannel: l, onMessage: o = function(t) { t.data.eventId === r && ("ack" === t.data.status ? (clearTimeout(a), s = setTimeout(function() { n(Error("timeout")) }, 3e3)) : "done" === t.data.status ? (clearTimeout(s), void 0 !== t.data.response ? e(t.data.response) : n(Error("unknown_error"))) : (clearTimeout(a), clearTimeout(s), n(Error("invalid_response")))) } }, i.a.push(c), l.port1.addEventListener("message", o), i.c.postMessage({ eventType: t, eventId: r, data: u }, [l.port2])) : n(Error("connection_unavailable")) }).then(function(t) { return mu(i, c), t }).s(function(t) { throw mu(i, c), t }) }

                function mu(t, e) { var n, i;
                    e && (n = e.messageChannel, i = e.onMessage, n && (n.port1.removeEventListener("message", i), n.port1.close()), G(t.a, function(t) { return t == e })) }

                function gu() { if (!wu()) throw new I("web-storage-unsupported");
                    this.c = {}, this.a = [], this.b = 0, this.m = l.indexedDB, this.type = "indexedDB", this.g = this.l = this.f = this.i = null, this.o = !1, this.h = null; var t, e, n, i = this;
                    ui() && self ? (this.l = (n = ui() ? self : null, U(lu, function(t) { t.b == n && (e = t) }), e || (e = new cu(n), lu.push(e)), e), fu(this.l, "keyChanged", function(t, n) { return ku(i).then(function(e) { return 0 < e.length && U(i.a, function(t) { t(e) }), { keyProcessed: H(e, n.key) } }) }), fu(this.l, "ping", function() { return be(["keyChanged"]) })) : ((t = l.navigator) && t.serviceWorker ? be().then(function() { return t.serviceWorker.ready }).then(function(t) { return t.active || null }).s(function() { return null }) : be(null)).then(function(t) {
                        (i.h = t) && (i.g = new pu(new du(t)), vu(i.g, "ping", null, !0).then(function(t) { t[0].fulfilled && H(t[0].value, "keyChanged") && (i.o = !0) }).s(function() {})) }) }

                function bu(r) { return new le(function(e, n) { var t = r.m.open("firebaseLocalStorageDb", 1);
                        t.onerror = function(t) { try { t.preventDefault() } catch (t) {}
                            n(Error(t.target.error)) }, t.onupgradeneeded = function(t) { t = t.target.result; try { t.createObjectStore("firebaseLocalStorage", { keyPath: "fbase_key" }) } catch (t) { n(t) } }, t.onsuccess = function(t) { var i;
                            (t = t.target.result).objectStoreNames.contains("firebaseLocalStorage") ? e(t) : (i = r, new le(function(t, e) { var n = i.m.deleteDatabase("firebaseLocalStorageDb");
                                n.onsuccess = function() { t() }, n.onerror = function(t) { e(Error(t.target.error)) } }).then(function() { return bu(r) }).then(function(t) { e(t) }).s(function(t) { n(t) })) } }) }

                function yu(t) { return t.v || (t.v = bu(t)), t.v }

                function wu() { try { return l.indexedDB } catch (t) { return } }

                function Iu(t) { return t.objectStore("firebaseLocalStorage") }

                function Tu(t, e) { return t.transaction(["firebaseLocalStorage"], e ? "readwrite" : "readonly") }

                function Eu(t) { return new le(function(e, n) { t.onsuccess = function(t) { t && t.target ? e(t.target.result) : e() }, t.onerror = function(t) { n(t.target.error) } }) }

                function Au(t, e) { return t.g && t.h && ((n = l.navigator) && n.serviceWorker && n.serviceWorker.controller || null) === t.h ? vu(t.g, "keyChanged", { key: e }, t.o).then(function() {}).s(function() {}) : be(); var n }

                function ku(i) { return yu(i).then(function(t) { var r = Iu(Tu(t, !1)); return r.getAll ? Eu(r.getAll()) : new le(function(e, n) { var i = [],
                                t = r.openCursor();
                            t.onsuccess = function(t) {
                                (t = t.target.result) ? (i.push(t.value), t.continue()) : e(i) }, t.onerror = function(t) { n(t.target.error) } }) }).then(function(t) { var e = {},
                            n = []; if (0 == i.b) { for (n = 0; n < t.length; n++) e[t[n].fbase_key] = t[n].value;
                            n = function t(e, n) { var i, r = []; for (i in e) i in n && typeof e[i] == typeof n[i] ? "object" == typeof e[i] && null != e[i] && null != n[i] ? 0 < t(e[i], n[i]).length && r.push(i) : e[i] !== n[i] && r.push(i) : r.push(i); for (i in n) i in e || r.push(i); return r }(i.c, e), i.c = e } return n }) }

                function Su(t) { t.i && t.i.cancel("STOP_EVENT"), t.f && (clearTimeout(t.f), t.f = null) }

                function Nu(t) { var i = this,
                        r = null;
                    this.a = [], this.type = "indexedDB", this.c = t, this.b = be().then(function() { if (wu()) { var e = Si(),
                                n = "__sak" + e; return hu = hu || new gu, (r = hu).set(n, e).then(function() { return r.get(n) }).then(function(t) { if (t !== e) throw Error("indexedDB not supported!"); return r.T(n) }).then(function() { return r }).s(function() { return i.c }) } return i.c }).then(function(t) { return i.type = t.type, t.ca(function(e) { U(i.a, function(t) { t(e) }) }), t }) }

                function _u() { this.a = {}, this.type = "inMemory" }

                function Ou() { if (! function() { var t = "Node" == ci(); if (!(t = Cu() || t && Yl.default.INTERNAL.node && Yl.default.INTERNAL.node.localStorage)) return !1; try { return t.setItem("__sak", "1"), t.removeItem("__sak"), !0 } catch (t) { return !1 } }()) { if ("Node" == ci()) throw new I("internal-error", "The LocalStorage compatibility library was not found."); throw new I("web-storage-unsupported") }
                    this.a = Cu() || Yl.default.INTERNAL.node.localStorage, this.type = "localStorage" }

                function Cu() { try { var t = l.localStorage,
                            e = Si(); return t && (t.setItem(e, "1"), t.removeItem(e)), t } catch (t) { return null } }

                function Ru() { this.type = "nullStorage" }

                function Du() { if (! function() { var t = "Node" == ci(); if (!(t = Pu() || t && Yl.default.INTERNAL.node && Yl.default.INTERNAL.node.sessionStorage)) return !1; try { return t.setItem("__sak", "1"), t.removeItem("__sak"), !0 } catch (t) { return !1 } }()) { if ("Node" == ci()) throw new I("internal-error", "The SessionStorage compatibility library was not found."); throw new I("web-storage-unsupported") }
                    this.a = Pu() || Yl.default.INTERNAL.node.sessionStorage, this.type = "sessionStorage" }

                function Pu() { try { var t = l.sessionStorage,
                            e = Si(); return t && (t.setItem(e, "1"), t.removeItem(e)), t } catch (t) { return null } }

                function Lu() { var t = {};
                    t.Browser = ju, t.Node = Uu, t.ReactNative = Vu, t.Worker = Fu, this.a = t[ci()] }
                cu.prototype.c = function(n) { var e, i = n.data.eventType,
                        r = n.data.eventId,
                        t = this.a[i];
                    t && 0 < t.length && (n.ports[0].postMessage({ status: "ack", eventId: r, eventType: i, response: null }), e = [], U(t, function(t) { e.push(be().then(function() { return t(n.origin, n.data.data) })) }), Ie(e).then(function(t) { var e = [];
                        U(t, function(t) { e.push({ fulfilled: t.Ob, value: t.value, reason: t.reason ? t.reason.message : void 0 }) }), U(e, function(t) { for (var e in t) void 0 === t[e] && delete t[e] }), n.ports[0].postMessage({ status: "done", eventId: r, eventType: i, response: e }) })) }, du.prototype.postMessage = function(t, e) { this.a.postMessage(t, e) }, pu.prototype.close = function() { for (; 0 < this.a.length;) mu(this, this.a[0]);
                    this.b = !0 }, (t = gu.prototype).set = function(n, i) { var r, o = !1,
                        a = this; return yu(this).then(function(t) { return Eu((t = Iu(Tu(r = t, !0))).get(n)) }).then(function(t) { var e = Iu(Tu(r, !0)); return t ? (t.value = i, Eu(e.put(t))) : (a.b++, o = !0, (t = {}).fbase_key = n, t.value = i, Eu(e.add(t))) }).then(function() { return a.c[n] = i, Au(a, n) }).na(function() { o && a.b-- }) }, t.get = function(e) { return yu(this).then(function(t) { return Eu(Iu(Tu(t, !1)).get(e)) }).then(function(t) { return t && t.value }) }, t.T = function(e) { var n = !1,
                        i = this; return yu(this).then(function(t) { return n = !0, i.b++, Eu(Iu(Tu(t, !0)).delete(e)) }).then(function() { return delete i.c[e], Au(i, e) }).na(function() { n && i.b-- }) }, t.ca = function(t) { var n;
                    0 == this.a.length && (Su(n = this), function e() { n.f = setTimeout(function() { n.i = ku(n).then(function(e) { 0 < e.length && U(n.a, function(t) { t(e) }) }).then(function() { e() }).s(function(t) { "STOP_EVENT" != t.message && e() }) }, 800) }()), this.a.push(t) }, t.ia = function(e) { G(this.a, function(t) { return t == e }), 0 == this.a.length && Su(this) }, (t = Nu.prototype).get = function(e) { return this.b.then(function(t) { return t.get(e) }) }, t.set = function(e, n) { return this.b.then(function(t) { return t.set(e, n) }) }, t.T = function(e) { return this.b.then(function(t) { return t.T(e) }) }, t.ca = function(t) { this.a.push(t) }, t.ia = function(e) { G(this.a, function(t) { return t == e }) }, (t = _u.prototype).get = function(t) { return be(this.a[t]) }, t.set = function(t, e) { return this.a[t] = e, be() }, t.T = function(t) { return delete this.a[t], be() }, t.ca = function() {}, t.ia = function() {}, (t = Ou.prototype).get = function(t) { var e = this; return be().then(function() { return ki(e.a.getItem(t)) }) }, t.set = function(e, n) { var i = this; return be().then(function() { var t = Ei(n);
                        null === t ? i.T(e) : i.a.setItem(e, t) }) }, t.T = function(t) { var e = this; return be().then(function() { e.a.removeItem(t) }) }, t.ca = function(t) { l.window && $e(l.window, "storage", t) }, t.ia = function(t) { l.window && tn(l.window, "storage", t) }, (t = Ru.prototype).get = function() { return be(null) }, t.set = function() { return be() }, t.T = function() { return be() }, t.ca = function() {}, t.ia = function() {}, (t = Du.prototype).get = function(t) { var e = this; return be().then(function() { return ki(e.a.getItem(t)) }) }, t.set = function(e, n) { var i = this; return be().then(function() { var t = Ei(n);
                        null === t ? i.T(e) : i.a.setItem(e, t) }) }, t.T = function(t) { var e = this; return be().then(function() { e.a.removeItem(t) }) }, t.ca = function() {}, t.ia = function() {}; var xu, Mu, ju = { D: Ou, ab: Du },
                    Uu = { D: Ou, ab: Du },
                    Vu = { D: uu, ab: Ru },
                    Fu = { D: Ou, ab: Ru },
                    qu = { qd: "local", NONE: "none", sd: "session" };

                function Hu() { var t = !(Ni(mi()) || !si()),
                        e = Ti(),
                        n = bi();
                    this.v = t, this.h = e, this.l = n, this.a = {}, t = xu = xu || new Lu; try { this.g = !$n() && Pi() || !l.indexedDB ? new t.a.D : new Nu(new(ui() ? _u : t.a.D)) } catch (t) { this.g = new _u, this.h = !0 } try { this.i = new t.a.ab } catch (t) { this.i = new _u }
                    this.m = new _u, this.f = g(this.Xb, this), this.b = {} }

                function Ku() { return Mu = Mu || new Hu }

                function Gu(t, e) { switch (e) {
                        case "session":
                            return t.i;
                        case "none":
                            return t.m;
                        default:
                            return t.g } }

                function Bu(t, e) { return "firebase:" + t.name + (e ? ":" + e : "") }

                function Wu(t, e, n) { return n = Bu(e, n), "local" == e.D && (t.b[n] = null), Gu(t, e.D).T(n) }

                function Xu(t) { t.c && (clearInterval(t.c), t.c = null) }

                function Ju(t) { this.a = t, this.b = Ku() }(t = Hu.prototype).get = function(t, e) { return Gu(this, t.D).get(Bu(t, e)) }, t.set = function(e, t, n) { var i = Bu(e, n),
                        r = this,
                        o = Gu(this, e.D); return o.set(i, t).then(function() { return o.get(i) }).then(function(t) { "local" == e.D && (r.b[i] = t) }) }, t.addListener = function(t, e, n) { var i;
                    t = Bu(t, e), this.l && (this.b[t] = l.localStorage.getItem(t)), st(this.a) && (Gu(this, "local").ca(this.f), this.h || ($n() || !Pi()) && l.indexedDB || !this.l || (Xu(i = this), i.c = setInterval(function() { for (var t in i.a) { var e = l.localStorage.getItem(t),
                                n = i.b[t];
                            e != n && (i.b[t] = e, e = new Fe({ type: "storage", key: t, target: window, oldValue: n, newValue: e, a: !0 }), i.Xb(e)) } }, 1e3))), this.a[t] || (this.a[t] = []), this.a[t].push(n) }, t.removeListener = function(t, e, n) { t = Bu(t, e), this.a[t] && (G(this.a[t], function(t) { return t == n }), 0 == this.a[t].length && delete this.a[t]), st(this.a) && (Gu(this, "local").ia(this.f), Xu(this)) }, t.Xb = function(t) { if (t && t.g) { var e = t.a.key; if (null == e)
                            for (var n in this.a) { var i = this.b[n];
                                void 0 === i && (i = null); var r = l.localStorage.getItem(n);
                                r !== i && (this.b[n] = r, this.lb(n)) } else if (0 == e.indexOf("firebase:") && this.a[e]) { if (void 0 !== t.a.a ? Gu(this, "local").ia(this.f) : Xu(this), this.v)
                                    if (n = l.localStorage.getItem(e), (i = t.a.newValue) !== n) null !== i ? l.localStorage.setItem(e, i) : l.localStorage.removeItem(e);
                                    else if (this.b[e] === i && void 0 === t.a.a) return; var o = this,
                                    n = function() { void 0 === t.a.a && o.b[e] === l.localStorage.getItem(e) || (o.b[e] = l.localStorage.getItem(e), o.lb(e)) };
                                Ft && Jt && 10 == Jt && l.localStorage.getItem(e) !== t.a.newValue && t.a.newValue !== t.a.oldValue ? setTimeout(n, 10) : n() } } else U(t, g(this.lb, this)) }, t.lb = function(t) { this.a[t] && U(this.a[t], function(t) { t() }) }; var Yu, zu = { name: "authEvent", D: "local" };

                function $u() { this.a = Ku() }

                function Zu(t, e) { this.b = Qu, this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b), this.g = this.c = 0, this.a = [], this.i = t, this.h = e, this.l = l.Int32Array ? new Int32Array(64) : Array(64), void 0 === Yu && (Yu = l.Int32Array ? new Int32Array(ac) : ac), this.reset() }
                w(Zu, function() { this.b = -1 }); for (var Qu = 64, tc = Qu - 1, ec = [], nc = 0; nc < tc; nc++) ec[nc] = 0; var ic = B(128, ec);

                function rc(t) { for (var e = t.f, n = t.l, i = 0, r = 0; r < e.length;) n[i++] = e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3], r = 4 * i; for (e = 16; e < 64; e++) { r = 0 | n[e - 15], i = 0 | n[e - 2]; var o = (0 | n[e - 16]) + ((r >>> 7 | r << 25) ^ (r >>> 18 | r << 14) ^ r >>> 3) | 0,
                            a = (0 | n[e - 7]) + ((i >>> 17 | i << 15) ^ (i >>> 19 | i << 13) ^ i >>> 10) | 0;
                        n[e] = o + a | 0 }
                    i = 0 | t.a[0], r = 0 | t.a[1]; var s = 0 | t.a[2],
                        u = 0 | t.a[3],
                        c = 0 | t.a[4],
                        h = 0 | t.a[5],
                        l = 0 | t.a[6]; for (o = 0 | t.a[7], e = 0; e < 64; e++) { var f = ((i >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10)) + (i & r ^ i & s ^ r & s) | 0;
                        a = (o = o + ((c >>> 6 | c << 26) ^ (c >>> 11 | c << 21) ^ (c >>> 25 | c << 7)) | 0) + ((a = (a = c & h ^ ~c & l) + (0 | Yu[e]) | 0) + (0 | n[e]) | 0) | 0, o = l, l = h, h = c, c = u + a | 0, u = s, s = r, r = i, i = a + f | 0 }
                    t.a[0] = t.a[0] + i | 0, t.a[1] = t.a[1] + r | 0, t.a[2] = t.a[2] + s | 0, t.a[3] = t.a[3] + u | 0, t.a[4] = t.a[4] + c | 0, t.a[5] = t.a[5] + h | 0, t.a[6] = t.a[6] + l | 0, t.a[7] = t.a[7] + o | 0 }

                function oc(t, e, n) { void 0 === n && (n = e.length); var i = 0,
                        r = t.c; if ("string" == typeof e)
                        for (; i < n;) t.f[r++] = e.charCodeAt(i++), r == t.b && (rc(t), r = 0);
                    else { if (!d(e)) throw Error("message must be string or array"); for (; i < n;) { var o = e[i++]; if (!("number" == typeof o && 0 <= o && o <= 255 && o == (0 | o))) throw Error("message must be a byte array");
                            t.f[r++] = o, r == t.b && (rc(t), r = 0) } }
                    t.c = r, t.g += n }
                Zu.prototype.reset = function() { this.g = this.c = 0, this.a = l.Int32Array ? new Int32Array(this.h) : W(this.h) }; var ac = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

                function sc() { Zu.call(this, 8, uc) }
                w(sc, Zu); var uc = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

                function cc(t, e, n, i, r, o) { this.m = t, this.i = e, this.l = n, this.v = i || null, this.u = r || null, this.o = o, this.h = e + ":" + n, this.A = new $u, this.g = new Ju(this.h), this.f = null, this.b = [], this.a = this.c = null }

                function hc(t) { return new I("invalid-cordova-configuration", t) }

                function lc(t) { var e = new sc;
                    oc(e, t), t = []; var n = 8 * e.g;
                    e.c < 56 ? oc(e, ic, 56 - e.c) : oc(e, ic, e.b - (e.c - 56)); for (var i = 63; 56 <= i; i--) e.f[i] = 255 & n, n /= 256; for (rc(e), i = n = 0; i < e.i; i++)
                        for (var r = 24; 0 <= r; r -= 8) t[n++] = e.a[i] >> r & 255; return F(t, function(t) { return 1 < (t = t.toString(16)).length ? t : "0" + t }).join("") }

                function fc(t, e) { for (var n = 0; n < t.b.length; n++) try { t.b[n](e) } catch (t) {} }

                function dc(s) { return s.f || (s.f = s.la().then(function() { return new le(function(n) {
                            function e(i) { t = !0, a && a.cancel(), pc(r).then(function(t) { var e, n = o;
                                    t && i && i.url && (e = null, -1 != (n = Xr(i.url)).indexOf("/__/auth/callback") && (e = (e = "object" == typeof(e = ki(Nn(e = _n(n), "firebaseError") || null)) ? T(e) : null) ? new Oo(t.c, t.b, null, null, e, null, t.S()) : new Oo(t.c, t.b, n, t.f, null, null, t.S())), n = e || o), fc(r, n) }) } var r, o, t, a, i;
                            s.Ea(function t(e) { return n(e), s.Ra(t), !1 }), r = s, o = new Oo("unknown", null, null, null, new I("no-auth-event")), t = !1, a = vn(500).then(function() { return pc(r).then(function() { t || fc(r, o) }) }), i = l.handleOpenURL, l.handleOpenURL = function(t) { if (0 == t.toLowerCase().indexOf(gi("BuildInfo.packageName", l).toLowerCase() + "://") && e({ url: t }), "function" == typeof i) try { i(t) } catch (t) { console.error(t) } }, Po = Po || new Ro,
                                function(t) { var n = Po;
                                    n.a.push(t), n.b || (n.b = function(t) { for (var e = 0; e < n.a.length; e++) n.a[e](t) }, "function" == typeof(t = gi("universalLinks.subscribe", l)) && t(null, n.b)) }(e) }) })), s.f }

                function pc(e) { var t, n = null; return (t = e.g).b.get(zu, t.a).then(Co).then(function(t) { return n = t, Wu((t = e.g).b, zu, t.a) }).then(function() { return n }) }

                function vc(t) { this.a = t, this.b = Ku() }(t = cc.prototype).la = function() { return this.Ia ? this.Ia : this.Ia = (ai(void 0) ? oi().then(function() { return new le(function(t, e) { var n = l.document,
                                i = setTimeout(function() { e(Error("Cordova framework is not ready.")) }, 1e3);
                            n.addEventListener("deviceready", function() { clearTimeout(i), t() }, !1) }) }) : ye(Error("Cordova must run in an Android or iOS file scheme."))).then(function() { if ("function" != typeof gi("universalLinks.subscribe", l)) throw hc("cordova-universal-links-plugin-fix is not installed"); if (void 0 === gi("BuildInfo.packageName", l)) throw hc("cordova-plugin-buildinfo is not installed"); if ("function" != typeof gi("cordova.plugins.browsertab.openUrl", l)) throw hc("cordova-plugin-browsertab is not installed"); if ("function" != typeof gi("cordova.InAppBrowser.open", l)) throw hc("cordova-plugin-inappbrowser is not installed") }, function() { throw new I("cordova-not-ready") }) }, t.Nb = function(t, e) { return e(new I("operation-not-supported-in-this-environment")), be() }, t.Lb = function() { return ye(new I("operation-not-supported-in-this-environment")) }, t.Zb = function() { return !1 }, t.Wb = function() { return !0 }, t.Sb = function() { return !0 }, t.Mb = function(t, e, n, i) { if (this.c) return ye(new I("redirect-operation-pending")); var r = this,
                        o = l.document,
                        a = null,
                        s = null,
                        u = null,
                        c = null; return this.c = be().then(function() { return _o(e), dc(r) }).then(function() { return function(n, t, e, i, r) { var o = function() { for (var t = 20, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--; return e.join("") }(),
                                a = new Oo(t, i, null, o, new I("no-auth-event"), null, r),
                                s = gi("BuildInfo.packageName", l); if ("string" != typeof s) throw new I("invalid-cordova-configuration"); var u = gi("BuildInfo.displayName", l),
                                c = {}; if (mi().toLowerCase().match(/iphone|ipad|ipod/)) c.ibi = s;
                            else { if (!mi().toLowerCase().match(/android/)) return ye(new I("operation-not-supported-in-this-environment"));
                                c.apn = s }
                            u && (c.appDisplayName = u), o = lc(o), c.sessionId = o; var h = su(n.m, n.i, n.l, t, e, null, i, n.v, c, n.u, r, n.o); return n.la().then(function() { var t = n.h; return n.A.a.set(zu, a.w(), t) }).then(function() { var t = gi("cordova.plugins.browsertab.isAvailable", l); if ("function" != typeof t) throw new I("invalid-cordova-configuration"); var e = null;
                                t(function(t) { if (t) { if ("function" != typeof(e = gi("cordova.plugins.browsertab.openUrl", l))) throw new I("invalid-cordova-configuration");
                                        e(h) } else { if ("function" != typeof(e = gi("cordova.InAppBrowser.open", l))) throw new I("invalid-cordova-configuration");
                                        t = mi(), n.a = e(h, t.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || t.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes") } }) }) }(r, t, e, n, i) }).then(function() { return new le(function(e, t) { s = function() { var t = gi("cordova.plugins.browsertab.close", l); return e(), "function" == typeof t && t(), r.a && "function" == typeof r.a.close && (r.a.close(), r.a = null), !1 }, r.Ea(s), u = function() { a = a || vn(2e3).then(function() { t(new I("redirect-cancelled-by-user")) }) }, c = function() { Ci() && u() }, o.addEventListener("resume", u, !1), mi().toLowerCase().match(/android/) || o.addEventListener("visibilitychange", c, !1) }).s(function(t) { return pc(r).then(function() { throw t }) }) }).na(function() { u && o.removeEventListener("resume", u, !1), c && o.removeEventListener("visibilitychange", c, !1), a && a.cancel(), s && r.Ra(s), r.c = null }) }, t.Ea = function(e) { this.b.push(e), dc(this).s(function(t) { "auth/invalid-cordova-configuration" === t.code && (t = new Oo("unknown", null, null, null, new I("no-auth-event")), e(t)) }) }, t.Ra = function(e) { G(this.b, function(t) { return t == e }) }; var mc = { name: "pendingRedirect", D: "session" };

                function gc(t) { return Wu(t.b, mc, t.a) }

                function bc(t, e, n, i) { this.i = {}, this.u = 0, this.O = t, this.m = e, this.v = n, this.G = i, this.h = [], this.f = !1, this.l = g(this.o, this), this.b = new Pc, this.A = new Uc, this.g = new vc(Rc(this.m, this.v)), this.c = {}, this.c.unknown = this.b, this.c.signInViaRedirect = this.b, this.c.linkViaRedirect = this.b, this.c.reauthViaRedirect = this.b, this.c.signInViaPopup = this.A, this.c.linkViaPopup = this.A, this.c.reauthViaPopup = this.A, this.a = yc(this.O, this.m, this.v, E, this.G) }

                function yc(t, e, n, i, r) { var o = Yl.default.SDK_VERSION || null; return new(ai() ? cc : iu)(t, e, n, o, i, r) }

                function wc(e) { e.f || (e.f = !0, e.a.Ea(e.l)); var n = e.a; return e.a.la().s(function(t) { throw e.a == n && e.reset(), t }) }

                function Ic(n) { n.a.Wb() && wc(n).s(function(t) { var e = new Oo("unknown", null, null, null, new I("operation-not-supported-in-this-environment"));
                        Nc(t) && n.o(e) }), n.a.Sb() || Lc(n.b) }

                function Tc(n, t) { H(n.h, t) || n.h.push(t), n.f || (t = n.g).b.get(mc, t.a).then(function(t) { return "pending" == t }).then(function(t) { t ? gc(n.g).then(function() { wc(n).s(function(t) { var e = new Oo("unknown", null, null, null, new I("operation-not-supported-in-this-environment"));
                                Nc(t) && n.o(e) }) }) : Ic(n) }).s(function() { Ic(n) }) }

                function Ec(t, e) { G(t.h, function(t) { return t == e }) }
                bc.prototype.reset = function() { this.f = !1, this.a.Ra(this.l), this.a = yc(this.O, this.m, this.v, null, this.G), this.i = {} }, bc.prototype.o = function(t) { if (!t) throw new I("invalid-auth-event"); if (6e5 <= y() - this.u && (this.i = {}, this.u = 0), t && t.getUid() && this.i.hasOwnProperty(t.getUid())) return !1; for (var e = !1, n = 0; n < this.h.length; n++) { var i = this.h[n]; if (i.Eb(t.c, t.b)) {
                            (e = this.c[t.c]) && (e.h(t, i), t && (t.f || t.b) && (this.i[t.getUid()] = !0, this.u = y())), e = !0; break } } return Lc(this.b), e }; var Ac = new Oi(2e3, 1e4),
                    kc = new Oi(3e4, 6e4);

                function Sc(t, e, n, i, r, o, a) { return t.a.Lb(e, n, i, function() { t.f || (t.f = !0, t.a.Ea(t.l)) }, function() { t.reset() }, r, o, a) }

                function Nc(t) { return !(!t || "auth/cordova-not-ready" != t.code) }

                function _c(e, t, n, i, r) { var o, a; return (a = e.g).b.set(mc, "pending", a.a).then(function() { return e.a.Mb(t, n, i, r).s(function(t) { if (Nc(t)) throw new I("operation-not-supported-in-this-environment"); return o = t, gc(e.g).then(function() { throw o }) }).then(function() { return e.a.Zb() ? new le(function() {}) : gc(e.g).then(function() { return e.qa() }).then(function() {}).s(function() {}) }) }) }

                function Oc(t, e, n, i, r) { return t.a.Nb(i, function(t) { e.ma(n, null, t, r) }, Ac.get()) }
                bc.prototype.qa = function() { return this.b.qa() }; var Cc = {};

                function Rc(t, e, n) { return t = t + ":" + e, n && (t = t + ":" + n.url), t }

                function Dc(t, e, n, i) { var r = Rc(e, n, i); return Cc[r] || (Cc[r] = new bc(t, e, n, i)), Cc[r] }

                function Pc() { this.b = null, this.f = [], this.c = [], this.a = null, this.i = this.g = !1 }

                function Lc(t) { t.g || (t.g = !0, jc(t, !1, null, null)) }

                function xc(t) { t.g && !t.i && jc(t, !1, null, null) }

                function Mc(t, e) { if (t.b = function() { return be(e) }, t.f.length)
                        for (var n = 0; n < t.f.length; n++) t.f[n](e) }

                function jc(t, e, n, i) { e ? i ? function(t, e) { if (t.b = function() { return ye(e) }, t.c.length)
                            for (var n = 0; n < t.c.length; n++) t.c[n](e) }(t, i) : Mc(t, n) : Mc(t, { user: null }), t.f = [], t.c = [] }

                function Uc() {}

                function Vc() { this.hb = !1, Object.defineProperty(this, "appVerificationDisabled", { get: function() { return this.hb }, set: function(t) { this.hb = t }, enumerable: !1 }) }

                function Fc(t, e) { this.a = e, Ui(this, "verificationId", t) }

                function qc(t, e, n, i) { return new ko(t).eb(e, n).then(function(t) { return new Fc(t, i) }) }

                function Hc(t) { var e = Pr(t); if (!(e && e.exp && e.auth_time && e.iat)) throw new I("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
                    Vi(this, { token: t, expirationTime: Di(1e3 * e.exp), authTime: Di(1e3 * e.auth_time), issuedAtTime: Di(1e3 * e.iat), signInProvider: e.firebase && e.firebase.sign_in_provider ? e.firebase.sign_in_provider : null, signInSecondFactor: e.firebase && e.firebase.sign_in_second_factor ? e.firebase.sign_in_second_factor : null, claims: e }) }

                function Kc(t, e, n) { var i = e && e[Bc]; if (!i) throw new I("argument-error", "Internal assert: Invalid MultiFactorResolver");
                    this.a = t, this.f = ut(e), this.g = n, this.c = new Jr(null, i), this.b = []; var r = this;
                    U(e[Gc] || [], function(t) {
                        (t = Ki(t)) && r.b.push(t) }), Ui(this, "auth", this.a), Ui(this, "session", this.c), Ui(this, "hints", this.b) }
                Pc.prototype.reset = function() { this.b = null, this.a && (this.a.cancel(), this.a = null) }, Pc.prototype.h = function(t, e) { var n, i, r, o;
                    t ? (this.reset(), this.g = !0, n = t.c, i = t.b, r = t.a && "auth/web-storage-unsupported" == t.a.code, o = t.a && "auth/operation-not-supported-in-this-environment" == t.a.code, this.i = !(!r && !o), "unknown" != n || r || o ? t.a ? (jc(this, !0, null, t.a), be()) : e.Fa(n, i) ? function(e, t, n) { n = n.Fa(t.c, t.b); var i = t.g,
                            r = t.f,
                            o = t.i,
                            a = t.S(),
                            s = !!t.c.match(/Redirect$/);
                        n(i, r, a, o).then(function(t) { jc(e, s, t, null) }).s(function(t) { jc(e, s, null, t) }) }(this, t, e) : ye(new I("invalid-auth-event")) : (jc(this, !1, null, null), be())) : ye(new I("invalid-auth-event")) }, Pc.prototype.qa = function() { var r = this; return new le(function(t, e) { var n, i;
                        r.b ? r.b().then(t, e) : (r.f.push(t), r.c.push(e), n = r, i = new I("timeout"), n.a && n.a.cancel(), n.a = vn(kc.get()).then(function() { n.b || (n.g = !0, jc(n, !0, null, i)) })) }) }, Uc.prototype.h = function(t, e) { var n, i, r, o, a;
                    t ? (n = t.c, i = t.b, t.a ? (e.ma(t.c, null, t.a, t.b), be()) : e.Fa(n, i) ? (r = e, o = (t = t).b, a = t.c, r.Fa(a, o)(t.g, t.f, t.S(), t.i).then(function(t) { r.ma(a, t, null, o) }).s(function(t) { r.ma(a, null, t, o) })) : ye(new I("invalid-auth-event"))) : ye(new I("invalid-auth-event")) }, Fc.prototype.confirm = function(t) { return t = So(this.verificationId, t), this.a(t) }; var Gc = "mfaInfo",
                    Bc = "mfaPendingCredential";

                function Wc(t, e, n, i) { I.call(this, "multi-factor-auth-required", i, e), this.b = new Kc(t, e, n), Ui(this, "resolver", this.b) }

                function Xc(t, e, n) { if (t && v(t.serverResponse) && "auth/multi-factor-auth-required" === t.code) try { return new Wc(e, t.serverResponse, n, t.message) } catch (t) {}
                    return null }

                function Jc() {}

                function Yc(t) { Ui(this, "factorId", t.fa), this.a = t }

                function zc(t) { if (Yc.call(this, t), this.a.fa != ko.PROVIDER_ID) throw new I("argument-error", "firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential") }

                function $c(t, e) { for (var n in Ve.call(this, t), e) this[n] = e[n] }

                function Zc(t, e) { this.a = t, this.b = [], this.c = g(this.xc, this), $e(this.a, "userReloaded", this.c); var i = [];
                    e && e.multiFactor && e.multiFactor.enrolledFactors && U(e.multiFactor.enrolledFactors, function(t) { var e = null,
                            n = {}; if (t) { t.uid && (n[Wi] = t.uid), t.displayName && (n[Gi] = t.displayName), t.enrollmentTime && (n[Bi] = new Date(t.enrollmentTime).toISOString()), t.phoneNumber && (n[Xi] = t.phoneNumber); try { e = new Ji(n) } catch (t) {}
                            t = e } else t = null;
                        t && i.push(t) }), Qc(this, i) }

                function Qc(t, e) { t.b = e, Ui(t, "enrolledFactors", e) }

                function th(t, e, n) { if (this.h = t, this.i = e, this.g = n, this.c = 3e4, this.f = 96e4, this.b = null, this.a = this.c, this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!") }

                function eh(t, e) { return e ? (t.a = t.c, t.g()) : (e = t.a, t.a *= 2, t.a > t.f && (t.a = t.f), e) }

                function nh(t) { this.c = t, this.b = this.a = null }

                function ih(t) { return t.b && 1e3 * t.b.c || 0 }

                function rh(t, e) { var n = e.refreshToken;
                    t.b = Dr(e[qa] || ""), t.a = n }

                function oh(e, t) { return i = e.c, r = t, new le(function(e, n) { "refresh_token" == r.grant_type && r.refresh_token || "authorization_code" == r.grant_type && r.code ? za(i, i.l + "?key=" + encodeURIComponent(i.c), function(t) { t ? t.error ? n(Js(t)) : t.access_token && t.refresh_token ? e(t) : n(new I("internal-error")) : n(new I("network-request-failed")) }, "POST", Fn(r).toString(), i.g, i.v.get()) : n(new I("internal-error")) }).then(function(t) { return e.b = Dr(t.access_token), e.a = t.refresh_token, { accessToken: e.b.toString(), refreshToken: e.a } }).s(function(t) { throw "auth/user-token-expired" == t.code && (e.a = null), t }); var i, r }

                function ah(t, e) { this.a = t || null, this.b = e || null, Vi(this, { lastSignInTime: Di(e || null), creationTime: Di(t || null) }) }

                function sh(t, e, n, i, r, o) { Vi(this, { uid: t, displayName: i || null, photoURL: r || null, email: n || null, phoneNumber: o || null, providerId: e }) }

                function uh(t, e, n) { this.G = [], this.l = t.apiKey, this.m = t.appName, this.o = t.authDomain || null; var i, r = Yl.default.SDK_VERSION ? vi(Yl.default.SDK_VERSION) : null;
                    this.a = new Va(this.l, N(E), r), t.emulatorConfig && Xa(this.a, t.emulatorConfig), this.b = new nh(this.a), mh(this, e[qa]), rh(this.b, e), Ui(this, "refreshToken", this.b.a), yh(this, n || {}), hn.call(this), this.P = !1, this.o && yi() && (this.i = Dc(this.o, this.l, this.m)), this.R = [], this.f = null, this.u = (i = this, new th(function() { return i.I(!0) }, function(t) { return !(!t || "auth/network-request-failed" != t.code) }, function() { var t = ih(i.b) - y() - 3e5; return 0 < t ? t : 0 })), this.$ = g(this.gb, this); var o = this;
                    this.pa = null, this.Ba = function(t) { o.wa(t.h) }, this.ba = null, this.za = function(t) { Xa(o.a, t.c) }, this.W = null, this.X = [], this.Aa = function(t) { lh(o, t.f) }, this.aa = null, this.N = new Zc(this, n), Ui(this, "multiFactor", this.N) }

                function ch(t, e) { t.ba && tn(t.ba, "languageCodeChanged", t.Ba), (t.ba = e) && $e(e, "languageCodeChanged", t.Ba) }

                function hh(t, e) { t.W && tn(t.W, "emulatorConfigChanged", t.za), (t.W = e) && $e(e, "emulatorConfigChanged", t.za) }

                function lh(t, e) { t.X = e, Ya(t.a, Yl.default.SDK_VERSION ? vi(Yl.default.SDK_VERSION, t.X) : null) }

                function fh(t, e) { t.aa && tn(t.aa, "frameworkChanged", t.Aa), (t.aa = e) && $e(e, "frameworkChanged", t.Aa) }

                function dh(e) { try { return Yl.default.app(e.m).auth() } catch (t) { throw new I("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + e.m + "'!") } }

                function ph(t) { t.A || t.u.b || (t.u.start(), tn(t, "tokenChanged", t.$), $e(t, "tokenChanged", t.$)) }

                function vh(t) { tn(t, "tokenChanged", t.$), t.u.stop() }

                function mh(t, e) { t.ya = e, Ui(t, "_lat", e) }

                function gh(t) { for (var e = [], n = 0; n < t.R.length; n++) e.push(t.R[n](t)); return Ie(e).then(function() { return t }) }

                function bh(t) { t.i && !t.P && (t.P = !0, Tc(t.i, t)) }

                function yh(t, e) { Vi(t, { uid: e.uid, displayName: e.displayName || null, photoURL: e.photoURL || null, email: e.email || null, emailVerified: e.emailVerified || !1, phoneNumber: e.phoneNumber || null, isAnonymous: e.isAnonymous || !1, tenantId: e.tenantId || null, metadata: new ah(e.createdAt, e.lastLoginAt), providerData: [] }), t.a.b = t.tenantId }

                function wh() {}

                function Ih(t) { return be().then(function() { if (t.A) throw new I("app-deleted") }) }

                function Th(t) { return F(t.providerData, function(t) { return t.providerId }) }

                function Eh(t, e) { e && (Ah(t, e.providerId), t.providerData.push(e)) }

                function Ah(t, e) { G(t.providerData, function(t) { return t.providerId == e }) }

                function kh(t, e, n) {
                    ("uid" != e || n) && t.hasOwnProperty(e) && Ui(t, e, n) }

                function Sh(e, t) { var n, i;
                    e != t && (Vi(e, { uid: t.uid, displayName: t.displayName, photoURL: t.photoURL, email: t.email, emailVerified: t.emailVerified, phoneNumber: t.phoneNumber, isAnonymous: t.isAnonymous, tenantId: t.tenantId, providerData: [] }), t.metadata ? Ui(e, "metadata", new ah((i = t.metadata).a, i.b)) : Ui(e, "metadata", new ah), U(t.providerData, function(t) { Eh(e, t) }), n = e.b, i = t.b, n.b = i.b, n.a = i.a, Ui(e, "refreshToken", e.b.a), Qc(e.N, t.N.b)) }

                function Nh(r) { return r.I().then(function(t) { var e, n, i = r.isAnonymous; return n = t, Ws((e = r).a, Es, { idToken: n }).then(g(e.Jc, e)).then(function() { return i || kh(r, "isAnonymous", !1), t }) }) }

                function _h(t, e) { e[qa] && t.ya != e[qa] && (rh(t.b, e), t.dispatchEvent(new $c("tokenChanged")), mh(t, e[qa]), kh(t, "refreshToken", t.b.a)) }

                function Oh(t, e) { return Nh(t).then(function() { if (H(Th(t), e)) return gh(t).then(function() { throw new I("provider-already-linked") }) }) }

                function Ch(t, e, n) { return Fi({ user: t, credential: No(e), additionalUserInfo: e = Ur(e), operationType: n }) }

                function Rh(t, e) { return _h(t, e), t.reload().then(function() { return t }) }

                function Dh(n, i, t, e, r) { if (!yi()) return ye(new I("operation-not-supported-in-this-environment")); if (n.f && !r) return ye(n.f); var o = jr(t.providerId),
                        a = Si(n.uid + ":::"),
                        s = null;
                    (!Ti() || si()) && n.o && t.isOAuthProvider && (s = su(n.o, n.l, n.m, i, t, null, a, Yl.default.SDK_VERSION || null, null, null, n.tenantId)); var u = ni(s, o && o.ua, o && o.ta); return e = e().then(function() { if (Lh(n), !r) return n.I().then(function() {}) }).then(function() { return Sc(n.i, u, i, t, a, !!s, n.tenantId) }).then(function() { return new le(function(t, e) { n.ma(i, null, new I("cancelled-popup-request"), n.h || null), n.g = t, n.O = e, n.h = a, n.c = Oc(n.i, n, i, u, a) }) }).then(function(t) { return u && ei(u), t ? Fi(t) : null }).s(function(t) { throw u && ei(u), t }), xh(n, e, r) }

                function Ph(e, t, n, i, r) { if (!yi()) return ye(new I("operation-not-supported-in-this-environment")); if (e.f && !r) return ye(e.f); var o = null,
                        a = Si(e.uid + ":::"); return i = i().then(function() { if (Lh(e), !r) return e.I().then(function() {}) }).then(function() { return e.ga = a, gh(e) }).then(function(t) { return e.ha && (t = (t = e.ha).b.set(Uh, e.w(), t.a)), t }).then(function() { return _c(e.i, t, n, a, e.tenantId) }).s(function(t) { if (o = t, e.ha) return Vh(e.ha); throw o }).then(function() { if (o) throw o }), xh(e, i, r) }

                function Lh(t) { if (!t.i || !t.P) { if (t.i && !t.P) throw new I("internal-error"); throw new I("auth-domain-config-required") } }

                function xh(n, t, e) { var i, r = (t = t, e = e, (i = n).f && !e ? (t.cancel(), ye(i.f)) : t.s(function(t) { throw !t || "auth/user-disabled" != t.code && "auth/user-token-expired" != t.code || (i.f || i.dispatchEvent(new $c("userInvalidated")), i.f = t), t })); return n.G.push(r), r.na(function() { K(n.G, r) }), r.s(function(t) { var e = null; throw t && "auth/multi-factor-auth-required" === t.code && (e = Xc(t.w(), dh(n), g(n.ic, n))), e || t }) }

                function Mh(t) { if (!t.apiKey) return null; var e = { apiKey: t.apiKey, authDomain: t.authDomain, appName: t.appName, emulatorConfig: t.emulatorConfig },
                        n = {}; if (!t.stsTokenManager || !t.stsTokenManager.accessToken) return null;
                    n[qa] = t.stsTokenManager.accessToken, n.refreshToken = t.stsTokenManager.refreshToken || null; var i = new uh(e, n, t); return t.providerData && U(t.providerData, function(t) { t && Eh(i, Fi(t)) }), t.redirectEventId && (i.ga = t.redirectEventId), i }

                function jh(t) { this.a = t, this.b = Ku() }
                Kc.prototype.Qc = function(t) { var n = this; return t.rb(this.a.a, this.c).then(function(t) { var e = ut(n.f); return delete e[Gc], delete e[Bc], ht(e, t), n.g(e) }) }, w(Wc, I), Jc.prototype.rb = function(t, e, n) { return e.type == Yr ? (o = this, a = t, s = n, e.Ha().then(function(t) { return t = { idToken: t }, void 0 !== s && (t.displayName = s), ht(t, { phoneVerificationInfo: Ao(o.a) }), Ws(a, Is, t) })) : (i = this, r = t, e.Ha().then(function(t) { return ht(t = { mfaPendingCredential: t }, { phoneVerificationInfo: Ao(i.a) }), Ws(r, Ts, t) })); var i, r, o, a, s }, w(Yc, Jc), w(zc, Yc), w($c, Ve), (t = Zc.prototype).xc = function(t) { var e;
                    Qc(this, (t = t.gd, e = [], U(t.mfaInfo || [], function(t) {
                        (t = Ki(t)) && e.push(t) }), e)) }, t.Qb = function() { return this.a.I().then(function(t) { return new Jr(t, null) }) }, t.ec = function(e, n) { var i = this,
                        r = this.a.a; return this.Qb().then(function(t) { return e.rb(r, t, n) }).then(function(t) { return _h(i.a, t), i.a.reload() }) }, t.ad = function(t) { var n = this,
                        i = "string" == typeof t ? t : t.uid,
                        e = this.a.a; return this.a.I().then(function(t) { return Ws(e, Bs, { idToken: t, mfaEnrollmentId: i }) }).then(function(t) { var e = V(n.b, function(t) { return t.uid != i }); return Qc(n, e), _h(n.a, t), n.a.reload().s(function(t) { if ("auth/user-token-expired" != t.code) throw t }) }) }, t.w = function() { return { multiFactor: { enrolledFactors: F(this.b, function(t) { return t.w() }) } } }, th.prototype.start = function() { this.a = this.c,
                        function e(n, t) { n.stop();
                            n.b = vn(eh(n, t)).then(function() { return e = l.document, n = null, Ci() || !e ? be() : new le(function(t) { n = function() { Ci() && (e.removeEventListener("visibilitychange", n, !1), t()) }, e.addEventListener("visibilitychange", n, !1) }).s(function(t) { throw e.removeEventListener("visibilitychange", n, !1), t }); var e, n }).then(function() { return n.h() }).then(function() { e(n, !0) }).s(function(t) { n.i(t) && e(n, !1) }) }(this, !0) }, th.prototype.stop = function() { this.b && (this.b.cancel(), this.b = null) }, nh.prototype.w = function() { return { apiKey: this.c.c, refreshToken: this.a, accessToken: this.b && this.b.toString(), expirationTime: ih(this) } }, nh.prototype.getToken = function(t) { return t = !!t, this.b && !this.a ? ye(new I("user-token-expired")) : t || !this.b || y() > ih(this) - 3e4 ? this.a ? oh(this, { grant_type: "refresh_token", refresh_token: this.a }) : be(null) : be({ accessToken: this.b.toString(), refreshToken: this.a }) }, ah.prototype.w = function() { return { lastLoginAt: this.b, createdAt: this.a } }, w(uh, hn), uh.prototype.wa = function(t) { this.pa = t, Wa(this.a, t) }, uh.prototype.ka = function() { return this.pa }, uh.prototype.Ga = function() { return W(this.X) }, uh.prototype.gb = function() { this.u.b && (this.u.stop(), this.u.start()) }, Ui(uh.prototype, "providerId", "firebase"), (t = uh.prototype).reload = function() { var t = this; return xh(this, Ih(this).then(function() { return Nh(t).then(function() { return gh(t) }).then(wh) })) }, t.nc = function(t) { return this.I(t).then(function(t) { return new Hc(t) }) }, t.I = function(t) { var e = this; return xh(this, Ih(this).then(function() { return e.b.getToken(t) }).then(function(t) { if (!t) throw new I("internal-error"); return t.accessToken != e.ya && (mh(e, t.accessToken), e.dispatchEvent(new $c("tokenChanged"))), kh(e, "refreshToken", t.refreshToken), t.accessToken })) }, t.Jc = function(t) { if (!(t = t.users) || !t.length) throw new I("internal-error");
                    yh(this, { uid: (t = t[0]).localId, displayName: t.displayName, photoURL: t.photoUrl, email: t.email, emailVerified: !!t.emailVerified, phoneNumber: t.phoneNumber, lastLoginAt: t.lastLoginAt, createdAt: t.createdAt, tenantId: t.tenantId }); for (var e, n = (e = (e = t).providerUserInfo) && e.length ? F(e, function(t) { return new sh(t.rawId, t.providerId, t.email, t.displayName, t.photoUrl, t.phoneNumber) }) : [], i = 0; i < n.length; i++) Eh(this, n[i]);
                    kh(this, "isAnonymous", !(this.email && t.passwordHash || this.providerData && this.providerData.length)), this.dispatchEvent(new $c("userReloaded", { gd: t })) }, t.Kc = function(t) { return Mi("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."), this.sb(t) }, t.sb = function(t) { var e = this,
                        n = null; return xh(this, t.c(this.a, this.uid).then(function(t) { return _h(e, t), n = Ch(e, t, "reauthenticate"), e.f = null, e.reload() }).then(function() { return n }), !0) }, t.Bc = function(t) { return Mi("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."), this.pb(t) }, t.pb = function(e) { var n = this,
                        i = null; return xh(this, Oh(this, e.providerId).then(function() { return n.I() }).then(function(t) { return e.b(n.a, t) }).then(function(t) { return i = Ch(n, t, "link"), Rh(n, t) }).then(function() { return i })) }, t.Cc = function(t, e) { var n = this; return xh(this, Oh(this, "phone").then(function() { return qc(dh(n), t, e, g(n.pb, n)) })) }, t.Lc = function(t, e) { var n = this; return xh(this, be().then(function() { return qc(dh(n), t, e, g(n.sb, n)) }), !0) }, t.Ab = function(e) { var n = this; return xh(this, this.I().then(function(t) { return n.a.Ab(t, e) }).then(function(t) { return _h(n, t), n.reload() })) }, t.dd = function(e) { var n = this; return xh(this, this.I().then(function(t) { return e.b(n.a, t) }).then(function(t) { return _h(n, t), n.reload() })) }, t.Bb = function(e) { var n = this; return xh(this, this.I().then(function(t) { return n.a.Bb(t, e) }).then(function(t) { return _h(n, t), n.reload() })) }, t.Cb = function(e) { if (void 0 === e.displayName && void 0 === e.photoURL) return Ih(this); var n = this; return xh(this, this.I().then(function(t) { return n.a.Cb(t, { displayName: e.displayName, photoUrl: e.photoURL }) }).then(function(t) { return _h(n, t), kh(n, "displayName", t.displayName || null), kh(n, "photoURL", t.photoUrl || null), U(n.providerData, function(t) { "password" === t.providerId && (Ui(t, "displayName", n.displayName), Ui(t, "photoURL", n.photoURL)) }), gh(n) }).then(wh)) }, t.bd = function(e) { var n = this; return xh(this, Nh(this).then(function(t) { return H(Th(n), e) ? Ws(n.a, bs, { idToken: t, deleteProvider: [e] }).then(function(t) { var e = {}; return U(t.providerUserInfo || [], function(t) { e[t.providerId] = !0 }), U(Th(n), function(t) { e[t] || Ah(n, t) }), e[ko.PROVIDER_ID] || Ui(n, "phoneNumber", null), gh(n) }) : gh(n).then(function() { throw new I("no-such-provider") }) })) }, t.delete = function() { var e = this; return xh(this, this.I().then(function(t) { return Ws(e.a, gs, { idToken: t }) }).then(function() { e.dispatchEvent(new $c("userDeleted")) })).then(function() { for (var t = 0; t < e.G.length; t++) e.G[t].cancel("app-deleted");
                        ch(e, null), hh(e, null), fh(e, null), e.G = [], e.A = !0, vh(e), Ui(e, "refreshToken", null), e.i && Ec(e.i, e) }) }, t.Eb = function(t, e) { return !!("linkViaPopup" == t && (this.h || null) == e && this.g || "reauthViaPopup" == t && (this.h || null) == e && this.g || "linkViaRedirect" == t && (this.ga || null) == e || "reauthViaRedirect" == t && (this.ga || null) == e) }, t.ma = function(t, e, n, i) { "linkViaPopup" != t && "reauthViaPopup" != t || i != (this.h || null) || (n && this.O ? this.O(n) : e && !n && this.g && this.g(e), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O) }, t.Fa = function(t, e) { return "linkViaPopup" == t && e == (this.h || null) ? g(this.Jb, this) : "reauthViaPopup" == t && e == (this.h || null) ? g(this.Kb, this) : "linkViaRedirect" == t && (this.ga || null) == e ? g(this.Jb, this) : "reauthViaRedirect" == t && (this.ga || null) == e ? g(this.Kb, this) : null }, t.Dc = function(t) { var e = this; return Dh(this, "linkViaPopup", t, function() { return Oh(e, t.providerId).then(function() { return gh(e) }) }, !1) }, t.Mc = function(t) { return Dh(this, "reauthViaPopup", t, function() { return be() }, !0) }, t.Ec = function(t) { var e = this; return Ph(this, "linkViaRedirect", t, function() { return Oh(e, t.providerId) }, !1) }, t.Nc = function(t) { return Ph(this, "reauthViaRedirect", t, function() { return be() }, !0) }, t.Jb = function(e, n, t, i) { var r = this;
                    this.c && (this.c.cancel(), this.c = null); var o = null; return t = this.I().then(function(t) { return hs(r.a, { requestUri: e, postBody: i, sessionId: n, idToken: t }) }).then(function(t) { return o = Ch(r, t, "link"), Rh(r, t) }).then(function() { return o }), xh(this, t) }, t.Kb = function(t, e, n, i) { var r = this;
                    this.c && (this.c.cancel(), this.c = null); var o = null; return xh(this, be().then(function() { return Zr(ls(r.a, { requestUri: t, sessionId: e, postBody: i, tenantId: n }), r.uid) }).then(function(t) { return o = Ch(r, t, "reauthenticate"), _h(r, t), r.f = null, r.reload() }).then(function() { return o }), !0) }, t.tb = function(e) { var n = this,
                        i = null; return xh(this, this.I().then(function(t) { return i = t, void 0 === e || st(e) ? {} : _r(new br(e)) }).then(function(t) { return n.a.tb(i, t) }).then(function(t) { if (n.email != t) return n.reload() }).then(function() {})) }, t.Db = function(e, n) { var i = this,
                        r = null; return xh(this, this.I().then(function(t) { return r = t, void 0 === n || st(n) ? {} : _r(new br(n)) }).then(function(t) { return i.a.Db(r, e, t) }).then(function(t) { if (i.email != t) return i.reload() }).then(function() {})) }, t.ic = function(t) { var e = null,
                        n = this; return xh(this, t = Zr(be(t), n.uid).then(function(t) { return e = Ch(n, t, "reauthenticate"), _h(n, t), n.f = null, n.reload() }).then(function() { return e }), !0) }, t.toJSON = function() { return this.w() }, t.w = function() { var e = { uid: this.uid, displayName: this.displayName, photoURL: this.photoURL, email: this.email, emailVerified: this.emailVerified, phoneNumber: this.phoneNumber, isAnonymous: this.isAnonymous, tenantId: this.tenantId, providerData: [], apiKey: this.l, appName: this.m, authDomain: this.o, stsTokenManager: this.b.w(), redirectEventId: this.ga || null }; return this.metadata && ht(e, this.metadata.w()), U(this.providerData, function(t) { e.providerData.push(function(t) { var e, n = {}; for (e in t) t.hasOwnProperty(e) && (n[e] = t[e]); return n }(t)) }), ht(e, this.N.w()), e }; var Uh = { name: "redirectUser", D: "session" };

                function Vh(t) { return Wu(t.b, Uh, t.a) }

                function Fh(t) { var e, n, i, r;
                    this.a = t, this.b = Ku(), this.c = null, this.f = (n = Kh("local"), i = Kh("session"), r = Kh("none"), function(n, i, r) { var o = Bu(i, r),
                            a = Gu(n, i.D); return n.get(i, r).then(function(t) { var e = null; try { e = ki(l.localStorage.getItem(o)) } catch (t) {} if (e && !t) return l.localStorage.removeItem(o), n.set(i, e, r);
                            e && t && "localStorage" != a.type && l.localStorage.removeItem(o) }) }((e = this).b, n, e.a).then(function() { return e.b.get(i, e.a) }).then(function(t) { return t ? i : e.b.get(r, e.a).then(function(t) { return t ? r : e.b.get(n, e.a).then(function(t) { return t ? n : e.b.get(Hh, e.a).then(function(t) { return t ? Kh(t) : n }) }) }) }).then(function(t) { return e.c = t, qh(e, t.D) }).s(function() { e.c || (e.c = n) })), this.b.addListener(Kh("local"), this.a, g(this.g, this)) }

                function qh(t, e) { var n, s, i = []; for (n in qu) qu[n] !== e && i.push(Wu(t.b, Kh(qu[n]), t.a)); return i.push(Wu(t.b, Hh, t.a)), s = i, new le(function(n, e) { var i = s.length,
                            r = []; if (i)
                            for (var t = function(t, e) { i--, r[t] = e, 0 == i && n(r) }, o = function(t) { e(t) }, a = 0; a < s.length; a++) we(s[a], b(t, a), o);
                        else n(r) }) }
                Fh.prototype.g = function() { var e = this,
                        n = Kh("local");
                    Xh(this, function() { return be().then(function() { return e.c && "local" != e.c.D ? e.b.get(n, e.a) : null }).then(function(t) { if (t) return qh(e, "local").then(function() { e.c = n }) }) }) }; var Hh = { name: "persistence", D: "session" };

                function Kh(t) { return { name: "authUser", D: t } }

                function Gh(t, e) { return Xh(t, function() { return t.b.set(t.c, e.w(), t.a) }) }

                function Bh(t) { return Xh(t, function() { return Wu(t.b, t.c, t.a) }) }

                function Wh(t, e, n) { return Xh(t, function() { return t.b.get(t.c, t.a).then(function(t) { return t && e && (t.authDomain = e), t && n && (t.emulatorConfig = n), Mh(t || {}) }) }) }

                function Xh(t, e) { return t.f = t.f.then(e, e), t.f }

                function Jh(t) { if (this.m = !1, Ui(this, "settings", new Vc), Ui(this, "app", t), !il(this).options || !il(this).options.apiKey) throw new I("invalid-api-key"); var n, e, i, r, o, a;
                    t = Yl.default.SDK_VERSION ? vi(Yl.default.SDK_VERSION) : null, this.a = new Va(il(this).options && il(this).options.apiKey, N(E), t), this.R = [], this.u = [], this.P = [], this.ac = Yl.default.INTERNAL.createSubscribe(g(this.yc, this)), this.X = void 0, this.bc = Yl.default.INTERNAL.createSubscribe(g(this.zc, this)), el(this, null), this.l = new Fh(il(this).options.apiKey + ":" + il(this).name), this.G = new jh(il(this).options.apiKey + ":" + il(this).name), this.$ = sl(this, (e = il(n = this).options.authDomain, t = function(e) { var t = function(t, e) { return t.b.get(Uh, t.a).then(function(t) { return t && e && (t.authDomain = e), Mh(t || {}) }) }(e.G, il(e).options.authDomain).then(function(t) { return (e.o = t) && (t.ha = e.G), Vh(e.G) }); return sl(e, t) }(n).then(function() { return Wh(n.l, e, n.f) }).then(function(e) { return e ? (e.ha = n.G, n.o && (n.o.ga || null) == (e.ga || null) ? e : e.reload().then(function() { return Gh(n.l, e).then(function() { return e }) }).s(function(t) { return "auth/network-request-failed" == t.code ? e : Bh(n.l) })) : null }).then(function(t) { el(n, t || null) }), sl(n, t))), this.i = sl(this, (i = this).$.then(function() { return Qh(i) }).s(function() {}).then(function() { if (!i.m) return i.pa() }).s(function() {}).then(function() { var t;
                        i.m || (i.ba = !0, (t = i.l).b.addListener(Kh("local"), t.a, i.pa)) })), this.ba = !1, this.pa = g(this.Yc, this), this.Ba = g(this.da, this), this.ya = g(this.kc, this), this.za = g(this.vc, this), this.Aa = g(this.wc, this), this.b = null, o = il(r = this).options.authDomain, a = il(r).options.apiKey, o && yi() && (r.gb = r.$.then(function() { var t; if (!r.m) return r.b = Dc(o, a, il(r).name, r.f), Tc(r.b, r), rl(r) && bh(rl(r)), r.o && (bh(r.o), (t = r.o).wa(r.ka()), ch(t, r), lh(t = r.o, r.N), fh(t, r), Xa((t = r.o).a, r.f), hh(t, r), r.o = null), r.b })), this.INTERNAL = {}, this.INTERNAL.delete = g(this.delete, this), this.INTERNAL.logFramework = g(this.Fc, this), this.A = 0, hn.call(this), t = this, Object.defineProperty(t, "lc", { get: function() { return this.ka() }, set: function(t) { this.wa(t) }, enumerable: !1 }), t.aa = null, Object.defineProperty(t, "ti", { get: function() { return this.S() }, set: function(t) { this.xb(t) }, enumerable: !1 }), t.W = null, this.N = [], this.f = null }

                function Yh(t) { Ve.call(this, "languageCodeChanged"), this.h = t }

                function zh(t) { Ve.call(this, "emulatorConfigChanged"), this.c = t }

                function $h(t) { Ve.call(this, "frameworkChanged"), this.f = t }

                function Zh(t) { return t.gb || ye(new I("auth-domain-config-required")) }

                function Qh(t) { if (!yi()) return ye(new I("operation-not-supported-in-this-environment")); var e = Zh(t).then(function() { return t.b.qa() }).then(function(t) { return t ? Fi(t) : null }); return sl(t, e) }

                function tl(o, a) { var s = {}; return s.apiKey = il(o).options.apiKey, s.authDomain = il(o).options.authDomain, s.appName = il(o).name, o.f && (s.emulatorConfig = o.f), o.$.then(function() { return t = s, e = a, n = o.G, i = o.Ga(), r = new uh(t, e), n && (r.ha = n), i && lh(r, i), r.reload().then(function() { return r }); var t, e, n, i, r }).then(function(t) { return rl(o) && t.uid == rl(o).uid ? Sh(rl(o), t) : (el(o, t), bh(t)), o.da(t) }).then(function() { al(o) }) }

                function el(t, e) { var n, i;
                    rl(t) && (n = rl(t), i = t.Ba, G(n.R, function(t) { return t == i }), tn(rl(t), "tokenChanged", t.ya), tn(rl(t), "userDeleted", t.za), tn(rl(t), "userInvalidated", t.Aa), vh(rl(t))), e && (e.R.push(t.Ba), $e(e, "tokenChanged", t.ya), $e(e, "userDeleted", t.za), $e(e, "userInvalidated", t.Aa), 0 < t.A && ph(e)), Ui(t, "currentUser", e), e && (e.wa(t.ka()), ch(e, t), lh(e, t.N), fh(e, t), Xa(e.a, t.f), hh(e, t)) }

                function nl(n, t) { var e = null,
                        i = null; return sl(n, t.then(function(t) { return e = No(t), i = Ur(t), tl(n, t) }, function(t) { var e = null; throw t && "auth/multi-factor-auth-required" === t.code && (e = Xc(t.w(), n, g(n.jc, n))), e || t }).then(function() { return Fi({ user: rl(n), credential: e, additionalUserInfo: i, operationType: "signIn" }) })) }

                function il(t) { return t.app }

                function rl(t) { return t.currentUser }

                function ol(t) { return rl(t) && rl(t)._lat || null }

                function al(t) { if (t.ba) { for (var e = 0; e < t.u.length; e++) t.u[e] && t.u[e](ol(t)); if (t.X !== t.getUid() && t.P.length)
                            for (t.X = t.getUid(), e = 0; e < t.P.length; e++) t.P[e] && t.P[e](ol(t)) } }

                function sl(t, e) { return t.R.push(e), e.na(function() { K(t.R, e) }), e }

                function ul() {}

                function cl() { this.a = {}, this.b = 1e12 }
                Fh.prototype.wb = function(e) { var n = null,
                        i = this; return function(t) { var e = new I("invalid-persistence-type"),
                            n = new I("unsupported-persistence-type");
                        t: { for (i in qu)
                                if (qu[i] == t) { var i = !0; break t }
                            i = !1 }
                        if (!i || "string" != typeof t) throw e; switch (ci()) {
                            case "ReactNative":
                                if ("session" === t) throw n; break;
                            case "Node":
                                if ("none" !== t) throw n; break;
                            case "Worker":
                                if ("session" === t || !wu() && "none" !== t) throw n; break;
                            default:
                                if (!bi() && "none" !== t) throw n } }(e), Xh(this, function() { return e != i.c.D ? i.b.get(i.c, i.a).then(function(t) { return n = t, qh(i, e) }).then(function() { if (i.c = Kh(e), n) return i.b.set(i.c, n, i.a) }) : be() }) }, w(Jh, hn), w(Yh, Ve), w(zh, Ve), w($h, Ve), (t = Jh.prototype).wb = function(t) { return t = this.l.wb(t), sl(this, t) }, t.wa = function(t) { this.aa === t || this.m || (this.aa = t, Wa(this.a, this.aa), this.dispatchEvent(new Yh(this.ka()))) }, t.ka = function() { return this.aa }, t.ed = function() { var t = l.navigator;
                    this.wa(t && (t.languages && t.languages[0] || t.language || t.userLanguage) || null) }, t.fd = function(t) { if (!this.f) { if (!/^https?:\/\//.test(t)) throw new I("argument-error", "Emulator URL must start with a valid scheme (http:// or https://).");
                        Ri("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."), l.document && oi().then(function() { var t = l.document.createElement("div");
                            t.innerText = "Running in emulator mode. Do not use with production credentials.", t.style.position = "fixed", t.style.width = "100%", t.style.backgroundColor = "#ffffff", t.style.border = ".1em solid #000000", t.style.color = "#ff0000", t.style.bottom = "0px", t.style.left = "0px", t.style.margin = "0px", t.style.zIndex = 1e4, t.style.textAlign = "center", t.classList.add("firebase-emulator-warning"), l.document.body.appendChild(t) }), this.f = { url: t }, this.settings.hb = !0, Xa(this.a, this.f), this.dispatchEvent(new zh(this.f)) } }, t.Fc = function(t) { this.N.push(t), Ya(this.a, Yl.default.SDK_VERSION ? vi(Yl.default.SDK_VERSION, this.N) : null), this.dispatchEvent(new $h(this.N)) }, t.Ga = function() { return W(this.N) }, t.xb = function(t) { this.W === t || this.m || (this.W = t, this.a.b = this.W) }, t.S = function() { return this.W }, t.toJSON = function() { return { apiKey: il(this).options.apiKey, authDomain: il(this).options.authDomain, appName: il(this).name, currentUser: rl(this) && rl(this).w() } }, t.Eb = function(t, e) { switch (t) {
                        case "unknown":
                        case "signInViaRedirect":
                            return !0;
                        case "signInViaPopup":
                            return this.h == e && !!this.g;
                        default:
                            return !1 } }, t.ma = function(t, e, n, i) { "signInViaPopup" == t && this.h == i && (n && this.O ? this.O(n) : e && !n && this.g && this.g(e), this.c && (this.c.cancel(), this.c = null), delete this.g, delete this.O) }, t.Fa = function(t, e) { return "signInViaRedirect" == t || "signInViaPopup" == t && this.h == e && this.g ? g(this.hc, this) : null }, t.hc = function(t, e, n, i) { var r = this,
                        o = { requestUri: t, postBody: i, sessionId: e, tenantId: n }; return this.c && (this.c.cancel(), this.c = null), r.$.then(function() { return nl(r, cs(r.a, o)) }) }, t.Wc = function(e) { if (!yi()) return ye(new I("operation-not-supported-in-this-environment")); var n = this,
                        t = jr(e.providerId),
                        i = Si(),
                        r = null;
                    (!Ti() || si()) && il(this).options.authDomain && e.isOAuthProvider && (r = su(il(this).options.authDomain, il(this).options.apiKey, il(this).name, "signInViaPopup", e, null, i, Yl.default.SDK_VERSION || null, null, null, this.S(), this.f)); var o = ni(r, t && t.ua, t && t.ta); return sl(this, t = Zh(this).then(function(t) { return Sc(t, o, "signInViaPopup", e, i, !!r, n.S()) }).then(function() { return new le(function(t, e) { n.ma("signInViaPopup", null, new I("cancelled-popup-request"), n.h), n.g = t, n.O = e, n.h = i, n.c = Oc(n.b, n, "signInViaPopup", o, i) }) }).then(function(t) { return o && ei(o), t ? Fi(t) : null }).s(function(t) { throw o && ei(o), t })) }, t.Xc = function(t) { if (!yi()) return ye(new I("operation-not-supported-in-this-environment")); var e = this; return sl(this, Zh(this).then(function() { return Xh(t = e.l, function() { return t.b.set(Hh, t.c.D, t.a) }); var t }).then(function() { return _c(e.b, "signInViaRedirect", t, void 0, e.S()) })) }, t.qa = function() { var e = this; return Qh(this).then(function(t) { return e.b && xc(e.b.b), t }).s(function(t) { throw e.b && xc(e.b.b), t }) }, t.cd = function(t) { if (!t) return ye(new I("null-user")); if (this.W != t.tenantId) return ye(new I("tenant-id-mismatch")); var e = this,
                        n = {};
                    n.apiKey = il(this).options.apiKey, n.authDomain = il(this).options.authDomain, n.appName = il(this).name; var i, r, o, a, s, u = (i = t, r = n, o = e.G, a = e.Ga(), s = i.b, (n = {})[qa] = s.b && s.b.toString(), n.refreshToken = s.a, r = new uh(r || { apiKey: i.l, authDomain: i.o, appName: i.m }, n), o && (r.ha = o), a && lh(r, a), Sh(r, i), r); return sl(this, this.i.then(function() { if (il(e).options.apiKey != t.l) return u.reload() }).then(function() { return rl(e) && t.uid == rl(e).uid ? (Sh(rl(e), t), e.da(t)) : (el(e, u), bh(u), e.da(u)) }).then(function() { al(e) })) }, t.zb = function() { var t = this,
                        e = this.i.then(function() { return t.b && xc(t.b.b), rl(t) ? (el(t, null), Bh(t.l).then(function() { al(t) })) : be() }); return sl(this, e) }, t.Yc = function() { var i = this; return Wh(this.l, il(this).options.authDomain).then(function(t) { if (!i.m) { var e, n; if ((n = rl(i) && t) && (n = rl(i).uid, e = t.uid, n = null != n && "" !== n && null != e && "" !== e && n == e), n) return Sh(rl(i), t), rl(i).I();
                            (rl(i) || t) && (el(i, t), t && (bh(t), t.ha = i.G), i.b && Tc(i.b, i), al(i)) } }) }, t.da = function(t) { return Gh(this.l, t) }, t.kc = function() { al(this), this.da(rl(this)) }, t.vc = function() { this.zb() }, t.wc = function() { this.zb() }, t.jc = function(t) { var e = this; return this.i.then(function() { return nl(e, be(t)) }) }, t.yc = function(t) { var e = this;
                    this.addAuthTokenListener(function() { t.next(rl(e)) }) }, t.zc = function(t) { var e, n, i = this;
                    n = function() { t.next(rl(i)) }, (e = this).P.push(n), sl(e, e.i.then(function() {!e.m && H(e.P, n) && e.X !== e.getUid() && (e.X = e.getUid(), n(ol(e))) })) }, t.Hc = function(t, e, n) { var i = this; return this.ba && Promise.resolve().then(function() { "function" == typeof t ? t(rl(i)) : "function" == typeof t.next && t.next(rl(i)) }), this.ac(t, e, n) }, t.Gc = function(t, e, n) { var i = this; return this.ba && Promise.resolve().then(function() { i.X = i.getUid(), "function" == typeof t ? t(rl(i)) : "function" == typeof t.next && t.next(rl(i)) }), this.bc(t, e, n) }, t.mc = function(t) { var e = this,
                        n = this.i.then(function() { return rl(e) ? rl(e).I(t).then(function(t) { return { accessToken: t } }) : null }); return sl(this, n) }, t.Sc = function(t) { var n = this; return this.i.then(function() { return nl(n, Ws(n.a, Fs, { token: t })) }).then(function(t) { var e = t.user; return kh(e, "isAnonymous", !1), n.da(e), t }) }, t.Tc = function(t, e) { var n = this; return this.i.then(function() { return nl(n, Ws(n.a, qs, { email: t, password: e })) }) }, t.dc = function(t, e) { var n = this; return this.i.then(function() { return nl(n, Ws(n.a, vs, { email: t, password: e })) }) }, t.Za = function(t) { var e = this; return this.i.then(function() { return nl(e, t.ja(e.a)) }) }, t.Rc = function(t) { return Mi("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."), this.Za(t) }, t.yb = function() { var n = this; return this.i.then(function() { var t = rl(n); if (t && t.isAnonymous) { var e = Fi({ providerId: null, isNewUser: !1 }); return Fi({ user: t, credential: null, additionalUserInfo: e, operationType: "signIn" }) } return nl(n, n.a.yb()).then(function(t) { var e = t.user; return kh(e, "isAnonymous", !0), n.da(e), t }) }) }, t.getUid = function() { return rl(this) && rl(this).uid || null }, t.cc = function(t) { this.addAuthTokenListener(t), this.A++, 0 < this.A && rl(this) && ph(rl(this)) }, t.Oc = function(e) { var n = this;
                    U(this.u, function(t) { t == e && n.A-- }), this.A < 0 && (this.A = 0), 0 == this.A && rl(this) && vh(rl(this)), this.removeAuthTokenListener(e) }, t.addAuthTokenListener = function(t) { var e = this;
                    this.u.push(t), sl(this, this.i.then(function() { e.m || H(e.u, t) && t(ol(e)) })) }, t.removeAuthTokenListener = function(e) { G(this.u, function(t) { return t == e }) }, t.delete = function() { this.m = !0; for (var t = 0; t < this.R.length; t++) this.R[t].cancel("app-deleted"); return this.R = [], this.l && (t = this.l).b.removeListener(Kh("local"), t.a, this.pa), this.b && (Ec(this.b, this), xc(this.b.b)), Promise.resolve() }, t.gc = function(t) { return sl(this, Ws(this.a, ms, { identifier: t, continueUri: wi() ? Zn() : "http://localhost" }).then(function(t) { return t.signinMethods || [] })) }, t.Ac = function(t) { return !!Io(t) }, t.vb = function(e, n) { var i = this; return sl(this, be().then(function() { var t = new br(n); if (!t.c) throw new I("argument-error", Ir + " must be true when sending sign in link to email"); return _r(t) }).then(function(t) { return i.a.vb(e, t) }).then(function() {})) }, t.hd = function(t) { return this.Qa(t).then(function(t) { return t.data.email }) }, t.mb = function(t, e) { return sl(this, this.a.mb(t, e).then(function() {})) }, t.Qa = function(t) { return sl(this, this.a.Qa(t).then(function(t) { return new Yi(t) })) }, t.ib = function(t) { return sl(this, this.a.ib(t).then(function() {})) }, t.ub = function(e, t) { var n = this; return sl(this, be().then(function() { return void 0 === t || st(t) ? {} : _r(new br(t)) }).then(function(t) { return n.a.ub(e, t) }).then(function() {})) }, t.Vc = function(t, e) { return sl(this, qc(this, t, e, g(this.Za, this))) }, t.Uc = function(n, i) { var r = this; return sl(this, be().then(function() { var t = i || Zn(),
                            e = wo(n, t); if (!(t = Io(t))) throw new I("argument-error", "Invalid email link!"); if (t.tenantId !== r.S()) throw new I("tenant-id-mismatch"); return r.Za(e) })) }, ul.prototype.render = function() {}, ul.prototype.reset = function() {}, ul.prototype.getResponse = function() {}, ul.prototype.execute = function() {}; var hl = null;

                function ll(t, e) { return (e = fl(e)) && t.a[e] || null }

                function fl(t) { return (t = void 0 === t ? 1e12 : t) ? t.toString() : null }

                function dl(t, e) { this.g = !1, this.c = e, this.a = this.b = null, this.h = "invisible" !== this.c.size, this.f = Zt(t); var n = this;
                    this.i = function() { n.execute() }, this.h ? this.execute() : $e(this.f, "click", this.i) }

                function pl(t) { if (t.g) throw Error("reCAPTCHA mock was already deleted!") }

                function vl() {}

                function ml() {}
                cl.prototype.render = function(t, e) { return this.a[this.b.toString()] = new dl(t, e), this.b++ }, cl.prototype.reset = function(t) { var e = ll(this, t);
                    t = fl(t), e && t && (e.delete(), delete this.a[t]) }, cl.prototype.getResponse = function(t) { return (t = ll(this, t)) ? t.getResponse() : null }, cl.prototype.execute = function(t) {
                    (t = ll(this, t)) && t.execute() }, dl.prototype.getResponse = function() { return pl(this), this.b }, dl.prototype.execute = function() { pl(this); var n = this;
                    this.a || (this.a = setTimeout(function() { n.b = function() { for (var t = 50, e = []; 0 < t;) e.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), t--; return e.join("") }(); var t = n.c.callback,
                            e = n.c["expired-callback"]; if (t) try { t(n.b) } catch (t) {}
                        n.a = setTimeout(function() { if (n.a = null, n.b = null, e) try { e() } catch (t) {}
                            n.h && n.execute() }, 6e4) }, 500)) }, dl.prototype.delete = function() { pl(this), this.g = !0, clearTimeout(this.a), this.a = null, tn(this.f, "click", this.i) }, Ui(vl, "FACTOR_ID", "phone"), ml.prototype.g = function() { return be(hl = hl || new cl) }, ml.prototype.c = function() {}; var gl = null;

                function bl() { this.b = l.grecaptcha ? 1 / 0 : 0, this.f = null, this.a = "__rcb" + Math.floor(1e6 * Math.random()).toString() } var yl = new ft(vt, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
                    wl = new Oi(3e4, 6e4);
                bl.prototype.g = function(r) { var o = this; return new le(function(t, e) { var i = setTimeout(function() { e(new I("network-request-failed")) }, wl.get());!l.grecaptcha || r !== o.f && !o.b ? (l[o.a] = function() { var n;
                            l.grecaptcha ? (o.f = r, n = l.grecaptcha.render, l.grecaptcha.render = function(t, e) { return t = n(t, e), o.b++, t }, clearTimeout(i), t(l.grecaptcha)) : (clearTimeout(i), e(new I("internal-error"))), delete l[o.a] }, be(Da(yt(yl, { onload: o.a, hl: r || "" }))).s(function() { clearTimeout(i), e(new I("internal-error", "Unable to load external reCAPTCHA dependencies!")) })) : (clearTimeout(i), t(l.grecaptcha)) }) }, bl.prototype.c = function() { this.b-- }; var Il = null;

                function Tl(t, e, n, i, r, o, a) { if (Ui(this, "type", "recaptcha"), this.c = this.f = null, this.A = !1, this.m = e, this.g = null, a = a ? gl = gl || new ml : Il = Il || new bl, this.v = a, this.a = n || { theme: "light", type: "image" }, this.h = [], this.a[kl]) throw new I("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project."); if (this.i = "invisible" === this.a[Sl], !l.document) throw new I("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support."); if (!Zt(e) || !this.i && Zt(e).hasChildNodes()) throw new I("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
                    this.o = new Va(t, o || null, r || null), this.u = i || function() { return null }; var s = this;
                    this.l = []; var u = this.a[El];
                    this.a[El] = function(t) { var e;
                        Nl(s, t), "function" == typeof u ? u(t) : "string" != typeof u || "function" == typeof(e = gi(u, l)) && e(t) }; var c = this.a[Al];
                    this.a[Al] = function() { var t;
                        Nl(s, null), "function" == typeof c ? c() : "string" != typeof c || "function" == typeof(t = gi(c, l)) && t() } } var El = "callback",
                    Al = "expired-callback",
                    kl = "sitekey",
                    Sl = "size";

                function Nl(t, e) { for (var n = 0; n < t.l.length; n++) try { t.l[n](e) } catch (t) {} }

                function _l(t, e) { return t.h.push(e), e.na(function() { K(t.h, e) }), e }

                function Ol(t) { if (t.A) throw new I("internal-error", "RecaptchaVerifier instance has been destroyed.") }

                function Cl(t, e, n) { var i = !1; try { this.b = n || Yl.default.app() } catch (t) { throw new I("argument-error", "No firebase.app.App instance is currently initialized.") } if (!this.b.options || !this.b.options.apiKey) throw new I("invalid-api-key");
                    n = this.b.options.apiKey; var r = this,
                        o = null; try { o = this.b.auth().Ga() } catch (t) {} try { i = this.b.auth().settings.appVerificationDisabledForTesting } catch (t) {}
                    o = Yl.default.SDK_VERSION ? vi(Yl.default.SDK_VERSION, o) : null, Tl.call(this, n, t, e, function() { try { var e = r.b.auth().ka() } catch (t) { e = null } return e }, o, N(E), i) }

                function Rl(t, e, n, i) { t: { n = Array.prototype.slice.call(n); for (var r = 0, o = !1, a = 0; a < e.length; a++)
                            if (e[a].optional) o = !0;
                            else { if (o) throw new I("internal-error", "Argument validator encountered a required argument after an optional argument.");
                                r++ }
                        if (o = e.length, n.length < r || o < n.length) i = "Expected " + (r == o ? 1 == r ? "1 argument" : r + " arguments" : r + "-" + o + " arguments") + " but got " + n.length + ".";
                        else { for (r = 0; r < n.length; r++)
                                if (o = e[r].optional && void 0 === n[r], !e[r].K(n[r]) && !o) { if (e = e[r], r < 0 || r >= Dl.length) throw new I("internal-error", "Argument validator received an unsupported number of arguments.");
                                    n = Dl[r], i = (i ? "" : n + " argument ") + (e.name ? '"' + e.name + '" ' : "") + "must be " + e.J + "."; break t }
                            i = null } } if (i) throw new I("argument-error", t + " failed: " + i) }(t = Tl.prototype).Ia = function() { var e = this; return this.f ? this.f : this.f = _l(this, be().then(function() { if (wi() && !ui()) return oi(); throw new I("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.") }).then(function() { return e.v.g(e.u()) }).then(function(t) { return e.g = t, Ws(e.o, Os, {}) }).then(function(t) { e.a[kl] = t.recaptchaSiteKey }).s(function(t) { throw e.f = null, t })) }, t.render = function() { Ol(this); var n = this; return _l(this, this.Ia().then(function() { var t, e; return null === n.c && (e = n.m, n.i || (t = Zt(e), e = ie("DIV"), t.appendChild(e)), n.c = n.g.render(e, n.a)), n.c })) }, t.verify = function() { Ol(this); var r = this; return _l(this, this.render().then(function(e) { return new le(function(n) { var i, t = r.g.getResponse(e);
                            t ? n(t) : (i = function(t) { var e;
                                t && (e = i, G(r.l, function(t) { return t == e }), n(t)) }, r.l.push(i), r.i && r.g.execute(r.c)) }) })) }, t.reset = function() { Ol(this), null !== this.c && this.g.reset(this.c) }, t.clear = function() { Ol(this), this.A = !0, this.v.c(); for (var t, e = 0; e < this.h.length; e++) this.h[e].cancel("RecaptchaVerifier instance has been destroyed."); if (!this.i) { e = Zt(this.m); for (; t = e.firstChild;) e.removeChild(t) } }, w(Cl, Tl); var Dl = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

                function Pl(t, e) { return { name: t || "", J: "a valid string", optional: !!e, K: function(t) { return "string" == typeof t } } }

                function Ll(t, e) { return { name: t || "", J: "a boolean", optional: !!e, K: function(t) { return "boolean" == typeof t } } }

                function xl(t, e) { return { name: t || "", J: "a valid object", optional: !!e, K: v } }

                function Ml(t, e) { return { name: t || "", J: "a function", optional: !!e, K: function(t) { return "function" == typeof t } } }

                function jl(t, e) { return { name: t || "", J: "null", optional: !!e, K: function(t) { return null === t } } }

                function Ul(n) { return { name: n ? n + "Credential" : "credential", J: n ? "a valid " + n + " credential" : "a valid credential", optional: !1, K: function(t) { if (!t) return !1; var e = !n || t.providerId === n; return !(!t.ja || !e) } } }

                function Vl() { return { name: "multiFactorAssertion", J: "a valid multiFactorAssertion", optional: !1, K: function(t) { return !!t && !!t.rb } } }

                function Fl() { return { name: "authProvider", J: "a valid Auth provider", optional: !1, K: function(t) { return !!(t && t.providerId && t.hasOwnProperty && t.hasOwnProperty("isOAuthProvider")) } } }

                function ql(t, e) { return v(t) && "string" == typeof t.type && t.type === e && "function" == typeof t.Ha }

                function Hl(t) { return v(t) && "string" == typeof t.uid }

                function Kl() { return { name: "applicationVerifier", J: "an implementation of firebase.auth.ApplicationVerifier", optional: !1, K: function(t) { return !(!t || "string" != typeof t.type || "function" != typeof t.verify) } } }

                function Gl(e, n, t, i) { return { name: t || "", J: e.J + " or " + n.J, optional: !!i, K: function(t) { return e.K(t) || n.K(t) } } }

                function Bl(t, e) { for (var n in e) { var i = e[n].name;
                        t[i] = Jl(i, t[n], e[n].j) } }

                function Wl(t, e) { for (var n in e) { var i = e[n].name;
                        i !== n && Object.defineProperty(t, i, { get: b(function(t) { return this[t] }, n), set: b(function(t, e, n, i) { Rl(t, [n], [i], !0), this[e] = i }, i, n, e[n].jb), enumerable: !0 }) } }

                function Xl(t, e, n, i) { t[e] = Jl(e, n, i) }

                function Jl(t, e, n) {
                    function i() { var t = Array.prototype.slice.call(arguments); return Rl(o, n, t), e.apply(this, t) } if (!n) return e; var r, o = (t = (t = t).split("."))[t.length - 1]; for (r in e) i[r] = e[r]; for (r in e.prototype) i.prototype[r] = e.prototype[r]; return i }
                Bl(Jh.prototype, { ib: { name: "applyActionCode", j: [Pl("code")] }, Qa: { name: "checkActionCode", j: [Pl("code")] }, mb: { name: "confirmPasswordReset", j: [Pl("code"), Pl("newPassword")] }, dc: { name: "createUserWithEmailAndPassword", j: [Pl("email"), Pl("password")] }, gc: { name: "fetchSignInMethodsForEmail", j: [Pl("email")] }, qa: { name: "getRedirectResult", j: [] }, Ac: { name: "isSignInWithEmailLink", j: [Pl("emailLink")] }, Gc: { name: "onAuthStateChanged", j: [Gl(xl(), Ml(), "nextOrObserver"), Ml("opt_error", !0), Ml("opt_completed", !0)] }, Hc: { name: "onIdTokenChanged", j: [Gl(xl(), Ml(), "nextOrObserver"), Ml("opt_error", !0), Ml("opt_completed", !0)] }, ub: { name: "sendPasswordResetEmail", j: [Pl("email"), Gl(xl("opt_actionCodeSettings", !0), jl(null, !0), "opt_actionCodeSettings", !0)] }, vb: { name: "sendSignInLinkToEmail", j: [Pl("email"), xl("actionCodeSettings")] }, wb: { name: "setPersistence", j: [Pl("persistence")] }, Rc: { name: "signInAndRetrieveDataWithCredential", j: [Ul()] }, yb: { name: "signInAnonymously", j: [] }, Za: { name: "signInWithCredential", j: [Ul()] }, Sc: { name: "signInWithCustomToken", j: [Pl("token")] }, Tc: { name: "signInWithEmailAndPassword", j: [Pl("email"), Pl("password")] }, Uc: { name: "signInWithEmailLink", j: [Pl("email"), Pl("emailLink", !0)] }, Vc: { name: "signInWithPhoneNumber", j: [Pl("phoneNumber"), Kl()] }, Wc: { name: "signInWithPopup", j: [Fl()] }, Xc: { name: "signInWithRedirect", j: [Fl()] }, cd: { name: "updateCurrentUser", j: [Gl({ name: "user", J: "an instance of Firebase User", optional: !1, K: function(t) { return !!(t && t instanceof uh) } }, jl(), "user")] }, zb: { name: "signOut", j: [] }, toJSON: { name: "toJSON", j: [Pl(null, !0)] }, ed: { name: "useDeviceLanguage", j: [] }, fd: { name: "useEmulator", j: [Pl("url")] }, hd: { name: "verifyPasswordResetCode", j: [Pl("code")] } }), Wl(Jh.prototype, { lc: { name: "languageCode", jb: Gl(Pl(), jl(), "languageCode") }, ti: { name: "tenantId", jb: Gl(Pl(), jl(), "tenantId") } }), (Jh.Persistence = qu).LOCAL = "local", Jh.Persistence.SESSION = "session", Jh.Persistence.NONE = "none", Bl(uh.prototype, { delete: { name: "delete", j: [] }, nc: { name: "getIdTokenResult", j: [Ll("opt_forceRefresh", !0)] }, I: { name: "getIdToken", j: [Ll("opt_forceRefresh", !0)] }, Bc: { name: "linkAndRetrieveDataWithCredential", j: [Ul()] }, pb: { name: "linkWithCredential", j: [Ul()] }, Cc: { name: "linkWithPhoneNumber", j: [Pl("phoneNumber"), Kl()] }, Dc: { name: "linkWithPopup", j: [Fl()] }, Ec: { name: "linkWithRedirect", j: [Fl()] }, Kc: { name: "reauthenticateAndRetrieveDataWithCredential", j: [Ul()] }, sb: { name: "reauthenticateWithCredential", j: [Ul()] }, Lc: { name: "reauthenticateWithPhoneNumber", j: [Pl("phoneNumber"), Kl()] }, Mc: { name: "reauthenticateWithPopup", j: [Fl()] }, Nc: { name: "reauthenticateWithRedirect", j: [Fl()] }, reload: { name: "reload", j: [] }, tb: { name: "sendEmailVerification", j: [Gl(xl("opt_actionCodeSettings", !0), jl(null, !0), "opt_actionCodeSettings", !0)] }, toJSON: { name: "toJSON", j: [Pl(null, !0)] }, bd: { name: "unlink", j: [Pl("provider")] }, Ab: { name: "updateEmail", j: [Pl("email")] }, Bb: { name: "updatePassword", j: [Pl("password")] }, dd: { name: "updatePhoneNumber", j: [Ul("phone")] }, Cb: { name: "updateProfile", j: [xl("profile")] }, Db: { name: "verifyBeforeUpdateEmail", j: [Pl("email"), Gl(xl("opt_actionCodeSettings", !0), jl(null, !0), "opt_actionCodeSettings", !0)] } }), Bl(cl.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } }), Bl(ul.prototype, { execute: { name: "execute" }, render: { name: "render" }, reset: { name: "reset" }, getResponse: { name: "getResponse" } }), Bl(le.prototype, { na: { name: "finally" }, s: { name: "catch" }, then: { name: "then" } }), Wl(Vc.prototype, { appVerificationDisabled: { name: "appVerificationDisabledForTesting", jb: Ll("appVerificationDisabledForTesting") } }), Bl(Fc.prototype, { confirm: { name: "confirm", j: [Pl("verificationCode")] } }), Xl($r, "fromJSON", function(t) { t = "string" == typeof t ? JSON.parse(t) : t; for (var e, n = [ro, bo, Eo, eo], i = 0; i < n.length; i++)
                            if (e = n[i](t)) return e;
                        return null }, [Gl(Pl(), xl(), "json")]), Xl(yo, "credential", function(t, e) { return new go(t, e) }, [Pl("email"), Pl("password")]), Bl(go.prototype, { w: { name: "toJSON", j: [Pl(null, !0)] } }), Bl(uo.prototype, { Ca: { name: "addScope", j: [Pl("scope")] }, Ka: { name: "setCustomParameters", j: [xl("customOAuthParameters")] } }), Xl(uo, "credential", co, [Gl(Pl(), xl(), "token")]), Xl(yo, "credentialWithLink", wo, [Pl("email"), Pl("emailLink")]), Bl(ho.prototype, { Ca: { name: "addScope", j: [Pl("scope")] }, Ka: { name: "setCustomParameters", j: [xl("customOAuthParameters")] } }), Xl(ho, "credential", lo, [Gl(Pl(), xl(), "token")]), Bl(fo.prototype, { Ca: { name: "addScope", j: [Pl("scope")] }, Ka: { name: "setCustomParameters", j: [xl("customOAuthParameters")] } }), Xl(fo, "credential", po, [Gl(Pl(), Gl(xl(), jl()), "idToken"), Gl(Pl(), jl(), "accessToken", !0)]), Bl(vo.prototype, { Ka: { name: "setCustomParameters", j: [xl("customOAuthParameters")] } }), Xl(vo, "credential", mo, [Gl(Pl(), xl(), "token"), Pl("secret", !0)]), Bl(so.prototype, { Ca: { name: "addScope", j: [Pl("scope")] }, credential: { name: "credential", j: [Gl(Pl(), Gl(xl(), jl()), "optionsOrIdToken"), Gl(Pl(), jl(), "accessToken", !0)] }, Ka: { name: "setCustomParameters", j: [xl("customOAuthParameters")] } }), Bl(no.prototype, { w: { name: "toJSON", j: [Pl(null, !0)] } }), Bl(Qr.prototype, { w: { name: "toJSON", j: [Pl(null, !0)] } }), Xl(ko, "credential", So, [Pl("verificationId"), Pl("verificationCode")]), Bl(ko.prototype, { eb: { name: "verifyPhoneNumber", j: [Gl(Pl(), { name: "phoneInfoOptions", J: "valid phone info options", optional: !1, K: function(t) { return !!t && (t.session && t.phoneNumber ? ql(t.session, Yr) && "string" == typeof t.phoneNumber : t.session && t.multiFactorHint ? ql(t.session, zr) && Hl(t.multiFactorHint) : t.session && t.multiFactorUid ? ql(t.session, zr) && "string" == typeof t.multiFactorUid : !!t.phoneNumber && "string" == typeof t.phoneNumber) } }, "phoneInfoOptions"), Kl()] } }), Bl(To.prototype, { w: { name: "toJSON", j: [Pl(null, !0)] } }), Bl(I.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }), Bl(xo.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }), Bl(Lo.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }), Bl(Wc.prototype, { toJSON: { name: "toJSON", j: [Pl(null, !0)] } }), Bl(Kc.prototype, { Qc: { name: "resolveSignIn", j: [Vl()] } }), Bl(Zc.prototype, { Qb: { name: "getSession", j: [] }, ec: { name: "enroll", j: [Vl(), Pl("displayName", !0)] }, ad: { name: "unenroll", j: [Gl({ name: "multiFactorInfo", J: "a valid multiFactorInfo", optional: !1, K: Hl }, Pl(), "multiFactorInfoIdentifier")] } }), Bl(Cl.prototype, { clear: { name: "clear", j: [] }, render: { name: "render", j: [] }, verify: { name: "verify", j: [] } }), Xl(cr, "parseLink", gr, [Pl("link")]), Xl(vl, "assertion", function(t) { return new zc(t) }, [Ul("phone")]),
                    function() { if (void 0 === Yl.default || !Yl.default.INTERNAL || !Yl.default.INTERNAL.registerComponent) throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library."); var t = { ActionCodeInfo: { Operation: { EMAIL_SIGNIN: $i, PASSWORD_RESET: "PASSWORD_RESET", RECOVER_EMAIL: "RECOVER_EMAIL", REVERT_SECOND_FACTOR_ADDITION: zi, VERIFY_AND_CHANGE_EMAIL: Zi, VERIFY_EMAIL: "VERIFY_EMAIL" } }, Auth: Jh, AuthCredential: $r, Error: I };
                        Xl(t, "EmailAuthProvider", yo, []), Xl(t, "FacebookAuthProvider", uo, []), Xl(t, "GithubAuthProvider", ho, []), Xl(t, "GoogleAuthProvider", fo, []), Xl(t, "TwitterAuthProvider", vo, []), Xl(t, "OAuthProvider", so, [Pl("providerId")]), Xl(t, "SAMLAuthProvider", ao, [Pl("providerId")]), Xl(t, "PhoneAuthProvider", ko, [{ name: "auth", J: "an instance of Firebase Auth", optional: !0, K: function(t) { return !!(t && t instanceof Jh) } }]), Xl(t, "RecaptchaVerifier", Cl, [Gl(Pl(), { name: "", J: "an HTML element", optional: !1, K: function(t) { return !!(t && t instanceof Element) } }, "recaptchaContainer"), xl("recaptchaParameters", !0), { name: "app", J: "an instance of Firebase App", optional: !0, K: function(t) { return !!(t && t instanceof Yl.default.app.App) } }]), Xl(t, "ActionCodeURL", cr, []), Xl(t, "PhoneMultiFactorGenerator", vl, []), Yl.default.INTERNAL.registerComponent({ name: "auth", instanceFactory: function(t) { return new Jh(t = t.getProvider("app").getImmediate()) }, multipleInstances: !1, serviceProps: t, instantiationMode: "LAZY", type: "PUBLIC" }), Yl.default.INTERNAL.registerComponent({ name: "auth-internal", instanceFactory: function(t) { return { getUid: g((t = t.getProvider("auth").getImmediate()).getUid, t), getToken: g(t.mc, t), addAuthTokenListener: g(t.cc, t), removeAuthTokenListener: g(t.Oc, t) } }, multipleInstances: !1, instantiationMode: "LAZY", type: "PRIVATE" }), Yl.default.registerVersion("@firebase/auth", "0.15.1"), Yl.default.INTERNAL.extendNamespace({ User: uh }) }() }).apply("undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }).apply(this, arguments) } catch (t) { throw console.error(t), new Error("Cannot instantiate firebase-auth.js - be sure to load firebase-app.js first.") } });