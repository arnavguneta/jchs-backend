;
window.Modernizr = function(a, b, c) {
        function w(a) {
            j.cssText = a
        }

        function x(a, b) {
            return w(m.join(a + ";") + (b || ""))
        }

        function y(a, b) {
            return typeof a === b
        }

        function z(a, b) {
            return !!~("" + a).indexOf(b)
        }

        function A(a, b, d) {
            for (var e in a) {
                var f = b[a[e]];
                if (f !== c) return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f
            }
            return !1
        }
        var d = "2.6.2",
            e = {},
            f = !0,
            g = b.documentElement,
            h = "modernizr",
            i = b.createElement(h),
            j = i.style,
            k, l = {}.toString,
            m = " -webkit- -moz- -o- -ms- ".split(" "),
            n = {},
            o = {},
            p = {},
            q = [],
            r = q.slice,
            s, t = function(a, c, d, e) {
                var f, i, j, k, l = b.createElement("div"),
                    m = b.body,
                    n = m || b.createElement("body");
                if (parseInt(d, 10))
                    while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
                return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
            },
            u = {}.hasOwnProperty,
            v;
        !y(u, "undefined") && !y(u.call, "undefined") ? v = function(a, b) {
            return u.call(a, b)
        } : v = function(a, b) {
            return b in a && y(a.constructor.prototype[b], "undefined")
        }, Function.prototype.bind || (Function.prototype.bind = function(b) {
            var c = this;
            if (typeof c != "function") throw new TypeError;
            var d = r.call(arguments, 1),
                e = function() {
                    if (this instanceof e) {
                        var a = function() {};
                        a.prototype = c.prototype;
                        var f = new a,
                            g = c.apply(f, d.concat(r.call(arguments)));
                        return Object(g) === g ? g : f
                    }
                    return c.apply(b, d.concat(r.call(arguments)))
                };
            return e
        }), n.touch = function() {
            var c;
            return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : t(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
                c = a.offsetTop === 9
            }), c
        };
        for (var B in n) v(n, B) && (s = B.toLowerCase(), e[s] = n[B](), q.push((e[s] ? "" : "no-") + s));
        return e.addTest = function(a, b) {
                if (typeof a == "object")
                    for (var d in a) v(a, d) && e.addTest(d, a[d]);
                else {
                    a = a.toLowerCase();
                    if (e[a] !== c) return e;
                    b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
                }
                return e
            }, w(""), i = k = null,
            function(a, b) {
                function k(a, b) {
                    var c = a.createElement("p"),
                        d = a.getElementsByTagName("head")[0] || a.documentElement;
                    return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
                }

                function l() {
                    var a = r.elements;
                    return typeof a == "string" ? a.split(" ") : a
                }

                function m(a) {
                    var b = i[a[g]];
                    return b || (b = {}, h++, a[g] = h, i[h] = b), b
                }

                function n(a, c, f) {
                    c || (c = b);
                    if (j) return c.createElement(a);
                    f || (f = m(c));
                    var g;
                    return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
                }

                function o(a, c) {
                    a || (a = b);
                    if (j) return a.createDocumentFragment();
                    c = c || m(a);
                    var d = c.frag.cloneNode(),
                        e = 0,
                        f = l(),
                        g = f.length;
                    for (; e < g; e++) d.createElement(f[e]);
                    return d
                }

                function p(a, b) {
                    b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                        return r.shivMethods ? n(c, a, b) : b.createElem(c)
                    }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function(a) {
                        return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                    }) + ");return n}")(r, b.frag)
                }

                function q(a) {
                    a || (a = b);
                    var c = m(a);
                    return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
                }
                var c = a.html5 || {},
                    d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    f, g = "_html5shiv",
                    h = 0,
                    i = {},
                    j;
                (function() {
                    try {
                        var a = b.createElement("a");
                        a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function() {
                            b.createElement("a");
                            var a = b.createDocumentFragment();
                            return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                        }()
                    } catch (c) {
                        f = !0, j = !0
                    }
                })();
                var r = {
                    elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                    shivCSS: c.shivCSS !== !1,
                    supportsUnknownElements: j,
                    shivMethods: c.shivMethods !== !1,
                    type: "default",
                    shivDocument: q,
                    createElement: n,
                    createDocumentFragment: o
                };
                a.html5 = r, q(b)
            }(this, b), e._version = d, e._prefixes = m, e.testStyles = t, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + q.join(" ") : ""), e
    }(this, this.document),
    function(a, b, c) {
        function d(a) {
            return "[object Function]" == o.call(a)
        }

        function e(a) {
            return "string" == typeof a
        }

        function f() {}

        function g(a) {
            return !a || "loaded" == a || "complete" == a || "uninitialized" == a
        }

        function h() {
            var a = p.shift();
            q = 1, a ? a.t ? m(function() {
                ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
            }, 0) : (a(), h()) : q = 0
        }

        function i(a, c, d, e, f, i, j) {
            function k(b) {
                if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                    "img" != a && m(function() {
                        t.removeChild(l)
                    }, 50);
                    for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
                }
            }
            var j = j || B.errorTimeout,
                l = b.createElement(a),
                o = 0,
                r = 0,
                u = {
                    t: d,
                    s: c,
                    e: f,
                    a: i,
                    x: j
                };
            1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                k.call(this, r)
            }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
        }

        function j(a, b, c, d, f) {
            return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
        }

        function k() {
            var a = B;
            return a.loader = {
                load: j,
                i: 0
            }, a
        }
        var l = b.documentElement,
            m = a.setTimeout,
            n = b.getElementsByTagName("script")[0],
            o = {}.toString,
            p = [],
            q = 0,
            r = "MozAppearance" in l.style,
            s = r && !!b.createRange().compareNode,
            t = s ? l : n.parentNode,
            l = a.opera && "[object Opera]" == o.call(a.opera),
            l = !!b.attachEvent && !l,
            u = r ? "object" : l ? "script" : "img",
            v = l ? "script" : u,
            w = Array.isArray || function(a) {
                return "[object Array]" == o.call(a)
            },
            x = [],
            y = {},
            z = {
                timeout: function(a, b) {
                    return b.length && (a.timeout = b[0]), a
                }
            },
            A, B;
        B = function(a) {
            function b(a) {
                var a = a.split("!"),
                    b = x.length,
                    c = a.pop(),
                    d = a.length,
                    c = {
                        url: c,
                        origUrl: c,
                        prefixes: a
                    },
                    e, f, g;
                for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
                for (f = 0; f < b; f++) c = x[f](c);
                return c
            }

            function g(a, e, f, g, h) {
                var i = b(a),
                    j = i.autoCallback;
                i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
                    k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
                })))
            }

            function h(a, b) {
                function c(a, c) {
                    if (a) {
                        if (e(a)) c || (j = function() {
                            var a = [].slice.call(arguments);
                            k.apply(this, a), l()
                        }), g(a, j, b, 0, h);
                        else if (Object(a) === a)
                            for (n in m = function() {
                                    var b = 0,
                                        c;
                                    for (c in a) a.hasOwnProperty(c) && b++;
                                    return b
                                }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
                                var a = [].slice.call(arguments);
                                k.apply(this, a), l()
                            } : j[n] = function(a) {
                                return function() {
                                    var b = [].slice.call(arguments);
                                    a && a.apply(this, b), l()
                                }
                            }(k[n])), g(a[n], j, b, n, h))
                    } else !c && l()
                }
                var h = !!a.test,
                    i = a.load || a.both,
                    j = a.callback || f,
                    k = j,
                    l = a.complete || f,
                    m, n;
                c(h ? a.yep : a.nope, !!i), i && c(i)
            }
            var i, j, l = this.yepnope.loader;
            if (e(a)) g(a, 0, l, 0);
            else if (w(a))
                for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
            else Object(a) === a && h(a, l)
        }, B.addPrefix = function(a, b) {
            z[a] = b
        }, B.addFilter = function(a) {
            x.push(a)
        }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
            b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
        }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
            var k = b.createElement("script"),
                l, o, e = e || B.errorTimeout;
            k.src = a;
            for (o in d) k.setAttribute(o, d[o]);
            c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
                !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
            }, m(function() {
                l || (l = 1, c(1))
            }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
        }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
            var e = b.createElement("link"),
                j, c = i ? h : c || f;
            e.href = a, e.rel = "stylesheet", e.type = "text/css";
            for (j in d) e.setAttribute(j, d[j]);
            g || (n.parentNode.insertBefore(e, n), m(c, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    };;
window.Modernizr = function(a, b, c) {
    function w(a) {
        i.cssText = a
    }

    function x(a, b) {
        return w(prefixes.join(a + ";") + (b || ""))
    }

    function y(a, b) {
        return typeof a === b
    }

    function z(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function A(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!z(e, "-") && i[e] !== c) return b == "pfx" ? e : !0
        }
        return !1
    }

    function B(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : y(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function C(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + m.join(d + " ") + d).split(" ");
        return y(b, "string") || y(b, "undefined") ? A(e, b) : (e = (a + " " + n.join(d + " ") + d).split(" "), B(e, b, c))
    }
    var d = "2.7.1",
        e = {},
        f = b.documentElement,
        g = "modernizr",
        h = b.createElement(g),
        i = h.style,
        j, k = {}.toString,
        l = "Webkit Moz O ms",
        m = l.split(" "),
        n = l.toLowerCase().split(" "),
        o = {},
        p = {},
        q = {},
        r = [],
        s = r.slice,
        t, u = {}.hasOwnProperty,
        v;
    !y(u, "undefined") && !y(u.call, "undefined") ? v = function(a, b) {
        return u.call(a, b)
    } : v = function(a, b) {
        return b in a && y(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = s.call(arguments, 1),
            e = function() {
                if (this instanceof e) {
                    var a = function() {};
                    a.prototype = c.prototype;
                    var f = new a,
                        g = c.apply(f, d.concat(s.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return c.apply(b, d.concat(s.call(arguments)))
            };
        return e
    });
    for (var D in o) v(o, D) && (t = D.toLowerCase(), e[t] = o[D](), r.push((e[t] ? "" : "no-") + t));
    return e.addTest = function(a, b) {
        if (typeof a == "object")
            for (var d in a) v(a, d) && e.addTest(d, a[d]);
        else {
            a = a.toLowerCase();
            if (e[a] !== c) return e;
            b = typeof b == "function" ? b() : b, typeof enableClasses != "undefined" && enableClasses && (f.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, w(""), h = j = null, e._version = d, e._domPrefixes = n, e._cssomPrefixes = m, e.testProp = function(a) {
        return A([a])
    }, e.testAllProps = C, e.prefixed = function(a, b, c) {
        return b ? C(a, b, c) : C(a, "pfx")
    }, e
}(this, this.document);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});;
(function($, k, m, i, d) {
    var e = $(i),
        g = "waypoint.reached",
        b = function(o, n) {
            o.element.trigger(g, n);
            if (o.options.triggerOnce) {
                o.element[k]("destroy")
            }
        },
        h = function(p, o) {
            var n = o.waypoints.length - 1;
            while (n >= 0 && o.waypoints[n].element[0] !== p[0]) {
                n -= 1
            }
            return n
        },
        f = [],
        l = function(n) {
            $.extend(this, {
                element: $(n),
                oldScroll: 0,
                waypoints: [],
                didScroll: false,
                didResize: false,
                doScroll: $.proxy(function() {
                    var q = this.element.scrollTop(),
                        p = q > this.oldScroll,
                        s = this,
                        r = $.grep(this.waypoints, function(u, t) {
                            return p ? (u.offset > s.oldScroll && u.offset <= q) : (u.offset <= s.oldScroll && u.offset > q)
                        }),
                        o = r.length;
                    if (!this.oldScroll || !q) {
                        $[m]("refresh")
                    }
                    this.oldScroll = q;
                    if (!o) {
                        return
                    }
                    if (!p) {
                        r.reverse()
                    }
                    $.each(r, function(u, t) {
                        if (t.options.continuous || u === o - 1) {
                            b(t, [p ? "down" : "up"])
                        }
                    })
                }, this)
            });
            $(n).scroll($.proxy(function() {
                if (!this.didScroll) {
                    this.didScroll = true;
                    i.setTimeout($.proxy(function() {
                        this.doScroll();
                        this.didScroll = false
                    }, this), $[m].settings.scrollThrottle)
                }
            }, this)).resize($.proxy(function() {
                if (!this.didResize) {
                    this.didResize = true;
                    i.setTimeout($.proxy(function() {
                        $[m]("refresh");
                        this.didResize = false
                    }, this), $[m].settings.resizeThrottle)
                }
            }, this));
            e.load($.proxy(function() {
                this.doScroll()
            }, this))
        },
        j = function(n) {
            var o = null;
            $.each(f, function(p, q) {
                if (q.element[0] === n) {
                    o = q;
                    return false
                }
            });
            return o
        },
        c = {
            init: function(o, n) {
                this.each(function() {
                    var u = $.fn[k].defaults.context,
                        q, t = $(this);
                    if (n && n.context) {
                        u = n.context
                    }
                    if (!$.isWindow(u)) {
                        u = t.closest(u)[0]
                    }
                    q = j(u);
                    if (!q) {
                        q = new l(u);
                        f.push(q)
                    }
                    var p = h(t, q),
                        s = p < 0 ? $.fn[k].defaults : q.waypoints[p].options,
                        r = $.extend({}, s, n);
                    r.offset = r.offset === "bottom-in-view" ? function() {
                        var v = $.isWindow(u) ? $[m]("viewportHeight") : $(u).height();
                        return v - $(this).outerHeight()
                    } : r.offset;
                    if (p < 0) {
                        q.waypoints.push({
                            element: t,
                            offset: null,
                            options: r
                        })
                    } else {
                        q.waypoints[p].options = r
                    }
                    if (o) {
                        t.bind(g, o)
                    }
                    if (n && n.handler) {
                        t.bind(g, n.handler)
                    }
                });
                $[m]("refresh");
                return this
            },
            remove: function() {
                return this.each(function(o, p) {
                    var n = $(p);
                    $.each(f, function(r, s) {
                        var q = h(n, s);
                        if (q >= 0) {
                            s.waypoints.splice(q, 1)
                        }
                    })
                })
            },
            destroy: function() {
                return this.unbind(g)[k]("remove")
            }
        },
        a = {
            refresh: function() {
                $.each(f, function(r, s) {
                    var q = $.isWindow(s.element[0]),
                        n = q ? 0 : s.element.offset().top,
                        p = q ? $[m]("viewportHeight") : s.element.height(),
                        o = q ? 0 : s.element.scrollTop();
                    $.each(s.waypoints, function(u, x) {
                        if (!x) {
                            return
                        }
                        var t = x.options.offset,
                            w = x.offset;
                        if (typeof x.options.offset === "function") {
                            t = x.options.offset.apply(x.element)
                        } else {
                            if (typeof x.options.offset === "string") {
                                var v = parseFloat(x.options.offset);
                                t = x.options.offset.indexOf("%") ? Math.ceil(p * (v / 100)) : v
                            }
                        }
                        x.offset = x.element.offset().top - n + o - t;
                        if (x.options.onlyOnScroll) {
                            return
                        }
                        if (w !== null && s.oldScroll > w && s.oldScroll <= x.offset) {
                            b(x, ["up"])
                        } else {
                            if (w !== null && s.oldScroll < w && s.oldScroll >= x.offset) {
                                b(x, ["down"])
                            } else {
                                if (!w && o > x.offset) {
                                    b(x, ["down"])
                                }
                            }
                        }
                    });
                    s.waypoints.sort(function(u, t) {
                        return u.offset - t.offset
                    })
                })
            },
            viewportHeight: function() {
                return (i.innerHeight ? i.innerHeight : e.height())
            },
            aggregate: function() {
                var n = $();
                $.each(f, function(o, p) {
                    $.each(p.waypoints, function(q, r) {
                        n = n.add(r.element)
                    })
                });
                return n
            }
        };
    $.fn[k] = function(n) {
        if (c[n]) {
            return c[n].apply(this, Array.prototype.slice.call(arguments, 1))
        } else {
            if (typeof n === "function" || !n) {
                return c.init.apply(this, arguments)
            } else {
                if (typeof n === "object") {
                    return c.init.apply(this, [null, n])
                } else {
                    $.error("Method " + n + " does not exist on jQuery " + k)
                }
            }
        }
    };
    $.fn[k].defaults = {
        continuous: true,
        offset: 0,
        triggerOnce: false,
        context: i
    };
    $[m] = function(n) {
        if (a[n]) {
            return a[n].apply(this)
        } else {
            return a.aggregate()
        }
    };
    $[m].settings = {
        resizeThrottle: 200,
        scrollThrottle: 100
    };
    e.load(function() {
        $[m]("refresh")
    })
})(jQuery, "waypoint", "waypoints", this);;
(function($, window, document, undefined) {
    var pluginName = 'stellar',
        defaults = {
            scrollProperty: 'scroll',
            positionProperty: 'position',
            horizontalScrolling: true,
            verticalScrolling: true,
            horizontalOffset: 0,
            verticalOffset: 0,
            responsive: true,
            parallaxBackgrounds: true,
            parallaxElements: true,
            hideDistantElements: true,
            hideElement: function($elem) {
                $elem.hide();
            },
            showElement: function($elem) {
                $elem.show();
            }
        },
        scrollProperty = {
            scroll: {
                getLeft: function($elem) {
                    return $elem.scrollLeft();
                },
                setLeft: function($elem, val) {
                    $elem.scrollLeft(val);
                },
                getTop: function($elem) {
                    return $elem.scrollTop();
                },
                setTop: function($elem, val) {
                    $elem.scrollTop(val);
                }
            },
            position: {
                getLeft: function($elem) {
                    return parseInt($elem.css('left'), 10) * -1;
                },
                getTop: function($elem) {
                    return parseInt($elem.css('top'), 10) * -1;
                }
            },
            margin: {
                getLeft: function($elem) {
                    return parseInt($elem.css('margin-left'), 10) * -1;
                },
                getTop: function($elem) {
                    return parseInt($elem.css('margin-top'), 10) * -1;
                }
            },
            transform: {
                getLeft: function($elem) {
                    var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
                    return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[4], 10) * -1 : 0);
                },
                getTop: function($elem) {
                    var computedTransform = getComputedStyle($elem[0])[prefixedTransform];
                    return (computedTransform !== 'none' ? parseInt(computedTransform.match(/(-?[0-9]+)/g)[5], 10) * -1 : 0);
                }
            }
        },
        positionProperty = {
            position: {
                setLeft: function($elem, left) {
                    $elem.css('left', left);
                },
                setTop: function($elem, top) {
                    $elem.css('top', top);
                }
            },
            transform: {
                setPosition: function($elem, left, startingLeft, top, startingTop) {
                    $elem[0].style[prefixedTransform] = 'translate3d(' + (left - startingLeft) + 'px, ' + (top - startingTop) + 'px, 0)';
                }
            }
        },
        vendorPrefix = (function() {
            var prefixes = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
                style = $('script')[0].style,
                prefix = '',
                prop;
            for (prop in style) {
                if (prefixes.test(prop)) {
                    prefix = prop.match(prefixes)[0];
                    break;
                }
            }
            if ('WebkitOpacity' in style) {
                prefix = 'Webkit';
            }
            if ('KhtmlOpacity' in style) {
                prefix = 'Khtml';
            }
            return function(property) {
                return prefix + (prefix.length > 0 ? property.charAt(0).toUpperCase() + property.slice(1) : property);
            };
        }()),
        prefixedTransform = vendorPrefix('transform'),
        supportsBackgroundPositionXY = $('<div />', {
            style: 'background:#fff'
        }).css('background-position-x') !== undefined,
        setBackgroundPosition = (supportsBackgroundPositionXY ? function($elem, x, y) {
            $elem.css({
                'background-position-x': x,
                'background-position-y': y
            });
        } : function($elem, x, y) {
            $elem.css('background-position', x + ' ' + y);
        }),
        getBackgroundPosition = (supportsBackgroundPositionXY ? function($elem) {
            return [$elem.css('background-position-x'), $elem.css('background-position-y')];
        } : function($elem) {
            return $elem.css('background-position').split(' ');
        }),
        requestAnimFrame = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
            setTimeout(callback, 1000 / 60);
        });

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }
    Plugin.prototype = {
        init: function() {
            this.options.name = pluginName + '_' + Math.floor(Math.random() * 1e9);
            this._defineElements();
            this._defineGetters();
            this._defineSetters();
            this._handleWindowLoadAndResize();
            this._detectViewport();
            this.refresh({
                firstLoad: true
            });
            if (this.options.scrollProperty === 'scroll') {
                this._handleScrollEvent();
            } else {
                this._startAnimationLoop();
            }
        },
        _defineElements: function() {
            if (this.element === document.body) this.element = window;
            this.$scrollElement = $(this.element);
            this.$element = (this.element === window ? $('body') : this.$scrollElement);
            this.$viewportElement = (this.options.viewportElement !== undefined ? $(this.options.viewportElement) : (this.$scrollElement[0] === window || this.options.scrollProperty === 'scroll' ? this.$scrollElement : this.$scrollElement.parent()));
        },
        _defineGetters: function() {
            var self = this,
                scrollPropertyAdapter = scrollProperty[self.options.scrollProperty];
            this._getScrollLeft = function() {
                return scrollPropertyAdapter.getLeft(self.$scrollElement);
            };
            this._getScrollTop = function() {
                return scrollPropertyAdapter.getTop(self.$scrollElement);
            };
        },
        _defineSetters: function() {
            var self = this,
                scrollPropertyAdapter = scrollProperty[self.options.scrollProperty],
                positionPropertyAdapter = positionProperty[self.options.positionProperty],
                setScrollLeft = scrollPropertyAdapter.setLeft,
                setScrollTop = scrollPropertyAdapter.setTop;
            this._setScrollLeft = (typeof setScrollLeft === 'function' ? function(val) {
                setScrollLeft(self.$scrollElement, val);
            } : $.noop);
            this._setScrollTop = (typeof setScrollTop === 'function' ? function(val) {
                setScrollTop(self.$scrollElement, val);
            } : $.noop);
            this._setPosition = positionPropertyAdapter.setPosition || function($elem, left, startingLeft, top, startingTop) {
                if (self.options.horizontalScrolling) {
                    positionPropertyAdapter.setLeft($elem, left, startingLeft);
                }
                if (self.options.verticalScrolling) {
                    positionPropertyAdapter.setTop($elem, top, startingTop);
                }
            };
        },
        _handleWindowLoadAndResize: function() {
            var self = this,
                $window = $(window);
            if (self.options.responsive) {
                $window.bind('load.' + this.name, function() {
                    self.refresh();
                });
            }
            $window.bind('resize.' + this.name, function() {
                self._detectViewport();
                if (self.options.responsive) {
                    self.refresh();
                }
            });
        },
        refresh: function(options) {
            var self = this,
                oldLeft = self._getScrollLeft(),
                oldTop = self._getScrollTop();
            if (!options || !options.firstLoad) {
                this._reset();
            }
            this._setScrollLeft(0);
            this._setScrollTop(0);
            this._setOffsets();
            this._findParticles();
            this._findBackgrounds();
            if (options && options.firstLoad && /WebKit/.test(navigator.userAgent)) {
                $(window).load(function() {
                    var oldLeft = self._getScrollLeft(),
                        oldTop = self._getScrollTop();
                    self._setScrollLeft(oldLeft + 1);
                    self._setScrollTop(oldTop + 1);
                    self._setScrollLeft(oldLeft);
                    self._setScrollTop(oldTop);
                });
            }
            this._setScrollLeft(oldLeft);
            this._setScrollTop(oldTop);
        },
        _detectViewport: function() {
            var viewportOffsets = this.$viewportElement.offset(),
                hasOffsets = viewportOffsets !== null && viewportOffsets !== undefined;
            this.viewportWidth = this.$viewportElement.width();
            this.viewportHeight = this.$viewportElement.height();
            this.viewportOffsetTop = (hasOffsets ? viewportOffsets.top : 0);
            this.viewportOffsetLeft = (hasOffsets ? viewportOffsets.left : 0);
        },
        _findParticles: function() {
            var self = this,
                scrollLeft = this._getScrollLeft(),
                scrollTop = this._getScrollTop();
            if (this.particles !== undefined) {
                for (var i = this.particles.length - 1; i >= 0; i--) {
                    this.particles[i].$element.data('stellar-elementIsActive', undefined);
                }
            }
            this.particles = [];
            if (!this.options.parallaxElements) return;
            this.$element.find('[data-stellar-ratio]').each(function(i) {
                var $this = $(this),
                    horizontalOffset, verticalOffset, positionLeft, positionTop, marginLeft, marginTop, $offsetParent, offsetLeft, offsetTop, parentOffsetLeft = 0,
                    parentOffsetTop = 0,
                    tempParentOffsetLeft = 0,
                    tempParentOffsetTop = 0;
                if (!$this.data('stellar-elementIsActive')) {
                    $this.data('stellar-elementIsActive', this);
                } else if ($this.data('stellar-elementIsActive') !== this) {
                    return;
                }
                self.options.showElement($this);
                if (!$this.data('stellar-startingLeft')) {
                    $this.data('stellar-startingLeft', $this.css('left'));
                    $this.data('stellar-startingTop', $this.css('top'));
                } else {
                    $this.css('left', $this.data('stellar-startingLeft'));
                    $this.css('top', $this.data('stellar-startingTop'));
                }
                positionLeft = $this.position().left;
                positionTop = $this.position().top;
                marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
                marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);
                offsetLeft = $this.offset().left - marginLeft;
                offsetTop = $this.offset().top - marginTop;
                $this.parents().each(function() {
                    var $this = $(this);
                    if ($this.data('stellar-offset-parent') === true) {
                        parentOffsetLeft = tempParentOffsetLeft;
                        parentOffsetTop = tempParentOffsetTop;
                        $offsetParent = $this;
                        return false;
                    } else {
                        tempParentOffsetLeft += $this.position().left;
                        tempParentOffsetTop += $this.position().top;
                    }
                });
                horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
                verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));
                self.particles.push({
                    $element: $this,
                    $offsetParent: $offsetParent,
                    isFixed: $this.css('position') === 'fixed',
                    horizontalOffset: horizontalOffset,
                    verticalOffset: verticalOffset,
                    startingPositionLeft: positionLeft,
                    startingPositionTop: positionTop,
                    startingOffsetLeft: offsetLeft,
                    startingOffsetTop: offsetTop,
                    parentOffsetLeft: parentOffsetLeft,
                    parentOffsetTop: parentOffsetTop,
                    stellarRatio: ($this.data('stellar-ratio') !== undefined ? $this.data('stellar-ratio') : 1),
                    width: $this.outerWidth(true),
                    height: $this.outerHeight(true),
                    isHidden: false
                });
            });
        },
        _findBackgrounds: function() {
            var self = this,
                scrollLeft = this._getScrollLeft(),
                scrollTop = this._getScrollTop(),
                $backgroundElements;
            this.backgrounds = [];
            if (!this.options.parallaxBackgrounds) return;
            $backgroundElements = this.$element.find('[data-stellar-background-ratio]');
            if (this.$element.data('stellar-background-ratio')) {
                $backgroundElements = $backgroundElements.add(this.$element);
            }
            $backgroundElements.each(function() {
                var $this = $(this),
                    backgroundPosition = getBackgroundPosition($this),
                    horizontalOffset, verticalOffset, positionLeft, positionTop, marginLeft, marginTop, offsetLeft, offsetTop, $offsetParent, parentOffsetLeft = 0,
                    parentOffsetTop = 0,
                    tempParentOffsetLeft = 0,
                    tempParentOffsetTop = 0;
                if (!$this.data('stellar-backgroundIsActive')) {
                    $this.data('stellar-backgroundIsActive', this);
                } else if ($this.data('stellar-backgroundIsActive') !== this) {
                    return;
                }
                if (!$this.data('stellar-backgroundStartingLeft')) {
                    $this.data('stellar-backgroundStartingLeft', backgroundPosition[0]);
                    $this.data('stellar-backgroundStartingTop', backgroundPosition[1]);
                } else {
                    setBackgroundPosition($this, $this.data('stellar-backgroundStartingLeft'), $this.data('stellar-backgroundStartingTop'));
                }
                marginLeft = ($this.css('margin-left') === 'auto') ? 0 : parseInt($this.css('margin-left'), 10);
                marginTop = ($this.css('margin-top') === 'auto') ? 0 : parseInt($this.css('margin-top'), 10);
                offsetLeft = $this.offset().left - marginLeft - scrollLeft;
                offsetTop = $this.offset().top - marginTop - scrollTop;
                $this.parents().each(function() {
                    var $this = $(this);
                    if ($this.data('stellar-offset-parent') === true) {
                        parentOffsetLeft = tempParentOffsetLeft;
                        parentOffsetTop = tempParentOffsetTop;
                        $offsetParent = $this;
                        return false;
                    } else {
                        tempParentOffsetLeft += $this.position().left;
                        tempParentOffsetTop += $this.position().top;
                    }
                });
                horizontalOffset = ($this.data('stellar-horizontal-offset') !== undefined ? $this.data('stellar-horizontal-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-horizontal-offset') !== undefined ? $offsetParent.data('stellar-horizontal-offset') : self.horizontalOffset));
                verticalOffset = ($this.data('stellar-vertical-offset') !== undefined ? $this.data('stellar-vertical-offset') : ($offsetParent !== undefined && $offsetParent.data('stellar-vertical-offset') !== undefined ? $offsetParent.data('stellar-vertical-offset') : self.verticalOffset));
                self.backgrounds.push({
                    $element: $this,
                    $offsetParent: $offsetParent,
                    isFixed: $this.css('background-attachment') === 'fixed',
                    horizontalOffset: horizontalOffset,
                    verticalOffset: verticalOffset,
                    startingValueLeft: backgroundPosition[0],
                    startingValueTop: backgroundPosition[1],
                    startingBackgroundPositionLeft: (isNaN(parseInt(backgroundPosition[0], 10)) ? 0 : parseInt(backgroundPosition[0], 10)),
                    startingBackgroundPositionTop: (isNaN(parseInt(backgroundPosition[1], 10)) ? 0 : parseInt(backgroundPosition[1], 10)),
                    startingPositionLeft: $this.position().left,
                    startingPositionTop: $this.position().top,
                    startingOffsetLeft: offsetLeft,
                    startingOffsetTop: offsetTop,
                    parentOffsetLeft: parentOffsetLeft,
                    parentOffsetTop: parentOffsetTop,
                    stellarRatio: ($this.data('stellar-background-ratio') === undefined ? 1 : $this.data('stellar-background-ratio'))
                });
            });
        },
        _reset: function() {
            var particle, startingPositionLeft, startingPositionTop, background, i;
            for (i = this.particles.length - 1; i >= 0; i--) {
                particle = this.particles[i];
                startingPositionLeft = particle.$element.data('stellar-startingLeft');
                startingPositionTop = particle.$element.data('stellar-startingTop');
                this._setPosition(particle.$element, startingPositionLeft, startingPositionLeft, startingPositionTop, startingPositionTop);
                this.options.showElement(particle.$element);
                particle.$element.data('stellar-startingLeft', null).data('stellar-elementIsActive', null).data('stellar-backgroundIsActive', null);
            }
            for (i = this.backgrounds.length - 1; i >= 0; i--) {
                background = this.backgrounds[i];
                background.$element.data('stellar-backgroundStartingLeft', null).data('stellar-backgroundStartingTop', null);
                setBackgroundPosition(background.$element, background.startingValueLeft, background.startingValueTop);
            }
        },
        destroy: function() {
            this._reset();
            this.$scrollElement.unbind('resize.' + this.name).unbind('scroll.' + this.name);
            this._animationLoop = $.noop;
            $(window).unbind('load.' + this.name).unbind('resize.' + this.name);
        },
        _setOffsets: function() {
            var self = this,
                $window = $(window);
            $window.unbind('resize.horizontal-' + this.name).unbind('resize.vertical-' + this.name);
            if (typeof this.options.horizontalOffset === 'function') {
                this.horizontalOffset = this.options.horizontalOffset();
                $window.bind('resize.horizontal-' + this.name, function() {
                    self.horizontalOffset = self.options.horizontalOffset();
                });
            } else {
                this.horizontalOffset = this.options.horizontalOffset;
            }
            if (typeof this.options.verticalOffset === 'function') {
                this.verticalOffset = this.options.verticalOffset();
                $window.bind('resize.vertical-' + this.name, function() {
                    self.verticalOffset = self.options.verticalOffset();
                });
            } else {
                this.verticalOffset = this.options.verticalOffset;
            }
        },
        _repositionElements: function() {
            var scrollLeft = this._getScrollLeft(),
                scrollTop = this._getScrollTop(),
                horizontalOffset, verticalOffset, particle, fixedRatioOffset, background, bgLeft, bgTop, isVisibleVertical = true,
                isVisibleHorizontal = true,
                newPositionLeft, newPositionTop, newOffsetLeft, newOffsetTop, i;
            if (this.currentScrollLeft === scrollLeft && this.currentScrollTop === scrollTop && this.currentWidth === this.viewportWidth && this.currentHeight === this.viewportHeight) {
                return;
            } else {
                this.currentScrollLeft = scrollLeft;
                this.currentScrollTop = scrollTop;
                this.currentWidth = this.viewportWidth;
                this.currentHeight = this.viewportHeight;
            }
            for (i = this.particles.length - 1; i >= 0; i--) {
                particle = this.particles[i];
                fixedRatioOffset = (particle.isFixed ? 1 : 0);
                if (this.options.horizontalScrolling) {
                    newPositionLeft = (scrollLeft + particle.horizontalOffset + this.viewportOffsetLeft + particle.startingPositionLeft - particle.startingOffsetLeft + particle.parentOffsetLeft) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionLeft;
                    newOffsetLeft = newPositionLeft - particle.startingPositionLeft + particle.startingOffsetLeft;
                } else {
                    newPositionLeft = particle.startingPositionLeft;
                    newOffsetLeft = particle.startingOffsetLeft;
                }
                if (this.options.verticalScrolling) {
                    newPositionTop = (scrollTop + particle.verticalOffset + this.viewportOffsetTop + particle.startingPositionTop - particle.startingOffsetTop + particle.parentOffsetTop) * -(particle.stellarRatio + fixedRatioOffset - 1) + particle.startingPositionTop;
                    newOffsetTop = newPositionTop - particle.startingPositionTop + particle.startingOffsetTop;
                } else {
                    newPositionTop = particle.startingPositionTop;
                    newOffsetTop = particle.startingOffsetTop;
                }
                if (this.options.hideDistantElements) {
                    isVisibleHorizontal = !this.options.horizontalScrolling || newOffsetLeft + particle.width > (particle.isFixed ? 0 : scrollLeft) && newOffsetLeft < (particle.isFixed ? 0 : scrollLeft) + this.viewportWidth + this.viewportOffsetLeft;
                    isVisibleVertical = !this.options.verticalScrolling || newOffsetTop + particle.height > (particle.isFixed ? 0 : scrollTop) && newOffsetTop < (particle.isFixed ? 0 : scrollTop) + this.viewportHeight + this.viewportOffsetTop;
                }
                if (isVisibleHorizontal && isVisibleVertical) {
                    if (particle.isHidden) {
                        this.options.showElement(particle.$element);
                        particle.isHidden = false;
                    }
                    this._setPosition(particle.$element, newPositionLeft, particle.startingPositionLeft, newPositionTop, particle.startingPositionTop);
                } else {
                    if (!particle.isHidden) {
                        this.options.hideElement(particle.$element);
                        particle.isHidden = true;
                    }
                }
            }
            for (i = this.backgrounds.length - 1; i >= 0; i--) {
                background = this.backgrounds[i];
                fixedRatioOffset = (background.isFixed ? 0 : 1);
                bgLeft = (this.options.horizontalScrolling ? (scrollLeft + background.horizontalOffset - this.viewportOffsetLeft - background.startingOffsetLeft + background.parentOffsetLeft - background.startingBackgroundPositionLeft) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueLeft);
                bgTop = (this.options.verticalScrolling ? (scrollTop + background.verticalOffset - this.viewportOffsetTop - background.startingOffsetTop + background.parentOffsetTop - background.startingBackgroundPositionTop) * (fixedRatioOffset - background.stellarRatio) + 'px' : background.startingValueTop);
                setBackgroundPosition(background.$element, bgLeft, bgTop);
            }
        },
        _handleScrollEvent: function() {
            var self = this,
                ticking = false;
            var update = function() {
                self._repositionElements();
                ticking = false;
            };
            var requestTick = function() {
                if (!ticking) {
                    requestAnimFrame(update);
                    ticking = true;
                }
            };
            this.$scrollElement.bind('scroll.' + this.name, requestTick);
            requestTick();
        },
        _startAnimationLoop: function() {
            var self = this;
            this._animationLoop = function() {
                requestAnimFrame(self._animationLoop);
                self._repositionElements();
            };
            this._animationLoop();
        }
    };
    $.fn[pluginName] = function(options) {
        var args = arguments;
        if (options === undefined || typeof options === 'object') {
            return this.each(function() {
                if (!$.data(this, 'plugin_' + pluginName)) {
                    $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
                }
            });
        } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
            return this.each(function() {
                var instance = $.data(this, 'plugin_' + pluginName);
                if (instance instanceof Plugin && typeof instance[options] === 'function') {
                    instance[options].apply(instance, Array.prototype.slice.call(args, 1));
                }
                if (options === 'destroy') {
                    $.data(this, 'plugin_' + pluginName, null);
                }
            });
        }
    };
    $[pluginName] = function(options) {
        var $window = $(window);
        return $window.stellar.apply($window, Array.prototype.slice.call(arguments, 0));
    };
    $[pluginName].scrollProperty = scrollProperty;
    $[pluginName].positionProperty = positionProperty;
    window.Stellar = Plugin;
}(jQuery, this, document));;
(function(d) {
    d.flexslider = function(j, l) {
        var a = d(j),
            c = d.extend({}, d.flexslider.defaults, l),
            e = c.namespace,
            q = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
            u = q ? "touchend" : "click",
            m = "vertical" === c.direction,
            n = c.reverse,
            h = 0 < c.itemWidth,
            s = "fade" === c.animation,
            t = "" !== c.asNavFor,
            f = {};
        d.data(j, "flexslider", a);
        f = {
            init: function() {
                a.animating = !1;
                a.currentSlide = c.startAt;
                a.animatingTo = a.currentSlide;
                a.atEnd = 0 === a.currentSlide || a.currentSlide === a.last;
                a.containerSelector = c.selector.substr(0, c.selector.search(" "));
                a.slides = d(c.selector, a);
                a.container = d(a.containerSelector, a);
                a.count = a.slides.length;
                a.syncExists = 0 < d(c.sync).length;
                "slide" === c.animation && (c.animation = "swing");
                a.prop = m ? "top" : "marginLeft";
                a.args = {};
                a.manualPause = !1;
                var b = a,
                    g;
                if (g = !c.video)
                    if (g = !s)
                        if (g = c.useCSS) a: {
                            g = document.createElement("div");
                            var p = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                                e;
                            for (e in p)
                                if (void 0 !== g.style[p[e]]) {
                                    a.pfx = p[e].replace("Perspective", "").toLowerCase();
                                    a.prop = "-" + a.pfx + "-transform";
                                    g = !0;
                                    break a
                                }
                            g = !1
                        }
                        b.transitions = g;
                "" !== c.controlsContainer && (a.controlsContainer = 0 < d(c.controlsContainer).length && d(c.controlsContainer));
                "" !== c.manualControls && (a.manualControls = 0 < d(c.manualControls).length && d(c.manualControls));
                c.randomize && (a.slides.sort(function() {
                    return Math.round(Math.random()) - 0.5
                }), a.container.empty().append(a.slides));
                a.doMath();
                t && f.asNav.setup();
                a.setup("init");
                c.controlNav && f.controlNav.setup();
                c.directionNav && f.directionNav.setup();
                c.keyboard && (1 === d(a.containerSelector).length || c.multipleKeyboard) && d(document).bind("keyup", function(b) {
                    b = b.keyCode;
                    if (!a.animating && (39 === b || 37 === b)) b = 39 === b ? a.getTarget("next") : 37 === b ? a.getTarget("prev") : !1, a.flexAnimate(b, c.pauseOnAction)
                });
                c.mousewheel && a.bind("mousewheel", function(b, g) {
                    b.preventDefault();
                    var d = 0 > g ? a.getTarget("next") : a.getTarget("prev");
                    a.flexAnimate(d, c.pauseOnAction)
                });
                c.pausePlay && f.pausePlay.setup();
                c.slideshow && (c.pauseOnHover && a.hover(function() {
                    !a.manualPlay && !a.manualPause && a.pause()
                }, function() {
                    !a.manualPause && !a.manualPlay && a.play()
                }), 0 < c.initDelay ? setTimeout(a.play, c.initDelay) : a.play());
                q && c.touch && f.touch();
                (!s || s && c.smoothHeight) && d(window).bind("resize focus", f.resize);
                setTimeout(function() {
                    c.start(a)
                }, 200)
            },
            asNav: {
                setup: function() {
                    a.asNav = !0;
                    a.animatingTo = Math.floor(a.currentSlide / a.move);
                    a.currentItem = a.currentSlide;
                    a.slides.removeClass(e + "active-slide").eq(a.currentItem).addClass(e + "active-slide");
                    a.slides.click(function(b) {
                        b.preventDefault();
                        b = d(this);
                        var g = b.index();
                        !d(c.asNavFor).data("flexslider").animating && !b.hasClass("active") && (a.direction = a.currentItem < g ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    a.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var b = 1,
                        g;
                    a.controlNavScaffold = d('<ol class="' + e + "control-nav " + e + ("thumbnails" === c.controlNav ? "control-thumbs" : "control-paging") + '"></ol>');
                    if (1 < a.pagingCount)
                        for (var p = 0; p < a.pagingCount; p++) g = "thumbnails" === c.controlNav ? '<img src="' + a.slides.eq(p).attr("data-thumb") + '"/>' : "<a>" + b + "</a>", a.controlNavScaffold.append("<li>" + g + "</li>"), b++;
                    a.controlsContainer ? d(a.controlsContainer).append(a.controlNavScaffold) : a.append(a.controlNavScaffold);
                    f.controlNav.set();
                    f.controlNav.active();
                    a.controlNavScaffold.delegate("a, img", u, function(b) {
                        b.preventDefault();
                        b = d(this);
                        var g = a.controlNav.index(b);
                        b.hasClass(e + "active") || (a.direction = g > a.currentSlide ? "next" : "prev", a.flexAnimate(g, c.pauseOnAction))
                    });
                    q && a.controlNavScaffold.delegate("a", "click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                setupManual: function() {
                    a.controlNav = a.manualControls;
                    f.controlNav.active();
                    a.controlNav.live(u, function(b) {
                        b.preventDefault();
                        b = d(this);
                        var g = a.controlNav.index(b);
                        b.hasClass(e + "active") || (g > a.currentSlide ? a.direction = "next" : a.direction = "prev", a.flexAnimate(g, c.pauseOnAction))
                    });
                    q && a.controlNav.live("click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                set: function() {
                    a.controlNav = d("." + e + "control-nav li " + ("thumbnails" === c.controlNav ? "img" : "a"), a.controlsContainer ? a.controlsContainer : a)
                },
                active: function() {
                    a.controlNav.removeClass(e + "active").eq(a.animatingTo).addClass(e + "active")
                },
                update: function(b, c) {
                    1 < a.pagingCount && "add" === b ? a.controlNavScaffold.append(d("<li><a>" + a.count + "</a></li>")) : 1 === a.pagingCount ? a.controlNavScaffold.find("li").remove() : a.controlNav.eq(c).closest("li").remove();
                    f.controlNav.set();
                    1 < a.pagingCount && a.pagingCount !== a.controlNav.length ? a.update(c, b) : f.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var b = d('<ul class="' +
                        e + 'direction-nav"><li><a class="' + e + 'prev" href="#">' + c.prevText + '</a></li><li><a class="' + e + 'next" href="#">' + c.nextText + "</a></li></ul>");
                    a.controlsContainer ? (d(a.controlsContainer).append(b), a.directionNav = d("." + e + "direction-nav li a", a.controlsContainer)) : (a.append(b), a.directionNav = d("." + e + "direction-nav li a", a));
                    f.directionNav.update();
                    a.directionNav.bind(u, function(b) {
                        b.preventDefault();
                        b = d(this).hasClass(e + "next") ? a.getTarget("next") : a.getTarget("prev");
                        a.flexAnimate(b, c.pauseOnAction)
                    });
                    q && a.directionNav.bind("click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                update: function() {
                    var b = e + "disabled";
                    1 === a.pagingCount ? a.directionNav.addClass(b) : c.animationLoop ? a.directionNav.removeClass(b) : 0 === a.animatingTo ? a.directionNav.removeClass(b).filter("." + e + "prev").addClass(b) : a.animatingTo === a.last ? a.directionNav.removeClass(b).filter("." + e + "next").addClass(b) : a.directionNav.removeClass(b)
                }
            },
            pausePlay: {
                setup: function() {
                    var b = d('<div class="' + e + 'pauseplay"><a></a></div>');
                    a.controlsContainer ? (a.controlsContainer.append(b), a.pausePlay = d("." + e + "pauseplay a", a.controlsContainer)) : (a.append(b), a.pausePlay = d("." + e + "pauseplay a", a));
                    f.pausePlay.update(c.slideshow ? e + "pause" : e + "play");
                    a.pausePlay.bind(u, function(b) {
                        b.preventDefault();
                        d(this).hasClass(e + "pause") ? (a.manualPause = !0, a.manualPlay = !1, a.pause()) : (a.manualPause = !1, a.manualPlay = !0, a.play())
                    });
                    q && a.pausePlay.bind("click touchstart", function(a) {
                        a.preventDefault()
                    })
                },
                update: function(b) {
                    "play" === b ? a.pausePlay.removeClass(e + "pause").addClass(e + "play").text(c.playText) : a.pausePlay.removeClass(e + "play").addClass(e + "pause").text(c.pauseText)
                }
            },
            touch: function() {
                function b(b) {
                    k = m ? d - b.touches[0].pageY : d - b.touches[0].pageX;
                    q = m ? Math.abs(k) < Math.abs(b.touches[0].pageX - e) : Math.abs(k) < Math.abs(b.touches[0].pageY - e);
                    if (!q || 500 < Number(new Date) - l) b.preventDefault(), !s && a.transitions && (c.animationLoop || (k /= 0 === a.currentSlide && 0 > k || a.currentSlide === a.last && 0 < k ? Math.abs(k) / r + 2 : 1), a.setProps(f + k, "setTouch"))
                }

                function g() {
                    j.removeEventListener("touchmove",
                        b, !1);
                    if (a.animatingTo === a.currentSlide && !q && null !== k) {
                        var h = n ? -k : k,
                            m = 0 < h ? a.getTarget("next") : a.getTarget("prev");
                        a.canAdvance(m) && (550 > Number(new Date) - l && 50 < Math.abs(h) || Math.abs(h) > r / 2) ? a.flexAnimate(m, c.pauseOnAction) : s || a.flexAnimate(a.currentSlide, c.pauseOnAction, !0)
                    }
                    j.removeEventListener("touchend", g, !1);
                    f = k = e = d = null
                }
                var d, e, f, r, k, l, q = !1;
                j.addEventListener("touchstart", function(k) {
                    a.animating ? k.preventDefault() : 1 === k.touches.length && (a.pause(), r = m ? a.h : a.w, l = Number(new Date), f = h && n && a.animatingTo === a.last ? 0 : h && n ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : h && a.currentSlide === a.last ? a.limit : h ? (a.itemW + c.itemMargin) * a.move * a.currentSlide : n ? (a.last - a.currentSlide + a.cloneOffset) * r : (a.currentSlide + a.cloneOffset) * r, d = m ? k.touches[0].pageY : k.touches[0].pageX, e = m ? k.touches[0].pageX : k.touches[0].pageY, j.addEventListener("touchmove", b, !1), j.addEventListener("touchend", g, !1))
                }, !1)
            },
            resize: function() {
                !a.animating && a.is(":visible") && (h || a.doMath(), s ? f.smoothHeight() : h ? (a.slides.width(a.computedW), a.update(a.pagingCount), a.setProps()) : m ? (a.viewport.height(a.h), a.setProps(a.h, "setTotal")) : (c.smoothHeight && f.smoothHeight(), a.newSlides.width(a.computedW), a.setProps(a.computedW, "setTotal")))
            },
            smoothHeight: function(b) {
                if (!m || s) {
                    var c = s ? a : a.viewport;
                    b ? c.animate({
                        height: a.slides.eq(a.animatingTo).height()
                    }, b) : c.height(a.slides.eq(a.animatingTo).height())
                }
            },
            sync: function(b) {
                var g = d(c.sync).data("flexslider"),
                    e = a.animatingTo;
                switch (b) {
                    case "animate":
                        g.flexAnimate(e, c.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        !g.playing && !g.asNav && g.play();
                        break;
                    case "pause":
                        g.pause()
                }
            }
        };
        a.flexAnimate = function(b, g, p, j, l) {
            t && 1 === a.pagingCount && (a.direction = a.currentItem < b ? "next" : "prev");
            if (!a.animating && (a.canAdvance(b, l) || p) && a.is(":visible")) {
                if (t && j)
                    if (p = d(c.asNavFor).data("flexslider"), a.atEnd = 0 === b || b === a.count - 1, p.flexAnimate(b, !0, !1, !0, l), a.direction = a.currentItem < b ? "next" : "prev", p.direction = a.direction, Math.ceil((b + 1) / a.visible) - 1 !== a.currentSlide && 0 !== b) a.currentItem = b, a.slides.removeClass(e + "active-slide").eq(b).addClass(e +
                        "active-slide"), b = Math.floor(b / a.visible);
                    else return a.currentItem = b, a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide"), !1;
                a.animating = !0;
                a.animatingTo = b;
                c.before(a);
                g && a.pause();
                a.syncExists && !l && f.sync("animate");
                c.controlNav && f.controlNav.active();
                h || a.slides.removeClass(e + "active-slide").eq(b).addClass(e + "active-slide");
                a.atEnd = 0 === b || b === a.last;
                c.directionNav && f.directionNav.update();
                b === a.last && (c.end(a), c.animationLoop || a.pause());
                if (s) q ? (a.slides.eq(a.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), a.slides.eq(b).css({
                    opacity: 1,
                    zIndex: 2
                }), a.slides.unbind("webkitTransitionEnd transitionend"), a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend", function() {
                    c.after(a)
                }), a.animating = !1, a.currentSlide = a.animatingTo) : (a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed, c.easing), a.slides.eq(b).fadeIn(c.animationSpeed, c.easing, a.wrapup));
                else {
                    var r = m ? a.slides.filter(":first").height() : a.computedW;
                    h ? (b = c.itemWidth > a.w ? 2 * c.itemMargin : c.itemMargin, b = (a.itemW + b) * a.move * a.animatingTo, b = b > a.limit && 1 !== a.visible ? a.limit : b) : b = 0 === a.currentSlide && b === a.count - 1 && c.animationLoop && "next" !== a.direction ? n ? (a.count + a.cloneOffset) * r : 0 : a.currentSlide === a.last && 0 === b && c.animationLoop && "prev" !== a.direction ? n ? 0 : (a.count + 1) * r : n ? (a.count - 1 - b + a.cloneOffset) * r : (b + a.cloneOffset) * r;
                    a.setProps(b, "", c.animationSpeed);
                    if (a.transitions) {
                        if (!c.animationLoop || !a.atEnd) a.animating = !1, a.currentSlide = a.animatingTo;
                        a.container.unbind("webkitTransitionEnd transitionend");
                        a.container.bind("webkitTransitionEnd transitionend", function() {
                            a.wrapup(r)
                        })
                    } else a.container.animate(a.args, c.animationSpeed, c.easing, function() {
                        a.wrapup(r)
                    })
                }
                c.smoothHeight && f.smoothHeight(c.animationSpeed)
            }
        };
        a.wrapup = function(b) {
            !s && !h && (0 === a.currentSlide && a.animatingTo === a.last && c.animationLoop ? a.setProps(b, "jumpEnd") : a.currentSlide === a.last && (0 === a.animatingTo && c.animationLoop) && a.setProps(b, "jumpStart"));
            a.animating = !1;
            a.currentSlide = a.animatingTo;
            c.after(a)
        };
        a.animateSlides = function() {
            a.animating || a.flexAnimate(a.getTarget("next"))
        };
        a.pause = function() {
            clearInterval(a.animatedSlides);
            a.playing = !1;
            c.pausePlay && f.pausePlay.update("play");
            a.syncExists && f.sync("pause")
        };
        a.play = function() {
            a.animatedSlides = setInterval(a.animateSlides, c.slideshowSpeed);
            a.playing = !0;
            c.pausePlay && f.pausePlay.update("pause");
            a.syncExists && f.sync("play")
        };
        a.canAdvance = function(b, g) {
            var d = t ? a.pagingCount - 1 : a.last;
            return g ? !0 : t && a.currentItem === a.count - 1 && 0 === b && "prev" === a.direction ? !0 : t && 0 === a.currentItem && b === a.pagingCount - 1 && "next" !== a.direction ? !1 : b === a.currentSlide && !t ? !1 : c.animationLoop ? !0 : a.atEnd && 0 === a.currentSlide && b === d && "next" !== a.direction ? !1 : a.atEnd && a.currentSlide === d && 0 === b && "next" === a.direction ? !1 : !0
        };
        a.getTarget = function(b) {
            a.direction = b;
            return "next" === b ? a.currentSlide === a.last ? 0 : a.currentSlide + 1 : 0 === a.currentSlide ? a.last : a.currentSlide - 1
        };
        a.setProps = function(b, g, d) {
            var e, f = b ? b : (a.itemW + c.itemMargin) * a.move * a.animatingTo;
            e = -1 * function() {
                if (h) return "setTouch" === g ? b : n && a.animatingTo === a.last ? 0 : n ? a.limit - (a.itemW + c.itemMargin) * a.move * a.animatingTo : a.animatingTo === a.last ? a.limit : f;
                switch (g) {
                    case "setTotal":
                        return n ? (a.count - 1 - a.currentSlide + a.cloneOffset) * b : (a.currentSlide + a.cloneOffset) * b;
                    case "setTouch":
                        return b;
                    case "jumpEnd":
                        return n ? b : a.count * b;
                    case "jumpStart":
                        return n ? a.count * b : b;
                    default:
                        return b
                }
            }() + "px";
            a.transitions && (e = m ? "translate3d(0," + e + ",0)" : "translate3d(" + e + ",0,0)", d = void 0 !== d ? d / 1E3 + "s" : "0s", a.container.css("-" + a.pfx + "-transition-duration", d));
            a.args[a.prop] = e;
            (a.transitions || void 0 === d) && a.container.css(a.args)
        };
        a.setup = function(b) {
            if (s) a.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === b && (q ? a.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + c.animationSpeed / 1E3 + "s ease",
                zIndex: 1
            }).eq(a.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed, c.easing)), c.smoothHeight && f.smoothHeight();
            else {
                var g, p;
                "init" === b && (a.viewport = d('<div class="' + e + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(a).append(a.container), a.cloneCount = 0, a.cloneOffset = 0, n && (p = d.makeArray(a.slides).reverse(), a.slides = d(p), a.container.empty().append(a.slides)));
                c.animationLoop && !h && (a.cloneCount = 2, a.cloneOffset = 1, "init" !== b && a.container.find(".clone").remove(), a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone")));
                a.newSlides = d(c.selector, a);
                g = n ? a.count - 1 - a.currentSlide + a.cloneOffset : a.currentSlide + a.cloneOffset;
                m && !h ? (a.container.height(200 * (a.count + a.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    a.newSlides.css({
                        display: "block"
                    });
                    a.doMath();
                    a.viewport.height(a.h);
                    a.setProps(g * a.h, "init")
                }, "init" === b ? 100 : 0)) : (a.container.width(200 * (a.count + a.cloneCount) + "%"), a.setProps(g * a.computedW, "init"), setTimeout(function() {
                    a.doMath();
                    a.newSlides.css({
                        width: a.computedW,
                        "float": "left",
                        display: "block"
                    });
                    c.smoothHeight && f.smoothHeight()
                }, "init" === b ? 100 : 0))
            }
            h || a.slides.removeClass(e + "active-slide").eq(a.currentSlide).addClass(e + "active-slide")
        };
        a.doMath = function() {
            var b = a.slides.first(),
                d = c.itemMargin,
                e = c.minItems,
                f = c.maxItems;
            a.w = a.width();
            a.h = b.height();
            a.boxPadding = b.outerWidth() - b.width();
            h ? (a.itemT = c.itemWidth + d, a.minW = e ? e * a.itemT : a.w, a.maxW = f ? f * a.itemT : a.w, a.itemW = a.minW > a.w ? (a.w - d * e) / e : a.maxW < a.w ? (a.w - d * f) / f : c.itemWidth > a.w ? a.w : c.itemWidth, a.visible = Math.floor(a.w / (a.itemW + d)), a.move = 0 < c.move && c.move < a.visible ? c.move : a.visible, a.pagingCount = Math.ceil((a.count - a.visible) / a.move + 1), a.last = a.pagingCount - 1, a.limit = 1 === a.pagingCount ? 0 : c.itemWidth > a.w ? (a.itemW + 2 * d) * a.count - a.w -
                d : (a.itemW + d) * a.count - a.w - d) : (a.itemW = a.w, a.pagingCount = a.count, a.last = a.count - 1);
            a.computedW = a.itemW - a.boxPadding
        };
        a.update = function(b, d) {
            a.doMath();
            h || (b < a.currentSlide ? a.currentSlide += 1 : b <= a.currentSlide && 0 !== b && (a.currentSlide -= 1), a.animatingTo = a.currentSlide);
            if (c.controlNav && !a.manualControls)
                if ("add" === d && !h || a.pagingCount > a.controlNav.length) f.controlNav.update("add");
                else if ("remove" === d && !h || a.pagingCount < a.controlNav.length) h && a.currentSlide > a.last && (a.currentSlide -= 1, a.animatingTo -= 1), f.controlNav.update("remove", a.last);
            c.directionNav && f.directionNav.update()
        };
        a.addSlide = function(b, e) {
            var f = d(b);
            a.count += 1;
            a.last = a.count - 1;
            m && n ? void 0 !== e ? a.slides.eq(a.count - e).after(f) : a.container.prepend(f) : void 0 !== e ? a.slides.eq(e).before(f) : a.container.append(f);
            a.update(e, "add");
            a.slides = d(c.selector + ":not(.clone)", a);
            a.setup();
            c.added(a)
        };
        a.removeSlide = function(b) {
            var e = isNaN(b) ? a.slides.index(d(b)) : b;
            a.count -= 1;
            a.last = a.count - 1;
            isNaN(b) ? d(b, a.slides).remove() : m && n ? a.slides.eq(a.last).remove() : a.slides.eq(b).remove();
            a.doMath();
            a.update(e, "remove");
            a.slides = d(c.selector + ":not(.clone)", a);
            a.setup();
            c.removed(a)
        };
        f.init()
    };
    d.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7E3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "",
        nextText: "",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 0,
        maxItems: 0,
        move: 0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {}
    };
    d.fn.flexslider = function(j) {
        void 0 === j && (j = {});
        if ("object" === typeof j) return this.each(function() {
            var a = d(this),
                c = a.find(j.selector ? j.selector : ".slides > li");
            1 === c.length ? (c.fadeIn(400), j.start && j.start(a)) : void 0 == a.data("flexslider") && new d.flexslider(this, j)
        });
        var l = d(this).data("flexslider");
        switch (j) {
            case "play":
                l.play();
                break;
            case "pause":
                l.pause();
                break;
            case "next":
                l.flexAnimate(l.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                l.flexAnimate(l.getTarget("prev"), !0);
                break;
            default:
                "number" === typeof j && l.flexAnimate(j, !0)
        }
    }
})(jQuery);;
(function(a, b, c) {
    "use strict";
    var d = a.document,
        e = a.Modernizr,
        f = function(a) {
            return a.charAt(0).toUpperCase() + a.slice(1)
        },
        g = "Moz Webkit O Ms".split(" "),
        h = function(a) {
            var b = d.documentElement.style,
                c;
            if (typeof b[a] == "string") return a;
            a = f(a);
            for (var e = 0, h = g.length; e < h; e++) {
                c = g[e] + a;
                if (typeof b[c] == "string") return c
            }
        },
        i = h("transform"),
        j = h("transitionProperty"),
        k = {
            csstransforms: function() {
                return !!i
            },
            csstransforms3d: function() {
                var a = !!h("perspective");
                if (a) {
                    var c = " -o- -moz- -ms- -webkit- -khtml- ".split(" "),
                        d = "@media (" + c.join("transform-3d),(") + "modernizr)",
                        e = b("<style>" + d + "{#modernizr{height:3px}}" + "</style>").appendTo("head"),
                        f = b('<div id="modernizr" />').appendTo("html");
                    a = f.height() === 3, f.remove(), e.remove()
                }
                return a
            },
            csstransitions: function() {
                return !!j
            }
        },
        l;
    if (e)
        for (l in k) e.hasOwnProperty(l) || e.addTest(l, k[l]);
    else {
        e = a.Modernizr = {
            _version: "1.6ish: miniModernizr for Isotope"
        };
        var m = " ",
            n;
        for (l in k) n = k[l](), e[l] = n, m += " " + (n ? "" : "no-") + l;
        b("html").addClass(m)
    }
    if (e.csstransforms) {
        var o = e.csstransforms3d ? {
                translate: function(a) {
                    return "translate3d(" + a[0] + "px, " + a[1] + "px, 0) "
                },
                scale: function(a) {
                    return "scale3d(" + a + ", " + a + ", 1) "
                }
            } : {
                translate: function(a) {
                    return "translate(" + a[0] + "px, " + a[1] + "px) "
                },
                scale: function(a) {
                    return "scale(" + a + ") "
                }
            },
            p = function(a, c, d) {
                var e = b.data(a, "isoTransform") || {},
                    f = {},
                    g, h = {},
                    j;
                f[c] = d, b.extend(e, f);
                for (g in e) j = e[g], h[g] = o[g](j);
                var k = h.translate || "",
                    l = h.scale || "",
                    m = k + l;
                b.data(a, "isoTransform", e), a.style[i] = m
            };
        b.cssNumber.scale = !0, b.cssHooks.scale = {
            set: function(a, b) {
                p(a, "scale", b)
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.scale ? d.scale : 1
            }
        }, b.fx.step.scale = function(a) {
            b.cssHooks.scale.set(a.elem, a.now + a.unit)
        }, b.cssNumber.translate = !0, b.cssHooks.translate = {
            set: function(a, b) {
                p(a, "translate", b)
            },
            get: function(a, c) {
                var d = b.data(a, "isoTransform");
                return d && d.translate ? d.translate : [0, 0]
            }
        }
    }
    var q, r;
    e.csstransitions && (q = {
        WebkitTransitionProperty: "webkitTransitionEnd",
        MozTransitionProperty: "transitionend",
        OTransitionProperty: "oTransitionEnd otransitionend",
        transitionProperty: "transitionend"
    }[j], r = h("transitionDuration"));
    var s = b.event,
        t = b.event.handle ? "handle" : "dispatch",
        u;
    s.special.smartresize = {
        setup: function() {
            b(this).bind("resize", s.special.smartresize.handler)
        },
        teardown: function() {
            b(this).unbind("resize", s.special.smartresize.handler)
        },
        handler: function(a, b) {
            var c = this,
                d = arguments;
            a.type = "smartresize", u && clearTimeout(u), u = setTimeout(function() {
                s[t].apply(c, d)
            }, b === "execAsap" ? 0 : 100)
        }
    }, b.fn.smartresize = function(a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    }, b.Isotope = function(a, c, d) {
        this.element = b(c), this._create(a), this._init(d)
    };
    var v = ["width", "height"],
        w = b(a);
    b.Isotope.settings = {
        resizable: !0,
        layoutMode: "masonry",
        containerClass: "isotope",
        itemClass: "isotope-item",
        hiddenClass: "isotope-hidden",
        hiddenStyle: {
            opacity: 0,
            scale: .001
        },
        visibleStyle: {
            opacity: 1,
            scale: 1
        },
        containerStyle: {
            position: "relative",
            overflow: "hidden"
        },
        animationEngine: "best-available",
        animationOptions: {
            queue: !1,
            duration: 800
        },
        sortBy: "original-order",
        sortAscending: !0,
        resizesContainer: !0,
        transformsEnabled: !0,
        itemPositionDataEnabled: !1
    }, b.Isotope.prototype = {
        _create: function(a) {
            this.options = b.extend({}, b.Isotope.settings, a), this.styleQueue = [], this.elemCount = 0;
            var c = this.element[0].style;
            this.originalStyle = {};
            var d = v.slice(0);
            for (var e in this.options.containerStyle) d.push(e);
            for (var f = 0, g = d.length; f < g; f++) e = d[f], this.originalStyle[e] = c[e] || "";
            this.element.css(this.options.containerStyle), this._updateAnimationEngine(), this._updateUsingTransforms();
            var h = {
                "original-order": function(a, b) {
                    return b.elemCount++, b.elemCount
                },
                random: function() {
                    return Math.random()
                }
            };
            this.options.getSortData = b.extend(this.options.getSortData, h), this.reloadItems(), this.offset = {
                left: parseInt(this.element.css("padding-left") || 0, 10),
                top: parseInt(this.element.css("padding-top") || 0, 10)
            };
            var i = this;
            setTimeout(function() {
                i.element.addClass(i.options.containerClass)
            }, 0), this.options.resizable && w.bind("smartresize.isotope", function() {
                i.resize()
            }), this.element.delegate("." + this.options.hiddenClass, "click", function() {
                return !1
            })
        },
        _getAtoms: function(a) {
            var b = this.options.itemSelector,
                c = b ? a.filter(b).add(a.find(b)) : a,
                d = {
                    position: "absolute"
                };
            return c = c.filter(function(a, b) {
                return b.nodeType === 1
            }), this.usingTransforms && (d.left = 0, d.top = 0), c.css(d).addClass(this.options.itemClass), this.updateSortData(c, !0), c
        },
        _init: function(a) {
            this.$filteredAtoms = this._filter(this.$allAtoms), this._sort(), this.reLayout(a)
        },
        option: function(a) {
            if (b.isPlainObject(a)) {
                this.options = b.extend(!0, this.options, a);
                var c;
                for (var d in a) c = "_update" + f(d), this[c] && this[c]()
            }
        },
        _updateAnimationEngine: function() {
            var a = this.options.animationEngine.toLowerCase().replace(/[ _\-]/g, ""),
                b;
            switch (a) {
                case "css":
                case "none":
                    b = !1;
                    break;
                case "jquery":
                    b = !0;
                    break;
                default:
                    b = !e.csstransitions
            }
            this.isUsingJQueryAnimation = b, this._updateUsingTransforms()
        },
        _updateTransformsEnabled: function() {
            this._updateUsingTransforms()
        },
        _updateUsingTransforms: function() {
            var a = this.usingTransforms = this.options.transformsEnabled && e.csstransforms && e.csstransitions && !this.isUsingJQueryAnimation;
            a || (delete this.options.hiddenStyle.scale, delete this.options.visibleStyle.scale), this.getPositionStyles = a ? this._translate : this._positionAbs
        },
        _filter: function(a) {
            var b = this.options.filter === "" ? "*" : this.options.filter;
            if (!b) return a;
            var c = this.options.hiddenClass,
                d = "." + c,
                e = a.filter(d),
                f = e;
            if (b !== "*") {
                f = e.filter(b);
                var g = a.not(d).not(b).addClass(c);
                this.styleQueue.push({
                    $el: g,
                    style: this.options.hiddenStyle
                })
            }
            return this.styleQueue.push({
                $el: f,
                style: this.options.visibleStyle
            }), f.removeClass(c), a.filter(b)
        },
        updateSortData: function(a, c) {
            var d = this,
                e = this.options.getSortData,
                f, g;
            a.each(function() {
                f = b(this), g = {};
                for (var a in e) !c && a === "original-order" ? g[a] = b.data(this, "isotope-sort-data")[a] : g[a] = e[a](f, d);
                b.data(this, "isotope-sort-data", g)
            })
        },
        _sort: function() {
            var a = this.options.sortBy,
                b = this._getSorter,
                c = this.options.sortAscending ? 1 : -1,
                d = function(d, e) {
                    var f = b(d, a),
                        g = b(e, a);
                    return f === g && a !== "original-order" && (f = b(d, "original-order"), g = b(e, "original-order")), (f > g ? 1 : f < g ? -1 : 0) * c
                };
            this.$filteredAtoms.sort(d)
        },
        _getSorter: function(a, c) {
            return b.data(a, "isotope-sort-data")[c]
        },
        _translate: function(a, b) {
            return {
                translate: [a, b]
            }
        },
        _positionAbs: function(a, b) {
            return {
                left: a,
                top: b
            }
        },
        _pushPosition: function(a, b, c) {
            b = Math.round(b + this.offset.left), c = Math.round(c + this.offset.top);
            var d = this.getPositionStyles(b, c);
            this.styleQueue.push({
                $el: a,
                style: d
            }), this.options.itemPositionDataEnabled && a.data("isotope-item-position", {
                x: b,
                y: c
            })
        },
        layout: function(a, b) {
            var c = this.options.layoutMode;
            this["_" + c + "Layout"](a);
            if (this.options.resizesContainer) {
                var d = this["_" + c + "GetContainerSize"]();
                this.styleQueue.push({
                    $el: this.element,
                    style: d
                })
            }
            this._processStyleQueue(a, b), this.isLaidOut = !0
        },
        _processStyleQueue: function(a, c) {
            var d = this.isLaidOut ? this.isUsingJQueryAnimation ? "animate" : "css" : "css",
                f = this.options.animationOptions,
                g = this.options.onLayout,
                h, i, j, k;
            i = function(a, b) {
                b.$el[d](b.style, f)
            };
            if (this._isInserting && this.isUsingJQueryAnimation) i = function(a, b) {
                h = b.$el.hasClass("no-transition") ? "css" : d, b.$el[h](b.style, f)
            };
            else if (c || g || f.complete) {
                var l = !1,
                    m = [c, g, f.complete],
                    n = this;
                j = !0, k = function() {
                    if (l) return;
                    var b;
                    for (var c = 0, d = m.length; c < d; c++) b = m[c], typeof b == "function" && b.call(n.element, a, n);
                    l = !0
                };
                if (this.isUsingJQueryAnimation && d === "animate") f.complete = k, j = !1;
                else if (e.csstransitions) {
                    var o = 0,
                        p = this.styleQueue[0],
                        s = p && p.$el,
                        t;
                    while (!s || !s.length) {
                        t = this.styleQueue[o++];
                        if (!t) return;
                        s = t.$el
                    }
                    var u = parseFloat(getComputedStyle(s[0])[r]);
                    u > 0 && (i = function(a, b) {
                        b.$el[d](b.style, f).one(q, k)
                    }, j = !1)
                }
            }
            b.each(this.styleQueue, i), j && k(), this.styleQueue = []
        },
        resize: function() {
            this["_" + this.options.layoutMode + "ResizeChanged"]() && this.reLayout()
        },
        reLayout: function(a) {
            this["_" + this.options.layoutMode + "Reset"](), this.layout(this.$filteredAtoms, a)
        },
        addItems: function(a, b) {
            var c = this._getAtoms(a);
            this.$allAtoms = this.$allAtoms.add(c), b && b(c)
        },
        insert: function(a, b) {
            this.element.append(a);
            var c = this;
            this.addItems(a, function(a) {
                var d = c._filter(a);
                c._addHideAppended(d), c._sort(), c.reLayout(), c._revealAppended(d, b)
            })
        },
        appended: function(a, b) {
            var c = this;
            this.addItems(a, function(a) {
                c._addHideAppended(a), c.layout(a), c._revealAppended(a, b)
            })
        },
        _addHideAppended: function(a) {
            this.$filteredAtoms = this.$filteredAtoms.add(a), a.addClass("no-transition"), this._isInserting = !0, this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            })
        },
        _revealAppended: function(a, b) {
            var c = this;
            setTimeout(function() {
                a.removeClass("no-transition"), c.styleQueue.push({
                    $el: a,
                    style: c.options.visibleStyle
                }), c._isInserting = !1, c._processStyleQueue(a, b)
            }, 10)
        },
        reloadItems: function() {
            this.$allAtoms = this._getAtoms(this.element.children())
        },
        remove: function(a, b) {
            this.$allAtoms = this.$allAtoms.not(a), this.$filteredAtoms = this.$filteredAtoms.not(a);
            var c = this,
                d = function() {
                    a.remove(), b && b.call(c.element)
                };
            a.filter(":not(." + this.options.hiddenClass + ")").length ? (this.styleQueue.push({
                $el: a,
                style: this.options.hiddenStyle
            }), this._sort(), this.reLayout(d)) : d()
        },
        shuffle: function(a) {
            this.updateSortData(this.$allAtoms), this.options.sortBy = "random", this._sort(), this.reLayout(a)
        },
        destroy: function() {
            var a = this.usingTransforms,
                b = this.options;
            this.$allAtoms.removeClass(b.hiddenClass + " " + b.itemClass).each(function() {
                var b = this.style;
                b.position = "", b.top = "", b.left = "", b.opacity = "", a && (b[i] = "")
            });
            var c = this.element[0].style;
            for (var d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".isotope").undelegate("." + b.hiddenClass, "click").removeClass(b.containerClass).removeData("isotope"), w.unbind(".isotope")
        },
        _getSegments: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rowHeight" : "columnWidth",
                d = a ? "height" : "width",
                e = a ? "rows" : "cols",
                g = this.element[d](),
                h, i = this.options[b] && this.options[b][c] || this.$filteredAtoms["outer" + f(d)](!0) || g;
            h = Math.floor(g / i), h = Math.max(h, 1), this[b][e] = h, this[b][c] = i
        },
        _checkIfSegmentsChanged: function(a) {
            var b = this.options.layoutMode,
                c = a ? "rows" : "cols",
                d = this[b][c];
            return this._getSegments(a), this[b][c] !== d
        },
        _masonryReset: function() {
            this.masonry = {}, this._getSegments();
            var a = this.masonry.cols;
            this.masonry.colYs = [];
            while (a--) this.masonry.colYs.push(0)
        },
        _masonryLayout: function(a) {
            var c = this,
                d = c.masonry;
            a.each(function() {
                var a = b(this),
                    e = Math.ceil(a.outerWidth(!0) / d.columnWidth);
                e = Math.min(e, d.cols);
                if (e === 1) c._masonryPlaceBrick(a, d.colYs);
                else {
                    var f = d.cols + 1 - e,
                        g = [],
                        h, i;
                    for (i = 0; i < f; i++) h = d.colYs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                    c._masonryPlaceBrick(a, g)
                }
            })
        },
        _masonryPlaceBrick: function(a, b) {
            var c = Math.min.apply(Math, b),
                d = 0;
            for (var e = 0, f = b.length; e < f; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            var g = this.masonry.columnWidth * d,
                h = c;
            this._pushPosition(a, g, h);
            var i = c + a.outerHeight(!0),
                j = this.masonry.cols + 1 - f;
            for (e = 0; e < j; e++) this.masonry.colYs[d + e] = i
        },
        _masonryGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonry.colYs);
            return {
                height: a
            }
        },
        _masonryResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _fitRowsReset: function() {
            this.fitRows = {
                x: 0,
                y: 0,
                height: 0
            }
        },
        _fitRowsLayout: function(a) {
            var c = this,
                d = this.element.width(),
                e = this.fitRows;
            a.each(function() {
                var a = b(this),
                    f = a.outerWidth(!0),
                    g = a.outerHeight(!0);
                e.x !== 0 && f + e.x > d && (e.x = 0, e.y = e.height), c._pushPosition(a, e.x, e.y), e.height = Math.max(e.y + g, e.height), e.x += f
            })
        },
        _fitRowsGetContainerSize: function() {
            return {
                height: this.fitRows.height
            }
        },
        _fitRowsResizeChanged: function() {
            return !0
        },
        _cellsByRowReset: function() {
            this.cellsByRow = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByRowLayout: function(a) {
            var c = this,
                d = this.cellsByRow;
            a.each(function() {
                var a = b(this),
                    e = d.index % d.cols,
                    f = Math.floor(d.index / d.cols),
                    g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                    h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++
            })
        },
        _cellsByRowGetContainerSize: function() {
            return {
                height: Math.ceil(this.$filteredAtoms.length / this.cellsByRow.cols) * this.cellsByRow.rowHeight + this.offset.top
            }
        },
        _cellsByRowResizeChanged: function() {
            return this._checkIfSegmentsChanged()
        },
        _straightDownReset: function() {
            this.straightDown = {
                y: 0
            }
        },
        _straightDownLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, 0, c.straightDown.y), c.straightDown.y += d.outerHeight(!0)
            })
        },
        _straightDownGetContainerSize: function() {
            return {
                height: this.straightDown.y
            }
        },
        _straightDownResizeChanged: function() {
            return !0
        },
        _masonryHorizontalReset: function() {
            this.masonryHorizontal = {}, this._getSegments(!0);
            var a = this.masonryHorizontal.rows;
            this.masonryHorizontal.rowXs = [];
            while (a--) this.masonryHorizontal.rowXs.push(0)
        },
        _masonryHorizontalLayout: function(a) {
            var c = this,
                d = c.masonryHorizontal;
            a.each(function() {
                var a = b(this),
                    e = Math.ceil(a.outerHeight(!0) / d.rowHeight);
                e = Math.min(e, d.rows);
                if (e === 1) c._masonryHorizontalPlaceBrick(a, d.rowXs);
                else {
                    var f = d.rows + 1 - e,
                        g = [],
                        h, i;
                    for (i = 0; i < f; i++) h = d.rowXs.slice(i, i + e), g[i] = Math.max.apply(Math, h);
                    c._masonryHorizontalPlaceBrick(a, g)
                }
            })
        },
        _masonryHorizontalPlaceBrick: function(a, b) {
            var c = Math.min.apply(Math, b),
                d = 0;
            for (var e = 0, f = b.length; e < f; e++)
                if (b[e] === c) {
                    d = e;
                    break
                }
            var g = c,
                h = this.masonryHorizontal.rowHeight * d;
            this._pushPosition(a, g, h);
            var i = c + a.outerWidth(!0),
                j = this.masonryHorizontal.rows + 1 - f;
            for (e = 0; e < j; e++) this.masonryHorizontal.rowXs[d + e] = i
        },
        _masonryHorizontalGetContainerSize: function() {
            var a = Math.max.apply(Math, this.masonryHorizontal.rowXs);
            return {
                width: a
            }
        },
        _masonryHorizontalResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _fitColumnsReset: function() {
            this.fitColumns = {
                x: 0,
                y: 0,
                width: 0
            }
        },
        _fitColumnsLayout: function(a) {
            var c = this,
                d = this.element.height(),
                e = this.fitColumns;
            a.each(function() {
                var a = b(this),
                    f = a.outerWidth(!0),
                    g = a.outerHeight(!0);
                e.y !== 0 && g + e.y > d && (e.x = e.width, e.y = 0), c._pushPosition(a, e.x, e.y), e.width = Math.max(e.x + f, e.width), e.y += g
            })
        },
        _fitColumnsGetContainerSize: function() {
            return {
                width: this.fitColumns.width
            }
        },
        _fitColumnsResizeChanged: function() {
            return !0
        },
        _cellsByColumnReset: function() {
            this.cellsByColumn = {
                index: 0
            }, this._getSegments(), this._getSegments(!0)
        },
        _cellsByColumnLayout: function(a) {
            var c = this,
                d = this.cellsByColumn;
            a.each(function() {
                var a = b(this),
                    e = Math.floor(d.index / d.rows),
                    f = d.index % d.rows,
                    g = (e + .5) * d.columnWidth - a.outerWidth(!0) / 2,
                    h = (f + .5) * d.rowHeight - a.outerHeight(!0) / 2;
                c._pushPosition(a, g, h), d.index++
            })
        },
        _cellsByColumnGetContainerSize: function() {
            return {
                width: Math.ceil(this.$filteredAtoms.length / this.cellsByColumn.rows) * this.cellsByColumn.columnWidth
            }
        },
        _cellsByColumnResizeChanged: function() {
            return this._checkIfSegmentsChanged(!0)
        },
        _straightAcrossReset: function() {
            this.straightAcross = {
                x: 0
            }
        },
        _straightAcrossLayout: function(a) {
            var c = this;
            a.each(function(a) {
                var d = b(this);
                c._pushPosition(d, c.straightAcross.x, 0), c.straightAcross.x += d.outerWidth(!0)
            })
        },
        _straightAcrossGetContainerSize: function() {
            return {
                width: this.straightAcross.x
            }
        },
        _straightAcrossResizeChanged: function() {
            return !0
        }
    }, b.fn.imagesLoaded = function(a) {
        function h() {
            a.call(c, d)
        }

        function i(a) {
            var c = a.target;
            c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
        }
        var c = this,
            d = c.find("img").add(c.filter("img")),
            e = d.length,
            f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            g = [];
        return e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function() {
            var a = this.src;
            this.src = f, this.src = a
        }), c
    };
    var x = function(b) {
        a.console && a.console.error(b)
    };
    b.fn.isotope = function(a, c) {
        if (typeof a == "string") {
            var d = Array.prototype.slice.call(arguments, 1);
            this.each(function() {
                var c = b.data(this, "isotope");
                if (!c) {
                    x("cannot call methods on isotope prior to initialization; attempted to call method '" + a + "'");
                    return
                }
                if (!b.isFunction(c[a]) || a.charAt(0) === "_") {
                    x("no such method '" + a + "' for isotope instance");
                    return
                }
                c[a].apply(c, d)
            })
        } else this.each(function() {
            var d = b.data(this, "isotope");
            d ? (d.option(a), d._init(c)) : b.data(this, "isotope", new b.Isotope(a, this, c))
        });
        return this
    }
})(window, jQuery);

