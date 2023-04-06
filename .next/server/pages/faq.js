"use strict";
(() => {
var exports = {};
exports.id = 746;
exports.ids = [746];
exports.modules = {

/***/ 2282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _src_screens_FAQScreen__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5274);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_src_screens_FAQScreen__WEBPACK_IMPORTED_MODULE_0__]);
_src_screens_FAQScreen__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/*import Head from 'next/head';
import Link from '../src/components/link';*/ 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_screens_FAQScreen__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z);
async function getStaticProps() {
    const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
    const faq = await fetch(FAQ_API_URL).then((response)=>{
        return response.json();
    }).then((response)=>{
        return response;
    });
    return {
        props: {
            qualquercoisa: "opa opa",
            faq
        }
    };
} /*export default function FaqPage({ faq }){
    console.log(faq)
    return(
        <div>
            <Head>
                <title>Faq: Alura-case</title>
            </Head>
            <h1>Alura-case: Faq page</h1>
            <Link href="/">
                Ir para a pagina Home.
            </Link>
            <div>
                <ul>
                    {faq.map(({answer, question}) => (
                        <li key={question}>
                            <article>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}*/ 

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5274:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FAQScreen)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_patterns_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9596);
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6048);
/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8235);
/* harmony import */ var _theme_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(667);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_patterns_Footer__WEBPACK_IMPORTED_MODULE_1__, _theme_components__WEBPACK_IMPORTED_MODULE_4__]);
([_components_patterns_Footer__WEBPACK_IMPORTED_MODULE_1__, _theme_components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// FAQScreen.js





function FAQScreen({ faq  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
        styleSheet: {
            backgroundColor: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutral["050"] */ .r.colors.neutral["050"]
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                as: "main",
                styleSheet: {
                    flex: 1,
                    maxWidth: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.xcontainer_xl */ .r.space.xcontainer_xl,
                    marginHorizontal: "auto",
                    paddingHorizontal: {
                        xs: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x4 */ .r.space.x4,
                        sm: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x6 */ .r.space.x6,
                        lg: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x8 */ .r.space.x8
                    },
                    paddingVertical: {
                        xs: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x16 */ .r.space.x16,
                        lg: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x20 */ .r.space.x20
                    }
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                    styleSheet: {
                        display: "grid",
                        gridTemplateColumns: {
                            lg: "repeat(3,minmax(0,1fr))"
                        },
                        gap: {
                            lg: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x8 */ .r.space.x8
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv, {
                                    as: "h2",
                                    styleSheet: {
                                        textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.typography.variants.heading2 */ .r.typography.variants.heading2,
                                        color: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutral[900] */ .r.colors.neutral[900]
                                    },
                                    children: "FAQ: Perguntas Frequentes"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv, {
                                    as: "p",
                                    styleSheet: {
                                        marginTop: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x4 */ .r.space.x4,
                                        textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.typography.variants.body1 */ .r.typography.variants.body1,
                                        color: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutral[500] */ .r.colors.neutral[500]
                                    },
                                    children: [
                                        "N\xe3o consegue encontrar a resposta que procura? entre em contato com nosso",
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            href: "mailto:contato@alura.com.br",
                                            styleSheet: {
                                                color: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.primary[400] */ .r.colors.primary[400],
                                                hover: {
                                                    color: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.primary[300] */ .r.colors.primary[300]
                                                }
                                            },
                                            children: "time de suporte ao consumidor"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv, {
                                    as: "p",
                                    styleSheet: {
                                        marginTop: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x4 */ .r.space.x4,
                                        textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.typography.variants.body1 */ .r.typography.variants.body1,
                                        color: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutral[500] */ .r.colors.neutral[500]
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Link__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        href: "/",
                                        styleSheet: {
                                            color: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.primary[400] */ .r.colors.primary[400],
                                            fontWeight: "500",
                                            hover: {
                                                color: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.primary[300] */ .r.colors.primary[300]
                                            }
                                        },
                                        children: "Voltar para home"
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                            styleSheet: {
                                marginTop: {
                                    xs: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x12 */ .r.space.x12,
                                    lg: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x0 */ .r.space.x0
                                },
                                gridColumn: {
                                    lg: "span 2 / span 2;"
                                }
                            },
                            children: [
                                faq.length === 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                                    styleSheet: {
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        borderTop: {
                                            xs: `${_theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.xpx */ .r.space.xpx} solid ${_theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutral[200] */ .r.colors.neutral[200]}`,
                                            sm: "none"
                                        },
                                        paddingTop: {
                                            xs: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x6 */ .r.space.x6,
                                            sm: 0
                                        },
                                        borderLeft: {
                                            sm: `${_theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.xpx */ .r.space.xpx} solid ${_theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutral[200] */ .r.colors.neutral[200]}`
                                        },
                                        paddingLeft: {
                                            sm: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x6 */ .r.space.x6
                                        },
                                        textAlign: "center",
                                        minHeight: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space["x1/1"] */ .r.space["x1/1"]
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv, {
                                            as: "h1",
                                            styleSheet: {
                                                textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.typography.variants.heading1 */ .r.typography.variants.heading1
                                            },
                                            children: "Nada por aqui"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv, {
                                            as: "p",
                                            styleSheet: {
                                                marginTop: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x1 */ .r.space.x1,
                                                textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.typography.variants.body1 */ .r.typography.variants.body1,
                                                color: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutral[500] */ .r.colors.neutral[500]
                                            },
                                            children: "Talvez ainda n\xe3o existam d\xfavidas frequentes."
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                                    as: "dl",
                                    children: faq.map((faq)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Box */ .xu, {
                                            styleSheet: {
                                                marginBottom: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x12 */ .r.space.x12
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv, {
                                                    as: "dt",
                                                    styleSheet: {
                                                        textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.typography.variants.heading4 */ .r.typography.variants.heading4,
                                                        color: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutral[900] */ .r.colors.neutral[900]
                                                    },
                                                    children: faq.question
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_theme_components__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .xv, {
                                                    as: "dd",
                                                    styleSheet: {
                                                        marginTop: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.space.x2 */ .r.space.x2,
                                                        textVariant: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.typography.variants.body1 */ .r.typography.variants.body1,
                                                        color: _theme_theme__WEBPACK_IMPORTED_MODULE_3__/* .theme.colors.neutral[500] */ .r.colors.neutral[500]
                                                    },
                                                    children: faq.answer
                                                })
                                            ]
                                        }, faq.question))
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_patterns_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
}
FAQScreen.defaultProps = {
    faq: []
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 4563:
/***/ ((module) => {

module.exports = import("@fortawesome/free-solid-svg-icons");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,235,47], () => (__webpack_exec__(2282)));
module.exports = __webpack_exports__;

})();