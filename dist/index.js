'use strict';

var React = require('react');
var Head = require('next/head');
var mdxNav = require('@sup39/mdx-nav');

function Footer(_a) {
    var config = _a.config;
    var year = new Date().getFullYear();
    var _b = config.site, _c = _b.startYear, year0 = _c === void 0 ? year : _c, author = _b.author;
    var yearStr = year > year0 ? "".concat(year0, "-").concat(year) : year;
    return author ? React.createElement("footer", null, React.createElement("div", null,
        "Copyright \u00A9 ",
        yearStr,
        " ",
        author,
        " All rights reserved.")) : React.createElement(React.Fragment, null);
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function MetaInfo(_a) {
    var fields = _a.fields, data = _a.data;
    return React.createElement("div", null, fields.map(function (_a) {
        var label = _a.label, attr = _a.attr;
        var val = data[attr];
        return val == null ? null : React.createElement("div", { key: attr },
            React.createElement("span", null, label),
            React.createElement("span", null, val));
    }));
}

function translate(data, _a) {
    var _b, _c;
    var locale = _a.locale, _d = _a.defaultLocale, defaultLocale = _d === void 0 ? '' : _d;
    if (data == null)
        return data;
    if (typeof data !== 'object')
        return data;
    if (data instanceof Array)
        return data;
    return (_c = (_b = (locale == null ? undefined : data[locale])) !== null && _b !== void 0 ? _b : data[defaultLocale]) !== null && _c !== void 0 ? _c : Object.values(data)[0];
}

function translateNav(nav18, localeInfo) {
    return nav18.map(function (e) { return (__assign({ label: translate(e.label, localeInfo), path: e.path }, (e.children ? { children: translateNav(e.children, localeInfo) } : {}))); });
}

function MDXPageBase(_a) {
    var _b, _c, _d;
    var children = _a.children, router = _a.router, _e = _a.meta, meta18 = _e === void 0 ? {} : _e, headings = _a.headings, config = _a.config;
    var meta = Object.fromEntries(Object.entries(meta18).map(function (_a) {
        var k = _a[0], v = _a[1];
        return [
            k, translate(v, router),
        ];
    }));
    var title = meta.title, description = meta.description;
    var h1 = (_b = meta.h1) !== null && _b !== void 0 ? _b : title;
    var metaFields = (_d = (_c = config.metaFields) === null || _c === void 0 ? void 0 : _c.map(function (_a) {
        var label = _a.label, attr = _a.attr;
        return ({
            label: translate(label, router),
            attr: attr,
        });
    })) !== null && _d !== void 0 ? _d : [];
    var pathname = router.pathname;
    var navConfig = {
        site: __assign(__assign({}, config.site), { title: translate(config.site.title, router), subtitle: translate(config.site.subtitle, router) }),
        nav: translateNav(config.nav, router),
    };
    return React.createElement(React.Fragment, null,
        React.createElement(Head, null,
            title && React.createElement("title", null, title),
            description && React.createElement("meta", { name: "description", content: description })),
        React.createElement(mdxNav.Nav, { config: navConfig, pathname: pathname, headings: headings }),
        React.createElement("main", null,
            React.createElement("article", null,
                h1 ? React.createElement("h1", null, h1) : React.createElement(React.Fragment, null),
                React.createElement(MetaInfo, { fields: metaFields, data: meta }),
                children)),
        React.createElement(Footer, { config: config }));
}
var MDXPageFactory = function (config) {
    return function MDXPage(_a) {
        var children = _a.children, props = __rest(_a, ["children"]);
        return React.createElement(MDXPageBase, __assign({ config: config }, props), children);
    };
};

exports.Footer = Footer;
exports.MDXPageBase = MDXPageBase;
exports.MDXPageFactory = MDXPageFactory;
exports.MetaInfo = MetaInfo;
exports.translate = translate;
exports.translateNav = translateNav;
//# sourceMappingURL=index.js.map
