'use strict';

var React = require('react');
var Head = require('next/head');
var Link = require('next/link');

function Footer(_a) {
    var config = _a.config;
    var year = new Date().getFullYear();
    var _b = config.site, _c = _b.startYear, year0 = _c === void 0 ? year : _c, author = _b.author;
    var yearStr = year > year0 ? "".concat(year0, "-").concat(year) : year;
    return React.createElement("footer", null, author && React.createElement("div", null,
        "Copyright \u00A9 ",
        yearStr,
        " ",
        author,
        " All rights reserved."));
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

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __rest$1(s, e) {
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

function NavEntry(_a) {
    var _b = _a.entry, label = _b.label, link = _b.link, children = _b.children, dir = _a.dir, here = _a.here, childrenJSX = _a.children;
    var href = dir + link;
    var isHere = href.replace(/\/$/, '') === here; // remove trailing slash
    var isRHere = isHere || here.startsWith(href); // here or is children
    var _c = React.useState(isRHere), toggle = _c[0], setToggle = _c[1];
    var entryCls = 'nav-entry' + (isHere ? ' nav-here' : '');
    return (children === null || children === void 0 ? void 0 : children.length) ? React.createElement("div", { className: 'nav-dir' + (toggle ? ' nav-fold-open' : '') },
        React.createElement(React.Fragment, null,
            React.createElement("div", { className: entryCls },
                React.createElement(Link, { href: href }, label),
                React.createElement("svg", { viewBox: "0 0 8 8", onClick: function () { return setToggle(function (e) { return !e; }); } },
                    React.createElement("polyline", { points: "6 3 4 5 2 3" }))),
            isHere ? childrenJSX : React.createElement(React.Fragment, null),
            React.createElement("div", { className: 'nav-dir-child' }, children.map(function (entry) { return React.createElement(NavEntry, { key: entry.link, entry: entry, dir: href, here: here }, childrenJSX); })))) : React.createElement("div", { className: entryCls },
        React.createElement(Link, { href: href }, label));
}

function NavBase(_a) {
    var children = _a.children, headings = _a.headings, pathname = _a.pathname, entries = _a.entries, className = _a.className;
    var headingsJSX = React.createElement("ul", { className: "" }, headings.map(function (_a) {
        var label = _a.label, id = _a.id;
        return React.createElement("li", { key: id },
            React.createElement("a", { href: '#' + id }, label));
    }));
    return React.createElement("nav", { className: className },
        children,
        React.createElement("div", { className: "nav-root" },
            entries.map(function (entry) { return React.createElement(NavEntry, { key: entry.link, entry: entry, dir: '/', here: pathname }); }),
            headingsJSX));
}

function NavHeader(_a) {
    var _b, _c, _d, _e, _f;
    var config = _a.config, onToggleFold = _a.onToggleFold;
    var title = config.title, subtitle = config.subtitle, icon0 = config.icon;
    var icon = typeof icon0 === 'string' ? { href: icon0 } : icon0;
    return React.createElement("header", null,
        React.createElement(Link, { href: "/", id: "icon-link" },
            (icon === null || icon === void 0 ? void 0 : icon.href) && React.createElement("img", { className: "icon", src: icon === null || icon === void 0 ? void 0 : icon.href, alt: (_b = icon === null || icon === void 0 ? void 0 : icon.alt) !== null && _b !== void 0 ? _b : 'icon', width: (_d = (_c = icon === null || icon === void 0 ? void 0 : icon.width) !== null && _c !== void 0 ? _c : icon === null || icon === void 0 ? void 0 : icon.size) !== null && _d !== void 0 ? _d : 96, height: (_f = (_e = icon === null || icon === void 0 ? void 0 : icon.height) !== null && _e !== void 0 ? _e : icon === null || icon === void 0 ? void 0 : icon.size) !== null && _f !== void 0 ? _f : 96 }),
            React.createElement("div", { className: "icon-text" },
                React.createElement("div", null, title),
                React.createElement("div", null, subtitle))),
        React.createElement("div", { className: "menu-toggle", onClick: onToggleFold }));
}

function Nav(_a) {
    var config = _a.config, children = _a.children, props = __rest(_a, ["config", "children"]);
    var _b = React.useState(false), navFold = _b[0], setNavFold = _b[1];
    return (React.createElement(NavBase, __assign({ className: navFold ? 'open' : '', entries: config.nav }, props),
        React.createElement(NavHeader, { config: config.site, onToggleFold: function () { return setNavFold(function (e) { return !e; }); } }),
        children));
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
    return nav18.map(function (e) { return (__assign$1({ label: translate(e.label, localeInfo), link: e.link }, (e.children ? { children: translateNav(e.children, localeInfo) } : {}))); });
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
        site: __assign$1(__assign$1({}, config.site), { title: translate(config.site.title, router), subtitle: translate(config.site.subtitle, router) }),
        nav: translateNav(config.nav, router),
    };
    return React.createElement(React.Fragment, null,
        React.createElement(Head, null,
            title && React.createElement("title", null, title),
            description && React.createElement("meta", { name: "description", content: description })),
        React.createElement(Nav, { config: navConfig, pathname: pathname, headings: headings }),
        React.createElement("main", null,
            React.createElement("article", null,
                h1 ? React.createElement("h1", null, h1) : React.createElement(React.Fragment, null),
                React.createElement(MetaInfo, { fields: metaFields, data: meta }),
                children)),
        React.createElement(Footer, { config: config }));
}
var MDXPageFactory = function (config) {
    return function MDXPage(_a) {
        var children = _a.children, props = __rest$1(_a, ["children"]);
        return React.createElement(MDXPageBase, __assign$1({ config: config }, props), children);
    };
};

exports.Footer = Footer;
exports.MDXPageBase = MDXPageBase;
exports.MDXPageFactory = MDXPageFactory;
exports.MetaInfo = MetaInfo;
exports.translate = translate;
exports.translateNav = translateNav;
//# sourceMappingURL=index.js.map