function isScrolledIntoView(e) {
    var t = "#" + e;
    var n = $(window).scrollTop();
    var r = n + $(window).height();
    if ($(t).length > 0) {
        var i = $(t).offset().top;
        var s = i + $(t).height()
    }
    return s >= n && i <= r && s <= r && i >= n
}

function sliding_horizontal_graph(e, t) {
    $("#" + e + " li span").each(function(n) {
        var r = n + 1;
        var i = $("#" + e + " li:nth-child(" + r + ") span");
        var s = i.attr("title");
        i.animate({
            width: s + "%"
        }, t)
    })
}

function graph_init(e, t) {
    $(window).scroll(function() {
        if (isScrolledIntoView(e)) {
            sliding_horizontal_graph(e, t)
        } else {}
    });
    if (isScrolledIntoView(e)) {
        sliding_horizontal_graph(e, t)
    }
}

function htmlDecode(e) {
    var t = $("<div/>").html(e).text();
    return t
}

function playpause(e) {
    if (e.hasClass("playing")) {
        $("#slider_container").cameraResume();
        e.removeClass("playing").addClass("paused")
    } else {
        $("#slider_container").cameraPause();
        e.removeClass("paused").addClass("playing")
    }
};
(function(e) {
    jQuery.browser = {};
    jQuery.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
    jQuery.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function(e) {
            var t = this.length >>> 0;
            var n = Number(arguments[1]) || 0;
            n = n < 0 ? Math.ceil(n) : Math.floor(n);
            if (n < 0) n += t;
            for (; n < t; n++) {
                if (n in this && this[n] === e) return n
            }
            return -1
        }
    }
    var t = [];
    var n = 0;
    var r = false;
    var i = "";
    var s = "";
    var o = "";
    var u = "";
    var a = 0;
    var f = 0;
    var l = {
        onComplete: function() {},
        backgroundColor: "#000",
        barColor: "#fff",
        overlayId: "qLoverlay",
        barHeight: 1,
        percentage: false,
        deepSearch: true,
        completeAnimation: "fade",
        minimumTime: 500,
        onLoadComplete: function() {
            if (l.completeAnimation == "grow") {
                var t = 500;
                var n = new Date;
                if (n.getTime() - f < l.minimumTime) {
                    t = l.minimumTime - (n.getTime() - f)
                }
                e(o).stop().animate({
                    width: "100%"
                }, {
                    duration: t,
                    complete: function() {
                        e(this).animate({
                            top: "0%",
                            width: "100%",
                            height: "100%"
                        }, 500, function() {
                            e("#" + l.overlayId).fadeOut(500, function() {
                                e(this).remove();
                                l.onComplete()
                            })
                        })
                    }
                })
            } else {
                e("#" + l.overlayId).fadeOut(500, function() {
                    e("#" + l.overlayId).remove();
                    l.onComplete()
                })
            }
        }
    };
    var c = function() {
        var e = new Date;
        f = e.getTime();
        if (t.length > 0) {
            h();
            m()
        } else {
            v()
        }
    };
    var h = function() {
        i = e("<div></div>").appendTo("body").css({
            display: "none",
            width: 0,
            height: 0,
            overflow: "hidden"
        });
        for (var n = 0; t.length > n; n++) {
            e.ajax({
                url: t[n],
                type: "HEAD",
                complete: function(e) {
                    if (!r) {
                        a++;
                        p(this["url"])
                    }
                }
            })
        }
    };
    var p = function(t) {
        var n = e("<img />").attr("src", t).bind("load error", function() {
            d()
        }).appendTo(i)
    };
    var d = function() {
        n++;
        var t = n / a * 100;
        e(o).stop().animate({
            width: t + "%",
            minWidth: t + "%"
        }, {
            duration: 200
        });
        if (l.percentage == true) {
            e(u).text(Math.ceil(t) + "%");
            e("#load .percentage").text(Math.ceil(t) + "%")
        }
        if (n == a) {
            v()
        }
    };
    var v = function() {
        e(i).remove();
        l.onLoadComplete();
        r = true
    };
    var m = function() {
        s = e("<div id='" + l.overlayId + "'></div>").appendTo("body");
        if (l.percentage == true) {
            u = e("<div id='qLpercentage'></div>").text("0%").css({
                height: "40px",
                width: "100px",
                position: "absolute",
                fontSize: "1.65em",
                top: "50%",
                left: "50%",
                marginTop: "-" + (59 + l.barHeight) + "px",
                textAlign: "center",
                marginLeft: "-50px",
                color: l.barColor
            }).appendTo(s);
            e("#load .percentage").css({
                height: "40px",
                width: "100px",
                position: "absolute",
                fontSize: "1.65em",
                top: "50%",
                left: "50%",
                marginTop: 59 + l.barHeight + "px",
                textAlign: "center",
                marginLeft: "-50px",
                color: l.barColor
            })
        }
        if (!t.length) {
            v()
        }
    };
    var g = function(n) {
        var r = "";
        if (e(n).css("background-image") != "none") {
            var r = e(n).css("background-image")
        } else if (typeof e(n).attr("src") != "undefined" && n.nodeName.toLowerCase() == "img") {
            var r = e(n).attr("src")
        }
        if (r.indexOf("gradient") == -1) {
            r = r.replace(/url\(\"/g, "");
            r = r.replace(/url\(/g, "");
            r = r.replace(/\"\)/g, "");
            r = r.replace(/\)/g, "");
            var i = r.split(", ");
            for (var s = 0; s < i.length; s++) {
                if (i[s].length > 0 && t.indexOf(i[s]) == -1 && !i[s].match(/^(data:)/i)) {
                    var o = "";
                    if (e.browser.msie && e.browser.version < 9) {
                        o = "?" + Math.floor(Math.random() * 3e3)
                    }
                    t.push(i[s] + o)
                }
            }
        }
    };
    e.fn.queryLoader2 = function(t) {
        if (t) {
            e.extend(l, t)
        }
        this.each(function() {
            g(this);
            if (l.deepSearch == true) {
                e(this).find("*:not(script)").each(function() {
                    g(this)
                })
            }
        });
        c();
        return this
    };
    var y = {
        init: function() {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS"
        },
        searchString: function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t].string;
                var r = e[t].prop;
                this.versionSearchString = e[t].versionSearch || e[t].identity;
                if (n) {
                    if (n.indexOf(e[t].subString) != -1) return e[t].identity
                } else if (r) return e[t].identity
            }
        },
        searchVersion: function(e) {
            var t = e.indexOf(this.versionSearchString);
            if (t == -1) return;
            return parseFloat(e.substring(t + this.versionSearchString.length + 1))
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera",
            versionSearch: "Version"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, {
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, {
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]
    };
    y.init();
    jQuery.browser.version = y.version
})(jQuery);;
(function(e) {
    if (typeof define === "function" && define.amd) define(["jquery"], e);
    else e(jQuery)
})(function(e) {
    e.fn.tweet = function(t) {
        function i(e, t) {
            if (typeof e === "string") {
                var n = e;
                for (var r in t) {
                    var i = t[r];
                    n = n.replace(new RegExp("{" + r + "}", "g"), i === null ? "" : i)
                }
                return n
            } else return e(t)
        }

        function s(t, n) {
            return function() {
                var r = [];
                this.each(function() {
                    r.push(this.replace(t, n))
                });
                return e(r)
            }
        }

        function o(e) {
            return e.replace(/</g, "&lt;").replace(/>/g, "^&gt;")
        }

        function u(e, t) {
            return e.replace(r, function(e) {
                var n = /^[a-z]+:/i.test(e) ? e : "http://" + e;
                var r = e;
                for (var i = 0; i < t.length; ++i) {
                    var s = t[i];
                    if (s.url == n && s.expanded_url) {
                        n = s.expanded_url;
                        r = s.display_url;
                        break
                    }
                }
                return '<a href="' + o(n) + '">' + o(r) + "</a>"
            })
        }

        function a(e) {
            return Date.parse(e.replace(/^([a-z]{3})( [a-z]{3} \d\d?)(.*)( \d{4})$/i, "$1,$2$4$3"))
        }

        function f(e) {
            var t = arguments.length > 1 ? arguments[1] : new Date;
            var n = parseInt((t.getTime() - e) / 1e3, 10);
            var r = "";
            if (n < 1) {
                r = "just now"
            } else if (n < 60) {
                r = n + " seconds ago"
            } else if (n < 120) {
                r = "about a minute ago"
            } else if (n < 45 * 60) {
                r = "about " + parseInt(n / 60, 10).toString() + " minutes ago"
            } else if (n < 2 * 60 * 60) {
                r = "about an hour ago"
            } else if (n < 24 * 60 * 60) {
                r = "about " + parseInt(n / 3600, 10).toString() + " hours ago"
            } else if (n < 48 * 60 * 60) {
                r = "about a day ago"
            } else {
                r = "about " + parseInt(n / 86400, 10).toString() + " days ago"
            }
            return r
        }

        function l(e) {
            if (e.match(/^(@([A-Za-z0-9-_]+)) .*/i)) {
                return n.auto_join_text_reply
            } else if (e.match(r)) {
                return n.auto_join_text_url
            } else if (e.match(/^((\w+ed)|just) .*/im)) {
                return n.auto_join_text_ed
            } else if (e.match(/^(\w*ing) .*/i)) {
                return n.auto_join_text_ing
            } else {
                return n.auto_join_text_default
            }
        }

        function c() {
            var t = n.modpath,
                r = n.fetch === null ? n.count : n.fetch,
                i = {
                    include_entities: 1
                };
            if (n.list) {
                return {
                    host: n.twitter_api_url,
                    url: "/1.1/lists/statuses.json",
                    parameters: e.extend({}, i, {
                        list_id: n.list_id,
                        slug: n.list,
                        owner_screen_name: n.username,
                        page: n.page,
                        count: r,
                        include_rts: n.retweets ? 1 : 0
                    })
                }
            } else if (n.favorites) {
                return {
                    host: n.twitter_api_url,
                    url: "/1.1/favorites/list.json",
                    parameters: e.extend({}, i, {
                        list_id: n.list_id,
                        screen_name: n.username,
                        page: n.page,
                        count: r
                    })
                }
            } else if (n.query === null && n.username.length === 1) {
                return {
                    host: n.twitter_api_url,
                    url: "/1.1/statuses/user_timeline.json",
                    parameters: e.extend({}, i, {
                        screen_name: n.username,
                        page: n.page,
                        count: r,
                        include_rts: n.retweets ? 1 : 0
                    })
                }
            } else {
                var s = n.query || "from:" + n.username.join(" OR from:");
                return {
                    host: n.twitter_search_url,
                    url: "/search.json",
                    parameters: e.extend({}, i, {
                        page: n.page,
                        q: s,
                        rpp: r
                    })
                }
            }
        }

        function h(e, t) {
            if (t) {
                return "user" in e ? e.user.profile_image_url_https : h(e, false).replace(/^http:\/\/[a-z0-9]{1,3}\.twimg\.com\//, "https://s3.amazonaws.com/twitter_production/")
            } else {
                return e.profile_image_url || e.user.profile_image_url
            }
        }

        function p(t) {
            var r = {};
            r.item = t;
            r.source = t.source;
            r.name = t.from_user_name || t.user.name;
            r.screen_name = t.from_user || t.user.screen_name;
            r.avatar_size = n.avatar_size;
            r.avatar_url = h(t, document.location.protocol === "https:");
            r.retweet = typeof t.retweeted_status != "undefined";
            r.tweet_time = a(t.created_at);
            r.join_text = n.join_text == "auto" ? l(t.text) : n.join_text;
            r.tweet_id = t.id_str;
            r.twitter_base = "http://" + n.twitter_url + "/";
            r.user_url = r.twitter_base + r.screen_name;
            r.tweet_url = r.user_url + "/status/" + r.tweet_id;
            r.reply_url = r.twitter_base + "intent/tweet?in_reply_to=" + r.tweet_id;
            r.retweet_url = r.twitter_base + "intent/retweet?tweet_id=" + r.tweet_id;
            r.favorite_url = r.twitter_base + "intent/favorite?tweet_id=" + r.tweet_id;
            r.retweeted_screen_name = r.retweet && t.retweeted_status.user.screen_name;
            r.tweet_relative_time = f(r.tweet_time);
            r.entities = t.entities ? (t.entities.urls || []).concat(t.entities.media || []) : [];
            r.tweet_raw_text = r.retweet ? "RT @" + r.retweeted_screen_name + " " + t.retweeted_status.text : t.text;
            r.tweet_text = e([u(r.tweet_raw_text, r.entities)]).linkUser().linkHash()[0];
            r.tweet_text_fancy = e([r.tweet_text]).makeHeart()[0];
            r.user = i('<a class="tweet_user" href="{user_url}">{screen_name}</a>', r);
            r.join = n.join_text ? i(' <span class="tweet_join">{join_text}</span> ', r) : " ";
            r.avatar = r.avatar_size ? i('<a class="tweet_avatar" href="{user_url}"><img src="{avatar_url}" height="{avatar_size}" width="{avatar_size}" alt="{screen_name}\'s avatar" title="{screen_name}\'s avatar" border="0"/></a>', r) : "";
            r.time = i('<span class="tweet_time"><a href="{tweet_url}" title="view tweet on twitter">{tweet_relative_time}</a></span>', r);
            r.text = i('<span class="tweet_text">{tweet_text_fancy}</span>', r);
            r.reply_action = i('<a class="tweet_action tweet_reply" href="{reply_url}">reply</a>', r);
            r.retweet_action = i('<a class="tweet_action tweet_retweet" href="{retweet_url}">retweet</a>', r);
            r.favorite_action = i('<a class="tweet_action tweet_favorite" href="{favorite_url}">favorite</a>', r);
            return r
        }
        var n = e.extend({
            modpath: "./twitter/",
            username: null,
            list_id: null,
            list: null,
            favorites: false,
            query: null,
            avatar_size: null,
            count: 3,
            fetch: null,
            page: 1,
            retweets: true,
            intro_text: null,
            outro_text: null,
            join_text: null,
            auto_join_text_default: "i said,",
            auto_join_text_ed: "i",
            auto_join_text_ing: "i am",
            auto_join_text_reply: "i replied to",
            auto_join_text_url: "i was looking at",
            loading_text: null,
            refresh_interval: null,
            twitter_url: "twitter.com",
            twitter_api_url: "api.twitter.com",
            twitter_search_url: "search.twitter.com",
            template: "{avatar}{time}{join}{text}",
            comparator: function(e, t) {
                return t["tweet_time"] - e["tweet_time"]
            },
            filter: function(e) {
                return true
            }
        }, t);
        var r = /\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?????????????????]))/gi;
        e.extend({
            tweet: {
                t: i
            }
        });
        e.fn.extend({
            linkUser: s(/(^|[\W])@(\w+)/gi, '$1<span class="at">@</span><a href="http://' + n.twitter_url + '/$2">$2</a>'),
            linkHash: s(/(?:^| )[\#]+([\w\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u00ff\u0600-\u06ff]+)/gi, ' <a href="http://' + n.twitter_search_url + "/search?q=&tag=$1&lang=all" + (n.username && n.username.length == 1 && !n.list ? "&from=" + n.username.join("%2BOR%2B") : "") + '" class="tweet_hashtag">#$1</a>'),
            makeHeart: s(/(&lt;)+[3]/gi, "<tt class='heart'>&#x2665;</tt>")
        });
        return this.each(function(t, r) {
            var s = e('<ul class="tweet_list">');
            var o = '<p class="tweet_intro">' + n.intro_text + "</p>";
            var u = '<p class="tweet_outro">' + n.outro_text + "</p>";
            var a = e('<p class="loading">' + n.loading_text + "</p>");
            if (n.username && typeof n.username == "string") {
                n.username = [n.username]
            }
            e(r).unbind("tweet:load").bind("tweet:load", function() {
                if (n.loading_text) e(r).empty().append(a);
                e.ajax({
                    dataType: "json",
                    type: "post",
                    async: false,
                    url: n.modpath || "/twitter/",
                    data: {
                        request: c()
                    },
                    success: function(t, a) {
                        if (t.message) {
                            console.log(t.message)
                        }
                        var f = t.response;
                        e(r).empty().append(s);
                        if (n.intro_text) s.before(o);
                        s.empty();
                        if (f.statuses !== undefined) {
                            resp = f.statuses
                        } else if (f.results !== undefined) {
                            resp = f.results
                        } else {
                            resp = f
                        }
                        var l = e.map(resp, p);
                        l = e.grep(l, n.filter).sort(n.comparator).slice(0, n.count);
                        s.append(e.map(l, function(e) {
                            return "<li>" + i(n.template, e) + "</li>"
                        }).join("")).children("li:first").addClass("tweet_first").end().children("li:odd").addClass("tweet_even").end().children("li:even").addClass("tweet_odd");
                        if (n.outro_text) s.after(u);
                        e(r).trigger("loaded").trigger(l ? "empty" : "full");
                        if (n.refresh_interval) {
                            window.setTimeout(function() {
                                e(r).trigger("tweet:load")
                            }, 1e3 * n.refresh_interval)
                        }
                    }
                })
            }).trigger("tweet:load")
        })
    }
});


/*!
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2012, John Dyer (http://j.hn)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
var mejs = mejs || {};
mejs.version = "2.9.1";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo"]
    }]
};
mejs.Utility = {
    encodeUrl: function(a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function(a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href
    },
    getScriptPath: function(a) {
        for (var b = 0, c, d = "", e = "", g, f = document.getElementsByTagName("script"), j = f.length, h = a.length; b < j; b++) {
            g = f[b].src;
            for (c = 0; c < h; c++) {
                e = a[c];
                if (g.indexOf(e) >
                    -1) {
                    d = g.substring(0, g.indexOf(e));
                    break
                }
            }
            if (d !== "") break
        }
        return d
    },
    secondsToTimeCode: function(a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d == "undefined") d = 25;
        var e = Math.floor(a / 3600) % 24,
            g = Math.floor(a / 60) % 60,
            f = Math.floor(a % 60);
        a = Math.floor((a % 1 * d).toFixed(3));
        return (b || e > 0 ? (e < 10 ? "0" + e : e) + ":" : "") + (g < 10 ? "0" + g : g) + ":" + (f < 10 ? "0" + f : f) + (c ? ":" + (a < 10 ? "0" + a : a) : "")
    },
    timeCodeToSeconds: function(a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d == "undefined") d = 25;
        a = a.split(":");
        b = parseInt(a[0],
            10);
        var e = parseInt(a[1], 10),
            g = parseInt(a[2], 10),
            f = 0,
            j = 0;
        if (c) f = parseInt(a[3]) / d;
        return j = b * 3600 + e * 60 + g + f
    },
    removeSwf: function(a) {
        var b = document.getElementById(a);
        if (b && b.nodeName == "OBJECT")
            if (mejs.MediaFeatures.isIE) {
                b.style.display = "none";
                (function() {
                    b.readyState == 4 ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
                })()
            } else b.parentNode.removeChild(b)
    },
    removeObjectInIE: function(a) {
        if (a = document.getElementById(a)) {
            for (var b in a)
                if (typeof a[b] == "function") a[b] = null;
            a.parentNode.removeChild(a)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function(a, b) {
        var c = this.plugins[a];
        b[1] = b[1] || 0;
        b[2] = b[2] || 0;
        return c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function(a, b, c, d) {
        var e = [0, 0, 0],
            g;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[a] == "object") {
            if ((c = this.nav.plugins[a].description) &&
                !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b] && !this.nav.mimeTypes[b].enabledPlugin)) {
                e = c.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (a = 0; a < e.length; a++) e[a] = parseInt(e[a].match(/\d+/), 10)
            }
        } else if (typeof window.ActiveXObject != "undefined") try {
            if (g = new ActiveXObject(c)) e = d(g)
        } catch (f) {}
        return e
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(a) {
    var b = [];
    if (a = a.GetVariable("$version")) {
        a = a.split(" ")[1].split(",");
        b = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]
    }
    return b
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(a) {
    var b = [0, 0, 0, 0],
        c = function(d, e, g, f) {
            for (; d.isVersionSupported(e[0] + "." + e[1] + "." + e[2] + "." + e[3]);) e[g] += f;
            e[g] -= f
        };
    c(a, b, 0, 1);
    c(a, b, 1, 1);
    c(a, b, 2, 1E4);
    c(a, b, 2, 1E3);
    c(a, b, 2, 100);
    c(a, b, 2, 10);
    c(a, b, 2, 1);
    c(a, b, 3, 1);
    return b
});
mejs.MediaFeatures = {
    init: function() {
        var a = this,
            b = document,
            c = mejs.PluginDetector.nav,
            d = mejs.PluginDetector.ua.toLowerCase(),
            e, g = ["source", "track", "audio", "video"];
        a.isiPad = d.match(/ipad/i) !== null;
        a.isiPhone = d.match(/iphone/i) !== null;
        a.isiOS = a.isiPhone || a.isiPad;
        a.isAndroid = d.match(/android/i) !== null;
        a.isBustedAndroid = d.match(/android 2\.[12]/) !== null;
        a.isIE = c.appName.toLowerCase().indexOf("microsoft") != -1;
        a.isChrome = d.match(/chrome/gi) !== null;
        a.isFirefox = d.match(/firefox/gi) !== null;
        a.isWebkit = d.match(/webkit/gi) !==
            null;
        a.isGecko = d.match(/gecko/gi) !== null && !a.isWebkit;
        a.isOpera = d.match(/opera/gi) !== null;
        a.hasTouch = "ontouchstart" in window;
        for (c = 0; c < g.length; c++) e = document.createElement(g[c]);
        a.supportsMediaTag = typeof e.canPlayType !== "undefined" || a.isBustedAndroid;
        a.hasSemiNativeFullScreen = typeof e.webkitEnterFullscreen !== "undefined";
        a.hasWebkitNativeFullScreen = typeof e.webkitRequestFullScreen !== "undefined";
        a.hasMozNativeFullScreen = typeof e.mozRequestFullScreen !== "undefined";
        a.hasTrueNativeFullScreen = a.hasWebkitNativeFullScreen ||
            a.hasMozNativeFullScreen;
        a.nativeFullScreenEnabled = a.hasTrueNativeFullScreen;
        if (a.hasMozNativeFullScreen) a.nativeFullScreenEnabled = e.mozFullScreenEnabled;
        if (this.isChrome) a.hasSemiNativeFullScreen = false;
        if (a.hasTrueNativeFullScreen) {
            a.fullScreenEventName = a.hasWebkitNativeFullScreen ? "webkitfullscreenchange" : "mozfullscreenchange";
            a.isFullScreen = function() {
                if (e.mozRequestFullScreen) return b.mozFullScreen;
                else if (e.webkitRequestFullScreen) return b.webkitIsFullScreen
            };
            a.requestFullScreen = function(f) {
                if (a.hasWebkitNativeFullScreen) f.webkitRequestFullScreen();
                else a.hasMozNativeFullScreen && f.mozRequestFullScreen()
            };
            a.cancelFullScreen = function() {
                if (a.hasWebkitNativeFullScreen) document.webkitCancelFullScreen();
                else a.hasMozNativeFullScreen && document.mozCancelFullScreen()
            }
        }
        if (a.hasSemiNativeFullScreen && d.match(/mac os x 10_5/i)) {
            a.hasNativeFullScreen = false;
            a.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function(a) {
        this.currentTime = a
    },
    setMuted: function(a) {
        this.muted = a
    },
    setVolume: function(a) {
        this.volume = a
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
        if (typeof a == "string") this.src = a;
        else {
            var c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) this.src = c.src
            }
        }
    },
    setVideoSize: function(a, b) {
        this.width = a;
        this.height = b
    }
};
mejs.PluginMediaElement = function(a, b, c) {
    this.id = a;
    this.pluginType = b;
    this.src = c;
    this.events = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    tagName: "",
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function() {
        if (this.pluginApi != null) {
            this.pluginType != "youtube" && this.pluginApi.loadMedia();
            this.paused =
                false
        }
    },
    pause: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function(a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++) {
            d = e[b];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))
                for (c = 0; c < d.types.length; c++)
                    if (a == d.types[c]) return true
        }
        return false
    },
    positionFullscreenButton: function(a, b, c) {
        this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(a, b, c)
    },
    hideFullscreenButton: function() {
        this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var b, c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a)
                }
            }
        }
    },
    setCurrentTime: function(a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a);
            this.currentTime = a
        }
    },
    setVolume: function(a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.setVolume(a * 100) : this.pluginApi.setVolume(a);
            this.volume = a
        }
    },
    setMuted: function(a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                a ? this.pluginApi.mute() : this.pluginApi.unMute();
                this.muted = a;
                this.dispatchEvent("volumechange")
            } else this.pluginApi.setMuted(a);
            this.muted = a
        }
    },
    setVideoSize: function(a, b) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = a + "px";
            this.pluginElement.style.height = b + "px"
        }
        this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function(a) {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(true)
    },
    exitFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen &&
            this.setFullscreen(false)
    },
    addEventListener: function(a, b) {
        this.events[a] = this.events[a] || [];
        this.events[a].push(b)
    },
    removeEventListener: function(a, b) {
        if (!a) {
            this.events = {};
            return true
        }
        var c = this.events[a];
        if (!c) return true;
        if (!b) {
            this.events[a] = [];
            return true
        }
        for (i = 0; i < c.length; i++)
            if (c[i] === b) {
                this.events[a].splice(i, 1);
                return true
            }
        return false
    },
    dispatchEvent: function(a) {
        var b, c, d = this.events[a];
        if (d) {
            c = Array.prototype.slice.call(arguments, 1);
            for (b = 0; b < d.length; b++) d[b].apply(null, c)
        }
    },
    attributes: {},
    hasAttribute: function(a) {
        return a in this.attributes
    },
    removeAttribute: function(a) {
        delete this.attributes[a]
    },
    getAttribute: function(a) {
        if (this.hasAttribute(a)) return this.attributes[a];
        return ""
    },
    setAttribute: function(a, b) {
        this.attributes[a] = b
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(a, b, c) {
        this.pluginMediaElements[a] = b;
        this.htmlMediaElements[a] = c
    },
    initPlugin: function(a) {
        var b = this.pluginMediaElements[a],
            c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
                case "flash":
                    b.pluginElement = b.pluginApi = document.getElementById(a);
                    break;
                case "silverlight":
                    b.pluginElement = document.getElementById(b.id);
                    b.pluginApi = b.pluginElement.Content.MediaElementJS
            }
            b.pluginApi != null && b.success && b.success(b,
                c)
        }
    },
    fireEvent: function(a, b, c) {
        var d, e;
        a = this.pluginMediaElements[a];
        a.ended = false;
        a.paused = true;
        b = {
            type: b,
            target: a
        };
        for (d in c) {
            a[d] = c[d];
            b[d] = c[d]
        }
        e = c.bufferedTime || 0;
        b.target.buffered = b.buffered = {
            start: function() {
                return 0
            },
            end: function() {
                return e
            },
            length: 1
        };
        a.dispatchEvent(b.type, b)
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    enablePluginSmoothing: false,
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function() {},
    error: function() {}
};
mejs.MediaElement = function(a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
};
mejs.HtmlMediaElementShim = {
    create: function(a, b) {
        var c = mejs.MediaElementDefaults,
            d = typeof a == "string" ? document.getElementById(a) : a,
            e = d.tagName.toLowerCase(),
            g = e === "audio" || e === "video",
            f = g ? d.getAttribute("src") : d.getAttribute("href");
        e = d.getAttribute("poster");
        var j = d.getAttribute("autoplay"),
            h = d.getAttribute("preload"),
            l = d.getAttribute("controls"),
            k;
        for (k in b) c[k] = b[k];
        f = typeof f == "undefined" || f === null || f == "" ? null : f;
        e = typeof e == "undefined" || e === null ? "" : e;
        h = typeof h == "undefined" || h === null || h === "false" ?
            "none" : h;
        j = !(typeof j == "undefined" || j === null || j === "false");
        l = !(typeof l == "undefined" || l === null || l === "false");
        k = this.determinePlayback(d, c, mejs.MediaFeatures.supportsMediaTag, g, f);
        k.url = k.url !== null ? mejs.Utility.absolutizeUrl(k.url) : "";
        if (k.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                d.src = k.url;
                d.addEventListener("click", function() {
                    d.play()
                }, false)
            }
            return this.updateNative(k, c, j, h)
        } else if (k.method !== "") return this.createPlugin(k, c, e, j, h, l);
        else {
            this.createErrorMessage(k, c, e);
            return this
        }
    },
    determinePlayback: function(a, b, c, d, e) {
        var g = [],
            f, j, h = {
                method: "",
                url: "",
                htmlMediaElement: a,
                isVideo: a.tagName.toLowerCase() != "audio"
            },
            l, k;
        if (typeof b.type != "undefined" && b.type !== "")
            if (typeof b.type == "string") g.push({
                type: b.type,
                url: e
            });
            else
                for (f = 0; f < b.type.length; f++) g.push({
                    type: b.type[f],
                    url: e
                });
        else if (e !== null) {
            j = this.formatType(e, a.getAttribute("type"));
            g.push({
                type: j,
                url: e
            })
        } else
            for (f = 0; f < a.childNodes.length; f++) {
                j = a.childNodes[f];
                if (j.nodeType == 1 && j.tagName.toLowerCase() == "source") {
                    e = j.getAttribute("src");
                    j = this.formatType(e, j.getAttribute("type"));
                    g.push({
                        type: j,
                        url: e
                    })
                }
            }
        if (!d && g.length > 0 && g[0].url !== null && this.getTypeFromFile(g[0].url).indexOf("audio") > -1) h.isVideo = false;
        if (mejs.MediaFeatures.isBustedAndroid) a.canPlayType = function(m) {
            return m.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
        };
        if (c && (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "native")) {
            if (!d) {
                f = document.createElement(h.isVideo ? "video" : "audio");
                a.parentNode.insertBefore(f, a);
                a.style.display = "none";
                h.htmlMediaElement = a = f
            }
            for (f =
                0; f < g.length; f++)
                if (a.canPlayType(g[f].type).replace(/no/, "") !== "" || a.canPlayType(g[f].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                    h.method = "native";
                    h.url = g[f].url;
                    break
                }
            if (h.method === "native") {
                if (h.url !== null) a.src = h.url;
                if (b.mode !== "auto_plugin") return h
            }
        }
        if (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "shim")
            for (f = 0; f < g.length; f++) {
                j = g[f].type;
                for (a = 0; a < b.plugins.length; a++) {
                    e = b.plugins[a];
                    l = mejs.plugins[e];
                    for (c = 0; c < l.length; c++) {
                        k = l[c];
                        if (k.version == null || mejs.PluginDetector.hasPluginVersion(e,
                                k.version))
                            for (d = 0; d < k.types.length; d++)
                                if (j == k.types[d]) {
                                    h.method = e;
                                    h.url = g[f].url;
                                    return h
                                }
                    }
                }
            }
        if (b.mode === "auto_plugin" && h.method === "native") return h;
        if (h.method === "" && g.length > 0) h.url = g[0].url;
        return h
    },
    formatType: function(a, b) {
        return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    },
    getTypeFromFile: function(a) {
        a = a.substring(a.lastIndexOf(".") + 1);
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a) ? "video" : "audio") + "/" + this.getTypeFromExtension(a)
    },
    getTypeFromExtension: function(a) {
        var b =
            a;
        mejs.$.each({
            mp4: ["mp4", "m4v"],
            ogg: ["ogg", "ogv", "oga"],
            webm: ["webm", "webmv", "webma"]
        }, function(c, d) {
            if (d.indexOf(a) > -1) b = c
        });
        return b
    },
    createErrorMessage: function(a, b, c) {
        var d = a.htmlMediaElement,
            e = document.createElement("div");
        e.className = "me-cannotplay";
        try {
            e.style.width = d.width + "px";
            e.style.height = d.height + "px"
        } catch (g) {}
        e.innerHTML = c !== "" ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>Download File</span></a>';
        d.parentNode.insertBefore(e, d);
        d.style.display = "none";
        b.error(d)
    },
    createPlugin: function(a, b, c, d, e, g) {
        c = a.htmlMediaElement;
        var f = 1,
            j = 1,
            h = "me_" + a.method + "_" + mejs.meIndex++,
            l = new mejs.PluginMediaElement(h, a.method, a.url),
            k = document.createElement("div"),
            m;
        l.tagName = c.tagName;
        for (m = 0; m < c.attributes.length; m++) {
            var n = c.attributes[m];
            n.specified == true && l.setAttribute(n.name, n.value)
        }
        for (m = c.parentNode; m !== null && m.tagName.toLowerCase() != "body";) {
            if (m.parentNode.tagName.toLowerCase() == "p") {
                m.parentNode.parentNode.insertBefore(m, m.parentNode);
                break
            }
            m = m.parentNode
        }
        if (a.isVideo) {
            f = b.videoWidth > 0 ? b.videoWidth : c.getAttribute("width") !== null ? c.getAttribute("width") : b.defaultVideoWidth;
            j = b.videoHeight > 0 ? b.videoHeight : c.getAttribute("height") !== null ? c.getAttribute("height") : b.defaultVideoHeight;
            f = mejs.Utility.encodeUrl(f);
            j = mejs.Utility.encodeUrl(j)
        } else if (b.enablePluginDebug) {
            f = 320;
            j = 240
        }
        l.success = b.success;
        mejs.MediaPluginBridge.registerPluginElement(h, l, c);
        k.className = "me-plugin";
        k.id = h + "_container";
        a.isVideo ? c.parentNode.insertBefore(k,
            c) : document.body.insertBefore(k, document.body.childNodes[0]);
        d = ["id=" + h, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" + f, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "height=" + j];
        if (a.url !== null) a.method == "flash" ? d.push("file=" + mejs.Utility.encodeUrl(a.url)) : d.push("file=" + a.url);
        b.enablePluginDebug && d.push("debug=true");
        b.enablePluginSmoothing && d.push("smoothing=true");
        g && d.push("controls=true");
        if (b.pluginVars) d = d.concat(b.pluginVars);
        switch (a.method) {
            case "silverlight":
                k.innerHTML =
                    '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + h + '" name="' + h + '" width="' + f + '" height="' + j + '"><param name="initParams" value="' + d.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
                break;
            case "flash":
                if (mejs.MediaFeatures.isIE) {
                    a = document.createElement("div");
                    k.appendChild(a);
                    a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + h + '" width="' + f + '" height="' + j + '"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + d.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
                } else k.innerHTML =
                    '<embed id="' + h + '" name="' + h + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + d.join("&") + '" width="' + f + '" height="' + j + '"></embed>';
                break;
            case "youtube":
                b = a.url.substr(a.url.lastIndexOf("=") + 1);
                youtubeSettings = {
                    container: k,
                    containerId: k.id,
                    pluginMediaElement: l,
                    pluginId: h,
                    videoId: b,
                    height: j,
                    width: f
                };
                mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case "vimeo":
                l.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1);
                k.innerHTML = '<object width="' + f + '" height="' + j + '"><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="flashvars" value="api=1" /><param name="movie" value="http://vimeo.com/moogaloop.swf?clip_id=' + l.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" /><embed src="//vimeo.com/moogaloop.swf?api=1&amp;clip_id=' +
                    l.vimeoid + '&amp;server=vimeo.com&amp;show_title=0&amp;show_byline=0&amp;show_portrait=0&amp;color=00adef&amp;fullscreen=1&amp;autoplay=0&amp;loop=0" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="' + f + '" height="' + j + '"></embed></object>'
        }
        c.style.display = "none";
        return l
    },
    updateNative: function(a, b) {
        var c = a.htmlMediaElement,
            d;
        for (d in mejs.HtmlMediaElement) c[d] = mejs.HtmlMediaElement[d];
        b.success(c, c);
        return c
    }
};
mejs.YouTubeApi = {
    isIframeStarted: false,
    isIframeLoaded: false,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "http://www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b);
            this.isIframeStarted = true
        }
    },
    iframeQueue: [],
    enqueueIframe: function(a) {
        if (this.isLoaded) this.createIframe(a);
        else {
            this.loadIframeApi();
            this.iframeQueue.push(a)
        }
    },
    createIframe: function(a) {
        var b = a.pluginMediaElement,
            c = new YT.Player(a.containerId, {
                height: a.height,
                width: a.width,
                videoId: a.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function() {
                        a.pluginMediaElement.pluginApi = c;
                        mejs.MediaPluginBridge.initPlugin(a.pluginId);
                        setInterval(function() {
                            mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function(d) {
                        mejs.YouTubeApi.handleStateChange(d.data, c, b)
                    }
                }
            })
    },
    createEvent: function(a, b, c) {
        c = {
            type: c,
            target: b
        };
        if (a && a.getDuration) {
            b.currentTime = c.currentTime = a.getCurrentTime();
            b.duration = c.duration = a.getDuration();
            c.paused = b.paused;
            c.ended = b.ended;
            c.muted = a.isMuted();
            c.volume = a.getVolume() / 100;
            c.bytesTotal = a.getVideoBytesTotal();
            c.bufferedBytes = a.getVideoBytesLoaded();
            var d = c.bufferedBytes / c.bytesTotal * c.duration;
            c.target.buffered = c.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return d
                },
                length: 1
            }
        }
        b.dispatchEvent(c.type, c)
    },
    iFrameReady: function() {
        for (this.isIframeLoaded = this.isLoaded = true; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    },
    flashPlayers: {},
    createFlash: function(a) {
        this.flashPlayers[a.pluginId] =
            a;
        var b, c = "http://www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            b = document.createElement("div");
            a.container.appendChild(b);
            b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '"><param name="movie" value="' + c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
        } else a.container.innerHTML =
            '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; "><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function(a) {
        var b = this.flashPlayers[a],
            c = document.getElementById(a),
            d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c;
        mejs.MediaPluginBridge.initPlugin(a);
        c.cueVideoById(b.videoId);
        a = b.containerId + "_callback";
        window[a] = function(e) {
            mejs.YouTubeApi.handleStateChange(e,
                c, d)
        };
        c.addEventListener("onStateChange", a);
        setInterval(function() {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
        }, 250)
    },
    handleStateChange: function(a, b, c) {
        switch (a) {
            case -1:
                c.paused = true;
                c.ended = true;
                mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
                break;
            case 0:
                c.paused = false;
                c.ended = true;
                mejs.YouTubeApi.createEvent(b, c, "ended");
                break;
            case 1:
                c.paused = false;
                c.ended = false;
                mejs.YouTubeApi.createEvent(b, c, "play");
                mejs.YouTubeApi.createEvent(b, c, "playing");
                break;
            case 2:
                c.paused = true;
                c.ended = false;
                mejs.YouTubeApi.createEvent(b,
                    c, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(b, c, "progress")
        }
    }
};

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;


/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2012, John Dyer (http://j.hn/)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
if (typeof jQuery != "undefined") mejs.$ = jQuery;
else if (typeof ender != "undefined") mejs.$ = ender;
(function(f) {
    mejs.MepDefaults = {
        poster: "",
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function(a) {
            return a.duration * 0.05
        },
        defaultSeekForwardInterval: function(a) {
            return a.duration * 0.05
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: 0.8,
        loop: false,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [{
            keys: [32, 179],
            action: function(a, b) {
                b.paused || b.ended ? b.play() : b.pause()
            }
        }, {
            keys: [38],
            action: function(a, b) {
                b.setVolume(Math.min(b.volume + 0.1, 1))
            }
        }, {
            keys: [40],
            action: function(a, b) {
                b.setVolume(Math.max(b.volume - 0.1, 0))
            }
        }, {
            keys: [37, 227],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration >
                    0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [39, 228],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [70],
            action: function(a) {
                if (typeof a.enterFullScreen != "undefined") a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }]
    };
    mejs.mepIndex = 0;
    mejs.players = [];
    mejs.MediaElementPlayer = function(a, b) {
        if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(a, b);
        this.$media = this.$node = f(a);
        this.node = this.media = this.$media[0];
        if (typeof this.node.player != "undefined") return this.node.player;
        else this.node.player = this;
        if (typeof b == "undefined") b = this.$node.data("mejsoptions");
        this.options = f.extend({}, mejs.MepDefaults, b);
        mejs.players.push(this);
        this.init();
        return this
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false,
        controlsAreVisible: true,
        init: function() {
            var a = this,
                b = mejs.MediaFeatures,
                c = f.extend(true, {}, a.options, {
                    success: function(e, g) {
                        a.meReady(e, g)
                    },
                    error: function(e) {
                        a.handleError(e)
                    }
                }),
                d = a.media.tagName.toLowerCase();
            a.isDynamic = d !== "audio" && d !== "video";
            a.isVideo = a.isDynamic ? a.options.isVideo : d !== "audio" && a.options.isVideo;
            if (b.isiPad && a.options.iPadUseNativeControls || b.isiPhone && a.options.iPhoneUseNativeControls) {
                a.$media.attr("controls", "controls");
                if (b.isiPad && a.media.getAttribute("autoplay") !== null) {
                    a.media.load();
                    a.media.play()
                }
            } else if (!(b.isAndroid && a.AndroidUseNativeControls)) {
                a.$media.removeAttr("controls");
                a.id = "mep_" + mejs.mepIndex++;
                a.container = f('<div id="' + a.id + '" class="mejs-container"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);
                a.container.addClass((b.isAndroid ? "mejs-android " : "") + (b.isiOS ? "mejs-ios " : "") + (b.isiPad ? "mejs-ipad " :
                    "") + (b.isiPhone ? "mejs-iphone " : "") + (a.isVideo ? "mejs-video " : "mejs-audio "));
                if (b.isiOS) {
                    b = a.$media.clone();
                    a.container.find(".mejs-mediaelement").append(b);
                    a.$media.remove();
                    a.$node = a.$media = b;
                    a.node = a.media = b[0]
                } else a.container.find(".mejs-mediaelement").append(a.$media);
                a.controls = a.container.find(".mejs-controls");
                a.layers = a.container.find(".mejs-layers");
                b = a.isVideo ? "video" : "audio";
                d = b.substring(0, 1).toUpperCase() + b.substring(1);
                a.width = a.options[b + "Width"] > 0 || a.options[b + "Width"].toString().indexOf("%") >
                    -1 ? a.options[b + "Width"] : a.media.style.width !== "" && a.media.style.width !== null ? a.media.style.width : a.media.getAttribute("width") !== null ? a.$media.attr("width") : a.options["default" + d + "Width"];
                a.height = a.options[b + "Height"] > 0 || a.options[b + "Height"].toString().indexOf("%") > -1 ? a.options[b + "Height"] : a.media.style.height !== "" && a.media.style.height !== null ? a.media.style.height : a.$media[0].getAttribute("height") !== null ? a.$media.attr("height") : a.options["default" + d + "Height"];
                a.setPlayerSize(a.width, a.height);
                c.pluginWidth = a.height;
                c.pluginHeight = a.width
            }
            mejs.MediaElement(a.$media[0], c)
        },
        showControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!b.controlsAreVisible) {
                if (a) {
                    b.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function() {
                        b.controlsAreVisible = true
                    });
                    b.container.find(".mejs-control").css("visibility", "visible").stop(true, true).fadeIn(200, function() {
                        b.controlsAreVisible = true
                    })
                } else {
                    b.controls.css("visibility", "visible").css("display", "block");
                    b.container.find(".mejs-control").css("visibility",
                        "visible").css("display", "block");
                    b.controlsAreVisible = true
                }
                b.setControlsSize()
            }
        },
        hideControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (b.controlsAreVisible)
                if (a) {
                    b.controls.stop(true, true).fadeOut(200, function() {
                        f(this).css("visibility", "hidden").css("display", "block");
                        b.controlsAreVisible = false
                    });
                    b.container.find(".mejs-control").stop(true, true).fadeOut(200, function() {
                        f(this).css("visibility", "hidden").css("display", "block")
                    })
                } else {
                    b.controls.css("visibility", "hidden").css("display",
                        "block");
                    b.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                    b.controlsAreVisible = false
                }
        },
        controlsTimer: null,
        startControlsTimer: function(a) {
            var b = this;
            a = typeof a != "undefined" ? a : 1500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function() {
                b.hideControls();
                b.killControlsTimer("hide")
            }, a)
        },
        killControlsTimer: function() {
            if (this.controlsTimer !== null) {
                clearTimeout(this.controlsTimer);
                delete this.controlsTimer;
                this.controlsTimer = null
            }
        },
        controlsEnabled: true,
        disableControls: function() {
            this.killControlsTimer();
            this.hideControls(false);
            this.controlsEnabled = false
        },
        enableControls: function() {
            this.showControls(false);
            this.controlsEnabled = true
        },
        meReady: function(a, b) {
            var c = this,
                d = mejs.MediaFeatures,
                e = b.getAttribute("autoplay");
            e = !(typeof e == "undefined" || e === null || e === "false");
            var g;
            if (!c.created) {
                c.created = true;
                c.media = a;
                c.domNode = b;
                if (!(d.isAndroid && c.options.AndroidUseNativeControls) && !(d.isiPad && c.options.iPadUseNativeControls) && !(d.isiPhone && c.options.iPhoneUseNativeControls)) {
                    c.buildposter(c, c.controls, c.layers,
                        c.media);
                    c.buildkeyboard(c, c.controls, c.layers, c.media);
                    c.buildoverlays(c, c.controls, c.layers, c.media);
                    c.findTracks();
                    for (g in c.options.features) {
                        d = c.options.features[g];
                        if (c["build" + d]) try {
                            c["build" + d](c, c.controls, c.layers, c.media)
                        } catch (k) {}
                    }
                    c.container.trigger("controlsready");
                    c.setPlayerSize(c.width, c.height);
                    c.setControlsSize();
                    if (c.isVideo) {
                        if (mejs.MediaFeatures.hasTouch) c.$media.bind("touchstart", function() {
                            if (c.controlsAreVisible) c.hideControls(false);
                            else c.controlsEnabled && c.showControls(false)
                        });
                        else {
                            (c.media.pluginType == "native" ? c.$media : f(c.media.pluginElement)).click(function() {
                                a.paused ? a.play() : a.pause()
                            });
                            c.container.bind("mouseenter mouseover", function() {
                                if (c.controlsEnabled)
                                    if (!c.options.alwaysShowControls) {
                                        c.killControlsTimer("enter");
                                        c.showControls();
                                        c.startControlsTimer(2500)
                                    }
                            }).bind("mousemove", function() {
                                if (c.controlsEnabled) {
                                    c.controlsAreVisible || c.showControls();
                                    c.options.alwaysShowControls || c.startControlsTimer(2500)
                                }
                            }).bind("mouseleave", function() {
                                c.controlsEnabled && !c.media.paused &&
                                    !c.options.alwaysShowControls && c.startControlsTimer(1E3)
                            })
                        }
                        e && !c.options.alwaysShowControls && c.hideControls();
                        c.options.enableAutosize && c.media.addEventListener("loadedmetadata", function(h) {
                            if (c.options.videoHeight <= 0 && c.domNode.getAttribute("height") === null && !isNaN(h.target.videoHeight)) {
                                c.setPlayerSize(h.target.videoWidth, h.target.videoHeight);
                                c.setControlsSize();
                                c.media.setVideoSize(h.target.videoWidth, h.target.videoHeight)
                            }
                        }, false)
                    }
                    a.addEventListener("play", function() {
                        for (var h = 0, o = mejs.players.length; h <
                            o; h++) {
                            var n = mejs.players[h];
                            n.id != c.id && c.options.pauseOtherPlayers && !n.paused && !n.ended && n.pause();
                            n.hasFocus = false
                        }
                        c.hasFocus = true
                    }, false);
                    c.media.addEventListener("ended", function() {
                        try {
                            c.media.setCurrentTime(0)
                        } catch (h) {}
                        c.media.pause();
                        c.setProgressRail && c.setProgressRail();
                        c.setCurrentRail && c.setCurrentRail();
                        if (c.options.loop) c.media.play();
                        else !c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                    }, false);
                    c.media.addEventListener("loadedmetadata", function() {
                        c.updateDuration &&
                            c.updateDuration();
                        c.updateCurrent && c.updateCurrent();
                        if (!c.isFullScreen) {
                            c.setPlayerSize(c.width, c.height);
                            c.setControlsSize()
                        }
                    }, false);
                    setTimeout(function() {
                        c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    }, 50);
                    f(window).resize(function() {
                        c.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    });
                    c.media.pluginType == "youtube" && c.container.find(".mejs-overlay-play").hide()
                }
                if (e && a.pluginType == "native") {
                    a.load();
                    a.play()
                }
                if (c.options.success) typeof c.options.success == "string" ? window[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c)
            }
        },
        handleError: function(a) {
            this.controls.hide();
            this.options.error && this.options.error(a)
        },
        setPlayerSize: function(a, b) {
            if (typeof a != "undefined") this.width = a;
            if (typeof b != "undefined") this.height = b;
            if (this.height.toString().indexOf("%") > 0) {
                var c = this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth : this.options.defaultVideoWidth,
                    d = this.media.videoHeight &&
                    this.media.videoHeight > 0 ? this.media.videoHeight : this.options.defaultVideoHeight,
                    e = this.container.parent().width();
                c = parseInt(e * d / c, 10);
                if (this.container.parent()[0].tagName.toLowerCase() === "body") {
                    e = f(window).width();
                    c = f(window).height()
                }
                if (c != 0) {
                    this.container.width(e).height(c);
                    this.$media.width("100%").height("100%");
                    this.container.find("object, embed, iframe").width("100%").height("100%");
                    this.isVideo && this.media.setVideoSize && this.media.setVideoSize(e, c);
                    this.layers.children(".mejs-layer").width("100%").height("100%")
                }
            } else {
                this.container.width(this.width).height(this.height);
                this.layers.children(".mejs-layer").width(this.width).height(this.height)
            }
        },
        setControlsSize: function() {
            var a = 0,
                b = 0,
                c = this.controls.find(".mejs-time-rail"),
                d = this.controls.find(".mejs-time-total");
            this.controls.find(".mejs-time-current");
            this.controls.find(".mejs-time-loaded");
            var e = c.siblings();
            if (this.options && !this.options.autosizeProgress) b = parseInt(c.css("width"));
            if (b === 0 || !b) {
                e.each(function() {
                    if (f(this).css("position") != "absolute") a += f(this).outerWidth(true)
                });
                b = this.controls.width() - a - (c.outerWidth(true) -
                    c.width())
            }
            c.width(b);
            d.width(b - (d.outerWidth(true) - d.width()));
            this.setProgressRail && this.setProgressRail();
            this.setCurrentRail && this.setCurrentRail()
        },
        buildposter: function(a, b, c, d) {
            var e = f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);
            b = a.$media.attr("poster");
            if (a.options.poster !== "") b = a.options.poster;
            b !== "" && b != null ? this.setPoster(b) : e.hide();
            d.addEventListener("play", function() {
                e.hide()
            }, false)
        },
        setPoster: function(a) {
            var b = this.container.find(".mejs-poster"),
                c = b.find("img");
            if (c.length ==
                0) c = f('<img width="100%" height="100%" />').appendTo(b);
            c.attr("src", a)
        },
        buildoverlays: function(a, b, c, d) {
            if (a.isVideo) {
                var e = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),
                    g = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),
                    k = f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).click(function() {
                        d.paused ? d.play() :
                            d.pause()
                    });
                d.addEventListener("play", function() {
                    k.hide();
                    e.hide();
                    b.find(".mejs-time-buffering").hide();
                    g.hide()
                }, false);
                d.addEventListener("playing", function() {
                    k.hide();
                    e.hide();
                    b.find(".mejs-time-buffering").hide();
                    g.hide()
                }, false);
                d.addEventListener("seeking", function() {
                    e.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                d.addEventListener("seeked", function() {
                    e.hide();
                    b.find(".mejs-time-buffering").hide()
                }, false);
                d.addEventListener("pause", function() {
                        mejs.MediaFeatures.isiPhone || k.show()
                    },
                    false);
                d.addEventListener("waiting", function() {
                    e.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                d.addEventListener("loadeddata", function() {
                    e.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                d.addEventListener("canplay", function() {
                    e.hide();
                    b.find(".mejs-time-buffering").hide()
                }, false);
                d.addEventListener("error", function() {
                    e.hide();
                    b.find(".mejs-time-buffering").hide();
                    g.show();
                    g.find("mejs-overlay-error").html("Error loading this resource")
                }, false)
            }
        },
        buildkeyboard: function(a, b, c, d) {
            f(document).keydown(function(e) {
                if (a.hasFocus &&
                    a.options.enableKeyboard)
                    for (var g = 0, k = a.options.keyActions.length; g < k; g++)
                        for (var h = a.options.keyActions[g], o = 0, n = h.keys.length; o < n; o++)
                            if (e.keyCode == h.keys[o]) {
                                e.preventDefault();
                                h.action(a, d, e.keyCode);
                                return false
                            }
                return true
            });
            f(document).click(function(e) {
                if (f(e.target).closest(".mejs-container").length == 0) a.hasFocus = false
            })
        },
        findTracks: function() {
            var a = this,
                b = a.$media.find("track");
            a.tracks = [];
            b.each(function(c, d) {
                d = f(d);
                a.tracks.push({
                    srclang: d.attr("srclang").toLowerCase(),
                    src: d.attr("src"),
                    kind: d.attr("kind"),
                    label: d.attr("label") || "",
                    entries: [],
                    isLoaded: false
                })
            })
        },
        changeSkin: function(a) {
            this.container[0].className = "mejs-container " + a;
            this.setPlayerSize(this.width, this.height);
            this.setControlsSize()
        },
        play: function() {
            this.media.play()
        },
        pause: function() {
            this.media.pause()
        },
        load: function() {
            this.media.load()
        },
        setMuted: function(a) {
            this.media.setMuted(a)
        },
        setCurrentTime: function(a) {
            this.media.setCurrentTime(a)
        },
        getCurrentTime: function() {
            return this.media.currentTime
        },
        setVolume: function(a) {
            this.media.setVolume(a)
        },
        getVolume: function() {
            return this.media.volume
        },
        setSrc: function(a) {
            this.media.setSrc(a)
        },
        remove: function() {
            if (this.media.pluginType === "flash") this.media.remove();
            else this.media.pluginType === "native" && this.$media.prop("controls", true);
            this.isDynamic || this.$node.insertBefore(this.container);
            this.container.remove()
        }
    };
    if (typeof jQuery != "undefined") jQuery.fn.mediaelementplayer = function(a) {
        return this.each(function() {
            new mejs.MediaElementPlayer(this, a)
        })
    };
    f(document).ready(function() {
        f(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        playpauseText: "Play/Pause"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildplaypause: function(a, b, c, d) {
            var e = f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '"></button></div>').appendTo(b).click(function(g) {
                g.preventDefault();
                d.paused ? d.play() : d.pause();
                return false
            });
            d.addEventListener("play", function() {
                e.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            d.addEventListener("playing", function() {
                e.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            d.addEventListener("pause", function() {
                e.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            d.addEventListener("paused", function() {
                e.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildstop: function(a, b, c, d) {
            f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '"></button></div>').appendTo(b).click(function() {
                d.paused || d.pause();
                if (d.currentTime > 0) {
                    d.setCurrentTime(0);
                    b.find(".mejs-time-current").width("0px");
                    b.find(".mejs-time-handle").css("left", "0px");
                    b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                    b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                    c.find(".mejs-poster").show()
                }
            })
        }
    })
})(mejs.$);
(function(f) {
    f.extend(MediaElementPlayer.prototype, {
        buildprogress: function(a, b, c, d) {
            f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);
            b.find(".mejs-time-buffering").hide();
            var e =
                b.find(".mejs-time-total");
            c = b.find(".mejs-time-loaded");
            var g = b.find(".mejs-time-current"),
                k = b.find(".mejs-time-handle"),
                h = b.find(".mejs-time-float"),
                o = b.find(".mejs-time-float-current"),
                n = function(l) {
                    l = l.pageX;
                    var q = e.offset(),
                        i = e.outerWidth(),
                        j = 0;
                    j = 0;
                    var m = l - q.left;
                    if (l > q.left && l <= i + q.left && d.duration) {
                        j = (l - q.left) / i;
                        j = j <= 0.02 ? 0 : j * d.duration;
                        p && d.setCurrentTime(j);
                        if (!mejs.MediaFeatures.hasTouch) {
                            h.css("left", m);
                            o.html(mejs.Utility.secondsToTimeCode(j));
                            h.show()
                        }
                    }
                },
                p = false;
            e.bind("mousedown", function(l) {
                if (l.which ===
                    1) {
                    p = true;
                    n(l);
                    f(document).bind("mousemove.dur", function(q) {
                        n(q)
                    }).bind("mouseup.dur", function() {
                        p = false;
                        h.hide();
                        f(document).unbind(".dur")
                    });
                    return false
                }
            }).bind("mouseenter", function() {
                f(document).bind("mousemove.dur", function(l) {
                    n(l)
                });
                mejs.MediaFeatures.hasTouch || h.show()
            }).bind("mouseleave", function() {
                if (!p) {
                    f(document).unbind(".dur");
                    h.hide()
                }
            });
            d.addEventListener("progress", function(l) {
                a.setProgressRail(l);
                a.setCurrentRail(l)
            }, false);
            d.addEventListener("timeupdate", function(l) {
                a.setProgressRail(l);
                a.setCurrentRail(l)
            }, false);
            this.loaded = c;
            this.total = e;
            this.current = g;
            this.handle = k
        },
        setProgressRail: function(a) {
            var b = a != undefined ? a.target : this.media,
                c = null;
            if (b && b.buffered && b.buffered.length > 0 && b.buffered.end && b.duration) c = b.buffered.end(0) / b.duration;
            else if (b && b.bytesTotal != undefined && b.bytesTotal > 0 && b.bufferedBytes != undefined) c = b.bufferedBytes / b.bytesTotal;
            else if (a && a.lengthComputable && a.total != 0) c = a.loaded / a.total;
            if (c !== null) {
                c = Math.min(1, Math.max(0, c));
                this.loaded && this.total && this.loaded.width(this.total.width() *
                    c)
            }
        },
        setCurrentRail: function() {
            if (this.media.currentTime != undefined && this.media.duration)
                if (this.total && this.handle) {
                    var a = this.total.width() * this.media.currentTime / this.media.duration,
                        b = a - this.handle.outerWidth(true) / 2;
                    this.current.width(a);
                    this.handle.css("left", b)
                }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: " <span> | </span> "
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcurrent: function(a, b, c, d) {
            f('<div class="mejs-time"><span class="mejs-currenttime">' + (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(b);
            this.currenttime = this.controls.find(".mejs-currenttime");
            d.addEventListener("timeupdate", function() {
                a.updateCurrent()
            }, false)
        },
        buildduration: function(a,
            b, c, d) {
            if (b.children().last().find(".mejs-currenttime").length > 0) f(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(b.find(".mejs-time"));
            else {
                b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(b)
            }
            this.durationD = this.controls.find(".mejs-duration");
            d.addEventListener("timeupdate", function() {
                    a.updateDuration()
                },
                false)
        },
        updateCurrent: function() {
            if (this.currenttime) this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        },
        updateDuration: function() {
            if (this.media.duration && this.durationD) this.durationD.html(mejs.Utility.secondsToTimeCode(this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        muteText: "Mute Toggle",
        hideVolumeOnTouchDevices: true,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildvolume: function(a, b, c, d) {
            if (!(mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices)) {
                var e = this.isVideo ? this.options.videoVolume : this.options.audioVolume,
                    g = e == "horizontal" ? f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + this.id + '" title="' + this.options.muteText +
                        '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b) : f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + this.id + '" title="' + this.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
                    k = this.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    h = this.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    o = this.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    n = this.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                    p = function(j, m) {
                        if (!k.is(":visible") && typeof m != "undefined") {
                            k.show();
                            p(j, true);
                            k.hide()
                        } else {
                            j = Math.max(0, j);
                            j = Math.min(j, 1);
                            j == 0 ? g.removeClass("mejs-mute").addClass("mejs-unmute") : g.removeClass("mejs-unmute").addClass("mejs-mute");
                            if (e == "vertical") {
                                var r = h.height(),
                                    s = h.position(),
                                    t = r - r * j;
                                n.css("top", s.top + t - n.height() / 2);
                                o.height(r - t);
                                o.css("top", s.top + t)
                            } else {
                                r = h.width();
                                s = h.position();
                                r = r * j;
                                n.css("left", s.left + r - n.width() / 2);
                                o.width(r)
                            }
                        }
                    },
                    l = function(j) {
                        var m = null,
                            r = h.offset();
                        if (e == "vertical") {
                            m = h.height();
                            parseInt(h.css("top").replace(/px/, ""), 10);
                            m = (m - (j.pageY - r.top)) / m;
                            if (r.top == 0 || r.left == 0) return
                        } else {
                            m = h.width();
                            m = (j.pageX - r.left) / m
                        }
                        m = Math.max(0, m);
                        m = Math.min(m, 1);
                        p(m);
                        m == 0 ? d.setMuted(true) : d.setMuted(false);
                        d.setVolume(m)
                    },
                    q = false,
                    i = false;
                g.hover(function() {
                    k.show();
                    i = true
                }, function() {
                    i = false;
                    !q && e == "vertical" && k.hide()
                });
                k.bind("mouseover", function() {
                    i = true
                }).bind("mousedown", function(j) {
                    l(j);
                    f(document).bind("mousemove.vol", function(m) {
                        l(m)
                    }).bind("mouseup.vol", function() {
                        q = false;
                        f(document).unbind(".vol");
                        !i && e == "vertical" && k.hide()
                    });
                    q = true;
                    return false
                });
                g.find("button").click(function() {
                    d.setMuted(!d.muted)
                });
                d.addEventListener("volumechange", function() {
                    if (!q)
                        if (d.muted) {
                            p(0);
                            g.removeClass("mejs-mute").addClass("mejs-unmute")
                        } else {
                            p(d.volume);
                            g.removeClass("mejs-unmute").addClass("mejs-mute")
                        }
                }, false);
                if (this.container.is(":visible")) {
                    p(a.options.startVolume);
                    d.pluginType === "native" && d.setVolume(a.options.startVolume)
                }
            }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        usePluginFullScreen: true,
        newWindowCallback: function() {
            return ""
        },
        fullscreenText: "Fullscreen"
    });
    f.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        docStyleOverflow: null,
        isInIframe: false,
        buildfullscreen: function(a, b, c, d) {
            if (a.isVideo) {
                a.isInIframe = window.location != window.parent.location;
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    c = null;
                    c = mejs.MediaFeatures.hasMozNativeFullScreen ? f(document) : a.container;
                    c.bind(mejs.MediaFeatures.fullScreenEventName,
                        function() {
                            if (mejs.MediaFeatures.isFullScreen()) {
                                a.isNativeFullScreen = true;
                                a.setControlsSize()
                            } else {
                                a.isNativeFullScreen = false;
                                a.exitFullScreen()
                            }
                        })
                }
                var e = this,
                    g = f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + e.id + '" title="' + e.options.fullscreenText + '"></button></div>').appendTo(b);
                if (e.media.pluginType === "native" || !e.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) g.click(function() {
                    mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() ||
                        a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                });
                else {
                    var k = null;
                    if (function() {
                            var i = document.createElement("x"),
                                j = document.documentElement,
                                m = window.getComputedStyle;
                            if (!("pointerEvents" in i.style)) return false;
                            i.style.pointerEvents = "auto";
                            i.style.pointerEvents = "x";
                            j.appendChild(i);
                            m = m && m(i, "").pointerEvents === "auto";
                            j.removeChild(i);
                            return !!m
                        }() && !mejs.MediaFeatures.isOpera) {
                        var h = false,
                            o = function() {
                                if (h) {
                                    n.hide();
                                    p.hide();
                                    l.hide();
                                    g.css("pointer-events", "");
                                    e.controls.css("pointer-events",
                                        "");
                                    h = false
                                }
                            },
                            n = f('<div class="mejs-fullscreen-hover" />').appendTo(e.container).mouseover(o),
                            p = f('<div class="mejs-fullscreen-hover"  />').appendTo(e.container).mouseover(o),
                            l = f('<div class="mejs-fullscreen-hover"  />').appendTo(e.container).mouseover(o),
                            q = function() {
                                var i = {
                                    position: "absolute",
                                    top: 0,
                                    left: 0
                                };
                                n.css(i);
                                p.css(i);
                                l.css(i);
                                n.width(e.container.width()).height(e.container.height() - e.controls.height());
                                i = g.offset().left - e.container.offset().left;
                                fullScreenBtnWidth = g.outerWidth(true);
                                p.width(i).height(e.controls.height()).css({
                                    top: e.container.height() -
                                        e.controls.height()
                                });
                                l.width(e.container.width() - i - fullScreenBtnWidth).height(e.controls.height()).css({
                                    top: e.container.height() - e.controls.height(),
                                    left: i + fullScreenBtnWidth
                                })
                            };
                        f(document).resize(function() {
                            q()
                        });
                        g.mouseover(function() {
                            if (!e.isFullScreen) {
                                var i = g.offset(),
                                    j = a.container.offset();
                                d.positionFullscreenButton(i.left - j.left, i.top - j.top, false);
                                g.css("pointer-events", "none");
                                e.controls.css("pointer-events", "none");
                                n.show();
                                l.show();
                                p.show();
                                q();
                                h = true
                            }
                        });
                        d.addEventListener("fullscreenchange",
                            function() {
                                o()
                            })
                    } else g.mouseover(function() {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        var i = g.offset(),
                            j = a.container.offset();
                        d.positionFullscreenButton(i.left - j.left, i.top - j.top, true)
                    }).mouseout(function() {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        k = setTimeout(function() {
                            d.hideFullscreenButton()
                        }, 1500)
                    })
                }
                a.fullscreenBtn = g;
                f(document).bind("keydown", function(i) {
                    if ((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || e.isFullScreen) && i.keyCode == 27) a.exitFullScreen()
                })
            }
        },
        enterFullScreen: function() {
            var a =
                this;
            if (!(a.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || a.options.usePluginFullScreen))) {
                docStyleOverflow = document.documentElement.style.overflow;
                document.documentElement.style.overflow = "hidden";
                normalHeight = a.container.height();
                normalWidth = a.container.width();
                if (a.media.pluginType === "native")
                    if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        mejs.MediaFeatures.requestFullScreen(a.container[0]);
                        a.isInIframe && setTimeout(function c() {
                            if (a.isNativeFullScreen) f(window).width() !== screen.width ?
                                a.exitFullScreen() : setTimeout(c, 500)
                        }, 500)
                    } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                    a.media.webkitEnterFullscreen();
                    return
                }
                if (a.isInIframe) {
                    var b = a.options.newWindowCallback(this);
                    if (b !== "")
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) setTimeout(function() {
                            if (!a.isNativeFullScreen) {
                                a.pause();
                                window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                            }
                        }, 250);
                        else {
                            a.pause();
                            window.open(b, a.id, "top=0,left=0,width=" +
                                screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            return
                        }
                }
                a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
                setTimeout(function() {
                    a.container.css({
                        width: "100%",
                        height: "100%"
                    });
                    a.setControlsSize()
                }, 500);
                if (a.pluginType === "native") a.$media.width("100%").height("100%");
                else {
                    a.container.find("object, embed, iframe").width("100%").height("100%");
                    a.media.setVideoSize(f(window).width(), f(window).height())
                }
                a.layers.children("div").width("100%").height("100%");
                a.fullscreenBtn && a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
                a.setControlsSize();
                a.isFullScreen = true
            }
        },
        exitFullScreen: function() {
            if (this.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) this.media.setFullscreen(false);
            else {
                if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || this.isFullScreen)) mejs.MediaFeatures.cancelFullScreen();
                document.documentElement.style.overflow = docStyleOverflow;
                this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
                if (this.pluginType === "native") this.$media.width(normalWidth).height(normalHeight);
                else {
                    this.container.find("object embed").width(normalWidth).height(normalHeight);
                    this.media.setVideoSize(normalWidth, normalHeight)
                }
                this.layers.children("div").width(normalWidth).height(normalHeight);
                this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
                this.setControlsSize();
                this.isFullScreen = false
            }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: "Captions/Subtitles"
    });
    f.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function(a, b, c, d) {
            if (a.isVideo)
                if (a.tracks.length != 0) {
                    var e;
                    a.chapters = f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();
                    a.captions = f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();
                    a.captionsText = a.captions.find(".mejs-captions-text");
                    a.captionsButton = f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' + a.id + '_captions" id="' + a.id + '_captions_none" value="none" checked="checked" /><label for="' + a.id + '_captions_none">None</label></li></ul></div></div>').appendTo(b).hover(function() {
                        f(this).find(".mejs-captions-selector").css("visibility", "visible")
                    }, function() {
                        f(this).find(".mejs-captions-selector").css("visibility",
                            "hidden")
                    }).delegate("input[type=radio]", "click", function() {
                        lang = this.value;
                        if (lang == "none") a.selectedTrack = null;
                        else
                            for (e = 0; e < a.tracks.length; e++)
                                if (a.tracks[e].srclang == lang) {
                                    a.selectedTrack = a.tracks[e];
                                    a.captions.attr("lang", a.selectedTrack.srclang);
                                    a.displayCaptions();
                                    break
                                }
                    });
                    a.options.alwaysShowControls ? a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : a.container.bind("mouseenter", function() {
                        a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                    }).bind("mouseleave",
                        function() {
                            d.paused || a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                        });
                    a.trackToLoad = -1;
                    a.selectedTrack = null;
                    a.isLoadingTrack = false;
                    for (e = 0; e < a.tracks.length; e++) a.tracks[e].kind == "subtitles" && a.addTrackButton(a.tracks[e].srclang, a.tracks[e].label);
                    a.loadNextTrack();
                    d.addEventListener("timeupdate", function() {
                        a.displayCaptions()
                    }, false);
                    d.addEventListener("loadedmetadata", function() {
                        a.displayChapters()
                    }, false);
                    a.container.hover(function() {
                        if (a.hasChapters) {
                            a.chapters.css("visibility",
                                "visible");
                            a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())
                        }
                    }, function() {
                        a.hasChapters && !d.paused && a.chapters.fadeOut(200, function() {
                            f(this).css("visibility", "hidden");
                            f(this).css("display", "block")
                        })
                    });
                    a.node.getAttribute("autoplay") !== null && a.chapters.css("visibility", "hidden")
                }
        },
        loadNextTrack: function() {
            this.trackToLoad++;
            if (this.trackToLoad < this.tracks.length) {
                this.isLoadingTrack = true;
                this.loadTrack(this.trackToLoad)
            } else this.isLoadingTrack = false
        },
        loadTrack: function(a) {
            var b =
                this,
                c = b.tracks[a],
                d = function() {
                    c.isLoaded = true;
                    b.enableTrackButton(c.srclang, c.label);
                    b.loadNextTrack()
                };
            c.isTranslation ? mejs.TrackFormatParser.translateTrackText(b.tracks[0].entries, b.tracks[0].srclang, c.srclang, b.options.googleApiKey, function(e) {
                c.entries = e;
                d()
            }) : f.ajax({
                url: c.src,
                success: function(e) {
                    c.entries = mejs.TrackFormatParser.parse(e);
                    d();
                    c.kind == "chapters" && b.media.duration > 0 && b.drawChapters(c)
                },
                error: function() {
                    b.loadNextTrack()
                }
            })
        },
        enableTrackButton: function(a, b) {
            if (b === "") b = mejs.language.codes[a] ||
                a;
            this.captionsButton.find("input[value=" + a + "]").prop("disabled", false).siblings("label").html(b);
            this.options.startLanguage == a && f("#" + this.id + "_captions_" + a).click();
            this.adjustLanguageBox()
        },
        addTrackButton: function(a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("ul").append(f('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + a + '" value="' + a + '" disabled="disabled" /><label for="' + this.id + "_captions_" + a + '">' + b + " (loading)</label></li>"));
            this.adjustLanguageBox();
            this.container.find(".mejs-captions-translations option[value=" + a + "]").remove()
        },
        adjustLanguageBox: function() {
            this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + this.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        },
        displayCaptions: function() {
            if (typeof this.tracks != "undefined") {
                var a, b = this.selectedTrack;
                if (b != null && b.isLoaded)
                    for (a = 0; a < b.entries.times.length; a++)
                        if (this.media.currentTime >= b.entries.times[a].start &&
                            this.media.currentTime <= b.entries.times[a].stop) {
                            this.captionsText.html(b.entries.text[a]);
                            this.captions.show().height(0);
                            return
                        }
                this.captions.hide()
            }
        },
        displayChapters: function() {
            var a;
            for (a = 0; a < this.tracks.length; a++)
                if (this.tracks[a].kind == "chapters" && this.tracks[a].isLoaded) {
                    this.drawChapters(this.tracks[a]);
                    this.hasChapters = true;
                    break
                }
        },
        drawChapters: function(a) {
            var b = this,
                c, d, e = d = 0;
            b.chapters.empty();
            for (c = 0; c < a.entries.times.length; c++) {
                d = a.entries.times[c].stop - a.entries.times[c].start;
                d = Math.floor(d /
                    b.media.duration * 100);
                if (d + e > 100 || c == a.entries.times.length - 1 && d + e < 100) d = 100 - e;
                b.chapters.append(f('<div class="mejs-chapter" rel="' + a.entries.times[c].start + '" style="left: ' + e.toString() + "%;width: " + d.toString() + '%;"><div class="mejs-chapter-block' + (c == a.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + a.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(a.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(a.entries.times[c].stop) +
                    "</span></div></div>"));
                e += d
            }
            b.chapters.find("div.mejs-chapter").click(function() {
                b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
                b.media.paused && b.media.play()
            });
            b.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
        pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
        split2: function(a, b) {
            return a.split(b)
        },
        parse: function(a) {
            var b = 0;
            a = this.split2(a, /\r?\n/);
            for (var c = {
                    text: [],
                    times: []
                }, d, e; b < a.length; b++)
                if (this.pattern_identifier.exec(a[b])) {
                    b++;
                    if ((d = this.pattern_timecode.exec(a[b])) && b < a.length) {
                        b++;
                        e = a[b];
                        for (b++; a[b] !== "" && b < a.length;) {
                            e = e + "\n" + a[b];
                            b++
                        }
                        c.text.push(e);
                        c.times.push({
                            start: mejs.Utility.timeCodeToSeconds(d[1]),
                            stop: mejs.Utility.timeCodeToSeconds(d[3]),
                            settings: d[5]
                        })
                    }
                }
            return c
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) mejs.TrackFormatParser.split2 = function(a, b) {
        var c = [],
            d = "",
            e;
        for (e = 0; e < a.length; e++) {
            d += a.substring(e, e + 1);
            if (b.test(d)) {
                c.push(d.replace(b, ""));
                d = ""
            }
        }
        c.push(d);
        return c
    }
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function(a) {
                if (typeof a.enterFullScreen == "undefined") return null;
                return a.isFullScreen ? "Turn off Fullscreen" : "Go Fullscreen"
            },
            click: function(a) {
                a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }, {
            render: function(a) {
                return a.media.muted ? "Unmute" : "Mute"
            },
            click: function(a) {
                a.media.muted ? a.setMuted(false) : a.setMuted(true)
            }
        }, {
            isSeparator: true
        }, {
            render: function() {
                return "Download Video"
            },
            click: function(a) {
                window.location.href = a.media.currentSrc
            }
        }]
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function(a) {
            a.contextMenu = f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();
            a.container.bind("contextmenu", function(b) {
                if (a.isContextMenuEnabled) {
                    b.preventDefault();
                    a.renderContextMenu(b.clientX - 1, b.clientY - 1);
                    return false
                }
            });
            a.container.bind("click", function() {
                a.contextMenu.hide()
            });
            a.contextMenu.bind("mouseleave", function() {
                a.startContextMenuTimer()
            })
        },
        isContextMenuEnabled: true,
        enableContextMenu: function() {
            this.isContextMenuEnabled =
                true
        },
        disableContextMenu: function() {
            this.isContextMenuEnabled = false
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function() {
            var a = this;
            a.killContextMenuTimer();
            a.contextMenuTimer = setTimeout(function() {
                a.hideContextMenu();
                a.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function() {
            var a = this.contextMenuTimer;
            if (a != null) {
                clearTimeout(a);
                delete a
            }
        },
        hideContextMenu: function() {
            this.contextMenu.hide()
        },
        renderContextMenu: function(a, b) {
            for (var c = this, d = "", e = c.options.contextMenuItems, g = 0, k = e.length; g <
                k; g++)
                if (e[g].isSeparator) d += '<div class="mejs-contextmenu-separator"></div>';
                else {
                    var h = e[g].render(c);
                    if (h != null) d += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + Math.random() * 1E6 + '">' + h + "</div>"
                }
            c.contextMenu.empty().append(f(d)).css({
                top: b,
                left: a
            }).show();
            c.contextMenu.find(".mejs-contextmenu-item").each(function() {
                var o = f(this),
                    n = parseInt(o.data("itemindex"), 10),
                    p = c.options.contextMenuItems[n];
                typeof p.show != "undefined" && p.show(o, c);
                o.click(function() {
                    typeof p.click !=
                        "undefined" && p.click(c);
                    c.contextMenu.hide()
                })
            });
            setTimeout(function() {
                c.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);


/*** FitVids 1.0.3 - Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/ **/
;
(function(e) {
    "use strict";
    e.fn.fitVids = function(t) {
        var n = {
            customSelector: null
        };
        if (!document.getElementById("fit-vids-style")) {
            var r = document.createElement("div"),
                i = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                s = "&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
            r.className = "fit-vids-style";
            r.id = "fit-vids-style";
            r.style.display = "none";
            r.innerHTML = s;
            i.parentNode.insertBefore(r, i)
        }
        if (t) {
            e.extend(n, t)
        }
        return this.each(function() {
            var t = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
            if (n.customSelector) {
                t.push(n.customSelector)
            }
            var r = e(this).find(t.join(","));
            r = r.not("object object");
            r.each(function() {
                var t = e(this);
                if (this.tagName.toLowerCase() === "embed" && t.parent("object").length || t.parent(".fluid-width-video-wrapper").length) {
                    return
                }
                var n = this.tagName.toLowerCase() === "object" || t.attr("height") && !isNaN(parseInt(t.attr("height"), 10)) ? parseInt(t.attr("height"), 10) : t.height(),
                    r = !isNaN(parseInt(t.attr("width"), 10)) ? parseInt(t.attr("width"), 10) : t.width(),
                    i = n / r;
                if (!t.attr("id")) {
                    var s = "fitvid" + Math.floor(Math.random() * 999999);
                    t.attr("id", s)
                }
                t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", i * 100 + "%");
                t.removeAttr("height").removeAttr("width")
            })
        })
    }
})(window.jQuery || window.Zepto);



/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    "use strict";

    function b() {
        var a = document.createElement("bootstrap"),
            b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var c in b)
            if (void 0 !== a.style[c]) return {
                end: b[c]
            };
        return !1
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1,
            d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function() {
        a.support.transition = b()
    })
}(jQuery), + function(a) {
    "use strict";
    var b = '[data-dismiss="alert"]',
        c = function(c) {
            a(c).on("click", b, this.close)
        };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove()
        }
        var d = a(this),
            e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c())
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d)
        })
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close)
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.isLoading = !1
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function(b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", f.resetText || d.data("resetText", d[e]()), d[e](f[b] || this.options[b]), setTimeout(a.proxy(function() {
            "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, b.prototype.toggle = function() {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") && (c.prop("checked") && this.$element.hasClass("active") ? a = !1 : b.find(".active").removeClass("active")), a && c.prop("checked", !this.$element.hasClass("active")).trigger("change")
        }
        a && this.$element.toggleClass("active")
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c)
        })
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = c, this
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault()
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this))
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0
    }, b.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), this.$items.index(this.$active)
    }, b.prototype.to = function(b) {
        var c = this,
            d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            c.to(b)
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]))
    }, b.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"),
            e = c || d[b](),
            f = this.interval,
            g = "next" == b ? "left" : "right",
            h = "next" == b ? "first" : "last",
            i = this;
        if (!e.length) {
            if (!this.options.wrap) return;
            e = this.$element.find(".item")[h]()
        }
        if (e.hasClass("active")) return this.sliding = !1;
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        return this.$element.trigger(j), j.isDefaultPrevented() ? void 0 : (this.sliding = !0, f && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function() {
            var b = a(i.$indicators.children()[i.getActiveIndex()]);
            b && b.addClass("active")
        })), a.support.transition && this.$element.hasClass("slide") ? (e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
            e.removeClass([b, g].join(" ")).addClass("active"), d.removeClass(["active", g].join(" ")), i.sliding = !1, setTimeout(function() {
                i.$element.trigger("slid.bs.carousel")
            }, 0)
        }).emulateTransitionEnd(1e3 * d.css("transition-duration").slice(0, -1))) : (d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), f && this.cycle(), this)
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c),
                g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this),
            e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")),
            f = a.extend({}, e.data(), d.data()),
            g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), b.preventDefault()
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle()
    };
    b.DEFAULTS = {
        toggle: !0
    }, b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .panel > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null)
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase(["scroll", e].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g])
            }
        }
    }, b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")
                };
                return a.support.transition ? void this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350) : d.call(this)
            }
        }
    }, b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.collapse"),
                f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            !e && f.toggle && "show" == c && (c = !c), e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this),
            e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""),
            f = a(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : d.data(),
            i = d.attr("data-parent"),
            j = i && a(i);
        g && g.transitioning || (j && j.find('[data-toggle=collapse][data-parent="' + i + '"]').not(d).addClass("collapsed"), d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h)
    })
}(jQuery), + function(a) {
    "use strict";

    function b(b) {
        a(d).remove(), a(e).each(function() {
            var d = c(a(this)),
                e = {
                    relatedTarget: this
                };
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown", e)), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown", e))
        })
    }

    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }
    var d = ".dropdown-backdrop",
        e = "[data-toggle=dropdown]",
        f = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e),
                g = f.hasClass("open");
            if (b(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b);
                var h = {
                    relatedTarget: this
                };
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown", h), e.focus()
            }
            return !1
        }
    }, f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d),
                    g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = " li:not(.divider):visible a",
                    i = f.find("[role=menu]" + h + ", [role=listbox]" + h);
                if (i.length) {
                    var j = i.index(i.filter(":focus"));
                    38 == b.keyCode && j > 0 && j--, 40 == b.keyCode && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).focus()
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new f(this)), "string" == typeof b && d[b].call(c)
        })
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g, this
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu], [role=listbox]", f.prototype.keydown)
}(jQuery), + function(a) {
    "use strict";
    var b = function(b, c) {
        this.options = c, this.$element = a(b), this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function(a) {
        return this[this.isShown ? "hide" : "show"](a)
    }, b.prototype.show = function(b) {
        var c = this,
            d = a.Event("show.bs.modal", {
                relatedTarget: b
            });
        this.$element.trigger(d), this.isShown || d.isDefaultPrevented() || (this.isShown = !0, this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.backdrop(function() {
            var d = a.support.transition && c.$element.hasClass("fade");
            c.$element.parent().length || c.$element.appendTo(document.body), c.$element.show().scrollTop(0), d && c.$element[0].offsetWidth, c.$element.addClass("in").attr("aria-hidden", !1), c.enforceFocus();
            var e = a.Event("shown.bs.modal", {
                relatedTarget: b
            });
            d ? c.$element.find(".modal-dialog").one(a.support.transition.end, function() {
                c.$element.focus().trigger(e)
            }).emulateTransitionEnd(300) : c.$element.focus().trigger(e)
        }))
    }, b.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
    }, b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus()
        }, this))
    }, b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
    }, b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal")
        })
    }, b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b()
    };
    var c = a.fn.modal;
    a.fn.modal = function(c, d) {
        return this.each(function() {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, b.DEFAULTS, e.data(), "object" == typeof c && c);
            f || e.data("bs.modal", f = new b(this, g)), "string" == typeof c ? f[c](d) : g.show && f.show(d)
        })
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this),
            d = c.attr("href"),
            e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")),
            f = e.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(d) && d
            }, e.data(), c.data());
        c.is("a") && b.preventDefault(), e.modal(f, this).one("hide", function() {
            c.is(":visible") && c.focus()
        })
    }), a(document).on("show.bs.modal", ".modal", function() {
        a(document.body).addClass("modal-open")
    }).on("hidden.bs.modal", ".modal", function() {
        a(document.body).removeClass("modal-open")
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", a, b)
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, b.prototype.getDelegateOptions = function() {
        var b = {},
            c = this.getDefaults();
        return this._options && a.each(this._options, function(a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, b.prototype.enter = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() {
            "in" == c.hoverState && c.show()
        }, c.options.delay.show)) : c.show()
    }, b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
        return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide()
        }, c.options.delay.hide)) : c.hide()
    }, b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this,
                d = this.tip();
            this.setContent(), this.options.animation && d.addClass("fade");
            var e = "function" == typeof this.options.placement ? this.options.placement.call(this, d[0], this.$element[0]) : this.options.placement,
                f = /\s?auto?\s?/i,
                g = f.test(e);
            g && (e = e.replace(f, "") || "top"), d.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(e), this.options.container ? d.appendTo(this.options.container) : d.insertAfter(this.$element);
            var h = this.getPosition(),
                i = d[0].offsetWidth,
                j = d[0].offsetHeight;
            if (g) {
                var k = this.$element.parent(),
                    l = e,
                    m = document.documentElement.scrollTop || document.body.scrollTop,
                    n = "body" == this.options.container ? window.innerWidth : k.outerWidth(),
                    o = "body" == this.options.container ? window.innerHeight : k.outerHeight(),
                    p = "body" == this.options.container ? 0 : k.offset().left;
                e = "bottom" == e && h.top + h.height + j - m > o ? "top" : "top" == e && h.top - m - j < 0 ? "bottom" : "right" == e && h.right + i > n ? "left" : "left" == e && h.left - i < p ? "right" : e, d.removeClass(l).addClass(e)
            }
            var q = this.getCalculatedOffset(e, h, i, j);
            this.applyPlacement(q, e), this.hoverState = null;
            var r = function() {
                c.$element.trigger("shown.bs." + c.type)
            };
            a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, r).emulateTransitionEnd(150) : r()
        }
    }, b.prototype.applyPlacement = function(b, c) {
        var d, e = this.tip(),
            f = e[0].offsetWidth,
            g = e[0].offsetHeight,
            h = parseInt(e.css("margin-top"), 10),
            i = parseInt(e.css("margin-left"), 10);
        isNaN(h) && (h = 0), isNaN(i) && (i = 0), b.top = b.top + h, b.left = b.left + i, a.offset.setOffset(e[0], a.extend({
            using: function(a) {
                e.css({
                    top: Math.round(a.top),
                    left: Math.round(a.left)
                })
            }
        }, b), 0), e.addClass("in");
        var j = e[0].offsetWidth,
            k = e[0].offsetHeight;
        if ("top" == c && k != g && (d = !0, b.top = b.top + g - k), /bottom|top/.test(c)) {
            var l = 0;
            b.left < 0 && (l = -2 * b.left, b.left = 0, e.offset(b), j = e[0].offsetWidth, k = e[0].offsetHeight), this.replaceArrow(l - f + j, j, "left")
        } else this.replaceArrow(k - g, k, "top");
        d && e.offset(b)
    }, b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "")
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, b.prototype.hide = function() {
        function b() {
            "in" != c.hoverState && d.detach(), c.$element.trigger("hidden.bs." + c.type)
        }
        var c = this,
            d = this.tip(),
            e = a.Event("hide.bs." + this.type);
        return this.$element.trigger(e), e.isDefaultPrevented() ? void 0 : (d.removeClass("in"), a.support.transition && this.$tip.hasClass("fade") ? d.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), this.hoverState = null, this)
    }, b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, b.prototype.hasContent = function() {
        return this.getTitle()
    }, b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset())
    }, b.prototype.getCalculatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        }
    }, b.prototype.getTitle = function() {
        var a, b = this.$element,
            c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
    }, b.prototype.enable = function() {
        this.enabled = !0
    }, b.prototype.disable = function() {
        this.enabled = !1
    }, b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, b.prototype.destroy = function() {
        clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this
    }
}(jQuery), + function(a) {
    "use strict";
    var b = function(a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, b.prototype.getDefaults = function() {
        return b.DEFAULTS
    }, b.prototype.setContent = function() {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, b.prototype.getContent = function() {
        var a = this.$element,
            b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    }, b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof c && c;
            (e || "destroy" != c) && (e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]())
        })
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this
    }
}(jQuery), + function(a) {
    "use strict";

    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(a(c).is("body") ? window : c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), this.process()
    }
    b.DEFAULTS = {
        offset: 10
    }, b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]); {
            var c = this;
            this.$body.find(this.selector).map(function() {
                var d = a(this),
                    e = d.data("target") || d.attr("href"),
                    f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [
                    [f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e]
                ] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                c.offsets.push(this[0]), c.targets.push(this[1])
            })
        }
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight,
            d = c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        if (g && b <= e[0]) return g != (a = f[0]) && this.activate(a);
        for (a = e.length; a--;) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this
    }, a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data())
        })
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(b) {
        this.element = a(b)
    };
    b.prototype.show = function() {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0],
                f = a.Event("show.bs.tab", {
                    relatedTarget: e
                });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    })
                })
            }
        }
    }, b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d()
        }
        var f = c.find("> .active"),
            g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in")
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]()
        })
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show")
    })
}(jQuery), + function(a) {
    "use strict";
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(c), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
        offset: 0
    }, b.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(b.RESET).addClass("affix");
        var a = this.$window.scrollTop(),
            c = this.$element.offset();
        return this.pinnedOffset = c.top - a
    }, b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height(),
                d = this.$window.scrollTop(),
                e = this.$element.offset(),
                f = this.options.offset,
                g = f.top,
                h = f.bottom;
            "top" == this.affixed && (e.top += d), "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top(this.$element)), "function" == typeof h && (h = f.bottom(this.$element));
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            if (this.affixed !== i) {
                this.unpin && this.$element.css("top", "");
                var j = "affix" + (i ? "-" + i : ""),
                    k = a.Event(j + ".bs.affix");
                this.$element.trigger(k), k.isDefaultPrevented() || (this.affixed = i, this.unpin = "bottom" == i ? this.getPinnedOffset() : null, this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix", "affixed"))), "bottom" == i && this.$element.offset({
                    top: c - h - this.$element.height()
                }))
            }
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this),
                c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c)
        })
    })
}(jQuery);


