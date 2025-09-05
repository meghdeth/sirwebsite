(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            backgroundColor: '#1f2937',
            color: 'white',
            paddingTop: '32px',
            paddingBottom: '32px',
            textAlign: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '100%',
                margin: '0 auto',
                paddingLeft: '3%',
                paddingRight: '3%'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: '1rem',
                        marginBottom: '8px',
                        color: '#d1d5db'
                    },
                    children: "Copyright © Surendra Anantharaman"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        fontSize: '0.875rem',
                        color: '#9ca3af'
                    },
                    children: "Last Updated: August 2025"
                }, void 0, false, {
                    fileName: "[project]/src/components/Footer.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Footer.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Footer.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ProfileCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const DEFAULT_BEHIND_GRADIENT = 'radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y),hsla(266,100%,90%,var(--card-opacity)) 4%,hsla(266,50%,80%,calc(var(--card-opacity)*0.75)) 10%,hsla(266,25%,70%,calc(var(--card-opacity)*0.5)) 50%,hsla(266,0%,60%,0) 100%),radial-gradient(35% 52% at 55% 20%,#00ffaac4 0%,#073aff00 100%),radial-gradient(100% 100% at 50% 50%,#00c1ffff 1%,#073aff00 76%),conic-gradient(from 124deg at 50% 50%,#c137ffff 0%,#07c6ffff 40%,#07c6ffff 60%,#c137ffff 100%)';
const DEFAULT_INNER_GRADIENT = 'linear-gradient(145deg,#60496e8c 0%,#71C4FF44 100%)';
const ANIMATION_CONFIG = {
    SMOOTH_DURATION: 600,
    INITIAL_DURATION: 1500,
    INITIAL_X_OFFSET: 70,
    INITIAL_Y_OFFSET: 60,
    DEVICE_BETA_OFFSET: 20
};
const clamp = function(value) {
    let min = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, max = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 100;
    return Math.min(Math.max(value, min), max);
};
const round = function(value) {
    let precision = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3;
    return parseFloat(value.toFixed(precision));
};
const adjust = (value, fromMin, fromMax, toMin, toMax)=>round(toMin + (toMax - toMin) * (value - fromMin) / (fromMax - fromMin));
const easeInOutCubic = (x)=>x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
const ProfileCardComponent = (param)=>{
    let { avatarUrl = '/contact.jpg', iconUrl, grainUrl, behindGradient, innerGradient, showBehindGradient = true, className = '', enableTilt = true, enableMobileTilt = false, mobileTiltSensitivity = 5, miniAvatarUrl, name = 'Dr. Surendra Babu Anantharaman', title = 'Professor & Researcher', handle = 'drsurendra', status = 'Available', contactText = 'Contact Me', showUserInfo = true, showNameTitle = true, onContactClick } = param;
    _s();
    const wrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProfileCardComponent.useMemo[animationHandlers]": ()=>{
            if (!enableTilt) return null;
            let rafId = null;
            const updateCardTransform = {
                "ProfileCardComponent.useMemo[animationHandlers].updateCardTransform": (offsetX, offsetY, card, wrap)=>{
                    const width = card.clientWidth;
                    const height = card.clientHeight;
                    const percentX = clamp(100 / width * offsetX);
                    const percentY = clamp(100 / height * offsetY);
                    const centerX = percentX - 50;
                    const centerY = percentY - 50;
                    const properties = {
                        '--pointer-x': "".concat(percentX, "%"),
                        '--pointer-y': "".concat(percentY, "%"),
                        '--background-x': "".concat(adjust(percentX, 0, 100, 35, 65), "%"),
                        '--background-y': "".concat(adjust(percentY, 0, 100, 35, 65), "%"),
                        '--pointer-from-center': "".concat(clamp(Math.hypot(percentY - 50, percentX - 50) / 50, 0, 1)),
                        '--pointer-from-top': "".concat(percentY / 100),
                        '--pointer-from-left': "".concat(percentX / 100),
                        '--rotate-x': "".concat(round(-(centerX / 5)), "deg"),
                        '--rotate-y': "".concat(round(centerY / 4), "deg")
                    };
                    Object.entries(properties).forEach({
                        "ProfileCardComponent.useMemo[animationHandlers].updateCardTransform": (param)=>{
                            let [property, value] = param;
                            wrap.style.setProperty(property, value);
                        }
                    }["ProfileCardComponent.useMemo[animationHandlers].updateCardTransform"]);
                }
            }["ProfileCardComponent.useMemo[animationHandlers].updateCardTransform"];
            const createSmoothAnimation = {
                "ProfileCardComponent.useMemo[animationHandlers].createSmoothAnimation": (duration, startX, startY, card, wrap)=>{
                    const startTime = performance.now();
                    const targetX = wrap.clientWidth / 2;
                    const targetY = wrap.clientHeight / 2;
                    const animationLoop = {
                        "ProfileCardComponent.useMemo[animationHandlers].createSmoothAnimation.animationLoop": (currentTime)=>{
                            const elapsed = currentTime - startTime;
                            const progress = clamp(elapsed / duration);
                            const easedProgress = easeInOutCubic(progress);
                            const currentX = adjust(easedProgress, 0, 1, startX, targetX);
                            const currentY = adjust(easedProgress, 0, 1, startY, targetY);
                            updateCardTransform(currentX, currentY, card, wrap);
                            if (progress < 1) {
                                rafId = requestAnimationFrame(animationLoop);
                            }
                        }
                    }["ProfileCardComponent.useMemo[animationHandlers].createSmoothAnimation.animationLoop"];
                    rafId = requestAnimationFrame(animationLoop);
                }
            }["ProfileCardComponent.useMemo[animationHandlers].createSmoothAnimation"];
            return {
                updateCardTransform,
                createSmoothAnimation,
                cancelAnimation: ({
                    "ProfileCardComponent.useMemo[animationHandlers]": ()=>{
                        if (rafId) {
                            cancelAnimationFrame(rafId);
                            rafId = null;
                        }
                    }
                })["ProfileCardComponent.useMemo[animationHandlers]"]
            };
        }
    }["ProfileCardComponent.useMemo[animationHandlers]"], [
        enableTilt
    ]);
    const handlePointerMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handlePointerMove]": (event)=>{
            const card = cardRef.current;
            const wrap = wrapRef.current;
            if (!card || !wrap || !animationHandlers) return;
            const rect = card.getBoundingClientRect();
            animationHandlers.updateCardTransform(event.clientX - rect.left, event.clientY - rect.top, card, wrap);
        }
    }["ProfileCardComponent.useCallback[handlePointerMove]"], [
        animationHandlers
    ]);
    const handlePointerEnter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handlePointerEnter]": ()=>{
            const card = cardRef.current;
            const wrap = wrapRef.current;
            if (!card || !wrap || !animationHandlers) return;
            animationHandlers.cancelAnimation();
            wrap.classList.add('active');
            card.classList.add('active');
        }
    }["ProfileCardComponent.useCallback[handlePointerEnter]"], [
        animationHandlers
    ]);
    const handlePointerLeave = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handlePointerLeave]": (event)=>{
            const card = cardRef.current;
            const wrap = wrapRef.current;
            if (!card || !wrap || !animationHandlers) return;
            animationHandlers.createSmoothAnimation(ANIMATION_CONFIG.SMOOTH_DURATION, event.offsetX, event.offsetY, card, wrap);
            wrap.classList.remove('active');
            card.classList.remove('active');
        }
    }["ProfileCardComponent.useCallback[handlePointerLeave]"], [
        animationHandlers
    ]);
    const handleDeviceOrientation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handleDeviceOrientation]": (event)=>{
            const card = cardRef.current;
            const wrap = wrapRef.current;
            if (!card || !wrap || !animationHandlers) return;
            const { beta, gamma } = event;
            if (!beta || !gamma) return;
            animationHandlers.updateCardTransform(card.clientHeight / 2 + gamma * mobileTiltSensitivity, card.clientWidth / 2 + (beta - ANIMATION_CONFIG.DEVICE_BETA_OFFSET) * mobileTiltSensitivity, card, wrap);
        }
    }["ProfileCardComponent.useCallback[handleDeviceOrientation]"], [
        animationHandlers,
        mobileTiltSensitivity
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfileCardComponent.useEffect": ()=>{
            if (!enableTilt || !animationHandlers) return;
            const card = cardRef.current;
            const wrap = wrapRef.current;
            if (!card || !wrap) return;
            const pointerMoveHandler = handlePointerMove;
            const pointerEnterHandler = handlePointerEnter;
            const pointerLeaveHandler = handlePointerLeave;
            const deviceOrientationHandler = handleDeviceOrientation;
            const handleClick = {
                "ProfileCardComponent.useEffect.handleClick": ()=>{
                    var _DeviceMotionEvent;
                    if (!enableMobileTilt || location.protocol !== 'https:') return;
                    if (typeof ((_DeviceMotionEvent = window.DeviceMotionEvent) === null || _DeviceMotionEvent === void 0 ? void 0 : _DeviceMotionEvent.requestPermission) === 'function') {
                        window.DeviceMotionEvent.requestPermission().then({
                            "ProfileCardComponent.useEffect.handleClick": (state)=>{
                                if (state === 'granted') {
                                    window.addEventListener('deviceorientation', deviceOrientationHandler);
                                }
                            }
                        }["ProfileCardComponent.useEffect.handleClick"]).catch({
                            "ProfileCardComponent.useEffect.handleClick": (err)=>console.error(err)
                        }["ProfileCardComponent.useEffect.handleClick"]);
                    } else {
                        window.addEventListener('deviceorientation', deviceOrientationHandler);
                    }
                }
            }["ProfileCardComponent.useEffect.handleClick"];
            card.addEventListener('pointerenter', pointerEnterHandler);
            card.addEventListener('pointermove', pointerMoveHandler);
            card.addEventListener('pointerleave', pointerLeaveHandler);
            card.addEventListener('click', handleClick);
            const initialX = wrap.clientWidth - ANIMATION_CONFIG.INITIAL_X_OFFSET;
            const initialY = ANIMATION_CONFIG.INITIAL_Y_OFFSET;
            animationHandlers.updateCardTransform(initialX, initialY, card, wrap);
            animationHandlers.createSmoothAnimation(ANIMATION_CONFIG.INITIAL_DURATION, initialX, initialY, card, wrap);
            return ({
                "ProfileCardComponent.useEffect": ()=>{
                    card.removeEventListener('pointerenter', pointerEnterHandler);
                    card.removeEventListener('pointermove', pointerMoveHandler);
                    card.removeEventListener('pointerleave', pointerLeaveHandler);
                    card.removeEventListener('click', handleClick);
                    window.removeEventListener('deviceorientation', deviceOrientationHandler);
                    animationHandlers.cancelAnimation();
                }
            })["ProfileCardComponent.useEffect"];
        }
    }["ProfileCardComponent.useEffect"], [
        enableTilt,
        enableMobileTilt,
        animationHandlers,
        handlePointerMove,
        handlePointerEnter,
        handlePointerLeave,
        handleDeviceOrientation
    ]);
    const cardStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProfileCardComponent.useMemo[cardStyle]": ()=>({
                '--icon': iconUrl ? "url(".concat(iconUrl, ")") : 'none',
                '--grain': grainUrl ? "url(".concat(grainUrl, ")") : 'none',
                '--behind-gradient': showBehindGradient ? behindGradient !== null && behindGradient !== void 0 ? behindGradient : DEFAULT_BEHIND_GRADIENT : 'none',
                '--inner-gradient': innerGradient !== null && innerGradient !== void 0 ? innerGradient : DEFAULT_INNER_GRADIENT
            })
    }["ProfileCardComponent.useMemo[cardStyle]"], [
        iconUrl,
        grainUrl,
        showBehindGradient,
        behindGradient,
        innerGradient
    ]);
    const handleContactClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ProfileCardComponent.useCallback[handleContactClick]": ()=>{
            onContactClick === null || onContactClick === void 0 ? void 0 : onContactClick();
        }
    }["ProfileCardComponent.useCallback[handleContactClick]"], [
        onContactClick
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapRef,
        className: "pc-card-wrapper ".concat(className).trim(),
        style: cardStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: cardRef,
            className: "pc-card",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pc-inside",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-shine"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileCard.tsx",
                        lineNumber: 278,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-glare"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileCard.tsx",
                        lineNumber: 279,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-content pc-avatar-content",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "avatar",
                                src: avatarUrl,
                                alt: "".concat(name || 'User', " avatar"),
                                loading: "lazy",
                                onError: (e)=>{
                                    const target = e.target;
                                    target.style.display = 'none';
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ProfileCard.tsx",
                                lineNumber: 281,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            showUserInfo && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pc-user-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "pc-user-details",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pc-mini-avatar",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: miniAvatarUrl || avatarUrl,
                                                    alt: "".concat(name || 'User', " mini avatar"),
                                                    loading: "lazy",
                                                    onError: (e)=>{
                                                        const target = e.target;
                                                        target.style.opacity = '0.5';
                                                        target.src = avatarUrl || '';
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/ProfileCard.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProfileCard.tsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "pc-user-text",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pc-handle",
                                                        children: [
                                                            "@",
                                                            handle
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/ProfileCard.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "pc-status",
                                                        children: status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/ProfileCard.tsx",
                                                        lineNumber: 308,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/ProfileCard.tsx",
                                                lineNumber: 306,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ProfileCard.tsx",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "pc-contact-btn",
                                        onClick: handleContactClick,
                                        style: {
                                            pointerEvents: 'auto'
                                        },
                                        type: "button",
                                        "aria-label": "Contact ".concat(name || 'user'),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ProfileCard.tsx",
                                                lineNumber: 325,
                                                columnNumber: 21
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ProfileCard.tsx",
                                            lineNumber: 318,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ProfileCard.tsx",
                                        lineNumber: 311,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ProfileCard.tsx",
                                lineNumber: 292,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ProfileCard.tsx",
                        lineNumber: 280,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    showNameTitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pc-content",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pc-details",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProfileCard.tsx",
                                    lineNumber: 340,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ProfileCard.tsx",
                                    lineNumber: 341,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ProfileCard.tsx",
                            lineNumber: 339,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ProfileCard.tsx",
                        lineNumber: 338,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ProfileCard.tsx",
                lineNumber: 277,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ProfileCard.tsx",
            lineNumber: 276,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/ProfileCard.tsx",
        lineNumber: 275,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProfileCardComponent, "1HS95kM/MT7xQgq5/GV0Mf/53Gg=");
_c = ProfileCardComponent;
const ProfileCard = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(ProfileCardComponent);
_c1 = ProfileCard;
const __TURBOPACK__default__export__ = ProfileCard;
var _c, _c1;
__turbopack_context__.k.register(_c, "ProfileCardComponent");
__turbopack_context__.k.register(_c1, "ProfileCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_BASE_URL",
    ()=>API_BASE_URL,
    "apiCall",
    ()=>apiCall
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE_URL = ("TURBOPACK compile-time value", "http://localhost:5001") || 'http://localhost:5001';
const apiCall = async (endpoint, options)=>{
    const url = "".concat(API_BASE_URL).concat(endpoint);
    const defaultHeaders = {};
    // Only set Content-Type for non-FormData requests
    if (!((options === null || options === void 0 ? void 0 : options.body) instanceof FormData)) {
        defaultHeaders['Content-Type'] = 'application/json';
    }
    const defaultOptions = {
        headers: {
            ...defaultHeaders,
            ...options === null || options === void 0 ? void 0 : options.headers
        },
        ...options
    };
    return fetch(url, defaultOptions);
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/group/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Group
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProfileCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ProfileCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Group() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('pi');
    const [groupMembers, setGroupMembers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [piEducation, setPIEducation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [piExperience, setPIExperience] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [piAwards, setPIAwards] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Group.useEffect": ()=>{
            fetchData();
        }
    }["Group.useEffect"], []);
    const fetchData = async ()=>{
        try {
            setLoading(true);
            // Fetch group members
            const groupResponse = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCall"])('/api/group');
            const [educationResponse, experienceResponse, awardsResponse] = await Promise.all([
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCall"])('/api/pi/education'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCall"])('/api/pi/experience'),
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiCall"])('/api/pi/awards')
            ]);
            if (educationResponse.ok) {
                const educationData = await educationResponse.json();
                setPIEducation(educationData);
            }
            if (experienceResponse.ok) {
                const experienceData = await experienceResponse.json();
                setPIExperience(experienceData);
            }
            if (awardsResponse.ok) {
                const awardsData = await awardsResponse.json();
                setPIAwards(awardsData);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally{
            setLoading(false);
        }
    };
    const teamMembers = groupMembers.filter((member)=>member.section === 'Team');
    const alumniMembers = groupMembers.filter((member)=>member.section === 'Alumni');
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                backgroundColor: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        fontSize: '1.5rem',
                        color: '#f97316',
                        marginBottom: '16px'
                    },
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/app/group/page.tsx",
                    lineNumber: 111,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/group/page.tsx",
                lineNumber: 110,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/group/page.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    }
    // Add responsive styles
    const responsiveStyles = "\n    .pi-grid {\n      display: grid;\n      grid-template-columns: 300px 1fr;\n      gap: 48px;\n      align-items: flex-start;\n    }\n    \n    .additional-info-grid {\n      display: grid;\n      grid-template-columns: 1fr 1fr;\n      gap: 32px;\n      margin-top: 32px;\n    }\n    \n    .team-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n      gap: 24px;\n    }\n    \n    .pi-section {\n      background: white;\n      border-radius: 16px;\n      padding: 48px;\n      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n      border: 1px solid #e5e7eb;\n    }\n    \n    .pi-title {\n      font-size: 2.5rem;\n      font-weight: 700;\n      color: #1f2937;\n      margin: 0 0 8px 0;\n    }\n    \n    .pi-position {\n      font-size: 1.25rem;\n      color: #f97316;\n      font-weight: 600;\n      margin-bottom: 24px;\n    }\n    \n    .pi-description {\n      font-size: 1rem;\n      color: #6b7280;\n      margin-bottom: 24px;\n      line-height: 1.6;\n    }\n    \n    @media (max-width: 768px) {\n      .pi-grid {\n        grid-template-columns: 1fr;\n        gap: 24px;\n        text-align: center;\n      }\n      \n      .additional-info-grid {\n        grid-template-columns: 1fr;\n        gap: 24px;\n        margin-top: 24px;\n      }\n      \n      .pi-section {\n        padding: 24px;\n      }\n      \n      .pi-title {\n        font-size: 1.8rem;\n      }\n      \n      .pi-position {\n        font-size: 1.1rem;\n      }\n      \n      .pi-description {\n        font-size: 0.9rem;\n      }\n      \n      .team-grid {\n        grid-template-columns: 1fr;\n        gap: 16px;\n      }\n    }\n    \n    @media (max-width: 480px) {\n      .pi-section {\n        padding: 16px;\n        margin: 0 8px;\n      }\n      \n      .pi-title {\n        font-size: 1.5rem;\n      }\n      \n      .pi-position {\n        font-size: 1rem;\n      }\n      \n      .pi-description {\n        font-size: 0.85rem;\n      }\n    }\n  ";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            backgroundColor: '#f9fafb'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: responsiveStyles
                }
            }, void 0, false, {
                fileName: "[project]/src/app/group/page.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        maxWidth: '100%',
                        margin: '0 auto',
                        paddingLeft: '5%',
                        paddingRight: '5%',
                        paddingTop: '32px',
                        paddingBottom: '32px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                marginBottom: '48px'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    style: {
                                        fontSize: '3rem',
                                        fontWeight: 700,
                                        color: '#1f2937',
                                        marginBottom: '16px'
                                    },
                                    children: "Our Group"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '1.25rem',
                                        color: '#6b7280',
                                        maxWidth: '600px',
                                        margin: '0 auto'
                                    },
                                    children: "Meet our dedicated team of researchers and students working on cutting-edge semiconductor research."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/group/page.tsx",
                            lineNumber: 232,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '48px',
                                gap: '8px',
                                flexWrap: 'wrap'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('pi'),
                                    style: {
                                        padding: '12px 24px',
                                        borderRadius: '9999px',
                                        border: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        backgroundColor: activeTab === 'pi' ? '#f97316' : 'white',
                                        color: activeTab === 'pi' ? 'white' : '#6b7280',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    },
                                    children: "Principal Investigator"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('team'),
                                    style: {
                                        padding: '12px 24px',
                                        borderRadius: '9999px',
                                        border: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        backgroundColor: activeTab === 'team' ? '#f97316' : 'white',
                                        color: activeTab === 'team' ? 'white' : '#6b7280',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    },
                                    children: "Team"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 276,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('alumni'),
                                    style: {
                                        padding: '12px 24px',
                                        borderRadius: '9999px',
                                        border: 'none',
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        backgroundColor: activeTab === 'alumni' ? '#f97316' : 'white',
                                        color: activeTab === 'alumni' ? 'white' : '#6b7280',
                                        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    },
                                    children: "Alumni"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/group/page.tsx",
                            lineNumber: 252,
                            columnNumber: 9
                        }, this),
                        activeTab === 'pi' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pi-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pi-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'center'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ProfileCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                avatarUrl: "/contact.jpg",
                                                handle: "drsurendra",
                                                status: "Available",
                                                contactText: "Contact Me",
                                                showUserInfo: true,
                                                showNameTitle: false,
                                                enableTilt: true,
                                                enableMobileTilt: false,
                                                onContactClick: ()=>{
                                                    window.location.href = '/contact';
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 321,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/group/page.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "pi-title",
                                                    children: "Dr. Surendra B. Anantharaman"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 338,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "pi-position",
                                                    children: "Assistant Professor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "pi-description",
                                                    children: [
                                                        "Department of Metallurgical and Materials Engineering",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 345,
                                                            columnNumber: 72
                                                        }, this),
                                                        "Indian Institute of Technology Madras",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 346,
                                                            columnNumber: 56
                                                        }, this),
                                                        "Chennai 600036, Tamil Nadu, India"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                fontSize: '1.5rem',
                                                                fontWeight: 600,
                                                                color: '#1f2937',
                                                                marginBottom: '16px'
                                                            },
                                                            children: "Contact Information"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                color: '#6b7280',
                                                                fontSize: '1rem',
                                                                lineHeight: 1.6
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        marginBottom: '8px'
                                                                    },
                                                                    children: "📧 sba[at]iitm.ac.in"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/group/page.tsx",
                                                                    lineNumber: 364,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        marginBottom: '8px'
                                                                    },
                                                                    children: "📞 +44-2257-4794"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/group/page.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 350,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/group/page.tsx",
                                            lineNumber: 337,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "additional-info-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: '#f8fafc',
                                                        borderRadius: '12px',
                                                        padding: '24px',
                                                        marginBottom: '24px',
                                                        border: '1px solid #e5e7eb'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                fontSize: '1.5rem',
                                                                fontWeight: 600,
                                                                color: '#1f2937',
                                                                marginBottom: '16px'
                                                            },
                                                            children: "Education"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 383,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            style: {
                                                                color: '#6b7280',
                                                                fontSize: '1rem',
                                                                lineHeight: 1.6,
                                                                paddingLeft: '20px',
                                                                margin: 0
                                                            },
                                                            children: piEducation.length > 0 ? piEducation.map((edu)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    style: {
                                                                        marginBottom: '8px'
                                                                    },
                                                                    children: [
                                                                        edu.degree,
                                                                        " in ",
                                                                        edu.field,
                                                                        ", ",
                                                                        edu.institution,
                                                                        edu.location ? ", ".concat(edu.location) : '',
                                                                        " (",
                                                                        edu.year,
                                                                        ")"
                                                                    ]
                                                                }, edu.id, true, {
                                                                    fileName: "[project]/src/app/group/page.tsx",
                                                                    lineNumber: 400,
                                                                    columnNumber: 27
                                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    marginBottom: '8px'
                                                                },
                                                                children: "No education information available"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/group/page.tsx",
                                                                lineNumber: 405,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 391,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 376,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        background: '#f8fafc',
                                                        borderRadius: '12px',
                                                        padding: '24px',
                                                        border: '1px solid #e5e7eb'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                fontSize: '1.5rem',
                                                                fontWeight: 600,
                                                                color: '#1f2937',
                                                                marginBottom: '16px'
                                                            },
                                                            children: "Experience"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 417,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            style: {
                                                                color: '#6b7280',
                                                                fontSize: '1rem',
                                                                lineHeight: 1.6,
                                                                paddingLeft: '20px',
                                                                margin: 0
                                                            },
                                                            children: piExperience.length > 0 ? piExperience.map((exp)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    style: {
                                                                        marginBottom: '8px'
                                                                    },
                                                                    children: [
                                                                        exp.position,
                                                                        ", ",
                                                                        exp.organization,
                                                                        exp.location ? ", ".concat(exp.location) : '',
                                                                        "(",
                                                                        exp.start_year,
                                                                        exp.end_year ? "-".concat(exp.end_year) : exp.is_current ? '-Present' : '',
                                                                        ")",
                                                                        exp.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                fontSize: '0.9rem',
                                                                                color: '#9ca3af',
                                                                                marginTop: '4px'
                                                                            },
                                                                            children: exp.description
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/group/page.tsx",
                                                                            lineNumber: 438,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, exp.id, true, {
                                                                    fileName: "[project]/src/app/group/page.tsx",
                                                                    lineNumber: 434,
                                                                    columnNumber: 27
                                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    marginBottom: '8px'
                                                                },
                                                                children: "No experience information available"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/group/page.tsx",
                                                                lineNumber: 445,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 425,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/group/page.tsx",
                                            lineNumber: 374,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#fff7ed',
                                                    borderRadius: '12px',
                                                    padding: '24px',
                                                    border: '1px solid #fed7aa',
                                                    height: 'fit-content'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        style: {
                                                            fontSize: '1.5rem',
                                                            fontWeight: 600,
                                                            color: '#1f2937',
                                                            marginBottom: '16px'
                                                        },
                                                        children: "Awards & Honours"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/group/page.tsx",
                                                        lineNumber: 460,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        style: {
                                                            color: '#6b7280',
                                                            fontSize: '1rem',
                                                            lineHeight: 1.6,
                                                            paddingLeft: '20px',
                                                            margin: 0
                                                        },
                                                        children: piAwards.length > 0 ? piAwards.map((award)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    marginBottom: '8px'
                                                                },
                                                                children: [
                                                                    "🏆 ",
                                                                    award.title,
                                                                    " (",
                                                                    award.year,
                                                                    ")",
                                                                    award.organization && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '0.9rem',
                                                                            color: '#9ca3af',
                                                                            marginTop: '2px'
                                                                        },
                                                                        children: award.organization
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/group/page.tsx",
                                                                        lineNumber: 480,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    award.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '0.9rem',
                                                                            color: '#9ca3af',
                                                                            marginTop: '2px'
                                                                        },
                                                                        children: award.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/group/page.tsx",
                                                                        lineNumber: 485,
                                                                        columnNumber: 31
                                                                    }, this),
                                                                    award.grant_amount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontSize: '0.9rem',
                                                                            color: '#16a34a',
                                                                            marginTop: '2px'
                                                                        },
                                                                        children: [
                                                                            "Grant: ",
                                                                            award.currency || '',
                                                                            award.grant_amount
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/group/page.tsx",
                                                                        lineNumber: 490,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, award.id, true, {
                                                                fileName: "[project]/src/app/group/page.tsx",
                                                                lineNumber: 477,
                                                                columnNumber: 27
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: '8px'
                                                            },
                                                            children: "🏆 No awards information available"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 497,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/group/page.tsx",
                                                        lineNumber: 468,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 453,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/group/page.tsx",
                                            lineNumber: 452,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 372,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/group/page.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this),
                        activeTab === 'team' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: teamMembers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr 1fr' : window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
                                    gap: '32px'
                                },
                                children: teamMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'white',
                                            borderRadius: '16px',
                                            padding: '32px',
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                            border: '1px solid #e5e7eb',
                                            textAlign: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '120px',
                                                    height: '120px',
                                                    borderRadius: '50%',
                                                    background: member.image_url ? 'transparent' : 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
                                                    margin: '0 auto 24px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    border: '3px solid #f97316',
                                                    overflow: 'hidden'
                                                },
                                                children: member.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: member.image_url,
                                                    alt: member.name,
                                                    style: {
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 540,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '2.5rem'
                                                    },
                                                    children: "👩‍🔬"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 550,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 527,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1.5rem',
                                                    fontWeight: 600,
                                                    color: '#1f2937',
                                                    marginBottom: '8px'
                                                },
                                                children: member.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 553,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '1rem',
                                                    color: '#f97316',
                                                    fontWeight: 500,
                                                    marginBottom: '16px'
                                                },
                                                children: member.position
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 561,
                                                columnNumber: 23
                                            }, this),
                                            member.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.875rem',
                                                    color: '#6b7280',
                                                    lineHeight: 1.5
                                                },
                                                children: member.bio
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 570,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '8px',
                                                    justifyContent: 'center',
                                                    marginTop: '16px'
                                                },
                                                children: [
                                                    member.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:".concat(member.email),
                                                        style: {
                                                            color: '#f97316',
                                                            textDecoration: 'none',
                                                            fontSize: '0.875rem'
                                                        },
                                                        children: "📧 Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/group/page.tsx",
                                                        lineNumber: 585,
                                                        columnNumber: 27
                                                    }, this),
                                                    member.linkedin_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: member.linkedin_url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        style: {
                                                            color: '#f97316',
                                                            textDecoration: 'none',
                                                            fontSize: '0.875rem'
                                                        },
                                                        children: "🔗 LinkedIn"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/group/page.tsx",
                                                        lineNumber: 597,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 578,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, member.id, true, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 516,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/group/page.tsx",
                                lineNumber: 510,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    padding: '80px 20px',
                                    color: '#6b7280'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '3rem',
                                            marginBottom: '16px'
                                        },
                                        children: "👥"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 620,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '1.5rem',
                                            marginBottom: '8px'
                                        },
                                        children: "No Team Members Yet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 621,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Team member information will be displayed here once added."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 622,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/group/page.tsx",
                                lineNumber: 615,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/group/page.tsx",
                            lineNumber: 508,
                            columnNumber: 13
                        }, this),
                        activeTab === 'alumni' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: alumniMembers.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'grid',
                                    gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr 1fr' : window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
                                    gap: '32px'
                                },
                                children: alumniMembers.map((member)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            background: 'white',
                                            borderRadius: '16px',
                                            padding: '32px',
                                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                            border: '1px solid #e5e7eb',
                                            textAlign: 'center'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '120px',
                                                    height: '120px',
                                                    borderRadius: '50%',
                                                    background: member.image_url ? 'transparent' : 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
                                                    margin: '0 auto 24px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    border: '3px solid #f97316',
                                                    overflow: 'hidden'
                                                },
                                                children: member.image_url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: member.image_url,
                                                    alt: member.name,
                                                    style: {
                                                        width: '100%',
                                                        height: '100%',
                                                        objectFit: 'cover'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 662,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '2.5rem'
                                                    },
                                                    children: "🎓"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 672,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 649,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1.5rem',
                                                    fontWeight: 600,
                                                    color: '#1f2937',
                                                    marginBottom: '8px'
                                                },
                                                children: member.name
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 675,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '1rem',
                                                    color: '#f97316',
                                                    fontWeight: 500,
                                                    marginBottom: '16px'
                                                },
                                                children: member.position
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 683,
                                                columnNumber: 23
                                            }, this),
                                            member.bio && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.875rem',
                                                    color: '#6b7280',
                                                    lineHeight: 1.5
                                                },
                                                children: member.bio
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 692,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    gap: '8px',
                                                    justifyContent: 'center',
                                                    marginTop: '16px'
                                                },
                                                children: [
                                                    member.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "mailto:".concat(member.email),
                                                        style: {
                                                            color: '#f97316',
                                                            textDecoration: 'none',
                                                            fontSize: '0.875rem'
                                                        },
                                                        children: "📧 Email"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/group/page.tsx",
                                                        lineNumber: 707,
                                                        columnNumber: 27
                                                    }, this),
                                                    member.linkedin_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: member.linkedin_url,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        style: {
                                                            color: '#f97316',
                                                            textDecoration: 'none',
                                                            fontSize: '0.875rem'
                                                        },
                                                        children: "🔗 LinkedIn"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/group/page.tsx",
                                                        lineNumber: 719,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 700,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, member.id, true, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 638,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/group/page.tsx",
                                lineNumber: 632,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    textAlign: 'center',
                                    padding: '80px 20px',
                                    color: '#6b7280'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            fontSize: '3rem',
                                            marginBottom: '16px'
                                        },
                                        children: "🎓"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 742,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            fontSize: '1.5rem',
                                            marginBottom: '8px'
                                        },
                                        children: "No Alumni Yet"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 743,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Alumni information will be displayed here once added."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 744,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/group/page.tsx",
                                lineNumber: 737,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/group/page.tsx",
                            lineNumber: 630,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/group/page.tsx",
                    lineNumber: 229,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/group/page.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/group/page.tsx",
                lineNumber: 752,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/group/page.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
_s(Group, "dAy7IA4lhTr9snw9yEU+m9Q6RnY=");
_c = Group;
var _c;
__turbopack_context__.k.register(_c, "Group");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_471209f9._.js.map