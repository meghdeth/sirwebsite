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
"[project]/src/components/Paper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Paper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Paper(param) {
    let { serialNumber, title, authors, journal, year, doi, volume, pages } = param;
    const responsiveStyles = "\n    .paper-container {\n      background: white;\n      border-radius: 12px;\n      padding: 24px;\n      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);\n      border: 1px solid #e5e7eb;\n      margin-bottom: 24px;\n      transition: transform 0.3s ease, box-shadow 0.3s ease;\n    }\n    \n    .paper-container:hover {\n      transform: translateY(-2px);\n      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);\n    }\n    \n    .paper-header {\n      display: flex;\n      align-items: flex-start;\n      gap: 16px;\n    }\n    \n    .paper-number {\n      font-size: 1.5rem;\n      font-weight: 700;\n      color: #f97316;\n      min-width: 40px;\n      margin-top: 2px;\n    }\n    \n    .paper-content {\n      flex: 1;\n    }\n    \n    .paper-title {\n      font-size: 1.25rem;\n      font-weight: 600;\n      color: #1f2937;\n      margin-bottom: 12px;\n      line-height: 1.3;\n      margin: 0;\n      margin-bottom: 12px;\n    }\n    \n    .paper-authors {\n      font-size: 1rem;\n      color: #6b7280;\n      margin-bottom: 8px;\n      font-style: italic;\n    }\n    \n    .journal-info {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n      margin-bottom: 16px;\n      flex-wrap: wrap;\n    }\n    \n    .journal-name {\n      font-size: 1rem;\n      color: #374151;\n      font-weight: 500;\n    }\n    \n    .journal-details {\n      font-size: 1rem;\n      color: #6b7280;\n    }\n    \n    .doi-section {\n      display: flex;\n      align-items: center;\n      gap: 8px;\n    }\n    \n    .doi-label {\n      font-size: 0.875rem;\n      color: #9ca3af;\n      font-weight: 500;\n    }\n    \n    .doi-link {\n      font-size: 0.875rem;\n      color: #f97316;\n      text-decoration: none;\n      font-weight: 500;\n      transition: color 0.3s ease;\n      cursor: pointer;\n    }\n    \n    .doi-link:hover {\n      color: #ea580c;\n      text-decoration: underline;\n    }\n    \n    @media (max-width: 767px) {\n      .paper-container {\n        padding: 20px;\n      }\n      \n      .paper-header {\n        flex-direction: column;\n        gap: 8px;\n        align-items: flex-start;\n      }\n      \n      .paper-number {\n        font-size: 1.25rem;\n        margin-top: 0;\n      }\n      \n      .paper-content {\n        width: 100%;\n      }\n      \n      .paper-title {\n        font-size: 1.125rem;\n        line-height: 1.4;\n      }\n      \n      .paper-authors {\n        font-size: 0.9rem;\n      }\n      \n      .journal-info {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 4px;\n      }\n      \n      .journal-name {\n        font-size: 0.9rem;\n      }\n      \n      .journal-details {\n        font-size: 0.85rem;\n      }\n      \n      .doi-section {\n        flex-direction: column;\n        align-items: flex-start;\n        gap: 4px;\n      }\n      \n      .doi-label {\n        font-size: 0.8rem;\n      }\n      \n      .doi-link {\n        font-size: 0.8rem;\n        word-break: break-all;\n      }\n    }\n    \n    @media (max-width: 480px) {\n      .paper-container {\n        padding: 16px;\n      }\n      \n      .paper-title {\n        font-size: 1rem;\n      }\n      \n      .paper-authors {\n        font-size: 0.85rem;\n      }\n      \n      .journal-name {\n        font-size: 0.85rem;\n      }\n      \n      .journal-details {\n        font-size: 0.8rem;\n      }\n    }\n  ";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveStyles
            }, void 0, false, {
                fileName: "[project]/src/components/Paper.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "paper-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "paper-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "paper-number",
                            children: [
                                serialNumber,
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Paper.tsx",
                            lineNumber: 205,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "paper-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "paper-title",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Paper.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "paper-authors",
                                    children: authors
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Paper.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "journal-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "journal-name",
                                            children: journal
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Paper.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        volume && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "journal-details",
                                            children: [
                                                "Vol. ",
                                                volume
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Paper.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        pages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "journal-details",
                                            children: [
                                                "pp. ",
                                                pages
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Paper.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "journal-details",
                                            children: [
                                                "(",
                                                year,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Paper.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Paper.tsx",
                                    lineNumber: 217,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "doi-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "doi-label",
                                            children: "DOI:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Paper.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://doi.org/".concat(doi),
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "doi-link",
                                            children: doi
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Paper.tsx",
                                            lineNumber: 240,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Paper.tsx",
                                    lineNumber: 236,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Paper.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Paper.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Paper.tsx",
                lineNumber: 203,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_c = Paper;
var _c;
__turbopack_context__.k.register(_c, "Paper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/publications/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Publications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Paper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Paper.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Publications() {
    _s();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('publications');
    const [publications, setPublications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [patents, setPatents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [conferences, setConferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add responsive styles
    const responsiveStyles = "\n    .publications-container {\n      max-width: 1200px;\n      margin: 0 auto;\n      padding: 0 20px;\n    }\n    \n    .publications-header {\n      text-align: center;\n      margin-bottom: 48px;\n    }\n    \n    .publications-title {\n      font-size: 3rem;\n      font-weight: bold;\n      color: #1f2937;\n      margin-bottom: 16px;\n    }\n    \n    .publications-subtitle {\n      font-size: 1.25rem;\n      color: #6b7280;\n      margin-left: 5%;\n      margin-right: 5%;\n    }\n    \n    .tab-navigation {\n      display: flex;\n      justify-content: center;\n      margin-bottom: 40px;\n      border-bottom: 1px solid #e5e7eb;\n      gap: 8px;\n    }\n    \n    .tab-button {\n      border: none;\n      padding: 12px 24px;\n      font-size: 1rem;\n      font-weight: 600;\n      cursor: pointer;\n      border-radius: 8px 8px 0 0;\n      transition: all 0.3s ease;\n      white-space: nowrap;\n    }\n    \n    .patent-card, .conference-card {\n      background-color: white;\n      border: 2px solid #e5e7eb;\n      border-radius: 12px;\n      padding: 24px;\n      margin-bottom: 20px;\n      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);\n    }\n    \n    .card-header {\n      display: flex;\n      align-items: flex-start;\n      gap: 16px;\n      margin-bottom: 16px;\n    }\n    \n    .card-number {\n      padding: 4px 12px;\n      border-radius: 20px;\n      font-size: 0.875rem;\n      font-weight: 600;\n      min-width: 40px;\n      text-align: center;\n      color: white;\n    }\n    \n    .card-content {\n      flex: 1;\n    }\n    \n    .card-title {\n      font-size: 1.25rem;\n      font-weight: 600;\n      color: #1f2937;\n      margin: 0 0 8px 0;\n      line-height: 1.4;\n    }\n    \n    .card-authors {\n      font-size: 1rem;\n      color: #6b7280;\n      margin: 0 0 12px 0;\n      font-style: italic;\n    }\n    \n    .tag-container {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 12px;\n      margin-bottom: 12px;\n    }\n    \n    .tag {\n      padding: 4px 8px;\n      border-radius: 12px;\n      font-size: 0.8rem;\n      font-weight: 500;\n    }\n    \n    .date-info {\n      display: flex;\n      gap: 16px;\n      margin-bottom: 12px;\n      font-size: 0.9rem;\n      color: #6b7280;\n    }\n    \n    .conference-info {\n      margin-bottom: 12px;\n    }\n    \n    .conference-name {\n      font-size: 1rem;\n      color: #374151;\n      font-weight: 600;\n      margin: 0 0 4px 0;\n    }\n    \n    .conference-location {\n      font-size: 0.9rem;\n      color: #6b7280;\n      margin: 0;\n    }\n    \n    .links-container {\n      display: flex;\n      gap: 16px;\n      align-items: center;\n    }\n    \n    .link {\n      color: #f59e0b;\n      text-decoration: none;\n      font-weight: 500;\n      font-size: 0.9rem;\n    }\n    \n    @media (max-width: 1023px) {\n      .publications-container {\n        padding: 0 16px;\n      }\n      \n      .publications-title {\n        font-size: 2.5rem;\n      }\n      \n      .publications-subtitle {\n        font-size: 1.125rem;\n        margin-left: 3%;\n        margin-right: 3%;\n      }\n      \n      .tab-navigation {\n        gap: 4px;\n      }\n      \n      .tab-button {\n        padding: 10px 16px;\n        font-size: 0.9rem;\n      }\n      \n      .patent-card, .conference-card {\n        padding: 20px;\n      }\n      \n      .card-header {\n        gap: 12px;\n      }\n      \n      .card-title {\n        font-size: 1.125rem;\n      }\n    }\n    \n    @media (max-width: 767px) {\n      .publications-container {\n        padding: 0 12px;\n      }\n      \n      .publications-title {\n        font-size: 2rem;\n        line-height: 1.2;\n      }\n      \n      .publications-subtitle {\n        font-size: 1rem;\n        margin-left: 2%;\n        margin-right: 2%;\n      }\n      \n      .tab-navigation {\n        flex-direction: column;\n        gap: 8px;\n        align-items: stretch;\n      }\n      \n      .tab-button {\n        padding: 12px 16px;\n        font-size: 0.9rem;\n        border-radius: 8px;\n        text-align: center;\n      }\n      \n      .patent-card, .conference-card {\n        padding: 16px;\n      }\n      \n      .card-header {\n        flex-direction: column;\n        gap: 8px;\n        align-items: flex-start;\n      }\n      \n      .card-number {\n        align-self: flex-start;\n      }\n      \n      .card-content {\n        width: 100%;\n      }\n      \n      .card-title {\n        font-size: 1rem;\n        line-height: 1.3;\n      }\n      \n      .card-authors {\n        font-size: 0.9rem;\n      }\n      \n      .tag-container {\n        gap: 8px;\n      }\n      \n      .tag {\n        font-size: 0.75rem;\n        padding: 3px 6px;\n      }\n      \n      .date-info {\n        flex-direction: column;\n        gap: 4px;\n        font-size: 0.8rem;\n      }\n      \n      .conference-name {\n        font-size: 0.9rem;\n      }\n      \n      .conference-location {\n        font-size: 0.8rem;\n      }\n      \n      .links-container {\n        flex-direction: column;\n        gap: 8px;\n        align-items: flex-start;\n      }\n      \n      .link {\n        font-size: 0.8rem;\n      }\n    }\n    \n    @media (max-width: 480px) {\n      .publications-container {\n        padding: 0 8px;\n      }\n      \n      .publications-title {\n        font-size: 1.75rem;\n      }\n      \n      .publications-subtitle {\n        font-size: 0.9rem;\n      }\n      \n      .tab-button {\n        padding: 10px 12px;\n        font-size: 0.8rem;\n      }\n      \n      .patent-card, .conference-card {\n        padding: 12px;\n      }\n      \n      .card-title {\n        font-size: 0.95rem;\n      }\n      \n      .card-authors {\n        font-size: 0.85rem;\n      }\n    }\n  ";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Publications.useEffect": ()=>{
            fetchAllData();
        }
    }["Publications.useEffect"], []);
    const fetchAllData = async ()=>{
        try {
            const [publicationsRes, patentsRes, conferencesRes] = await Promise.all([
                fetch('http://localhost:5001/api/publications'),
                fetch('http://localhost:5001/api/patents'),
                fetch('http://localhost:5001/api/conferences')
            ]);
            if (!publicationsRes.ok) throw new Error('Failed to fetch publications');
            if (!patentsRes.ok) throw new Error('Failed to fetch patents');
            if (!conferencesRes.ok) throw new Error('Failed to fetch conferences');
            const [publicationsData, patentsData, conferencesData] = await Promise.all([
                publicationsRes.json(),
                patentsRes.json(),
                conferencesRes.json()
            ]);
            setPublications(publicationsData);
            setPatents(patentsData);
            setConferences(conferencesData);
            setLoading(false);
        } catch (err) {
            setError('Failed to load data');
            setLoading(false);
            console.error('Error fetching data:', err);
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: '#6b7280'
            },
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/publications/page.tsx",
            lineNumber: 392,
            columnNumber: 7
        }, this);
    }
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.2rem',
                color: '#ef4444'
            },
            children: error
        }, void 0, false, {
            fileName: "[project]/src/app/publications/page.tsx",
            lineNumber: 407,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            backgroundColor: '#f9fafb'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveStyles
            }, void 0, false, {
                fileName: "[project]/src/app/publications/page.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    paddingTop: '80px',
                    paddingBottom: '40px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "publications-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "publications-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "publications-title",
                                    children: "Publications & Patents"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/publications/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "publications-subtitle",
                                    children: "Research publications, patents, and conference presentations from the Low-Dimensional Semiconductors Lab"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/publications/page.tsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/publications/page.tsx",
                            lineNumber: 432,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tab-navigation",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('publications'),
                                    className: "tab-button",
                                    style: {
                                        backgroundColor: activeTab === 'publications' ? '#ec4899' : 'transparent',
                                        color: activeTab === 'publications' ? 'white' : '#6b7280',
                                        borderBottom: activeTab === 'publications' ? '3px solid #ec4899' : '3px solid transparent'
                                    },
                                    children: [
                                        "Publications (",
                                        publications.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/publications/page.tsx",
                                    lineNumber: 443,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('patents'),
                                    className: "tab-button",
                                    style: {
                                        backgroundColor: activeTab === 'patents' ? '#8b5cf6' : 'transparent',
                                        color: activeTab === 'patents' ? 'white' : '#6b7280',
                                        borderBottom: activeTab === 'patents' ? '3px solid #8b5cf6' : '3px solid transparent'
                                    },
                                    children: [
                                        "Patents (",
                                        patents.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/publications/page.tsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('conferences'),
                                    className: "tab-button",
                                    style: {
                                        backgroundColor: activeTab === 'conferences' ? '#f59e0b' : 'transparent',
                                        color: activeTab === 'conferences' ? 'white' : '#6b7280',
                                        borderBottom: activeTab === 'conferences' ? '3px solid #f59e0b' : '3px solid transparent'
                                    },
                                    children: [
                                        "Conferences (",
                                        conferences.length,
                                        ")"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/publications/page.tsx",
                                    lineNumber: 465,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/publications/page.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: '100%',
                                margin: '0 auto'
                            },
                            children: [
                                activeTab === 'publications' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        publications.map((paper, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Paper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                serialNumber: index + 1,
                                                title: paper.title,
                                                authors: paper.authors,
                                                journal: paper.journal,
                                                year: paper.year,
                                                doi: paper.doi,
                                                volume: paper.volume,
                                                pages: paper.pages
                                            }, paper.id, false, {
                                                fileName: "[project]/src/app/publications/page.tsx",
                                                lineNumber: 486,
                                                columnNumber: 19
                                            }, this)),
                                        publications.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'center',
                                                padding: '48px',
                                                backgroundColor: '#f9fafb',
                                                borderRadius: '8px',
                                                color: '#6b7280'
                                            },
                                            children: "No publications available yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/publications/page.tsx",
                                            lineNumber: 499,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/publications/page.tsx",
                                    lineNumber: 484,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'patents' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        patents.map((patent, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "patent-card",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "card-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "card-number",
                                                            style: {
                                                                backgroundColor: '#8b5cf6'
                                                            },
                                                            children: index + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                            lineNumber: 517,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "card-content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "card-title",
                                                                    children: patent.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "card-authors",
                                                                    children: [
                                                                        "Inventors: ",
                                                                        patent.inventors
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 524,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "tag-container",
                                                                    children: [
                                                                        patent.patent_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "tag",
                                                                            style: {
                                                                                backgroundColor: '#ddd6fe',
                                                                                color: '#7c3aed'
                                                                            },
                                                                            children: [
                                                                                "Patent: ",
                                                                                patent.patent_number
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 530,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        patent.application_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "tag",
                                                                            style: {
                                                                                backgroundColor: '#e0e7ff',
                                                                                color: '#5b21b6'
                                                                            },
                                                                            children: [
                                                                                "App: ",
                                                                                patent.application_number
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 538,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "tag",
                                                                            style: {
                                                                                backgroundColor: patent.status === 'Granted' ? '#dcfce7' : patent.status === 'Pending' ? '#fef3c7' : '#fecaca',
                                                                                color: patent.status === 'Granted' ? '#15803d' : patent.status === 'Pending' ? '#92400e' : '#dc2626'
                                                                            },
                                                                            children: patent.status
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 545,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 528,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "date-info",
                                                                    children: [
                                                                        patent.filing_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "Filed: ",
                                                                                new Date(patent.filing_date).toLocaleDateString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 555,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        patent.grant_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "Granted: ",
                                                                                new Date(patent.grant_date).toLocaleDateString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 558,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 553,
                                                                    columnNumber: 25
                                                                }, this),
                                                                patent.abstract && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        fontSize: '0.9rem',
                                                                        color: '#374151',
                                                                        lineHeight: 1.6,
                                                                        margin: 0
                                                                    },
                                                                    children: patent.abstract
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 563,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                            lineNumber: 520,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                    lineNumber: 516,
                                                    columnNumber: 21
                                                }, this)
                                            }, patent.id, false, {
                                                fileName: "[project]/src/app/publications/page.tsx",
                                                lineNumber: 515,
                                                columnNumber: 19
                                            }, this)),
                                        patents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'center',
                                                padding: '48px',
                                                backgroundColor: '#f9fafb',
                                                borderRadius: '8px',
                                                color: '#6b7280'
                                            },
                                            children: "No patents available yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/publications/page.tsx",
                                            lineNumber: 577,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/publications/page.tsx",
                                    lineNumber: 513,
                                    columnNumber: 15
                                }, this),
                                activeTab === 'conferences' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        conferences.map((conference, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "conference-card",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "card-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "card-number",
                                                            style: {
                                                                backgroundColor: '#f59e0b'
                                                            },
                                                            children: index + 1
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                            lineNumber: 595,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "card-content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "card-title",
                                                                    children: conference.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "card-authors",
                                                                    children: [
                                                                        "Authors: ",
                                                                        conference.authors
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 602,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "tag-container",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "tag",
                                                                            style: {
                                                                                backgroundColor: '#fed7aa',
                                                                                color: '#9a3412'
                                                                            },
                                                                            children: conference.year
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 607,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        conference.paper_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "tag",
                                                                            style: {
                                                                                backgroundColor: '#fef3c7',
                                                                                color: '#92400e'
                                                                            },
                                                                            children: conference.paper_type
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 614,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 606,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "conference-info",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "conference-name",
                                                                            children: conference.conference_name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 624,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        conference.location && conference.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "conference-location",
                                                                            children: [
                                                                                conference.location,
                                                                                " • ",
                                                                                new Date(conference.date).toLocaleDateString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 628,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 623,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "links-container",
                                                                    children: [
                                                                        conference.doi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: "https://doi.org/".concat(conference.doi),
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            className: "link",
                                                                            children: [
                                                                                "DOI: ",
                                                                                conference.doi
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 636,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        conference.pdf_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: conference.pdf_url,
                                                                            target: "_blank",
                                                                            rel: "noopener noreferrer",
                                                                            className: "link",
                                                                            children: "View PDF"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 646,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 634,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                            lineNumber: 598,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                    lineNumber: 594,
                                                    columnNumber: 21
                                                }, this)
                                            }, conference.id, false, {
                                                fileName: "[project]/src/app/publications/page.tsx",
                                                lineNumber: 593,
                                                columnNumber: 19
                                            }, this)),
                                        conferences.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                textAlign: 'center',
                                                padding: '48px',
                                                backgroundColor: '#f9fafb',
                                                borderRadius: '8px',
                                                color: '#6b7280'
                                            },
                                            children: "No conference presentations available yet."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/publications/page.tsx",
                                            lineNumber: 661,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/publications/page.tsx",
                                    lineNumber: 591,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/publications/page.tsx",
                            lineNumber: 479,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/publications/page.tsx",
                    lineNumber: 430,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/publications/page.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/publications/page.tsx",
                lineNumber: 677,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/publications/page.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
_s(Publications, "HBAvPwvEHLXS5vD3yF9OvUFbwhs=");
_c = Publications;
var _c;
__turbopack_context__.k.register(_c, "Publications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_2410034c._.js.map