/*
 * SmartMenus jQuery v0.9.5
 * http://www.smartmenus.org/
 * Copyright 2014 Vasil Dinkov, Vadikom Web Ltd.
 * http://vadikom.com/
 * Released under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
(function(e) {
    function a(n) {
        if (!u && !n) {
            var r = true,
                i = null;
            e(document).bind({
                "mousemove.smartmenus_mouse": function(n) {
                    var s = {
                        x: n.pageX,
                        y: n.pageY,
                        timeStamp: (new Date).getTime()
                    };
                    if (i) {
                        var u = Math.abs(i.x - s.x),
                            a = Math.abs(i.y - s.y);
                        if ((u > 0 || a > 0) && u <= 2 && a <= 2 && s.timeStamp - i.timeStamp <= 300) {
                            o = true;
                            if (r) {
                                var f = e(n.target).closest("a");
                                if (f.is("a")) {
                                    e.each(t, function() {
                                        if (e.contains(this.$root[0], f[0])) {
                                            this.itemEnter({
                                                currentTarget: f[0]
                                            });
                                            return false
                                        }
                                    })
                                }
                                r = false
                            }
                        }
                    }
                    i = s
                },
                "touchstart.smartmenus_mouse pointerover.smartmenus_mouse MSPointerOver.smartmenus_mouse": function(e) {
                    if (!/^(4|mouse)$/.test(e.originalEvent.pointerType)) {
                        o = false
                    }
                }
            });
            u = true
        } else if (u && n) {
            e(document).unbind(".smartmenus_mouse");
            u = false
        }
    }
    var t = [],
        n = !!window.createPopup,
        r = n && !document.defaultView,
        i = n && !document.querySelector,
        s = n && typeof document.documentElement.currentStyle.minWidth == "undefined",
        o = false,
        u = false;
    e.SmartMenus = function(t, n) {
        this.$root = e(t);
        this.opts = n;
        this.rootId = "";
        this.$subArrow = null;
        this.subMenus = [];
        this.activatedItems = [];
        this.visibleSubMenus = [];
        this.showTimeout = 0;
        this.hideTimeout = 0;
        this.scrollTimeout = 0;
        this.clickActivated = false;
        this.zIndexInc = 0;
        this.$firstLink = null;
        this.$firstSub = null;
        this.disabled = false;
        this.$disableOverlay = null;
        this.init()
    };
    e.extend(e.SmartMenus, {
        hideAll: function() {
            e.each(t, function() {
                this.menuHideAll()
            })
        },
        destroy: function() {
            while (t.length) {
                t[0].destroy()
            }
            a(true)
        },
        prototype: {
            init: function(n) {
                var r = this;
                if (!n) {
                    t.push(this);
                    this.rootId = ((new Date).getTime() + Math.random() + "").replace(/\D/g, "");
                    if (this.$root.hasClass("sm-rtl")) {
                        this.opts.rightToLeftSubMenus = true
                    }
                    this.$root.data("smartmenus", this).attr("data-smartmenus-id", this.rootId).dataSM("level", 1).bind({
                        "mouseover.smartmenus focusin.smartmenus": e.proxy(this.rootOver, this),
                        "mouseout.smartmenus focusout.smartmenus": e.proxy(this.rootOut, this)
                    }).delegate("a", {
                        "mouseenter.smartmenus": e.proxy(this.itemEnter, this),
                        "mouseleave.smartmenus": e.proxy(this.itemLeave, this),
                        "mousedown.smartmenus": e.proxy(this.itemDown, this),
                        "focus.smartmenus": e.proxy(this.itemFocus, this),
                        "blur.smartmenus": e.proxy(this.itemBlur, this),
                        "click.smartmenus": e.proxy(this.itemClick, this),
                        "touchend.smartmenus": e.proxy(this.itemTouchEnd, this)
                    });
                    var i = ".smartmenus" + this.rootId;
                    if (this.opts.hideOnClick) {
                        e(document).bind("touchstart" + i, e.proxy(this.docTouchStart, this)).bind("touchmove" + i, e.proxy(this.docTouchMove, this)).bind("touchend" + i, e.proxy(this.docTouchEnd, this)).bind("click" + i, e.proxy(this.docClick, this))
                    }
                    e(window).bind("resize" + i + " orientationchange" + i, e.proxy(this.winResize, this));
                    if (this.opts.subIndicators) {
                        this.$subArrow = e("<span/>").addClass("sub-arrow");
                        if (this.opts.subIndicatorsText) {
                            this.$subArrow.html(this.opts.subIndicatorsText)
                        }
                    }
                    a()
                }
                this.$firstSub = this.$root.find("ul").each(function() {
                    r.menuInit(e(this))
                }).eq(0);
                this.$firstLink = this.$root.find("a").eq(0);
                if (this.opts.markCurrentItem) {
                    var s = /(index|default)\.[^#\?\/]*/i,
                        o = /#.*/,
                        u = window.location.href.replace(s, ""),
                        f = u.replace(o, "");
                    this.$root.find("a").each(function() {
                        var t = this.href.replace(s, ""),
                            n = e(this);
                        if (t == u || t == f) {
                            n.addClass("current");
                            if (r.opts.markCurrentTree) {
                                n.parents("li").each(function() {
                                    var t = e(this);
                                    if (t.dataSM("sub")) {
                                        t.children("a").addClass("current")
                                    }
                                })
                            }
                        }
                    })
                }
            },
            destroy: function() {
                this.menuHideAll();
                this.$root.removeData("smartmenus").removeAttr("data-smartmenus-id").removeDataSM("level").unbind(".smartmenus").undelegate(".smartmenus");
                var n = ".smartmenus" + this.rootId;
                e(document).unbind(n);
                e(window).unbind(n);
                if (this.opts.subIndicators) {
                    this.$subArrow = null
                }
                var r = this;
                e.each(this.subMenus, function() {
                    if (this.hasClass("mega-menu")) {
                        this.find("ul").removeDataSM("in-mega")
                    }
                    if (this.dataSM("shown-before")) {
                        if (i) {
                            this.children().css({
                                styleFloat: "",
                                width: ""
                            })
                        }
                        if (r.opts.subMenusMinWidth || r.opts.subMenusMaxWidth) {
                            if (!s) {
                                this.css({
                                    width: "",
                                    minWidth: "",
                                    maxWidth: ""
                                }).removeClass("sm-nowrap")
                            } else {
                                this.css({
                                    width: "",
                                    overflowX: "",
                                    overflowY: ""
                                }).children().children("a").css("white-space", "")
                            }
                        }
                        if (this.dataSM("scroll-arrows")) {
                            this.dataSM("scroll-arrows").remove()
                        }
                        this.css({
                            zIndex: "",
                            top: "",
                            left: "",
                            marginLeft: "",
                            marginTop: "",
                            display: ""
                        })
                    }
                    if (r.opts.subIndicators) {
                        this.dataSM("parent-a").removeClass("has-submenu").children("span.sub-arrow").remove()
                    }
                    this.removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired").parent().removeDataSM("sub")
                });
                if (this.opts.markCurrentItem) {
                    this.$root.find("a.current").removeClass("current")
                }
                this.$root = null;
                this.$firstLink = null;
                this.$firstSub = null;
                if (this.$disableOverlay) {
                    this.$disableOverlay.remove();
                    this.$disableOverlay = null
                }
                t.splice(e.inArray(this, t), 1)
            },
            disable: function(t) {
                if (!this.disabled) {
                    this.menuHideAll();
                    if (!t && !this.opts.isPopup && this.$root.is(":visible")) {
                        var n = this.$root.offset();
                        this.$disableOverlay = e('<div class="sm-jquery-disable-overlay"/>').css({
                            position: "absolute",
                            top: n.top,
                            left: n.left,
                            width: this.$root.outerWidth(),
                            height: this.$root.outerHeight(),
                            zIndex: this.getStartZIndex() + 1,
                            opacity: 0
                        }).appendTo(document.body)
                    }
                    this.disabled = true
                }
            },
            docClick: function(t) {
                if (this.visibleSubMenus.length && !e.contains(this.$root[0], t.target) || e(t.target).is("a")) {
                    this.menuHideAll()
                }
            },
            docTouchEnd: function(t) {
                if (!this.lastTouch) {
                    return
                }
                if (this.visibleSubMenus.length && (this.lastTouch.x2 === undefined || this.lastTouch.x1 == this.lastTouch.x2) && (this.lastTouch.y2 === undefined || this.lastTouch.y1 == this.lastTouch.y2) && (!this.lastTouch.target || !e.contains(this.$root[0], this.lastTouch.target))) {
                    if (this.hideTimeout) {
                        clearTimeout(this.hideTimeout);
                        this.hideTimeout = 0
                    }
                    var n = this;
                    this.hideTimeout = setTimeout(function() {
                        n.menuHideAll()
                    }, 350)
                }
                this.lastTouch = null
            },
            docTouchMove: function(e) {
                if (!this.lastTouch) {
                    return
                }
                var t = e.originalEvent.touches[0];
                this.lastTouch.x2 = t.pageX;
                this.lastTouch.y2 = t.pageY
            },
            docTouchStart: function(e) {
                var t = e.originalEvent.touches[0];
                this.lastTouch = {
                    x1: t.pageX,
                    y1: t.pageY,
                    target: t.target
                }
            },
            enable: function() {
                if (this.disabled) {
                    if (this.$disableOverlay) {
                        this.$disableOverlay.remove();
                        this.$disableOverlay = null
                    }
                    this.disabled = false
                }
            },
            getHeight: function(e) {
                return this.getOffset(e, true)
            },
            getOffset: function(e, t) {
                var n;
                if (e.css("display") == "none") {
                    n = {
                        position: e[0].style.position,
                        visibility: e[0].style.visibility
                    };
                    e.css({
                        position: "absolute",
                        visibility: "hidden"
                    }).show()
                }
                var r = e[0].ownerDocument.defaultView,
                    i = r && r.getComputedStyle && r.getComputedStyle(e[0], null),
                    s = i && parseFloat(i[t ? "height" : "width"]);
                if (s) {
                    s += parseFloat(i[t ? "paddingTop" : "paddingLeft"]) + parseFloat(i[t ? "paddingBottom" : "paddingRight"]) + parseInt(i[t ? "borderTopWidth" : "borderLeftWidth"]) + parseInt(i[t ? "borderBottomWidth" : "borderRightWidth"])
                } else {
                    s = t ? e[0].offsetHeight : e[0].offsetWidth
                }
                if (n) {
                    e.hide().css(n)
                }
                return s
            },
            getWidth: function(e) {
                return this.getOffset(e)
            },
            getStartZIndex: function() {
                var e = parseInt(this.$root.css("z-index"));
                return !isNaN(e) ? e : 1
            },
            handleEvents: function() {
                return !this.disabled && this.isCSSOn()
            },
            handleItemEvents: function(e) {
                return this.handleEvents() && !this.isLinkInMegaMenu(e)
            },
            isCollapsible: function() {
                return this.$firstSub.css("position") == "static"
            },
            isCSSOn: function() {
                return this.$firstLink.css("display") == "block"
            },
            isFixed: function() {
                return this.$root.css("position") == "fixed"
            },
            isLinkInMegaMenu: function(e) {
                return !e.parent().parent().dataSM("level")
            },
            isTouchMode: function() {
                return !o || this.isCollapsible()
            },
            itemActivate: function(t) {
                var n = t.parent(),
                    r = n.parent(),
                    i = r.dataSM("level");
                if (i > 1 && (!this.activatedItems[i - 2] || this.activatedItems[i - 2][0] != r.dataSM("parent-a")[0])) {
                    var s = this;
                    e(r.parentsUntil("[data-smartmenus-id]", "ul").get().reverse()).add(r).each(function() {
                        s.itemActivate(e(this).dataSM("parent-a"))
                    })
                }
                if (this.visibleSubMenus.length > i) {
                    for (var o = this.visibleSubMenus.length - 1, u = !this.activatedItems[i - 1] || this.activatedItems[i - 1][0] != t[0] ? i - 1 : i; o > u; o--) {
                        this.menuHide(this.visibleSubMenus[o])
                    }
                }
                this.activatedItems[i - 1] = t;
                this.visibleSubMenus[i - 1] = r;
                if (this.$root.triggerHandler("activate.smapi", t[0]) === false) {
                    return
                }
                var a = n.dataSM("sub");
                if (a && (this.isTouchMode() || !this.opts.showOnClick || this.clickActivated)) {
                    this.menuShow(a)
                }
            },
            itemBlur: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                this.$root.triggerHandler("blur.smapi", n[0])
            },
            itemClick: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                n.removeDataSM("mousedown");
                if (this.$root.triggerHandler("click.smapi", n[0]) === false) {
                    return false
                }
                var r = n.parent().dataSM("sub");
                if (this.isTouchMode()) {
                    if (n.dataSM("href")) {
                        n.attr("href", n.dataSM("href")).removeDataSM("href")
                    }
                    if (r && (!r.dataSM("shown-before") || !r.is(":visible"))) {
                        this.itemActivate(n);
                        if (r.is(":visible")) {
                            return false
                        }
                    }
                } else if (this.opts.showOnClick && n.parent().parent().dataSM("level") == 1 && r) {
                    this.clickActivated = true;
                    this.menuShow(r);
                    return false
                }
                if (n.hasClass("disabled")) {
                    return false
                }
                if (this.$root.triggerHandler("select.smapi", n[0]) === false) {
                    return false
                }
            },
            itemDown: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                n.dataSM("mousedown", true)
            },
            itemEnter: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                if (!this.isTouchMode()) {
                    if (this.showTimeout) {
                        clearTimeout(this.showTimeout);
                        this.showTimeout = 0
                    }
                    var r = this;
                    this.showTimeout = setTimeout(function() {
                        r.itemActivate(n)
                    }, this.opts.showOnClick && n.parent().parent().dataSM("level") == 1 ? 1 : this.opts.showTimeout)
                }
                this.$root.triggerHandler("mouseenter.smapi", n[0])
            },
            itemFocus: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                if ((!this.isTouchMode() || !n.dataSM("mousedown")) && (!this.activatedItems.length || this.activatedItems[this.activatedItems.length - 1][0] != n[0])) {
                    this.itemActivate(n)
                }
                this.$root.triggerHandler("focus.smapi", n[0])
            },
            itemLeave: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                if (!this.isTouchMode()) {
                    if (n[0].blur) {
                        n[0].blur()
                    }
                    if (this.showTimeout) {
                        clearTimeout(this.showTimeout);
                        this.showTimeout = 0
                    }
                }
                n.removeDataSM("mousedown");
                this.$root.triggerHandler("mouseleave.smapi", n[0])
            },
            itemTouchEnd: function(t) {
                var n = e(t.currentTarget);
                if (!this.handleItemEvents(n)) {
                    return
                }
                var r = n.parent().dataSM("sub");
                if (n.attr("href").charAt(0) !== "#" && r && (!r.dataSM("shown-before") || !r.is(":visible"))) {
                    n.dataSM("href", n.attr("href"));
                    n.attr("href", "#")
                }
            },
            menuFixLayout: function(e) {
                if (!e.dataSM("shown-before")) {
                    e.hide().dataSM("shown-before", true);
                    if (i) {
                        e.children().css({
                            styleFloat: "left",
                            width: "100%"
                        })
                    }
                }
            },
            menuHide: function(e) {
                if (this.$root.triggerHandler("beforehide.smapi", e[0]) === false) {
                    return
                }
                e.stop(true, true);
                if (e.is(":visible")) {
                    var t = function() {
                        if (r) {
                            e.parent().css("z-index", "")
                        } else {
                            e.css("z-index", "")
                        }
                    };
                    if (this.isCollapsible()) {
                        if (this.opts.collapsibleHideFunction) {
                            this.opts.collapsibleHideFunction.call(this, e, t)
                        } else {
                            e.hide(this.opts.collapsibleHideDuration, t)
                        }
                    } else {
                        if (this.opts.hideFunction) {
                            this.opts.hideFunction.call(this, e, t)
                        } else {
                            e.hide(this.opts.hideDuration, t)
                        }
                    }
                    if (e.dataSM("ie-shim")) {
                        e.dataSM("ie-shim").remove()
                    }
                    if (e.dataSM("scroll")) {
                        e.unbind(".smartmenus_scroll").removeDataSM("scroll").dataSM("scroll-arrows").hide()
                    }
                    e.dataSM("parent-a").removeClass("highlighted");
                    var n = e.dataSM("level");
                    this.activatedItems.splice(n - 1, 1);
                    this.visibleSubMenus.splice(n - 1, 1);
                    this.$root.triggerHandler("hide.smapi", e[0])
                }
            },
            menuHideAll: function() {
                if (this.showTimeout) {
                    clearTimeout(this.showTimeout);
                    this.showTimeout = 0
                }
                for (var e = this.visibleSubMenus.length - 1; e > 0; e--) {
                    this.menuHide(this.visibleSubMenus[e])
                }
                if (this.opts.isPopup) {
                    this.$root.stop(true, true);
                    if (this.$root.is(":visible")) {
                        if (this.opts.hideFunction) {
                            this.opts.hideFunction.call(this, this.$root)
                        } else {
                            this.$root.hide(this.opts.hideDuration)
                        }
                        if (this.$root.dataSM("ie-shim")) {
                            this.$root.dataSM("ie-shim").remove()
                        }
                    }
                }
                this.activatedItems = [];
                this.visibleSubMenus = [];
                this.clickActivated = false;
                this.zIndexInc = 0
            },
            menuIframeShim: function(t) {
                if (n && this.opts.overlapControlsInIE && !t.dataSM("ie-shim")) {
                    t.dataSM("ie-shim", e("<iframe/>").attr({
                        src: "javascript:0",
                        tabindex: -9
                    }).css({
                        position: "absolute",
                        top: "auto",
                        left: "0",
                        opacity: 0,
                        border: "0"
                    }))
                }
            },
            menuInit: function(e) {
                if (!e.dataSM("in-mega")) {
                    this.subMenus.push(e);
                    if (e.hasClass("mega-menu")) {
                        e.find("ul").dataSM("in-mega", true)
                    }
                    var t = 2,
                        n = e[0];
                    while ((n = n.parentNode.parentNode) != this.$root[0]) {
                        t++
                    }
                    e.dataSM("parent-a", e.prevAll("a")).dataSM("level", t).parent().dataSM("sub", e);
                    if (this.opts.subIndicators) {
                        e.dataSM("parent-a").addClass("has-submenu")[this.opts.subIndicatorsPos](this.$subArrow.clone())
                    }
                }
            },
            menuPosition: function(t) {
                var n = t.dataSM("parent-a"),
                    r = t.parent().parent(),
                    i = t.dataSM("level"),
                    s = this.getWidth(t),
                    u = this.getHeight(t),
                    a = n.offset(),
                    f = a.left,
                    l = a.top,
                    c = this.getWidth(n),
                    h = this.getHeight(n),
                    p = e(window),
                    d = p.scrollLeft(),
                    v = p.scrollTop(),
                    m = p.width(),
                    g = p.height(),
                    y = r.hasClass("sm") && !r.hasClass("sm-vertical"),
                    b = i == 2 ? this.opts.mainMenuSubOffsetX : this.opts.subMenusSubOffsetX,
                    w = i == 2 ? this.opts.mainMenuSubOffsetY : this.opts.subMenusSubOffsetY,
                    E, S;
                if (y) {
                    E = this.opts.rightToLeftSubMenus ? c - s - b : b;
                    S = this.opts.bottomToTopSubMenus ? -u - b : h + w
                } else {
                    E = this.opts.rightToLeftSubMenus ? b - s : c - b;
                    S = this.opts.bottomToTopSubMenus ? h - w - u : w
                }
                if (this.opts.keepInViewport && !this.isCollapsible()) {
                    if (this.isFixed()) {
                        f -= d;
                        l -= v;
                        d = v = 0
                    }
                    var x = f + E,
                        T = l + S;
                    if (this.opts.rightToLeftSubMenus && x < d) {
                        E = y ? d - x + E : c - b
                    } else if (!this.opts.rightToLeftSubMenus && x + s > d + m) {
                        E = y ? d + m - s - x + E : b - s
                    }
                    if (!y) {
                        if (u < g && T + u > v + g) {
                            S += v + g - u - T
                        } else if (u >= g || T < v) {
                            S += v - T
                        }
                    }
                    if (o && (y && (T + u > v + g + .49 || T < v) || !y && u > g + .49)) {
                        var N = this;
                        if (!t.dataSM("scroll-arrows")) {
                            t.dataSM("scroll-arrows", e([e('<span class="scroll-up"><span class="scroll-up-arrow"></span></span>')[0], e('<span class="scroll-down"><span class="scroll-down-arrow"></span></span>')[0]]).bind({
                                mouseenter: function() {
                                    N.menuScroll(t, e(this).hasClass("scroll-up"))
                                },
                                mouseleave: function(e) {
                                    N.menuScrollStop(t);
                                    N.menuScrollOut(t, e)
                                },
                                "mousewheel DOMMouseScroll": function(e) {
                                    e.preventDefault()
                                }
                            }).insertAfter(t))
                        }
                        var C = v - (l + h);
                        t.dataSM("scroll", {
                            vportY: C,
                            subH: u,
                            winH: g,
                            step: 1
                        }).bind({
                            "mouseover.smartmenus_scroll": function(e) {
                                N.menuScrollOver(t, e)
                            },
                            "mouseout.smartmenus_scroll": function(e) {
                                N.menuScrollOut(t, e)
                            },
                            "mousewheel.smartmenus_scroll DOMMouseScroll.smartmenus_scroll": function(e) {
                                N.menuScrollMousewheel(t, e)
                            }
                        }).dataSM("scroll-arrows").css({
                            top: "auto",
                            left: "0",
                            marginLeft: E + (parseInt(t.css("border-left-width")) || 0),
                            width: this.getWidth(t) - (parseInt(t.css("border-left-width")) || 0) - (parseInt(t.css("border-right-width")) || 0),
                            zIndex: this.getStartZIndex() + this.zIndexInc
                        }).eq(0).css("margin-top", C).end().eq(1).css("margin-top", C + g - this.getHeight(t.dataSM("scroll-arrows").eq(1))).end().eq(y && this.opts.bottomToTopSubMenus ? 0 : 1).show()
                    }
                }
                t.css({
                    top: "auto",
                    left: "0",
                    marginLeft: E,
                    marginTop: S - h
                });
                this.menuIframeShim(t);
                if (t.dataSM("ie-shim")) {
                    t.dataSM("ie-shim").css({
                        zIndex: t.css("z-index"),
                        width: s,
                        height: u,
                        marginLeft: E,
                        marginTop: S - h
                    })
                }
            },
            menuScroll: function(e, t, n) {
                var r = parseFloat(e.css("margin-top")),
                    i = e.dataSM("scroll"),
                    s = i.vportY + (t ? 0 : i.winH - i.subH),
                    o = n || !this.opts.scrollAccelerate ? this.opts.scrollStep : Math.floor(e.dataSM("scroll").step);
                e.add(e.dataSM("ie-shim")).css("margin-top", Math.abs(s - r) > o ? r + (t ? o : -o) : s);
                r = parseFloat(e.css("margin-top"));
                if (t && r + i.subH > i.vportY + i.winH || !t && r < i.vportY) {
                    e.dataSM("scroll-arrows").eq(t ? 1 : 0).show()
                }
                if (!n && this.opts.scrollAccelerate && e.dataSM("scroll").step < this.opts.scrollStep) {
                    e.dataSM("scroll").step += .5
                }
                if (Math.abs(r - s) < 1) {
                    e.dataSM("scroll-arrows").eq(t ? 0 : 1).hide();
                    e.dataSM("scroll").step = 1
                } else if (!n) {
                    var u = this;
                    this.scrollTimeout = setTimeout(function() {
                        u.menuScroll(e, t)
                    }, this.opts.scrollInterval)
                }
            },
            menuScrollMousewheel: function(t, n) {
                var r = e(n.target).closest("ul");
                while (r.dataSM("in-mega")) {
                    r = r.parent().closest("ul")
                }
                if (r[0] == t[0]) {
                    var i = (n.originalEvent.wheelDelta || -n.originalEvent.detail) > 0;
                    if (t.dataSM("scroll-arrows").eq(i ? 0 : 1).is(":visible")) {
                        this.menuScroll(t, i, true)
                    }
                }
                n.preventDefault()
            },
            menuScrollOut: function(t, n) {
                var r = /^scroll-(up|down)/,
                    i = e(n.relatedTarget).closest("ul");
                while (i.dataSM("in-mega")) {
                    i = i.parent().closest("ul")
                }
                if (!r.test((n.relatedTarget || "").className) && (t[0] != n.relatedTarget && !e.contains(t[0], n.relatedTarget) || i[0] != t[0])) {
                    t.dataSM("scroll-arrows").css("visibility", "hidden")
                }
            },
            menuScrollOver: function(t, n) {
                var r = /^scroll-(up|down)/,
                    i = e(n.target).closest("ul");
                while (i.dataSM("in-mega")) {
                    i = i.parent().closest("ul")
                }
                if (!r.test(n.target.className) && i[0] == t[0]) {
                    t.dataSM("scroll-arrows").css("visibility", "visible")
                }
            },
            menuScrollStop: function(e) {
                if (this.scrollTimeout) {
                    clearTimeout(this.scrollTimeout);
                    this.scrollTimeout = 0;
                    e.dataSM("scroll").step = 1
                }
            },
            menuShow: function(e) {
                if (!e.dataSM("beforefirstshowfired")) {
                    e.dataSM("beforefirstshowfired", true);
                    if (this.$root.triggerHandler("beforefirstshow.smapi", e[0]) === false) {
                        return
                    }
                }
                if (this.$root.triggerHandler("beforeshow.smapi", e[0]) === false) {
                    return
                }
                this.menuFixLayout(e);
                e.stop(true, true);
                if (!e.is(":visible")) {
                    var t = this.getStartZIndex() + ++this.zIndexInc;
                    if (r) {
                        e.parent().css("z-index", t)
                    } else {
                        e.css("z-index", t)
                    }
                    if (this.opts.keepHighlighted || this.isCollapsible()) {
                        e.dataSM("parent-a").addClass("highlighted")
                    }
                    if (this.opts.subMenusMinWidth || this.opts.subMenusMaxWidth) {
                        if (!i) {
                            e.css({
                                width: "auto",
                                minWidth: "",
                                maxWidth: ""
                            }).addClass("sm-nowrap");
                            if (this.opts.subMenusMinWidth) {
                                e.css("min-width", this.opts.subMenusMinWidth)
                            }
                            if (this.opts.subMenusMaxWidth) {
                                var n = this.getWidth(e);
                                e.css("max-width", this.opts.subMenusMaxWidth);
                                if (n > this.getWidth(e)) {
                                    e.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth)
                                }
                            }
                        } else {
                            e.children().css("styleFloat", "none");
                            if (s) {
                                e.width(this.opts.subMenusMinWidth ? this.opts.subMenusMinWidth : 1).children().children("a").css("white-space", "nowrap")
                            } else {
                                e.css({
                                    width: "auto",
                                    minWidth: "",
                                    maxWidth: ""
                                }).addClass("sm-nowrap");
                                if (this.opts.subMenusMinWidth) {
                                    e.css("min-width", this.opts.subMenusMinWidth)
                                }
                            }
                            if (this.opts.subMenusMaxWidth) {
                                var n = e.width();
                                if (s) {
                                    var o = e.css({
                                        width: this.opts.subMenusMaxWidth,
                                        overflowX: "hidden",
                                        overflowY: "hidden"
                                    }).width();
                                    if (n > o) {
                                        e.css({
                                            width: o,
                                            overflowX: "visible",
                                            overflowY: "visible"
                                        }).children().children("a").css("white-space", "")
                                    } else {
                                        e.css({
                                            width: n,
                                            overflowX: "visible",
                                            overflowY: "visible"
                                        })
                                    }
                                } else {
                                    e.css("max-width", this.opts.subMenusMaxWidth);
                                    if (n > e.width()) {
                                        e.removeClass("sm-nowrap").css("width", this.opts.subMenusMaxWidth)
                                    } else {
                                        e.width(n)
                                    }
                                }
                            } else {
                                e.width(e.width())
                            }
                            e.children().css("styleFloat", "left")
                        }
                    }
                    this.menuPosition(e);
                    if (e.dataSM("ie-shim")) {
                        e.dataSM("ie-shim").insertBefore(e)
                    }
                    var u = function() {
                        e.css("overflow", "")
                    };
                    if (this.isCollapsible()) {
                        if (this.opts.collapsibleShowFunction) {
                            this.opts.collapsibleShowFunction.call(this, e, u)
                        } else {
                            e.show(this.opts.collapsibleShowDuration, u)
                        }
                    } else {
                        if (this.opts.showFunction) {
                            this.opts.showFunction.call(this, e, u)
                        } else {
                            e.show(this.opts.showDuration, u)
                        }
                    }
                    this.visibleSubMenus[e.dataSM("level") - 1] = e;
                    this.$root.triggerHandler("show.smapi", e[0])
                }
            },
            popupHide: function(e) {
                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                    this.hideTimeout = 0
                }
                var t = this;
                this.hideTimeout = setTimeout(function() {
                    t.menuHideAll()
                }, e ? 1 : this.opts.hideTimeout)
            },
            popupShow: function(e, t) {
                if (!this.opts.isPopup) {
                    alert('SmartMenus jQuery Error:\n\nIf you want to show this menu via the "popupShow" method, set the isPopup:true option.');
                    return
                }
                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                    this.hideTimeout = 0
                }
                this.menuFixLayout(this.$root);
                this.$root.stop(true, true);
                if (!this.$root.is(":visible")) {
                    this.$root.css({
                        left: e,
                        top: t
                    });
                    this.menuIframeShim(this.$root);
                    if (this.$root.dataSM("ie-shim")) {
                        this.$root.dataSM("ie-shim").css({
                            zIndex: this.$root.css("z-index"),
                            width: this.getWidth(this.$root),
                            height: this.getHeight(this.$root),
                            left: e,
                            top: t
                        }).insertBefore(this.$root)
                    }
                    if (this.opts.showFunction) {
                        this.opts.showFunction.call(this, this.$root)
                    } else {
                        this.$root.show(this.opts.showDuration)
                    }
                    this.visibleSubMenus[0] = this.$root
                }
            },
            refresh: function() {
                this.menuHideAll();
                this.$root.find("ul").each(function() {
                    var t = e(this);
                    if (t.dataSM("scroll-arrows")) {
                        t.dataSM("scroll-arrows").remove()
                    }
                }).removeDataSM("in-mega").removeDataSM("shown-before").removeDataSM("ie-shim").removeDataSM("scroll-arrows").removeDataSM("parent-a").removeDataSM("level").removeDataSM("beforefirstshowfired");
                this.$root.find("a.has-submenu").removeClass("has-submenu").parent().removeDataSM("sub");
                if (this.opts.subIndicators) {
                    this.$root.find("span.sub-arrow").remove()
                }
                if (this.opts.markCurrentItem) {
                    this.$root.find("a.current").removeClass("current")
                }
                this.subMenus = [];
                this.init(true)
            },
            rootOut: function(e) {
                if (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {
                    return
                }
                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                    this.hideTimeout = 0
                }
                if (!this.opts.showOnClick || !this.opts.hideOnClick) {
                    var t = this;
                    this.hideTimeout = setTimeout(function() {
                        t.menuHideAll()
                    }, this.opts.hideTimeout)
                }
            },
            rootOver: function(e) {
                if (!this.handleEvents() || this.isTouchMode() || e.target == this.$root[0]) {
                    return
                }
                if (this.hideTimeout) {
                    clearTimeout(this.hideTimeout);
                    this.hideTimeout = 0
                }
            },
            winResize: function(e) {
                if (!this.handleEvents()) {
                    if (this.$disableOverlay) {
                        var t = this.$root.offset();
                        this.$disableOverlay.css({
                            top: t.top,
                            left: t.left,
                            width: this.$root.outerWidth(),
                            height: this.$root.outerHeight()
                        })
                    }
                    return
                }
                if (!this.isCollapsible() && (!("onorientationchange" in window) || e.type == "orientationchange")) {
                    if (this.activatedItems.length) {
                        this.activatedItems[this.activatedItems.length - 1][0].blur()
                    }
                    this.menuHideAll()
                }
            }
        }
    });
    e.fn.dataSM = function(e, t) {
        if (t) {
            return this.data(e + "_smartmenus", t)
        }
        return this.data(e + "_smartmenus")
    };
    e.fn.removeDataSM = function(e) {
        return this.removeData(e + "_smartmenus")
    };
    e.fn.smartmenus = function(t) {
        if (typeof t == "string") {
            var n = arguments,
                r = t;
            Array.prototype.shift.call(n);
            return this.each(function() {
                var t = e(this).data("smartmenus");
                if (t && t[r]) {
                    t[r].apply(t, n)
                }
            })
        }
        var i = e.extend({}, e.fn.smartmenus.defaults, t);
        return this.each(function() {
            new e.SmartMenus(this, i)
        })
    };
    e.fn.smartmenus.defaults = {
        isPopup: false,
        mainMenuSubOffsetX: 0,
        mainMenuSubOffsetY: 0,
        subMenusSubOffsetX: 0,
        subMenusSubOffsetY: 0,
        subMenusMinWidth: "10em",
        subMenusMaxWidth: "20em",
        subIndicators: true,
        subIndicatorsPos: "prepend",
        subIndicatorsText: "+",
        scrollStep: 30,
        scrollInterval: 30,
        scrollAccelerate: true,
        showTimeout: 250,
        hideTimeout: 500,
        showDuration: 0,
        showFunction: null,
        hideDuration: 0,
        hideFunction: function(e, t) {
            e.fadeOut(200, t)
        },
        collapsibleShowDuration: 0,
        collapsibleShowFunction: function(e, t) {
            e.slideDown(200, t)
        },
        collapsibleHideDuration: 0,
        collapsibleHideFunction: function(e, t) {
            e.slideUp(200, t)
        },
        showOnClick: false,
        hideOnClick: true,
        keepInViewport: true,
        keepHighlighted: true,
        markCurrentItem: false,
        markCurrentTree: true,
        rightToLeftSubMenus: false,
        bottomToTopSubMenus: false,
        overlapControlsInIE: true
    }
})(jQuery);


