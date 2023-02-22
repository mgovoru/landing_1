(() => {
  "use strict";
  let e = !0,
    t = (e = 500) => {
      document.documentElement.classList.contains("lock") ? s(e) : i(e);
    },
    s = (t = 500) => {
      let s = document.querySelector("body");
      if (e) {
        let i = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < i.length; e++) {
            i[e].style.paddingRight = "0px";
          }
          (s.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    i = (t = 500) => {
      let s = document.querySelector("body");
      if (e) {
        let i = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < i.length; e++) {
          i[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (s.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  function n(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function r(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : n(t[s]) && n(e[s]) && Object.keys(t[s]).length > 0 && r(e[s], t[s]);
    });
  }
  const a = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: "" },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
  };
  function l() {
    const e = "undefined" != typeof document ? document : {};
    return r(e, a), e;
  }
  const o = {
    document: a,
    navigator: { userAgent: "" },
    location: {
      hash: "",
      host: "",
      hostname: "",
      href: "",
      origin: "",
      pathname: "",
      protocol: "",
      search: "",
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => "" }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      "undefined" != typeof setTimeout && clearTimeout(e);
    },
  };
  function d() {
    const e = "undefined" != typeof window ? window : {};
    return r(e, o), e;
  }
  function c(e, t = 0) {
    return setTimeout(e, t);
  }
  function p() {
    return Date.now();
  }
  function u(e, t = "x") {
    const s = d();
    let i, n, r;
    const a = (function (e) {
      const t = d();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((n = a.transform || a.webkitTransform),
          n.split(",").length > 6 &&
            (n = n
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
        : ((r =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (i = r.toString().split(","))),
      "x" === t &&
        (n = s.WebKitCSSMatrix
          ? r.m41
          : 16 === i.length
          ? parseFloat(i[12])
          : parseFloat(i[4])),
      "y" === t &&
        (n = s.WebKitCSSMatrix
          ? r.m42
          : 16 === i.length
          ? parseFloat(i[13])
          : parseFloat(i[5])),
      n || 0
    );
  }
  function m(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function f(...e) {
    const t = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let n = 1; n < e.length; n += 1) {
      const r = e[n];
      if (
        null != r &&
        ((i = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? i instanceof HTMLElement
          : i && (1 === i.nodeType || 11 === i.nodeType)))
      ) {
        const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
        for (let s = 0, i = e.length; s < i; s += 1) {
          const i = e[s],
            n = Object.getOwnPropertyDescriptor(r, i);
          void 0 !== n &&
            n.enumerable &&
            (m(t[i]) && m(r[i])
              ? r[i].__swiper__
                ? (t[i] = r[i])
                : f(t[i], r[i])
              : !m(t[i]) && m(r[i])
              ? ((t[i] = {}), r[i].__swiper__ ? (t[i] = r[i]) : f(t[i], r[i]))
              : (t[i] = r[i]));
        }
      }
    }
    var i;
    return t;
  }
  function h(e, t, s) {
    e.style.setProperty(t, s);
  }
  function g({ swiper: e, targetPosition: t, side: s }) {
    const i = d(),
      n = -e.translate;
    let r,
      a = null;
    const l = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      i.cancelAnimationFrame(e.cssModeFrameID);
    const o = t > n ? "next" : "prev",
      c = (e, t) => ("next" === o && e >= t) || ("prev" === o && e <= t),
      p = () => {
        (r = new Date().getTime()), null === a && (a = r);
        const o = Math.max(Math.min((r - a) / l, 1), 0),
          d = 0.5 - Math.cos(o * Math.PI) / 2;
        let u = n + d * (t - n);
        if ((c(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), c(u, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: u });
            }),
            void i.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = i.requestAnimationFrame(p);
      };
    p();
  }
  function v(e, t = "") {
    return [...e.children].filter((e) => e.matches(t));
  }
  function w(e, t = []) {
    const s = document.createElement(e);
    return s.classList.add(...(Array.isArray(t) ? t : [t])), s;
  }
  function b(e, t) {
    return d().getComputedStyle(e, null).getPropertyValue(t);
  }
  function S(e) {
    let t,
      s = e;
    if (s) {
      for (t = 0; null !== (s = s.previousSibling); )
        1 === s.nodeType && (t += 1);
      return t;
    }
  }
  function T(e, t) {
    const s = [];
    let i = e.parentElement;
    for (; i; )
      t ? i.matches(t) && s.push(i) : s.push(i), (i = i.parentElement);
    return s;
  }
  function y(e, t, s) {
    const i = d();
    return s
      ? e["width" === t ? "offsetWidth" : "offsetHeight"] +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-right" : "margin-top")
          ) +
          parseFloat(
            i
              .getComputedStyle(e, null)
              .getPropertyValue("width" === t ? "margin-left" : "margin-bottom")
          )
      : e.offsetWidth;
  }
  let E, x, C;
  function M() {
    return (
      E ||
        (E = (function () {
          const e = d(),
            t = l();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
            touch: !!(
              "ontouchstart" in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
          };
        })()),
      E
    );
  }
  function L(e = {}) {
    return (
      x ||
        (x = (function ({ userAgent: e } = {}) {
          const t = M(),
            s = d(),
            i = s.navigator.platform,
            n = e || s.navigator.userAgent,
            r = { ios: !1, android: !1 },
            a = s.screen.width,
            l = s.screen.height,
            o = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let c = n.match(/(iPad).*OS\s([\d_]+)/);
          const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            u = !c && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === i;
          let f = "MacIntel" === i;
          return (
            !c &&
              f &&
              t.touch &&
              [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810",
              ].indexOf(`${a}x${l}`) >= 0 &&
              ((c = n.match(/(Version)\/([\d.]+)/)),
              c || (c = [0, 1, "13_0_0"]),
              (f = !1)),
            o && !m && ((r.os = "android"), (r.android = !0)),
            (c || u || p) && ((r.os = "ios"), (r.ios = !0)),
            r
          );
        })(e)),
      x
    );
  }
  function P() {
    return (
      C ||
        (C = (function () {
          const e = d();
          let t = !1;
          function s() {
            const t = e.navigator.userAgent.toLowerCase();
            return (
              t.indexOf("safari") >= 0 &&
              t.indexOf("chrome") < 0 &&
              t.indexOf("android") < 0
            );
          }
          if (s()) {
            const s = String(e.navigator.userAgent);
            if (s.includes("Version/")) {
              const [e, i] = s
                .split("Version/")[1]
                .split(" ")[0]
                .split(".")
                .map((e) => Number(e));
              t = e < 16 || (16 === e && i < 2);
            }
          }
          return {
            isSafari: t || s(),
            needPerspectiveFix: t,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      C
    );
  }
  const k = {
    on(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      const n = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          i.eventsListeners[e] || (i.eventsListeners[e] = []),
            i.eventsListeners[e][n](t);
        }),
        i
      );
    },
    once(e, t, s) {
      const i = this;
      if (!i.eventsListeners || i.destroyed) return i;
      if ("function" != typeof t) return i;
      function n(...s) {
        i.off(e, n), n.__emitterProxy && delete n.__emitterProxy, t.apply(i, s);
      }
      return (n.__emitterProxy = t), i.on(e, n, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ("function" != typeof e) return s;
      const i = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(" ").forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((i, n) => {
                  (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(n, 1);
                });
          }),
          s)
        : s;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsListeners) return t;
      let s, i, n;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((s = e[0]), (i = e.slice(1, e.length)), (n = t))
        : ((s = e[0].events), (i = e[0].data), (n = e[0].context || t)),
        i.unshift(n);
      return (
        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(n, [e, ...i]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(n, i);
              });
        }),
        t
      );
    },
  };
  const A = {
    updateSize: function () {
      const e = this;
      let t, s;
      const i = e.el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : i.clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : i.clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(b(i, "padding-left") || 0, 10) -
            parseInt(b(i, "padding-right") || 0, 10)),
          (s =
            s -
            parseInt(b(i, "padding-top") || 0, 10) -
            parseInt(b(i, "padding-bottom") || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: "height",
              "margin-top": "margin-left",
              "margin-bottom ": "margin-right",
              "margin-left": "margin-top",
              "margin-right": "margin-bottom",
              "padding-left": "padding-top",
              "padding-right": "padding-bottom",
              marginRight: "marginBottom",
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const i = e.params,
        {
          wrapperEl: n,
          slidesEl: r,
          size: a,
          rtlTranslate: l,
          wrongRTL: o,
        } = e,
        d = e.virtual && i.virtual.enabled,
        c = d ? e.virtual.slides.length : e.slides.length,
        p = v(r, `.${e.params.slideClass}, swiper-slide`),
        u = d ? e.virtual.slides.length : p.length;
      let m = [];
      const f = [],
        g = [];
      let w = i.slidesOffsetBefore;
      "function" == typeof w && (w = i.slidesOffsetBefore.call(e));
      let S = i.slidesOffsetAfter;
      "function" == typeof S && (S = i.slidesOffsetAfter.call(e));
      const T = e.snapGrid.length,
        E = e.slidesGrid.length;
      let x = i.spaceBetween,
        C = -w,
        M = 0,
        L = 0;
      if (void 0 === a) return;
      "string" == typeof x &&
        x.indexOf("%") >= 0 &&
        (x = (parseFloat(x.replace("%", "")) / 100) * a),
        (e.virtualSize = -x),
        p.forEach((e) => {
          l ? (e.style.marginLeft = "") : (e.style.marginRight = ""),
            (e.style.marginBottom = ""),
            (e.style.marginTop = "");
        }),
        i.centeredSlides &&
          i.cssMode &&
          (h(n, "--swiper-centered-offset-before", ""),
          h(n, "--swiper-centered-offset-after", ""));
      const P = i.grid && i.grid.rows > 1 && e.grid;
      let k;
      P && e.grid.initSlides(u);
      const A =
        "auto" === i.slidesPerView &&
        i.breakpoints &&
        Object.keys(i.breakpoints).filter(
          (e) => void 0 !== i.breakpoints[e].slidesPerView
        ).length > 0;
      for (let n = 0; n < u; n += 1) {
        let r;
        if (
          ((k = 0),
          p[n] && (r = p[n]),
          P && e.grid.updateSlide(n, r, u, t),
          !p[n] || "none" !== b(r, "display"))
        ) {
          if ("auto" === i.slidesPerView) {
            A && (p[n].style[t("width")] = "");
            const a = getComputedStyle(r),
              l = r.style.transform,
              o = r.style.webkitTransform;
            if (
              (l && (r.style.transform = "none"),
              o && (r.style.webkitTransform = "none"),
              i.roundLengths)
            )
              k = e.isHorizontal() ? y(r, "width", !0) : y(r, "height", !0);
            else {
              const e = s(a, "width"),
                t = s(a, "padding-left"),
                i = s(a, "padding-right"),
                n = s(a, "margin-left"),
                l = s(a, "margin-right"),
                o = a.getPropertyValue("box-sizing");
              if (o && "border-box" === o) k = e + n + l;
              else {
                const { clientWidth: s, offsetWidth: a } = r;
                k = e + t + i + n + l + (a - s);
              }
            }
            l && (r.style.transform = l),
              o && (r.style.webkitTransform = o),
              i.roundLengths && (k = Math.floor(k));
          } else
            (k = (a - (i.slidesPerView - 1) * x) / i.slidesPerView),
              i.roundLengths && (k = Math.floor(k)),
              p[n] && (p[n].style[t("width")] = `${k}px`);
          p[n] && (p[n].swiperSlideSize = k),
            g.push(k),
            i.centeredSlides
              ? ((C = C + k / 2 + M / 2 + x),
                0 === M && 0 !== n && (C = C - a / 2 - x),
                0 === n && (C = C - a / 2 - x),
                Math.abs(C) < 0.001 && (C = 0),
                i.roundLengths && (C = Math.floor(C)),
                L % i.slidesPerGroup == 0 && m.push(C),
                f.push(C))
              : (i.roundLengths && (C = Math.floor(C)),
                (L - Math.min(e.params.slidesPerGroupSkip, L)) %
                  e.params.slidesPerGroup ==
                  0 && m.push(C),
                f.push(C),
                (C = C + k + x)),
            (e.virtualSize += k + x),
            (M = k),
            (L += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, a) + S),
        l &&
          o &&
          ("slide" === i.effect || "coverflow" === i.effect) &&
          (n.style.width = `${e.virtualSize + i.spaceBetween}px`),
        i.setWrapperSize &&
          (n.style[t("width")] = `${e.virtualSize + i.spaceBetween}px`),
        P && e.grid.updateWrapperSize(k, m, t),
        !i.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < m.length; s += 1) {
          let n = m[s];
          i.roundLengths && (n = Math.floor(n)),
            m[s] <= e.virtualSize - a && t.push(n);
        }
        (m = t),
          Math.floor(e.virtualSize - a) - Math.floor(m[m.length - 1]) > 1 &&
            m.push(e.virtualSize - a);
      }
      if (d && i.loop) {
        const t = g[0] + x;
        if (i.slidesPerGroup > 1) {
          const s = Math.ceil(
              (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                i.slidesPerGroup
            ),
            n = t * i.slidesPerGroup;
          for (let e = 0; e < s; e += 1) m.push(m[m.length - 1] + n);
        }
        for (
          let s = 0;
          s < e.virtual.slidesBefore + e.virtual.slidesAfter;
          s += 1
        )
          1 === i.slidesPerGroup && m.push(m[m.length - 1] + t),
            f.push(f[f.length - 1] + t),
            (e.virtualSize += t);
      }
      if ((0 === m.length && (m = [0]), 0 !== i.spaceBetween)) {
        const s = e.isHorizontal() && l ? "marginLeft" : t("marginRight");
        p.filter(
          (e, t) => !(i.cssMode && !i.loop) || t !== p.length - 1
        ).forEach((e) => {
          e.style[s] = `${x}px`;
        });
      }
      if (i.centeredSlides && i.centeredSlidesBounds) {
        let e = 0;
        g.forEach((t) => {
          e += t + (i.spaceBetween ? i.spaceBetween : 0);
        }),
          (e -= i.spaceBetween);
        const t = e - a;
        m = m.map((e) => (e < 0 ? -w : e > t ? t + S : e));
      }
      if (i.centerInsufficientSlides) {
        let e = 0;
        if (
          (g.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
          (e -= i.spaceBetween),
          e < a)
        ) {
          const t = (a - e) / 2;
          m.forEach((e, s) => {
            m[s] = e - t;
          }),
            f.forEach((e, s) => {
              f[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: p,
          snapGrid: m,
          slidesGrid: f,
          slidesSizesGrid: g,
        }),
        i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
      ) {
        h(n, "--swiper-centered-offset-before", -m[0] + "px"),
          h(
            n,
            "--swiper-centered-offset-after",
            e.size / 2 - g[g.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (u !== c && e.emit("slidesLengthChange"),
        m.length !== T &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        f.length !== E && e.emit("slidesGridLengthChange"),
        i.watchSlidesProgress && e.updateSlidesOffset(),
        !(d || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
      ) {
        const t = `${i.containerModifierClass}backface-hidden`,
          s = e.el.classList.contains(t);
        u <= i.maxBackfaceHiddenSlides
          ? s || e.el.classList.add(t)
          : s && e.el.classList.remove(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        i = t.virtual && t.params.virtual.enabled;
      let n,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const a = (e) =>
        i
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
            )[0]
          : t.slides[e];
      if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || []).forEach((e) => {
            s.push(e);
          });
        else
          for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
            const e = t.activeIndex + n;
            if (e > t.slides.length && !i) break;
            s.push(a(e));
          }
      else s.push(a(t.activeIndex));
      for (n = 0; n < s.length; n += 1)
        if (void 0 !== s[n]) {
          const e = s[n].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && (t.wrapperEl.style.height = `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides,
        s = e.isElement
          ? e.isHorizontal()
            ? e.wrapperEl.offsetLeft
            : e.wrapperEl.offsetTop
          : 0;
      for (let i = 0; i < t.length; i += 1)
        t[i].swiperSlideOffset =
          (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - s;
    },
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        s = t.params,
        { slides: i, rtlTranslate: n, snapGrid: r } = t;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      let a = -e;
      n && (a = e),
        i.forEach((e) => {
          e.classList.remove(s.slideVisibleClass);
        }),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < i.length; e += 1) {
        const l = i[e];
        let o = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= i[0].swiperSlideOffset);
        const d =
            (a + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          c =
            (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          p = -(a - o),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(l),
          t.visibleSlidesIndexes.push(e),
          i[e].classList.add(s.slideVisibleClass)),
          (l.progress = n ? -d : d),
          (l.originalProgress = n ? -c : c);
      }
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        i = t.maxTranslate() - t.minTranslate();
      let { progress: n, isBeginning: r, isEnd: a, progressLoop: l } = t;
      const o = r,
        d = a;
      if (0 === i) (n = 0), (r = !0), (a = !0);
      else {
        n = (e - t.minTranslate()) / i;
        const s = Math.abs(e - t.minTranslate()) < 1,
          l = Math.abs(e - t.maxTranslate()) < 1;
        (r = s || n <= 0), (a = l || n >= 1), s && (n = 0), l && (n = 1);
      }
      if (s.loop) {
        const s = S(
            t.slides.filter(
              (e) => "0" === e.getAttribute("data-swiper-slide-index")
            )[0]
          ),
          i = S(
            t.slides.filter(
              (e) =>
                1 * e.getAttribute("data-swiper-slide-index") ==
                t.slides.length - 1
            )[0]
          ),
          n = t.slidesGrid[s],
          r = t.slidesGrid[i],
          a = t.slidesGrid[t.slidesGrid.length - 1],
          o = Math.abs(e);
        (l = o >= n ? (o - n) / a : (o + a - r) / a), l > 1 && (l -= 1);
      }
      Object.assign(t, {
        progress: n,
        progressLoop: l,
        isBeginning: r,
        isEnd: a,
      }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        a && !d && t.emit("reachEnd toEdge"),
        ((o && !r) || (d && !a)) && t.emit("fromEdge"),
        t.emit("progress", n);
    },
    updateSlidesClasses: function () {
      const e = this,
        { slides: t, params: s, slidesEl: i, activeIndex: n } = e,
        r = e.virtual && s.virtual.enabled,
        a = (e) => v(i, `.${s.slideClass}${e}, swiper-slide${e}`)[0];
      let l;
      if (
        (t.forEach((e) => {
          e.classList.remove(
            s.slideActiveClass,
            s.slideNextClass,
            s.slidePrevClass
          );
        }),
        r)
      )
        if (s.loop) {
          let t = n - e.virtual.slidesBefore;
          t < 0 && (t = e.virtual.slides.length + t),
            t >= e.virtual.slides.length && (t -= e.virtual.slides.length),
            (l = a(`[data-swiper-slide-index="${t}"]`));
        } else l = a(`[data-swiper-slide-index="${n}"]`);
      else l = t[n];
      if (l) {
        l.classList.add(s.slideActiveClass);
        let e = (function (e, t) {
          const s = [];
          for (; e.nextElementSibling; ) {
            const i = e.nextElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
          }
          return s;
        })(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !e && (e = t[0]), e && e.classList.add(s.slideNextClass);
        let i = (function (e, t) {
          const s = [];
          for (; e.previousElementSibling; ) {
            const i = e.previousElementSibling;
            t ? i.matches(t) && s.push(i) : s.push(i), (e = i);
          }
          return s;
        })(l, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && 0 === !i && (i = t[t.length - 1]),
          i && i.classList.add(s.slidePrevClass);
      }
      e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          snapGrid: i,
          params: n,
          activeIndex: r,
          realIndex: a,
          snapIndex: l,
        } = t;
      let o,
        d = e;
      const c = (e) => {
        let s = e - t.virtual.slidesBefore;
        return (
          s < 0 && (s = t.virtual.slides.length + s),
          s >= t.virtual.slides.length && (s -= t.virtual.slides.length),
          s
        );
      };
      if (
        (void 0 === d &&
          (d = (function (e) {
            const { slidesGrid: t, params: s } = e,
              i = e.rtlTranslate ? e.translate : -e.translate;
            let n;
            for (let e = 0; e < t.length; e += 1)
              void 0 !== t[e + 1]
                ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2
                  ? (n = e)
                  : i >= t[e] && i < t[e + 1] && (n = e + 1)
                : i >= t[e] && (n = e);
            return (
              s.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
            );
          })(t)),
        i.indexOf(s) >= 0)
      )
        o = i.indexOf(s);
      else {
        const e = Math.min(n.slidesPerGroupSkip, d);
        o = e + Math.floor((d - e) / n.slidesPerGroup);
      }
      if ((o >= i.length && (o = i.length - 1), d === r))
        return (
          o !== l && ((t.snapIndex = o), t.emit("snapIndexChange")),
          void (
            t.params.loop &&
            t.virtual &&
            t.params.virtual.enabled &&
            (t.realIndex = c(d))
          )
        );
      let p;
      (p =
        t.virtual && n.virtual.enabled && n.loop
          ? c(d)
          : t.slides[d]
          ? parseInt(
              t.slides[d].getAttribute("data-swiper-slide-index") || d,
              10
            )
          : d),
        Object.assign(t, {
          snapIndex: o,
          realIndex: p,
          previousIndex: r,
          activeIndex: d,
        }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        a !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        i = e.closest(`.${s.slideClass}, swiper-slide`);
      let n,
        r = !1;
      if (i)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === i) {
            (r = !0), (n = e);
            break;
          }
      if (!i || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = i),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              i.getAttribute("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = n),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const I = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: s, translate: i, wrapperEl: n } = this;
      if (t.virtualTranslate) return s ? -i : i;
      if (t.cssMode) return i;
      let r = u(n, e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        { rtlTranslate: i, params: n, wrapperEl: r, progress: a } = s;
      let l,
        o = 0,
        d = 0;
      s.isHorizontal() ? (o = i ? -e : e) : (d = e),
        n.roundLengths && ((o = Math.floor(o)), (d = Math.floor(d))),
        n.cssMode
          ? (r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -o
              : -d)
          : n.virtualTranslate ||
            (r.style.transform = `translate3d(${o}px, ${d}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? o : d);
      const c = s.maxTranslate() - s.minTranslate();
      (l = 0 === c ? 0 : (e - s.minTranslate()) / c),
        l !== a && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, s = !0, i = !0, n) {
      const r = this,
        { params: a, wrapperEl: l } = r;
      if (r.animating && a.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = i && e > o ? o : i && e < d ? d : e),
        r.updateProgress(c),
        a.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              g({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          l.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, n),
              r.emit("transitionStart")),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.wrapperEl.removeEventListener(
                      "transitionend",
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit("transitionEnd"));
                }),
              r.wrapperEl.addEventListener(
                "transitionend",
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function O({ swiper: e, runCallbacks: t, direction: s, step: i }) {
    const { activeIndex: n, previousIndex: r } = e;
    let a = s;
    if (
      (a || (a = n > r ? "next" : n < r ? "prev" : "reset"),
      e.emit(`transition${i}`),
      t && n !== r)
    ) {
      if ("reset" === a) return void e.emit(`slideResetTransition${i}`);
      e.emit(`slideChangeTransition${i}`),
        "next" === a
          ? e.emit(`slideNextTransition${i}`)
          : e.emit(`slidePrevTransition${i}`);
    }
  }
  const z = {
    slideTo: function (e = 0, t = this.params.speed, s = !0, i, n) {
      "string" == typeof e && (e = parseInt(e, 10));
      const r = this;
      let a = e;
      a < 0 && (a = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: m,
        enabled: f,
      } = r;
      if ((r.animating && l.preventInteractionOnTransition) || (!f && !i && !n))
        return !1;
      const h = Math.min(r.params.slidesPerGroupSkip, a);
      let v = h + Math.floor((a - h) / r.params.slidesPerGroup);
      v >= o.length && (v = o.length - 1);
      const w = -o[v];
      if (l.normalizeSlideIndex)
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * w),
            s = Math.floor(100 * d[e]),
            i = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < i - (i - s) / 2
              ? (a = e)
              : t >= s && t < i && (a = e + 1)
            : t >= s && (a = e);
        }
      if (r.initialized && a !== p) {
        if (!r.allowSlideNext && w < r.translate && w < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          w > r.translate &&
          w > r.maxTranslate() &&
          (p || 0) !== a
        )
          return !1;
      }
      let b;
      if (
        (a !== (c || 0) && s && r.emit("beforeSlideChangeStart"),
        r.updateProgress(w),
        (b = a > p ? "next" : a < p ? "prev" : "reset"),
        (u && -w === r.translate) || (!u && w === r.translate))
      )
        return (
          r.updateActiveIndex(a),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          "slide" !== l.effect && r.setTranslate(w),
          "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = u ? w : -w;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            t && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
              ? ((r._cssModeVirtualInitialSet = !0),
                requestAnimationFrame(() => {
                  m[e ? "scrollLeft" : "scrollTop"] = s;
                }))
              : (m[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._immediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              g({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          m.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(w),
        r.updateActiveIndex(a),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, i),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
              }),
            r.wrapperEl.addEventListener(
              "transitionend",
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e = 0, t = this.params.speed, s = !0, i) {
      if ("string" == typeof e) {
        e = parseInt(e, 10);
      }
      const n = this;
      let r = e;
      return (
        n.params.loop &&
          (n.virtual && n.params.virtual.enabled
            ? (r += n.virtual.slidesBefore)
            : (r = S(
                n.slides.filter(
                  (e) => 1 * e.getAttribute("data-swiper-slide-index") === r
                )[0]
              ))),
        n.slideTo(r, t, s, i)
      );
    },
    slideNext: function (e = this.params.speed, t = !0, s) {
      const i = this,
        { enabled: n, params: r, animating: a } = i;
      if (!n) return i;
      let l = r.slidesPerGroup;
      "auto" === r.slidesPerView &&
        1 === r.slidesPerGroup &&
        r.slidesPerGroupAuto &&
        (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
      const o = i.activeIndex < r.slidesPerGroupSkip ? 1 : l,
        d = i.virtual && r.virtual.enabled;
      if (r.loop) {
        if (a && !d && r.loopPreventsSliding) return !1;
        i.loopFix({ direction: "next" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      return r.rewind && i.isEnd
        ? i.slideTo(0, e, t, s)
        : i.slideTo(i.activeIndex + o, e, t, s);
    },
    slidePrev: function (e = this.params.speed, t = !0, s) {
      const i = this,
        {
          params: n,
          snapGrid: r,
          slidesGrid: a,
          rtlTranslate: l,
          enabled: o,
          animating: d,
        } = i;
      if (!o) return i;
      const c = i.virtual && n.virtual.enabled;
      if (n.loop) {
        if (d && !c && n.loopPreventsSliding) return !1;
        i.loopFix({ direction: "prev" }),
          (i._clientLeft = i.wrapperEl.clientLeft);
      }
      function p(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const u = p(l ? i.translate : -i.translate),
        m = r.map((e) => p(e));
      let f = r[m.indexOf(u) - 1];
      if (void 0 === f && n.cssMode) {
        let e;
        r.forEach((t, s) => {
          u >= t && (e = s);
        }),
          void 0 !== e && (f = r[e > 0 ? e - 1 : e]);
      }
      let h = 0;
      if (
        (void 0 !== f &&
          ((h = a.indexOf(f)),
          h < 0 && (h = i.activeIndex - 1),
          "auto" === n.slidesPerView &&
            1 === n.slidesPerGroup &&
            n.slidesPerGroupAuto &&
            ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
            (h = Math.max(h, 0)))),
        n.rewind && i.isBeginning)
      ) {
        const n =
          i.params.virtual && i.params.virtual.enabled && i.virtual
            ? i.virtual.slides.length - 1
            : i.slides.length - 1;
        return i.slideTo(n, e, t, s);
      }
      return i.slideTo(h, e, t, s);
    },
    slideReset: function (e = this.params.speed, t = !0, s) {
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e = this.params.speed, t = !0, s, i = 0.5) {
      const n = this;
      let r = n.activeIndex;
      const a = Math.min(n.params.slidesPerGroupSkip, r),
        l = a + Math.floor((r - a) / n.params.slidesPerGroup),
        o = n.rtlTranslate ? n.translate : -n.translate;
      if (o >= n.snapGrid[l]) {
        const e = n.snapGrid[l];
        o - e > (n.snapGrid[l + 1] - e) * i && (r += n.params.slidesPerGroup);
      } else {
        const e = n.snapGrid[l - 1];
        o - e <= (n.snapGrid[l] - e) * i && (r -= n.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, n.slidesGrid.length - 1)),
        n.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, slidesEl: s } = e,
        i =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let n,
        r = e.clickedIndex;
      const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
      if (t.loop) {
        if (e.animating) return;
        (n = parseInt(
          e.clickedSlide.getAttribute("data-swiper-slide-index"),
          10
        )),
          t.centeredSlides
            ? r < e.loopedSlides - i / 2 ||
              r > e.slides.length - e.loopedSlides + i / 2
              ? (e.loopFix(),
                (r = S(v(s, `${a}[data-swiper-slide-index="${n}"]`)[0])),
                c(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - i
            ? (e.loopFix(),
              (r = S(v(s, `${a}[data-swiper-slide-index="${n}"]`)[0])),
              c(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  const G = {
    loopCreate: function (e) {
      const t = this,
        { params: s, slidesEl: i } = t;
      if (!s.loop || (t.virtual && t.params.virtual.enabled)) return;
      v(i, `.${s.slideClass}, swiper-slide`).forEach((e, t) => {
        e.setAttribute("data-swiper-slide-index", t);
      }),
        t.loopFix({
          slideRealIndex: e,
          direction: s.centeredSlides ? void 0 : "next",
        });
    },
    loopFix: function ({
      slideRealIndex: e,
      slideTo: t = !0,
      direction: s,
      setTranslate: i,
      activeSlideIndex: n,
      byController: r,
      byMousewheel: a,
    } = {}) {
      const l = this;
      if (!l.params.loop) return;
      l.emit("beforeLoopFix");
      const {
        slides: o,
        allowSlidePrev: d,
        allowSlideNext: c,
        slidesEl: p,
        params: u,
      } = l;
      if (
        ((l.allowSlidePrev = !0),
        (l.allowSlideNext = !0),
        l.virtual && u.virtual.enabled)
      )
        return (
          t &&
            (u.centeredSlides || 0 !== l.snapIndex
              ? u.centeredSlides && l.snapIndex < u.slidesPerView
                ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
                : l.snapIndex === l.snapGrid.length - 1 &&
                  l.slideTo(l.virtual.slidesBefore, 0, !1, !0)
              : l.slideTo(l.virtual.slides.length, 0, !1, !0)),
          (l.allowSlidePrev = d),
          (l.allowSlideNext = c),
          void l.emit("loopFix")
        );
      const m =
        "auto" === u.slidesPerView
          ? l.slidesPerViewDynamic()
          : Math.ceil(parseFloat(u.slidesPerView, 10));
      let f = u.loopedSlides || m;
      f % u.slidesPerGroup != 0 &&
        (f += u.slidesPerGroup - (f % u.slidesPerGroup)),
        (l.loopedSlides = f);
      const h = [],
        g = [];
      let v = l.activeIndex;
      void 0 === n
        ? (n = S(
            l.slides.filter((e) =>
              e.classList.contains("swiper-slide-active")
            )[0]
          ))
        : (v = n);
      const w = "next" === s || !s,
        b = "prev" === s || !s;
      let T = 0,
        y = 0;
      if (n < f) {
        T = f - n;
        for (let e = 0; e < f - n; e += 1) {
          const t = e - Math.floor(e / o.length) * o.length;
          h.push(o.length - t - 1);
        }
      } else if (n > l.slides.length - 2 * f) {
        y = n - (l.slides.length - 2 * f);
        for (let e = 0; e < y; e += 1) {
          const t = e - Math.floor(e / o.length) * o.length;
          g.push(t);
        }
      }
      if (
        (b &&
          h.forEach((e) => {
            p.prepend(l.slides[e]);
          }),
        w &&
          g.forEach((e) => {
            p.append(l.slides[e]);
          }),
        l.recalcSlides(),
        u.watchSlidesProgress && l.updateSlidesOffset(),
        t)
      )
        if (h.length > 0 && b)
          if (void 0 === e) {
            const e = l.slidesGrid[v],
              t = l.slidesGrid[v + T] - e;
            a
              ? l.setTranslate(l.translate - t)
              : (l.slideTo(v + T, 0, !1, !0),
                i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
          } else i && l.slideToLoop(e, 0, !1, !0);
        else if (g.length > 0 && w)
          if (void 0 === e) {
            const e = l.slidesGrid[v],
              t = l.slidesGrid[v - y] - e;
            a
              ? l.setTranslate(l.translate - t)
              : (l.slideTo(v - y, 0, !1, !0),
                i && (l.touches[l.isHorizontal() ? "startX" : "startY"] += t));
          } else l.slideToLoop(e, 0, !1, !0);
      if (
        ((l.allowSlidePrev = d),
        (l.allowSlideNext = c),
        l.controller && l.controller.control && !r)
      ) {
        const t = {
          slideRealIndex: e,
          slideTo: !1,
          direction: s,
          setTranslate: i,
          activeSlideIndex: n,
          byController: !0,
        };
        Array.isArray(l.controller.control)
          ? l.controller.control.forEach((e) => {
              e.params.loop && e.loopFix(t);
            })
          : l.controller.control instanceof l.constructor &&
            l.controller.control.params.loop &&
            l.controller.control.loopFix(t);
      }
      l.emit("loopFix");
    },
    loopDestroy: function () {
      const e = this,
        { slides: t, params: s, slidesEl: i } = e;
      if (!s.loop || (e.virtual && e.params.virtual.enabled)) return;
      e.recalcSlides();
      const n = [];
      t.forEach((e) => {
        const t =
          void 0 === e.swiperSlideIndex
            ? 1 * e.getAttribute("data-swiper-slide-index")
            : e.swiperSlideIndex;
        n[t] = e;
      }),
        t.forEach((e) => {
          e.removeAttribute("data-swiper-slide-index");
        }),
        n.forEach((e) => {
          i.append(e);
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0);
    },
  };
  function $(e) {
    const t = this,
      s = l(),
      i = d(),
      n = t.touchEventsData;
    n.evCache.push(e);
    const { params: r, touches: a, enabled: o } = t;
    if (!o) return;
    if (!r.simulateTouch && "mouse" === e.pointerType) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let c = e;
    c.originalEvent && (c = c.originalEvent);
    let u = c.target;
    if ("wrapper" === r.touchEventsTarget && !t.wrapperEl.contains(u)) return;
    if ("which" in c && 3 === c.which) return;
    if ("button" in c && c.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    const m = !!r.noSwipingClass && "" !== r.noSwipingClass,
      f = e.composedPath ? e.composedPath() : e.path;
    m && c.target && c.target.shadowRoot && f && (u = f[0]);
    const h = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      g = !(!c.target || !c.target.shadowRoot);
    if (
      r.noSwiping &&
      (g
        ? (function (e, t = this) {
            return (function t(s) {
              if (!s || s === l() || s === d()) return null;
              s.assignedSlot && (s = s.assignedSlot);
              const i = s.closest(e);
              return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
            })(t);
          })(h, u)
        : u.closest(h))
    )
      return void (t.allowClick = !0);
    if (r.swipeHandler && !u.closest(r.swipeHandler)) return;
    (a.currentX = c.pageX), (a.currentY = c.pageY);
    const v = a.currentX,
      w = a.currentY,
      b = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      S = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (b && (v <= S || v >= i.innerWidth - S)) {
      if ("prevent" !== b) return;
      e.preventDefault();
    }
    Object.assign(n, {
      isTouched: !0,
      isMoved: !1,
      allowTouchCallbacks: !0,
      isScrolling: void 0,
      startMoving: void 0,
    }),
      (a.startX = v),
      (a.startY = w),
      (n.touchStartTime = p()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (n.allowThresholdMove = !1);
    let T = !0;
    u.matches(n.focusableElements) &&
      ((T = !1), "SELECT" === u.nodeName && (n.isTouched = !1)),
      s.activeElement &&
        s.activeElement.matches(n.focusableElements) &&
        s.activeElement !== u &&
        s.activeElement.blur();
    const y = T && t.allowTouchMove && r.touchStartPreventDefault;
    (!r.touchStartForcePreventDefault && !y) ||
      u.isContentEditable ||
      c.preventDefault(),
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
      t.emit("touchStart", c);
  }
  function B(e) {
    const t = l(),
      s = this,
      i = s.touchEventsData,
      { params: n, touches: r, rtlTranslate: a, enabled: o } = s;
    if (!o) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    let d = e;
    if ((d.originalEvent && (d = d.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit("touchMoveOpposite", d)
      );
    const c = i.evCache.findIndex((e) => e.pointerId === d.pointerId);
    c >= 0 && (i.evCache[c] = d);
    const u = i.evCache.length > 1 ? i.evCache[0] : d,
      m = u.pageX,
      f = u.pageY;
    if (d.preventedByNestedSwiper) return (r.startX = m), void (r.startY = f);
    if (!s.allowTouchMove)
      return (
        d.target.matches(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(r, {
            startX: m,
            startY: f,
            prevX: s.touches.currentX,
            prevY: s.touches.currentY,
            currentX: m,
            currentY: f,
          }),
          (i.touchStartTime = p()))
        )
      );
    if (n.touchReleaseOnEdges && !n.loop)
      if (s.isVertical()) {
        if (
          (f < r.startY && s.translate <= s.maxTranslate()) ||
          (f > r.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (m < r.startX && s.translate <= s.maxTranslate()) ||
        (m > r.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      t.activeElement &&
      d.target === t.activeElement &&
      d.target.matches(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit("touchMove", d),
      d.targetTouches && d.targetTouches.length > 1)
    )
      return;
    (r.currentX = m), (r.currentY = f);
    const h = r.currentX - r.startX,
      g = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(h ** 2 + g ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && r.currentY === r.startY) ||
      (s.isVertical() && r.currentX === r.startX)
        ? (i.isScrolling = !1)
        : h * h + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(h))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > n.touchAngle
            : 90 - e > n.touchAngle));
    }
    if (
      (i.isScrolling && s.emit("touchMoveOpposite", d),
      void 0 === i.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (i.startMoving = !0)),
      i.isScrolling ||
        (s.zoom &&
          s.params.zoom &&
          s.params.zoom.enabled &&
          i.evCache.length > 1))
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !n.cssMode && d.cancelable && d.preventDefault(),
      n.touchMoveStopPropagation && !n.nested && d.stopPropagation();
    let v = s.isHorizontal() ? h : g,
      w = s.isHorizontal()
        ? r.currentX - r.previousX
        : r.currentY - r.previousY;
    n.oneWayMovement &&
      ((v = Math.abs(v) * (a ? 1 : -1)), (w = Math.abs(w) * (a ? 1 : -1))),
      (r.diff = v),
      (v *= n.touchRatio),
      a && ((v = -v), (w = -w));
    const b = s.touchesDirection;
    (s.swipeDirection = v > 0 ? "prev" : "next"),
      (s.touchesDirection = w > 0 ? "prev" : "next");
    const S = s.params.loop && !n.cssMode;
    if (!i.isMoved) {
      if (
        (S && s.loopFix({ direction: s.swipeDirection }),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating)
      ) {
        const e = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0,
        });
        s.wrapperEl.dispatchEvent(e);
      }
      (i.allowMomentumBounce = !1),
        !n.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", d);
    }
    let T;
    i.isMoved &&
      b !== s.touchesDirection &&
      S &&
      Math.abs(v) >= 1 &&
      (s.loopFix({ direction: s.swipeDirection, setTranslate: !0 }), (T = !0)),
      s.emit("sliderMove", d),
      (i.isMoved = !0),
      (i.currentTranslate = v + i.startTranslate);
    let y = !0,
      E = n.resistanceRatio;
    if (
      (n.touchReleaseOnEdges && (E = 0),
      v > 0
        ? (S &&
            !T &&
            i.currentTranslate >
              (n.centeredSlides
                ? s.minTranslate() - s.size / 2
                : s.minTranslate()) &&
            s.loopFix({
              direction: "prev",
              setTranslate: !0,
              activeSlideIndex: 0,
            }),
          i.currentTranslate > s.minTranslate() &&
            ((y = !1),
            n.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + v) ** E)))
        : v < 0 &&
          (S &&
            !T &&
            i.currentTranslate <
              (n.centeredSlides
                ? s.maxTranslate() + s.size / 2
                : s.maxTranslate()) &&
            s.loopFix({
              direction: "next",
              setTranslate: !0,
              activeSlideIndex:
                s.slides.length -
                ("auto" === n.slidesPerView
                  ? s.slidesPerViewDynamic()
                  : Math.ceil(parseFloat(n.slidesPerView, 10))),
            }),
          i.currentTranslate < s.maxTranslate() &&
            ((y = !1),
            n.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - v) ** E))),
      y && (d.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      n.threshold > 0)
    ) {
      if (!(Math.abs(v) > n.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (i.currentTranslate = i.startTranslate),
          void (r.diff = s.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    n.followFinger &&
      !n.cssMode &&
      (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
        n.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        n.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function D(e) {
    const t = this,
      s = t.touchEventsData,
      i = s.evCache.findIndex((t) => t.pointerId === e.pointerId);
    if (
      (i >= 0 && s.evCache.splice(i, 1),
      ["pointercancel", "pointerout", "pointerleave"].includes(e.type))
    )
      return;
    const {
      params: n,
      touches: r,
      rtlTranslate: a,
      slidesGrid: l,
      enabled: o,
    } = t;
    if (!o) return;
    if (!n.simulateTouch && "mouse" === e.pointerType) return;
    let d = e;
    if (
      (d.originalEvent && (d = d.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", d),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && n.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    n.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const u = p(),
      m = u - s.touchStartTime;
    if (t.allowClick) {
      const e = d.path || (d.composedPath && d.composedPath());
      t.updateClickedSlide((e && e[0]) || d.target),
        t.emit("tap click", d),
        m < 300 &&
          u - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", d);
    }
    if (
      ((s.lastClickTime = p()),
      c(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === r.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let f;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (f = n.followFinger
        ? a
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      n.cssMode)
    )
      return;
    if (t.params.freeMode && n.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: f });
    let h = 0,
      g = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < l.length;
      e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
    ) {
      const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      void 0 !== l[e + t]
        ? f >= l[e] && f < l[e + t] && ((h = e), (g = l[e + t] - l[e]))
        : f >= l[e] && ((h = e), (g = l[l.length - 1] - l[l.length - 2]));
    }
    let v = null,
      w = null;
    n.rewind &&
      (t.isBeginning
        ? (w =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (v = 0));
    const b = (f - l[h]) / g,
      S = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (m > n.longSwipesMs) {
      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (b >= n.longSwipesRatio
          ? t.slideTo(n.rewind && t.isEnd ? v : h + S)
          : t.slideTo(h)),
        "prev" === t.swipeDirection &&
          (b > 1 - n.longSwipesRatio
            ? t.slideTo(h + S)
            : null !== w && b < 0 && Math.abs(b) > n.longSwipesRatio
            ? t.slideTo(w)
            : t.slideTo(h));
    } else {
      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
        ? d.target === t.navigation.nextEl
          ? t.slideTo(h + S)
          : t.slideTo(h)
        : ("next" === t.swipeDirection && t.slideTo(null !== v ? v : h + S),
          "prev" === t.swipeDirection && t.slideTo(null !== w ? w : h));
    }
  }
  let _;
  function F() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e,
      a = e.virtual && e.params.virtual.enabled;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses();
    const l = a && t.loop;
    !("auto" === t.slidesPerView || t.slidesPerView > 1) ||
    !e.isEnd ||
    e.isBeginning ||
    e.params.centeredSlides ||
    l
      ? e.params.loop && !a
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0)
      : e.slideTo(e.slides.length - 1, 0, !1, !0),
      e.autoplay &&
        e.autoplay.running &&
        e.autoplay.paused &&
        (clearTimeout(_),
        (_ = setTimeout(() => {
          e.autoplay.resume();
        }, 500))),
      (e.allowSlidePrev = n),
      (e.allowSlideNext = i),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function H(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function N() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
    if (!i) return;
    let n;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  const V = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const s = t.closest(
      e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
    );
    if (s) {
      const t = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      t && t.remove();
    }
  };
  function j(e) {
    V(this, e.target), this.update();
  }
  let R = !1;
  function q() {}
  const W = (e, t) => {
    const s = l(),
      { params: i, el: n, wrapperEl: r, device: a } = e,
      o = !!i.nested,
      d = "on" === t ? "addEventListener" : "removeEventListener",
      c = t;
    n[d]("pointerdown", e.onTouchStart, { passive: !1 }),
      s[d]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
      s[d]("pointerup", e.onTouchEnd, { passive: !0 }),
      s[d]("pointercancel", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerout", e.onTouchEnd, { passive: !0 }),
      s[d]("pointerleave", e.onTouchEnd, { passive: !0 }),
      (i.preventClicks || i.preventClicksPropagation) &&
        n[d]("click", e.onClick, !0),
      i.cssMode && r[d]("scroll", e.onScroll),
      i.updateOnWindowResize
        ? e[c](
            a.ios || a.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            F,
            !0
          )
        : e[c]("observerUpdate", F, !0),
      n[d]("load", e.onLoad, { capture: !0 });
  };
  const X = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const Y = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopedSlides: null,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function U(e, t) {
    return function (s = {}) {
      const i = Object.keys(s)[0],
        n = s[i];
      "object" == typeof n && null !== n
        ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
            !0 === e[i] &&
            (e[i] = { auto: !0 }),
          i in e && "enabled" in n
            ? (!0 === e[i] && (e[i] = { enabled: !0 }),
              "object" != typeof e[i] ||
                "enabled" in e[i] ||
                (e[i].enabled = !0),
              e[i] || (e[i] = { enabled: !1 }),
              f(t, s))
            : f(t, s))
        : f(t, s);
    };
  }
  const K = {
      eventsEmitter: k,
      update: A,
      translate: I,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${e}ms`),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          i.cssMode ||
            (i.autoHeight && s.updateAutoHeight(),
            O({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: i } = s;
          (s.animating = !1),
            i.cssMode ||
              (s.setTransition(0),
              O({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: z,
      loop: G,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = "move"), (s.style.cursor = e ? "grabbing" : "grab");
        },
        unsetGrabCursor: function () {
          const e = this;
          (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
            ].style.cursor = "");
        },
      },
      events: {
        attachEvents: function () {
          const e = this,
            t = l(),
            { params: s } = e;
          (e.onTouchStart = $.bind(e)),
            (e.onTouchMove = B.bind(e)),
            (e.onTouchEnd = D.bind(e)),
            s.cssMode && (e.onScroll = N.bind(e)),
            (e.onClick = H.bind(e)),
            (e.onLoad = j.bind(e)),
            R || (t.addEventListener("touchstart", q), (R = !0)),
            W(e, "on");
        },
        detachEvents: function () {
          W(this, "off");
        },
      },
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            { realIndex: t, initialized: s, params: i, el: n } = e,
            r = i.breakpoints;
          if (!r || (r && 0 === Object.keys(r).length)) return;
          const a = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
          if (!a || e.currentBreakpoint === a) return;
          const l = (a in r ? r[a] : void 0) || e.originalParams,
            o = X(e, i),
            d = X(e, l),
            c = i.enabled;
          o && !d
            ? (n.classList.remove(
                `${i.containerModifierClass}grid`,
                `${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !o &&
              d &&
              (n.classList.add(`${i.containerModifierClass}grid`),
              ((l.grid.fill && "column" === l.grid.fill) ||
                (!l.grid.fill && "column" === i.grid.fill)) &&
                n.classList.add(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses()),
            ["navigation", "pagination", "scrollbar"].forEach((t) => {
              const s = i[t] && i[t].enabled,
                n = l[t] && l[t].enabled;
              s && !n && e[t].disable(), !s && n && e[t].enable();
            });
          const p = l.direction && l.direction !== i.direction,
            u = i.loop && (l.slidesPerView !== i.slidesPerView || p);
          p && s && e.changeDirection(), f(e.params, l);
          const m = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            c && !m ? e.disable() : !c && m && e.enable(),
            (e.currentBreakpoint = a),
            e.emit("_beforeBreakpoint", l),
            u && s && (e.loopDestroy(), e.loopCreate(t), e.updateSlides()),
            e.emit("breakpoint", l);
        },
        getBreakpoint: function (e, t = "window", s) {
          if (!e || ("container" === t && !s)) return;
          let i = !1;
          const n = d(),
            r = "window" === t ? n.innerHeight : s.clientHeight,
            a = Object.keys(e).map((e) => {
              if ("string" == typeof e && 0 === e.indexOf("@")) {
                const t = parseFloat(e.substr(1));
                return { value: r * t, point: e };
              }
              return { value: e, point: e };
            });
          a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < a.length; e += 1) {
            const { point: r, value: l } = a[e];
            "window" === t
              ? n.matchMedia(`(min-width: ${l}px)`).matches && (i = r)
              : l <= s.clientWidth && (i = r);
          }
          return i || "max";
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: i } = s;
          if (i) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: {
        addClasses: function () {
          const e = this,
            { classNames: t, params: s, rtl: i, el: n, device: r } = e,
            a = (function (e, t) {
              const s = [];
              return (
                e.forEach((e) => {
                  "object" == typeof e
                    ? Object.keys(e).forEach((i) => {
                        e[i] && s.push(t + i);
                      })
                    : "string" == typeof e && s.push(t + e);
                }),
                s
              );
            })(
              [
                "initialized",
                s.direction,
                { "free-mode": e.params.freeMode && s.freeMode.enabled },
                { autoheight: s.autoHeight },
                { rtl: i },
                { grid: s.grid && s.grid.rows > 1 },
                {
                  "grid-column":
                    s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
                },
                { android: r.android },
                { ios: r.ios },
                { "css-mode": s.cssMode },
                { centered: s.cssMode && s.centeredSlides },
                { "watch-progress": s.watchSlidesProgress },
              ],
              s.containerModifierClass
            );
          t.push(...a), n.classList.add(...t), e.emitContainerClasses();
        },
        removeClasses: function () {
          const { el: e, classNames: t } = this;
          e.classList.remove(...t), this.emitContainerClasses();
        },
      },
    },
    J = {};
  class Q {
    constructor(...e) {
      let t, s;
      1 === e.length &&
      e[0].constructor &&
      "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
        ? (s = e[0])
        : ([t, s] = e),
        s || (s = {}),
        (s = f({}, s)),
        t && !s.el && (s.el = t);
      const i = l();
      if (
        s.el &&
        "string" == typeof s.el &&
        i.querySelectorAll(s.el).length > 1
      ) {
        const e = [];
        return (
          i.querySelectorAll(s.el).forEach((t) => {
            const i = f({}, s, { el: t });
            e.push(new Q(i));
          }),
          e
        );
      }
      const n = this;
      (n.__swiper__ = !0),
        (n.support = M()),
        (n.device = L({ userAgent: s.userAgent })),
        (n.browser = P()),
        (n.eventsListeners = {}),
        (n.eventsAnyListeners = []),
        (n.modules = [...n.__modules__]),
        s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
      const r = {};
      n.modules.forEach((e) => {
        e({
          params: s,
          swiper: n,
          extendParams: U(s, r),
          on: n.on.bind(n),
          once: n.once.bind(n),
          off: n.off.bind(n),
          emit: n.emit.bind(n),
        });
      });
      const a = f({}, Y, r);
      return (
        (n.params = f({}, a, J, s)),
        (n.originalParams = f({}, n.params)),
        (n.passedParams = f({}, s)),
        n.params &&
          n.params.on &&
          Object.keys(n.params.on).forEach((e) => {
            n.on(e, n.params.on[e]);
          }),
        n.params && n.params.onAny && n.onAny(n.params.onAny),
        Object.assign(n, {
          enabled: n.params.enabled,
          el: t,
          classNames: [],
          slides: [],
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === n.params.direction,
          isVertical: () => "vertical" === n.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: n.params.allowSlideNext,
          allowSlidePrev: n.params.allowSlidePrev,
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: n.params.focusableElements,
            lastClickTime: p(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            startMoving: void 0,
            evCache: [],
          },
          allowClick: !0,
          allowTouchMove: n.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        n.emit("_swiper"),
        n.params.init && n.init(),
        n
      );
    }
    recalcSlides() {
      const { slidesEl: e, params: t } = this;
      this.slides = v(e, `.${t.slideClass}, swiper-slide`);
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit("enable"));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit("disable"));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const i = s.minTranslate(),
        n = (s.maxTranslate() - i) * e + i;
      s.translateTo(n, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(" ")
        .filter(
          (t) =>
            0 === t.indexOf("swiper") ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit("_containerClasses", t.join(" "));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ""
        : e.className
            .split(" ")
            .filter(
              (e) =>
                0 === e.indexOf("swiper-slide") ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(" ");
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.forEach((s) => {
        const i = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: s,
        slides: i,
        slidesGrid: n,
        slidesSizesGrid: r,
        size: a,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = i[l].swiperSlideSize;
        for (let s = l + 1; s < i.length; s += 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          i[s] &&
            !e &&
            ((t += i[s].swiperSlideSize), (o += 1), t > a && (e = !0));
      } else if ("current" === e)
        for (let e = l + 1; e < i.length; e += 1) {
          (t ? n[e] + r[e] - n[l] < a : n[e] - n[l] < a) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          n[l] - n[e] < a && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function i() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let n;
      s.breakpoints && e.setBreakpoint(),
        [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t) => {
          t.complete && V(e, t);
        }),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (i(), e.params.autoHeight && e.updateAutoHeight())
          : ((n =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            n || i()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const s = this,
        i = s.params.direction;
      return (
        e || (e = "horizontal" === i ? "vertical" : "horizontal"),
        e === i ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.el.classList.remove(`${s.params.containerModifierClass}${i}`),
          s.el.classList.add(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.forEach((t) => {
            "vertical" === e ? (t.style.width = "") : (t.style.height = "");
          }),
          s.emit("changeDirection"),
          t && s.update()),
        s
      );
    }
    changeLanguageDirection(e) {
      const t = this;
      (t.rtl && "rtl" === e) ||
        (!t.rtl && "ltr" === e) ||
        ((t.rtl = "rtl" === e),
        (t.rtlTranslate = "horizontal" === t.params.direction && t.rtl),
        t.rtl
          ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "rtl"))
          : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`),
            (t.el.dir = "ltr")),
        t.update());
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      let s = e || t.params.el;
      if (("string" == typeof s && (s = document.querySelector(s)), !s))
        return !1;
      (s.swiper = t), s.shadowEl && (t.isElement = !0);
      const i = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let n = (() => {
        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
          return s.shadowRoot.querySelector(i());
        }
        return v(s, i())[0];
      })();
      return (
        !n &&
          t.params.createElements &&
          ((n = w("div", t.params.wrapperClass)),
          s.append(n),
          v(s, `.${t.params.slideClass}`).forEach((e) => {
            n.append(e);
          })),
        Object.assign(t, {
          el: s,
          wrapperEl: n,
          slidesEl: t.isElement ? s : n,
          mounted: !0,
          rtl: "rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === s.dir.toLowerCase() || "rtl" === b(s, "direction")),
          wrongRTL: "-webkit-box" === b(n, "display"),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit("beforeInit"),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.loop && t.virtual && t.params.virtual.enabled
            ? t.slideTo(
                t.params.initialSlide + t.virtual.slidesBefore,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.params.loop && t.loopCreate(),
          t.attachEvents(),
          [...t.el.querySelectorAll('[loading="lazy"]')].forEach((e) => {
            e.complete
              ? V(t, e)
              : e.addEventListener("load", (e) => {
                  V(t, e.target);
                });
          }),
          (t.initialized = !0),
          t.emit("init"),
          t.emit("afterInit")),
        t
      );
    }
    destroy(e = !0, t = !0) {
      const s = this,
        { params: i, el: n, wrapperEl: r, slides: a } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          i.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            n.removeAttribute("style"),
            r.removeAttribute("style"),
            a &&
              a.length &&
              a.forEach((e) => {
                e.classList.remove(
                  i.slideVisibleClass,
                  i.slideActiveClass,
                  i.slideNextClass,
                  i.slidePrevClass
                ),
                  e.removeAttribute("style"),
                  e.removeAttribute("data-swiper-slide-index");
              })),
          s.emit("destroy"),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.el.swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      f(J, e);
    }
    static get extendedDefaults() {
      return J;
    }
    static get defaults() {
      return Y;
    }
    static installModule(e) {
      Q.prototype.__modules__ || (Q.prototype.__modules__ = []);
      const t = Q.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => Q.installModule(e)), Q)
        : (Q.installModule(e), Q);
    }
  }
  Object.keys(K).forEach((e) => {
    Object.keys(K[e]).forEach((t) => {
      Q.prototype[t] = K[e][t];
    });
  }),
    Q.use([
      function ({ swiper: e, on: t, emit: s }) {
        const i = d();
        let n = null,
          r = null;
        const a = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          l = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== i.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((n = new ResizeObserver((t) => {
                r = i.requestAnimationFrame(() => {
                  const { width: s, height: i } = e;
                  let n = s,
                    r = i;
                  t.forEach(
                    ({ contentBoxSize: t, contentRect: s, target: i }) => {
                      (i && i !== e.el) ||
                        ((n = s ? s.width : (t[0] || t).inlineSize),
                        (r = s ? s.height : (t[0] || t).blockSize));
                    }
                  ),
                    (n === s && r === i) || a();
                });
              })),
              n.observe(e.el))
            : (i.addEventListener("resize", a),
              i.addEventListener("orientationchange", l));
        }),
          t("destroy", () => {
            r && i.cancelAnimationFrame(r),
              n && n.unobserve && e.el && (n.unobserve(e.el), (n = null)),
              i.removeEventListener("resize", a),
              i.removeEventListener("orientationchange", l);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: i }) {
        const n = [],
          r = d(),
          a = (e, t = {}) => {
            const s = new (r.MutationObserver || r.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void i("observerUpdate", e[0]);
                const t = function () {
                  i("observerUpdate", e[0]);
                };
                r.requestAnimationFrame
                  ? r.requestAnimationFrame(t)
                  : r.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              n.push(s);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = T(e.el);
                for (let e = 0; e < t.length; e += 1) a(t[e]);
              }
              a(e.el, { childList: e.params.observeSlideChildren }),
                a(e.wrapperEl, { attributes: !1 });
            }
          }),
          s("destroy", () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const Z = Q;
  function ee(e, t, s, i) {
    return (
      e.params.createElements &&
        Object.keys(i).forEach((n) => {
          if (!s[n] && !0 === s.auto) {
            let r = v(e.el, `.${i[n]}`)[0];
            r || ((r = w("div", i[n])), (r.className = i[n]), e.el.append(r)),
              (s[n] = r),
              (t[n] = r);
          }
        }),
      s
    );
  }
  function te({ swiper: e, extendParams: t, on: s, emit: i }) {
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
        navigationDisabledClass: "swiper-navigation-disabled",
      },
    }),
      (e.navigation = { nextEl: null, prevEl: null });
    const n = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
    function r(t) {
      let s;
      return t &&
        "string" == typeof t &&
        e.isElement &&
        ((s = e.el.shadowRoot.querySelector(t)), s)
        ? s
        : (t &&
            ("string" == typeof t && (s = [...document.querySelectorAll(t)]),
            e.params.uniqueNavElements &&
              "string" == typeof t &&
              s.length > 1 &&
              1 === e.el.querySelectorAll(t).length &&
              (s = e.el.querySelector(t))),
          t && !s ? t : s);
    }
    function a(t, s) {
      const i = e.params.navigation;
      (t = n(t)).forEach((t) => {
        t &&
          (t.classList[s ? "add" : "remove"](...i.disabledClass.split(" ")),
          "BUTTON" === t.tagName && (t.disabled = s),
          e.params.watchOverflow &&
            e.enabled &&
            t.classList[e.isLocked ? "add" : "remove"](i.lockClass));
      });
    }
    function l() {
      const { nextEl: t, prevEl: s } = e.navigation;
      if (e.params.loop) return a(s, !1), void a(t, !1);
      a(s, e.isBeginning && !e.params.rewind),
        a(t, e.isEnd && !e.params.rewind);
    }
    function o(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) &&
          (e.slidePrev(), i("navigationPrev"));
    }
    function d(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) &&
          (e.slideNext(), i("navigationNext"));
    }
    function c() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = ee(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !t.nextEl && !t.prevEl)
      )
        return;
      let s = r(t.nextEl),
        i = r(t.prevEl);
      Object.assign(e.navigation, { nextEl: s, prevEl: i }),
        (s = n(s)),
        (i = n(i));
      const a = (s, i) => {
        s && s.addEventListener("click", "next" === i ? d : o),
          !e.enabled && s && s.classList.add(...t.lockClass.split(" "));
      };
      s.forEach((e) => a(e, "next")), i.forEach((e) => a(e, "prev"));
    }
    function p() {
      let { nextEl: t, prevEl: s } = e.navigation;
      (t = n(t)), (s = n(s));
      const i = (t, s) => {
        t.removeEventListener("click", "next" === s ? d : o),
          t.classList.remove(...e.params.navigation.disabledClass.split(" "));
      };
      t.forEach((e) => i(e, "next")), s.forEach((e) => i(e, "prev"));
    }
    s("init", () => {
      !1 === e.params.navigation.enabled ? u() : (c(), l());
    }),
      s("toEdge fromEdge lock unlock", () => {
        l();
      }),
      s("destroy", () => {
        p();
      }),
      s("enable disable", () => {
        let { nextEl: t, prevEl: s } = e.navigation;
        (t = n(t)),
          (s = n(s)),
          [...t, ...s]
            .filter((e) => !!e)
            .forEach((t) =>
              t.classList[e.enabled ? "remove" : "add"](
                e.params.navigation.lockClass
              )
            );
      }),
      s("click", (t, s) => {
        let { nextEl: r, prevEl: a } = e.navigation;
        (r = n(r)), (a = n(a));
        const l = s.target;
        if (
          e.params.navigation.hideOnClick &&
          !a.includes(l) &&
          !r.includes(l)
        ) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === l || e.pagination.el.contains(l))
          )
            return;
          let t;
          r.length
            ? (t = r[0].classList.contains(e.params.navigation.hiddenClass))
            : a.length &&
              (t = a[0].classList.contains(e.params.navigation.hiddenClass)),
            i(!0 === t ? "navigationShow" : "navigationHide"),
            [...r, ...a]
              .filter((e) => !!e)
              .forEach((t) =>
                t.classList.toggle(e.params.navigation.hiddenClass)
              );
        }
      });
    const u = () => {
      e.el.classList.add(
        ...e.params.navigation.navigationDisabledClass.split(" ")
      ),
        p();
    };
    Object.assign(e.navigation, {
      enable: () => {
        e.el.classList.remove(
          ...e.params.navigation.navigationDisabledClass.split(" ")
        ),
          c(),
          l();
      },
      disable: u,
      update: l,
      init: c,
      destroy: p,
    });
  }
  function se(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function ie({ swiper: e, extendParams: t, on: s, emit: i }) {
    const n = "swiper-pagination";
    let r;
    t({
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: (e) => e,
        formatFractionTotal: (e) => e,
        bulletClass: `${n}-bullet`,
        bulletActiveClass: `${n}-bullet-active`,
        modifierClass: `${n}-`,
        currentClass: `${n}-current`,
        totalClass: `${n}-total`,
        hiddenClass: `${n}-hidden`,
        progressbarFillClass: `${n}-progressbar-fill`,
        progressbarOppositeClass: `${n}-progressbar-opposite`,
        clickableClass: `${n}-clickable`,
        lockClass: `${n}-lock`,
        horizontalClass: `${n}-horizontal`,
        verticalClass: `${n}-vertical`,
        paginationDisabledClass: `${n}-disabled`,
      },
    }),
      (e.pagination = { el: null, bullets: [] });
    let a = 0;
    const l = (e) => (Array.isArray(e) || (e = [e].filter((e) => !!e)), e);
    function o() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        (Array.isArray(e.pagination.el) && 0 === e.pagination.el.length)
      );
    }
    function d(t, s) {
      const { bulletActiveClass: i } = e.params.pagination;
      t &&
        (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
        (t.classList.add(`${i}-${s}`),
        (t = t[("prev" === s ? "previous" : "next") + "ElementSibling"]) &&
          t.classList.add(`${i}-${s}-${s}`));
    }
    function c(t) {
      const s = t.target.closest(se(e.params.pagination.bulletClass));
      if (!s) return;
      t.preventDefault();
      const i = S(s) * e.params.slidesPerGroup;
      e.params.loop ? e.slideToLoop(i) : e.slideTo(i);
    }
    function p() {
      const t = e.rtl,
        s = e.params.pagination;
      if (o()) return;
      let n,
        c = e.pagination.el;
      c = l(c);
      const p =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        u = e.params.loop
          ? Math.ceil(p / e.params.slidesPerGroup)
          : e.snapGrid.length;
      if (
        ((n = e.params.loop
          ? e.params.slidesPerGroup > 1
            ? Math.floor(e.realIndex / e.params.slidesPerGroup)
            : e.realIndex
          : void 0 !== e.snapIndex
          ? e.snapIndex
          : e.activeIndex || 0),
        "bullets" === s.type &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const i = e.pagination.bullets;
        let l, o, p;
        if (
          (s.dynamicBullets &&
            ((r = y(i[0], e.isHorizontal() ? "width" : "height", !0)),
            c.forEach((t) => {
              t.style[e.isHorizontal() ? "width" : "height"] =
                r * (s.dynamicMainBullets + 4) + "px";
            }),
            s.dynamicMainBullets > 1 &&
              void 0 !== e.previousIndex &&
              ((a += n - (e.previousIndex || 0)),
              a > s.dynamicMainBullets - 1
                ? (a = s.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (l = Math.max(n - a, 0)),
            (o = l + (Math.min(i.length, s.dynamicMainBullets) - 1)),
            (p = (o + l) / 2)),
          i.forEach((e) => {
            e.classList.remove(
              ...[
                "",
                "-next",
                "-next-next",
                "-prev",
                "-prev-prev",
                "-main",
              ].map((e) => `${s.bulletActiveClass}${e}`)
            );
          }),
          c.length > 1)
        )
          i.forEach((e) => {
            const t = S(e);
            t === n && e.classList.add(s.bulletActiveClass),
              s.dynamicBullets &&
                (t >= l &&
                  t <= o &&
                  e.classList.add(`${s.bulletActiveClass}-main`),
                t === l && d(e, "prev"),
                t === o && d(e, "next"));
          });
        else {
          const e = i[n];
          if ((e && e.classList.add(s.bulletActiveClass), s.dynamicBullets)) {
            const e = i[l],
              t = i[o];
            for (let e = l; e <= o; e += 1)
              i[e].classList.add(`${s.bulletActiveClass}-main`);
            d(e, "prev"), d(t, "next");
          }
        }
        if (s.dynamicBullets) {
          const n = Math.min(i.length, s.dynamicMainBullets + 4),
            a = (r * n - r) / 2 - p * r,
            l = t ? "right" : "left";
          i.forEach((t) => {
            t.style[e.isHorizontal() ? l : "top"] = `${a}px`;
          });
        }
      }
      c.forEach((t, r) => {
        if (
          ("fraction" === s.type &&
            (t.querySelectorAll(se(s.currentClass)).forEach((e) => {
              e.textContent = s.formatFractionCurrent(n + 1);
            }),
            t.querySelectorAll(se(s.totalClass)).forEach((e) => {
              e.textContent = s.formatFractionTotal(u);
            })),
          "progressbar" === s.type)
        ) {
          let i;
          i = s.progressbarOpposite
            ? e.isHorizontal()
              ? "vertical"
              : "horizontal"
            : e.isHorizontal()
            ? "horizontal"
            : "vertical";
          const r = (n + 1) / u;
          let a = 1,
            l = 1;
          "horizontal" === i ? (a = r) : (l = r),
            t.querySelectorAll(se(s.progressbarFillClass)).forEach((t) => {
              (t.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${l})`),
                (t.style.transitionDuration = `${e.params.speed}ms`);
            });
        }
        "custom" === s.type && s.renderCustom
          ? ((t.innerHTML = s.renderCustom(e, n + 1, u)),
            0 === r && i("paginationRender", t))
          : (0 === r && i("paginationRender", t), i("paginationUpdate", t)),
          e.params.watchOverflow &&
            e.enabled &&
            t.classList[e.isLocked ? "add" : "remove"](s.lockClass);
      });
    }
    function u() {
      const t = e.params.pagination;
      if (o()) return;
      const s =
        e.virtual && e.params.virtual.enabled
          ? e.virtual.slides.length
          : e.slides.length;
      let n = e.pagination.el;
      n = l(n);
      let r = "";
      if ("bullets" === t.type) {
        let i = e.params.loop
          ? Math.ceil(s / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode && e.params.freeMode.enabled && i > s && (i = s);
        for (let s = 0; s < i; s += 1)
          t.renderBullet
            ? (r += t.renderBullet.call(e, s, t.bulletClass))
            : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
      }
      "fraction" === t.type &&
        (r = t.renderFraction
          ? t.renderFraction.call(e, t.currentClass, t.totalClass)
          : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
        "progressbar" === t.type &&
          (r = t.renderProgressbar
            ? t.renderProgressbar.call(e, t.progressbarFillClass)
            : `<span class="${t.progressbarFillClass}"></span>`),
        n.forEach((s) => {
          "custom" !== t.type && (s.innerHTML = r || ""),
            "bullets" === t.type &&
              (e.pagination.bullets = [
                ...s.querySelectorAll(se(t.bulletClass)),
              ]);
        }),
        "custom" !== t.type && i("paginationRender", n[0]);
    }
    function m() {
      e.params.pagination = ee(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const t = e.params.pagination;
      if (!t.el) return;
      let s;
      "string" == typeof t.el &&
        e.isElement &&
        (s = e.el.shadowRoot.querySelector(t.el)),
        s ||
          "string" != typeof t.el ||
          (s = [...document.querySelectorAll(t.el)]),
        s || (s = t.el),
        s &&
          0 !== s.length &&
          (e.params.uniqueNavElements &&
            "string" == typeof t.el &&
            Array.isArray(s) &&
            s.length > 1 &&
            ((s = [...e.el.querySelectorAll(t.el)]),
            s.length > 1 &&
              (s = s.filter((t) => T(t, ".swiper")[0] === e.el)[0])),
          Array.isArray(s) && 1 === s.length && (s = s[0]),
          Object.assign(e.pagination, { el: s }),
          (s = l(s)),
          s.forEach((s) => {
            "bullets" === t.type &&
              t.clickable &&
              s.classList.add(t.clickableClass),
              s.classList.add(t.modifierClass + t.type),
              s.classList.add(
                e.isHorizontal() ? t.horizontalClass : t.verticalClass
              ),
              "bullets" === t.type &&
                t.dynamicBullets &&
                (s.classList.add(`${t.modifierClass}${t.type}-dynamic`),
                (a = 0),
                t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
              "progressbar" === t.type &&
                t.progressbarOpposite &&
                s.classList.add(t.progressbarOppositeClass),
              t.clickable && s.addEventListener("click", c),
              e.enabled || s.classList.add(t.lockClass);
          }));
    }
    function f() {
      const t = e.params.pagination;
      if (o()) return;
      let s = e.pagination.el;
      s &&
        ((s = l(s)),
        s.forEach((s) => {
          s.classList.remove(t.hiddenClass),
            s.classList.remove(t.modifierClass + t.type),
            s.classList.remove(
              e.isHorizontal() ? t.horizontalClass : t.verticalClass
            ),
            t.clickable && s.removeEventListener("click", c);
        })),
        e.pagination.bullets &&
          e.pagination.bullets.forEach((e) =>
            e.classList.remove(t.bulletActiveClass)
          );
    }
    s("init", () => {
      !1 === e.params.pagination.enabled ? h() : (m(), u(), p());
    }),
      s("activeIndexChange", () => {
        void 0 === e.snapIndex && p();
      }),
      s("snapIndexChange", () => {
        p();
      }),
      s("snapGridLengthChange", () => {
        u(), p();
      }),
      s("destroy", () => {
        f();
      }),
      s("enable disable", () => {
        let { el: t } = e.pagination;
        t &&
          ((t = l(t)),
          t.forEach((t) =>
            t.classList[e.enabled ? "remove" : "add"](
              e.params.pagination.lockClass
            )
          ));
      }),
      s("lock unlock", () => {
        p();
      }),
      s("click", (t, s) => {
        const n = s.target;
        let { el: r } = e.pagination;
        if (
          (Array.isArray(r) || (r = [r].filter((e) => !!e)),
          e.params.pagination.el &&
            e.params.pagination.hideOnClick &&
            r &&
            r.length > 0 &&
            !n.classList.contains(e.params.pagination.bulletClass))
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && n === e.navigation.nextEl) ||
              (e.navigation.prevEl && n === e.navigation.prevEl))
          )
            return;
          const t = r[0].classList.contains(e.params.pagination.hiddenClass);
          i(!0 === t ? "paginationShow" : "paginationHide"),
            r.forEach((t) =>
              t.classList.toggle(e.params.pagination.hiddenClass)
            );
        }
      });
    const h = () => {
      e.el.classList.add(e.params.pagination.paginationDisabledClass);
      let { el: t } = e.pagination;
      t &&
        ((t = l(t)),
        t.forEach((t) =>
          t.classList.add(e.params.pagination.paginationDisabledClass)
        )),
        f();
    };
    Object.assign(e.pagination, {
      enable: () => {
        e.el.classList.remove(e.params.pagination.paginationDisabledClass);
        let { el: t } = e.pagination;
        t &&
          ((t = l(t)),
          t.forEach((t) =>
            t.classList.remove(e.params.pagination.paginationDisabledClass)
          )),
          m(),
          u(),
          p();
      },
      disable: h,
      render: u,
      update: p,
      init: m,
      destroy: f,
    });
  }
  !(function () {
    if (document.querySelector(".swiper")) {
      new Z(".swiper", {
        modules: [te, ie],
        observer: !0,
        observeParents: !0,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        pagination: { el: ".swiper-pagination", clickable: !0 },
        on: {},
      });
    }
    if (document.querySelector(".swiper-one")) {
      new Z(".swiper-one", {
        modules: [te, ie],
        observer: !0,
        observeParents: !0,
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 800,
        pagination: { el: ".swiper-one-pagination", clickable: !0 },
        on: {},
      });
    }
  })();
  let ne = !1;
  setTimeout(() => {
    if (ne) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (function () {
      let s = document.querySelector(".icon-menu"),
        i = document.querySelector(".menu__body");
      s &&
        s.addEventListener("click", function (s) {
          e &&
            (t(),
            document.documentElement.classList.toggle("menu-open"),
            i.classList.toggle("visible-menu"));
        });
    })(),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
