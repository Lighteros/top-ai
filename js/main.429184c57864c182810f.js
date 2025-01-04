!(function (e) {
  function t(t) {
    for (
      var r, a, s = t[0], c = t[1], l = t[2], u = 0, d = [];
      u < s.length;
      u++
    )
      (a = s[u]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]),
        (o[a] = 0);
    for (r in c) Object.prototype.hasOwnProperty.call(c, r) && (e[r] = c[r]);
    for (h && h(t); d.length; ) d.shift()();
    return i.push.apply(i, l || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, a = 1; a < n.length; a++) {
        var c = n[a];
        0 !== o[c] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = s((s.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { 2: 0 },
    o = { 2: 0 },
    i = [];
  function s(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, s), (n.l = !0), n.exports;
  }
  (s.e = function (e) {
    var t = [];
    a[e]
      ? t.push(a[e])
      : 0 !== a[e] &&
        {
          4: 1,
          5: 1,
          7: 1,
          8: 1,
          9: 1,
          10: 1,
          11: 1,
          12: 1,
          13: 1,
          15: 1,
          16: 1,
          18: 1,
        }[e] &&
        t.push(
          (a[e] = new Promise(function (t, n) {
            for (
              var r =
                  "css/" +
                  ({
                    0: "commons",
                    3: "pdfjsWorker",
                    4: "views-Act",
                    5: "views-Activity",
                    6: "views-CrossChainBridge",
                    7: "views-Ecosystem",
                    8: "views-Faucet",
                    9: "views-Handbook",
                    10: "views-Innovations",
                    11: "views-NewHome",
                    12: "views-NewHomePage",
                    13: "views-News",
                    14: "views-Policy",
                    15: "views-Solution",
                    16: "views-Team",
                    17: "views-Terms",
                    18: "views-Whitepaper",
                  }[e] || e) +
                  "." +
                  {
                    0: "31d6cfe0d16ae931b73c",
                    3: "31d6cfe0d16ae931b73c",
                    4: "9ce2a25974caba91143a",
                    5: "cb202e0f077495a53a4d",
                    6: "31d6cfe0d16ae931b73c",
                    7: "b578eeeafeffb11631ae",
                    8: "f48688d1205da52d7d56",
                    9: "b7ad00ed8779412712d1",
                    10: "40b2f404bee0c20705b8",
                    11: "d35e47a628f1489ae6f6",
                    12: "92647ec0a7beb8b2898d",
                    13: "265a3f38e46804ce67d6",
                    14: "31d6cfe0d16ae931b73c",
                    15: "848cf7bc5dcffba54b66",
                    16: "4d3d1d00bafc6054c96f",
                    17: "31d6cfe0d16ae931b73c",
                    18: "5c5974056436e8dabe05",
                  }[e] +
                  ".css",
                o = s.p + r,
                i = document.getElementsByTagName("link"),
                c = 0;
              c < i.length;
              c++
            ) {
              var l =
                (h = i[c]).getAttribute("data-href") || h.getAttribute("href");
              if ("stylesheet" === h.rel && (l === r || l === o)) return t();
            }
            var u = document.getElementsByTagName("style");
            for (c = 0; c < u.length; c++) {
              var h;
              if ((l = (h = u[c]).getAttribute("data-href")) === r || l === o)
                return t();
            }
            var d = document.createElement("link");
            (d.rel = "stylesheet"),
              (d.type = "text/css"),
              (d.onload = t),
              (d.onerror = function (t) {
                var r = (t && t.target && t.target.src) || o,
                  i = new Error(
                    "Loading CSS chunk " + e + " failed.\n(" + r + ")"
                  );
                (i.code = "CSS_CHUNK_LOAD_FAILED"),
                  (i.request = r),
                  delete a[e],
                  d.parentNode.removeChild(d),
                  n(i);
              }),
              (d.href = o),
              document.getElementsByTagName("head")[0].appendChild(d);
          }).then(function () {
            a[e] = 0;
          }))
        );
    var n = o[e];
    if (0 !== n)
      if (n) t.push(n[2]);
      else {
        var r = new Promise(function (t, r) {
          n = o[e] = [t, r];
        });
        t.push((n[2] = r));
        var i,
          c = document.createElement("script");
        (c.charset = "utf-8"),
          (c.timeout = 120),
          s.nc && c.setAttribute("nonce", s.nc),
          (c.src = (function (e) {
            return (
              s.p +
              "js/" +
              ({
                0: "commons",
                3: "pdfjsWorker",
                4: "views-Act",
                5: "views-Activity",
                6: "views-CrossChainBridge",
                7: "views-Ecosystem",
                8: "views-Faucet",
                9: "views-Handbook",
                10: "views-Innovations",
                11: "views-NewHome",
                12: "views-NewHomePage",
                13: "views-News",
                14: "views-Policy",
                15: "views-Solution",
                16: "views-Team",
                17: "views-Terms",
                18: "views-Whitepaper",
              }[e] || e) +
              "." +
              {
                0: "6ed9a78a9e4abc1eb723",
                3: "547cac1667c796670e68",
                4: "fbec6f812f3570af416e",
                5: "1bce5b5216b6b6582b1d",
                6: "810242cfa67419f75fb1",
                7: "39d6200c60310a25dc99",
                8: "94e78544c8480b979465",
                9: "86c9a20d41c983b46b51",
                10: "d35526015155b6789ce7",
                11: "d7cb455b41d788708599",
                12: "2b82b42f41761508185b",
                13: "859cf052dacdeb5482f7",
                14: "33d5e05f87b243ac0a29",
                15: "17745234575204e2c7c4",
                16: "19a5930cc11839de0b33",
                17: "a100a9d3fa5adb8403b2",
                18: "baf4cbd7bd3fbf238ae2",
              }[e] +
              ".js"
            );
          })(e));
        var l = new Error();
        i = function (t) {
          (c.onerror = c.onload = null), clearTimeout(u);
          var n = o[e];
          if (0 !== n) {
            if (n) {
              var r = t && ("load" === t.type ? "missing" : t.type),
                a = t && t.target && t.target.src;
              (l.message =
                "Loading chunk " + e + " failed.\n(" + r + ": " + a + ")"),
                (l.name = "ChunkLoadError"),
                (l.type = r),
                (l.request = a),
                n[1](l);
            }
            o[e] = void 0;
          }
        };
        var u = setTimeout(function () {
          i({ type: "timeout", target: c });
        }, 12e4);
        (c.onerror = c.onload = i), document.head.appendChild(c);
      }
    return Promise.all(t);
  }),
    (s.m = e),
    (s.c = r),
    (s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (s.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (s.t = function (e, t) {
      if ((1 & t && (e = s(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (s.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          s.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (s.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return s.d(t, "a", t), t;
    }),
    (s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (s.p = "/"),
    (s.oe = function (e) {
      throw (console.error(e), e);
    });
  var c = (window.__LOADABLE_LOADED_CHUNKS__ =
      window.__LOADABLE_LOADED_CHUNKS__ || []),
    l = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var u = 0; u < c.length; u++) t(c[u]);
  var h = l;
  i.push([133, 1]), n();
})([
  ,
  ,
  function (e, t, n) {
    "use strict";
    function r() {
      return (r =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return r;
    }),
      n.d(t, "a", function () {
        return a;
      });
    function r(e, t, n, r) {
      var a,
        o = arguments.length,
        i =
          o < 3
            ? t
            : null === r
            ? (r = Object.getOwnPropertyDescriptor(t, n))
            : r;
      if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
        i = Reflect.decorate(e, t, n, r);
      else
        for (var s = e.length - 1; s >= 0; s--)
          (a = e[s]) &&
            (i = (o < 3 ? a(i) : o > 3 ? a(t, n, i) : a(t, n)) || i);
      return o > 3 && i && Object.defineProperty(t, n, i), i;
    }
    function a(e, t, n, r) {
      return new (n || (n = Promise))(function (a, o) {
        function i(e) {
          try {
            c(r.next(e));
          } catch (e) {
            o(e);
          }
        }
        function s(e) {
          try {
            c(r.throw(e));
          } catch (e) {
            o(e);
          }
        }
        function c(e) {
          var t;
          e.done
            ? a(e.value)
            : ((t = e.value),
              t instanceof n
                ? t
                : new n(function (e) {
                    e(t);
                  })).then(i, s);
        }
        c((r = r.apply(e, t || [])).next());
      });
    }
  },
  function (e, t, n) {
    e.exports = n(102)();
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return a;
    });
    var r = n(57);
    function a(e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        Object(r.a)(e, t);
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return T;
    });
    var r = n(0),
      a = n.n(r),
      o = n(7),
      i = n(2),
      s = n(31),
      c = n(5),
      l = n(38),
      u = n.n(l);
    function h(e, t) {
      if (!e) {
        var n = new Error("loadable: " + t);
        throw ((n.framesToPop = 1), (n.name = "Invariant Violation"), n);
      }
    }
    function d(e) {
      console.warn("loadable: " + e);
    }
    var p = a.a.createContext();
    function f(e) {
      return e + "__LOADABLE_REQUIRED_CHUNKS__";
    }
    var m = function (e) {
      return e;
    };
    function g(e) {
      var t = e.resolve,
        n = void 0 === t ? m : t,
        r = e.render,
        l = e.onLoad;
      function u(e, t) {
        void 0 === t && (t = {});
        var u = (function (e) {
            return "function" == typeof e ? { requireAsync: e } : e;
          })(e),
          d = {};
        function f(e) {
          return t.cacheKey ? t.cacheKey(e) : u.resolve ? u.resolve(e) : null;
        }
        var m,
          g = (function (e) {
            function a(n) {
              var r;
              return (
                ((r = e.call(this, n) || this).state = {
                  result: null,
                  error: null,
                  loading: !0,
                  cacheKey: f(n),
                }),
                (r.promise = null),
                h(
                  !n.__chunkExtractor || u.requireSync,
                  "SSR requires `@loadable/babel-plugin`, please install it"
                ),
                n.__chunkExtractor
                  ? (!1 === t.ssr ||
                      (u.requireAsync(n).catch(function () {}),
                      r.loadSync(),
                      n.__chunkExtractor.addChunk(u.chunkName(n))),
                    Object(s.a)(r))
                  : (!1 !== t.ssr && u.isReady && u.isReady(n) && r.loadSync(),
                    r)
              );
            }
            Object(c.a)(a, e),
              (a.getDerivedStateFromProps = function (e, t) {
                var n = f(e);
                return Object(i.a)({}, t, {
                  cacheKey: n,
                  loading: t.loading || t.cacheKey !== n,
                });
              });
            var p = a.prototype;
            return (
              (p.componentDidMount = function () {
                (this.mounted = !0),
                  this.state.loading
                    ? this.loadAsync()
                    : this.state.error || this.triggerOnLoad();
              }),
              (p.componentDidUpdate = function (e, t) {
                t.cacheKey !== this.state.cacheKey &&
                  ((this.promise = null), this.loadAsync());
              }),
              (p.componentWillUnmount = function () {
                this.mounted = !1;
              }),
              (p.safeSetState = function (e, t) {
                this.mounted && this.setState(e, t);
              }),
              (p.triggerOnLoad = function () {
                var e = this;
                l &&
                  setTimeout(function () {
                    l(e.state.result, e.props);
                  });
              }),
              (p.loadSync = function () {
                if (this.state.loading)
                  try {
                    var e = u.requireSync(this.props),
                      t = n(e, { Loadable: y });
                    (this.state.result = t), (this.state.loading = !1);
                  } catch (e) {
                    this.state.error = e;
                  }
              }),
              (p.getCacheKey = function () {
                return f(this.props) || JSON.stringify(this.props);
              }),
              (p.getCache = function () {
                return d[this.getCacheKey()];
              }),
              (p.setCache = function (e) {
                d[this.getCacheKey()] = e;
              }),
              (p.loadAsync = function () {
                var e = this;
                if (!this.promise) {
                  var r = this.props,
                    a =
                      (r.__chunkExtractor,
                      r.forwardedRef,
                      Object(o.a)(r, ["__chunkExtractor", "forwardedRef"]));
                  this.promise = u
                    .requireAsync(a)
                    .then(function (r) {
                      var a = n(r, { Loadable: y });
                      t.suspense && e.setCache(a),
                        e.safeSetState(
                          { result: n(r, { Loadable: y }), loading: !1 },
                          function () {
                            return e.triggerOnLoad();
                          }
                        );
                    })
                    .catch(function (t) {
                      e.safeSetState({ error: t, loading: !1 });
                    });
                }
                return this.promise;
              }),
              (p.render = function () {
                var e = this.props,
                  n = e.forwardedRef,
                  a = e.fallback,
                  s =
                    (e.__chunkExtractor,
                    Object(o.a)(e, [
                      "forwardedRef",
                      "fallback",
                      "__chunkExtractor",
                    ])),
                  c = this.state,
                  l = c.error,
                  u = c.loading,
                  h = c.result;
                if (t.suspense) {
                  var d = this.getCache();
                  if (!d) throw this.loadAsync();
                  return r({
                    loading: !1,
                    fallback: null,
                    result: d,
                    options: t,
                    props: Object(i.a)({}, s, { ref: n }),
                  });
                }
                if (l) throw l;
                var p = a || t.fallback || null;
                return u
                  ? p
                  : r({
                      loading: u,
                      fallback: p,
                      result: h,
                      options: t,
                      props: Object(i.a)({}, s, { ref: n }),
                    });
              }),
              a
            );
          })(a.a.Component),
          v =
            ((m = g),
            function (e) {
              return a.a.createElement(p.Consumer, null, function (t) {
                return a.a.createElement(
                  m,
                  Object.assign({ __chunkExtractor: t }, e)
                );
              });
            }),
          y = a.a.forwardRef(function (e, t) {
            return a.a.createElement(v, Object.assign({ forwardedRef: t }, e));
          });
        return (
          (y.preload = function (e) {
            u.requireAsync(e);
          }),
          (y.load = function (e) {
            return u.requireAsync(e);
          }),
          y
        );
      }
      return {
        loadable: u,
        lazy: function (e, t) {
          return u(e, Object(i.a)({}, t, { suspense: !0 }));
        },
      };
    }
    var v = g({
        resolve: function (e, t) {
          var n = t.Loadable,
            r = e.__esModule ? e.default : e.default || e;
          return u()(n, r, { preload: !0 }), r;
        },
        render: function (e) {
          var t = e.result,
            n = e.props;
          return a.a.createElement(t, n);
        },
      }),
      y = v.loadable,
      b = v.lazy,
      w = g({
        onLoad: function (e, t) {
          e &&
            t.forwardedRef &&
            ("function" == typeof t.forwardedRef
              ? t.forwardedRef(e)
              : (t.forwardedRef.current = e));
        },
        render: function (e) {
          var t = e.result,
            n = e.loading,
            r = e.props;
          return !n && r.children ? r.children(t) : null;
        },
      }),
      O = w.loadable,
      _ = w.lazy,
      k = "undefined" != typeof window;
    function T(e, t) {
      void 0 === e && (e = function () {});
      var n = (void 0 === t ? {} : t).namespace,
        r = void 0 === n ? "" : n;
      if (!k)
        return (
          d("`loadableReady()` must be called in browser only"),
          e(),
          Promise.resolve()
        );
      var a = null;
      if (k) {
        var o = document.getElementById(f(r));
        o && (a = JSON.parse(o.textContent));
      }
      if (!a)
        return (
          d(
            "`loadableReady()` requires state, please use `getScriptTags` or `getScriptElements` server-side"
          ),
          e(),
          Promise.resolve()
        );
      var i = !1;
      return new Promise(function (t) {
        window.__LOADABLE_LOADED_CHUNKS__ =
          window.__LOADABLE_LOADED_CHUNKS__ || [];
        var n = window.__LOADABLE_LOADED_CHUNKS__,
          r = n.push.bind(n);
        function o() {
          a.every(function (e) {
            return n.some(function (t) {
              return t[0].indexOf(e) > -1;
            });
          }) &&
            (i || ((i = !0), t(), e()));
        }
        (n.push = function () {
          r.apply(void 0, arguments), o();
        }),
          o();
      });
    }
    var A = y;
    (A.lib = O), (b.lib = _);
    t.a = A;
  },
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (null == e) return {};
      var n,
        r,
        a = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++)
        (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
      return a;
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return O;
    }),
      n.d(t, "b", function () {
        return E;
      }),
      n.d(t, "d", function () {
        return S;
      }),
      n.d(t, "c", function () {
        return m;
      }),
      n.d(t, "f", function () {
        return g;
      }),
      n.d(t, "e", function () {
        return f;
      });
    var r = n(2);
    function a(e) {
      return "/" === e.charAt(0);
    }
    function o(e, t) {
      for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1)
        e[n] = e[r];
      e.pop();
    }
    var i = function (e, t) {
      void 0 === t && (t = "");
      var n,
        r = (e && e.split("/")) || [],
        i = (t && t.split("/")) || [],
        s = e && a(e),
        c = t && a(t),
        l = s || c;
      if (
        (e && a(e) ? (i = r) : r.length && (i.pop(), (i = i.concat(r))),
        !i.length)
      )
        return "/";
      if (i.length) {
        var u = i[i.length - 1];
        n = "." === u || ".." === u || "" === u;
      } else n = !1;
      for (var h = 0, d = i.length; d >= 0; d--) {
        var p = i[d];
        "." === p ? o(i, d) : ".." === p ? (o(i, d), h++) : h && (o(i, d), h--);
      }
      if (!l) for (; h--; h) i.unshift("..");
      !l || "" === i[0] || (i[0] && a(i[0])) || i.unshift("");
      var f = i.join("/");
      return n && "/" !== f.substr(-1) && (f += "/"), f;
    };
    function s(e) {
      return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
    }
    var c = function e(t, n) {
        if (t === n) return !0;
        if (null == t || null == n) return !1;
        if (Array.isArray(t))
          return (
            Array.isArray(n) &&
            t.length === n.length &&
            t.every(function (t, r) {
              return e(t, n[r]);
            })
          );
        if ("object" == typeof t || "object" == typeof n) {
          var r = s(t),
            a = s(n);
          return r !== t || a !== n
            ? e(r, a)
            : Object.keys(Object.assign({}, t, n)).every(function (r) {
                return e(t[r], n[r]);
              });
        }
        return !1;
      },
      l = n(12);
    function u(e) {
      return "/" === e.charAt(0) ? e : "/" + e;
    }
    function h(e) {
      return "/" === e.charAt(0) ? e.substr(1) : e;
    }
    function d(e, t) {
      return (function (e, t) {
        return (
          0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
          -1 !== "/?#".indexOf(e.charAt(t.length))
        );
      })(e, t)
        ? e.substr(t.length)
        : e;
    }
    function p(e) {
      return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
    }
    function f(e) {
      var t = e.pathname,
        n = e.search,
        r = e.hash,
        a = t || "/";
      return (
        n && "?" !== n && (a += "?" === n.charAt(0) ? n : "?" + n),
        r && "#" !== r && (a += "#" === r.charAt(0) ? r : "#" + r),
        a
      );
    }
    function m(e, t, n, a) {
      var o;
      "string" == typeof e
        ? ((o = (function (e) {
            var t = e || "/",
              n = "",
              r = "",
              a = t.indexOf("#");
            -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a)));
            var o = t.indexOf("?");
            return (
              -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o))),
              {
                pathname: t,
                search: "?" === n ? "" : n,
                hash: "#" === r ? "" : r,
              }
            );
          })(e)).state = t)
        : (void 0 === (o = Object(r.a)({}, e)).pathname && (o.pathname = ""),
          o.search
            ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search)
            : (o.search = ""),
          o.hash
            ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash)
            : (o.hash = ""),
          void 0 !== t && void 0 === o.state && (o.state = t));
      try {
        o.pathname = decodeURI(o.pathname);
      } catch (e) {
        throw e instanceof URIError
          ? new URIError(
              'Pathname "' +
                o.pathname +
                '" could not be decoded. This is likely caused by an invalid percent-encoding.'
            )
          : e;
      }
      return (
        n && (o.key = n),
        a
          ? o.pathname
            ? "/" !== o.pathname.charAt(0) &&
              (o.pathname = i(o.pathname, a.pathname))
            : (o.pathname = a.pathname)
          : o.pathname || (o.pathname = "/"),
        o
      );
    }
    function g(e, t) {
      return (
        e.pathname === t.pathname &&
        e.search === t.search &&
        e.hash === t.hash &&
        e.key === t.key &&
        c(e.state, t.state)
      );
    }
    function v() {
      var e = null;
      var t = [];
      return {
        setPrompt: function (t) {
          return (
            (e = t),
            function () {
              e === t && (e = null);
            }
          );
        },
        confirmTransitionTo: function (t, n, r, a) {
          if (null != e) {
            var o = "function" == typeof e ? e(t, n) : e;
            "string" == typeof o
              ? "function" == typeof r
                ? r(o, a)
                : a(!0)
              : a(!1 !== o);
          } else a(!0);
        },
        appendListener: function (e) {
          var n = !0;
          function r() {
            n && e.apply(void 0, arguments);
          }
          return (
            t.push(r),
            function () {
              (n = !1),
                (t = t.filter(function (e) {
                  return e !== r;
                }));
            }
          );
        },
        notifyListeners: function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          t.forEach(function (e) {
            return e.apply(void 0, n);
          });
        },
      };
    }
    var y = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    );
    function b(e, t) {
      t(window.confirm(e));
    }
    function w() {
      try {
        return window.history.state || {};
      } catch (e) {
        return {};
      }
    }
    function O(e) {
      void 0 === e && (e = {}), y || Object(l.a)(!1);
      var t,
        n = window.history,
        a =
          ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
            -1 === t.indexOf("Android 4.0")) ||
            -1 === t.indexOf("Mobile Safari") ||
            -1 !== t.indexOf("Chrome") ||
            -1 !== t.indexOf("Windows Phone")) &&
          window.history &&
          "pushState" in window.history,
        o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
        i = e,
        s = i.forceRefresh,
        c = void 0 !== s && s,
        h = i.getUserConfirmation,
        g = void 0 === h ? b : h,
        O = i.keyLength,
        _ = void 0 === O ? 6 : O,
        k = e.basename ? p(u(e.basename)) : "";
      function T(e) {
        var t = e || {},
          n = t.key,
          r = t.state,
          a = window.location,
          o = a.pathname + a.search + a.hash;
        return k && (o = d(o, k)), m(o, r, n);
      }
      function A() {
        return Math.random().toString(36).substr(2, _);
      }
      var E = v();
      function P(e) {
        Object(r.a)(F, e),
          (F.length = n.length),
          E.notifyListeners(F.location, F.action);
      }
      function S(e) {
        (function (e) {
          return (
            void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
          );
        })(e) || D(T(e.state));
      }
      function x() {
        D(T(w()));
      }
      var C = !1;
      function D(e) {
        if (C) (C = !1), P();
        else {
          E.confirmTransitionTo(e, "POP", g, function (t) {
            t
              ? P({ action: "POP", location: e })
              : (function (e) {
                  var t = F.location,
                    n = H.indexOf(t.key);
                  -1 === n && (n = 0);
                  var r = H.indexOf(e.key);
                  -1 === r && (r = 0);
                  var a = n - r;
                  a && ((C = !0), R(a));
                })(e);
          });
        }
      }
      var N = T(w()),
        H = [N.key];
      function M(e) {
        return k + f(e);
      }
      function R(e) {
        n.go(e);
      }
      var I = 0;
      function j(e) {
        1 === (I += e) && 1 === e
          ? (window.addEventListener("popstate", S),
            o && window.addEventListener("hashchange", x))
          : 0 === I &&
            (window.removeEventListener("popstate", S),
            o && window.removeEventListener("hashchange", x));
      }
      var L = !1;
      var F = {
        length: n.length,
        action: "POP",
        location: N,
        createHref: M,
        push: function (e, t) {
          var r = m(e, t, A(), F.location);
          E.confirmTransitionTo(r, "PUSH", g, function (e) {
            if (e) {
              var t = M(r),
                o = r.key,
                i = r.state;
              if (a)
                if ((n.pushState({ key: o, state: i }, null, t), c))
                  window.location.href = t;
                else {
                  var s = H.indexOf(F.location.key),
                    l = H.slice(0, s + 1);
                  l.push(r.key), (H = l), P({ action: "PUSH", location: r });
                }
              else window.location.href = t;
            }
          });
        },
        replace: function (e, t) {
          var r = m(e, t, A(), F.location);
          E.confirmTransitionTo(r, "REPLACE", g, function (e) {
            if (e) {
              var t = M(r),
                o = r.key,
                i = r.state;
              if (a)
                if ((n.replaceState({ key: o, state: i }, null, t), c))
                  window.location.replace(t);
                else {
                  var s = H.indexOf(F.location.key);
                  -1 !== s && (H[s] = r.key),
                    P({ action: "REPLACE", location: r });
                }
              else window.location.replace(t);
            }
          });
        },
        go: R,
        goBack: function () {
          R(-1);
        },
        goForward: function () {
          R(1);
        },
        block: function (e) {
          void 0 === e && (e = !1);
          var t = E.setPrompt(e);
          return (
            L || (j(1), (L = !0)),
            function () {
              return L && ((L = !1), j(-1)), t();
            }
          );
        },
        listen: function (e) {
          var t = E.appendListener(e);
          return (
            j(1),
            function () {
              j(-1), t();
            }
          );
        },
      };
      return F;
    }
    var _ = {
      hashbang: {
        encodePath: function (e) {
          return "!" === e.charAt(0) ? e : "!/" + h(e);
        },
        decodePath: function (e) {
          return "!" === e.charAt(0) ? e.substr(1) : e;
        },
      },
      noslash: { encodePath: h, decodePath: u },
      slash: { encodePath: u, decodePath: u },
    };
    function k(e) {
      var t = e.indexOf("#");
      return -1 === t ? e : e.slice(0, t);
    }
    function T() {
      var e = window.location.href,
        t = e.indexOf("#");
      return -1 === t ? "" : e.substring(t + 1);
    }
    function A(e) {
      window.location.replace(k(window.location.href) + "#" + e);
    }
    function E(e) {
      void 0 === e && (e = {}), y || Object(l.a)(!1);
      var t = window.history,
        n = (window.navigator.userAgent.indexOf("Firefox"), e),
        a = n.getUserConfirmation,
        o = void 0 === a ? b : a,
        i = n.hashType,
        s = void 0 === i ? "slash" : i,
        c = e.basename ? p(u(e.basename)) : "",
        h = _[s],
        g = h.encodePath,
        w = h.decodePath;
      function O() {
        var e = w(T());
        return c && (e = d(e, c)), m(e);
      }
      var E = v();
      function P(e) {
        Object(r.a)(F, e),
          (F.length = t.length),
          E.notifyListeners(F.location, F.action);
      }
      var S = !1,
        x = null;
      function C() {
        var e,
          t,
          n = T(),
          r = g(n);
        if (n !== r) A(r);
        else {
          var a = O(),
            i = F.location;
          if (
            !S &&
            ((t = a),
            (e = i).pathname === t.pathname &&
              e.search === t.search &&
              e.hash === t.hash)
          )
            return;
          if (x === f(a)) return;
          (x = null),
            (function (e) {
              if (S) (S = !1), P();
              else {
                E.confirmTransitionTo(e, "POP", o, function (t) {
                  t
                    ? P({ action: "POP", location: e })
                    : (function (e) {
                        var t = F.location,
                          n = M.lastIndexOf(f(t));
                        -1 === n && (n = 0);
                        var r = M.lastIndexOf(f(e));
                        -1 === r && (r = 0);
                        var a = n - r;
                        a && ((S = !0), R(a));
                      })(e);
                });
              }
            })(a);
        }
      }
      var D = T(),
        N = g(D);
      D !== N && A(N);
      var H = O(),
        M = [f(H)];
      function R(e) {
        t.go(e);
      }
      var I = 0;
      function j(e) {
        1 === (I += e) && 1 === e
          ? window.addEventListener("hashchange", C)
          : 0 === I && window.removeEventListener("hashchange", C);
      }
      var L = !1;
      var F = {
        length: t.length,
        action: "POP",
        location: H,
        createHref: function (e) {
          var t = document.querySelector("base"),
            n = "";
          return (
            t && t.getAttribute("href") && (n = k(window.location.href)),
            n + "#" + g(c + f(e))
          );
        },
        push: function (e, t) {
          var n = m(e, void 0, void 0, F.location);
          E.confirmTransitionTo(n, "PUSH", o, function (e) {
            if (e) {
              var t = f(n),
                r = g(c + t);
              if (T() !== r) {
                (x = t),
                  (function (e) {
                    window.location.hash = e;
                  })(r);
                var a = M.lastIndexOf(f(F.location)),
                  o = M.slice(0, a + 1);
                o.push(t), (M = o), P({ action: "PUSH", location: n });
              } else P();
            }
          });
        },
        replace: function (e, t) {
          var n = m(e, void 0, void 0, F.location);
          E.confirmTransitionTo(n, "REPLACE", o, function (e) {
            if (e) {
              var t = f(n),
                r = g(c + t);
              T() !== r && ((x = t), A(r));
              var a = M.indexOf(f(F.location));
              -1 !== a && (M[a] = t), P({ action: "REPLACE", location: n });
            }
          });
        },
        go: R,
        goBack: function () {
          R(-1);
        },
        goForward: function () {
          R(1);
        },
        block: function (e) {
          void 0 === e && (e = !1);
          var t = E.setPrompt(e);
          return (
            L || (j(1), (L = !0)),
            function () {
              return L && ((L = !1), j(-1)), t();
            }
          );
        },
        listen: function (e) {
          var t = E.appendListener(e);
          return (
            j(1),
            function () {
              j(-1), t();
            }
          );
        },
      };
      return F;
    }
    function P(e, t, n) {
      return Math.min(Math.max(e, t), n);
    }
    function S(e) {
      void 0 === e && (e = {});
      var t = e,
        n = t.getUserConfirmation,
        a = t.initialEntries,
        o = void 0 === a ? ["/"] : a,
        i = t.initialIndex,
        s = void 0 === i ? 0 : i,
        c = t.keyLength,
        l = void 0 === c ? 6 : c,
        u = v();
      function h(e) {
        Object(r.a)(w, e),
          (w.length = w.entries.length),
          u.notifyListeners(w.location, w.action);
      }
      function d() {
        return Math.random().toString(36).substr(2, l);
      }
      var p = P(s, 0, o.length - 1),
        g = o.map(function (e) {
          return m(e, void 0, "string" == typeof e ? d() : e.key || d());
        }),
        y = f;
      function b(e) {
        var t = P(w.index + e, 0, w.entries.length - 1),
          r = w.entries[t];
        u.confirmTransitionTo(r, "POP", n, function (e) {
          e ? h({ action: "POP", location: r, index: t }) : h();
        });
      }
      var w = {
        length: g.length,
        action: "POP",
        location: g[p],
        index: p,
        entries: g,
        createHref: y,
        push: function (e, t) {
          var r = m(e, t, d(), w.location);
          u.confirmTransitionTo(r, "PUSH", n, function (e) {
            if (e) {
              var t = w.index + 1,
                n = w.entries.slice(0);
              n.length > t ? n.splice(t, n.length - t, r) : n.push(r),
                h({ action: "PUSH", location: r, index: t, entries: n });
            }
          });
        },
        replace: function (e, t) {
          var r = m(e, t, d(), w.location);
          u.confirmTransitionTo(r, "REPLACE", n, function (e) {
            e &&
              ((w.entries[w.index] = r), h({ action: "REPLACE", location: r }));
          });
        },
        go: b,
        goBack: function () {
          b(-1);
        },
        goForward: function () {
          b(1);
        },
        canGo: function (e) {
          var t = w.index + e;
          return t >= 0 && t < w.entries.length;
        },
        block: function (e) {
          return void 0 === e && (e = !1), u.setPrompt(e);
        },
        listen: function (e) {
          return u.appendListener(e);
        },
      };
      return w;
    }
  },
  ,
  function (e, t, n) {
    "use strict";
    t.a = function (e, t) {
      if (!e) throw new Error("Invariant failed");
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    function r(e) {
      if (void 0 === e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return e;
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var r = n(6),
      a = n(63),
      o = n(34);
    function i(e, t) {
      return !!n.m[e.resolve(t)];
    }
    function s(e, t) {
      var r = e.resolve(t);
      return n(r);
    }
    const c = `/:lang(${Object.keys(o.a)
        .map((e) => e)
        .join("|")})?`,
      l = [
        {
          path: "/innovations",
          component: Object(r.a)({
            chunkName: () => "views-Innovations",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () => n.e(10).then(n.bind(null, 76)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 76,
          }),
          exact: !0,
        },
        {
          path: "/handbook",
          component: Object(r.a)({
            chunkName: () => "views-Handbook",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () =>
              Promise.all([n.e(1), n.e(0), n.e(9)]).then(n.bind(null, 77)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 77,
          }),
          exact: !0,
        },
        {
          path: "/solution",
          component: Object(r.a)({
            chunkName: () => "views-Solution",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () => n.e(15).then(n.bind(null, 80)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 80,
          }),
          exact: !0,
        },
        {
          path: "/news",
          component: Object(r.a)({
            chunkName: () => "views-News",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () =>
              Promise.all([n.e(0), n.e(13)]).then(n.bind(null, 81)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 81,
          }),
          exact: !0,
        },
        {
          path: "/ecosystem",
          component: Object(r.a)({
            chunkName: () => "views-Ecosystem",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () =>
              Promise.all([n.e(0), n.e(7)]).then(n.bind(null, 91)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 91,
          }),
          exact: !0,
        },
        {
          path: "/act",
          component: Object(r.a)({
            chunkName: () => "views-Act",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () =>
              Promise.all([n.e(0), n.e(4)]).then(n.bind(null, 88)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 88,
          }),
          exact: !0,
        },
        {
          path: "/team6164211797382444",
          component: Object(r.a)({
            chunkName: () => "views-Team",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () =>
              Promise.all([n.e(0), n.e(16)]).then(n.bind(null, 82)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 82,
          }),
          exact: !0,
        },
        {
          path: "/terms",
          component: Object(r.a)({
            chunkName: () => "views-Terms",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () => n.e(17).then(n.bind(null, 83)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 83,
          }),
          exact: !0,
        },
        {
          path: "/policy",
          component: Object(r.a)({
            chunkName: () => "views-Policy",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () => n.e(14).then(n.bind(null, 84)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 84,
          }),
          exact: !0,
        },
        {
          path: "/whitepaper",
          component: Object(r.a)({
            chunkName: () => "views-Whitepaper",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () =>
              Promise.all([n.e(1), n.e(0), n.e(18)]).then(n.bind(null, 85)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 85,
          }),
          exact: !0,
        },
        {
          path: "/faucet",
          component: Object(r.a)({
            chunkName: () => "views-Faucet",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () =>
              Promise.all([n.e(1), n.e(0), n.e(8)]).then(n.bind(null, 89)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 89,
          }),
          exact: !0,
        },
        {
          path: "/activity",
          component: Object(r.a)({
            chunkName: () => "views-Activity",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () =>
              Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 86)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 86,
          }),
          exact: !0,
        },
        {
          path: "/cross-chain-bridge",
          component: Object(r.a)({
            chunkName: () => "views-CrossChainBridge",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () => n.e(6).then(n.bind(null, 87)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 87,
          }),
          exact: !0,
        },
        {
          path: "/",
          component: Object(r.a)({
            chunkName: () => "views-NewHome",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () => n.e(11).then(n.bind(null, 90)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 90,
          }),
          exact: !0,
        },
        {
          path: "/new-home-page",
          component: Object(r.a)({
            chunkName: () => "views-NewHomePage",
            isReady(e) {
              return i(this, e);
            },
            requireAsync: () => n.e(12).then(n.bind(null, 92)),
            requireSync(e) {
              return s(this, e);
            },
            resolve: () => 92,
          }),
          exact: !0,
        },
        { component: a.a },
      ],
      u = l.map((e) =>
        Object.assign(Object.assign({}, e), {
          path: e.path ? c + e.path : void 0,
        })
      );
    t.b = u;
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return o;
    });
    var r = n(0),
      a = n.n(r);
    n(111);
    class o extends a.a.Component {
      constructor(e) {
        super(e), (this.state = { expand: !1 });
      }
      render() {
        const {
          subnav: e,
          title: t,
          width: n,
          className: r,
          style: o,
        } = this.props;
        return a.a.createElement(
          "div",
          { className: r ? "drop-down " + r : "drop-down", style: o },
          a.a.createElement("span", null, t),
          a.a.createElement(
            "div",
            { className: "drop-down__container ", style: { width: n } },
            null == e
              ? void 0
              : e.map((e, t) =>
                  a.a.createElement(
                    "div",
                    { className: "drop-down__item", key: t },
                    e
                  )
                )
          )
        );
      }
    }
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return r;
    });
    n(99), n(100), n(101);
    const r = {
      zh: {
        name: "中文",
        message: {
          nav: {
            mining: "TOP挖矿平台",
            tech: "技术",
            innovations: "技术创新",
            auditreport: "审计报告",
            whitepaper: "白皮书",
            developer: "开发者",
            doc: "文档及SDK",
            github: "GitHub",
            hackathon: "黑客松",
            ecosystem: "生态",
            explorer: "区块浏览器",
            wallet: "钱包",
            dapp: "DApps",
            partner: "合作伙伴",
            staking: "Staking",
            handbook: "Staking手册",
            staking_start: "开始Staking",
            about: "关于",
            team: "团队",
            news: "新闻",
            faq: "FAQ",
            faucet: "水龙头",
            swap: "Token映射",
          },
          footer: {
            contact: "联系我们",
            service: "服务条款",
            privacy: "隐私协议",
            placeholder: "请输入您的邮箱",
            submit: "订阅",
          },
          home: {
            hero: {
              desc: "基于第4代区块链技术的高性能原创公链平台，比以太坊2.0提前2年实现",
              play: "播放视频",
            },
            innovation: {
              title: "技术创新",
              li1: "全状态分片",
              li1_text1: "网络分片(Network Sharding)",
              li1_text2: "状态分片(State Sharding)",
              li1_text3: "计算分片(Compute Sharding)",
              li2: "极速交易",
              li2_text1: "100,000+ TPS",
              li2_text2: "支持水平扩容",
              li2_text3: "共识速度快",
              li3: "让业务轻松上链",
              li3_text1: "可插入式服务链",
              li3_text2: "应用层智能合约",
              li3_text3: "友好型经济模型",
              more: "了解更多",
            },
            act: {
              DRAFT: "草稿",
              TOSTART: "待开始",
              UNDERWAY: "进行中",
              OVER: "已结束",
            },
            service: {
              title: "设施与服务",
              text1: "去中心化通信",
              text2: "去中心化存储",
              text3: "去中心化ID",
              desc1: "TOP提供视频、网络电话、CDN、信息、直播等相关通信服务",
              desc2: "TOP通过加密哈希识别和分发存储在网络中的数据",
              desc3: "无需中心化机构即可验证我们的数字身份",
            },
            map: {
              title: "TOP 主网",
              desc: "为真实海量业务上链而打造的高性能公链平台",
              node: "节点分布在全球{0}个国家",
              online: "网络节点",
              learn: "了解更多",
            },
            roadmap: { title: "路线图" },
          },
          mining: {
            slogen: "TOP挖矿平台{tag}引领多元挖矿时代",
            income: "年化收益",
            mine: "HiWallet聚合挖矿",
            rights: "TOP通证{tag}生态权益",
            head: "头矿ROI",
            chain: "TOP公链挖矿",
            cheap: "整机优惠",
            discount: "85",
            discount1: "折",
            miner: "TOP IPFS矿机",
            miner1: "TopIPFS矿机",
            sec1: {
              title1: "全球首条",
              desc1: "全状态分片区块链网络{tag}支持layer-2业务链垂直拓展",
              title2: "门槛低",
              desc2: "少量TOP就能参与Staking{tag}对技术要求低",
              title3: "无风险高产出",
              desc3: "TOP一直在你钱包里不会流失{tag}头矿ROI 491.52%",
            },
            more: "了解更多",
            sec2: {
              title1: "全网挖矿效率No.1",
              desc1: "数十位算法专家{tag}持续优化挖矿效率",
              title2: "5A级硅谷机房",
              desc2: "99.99%级别SLA{tag}全年故障率不超过5.26分钟",
              title3: "低成本，高产出",
              desc3: "科学选配，超强矿机",
            },
            sec3: {
              title1: "去中心化挖矿",
              desc1:
                "采用智能合约的形式{tag}进行链上聚合DeFi挖矿{tag}杜绝人为作恶",
              title2: "精选策略捕获利润",
              desc2: "热门DeFi项目选品{tag}为不同用户提供投资进阶产品",
              title3: "用户激励",
              desc3: "邀请好友参与DeFi聚合挖矿{tag}双方额外捕获加息",
            },
          },
          developer: {
            faucet: {
              title: "TOP水龙头",
              desc: "快速，安全地领取TOP测试币",
              before: "授权后领取",
              after: "授权成功",
              placeholder: "输入账户地址获取TOP测试币",
              request: "申请",
              amount: "转账金额",
              hash: "交易hash",
              fail: "转账失败，请重新申请",
              success: "申请testnet TOP成功",
              copySuccess: "复制成功",
              copyFail: "复制失败",
              12001: "TOP地址有误",
              12002: "用户Id有误",
              12003: "用户idToken有误",
              12004: "用户规定时间内重复领取",
              12005: "用户未通过校验",
              12006: "hash有误",
              12007: "未找到对应交易",
            },
          },
          ecosystem: {
            top_text1: "DApp开发者",
            top_text2: "矿工和投票者",
            top_text3: "Service开发者",
            minning: {
              title: "TOP挖矿",
              desc: "做TOP节点，为节点投票，参与TOP链上生态管理。",
              learn: "了解更多",
              name1: "节点",
              text1: "提供算力或宽带，通过验证交易及生产区块赚取奖励",
              name2: "投票者",
              text2: "锁仓为节点投票，即可赚取奖励",
            },
            wallet: {
              title: "钱包",
              hiwallet: "HiWallet",
              hiwallet_desc:
                "专为小白设计——TOP生态指定钱包，简单操作易上手，安全管理多币种",
              hiwallet_desc_full:
                "专为小白设计——TOP生态指定钱包，简单操作易上手，安全管理多币种",
              hiwallet_download: "下载",
              cobo: "Cobo Wallet",
              cobo_desc: "生态合作钱包",
            },
            dapp: {
              title: "DApps",
              learn: "了解更多",
              app: "App",
              bitvpn: " ",
              bitvpn_desc: "TOP AI Network生态第一款去中心化App！",
              text1: "Live Streaming",
              text2: "Video",
              text3: "Gaming",
              text4: "IoT Data Sharing",
              text5: "Storage",
              text6: "VoIP",
              text7: "Asset Managemeng",
              text8: "CDN",
              text9: "Message",
              game: "游戏",
              game1: "War of Three Kingdoms",
              game1_desc: " ",
              game2: "The King's Business",
              game2_desc: " ",
              game3: "League of Crypto",
              game3_desc: " ",
              game4: "Raiders",
              game4_desc: " ",
            },
            partner: {
              title: "合作伙伴",
              exchange: "Exchanges",
              minning: "矿池",
              strategic: "战略合作伙伴",
            },
          },
          faq: {
            pagetitle: "FAQ",
            titles: ["I. 项目介绍", "II．技术细节", "III. 技术开发问题"],
            articles: [
              {
                title: "I. 项目介绍",
                questionAsk: [
                  {
                    question: "Q1：什么是TOP AI Network？",
                    asks: [
                      "TOP AI Network是由基于第4代区块链技术的原创公链、去中心化应用以及各种配套设施构成的区块链生态系统。",
                      "其中，TOP链是全球首条全状态分片公链，也是真正为海量业务上链而打造的高性能公链平台。TOP链独特的主链、业务链、可信链下账本三层架构能够支持任何量级的业务上链。TOP链基于DAG数据结构，创新地应用了双层点阵、双层分片、并行PBFT等技术，单链处理能力超过30万TPS。TOP链极高的TPS（交易吞吐量）和安全性，再加上链上交易确认速度快，交易费用为零等特点，特别适合通信、游戏、社交、大数据、人工智能、IoT等海量高频业务上链。",
                      "TOP AI Network的远景是建立一个专为DApp打造的公共区块链基础设施。TOP团队上百名顶级开发人员正在为这一目标不懈努力。截至目前，TOP团队已开发了去中心化钱包HiWallet，并正在开发包括区块链游戏等多款大型DApp。",
                    ],
                  },
                  {
                    question: "Q2：为什么团队要建立一个公链平台？",
                    asks: [
                      "虽然我们最初的愿景并不是建立一个公链平台，但在开发的过程中很快意识到我们必须这样做。",
                      "因为曾在2017年TOP项目启动时，我们准备将4000万用户迁移至TOP AI Network，但这意味着TOP AI Network每秒需要处理超过十万笔交易之多。我们曾尝试寻找一个现有的公链平台作为TOP AI Network的账本。但事实上，现有的区块链平台并不能达到如此高的TPS。因此我们选择构建自己的账本—— 旨在打造一个可以处理任何规模真实业务的公链平台。",
                    ],
                  },
                  {
                    question: "Q3：TOP是否有白皮书？",
                    asks: [
                      "TOP白皮书已在官网发布，点击官网上的“白皮书”即可访问我们的白皮书。",
                    ],
                  },
                  {
                    question: "Q4：目前为止，TOP的投资机构都有哪些？",
                    asks: [
                      "我们获得了1100万美元的早期投资，都来自著名机构及投资者，其中包括分布式资本，丹华资本（DHVC），NGC，LD Capital等。",
                    ],
                  },
                ],
              },
              {
                title: "II．技术细节",
                questionAsk: [
                  {
                    question: "Q5. 建立TOP网络生态系统的计划是什么？",
                    asks: [
                      "目前，现有区块链平台的数量远远已超过了DApp开发人员的数量。我们可以将已有的APP以及庞大用户群体迁移至TOP AI Network。因此，未来这些用户将被引入TOP AI Network生态中。早期，我们基本不会依赖于第三方开发人员。因为我们有足够的用户和APP来快速建设我们的生态系统。我们甚至已经建立了两个内部游戏开发团队，他们不仅在开发目前在DApp市场上占主导地位的小游戏，也在打造更加专业的区块链游戏。一旦完成所有相关工作后，我们将会告知第三方开发人员。",
                    ],
                  },
                  {
                    question: "Q6. 如何将海量用户迁移到TOP链上？",
                    asks: [
                      "团队在开发通信APP（Dingtone，CoverMe和Proxy）之前就已经设计了分布式网络。这些应用共享的基础网络层将被TOP AI Network取代。这意味着Dingtone，CoverMe和Proxy将透明地移至TOP AI Network。实际上，用户甚至根本不会察觉到迁移的过程。",
                    ],
                  },
                  {
                    question:
                      "Q7：TOP有多少开发人员？为什么三层分布式账本比单层好？",
                    asks: [
                      "TOP现有100多名开发人员。单层账本有其局限性，一个主链无法处理所有事情。因此，TOP采用的是三层账本，并将业务结算和业务逻辑分开。此外，我们还实现了内置于第2层的状态通道功能。",
                    ],
                  },
                  {
                    question: "Q8：将采取何种措施来保护TOP链的安全性？",
                    asks: [
                      "TOP采用的是三层架构。在分片中验证交易后，将由高级网络对其进行审核。因此，即使有人控制了分片，也无法绕过高级网络的审核。",
                    ],
                  },
                  {
                    question: "Q9：TOP的创新分片技术是指什么？",
                    asks: [
                      "TOP 链是世界上首条由分片驱动的全状态分片公链，支持真实水平扩容。主网上线之初，单个分片可以达到500 TPS。就分片而言，TOP 链可通过三种类型的综合分片进行扩展：网络分片，状态分片和计算分片。",
                      "共识网络分为三层：提供客户端访问的边缘网络，审核交易并同步状态的路由网络以及验证交易并发送给单个分片的共识网络。",
                      "状态分片通过整个数据结构管理存储，计算分片在集群和分片之间对计算进行分区，以并行执行交易验证。",
                      "得益于多层分片技术，TOP链能够实现水平扩容，最多可达到1024个分片。 此外，我们可以通过简单地增加分片的数量来线性增加可扩展性。",
                    ],
                  },
                ],
              },
              {
                title: "III. 技术开发问题",
                questionAsk: [
                  {
                    question: "Q10：如尝试自行开发Dapp，应该怎样利用TOP链？",
                    asks: [
                      "TOP链是世界上首条为通信，游戏，社交，大数据，AI和IoT等高频业务而打造的全状态分片公链。任何APP都可以通过我们的APIs和SDKs进入平台。如果想要自行开发DApp，TOP将是您的理想选择。使用TOP链，将不再需要构建自己的栈（stack），部署服务器和维护网络。使用相对较少的代码，就可以构建功能强大且可扩容的DApp。",
                    ],
                  },
                  {
                    question:
                      "Q11：如果开发者想使用TOP AI Network开发DApp，如何在TOP的平台上开发该DApp，可以为开发者提供什么好处？",
                    asks: [
                      "由开发者建立用户界面，TOP处理技术栈（stack）。一般而言，开发者可能需要一年时间来构建DApp，但如果使用TOP链则只需要几个星期，而且无需托管自己的网络，从而节省大量资金。",
                    ],
                  },
                  {
                    question: "Q12：TOP智能合约是什么？",
                    asks: [
                      "TOP提供两种类型的智能合约：平台智能合约和应用层面的智能合约。平台智能合约专为TOP生态系统中的代币经济和链上治理而设计。目前DApp开发仅支持Lua，并已在TOP主办的布拉格黑客松上得到了验证。未来我们将会支持更多种语言的智能合约。",
                    ],
                  },
                ],
              },
            ],
          },
          team: {
            title: "TOP Team",
            prev: "Forward",
            next: "Next",
            founder: {
              title: "TOP联合创始人",
              desc: "TOP的核心团队分别来自知名企业WebEx，Fortinet及Cloud.com，在通信，加密学，云计算和网络安全方面具有丰富的行业经验。",
              humans: [
                {
                  name: "Steve Wei",
                  position: "CEO",
                  desc: "清华大学毕业<br/>4次连续成功创业经历<br/>WebEx创始员工，后被思科收购<br/>创办盛维，后被华为收购<br/>创办Dingtone，累积超1亿用户",
                },
                {
                  name: "Noah Wang",
                  position: "CMO",
                  desc: "耶鲁大学MBA<br/>CFA、CPA<br/>在Starr, 工商银行及普华永道任管理职位<br/>CCTV特约评论员，硅谷华源协会理事<br/>国际门萨协会会员",
                },
                {
                  name: "Taylor Wei",
                  position: "CTO",
                  desc: "密码学专家<br/>WebEx创始员工<br/>Dingtone联合创始人<br/>资深网络架构师",
                },
                {
                  name: "Peter Wei",
                  position: "VP",
                  desc: "WebEx创始员工<br/>Fortinet架构师<br/>TrendMicro技术架构师<br/>拥有33项网络安全专利",
                },
                {
                  name: "Kelven Yang",
                  position: "首席架构师",
                  desc: "WebEx首席架构师<br/>Cloud.com创始员工<br/>Dingtone联合创始人",
                },
              ],
            },
            advisor: {
              title: "TOP顾问",
              humans: [
                { name: "Eric Yuan", position: "Zoom CEO兼创始人" },
                { name: "Mark Greene", position: "FICO前CEO" },
                { name: "Roger Lim", position: "NGC合伙人" },
                { name: "Kevin Hsu", position: "BlockVC创始人" },
              ],
              join_title: "加入我们",
              join_desc: "如有兴趣加入我们团队，请发送您的简历至 ",
            },
            investor_title: "投资机构",
          },
          news: {
            event: { title: "TOP大事件", more: "更多详情" },
            video: { title: "精彩回顾" },
            article: { title: "TOP资讯" },
            media: {
              title: "聚焦TOP",
              kit: "媒体资料",
              desc: "如果您正在撰写有关TOP的文章，需要我们的媒体素材，请下载下方的媒体素材包。 其他相关问题，请联系 {0}",
              download: "Download",
            },
          },
          innovations: {
            title: "TOP链",
            desc: "全球首条全状态分片公链，特别适合通信、游戏、社交网络、大数据、人工智能、物联网等海量高频业务",
            whitepaper: "阅读白皮书",
            technical: "技术亮点",
            section1: {
              title: "关于我们",
              content: [
                {
                  title: "高性能",
                  desc: "创新地应用了双层点阵、双层分片、并行PBFT等技术，单链处理能力超过10万TPS",
                },
                { title: "无许可", desc: "完全无许可，不限制节点数量" },
                {
                  title: "高度安全",
                  desc: "共识机制综合了多种验证和审计的hpBFT、PoS*以及不可预测的随机性（PoS*是一种泛权益证明）",
                },
                {
                  title: "对用户和开发者友好",
                  desc: "一个对用户和开发者友好的经济模型，为开发者提供容易实现的，转钥式解决方案",
                },
              ],
            },
            section2: {
              title: "技术特性",
              desc: "TOP链独特的主链、业务链、可信链下账本三层架构能够支持任何量级的业务上链。",
              content: [
                {
                  text: ["综合多层", "扩容技术"],
                  desc: [
                    "Layer 0: P2P覆盖网络",
                    "Layer 1: 状态分片，计算分片，网络分片",
                    "Layer 2: 状态通道，多条服务链",
                  ],
                },
                {
                  text: ["综合多层", "分片技术"],
                  desc: ["双层：状态分片", "三层：计算分片", "三层：网络分片"],
                },
                { text: ["双层点阵状态"], desc: ["单元点阵", "区块点阵"] },
                {
                  text: ["完全并行的", "共识机制"],
                  desc: [
                    "多核CPU: 并行计算",
                    "多角色节点：并行工作",
                    "多组分片：并行共识(hpBFT)",
                    "多个分片的链：并行交易",
                  ],
                },
                {
                  text: ["三层网络"],
                  desc: ["边缘网络", "路由网络", "核心网络"],
                },
              ],
            },
          },
          activity: { back: "返回", actTime: "活动时间" },
        },
        api_language: "ZH",
        date_language: "zh-cn",
      },
      en: {
        name: "English",
        message: {
          nav: {
            mining: "TOP Mining Platform",
            tech: "Technology",
            innovations: "Innovations",
            auditreport: "Audit Report",
            whitepaper: "Whitepaper",
            developer: "Developer",
            doc: "Document & SDK",
            github: "GitHub",
            hackathon: "Hackathon",
            ecosystem: "Ecosystem",
            explorer: "Explorer",
            wallet: "Wallet",
            dapp: "DApps",
            partner: "Partners",
            staking: "Staking",
            handbook: "Handbook",
            staking_start: "Get Started",
            about: "About",
            team: "Team",
            news: "News",
            faq: "FAQ",
            faucet: "Faucet",
            swap: "TOP Swap",
          },
          footer: {
            contact: "Contact Us",
            service: "Terms of Service",
            privacy: "Privacy Policy",
            placeholder: "Please input your email",
            submit: "STAY TUNED",
          },
          home: {
            hero: {
              desc: "A high-performance public blockchain platform that is two years ahead of Ethereum 2.0.",
              play: "Play Video",
            },
            innovation: {
              title: "Innovations",
              li1: "Full-State Sharding",
              li1_text1: "Network Sharding",
              li1_text2: "State Sharding",
              li1_text3: "Compute Sharding",
              li2: "Lightning Speed",
              li2_text1: "100,000+ TPS",
              li2_text2: "Horizontal Scale-out",
              li2_text3: "Designed For Real World Apps",
              li3: "Designed for Real World Apps",
              li3_text1: "Pluggable Service Chains",
              li3_text2: "Application-level Smart Contracts",
              li3_text3: "Friendly Token Economic Model",
              more: "Learn More",
            },
            act: {
              DRAFT: "DRAFT",
              TOSTART: "Start on",
              UNDERWAY: "UNDERWAY",
              OVER: "Finished",
            },
            service: {
              title: "Additional Infrastructure and Services",
              text1: "Decentralized Communication Services",
              text2: "Decentralized Storage",
              text3: "Decentralized Identity",
              desc1: "Video, VoIP, CDN, Live streaming, etc.",
              desc2:
                "Use cryptographic hashes to identify and distribute data stored on the network",
              desc3:
                "Peer-to-peer exchange of information about people, organizations or things",
            },
            map: {
              title: "TOP Mainnet",
              desc: "A high-performance public blockchain platform for real-world Apps!",
              node: "Nodes in {0} Countries",
              online: "Online Nodes",
              learn: "Learn More",
            },
            roadmap: { title: "Roadmap" },
          },
          mining: {
            slogen:
              "TOP Mining Platform{tag}Leading the Diversified Mining Era",
            income: "Annualized Yield",
            mine: "HiWallet DeFi Mining",
            rights: "TOP Token{tag}Privilege",
            head: "Mining ROI",
            chain: "TOP Staking",
            cheap: "Exclusive Discount",
            discount: "15%",
            discount1: "off",
            miner: "TopIPFS Mining Machine",
            miner1: "TopIPFS Mining Machine",
            sec1: {
              title1: "The World's First",
              desc1:
                "Full-state sharding blockchain {tag}supports vertical expansion{tag}of layer-2",
              title2: "Low Entry",
              desc2:
                "Users can participate Staking with{tag}a few TOP tokenand without high{tag}technical requirements",
              title3: "No Risks, High Returns",
              desc3:
                "TOP token will always be in{tag}your wallet Mining ROI is about 491.52%",
            },
            more: "Learn More",
            sec2: {
              title1: "No.1 Mining Efficiency",
              desc1:
                "Dozens of algorithm experts {tag}persistently optimize the mining efficiency",
              title2: "IDC-5 Room in Silicon Valley",
              desc2:
                "SLA of 99.99% uptime{tag}The annual failure rate does not exceed 5.26 minutes",
              title3: "Low Cost, High Reward",
              desc3: "Scientifically assembled into super mining machines",
            },
            sec3: {
              title1: "Decentralized Mining",
              desc1:
                "Using smart contract to aggregate on-chain DeFi mining{tag}Eliminate tech misconduct",
              title2: "Selected Policies",
              desc2:
                "Popular DeFi projects are selected{tag}for providing investment options{tag}to different users",
              title3: "User Incentives",
              desc3: "Extra returns by inviting friends{tag} to DeFi mining",
            },
          },
          developer: {
            faucet: {
              title: "FAUCET OF TOP",
              desc: "Quickly, safely receive testnet tokens",
              before: "Get TOP after Verification",
              after: "Verified",
              placeholder: "Enter your testnet address",
              request: "Get tokens",
              amount: "Transfer Amount",
              hash: "HASH",
              fail: "Transaction failed, please request again",
              success: "Get TOP successfully",
              copySuccess: "Copy Succeeded",
              copyFail: "Copy Failed",
              12001: "Wrong TOP address",
              12002: "Wrong user ID",
              12003: "Wrong User idToken",
              12004: "Multiple attempts in a certain time",
              12005: "Failed to pass the ID verification",
              12006: "Wrong hash",
              12007: "No records of valid transaction",
            },
          },
          ecosystem: {
            top_text1: "DApp Developers",
            top_text2: "Node Operator & Voters",
            top_text3: "Service Developers",
            minning: {
              title: "TOP Mining",
              desc: "Run nodes on TOP, vote for nodes, and participate in on-chain governance in the TOP Ecosystem.",
              learn: "Learn More",
              name1: "Miners",
              text1:
                "Provide compute power or bandwidth to earn rewards by validating transactions and producing blocks",
              name2: "Voters",
              text2:
                "Lock-up tokens to vote for nodes and earn a portion of the rewards",
            },
            wallet: {
              title: "Wallet",
              hiwallet: "HiWallet",
              hiwallet_desc: "An easy-to-use wallet for managing TOP",
              hiwallet_desc_full:
                "An extremely easy-to-use wallet for managing multiple cryptocurrencies securely",
              hiwallet_download: "Download",
              cobo: "Cobo Wallet",
              cobo_desc: "Ecosystem wallet",
            },
            dapp: {
              title: "DApps",
              learn: "Learn More",
              app: "Apps",
              bitvpn: "BitVPN",
              bitvpn_desc:
                "The first decentralized VPN service on TOP AI Network",
              text1: "Live Streaming",
              text2: "Video",
              text3: "Gaming",
              text4: "IoT Data Sharing",
              text5: "Storage",
              text6: "VoIP",
              text7: "Asset Managemeng",
              text8: "CDN",
              text9: "Message",
              game: "Games",
              game1: "War of Three Kingdoms",
              game1_desc: "New story about the old kingdoms of China",
              game2: "The King's Business",
              game2_desc:
                "Use your power to be a great king! Enjoy the new life!",
              game3: "League of Crypto",
              game3_desc: "Become a success in the crypto world",
              game4: "Raiders",
              game4_desc: "Where small deposits can bring great bonuses",
            },
            partner: {
              title: "Partners",
              exchange: "Exchanges",
              minning: "Mining Pools",
              strategic: "Strategic Partners",
            },
          },
          faq: {
            pagetitle: "FAQ",
            titles: [
              "I. Project Overview",
              "II. Technical Details",
              "III. Tokens How to Earn Them",
              "IV. For Developers",
            ],
            articles: [
              {
                title: "I. Project Overview",
                questionAsk: [
                  {
                    question: "Q1: What is TOP?",
                    asks: [
                      "TOP AI Network is a decentralized blockchain ecosystem composed of a 4th-generation public blockchain, decentralized Apps (DApps), and decentralized communications services.",
                      "TOP Chain, the public blockchain infrastructure underpinning the entire decentralized ecosystem, is the world’s first full-state sharding public chain and a high-performance platform for large-scale DApps.",
                      "TOP Chain is powered by an innovative three-layered ledger architecture consisting of the main chain, service chains, and off-chain ledgers, and is capable of handling real-world business of any size and volume. TOP Chain applies technological innovations such as a two-layer lattice DAG, two-layer sharding, and a parallel pBFT-PoS consensus mechanism. The result is a public chain capable of processing over 100,000 transactions per second. Equipped with high TPS, airtight security, and extremely fast confirmation times, TOP Chain is a reliable platform for services demanding high-frequency transactions such as communications, gaming, social media, big data, artificial intelligence, IoT, and more.",
                      "The long-term mission of TOP AI Network is to build a public blockchain infrastructure for all DApps. Our world-class team of over 100 developers is striving for this goal. We have already developed HiWallet, a cryptocurrency wallet, and are currently developing a series of blockchain games and more large-scale DApps on top of the ecosystem.",
                    ],
                  },
                  {
                    question:
                      "Q2: Why did the team want to build a public blockchain platform?",
                    asks: [
                      "We didn't intend to build a public blockchain platform, but we soon realized we had to.",
                      "When we started the project in 2017, we had 40 million users to move onto TOP AI Network, which meant TOP AI Network needed to process over one hundred thousand transactions per second upon its launch. We tried to find an existing public blockchain platform to serve as a ledger for TOP AI Network, but it turned out that no blockchain platform could reach such high TPS. In the end, we had no choice but to build our own ledger – a general-purpose public blockchain platform that can handle real-world business of any size or volume.",
                    ],
                  },
                  {
                    question: "Q3: What is the current status of TOP?",
                    asks: [
                      "The Whitepaper for TOP AI Network is available! Click “Whitepaper” on our website to get access to our whitepaper.",
                    ],
                  },
                  {
                    question: "Q4: Who has invested in your project so far?",
                    asks: [
                      "We closed $11 million in early investments from prestigious institutional investors, including Fenbushi Capital, Danhua Capital (DHVC), NGC, LD Capital and more.",
                    ],
                  },
                ],
              },
              {
                title: "II. Technical Details",
                questionAsk: [
                  {
                    question:
                      "Q5. What’s the plan to build up the TOP AI Network ecosystem?",
                    asks: [
                      "The number of blockchain platforms is now far more than the number of DApp developers. We have a very large user base, and the apps we have already built can be moved to TOP AI Network. So, these users will be brought to TOP AI Network.",
                      "Essentially, we will not count on third-party developers in the early stages. We have enough users and apps to jumpstart the ecosystem ourselves. We even have established two in-house game teams. They are building serious blockchain games beyond the complexity of simple gambling games currently topping the DApp market. Once we get all of these things done, we will reach out and begin marketing to third-party developers.",
                    ],
                  },
                  {
                    question:
                      "Q6. What’s the plan to build up the TOP AI Network ecosystem?",
                    asks: [
                      "Several years ago, we designed a distributed network layer before we developed our communication apps—Dingtone, CoverMe and SkyVPN. These apps share the same underlying network layer, which will be replaced by TOP AI Network. That means Dingtone, CoverMe and SkyVPN will be transparently moved to TOP AI Network. In fact, the users won't even notice the migration process. ",
                    ],
                  },
                  {
                    question:
                      "Q7. How many developers are involved in TOP? Why is three layers of distributed ledgers better than a single layer?",
                    asks: [
                      "BitVPN is only a demo app that is being built on TOP AI Network. TOP AI Network is much more than a VPN app. We are building a public communication network infrastructure that can provide any kind of communication services, such as messaging, calling, CDN, streaming, storage, IoT data sharing and more. VPN is only one of the communication services that TOP provides.",
                    ],
                  },
                  {
                    question:
                      "Q8: What kind of measures will be implemented to secure the chain with sharding and its security liabilities?",
                    asks: [
                      "Several years ago, we designed a distributed network layer before we developed our communication apps - Dingtone, CoverMe and SkyVPN. These apps share the same underlying network layer, which will be replaced by TOP AI Network. That means Dingtone, CoverMe and SkyVPN will be transparently moved to TOP AI Network. In fact, the users won’t even notice the migration process. Over 50 million users will be immediately available on TOP AI Network once it’s launched.",
                    ],
                  },
                  {
                    question:
                      "Q9: What’s TOP’s innovative sharding technology?",
                    asks: [
                      "TOP Chain is the world’s first full-state sharding public chain powered by sharding technology that supports true horizontal scale-out. Each shard can achieve 500 TPS.",
                      "In terms of sharding, TOP Chain scales through three types of comprehensive sharding: network sharding, state sharding, and compute sharding.",
                      "The consensus network is split into three layers: the Edge Network which provides client access points, the Routing Network which audits transactions and synchronizes state, and the Consensus Network which validates transactions sent to each shard.",
                      "State sharding manages storage across the lattice data structure, and compute sharding partitions the computation between clusters and shards to perform transaction validation in parallel.",
                      "Thanks to comprehensive multi-layer sharding technology, TOP Chain is able to achieve horizontal scale-out to reach up to 1024 shards in total. Moreover, we can increase scalability essentially linearly by simply increasing the number of shards.",
                    ],
                  },
                ],
              },
              {
                title: "III. Tokens & How to Earn Them",
                questionAsk: [
                  {
                    question: "Q10: What is TOP’s token economics?",
                    asks: [
                      "The token economy is core to the ecosystem. Buybacks and burning has been effective in maintaining the value of stocks. In our token economy, TOP token will be burned. 10% of the communication service fee is burned. For example, let’s say a VPN app needs to pay 100 TOP tokens to some service nodes. In this case, 10 TOP tokens will be burned, and the nodes will receive 90 tokens. Secondly, apps need to deposit tokens to access resources such as bandwidth, storage, and CPU. Lastly, every validator needs to stake tokens and receive votes from token holders based on token ownership.",
                    ],
                  },
                  {
                    question:
                      "Q11. How can I convert TOP tokens to cash after I get tokens from mining?",
                    asks: [
                      "TOP tokens are listed on several cryptocurrency exchanges such as Huobi Global, Coinsuper, Bithumb Global, Binance Dex, and Piexgo. You can sell TOP tokens for other cryptocurrencies or cash on those exchanges.",
                    ],
                  },
                  {
                    question:
                      "Q12. Will you offer a bounty or proof-of-care program?",
                    asks: [
                      "Yes, we have kicked off an array of TOP AI Network bounty programs! You can find them on our bounty bot: https://t.me/TOPNetworkBot.",
                    ],
                  },
                  {
                    question:
                      "Q13. I'm trying to develop a Dapp on my own. How can I make use of your project?",
                    asks: [
                      "Once TOP tokens are listed on a cryptocurrency exchange, you can sell the tokens for cash.",
                    ],
                  },
                ],
              },
              {
                title: "IV. For Developers",
                questionAsk: [
                  {
                    question:
                      "Q13. Will you offer a bounty or proof-of-care program?",
                    asks: [
                      "TOP AI Network is the world’s first full-state sharding public blockchain built for high-frequency business such as communications, gaming, social networking, big data, AI and IoT. Any app can tap into the platform through our APIs and SDKs. If you are building a DApp, TOP is the perfect choice for you. With TOP, you no longer need to build your own stack, deploy servers, and maintain the network. With relatively few lines of code, you can build powerful and scalable DApps. ",
                    ],
                  },
                  {
                    question:
                      "Q14: If an individual wants to develop a DApp using TOP AI Network, how can he/she develop that DApp on your platform and what benefits can you provide him/her?",
                    asks: [
                      "Steve: You build the user interface and we handle the technical stacks. Traditionally, you may need a year to build a DApp, but with TOP you will only need a few weeks. You do not need to host your own network, which saves you tons of money.",
                    ],
                  },
                  {
                    question:
                      "Q15. I’m trying to develop a messaging app on my own. How can I make use of your project?",
                    asks: [
                      "TOP AI Network provides cloud communication services such as messaging, calling, video, VPN, CDN, IoT data sharing and more. Any app can tap into this network through the API and SDK we provide. If you are building a messaging app, TOP is the perfect choice for you. With TOP, you no longer need to build your own communication stack, deploy servers, and maintain the network. With a few lines of code, you will have a powerful messaging app.",
                    ],
                  },
                ],
              },
            ],
          },
          team: {
            title: "TOP Team",
            prev: "Forward",
            next: "Next",
            founder: {
              title: "Co-founders",
              desc: "The TOP AI Network core technical team consists of early employees of WebEx, Fortinet and Cloud.com with extensive successful startup experience. They are experts in the fields of communications, encryption, cloud computing and cybersecurity.",
              humans: [
                {
                  name: "Steve Wei",
                  position: "CEO",
                  desc: "WebEx founding employee<br/>CEO of Cenwave, acquired by Huawei<br/>CEO of Dingtone",
                },
                {
                  name: "Noah Wang",
                  position: "CMO",
                  desc: "Yale MBA<br/>Managerial position at Starr, ICBC & PwC<br/>Member of Mensa International",
                },
                {
                  name: "Taylor Wei",
                  position: "CTO",
                  desc: "Cryptography expert<br/>Expert in secure communication<br/>Co-founder of Dingtone",
                },
                {
                  name: "Peter Wei",
                  position: "VP",
                  desc: "WebEx founding employee<br/>R&D Director of Fortinet<br/>Technology architect in TrendMicro",
                },
                {
                  name: "Kelven Yang",
                  position: "Chief Architect",
                  desc: "WebEx chief architect, founding employee<br/>Founding employee of cloud.com<br/>Co-founder of Dingtone",
                },
              ],
            },
            advisor: {
              title: "Advisors",
              humans: [
                { name: "Eric Yuan", position: "Founder & CEO of Zoom" },
                { name: "Mark Greene", position: "Former CEO of FICO" },
                { name: "Roger Lim", position: "Founding Partner of NGC" },
                { name: "Kevin Hsu", position: "Founder of BlockVC" },
              ],
              join_title: "Join Us",
              join_desc:
                "You are welcome to join us via sending us your resume to ",
            },
            investor_title: "Investors",
          },
          news: {
            event: { title: "Community Events", more: "More Details" },
            video: { title: "Videos" },
            article: { title: "Articles" },
            media: {
              title: "TOP in the Media",
              kit: "Media KIT",
              desc: "Feel free to download our media kit if you're working on a story about TOP. For media inquiries, please reach out to {0}",
              download: "Download",
            },
          },
          innovations: {
            title: "TOP Chain",
            desc: "The world's first full-state sharding public blockchain for high-frequency businesses such as communications, games, social networking, big data, AI and IoT.",
            whitepaper: "Read Our Whitepaper",
            technical: "Technical Spotlight",
            section1: {
              title: "We Are",
              content: [
                {
                  title: "High-performance",
                  desc: "Innovative two-layer sharding to help achieve throughputs exceeding 10,000 TPS.",
                },
                {
                  title: "Permissionless",
                  desc: "Fully permissionless for everyone and anyone. No limit on the number of nodes.",
                },
                {
                  title: "Highly Secure",
                  desc: "hpBFT with multiple verification and audit, inspired by PoS* and unpredicted randomness.(PoS* is the proof of Comprehensive-Staking)",
                },
                {
                  title: "User and Dev Friendly",
                  desc: "A friendly token economic model for both users and developers. Easily implementable, turnkey solution for developers.",
                },
              ],
            },
            section2: {
              title: "Technology Features",
              desc: "Powered by an innovative three-layered ledger architecture consisting of a main chain, service chains, and off-chain ledgers, TOP Chain is capable of handling real-world business of any size and volume.",
              content: [
                {
                  text: ["Comprehensive Multi-Layer", "Scale Technology"],
                  desc: [
                    "Layer 0: P2P Overlay Network",
                    "Layer 1: State Sharding, Compute Sharding, Network Sharding",
                    "Layer 2: State Channel, Multiple-Service Chain",
                  ],
                },
                {
                  text: ["Comprehensive Multi-Layer", "Sharding Technology"],
                  desc: [
                    "Two-Layer: State Sharding",
                    "Three-Layer: Compute Sharding",
                    "Three-Layer: Network Sharding",
                  ],
                },
                {
                  text: ["Two-Layer Lattice State"],
                  desc: ["Unit-Lattice", "Block-Lattice"],
                },
                {
                  text: ["Completely Parallel", "Consensus Mechanism"],
                  desc: [
                    "Multi-Cores of CPU: Parallel Computing",
                    "Multi-Roles of Node: Parallel Working",
                    "Multi-Groups of Shard: Parallel Consensus (hpBFT)",
                    "Multi-Shards of Chain: Parallel Transactions",
                  ],
                },
                {
                  text: ["Three-Layer Network"],
                  desc: ["Edge Network", "Routing Network", "Core Network"],
                },
              ],
            },
          },
          activity: { back: "Back", actTime: "Activity time" },
        },
        api_language: "EN",
        date_language: "en",
      },
      ko: {
        name: "한국어",
        message: {
          nav: {
            mining: "광산 플랫폼",
            tech: "기술",
            innovations: "기술 혁신",
            auditreport: "감사보고서",
            whitepaper: "백서",
            developer: "개발자",
            doc: "더큐먼츠&SDK",
            github: "GitHub",
            hackathon: "해커톤",
            ecosystem: "생태계",
            explorer: "TOP 스캔",
            wallet: "월렛",
            dapp: "DApps",
            partner: "파트너",
            staking: "스테이킹",
            handbook: "스테이킹 핸드복",
            staking_start: "스테이킹 시작",
            about: "기업정보",
            team: "팀 소개",
            news: "뉴스",
            faq: "FAQ",
            faucet: "수도꼭지",
            swap: "Token 맵핑",
          },
          footer: {
            contact: "Contact Us",
            service: "Terms of Service",
            privacy: "Privacy Policy",
            placeholder: "이메일로 가입",
            submit: "구독 신청",
          },
          home: {
            hero: {
              desc: "4세대 블럭체인 기술을 기반으로 하는 퍼블릭 체인, 탈중앙화 앱 및 각 보조 보조설비로 구성된 블록체인 시스템",
              play: "Play Video",
            },
            innovation: {
              title: "기술 혁신",
              li1: "폴 스테트 샤딩",
              li1_text1: "네트워크 샤딩(Network Sharding)",
              li1_text2: "스테트 샤딩(State Sharding)",
              li1_text3: "컴뷰팅 샤딩(Compute Sharding)",
              li2: "라이티닝 스비드",
              li2_text1: "100,000+ TPS",
              li2_text2: "수평의 스케일 아웃",
              li2_text3: "리얼 워드 앱을 위해 설계",
              li3: "리얼 워드 앱을  위한 블록체인",
              li3_text1: "Pluggable 서비스 체인",
              li3_text2: "어플리케이션-레벨 스마트 컨스랙트",
              li3_text3: "친화형 토큰 에코노믹 모델",
              more: "더 알아보기",
            },
            act: {
              DRAFT: "DRAFT",
              TOSTART: "TOSTART",
              UNDERWAY: "UNDERWAY",
              OVER: "OVER",
            },
            service: {
              title: "추가적인 기초 시설과 서비스",
              text1: "탈중앙화 통신 서비스",
              text2: "탈중앙화 저장",
              text3: "탈중앙화 ID",
              desc1:
                "비디어,  VoIP,  CDN, 메시지, 라이브 방송등 서비스 제공 가능",
              desc2:
                "암호화 해시를 통해 네트워크에 저장된 데이터를 식별 및 배포 가능",
              desc3: "중앙화 기관의 인증 필요없이 디지털 신원 관리 가능",
            },
            map: {
              title: "TOP 메인넷",
              desc: "리얼 앱을위한 고성능 퍼블릭 체인 플랫폼",
              node: "도드는 총 {0}국가에서 분포",
              online: "온라인 노드",
              learn: "더 알아보기",
            },
            roadmap: { title: "로드맵" },
          },
          mining: {
            slogen:
              "TOP Mining Platform{tag}Leading the Diversified Mining Era",
            income: "Annualized Yield",
            mine: "HiWallet DeFi Mining",
            rights: "TOP Token{tag}Privilege",
            head: "Mining ROI",
            chain: "TOP Staking",
            cheap: "Discount",
            discount: "15%",
            discount1: "off",
            miner: "TopIPFS Mining Machine",
            miner1: "TopIPFS Mining Machine",
            sec1: {
              title1: "The World's First",
              desc1:
                "Full-state sharding blockchain {tag}supports vertical expansion{tag}of layer-2",
              title2: "Low Entry",
              desc2:
                "Users can participate Staking with{tag}a few TOP tokenand without high{tag}technical requirements",
              title3: "No Risks, High Returns",
              desc3:
                "TOP token will always be in{tag}your wallet Mining ROI is about 491.52%",
            },
            more: "Learn More",
            sec2: {
              title1: "No.1 Mining Efficiency",
              desc1:
                "Dozens of algorithm experts {tag}persistently optimize the mining efficiency",
              title2: "IDC-5 Room in Silicon Valley",
              desc2:
                "SLA of 99.99% uptime{tag}The annual failure rate does not exceed 5.26 minutes",
              title3: "Low Cost, High Reward",
              desc3: "Scientifically assembled into super mining machines",
            },
            sec3: {
              title1: "Decentralized Mining",
              desc1:
                "Using smart contract to aggregate on-chain DeFi mining{tag}Eliminate tech misconduct",
              title2: "Selected Policies",
              desc2:
                "Popular DeFi projects are selected{tag}for providing investment options{tag}to different users",
              title3: "User Incentives",
              desc3: "Extra returns by inviting friends{tag} to DeFi mining",
            },
          },
          developer: {
            faucet: {
              title: "FAUCET OF TOP",
              desc: "Quickly, safely receive testnet TOP",
              before: "Get TOP after Verification",
              after: "Verified",
              placeholder: "Enter your testnet address",
              request: "Get TOP",
              amount: "Transfer Amount",
              hash: "HASH",
              fail: "Transaction failed, please request again",
              success: "Get TOP successfully",
              copySuccess: "Copy Succeeded",
              copyFail: "Copy Failed",
              12001: "Wrong TOP address",
              12002: "Wrong user ID",
              12003: "Wrong User idToken",
              12004: "Multiple attempts in a certain time",
              12005: "Failed to pass the ID verification",
              12006: "Wrong hash",
              12007: "No records of valid transaction",
            },
          },
          ecosystem: {
            top_text1: "DApp 개발자",
            top_text2: "노드 오퍼레이터&투표",
            top_text3: "서비스 개발자",
            minning: {
              title: "TOP 스테이킹",
              desc: "톱 노드로, 도드에게 투표, 톱의 생태계 관리에 참여",
              learn: "더 알아보기",
              name1: "Miners",
              text1:
                "해시레이트나 밴드위스를 제공하여 거래 검증 및 블록 생성으로 리워드 획득",
              name2: "Voters",
              text2: "토큰을 락업하여 노드에 투표하면 리워드 획득 가능 ",
            },
            wallet: {
              title: "월렛",
              hiwallet: "HiWallet",
              hiwallet_desc: "쉽고 잘 이용할 수 있는 지갑, 다종 토큰 지원",
              hiwallet_desc_full: "쉽고 잘 이용할 수 있는 지갑, 다종 토큰 지원",
              hiwallet_download: "다운로드",
              cobo: "Cobo Wallet",
              cobo_desc: "Ecosystem wallet",
            },
            dapp: {
              title: "DApps",
              learn: "더 알아보기",
              app: "App",
              bitvpn: "BitVPN",
              bitvpn_desc: "톱의 첫번째 탈중앙화 앱",
              text1: "Live Streaming",
              text2: "Video",
              text3: "Gaming",
              text4: "IoT Data Sharing",
              text5: "Storage",
              text6: "VoIP",
              text7: "Asset Managemeng",
              text8: "CDN",
              text9: "Message",
              game: "게임",
              game1: "War of Three Kingdoms",
              game1_desc: " ",
              game2: "The King's Business",
              game2_desc: " ",
              game3: "League of Crypto",
              game3_desc: " ",
              game4: "Raiders",
              game4_desc: " ",
            },
            partner: {
              title: "파트너",
              exchange: "거래소",
              minning: "마이닝 폴",
              strategic: "전략적인 파트너",
            },
          },
          faq: {
            pagetitle: "FAQ",
            titles: [
              "I. 프로젝트 소개",
              "II. 톱(TOP) 기술에 관련된 질문",
              "III. 톱(TOP) 토큰에 관련된 질문",
              "IV. 톱(TOP) 개발에 관련된 질문",
            ],
            articles: [
              {
                title: "I. 프로젝트 소개",
                questionAsk: [
                  {
                    question: "Q1 : 톱(TOP)이란?",
                    asks: [
                      "톱 네트워크(TOP AI Network)는 4세대 퍼블릭 체인, 탈중앙화 앱(DApp) 및 탈중앙화 커뮤니케이션 서비스로 구성된 블록체인 생태계입니다.",
                      "전체 분산형 생태계를 뒷받침하는 퍼블릭 체인 인프라인 톱 체인(TOP Chain)은 세계 최초의 폴 스테이트 샤딩 퍼블릭 체인이며 대규모 DApp을 위해 구성된 고성능 플랫폼입니다. 톱 체인은 메인 체인, 서비스 체인 및 오프 체인 원장 3 계층 아키텍처로 구성된 블록체인입니다. 톱 체인은 모든 규모의 진실 비즈니스를 처리할 수 있으며 2 층 격자 DAG, 2 층 샤딩 및 병행 pBFT-PoS 컨센서스 메커니즘과 같은 기술 혁신을 실현했습니다. 초당 100,000 건 이상의 트랜잭션을 처리할 수 있는 실클 체인을 만들고 있습니다. 높은 TPS, 완벽한 보안 및 매우 빠른 확인 속도를 갖춘 톱 체인은 통신, 게임, 소셜 미디어, 빅 데이터, 인공 지능, IoT 등과 같은 고주파 거래를 요구하는 서비스를 위한 안정적인 플랫폼입니다. TOP AI Network의 장기적인 임무는 모든 DApp을 위한 퍼블릭 체인 인프라를 구축하는 것입니다. 100 명 이상의 개발자로 구성된 세계적인 팀이 목표를 달성하기 위해 노력하고 있습니다. 우리는 이미 암호 화폐 지갑인 HiWallet을 개발했으며, 현재 생태계를 기반으로 일련의 블록 체인 게임과 더 큰 규모의 DApp을 개발하고 있습니다.",
                    ],
                  },
                  {
                    question:
                      "Q2 : 팀은 왜 퍼블릭 블록 체인 플랫폼을 구축하려고 하나?",
                    asks: [
                      "처음에 저희는 퍼블릭 블록체인 플랫폼을 만들려고 하지 않았지만 개발하다가 꼭 저희 퍼블릭 블록체인 플랫폼을 만들어야 한다는 것을 깨달았습니다. 2017년에 저희 프로젝트를 시작했을 때는 4 천만 명의 유저들을 톱 네트워크로 이동시키려고 했는데 이렇게 한다면 톱 체인은 초당 10건 이상 트랜잭션을 처리해야 합니다. 그래서 저희는 기존 퍼블릭 블록 체인 플랫폼을 찾으려고 시도했지만 그러한 높은 TPS에 도달 할 수 있는 블록 체인 플랫폼은 없다는 것을 알게 되었습니다. 결국, 저희는 자신의 원장을 구축하기로 결정했습다. 트랜잭션 규모의 제한 없는 리얼 비즈니스를 처리 할 수있는 퍼플릭 체인 플랫폼을 만들고자 합니다.",
                    ],
                  },
                  {
                    question: "Q3 : 톱 백서가 있나?",
                    asks: [
                      "톱 네트워크백서가 있습니다! 톱 홈페이지에서 “백서”를 클릭하여 백서를 참고로 하세요.",
                    ],
                  },
                  {
                    question: "Q4 : 지금까지 톱(TOP)에 투자를 한 기관은?",
                    asks: [
                      "우리는 Fenbushi Capital, Danhua Capital (DHVC), NGC, LD Capital 등 투자 기관으로 부터 1,100만 달러의 초기 투자를 받았습니다.",
                    ],
                  },
                ],
              },
              {
                title: "II. 톱(TOP) 기술에 관련된 질문",
                questionAsk: [
                  {
                    question: "Q5. 톱 네트워크의 생태계 구축 계획은?",
                    asks: [
                      "현재까지 블록체인 플랫폼의 수는 DApp 개발자의 수보다 훨씬 많습니다.  톱은 대규모의 유저들을을 기반으로 하며 기존 앱과 유저들을 톱 네트워크로 옮겠습니다. 초기 단계에는 제3자 개발자에게 의존하지 않습니다. 생태계를 빠르게 구축할 수있는 충분한 유저들과 앱이 있으니까요. 그리고, 톱은 게임 개발팀을 설립했고 게임 팀은 전문적인 블록체인 게임을 만들고 있습니다. 게임 개발 과정이 완료되면 제3자 개발자에게 공지하도록 하겠습니다.",
                    ],
                  },
                  {
                    question:
                      "Q6. 어떻게 1억 유저들을 톱으로 이동시킬 수 있나?",
                    asks: [
                      "톱 개발팀은 Dingtone, CoverMe 및 Proxy과 같은 통신 앱을 개발하기 전에 탈중앙화 네트워크 계층을 설계했습니다. 이러한 앱은 동일한 기본 네트워크 계층을 공유하며 이런 기본 네트워크는 TOP 네트워크로 대체됩니다. 이는 Dingtone, CoverMe 및 Proxy를 TOP 네트워크로 투명하게 이동시킨다는 것을 의미합니다. 실제로 사용자는 마이그레이션 프로세스를 느낄 수 없습니다.",
                    ],
                  },
                  {
                    question:
                      "Q7 : 톱 체인 개발에 참여하는 개발자 수는? 단일 계층보다 3 계층의 장점은?",
                    asks: [
                      "톱 네트워크는100명 이상의 개발자를 보유하고 있습니다. 단일 레이어는 한계가 있고 메인 체인만 있으면 모든 것을 처리할 수 있는 게 아닙니다.  재무 및 비즈니스 로직을 분리하고 내장된 레이어 2 상태 채널을 구현합니다.",
                    ],
                  },
                  {
                    question: "Q8 : 톱 체인의 보안 문제를 해결하는 방법은?",
                    asks: [
                      "저희는 3 계층 아키텍처를 가지고 있으며, 트랜잭션이 샤드에서 검증된 후에는 고급 네트워크에 의해 감사될 것이라서 누군가가 샤드를 제어하더라도 고급 네트워크를 무시할 수 없습니다.",
                    ],
                  },
                  {
                    question: "Q9 : 톱의 혁신적인 샤딩 기술이 무엇이가?",
                    asks: [
                      "톱 체인은 수평 스케일 아웃을 지원하는 샤딩 기술로 구동되는 세계 최초의 폴 스테이트 샤딩 퍼블릭 체인으로, 각 샤드는 500 TPS를 달성 할 수 있습니다.",
                      "폴 스테이트 샤딩 측면에서 톱 체인은 네트워크 샤딩, 스테이트 샤딩 및 컴퓨팅 샤딩의 세 가지 유형의 종합 샤딩을 통해 확장됩니다.",
                      "컨센서스 네트워크는 클라이언트 액세스 포인트를 제공하는 에지 네트워크, 트랜잭션을 감사하고 상태를 동기화하는 라우팅 네트워크 및 각 샤드로 전송 된 트랜잭션의 유효성을 검사하는 컨센서스 네트워크의 세 계층으로 나뉩니다.",
                      "스테이트 샤딩은 격자 데이터 구조에서 스토리지를 관리하고 샤딩 계산은 클러스터와 샤드간에 계산을 분할하여 트랜잭션 유효성 검사를 병렬로 수행합니다.",
                      "종합적인 다층 샤딩 기술 덕분에 톱 체인은 수평 스케일 아웃을 달성하여 총 1024 개의 샤드에 도달할 수 있으며 샤드 수를 늘리면 본질적으로 선형적으로 확장성을 높일 수 있습니다.",
                    ],
                  },
                ],
              },
              {
                title: "III. 톱(TOP) 토큰에 관련된 질문",
                questionAsk: [
                  {
                    question: "Q10 : 톱 토큰 경제는 무엇인가?",
                    asks: [
                      "토큰 이코노미가 톱 생태의 핵심입니다. 바이백 또는 버닝 주식 시장에서 가치를 유지하는 데 효과적임이 입증되었습니다. 토큰 이코노미에서는 TOP 토큰이 소각될 것입니다. 통신 서비스 수수료의 10%가 소각됩니다. 예를 들어 VPN앱은 일부 노드에 100 개의 TOP 토큰을 지불해야 하고, 10 개의 TOP 토큰이 버닝될 것입니다. 그러면 노드에 90 개의 토큰이 있겠습니다. 두째로, 앱은 대역폭, 스토리지 및 CPU와 같은 리소스에 액세스하기 위해 토큰을 입금해야 합니다. 검사기 노드는 토큰을 스테크하고 토큰 보유자로부터 투표를 받겠습니다.",
                    ],
                  },
                  {
                    question:
                      "Q11 : 채굴에서 토큰을 얻은 후 톱 토큰을 현금으로 변환하려면 어떻게 해야 하나?",
                    asks: [
                      "TOP 토큰은 Huobi Global, Coinsuper, Bithumb Global, Binance Dex 및 Piexgo와 같은 여러 암호 화폐 거래소에 상장되어 있으며 해당 거래소에서 토큰을 판매하면 현금을 받을 수 있습니다.",
                    ],
                  },
                  {
                    question:
                      "Q12 :  바운티 또는 케어 증명 프로그램을 제공하나?",
                    asks: [
                      "네, 톱 네트워크 바운티 프로그램을 시작했습니다. 바운티 봇 (https://t.me/TOPNetworkBot)에서 찾을 수 있습니다.",
                    ],
                  },
                ],
              },
              {
                title: "IV. 톱(TOP) 개발에 관련된 질문",
                questionAsk: [
                  {
                    question:
                      "Q13. DApp을 직접 개발하려고 하는데 어떻게 프로젝트를 활용할 수 있나?",
                    asks: [
                      "톱 네트워는 통신, 게임, 소셜 네트워킹, 빅 데이터, AI 및 IoT와 같은 고주파수 비즈니스를 위한 세계 최초의 풀 스테이트 퍼블릭 블록 체인으로, 모든 앱은 우리가 제공하는 API 및 SDK를 통해 네트워크를 활용할 수 있습니다. 톱을 사용하면 완벽한 앱을 선택할 수 있으며, TOP을 사용하면 더 이상 자체 스택을 구축하고 서버를 배포하며 네트워크를 유지 관리 할 필요가 없으며 몇 줄의 코드만으로도 강력한 DApp만들 수 있습니다.",
                    ],
                  },
                  {
                    question:
                      "Q14 : 개인이 톱 네트워크를 사용하여 DApp을 개발하는 경우, 플랫폼에서 해당 DApp을 어떻게 개발하고 어떤 혜택을 제공할 수 있나?",
                    asks: [
                      "사용자 인터페이스를 구축하고 스택을 처리합니다. 전통적으로 DApp을 구축하는 데 1 년이 걸리겠지만 이제는 몇 주가 필요합니다. 자신의 네트워크를 호스팅할 필요가 없으므로 많은 비용을 절약할 수 있습니다. ",
                    ],
                  },
                  {
                    question: "Q15 : 톱의 스마트 계약은 무엇인가?",
                    asks: [
                      "톱은 플랫폼 스마트 계약 및 애플리케이션 계층 스마트 계약 두 가지 유형이 구분됩니다. 플랫폼 스마트 계약은 톱의 생태계에서 토큰 경제 및 온 체인 거버넌스를 위해 설계되었습니다. 현재 LUA 만 지원하는 애플리케이션 스마트 계약은 DApp에 사용됩니다. 나중에 더 많은 언어를 지지될 것입니다.",
                    ],
                  },
                ],
              },
            ],
          },
          team: {
            title: "TOP Team",
            prev: "Forward",
            next: "Next",
            founder: {
              title: "Co-founders",
              desc: "TOP의 핵심 팀은 웹엑스, Fortinet 및 Cloud.com의 초기 직원으로 구성되어 있으며 통신, 암호화, 클라우드 컴퓨팅 및 네트워크 보안 전문가로서 풍부한 기업가 배경을 가지고 있습니다.",
              humans: [
                {
                  name: "Steve Wei",
                  position: "CEO",
                  desc: "칭화 대학교 출신<br/>연쇄 성공적인 창업자<br/>웹엑스의 창립 직원<br/>Cenwave를 설립했고 화웨이에 인수되었음<br/>Dingtone을 설립했고 1억 명의 유저들 보유",
                },
                {
                  name: "Noah Wang",
                  position: "CMO",
                  desc: "예일 대학교 MBA<br/>중국 공상 은행, 프라이스워터하우스쿠퍼스의 전 관리직<br/>중국CCTV 특별 해설자<br/>CFA및 CPA, 국제 멘사 협회 회원",
                },
                {
                  name: "Taylor Wei",
                  position: "CTO",
                  desc: "웹엑스 창립 직원<br/>고급 네트워크 아키텍트<br/>Dingtone co-found",
                },
                {
                  name: "Peter Wei",
                  position: "VP",
                  desc: "웹엑스 창립 직원<br/>Fortinet 아키텍트<br/>TrendMicro 기술 아키텍트<br/>33 개의 특허 보유",
                },
                {
                  name: "Kelven Yang",
                  position: "치에프 아키텍트",
                  desc: "웹엑스 치에프 아키텍트<br/>Cloud.com창립 직원<br/>Dingtone co-found",
                },
              ],
            },
            advisor: {
              title: "Advisors",
              humans: [
                { name: "Eric Yuan", position: "ZOOM CEO 및 창립자" },
                { name: "Mark Greene", position: "FICO 前 CEO" },
                { name: "Roger Lim", position: "NGC 파트너" },
                { name: "Kevin Hsu", position: "BlockVC 창립자" },
              ],
              join_title: "Join Us",
              join_desc: "Send your resume to ",
            },
            investor_title: "Investors",
          },
          news: {
            event: { title: "커뮤니티 이벤트", more: "More Details" },
            video: { title: "비디오" },
            article: { title: "블로그" },
            media: {
              title: "TOP 핫 이슈",
              kit: "미디어 자료",
              desc: "톱의 미디어 키트를 다운로드하세요. 다른 미디어 재료가 필요하면{0}로 문의하세요.",
              download: "Download",
            },
          },
          innovations: {
            title: "TOP 체인",
            desc: "세계 최초로 통신, 게임, 소셜네트워크서비스(SNS), 빅데이터, AI, IoT 등 빈번히 일어나는 업무를 위한 풀스테이트 퍼블릭  블록체인.",
            whitepaper: "화이트 페이퍼 보기",
            technical: "테크니컬 스포트라이트",
            section1: {
              title: "TOP 소개",
              content: [
                {
                  title: "하이퍼포먼스",
                  desc: "10,000 TPS를 초과하는 처리량을 달성할 수 있도록 지원하는 혁신적인 2 레이어 샤딩.",
                },
                {
                  title: "무허가",
                  desc: "모든 사람과 누구에게나 완전히 무허가 된다. 노드 수에 아무 제한이 없다.",
                },
                {
                  title: "높은 보안성",
                  desc: "PoS*에서 영감을 받아 복수의 검증 및 감사를 수행하는 hpBFT 및 예상치 못한 무작위성.(PoS*는 종합적인 스테이킹의 증거다.)",
                },
                {
                  title: "유저 및 개발자 친화적",
                  desc: "유저와 개발자 모두를 위한 친숙한 토큰 경제 모델이다. 쉽게 구현할 수 있는 개발자를 위한 턴키 솔루션.",
                },
              ],
            },
            section2: {
              title: "기술 특징",
              desc: "메인 체인, 서비스 체인, 오프체인 레저로 구성된 혁신적인 3중 원장 아키텍처를 기반으로 하는 TOP 체인은 아무 규모의실제 비즈니스를 처리할 수 있다.",
              content: [
                {
                  text: ["종합적인 멀티 레이어 ", "스케일 테크놀로지"],
                  desc: [
                    "레이어 0: P2P 오버레이 네트워크",
                    "레이어 1: 스테이트 샤딩, 컴퓨트 샤딩, 테트워크 샤딩",
                    "레이어 2: 스테이트 채널, 멀티플 서비스 체인",
                  ],
                },
                {
                  text: ["종합적인 멀티 레이너", "샤딩 테크놀로지"],
                  desc: [
                    "2-레이어: 스테이트 샹딩",
                    "3-레이어: 컴퓨터 샤딩",
                    "3-레이어: 테트워크 샤딩",
                  ],
                },
                {
                  text: ["2-레이어 래티스 스테이트"],
                  desc: ["유니트-래티스", "블록-래티스"],
                },
                {
                  text: ["완전 평행", "컨센서스 메커니즘"],
                  desc: [
                    "CPU의 다중 코어: 평행 컴퓨팅",
                    "노드의 다중 역할: 평행 작업",
                    "샤드의 다중 그룹: 평행 컨센서스 (hpBFT)",
                    "체인의 다중 샤드: 평생 거래 ",
                  ],
                },
                {
                  text: ["3-레이어 네트워크"],
                  desc: ["에지 네트워크", "라우팅 네트워크", "코어 네트워크"],
                },
              ],
            },
          },
          activity: { back: "Back", actTime: "Activity time" },
        },
        api_language: "KO",
        date_language: "ko",
      },
    };
  },
  function (e, t) {
    var n;
    n = (function () {
      return this;
    })();
    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }
    e.exports = n;
  },
  function (e, t, n) {
    e.exports = (function () {
      "use strict";
      var e = "millisecond",
        t = "second",
        n = "minute",
        r = "hour",
        a = "day",
        o = "week",
        i = "month",
        s = "quarter",
        c = "year",
        l =
          /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
        u =
          /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        h = function (e, t, n) {
          var r = String(e);
          return !r || r.length >= t
            ? e
            : "" + Array(t + 1 - r.length).join(n) + e;
        },
        d = {
          s: h,
          z: function (e) {
            var t = -e.utcOffset(),
              n = Math.abs(t),
              r = Math.floor(n / 60),
              a = n % 60;
            return (t <= 0 ? "+" : "-") + h(r, 2, "0") + ":" + h(a, 2, "0");
          },
          m: function (e, t) {
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              r = e.clone().add(n, i),
              a = t - r < 0,
              o = e.clone().add(n + (a ? -1 : 1), i);
            return Number(-(n + (t - r) / (a ? r - o : o - r)) || 0);
          },
          a: function (e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          },
          p: function (l) {
            return (
              {
                M: i,
                y: c,
                w: o,
                d: a,
                D: "date",
                h: r,
                m: n,
                s: t,
                ms: e,
                Q: s,
              }[l] ||
              String(l || "")
                .toLowerCase()
                .replace(/s$/, "")
            );
          },
          u: function (e) {
            return void 0 === e;
          },
        },
        p = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
        },
        f = "en",
        m = {};
      m[f] = p;
      var g = function (e) {
          return e instanceof w;
        },
        v = function (e, t, n) {
          var r;
          if (!e) return f;
          if ("string" == typeof e) m[e] && (r = e), t && ((m[e] = t), (r = e));
          else {
            var a = e.name;
            (m[a] = e), (r = a);
          }
          return !n && r && (f = r), r || (!n && f);
        },
        y = function (e, t, n) {
          if (g(e)) return e.clone();
          var r = t ? ("string" == typeof t ? { format: t, pl: n } : t) : {};
          return (r.date = e), new w(r);
        },
        b = d;
      (b.l = v),
        (b.i = g),
        (b.w = function (e, t) {
          return y(e, { locale: t.$L, utc: t.$u, $offset: t.$offset });
        });
      var w = (function () {
        function h(e) {
          (this.$L = this.$L || v(e.locale, null, !0)), this.parse(e);
        }
        var d = h.prototype;
        return (
          (d.parse = function (e) {
            (this.$d = (function (e) {
              var t = e.date,
                n = e.utc;
              if (null === t) return new Date(NaN);
              if (b.u(t)) return new Date();
              if (t instanceof Date) return new Date(t);
              if ("string" == typeof t && !/Z$/i.test(t)) {
                var r = t.match(l);
                if (r)
                  return n
                    ? new Date(
                        Date.UTC(
                          r[1],
                          r[2] - 1,
                          r[3] || 1,
                          r[4] || 0,
                          r[5] || 0,
                          r[6] || 0,
                          r[7] || 0
                        )
                      )
                    : new Date(
                        r[1],
                        r[2] - 1,
                        r[3] || 1,
                        r[4] || 0,
                        r[5] || 0,
                        r[6] || 0,
                        r[7] || 0
                      );
              }
              return new Date(t);
            })(e)),
              this.init();
          }),
          (d.init = function () {
            var e = this.$d;
            (this.$y = e.getFullYear()),
              (this.$M = e.getMonth()),
              (this.$D = e.getDate()),
              (this.$W = e.getDay()),
              (this.$H = e.getHours()),
              (this.$m = e.getMinutes()),
              (this.$s = e.getSeconds()),
              (this.$ms = e.getMilliseconds());
          }),
          (d.$utils = function () {
            return b;
          }),
          (d.isValid = function () {
            return !("Invalid Date" === this.$d.toString());
          }),
          (d.isSame = function (e, t) {
            var n = y(e);
            return this.startOf(t) <= n && n <= this.endOf(t);
          }),
          (d.isAfter = function (e, t) {
            return y(e) < this.startOf(t);
          }),
          (d.isBefore = function (e, t) {
            return this.endOf(t) < y(e);
          }),
          (d.$g = function (e, t, n) {
            return b.u(e) ? this[t] : this.set(n, e);
          }),
          (d.year = function (e) {
            return this.$g(e, "$y", c);
          }),
          (d.month = function (e) {
            return this.$g(e, "$M", i);
          }),
          (d.day = function (e) {
            return this.$g(e, "$W", a);
          }),
          (d.date = function (e) {
            return this.$g(e, "$D", "date");
          }),
          (d.hour = function (e) {
            return this.$g(e, "$H", r);
          }),
          (d.minute = function (e) {
            return this.$g(e, "$m", n);
          }),
          (d.second = function (e) {
            return this.$g(e, "$s", t);
          }),
          (d.millisecond = function (t) {
            return this.$g(t, "$ms", e);
          }),
          (d.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }),
          (d.valueOf = function () {
            return this.$d.getTime();
          }),
          (d.startOf = function (e, s) {
            var l = this,
              u = !!b.u(s) || s,
              h = b.p(e),
              d = function (e, t) {
                var n = b.w(
                  l.$u ? Date.UTC(l.$y, t, e) : new Date(l.$y, t, e),
                  l
                );
                return u ? n : n.endOf(a);
              },
              p = function (e, t) {
                return b.w(
                  l
                    .toDate()
                    [e].apply(
                      l.toDate(),
                      (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                    ),
                  l
                );
              },
              f = this.$W,
              m = this.$M,
              g = this.$D,
              v = "set" + (this.$u ? "UTC" : "");
            switch (h) {
              case c:
                return u ? d(1, 0) : d(31, 11);
              case i:
                return u ? d(1, m) : d(0, m + 1);
              case o:
                var y = this.$locale().weekStart || 0,
                  w = (f < y ? f + 7 : f) - y;
                return d(u ? g - w : g + (6 - w), m);
              case a:
              case "date":
                return p(v + "Hours", 0);
              case r:
                return p(v + "Minutes", 1);
              case n:
                return p(v + "Seconds", 2);
              case t:
                return p(v + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }),
          (d.endOf = function (e) {
            return this.startOf(e, !1);
          }),
          (d.$set = function (o, s) {
            var l,
              u = b.p(o),
              h = "set" + (this.$u ? "UTC" : ""),
              d = ((l = {}),
              (l.day = h + "Date"),
              (l.date = h + "Date"),
              (l[i] = h + "Month"),
              (l[c] = h + "FullYear"),
              (l[r] = h + "Hours"),
              (l[n] = h + "Minutes"),
              (l[t] = h + "Seconds"),
              (l[e] = h + "Milliseconds"),
              l)[u],
              p = u === a ? this.$D + (s - this.$W) : s;
            if (u === i || u === c) {
              var f = this.clone().set("date", 1);
              f.$d[d](p),
                f.init(),
                (this.$d = f
                  .set("date", Math.min(this.$D, f.daysInMonth()))
                  .toDate());
            } else d && this.$d[d](p);
            return this.init(), this;
          }),
          (d.set = function (e, t) {
            return this.clone().$set(e, t);
          }),
          (d.get = function (e) {
            return this[b.p(e)]();
          }),
          (d.add = function (e, s) {
            var l,
              u = this;
            e = Number(e);
            var h = b.p(s),
              d = function (t) {
                var n = y(u);
                return b.w(n.date(n.date() + Math.round(t * e)), u);
              };
            if (h === i) return this.set(i, this.$M + e);
            if (h === c) return this.set(c, this.$y + e);
            if (h === a) return d(1);
            if (h === o) return d(7);
            var p =
                ((l = {}), (l[n] = 6e4), (l[r] = 36e5), (l[t] = 1e3), l)[h] ||
                1,
              f = this.$d.getTime() + e * p;
            return b.w(f, this);
          }),
          (d.subtract = function (e, t) {
            return this.add(-1 * e, t);
          }),
          (d.format = function (e) {
            var t = this;
            if (!this.isValid()) return "Invalid Date";
            var n = e || "YYYY-MM-DDTHH:mm:ssZ",
              r = b.z(this),
              a = this.$locale(),
              o = this.$H,
              i = this.$m,
              s = this.$M,
              c = a.weekdays,
              l = a.months,
              h = function (e, r, a, o) {
                return (e && (e[r] || e(t, n))) || a[r].substr(0, o);
              },
              d = function (e) {
                return b.s(o % 12 || 12, e, "0");
              },
              p =
                a.meridiem ||
                function (e, t, n) {
                  var r = e < 12 ? "AM" : "PM";
                  return n ? r.toLowerCase() : r;
                },
              f = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: s + 1,
                MM: b.s(s + 1, 2, "0"),
                MMM: h(a.monthsShort, s, l, 3),
                MMMM: l[s] || l(this, n),
                D: this.$D,
                DD: b.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: h(a.weekdaysMin, this.$W, c, 2),
                ddd: h(a.weekdaysShort, this.$W, c, 3),
                dddd: c[this.$W],
                H: String(o),
                HH: b.s(o, 2, "0"),
                h: d(1),
                hh: d(2),
                a: p(o, i, !0),
                A: p(o, i, !1),
                m: String(i),
                mm: b.s(i, 2, "0"),
                s: String(this.$s),
                ss: b.s(this.$s, 2, "0"),
                SSS: b.s(this.$ms, 3, "0"),
                Z: r,
              };
            return n.replace(u, function (e, t) {
              return t || f[e] || r.replace(":", "");
            });
          }),
          (d.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }),
          (d.diff = function (e, a, l) {
            var u,
              h = b.p(a),
              d = y(e),
              p = 6e4 * (d.utcOffset() - this.utcOffset()),
              f = this - d,
              m = b.m(this, d);
            return (
              (m =
                ((u = {}),
                (u[c] = m / 12),
                (u[i] = m),
                (u[s] = m / 3),
                (u[o] = (f - p) / 6048e5),
                (u.day = (f - p) / 864e5),
                (u[r] = f / 36e5),
                (u[n] = f / 6e4),
                (u[t] = f / 1e3),
                u)[h] || f),
              l ? m : b.a(m)
            );
          }),
          (d.daysInMonth = function () {
            return this.endOf(i).$D;
          }),
          (d.$locale = function () {
            return m[this.$L];
          }),
          (d.locale = function (e, t) {
            if (!e) return this.$L;
            var n = this.clone(),
              r = v(e, t, !0);
            return r && (n.$L = r), n;
          }),
          (d.clone = function () {
            return b.w(this.$d, this);
          }),
          (d.toDate = function () {
            return new Date(this.valueOf());
          }),
          (d.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }),
          (d.toISOString = function () {
            return this.$d.toISOString();
          }),
          (d.toString = function () {
            return this.$d.toUTCString();
          }),
          h
        );
      })();
      return (
        (y.prototype = w.prototype),
        (y.extend = function (e, t) {
          return e(t, w, y), y;
        }),
        (y.locale = v),
        (y.isDayjs = g),
        (y.unix = function (e) {
          return y(1e3 * e);
        }),
        (y.en = m[f]),
        (y.Ls = m),
        y
      );
    })();
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return v;
    });
    var r = n(3),
      a = n(1),
      o = n(45),
      i = n(10),
      s = n(9),
      c = n(0),
      l = n.n(c),
      u = n(36),
      h = n.n(u),
      d = n(34);
    class p {
      constructor() {
        (this.lang = "en"),
          (this.supportLan = d.a),
          Object(a.reaction)(
            () => {
              h.a.locale(this.supportLan[this.lang].date_language);
            },
            () => this.lang
          );
      }
      get message() {
        return d.a[this.lang].message;
      }
      get langPath() {
        return "/" + this.lang;
      }
      toogleLang(e) {
        Object.keys(this.supportLan).indexOf(e) > -1
          ? (this.lang = e)
          : (this.lang = "en"),
          (this.lang = "en");
      }
      getMessage(e, t, n, r) {
        let a = t[e];
        if (a) return a;
        if (
          (e.split(".").forEach((e) => {
            a = a ? a[e] : t[e];
          }),
          a || (a = r || e),
          !/{[^}]+}/g.test(a))
        )
          return a;
        const o = a.split(/{[^}]+}/g),
          i = a.match(/{[^}]+}/g),
          s = [];
        let c = 0;
        return (
          o.forEach((e, t) => {
            if (("" !== e && s.push(e), t === o.length - 1)) return;
            const r = i[c++].replace(/{|}/g, ""),
              a = n[r];
            l.a.isValidElement(a)
              ? s.push(l.a.cloneElement(a, { key: t }))
              : ["string", "number", "boolean"].indexOf(typeof a) > -1
              ? s.push(String(a))
              : s.push("");
          }),
          s
        );
      }
      getLocaleMessage(e, t, n) {
        return this.getMessage(e, this.message, t, n);
      }
    }
    Object(r.b)([a.observable], p.prototype, "lang", void 0),
      Object(r.b)([a.observable], p.prototype, "supportLan", void 0),
      Object(r.b)([a.computed], p.prototype, "langPath", null),
      Object(r.b)([a.action.bound], p.prototype, "toogleLang", null),
      Object(r.b)([a.action.bound], p.prototype, "getMessage", null),
      Object(r.b)([a.action.bound], p.prototype, "getLocaleMessage", null);
    var f = n(32);
    class m {
      constructor(e) {
        (this.locale = new p()),
          (this.routing = new o.RouterStore()),
          e &&
            Object.keys(e).forEach((t) => {
              const n = e[t];
              Object.keys(n).forEach((e) => {
                this[t].hasOwnProperty(e) && (this[t][e] = n[e]);
              });
            }),
          Object(o.syncHistoryWithStore)(Object(i.a)(), this.routing),
          this.routing.history.listen((e) => {
            this.locale.toogleLang(
              Object(s.e)(e.pathname, f.a).params.lang || "zh"
            );
          });
      }
    }
    let g;
    Object(r.b)([a.observable], m.prototype, "locale", void 0),
      Object(r.b)([a.observable], m.prototype, "routing", void 0);
    const v = () => g;
    t.a = function (e) {
      return (g = new m(e)), g;
    };
  },
  function (e, t, n) {
    "use strict";
    var r = n(58),
      a = {
        childContextTypes: !0,
        contextType: !0,
        contextTypes: !0,
        defaultProps: !0,
        displayName: !0,
        getDefaultProps: !0,
        getDerivedStateFromError: !0,
        getDerivedStateFromProps: !0,
        mixins: !0,
        propTypes: !0,
        type: !0,
      },
      o = {
        name: !0,
        length: !0,
        prototype: !0,
        caller: !0,
        callee: !0,
        arguments: !0,
        arity: !0,
      },
      i = {
        $$typeof: !0,
        compare: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
        type: !0,
      },
      s = {};
    function c(e) {
      return r.isMemo(e) ? i : s[e.$$typeof] || a;
    }
    (s[r.ForwardRef] = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    }),
      (s[r.Memo] = i);
    var l = Object.defineProperty,
      u = Object.getOwnPropertyNames,
      h = Object.getOwnPropertySymbols,
      d = Object.getOwnPropertyDescriptor,
      p = Object.getPrototypeOf,
      f = Object.prototype;
    e.exports = function e(t, n, r) {
      if ("string" != typeof n) {
        if (f) {
          var a = p(n);
          a && a !== f && e(t, a, r);
        }
        var i = u(n);
        h && (i = i.concat(h(n)));
        for (var s = c(t), m = c(n), g = 0; g < i.length; ++g) {
          var v = i[g];
          if (!(o[v] || (r && r[v]) || (m && m[v]) || (s && s[v]))) {
            var y = d(n, v);
            try {
              l(t, v, y);
            } catch (e) {}
          }
        }
      }
      return t;
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "b", function () {
      return h;
    }),
      n.d(t, "c", function () {
        return d;
      }),
      n.d(t, "a", function () {
        return g;
      });
    var r = n(3),
      a = n(49);
    let o,
      i,
      s = "",
      c = !1;
    const l = [];
    let u;
    function h({ appname: e, category: t, baseUrl: n }) {
      if (!e) throw new Error("Need appname");
      if (!t) throw new Error("Need category");
      (o = e),
        (i = t),
        n && (s = n),
        (function () {
          (u = "Unknown"),
            -1 !== window.navigator.userAgent.indexOf("Windows") &&
              (u = "Windows");
          -1 !== window.navigator.userAgent.indexOf("Mac") && (u = "Mac/iOS");
          -1 !== window.navigator.userAgent.indexOf("X11") && (u = "Mac/iOS");
          -1 !== window.navigator.userAgent.indexOf("Linux") && (u = "Linux");
        })(),
        (c = !0),
        l.forEach((e) =>
          Object(r.a)(this, void 0, void 0, function* () {
            yield p(e);
          })
        );
    }
    function d(e = {}) {
      p(Object.assign(Object.assign({}, e), { event: "pageview" }));
    }
    function p(e) {
      return Object(r.a)(this, void 0, void 0, function* () {
        c || l.push(e);
        try {
          const t = Date.now(),
            n = yield m(),
            a = yield n.load(),
            c = yield a.get(),
            { event: l } = e;
          delete e.event;
          const h = {
              ip: (yield (function () {
                return Object(r.a)(this, void 0, void 0, function* () {
                  return fetch("/getip/", {
                    method: "GET",
                    headers: {
                      Accept: "application/json",
                      "Content-Type": "application/json",
                    },
                  })
                    .then((e) => e.json())
                    .then((e) => (1 === e.Result ? e.data : {}))
                    .catch(() => ({}));
                });
              })()).ip,
              ostype: u,
              actiontime: t,
              category: i,
              appname: o,
              event: l,
              properties: Object.assign(
                {
                  source: "1",
                  evn: "pn",
                  chain_name: localStorage.getItem("_netName") || "",
                  chain_id: localStorage.getItem("_netId") || "",
                  account: localStorage.getItem("_account") || "",
                  language: navigator.language,
                  local_timestamp: t,
                  time_zone_offset: `GMT+${
                    new Date().getTimezoneOffset() / -60
                  }:00`,
                  visitor_id: c.visitorId,
                  user_agent: navigator.userAgent,
                  href: window.location.href,
                },
                e
              ),
            },
            d = JSON.stringify(h);
          yield fetch(s + "/report/log/async", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ topic: "tz_block", sign: f(d), msg: d }),
          });
        } catch (e) {
          console.error(e);
        }
      });
    }
    function f(e) {
      return e.length <= 128
        ? Object(a.sha256)(e)
        : Object(a.sha256)(
            e.substring(0, 64) + e.substring(e.length - 64, e.length)
          );
    }
    function m() {
      return new window.Promise((e) => {
        if (window.FingerprintJS) return void e(window.FingerprintJS);
        const t = document.createElement("script");
        (t.onload = () => {
          e(window.FingerprintJS);
        }),
          (t.src = "/vid.js"),
          document.head.appendChild(t);
      });
    }
    function g() {
      return Object(r.a)(this, void 0, void 0, function* () {
        const e = yield m(),
          t = yield e.load();
        return (yield t.get()).visitorId;
      });
    }
  },
  function (e, t, n) {
    "use strict";
    var r = n(3),
      a = n(0),
      o = n.n(a),
      i = n(8);
    let s = class extends o.a.Component {
      render() {
        const { id: e, defaultMessage: t = e, params: n } = this.props,
          { getMessage: r } = this.props.locale;
        return r(e, this.props.locale.message, n, t);
      }
    };
    (s = Object(r.b)([Object(i.b)("locale"), i.c], s)), (t.a = s);
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var r = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable;
    function i(e) {
      if (null == e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, n = 0; n < 10; n++)
          t["_" + String.fromCharCode(n)] = n;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var r = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            r[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var n, s, c = i(e), l = 1; l < arguments.length; l++) {
            for (var u in (n = Object(arguments[l])))
              a.call(n, u) && (c[u] = n[u]);
            if (r) {
              s = r(n);
              for (var h = 0; h < s.length; h++)
                o.call(n, s[h]) && (c[s[h]] = n[s[h]]);
            }
          }
          return c;
        };
  },
  ,
  function (e, t, n) {
    var r = n(71);
    (e.exports = function (e, t) {
      (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        r(e, t);
    }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  function (e, t, n) {
    var r = n(104);
    (e.exports = p),
      (e.exports.parse = o),
      (e.exports.compile = function (e, t) {
        return s(o(e, t), t);
      }),
      (e.exports.tokensToFunction = s),
      (e.exports.tokensToRegExp = d);
    var a = new RegExp(
      [
        "(\\\\.)",
        "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
      ].join("|"),
      "g"
    );
    function o(e, t) {
      for (
        var n, r = [], o = 0, i = 0, s = "", u = (t && t.delimiter) || "/";
        null != (n = a.exec(e));

      ) {
        var h = n[0],
          d = n[1],
          p = n.index;
        if (((s += e.slice(i, p)), (i = p + h.length), d)) s += d[1];
        else {
          var f = e[i],
            m = n[2],
            g = n[3],
            v = n[4],
            y = n[5],
            b = n[6],
            w = n[7];
          s && (r.push(s), (s = ""));
          var O = null != m && null != f && f !== m,
            _ = "+" === b || "*" === b,
            k = "?" === b || "*" === b,
            T = n[2] || u,
            A = v || y;
          r.push({
            name: g || o++,
            prefix: m || "",
            delimiter: T,
            optional: k,
            repeat: _,
            partial: O,
            asterisk: !!w,
            pattern: A ? l(A) : w ? ".*" : "[^" + c(T) + "]+?",
          });
        }
      }
      return i < e.length && (s += e.substr(i)), s && r.push(s), r;
    }
    function i(e) {
      return encodeURI(e).replace(/[\/?#]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
      });
    }
    function s(e, t) {
      for (var n = new Array(e.length), a = 0; a < e.length; a++)
        "object" == typeof e[a] &&
          (n[a] = new RegExp("^(?:" + e[a].pattern + ")$", h(t)));
      return function (t, a) {
        for (
          var o = "",
            s = t || {},
            c = (a || {}).pretty ? i : encodeURIComponent,
            l = 0;
          l < e.length;
          l++
        ) {
          var u = e[l];
          if ("string" != typeof u) {
            var h,
              d = s[u.name];
            if (null == d) {
              if (u.optional) {
                u.partial && (o += u.prefix);
                continue;
              }
              throw new TypeError('Expected "' + u.name + '" to be defined');
            }
            if (r(d)) {
              if (!u.repeat)
                throw new TypeError(
                  'Expected "' +
                    u.name +
                    '" to not repeat, but received `' +
                    JSON.stringify(d) +
                    "`"
                );
              if (0 === d.length) {
                if (u.optional) continue;
                throw new TypeError(
                  'Expected "' + u.name + '" to not be empty'
                );
              }
              for (var p = 0; p < d.length; p++) {
                if (((h = c(d[p])), !n[l].test(h)))
                  throw new TypeError(
                    'Expected all "' +
                      u.name +
                      '" to match "' +
                      u.pattern +
                      '", but received `' +
                      JSON.stringify(h) +
                      "`"
                  );
                o += (0 === p ? u.prefix : u.delimiter) + h;
              }
            } else {
              if (
                ((h = u.asterisk
                  ? encodeURI(d).replace(/[?#]/g, function (e) {
                      return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                    })
                  : c(d)),
                !n[l].test(h))
              )
                throw new TypeError(
                  'Expected "' +
                    u.name +
                    '" to match "' +
                    u.pattern +
                    '", but received "' +
                    h +
                    '"'
                );
              o += u.prefix + h;
            }
          } else o += u;
        }
        return o;
      };
    }
    function c(e) {
      return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
    }
    function l(e) {
      return e.replace(/([=!:$\/()])/g, "\\$1");
    }
    function u(e, t) {
      return (e.keys = t), e;
    }
    function h(e) {
      return e && e.sensitive ? "" : "i";
    }
    function d(e, t, n) {
      r(t) || ((n = t || n), (t = []));
      for (
        var a = (n = n || {}).strict, o = !1 !== n.end, i = "", s = 0;
        s < e.length;
        s++
      ) {
        var l = e[s];
        if ("string" == typeof l) i += c(l);
        else {
          var d = c(l.prefix),
            p = "(?:" + l.pattern + ")";
          t.push(l),
            l.repeat && (p += "(?:" + d + p + ")*"),
            (i += p =
              l.optional
                ? l.partial
                  ? d + "(" + p + ")?"
                  : "(?:" + d + "(" + p + "))?"
                : d + "(" + p + ")");
        }
      }
      var f = c(n.delimiter || "/"),
        m = i.slice(-f.length) === f;
      return (
        a || (i = (m ? i.slice(0, -f.length) : i) + "(?:" + f + "(?=$))?"),
        (i += o ? "$" : a && m ? "" : "(?=" + f + "|$)"),
        u(new RegExp("^" + i, h(n)), t)
      );
    }
    function p(e, t, n) {
      return (
        r(t) || ((n = t || n), (t = [])),
        (n = n || {}),
        e instanceof RegExp
          ? (function (e, t) {
              var n = e.source.match(/\((?!\?)/g);
              if (n)
                for (var r = 0; r < n.length; r++)
                  t.push({
                    name: r,
                    prefix: null,
                    delimiter: null,
                    optional: !1,
                    repeat: !1,
                    partial: !1,
                    asterisk: !1,
                    pattern: null,
                  });
              return u(e, t);
            })(e, t)
          : r(e)
          ? (function (e, t, n) {
              for (var r = [], a = 0; a < e.length; a++)
                r.push(p(e[a], t, n).source);
              return u(new RegExp("(?:" + r.join("|") + ")", h(n)), t);
            })(e, t, n)
          : (function (e, t, n) {
              return d(o(e, n), t, n);
            })(e, t, n)
      );
    }
  },
  function (e, t, n) {
    var r, a;
    /* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
     * @license MIT */ void 0 ===
      (a =
        "function" ==
        typeof (r = function () {
          var e,
            t,
            n = { version: "0.2.0" },
            r = (n.settings = {
              minimum: 0.08,
              easing: "ease",
              positionUsing: "",
              speed: 200,
              trickle: !0,
              trickleRate: 0.02,
              trickleSpeed: 800,
              showSpinner: !0,
              barSelector: '[role="bar"]',
              spinnerSelector: '[role="spinner"]',
              parent: "body",
              template:
                '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
            });
          function a(e, t, n) {
            return e < t ? t : e > n ? n : e;
          }
          function o(e) {
            return 100 * (-1 + e);
          }
          (n.configure = function (e) {
            var t, n;
            for (t in e)
              void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
            return this;
          }),
            (n.status = null),
            (n.set = function (e) {
              var t = n.isStarted();
              (e = a(e, r.minimum, 1)), (n.status = 1 === e ? null : e);
              var c = n.render(!t),
                l = c.querySelector(r.barSelector),
                u = r.speed,
                h = r.easing;
              return (
                c.offsetWidth,
                i(function (t) {
                  "" === r.positionUsing &&
                    (r.positionUsing = n.getPositioningCSS()),
                    s(
                      l,
                      (function (e, t, n) {
                        var a;
                        return (
                          ((a =
                            "translate3d" === r.positionUsing
                              ? { transform: "translate3d(" + o(e) + "%,0,0)" }
                              : "translate" === r.positionUsing
                              ? { transform: "translate(" + o(e) + "%,0)" }
                              : { "margin-left": o(e) + "%" }).transition =
                            "all " + t + "ms " + n),
                          a
                        );
                      })(e, u, h)
                    ),
                    1 === e
                      ? (s(c, { transition: "none", opacity: 1 }),
                        c.offsetWidth,
                        setTimeout(function () {
                          s(c, {
                            transition: "all " + u + "ms linear",
                            opacity: 0,
                          }),
                            setTimeout(function () {
                              n.remove(), t();
                            }, u);
                        }, u))
                      : setTimeout(t, u);
                }),
                this
              );
            }),
            (n.isStarted = function () {
              return "number" == typeof n.status;
            }),
            (n.start = function () {
              n.status || n.set(0);
              var e = function () {
                setTimeout(function () {
                  n.status && (n.trickle(), e());
                }, r.trickleSpeed);
              };
              return r.trickle && e(), this;
            }),
            (n.done = function (e) {
              return e || n.status
                ? n.inc(0.3 + 0.5 * Math.random()).set(1)
                : this;
            }),
            (n.inc = function (e) {
              var t = n.status;
              return t
                ? ("number" != typeof e &&
                    (e = (1 - t) * a(Math.random() * t, 0.1, 0.95)),
                  (t = a(t + e, 0, 0.994)),
                  n.set(t))
                : n.start();
            }),
            (n.trickle = function () {
              return n.inc(Math.random() * r.trickleRate);
            }),
            (e = 0),
            (t = 0),
            (n.promise = function (r) {
              return r && "resolved" !== r.state()
                ? (0 === t && n.start(),
                  e++,
                  t++,
                  r.always(function () {
                    0 == --t ? ((e = 0), n.done()) : n.set((e - t) / e);
                  }),
                  this)
                : this;
            }),
            (n.render = function (e) {
              if (n.isRendered()) return document.getElementById("nprogress");
              l(document.documentElement, "nprogress-busy");
              var t = document.createElement("div");
              (t.id = "nprogress"), (t.innerHTML = r.template);
              var a,
                i = t.querySelector(r.barSelector),
                c = e ? "-100" : o(n.status || 0),
                u = document.querySelector(r.parent);
              return (
                s(i, {
                  transition: "all 0 linear",
                  transform: "translate3d(" + c + "%,0,0)",
                }),
                r.showSpinner ||
                  ((a = t.querySelector(r.spinnerSelector)) && d(a)),
                u != document.body && l(u, "nprogress-custom-parent"),
                u.appendChild(t),
                t
              );
            }),
            (n.remove = function () {
              u(document.documentElement, "nprogress-busy"),
                u(document.querySelector(r.parent), "nprogress-custom-parent");
              var e = document.getElementById("nprogress");
              e && d(e);
            }),
            (n.isRendered = function () {
              return !!document.getElementById("nprogress");
            }),
            (n.getPositioningCSS = function () {
              var e = document.body.style,
                t =
                  "WebkitTransform" in e
                    ? "Webkit"
                    : "MozTransform" in e
                    ? "Moz"
                    : "msTransform" in e
                    ? "ms"
                    : "OTransform" in e
                    ? "O"
                    : "";
              return t + "Perspective" in e
                ? "translate3d"
                : t + "Transform" in e
                ? "translate"
                : "margin";
            });
          var i = (function () {
              var e = [];
              function t() {
                var n = e.shift();
                n && n(t);
              }
              return function (n) {
                e.push(n), 1 == e.length && t();
              };
            })(),
            s = (function () {
              var e = ["Webkit", "O", "Moz", "ms"],
                t = {};
              function n(n) {
                return (
                  (n = n
                    .replace(/^-ms-/, "ms-")
                    .replace(/-([\da-z])/gi, function (e, t) {
                      return t.toUpperCase();
                    })),
                  t[n] ||
                    (t[n] = (function (t) {
                      var n = document.body.style;
                      if (t in n) return t;
                      for (
                        var r,
                          a = e.length,
                          o = t.charAt(0).toUpperCase() + t.slice(1);
                        a--;

                      )
                        if ((r = e[a] + o) in n) return r;
                      return t;
                    })(n))
                );
              }
              function r(e, t, r) {
                (t = n(t)), (e.style[t] = r);
              }
              return function (e, t) {
                var n,
                  a,
                  o = arguments;
                if (2 == o.length)
                  for (n in t)
                    void 0 !== (a = t[n]) && t.hasOwnProperty(n) && r(e, n, a);
                else r(e, o[1], o[2]);
              };
            })();
          function c(e, t) {
            return (
              ("string" == typeof e ? e : h(e)).indexOf(" " + t + " ") >= 0
            );
          }
          function l(e, t) {
            var n = h(e),
              r = n + t;
            c(n, t) || (e.className = r.substring(1));
          }
          function u(e, t) {
            var n,
              r = h(e);
            c(e, t) &&
              ((n = r.replace(" " + t + " ", " ")),
              (e.className = n.substring(1, n.length - 1)));
          }
          function h(e) {
            return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
          }
          function d(e) {
            e && e.parentNode && e.parentNode.removeChild(e);
          }
          return n;
        })
          ? r.call(t, n, t, e)
          : r) || (e.exports = a);
  },
  function (module, exports, __webpack_require__) {
    (function (process, global) {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /**
       * [js-sha256]{@link https://github.com/emn178/js-sha256}
       *
       * @version 0.9.0
       * @author Chen, Yi-Cyuan [emn178@gmail.com]
       * @copyright Chen, Yi-Cyuan 2014-2017
       * @license MIT
       */ !(function () {
        "use strict";
        var ERROR = "input is invalid type",
          WINDOW = "object" == typeof window,
          root = WINDOW ? window : {};
        root.JS_SHA256_NO_WINDOW && (WINDOW = !1);
        var WEB_WORKER = !WINDOW && "object" == typeof self,
          NODE_JS =
            !root.JS_SHA256_NO_NODE_JS &&
            "object" == typeof process &&
            process.versions &&
            process.versions.node;
        NODE_JS ? (root = global) : WEB_WORKER && (root = self);
        var COMMON_JS =
            !root.JS_SHA256_NO_COMMON_JS &&
            "object" == typeof module &&
            module.exports,
          AMD = __webpack_require__(120),
          ARRAY_BUFFER =
            !root.JS_SHA256_NO_ARRAY_BUFFER &&
            "undefined" != typeof ArrayBuffer,
          HEX_CHARS = "0123456789abcdef".split(""),
          EXTRA = [-2147483648, 8388608, 32768, 128],
          SHIFT = [24, 16, 8, 0],
          K = [
            1116352408, 1899447441, 3049323471, 3921009573, 961987163,
            1508970993, 2453635748, 2870763221, 3624381080, 310598401,
            607225278, 1426881987, 1925078388, 2162078206, 2614888103,
            3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983,
            1249150122, 1555081692, 1996064986, 2554220882, 2821834349,
            2952996808, 3210313671, 3336571891, 3584528711, 113926993,
            338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700,
            1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
            3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
            275423344, 430227734, 506948616, 659060556, 883997877, 958139571,
            1322822218, 1537002063, 1747873779, 1955562222, 2024104815,
            2227730452, 2361852424, 2428436474, 2756734187, 3204031479,
            3329325298,
          ],
          OUTPUT_TYPES = ["hex", "array", "digest", "arrayBuffer"],
          blocks = [];
        (!root.JS_SHA256_NO_NODE_JS && Array.isArray) ||
          (Array.isArray = function (e) {
            return "[object Array]" === Object.prototype.toString.call(e);
          }),
          !ARRAY_BUFFER ||
            (!root.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW && ArrayBuffer.isView) ||
            (ArrayBuffer.isView = function (e) {
              return (
                "object" == typeof e &&
                e.buffer &&
                e.buffer.constructor === ArrayBuffer
              );
            });
        var createOutputMethod = function (e, t) {
            return function (n) {
              return new Sha256(t, !0).update(n)[e]();
            };
          },
          createMethod = function (e) {
            var t = createOutputMethod("hex", e);
            NODE_JS && (t = nodeWrap(t, e)),
              (t.create = function () {
                return new Sha256(e);
              }),
              (t.update = function (e) {
                return t.create().update(e);
              });
            for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
              var r = OUTPUT_TYPES[n];
              t[r] = createOutputMethod(r, e);
            }
            return t;
          },
          nodeWrap = function (method, is224) {
            var crypto = eval("require('crypto')"),
              Buffer = eval("require('buffer').Buffer"),
              algorithm = is224 ? "sha224" : "sha256",
              nodeMethod = function (e) {
                if ("string" == typeof e)
                  return crypto
                    .createHash(algorithm)
                    .update(e, "utf8")
                    .digest("hex");
                if (null == e) throw new Error(ERROR);
                return (
                  e.constructor === ArrayBuffer && (e = new Uint8Array(e)),
                  Array.isArray(e) ||
                  ArrayBuffer.isView(e) ||
                  e.constructor === Buffer
                    ? crypto
                        .createHash(algorithm)
                        .update(new Buffer(e))
                        .digest("hex")
                    : method(e)
                );
              };
            return nodeMethod;
          },
          createHmacOutputMethod = function (e, t) {
            return function (n, r) {
              return new HmacSha256(n, t, !0).update(r)[e]();
            };
          },
          createHmacMethod = function (e) {
            var t = createHmacOutputMethod("hex", e);
            (t.create = function (t) {
              return new HmacSha256(t, e);
            }),
              (t.update = function (e, n) {
                return t.create(e).update(n);
              });
            for (var n = 0; n < OUTPUT_TYPES.length; ++n) {
              var r = OUTPUT_TYPES[n];
              t[r] = createHmacOutputMethod(r, e);
            }
            return t;
          };
        function Sha256(e, t) {
          t
            ? ((blocks[0] =
                blocks[16] =
                blocks[1] =
                blocks[2] =
                blocks[3] =
                blocks[4] =
                blocks[5] =
                blocks[6] =
                blocks[7] =
                blocks[8] =
                blocks[9] =
                blocks[10] =
                blocks[11] =
                blocks[12] =
                blocks[13] =
                blocks[14] =
                blocks[15] =
                  0),
              (this.blocks = blocks))
            : (this.blocks = [
                0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
              ]),
            e
              ? ((this.h0 = 3238371032),
                (this.h1 = 914150663),
                (this.h2 = 812702999),
                (this.h3 = 4144912697),
                (this.h4 = 4290775857),
                (this.h5 = 1750603025),
                (this.h6 = 1694076839),
                (this.h7 = 3204075428))
              : ((this.h0 = 1779033703),
                (this.h1 = 3144134277),
                (this.h2 = 1013904242),
                (this.h3 = 2773480762),
                (this.h4 = 1359893119),
                (this.h5 = 2600822924),
                (this.h6 = 528734635),
                (this.h7 = 1541459225)),
            (this.block = this.start = this.bytes = this.hBytes = 0),
            (this.finalized = this.hashed = !1),
            (this.first = !0),
            (this.is224 = e);
        }
        function HmacSha256(e, t, n) {
          var r,
            a = typeof e;
          if ("string" === a) {
            var o,
              i = [],
              s = e.length,
              c = 0;
            for (r = 0; r < s; ++r)
              (o = e.charCodeAt(r)) < 128
                ? (i[c++] = o)
                : o < 2048
                ? ((i[c++] = 192 | (o >> 6)), (i[c++] = 128 | (63 & o)))
                : o < 55296 || o >= 57344
                ? ((i[c++] = 224 | (o >> 12)),
                  (i[c++] = 128 | ((o >> 6) & 63)),
                  (i[c++] = 128 | (63 & o)))
                : ((o =
                    65536 + (((1023 & o) << 10) | (1023 & e.charCodeAt(++r)))),
                  (i[c++] = 240 | (o >> 18)),
                  (i[c++] = 128 | ((o >> 12) & 63)),
                  (i[c++] = 128 | ((o >> 6) & 63)),
                  (i[c++] = 128 | (63 & o)));
            e = i;
          } else {
            if ("object" !== a) throw new Error(ERROR);
            if (null === e) throw new Error(ERROR);
            if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
              e = new Uint8Array(e);
            else if (
              !(Array.isArray(e) || (ARRAY_BUFFER && ArrayBuffer.isView(e)))
            )
              throw new Error(ERROR);
          }
          e.length > 64 && (e = new Sha256(t, !0).update(e).array());
          var l = [],
            u = [];
          for (r = 0; r < 64; ++r) {
            var h = e[r] || 0;
            (l[r] = 92 ^ h), (u[r] = 54 ^ h);
          }
          Sha256.call(this, t, n),
            this.update(u),
            (this.oKeyPad = l),
            (this.inner = !0),
            (this.sharedMemory = n);
        }
        (Sha256.prototype.update = function (e) {
          if (!this.finalized) {
            var t,
              n = typeof e;
            if ("string" !== n) {
              if ("object" !== n) throw new Error(ERROR);
              if (null === e) throw new Error(ERROR);
              if (ARRAY_BUFFER && e.constructor === ArrayBuffer)
                e = new Uint8Array(e);
              else if (
                !(Array.isArray(e) || (ARRAY_BUFFER && ArrayBuffer.isView(e)))
              )
                throw new Error(ERROR);
              t = !0;
            }
            for (var r, a, o = 0, i = e.length, s = this.blocks; o < i; ) {
              if (
                (this.hashed &&
                  ((this.hashed = !1),
                  (s[0] = this.block),
                  (s[16] =
                    s[1] =
                    s[2] =
                    s[3] =
                    s[4] =
                    s[5] =
                    s[6] =
                    s[7] =
                    s[8] =
                    s[9] =
                    s[10] =
                    s[11] =
                    s[12] =
                    s[13] =
                    s[14] =
                    s[15] =
                      0)),
                t)
              )
                for (a = this.start; o < i && a < 64; ++o)
                  s[a >> 2] |= e[o] << SHIFT[3 & a++];
              else
                for (a = this.start; o < i && a < 64; ++o)
                  (r = e.charCodeAt(o)) < 128
                    ? (s[a >> 2] |= r << SHIFT[3 & a++])
                    : r < 2048
                    ? ((s[a >> 2] |= (192 | (r >> 6)) << SHIFT[3 & a++]),
                      (s[a >> 2] |= (128 | (63 & r)) << SHIFT[3 & a++]))
                    : r < 55296 || r >= 57344
                    ? ((s[a >> 2] |= (224 | (r >> 12)) << SHIFT[3 & a++]),
                      (s[a >> 2] |= (128 | ((r >> 6) & 63)) << SHIFT[3 & a++]),
                      (s[a >> 2] |= (128 | (63 & r)) << SHIFT[3 & a++]))
                    : ((r =
                        65536 +
                        (((1023 & r) << 10) | (1023 & e.charCodeAt(++o)))),
                      (s[a >> 2] |= (240 | (r >> 18)) << SHIFT[3 & a++]),
                      (s[a >> 2] |= (128 | ((r >> 12) & 63)) << SHIFT[3 & a++]),
                      (s[a >> 2] |= (128 | ((r >> 6) & 63)) << SHIFT[3 & a++]),
                      (s[a >> 2] |= (128 | (63 & r)) << SHIFT[3 & a++]));
              (this.lastByteIndex = a),
                (this.bytes += a - this.start),
                a >= 64
                  ? ((this.block = s[16]),
                    (this.start = a - 64),
                    this.hash(),
                    (this.hashed = !0))
                  : (this.start = a);
            }
            return (
              this.bytes > 4294967295 &&
                ((this.hBytes += (this.bytes / 4294967296) << 0),
                (this.bytes = this.bytes % 4294967296)),
              this
            );
          }
        }),
          (Sha256.prototype.finalize = function () {
            if (!this.finalized) {
              this.finalized = !0;
              var e = this.blocks,
                t = this.lastByteIndex;
              (e[16] = this.block),
                (e[t >> 2] |= EXTRA[3 & t]),
                (this.block = e[16]),
                t >= 56 &&
                  (this.hashed || this.hash(),
                  (e[0] = this.block),
                  (e[16] =
                    e[1] =
                    e[2] =
                    e[3] =
                    e[4] =
                    e[5] =
                    e[6] =
                    e[7] =
                    e[8] =
                    e[9] =
                    e[10] =
                    e[11] =
                    e[12] =
                    e[13] =
                    e[14] =
                    e[15] =
                      0)),
                (e[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
                (e[15] = this.bytes << 3),
                this.hash();
            }
          }),
          (Sha256.prototype.hash = function () {
            var e,
              t,
              n,
              r,
              a,
              o,
              i,
              s,
              c,
              l = this.h0,
              u = this.h1,
              h = this.h2,
              d = this.h3,
              p = this.h4,
              f = this.h5,
              m = this.h6,
              g = this.h7,
              v = this.blocks;
            for (e = 16; e < 64; ++e)
              (t =
                (((a = v[e - 15]) >>> 7) | (a << 25)) ^
                ((a >>> 18) | (a << 14)) ^
                (a >>> 3)),
                (n =
                  (((a = v[e - 2]) >>> 17) | (a << 15)) ^
                  ((a >>> 19) | (a << 13)) ^
                  (a >>> 10)),
                (v[e] = (v[e - 16] + t + v[e - 7] + n) << 0);
            for (c = u & h, e = 0; e < 64; e += 4)
              this.first
                ? (this.is224
                    ? ((o = 300032),
                      (g = ((a = v[0] - 1413257819) - 150054599) << 0),
                      (d = (a + 24177077) << 0))
                    : ((o = 704751109),
                      (g = ((a = v[0] - 210244248) - 1521486534) << 0),
                      (d = (a + 143694565) << 0)),
                  (this.first = !1))
                : ((t =
                    ((l >>> 2) | (l << 30)) ^
                    ((l >>> 13) | (l << 19)) ^
                    ((l >>> 22) | (l << 10))),
                  (r = (o = l & u) ^ (l & h) ^ c),
                  (g =
                    (d +
                      (a =
                        g +
                        (n =
                          ((p >>> 6) | (p << 26)) ^
                          ((p >>> 11) | (p << 21)) ^
                          ((p >>> 25) | (p << 7))) +
                        ((p & f) ^ (~p & m)) +
                        K[e] +
                        v[e])) <<
                    0),
                  (d = (a + (t + r)) << 0)),
                (t =
                  ((d >>> 2) | (d << 30)) ^
                  ((d >>> 13) | (d << 19)) ^
                  ((d >>> 22) | (d << 10))),
                (r = (i = d & l) ^ (d & u) ^ o),
                (m =
                  (h +
                    (a =
                      m +
                      (n =
                        ((g >>> 6) | (g << 26)) ^
                        ((g >>> 11) | (g << 21)) ^
                        ((g >>> 25) | (g << 7))) +
                      ((g & p) ^ (~g & f)) +
                      K[e + 1] +
                      v[e + 1])) <<
                  0),
                (t =
                  (((h = (a + (t + r)) << 0) >>> 2) | (h << 30)) ^
                  ((h >>> 13) | (h << 19)) ^
                  ((h >>> 22) | (h << 10))),
                (r = (s = h & d) ^ (h & l) ^ i),
                (f =
                  (u +
                    (a =
                      f +
                      (n =
                        ((m >>> 6) | (m << 26)) ^
                        ((m >>> 11) | (m << 21)) ^
                        ((m >>> 25) | (m << 7))) +
                      ((m & g) ^ (~m & p)) +
                      K[e + 2] +
                      v[e + 2])) <<
                  0),
                (t =
                  (((u = (a + (t + r)) << 0) >>> 2) | (u << 30)) ^
                  ((u >>> 13) | (u << 19)) ^
                  ((u >>> 22) | (u << 10))),
                (r = (c = u & h) ^ (u & d) ^ s),
                (p =
                  (l +
                    (a =
                      p +
                      (n =
                        ((f >>> 6) | (f << 26)) ^
                        ((f >>> 11) | (f << 21)) ^
                        ((f >>> 25) | (f << 7))) +
                      ((f & m) ^ (~f & g)) +
                      K[e + 3] +
                      v[e + 3])) <<
                  0),
                (l = (a + (t + r)) << 0);
            (this.h0 = (this.h0 + l) << 0),
              (this.h1 = (this.h1 + u) << 0),
              (this.h2 = (this.h2 + h) << 0),
              (this.h3 = (this.h3 + d) << 0),
              (this.h4 = (this.h4 + p) << 0),
              (this.h5 = (this.h5 + f) << 0),
              (this.h6 = (this.h6 + m) << 0),
              (this.h7 = (this.h7 + g) << 0);
          }),
          (Sha256.prototype.hex = function () {
            this.finalize();
            var e = this.h0,
              t = this.h1,
              n = this.h2,
              r = this.h3,
              a = this.h4,
              o = this.h5,
              i = this.h6,
              s = this.h7,
              c =
                HEX_CHARS[(e >> 28) & 15] +
                HEX_CHARS[(e >> 24) & 15] +
                HEX_CHARS[(e >> 20) & 15] +
                HEX_CHARS[(e >> 16) & 15] +
                HEX_CHARS[(e >> 12) & 15] +
                HEX_CHARS[(e >> 8) & 15] +
                HEX_CHARS[(e >> 4) & 15] +
                HEX_CHARS[15 & e] +
                HEX_CHARS[(t >> 28) & 15] +
                HEX_CHARS[(t >> 24) & 15] +
                HEX_CHARS[(t >> 20) & 15] +
                HEX_CHARS[(t >> 16) & 15] +
                HEX_CHARS[(t >> 12) & 15] +
                HEX_CHARS[(t >> 8) & 15] +
                HEX_CHARS[(t >> 4) & 15] +
                HEX_CHARS[15 & t] +
                HEX_CHARS[(n >> 28) & 15] +
                HEX_CHARS[(n >> 24) & 15] +
                HEX_CHARS[(n >> 20) & 15] +
                HEX_CHARS[(n >> 16) & 15] +
                HEX_CHARS[(n >> 12) & 15] +
                HEX_CHARS[(n >> 8) & 15] +
                HEX_CHARS[(n >> 4) & 15] +
                HEX_CHARS[15 & n] +
                HEX_CHARS[(r >> 28) & 15] +
                HEX_CHARS[(r >> 24) & 15] +
                HEX_CHARS[(r >> 20) & 15] +
                HEX_CHARS[(r >> 16) & 15] +
                HEX_CHARS[(r >> 12) & 15] +
                HEX_CHARS[(r >> 8) & 15] +
                HEX_CHARS[(r >> 4) & 15] +
                HEX_CHARS[15 & r] +
                HEX_CHARS[(a >> 28) & 15] +
                HEX_CHARS[(a >> 24) & 15] +
                HEX_CHARS[(a >> 20) & 15] +
                HEX_CHARS[(a >> 16) & 15] +
                HEX_CHARS[(a >> 12) & 15] +
                HEX_CHARS[(a >> 8) & 15] +
                HEX_CHARS[(a >> 4) & 15] +
                HEX_CHARS[15 & a] +
                HEX_CHARS[(o >> 28) & 15] +
                HEX_CHARS[(o >> 24) & 15] +
                HEX_CHARS[(o >> 20) & 15] +
                HEX_CHARS[(o >> 16) & 15] +
                HEX_CHARS[(o >> 12) & 15] +
                HEX_CHARS[(o >> 8) & 15] +
                HEX_CHARS[(o >> 4) & 15] +
                HEX_CHARS[15 & o] +
                HEX_CHARS[(i >> 28) & 15] +
                HEX_CHARS[(i >> 24) & 15] +
                HEX_CHARS[(i >> 20) & 15] +
                HEX_CHARS[(i >> 16) & 15] +
                HEX_CHARS[(i >> 12) & 15] +
                HEX_CHARS[(i >> 8) & 15] +
                HEX_CHARS[(i >> 4) & 15] +
                HEX_CHARS[15 & i];
            return (
              this.is224 ||
                (c +=
                  HEX_CHARS[(s >> 28) & 15] +
                  HEX_CHARS[(s >> 24) & 15] +
                  HEX_CHARS[(s >> 20) & 15] +
                  HEX_CHARS[(s >> 16) & 15] +
                  HEX_CHARS[(s >> 12) & 15] +
                  HEX_CHARS[(s >> 8) & 15] +
                  HEX_CHARS[(s >> 4) & 15] +
                  HEX_CHARS[15 & s]),
              c
            );
          }),
          (Sha256.prototype.toString = Sha256.prototype.hex),
          (Sha256.prototype.digest = function () {
            this.finalize();
            var e = this.h0,
              t = this.h1,
              n = this.h2,
              r = this.h3,
              a = this.h4,
              o = this.h5,
              i = this.h6,
              s = this.h7,
              c = [
                (e >> 24) & 255,
                (e >> 16) & 255,
                (e >> 8) & 255,
                255 & e,
                (t >> 24) & 255,
                (t >> 16) & 255,
                (t >> 8) & 255,
                255 & t,
                (n >> 24) & 255,
                (n >> 16) & 255,
                (n >> 8) & 255,
                255 & n,
                (r >> 24) & 255,
                (r >> 16) & 255,
                (r >> 8) & 255,
                255 & r,
                (a >> 24) & 255,
                (a >> 16) & 255,
                (a >> 8) & 255,
                255 & a,
                (o >> 24) & 255,
                (o >> 16) & 255,
                (o >> 8) & 255,
                255 & o,
                (i >> 24) & 255,
                (i >> 16) & 255,
                (i >> 8) & 255,
                255 & i,
              ];
            return (
              this.is224 ||
                c.push(
                  (s >> 24) & 255,
                  (s >> 16) & 255,
                  (s >> 8) & 255,
                  255 & s
                ),
              c
            );
          }),
          (Sha256.prototype.array = Sha256.prototype.digest),
          (Sha256.prototype.arrayBuffer = function () {
            this.finalize();
            var e = new ArrayBuffer(this.is224 ? 28 : 32),
              t = new DataView(e);
            return (
              t.setUint32(0, this.h0),
              t.setUint32(4, this.h1),
              t.setUint32(8, this.h2),
              t.setUint32(12, this.h3),
              t.setUint32(16, this.h4),
              t.setUint32(20, this.h5),
              t.setUint32(24, this.h6),
              this.is224 || t.setUint32(28, this.h7),
              e
            );
          }),
          (HmacSha256.prototype = new Sha256()),
          (HmacSha256.prototype.finalize = function () {
            if ((Sha256.prototype.finalize.call(this), this.inner)) {
              this.inner = !1;
              var e = this.array();
              Sha256.call(this, this.is224, this.sharedMemory),
                this.update(this.oKeyPad),
                this.update(e),
                Sha256.prototype.finalize.call(this);
            }
          });
        var exports = createMethod();
        (exports.sha256 = exports),
          (exports.sha224 = createMethod(!0)),
          (exports.sha256.hmac = createHmacMethod()),
          (exports.sha224.hmac = createHmacMethod(!0)),
          COMMON_JS
            ? (module.exports = exports)
            : ((root.sha256 = exports.sha256),
              (root.sha224 = exports.sha224),
              AMD &&
                ((__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                  return exports;
                }.call(exports, __webpack_require__, exports, module)),
                void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
                  (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)));
      })();
    }.call(this, __webpack_require__(50), __webpack_require__(35)));
  },
  function (e, t) {
    var n,
      r,
      a = (e.exports = {});
    function o() {
      throw new Error("setTimeout has not been defined");
    }
    function i() {
      throw new Error("clearTimeout has not been defined");
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === o || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0);
      try {
        return n(e, 0);
      } catch (t) {
        try {
          return n.call(null, e, 0);
        } catch (t) {
          return n.call(this, e, 0);
        }
      }
    }
    !(function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : o;
      } catch (e) {
        n = o;
      }
      try {
        r = "function" == typeof clearTimeout ? clearTimeout : i;
      } catch (e) {
        r = i;
      }
    })();
    var c,
      l = [],
      u = !1,
      h = -1;
    function d() {
      u &&
        c &&
        ((u = !1), c.length ? (l = c.concat(l)) : (h = -1), l.length && p());
    }
    function p() {
      if (!u) {
        var e = s(d);
        u = !0;
        for (var t = l.length; t; ) {
          for (c = l, l = []; ++h < t; ) c && c[h].run();
          (h = -1), (t = l.length);
        }
        (c = null),
          (u = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e);
            if ((r === i || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e);
            try {
              r(e);
            } catch (t) {
              try {
                return r.call(null, e);
              } catch (t) {
                return r.call(this, e);
              }
            }
          })(e);
      }
    }
    function f(e, t) {
      (this.fun = e), (this.array = t);
    }
    function m() {}
    (a.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      l.push(new f(e, t)), 1 !== l.length || u || s(p);
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array);
      }),
      (a.title = "browser"),
      (a.browser = !0),
      (a.env = {}),
      (a.argv = []),
      (a.version = ""),
      (a.versions = {}),
      (a.on = m),
      (a.addListener = m),
      (a.once = m),
      (a.off = m),
      (a.removeListener = m),
      (a.removeAllListeners = m),
      (a.emit = m),
      (a.prependListener = m),
      (a.prependOnceListener = m),
      (a.listeners = function (e) {
        return [];
      }),
      (a.binding = function (e) {
        throw new Error("process.binding is not supported");
      }),
      (a.cwd = function () {
        return "/";
      }),
      (a.chdir = function (e) {
        throw new Error("process.chdir is not supported");
      }),
      (a.umask = function () {
        return 0;
      });
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = r.createElement("path", {
      d: "M12.617 1.11a1.744 1.744 0 011.726 1.644v14.3l-1.773-1.51-.973-.889-1.062-.928.444 1.464H1.68a1.646 1.646 0 01-1.682-1.644V2.757A1.679 1.679 0 011.685 1.11h10.927zM8.565 4.884h-.02l-.134.133a5.33 5.33 0 012.037 1.021 7.189 7.189 0 00-2.479-.755 6.789 6.789 0 00-1.639 0h-.132a5.891 5.891 0 00-1.861.488c-.309.135-.487.223-.487.223a4.721 4.721 0 012.13-1.021l-.089-.09a3.972 3.972 0 00-2.3.843 10.416 10.416 0 00-1.2 4.662 2.888 2.888 0 002.479 1.2s.265-.354.533-.665a2.621 2.621 0 01-1.423-.932 2.195 2.195 0 01.222.133h.04a.053.053 0 01.04.02.051.051 0 00.04.02c.219.09.437.179.616.266a5.406 5.406 0 001.192.356 6.783 6.783 0 002.126 0 6.107 6.107 0 001.192-.355 9.543 9.543 0 00.925-.489 2.632 2.632 0 01-1.46.932c.219.309.526.664.526.664a3.454 3.454 0 002.563-1.146 10.394 10.394 0 00-1.2-4.662 3.975 3.975 0 00-2.275-.837l.037-.013zM8.68 7.81a.89.89 0 11-.841.891.865.865 0 01.841-.891zm-3.009 0a.89.89 0 11-.844.891.864.864 0 01.844-.891z",
      fill: "#8b8b8b",
    });
    t.default = function (e) {
      return r.createElement("svg", a({ width: 14.343, height: 15.939 }, e), o);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = r.createElement("path", {
      "data-name": "telegram (2)",
      d: "M6.191 13.1l.256-3.9 7.012-6.379c.31-.286-.064-.424-.475-.175L4.328 8.168l-3.744-1.2c-.8-.23-.813-.793.183-1.2L15.349.089c.667-.3 1.306.166 1.05 1.2L13.92 13.1c-.173.839-.676 1.042-1.37.655l-3.78-2.821-1.817 1.779a.964.964 0 01-.762.387z",
      fill: "#8b8b8b",
    });
    t.default = function (e) {
      return r.createElement("svg", a({ width: 16.457, height: 13.943 }, e), o);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = r.createElement(
        "defs",
        null,
        r.createElement(
          "clipPath",
          { id: "twitter_svg__a" },
          r.createElement("path", {
            "data-name": "\\u8DEF\\u5F84 25090",
            d: "M875.481-126.852a3.166 3.166 0 00-2.133 3.184l.033.542-.547-.066a8.887 8.887 0 01-5.205-2.565l-.722-.719-.186.531a3.2 3.2 0 00.678 3.273c.437.464.339.531-.415.254a1.3 1.3 0 00-.514-.122 3.974 3.974 0 00.393 1.482 3.533 3.533 0 001.5 1.415l.536.254-.634.011c-.612 0-.634.011-.568.244a3.308 3.308 0 002.045 1.814l.678.232-.59.354a6.134 6.134 0 01-2.931.818 3.214 3.214 0 00-.9.089 8.355 8.355 0 002.111.973 9.227 9.227 0 007.174-.818 9.614 9.614 0 003.642-4.291 11.4 11.4 0 00.744-3.316c0-.509.033-.575.645-1.183a7.206 7.206 0 00.766-.851c.11-.21.1-.21-.459-.022-.929.332-1.061.288-.6-.21a3.224 3.224 0 00.744-1.183c0-.033-.164.022-.35.122a6.045 6.045 0 01-.962.376l-.59.188-.536-.365a4.442 4.442 0 00-.929-.486 3.736 3.736 0 00-1.918.041z",
            fill: "#8b8b8b",
            clipRule: "evenodd",
          })
        ),
        r.createElement(
          "clipPath",
          { id: "twitter_svg__b" },
          r.createElement("path", {
            "data-name": "\\u8DEF\\u5F84 25089",
            d: "M857-107.729h30.271V-138H857z",
            transform: "translate(-857 138)",
            fill: "#8b8b8b",
          })
        )
      ),
      i = r.createElement(
        "g",
        {
          "data-name": "\\u7EC4 7290",
          transform: "translate(-866 127)",
          clipPath: "url(#twitter_svg__a)",
        },
        r.createElement(
          "g",
          {
            "data-name": "\\u7EC4 7289",
            transform: "translate(858.432 -136.249)",
            clipPath: "url(#twitter_svg__b)",
          },
          r.createElement("path", {
            "data-name": "\\u8DEF\\u5F84 25088",
            d: "M3.363 5.045h23.544v20.934H3.363z",
            fill: "#8b8b8b",
          })
        )
      );
    t.default = function (e) {
      return r.createElement(
        "svg",
        a({ width: 15.135, height: 12.525 }, e),
        o,
        i
      );
    };
  },
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return c;
    });
    var r = n(0),
      a = n.n(r),
      o = n(135),
      i = n(134);
    n(119);
    const s = {};
    class c extends r.PureComponent {
      constructor(e) {
        super(e),
          (this.state = { queue: [] }),
          (this.show = this.show.bind(this)),
          (this.hide = this.hide.bind(this)),
          (s.success = (e, t) =>
            this.show({ type: "success", message: e, delay: t || 3e3 })),
          (s.error = (e, t) =>
            this.show({ type: "error", message: e, delay: t || 3e3 })),
          (s.prompt = (e, t) =>
            this.show({ type: "prompt", message: e, delay: t || 3e3 })),
          (c.success = s.success),
          (c.error = s.error),
          (c.prompt = s.prompt);
      }
      show({ type: e, message: t, delay: n }) {
        t || (t = "Some thing wrong...");
        let r = "Some thing wrong...";
        return (
          "string" == typeof t && (r = t),
          "object" == typeof t &&
            (t.msg || t.message) &&
            (r = t.msg || t.message),
          this.setState(
            { queue: [{ type: e, message: r, delay: n, id: 0 }] },
            () => {
              n > 0 &&
                setTimeout(() => {
                  this.hide(0);
                }, n + 300);
            }
          ),
          0
        );
      }
      hide(e) {
        const t = [];
        for (const n of this.state.queue) n.id !== e && t.push(n);
        this.setState({ queue: t });
      }
      render() {
        return a.a.createElement(
          "div",
          { id: "toast" },
          a.a.createElement(
            o.a,
            null,
            this.state.queue.map((e) =>
              a.a.createElement(
                i.a,
                { key: e.id, timeout: 300, classNames: "toast-item" },
                a.a.createElement(
                  "div",
                  { className: "toast-" + e.type },
                  "success" === e.type
                    ? a.a.createElement(
                        "svg",
                        {
                          style: { marginRight: "20px" },
                          color: "#52c41a",
                          viewBox: "64 64 896 896",
                          focusable: "false",
                          className: "",
                          "data-icon": "check-circle",
                          width: "1.5em",
                          height: "1.5em",
                          fill: "currentColor",
                          "aria-hidden": "true",
                        },
                        a.a.createElement("path", {
                          d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                        }),
                        a.a.createElement("path", {
                          d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                        })
                      )
                    : a.a.createElement(
                        "svg",
                        {
                          style: { marginRight: "20px" },
                          color: "#ff4d4f",
                          viewBox: "64 64 896 896",
                          focusable: "false",
                          className: "",
                          "data-icon": "close-circle",
                          width: "1.5em",
                          height: "1.5em",
                          fill: "currentColor",
                          "aria-hidden": "true",
                        },
                        a.a.createElement("path", {
                          d: "M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z",
                        }),
                        a.a.createElement("path", {
                          d: "M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                        })
                      ),
                  e.message
                )
              )
            )
          )
        );
      }
    }
  },
  ,
  ,
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      return (r =
        Object.setPrototypeOf ||
        function (e, t) {
          return (e.__proto__ = t), e;
        })(e, t);
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.d(t, "a", function () {
      return s;
    });
    var r = n(0),
      a = n.n(r),
      o = n(9);
    const i = (e) =>
        a.a.createElement(o.a, {
          render: ({ staticContext: t }) => (
            t && (t.statusCode = e.code), e.children
          ),
        }),
      s = () =>
        a.a.createElement(
          i,
          { code: 404 },
          a.a.createElement("h1", null, "Not Found")
        );
  },
  function (e, t, n) {
    "use strict";
    var r = n(0),
      a = n.n(r),
      o = n(46),
      i = n.n(o),
      s = n(4),
      c = n.n(s),
      l = n(65),
      u = n.n(l);
    function h(e) {
      var t = [];
      return {
        on: function (e) {
          t.push(e);
        },
        off: function (e) {
          t = t.filter(function (t) {
            return t !== e;
          });
        },
        get: function () {
          return e;
        },
        set: function (n, r) {
          (e = n),
            t.forEach(function (t) {
              return t(e, r);
            });
        },
      };
    }
    var d =
      a.a.createContext ||
      function (e, t) {
        var n,
          a,
          o = "__create-react-context-" + u()() + "__",
          s = (function (e) {
            function n() {
              var t;
              return (
                ((t = e.apply(this, arguments) || this).emitter = h(
                  t.props.value
                )),
                t
              );
            }
            i()(n, e);
            var r = n.prototype;
            return (
              (r.getChildContext = function () {
                var e;
                return ((e = {})[o] = this.emitter), e;
              }),
              (r.componentWillReceiveProps = function (e) {
                if (this.props.value !== e.value) {
                  var n,
                    r = this.props.value,
                    a = e.value;
                  (
                    (o = r) === (i = a)
                      ? 0 !== o || 1 / o == 1 / i
                      : o != o && i != i
                  )
                    ? (n = 0)
                    : ((n = "function" == typeof t ? t(r, a) : 1073741823),
                      0 !== (n |= 0) && this.emitter.set(e.value, n));
                }
                var o, i;
              }),
              (r.render = function () {
                return this.props.children;
              }),
              n
            );
          })(r.Component);
        s.childContextTypes = (((n = {})[o] = c.a.object.isRequired), n);
        var l = (function (t) {
          function n() {
            var e;
            return (
              ((e = t.apply(this, arguments) || this).state = {
                value: e.getValue(),
              }),
              (e.onUpdate = function (t, n) {
                0 != ((0 | e.observedBits) & n) &&
                  e.setState({ value: e.getValue() });
              }),
              e
            );
          }
          i()(n, t);
          var r = n.prototype;
          return (
            (r.componentWillReceiveProps = function (e) {
              var t = e.observedBits;
              this.observedBits = null == t ? 1073741823 : t;
            }),
            (r.componentDidMount = function () {
              this.context[o] && this.context[o].on(this.onUpdate);
              var e = this.props.observedBits;
              this.observedBits = null == e ? 1073741823 : e;
            }),
            (r.componentWillUnmount = function () {
              this.context[o] && this.context[o].off(this.onUpdate);
            }),
            (r.getValue = function () {
              return this.context[o] ? this.context[o].get() : e;
            }),
            (r.render = function () {
              return ((e = this.props.children), Array.isArray(e) ? e[0] : e)(
                this.state.value
              );
              var e;
            }),
            n
          );
        })(r.Component);
        return (
          (l.contextTypes = (((a = {})[o] = c.a.object), a)),
          { Provider: s, Consumer: l }
        );
      };
    t.a = d;
  },
  function (e, t, n) {
    "use strict";
    (function (t) {
      var n = "__global_unique_id__";
      e.exports = function () {
        return (t[n] = (t[n] || 0) + 1);
      };
    }.call(this, n(35)));
  },
  function (e, t, n) {
    var r, a;
    /*!
     * JavaScript Cookie v2.2.1
     * https://github.com/js-cookie/js-cookie
     *
     * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
     * Released under the MIT license
     */ !(function (o) {
      if (
        (void 0 ===
          (a = "function" == typeof (r = o) ? r.call(t, n, t, e) : r) ||
          (e.exports = a),
        !0,
        (e.exports = o()),
        !!0)
      ) {
        var i = window.Cookies,
          s = (window.Cookies = o());
        s.noConflict = function () {
          return (window.Cookies = i), s;
        };
      }
    })(function () {
      function e() {
        for (var e = 0, t = {}; e < arguments.length; e++) {
          var n = arguments[e];
          for (var r in n) t[r] = n[r];
        }
        return t;
      }
      function t(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
      }
      return (function n(r) {
        function a() {}
        function o(t, n, o) {
          if ("undefined" != typeof document) {
            "number" == typeof (o = e({ path: "/" }, a.defaults, o)).expires &&
              (o.expires = new Date(1 * new Date() + 864e5 * o.expires)),
              (o.expires = o.expires ? o.expires.toUTCString() : "");
            try {
              var i = JSON.stringify(n);
              /^[\{\[]/.test(i) && (n = i);
            } catch (e) {}
            (n = r.write
              ? r.write(n, t)
              : encodeURIComponent(String(n)).replace(
                  /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                  decodeURIComponent
                )),
              (t = encodeURIComponent(String(t))
                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                .replace(/[\(\)]/g, escape));
            var s = "";
            for (var c in o)
              o[c] &&
                ((s += "; " + c),
                !0 !== o[c] && (s += "=" + o[c].split(";")[0]));
            return (document.cookie = t + "=" + n + s);
          }
        }
        function i(e, n) {
          if ("undefined" != typeof document) {
            for (
              var a = {},
                o = document.cookie ? document.cookie.split("; ") : [],
                i = 0;
              i < o.length;
              i++
            ) {
              var s = o[i].split("="),
                c = s.slice(1).join("=");
              n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
              try {
                var l = t(s[0]);
                if (((c = (r.read || r)(c, l) || t(c)), n))
                  try {
                    c = JSON.parse(c);
                  } catch (e) {}
                if (((a[l] = c), e === l)) break;
              } catch (e) {}
            }
            return e ? a[e] : a;
          }
        }
        return (
          (a.set = o),
          (a.get = function (e) {
            return i(e, !1);
          }),
          (a.getJSON = function (e) {
            return i(e, !0);
          }),
          (a.remove = function (t, n) {
            o(t, "", e(n, { expires: -1 }));
          }),
          (a.defaults = {}),
          (a.withConverter = n),
          a
        );
      })(function () {});
    });
  },
  ,
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      return e
        .replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1")
        .replace(/\s+/g, " ")
        .replace(/^\s*|\s*$/g, "");
    }
    function a(e, t) {
      e.classList
        ? e.classList.remove(t)
        : "string" == typeof e.className
        ? (e.className = r(e.className, t))
        : e.setAttribute(
            "class",
            r((e.className && e.className.baseVal) || "", t)
          );
    }
    n.d(t, "a", function () {
      return a;
    });
  },
  ,
  function (e, t, n) {
    "use strict";
    function r(e, t) {
      e.classList
        ? e.classList.add(t)
        : (function (e, t) {
            return e.classList
              ? !!t && e.classList.contains(t)
              : -1 !==
                  (" " + (e.className.baseVal || e.className) + " ").indexOf(
                    " " + t + " "
                  );
          })(e, t) ||
          ("string" == typeof e.className
            ? (e.className = e.className + " " + t)
            : e.setAttribute(
                "class",
                ((e.className && e.className.baseVal) || "") + " " + t
              ));
    }
    n.d(t, "a", function () {
      return r;
    });
  },
  function (e, t) {
    function n(t, r) {
      return (
        (e.exports = n =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports),
        n(t, r)
      );
    }
    (e.exports = n),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
  },
  ,
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = r.createElement("path", {
      "data-name": "Facebook",
      d: "M5.227 15.372V8.36h2.374l.355-2.733H5.227V3.883c0-.791.222-1.33 1.366-1.33h1.46V.108a19.73 19.73 0 00-2.128-.113A3.306 3.306 0 002.38 3.607v2.02H0V8.36h2.38v7.012z",
      fill: "#8b8b8b",
    });
    t.default = function (e) {
      return r.createElement("svg", a({ width: 8.052, height: 15.372 }, e), o);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = r.createElement("path", {
      d: "M1.78 2.428a.58.58 0 00-.19-.49L.19.25v-.253h4.35l3.363 7.375 2.956-7.375h4.147v.252l-1.2 1.148a.356.356 0 00-.133.336v8.441a.355.355 0 00.133.336l1.17 1.148v.252H9.094v-.252l1.21-1.177c.12-.119.12-.154.12-.336V3.328l-3.37 8.56h-.455l-3.923-8.56v5.737a.794.794 0 00.218.659l1.576 1.913v.252H0v-.252l1.576-1.913a.768.768 0 00.2-.659z",
      fill: "#8b8b8b",
    });
    t.default = function (e) {
      return r.createElement("svg", a({ width: 15.006, height: 11.915 }, e), o);
    };
  },
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0);
    function a() {
      return (a =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }).apply(this, arguments);
    }
    var o = r.createElement("path", {
      "data-name": "reddit (2)",
      d: "M14.383 3.004a1 1 0 00.992-1 .984.984 0 00-.992-1 1 1 0 000 2zm-5.64 8.419a5 5 0 01-2.789-.751.133.133 0 00-.217.063l-.186.344a.241.241 0 00.062.282 4.408 4.408 0 003.13.908c2.262 0 3.068-.97 3.068-.97a.247.247 0 00.031-.25l-.217-.313a.186.186 0 00-.248-.031 4.573 4.573 0 01-2.634.72zm-3.192-2.41a1 1 0 00.992-1 .984.984 0 00-.992-1 1 1 0 00-.992 1 1.024 1.024 0 00.991 1zm5.888 0a1 1 0 00.992-1 .992.992 0 10-.992 1zm.992-7.167c-.155-.063-1.828-.626-2.541-.125-.744.532-.713 2.285-.651 2.285a8.92 8.92 0 014.308 1.408c.093.063 1.085-.814 2.169-.626a1.845 1.845 0 011.488 2.378c-.341 1.127-1.395 1.471-1.364 1.815v.282c0 2.911-3.285 5.258-7.345 5.258S1.15 12.174 1.15 9.263a2.086 2.086 0 01.031-.438A2.974 2.974 0 01.158 7.698a2.245 2.245 0 01.124-1.909 1.955 1.955 0 011.8-1 4.336 4.336 0 011.642.469 9.27 9.27 0 014.587-1.252c.062 0-.124-2.128 1.054-2.911 1.209-.782 3.192 0 3.223 0v.063A1.946 1.946 0 0114.354 0a2 2 0 11-1.952 2 .236.236 0 01.031-.156z",
      fill: "#8b8b8b",
    });
    t.default = function (e) {
      return r.createElement("svg", a({ width: 17.285, height: 14.521 }, e), o);
    };
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    e.exports = n(97);
  },
  function (e, t, n) {
    "use strict";
    /** @license React v0.19.1
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var r, a, o, i, s;
    if ("undefined" == typeof window || "function" != typeof MessageChannel) {
      var c = null,
        l = null,
        u = function () {
          if (null !== c)
            try {
              var e = t.unstable_now();
              c(!0, e), (c = null);
            } catch (e) {
              throw (setTimeout(u, 0), e);
            }
        },
        h = Date.now();
      (t.unstable_now = function () {
        return Date.now() - h;
      }),
        (r = function (e) {
          null !== c ? setTimeout(r, 0, e) : ((c = e), setTimeout(u, 0));
        }),
        (a = function (e, t) {
          l = setTimeout(e, t);
        }),
        (o = function () {
          clearTimeout(l);
        }),
        (i = function () {
          return !1;
        }),
        (s = t.unstable_forceFrameRate = function () {});
    } else {
      var d = window.performance,
        p = window.Date,
        f = window.setTimeout,
        m = window.clearTimeout;
      if ("undefined" != typeof console) {
        var g = window.cancelAnimationFrame;
        "function" != typeof window.requestAnimationFrame &&
          console.error(
            "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
          ),
          "function" != typeof g &&
            console.error(
              "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"
            );
      }
      if ("object" == typeof d && "function" == typeof d.now)
        t.unstable_now = function () {
          return d.now();
        };
      else {
        var v = p.now();
        t.unstable_now = function () {
          return p.now() - v;
        };
      }
      var y = !1,
        b = null,
        w = -1,
        O = 5,
        _ = 0;
      (i = function () {
        return t.unstable_now() >= _;
      }),
        (s = function () {}),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"
              )
            : (O = 0 < e ? Math.floor(1e3 / e) : 5);
        });
      var k = new MessageChannel(),
        T = k.port2;
      (k.port1.onmessage = function () {
        if (null !== b) {
          var e = t.unstable_now();
          _ = e + O;
          try {
            b(!0, e) ? T.postMessage(null) : ((y = !1), (b = null));
          } catch (e) {
            throw (T.postMessage(null), e);
          }
        } else y = !1;
      }),
        (r = function (e) {
          (b = e), y || ((y = !0), T.postMessage(null));
        }),
        (a = function (e, n) {
          w = f(function () {
            e(t.unstable_now());
          }, n);
        }),
        (o = function () {
          m(w), (w = -1);
        });
    }
    function A(e, t) {
      var n = e.length;
      e.push(t);
      e: for (;;) {
        var r = (n - 1) >>> 1,
          a = e[r];
        if (!(void 0 !== a && 0 < S(a, t))) break e;
        (e[r] = t), (e[n] = a), (n = r);
      }
    }
    function E(e) {
      return void 0 === (e = e[0]) ? null : e;
    }
    function P(e) {
      var t = e[0];
      if (void 0 !== t) {
        var n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (var r = 0, a = e.length; r < a; ) {
            var o = 2 * (r + 1) - 1,
              i = e[o],
              s = o + 1,
              c = e[s];
            if (void 0 !== i && 0 > S(i, n))
              void 0 !== c && 0 > S(c, i)
                ? ((e[r] = c), (e[s] = n), (r = s))
                : ((e[r] = i), (e[o] = n), (r = o));
            else {
              if (!(void 0 !== c && 0 > S(c, n))) break e;
              (e[r] = c), (e[s] = n), (r = s);
            }
          }
        }
        return t;
      }
      return null;
    }
    function S(e, t) {
      var n = e.sortIndex - t.sortIndex;
      return 0 !== n ? n : e.id - t.id;
    }
    var x = [],
      C = [],
      D = 1,
      N = null,
      H = 3,
      M = !1,
      R = !1,
      I = !1;
    function j(e) {
      for (var t = E(C); null !== t; ) {
        if (null === t.callback) P(C);
        else {
          if (!(t.startTime <= e)) break;
          P(C), (t.sortIndex = t.expirationTime), A(x, t);
        }
        t = E(C);
      }
    }
    function L(e) {
      if (((I = !1), j(e), !R))
        if (null !== E(x)) (R = !0), r(F);
        else {
          var t = E(C);
          null !== t && a(L, t.startTime - e);
        }
    }
    function F(e, n) {
      (R = !1), I && ((I = !1), o()), (M = !0);
      var r = H;
      try {
        for (
          j(n), N = E(x);
          null !== N && (!(N.expirationTime > n) || (e && !i()));

        ) {
          var s = N.callback;
          if (null !== s) {
            (N.callback = null), (H = N.priorityLevel);
            var c = s(N.expirationTime <= n);
            (n = t.unstable_now()),
              "function" == typeof c ? (N.callback = c) : N === E(x) && P(x),
              j(n);
          } else P(x);
          N = E(x);
        }
        if (null !== N) var l = !0;
        else {
          var u = E(C);
          null !== u && a(L, u.startTime - n), (l = !1);
        }
        return l;
      } finally {
        (N = null), (H = r), (M = !1);
      }
    }
    function q(e) {
      switch (e) {
        case 1:
          return -1;
        case 2:
          return 250;
        case 5:
          return 1073741823;
        case 4:
          return 1e4;
        default:
          return 5e3;
      }
    }
    var W = s;
    (t.unstable_IdlePriority = 5),
      (t.unstable_ImmediatePriority = 1),
      (t.unstable_LowPriority = 4),
      (t.unstable_NormalPriority = 3),
      (t.unstable_Profiling = null),
      (t.unstable_UserBlockingPriority = 2),
      (t.unstable_cancelCallback = function (e) {
        e.callback = null;
      }),
      (t.unstable_continueExecution = function () {
        R || M || ((R = !0), r(F));
      }),
      (t.unstable_getCurrentPriorityLevel = function () {
        return H;
      }),
      (t.unstable_getFirstCallbackNode = function () {
        return E(x);
      }),
      (t.unstable_next = function (e) {
        switch (H) {
          case 1:
          case 2:
          case 3:
            var t = 3;
            break;
          default:
            t = H;
        }
        var n = H;
        H = t;
        try {
          return e();
        } finally {
          H = n;
        }
      }),
      (t.unstable_pauseExecution = function () {}),
      (t.unstable_requestPaint = W),
      (t.unstable_runWithPriority = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            e = 3;
        }
        var n = H;
        H = e;
        try {
          return t();
        } finally {
          H = n;
        }
      }),
      (t.unstable_scheduleCallback = function (e, n, i) {
        var s = t.unstable_now();
        if ("object" == typeof i && null !== i) {
          var c = i.delay;
          (c = "number" == typeof c && 0 < c ? s + c : s),
            (i = "number" == typeof i.timeout ? i.timeout : q(e));
        } else (i = q(e)), (c = s);
        return (
          (e = {
            id: D++,
            callback: n,
            priorityLevel: e,
            startTime: c,
            expirationTime: (i = c + i),
            sortIndex: -1,
          }),
          c > s
            ? ((e.sortIndex = c),
              A(C, e),
              null === E(x) && e === E(C) && (I ? o() : (I = !0), a(L, c - s)))
            : ((e.sortIndex = i), A(x, e), R || M || ((R = !0), r(F))),
          e
        );
      }),
      (t.unstable_shouldYield = function () {
        var e = t.unstable_now();
        j(e);
        var n = E(x);
        return (
          (n !== N &&
            null !== N &&
            null !== n &&
            null !== n.callback &&
            n.startTime <= e &&
            n.expirationTime < N.expirationTime) ||
          i()
        );
      }),
      (t.unstable_wrapCallback = function (e) {
        var t = H;
        return function () {
          var n = H;
          H = t;
          try {
            return e.apply(this, arguments);
          } finally {
            H = n;
          }
        };
      });
  },
  ,
  function (e, t, n) {
    e.exports = (function () {
      "use strict";
      return {
        name: "en",
        weekdays:
          "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months:
          "January_February_March_April_May_June_July_August_September_October_November_December".split(
            "_"
          ),
      };
    })();
  },
  function (e, t, n) {
    e.exports = (function (e) {
      "use strict";
      e = e && e.hasOwnProperty("default") ? e.default : e;
      var t = {
        name: "zh-cn",
        weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
        weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
        weekdaysMin: "日_一_二_三_四_五_六".split("_"),
        months:
          "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
            "_"
          ),
        monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
          "_"
        ),
        ordinal: function (e, t) {
          switch (t) {
            case "W":
              return e + "周";
            default:
              return e + "日";
          }
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "YYYY/MM/DD",
          LL: "YYYY年M月D日",
          LLL: "YYYY年M月D日Ah点mm分",
          LLLL: "YYYY年M月D日ddddAh点mm分",
          l: "YYYY/M/D",
          ll: "YYYY年M月D日",
          lll: "YYYY年M月D日 HH:mm",
          llll: "YYYY年M月D日dddd HH:mm",
        },
        relativeTime: {
          future: "%s内",
          past: "%s前",
          s: "几秒",
          m: "1 分钟",
          mm: "%d 分钟",
          h: "1 小时",
          hh: "%d 小时",
          d: "1 天",
          dd: "%d 天",
          M: "1 个月",
          MM: "%d 个月",
          y: "1 年",
          yy: "%d 年",
        },
        meridiem: function (e, t) {
          var n = 100 * e + t;
          return n < 600
            ? "凌晨"
            : n < 900
            ? "早上"
            : n < 1130
            ? "上午"
            : n < 1230
            ? "中午"
            : n < 1800
            ? "下午"
            : "晚上";
        },
      };
      return e.locale(t, null, !0), t;
    })(n(36));
  },
  function (e, t, n) {
    e.exports = (function (e) {
      "use strict";
      e = e && e.hasOwnProperty("default") ? e.default : e;
      var t = {
        name: "ko",
        weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
        weekdaysShort: "일_월_화_수_목_금_토".split("_"),
        weekdaysMin: "일_월_화_수_목_금_토".split("_"),
        months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
        monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
          "_"
        ),
        ordinal: function (e) {
          return e;
        },
        formats: {
          LT: "A h:mm",
          LTS: "A h:mm:ss",
          L: "YYYY.MM.DD.",
          LL: "YYYY년 MMMM D일",
          LLL: "YYYY년 MMMM D일 A h:mm",
          LLLL: "YYYY년 MMMM D일 dddd A h:mm",
          l: "YYYY.MM.DD.",
          ll: "YYYY년 MMMM D일",
          lll: "YYYY년 MMMM D일 A h:mm",
          llll: "YYYY년 MMMM D일 dddd A h:mm",
        },
        meridiem: function (e) {
          return e < 12 ? "오전" : "오후";
        },
        relativeTime: {
          future: "%s 후",
          past: "%s 전",
          s: "몇 초",
          m: "1분",
          mm: "%d분",
          h: "한 시간",
          hh: "%d시간",
          d: "하루",
          dd: "%d일",
          M: "한 달",
          MM: "%d달",
          y: "일 년",
          yy: "%d년",
        },
      };
      return e.locale(t, null, !0), t;
    })(n(36));
  },
  function (e, t, n) {
    "use strict";
    var r = n(103);
    function a() {}
    function o() {}
    (o.resetWarningCache = a),
      (e.exports = function () {
        function e(e, t, n, a, o, i) {
          if (i !== r) {
            var s = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((s.name = "Invariant Violation"), s);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var n = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: o,
          resetWarningCache: a,
        };
        return (n.PropTypes = n), n;
      });
  },
  function (e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
  function (e, t) {
    e.exports =
      Array.isArray ||
      function (e) {
        return "[object Array]" == Object.prototype.toString.call(e);
      };
  },
  function (e, t, n) {
    e.exports = { primary: "#f0b90b" };
  },
  ,
  function (e, t) {
    e.exports = function (e, t, n, r) {
      var a = n ? n.call(r, e, t) : void 0;
      if (void 0 !== a) return !!a;
      if (e === t) return !0;
      if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
      var o = Object.keys(e),
        i = Object.keys(t);
      if (o.length !== i.length) return !1;
      for (
        var s = Object.prototype.hasOwnProperty.bind(t), c = 0;
        c < o.length;
        c++
      ) {
        var l = o[c];
        if (!s(l)) return !1;
        var u = e[l],
          h = t[l];
        if (
          !1 === (a = n ? n.call(r, u, h, l) : void 0) ||
          (void 0 === a && u !== h)
        )
          return !1;
      }
      return !0;
    };
  },
  ,
  ,
  function (e, t, n) {
    e.exports = { primary: "#f0b90b", navHeight: "80px" };
  },
  function (e, t, n) {
    e.exports = { primary: "#f0b90b" };
  },
  function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACZElEQVRoQ+3bbZLCIAwGYHJHdc+4undkJxW6LQUb4A0NM9ufisjTpHyJ5DKX9/7pnHsS0U/ufeuvee/vzrkbEX2lbaX0hYDlD/B1nw0dsBwwvjhoO/QOnGDjvZgG7b2/OedeSRB36BVcwE6DLmBj+1f0Aj7BmkefYHdoEmLNooXYP3TykEs6YDPPdCWWbY+Y0twrx55tCnQTlui17bSmQTdg16xMhyXz6B4sp25u4mEW3YvNgsMwZQ6NwBbB1tAo7EewFTQSewq+Go3GisBXoTWwYvBotBa2CjwKrYmtBmujtbFNYC30CGwzGI0ehe0Co9Ajsd3gXvRoLATcig6L7nTD7dNaHLLxcFgtSVb/uTINOyc1XwXBwiIcW66EhmHh4Mb0Vk/j7RfAUnpbKSjS0MjG9qmAAZFWwaqkNCDSath/cM04cVa28zlWi7LKM9yJjfdSBQ0Hg7BqaCgYjFVBw8BKWDgaAm7APoJk+A943eAWLBEtq6SGz3Z3ZF3ghgY/IrZjwdGFbgYjsFegm8BI7Gh0NThgv3M/tRZmX4c0Ls3SKm+kX44wVB6eqwJrYhsjXY0Wg0dgR6BF4LC7yGOmqHxItZoNukOWa6X3KeAKrGakP4KvxGqhi2ALWA10FmwJi0bnji3xEdyhHdTZ7gkSnR5MM4tFobdHD81jEeh4uHQabC+az0tPh+1Ce+95RsRoySVeCEgqQ5SpnJG9jw8L0eawlZF+EdH7gLgAbRYrRC9YLpsOSzz+xv8sxbrMY0/QK/YADpHeoqfBFtA7bBa8QXPhriUeolNqqSN0ZLzZF7eD12p+AUhtHUtk7zazAAAAAElFTkSuQmCC";
  },
  function (e, t) {
    e.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAA3klEQVRoQ+2awQ3DMAwD48nazbpZ0c0UOANUsn4UL28KIHlC4BhZl9mzzPJeBJ5OHMIQHtbAiojPsEx/4+zAQeDBDUB4MNwnGoQhPKyBvdJWx0ursM9La9jGpnEInFYkLoCwOMDUPoTTisQFEBYHmNqHcFqRuMCPcES8xKEd2efG46guQTGEBaEdWYbwUV2CYkvCb0FQbct+J612VaKDEBYFV7YN4XJVokIIi4Ir24ZwuSpRIYRFwZVtQ7hclahwfw9/Rb23bFteAPA3bWtXRIZYaRFQbZuWhH/tugQHbxTcZFhbmCfNAAAAAElFTkSuQmCC";
  },
  function (e, t, n) {
    var r = { "./be-en.png": 115, "./be-ko.png": 116, "./be-zh.png": 117 };
    function a(e) {
      var t = o(e);
      return n(t);
    }
    function o(e) {
      if (!n.o(r, e)) {
        var t = new Error("Cannot find module '" + e + "'");
        throw ((t.code = "MODULE_NOT_FOUND"), t);
      }
      return r[e];
    }
    (a.keys = function () {
      return Object.keys(r);
    }),
      (a.resolve = o),
      (e.exports = a),
      (a.id = 114);
  },
  function (e, t, n) {
    e.exports = n.p + "images/14a4f6775c2ccb2f0e34c58f93f55b37.be-en.png";
  },
  function (e, t, n) {
    e.exports = n.p + "images/14a4f6775c2ccb2f0e34c58f93f55b37.be-ko.png";
  },
  function (e, t, n) {
    e.exports = n.p + "images/14a4f6775c2ccb2f0e34c58f93f55b37.be-zh.png";
  },
  function (e, t, n) {
    e.exports = { primary: "#f0b90b" };
  },
  function (e, t, n) {
    e.exports = { primary: "#f0b90b" };
  },
  function (e, t) {
    (function (t) {
      e.exports = t;
    }.call(this, {}));
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(0),
      a = n.n(r),
      o = n(21),
      i = n(9),
      s = n(8),
      c = n(6),
      l = n(37),
      u = n(3),
      h = n(145),
      d = n(146),
      p = n(66),
      f = n.n(p),
      m = n(69),
      g = n(48),
      v = n.n(g),
      y = (n(105), n(32));
    function b(e) {
      if (!e) return {};
      "?" === e.charAt(0) && (e = e.slice(1));
      const t = e.split("&"),
        n = {};
      for (let e = 0; e < t.length; e++) {
        const r = t[e].split("=");
        2 === r.length && (n[r[0]] = decodeURIComponent(r[1]));
      }
      return n;
    }
    var w = n(67);
    var O = Object(s.b)("locale")(
        Object(s.c)((e) => {
          const {
            locale: { lang: t },
          } = e;
          let n, r, o;
          return (
            "zh" === t
              ? ((n = "TOP AI Network, 去中心化AI模型分片网络"),
                (r =
                  "TOP,公链,区块链,去中心,应用,节点,挖矿,生态,以太坊,PoS,Dapp,blockchain,minning,网络,network,staking,分片"),
                (o =
                  "TOP AI Network 是一个采用分片技术、三层网络技术的公链，提供AI 模型服务市场，给用户以高交易吞吐量、高速交易和低费用的链上体验。"))
              : "ko" === t
              ? ((n =
                  "톱 네트워크(TOP AI Network), 현실 세계의 방대한 업무를 지원할 수 있는 퍼블릭 체인 플랫폼"),
                (r =
                  "TOP, 퍼블릭 체인, 블록체인, 탈중앙화, 애플리케이션, 노드, 마이닝, 생태계, 이더리움, PoS,Dapp,blockchain,minning, 네트워크, network,staking,sharding"),
                (o =
                  "톱 네트워크(TOP AI Network)는 4 세대 블록체인 기술을 기반으로 한 퍼블릭 체인, 탈중앙화 된 애플리케이션 및 각 부대 시설로 이루어진 블록체인 생태계다."))
              : ((n =
                  "TOP AI Network - Decentralized AI Model Sharding Network"),
                (r =
                  "TOP,AI,network,web3,public,blockchain,agent,decentralized,ecosystem,model,computing,crypto,cryptocurrency,staking,sharding,Ethereum,BTC,Bitcoin,Dapp,decentralization,ecosystem,minning,node,developer,opensource,infrastructure,data."),
                (o =
                  "TOP AI Network is a public blockchain that employs sharding technology and a three-layer network to support an AI model service market. ")),
            a.a.createElement(
              w.Helmet,
              null,
              a.a.createElement("title", null, n),
              a.a.createElement("meta", { charSet: "utf-8" }),
              a.a.createElement("meta", {
                name: "viewport",
                content:
                  "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
              }),
              a.a.createElement("meta", {
                httpEquiv: "X-UA-Compatible",
                content: "IE=edge",
              }),
              a.a.createElement("meta", {
                name: "renderer",
                content: "webkit",
              }),
              a.a.createElement("meta", { name: "description", content: o }),
              a.a.createElement("meta", { name: "keywords", content: r }),
              a.a.createElement("meta", {
                "http-equiv": "Expires",
                content: "-1",
              }),
              a.a.createElement("meta", {
                "http-equiv": "Pragma",
                content: "no-cache",
              }),
              a.a.createElement("meta", {
                "http-equiv": "Cache-control",
                content: "no-cache",
              }),
              a.a.createElement("meta", {
                "http-equiv": "Cache",
                content: "no-cache",
              }),
              a.a.createElement("link", {
                rel: "icon",
                href: "/static/favicon.ico",
                type: "image/x-icon",
              }),
              a.a.createElement("script", {
                type: "text/javascript",
                src: "https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js",
              }),
              a.a.createElement("script", {
                type: "text/javascript",
                src: "https://cdn.jsdelivr.net/npm/echarts/map/js/world.js",
              }),
              a.a.createElement("script", {
                src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/TweenLite.min.js",
              }),
              a.a.createElement("script", {
                src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/plugins/CSSPlugin.min.js",
              }),
              a.a.createElement("script", {
                src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.1/easing/EasePack.min.js",
              }),
              a.a.createElement(
                "script",
                null,
                "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n        ga('create', 'UA-122476824-1', 'auto');\n        ga('send', 'pageview');"
              ),
              a.a.createElement(
                "script",
                { type: "x-shader/x-vertex", id: "vertexshader" },
                "attribute float scale;\n        void main() {\n        vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n        gl_PointSize = scale * ( 180.0 / - mvPosition.z );\n        gl_Position = projectionMatrix * mvPosition;\n        }"
              ),
              a.a.createElement(
                "script",
                { type: "x-shader/x-fragment", id: "fragmentshader" },
                "uniform vec3 color;\n        void main() {\n          if ( length( gl_PointCoord - vec2( 0.5, 0.5 ) ) > 0.475 ) discard;\n          gl_FragColor = vec4( color, 1.0 );\n        }"
              )
            )
          );
        })
      ),
      _ = n(15),
      k = (n(110), n(33));
    var T = Object(s.b)("locale")(
        Object(s.c)(
          Object(i.h)((e) => {
            const {
                locale: { lang: t, langPath: o, supportLan: i },
                history: s,
              } = e,
              [c, l] = Object(r.useState)(!1),
              u = n(51).default,
              h = n(52).default,
              d = n(53).default;
            return a.a.createElement(
              "nav",
              { className: "nav" },
              a.a.createElement(
                _.a,
                { to: o + "/" },
                a.a.createElement("img", {
                  src: "/static/images/newlogo.png",
                  alt: "",
                  className: "nav-logo",
                })
              ),
              a.a.createElement(
                "div",
                {
                  className: "nav-right",
                  style: { display: c ? "block" : "none" },
                },
                a.a.createElement(
                  "span",
                  {
                    className: "nav-drop-down",
                    style: { color: "white", paddingLeft: "20px" },
                  },
                  a.a.createElement(
                    "a",
                    { href: "/"},
                    "Home"
                  )
                ),
                a.a.createElement(
                  "span",
                  {
                    className: "nav-drop-down",
                    style: { color: "white", paddingLeft: "0px" },
                  },
                  a.a.createElement(
                    "a",
                    { href: "https://top-ai-org-app.vercel.app/", target: "_blank" },
                    "Staking"
                  )
                ),
                a.a.createElement(
                  "span",
                  {
                    className: "nav-drop-down",
                    style: { color: "white", paddingLeft: "0px" },
                  },
                  a.a.createElement(
                    "a",
                    { href: "/en/ecosystem"},
                    "Ecosystem"
                  )
                ),
                a.a.createElement(
                  "span",
                  {
                    className: "nav-drop-down",
                    style: { color: "white", paddingLeft: "0px" },
                  },
                  a.a.createElement(
                    "a",
                    { href: "https://sorojins-organization.gitbook.io/top-ai", target: "_blank" },
                    "About Us"
                  )
                )
              ),
              a.a.createElement(
                "div",
                { className: "icons" },
                a.a.createElement(
                  "a",
                  { href: "https://x.com/TopAI_Eth", target: "_blank" },
                  a.a.createElement(d, null)
                ),
                a.a.createElement(
                  "a",
                  { href: "https://t.me/TopAI_Eth", target: "_blank" },
                  a.a.createElement(h, null)
                ),
              ),
              a.a.createElement("img", {
                className: "nav-expand",
                src: n(c ? 112 : 113),
                onClick: () => l(!c),
              }),
              a.a.createElement(
                "div",
                { className: "top-slcak" },
                a.a.createElement(
                  "div",
                  null,
                  a.a.createElement(
                    "a",
                    { href: "/activity" },
                    a.a.createElement("img", {
                      src: n(114)(`./be-${t}.png`),
                      alt: "Be a miner",
                    })
                  )
                )
              )
            );
          })
        )
      ),
      A = (n(118), n(40));
    const E = n(51).default,
      P = n(73).default,
      S = n(74).default,
      x = n(75).default,
      C = n(52).default,
      D = n(53).default,
      N =
        (new Date().getFullYear(),
        (e) => {
          const t = "ml";
          function n() {
            const e = { a: arguments, q: [] },
              t = this.push(e);
            return "number" != typeof t ? t : n.bind(e.q);
          }
          (window.MailerLiteObject = t),
            (n.q = n.q || []),
            (window.ml = window.ml || n.bind(n.q)),
            (window.ml.q = window.ml.q || n.q);
          const r = document.createElement("script");
          r.onload = e;
          const a = document.getElementsByTagName("script")[0];
          (r.async = 1),
            (r.src =
              "https://static.mailerlite.com/js/universal.js?v" +
              ~~(new Date().getTime() / 1e6)),
            a.parentNode.insertBefore(r, a),
            window.ml("accounts", "1319000", "x0x0a0p6w2", "load");
        }),
      H = (e) => {
        setTimeout(() => {
          document.getElementsByClassName("form-control")[0]
            ? (document.getElementsByClassName("form-control")[0].placeholder =
                e)
            : H(e);
        }, 100);
      };
    var M = Object(s.b)("locale")(
        Object(s.c)((e) => {
          const {
              locale: { lang: t, langPath: n, getLocaleMessage: o },
            } = e,
            i = o("footer.placeholder");
          Object(r.useEffect)(() => {
            H(i);
          }, [i]),
            Object(r.useEffect)(() => {
              N();
            }, []);
          const s = [
            {
              href: "https://t.me/TopAI_Eth",
              icon: a.a.createElement(C, null),
              blank: !0,
            },
            {
              href: "https://twitter.com/TopAI_Eth",
              icon: a.a.createElement(D, null),
              blank: !0,
            },
          ];
          return a.a.createElement(
            "footer",
            { className: "footer" },
            a.a.createElement(
              "section",
              { className: "footer-bottom" },
              a.a.createElement("div", {
                className: "ml-form-embed",
                "data-account": "1319000:x0x0a0p6w2",
                "data-form": "1153002:f1d6p9",
              }),
              a.a.createElement(
                "div",
                { className: "topNetWork" },
                a.a.createElement("img", {
                  style: { width: "130px", height: "24px" },
                  src: "/static/images/newlogo.png",
                })
              ),
              a.a.createElement(
                "div",
                { className: "footer-bottom__links" },
                s.map((e, t) =>
                  a.a.createElement(
                    "a",
                    {
                      key: t,
                      href: e.href
                        ? "wechat" === e.href
                          ? void 0
                          : e.href
                        : void 0,
                      target: e.blank ? "_blank" : void 0,
                      rel: e.blank ? "noopener noreferrer" : void 0,
                      onClick: () => {
                        ga("send", "event", "Footer Media", "click", e.href);
                      },
                    },
                    e.icon,
                    "wechat" === e.href &&
                      a.a.createElement(
                        "div",
                        null,
                        a.a.createElement("img", {
                          src: "/static/images/wechat.png",
                        })
                      )
                  )
                )
              ),
              a.a.createElement(
                "div",
                { className: "contactTopnetwork" },
                "Contact Top-AI Team"
              ),
              a.a.createElement(
                "div",
                { className: "foundation" },
                "© TopAI Foundation 2024 "
              )
            ),
            a.a.createElement(
              "section",
              { className: "footer-top" },
              a.a.createElement(
                "ul",
                null,
                a.a.createElement("h6", null, "TOP Tokens"),
                a.a.createElement(
                  "li",
                  null,
                  a.a.createElement(
                    "a",
                    {
                      href: "https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0x00000000000000000000000000000000000000&chain=base",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    "Uniswap"
                  )
                ),
                a.a.createElement(
                  "li",
                  null,
                  a.a.createElement(
                    "a",
                    {
                      href: "https://dexscreener.com/base/0x00000000000000000000000000000000000000",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    "Dexscreener"
                  ),
                a.a.createElement(
                  "li",
                  null,
                  a.a.createElement(
                    "a",
                    {
                      href: "https://www.dextools.io/app/en/base/pair-explorer/0x00000000000000000000000000000000000000",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    },
                    "Dextools"
                  )
                )
              ),
            )
          )
        );
        })
      ),
      R = n(54),
      I = n(39);
    const j = (
        e,
        { match: t, cookies: n, headers: r, query: a, Component: o }
      ) =>
        Object(u.a)(void 0, void 0, void 0, function* () {
          let i = {};
          var s;
          if (
            (o = yield ((s = o),
            Object(u.a)(void 0, void 0, void 0, function* () {
              for (; s.preload; ) s = (yield s.load()).default;
              return s;
            }))).asyncData
          )
            try {
              i = yield o.asyncData(e, {
                match: t,
                cookies: n,
                headers: r,
                query: a,
                Component: o,
              });
            } catch (e) {
              i = {};
            }
          return i;
        }),
      L = a.a.createContext({});
    var F = a.a.memo((e) => {
      const t = Object(i.g)(),
        [n, o] = Object(r.useState)(null),
        [s, c] = Object(r.useState)(e.defaultPageData || {}),
        p = Object(r.useRef)(null),
        g = Object(r.useRef)(s);
      Object(r.useEffect)(() => {
        Object(I.b)({
          appname: "TopHomepage",
          category: "website",
          baseUrl: "//1qaz.tsckl.com",
        }),
          Object(I.c)();
      }, []),
        Object(h.a)(() => {
          o(p.current);
        }),
        Object(d.a)(() => {
          Object(I.c)(),
            Object(u.a)(void 0, void 0, void 0, function* () {
              v.a.start();
              const e = [],
                n = Object(m.a)(y.b, t.pathname),
                r = f.a.getJSON();
              for (const { route: t, match: a } of n) {
                const n = t.component;
                n &&
                  e.push(
                    j(Object(l.b)(), {
                      match: a,
                      cookies: r,
                      query: b(p.current.props.location.search),
                      Component: n,
                    })
                  );
              }
              const a = yield Promise.all(e),
                i = {};
              a.forEach((e, t) => {
                i[n[t].match.url] = e;
              });
              const s = Object.assign(Object.assign({}, g.current), i);
              c(s), (g.current = s), o(p.current), v.a.done();
            });
        }, [t.key]);
      const w = (function (e) {
        const t = Object(i.g)(),
          n = Object(i.f)();
        let o = null,
          s = null;
        return (
          e.forEach((e, c) => {
            if (
              null === s &&
              ((s = Object(i.e)(t.pathname, Object.assign({}, e))), s)
            ) {
              const i = (t) => {
                  const n = Object(r.useContext)(L),
                    o = Object.assign({}, n.pageData[t.match.url]);
                  return e.render
                    ? e.render(
                        Object.assign(Object.assign({}, t), { pageData: o })
                      )
                    : a.a.createElement(
                        e.component,
                        Object.assign({}, t, { pageData: o })
                      );
                },
                l = a.a.createElement(i, {
                  key: t.key + "-" + c,
                  location: t,
                  history: n,
                  match: s,
                  route: e,
                });
              o = l;
            }
          }),
          o
        );
      })(y.b);
      return (
        (p.current = w),
        a.a.createElement(
          L.Provider,
          { value: { pageData: Object.assign({}, s) } },
          a.a.createElement(O, null),
          a.a.createElement(T, null),
          n,
          a.a.createElement(M, null),
          a.a.createElement(R.a, null)
        )
      );
    });
    const q = window.__INITIAL_STATE__,
      W = window.__INITIAL_DATA__;
    Object(c.b)().then(() => {
      o.hydrate(
        a.a.createElement(() => {
          const e = Object(l.a)(q);
          return a.a.createElement(
            s.a,
            Object.assign({}, e),
            a.a.createElement(
              i.b,
              { history: e.routing.history },
              a.a.createElement(F, { defaultPageData: W })
            )
          );
        }, null),
        document.getElementById("app")
      ),
        (window.__INITIAL_STATE__ = null),
        (window.__INITIAL_DATA__ = {});
    });
  },
]);