/* SmartMenus jQuery Bootstrap Addon - v0.1.0 */
$(function() {
    $("ul.navbar-nav").each(function() {
        var e = $(this);
        e.addClass("sm").smartmenus({
            subMenusSubOffsetX: 2,
            subMenusSubOffsetY: -6,
            subIndicatorsPos: "append",
            subIndicatorsText: "",
            collapsibleShowFunction: null,
            collapsibleHideFunction: null,
            rightToLeftSubMenus: e.hasClass("navbar-right"),
            bottomToTopSubMenus: e.closest(".navbar").hasClass("navbar-fixed-bottom")
        }).find("a.current").parent().addClass("active")
    }).bind({
        "show.smapi": function(e, t) {
            var n = $(t),
                r = n.dataSM("scroll-arrows"),
                i = $(this).data("smartmenus");
            if (r) {
                r.css("background-color", $(document.body).css("background-color"))
            }
            n.parent().addClass("open" + (i.isCollapsible() ? " collapsible" : ""))
        },
        "hide.smapi": function(e, t) {
            $(t).parent().removeClass("open collapsible")
        },
        "click.smapi": function(e, t) {
            var n = $(this).data("smartmenus");
            if (n.isCollapsible()) {
                var r = $(t),
                    i = r.parent().dataSM("sub");
                if (i && i.dataSM("shown-before") && i.is(":visible")) {
                    n.itemActivate(r);
                    n.menuHide(i);
                    return false
                }
            }
        }
    });
    $.SmartMenus.prototype.isCollapsible = function() {
        return this.$firstLink.parent().css("float") != "left"
    }
});


