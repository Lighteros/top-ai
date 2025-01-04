(window.__LOADABLE_LOADED_CHUNKS__ =
  window.__LOADABLE_LOADED_CHUNKS__ || []).push([
  [18],
  {
    567: function (e, t, r) {
      e.exports = { primary: "#f0b90b", navHeight: "80px" };
    },
    85: function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r(3),
        a = r(0),
        o = r.n(a),
        s = r(136),
        c = r(8);
      r(567);
      let l = class extends a.Component {
        constructor(e) {
          super(e), (this.state = { numPages: 0, loading: !0 });
        }
        render() {
          const {
              locale: { lang: e },
            } = this.props,
            t = `/static/pdf/${
              "zh" !== e
                ? "TOP Network Whitepaper"
                : "TOP Network白皮书（中文最终版）"
            }.pdf`;
          return o.a.createElement(
            "div",
            { className: "whitepaper" },
            o.a.createElement(
              s.Document,
              {
                file: t,
                onLoadSuccess: (e) =>
                  this.setState({ numPages: e.numPages, loading: !1 }),
                renderMode: "canvas",
                onRenderError: (e) => {
                  console.error(e);
                },
                onGetTextError: (e) => {
                  console.error(e);
                },
              },
              Array.apply(null, { length: this.state.numPages }).map((e, t) =>
                o.a.createElement(s.Page, {
                  key: t,
                  pageNumber: t + 1,
                  width: document.body.clientWidth,
                })
              )
            )
          );
        }
      };
      (l = Object(n.b)([Object(c.b)("locale"), c.c], l)), (t.default = l);
    },
  },
]);
