"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/category/route";
exports.ids = ["app/api/category/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategory%2Froute&page=%2Fapi%2Fcategory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategory%2Froute.js&appDir=%2FUsers%2Fenzo%2FDesktop%2FAU%2FWebAppDev%2FWebDev12-next-mongo%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fenzo%2FDesktop%2FAU%2FWebAppDev%2FWebDev12-next-mongo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategory%2Froute&page=%2Fapi%2Fcategory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategory%2Froute.js&appDir=%2FUsers%2Fenzo%2FDesktop%2FAU%2FWebAppDev%2FWebDev12-next-mongo%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fenzo%2FDesktop%2FAU%2FWebAppDev%2FWebDev12-next-mongo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_enzo_Desktop_AU_WebAppDev_WebDev12_next_mongo_app_api_category_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/category/route.js */ \"(rsc)/./app/api/category/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/category/route\",\n        pathname: \"/api/category\",\n        filename: \"route\",\n        bundlePath: \"app/api/category/route\"\n    },\n    resolvedPagePath: \"/Users/enzo/Desktop/AU/WebAppDev/WebDev12-next-mongo/app/api/category/route.js\",\n    nextConfigOutput,\n    userland: _Users_enzo_Desktop_AU_WebAppDev_WebDev12_next_mongo_app_api_category_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/category/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vbmV4dEAxNC4yLjdfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjFfX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZjYXRlZ29yeSUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGY2F0ZWdvcnklMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZjYXRlZ29yeSUyRnJvdXRlLmpzJmFwcERpcj0lMkZVc2VycyUyRmVuem8lMkZEZXNrdG9wJTJGQVUlMkZXZWJBcHBEZXYlMkZXZWJEZXYxMi1uZXh0LW1vbmdvJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRmVuem8lMkZEZXNrdG9wJTJGQVUlMkZXZWJBcHBEZXYlMkZXZWJEZXYxMi1uZXh0LW1vbmdvJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUM4QjtBQUMzRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlFQUFpRTtBQUN6RTtBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ3VIOztBQUV2SCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbW9uZ28vP2M4YjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2Vuem8vRGVza3RvcC9BVS9XZWJBcHBEZXYvV2ViRGV2MTItbmV4dC1tb25nby9hcHAvYXBpL2NhdGVnb3J5L3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9jYXRlZ29yeS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2NhdGVnb3J5XCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9jYXRlZ29yeS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9lbnpvL0Rlc2t0b3AvQVUvV2ViQXBwRGV2L1dlYkRldjEyLW5leHQtbW9uZ28vYXBwL2FwaS9jYXRlZ29yeS9yb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvY2F0ZWdvcnkvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategory%2Froute&page=%2Fapi%2Fcategory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategory%2Froute.js&appDir=%2FUsers%2Fenzo%2FDesktop%2FAU%2FWebAppDev%2FWebDev12-next-mongo%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fenzo%2FDesktop%2FAU%2FWebAppDev%2FWebDev12-next-mongo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/category/route.js":
/*!***********************************!*\
  !*** ./app/api/category/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _models_Category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Category */ \"(rsc)/./models/Category.js\");\n\nasync function GET() {\n    const categories = await _models_Category__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    return Response.json(categories);\n}\nasync function POST(request) {\n    const body = await request.json();\n    const category = new _models_Category__WEBPACK_IMPORTED_MODULE_0__[\"default\"](body);\n    await category.save();\n    return Response.json(category);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NhdGVnb3J5L3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUVsQyxlQUFlQztJQUNwQixNQUFNQyxhQUFhLE1BQU1GLHdEQUFRQSxDQUFDRyxJQUFJO0lBQ3RDLE9BQU9DLFNBQVNDLElBQUksQ0FBQ0g7QUFDdkI7QUFFTyxlQUFlSSxLQUFLQyxPQUFPO0lBQ2hDLE1BQU1DLE9BQU8sTUFBTUQsUUFBUUYsSUFBSTtJQUMvQixNQUFNSSxXQUFXLElBQUlULHdEQUFRQSxDQUFDUTtJQUM5QixNQUFNQyxTQUFTQyxJQUFJO0lBQ25CLE9BQU9OLFNBQVNDLElBQUksQ0FBQ0k7QUFDdkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LW1vbmdvLy4vYXBwL2FwaS9jYXRlZ29yeS9yb3V0ZS5qcz81NjI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXRlZ29yeSBmcm9tIFwiQC9tb2RlbHMvQ2F0ZWdvcnlcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGF3YWl0IENhdGVnb3J5LmZpbmQoKVxuICByZXR1cm4gUmVzcG9uc2UuanNvbihjYXRlZ29yaWVzKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXF1ZXN0KSB7XG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKVxuICBjb25zdCBjYXRlZ29yeSA9IG5ldyBDYXRlZ29yeShib2R5KVxuICBhd2FpdCBjYXRlZ29yeS5zYXZlKClcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oY2F0ZWdvcnkpXG59XG4iXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJHRVQiLCJjYXRlZ29yaWVzIiwiZmluZCIsIlJlc3BvbnNlIiwianNvbiIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsImNhdGVnb3J5Iiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/category/route.js\n");

/***/ }),

/***/ "(rsc)/./models/Category.js":
/*!****************************!*\
  !*** ./models/Category.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst categorySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        required: true\n    }\n});\nconst Category = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).category || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"category\", categorySchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvQ2F0ZWdvcnkuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGlCQUFpQixJQUFJRCx3REFBZSxDQUFDO0lBQ3pDRyxNQUFNO1FBQ0pDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtBQUNGO0FBRUEsTUFBTUMsV0FBV1Asd0RBQWUsQ0FBQ1MsUUFBUSxJQUFJVCxxREFBYyxDQUFDLFlBQVlDO0FBRXhFLGlFQUFlTSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1tb25nby8uL21vZGVscy9DYXRlZ29yeS5qcz80YzgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgY2F0ZWdvcnlTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgbmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICByZXF1aXJlZDogdHJ1ZVxuICB9LFxufSk7XG5cbmNvbnN0IENhdGVnb3J5ID0gbW9uZ29vc2UubW9kZWxzLmNhdGVnb3J5IHx8IG1vbmdvb3NlLm1vZGVsKFwiY2F0ZWdvcnlcIiwgY2F0ZWdvcnlTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBDYXRlZ29yeTtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImNhdGVnb3J5U2NoZW1hIiwiU2NoZW1hIiwibmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsIkNhdGVnb3J5IiwibW9kZWxzIiwiY2F0ZWdvcnkiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/Category.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1"], () => (__webpack_exec__("(rsc)/./node_modules/.pnpm/next@14.2.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fcategory%2Froute&page=%2Fapi%2Fcategory%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcategory%2Froute.js&appDir=%2FUsers%2Fenzo%2FDesktop%2FAU%2FWebAppDev%2FWebDev12-next-mongo%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fenzo%2FDesktop%2FAU%2FWebAppDev%2FWebDev12-next-mongo&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();