/*
 * jQuery plugin "tytabs" by Tyler ( Gregory Jacob )
 * http://blog.carefordesign.com
 *
 * Copyright 2010, Gregory Jacob
 * Data : 31 decembre 2010
 */
;
(function($) {
    $.fn.tytabs = function(options) {
        var defaults = {
                prefixtabs: "tab",
                prefixcontent: "content",
                classcontent: "tabscontent",
                tabinit: "1",
                catchget: "tab",
                fadespeed: "normal"
            },
            opts = $.extend({}, defaults, options);
        return this.each(function() {
            var obj = $(this);
            opts.classcontent = "." + opts.classcontent;
            opts.prefixcontent = "#" + opts.prefixcontent;

            function showTab(id) {
                $(opts.classcontent, obj).stop(true, true);
                var contentvisible = $(opts.classcontent + ":visible", obj);
                if (contentvisible.length > 0) {
                    contentvisible.fadeOut(opts.fadespeed, function() {
                        fadeincontent(id)
                    })
                } else {
                    fadeincontent(id)
                }
                $("#" + opts.prefixtabs + opts.tabinit).removeAttr("class");
                $("#" + opts.prefixtabs + id).attr("class", "current");
                opts.tabinit = id
            }

            function fadeincontent(id) {
                $(opts.prefixcontent + id, obj).fadeIn(opts.fadespeed)
            }
            $("ul.tabs li", obj).click(function() {
                showTab($(this).attr("id").replace(opts.prefixtabs, ""));
                return false
            });
            var tab = getvars(opts.catchget);
            showTab(((tab && $(opts.prefixcontent + tab).length == 1) ? tab : ($(opts.prefixcontent + opts.tabinit).length == 1) ? opts.tabinit : "1"))
        })
    };

    function getvars(q, s) {
        s = (s) ? s : window.location.search;
        var re = new RegExp("&" + q + "=([^&]*)", "i");
        return (s = s.replace(/^\?/, "&").match(re)) ? s = s[1] : s = ""
    }
})(jQuery);

