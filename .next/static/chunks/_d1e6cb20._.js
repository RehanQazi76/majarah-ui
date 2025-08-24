(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/Footersection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "FooterTop": (()=>FooterTop),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
const FooterTop = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        initial: {
            opacity: 0,
            y: 100,
            scale: 0.85,
            rotateX: -15,
            filter: 'blur(10px)'
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            filter: 'blur(0px)'
        },
        viewport: {
            once: false,
            amount: 0.4
        },
        transition: {
            duration: 1,
            ease: [
                0.16,
                1,
                0.3,
                1
            ]
        },
        className: "relative z-10 flex flex-col items-center justify-center h-[clamp(50vh,20vh,80vh)] text-center mb-[clamp(1rem,5vh,5rem)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[clamp(50vh,40vh,80vh)] bg-[radial-gradient(ellipse_at_top,_#4899E3_30%,_transparent_70%)] opacity-20 blur-4xl pointer-events-none z-0"
            }, void 0, false, {
                fileName: "[project]/components/Footersection.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                initial: {
                    opacity: 0,
                    scale: 0.8,
                    rotate: -5
                },
                whileInView: {
                    opacity: 1,
                    scale: 1,
                    rotate: 0
                },
                transition: {
                    delay: 0.2,
                    duration: 0.8,
                    ease: [
                        0.22,
                        1,
                        0.36,
                        1
                    ]
                },
                src: "/icons/majarahlogo.svg",
                alt: "Majarah Logo",
                className: "w-[clamp(160px,20vw,600px)] h-auto mb-[clamp(0.5rem,2vh,2rem)] mt-[clamp(2rem,10vh,9rem)]"
            }, void 0, false, {
                fileName: "[project]/components/Footersection.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                initial: {
                    opacity: 0,
                    y: 40,
                    scale: 0.95,
                    filter: 'blur(6px)'
                },
                whileInView: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    filter: 'blur(0px)'
                },
                transition: {
                    delay: 0.4,
                    duration: 1,
                    ease: [
                        0.33,
                        1,
                        0.68,
                        1
                    ]
                },
                className: "text-[clamp(2.5rem,5vw,8rem)] font-aeonik font-light leading-tight max-w-[90%] mb-[clamp(2rem,6vh,8rem)]",
                children: [
                    "Don’t",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x",
                        children: "Blend in"
                    }, void 0, false, {
                        fileName: "[project]/components/Footersection.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                        fileName: "[project]/components/Footersection.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    "Go",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x",
                        children: "Impact"
                    }, void 0, false, {
                        fileName: "[project]/components/Footersection.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    ' ',
                    "with",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x",
                        children: "Us"
                    }, void 0, false, {
                        fileName: "[project]/components/Footersection.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this),
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footersection.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footersection.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = FooterTop;
const __TURBOPACK__default__export__ = FooterTop;
var _c;
__turbopack_context__.k.register(_c, "FooterTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/stars-background.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "StarsBackground": (()=>StarsBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const StarsBackground = ({ starDensity = 0.00010, allStarsTwinkle = true, twinkleProbability = 0.7, minTwinkleSpeed = 0.5, maxTwinkleSpeed = 1, className })=>{
    _s();
    const [stars, setStars] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const generateStars = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "StarsBackground.useCallback[generateStars]": (width, height)=>{
            const area = width * height;
            const numStars = Math.floor(area * starDensity);
            return Array.from({
                length: numStars
            }, {
                "StarsBackground.useCallback[generateStars]": ()=>{
                    const shouldTwinkle = allStarsTwinkle || Math.random() < twinkleProbability;
                    return {
                        x: Math.random() * width,
                        y: Math.random() * height,
                        radius: Math.random() * 0.05 + 0.5,
                        opacity: Math.random() * 0.5 + 0.5,
                        twinkleSpeed: shouldTwinkle ? minTwinkleSpeed + Math.random() * (maxTwinkleSpeed - minTwinkleSpeed) : null
                    };
                }
            }["StarsBackground.useCallback[generateStars]"]);
        }
    }["StarsBackground.useCallback[generateStars]"], [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarsBackground.useEffect": ()=>{
            const updateStars = {
                "StarsBackground.useEffect.updateStars": ()=>{
                    if (canvasRef.current) {
                        const canvas = canvasRef.current;
                        const ctx = canvas.getContext("2d");
                        if (!ctx) return;
                        const { width, height } = canvas.getBoundingClientRect();
                        canvas.width = width;
                        canvas.height = height;
                        setStars(generateStars(width, height));
                    }
                }
            }["StarsBackground.useEffect.updateStars"];
            updateStars();
            const resizeObserver = new ResizeObserver(updateStars);
            if (canvasRef.current) {
                resizeObserver.observe(canvasRef.current);
            }
            return ({
                "StarsBackground.useEffect": ()=>{
                    if (canvasRef.current) {
                        resizeObserver.unobserve(canvasRef.current);
                    }
                }
            })["StarsBackground.useEffect"];
        }
    }["StarsBackground.useEffect"], [
        starDensity,
        allStarsTwinkle,
        twinkleProbability,
        minTwinkleSpeed,
        maxTwinkleSpeed,
        generateStars
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StarsBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext("2d");
            if (!ctx) return;
            let animationFrameId;
            const render = {
                "StarsBackground.useEffect.render": ()=>{
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    stars.forEach({
                        "StarsBackground.useEffect.render": (star)=>{
                            ctx.beginPath();
                            ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                            ctx.fill();
                            if (star.twinkleSpeed !== null) {
                                star.opacity = 0.3 + Math.abs(Math.sin(Date.now() * 0.003 / star.twinkleSpeed) * 0.7);
                            }
                        }
                    }["StarsBackground.useEffect.render"]);
                    animationFrameId = requestAnimationFrame(render);
                }
            }["StarsBackground.useEffect.render"];
            render();
            return ({
                "StarsBackground.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                }
            })["StarsBackground.useEffect"];
        }
    }["StarsBackground.useEffect"], [
        stars
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-full w-full absolute inset-0", className)
    }, void 0, false, {
        fileName: "[project]/components/ui/stars-background.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
};
_s(StarsBackground, "50/0E8QIGjoqR59aWisQHL7DxHk=");
_c = StarsBackground;
var _c;
__turbopack_context__.k.register(_c, "StarsBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/shooting-stars.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ShootingStars": (()=>ShootingStars)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const ShootingStars = ({ speed = 30, interval = 8000, starColor = "#FFFFFF", trailColor = "#D4D0D0", starWidth = 1.1, starHeight = 40, className })=>{
    _s();
    const [star, setStar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShootingStars.useEffect": ()=>{
            let timeoutId;
            const launchStar = {
                "ShootingStars.useEffect.launchStar": ()=>{
                    const newStar = {
                        id: Date.now(),
                        x: Math.random() * window.innerWidth,
                        y: -starHeight,
                        speed
                    };
                    setStar(newStar);
                    timeoutId = setTimeout(launchStar, interval); // schedule next star after 5 sec
                }
            }["ShootingStars.useEffect.launchStar"];
            launchStar();
            return ({
                "ShootingStars.useEffect": ()=>clearTimeout(timeoutId)
            })["ShootingStars.useEffect"];
        }
    }["ShootingStars.useEffect"], [
        interval,
        speed,
        starHeight
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShootingStars.useEffect": ()=>{
            let animationId;
            const animate = {
                "ShootingStars.useEffect.animate": ()=>{
                    setStar({
                        "ShootingStars.useEffect.animate": (prev)=>{
                            if (!prev) return null;
                            const nextY = prev.y + prev.speed;
                            if (nextY > window.innerHeight + starHeight) return null; // remove star
                            return {
                                ...prev,
                                y: nextY
                            };
                        }
                    }["ShootingStars.useEffect.animate"]);
                    animationId = requestAnimationFrame(animate);
                }
            }["ShootingStars.useEffect.animate"];
            animate();
            return ({
                "ShootingStars.useEffect": ()=>cancelAnimationFrame(animationId)
            })["ShootingStars.useEffect"];
        }
    }["ShootingStars.useEffect"], [
        speed,
        starHeight
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        ref: svgRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("absolute inset-0 w-full h-full pointer-events-none", className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                    id: "star-gradient",
                    x1: "0%",
                    y1: "0%",
                    x2: "0%",
                    y2: "100%",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "0%",
                            stopColor: trailColor,
                            stopOpacity: "0"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/shooting-stars.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                            offset: "100%",
                            stopColor: starColor,
                            stopOpacity: "1"
                        }, void 0, false, {
                            fileName: "[project]/components/ui/shooting-stars.tsx",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ui/shooting-stars.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/shooting-stars.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            star && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: star.x,
                y: star.y,
                width: starWidth,
                height: starHeight,
                fill: "url(#star-gradient)",
                rx: 1
            }, star.id, false, {
                fileName: "[project]/components/ui/shooting-stars.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/shooting-stars.tsx",
        lineNumber: 75,
        columnNumber: 5
    }, this);
};
_s(ShootingStars, "7Ikn3hdHqdmQk/sl7XaPR8O9zfg=");
_c = ShootingStars;
var _c;
__turbopack_context__.k.register(_c, "ShootingStars");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/HoverNavLink.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "HoverNavLink": (()=>HoverNavLink)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
const HoverNavLink = ({ label, href })=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
        href: href,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: "relative px-4 py-2 text-white/80 z-10",
        children: [
            isHovered && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                layoutId: "navbar-hover",
                className: "absolute inset-0 rounded-full bg-white/10",
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    duration: 0.5
                }
            }, void 0, false, {
                fileName: "[project]/components/ui/HoverNavLink.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "relative z-10",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/HoverNavLink.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/HoverNavLink.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
_s(HoverNavLink, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = HoverNavLink;
var _c;
__turbopack_context__.k.register(_c, "HoverNavLink");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/HeroSection.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeroSection)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/stars-background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$shooting$2d$stars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/shooting-stars.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HoverNavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/HoverNavLink.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js [app-client] (ecmascript) <export default as XMarkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/Bars3Icon.js [app-client] (ecmascript) <export default as Bars3Icon>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
const brands = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42'
];
function HeroSection() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [scrollDuration, setScrollDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(250);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const handleResize = {
                "HeroSection.useEffect.handleResize": ()=>{
                    setScrollDuration(window.innerWidth < 768 ? 100 : 250);
                }
            }["HeroSection.useEffect.handleResize"];
            handleResize();
            window.addEventListener('resize', handleResize);
            return ({
                "HeroSection.useEffect": ()=>window.removeEventListener('resize', handleResize)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const handleScroll = {
                "HeroSection.useEffect.handleScroll": ()=>{
                    const currentScrollY = window.scrollY;
                    if (currentScrollY < lastScrollY) setMenuOpen(false);
                    setLastScrollY(currentScrollY);
                }
            }["HeroSection.useEffect.handleScroll"];
            if (menuOpen) {
                window.addEventListener('scroll', handleScroll);
            }
            return ({
                "HeroSection.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], [
        lastScrollY,
        menuOpen
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-[#0e0e0e] relative w-full text-white md:px-12 overflow-hidden [@media(min-width:2560px)]:px-40",
        id: "hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 z-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarsBackground"], {
                        className: "z-0"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$shooting$2d$stars$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShootingStars"], {
                        className: "z-20"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 42,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-30",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.95
                        },
                        animate: {
                            opacity: 0.2,
                            scale: 1
                        },
                        transition: {
                            duration: 1.5,
                            ease: [
                                0.33,
                                1,
                                0.68,
                                1
                            ]
                        },
                        className: "absolute top-0 left-1/2 -translate-x-1/2 w-full h-[50vh] md:h-[80vh] bg-[radial-gradient(ellipse_at_top,_#4899E3_30%,_transparent_70%)] blur-4xl pointer-events-none z-0 [@media(min-width:2560px)]:h-[60vh]"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between py-[clamp(1rem,2vw,2.5rem)] w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/icons/majarahlogo.svg",
                                alt: "Majarah Logo",
                                className: "h-auto w-[clamp(8rem,18vw,30rem)]"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden md:flex items-center justify-between w-full ml-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mx-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-nowrap items-center justify-center gap-[clamp(1.5rem,4vw,5rem)] px-[clamp(1rem,3vw,2.5rem)] py-[clamp(0.4rem,0.4vw,0.75rem)] rounded-full border border-white/10 bg-white/5 backdrop-blur-sm",
                                            style: {
                                                fontSize: 'clamp(0.75rem, 1.2vw, 1.25rem)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HoverNavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverNavLink"], {
                                                    label: "About us",
                                                    href: "#aboutus"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HoverNavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverNavLink"], {
                                                    label: "Services",
                                                    href: "#services"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HoverNavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverNavLink"], {
                                                    label: "What People Say",
                                                    href: "#Testimonials"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "ml-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#contact",
                                            className: "inline-flex items-center rounded-full border border-white/10 bg-[#1B2B40] text-white hover:bg-[#26364e] transition-all",
                                            style: {
                                                fontSize: 'clamp(0.75rem, 1.2vw, 1.125rem)',
                                                height: 'clamp(2.5rem, 4vh, 3.5rem)',
                                                paddingInline: 'clamp(1rem, 2.5vw, 2.5rem)'
                                            },
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 68,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 58,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setMenuOpen(!menuOpen),
                                    className: "text-white",
                                    children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$XMarkIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XMarkIcon$3e$__["XMarkIcon"], {
                                        className: "w-10 h-10 mr-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 77,
                                        columnNumber: 27
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$Bars3Icon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bars3Icon$3e$__["Bars3Icon"], {
                                        className: "w-10 h-10 mr-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 77,
                                        columnNumber: 70
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 76,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "md:hidden flex flex-col items-center gap-4 mt-4 py-4 px-4 bg-[#1B2B40]/80 rounded-xl border border-white/10 backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HoverNavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverNavLink"], {
                                label: "About us",
                                href: "#aboutus"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HoverNavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverNavLink"], {
                                label: "Services",
                                href: "#services"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$HoverNavLink$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HoverNavLink"], {
                                label: "Project",
                                href: "#services"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#1B2B40] border border-white/10 text-sm font-poppins text-white hover:bg-[#26364e] transition",
                                children: "Contact Us"
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-b border-white/20 w-full mb-5"
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 91,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative md:mt-40 max-w-3xl mx-auto text-center z-30 [@media(min-width:2560px)]:max-w-6xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 100,
                                scale: 0.85,
                                filter: 'blur(12px)'
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: 'blur(0px)'
                            },
                            viewport: {
                                once: false,
                                amount: 0.6
                            },
                            transition: {
                                duration: 0.8,
                                ease: [
                                    0.6,
                                    -0.05,
                                    0.01,
                                    0.99
                                ]
                            },
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative inline-flex md:h-10 overflow-hidden rounded-full p-[1px] mb-6 [@media(min-width:2560px)]:mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute inset-[-1000%] animate-[spin_8s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#77B8F3_0%,#FFFFFF_50%,#104677_100%)]"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "inline-flex w-full items-center justify-center rounded-full bg-[#1B2B40] text-white/60 backdrop-blur-3xl z-10 relative",
                                            style: {
                                                fontSize: 'clamp(0.60rem, 2vw, 1.35rem)',
                                                paddingInline: 'clamp(1.1rem, 4vw, 3rem)',
                                                paddingBlock: 'clamp(0.2rem, 1.2vw, 1rem)'
                                            },
                                            children: "Creating Digital That Matters"
                                        }, void 0, false, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 117,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    className: "font-aeonik text-white text-[clamp(1.50rem,4vw,6rem)] leading-[clamp(2.2rem,5vw,7rem)] font-light text-center",
                                    initial: {
                                        opacity: 0,
                                        y: 80,
                                        filter: 'blur(10px)'
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0,
                                        filter: 'blur(0px)'
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 1.2,
                                        ease: [
                                            0.33,
                                            1,
                                            0.68,
                                            1
                                        ]
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "whitespace-nowrap",
                                            children: [
                                                "We Don’t ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text animate-gradient-x",
                                                    children: "Just Create Content"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 134,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "whitespace-nowrap",
                                            children: [
                                                "We Build ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "bg-gradient-to-r from-[#4899E3] to-[#8EC6FA] text-transparent bg-clip-text",
                                                    children: "Impact"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 26
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/HeroSection.tsx",
                                            lineNumber: 137,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                    initial: {
                                        opacity: 0,
                                        y: 40
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 1.2,
                                        delay: 0.2
                                    },
                                    className: "font-poppins font-light text-[clamp(0.5rem,1vw,1.50rem)] mt-[clamp(1rem,4vw,2.5rem)] leading-relaxed text-[#F5F5F5] px-5 text-center",
                                    children: "Founded by Eisa Al Habib, Emmy® award-winning filmmaker and Forbes 30 Under 30 honoree, Majarah is a full-scale media agency delivering next-level storytelling, influencer-driven campaigns, and cross-platform digital marketing that moves people—and brands."
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                    href: "#contact",
                                    initial: {
                                        opacity: 0,
                                        y: 20,
                                        scale: 0.9
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0,
                                        scale: 1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 1,
                                        delay: 0.4
                                    },
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    className: "inline-block mt-10 border border-[#5AA5E9] text-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 mb-10 md:mb-0",
                                    style: {
                                        fontSize: 'clamp(0.875rem, 1.8vw, 1.25rem)',
                                        paddingInline: 'clamp(1.2rem, 4vw, 2.5rem)',
                                        paddingBlock: 'clamp(0.3rem, 0.5vw, 1rem)',
                                        background: 'linear-gradient(to bottom, #5AA5E9 -150%, transparent 60%)'
                                    },
                                    children: "Let’s Work Together →"
                                }, void 0, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/HeroSection.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-20 text-center overflow-hidden [@media(min-width:2560px)]:mt-32",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-poppins font-regular text-lg text-gray-400 mb-6 [@media(min-width:2560px)]:text-2xl",
                                children: "Top-tier brands and governments redefining how stories are told online."
                            }, void 0, false, {
                                fileName: "[project]/components/HeroSection.tsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            [
                                0,
                                1
                            ].map((row)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0
                                    },
                                    whileInView: {
                                        opacity: 1
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 1
                                    },
                                    className: "relative overflow-hidden w-full h-[clamp(3rem,6vw,8rem)] mb-10",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute left-0 top-0 flex whitespace-nowrap",
                                        animate: {
                                            x: row % 2 === 0 ? [
                                                '0%',
                                                '-100%'
                                            ] : [
                                                '-100%',
                                                '0%'
                                            ]
                                        },
                                        transition: {
                                            duration: scrollDuration,
                                            ease: 'linear',
                                            repeat: Infinity
                                        },
                                        children: [
                                            ...brands,
                                            ...brands,
                                            ...brands
                                        ].map((b, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block w-24 sm:w-36 md:w-48 [@media(min-width:2560px)]:w-80 shrink-0",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: `/brands/${b}.svg`,
                                                    alt: `Brand ${b}`,
                                                    className: "object-contain opacity-100 transition hover:opacity-100 filter",
                                                    style: {
                                                        height: 'clamp(2.5rem, 6vw, 8rem)'
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/components/HeroSection.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 13
                                                }, this)
                                            }, `${row}-${i}`, false, {
                                                fileName: "[project]/components/HeroSection.tsx",
                                                lineNumber: 194,
                                                columnNumber: 11
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/HeroSection.tsx",
                                        lineNumber: 187,
                                        columnNumber: 7
                                    }, this)
                                }, row, false, {
                                    fileName: "[project]/components/HeroSection.tsx",
                                    lineNumber: 179,
                                    columnNumber: 5
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/HeroSection.tsx",
                        lineNumber: 173,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/HeroSection.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeroSection.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "so8tuvhuMjzVB5EKqQ0AwfbHquA=");
_c = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/sanity/lib/sanityClient.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "sanityClient": (()=>sanityClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sanity/client/dist/index.browser.js [app-client] (ecmascript) <locals>");
;
const sanityClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sanity$2f$client$2f$dist$2f$index$2e$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])({
    projectId: 'o4eknloj',
    dataset: 'production',
    apiVersion: '2023-07-19',
    token: ("TURBOPACK compile-time value", "skGa5yUFCDMDQfAVSAWXpS35HVVHtGZ4mJgMq4K4BGP6GNG6ouIMsZh44DgGW4P8GGDLBZfk7l6NnYtDWpmxhSR4TTJ68v0FIrU43HlmIgVWuRqsq04xb6nqsZ59R6PmkYwP0RntvhQvH8SpcxJY5567voJb1V9xQh5b2na1BEBZgVq28Se8"),
    useCdn: false
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/countries.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// countries.tsx
__turbopack_context__.s({
    "CustomOption": (()=>CustomOption),
    "CustomSingleValue": (()=>CustomSingleValue),
    "countries": (()=>countries)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const countries = [
    {
        label: 'Afghanistan (+93)',
        value: '+93',
        flag: 'af'
    },
    {
        label: 'Albania (+355)',
        value: '+355',
        flag: 'al'
    },
    {
        label: 'Algeria (+213)',
        value: '+213',
        flag: 'dz'
    },
    {
        label: 'Andorra (+376)',
        value: '+376',
        flag: 'ad'
    },
    {
        label: 'Angola (+244)',
        value: '+244',
        flag: 'ao'
    },
    {
        label: 'Antigua and Barbuda (+1)',
        value: '+1',
        flag: 'ag'
    },
    {
        label: 'Argentina (+54)',
        value: '+54',
        flag: 'ar'
    },
    {
        label: 'Armenia (+374)',
        value: '+374',
        flag: 'am'
    },
    {
        label: 'Australia (+61)',
        value: '+61',
        flag: 'au'
    },
    {
        label: 'Austria (+43)',
        value: '+43',
        flag: 'at'
    },
    {
        label: 'Azerbaijan (+994)',
        value: '+994',
        flag: 'az'
    },
    {
        label: 'Bahamas (+1)',
        value: '+1',
        flag: 'bs'
    },
    {
        label: 'Bahrain (+973)',
        value: '+973',
        flag: 'bh'
    },
    {
        label: 'Bangladesh (+880)',
        value: '+880',
        flag: 'bd'
    },
    {
        label: 'Barbados (+1)',
        value: '+1',
        flag: 'bb'
    },
    {
        label: 'Belarus (+375)',
        value: '+375',
        flag: 'by'
    },
    {
        label: 'Belgium (+32)',
        value: '+32',
        flag: 'be'
    },
    {
        label: 'Belize (+501)',
        value: '+501',
        flag: 'bz'
    },
    {
        label: 'Benin (+229)',
        value: '+229',
        flag: 'bj'
    },
    {
        label: 'Bhutan (+975)',
        value: '+975',
        flag: 'bt'
    },
    {
        label: 'Bolivia (+591)',
        value: '+591',
        flag: 'bo'
    },
    {
        label: 'Bosnia and Herzegovina (+387)',
        value: '+387',
        flag: 'ba'
    },
    {
        label: 'Botswana (+267)',
        value: '+267',
        flag: 'bw'
    },
    {
        label: 'Brazil (+55)',
        value: '+55',
        flag: 'br'
    },
    {
        label: 'Brunei (+673)',
        value: '+673',
        flag: 'bn'
    },
    {
        label: 'Bulgaria (+359)',
        value: '+359',
        flag: 'bg'
    },
    {
        label: 'Burkina Faso (+226)',
        value: '+226',
        flag: 'bf'
    },
    {
        label: 'Burundi (+257)',
        value: '+257',
        flag: 'bi'
    },
    {
        label: 'Cabo Verde (+238)',
        value: '+238',
        flag: 'cv'
    },
    {
        label: 'Cambodia (+855)',
        value: '+855',
        flag: 'kh'
    },
    {
        label: 'Cameroon (+237)',
        value: '+237',
        flag: 'cm'
    },
    {
        label: 'Canada (+1)',
        value: '+1',
        flag: 'ca'
    },
    {
        label: 'Central African Republic (+236)',
        value: '+236',
        flag: 'cf'
    },
    {
        label: 'Chad (+235)',
        value: '+235',
        flag: 'td'
    },
    {
        label: 'Chile (+56)',
        value: '+56',
        flag: 'cl'
    },
    {
        label: 'China (+86)',
        value: '+86',
        flag: 'cn'
    },
    {
        label: 'Colombia (+57)',
        value: '+57',
        flag: 'co'
    },
    {
        label: 'Comoros (+269)',
        value: '+269',
        flag: 'km'
    },
    {
        label: 'Congo (Brazzaville) (+242)',
        value: '+242',
        flag: 'cg'
    },
    {
        label: 'Costa Rica (+506)',
        value: '+506',
        flag: 'cr'
    },
    {
        label: 'Côte d\'Ivoire (+225)',
        value: '+225',
        flag: 'ci'
    },
    {
        label: 'Croatia (+385)',
        value: '+385',
        flag: 'hr'
    },
    {
        label: 'Cuba (+53)',
        value: '+53',
        flag: 'cu'
    },
    {
        label: 'Cyprus (+357)',
        value: '+357',
        flag: 'cy'
    },
    {
        label: 'Czechia (+420)',
        value: '+420',
        flag: 'cz'
    },
    {
        label: 'Democratic Republic of the Congo (+243)',
        value: '+243',
        flag: 'cd'
    },
    {
        label: 'Denmark (+45)',
        value: '+45',
        flag: 'dk'
    },
    {
        label: 'Djibouti (+253)',
        value: '+253',
        flag: 'dj'
    },
    {
        label: 'Dominica (+1)',
        value: '+1',
        flag: 'dm'
    },
    {
        label: 'Dominican Republic (+1)',
        value: '+1',
        flag: 'do'
    },
    {
        label: 'Ecuador (+593)',
        value: '+593',
        flag: 'ec'
    },
    {
        label: 'Egypt (+20)',
        value: '+20',
        flag: 'eg'
    },
    {
        label: 'El Salvador (+503)',
        value: '+503',
        flag: 'sv'
    },
    {
        label: 'Equatorial Guinea (+240)',
        value: '+240',
        flag: 'gq'
    },
    {
        label: 'Eritrea (+291)',
        value: '+291',
        flag: 'er'
    },
    {
        label: 'Estonia (+372)',
        value: '+372',
        flag: 'ee'
    },
    {
        label: 'Eswatini (+268)',
        value: '+268',
        flag: 'sz'
    },
    {
        label: 'Ethiopia (+251)',
        value: '+251',
        flag: 'et'
    },
    {
        label: 'Fiji (+679)',
        value: '+679',
        flag: 'fj'
    },
    {
        label: 'Finland (+358)',
        value: '+358',
        flag: 'fi'
    },
    {
        label: 'France (+33)',
        value: '+33',
        flag: 'fr'
    },
    {
        label: 'Gabon (+241)',
        value: '+241',
        flag: 'ga'
    },
    {
        label: 'Gambia (+220)',
        value: '+220',
        flag: 'gm'
    },
    {
        label: 'Georgia (+995)',
        value: '+995',
        flag: 'ge'
    },
    {
        label: 'Germany (+49)',
        value: '+49',
        flag: 'de'
    },
    {
        label: 'Ghana (+233)',
        value: '+233',
        flag: 'gh'
    },
    {
        label: 'Greece (+30)',
        value: '+30',
        flag: 'gr'
    },
    {
        label: 'Grenada (+1)',
        value: '+1',
        flag: 'gd'
    },
    {
        label: 'Guatemala (+502)',
        value: '+502',
        flag: 'gt'
    },
    {
        label: 'Guinea (+224)',
        value: '+224',
        flag: 'gn'
    },
    {
        label: 'Guinea-Bissau (+245)',
        value: '+245',
        flag: 'gw'
    },
    {
        label: 'Guyana (+592)',
        value: '+592',
        flag: 'gy'
    },
    {
        label: 'Haiti (+509)',
        value: '+509',
        flag: 'ht'
    },
    {
        label: 'Holy See (+379)',
        value: '+379',
        flag: 'va'
    },
    {
        label: 'Honduras (+504)',
        value: '+504',
        flag: 'hn'
    },
    {
        label: 'Hungary (+36)',
        value: '+36',
        flag: 'hu'
    },
    {
        label: 'Iceland (+354)',
        value: '+354',
        flag: 'is'
    },
    {
        label: 'India (+91)',
        value: '+91',
        flag: 'in'
    },
    {
        label: 'Indonesia (+62)',
        value: '+62',
        flag: 'id'
    },
    {
        label: 'Iran (+98)',
        value: '+98',
        flag: 'ir'
    },
    {
        label: 'Iraq (+964)',
        value: '+964',
        flag: 'iq'
    },
    {
        label: 'Ireland (+353)',
        value: '+353',
        flag: 'ie'
    },
    {
        label: 'Israel (+972)',
        value: '+972',
        flag: 'il'
    },
    {
        label: 'Italy (+39)',
        value: '+39',
        flag: 'it'
    },
    {
        label: 'Jamaica (+1-876)',
        value: '+1876',
        flag: 'jm'
    },
    {
        label: 'Japan (+81)',
        value: '+81',
        flag: 'jp'
    },
    {
        label: 'Jordan (+962)',
        value: '+962',
        flag: 'jo'
    },
    {
        label: 'Kazakhstan (+7)',
        value: '+7',
        flag: 'kz'
    },
    {
        label: 'Kenya (+254)',
        value: '+254',
        flag: 'ke'
    },
    {
        label: 'Kiribati (+686)',
        value: '+686',
        flag: 'ki'
    },
    {
        label: 'Kuwait (+965)',
        value: '+965',
        flag: 'kw'
    },
    {
        label: 'Kyrgyzstan (+996)',
        value: '+996',
        flag: 'kg'
    },
    {
        label: 'Laos (+856)',
        value: '+856',
        flag: 'la'
    },
    {
        label: 'Latvia (+371)',
        value: '+371',
        flag: 'lv'
    },
    {
        label: 'Lebanon (+961)',
        value: '+961',
        flag: 'lb'
    },
    {
        label: 'Lesotho (+266)',
        value: '+266',
        flag: 'ls'
    },
    {
        label: 'Liberia (+231)',
        value: '+231',
        flag: 'lr'
    },
    {
        label: 'Libya (+218)',
        value: '+218',
        flag: 'ly'
    },
    {
        label: 'Liechtenstein (+423)',
        value: '+423',
        flag: 'li'
    },
    {
        label: 'Lithuania (+370)',
        value: '+370',
        flag: 'lt'
    },
    {
        label: 'Luxembourg (+352)',
        value: '+352',
        flag: 'lu'
    },
    {
        label: 'Madagascar (+261)',
        value: '+261',
        flag: 'mg'
    },
    {
        label: 'Malawi (+265)',
        value: '+265',
        flag: 'mw'
    },
    {
        label: 'Malaysia (+60)',
        value: '+60',
        flag: 'my'
    },
    {
        label: 'Maldives (+960)',
        value: '+960',
        flag: 'mv'
    },
    {
        label: 'Mali (+223)',
        value: '+223',
        flag: 'ml'
    },
    {
        label: 'Malta (+356)',
        value: '+356',
        flag: 'mt'
    },
    {
        label: 'Marshall Islands (+692)',
        value: '+692',
        flag: 'mh'
    },
    {
        label: 'Mauritania (+222)',
        value: '+222',
        flag: 'mr'
    },
    {
        label: 'Mauritius (+230)',
        value: '+230',
        flag: 'mu'
    },
    {
        label: 'Mexico (+52)',
        value: '+52',
        flag: 'mx'
    },
    {
        label: 'Micronesia (+691)',
        value: '+691',
        flag: 'fm'
    },
    {
        label: 'Moldova (+373)',
        value: '+373',
        flag: 'md'
    },
    {
        label: 'Monaco (+377)',
        value: '+377',
        flag: 'mc'
    },
    {
        label: 'Mongolia (+976)',
        value: '+976',
        flag: 'mn'
    },
    {
        label: 'Montenegro (+382)',
        value: '+382',
        flag: 'me'
    },
    {
        label: 'Morocco (+212)',
        value: '+212',
        flag: 'ma'
    },
    {
        label: 'Mozambique (+258)',
        value: '+258',
        flag: 'mz'
    },
    {
        label: 'Myanmar (formerly Burma) (+95)',
        value: '+95',
        flag: 'mm'
    },
    {
        label: 'Namibia (+264)',
        value: '+264',
        flag: 'na'
    },
    {
        label: 'Nauru (+674)',
        value: '+674',
        flag: 'nr'
    },
    {
        label: 'Nepal (+977)',
        value: '+977',
        flag: 'np'
    },
    {
        label: 'Netherlands (+31)',
        value: '+31',
        flag: 'nl'
    },
    {
        label: 'New Zealand (+64)',
        value: '+64',
        flag: 'nz'
    },
    {
        label: 'Nicaragua (+505)',
        value: '+505',
        flag: 'ni'
    },
    {
        label: 'Niger (+227)',
        value: '+227',
        flag: 'ne'
    },
    {
        label: 'Nigeria (+234)',
        value: '+234',
        flag: 'ng'
    },
    {
        label: 'North Korea (+850)',
        value: '+850',
        flag: 'kp'
    },
    {
        label: 'North Macedonia (+389)',
        value: '+389',
        flag: 'mk'
    },
    {
        label: 'Norway (+47)',
        value: '+47',
        flag: 'no'
    },
    {
        label: 'Oman (+968)',
        value: '+968',
        flag: 'om'
    },
    {
        label: 'Pakistan (+92)',
        value: '+92',
        flag: 'pk'
    },
    {
        label: 'Palau (+680)',
        value: '+680',
        flag: 'pw'
    },
    {
        label: 'Palestine State (+970)',
        value: '+970',
        flag: 'ps'
    },
    {
        label: 'Panama (+507)',
        value: '+507',
        flag: 'pa'
    },
    {
        label: 'Papua New Guinea (+675)',
        value: '+675',
        flag: 'pg'
    },
    {
        label: 'Paraguay (+595)',
        value: '+595',
        flag: 'py'
    },
    {
        label: 'Peru (+51)',
        value: '+51',
        flag: 'pe'
    },
    {
        label: 'Philippines (+63)',
        value: '+63',
        flag: 'ph'
    },
    {
        label: 'Poland (+48)',
        value: '+48',
        flag: 'pl'
    },
    {
        label: 'Portugal (+351)',
        value: '+351',
        flag: 'pt'
    },
    {
        label: 'Qatar (+974)',
        value: '+974',
        flag: 'qa'
    },
    {
        label: 'Romania (+40)',
        value: '+40',
        flag: 'ro'
    },
    {
        label: 'Russia (+7)',
        value: '+7',
        flag: 'ru'
    },
    {
        label: 'Rwanda (+250)',
        value: '+250',
        flag: 'rw'
    },
    {
        label: 'Saint Kitts and Nevis (+1-869)',
        value: '+1869',
        flag: 'kn'
    },
    {
        label: 'Saint Lucia (+1-758)',
        value: '+1758',
        flag: 'lc'
    },
    {
        label: 'Saint Vincent and the Grenadines (+1-784)',
        value: '+1784',
        flag: 'vc'
    },
    {
        label: 'Samoa (+685)',
        value: '+685',
        flag: 'ws'
    },
    {
        label: 'San Marino (+378)',
        value: '+378',
        flag: 'sm'
    },
    {
        label: 'Sao Tome and Principe (+239)',
        value: '+239',
        flag: 'st'
    },
    {
        label: 'Saudi Arabia (+966)',
        value: '+966',
        flag: 'sa'
    },
    {
        label: 'Senegal (+221)',
        value: '+221',
        flag: 'sn'
    },
    {
        label: 'Serbia (+381)',
        value: '+381',
        flag: 'rs'
    },
    {
        label: 'Seychelles (+248)',
        value: '+248',
        flag: 'sc'
    },
    {
        label: 'Sierra Leone (+232)',
        value: '+232',
        flag: 'sl'
    },
    {
        label: 'Singapore (+65)',
        value: '+65',
        flag: 'sg'
    },
    {
        label: 'Slovakia (+421)',
        value: '+421',
        flag: 'sk'
    },
    {
        label: 'Slovenia (+386)',
        value: '+386',
        flag: 'si'
    },
    {
        label: 'Solomon Islands (+677)',
        value: '+677',
        flag: 'sb'
    },
    {
        label: 'Somalia (+252)',
        value: '+252',
        flag: 'so'
    },
    {
        label: 'South Africa (+27)',
        value: '+27',
        flag: 'za'
    },
    {
        label: 'South Korea (+82)',
        value: '+82',
        flag: 'kr'
    },
    {
        label: 'South Sudan (+211)',
        value: '+211',
        flag: 'ss'
    },
    {
        label: 'Spain (+34)',
        value: '+34',
        flag: 'es'
    },
    {
        label: 'Sri Lanka (+94)',
        value: '+94',
        flag: 'lk'
    },
    {
        label: 'Sudan (+249)',
        value: '+249',
        flag: 'sd'
    },
    {
        label: 'Suriname (+597)',
        value: '+597',
        flag: 'sr'
    },
    {
        label: 'Sweden (+46)',
        value: '+46',
        flag: 'se'
    },
    {
        label: 'Switzerland (+41)',
        value: '+41',
        flag: 'ch'
    },
    {
        label: 'Syria (+963)',
        value: '+963',
        flag: 'sy'
    },
    {
        label: 'Tajikistan (+992)',
        value: '+992',
        flag: 'tj'
    },
    {
        label: 'Tanzania (+255)',
        value: '+255',
        flag: 'tz'
    },
    {
        label: 'Thailand (+66)',
        value: '+66',
        flag: 'th'
    },
    {
        label: 'Timor-Leste (+670)',
        value: '+670',
        flag: 'tl'
    },
    {
        label: 'Togo (+228)',
        value: '+228',
        flag: 'tg'
    },
    {
        label: 'Tonga (+676)',
        value: '+676',
        flag: 'to'
    },
    {
        label: 'Trinidad and Tobago (+1-868)',
        value: '+1868',
        flag: 'tt'
    },
    {
        label: 'Tunisia (+216)',
        value: '+216',
        flag: 'tn'
    },
    {
        label: 'Turkey (+90)',
        value: '+90',
        flag: 'tr'
    },
    {
        label: 'Turkmenistan (+993)',
        value: '+993',
        flag: 'tm'
    },
    {
        label: 'Tuvalu (+688)',
        value: '+688',
        flag: 'tv'
    },
    {
        label: 'Uganda (+256)',
        value: '+256',
        flag: 'ug'
    },
    {
        label: 'Ukraine (+380)',
        value: '+380',
        flag: 'ua'
    },
    {
        label: 'United Arab Emirates (+971)',
        value: '+971',
        flag: 'ae'
    },
    {
        label: 'United Kingdom (+44)',
        value: '+44',
        flag: 'gb'
    },
    {
        label: 'United States of America (+1)',
        value: '+1',
        flag: 'us'
    },
    {
        label: 'Uruguay (+598)',
        value: '+598',
        flag: 'uy'
    },
    {
        label: 'Uzbekistan (+998)',
        value: '+998',
        flag: 'uz'
    },
    {
        label: 'Vanuatu (+678)',
        value: '+678',
        flag: 'vu'
    },
    {
        label: 'Venezuela (+58)',
        value: '+58',
        flag: 've'
    },
    {
        label: 'Vietnam (+84)',
        value: '+84',
        flag: 'vn'
    },
    {
        label: 'Yemen (+967)',
        value: '+967',
        flag: 'ye'
    },
    {
        label: 'Zambia (+260)',
        value: '+260',
        flag: 'zm'
    },
    {
        label: 'Zimbabwe (+263)',
        value: '+263',
        flag: 'zw'
    }
];
const CustomOption = ({ data, innerProps })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ...innerProps,
        className: "flex items-center gap-2 py-1 px-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: `https://flagcdn.com/w40/${data.flag}.png`,
                className: "w-5 h-4",
                alt: data.label
            }, void 0, false, {
                fileName: "[project]/components/countries.tsx",
                lineNumber: 205,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: data.label
            }, void 0, false, {
                fileName: "[project]/components/countries.tsx",
                lineNumber: 210,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/countries.tsx",
        lineNumber: 204,
        columnNumber: 3
    }, this);
_c = CustomOption;
const CustomSingleValue = ({ data })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: `https://flagcdn.com/w40/${data.flag}.png`,
                className: "w-5 h-4",
                alt: data.label
            }, void 0, false, {
                fileName: "[project]/components/countries.tsx",
                lineNumber: 217,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: data.label
            }, void 0, false, {
                fileName: "[project]/components/countries.tsx",
                lineNumber: 222,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/countries.tsx",
        lineNumber: 216,
        columnNumber: 3
    }, this);
_c1 = CustomSingleValue;
var _c, _c1;
__turbopack_context__.k.register(_c, "CustomOption");
__turbopack_context__.k.register(_c1, "CustomSingleValue");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/OrganizationContactForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>OrganizationContactForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/sanityClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/countries.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const businessSizeOptions = [
    {
        value: "small",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Small"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 14,
            columnNumber: 28
        }, this)
    },
    {
        value: "medium",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Medium"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 15,
            columnNumber: 29
        }, this)
    },
    {
        value: "large",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Large"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 16,
            columnNumber: 28
        }, this)
    }
];
const yearsInBusinessOptions = [
    {
        value: "less_than_2",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Less than 2 years"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 20,
            columnNumber: 34
        }, this)
    },
    {
        value: "5_10_years",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "5–10 years"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 21,
            columnNumber: 33
        }, this)
    },
    {
        value: "10_plus",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "10+ years"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 22,
            columnNumber: 30
        }, this)
    },
    {
        value: "not_established",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Not established yet"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 23,
            columnNumber: 38
        }, this)
    }
];
const callTimeOptions = [
    {
        value: "morning",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Morning (9 AM – 12 PM)"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 27,
            columnNumber: 30
        }, this)
    },
    {
        value: "afternoon",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Afternoon (12 PM – 3 PM)"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 28,
            columnNumber: 32
        }, this)
    },
    {
        value: "evening",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Evening (3 PM – 6 PM)"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 29,
            columnNumber: 30
        }, this)
    },
    {
        value: "anytime",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Anytime"
        }, void 0, false, {
            fileName: "[project]/components/OrganizationContactForm.tsx",
            lineNumber: 30,
            columnNumber: 30
        }, this)
    }
];
const interestedOptions = [
    'Branding & Graphic Design',
    'Social Media Management',
    'Online Marketing Campaign',
    'Video Production & Photography',
    'Influencer Marketing',
    'Website Design',
    'Paid Ads & Performance Marketing',
    'Events Management',
    'Copywriting',
    'SEO & Analytics'
];
const CustomInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ value, onClick }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                value: value,
                onClick: onClick,
                readOnly: true,
                className: "w-full border border-gray-600 rounded px-3 py-2 bg-transparent text-lg placeholder:text-gray-400 pr-10",
                placeholder: "Select date"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 48,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 56,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/OrganizationContactForm.tsx",
        lineNumber: 47,
        columnNumber: 3
    }, this));
