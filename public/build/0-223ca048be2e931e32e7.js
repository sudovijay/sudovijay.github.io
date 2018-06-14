(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        113: function(e, t, r) {
            e.exports = r.p + "images/offmp4.ecffb27a.jpg";
        },
        114: function(e, t, r) {
            e.exports = r.p + "images/offmp3.a5c18f50.jpg";
        },
        115: function(e, t, r) {
            e.exports = r.p + "images/9xbuddy.616d190d.jpg";
        },
        116: function(e, t, r) {
            var o = {
                "./9xbuddy.jpg": 115,
                "./offmp3.jpg": 114,
                "./offmp4.jpg": 113
            };
            function n(e) {
                var t = a(e);
                return r(t);
            }
            function a(e) {
                var t = o[e];
                if (!(t + 1)) {
                    var r = new Error("Cannot find module '" + e + "'");
                    throw ((r.code = "MODULE_NOT_FOUND"), r);
                }
                return t;
            }
            (n.keys = function() {
                return Object.keys(o);
            }),
                (n.resolve = a),
                (e.exports = n),
                (n.id = 116);
        },
        117: function(e) {
            e.exports = {
                "9xbuddy": {
                    position: "Developer",
                    duration: "June 2014 - Present",
                    content: [
                        "The primary motivation behind 9xbuddy was our friends and family who were asking us for help with downloading their videos from different sites.",
                        "You know, when you are THE IT guy of your family, everybody treats you as their personal technical support. But we are nice guys so we wanted to give them way how to download desired videos by themself without constantly asking us for the help."
                    ]
                },
                offmp3: {
                    position: "Developer",
                    duration: "June 2017 - Present",
                    content: [
                        "The primary motivation behind 9xbuddy was our friends and family who were asking us for help with downloading their videos from different sites.",
                        "You know, when you are THE IT guy of your family, everybody treats you as their personal technical support. But we are nice guys so we wanted to give them way how to download desired videos by themself without constantly asking us for the help."
                    ]
                },
                offmp4: {
                    position: "Developer",
                    duration: "March 2018 - Present",
                    content: [
                        "The primary motivation behind 9xbuddy was our friends and family who were asking us for help with downloading their videos from different sites.",
                        "You know, when you are THE IT guy of your family, everybody treats you as their personal technical support. But we are nice guys so we wanted to give them way how to download desired videos by themself without constantly asking us for the help."
                    ]
                }
            };
        },
        125: function(e, t, r) {
            "use strict";
            r.r(t);
            var o = r(0),
                n = r.n(o),
                a = r(5),
                i = r(3),
                s = r(27),
                d = r(28),
                p = r(117);
            var l = i.default.div.withConfig({ displayName: "Work__CardBox" })([
                    "margin:0 auto;margin-top:8%;width:90%;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;overflow:hidden;&.card_left{.card_image{margin-left:-70px;}.card_text{padding-right:50px;}}&.card_right{.card_image{margin-right:-70px;z-index:11;}.card_text{padding-left:70px;}}"
                ]),
                f = i.default.div.withConfig({
                    displayName: "Work__CardContent"
                })([
                    "background:rgba(255,255,255,0.7);padding:20px 30px;padding-right:50px;box-shadow:0px 0px 3px 0px #6cae67;h1{margin:0;text-transform:uppercase;color:#4a90e2;font-weight:700;font-size:28px;}h2{margin:5px 0;color:#747474;font-size:20px;}span{color:#2eb326;margin-top:10px;margin-bottom:10px;display:block;font-weight:700;}p{margin:7px 0;color:#555;line-height:25px;}"
                ]),
                u = i.default.div.withConfig({
                    displayName: "Work__CardImage"
                })([
                    "position:relative;height:250px;border:4px solid #fff;overflow:hidden;background:#ebedf1;img{width:100%;}"
                ]),
                c = (function(e) {
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
                                    ("object" != typeof t &&
                                        "function" != typeof t)
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
                        (t.prototype.renderCardImage = function(e) {
                            return n.a.createElement(
                                u,
                                { className: "card_image" },
                                n.a.createElement("img", {
                                    src: r(116)("./" + e + ".jpg"),
                                    alt: "9xbuddy Icon"
                                })
                            );
                        }),
                        (t.prototype.renderCardContent = function(e, t) {
                            return n.a.createElement(
                                f,
                                { className: "card_text" },
                                n.a.createElement("h1", null, e),
                                n.a.createElement("h2", null, t[e].position),
                                n.a.createElement("span", null, t[e].duration),
                                t[e].content.map(function(e, t) {
                                    return n.a.createElement(
                                        "p",
                                        { key: "" + (t + 1) },
                                        e
                                    );
                                })
                            );
                        }),
                        (t.prototype.renderWork = function() {
                            var e = 1,
                                t = [],
                                r = Object.keys(p),
                                o = Array.isArray(r),
                                i = 0;
                            for (r = o ? r : r[Symbol.iterator](); ; ) {
                                var s;
                                if (o) {
                                    if (i >= r.length) break;
                                    s = r[i++];
                                } else {
                                    if ((i = r.next()).done) break;
                                    s = i.value;
                                }
                                var d = s;
                                e % 2 != 0
                                    ? t.push(
                                          n.a.createElement(
                                              l,
                                              {
                                                  key: d,
                                                  className: "card_left"
                                              },
                                              n.a.createElement(
                                                  a.Col,
                                                  { sm: 7 },
                                                  this.renderCardContent(d, p)
                                              ),
                                              n.a.createElement(
                                                  a.Col,
                                                  {
                                                      sm: 4,
                                                      style: {
                                                          overflow: "visible"
                                                      }
                                                  },
                                                  this.renderCardImage(d)
                                              )
                                          )
                                      )
                                    : t.push(
                                          n.a.createElement(
                                              l,
                                              {
                                                  key: d,
                                                  className: "card_right"
                                              },
                                              n.a.createElement(
                                                  a.Col,
                                                  {
                                                      sm: 4,
                                                      style: {
                                                          overflow: "visible"
                                                      }
                                                  },
                                                  this.renderCardImage(d)
                                              ),
                                              n.a.createElement(
                                                  a.Col,
                                                  { sm: 7 },
                                                  this.renderCardContent(d, p)
                                              )
                                          )
                                      ),
                                    (e += 1);
                            }
                            return t;
                        }),
                        (t.prototype.render = function() {
                            return n.a.createElement(
                                n.a.Fragment,
                                null,
                                n.a.createElement(s.a, {
                                    path: this.props.match.path
                                }),
                                n.a.createElement(
                                    a.Container,
                                    { style: { paddingBottom: "60px" } },
                                    this.renderWork()
                                ),
                                n.a.createElement(d.a, null)
                            );
                        }),
                        t
                    );
                })(o.Component);
            t.default = c;
        }
    }
]);