/* browserdetect */
var BrowserDetect = {
    init: function() {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS"
    },
    searchString: function(e) {
        for (var t = 0; t < e.length; t++) {
            var n = e[t].string;
            var r = e[t].prop;
            this.versionSearchString = e[t].versionSearch || e[t].identity;
            if (n) {
                if (n.indexOf(e[t].subString) != -1) return e[t].identity
            } else if (r) return e[t].identity
        }
    },
    searchVersion: function(e) {
        var t = e.indexOf(this.versionSearchString);
        if (t == -1) return;
        return parseFloat(e.substring(t + this.versionSearchString.length + 1))
    },
    dataBrowser: [{
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    }, {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    }, {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    }, {
        prop: window.opera,
        identity: "Opera",
        versionSearch: "Version"
    }, {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    }, {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    }, {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    }, {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    }, {
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    }, {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    }, {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    }, {
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    dataOS: [{
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    }, {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    }, {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    }, {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }]
};
BrowserDetect.init();

/* Hoverizr [grayscale modern IE's] */
;
(function($) {
    $.fn.hoverizr = function(m) {
        var o = {
            'effect': "grayscale",
            'overlay': "top",
            'container': "overlayed",
            'width': "responsive",
            'height': "auto",
            'stretch': "no",
            'speedIn': "slow",
            'speedOut': "fast"
        };
        var m = $.extend(o, m);
        if ($('img').css('maxWidth') != "none") {
            var p = 1;
            $('img').css('maxWidth', "none")
        } else {
            var p = 0
        }
        this.each(function() {
            $(this).wrap('<div class="' + m.container + '" />');
            $(this).parent('.' + m.container + '').css({
                'position': 'relative'
            });
            $(this).parent('.' + m.container + '').append('<canvas class="canv"></canvas>');
            $(this).next('.canv').css({
                'position': 'absolute',
                'top': '0',
                'left': '0',
                'z-index': 10
            });
            if (m.overlay == "top") {
                $(this).css({
                    'z-index': -1
                })
            } else {
                $(this).css({
                    'z-index': 1
                });
                $(this).next('.canv').css({
                    'display': 'none'
                })
            }
            var a = $(this).width();
            var b = $(this).height();
            $(this).next('.canv').attr({
                "width": a,
                "height": b
            });
            var c = $(this).next('.canv').get(0);
            var d = c.getContext("2d");
            var f = $(this).get(0);
            d.drawImage(f, 0, 0);
            if (m.effect != 'noise' && 'blur') {
                try {
                    try {
                        var g = d.getImageData(0, 0, a, b)
                    } catch (e) {
                        netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                        var g = d.getImageData(0, 0, a, b)
                    }
                } catch (e) {
                    throw new Error("unable to access image data: " + e)
                }
                var h = g.data
            }
            switch (m.effect) {
                case "invert":
                    for (var i = 0, n = h.length; i < n; i += 4) {
                        h[i] = 255 - h[i];
                        h[i + 1] = 255 - h[i + 1];
                        h[i + 2] = 255 - h[i + 2]
                    }
                    break;
                case "blur":
                    var j, x, y;
                    var k = new Image;
                    k.src = $(this).attr('src');
                    d.globalAlpha = 0.0625;
                    for (y = -3; y < 3; y += 1) {
                        for (x = -3; x < 3; x += 1) {
                            d.drawImage(k, x, y)
                        }
                    }
                    d.globalAlpha = 1;
                    break;
                default:
                    for (var i = 0, n = h.length; i < n; i += 4) {
                        var l = h[i] * .3 + h[i + 1] * .59 + h[i + 2] * .11;
                        h[i] = l;
                        h[i + 1] = l;
                        h[i + 2] = l
                    }
                    break
            }
            if (m.effect != ("blur" || "noise")) {
                d.putImageData(g, 0, 0)
            }
            if (m.width == "responsive") {
                $(this).next('.canv').css({
                    'max-width': '100%'
                });
                $(this).css({
                    'max-width': '100%'
                });
                $(this).parent('.' + m.container + '').css({
                    'width': '100%'
                })
            } else if (m.stretch == "no") {
                $(this).parent('.' + m.container + '').css({
                    'width': m.width,
                    'height': m.height,
                    overflow: "hidden"
                })
            } else {
                $(this).next('.canv').css({
                    'width': m.width,
                    'height': m.height
                });
                $(this).css({
                    'width': m.width,
                    'height': m.height
                });
                $(this).parent('.' + m.container + '').css({
                    'width': m.width,
                    'height': m.height
                })
            }
        });
        if (p == 1) {
            $('img').css('maxWidth', "100%")
        }
        if (m.overlay == "top") {
            this.parent('.' + m.container + '').hover(function() {
                $(this).children('.canv').stop(true, true).fadeOut(m.speedOut)
            }, function() {
                $(this).children('.canv').stop(true, true).fadeIn(m.speedIn)
            })
        } else {
            this.parent('.' + m.container + '').hover(function() {
                $(this).children('.canv').stop(true, true).fadeIn(m.speedOut)
            }, function() {
                $(this).children('.canv').stop(true, true).fadeOut(m.speedIn)
            })
        }
    }
})(jQuery);