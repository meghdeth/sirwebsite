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
"[project]/src/app/group/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Group
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
            const groupResponse = await fetch('http://localhost:5001/api/group');
            if (groupResponse.ok) {
                const groupData = await groupResponse.json();
                setGroupMembers(groupData);
            }
            // Fetch PI data
            const [educationResponse, experienceResponse, awardsResponse] = await Promise.all([
                fetch('http://localhost:5001/api/pi/education'),
                fetch('http://localhost:5001/api/pi/experience'),
                fetch('http://localhost:5001/api/pi/awards')
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
                    lineNumber: 114,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/group/page.tsx",
                lineNumber: 113,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/group/page.tsx",
            lineNumber: 112,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minHeight: '100vh',
            backgroundColor: 'white'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    marginTop: '80px',
                    paddingTop: '20px',
                    paddingBottom: '80px'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: '90%',
                        paddingLeft: '5%',
                        paddingRight: '6%'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center',
                                marginBottom: '32px'
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
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        fontSize: '1.25rem',
                                        color: '#6b7280',
                                        marginLeft: '15%',
                                        marginRight: '15%'
                                    },
                                    children: "Meet the brilliant minds driving innovation in low-dimensional semiconductors research"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 140,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/group/page.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '48px',
                                borderBottom: '2px solid #e5e7eb'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('pi'),
                                    style: {
                                        padding: '16px 32px',
                                        fontSize: '1.125rem',
                                        fontWeight: 600,
                                        border: 'none',
                                        background: 'transparent',
                                        color: activeTab === 'pi' ? '#f97316' : '#6b7280',
                                        borderBottom: activeTab === 'pi' ? '3px solid #f97316' : '3px solid transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    },
                                    children: "Principal Investigator"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 157,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('team'),
                                    style: {
                                        padding: '16px 32px',
                                        fontSize: '1.125rem',
                                        fontWeight: 600,
                                        border: 'none',
                                        background: 'transparent',
                                        color: activeTab === 'team' ? '#f97316' : '#6b7280',
                                        borderBottom: activeTab === 'team' ? '3px solid #f97316' : '3px solid transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    },
                                    children: "Team"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab('alumni'),
                                    style: {
                                        padding: '16px 32px',
                                        fontSize: '1.125rem',
                                        fontWeight: 600,
                                        border: 'none',
                                        background: 'transparent',
                                        color: activeTab === 'alumni' ? '#f97316' : '#6b7280',
                                        borderBottom: activeTab === 'alumni' ? '3px solid #f97316' : '3px solid transparent',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    },
                                    children: "Alumni"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 189,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/group/page.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        activeTab === 'pi' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: 'white',
                                borderRadius: '16px',
                                padding: '48px',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                border: '1px solid #e5e7eb'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: window.innerWidth >= 768 ? '300px 1fr' : '1fr',
                                        gap: '48px',
                                        alignItems: 'flex-start'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                display: 'flex',
                                                justifyContent: 'center'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    width: '250px',
                                                    height: '300px',
                                                    borderRadius: '12px',
                                                    background: 'linear-gradient(135deg, #fff7ed 0%, #fed7aa 100%)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    border: '2px solid #f97316'
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        textAlign: 'center',
                                                        color: '#f97316'
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                fontSize: '4rem',
                                                                marginBottom: '16px'
                                                            },
                                                            children: "👨‍🔬"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 241,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                fontSize: '1rem',
                                                                fontWeight: 600
                                                            },
                                                            children: "PI Photo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 242,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 237,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 227,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/group/page.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: 0
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontSize: '2.5rem',
                                                        fontWeight: 700,
                                                        color: '#1f2937',
                                                        marginTop: 0,
                                                        marginBottom: '8px'
                                                    },
                                                    children: "Dr. Surendra B. Anantharaman"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 249,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '1.25rem',
                                                        color: '#f97316',
                                                        fontWeight: 600,
                                                        marginBottom: '24px'
                                                    },
                                                    children: "Assistant Professor"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 258,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        fontSize: '1rem',
                                                        color: '#6b7280',
                                                        marginBottom: '24px',
                                                        lineHeight: 1.6
                                                    },
                                                    children: [
                                                        "Department of Metallurgical and Materials Engineering",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 272,
                                                            columnNumber: 74
                                                        }, this),
                                                        "Indian Institute of Technology Madras",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 58
                                                        }, this),
                                                        "Chennai 600036, Tamil Nadu, India"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 266,
                                                    columnNumber: 19
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
                                                            lineNumber: 278,
                                                            columnNumber: 21
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
                                                                    lineNumber: 291,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        marginBottom: '8px'
                                                                    },
                                                                    children: "📞 +44-2257-4794"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/group/page.tsx",
                                                                    lineNumber: 292,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 286,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/group/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'grid',
                                        gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
                                        gap: '32px',
                                        marginTop: '32px'
                                    },
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
                                                            lineNumber: 315,
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
                                                                    lineNumber: 332,
                                                                    columnNumber: 27
                                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    marginBottom: '8px'
                                                                },
                                                                children: "No education information available"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/group/page.tsx",
                                                                lineNumber: 337,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 323,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 308,
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
                                                            lineNumber: 349,
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
                                                                            lineNumber: 370,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, exp.id, true, {
                                                                    fileName: "[project]/src/app/group/page.tsx",
                                                                    lineNumber: 366,
                                                                    columnNumber: 27
                                                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                style: {
                                                                    marginBottom: '8px'
                                                                },
                                                                children: "No experience information available"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/group/page.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/group/page.tsx",
                                            lineNumber: 306,
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
                                                        lineNumber: 392,
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
                                                                        lineNumber: 412,
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
                                                                        lineNumber: 417,
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
                                                                        lineNumber: 422,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                ]
                                                            }, award.id, true, {
                                                                fileName: "[project]/src/app/group/page.tsx",
                                                                lineNumber: 409,
                                                                columnNumber: 27
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            style: {
                                                                marginBottom: '8px'
                                                            },
                                                            children: "🏆 No awards information available"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/group/page.tsx",
                                                            lineNumber: 429,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/group/page.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 385,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/group/page.tsx",
                                            lineNumber: 384,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/group/page.tsx",
                                    lineNumber: 299,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/group/page.tsx",
                            lineNumber: 209,
                            columnNumber: 13
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
                                                    lineNumber: 472,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '2.5rem'
                                                    },
                                                    children: "👩‍🔬"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 482,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 459,
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
                                                lineNumber: 485,
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
                                                lineNumber: 493,
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
                                                lineNumber: 502,
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
                                                        lineNumber: 517,
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
                                                        lineNumber: 529,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 510,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, member.id, true, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 448,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/group/page.tsx",
                                lineNumber: 442,
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
                                        lineNumber: 552,
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
                                        lineNumber: 553,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Team member information will be displayed here once added."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 554,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/group/page.tsx",
                                lineNumber: 547,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/group/page.tsx",
                            lineNumber: 440,
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
                                                    lineNumber: 594,
                                                    columnNumber: 27
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    style: {
                                                        fontSize: '2.5rem'
                                                    },
                                                    children: "🎓"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/group/page.tsx",
                                                    lineNumber: 604,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 581,
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
                                                lineNumber: 607,
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
                                                lineNumber: 615,
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
                                                lineNumber: 624,
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
                                                        lineNumber: 639,
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
                                                        lineNumber: 651,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/group/page.tsx",
                                                lineNumber: 632,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, member.id, true, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 570,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/group/page.tsx",
                                lineNumber: 564,
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
                                        lineNumber: 674,
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
                                        lineNumber: 675,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "Alumni information will be displayed here once added."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/group/page.tsx",
                                        lineNumber: 676,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/group/page.tsx",
                                lineNumber: 669,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/group/page.tsx",
                            lineNumber: 562,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/group/page.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/group/page.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/group/page.tsx",
                lineNumber: 684,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/group/page.tsx",
        lineNumber: 121,
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

//# sourceMappingURL=src_e415a423._.js.map