_c1 = CustomInput;
CustomInput.displayName = 'CustomInput';
const customStyles = {
    control: (base)=>({
            ...base,
            background: 'transparent',
            minHeight: '48px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300,
            color: 'white',
            fontSize: '1.125rem'
        }),
    menu: (base)=>({
            ...base,
            background: '#0e0e0e',
            borderRadius: '4px',
            border: '1px solid #ffffff',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300,
            fontSize: '1.125rem'
        }),
    menuList: (base)=>({
            ...base,
            maxHeight: '200px',
            overflowY: 'auto',
            paddingTop: 0,
            paddingBottom: 0
        }),
    option: (base, state)=>({
            ...base,
            background: state.isSelected ? 'transparent' : 'transparent',
            ':hover': {
                background: '#277cb5ff',
                color: 'white'
            },
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300,
            color: 'white'
        }),
    singleValue: (base)=>({
            ...base,
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300
        }),
    input: (base)=>({
            ...base,
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300
        }),
    placeholder: (base)=>({
            ...base,
            color: '#ccc',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300
        }),
    dropdownIndicator: (base)=>({
            ...base,
            color: '#ffffff'
        })
};
function OrganizationContactForm() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        businessName: '',
        fullName: '',
        email: '',
        phone: '',
        countryCode: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"][0].value,
        selectedDate: null,
        inquiry: '',
        referralSource: '',
        businessSize: businessSizeOptions[0].value,
        yearsInBusiness: '',
        primaryInterest: '',
        preferredCallTime: '',
        budget: ''
    });
    const [dateKey, setDateKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const validate = ()=>{
        const requiredFields = [
            'businessName',
            'fullName',
            'email',
            'phone',
            'selectedDate',
            'inquiry',
            'referralSource'
        ];
        const newErrors = {};
        requiredFields.forEach((field)=>{
            if (!formData[field]) newErrors[field] = 'Required';
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validate()) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanityClient"].create({
                _type: 'organizationContact',
                ...formData,
                selectedDate: formData.selectedDate ? new Date(formData.selectedDate).toISOString() : null,
                submittedAt: new Date().toISOString(),
                contactType: 'organization'
            });
            alert('Message sent successfully!');
            // Reset form
            setFormData({
                businessName: '',
                fullName: '',
                email: '',
                phone: '',
                countryCode: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"][0].value,
                selectedDate: null,
                inquiry: '',
                referralSource: '',
                businessSize: '',
                yearsInBusiness: '',
                primaryInterest: '',
                preferredCallTime: '',
                budget: ''
            });
            setDateKey((prev)=>prev + 1);
        } catch (error) {
            console.error(error);
            alert('Submission failed. Try again.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "mt-20 bg-[linear-gradient(to_bottom,_#4899E3_-130%,_transparent_30%)] border border-[#55A1E7] shadow-[0_0_30px_3px_#55A1E7] max-w-2xl mx-auto p-4 space-y-10 rounded-lg font-poppins text-white text-lg font-semibold",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl",
                children: "Let our business help yours."
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white-800 text-lg font-light mb-6",
                children: "We want to hear from you."
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Name of Business *"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 218,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "businessName",
                value: formData.businessName,
                onChange: (e)=>setFormData({
                        ...formData,
                        businessName: e.target.value
                    }),
                placeholder: "Business Name",
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 219,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Full Name *"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "fullName",
                value: formData.fullName,
                onChange: (e)=>setFormData({
                        ...formData,
                        fullName: e.target.value
                    }),
                placeholder: "Full Name",
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 228,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Email *"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "email",
                type: "email",
                value: formData.email,
                onChange: (e)=>setFormData({
                        ...formData,
                        email: e.target.value
                    }),
                placeholder: "Email",
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Phone *"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"],
                        styles: customStyles,
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].find((c)=>c.value === formData.countryCode),
                        onChange: (val)=>val && setFormData({
                                ...formData,
                                countryCode: val.value
                            }),
                        className: "w-2/3 text-white",
                        isSearchable: true,
                        components: {
                            Option: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomOption"],
                            SingleValue: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomSingleValue"]
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/OrganizationContactForm.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "phone",
                        value: formData.phone,
                        onChange: (e)=>setFormData({
                                ...formData,
                                phone: e.target.value
                            }),
                        placeholder: "Phone",
                        className: "w-2/3 border border-gray-600 rounded px-3 py-2 text-lg font-light"
                    }, void 0, false, {
                        fileName: "[project]/components/OrganizationContactForm.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Date of Submission *"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                selected: formData.selectedDate,
                onChange: (date)=>setFormData({
                        ...formData,
                        selectedDate: date
                    }),
                customInput: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomInput, {}, void 0, false, {
                    fileName: "[project]/components/OrganizationContactForm.tsx",
                    lineNumber: 274,
                    columnNumber: 22
                }, void 0)
            }, dateKey, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 270,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "I am interested in *"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 277,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                options: interestedOptions.map((opt)=>({
                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: opt
                        }, void 0, false, {
                            fileName: "[project]/components/OrganizationContactForm.tsx",
                            lineNumber: 279,
                            columnNumber: 57
                        }, void 0),
                        value: opt
                    })),
                styles: customStyles,
                value: formData.primaryInterest ? {
                    label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: formData.primaryInterest
                    }, void 0, false, {
                        fileName: "[project]/components/OrganizationContactForm.tsx",
                        lineNumber: 281,
                        columnNumber: 52
                    }, void 0),
                    value: formData.primaryInterest
                } : null,
                onChange: (val)=>setFormData({
                        ...formData,
                        primaryInterest: val ? val.value : ''
                    }),
                placeholder: "Select an option",
                isClearable: false
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 278,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Inquiry Details *"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: "inquiry",
                value: formData.inquiry,
                onChange: (e)=>setFormData({
                        ...formData,
                        inquiry: e.target.value
                    }),
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Budget (AED) - Monthly or per project "
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 295,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "budget",
                type: "number",
                value: formData.budget,
                onChange: (e)=>setFormData({
                        ...formData,
                        budget: e.target.value
                    }),
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 296,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Business Size *"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 304,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                options: businessSizeOptions,
                styles: customStyles,
                value: formData.businessSize ? businessSizeOptions.find((opt)=>opt.value === formData.businessSize) : null,
                onChange: (val)=>setFormData({
                        ...formData,
                        businessSize: val ? val.value : ''
                    }),
                placeholder: "Select business size",
                isClearable: false
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Years in Business"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 314,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                options: yearsInBusinessOptions,
                styles: customStyles,
                value: formData.yearsInBusiness ? yearsInBusinessOptions.find((opt)=>opt.value === formData.yearsInBusiness) : null,
                onChange: (val)=>setFormData({
                        ...formData,
                        yearsInBusiness: val ? val.value : ''
                    }),
                placeholder: "Select years in business",
                isClearable: false
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 315,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "What is the best time to call you?"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                options: callTimeOptions,
                styles: customStyles,
                value: formData.preferredCallTime ? callTimeOptions.find((opt)=>opt.value === formData.preferredCallTime) : null,
                onChange: (val)=>setFormData({
                        ...formData,
                        preferredCallTime: val ? val.value : ''
                    }),
                placeholder: "Select preferred call time",
                isClearable: false
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 325,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Where did you hear about us? *"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "referralSource",
                value: formData.referralSource,
                onChange: (e)=>setFormData({
                        ...formData,
                        referralSource: e.target.value
                    }),
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 335,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                className: "w-[150px] text-white h-[45px] mx-auto block mb-10 border border-[#5AA5E9] bg-[linear-gradient(to_bottom,_#5AA5E9_-150%,_transparent_60%)] hover:shadow-lg transition-all duration-300",
                children: "Submit"
            }, void 0, false, {
                fileName: "[project]/components/OrganizationContactForm.tsx",
                lineNumber: 342,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/OrganizationContactForm.tsx",
        lineNumber: 211,
        columnNumber: 5
    }, this);
}
_s(OrganizationContactForm, "6LTqc3zj8EvChzX9pxh5TXejXw0=");
_c2 = OrganizationContactForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CustomInput$forwardRef");
__turbopack_context__.k.register(_c1, "CustomInput");
__turbopack_context__.k.register(_c2, "OrganizationContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/IndividualContactForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>IndividualContactForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-select/dist/react-select.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-datepicker/dist/index.es.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sanity/lib/sanityClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/countries.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
const callTimeOptions = [
    {
        value: "morning",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Morning (9 AM – 12 PM)"
        }, void 0, false, {
            fileName: "[project]/components/IndividualContactForm.tsx",
            lineNumber: 14,
            columnNumber: 30
        }, this)
    },
    {
        value: "afternoon",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Afternoon (12 PM – 3 PM)"
        }, void 0, false, {
            fileName: "[project]/components/IndividualContactForm.tsx",
            lineNumber: 15,
            columnNumber: 32
        }, this)
    },
    {
        value: "evening",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Evening (3 PM – 6 PM)"
        }, void 0, false, {
            fileName: "[project]/components/IndividualContactForm.tsx",
            lineNumber: 16,
            columnNumber: 30
        }, this)
    },
    {
        value: "anytime",
        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Anytime"
        }, void 0, false, {
            fileName: "[project]/components/IndividualContactForm.tsx",
            lineNumber: 17,
            columnNumber: 30
        }, this)
    }
];
const interestedOptions = [
    'Branding & Graphic Design',
    'Social Media Management',
    'Online Marketing Campaign',
    'Video Production & Photography',
    'Influencer Marketing',
    'Website Design',
    'Paid Ads & Performance Marketing',
    'Events Management',
    'Copywriting',
    'SEO & Analytics'
];
const CustomInput = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ value, onClick }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: ref,
                value: value,
                onClick: onClick,
                readOnly: true,
                className: "w-full border border-gray-600 rounded px-3 py-2 bg-transparent text-lg placeholder:text-gray-400 pr-10",
                placeholder: "Select date"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 35,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 43,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/IndividualContactForm.tsx",
        lineNumber: 34,
        columnNumber: 3
    }, this));
