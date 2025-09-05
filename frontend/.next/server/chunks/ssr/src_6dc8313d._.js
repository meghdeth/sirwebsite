module.exports = [
"[project]/src/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        style: {
            backgroundColor: '#1f2937',
            color: 'white',
            paddingTop: '32px',
            paddingBottom: '32px',
            textAlign: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                maxWidth: '100%',
                margin: '0 auto',
                paddingLeft: '3%',
                paddingRight: '3%'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/src/components/Paper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Paper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Paper({ serialNumber, title, authors, journal, year, doi, volume, pages }) {
    const responsiveStyles = `
    .paper-container {
      background: white;
      border-radius: 12px;
      padding: 24px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid #e5e7eb;
      margin-bottom: 24px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .paper-container:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
    
    .paper-header {
      display: flex;
      align-items: flex-start;
      gap: 16px;
    }
    
    .paper-number {
      font-size: 1.5rem;
      font-weight: 700;
      color: #f97316;
      min-width: 40px;
      margin-top: 2px;
    }
    
    .paper-content {
      flex: 1;
    }
    
    .paper-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin-bottom: 12px;
      line-height: 1.3;
      margin: 0;
      margin-bottom: 12px;
    }
    
    .paper-authors {
      font-size: 1rem;
      color: #6b7280;
      margin-bottom: 8px;
      font-style: italic;
    }
    
    .journal-info {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      flex-wrap: wrap;
    }
    
    .journal-name {
      font-size: 1rem;
      color: #374151;
      font-weight: 500;
    }
    
    .journal-details {
      font-size: 1rem;
      color: #6b7280;
    }
    
    .doi-section {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .doi-label {
      font-size: 0.875rem;
      color: #9ca3af;
      font-weight: 500;
    }
    
    .doi-link {
      font-size: 0.875rem;
      color: #f97316;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      cursor: pointer;
    }
    
    .doi-link:hover {
      color: #ea580c;
      text-decoration: underline;
    }
    
    @media (max-width: 767px) {
      .paper-container {
        padding: 20px;
      }
      
      .paper-header {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }
      
      .paper-number {
        font-size: 1.25rem;
        margin-top: 0;
      }
      
      .paper-content {
        width: 100%;
      }
      
      .paper-title {
        font-size: 1.125rem;
        line-height: 1.4;
      }
      
      .paper-authors {
        font-size: 0.9rem;
      }
      
      .journal-info {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      
      .journal-name {
        font-size: 0.9rem;
      }
      
      .journal-details {
        font-size: 0.85rem;
      }
      
      .doi-section {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
      }
      
      .doi-label {
        font-size: 0.8rem;
      }
      
      .doi-link {
        font-size: 0.8rem;
        word-break: break-all;
      }
    }
    
    @media (max-width: 480px) {
      .paper-container {
        padding: 16px;
      }
      
      .paper-title {
        font-size: 1rem;
      }
      
      .paper-authors {
        font-size: 0.85rem;
      }
      
      .journal-name {
        font-size: 0.85rem;
      }
      
      .journal-details {
        font-size: 0.8rem;
      }
    }
  `;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveStyles
            }, void 0, false, {
                fileName: "[project]/src/components/Paper.tsx",
                lineNumber: 202,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "paper-container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "paper-header",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "paper-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "paper-title",
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Paper.tsx",
                                    lineNumber: 209,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "paper-authors",
                                    children: authors
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Paper.tsx",
                                    lineNumber: 213,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "journal-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "journal-name",
                                            children: journal
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Paper.tsx",
                                            lineNumber: 218,
                                            columnNumber: 15
                                        }, this),
                                        volume && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        pages && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "doi-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "doi-label",
                                            children: "DOI:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Paper.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `https://doi.org/${doi}`,
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
}),
"[project]/src/app/publications/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Publications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Paper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Paper.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Publications() {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('publications');
    const [publications, setPublications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [patents, setPatents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [conferences, setConferences] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add responsive styles
    const responsiveStyles = `
    .publications-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    .publications-header {
      text-align: center;
      margin-bottom: 48px;
    }
    
    .publications-title {
      font-size: 3rem;
      font-weight: bold;
      color: #1f2937;
      margin-bottom: 16px;
    }
    
    .publications-subtitle {
      font-size: 1.25rem;
      color: #6b7280;
      margin-left: 5%;
      margin-right: 5%;
    }
    
    .tab-navigation {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
      border-bottom: 1px solid #e5e7eb;
      gap: 8px;
    }
    
    .tab-button {
      border: none;
      padding: 12px 24px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      border-radius: 8px 8px 0 0;
      transition: all 0.3s ease;
      white-space: nowrap;
    }
    
    .patent-card, .conference-card {
      background-color: white;
      border: 2px solid #e5e7eb;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 20px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    }
    
    .card-header {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      margin-bottom: 16px;
    }
    
    .card-number {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.875rem;
      font-weight: 600;
      min-width: 40px;
      text-align: center;
      color: white;
    }
    
    .card-content {
      flex: 1;
    }
    
    .card-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: #1f2937;
      margin: 0 0 8px 0;
      line-height: 1.4;
    }
    
    .card-authors {
      font-size: 1rem;
      color: #6b7280;
      margin: 0 0 12px 0;
      font-style: italic;
    }
    
    .tag-container {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      margin-bottom: 12px;
    }
    
    .tag {
      padding: 4px 8px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 500;
    }
    
    .date-info {
      display: flex;
      gap: 16px;
      margin-bottom: 12px;
      font-size: 0.9rem;
      color: #6b7280;
    }
    
    .conference-info {
      margin-bottom: 12px;
    }
    
    .conference-name {
      font-size: 1rem;
      color: #374151;
      font-weight: 600;
      margin: 0 0 4px 0;
    }
    
    .conference-location {
      font-size: 0.9rem;
      color: #6b7280;
      margin: 0;
    }
    
    .links-container {
      display: flex;
      gap: 16px;
      align-items: center;
    }
    
    .link {
      color: #f59e0b;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.9rem;
    }
    
    @media (max-width: 1023px) {
      .publications-container {
        padding: 0 16px;
      }
      
      .publications-title {
        font-size: 2.5rem;
      }
      
      .publications-subtitle {
        font-size: 1.125rem;
        margin-left: 3%;
        margin-right: 3%;
      }
      
      .tab-navigation {
        gap: 4px;
      }
      
      .tab-button {
        padding: 10px 16px;
        font-size: 0.9rem;
      }
      
      .patent-card, .conference-card {
        padding: 20px;
      }
      
      .card-header {
        gap: 12px;
      }
      
      .card-title {
        font-size: 1.125rem;
      }
    }
    
    @media (max-width: 767px) {
      .publications-container {
        padding: 0 12px;
      }
      
      .publications-title {
        font-size: 2rem;
        line-height: 1.2;
      }
      
      .publications-subtitle {
        font-size: 1rem;
        margin-left: 2%;
        margin-right: 2%;
      }
      
      .tab-navigation {
        flex-direction: column;
        gap: 8px;
        align-items: stretch;
      }
      
      .tab-button {
        padding: 12px 16px;
        font-size: 0.9rem;
        border-radius: 8px;
        text-align: center;
      }
      
      .patent-card, .conference-card {
        padding: 16px;
      }
      
      .card-header {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }
      
      .card-number {
        align-self: flex-start;
      }
      
      .card-content {
        width: 100%;
      }
      
      .card-title {
        font-size: 1rem;
        line-height: 1.3;
      }
      
      .card-authors {
        font-size: 0.9rem;
      }
      
      .tag-container {
        gap: 8px;
      }
      
      .tag {
        font-size: 0.75rem;
        padding: 3px 6px;
      }
      
      .date-info {
        flex-direction: column;
        gap: 4px;
        font-size: 0.8rem;
      }
      
      .conference-name {
        font-size: 0.9rem;
      }
      
      .conference-location {
        font-size: 0.8rem;
      }
      
      .links-container {
        flex-direction: column;
        gap: 8px;
        align-items: flex-start;
      }
      
      .link {
        font-size: 0.8rem;
      }
    }
    
    @media (max-width: 480px) {
      .publications-container {
        padding: 0 8px;
      }
      
      .publications-title {
        font-size: 1.75rem;
      }
      
      .publications-subtitle {
        font-size: 0.9rem;
      }
      
      .tab-button {
        padding: 10px 12px;
        font-size: 0.8rem;
      }
      
      .patent-card, .conference-card {
        padding: 12px;
      }
      
      .card-title {
        font-size: 0.95rem;
      }
      
      .card-authors {
        font-size: 0.85rem;
      }
    }
  `;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchAllData();
    }, []);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            backgroundColor: '#f9fafb'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: responsiveStyles
            }, void 0, false, {
                fileName: "[project]/src/app/publications/page.tsx",
                lineNumber: 425,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    paddingTop: '80px',
                    paddingBottom: '40px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "publications-container",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "publications-header",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "publications-title",
                                    children: "Publications & Patents"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/publications/page.tsx",
                                    lineNumber: 433,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tab-navigation",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: '100%',
                                margin: '0 auto'
                            },
                            children: [
                                activeTab === 'publications' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        publications.map((paper, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Paper$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                        publications.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                activeTab === 'patents' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        patents.map((patent, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "patent-card",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "card-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "card-content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "card-title",
                                                                    children: patent.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 521,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "tag-container",
                                                                    children: [
                                                                        patent.patent_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                        patent.application_number && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "date-info",
                                                                    children: [
                                                                        patent.filing_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            children: [
                                                                                "Filed: ",
                                                                                new Date(patent.filing_date).toLocaleDateString()
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 555,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        patent.grant_date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                patent.abstract && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                        patents.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                activeTab === 'conferences' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        conferences.map((conference, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "conference-card",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "card-header",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "card-content",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "card-title",
                                                                    children: conference.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/publications/page.tsx",
                                                                    lineNumber: 599,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "tag-container",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                        conference.paper_type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "conference-info",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "conference-name",
                                                                            children: conference.conference_name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/publications/page.tsx",
                                                                            lineNumber: 624,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        conference.location && conference.date && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "links-container",
                                                                    children: [
                                                                        conference.doi && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                            href: `https://doi.org/${conference.doi}`,
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
                                                                        conference.pdf_url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                        conferences.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
}),
];

//# sourceMappingURL=src_6dc8313d._.js.map