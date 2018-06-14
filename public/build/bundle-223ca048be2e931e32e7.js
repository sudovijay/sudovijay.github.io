!(function(e) {
    function t(t) {
        for (
            var r, i, l = t[0], c = t[1], s = t[2], u = 0, f = [];
            u < l.length;
            u++
        )
            (i = l[u]), a[i] && f.push(a[i][0]), (a[i] = 0);
        for (r in c)
            Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
        for (p && p(t); f.length; ) f.shift()();
        return o.push.apply(o, s || []), n();
    }
    function n() {
        for (var e, t = 0; t < o.length; t++) {
            for (var n = o[t], r = !0, l = 1; l < n.length; l++) {
                var c = n[l];
                0 !== a[c] && (r = !1);
            }
            r && (o.splice(t--, 1), (e = i((i.s = n[0]))));
        }
        return e;
    }
    var r = {},
        a = { 3: 0 },
        o = [];
    function i(t) {
        if (r[t]) return r[t].exports;
        var n = (r[t] = { i: t, l: !1, exports: {} });
        return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
    }
    (i.e = function(e) {
        var t = [],
            n = a[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var r = new Promise(function(t, r) {
                    n = a[e] = [t, r];
                });
                t.push((n[2] = r));
                var o,
                    l = document.getElementsByTagName("head")[0],
                    c = document.createElement("script");
                (c.charset = "utf-8"),
                    (c.timeout = 120),
                    i.nc && c.setAttribute("nonce", i.nc),
                    (c.src = (function(e) {
                        return (
                            i.p + "" + ({}[e] || e) + "-223ca048be2e931e32e7.js"
                        );
                    })(e)),
                    (o = function(t) {
                        (c.onerror = c.onload = null), clearTimeout(s);
                        var n = a[e];
                        if (0 !== n) {
                            if (n) {
                                var r =
                                        t &&
                                        ("load" === t.type
                                            ? "missing"
                                            : t.type),
                                    o = t && t.target && t.target.src,
                                    i = new Error(
                                        "Loading chunk " +
                                            e +
                                            " failed.\n(" +
                                            r +
                                            ": " +
                                            o +
                                            ")"
                                    );
                                (i.type = r), (i.request = o), n[1](i);
                            }
                            a[e] = void 0;
                        }
                    });
                var s = setTimeout(function() {
                    o({ type: "timeout", target: c });
                }, 12e4);
                (c.onerror = c.onload = o), l.appendChild(c);
            }
        return Promise.all(t);
    }),
        (i.m = e),
        (i.c = r),
        (i.d = function(e, t, n) {
            i.o(e, t) ||
                Object.defineProperty(e, t, { enumerable: !0, get: n });
        }),
        (i.r = function(e) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (i.t = function(e, t) {
            if ((1 & t && (e = i(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (
                (i.r(n),
                Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }),
                2 & t && "string" != typeof e)
            )
                for (var r in e)
                    i.d(
                        n,
                        r,
                        function(t) {
                            return e[t];
                        }.bind(null, r)
                    );
            return n;
        }),
        (i.n = function(e) {
            var t =
                e && e.__esModule
                    ? function() {
                          return e.default;
                      }
                    : function() {
                          return e;
                      };
            return i.d(t, "a", t), t;
        }),
        (i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (i.p = "/build/"),
        (i.oe = function(e) {
            throw (console.error(e), e);
        });
    var l = (window.webpackJsonp = window.webpackJsonp || []),
        c = l.push.bind(l);
    (l.push = t), (l = l.slice());
    for (var s = 0; s < l.length; s++) t(l[s]);
    var p = c;
    o.push([112, 2]), n();
})({
    112: function(e, t, n) {
        n(51);
    },
    15: function(e, t) {
        e.exports =
            "data:image/png;base64,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";
    },
    27: function(e, t, n) {
        "use strict";
        var r = n(0),
            a = n.n(r),
            o = n(3),
            i = n(7),
            l = n(15),
            c = n.n(l),
            s =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    }
                    return e;
                };
        var p = function(e) {
                e.styles;
                var t = (function(e, t) {
                    var n = {};
                    for (var r in e)
                        t.indexOf(r) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, r) &&
                                (n[r] = e[r]));
                    return n;
                })(e, ["styles"]);
                return a.a.createElement(
                    "svg",
                    s(
                        {
                            width: "54",
                            height: "41",
                            viewBox: "0 0 54 41",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        t
                    ),
                    a.a.createElement("title", null, "home"),
                    a.a.createElement("path", {
                        d:
                            "M45.75 25.677v13.125c0 1.218-1.004 2.198-2.251 2.198H32.623c-.619 0-1.125-.495-1.125-1.1V29.644c0-.605-.507-1.1-1.125-1.1h-6.751c-.619 0-1.125.495-1.125 1.1V39.9c0 .604-.507 1.099-1.125 1.099H10.496c-1.247 0-2.25-.98-2.25-2.198V25.677c0-.33.15-.641.412-.852l17.627-14.178a1.164 1.164 0 0 1 1.434 0l17.627 14.178c.253.211.403.522.403.852zm7.837-5.578l-7.838-6.31V1.104c0-.605-.506-1.1-1.125-1.1h-5.25c-.62 0-1.126.495-1.126 1.1v6.649l-8.391-6.75a4.578 4.578 0 0 0-5.72 0L.408 20.099a1.085 1.085 0 0 0-.15 1.548l2.39 2.84a1.147 1.147 0 0 0 1.585.146l22.053-17.74a1.164 1.164 0 0 1 1.434 0l22.052 17.74c.479.385 1.191.32 1.585-.147l2.39-2.839a1.085 1.085 0 0 0-.159-1.548z",
                        fill: "#FFF",
                        fillRule: "nonzero"
                    })
                );
            },
            u =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    }
                    return e;
                };
        var f = function(e) {
                e.styles;
                var t = (function(e, t) {
                    var n = {};
                    for (var r in e)
                        t.indexOf(r) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, r) &&
                                (n[r] = e[r]));
                    return n;
                })(e, ["styles"]);
                return a.a.createElement(
                    "svg",
                    u(
                        {
                            width: "64",
                            height: "43",
                            viewBox: "0 0 64 43",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        t
                    ),
                    a.a.createElement("title", null, "list-alt"),
                    a.a.createElement("path", {
                        d:
                            "M58 0H6C2.686 0 0 2.063 0 4.607v33.786C0 40.937 2.686 43 6 43h52c3.314 0 6-2.063 6-4.607V4.607C64 2.063 61.314 0 58 0zm-.75 38.393H6.75c-.414 0-.75-.258-.75-.576V5.183c0-.318.336-.576.75-.576h50.5c.414 0 .75.258.75.576v32.634c0 .318-.336.576-.75.576zM52 29.563v2.303c0 .636-.672 1.152-1.5 1.152h-25c-.828 0-1.5-.516-1.5-1.152v-2.303c0-.637.672-1.152 1.5-1.152h25c.828 0 1.5.515 1.5 1.151zm0-9.215v2.304c0 .636-.672 1.152-1.5 1.152h-25c-.828 0-1.5-.516-1.5-1.152v-2.304c0-.636.672-1.152 1.5-1.152h25c.828 0 1.5.516 1.5 1.152zm0-9.214v2.303c0 .637-.672 1.152-1.5 1.152h-25c-.828 0-1.5-.515-1.5-1.152v-2.303c0-.636.672-1.152 1.5-1.152h25c.828 0 1.5.516 1.5 1.152zm-31.5 1.152c0 1.908-2.015 3.455-4.5 3.455s-4.5-1.547-4.5-3.455c0-1.909 2.015-3.456 4.5-3.456s4.5 1.547 4.5 3.456zm0 9.214c0 1.908-2.015 3.455-4.5 3.455s-4.5-1.547-4.5-3.455c0-1.908 2.015-3.455 4.5-3.455s4.5 1.547 4.5 3.455zm0 9.214c0 1.909-2.015 3.456-4.5 3.456s-4.5-1.547-4.5-3.456c0-1.908 2.015-3.455 4.5-3.455s4.5 1.547 4.5 3.455z",
                        fill: "#A8A8A8",
                        fillRule: "nonzero"
                    })
                );
            },
            d =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    }
                    return e;
                };
        var h = function(e) {
            e.styles;
            var t = (function(e, t) {
                var n = {};
                for (var r in e)
                    t.indexOf(r) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, r) &&
                            (n[r] = e[r]));
                return n;
            })(e, ["styles"]);
            return a.a.createElement(
                "svg",
                d(
                    {
                        width: "48",
                        height: "42",
                        viewBox: "0 0 48 42",
                        xmlns: "http://www.w3.org/2000/svg"
                    },
                    t
                ),
                a.a.createElement("title", null, "Shape"),
                a.a.createElement("path", {
                    d:
                        "M30 24h18v13.5a4.5 4.5 0 0 1-4.5 4.5h-39A4.5 4.5 0 0 1 0 37.5V24h18v1.875c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V24zm18-10.5V21H0v-7.5A4.5 4.5 0 0 1 4.5 9H12V4.5A4.5 4.5 0 0 1 16.5 0h15A4.5 4.5 0 0 1 36 4.5V9h7.5a4.5 4.5 0 0 1 4.5 4.5zM30 6H18v3h12V6z",
                    fill: "#A8A8A8",
                    fillRule: "nonzero"
                })
            );
        };
        var m = o.default.header.withConfig({
                displayName: "Header__HeaderWrapper"
            })([
                "position:relative;top:0;left:0;right:0;background:rgba(255,255,255,0.8);padding:0px 0px;display:flex;justify-content:space-between;"
            ]),
            g = o.default.div.withConfig({ displayName: "Header__Brand" })([
                "padding:10px 30px;a{display:flex;justify-content:center;text-decoration:none;align-items:center;img{margin:0 15px;user-select:none;}h2{color:#555;margin:0;font-size:22px;font-weight:700;line-height:45px;letter-spacing:1px;}}"
            ]),
            y = o.default.div.withConfig({ displayName: "Header__Nav" })([
                "display:flex;justify-content:center;a{display:flex;justify-content:center;align-items:center;text-decoration:none;color:#a8a8a8;font-weight:700;padding:0 20px;font-size:16px;text-transform:uppercase;&:nth-child(3){margin-right:0;}span{margin-left:10px;display:none;user-select:none;}path{fill:#a8a8a8;}&:hover{background:#aad29d;color:#fff;path{fill:#fff;}}&.active{background:#aad29d;color:#fff;path{fill:#fff;}span{display:inline-block;}}}"
            ]),
            v = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(this, e.apply(this, arguments))
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, e),
                    (t.prototype.render = function() {
                        var e = this.props.path;
                        return a.a.createElement(
                            m,
                            null,
                            a.a.createElement(
                                g,
                                null,
                                a.a.createElement(
                                    i.b,
                                    { to: "/" },
                                    a.a.createElement("img", {
                                        src: c.a,
                                        alt: "dev icon",
                                        width: "35"
                                    }),
                                    a.a.createElement("h2", null, "Vijay Singh")
                                )
                            ),
                            a.a.createElement(
                                y,
                                null,
                                a.a.createElement(
                                    i.b,
                                    {
                                        to: "/",
                                        className: "/" === e ? "active" : null
                                    },
                                    a.a.createElement(p, { width: 30 }),
                                    a.a.createElement("span", null, "Home")
                                ),
                                a.a.createElement(
                                    i.b,
                                    {
                                        to: "/skills",
                                        className:
                                            "/skills" === e ? "active" : null
                                    },
                                    a.a.createElement(f, { width: 30 }),
                                    a.a.createElement("span", null, "Skills")
                                ),
                                a.a.createElement(
                                    i.b,
                                    {
                                        to: "/work",
                                        className:
                                            "/work" === e ? "active" : null
                                    },
                                    a.a.createElement(h, { width: 25 }),
                                    a.a.createElement("span", null, "Work")
                                )
                            )
                        );
                    }),
                    t
                );
            })(r.Component);
        t.a = v;
    },
    28: function(e, t, n) {
        "use strict";
        var r,
            a = n(0),
            o = n.n(a),
            i = n(3),
            l = (((r = ["\n    background: #6cae67;\n"]).raw = [
                "\n    background: #6cae67;\n"
            ]),
            r);
        var c = i.default.div.withConfig({
                displayName: "ColorSwitcher__FloatElement"
            })(["position:fixed;right:30px;bottom:30px;z-index:11;"]),
            s = i.default.div.withConfig({
                displayName: "ColorSwitcher__Card"
            })([
                "background:rgba(234,234,234,0.7);border-radius:50% 50%;width:100px;height:100px;display:flex;justify-content:center;flex-direction:column;align-items:center;"
            ]),
            p = i.default.div.withConfig({
                displayName: "ColorSwitcher__ChildOne"
            })(["background:#aad29d;width:50px;height:25px;cursor:pointer;"]),
            u = p.extend(l),
            f = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(this, e.apply(this, arguments))
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, e),
                    (t.prototype.render = function() {
                        return o.a.createElement(
                            c,
                            null,
                            o.a.createElement(
                                s,
                                null,
                                o.a.createElement(p, null),
                                o.a.createElement(u, null)
                            )
                        );
                    }),
                    t
                );
            })(a.Component);
        t.a = f;
    },
    39: function(e, t) {
        e.exports =
            "data:image/png;base64,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";
    },
    40: function(e, t) {
        e.exports =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAAAXNSR0IArs4c6QAAC51JREFUSA2tV3l0E+e1/82ifR1tlm3ZkuUVG+IYxwTjACYQCiHQkDQ0hLBkJW1e05eXkNf29Zzn9J2X9qSnlOS0TZrSJN3C5pfAaVoSl8VA2QIGgje8L5ItyZJHsvZtpPfJBEqa9J+e/s4ZzTff3Jnfvd937++OAIC2LPnTPNuDnc8BKgO5/gJeN9cZj1SvfXm8/vF3Piq4ez4xoIAsOVroLxh/foJq+TubJ/OsJfu/8q2X386rsNOGuc8s4crnvJ31HxMDofDnn71+JaRpVsVKbBajZdOCspp3nlVZF+Zvbq8vemTRFlQ2qb7smdzca8V3zq+p/XRHi72++IaNX6HTP/DAYy+aK5u/yVjveeu9SKird0yh+h5qHsqg58ANu9lzlkTZW7rIOCNCaswzOlgslt1dVXhbw/nbmu6SVZRskHmiH/PDR92fe+izi+dtDd+9d/6KHVPJ2NlWR2c/mc72+t2TD5vL76uVmxYw2rlPbaK50gINJZNw8gpTgp4Te++1D8MvPFamspTz1KHRZuWKBc3fa7pz5ZNPvb9zV53a6LZrtGtGXCPtZybC+wK9/WfigXPxLyMHgxm/33slE/f/5RVTQ/b7olJ2vcQoZYGNeYI4n0kHpno5+5oVEq1tawrMljjPq5+t/78+o037Fu8R6fvdE1e0dNYcmva6Xuk5ve8HtqWJQDL8tcY03/Y/R1pe/4fExJurIZ/jj1ODHc+oSp+WSrTLI8BtVJZZX0lrl7U6Lv+SDToPftLz64sri1b87FlaV/JwZuLoyWnWyM2z6xfMmwYbPu+qhPRE1WCMPrXz3zjr/qMdiSZpxVi1pqAsl3DFa+7QZOTRuPPAhlgu+p2wyBo0NimjEuKLnGdj9Wr9Aosh/7s9TOw/hfryyaaMInH6dMfWzY7jH7Ga4u9wqpolmxhRVkQ7Wh+LjLzWuXYDmEpLYPmjS6WLV83TvJZHxxj3DLvUlaW3DM2fPCEZLhAr+HgcJr2RyTe/mg56PiK8reQQ6qxzNumysoahZOjofvPi4xvcp3r7kzMjU/zU0t6zJ599BN6c7SxoiSxcLZXLHo4FPReC6iZfwbrDlablwwavMzIqUdAF1vk2Rl5kgMCkIShQXF8t3swZkvMEJkbZbouWKC3WBlWeLpfN7O2Auqm28QW93b4yplcYfaLsfe/Y78lrc/T9TCOTr5GpuTnEjpTodbBTfb/vZhS6nzC6WpNYKi2SiFgmGh8zVC9ZHzKbLqwOyjkgzUJhjIGNxKFgxdAq5FSgXFi7s/y3/hcOXNw20t3YQ14X2widHvX1maRn4lqpQ7vvkudE4YKktmGNRp2aToZ3R6n49A3i3PmmF2RM6hwZYBtrWVj7XHMF//I3lrYy0vwSUSyYhC7DQ0hMQxtXQtFWCZndgPCySwmHo/8l93hwz70/hHcewF344eHj/pmQxO/n11X/8pmBlpZt0spRrfm9tv1Tf5ycjOZIb4Bk/U0kyYgy1NrsBqV+8dw8D8OZ1SI+mkQylkRULENhvgEKZwaJMAVfLAuFSi6pnGvdySpCtbu+EX7139/w9UUnJ100S9cp5NJcMGhpeTdXhqO58d/jVnLoylpUGqV8qyrLWBk+5UuxZfkQBsGSgk2liP6lRGBFAqClIdVnQEmykJsMzDyj9nGR0s+9X6D4r662S7/J1zMnywSv529kT8vRvFau0ymlCpVKIlWoxULURTbzFqR0YpFCZfJonW1tjHntdseYCwbdACg2AZYSIRbJgFXSUN8TgliVhkzJIJukQclVqFrErNcYo6rJkp//R/mj2CvbNGCpe/HHjXJWZJeKUEqLUUBTlIGlGS1DU9pEVM7fuuezbuxshIwvXrnbyr36SDAeQu2id2AyXAASYtBkDURkMRUqCioJSRLyVkgVkErTgCyFKCVG67Hb23a2P34O2uK5+VoskothkkiphJjNBBkGQRFFdpBlkvEYpm6NXE7Y4xNVupKFNeGvJPkhjJ6qwoh4JTTNAagVfcgmpKCzIqTjFFIUBSqbRTIcg1dsRm+gFqfGG9ATuHOlrVS2UohOTWsZ7gqb4PfFpn2DXt7rCvl4tz8wyZMg4lf7T4Znyb9VVmdcb6x+/tS1T06n0iFbRTWjd460QalUwdtNHJCvxZwmgTgwjGyKAk1JkRZY5FJKKk7i2PBcvNu5FZE4gzr9FaysvYDI+Mm+t/ecf+7weXeuDL8UTG72qxprWbXK9P2xrENV16xsNlhNxUJ2GCadE6lJK7x98xAKlEOTL0BnnoAIAsSslCy7GHKzElxREuWyS9igextfL/kdqgqvoCqPN3PiRJ5WlvnrhYHUl7bqWfJtxfpwIkidGSjyMAtW5G2OZxgRmyLqaXBBoQzB7y3DjKsUyYgFSj0DY6EbMlkCjFQOWqOAqhCw29LQyBlEA2FQQZKgAs3oxHRlYCbrXLaEi734fMHiUk3S0345MdsDckHPkn/g8aT2TQ9NNCxcsrGhSbE4HvBDQ5PoRBnIjB4ouSCifhuCrnLEQ1bIOQ04Ow/GQPqUmnxLiNTk0IPS5CMZj2BqeBLhYAj5yiwdCqbN5oV5dzSuKtnePxS7+ucjfK6vz2KWnIyo5sInLRXFd/2oqEzg5FQv1Flyi5QXJc5Cb54EZ+SRihYiMl1FVqAKYrkNcqsARh2YtSMaDJr2QuD9GBwMwjGdhGcmjYv9sU98YM6ZLVq+81P/EQP41OvrKu8rFMdJ8hM89BAYedqwukS/8YlUVEZZijuJjgSJ2EqRJVouEVMwmD3Is01AItMhG54DUaQIUqEc0jzyGScheiKMwHPVj2uXonC5AhhwxgZ7HKk3rzpjP33/oO94WZ6i/cpY75jUmbf8iS11b2TSlHg222tqminGFFjLpaP02CfVyNesQkHtQQjJGLK0FiwtJQ6QFa4YBVf9B4QnAsiMLofMWwjhrw9igjg56ZuCZ4JH/7j7WiDs35tJZT+8ODwzeKQDM7kAt+y4mjthfXm6v2sgvH8mIhzORU4Vif3WZcu4/1VJGKWnay5iHhskOhH0dgdkTJwQKyBTK0BxCrAk42WWcchLXER0kjjz/hT+vM+HE+0Bd/94ZPfo1Pius4enP2jtSYwMu5CYZSQ/LzXJFm6togzHMuE+2i070znYfY0lOoHnHpWuMOtVJshPoWK+HuMX70fXsQfAio2obvwYEhVPJFRJND2XXFLSCklvjxzDsHcvzvOC71pY3+oa1/3OFeJ66R19r8Rvn2ixTHZ/03loQ+dn5PS3H635hYKJ6Ip7vI2rdnW7cvPsHdvBbivJXyemaSpDhzD3rkOQkUgnuu7H4MmvEemsQenydkjycklKZDQdhO+yG2ePjwhd13wfO2aiP0ppFV1tXTP+3AvLHA/yjIibltFyYvw3BCKy1ivuUOE0y5Bkug4Wh+6tMr1UvFjEdJDCo6FURVC/4gAs1jS8w19HsG8xZhS1MN3eDT52EJfOnsh+2jF21OuN/Xp8Uji+53zaC8yQ74DryPgGXqWNNSL1+OTsXt+YjoW1u9YcPpVGN9mrz8Dm6+yrg6OrNYJ1DJxqlKiXAWouA+PqjxAXIkTh1iHab8Tel8PZC8PCST/ku9PKSFvPdNjf0QHSaD+P4SPfuZX05s2nWo5qh59484Wh/G7HsD/x8+0db6XYO++ILQv2lWCI3YzGtXvAaTwQazUkCzkomctwBo5l23pj545/yv5qeKTwT4lwhb8D7V8gvcnyDwYJRLnixoWPw6wddZ7e+y4xC7DG0kviQu4iRi7egz6tHY2PnARlH8LMyETm1IdDl8+dc741HcsedOrD/JnO3Kb/cyDd5doHh97YFktE3WfbDxJpJGW2fb32q08/tOC3jGe7Ohq4nyglLwyG3uzuHd2z2zc6dsBrjHgPHCCd5F+AFvKn9L+v/8MkNUbIcxPcDsuqu5fYv+0fqxTv/0Pq4F8GBg5s9J12k3s3Eyln/K/G/wN1aNIBYJZgCAAAAABJRU5ErkJggg==";
    },
    41: function(e, t, n) {
        e.exports = n.p + "images/vijay.ef6c1bc9.jpg";
    },
    42: function(e, t, n) {
        e.exports = n.p + "images/beer.0c3c1b00.png";
    },
    51: function(e, t, n) {
        "use strict";
        n.r(t);
        var r = n(0),
            a = n.n(r),
            o = n(23),
            i = n(7),
            l = n(26),
            c = n.n(l),
            s = n(46),
            p = n.n(s),
            u = function(e) {
                var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null,
                    n = 0.1;
                t && t();
                var r = setInterval(function() {
                    n >= 1
                        ? clearInterval(r)
                        : ((e.style.opacity = n), (n += 0.1));
                }, 50);
            },
            f = function(e) {
                var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : null,
                    n = 1,
                    r = setInterval(function() {
                        if (n <= 0.1) return clearInterval(r), void (t && t());
                        (e.style.opacity = n), (n -= 0.1);
                    }, 50);
            };
        function d(e, t) {
            if (!e)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                );
            return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
        }
        var h = (function(e) {
                function t() {
                    var n, r;
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    for (
                        var o = arguments.length, i = Array(o), l = 0;
                        l < o;
                        l++
                    )
                        i[l] = arguments[l];
                    return (
                        (n = r = d(this, e.call.apply(e, [this].concat(i)))),
                        (r.state = { interval: 6e4 }),
                        (r.updateCanvas = function() {
                            clearTimeout(r.resizeInterval),
                                (r.resizeInterval = setTimeout(function() {
                                    r.changeCanvas();
                                }, 100));
                        }),
                        (r.generatePattern = function() {
                            return p()({
                                width: window.innerWidth,
                                height:
                                    document.body.offsetHeight ||
                                    window.innerHeight,
                                cell_size: 150
                            });
                        }),
                        (r.canvasRef = a.a.createRef()),
                        (r.changeCanvas = function() {
                            f(
                                r.canvasRef.current,
                                u.bind(
                                    null,
                                    r.canvasRef.current,
                                    r.renderCanvas
                                )
                            );
                        }),
                        (r.renderCanvas = function() {
                            (r.pattern = r.generatePattern()),
                                r.pattern.canvas(r.canvasRef.current);
                        }),
                        d(r, n)
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, e),
                    (t.prototype.componentDidMount = function() {
                        var e = this;
                        this.renderCanvas(),
                            (this.interval = setInterval(function() {
                                e.changeCanvas();
                            }, this.state.interval)),
                            window.addEventListener(
                                "resize",
                                this.updateCanvas
                            );
                    }),
                    (t.prototype.componentWillUnmount = function() {
                        clearInterval(this.interval),
                            window.removeEventListener(
                                "resize",
                                this.updateCanvas
                            );
                    }),
                    (t.prototype.render = function() {
                        return a.a.createElement(
                            a.a.Fragment,
                            null,
                            a.a.createElement("canvas", {
                                ref: this.canvasRef,
                                style: {
                                    position: "absolute",
                                    zIndex: -1,
                                    transition: "opacity 0.8s ease",
                                    top: 0,
                                    bottom: 0,
                                    right: 0,
                                    left: 0
                                }
                            }),
                            this.props.children
                        );
                    }),
                    t
                );
            })(r.Component),
            m = n(3),
            g = n(5),
            y = n(43),
            v =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    }
                    return e;
                };
        var w =
            Object.assign ||
            function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                        Object.prototype.hasOwnProperty.call(n, r) &&
                            (e[r] = n[r]);
                }
                return e;
            };
        var x = function(e) {
                e.styles;
                var t = (function(e, t) {
                    var n = {};
                    for (var r in e)
                        t.indexOf(r) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, r) &&
                                (n[r] = e[r]));
                    return n;
                })(e, ["styles"]);
                return a.a.createElement(
                    "svg",
                    w(
                        {
                            width: "54",
                            height: "55",
                            viewBox: "0 0 54 55",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        t
                    ),
                    a.a.createElement("title", null, "Shape"),
                    a.a.createElement("path", {
                        d:
                            "M37.235 27.5l15.352-15.636c1.884-1.919 1.884-5.03 0-6.95L49.175 1.44a4.764 4.764 0 0 0-6.823 0L27 17.075 11.648 1.439a4.764 4.764 0 0 0-6.823 0L1.413 4.914c-1.884 1.919-1.884 5.03 0 6.95L16.765 27.5 1.413 43.136c-1.884 1.919-1.884 5.03 0 6.95l3.412 3.475a4.764 4.764 0 0 0 6.823 0L27 37.925l15.352 15.636a4.764 4.764 0 0 0 6.823 0l3.412-3.475c1.884-1.919 1.884-5.03 0-6.95L37.235 27.5z",
                        fill: "#4A90E2",
                        fillRule: "nonzero"
                    })
                );
            },
            b = n(42),
            E = n.n(b),
            C = n(15),
            A = n.n(C),
            j =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    }
                    return e;
                };
        var O = function(e) {
                e.styles;
                var t = (function(e, t) {
                    var n = {};
                    for (var r in e)
                        t.indexOf(r) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, r) &&
                                (n[r] = e[r]));
                    return n;
                })(e, ["styles"]);
                return a.a.createElement(
                    "svg",
                    j(
                        {
                            width: "66",
                            height: "82",
                            viewBox: "0 0 66 82",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        t
                    ),
                    a.a.createElement("title", null, "angle-double-down"),
                    a.a.createElement("path", {
                        d:
                            "M29.495 41.535L1.454 13.228c-1.939-1.957-1.939-5.12 0-7.057l4.66-4.704c1.938-1.956 5.072-1.956 6.99 0l19.875 20.066L52.856 1.467c1.938-1.956 5.072-1.956 6.99 0l4.7 4.684c1.939 1.956 1.939 5.12 0 7.056l-28.04 28.307a4.902 4.902 0 0 1-7.011.021zm7.01 39l28.041-28.293c1.939-1.956 1.939-5.118 0-7.053l-4.66-4.701c-1.938-1.956-5.072-1.956-6.99 0L33 60.522 13.124 40.467c-1.938-1.956-5.072-1.956-6.99 0l-4.68 4.701c-1.939 1.956-1.939 5.118 0 7.053l28.04 28.294a4.903 4.903 0 0 0 7.011.02z",
                        fill: "#7A7A7A",
                        fillRule: "nonzero"
                    })
                );
            },
            k = H(
                [
                    "\n    box-shadow: 0px 0px 3px 0px #adadad;\n\n    .card_heading {\n        display: block;\n        text-align: center;\n        background: #f4f4f4;\n    }\n\n    h1 {\n        line-height: 125px;\n        font-size: 40px;\n        margin: 0;\n        position: relative;\n        top: -3px;\n        font-weight: 700;\n        color: #555;\n    }\n"
                ],
                [
                    "\n    box-shadow: 0px 0px 3px 0px #adadad;\n\n    .card_heading {\n        display: block;\n        text-align: center;\n        background: #f4f4f4;\n    }\n\n    h1 {\n        line-height: 125px;\n        font-size: 40px;\n        margin: 0;\n        position: relative;\n        top: -3px;\n        font-weight: 700;\n        color: #555;\n    }\n"
                ]
            ),
            z = H(
                [
                    "\n    background: rgba(255, 255, 255, 0.7);\n    text-align: center;\n    flex-direction: column;\n    width: 600px;\n    padding: 30px 0;\n    position: relative;\n\n    p {\n        display: block;\n        margin: 0;\n        line-height: 45px;\n        color: #555;\n        font-weight: 700;\n        font-size: 22px;\n    }\n\n    input {\n        width: 40px;\n        margin: 0 8px;\n        padding: 2px 10px;\n        border: 1px solid #ddd;\n        color: #555;\n    }\n"
                ],
                [
                    "\n    background: rgba(255, 255, 255, 0.7);\n    text-align: center;\n    flex-direction: column;\n    width: 600px;\n    padding: 30px 0;\n    position: relative;\n\n    p {\n        display: block;\n        margin: 0;\n        line-height: 45px;\n        color: #555;\n        font-weight: 700;\n        font-size: 22px;\n    }\n\n    input {\n        width: 40px;\n        margin: 0 8px;\n        padding: 2px 10px;\n        border: 1px solid #ddd;\n        color: #555;\n    }\n"
                ]
            );
        function B(e, t) {
            if (!e)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                );
            return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
        }
        function H(e, t) {
            return (e.raw = t), e;
        }
        var F = m.default.main.withConfig({ displayName: "HomeCard__Card" })([
                "display:flex;justify-content:center;align-items:center;position:absolute;flex-direction:column;bottom:0;top:-20%;left:0;right:0;"
            ]),
            V = m.default.div.withConfig({
                displayName: "HomeCard__CardCommon"
            })([
                "width:500px;background:#fff;display:flex;align-items:center;z-index:1;"
            ]),
            S = V.extend(k),
            P = m.default.div.withConfig({
                displayName: "HomeCard__CardContent"
            })([
                "width:600px;background:rgba(255,255,255,0.39);padding-top:80px;text-align:center;display:flex;justify-content:center;margin-top:-60px;z-index:0;padding-bottom:35px;h2{margin:0;line-height:40px;font-size:34px;color:#555;margin-left:10px;font-weight:700;margin-right:10px;span{color:#4a90e2;}}"
            ]),
            R = V.extend(z),
            L = m.default.button.withConfig({
                displayName: "HomeCard__Button"
            })([
                "border:1px solid #fff;background:#6cae67;color:#fff;padding:8px 25px;cursor:pointer;font-weight:700;font-size:18px;margin-top:20px;margin-bottom:5px;box-shadow:0px 0px 3px 0px #6cae67;text-transform:uppercase;letter-spacing:2px;"
            ]),
            J = Object(m.keyframes)(["0%,100%{bottom:50px}50%{bottom:30px}"]),
            I = m.default.div.withConfig({ displayName: "HomeCard__ScrollEL" })(
                [
                    "position:absolute;bottom:50px;display:flex;justify-content:center;text-align:center;background:rgba(255,255,255,0.6);width:88px;line-height:50px;border-radius:50% 50%;border:2px solid #fff;right:0;left:0;padding-left:2px;transition:all 800ms ease;margin:0 auto;animation:",
                    " 4s infinite;cursor:pointer;&:hover{background:rgba(255,255,255,0.3);}"
                ],
                J
            ),
            T = m.default.img.withConfig({ displayName: "HomeCard__EmojiImg" })(
                ["width:40px;height:40px;user-select:none;"]
            ),
            Y = m.default.div.withConfig({
                displayName: "HomeCard__CloseButton"
            })(["position:absolute;right:15px;top:-4px;cursor:pointer;"]),
            U = Object(m.default)(function(e) {
                e.styles;
                var t = (function(e, t) {
                    var n = {};
                    for (var r in e)
                        t.indexOf(r) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, r) &&
                                (n[r] = e[r]));
                    return n;
                })(e, ["styles"]);
                return a.a.createElement(
                    "svg",
                    v(
                        {
                            width: "235",
                            height: "192",
                            viewBox: "0 0 235 192",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        t
                    ),
                    a.a.createElement("title", null, "sliders-h"),
                    a.a.createElement(
                        "defs",
                        null,
                        a.a.createElement(
                            "filter",
                            {
                                x: "-7.3%",
                                y: "-27.1%",
                                width: "114.6%",
                                height: "157.8%",
                                filterUnits: "objectBoundingBox",
                                id: "a"
                            },
                            a.a.createElement("feOffset", {
                                dy: "4",
                                in: "SourceAlpha",
                                result: "shadowOffsetOuter1"
                            }),
                            a.a.createElement("feGaussianBlur", {
                                stdDeviation: "21",
                                in: "shadowOffsetOuter1",
                                result: "shadowBlurOuter1"
                            }),
                            a.a.createElement("feColorMatrix", {
                                values:
                                    "0 0 0 0 0.677508503 0 0 0 0 0.677508503 0 0 0 0 0.677508503 0 0 0 0.5 0",
                                in: "shadowBlurOuter1",
                                result: "shadowMatrixOuter1"
                            }),
                            a.a.createElement(
                                "feMerge",
                                null,
                                a.a.createElement("feMergeNode", {
                                    in: "shadowMatrixOuter1"
                                }),
                                a.a.createElement("feMergeNode", {
                                    in: "SourceGraphic"
                                })
                            )
                        )
                    ),
                    a.a.createElement("path", {
                        d:
                            "M150.156 88H48.437v-4c0-2.2-2.18-4-4.843-4h-9.688c-2.664 0-4.843 1.8-4.843 4v4H4.843C2.18 88 0 89.8 0 92v8c0 2.2 2.18 4 4.844 4h24.218v4c0 2.2 2.18 4 4.844 4h9.688c2.664 0 4.843-1.8 4.843-4v-4h101.72c2.663 0 4.843-1.8 4.843-4v-8c0-2.2-2.18-4-4.844-4zm0-40h-24.219v-4c0-2.2-2.18-4-4.843-4h-9.688c-2.664 0-4.844 1.8-4.844 4v4H4.844C2.18 48 0 49.8 0 52v8c0 2.2 2.18 4 4.844 4h101.719v4c0 2.2 2.18 4 4.843 4h9.688c2.664 0 4.844-1.8 4.844-4v-4h24.218c2.664 0 4.844-1.8 4.844-4v-8c0-2.2-2.18-4-4.844-4zm0-40H87.187V4c0-2.2-2.18-4-4.843-4h-9.688c-2.664 0-4.844 1.8-4.844 4v4H4.844C2.18 8 0 9.8 0 12v8c0 2.2 2.18 4 4.844 4h62.968v4c0 2.2 2.18 4 4.844 4h9.688c2.664 0 4.844-1.8 4.844-4v-4h62.968c2.664 0 4.844-1.8 4.844-4v-8c0-2.2-2.18-4-4.844-4z",
                        transform: "translate(40 36)",
                        filter: "url(#a)",
                        fill: "#4A90E2",
                        fillRule: "nonzero"
                    })
                );
            }).withConfig({ displayName: "HomeCard__SliderImg" })([
                "width:160px;height:90px;"
            ]),
            X = (function(e) {
                function t() {
                    var n, r;
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    for (
                        var a = arguments.length, o = Array(a), i = 0;
                        i < a;
                        i++
                    )
                        o[i] = arguments[i];
                    return (
                        (n = r = B(this, e.call.apply(e, [this].concat(o)))),
                        (r.state = { flip: !1, interval: 60 }),
                        (r.handleKeyDown = function(e) {
                            (39 !== e.keyCode && 40 !== e.keyCode) ||
                                r.props.updateSeen();
                        }),
                        (r.handleClickFlip = function() {
                            r.setState(function(e) {
                                return { flip: !e.flip };
                            });
                        }),
                        (r.handleChangeInterval = function(e) {
                            r.setState({
                                interval: parseInt(e.target.value, 10) || ""
                            });
                        }),
                        B(r, n)
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, e),
                    (t.prototype.componentDidMount = function() {
                        window.addEventListener("keydown", this.handleKeyDown);
                    }),
                    (t.prototype.componentWillUnmount = function() {
                        window.removeEventListener(
                            "keydown",
                            this.handleKeyDown
                        );
                    }),
                    (t.prototype.cardBack = function() {
                        return a.a.createElement(
                            F,
                            { key: 2 },
                            a.a.createElement(
                                R,
                                null,
                                a.a.createElement(
                                    Y,
                                    { onClick: this.handleClickFlip },
                                    a.a.createElement(x, { width: 22 })
                                ),
                                a.a.createElement(
                                    "p",
                                    null,
                                    "Website uses dynamic color palette"
                                ),
                                a.a.createElement(
                                    "p",
                                    null,
                                    "Change colors every",
                                    a.a.createElement("input", {
                                        type: "number",
                                        onChange: this.handleChangeInterval,
                                        value: this.state.interval
                                    }),
                                    "Seconds"
                                ),
                                a.a.createElement(L, null, "Change Color")
                            )
                        );
                    }),
                    (t.prototype.cardFront = function() {
                        return a.a.createElement(
                            F,
                            { key: 1 },
                            a.a.createElement(
                                S,
                                null,
                                a.a.createElement(
                                    g.Col,
                                    {
                                        onClick: this.handleClickFlip,
                                        sm: 4,
                                        style: {
                                            paddingLeft: "5px",
                                            cursor: "pointer"
                                        }
                                    },
                                    a.a.createElement(U, { width: 180 })
                                ),
                                a.a.createElement(
                                    g.Col,
                                    {
                                        style: {
                                            paddingLeft: 0,
                                            paddingRight: 0
                                        }
                                    },
                                    a.a.createElement(
                                        "div",
                                        { className: "card_heading" },
                                        a.a.createElement(
                                            "h1",
                                            null,
                                            "Hi, ",
                                            "I'm",
                                            " Vijay!"
                                        )
                                    )
                                )
                            ),
                            a.a.createElement(
                                P,
                                null,
                                a.a.createElement(T, {
                                    src: E.a,
                                    alt: "Beer Png Icon"
                                }),
                                a.a.createElement(
                                    "h2",
                                    null,
                                    "/ (?=Absolute) (",
                                    a.a.createElement("span", null, "dev"),
                                    "|",
                                    a.a.createElement("span", null, "vella"),
                                    ") /"
                                ),
                                a.a.createElement(T, {
                                    src: A.a,
                                    alt: "Dev Png Icon"
                                })
                            )
                        );
                    }),
                    (t.prototype.render = function() {
                        var e = this.state.flip
                                ? this.cardBack()
                                : this.cardFront(),
                            t = this.props.updateSeen;
                        return a.a.createElement(
                            y.CSSTransitionGroup,
                            {
                                transitionName: "trans",
                                transitionEnterTimeout: 800,
                                transitionLeaveTimeout: 800
                            },
                            e,
                            a.a.createElement(
                                I,
                                { onClick: t },
                                a.a.createElement(O, { width: 30 })
                            )
                        );
                    }),
                    t
                );
            })(r.Component),
            Z = n(27),
            K = n(28),
            G =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    }
                    return e;
                };
        var M = function(e) {
                e.styles;
                var t = (function(e, t) {
                    var n = {};
                    for (var r in e)
                        t.indexOf(r) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, r) &&
                                (n[r] = e[r]));
                    return n;
                })(e, ["styles"]);
                return a.a.createElement(
                    "svg",
                    G(
                        {
                            width: "86",
                            height: "69",
                            viewBox: "0 0 86 69",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        t
                    ),
                    a.a.createElement("title", null, "Shape"),
                    a.a.createElement("path", {
                        d:
                            "M33.343 47.562c0 3.755-1.953 9.9-6.576 9.9-4.622 0-6.575-6.145-6.575-9.9 0-3.755 1.953-9.9 6.575-9.9 4.623 0 6.576 6.145 6.576 9.9zM86 38.488c0 5.732-.573 11.805-3.135 17.07-6.79 13.763-25.46 13.44-38.826 13.44-13.58 0-33.36.485-40.42-13.44C1.003 50.347 0 44.22 0 38.488c0-7.529 2.49-14.644 7.435-20.412a28.201 28.201 0 0 1-1.38-8.768c0-3.864.879-5.804 2.617-9.308 8.116 0 13.312 1.617 19.493 6.469 5.196-1.24 10.535-1.797 15.892-1.797 4.838 0 9.71.52 14.405 1.653C64.554 1.527 69.75 0 77.776 0c1.756 3.504 2.616 5.444 2.616 9.308 0 2.946-.466 5.875-1.38 8.66C83.94 23.79 86 30.96 86 38.488zm-11.52 9.074c0-7.888-4.784-14.842-13.17-14.842-3.385 0-6.628.611-10.032 1.078-2.67.413-5.34.575-8.08.575-2.724 0-5.394-.162-8.081-.575-3.35-.467-6.63-1.078-10.034-1.078-8.385 0-13.168 6.954-13.168 14.842 0 15.776 14.405 18.202 26.946 18.202h8.636c12.596 0 26.983-2.408 26.983-18.202zm-14.8-9.9c-4.622 0-6.575 6.145-6.575 9.9 0 3.755 1.953 9.9 6.575 9.9 4.623 0 6.576-6.145 6.576-9.9 0-3.755-1.953-9.9-6.576-9.9z",
                        fill: "#FFF",
                        fillRule: "nonzero"
                    })
                );
            },
            q =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    }
                    return e;
                };
        var Q = function(e) {
                e.styles;
                var t = (function(e, t) {
                    var n = {};
                    for (var r in e)
                        t.indexOf(r) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, r) &&
                                (n[r] = e[r]));
                    return n;
                })(e, ["styles"]);
                return a.a.createElement(
                    "svg",
                    q(
                        {
                            width: "89",
                            height: "73",
                            viewBox: "0 0 89 73",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        t
                    ),
                    a.a.createElement("title", null, "Shape"),
                    a.a.createElement("path", {
                        d:
                            "M79.852 18.193c.056.798.056 1.597.056 2.395C79.908 44.941 61.555 73 28.01 73 17.676 73 8.076 69.977 0 64.73c1.468.172 2.88.229 4.405.229a36.303 36.303 0 0 0 22.645-7.87c-8.019-.172-14.74-5.476-17.054-12.776 1.129.171 2.258.285 3.444.285 1.638 0 3.276-.228 4.8-.627C9.884 42.26 3.615 34.846 3.615 25.892v-.228a18.234 18.234 0 0 0 8.245 2.338 18.456 18.456 0 0 1-8.132-15.341c0-3.422.903-6.559 2.485-9.296 8.979 11.178 22.476 18.478 37.61 19.276 15.135.799-.452-2.794-.452-4.22C43.37 8.27 51.503 0 61.611 0c5.252 0 9.996 2.224 13.327 5.817A35.699 35.699 0 0 0 86.515 1.37a18.34 18.34 0 0 1-8.019 10.151c3.671-.399 7.229-1.426 10.504-2.851a39.424 39.424 0 0 1-9.148 9.524z",
                        fill: "#FFF",
                        fillRule: "nonzero"
                    })
                );
            },
            W = n(41),
            N = n.n(W),
            D =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    }
                    return e;
                };
        var _ = function(e) {
                e.styles;
                var t = (function(e, t) {
                    var n = {};
                    for (var r in e)
                        t.indexOf(r) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, r) &&
                                (n[r] = e[r]));
                    return n;
                })(e, ["styles"]);
                return a.a.createElement(
                    "svg",
                    D(
                        {
                            width: "29",
                            height: "38",
                            viewBox: "0 0 29 38",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        t
                    ),
                    a.a.createElement("title", null, "map-marker-alt copy"),
                    a.a.createElement("path", {
                        d:
                            "M13.01 37.233C2.037 21.6 0 19.995 0 14.25 0 6.38 6.492 0 14.5 0S29 6.38 29 14.25c0 5.745-2.037 7.35-13.01 22.983-.72 1.023-2.26 1.023-2.98 0zm1.49-17.046c3.337 0 6.042-2.658 6.042-5.937 0-3.28-2.705-5.938-6.042-5.938-3.337 0-6.042 2.659-6.042 5.938 0 3.28 2.705 5.937 6.042 5.937z",
                        fill: "#6CAE67",
                        fillRule: "nonzero"
                    })
                );
            },
            $ = n(40),
            ee = n.n($),
            te = n(39),
            ne = n.n(te),
            re =
                Object.assign ||
                function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) &&
                                (e[r] = n[r]);
                    }
                    return e;
                };
        var ae,
            oe = function(e) {
                e.styles;
                var t = (function(e, t) {
                    var n = {};
                    for (var r in e)
                        t.indexOf(r) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, r) &&
                                (n[r] = e[r]));
                    return n;
                })(e, ["styles"]);
                return a.a.createElement(
                    "svg",
                    re(
                        {
                            width: "42",
                            height: "42",
                            viewBox: "0 0 42 42",
                            xmlns: "http://www.w3.org/2000/svg"
                        },
                        t
                    ),
                    a.a.createElement("title", null, "at"),
                    a.a.createElement("path", {
                        d:
                            "M21 0C9.394 0 0 9.392 0 21c0 11.606 9.392 21 21 21 4.078 0 8.073-1.197 11.466-3.406a2.035 2.035 0 0 0 .47-2.995l-.862-1.053a2.027 2.027 0 0 0-2.656-.434A15.623 15.623 0 0 1 21 36.58C12.409 36.58 5.42 29.59 5.42 21S12.408 5.42 21 5.42c8.48 0 15.58 4.878 15.58 13.548 0 3.284-1.785 6.752-4.925 7.087-1.47-.039-1.432-1.089-1.141-2.543l1.984-10.255a2.032 2.032 0 0 0-1.995-2.418h-3.809c-.582 0-1.072.437-1.137 1.015l-.001.008c-1.245-1.516-3.425-1.844-5.078-1.844-6.316 0-11.672 5.27-11.672 12.825 0 5.53 3.115 8.965 8.13 8.965 2.284 0 4.857-1.324 6.35-3.246.806 2.888 3.439 2.888 5.987 2.888C38.495 31.45 42 25.386 42 18.968 42 7.422 32.687 0 21 0zm-1.836 25.778c-1.884 0-3.054-1.323-3.054-3.452 0-3.81 2.606-6.159 4.965-6.159 1.887 0 3.014 1.291 3.014 3.453 0 3.815-2.868 6.158-4.925 6.158z",
                        fill: "#6CAE67",
                        fillRule: "nonzero"
                    })
                );
            },
            ie = (((ae = [
                "\n    width: 180px;\n    height: 180px;\n    top: -120px;\n    background: rgba(255, 255, 255, 0.8);\n    border: 4px solid #f1f1f1;\n    overflow: hidden;\n\n    img {\n        margin-left: 20px;\n    }\n"
            ]).raw = [
                "\n    width: 180px;\n    height: 180px;\n    top: -120px;\n    background: rgba(255, 255, 255, 0.8);\n    border: 4px solid #f1f1f1;\n    overflow: hidden;\n\n    img {\n        margin-left: 20px;\n    }\n"
            ]),
            ae);
        var le = m.default.main.withConfig({
                displayName: "HomeContent__ContentWrapper"
            })([
                "background:rgba(244,244,244,0.75);padding:20px;margin-top:10%;"
            ]),
            ce = m.default.div.withConfig({
                displayName: "HomeContent__ContentHead"
            })(["text-align:center;"]),
            se = m.default.div.withConfig({
                displayName: "HomeContent__IconWrap"
            })([
                "width:120px;height:120px;border-radius:50% 50%;background:#6cae67;display:flex;align-items:center;justify-content:center;margin:0 auto;border:2px solid #f1f1f1;position:relative;top:-80px;"
            ]),
            pe = se.extend(ie),
            ue = m.default.div.withConfig({
                displayName: "HomeContent__ContentText"
            })([
                "color:#555;font-size:24px;text-align:center;margin-top:-80px;em{color:#4a90e2;margin:0 5px;font-style:normal;}"
            ]),
            fe = m.default.div.withConfig({
                displayName: "HomeContent__ContentBtns"
            })(["text-align:center;margin-top:80px;margin-bottom:80px;"]),
            de = m.default.div.withConfig({ displayName: "HomeContent__Btn" })([
                "display:flex;justify-content:center;align-items:center;padding:15px 20px;background:rgba(246,246,246,0.73);color:#555;font-size:17px;box-shadow:0px 0px 2px 0px #c7c7c7;img{width:25px;margin:0 10px;&:last-child{position:relative;top:-2px;}}em{font-weight:700px;font-size:20px;position:relative;top:-4px;}span{vertical-align:super;margin-right:4px;}"
            ]),
            he = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(this, e.apply(this, arguments))
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, e),
                    (t.prototype.renderHeader = function() {
                        return a.a.createElement(
                            ce,
                            null,
                            a.a.createElement(
                                g.Row,
                                null,
                                a.a.createElement(
                                    g.Col,
                                    { sm: 3, style: { overflow: "visible" } },
                                    a.a.createElement(
                                        se,
                                        null,
                                        a.a.createElement(M, { width: 75 })
                                    )
                                ),
                                a.a.createElement(
                                    g.Col,
                                    { sm: 6, style: { overflow: "visible" } },
                                    a.a.createElement(
                                        pe,
                                        null,
                                        a.a.createElement("img", {
                                            src: N.a,
                                            alt: "profile icon"
                                        })
                                    )
                                ),
                                a.a.createElement(
                                    g.Col,
                                    { sm: 3, style: { overflow: "visible" } },
                                    a.a.createElement(
                                        se,
                                        null,
                                        a.a.createElement(Q, { width: 70 })
                                    )
                                )
                            )
                        );
                    }),
                    (t.prototype.renderText = function() {
                        return a.a.createElement(
                            ue,
                            null,
                            a.a.createElement(
                                "p",
                                null,
                                "Hi there! My name is Vijay Singh. I love working on new things (Yes ",
                                "I'm",
                                " Lazy AF)"
                            ),
                            a.a.createElement(
                                "p",
                                null,
                                "I'm",
                                " 23 Years 2 Months 12 Days And ",
                                a.a.createElement("em", null, "120122"),
                                " ",
                                "Seconds Old"
                            ),
                            a.a.createElement(
                                "p",
                                null,
                                "I've",
                                " no plans to make this world a better place. ",
                                "I'm",
                                " more of a private repo."
                            )
                        );
                    }),
                    (t.prototype.render = function() {
                        return a.a.createElement(
                            le,
                            null,
                            a.a.createElement(
                                g.Container,
                                null,
                                this.renderHeader(),
                                this.renderText(),
                                a.a.createElement(
                                    fe,
                                    null,
                                    a.a.createElement(
                                        g.Row,
                                        null,
                                        a.a.createElement(
                                            g.Col,
                                            {
                                                md: 4,
                                                sm: 5,
                                                offset: { md: 2 },
                                                style: { overflow: "visible" }
                                            },
                                            a.a.createElement(
                                                de,
                                                null,
                                                a.a.createElement(
                                                    g.Col,
                                                    {
                                                        sm: 3,
                                                        style: {
                                                            borderRight:
                                                                "2px solid #ddd",
                                                            paddingLeft: 0
                                                        }
                                                    },
                                                    a.a.createElement(_, {
                                                        width: 22
                                                    })
                                                ),
                                                a.a.createElement(
                                                    g.Col,
                                                    {
                                                        sm: 9,
                                                        style: {
                                                            paddingRight: 0
                                                        }
                                                    },
                                                    a.a.createElement(
                                                        "span",
                                                        null,
                                                        "Meerut, India"
                                                    ),
                                                    a.a.createElement("img", {
                                                        src: ee.a,
                                                        alt: "Tada icon"
                                                    }),
                                                    a.a.createElement(
                                                        "em",
                                                        null,
                                                        "@"
                                                    ),
                                                    a.a.createElement("img", {
                                                        src: ne.a,
                                                        alt: "India Icon"
                                                    })
                                                )
                                            )
                                        ),
                                        a.a.createElement(
                                            g.Col,
                                            {
                                                md: 4,
                                                sm: 5,
                                                style: { overflow: "visible" }
                                            },
                                            a.a.createElement(
                                                de,
                                                {
                                                    style: {
                                                        paddingBottom: "11px"
                                                    }
                                                },
                                                a.a.createElement(
                                                    g.Col,
                                                    {
                                                        sm: 3,
                                                        style: {
                                                            borderRight:
                                                                "2px solid #ddd",
                                                            paddingLeft: 0
                                                        }
                                                    },
                                                    a.a.createElement(oe, {
                                                        width: 26
                                                    })
                                                ),
                                                a.a.createElement(
                                                    g.Col,
                                                    {
                                                        sm: 9,
                                                        style: {
                                                            paddingRight: 0
                                                        }
                                                    },
                                                    a.a.createElement(
                                                        "span",
                                                        null,
                                                        "sudovijay@gmail.com"
                                                    )
                                                )
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    }),
                    t
                );
            })(r.Component);
        function me(e, t) {
            if (!e)
                throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                );
            return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
        }
        var ge = (function(e) {
                function t() {
                    var n, r;
                    !(function(e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                "Cannot call a class as a function"
                            );
                    })(this, t);
                    for (
                        var a = arguments.length, o = Array(a), i = 0;
                        i < a;
                        i++
                    )
                        o[i] = arguments[i];
                    return (
                        (n = r = me(this, e.call.apply(e, [this].concat(o)))),
                        (r.state = { seen: !1 }),
                        (r.updateSeen = function() {
                            r.setState({ seen: !0 });
                        }),
                        me(r, n)
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, e),
                    (t.prototype.renderHome = function() {
                        return a.a.createElement(
                            a.a.Fragment,
                            { key: "HomeContent" },
                            a.a.createElement(Z.a, {
                                path: this.props.match.path
                            }),
                            a.a.createElement(he, null),
                            a.a.createElement(K.a, null)
                        );
                    }),
                    (t.prototype.renderCard = function() {
                        return a.a.createElement(X, {
                            updateSeen: this.updateSeen,
                            key: "HomeCard"
                        });
                    }),
                    (t.prototype.render = function() {
                        return !1 === this.state.seen
                            ? this.renderCard()
                            : this.renderHome();
                    }),
                    t
                );
            })(r.Component),
            ye = function() {
                return a.a.createElement("div", null, "404 error");
            },
            ve = n(38),
            we = n.n(ve),
            xe = (function(e, t) {
                return (e.raw = t), e;
            })(
                [
                    "\n        @import url('https://fonts.googleapis.com/css?family=Lato:400,700');\n\n        ",
                    "\n\n        body{\n            font-family: 'Lato',sans-serif;\n            -webkit-font-smoothing: antialiased;\n            -moz-font-smoothing: antialiased;\n            font-smoothing: antialiased;\n            text-rendering: optimizeLegibility;\n            font-smooth: always;\n            overflow-x: hidden;\n        }\n\n        /*  animation */\n        .trans-enter {\n            opacity: 0.01;\n            transition: opacity 800ms ease-in;\n            transform: rotateX(0deg);\n\n            &.trans-enter-active {\n                opacity: 1;\n            }\n        }\n\n        .trans-leave {\n            opacity: 1;\n            transition: all 800ms cubic-bezier(.23,1,.32,1);\n            transform: rotateX(180deg);\n\n            &.trans-leave-active {\n                opacity: 0;\n            }\n\n        }\n\n        .transtop-enter {\n            opacity: 0.1;\n            transition: opacity 100ms linear;\n\n            &.transtop-enter-active {\n                opacity: 1;\n            }\n        }\n\n        .transtop-leave {\n            opacity: 1;\n            transition: opacity 100ms linear;\n\n            &.trans-leave-active {\n                opacity: 0;\n            }\n\n        }\n"
                ],
                [
                    "\n        @import url('https://fonts.googleapis.com/css?family=Lato:400,700');\n\n        ",
                    "\n\n        body{\n            font-family: 'Lato',sans-serif;\n            -webkit-font-smoothing: antialiased;\n            -moz-font-smoothing: antialiased;\n            font-smoothing: antialiased;\n            text-rendering: optimizeLegibility;\n            font-smooth: always;\n            overflow-x: hidden;\n        }\n\n        /*  animation */\n        .trans-enter {\n            opacity: 0.01;\n            transition: opacity 800ms ease-in;\n            transform: rotateX(0deg);\n\n            &.trans-enter-active {\n                opacity: 1;\n            }\n        }\n\n        .trans-leave {\n            opacity: 1;\n            transition: all 800ms cubic-bezier(.23,1,.32,1);\n            transform: rotateX(180deg);\n\n            &.trans-leave-active {\n                opacity: 0;\n            }\n\n        }\n\n        .transtop-enter {\n            opacity: 0.1;\n            transition: opacity 100ms linear;\n\n            &.transtop-enter-active {\n                opacity: 1;\n            }\n        }\n\n        .transtop-leave {\n            opacity: 1;\n            transition: opacity 100ms linear;\n\n            &.trans-leave-active {\n                opacity: 0;\n            }\n\n        }\n"
                ]
            );
        var be = function(e) {
            var t = e.children;
            return Object(m.injectGlobal)(xe, we.a), r.Children.only(t);
        };
        var Ee = function() {
                return a.a.createElement("div", null, "Loading...");
            },
            Ce = c()({
                loader: function() {
                    return n.e(1).then(n.bind(null, 124));
                },
                loading: Ee
            }),
            Ae = c()({
                loader: function() {
                    return n.e(0).then(n.bind(null, 125));
                },
                loading: Ee
            }),
            je = (function(e) {
                function t() {
                    return (
                        (function(e, t) {
                            if (!(e instanceof t))
                                throw new TypeError(
                                    "Cannot call a class as a function"
                                );
                        })(this, t),
                        (function(e, t) {
                            if (!e)
                                throw new ReferenceError(
                                    "this hasn't been initialised - super() hasn't been called"
                                );
                            return !t ||
                                ("object" != typeof t && "function" != typeof t)
                                ? e
                                : t;
                        })(this, e.apply(this, arguments))
                    );
                }
                return (
                    (function(e, t) {
                        if ("function" != typeof t && null !== t)
                            throw new TypeError(
                                "Super expression must either be null or a function, not " +
                                    typeof t
                            );
                        (e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        })),
                            t &&
                                (Object.setPrototypeOf
                                    ? Object.setPrototypeOf(e, t)
                                    : (e.__proto__ = t));
                    })(t, e),
                    (t.prototype.render = function() {
                        return a.a.createElement(
                            be,
                            null,
                            a.a.createElement(
                                h,
                                null,
                                a.a.createElement(
                                    i.a,
                                    null,
                                    a.a.createElement(
                                        i.d,
                                        null,
                                        a.a.createElement(i.c, {
                                            exact: !0,
                                            path: "/",
                                            component: ge
                                        }),
                                        a.a.createElement(i.c, {
                                            exact: !0,
                                            path: "/skills",
                                            component: Ce
                                        }),
                                        a.a.createElement(i.c, {
                                            exact: !0,
                                            path: "/work",
                                            component: Ae
                                        }),
                                        a.a.createElement(i.c, {
                                            component: ye
                                        })
                                    )
                                )
                            )
                        );
                    }),
                    t
                );
            })(r.Component);
        Object(o.render)(
            a.a.createElement(je, null),
            document.getElementById("root")
        );
    },
    85: function(e, t) {},
    86: function(e, t) {},
    91: function(e, t) {}
});