_c1 = CustomInput;
CustomInput.displayName = 'CustomInput';
const customStyles = {
    control: (base)=>({
            ...base,
            background: 'transparent',
            minHeight: '48px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300,
            color: 'white',
            fontSize: '1.125rem'
        }),
    menu: (base)=>({
            ...base,
            background: '#0e0e0e',
            borderRadius: '4px',
            border: '1px solid #ffffff',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300,
            fontSize: '1.125rem'
        }),
    menuList: (base)=>({
            ...base,
            maxHeight: '200px',
            overflowY: 'auto',
            paddingTop: 0,
            paddingBottom: 0
        }),
    option: (base, state)=>({
            ...base,
            background: state.isSelected ? 'transparent' : 'transparent',
            ':hover': {
                background: '#277cb5ff',
                color: 'white'
            },
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300,
            color: 'white'
        }),
    singleValue: (base)=>({
            ...base,
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300
        }),
    input: (base)=>({
            ...base,
            color: 'white',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300
        }),
    placeholder: (base)=>({
            ...base,
            color: '#ccc',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: 300
        }),
    dropdownIndicator: (base)=>({
            ...base,
            color: '#ffffff'
        })
};
function IndividualContactForm() {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        email: '',
        phone: '',
        countryCode: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"][0].value,
        selectedDate: null,
        inquiry: '',
        referralSource: '',
        primaryInterest: '',
        preferredCallTime: '',
        budget: ''
    });
    const [dateKey, setDateKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const validate = ()=>{
        const requiredFields = [
            'fullName',
            'email',
            'phone',
            'selectedDate',
            'inquiry',
            'referralSource'
        ];
        const newErrors = {};
        requiredFields.forEach((field)=>{
            if (!formData[field]) newErrors[field] = 'Required';
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!validate()) return;
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$sanity$2f$lib$2f$sanityClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sanityClient"].create({
                _type: 'individualContact',
                ...formData,
                selectedDate: formData.selectedDate ? new Date(formData.selectedDate).toISOString() : null,
                submittedAt: new Date().toISOString(),
                contactType: 'individual'
            });
            alert('Message sent successfully!');
            // Reset form
            setFormData({
                fullName: '',
                email: '',
                phone: '',
                countryCode: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"][0].value,
                selectedDate: null,
                inquiry: '',
                referralSource: '',
                primaryInterest: '',
                preferredCallTime: '',
                budget: ''
            });
            setDateKey((prev)=>prev + 1);
        } catch (error) {
            console.error(error);
            alert('Submission failed. Try again.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: "mt-20 bg-[linear-gradient(to_bottom,_#4899E3_-130%,_transparent_30%)] border border-[#55A1E7] shadow-[0_0_30px_3px_#55A1E7] max-w-2xl mx-auto p-4 space-y-10 rounded-lg font-poppins text-white text-lg font-semibold",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl",
                children: "Let our business help yours."
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-white-800 text-lg font-light mb-6",
                children: "We want to hear from you."
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Full Name *"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 196,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "fullName",
                value: formData.fullName,
                onChange: (e)=>setFormData({
                        ...formData,
                        fullName: e.target.value
                    }),
                placeholder: "Full Name",
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Email *"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 205,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "email",
                type: "email",
                value: formData.email,
                onChange: (e)=>setFormData({
                        ...formData,
                        email: e.target.value
                    }),
                placeholder: "Email",
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 206,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Phone *"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                        options: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"],
                        styles: customStyles,
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["countries"].find((c)=>c.value === formData.countryCode),
                        onChange: (val)=>val && setFormData({
                                ...formData,
                                countryCode: val.value
                            }),
                        className: "w-2/3 text-white",
                        isSearchable: true,
                        components: {
                            Option: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomOption"],
                            SingleValue: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$countries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CustomSingleValue"]
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/IndividualContactForm.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        name: "phone",
                        value: formData.phone,
                        onChange: (e)=>setFormData({
                                ...formData,
                                phone: e.target.value
                            }),
                        placeholder: "Phone",
                        className: "w-2/3 border border-gray-600 rounded px-3 py-2 text-lg font-light"
                    }, void 0, false, {
                        fileName: "[project]/components/IndividualContactForm.tsx",
                        lineNumber: 229,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Date of Submission *"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 238,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$datepicker$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                selected: formData.selectedDate,
                onChange: (date)=>setFormData({
                        ...formData,
                        selectedDate: date
                    }),
                customInput: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CustomInput, {}, void 0, false, {
                    fileName: "[project]/components/IndividualContactForm.tsx",
                    lineNumber: 243,
                    columnNumber: 22
                }, void 0)
            }, dateKey, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 239,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "I am interested in *"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                options: interestedOptions.map((opt)=>({
                        label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: opt
                        }, void 0, false, {
                            fileName: "[project]/components/IndividualContactForm.tsx",
                            lineNumber: 248,
                            columnNumber: 57
                        }, void 0),
                        value: opt
                    })),
                styles: customStyles,
                value: formData.primaryInterest ? {
                    label: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: formData.primaryInterest
                    }, void 0, false, {
                        fileName: "[project]/components/IndividualContactForm.tsx",
                        lineNumber: 250,
                        columnNumber: 52
                    }, void 0),
                    value: formData.primaryInterest
                } : null,
                onChange: (val)=>setFormData({
                        ...formData,
                        primaryInterest: val ? val.value : ''
                    }),
                placeholder: "Select an option",
                isClearable: false
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 247,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Inquiry Details *"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 256,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                name: "inquiry",
                value: formData.inquiry,
                onChange: (e)=>setFormData({
                        ...formData,
                        inquiry: e.target.value
                    }),
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 257,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Budget (AED) - Monthly or per project "
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 264,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "budget",
                type: "number",
                value: formData.budget,
                onChange: (e)=>setFormData({
                        ...formData,
                        budget: e.target.value
                    }),
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 265,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "What is the best time to call you?"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 273,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$select$2f$dist$2f$react$2d$select$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"], {
                options: callTimeOptions,
                styles: customStyles,
                value: formData.preferredCallTime ? callTimeOptions.find((opt)=>opt.value === formData.preferredCallTime) : null,
                onChange: (val)=>setFormData({
                        ...formData,
                        preferredCallTime: val ? val.value : ''
                    }),
                placeholder: "Select preferred call time",
                isClearable: false
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 274,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block mb-1",
                children: "Where did you hear about us? *"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                name: "referralSource",
                value: formData.referralSource,
                onChange: (e)=>setFormData({
                        ...formData,
                        referralSource: e.target.value
                    }),
                className: "w-full border border-gray-600 rounded px-3 py-2 text-lg font-light"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                className: "w-[150px] text-white h-[45px] mx-auto block mb-10 border border-[#5AA5E9] bg-[linear-gradient(to_bottom,_#5AA5E9_-150%,_transparent_60%)] hover:shadow-lg transition-all duration-300",
                children: "Submit"
            }, void 0, false, {
                fileName: "[project]/components/IndividualContactForm.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/IndividualContactForm.tsx",
        lineNumber: 189,
        columnNumber: 5
    }, this);
}
_s(IndividualContactForm, "ZeTTr0a0HYu0dDTTGGcPWCym0Lk=");
_c2 = IndividualContactForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CustomInput$forwardRef");
__turbopack_context__.k.register(_c1, "CustomInput");
__turbopack_context__.k.register(_c2, "IndividualContactForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ContactReachUs.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ContactReachUs)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OrganizationContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/OrganizationContactForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IndividualContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/IndividualContactForm.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ContactReachUs() {
    _s();
    const [isOrganization, setIsOrganization] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const toggleUserType = ()=>setIsOrganization((prev)=>!prev);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center space-y-2 mb-4 font-poppins font-light text-white text-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "mb-4 mt-5",
                        children: "Choose User Type"
                    }, void 0, false, {
                        fileName: "[project]/components/ContactReachUs.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: toggleUserType,
                        className: "relative w-[220px] h-10 rounded-full border border-white text-lg font-semibold transition-colors duration-300 mb-5 bg-transparent text-white px-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `absolute top-1 w-8 h-8 rounded-full bg-white shadow-md transition-transform duration-300 ${isOrganization ? 'translate-x-[170px]' : 'translate-x-0'}`
                            }, void 0, false, {
                                fileName: "[project]/components/ContactReachUs.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative z-10 block w-full text-center",
                                children: isOrganization ? 'Organization' : 'Individual'
                            }, void 0, false, {
                                fileName: "[project]/components/ContactReachUs.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ContactReachUs.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ContactReachUs.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            isOrganization ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$OrganizationContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/ContactReachUs.tsx",
                lineNumber: 37,
                columnNumber: 25
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$IndividualContactForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/components/ContactReachUs.tsx",
                lineNumber: 37,
                columnNumber: 55
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ContactReachUs.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(ContactReachUs, "aJB34jGRo2C3O/wYFFJiXKE0x7s=");
_c = ContactReachUs;
var _c;
__turbopack_context__.k.register(_c, "ContactReachUs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Footer": (()=>Footer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
'use client';
;
;
;
const Footer = ()=>{
    const fadeInUp = (delay = 0)=>({
            hidden: {
                opacity: 0,
                y: 40
            },
            show: {
                opacity: 1,
                y: 0,
                transition: {
                    delay,
                    duration: 0.6,
                    ease: 'easeOut'
                }
            }
        });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].footer, {
        initial: "hidden",
        whileInView: "show",
        viewport: {
            once: true
        },
        variants: fadeInUp(0),
        className: "relative z-10 text-white py-[clamp(2rem,8vw,10rem)] px-[clamp(1rem,4vw,9rem)] items-center bg-[linear-gradient(to_top_right,_#4899E3_-200%,_transparent_50%)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-[clamp(1.5rem,8vw,14rem)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeInUp(0.2),
                        initial: "hidden",
                        whileInView: "show",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center text-center space-y-[clamp(0.7rem,2vw,1rem)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/icons/majarahlogo.svg",
                                    alt: "Majarah Logo",
                                    className: "w-[clamp(10rem,12vw,18rem)] h-auto"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[clamp(0.875rem,1.2vw,1.25rem)] text-gray-400 leading-tight",
                                    children: [
                                        "Transform the Digital",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 37,
                                            columnNumber: 36
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-block",
                                            children: "Experience"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 38,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 36,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "px-[clamp(0.875rem,1.5vw,1.5rem)] py-[clamp(0.3rem,0.5vw,0.8rem)] rounded-full bg-white/10 border border-white/20 text-[clamp(0.75rem,1vw,1.125rem)] hover:bg-white/20 transition inline-block",
                                    children: "Contact Us"
                                }, void 0, false, {
                                    fileName: "[project]/components/Footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Footer.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeInUp(0.4),
                        initial: "hidden",
                        whileInView: "show",
                        className: "space-y-[clamp(0.75rem,2.5vw,2rem)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-poppins font-medium text-gray-200 text-[clamp(1rem,1.6vw,1.5rem)]",
                                children: "Quick Links"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "font-poppins font-medium space-y-[clamp(0.5rem,1vw,1.25rem)] text-[clamp(0.75rem,1.1vw,1.125rem)] text-gray-400",
                                children: [
                                    {
                                        label: 'About Us',
                                        href: '#aboutus'
                                    },
                                    {
                                        label: 'Services',
                                        href: '#services'
                                    },
                                    {
                                        label: 'Our Work',
                                        href: '#services'
                                    },
                                    {
                                        label: 'Privacy Policy',
                                        href: '#aboutus'
                                    }
                                ].map(({ label, href })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: href,
                                            className: "relative inline-block transition-colors duration-300 hover:text-white   after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]   after:w-full after:scale-x-0 after:bg-white after:origin-left   after:transition-transform after:duration-300 hover:after:scale-x-100",
                                            children: label
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 67,
                                            columnNumber: 17
                                        }, this)
                                    }, label, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeInUp(0.6),
                        initial: "hidden",
                        whileInView: "show",
                        className: "space-y-[clamp(0.5rem,1.2vw,1.5rem)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-poppins font-medium text-gray-200 text-[clamp(1rem,1.6vw,1.5rem)]",
                                children: "Contact"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "font-poppins font-medium text-[clamp(0.75rem,1.1vw,1.125rem)] text-gray-400 space-y-[clamp(0.5rem,1vw,1.25rem)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:text-white transition-colors duration-300",
                                        children: "info@majarah.co"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:text-white transition-colors duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "#aboutus",
                                            children: "www.majarah.co"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "hover:text-white transition-colors duration-300",
                                        children: [
                                            "Dubai,",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                fileName: "[project]/components/Footer.tsx",
                                                lineNumber: 97,
                                                columnNumber: 21
                                            }, this),
                                            "United Arab Emirates"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeInUp(0.8),
                        initial: "hidden",
                        whileInView: "show",
                        className: "space-y-[clamp(0.5rem,1.2vw,1.5rem)]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-poppins font-medium text-gray-200 text-[clamp(1rem,1.6vw,1.5rem)]",
                                children: "Follow Us"
                            }, void 0, false, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-[clamp(0.75rem,1.5vw,2rem)] text-gray-400 text-[clamp(1.25rem,2vw,2.5rem)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.youtube.com/@eisayo",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaYoutube"], {
                                            className: "hover:text-white transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 113,
                                            columnNumber: 55
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 113,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.instagram.com/eisayo/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaInstagram"], {
                                            className: "hover:text-white transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 114,
                                            columnNumber: 57
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.facebook.com/Eisayo/",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaFacebookF"], {
                                            className: "hover:text-white transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 115,
                                            columnNumber: 56
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "https://www.tiktok.com/@eisayo?lang=en",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTiktok"], {
                                            className: "hover:text-white transition-colors duration-300"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Footer.tsx",
                                            lineNumber: 116,
                                            columnNumber: 62
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Footer.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Footer.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                variants: fadeInUp(1.0),
                initial: "hidden",
                whileInView: "show",
                className: "font-poppins font-medium text-[clamp(0.75rem,1vw,1rem)] text-gray-600 pt-[clamp(1rem,2vw,2.5rem)] text-center mt-[clamp(1.5rem,3vw,3rem)]",
                children: [
                    "©2025",
                    ' ',
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#aboutus",
                        className: "text-gray-600 hover:text-blue-400 transition-colors duration-300 underline-offset-4",
                        children: "Majarah"
                    }, void 0, false, {
                        fileName: "[project]/components/Footer.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    ' ',
                    "Company, Inc. All rights reserved"
                ]
            }, void 0, true, {
                fileName: "[project]/components/Footer.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Footer.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Testimonials.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Testimonials)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Testimonials() {
    _s();
    const controls1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const controls2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Testimonials.useEffect": ()=>{
            controls1.start({
                x: [
                    '0%',
                    '-50%'
                ],
                transition: {
                    duration: 70,
                    ease: 'linear',
                    repeat: Infinity
                }
            });
            controls2.start({
                x: [
                    '-50%',
                    '0%'
                ],
                transition: {
                    duration: 70,
                    ease: 'linear',
                    repeat: Infinity
                }
            });
        }
    }["Testimonials.useEffect"], []);
    const scrollToAbout = ()=>{
        const section = document.getElementById('hero');
        if (section) section.scrollIntoView({
            behavior: 'smooth'
        });
    };
    const renderCards = (cards)=>cards.map((card, idx)=>{
            const parts = card.text.split(/info@majarah\.co|majarah/);
            const joined = parts.map((part, i)=>i < parts.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        part,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            onClick: scrollToAbout,
                            className: "text-[#5EA8FF] hover:underline cursor-pointer",
                            children: "majarah"
                        }, void 0, false, {
                            fileName: "[project]/components/Testimonials.tsx",
                            lineNumber: 50,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/components/Testimonials.tsx",
                    lineNumber: 48,
                    columnNumber: 11
                }, this) : part);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[280px] md:w-[500px] [@media(min-width:2560px)]:w-[520px] min-h-[200px] md:min-h-[240px] [@media(min-width:2560px)]:min-h-[280px]    text-white p-4 md:p-6 [@media(min-width:2560px)]:p-8 rounded-xl shadow-2xl transition-transform duration-300    hover:-translate-y-2 ring-1 ring-white/10 hover:ring-white/20 cursor-pointer    bg-[linear-gradient(to_bottom,_#141316_-150%,_transparent_70%)]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 md:gap-4 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: card.img,
                                className: "w-10 h-10 md:w-12 md:h-12 [@media(min-width:2560px)]:w-14 [@media(min-width:2560px)]:h-14 rounded-full",
                                alt: card.name
                            }, void 0, false, {
                                fileName: "[project]/components/Testimonials.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-inter text-white text-base md:text-lg [@media(min-width:2560px)]:text-xl",
                                        children: card.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/Testimonials.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm md:text-base text-gray-400 [@media(min-width:2560px)]:text-lg",
                                        children: card.user
                                    }, void 0, false, {
                                        fileName: "[project]/components/Testimonials.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Testimonials.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Testimonials.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-300 text-sm md:text-base [@media(min-width:2560px)]:text-lg leading-relaxed font-inter text-justify",
                        children: joined
                    }, void 0, false, {
                        fileName: "[project]/components/Testimonials.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, idx, true, {
                fileName: "[project]/components/Testimonials.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this);
        });
    const row1Cards = [
        {
            img: '/icons/sean.svg',
            name: 'Hassan Al Mansoori',
            user: '@Hassan',
            text: 'Collaborating with majarah was a transformative experience. Their team took our vision and turned it into a powerful digital story that not only engaged our audience but also set new creative benchmarks in the industry.'
        },
        {
            img: '/icons/ryan.svg',
            name: 'Ryan Delk',
            user: '@delk',
            text: 'From the first concept discussion to the final post-production, majarah. delivered excellence at every stage. Their content strategy and execution helped us reach new levels of audience connection and brand impact.'
        },
        {
            img: '/icons/demeteria.svg',
            name: 'Amina Al Suwaidi',
            user: '@Amina',
            text: 'majarah doesn’t just create content—they craft narratives that move people. Their approach is bold, data-driven, and always aligned with what today’s audience truly connects with.'
        }
    ];
    const row2Cards = [
        {
            img: '/icons/jeremy.svg',
            name: 'Omar Al Farsi',
            user: '@omae',
            text: 'We were thoroughly impressed with the professionalism and creative energy of the team at majarah. Their ability to translate complex ideas into engaging, viral content made a measurable impact on our outreach.'
        },
        {
            img: '/icons/fabrizio.svg',
            name: 'Faisal Al Amiri',
            user: '@FaisalAmiri',
            text: 'With majarah we didn’t just get a media partner—we found a visionary team that pushes boundaries. Their deep understanding of the digital landscape helped us deliver bold campaigns with real results.'
        },
        {
            img: '/icons/jonathan.svg',
            name: 'Tariq Al Habsi',
            user: '@TariqHabsi',
            text: 'The work delivered by majarah exceeded expectations. Their creative storytelling, high-quality production, and strategic digital execution played a key role in amplifying our brand message.'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            opacity: 0,
            y: 100,
            scale: 0.9,
            filter: "blur(15px)"
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)"
        },
        viewport: {
            once: false,
            amount: 0.2
        },
        transition: {
            duration: 0.7,
            ease: [
                0.33,
                1,
                0.68,
                1
            ] // intense entrance
        },
        className: "w-full relative z-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[#4899E3] to-transparent blur-3xl opacity-60 z-0"
            }, void 0, false, {
                fileName: "[project]/components/Testimonials.tsx",
                lineNumber: 156,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12 relative z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl font-aeonik font-regular text-white md:mt-10 [@media(min-width:2560px)]:text-6xl",
                    children: "What Our Clients Say"
                }, void 0, false, {
                    fileName: "[project]/components/Testimonials.tsx",
                    lineNumber: 159,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Testimonials.tsx",
                lineNumber: 158,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-0 mb-10 relative z-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex gap-6 w-max",
                    animate: controls1,
                    children: [
                        ...Array(3)
                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                            children: renderCards(row1Cards)
                        }, i, false, {
                            fileName: "[project]/components/Testimonials.tsx",
                            lineNumber: 168,
                            columnNumber: 11
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/Testimonials.tsx",
                    lineNumber: 166,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Testimonials.tsx",
                lineNumber: 165,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full px-5 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[linear-gradient(to_top,_#4899E3_-100%,_transparent_40%)] z-0 pointer-events-none px-10"
                    }, void 0, false, {
                        fileName: "[project]/components/Testimonials.tsx",
                        lineNumber: 175,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative flex gap-6 w-max z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "flex gap-6 w-max",
                            animate: controls2,
                            children: [
                                ...Array(3)
                            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Fragment, {
                                    children: renderCards(row2Cards)
                                }, i, false, {
                                    fileName: "[project]/components/Testimonials.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/Testimonials.tsx",
                            lineNumber: 177,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Testimonials.tsx",
                        lineNumber: 176,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Testimonials.tsx",
                lineNumber: 174,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Testimonials.tsx",
        lineNumber: 141,
        columnNumber: 3
    }, this);
}
_s(Testimonials, "kWWl0MEGJDhihYpAUj8xNDXft70=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"]
    ];
});
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/Services.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "default": (()=>Services)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footersection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footersection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeroSection.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/stars-background.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContactReachUs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ContactReachUs.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Testimonials.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function Card({ title, description, children, className = '' }) {
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [coords, setCoords] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const handleMouseMove = (e)=>{
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setCoords({
            x,
            y
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        ref: cardRef,
        onMouseMove: (e)=>{
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                setCoords({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        },
        initial: {
            opacity: 0,
            y: 80,
            scale: 0.95
        },
        whileInView: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        transition: {
            duration: 1.2,
            ease: [
                0.2,
                0.8,
                0.2,
                1
            ],
            delay: 0.1
        },
        viewport: {
            once: false,
            amount: 0.4
        },
        className: `group relative min-h-[clamp(250px,25vh,600px)]
      p-[clamp(1rem,2vw,2rem)] rounded-3xl border border-[#223347]
      shadow-xl overflow-visible ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none transition-opacity duration-500 rounded-3xl",
                style: {
                    background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(122, 193, 255, 0.15), transparent 80%)`,
                    opacity: 1,
                    zIndex: 0
                }
            }, void 0, false, {
                fileName: "[project]/components/Services.tsx",
                lineNumber: 62,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-full rounded-3xl border border-transparent group-hover:border-[#7AC1FF] transition-all duration-700 animate-border-glow"
            }, void 0, false, {
                fileName: "[project]/components/Services.tsx",
                lineNumber: 72,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-white font-poppins font-medium mb-1 z-10 relative",
                style: {
                    fontSize: 'clamp(1rem, 1.5vw, 1.875rem)'
                },
                children: title
            }, void 0, false, {
                fileName: "[project]/components/Services.tsx",
                lineNumber: 75,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-300 font-poppins font-medium mb-2 z-10 relative",
                style: {
                    fontSize: 'clamp(0.875rem, 1vw, 1.3rem)'
                },
                children: description
            }, void 0, false, {
                fileName: "[project]/components/Services.tsx",
                lineNumber: 83,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "z-10 relative",
                children: children
            }, void 0, false, {
                fileName: "[project]/components/Services.tsx",
                lineNumber: 91,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Services.tsx",
        lineNumber: 38,
        columnNumber: 3
    }, this);
}
_s(Card, "nkgKubk9Iye7BdZzmsr0utAy1h0=");
_c = Card;
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen w-full bg-[#0e0e0e] text-white px-0 md:px-0 overflow-hidden relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] bg-[radial-gradient(ellipse_at_top,_#4899E3_30%,_transparent_80%)] opacity-15 blur-2xl pointer-events-none z-0 animate-spotlight",
                    style: {
                        height: 'clamp(300px, 60vh, 900px)'
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 104,
                    columnNumber: 1
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeroSection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 108,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full min-h-screen px-0 py-0 text-white font-sans mt-20 bg-[#0e0e0e]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-12",
                            id: "services",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl md:text-5xl [@media(min-width:2560px)]:text-7xl font-aeonik font-regular text-white",
                                    children: "What We Do Best"
                                }, void 0, false, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 113,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: " font-poppins font-regular text-gray-400 mt-3 [@media(min-width:2560px)]:text-2xl [@media(min-width:2560px)]:mb-30",
                                    children: "From Strategy to Spotlight — We Do it All."
                                }, void 0, false, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 114,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 112,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-center md:space-x-10 gap-4 md:gap-0 px-0 mb-[clamp(1.5rem,3vw,4rem)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "Digital Marketing",
                                    description: "From SEO and PPC to email and content, we tailor strategies that drive results.",
                                    className: "w-full md:w-[42%]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarsBackground"], {
                                            className: "z-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 125,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full",
                                            style: {
                                                height: 'clamp(120px, 8vw, 220px)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        y: 0
                                                    },
                                                    animate: {
                                                        y: [
                                                            0,
                                                            -8,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut'
                                                    },
                                                    className: "absolute",
                                                    style: {
                                                        top: 'clamp(20px, 2.5vw, 40px)',
                                                        left: 'clamp(10px, 2.5vw, 25px)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                                        whileHover: {
                                                            scale: 1.05
                                                        },
                                                        transition: {
                                                            type: 'spring',
                                                            stiffness: 300
                                                        },
                                                        src: "/icons/seo.svg",
                                                        alt: "SEO",
                                                        style: {
                                                            width: 'clamp(50px, 5vw, 200px)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 143,
                                                        columnNumber: 5
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        y: 0
                                                    },
                                                    animate: {
                                                        y: [
                                                            0,
                                                            10,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut'
                                                    },
                                                    className: "absolute",
                                                    style: {
                                                        top: 'clamp(25px, 1vw, 50px)',
                                                        left: 'clamp(90px, 10vw, 300px)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                                        whileHover: {
                                                            scale: 1.05
                                                        },
                                                        transition: {
                                                            type: 'spring',
                                                            stiffness: 300
                                                        },
                                                        src: "/icons/emailmarketing.svg",
                                                        alt: "Email Marketing",
                                                        style: {
                                                            width: 'clamp(90px, 10vw, 220px)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 5
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        y: 0
                                                    },
                                                    animate: {
                                                        y: [
                                                            0,
                                                            -6,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 3.5,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut'
                                                    },
                                                    className: "absolute",
                                                    style: {
                                                        top: 'clamp(35px, 1vw, 55px)',
                                                        right: 'clamp(10px, 2.5vw, 30px)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                                        whileHover: {
                                                            scale: 1.05
                                                        },
                                                        transition: {
                                                            type: 'spring',
                                                            stiffness: 300
                                                        },
                                                        src: "/icons/googleadds.svg",
                                                        alt: "Google Ads",
                                                        style: {
                                                            width: 'clamp(70px, 9vw, 200px)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 5
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 3
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    initial: {
                                                        y: 0
                                                    },
                                                    animate: {
                                                        y: [
                                                            0,
                                                            20,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 5,
                                                        repeat: Infinity,
                                                        ease: 'easeInOut'
                                                    },
                                                    className: "absolute",
                                                    style: {
                                                        top: 'clamp(90px, 8vw, 160px)',
                                                        left: 'clamp(15px, 3vw, 30px)'
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].img, {
                                                        whileHover: {
                                                            scale: 1.05
                                                        },
                                                        transition: {
                                                            type: 'spring',
                                                            stiffness: 300
                                                        },
                                                        src: "/icons/paid_advertising.svg",
                                                        alt: "Paid Advertising",
                                                        style: {
                                                            width: 'clamp(80px, 9vw, 220px)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 5
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 199,
                                                    columnNumber: 3
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 126,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/icons/growth.svg",
                                            alt: "Growth Chart",
                                            className: "mx-auto",
                                            style: {
                                                width: 'clamp(150px, 15vw, 320px)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 222,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 120,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "Social Media Management",
                                    description: "A creative partner for brands and creators—offering strategy, content creation, and hands-on management to keep your digital presence thriving.",
                                    className: "w-full md:w-[42%]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarsBackground"], {
                                            className: "z-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 238,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex items-center justify-center mt-6 w-full",
                                            style: {
                                                height: 'clamp(220px, 20vw, 500px)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "relative flex items-center justify-center",
                                                animate: {
                                                    rotate: 360
                                                },
                                                transition: {
                                                    repeat: Infinity,
                                                    duration: 20,
                                                    ease: 'linear'
                                                },
                                                style: {
                                                    width: 'clamp(160px, 16vw, 340px)',
                                                    height: 'clamp(160px, 12vw, 340px)'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/Group 35518.svg",
                                                        alt: "Orbit Background",
                                                        className: "absolute",
                                                        style: {
                                                            width: 'clamp(240px, 30vw, 400px)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/fbicon.svg",
                                                        alt: "Facebook",
                                                        className: "absolute",
                                                        style: {
                                                            top: '5%',
                                                            left: '50%',
                                                            transform: 'translateX(-50%)',
                                                            width: 'clamp(22px, 2vw, 40px)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 260,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/instagram.svg",
                                                        alt: "Instagram",
                                                        className: "absolute",
                                                        style: {
                                                            top: '50%',
                                                            right: '2%',
                                                            transform: 'translateY(-50%)',
                                                            width: 'clamp(28px, 2.8vw, 50px)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 269,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/youtube.svg",
                                                        alt: "YouTube",
                                                        className: "absolute",
                                                        style: {
                                                            bottom: '0',
                                                            left: '50%',
                                                            transform: 'translateX(-50%)',
                                                            width: 'clamp(30px, 3.1vw, 55px)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 278,
                                                        columnNumber: 9
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/icons/tiktok.svg",
                                                        alt: "TikTok",
                                                        className: "absolute",
                                                        style: {
                                                            bottom: '25%',
                                                            left: 'clamp(18px, 2.5vw, 30px)',
                                                            width: 'clamp(22px, 2.2vw, 40px)'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Services.tsx",
                                                        lineNumber: 287,
                                                        columnNumber: 9
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Services.tsx",
                                                lineNumber: 245,
                                                columnNumber: 7
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 239,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 233,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 118,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row justify-center md:space-x-10 gap-4 md:gap-0 px-0 mb-[clamp(1.5rem,3vw,4rem)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "Event Coverage",
                                    description: "From real-time Reels to cinematic recaps, we turn your moments into magnetic content",
                                    className: "w-full md:w-[42%]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarsBackground"], {
                                            className: "z-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 307,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center",
                                            style: {
                                                height: 'clamp(220px, 20vw, 500px)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/icons/card3.svg",
                                                alt: "Content Creation",
                                                className: "h-auto",
                                                style: {
                                                    width: 'clamp(220px, 30vw, 700px)',
                                                    marginTop: 'clamp(1rem, 2vw, 2.5rem)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services.tsx",
                                                lineNumber: 314,
                                                columnNumber: 7
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 308,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 302,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "Website & App Development",
                                    description: "We build platforms with content at the core. UX, UI, and storytelling designed to make people click, stay, and act.",
                                    className: "w-full md:w-[42%]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarsBackground"], {
                                            className: "z-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 332,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center",
                                            style: {
                                                height: 'clamp(220px, 28vw, 340px)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/icons/card4.svg",
                                                alt: "Brand Strategy",
                                                className: "h-auto",
                                                style: {
                                                    width: 'clamp(220px, 28vw, 700px)',
                                                    marginTop: 'clamp(1rem, 2vw, 2.5rem)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services.tsx",
                                                lineNumber: 339,
                                                columnNumber: 7
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 333,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 327,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 300,
                            columnNumber: 4
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[clamp(1rem,2vw,3rem)] px-[clamp(0.5rem,1vw,2rem)] w-[90%]max-w-[87%] mx-auto mb-[clamp(1.5rem,3vw,4rem)]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "Ad Campaign",
                                    description: "Smart targeting, high-conversion creatives, and optimized ROI",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarsBackground"], {
                                            className: "z-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 358,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center",
                                            style: {
                                                height: 'clamp(180px, 20vw, 300px)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/icons/adcampaign.svg",
                                                alt: "Ad Campaign",
                                                className: "h-auto mt-[clamp(1rem, 2.5vw, 2rem)] hover:scale-110",
                                                style: {
                                                    width: 'clamp(120px, 11vw, 260px)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services.tsx",
                                                lineNumber: 363,
                                                columnNumber: 7
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 359,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 354,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "Influencer Marketing",
                                    description: "More than matchmaking! We script, plan, and scale creator partnerships with real impact",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarsBackground"], {
                                            className: "z-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 377,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                                            children: `
      @keyframes floatX {
        0% { transform: translateX(0%); }
        50% { transform: translateX(10%); }
        100% { transform: translateX(0%); }
      }

      .float-x-slow {
        animation: floatX 10s ease-in-out infinite;
      }
    `
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 380,
                                            columnNumber: 3
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-full",
                                            style: {
                                                height: 'clamp(190px, 16vw, 700px)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-full flex justify-center items-center",
                                                style: {
                                                    height: 'clamp(320px, 32vw, 550px)'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative",
                                                    style: {
                                                        width: 'clamp(160px, 18vw, 300px)',
                                                        height: '100%'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/icons/f3.svg",
                                                            alt: "F3",
                                                            className: "absolute float-x-slow",
                                                            style: {
                                                                top: 0,
                                                                left: 0,
                                                                width: 'clamp(150px, 16vw, 300px)',
                                                                animationDelay: '1s'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 407,
                                                            columnNumber: 9
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/icons/f2.svg",
                                                            alt: "F2",
                                                            className: "absolute float-x-slow",
                                                            style: {
                                                                top: 'clamp(70px, 7.5vw, 150px)',
                                                                left: 0,
                                                                width: 'clamp(150px, 16vw, 300px)',
                                                                animationDelay: '2s'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 419,
                                                            columnNumber: 9
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "/icons/f1.svg",
                                                            alt: "F1",
                                                            className: "absolute float-x-slow",
                                                            style: {
                                                                top: 'clamp(140px, 18vw, 300px)',
                                                                left: 0,
                                                                width: 'clamp(150px, 16vw, 300px)',
                                                                animationDelay: '8s'
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Services.tsx",
                                                            lineNumber: 431,
                                                            columnNumber: 9
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Services.tsx",
                                                    lineNumber: 402,
                                                    columnNumber: 7
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services.tsx",
                                                lineNumber: 398,
                                                columnNumber: 5
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 394,
                                            columnNumber: 3
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 373,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "Content Creation & Strategy",
                                    description: "From real-time Reels to cinematic recaps, we turn your moments into magnetic content",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarsBackground"], {
                                            className: "z-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 453,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center",
                                            style: {
                                                height: 'clamp(180px, 20vw, 300px)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/icons/btmcard3.png",
                                                alt: "Content Creation",
                                                className: "h-auto mt-[clamp(0.5rem, 2vw, 2rem)]",
                                                style: {
                                                    width: 'clamp(200px, 22vw, 360px)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services.tsx",
                                                lineNumber: 458,
                                                columnNumber: 7
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 454,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 449,
                                    columnNumber: 3
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Card, {
                                    title: "Training & Workshops",
                                    description: "We scale businesses and skills. Learn from those who’ve done it, not just taught it",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarsBackground"], {
                                            className: "z-0"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 472,
                                            columnNumber: 5
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center",
                                            style: {
                                                height: 'clamp(180px, 20vw, 300px)'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: "/icons/btmcard4.svg",
                                                alt: "Training",
                                                className: "h-auto mb-[clamp(0.5rem, 2vw, 2rem)]",
                                                style: {
                                                    width: 'clamp(220px, 25vw, 500px)'
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/components/Services.tsx",
                                                lineNumber: 477,
                                                columnNumber: 7
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Services.tsx",
                                            lineNumber: 473,
                                            columnNumber: 5
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Services.tsx",
                                    lineNumber: 468,
                                    columnNumber: 3
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 351,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 100,
                                scale: 0.9,
                                filter: "blur(15px)"
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                filter: "blur(0px)"
                            },
                            viewport: {
                                once: false,
                                amount: 0.2
                            },
                            transition: {
                                duration: 0.7,
                                ease: [
                                    0.33,
                                    1,
                                    0.68,
                                    1
                                ] // Strong ease-out for drama
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 487,
                            columnNumber: 1
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Testimonials$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 513,
                            columnNumber: 3
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 111,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-[-1] pointer-events-none",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$stars$2d$background$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarsBackground"], {}, void 0, false, {
                                fileName: "[project]/components/Services.tsx",
                                lineNumber: 521,
                                columnNumber: 5
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 520,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footersection$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 525,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "contact",
                            className: "mb-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ContactReachUs$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Services.tsx",
                                lineNumber: 527,
                                columnNumber: 5
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 526,
                            columnNumber: 3
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                            fileName: "[project]/components/Services.tsx",
                            lineNumber: 530,
                            columnNumber: 3
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Services.tsx",
                    lineNumber: 518,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/Services.tsx",
            lineNumber: 102,
            columnNumber: 5
        }, this)
    }, void 0, false);
}
_c1 = Services;
var _c, _c1;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "Services");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_d1e6cb20._.js.map