(function () {
  "use strict";
  var Xt = document.createElement("style");
  (Xt.textContent = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.visible{visibility:visible}.fixed{position:fixed}.bottom-6{bottom:1.5rem}.left-1\\/2{left:50%}.right-6{right:1.5rem}.top-24{top:6rem}.z-\\[999\\]{z-index:999}.flex{display:flex}.h-2{height:.5rem}.h-3{height:.75rem}.h-fit{height:fit-content}.w-2{width:.5rem}.w-fit{width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-gray-200\\/50{border-color:#e5e7eb80}.border-gray-200\\/75{border-color:#e5e7ebbf}.border-gray-300\\/10{border-color:#d1d5db1a}.border-gray-300\\/25{border-color:#d1d5db40}.bg-gray-400{--tw-bg-opacity: 1;background-color:rgb(156 163 175 / var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-indigo-100{--tw-bg-opacity: 1;background-color:rgb(224 231 255 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-2{padding:.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.pt-3{padding-top:.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.leading-\\[1\\.775\\]{line-height:1.775}.leading-none{line-height:1}.\\!text-gray-800{--tw-text-opacity: 1 !important;color:rgb(31 41 55 / var(--tw-text-opacity))!important}.\\!text-indigo-800{--tw-text-opacity: 1 !important;color:rgb(55 48 163 / var(--tw-text-opacity))!important}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-indigo-800{--tw-text-opacity: 1;color:rgb(55 48 163 / var(--tw-text-opacity))}.caret-gray-500{caret-color:#6b7280}.opacity-60{opacity:.6}.opacity-80{opacity:.8}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.placeholder\\:text-gray-400::placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.hover\\:bg-gray-50:hover{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.group:hover .group-hover\\:underline{text-decoration-line:underline}
`),
    document.head.appendChild(Xt);
  const _ = {};
  function Je(t) {
    _.context = t;
  }
  const Qe = (t, e) => t === e,
    at = Symbol("solid-proxy"),
    tn = Symbol("solid-dev-component"),
    lt = { equals: Qe };
  let Yt = re;
  const z = 1,
    ct = 2,
    Zt = { owned: null, cleanups: null, context: null, owner: null };
  var b = null;
  let H = null,
    m = null,
    E = null,
    q = null,
    ut = 0;
  function tt(t, e) {
    const n = m,
      r = b,
      i = t.length === 0,
      o = i
        ? Zt
        : {
            owned: null,
            cleanups: null,
            context: null,
            owner: e === void 0 ? r : e,
          },
      a = i ? t : () => t(() => $(() => gt(o)));
    (b = o), (m = null);
    try {
      return K(a, !0);
    } finally {
      (m = n), (b = r);
    }
  }
  function B(t, e) {
    e = e ? Object.assign({}, lt, e) : lt;
    const n = {
        value: t,
        observers: null,
        observerSlots: null,
        comparator: e.equals || void 0,
      },
      r = (i) => (typeof i == "function" && (i = i(n.value)), ne(n, i));
    return [ee.bind(n), r];
  }
  function I(t, e, n) {
    const r = Tt(t, e, !1, z);
    et(r);
  }
  function ft(t, e, n) {
    Yt = ln;
    const r = Tt(t, e, !1, z);
    (r.user = !0), q ? q.push(r) : et(r);
  }
  function O(t, e, n) {
    n = n ? Object.assign({}, lt, n) : lt;
    const r = Tt(t, e, !0, 0);
    return (
      (r.observers = null),
      (r.observerSlots = null),
      (r.comparator = n.equals || void 0),
      et(r),
      ee.bind(r)
    );
  }
  function en(t) {
    return K(t, !1);
  }
  function $(t) {
    if (m === null) return t();
    const e = m;
    m = null;
    try {
      return t();
    } finally {
      m = e;
    }
  }
  function nn(t, e, n) {
    const r = Array.isArray(t);
    let i,
      o = n && n.defer;
    return (a) => {
      let s;
      if (r) {
        s = Array(t.length);
        for (let l = 0; l < t.length; l++) s[l] = t[l]();
      } else s = t();
      if (o) {
        o = !1;
        return;
      }
      const u = $(() => e(s, i, a));
      return (i = s), u;
    };
  }
  function Jt(t) {
    ft(() => $(t));
  }
  function dt(t) {
    return (
      b === null ||
        (b.cleanups === null ? (b.cleanups = [t]) : b.cleanups.push(t)),
      t
    );
  }
  function At() {
    return b;
  }
  function rn(t, e) {
    const n = b,
      r = m;
    (b = t), (m = null);
    try {
      return K(e, !0);
    } catch (i) {
      Ct(i);
    } finally {
      (b = n), (m = r);
    }
  }
  function Qt(t, e) {
    const n = Symbol("context");
    return { id: n, Provider: un(n), defaultValue: t };
  }
  function te(t) {
    let e;
    return (e = oe(b, t.id)) !== void 0 ? e : t.defaultValue;
  }
  function on(t) {
    const e = O(t),
      n = O(() => kt(e()));
    return (
      (n.toArray = () => {
        const r = n();
        return Array.isArray(r) ? r : r != null ? [r] : [];
      }),
      n
    );
  }
  function ee() {
    const t = H;
    if (this.sources && (this.state || t))
      if (this.state === z || t) et(this);
      else {
        const e = E;
        (E = null), K(() => pt(this), !1), (E = e);
      }
    if (m) {
      const e = this.observers ? this.observers.length : 0;
      m.sources
        ? (m.sources.push(this), m.sourceSlots.push(e))
        : ((m.sources = [this]), (m.sourceSlots = [e])),
        this.observers
          ? (this.observers.push(m),
            this.observerSlots.push(m.sources.length - 1))
          : ((this.observers = [m]),
            (this.observerSlots = [m.sources.length - 1]));
    }
    return this.value;
  }
  function ne(t, e, n) {
    let r = t.value;
    return (
      (!t.comparator || !t.comparator(r, e)) &&
        ((t.value = e),
        t.observers &&
          t.observers.length &&
          K(() => {
            for (let i = 0; i < t.observers.length; i += 1) {
              const o = t.observers[i],
                a = H && H.running;
              a && H.disposed.has(o),
                ((a && !o.tState) || (!a && !o.state)) &&
                  (o.pure ? E.push(o) : q.push(o), o.observers && ie(o)),
                a || (o.state = z);
            }
            if (E.length > 1e6) throw ((E = []), new Error());
          }, !1)),
      e
    );
  }
  function et(t) {
    if (!t.fn) return;
    gt(t);
    const e = b,
      n = m,
      r = ut;
    (m = b = t), sn(t, t.value, r), (m = n), (b = e);
  }
  function sn(t, e, n) {
    let r;
    try {
      r = t.fn(e);
    } catch (i) {
      return (
        t.pure &&
          ((t.state = z), t.owned && t.owned.forEach(gt), (t.owned = null)),
        (t.updatedAt = n + 1),
        Ct(i)
      );
    }
    (!t.updatedAt || t.updatedAt <= n) &&
      (t.updatedAt != null && "observers" in t ? ne(t, r) : (t.value = r),
      (t.updatedAt = n));
  }
  function Tt(t, e, n, r = z, i) {
    const o = {
      fn: t,
      state: r,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: e,
      owner: b,
      context: null,
      pure: n,
    };
    return (
      b === null || (b !== Zt && (b.owned ? b.owned.push(o) : (b.owned = [o]))),
      o
    );
  }
  function ht(t) {
    const e = H;
    if (t.state === 0 || e) return;
    if (t.state === ct || e) return pt(t);
    if (t.suspense && $(t.suspense.inFallback))
      return t.suspense.effects.push(t);
    const n = [t];
    for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < ut); )
      (t.state || e) && n.push(t);
    for (let r = n.length - 1; r >= 0; r--)
      if (((t = n[r]), t.state === z || e)) et(t);
      else if (t.state === ct || e) {
        const i = E;
        (E = null), K(() => pt(t, n[0]), !1), (E = i);
      }
  }
  function K(t, e) {
    if (E) return t();
    let n = !1;
    e || (E = []), q ? (n = !0) : (q = []), ut++;
    try {
      const r = t();
      return an(n), r;
    } catch (r) {
      n || (q = null), (E = null), Ct(r);
    }
  }
  function an(t) {
    if ((E && (re(E), (E = null)), t)) return;
    const e = q;
    (q = null), e.length && K(() => Yt(e), !1);
  }
  function re(t) {
    for (let e = 0; e < t.length; e++) ht(t[e]);
  }
  function ln(t) {
    let e,
      n = 0;
    for (e = 0; e < t.length; e++) {
      const r = t[e];
      r.user ? (t[n++] = r) : ht(r);
    }
    for (_.context && Je(), e = 0; e < n; e++) ht(t[e]);
  }
  function pt(t, e) {
    const n = H;
    t.state = 0;
    for (let r = 0; r < t.sources.length; r += 1) {
      const i = t.sources[r];
      i.sources &&
        (i.state === z || n
          ? i !== e && (!i.updatedAt || i.updatedAt < ut) && ht(i)
          : (i.state === ct || n) && pt(i, e));
    }
  }
  function ie(t) {
    const e = H;
    for (let n = 0; n < t.observers.length; n += 1) {
      const r = t.observers[n];
      (!r.state || e) &&
        ((r.state = ct), r.pure ? E.push(r) : q.push(r), r.observers && ie(r));
    }
  }
  function gt(t) {
    let e;
    if (t.sources)
      for (; t.sources.length; ) {
        const n = t.sources.pop(),
          r = t.sourceSlots.pop(),
          i = n.observers;
        if (i && i.length) {
          const o = i.pop(),
            a = n.observerSlots.pop();
          r < i.length &&
            ((o.sourceSlots[a] = r), (i[r] = o), (n.observerSlots[r] = a));
        }
      }
    if (t.owned) {
      for (e = 0; e < t.owned.length; e++) gt(t.owned[e]);
      t.owned = null;
    }
    if (t.cleanups) {
      for (e = 0; e < t.cleanups.length; e++) t.cleanups[e]();
      t.cleanups = null;
    }
    (t.state = 0), (t.context = null);
  }
  function cn(t) {
    return t instanceof Error || typeof t == "string"
      ? t
      : new Error("Unknown error");
  }
  function Ct(t) {
    throw ((t = cn(t)), t);
  }
  function oe(t, e) {
    return t
      ? t.context && t.context[e] !== void 0
        ? t.context[e]
        : oe(t.owner, e)
      : void 0;
  }
  function kt(t) {
    if (typeof t == "function" && !t.length) return kt(t());
    if (Array.isArray(t)) {
      const e = [];
      for (let n = 0; n < t.length; n++) {
        const r = kt(t[n]);
        Array.isArray(r) ? e.push.apply(e, r) : e.push(r);
      }
      return e;
    }
    return t;
  }
  function un(t, e) {
    return function (r) {
      let i;
      return (
        I(
          () =>
            (i = $(
              () => ((b.context = { [t]: r.value }), on(() => r.children))
            )),
          void 0
        ),
        i
      );
    };
  }
  function C(t, e) {
    return $(() => t(e || {}));
  }
  function yt() {
    return !0;
  }
  const Ot = {
    get(t, e, n) {
      return e === at ? n : t.get(e);
    },
    has(t, e) {
      return e === at ? !0 : t.has(e);
    },
    set: yt,
    deleteProperty: yt,
    getOwnPropertyDescriptor(t, e) {
      return {
        configurable: !0,
        enumerable: !0,
        get() {
          return t.get(e);
        },
        set: yt,
        deleteProperty: yt,
      };
    },
    ownKeys(t) {
      return t.keys();
    },
  };
  function Pt(t) {
    return (t = typeof t == "function" ? t() : t) ? t : {};
  }
  function $t(...t) {
    let e = !1;
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      (e = e || (!!i && at in i)),
        (t[r] = typeof i == "function" ? ((e = !0), O(i)) : i);
    }
    if (e)
      return new Proxy(
        {
          get(r) {
            for (let i = t.length - 1; i >= 0; i--) {
              const o = Pt(t[i])[r];
              if (o !== void 0) return o;
            }
          },
          has(r) {
            for (let i = t.length - 1; i >= 0; i--)
              if (r in Pt(t[i])) return !0;
            return !1;
          },
          keys() {
            const r = [];
            for (let i = 0; i < t.length; i++) r.push(...Object.keys(Pt(t[i])));
            return [...new Set(r)];
          },
        },
        Ot
      );
    const n = {};
    for (let r = t.length - 1; r >= 0; r--)
      if (t[r]) {
        const i = Object.getOwnPropertyDescriptors(t[r]);
        for (const o in i)
          o in n ||
            Object.defineProperty(n, o, {
              enumerable: !0,
              get() {
                for (let a = t.length - 1; a >= 0; a--) {
                  const s = (t[a] || {})[o];
                  if (s !== void 0) return s;
                }
              },
            });
      }
    return n;
  }
  function se(t, ...e) {
    const n = new Set(e.flat());
    if (at in t) {
      const i = e.map(
        (o) =>
          new Proxy(
            {
              get(a) {
                return o.includes(a) ? t[a] : void 0;
              },
              has(a) {
                return o.includes(a) && a in t;
              },
              keys() {
                return o.filter((a) => a in t);
              },
            },
            Ot
          )
      );
      return (
        i.push(
          new Proxy(
            {
              get(o) {
                return n.has(o) ? void 0 : t[o];
              },
              has(o) {
                return n.has(o) ? !1 : o in t;
              },
              keys() {
                return Object.keys(t).filter((o) => !n.has(o));
              },
            },
            Ot
          )
        ),
        i
      );
    }
    const r = Object.getOwnPropertyDescriptors(t);
    return (
      e.push(Object.keys(r).filter((i) => !n.has(i))),
      e.map((i) => {
        const o = {};
        for (let a = 0; a < i.length; a++) {
          const s = i[a];
          s in t &&
            Object.defineProperty(
              o,
              s,
              r[s]
                ? r[s]
                : {
                    get() {
                      return t[s];
                    },
                    set() {
                      return !0;
                    },
                    enumerable: !0,
                  }
            );
        }
        return o;
      })
    );
  }
  function nt(t) {
    let e = !1;
    const n = t.keyed,
      r = O(() => t.when, void 0, {
        equals: (i, o) => (e ? i === o : !i == !o),
      });
    return O(
      () => {
        const i = r();
        if (i) {
          const o = t.children,
            a = typeof o == "function" && o.length > 0;
          return (e = n || a), a ? $(() => o(i)) : o;
        }
        return t.fallback;
      },
      void 0,
      void 0
    );
  }
  const fn = [
      "allowfullscreen",
      "async",
      "autofocus",
      "autoplay",
      "checked",
      "controls",
      "default",
      "disabled",
      "formnovalidate",
      "hidden",
      "indeterminate",
      "ismap",
      "loop",
      "multiple",
      "muted",
      "nomodule",
      "novalidate",
      "open",
      "playsinline",
      "readonly",
      "required",
      "reversed",
      "seamless",
      "selected",
    ],
    dn = new Set([
      "className",
      "value",
      "readOnly",
      "formNoValidate",
      "isMap",
      "noModule",
      "playsInline",
      ...fn,
    ]),
    hn = new Set(["innerHTML", "textContent", "innerText", "children"]),
    pn = Object.assign(Object.create(null), {
      className: "class",
      htmlFor: "for",
    }),
    ae = Object.assign(Object.create(null), {
      class: "className",
      formnovalidate: "formNoValidate",
      ismap: "isMap",
      nomodule: "noModule",
      playsinline: "playsInline",
      readonly: "readOnly",
    }),
    gn = new Set([
      "beforeinput",
      "click",
      "dblclick",
      "contextmenu",
      "focusin",
      "focusout",
      "input",
      "keydown",
      "keyup",
      "mousedown",
      "mousemove",
      "mouseout",
      "mouseover",
      "mouseup",
      "pointerdown",
      "pointermove",
      "pointerout",
      "pointerover",
      "pointerup",
      "touchend",
      "touchmove",
      "touchstart",
    ]),
    yn = new Set([
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animate",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "circle",
      "clipPath",
      "color-profile",
      "cursor",
      "defs",
      "desc",
      "ellipse",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "filter",
      "font",
      "font-face",
      "font-face-format",
      "font-face-name",
      "font-face-src",
      "font-face-uri",
      "foreignObject",
      "g",
      "glyph",
      "glyphRef",
      "hkern",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "metadata",
      "missing-glyph",
      "mpath",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "set",
      "stop",
      "svg",
      "switch",
      "symbol",
      "text",
      "textPath",
      "tref",
      "tspan",
      "use",
      "view",
      "vkern",
    ]),
    wn = {
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
    };
  function mn(t, e, n) {
    let r = n.length,
      i = e.length,
      o = r,
      a = 0,
      s = 0,
      u = e[i - 1].nextSibling,
      l = null;
    for (; a < i || s < o; ) {
      if (e[a] === n[s]) {
        a++, s++;
        continue;
      }
      for (; e[i - 1] === n[o - 1]; ) i--, o--;
      if (i === a) {
        const c = o < r ? (s ? n[s - 1].nextSibling : n[o - s]) : u;
        for (; s < o; ) t.insertBefore(n[s++], c);
      } else if (o === s)
        for (; a < i; ) (!l || !l.has(e[a])) && e[a].remove(), a++;
      else if (e[a] === n[o - 1] && n[s] === e[i - 1]) {
        const c = e[--i].nextSibling;
        t.insertBefore(n[s++], e[a++].nextSibling),
          t.insertBefore(n[--o], c),
          (e[i] = n[o]);
      } else {
        if (!l) {
          l = new Map();
          let d = s;
          for (; d < o; ) l.set(n[d], d++);
        }
        const c = l.get(e[a]);
        if (c != null)
          if (s < c && c < o) {
            let d = a,
              h = 1,
              x;
            for (
              ;
              ++d < i && d < o && !((x = l.get(e[d])) == null || x !== c + h);

            )
              h++;
            if (h > c - s) {
              const A = e[a];
              for (; s < c; ) t.insertBefore(n[s++], A);
            } else t.replaceChild(n[s++], e[a++]);
          } else a++;
        else e[a++].remove();
      }
    }
  }
  const le = "_$DX_DELEGATE";
  function bn(t, e, n, r = {}) {
    let i;
    return (
      tt((o) => {
        (i = o),
          e === document ? t() : k(e, t(), e.firstChild ? null : void 0, n);
      }, r.owner),
      () => {
        i(), (e.textContent = "");
      }
    );
  }
  function R(t, e, n) {
    const r = document.createElement("template");
    if (((r.innerHTML = t), e && r.innerHTML.split("<").length - 1 !== e))
      throw `The browser resolved template HTML does not match JSX input:
${r.innerHTML}

${t}. Is your HTML properly formed?`;
    let i = r.content.firstChild;
    return n && (i = i.firstChild), i;
  }
  function Rt(t, e = window.document) {
    const n = e[le] || (e[le] = new Set());
    for (let r = 0, i = t.length; r < i; r++) {
      const o = t[r];
      n.has(o) || (n.add(o), e.addEventListener(o, kn));
    }
  }
  function G(t, e, n) {
    n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
  }
  function vn(t, e, n, r) {
    r == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, r);
  }
  function xn(t, e) {
    e == null ? t.removeAttribute("class") : (t.className = e);
  }
  function _n(t, e, n, r) {
    if (r)
      Array.isArray(n)
        ? ((t[`$$${e}`] = n[0]), (t[`$$${e}Data`] = n[1]))
        : (t[`$$${e}`] = n);
    else if (Array.isArray(n)) {
      const i = n[0];
      t.addEventListener(e, (n[0] = (o) => i.call(t, n[1], o)));
    } else t.addEventListener(e, n);
  }
  function Sn(t, e, n = {}) {
    const r = Object.keys(e || {}),
      i = Object.keys(n);
    let o, a;
    for (o = 0, a = i.length; o < a; o++) {
      const s = i[o];
      !s || s === "undefined" || e[s] || (ue(t, s, !1), delete n[s]);
    }
    for (o = 0, a = r.length; o < a; o++) {
      const s = r[o],
        u = !!e[s];
      !s || s === "undefined" || n[s] === u || !u || (ue(t, s, !0), (n[s] = u));
    }
    return n;
  }
  function ce(t, e, n) {
    if (!e) return n ? G(t, "style") : e;
    const r = t.style;
    if (typeof e == "string") return (r.cssText = e);
    typeof n == "string" && (r.cssText = n = void 0),
      n || (n = {}),
      e || (e = {});
    let i, o;
    for (o in n) e[o] == null && r.removeProperty(o), delete n[o];
    for (o in e) (i = e[o]), i !== n[o] && (r.setProperty(o, i), (n[o] = i));
    return n;
  }
  function Mt(t, e = {}, n, r) {
    const i = {};
    return (
      r || I(() => (i.children = W(t, e.children, i.children))),
      I(() => e.ref && e.ref(t)),
      I(() => An(t, e, n, !0, i, !0)),
      i
    );
  }
  function En(t, e, n) {
    return $(() => t(e, n));
  }
  function k(t, e, n, r) {
    if ((n !== void 0 && !r && (r = []), typeof e != "function"))
      return W(t, e, r, n);
    I((i) => W(t, e(), i, n), r);
  }
  function An(t, e, n, r, i = {}, o = !1) {
    e || (e = {});
    for (const a in i)
      if (!(a in e)) {
        if (a === "children") continue;
        i[a] = fe(t, a, null, i[a], n, o);
      }
    for (const a in e) {
      if (a === "children") {
        r || W(t, e.children);
        continue;
      }
      const s = e[a];
      i[a] = fe(t, a, s, i[a], n, o);
    }
  }
  function Tn(t) {
    let e, n;
    if (!_.context || !(e = _.registry.get((n = On())))) {
      if (
        (_.context &&
          console.warn("Unable to find DOM nodes for hydration key:", n),
        !t)
      )
        throw new Error(
          "Unrecoverable Hydration Mismatch. No template for key: " + n
        );
      return t.cloneNode(!0);
    }
    return _.completed && _.completed.add(e), _.registry.delete(n), e;
  }
  function Cn(t) {
    return t.toLowerCase().replace(/-([a-z])/g, (e, n) => n.toUpperCase());
  }
  function ue(t, e, n) {
    const r = e.trim().split(/\s+/);
    for (let i = 0, o = r.length; i < o; i++) t.classList.toggle(r[i], n);
  }
  function fe(t, e, n, r, i, o) {
    let a, s, u;
    if (e === "style") return ce(t, n, r);
    if (e === "classList") return Sn(t, n, r);
    if (n === r) return r;
    if (e === "ref") o || n(t);
    else if (e.slice(0, 3) === "on:") {
      const l = e.slice(3);
      r && t.removeEventListener(l, r), n && t.addEventListener(l, n);
    } else if (e.slice(0, 10) === "oncapture:") {
      const l = e.slice(10);
      r && t.removeEventListener(l, r, !0), n && t.addEventListener(l, n, !0);
    } else if (e.slice(0, 2) === "on") {
      const l = e.slice(2).toLowerCase(),
        c = gn.has(l);
      if (!c && r) {
        const d = Array.isArray(r) ? r[0] : r;
        t.removeEventListener(l, d);
      }
      (c || n) && (_n(t, l, n, c), c && Rt([l]));
    } else if (
      (u = hn.has(e)) ||
      (!i && (ae[e] || (s = dn.has(e)))) ||
      (a = t.nodeName.includes("-"))
    )
      e === "class" || e === "className"
        ? xn(t, n)
        : a && !s && !u
        ? (t[Cn(e)] = n)
        : (t[ae[e] || e] = n);
    else {
      const l = i && e.indexOf(":") > -1 && wn[e.split(":")[0]];
      l ? vn(t, l, e, n) : G(t, pn[e] || e, n);
    }
    return n;
  }
  function kn(t) {
    const e = `$$${t.type}`;
    let n = (t.composedPath && t.composedPath()[0]) || t.target;
    for (
      t.target !== n &&
        Object.defineProperty(t, "target", { configurable: !0, value: n }),
        Object.defineProperty(t, "currentTarget", {
          configurable: !0,
          get() {
            return n || document;
          },
        }),
        _.registry &&
          !_.done &&
          ((_.done = !0),
          document.querySelectorAll("[id^=pl-]").forEach((r) => {
            for (; r && r.nodeType !== 8 && r.nodeValue !== "pl-" + t; ) {
              let i = r.nextSibling;
              r.remove(), (r = i);
            }
            r && r.remove();
          }));
      n;

    ) {
      const r = n[e];
      if (r && !n.disabled) {
        const i = n[`${e}Data`];
        if ((i !== void 0 ? r.call(n, i, t) : r.call(n, t), t.cancelBubble))
          return;
      }
      n = n._$host || n.parentNode || n.host;
    }
  }
  function W(t, e, n, r, i) {
    for (_.context && !n && (n = [...t.childNodes]); typeof n == "function"; )
      n = n();
    if (e === n) return n;
    const o = typeof e,
      a = r !== void 0;
    if (
      ((t = (a && n[0] && n[0].parentNode) || t),
      o === "string" || o === "number")
    ) {
      if (_.context) return n;
      if ((o === "number" && (e = e.toString()), a)) {
        let s = n[0];
        s && s.nodeType === 3 ? (s.data = e) : (s = document.createTextNode(e)),
          (n = X(t, n, r, s));
      } else
        n !== "" && typeof n == "string"
          ? (n = t.firstChild.data = e)
          : (n = t.textContent = e);
    } else if (e == null || o === "boolean") {
      if (_.context) return n;
      n = X(t, n, r);
    } else {
      if (o === "function")
        return (
          I(() => {
            let s = e();
            for (; typeof s == "function"; ) s = s();
            n = W(t, s, n, r);
          }),
          () => n
        );
      if (Array.isArray(e)) {
        const s = [],
          u = n && Array.isArray(n);
        if (jt(s, e, n, i)) return I(() => (n = W(t, s, n, r, !0))), () => n;
        if (_.context) {
          if (!s.length) return n;
          for (let l = 0; l < s.length; l++)
            if (s[l].parentNode) return (n = s);
        }
        if (s.length === 0) {
          if (((n = X(t, n, r)), a)) return n;
        } else
          u
            ? n.length === 0
              ? de(t, s, r)
              : mn(t, n, s)
            : (n && X(t), de(t, s));
        n = s;
      } else if (e instanceof Node) {
        if (_.context && e.parentNode) return (n = a ? [e] : e);
        if (Array.isArray(n)) {
          if (a) return (n = X(t, n, r, e));
          X(t, n, null, e);
        } else
          n == null || n === "" || !t.firstChild
            ? t.appendChild(e)
            : t.replaceChild(e, t.firstChild);
        n = e;
      } else console.warn("Unrecognized value. Skipped inserting", e);
    }
    return n;
  }
  function jt(t, e, n, r) {
    let i = !1;
    for (let o = 0, a = e.length; o < a; o++) {
      let s = e[o],
        u = n && n[o];
      if (s instanceof Node) t.push(s);
      else if (!(s == null || s === !0 || s === !1))
        if (Array.isArray(s)) i = jt(t, s, u) || i;
        else if (typeof s == "function")
          if (r) {
            for (; typeof s == "function"; ) s = s();
            i =
              jt(t, Array.isArray(s) ? s : [s], Array.isArray(u) ? u : [u]) ||
              i;
          } else t.push(s), (i = !0);
        else {
          const l = String(s);
          u && u.nodeType === 3 && u.data === l
            ? t.push(u)
            : t.push(document.createTextNode(l));
        }
    }
    return i;
  }
  function de(t, e, n = null) {
    for (let r = 0, i = e.length; r < i; r++) t.insertBefore(e[r], n);
  }
  function X(t, e, n, r) {
    if (n === void 0) return (t.textContent = "");
    const i = r || document.createTextNode("");
    if (e.length) {
      let o = !1;
      for (let a = e.length - 1; a >= 0; a--) {
        const s = e[a];
        if (i !== s) {
          const u = s.parentNode === t;
          !o && !a
            ? u
              ? t.replaceChild(i, s)
              : t.insertBefore(i, n)
            : u && s.remove();
        } else o = !0;
      }
    } else t.insertBefore(i, n);
    return [i];
  }
  function On() {
    const t = _.context;
    return `${t.id}${t.count++}`;
  }
  const Pn = !1,
    $n = "http://www.w3.org/2000/svg";
  function Rn(t, e = !1) {
    return e ? document.createElementNS($n, t) : document.createElement(t);
  }
  function Mn(t) {
    const [e, n] = se(t, ["component"]),
      r = O(() => e.component);
    return O(() => {
      const i = r();
      switch (typeof i) {
        case "function":
          return Object.assign(i, { [tn]: !0 }), $(() => i(n));
        case "string":
          const o = yn.has(i),
            a = _.context ? Tn() : Rn(i, o);
          return Mt(a, n, o), a;
      }
    });
  }
  const di = "";
  var wt = (t, e) =>
      t === e || (t.length === e.length && t.every((n, r) => n === e[r])),
    jn = (t) => (At() ? dt(t) : t);
  function mt(t, e, n, r) {
    return (
      t.addEventListener(e, n, r), jn(t.removeEventListener.bind(t, e, n, r))
    );
  }
  function he(t) {
    let e = 0,
      n,
      r;
    return () => (
      r ||
        tt((i) => {
          (n = t(i)), (r = i);
        }),
      e++,
      At() &&
        dt(() => {
          e--,
            queueMicrotask(() => {
              e || !r || (r(), (r = void 0), (n = void 0));
            });
        }),
      n
    );
  }
  function pe(t, e) {
    for (let n = t.length - 1; n >= 0; n--) {
      const r = e.slice(0, n + 1);
      if (!wt(t[n], r)) return !1;
    }
    return !0;
  }
  var ge = he(() => {
      const [t, e] = B([]),
        [n, r] = B(null),
        i = () => e([]);
      return (
        mt(window, "keydown", (o) => {
          if (o.repeat || typeof o.key != "string") return;
          const a = o.key.toUpperCase();
          t().includes(a) ||
            en(() => {
              r(o), e((s) => [...s, a]);
            });
        }),
        mt(window, "keyup", (o) => {
          if (typeof o.key != "string") return;
          const a = o.key.toUpperCase();
          e((s) => s.filter((u) => u !== a));
        }),
        mt(window, "blur", i),
        mt(window, "contextmenu", (o) => {
          o.defaultPrevented || i();
        }),
        [t, { event: n }]
      );
    }),
    Ln = he(() => {
      const [t] = ge();
      return O((e) => (t().length === 0 ? [] : [...e, t()]), []);
    });
  function Nn(t, e, n = {}) {
    if (!t.length) return;
    t = t.map((c) => c.toUpperCase());
    const { preventDefault: r = !0, requireReset: i = !1 } = n,
      [, { event: o }] = ge(),
      a = Ln();
    let s = !1;
    ft(
      nn(
        a,
        i
          ? (c) => {
              if (!c.length) return (s = !1);
              s ||
                (c.length < t.length
                  ? pe(c, t.slice(0, c.length))
                    ? r && o().preventDefault()
                    : (s = !0)
                  : ((s = !0), pe(c, t) && (r && o().preventDefault(), e())));
            }
          : (c) => {
              const d = c.at(-1);
              if (d) {
                if (r && d.length < t.length) {
                  wt(d, t.slice(0, t.length - 1)) && o().preventDefault();
                  return;
                }
                if (wt(d, t)) {
                  const h = c.at(-2);
                  (!h || wt(h, t.slice(0, t.length - 1))) &&
                    (r && o().preventDefault(), e());
                }
              }
            }
      )
    );
  }
  const Dn = R(
      '<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>',
      2
    ),
    qn = R("<title></title>", 2);
  function ye(t, e) {
    const n = $t(t.a, e);
    return (() => {
      const r = Dn.cloneNode(!0);
      return (
        Mt(r, n, !0, !0),
        k(r, () => Pn, null),
        k(
          r,
          (() => {
            const i = O(() => !!e.title, !0);
            return () =>
              i() &&
              (() => {
                const o = qn.cloneNode(!0);
                return k(o, () => e.title), o;
              })();
          })(),
          null
        ),
        I(
          (i) => {
            const o = t.a.stroke,
              a = {
                ...e.style,
                overflow: "visible",
                color: e.color || "currentColor",
              },
              s = e.size || "1em",
              u = e.size || "1em",
              l = t.c;
            return (
              o !== i._v$ && G(r, "stroke", (i._v$ = o)),
              (i._v$2 = ce(r, a, i._v$2)),
              s !== i._v$3 && G(r, "height", (i._v$3 = s)),
              u !== i._v$4 && G(r, "width", (i._v$4 = u)),
              l !== i._v$5 && (r.innerHTML = i._v$5 = l),
              i
            );
          },
          {
            _v$: void 0,
            _v$2: void 0,
            _v$3: void 0,
            _v$4: void 0,
            _v$5: void 0,
          }
        ),
        r
      );
    })();
  }
  function In(t) {
    return ye(
      {
        a: {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          viewBox: "0 0 24 24",
        },
        c: '<path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>',
      },
      t
    );
  }
  function zn(t) {
    return ye(
      {
        a: {
          fill: "none",
          stroke: "currentColor",
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "2",
          viewBox: "0 0 24 24",
        },
        c: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01"/>',
      },
      t
    );
  }
  function we(t, e) {
    t.indexOf(e) === -1 && t.push(e);
  }
  function Un(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  const me = (t, e, n) => Math.min(Math.max(n, t), e),
    M = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
    rt = (t) => typeof t == "number",
    Y = (t) => Array.isArray(t) && !rt(t[0]),
    Fn = (t, e, n) => {
      const r = e - t;
      return ((((n - t) % r) + r) % r) + t;
    };
  function Vn(t, e) {
    return Y(t) ? t[Fn(0, t.length, e)] : t;
  }
  const be = (t, e, n) => -n * t + n * e + t,
    ve = () => {},
    U = (t) => t,
    Lt = (t, e, n) => (e - t === 0 ? 1 : (n - t) / (e - t));
  function xe(t, e) {
    const n = t[t.length - 1];
    for (let r = 1; r <= e; r++) {
      const i = Lt(0, e, r);
      t.push(be(n, 1, i));
    }
  }
  function Hn(t) {
    const e = [0];
    return xe(e, t - 1), e;
  }
  function Bn(t, e = Hn(t.length), n = U) {
    const r = t.length,
      i = r - e.length;
    return (
      i > 0 && xe(e, i),
      (o) => {
        let a = 0;
        for (; a < r - 2 && !(o < e[a + 1]); a++);
        let s = me(0, 1, Lt(e[a], e[a + 1], o));
        return (s = Vn(n, a)(s)), be(t[a], t[a + 1], s);
      }
    );
  }
  const _e = (t) => Array.isArray(t) && rt(t[0]),
    Nt = (t) => typeof t == "object" && Boolean(t.createAnimation),
    it = (t) => typeof t == "function",
    Kn = (t) => typeof t == "string",
    Dt = { ms: (t) => t * 1e3, s: (t) => t / 1e3 },
    Se = (t, e, n) =>
      (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    Gn = 1e-7,
    Wn = 12;
  function Xn(t, e, n, r, i) {
    let o,
      a,
      s = 0;
    do (a = e + (n - e) / 2), (o = Se(a, r, i) - t), o > 0 ? (n = a) : (e = a);
    while (Math.abs(o) > Gn && ++s < Wn);
    return a;
  }
  function ot(t, e, n, r) {
    if (t === e && n === r) return U;
    const i = (o) => Xn(o, 0, 1, t, n);
    return (o) => (o === 0 || o === 1 ? o : Se(i(o), e, r));
  }
  const Yn =
      (t, e = "end") =>
      (n) => {
        n = e === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
        const r = n * t,
          i = e === "end" ? Math.floor(r) : Math.ceil(r);
        return me(0, 1, i / t);
      },
    Ee = {
      ease: ot(0.25, 0.1, 0.25, 1),
      "ease-in": ot(0.42, 0, 1, 1),
      "ease-in-out": ot(0.42, 0, 0.58, 1),
      "ease-out": ot(0, 0, 0.58, 1),
    },
    Zn = /\((.*?)\)/;
  function Ae(t) {
    if (it(t)) return t;
    if (_e(t)) return ot(...t);
    if (Ee[t]) return Ee[t];
    if (t.startsWith("steps")) {
      const e = Zn.exec(t);
      if (e) {
        const n = e[1].split(",");
        return Yn(parseFloat(n[0]), n[1].trim());
      }
    }
    return U;
  }
  class Jn {
    constructor(
      e,
      n = [0, 1],
      {
        easing: r,
        duration: i = M.duration,
        delay: o = M.delay,
        endDelay: a = M.endDelay,
        repeat: s = M.repeat,
        offset: u,
        direction: l = "normal",
      } = {}
    ) {
      if (
        ((this.startTime = null),
        (this.rate = 1),
        (this.t = 0),
        (this.cancelTimestamp = null),
        (this.easing = U),
        (this.duration = 0),
        (this.totalDuration = 0),
        (this.repeat = 0),
        (this.playState = "idle"),
        (this.finished = new Promise((d, h) => {
          (this.resolve = d), (this.reject = h);
        })),
        (r = r || M.easing),
        Nt(r))
      ) {
        const d = r.createAnimation(n);
        (r = d.easing), (n = d.keyframes || n), (i = d.duration || i);
      }
      (this.repeat = s),
        (this.easing = Y(r) ? U : Ae(r)),
        this.updateDuration(i);
      const c = Bn(n, u, Y(r) ? r.map(Ae) : U);
      (this.tick = (d) => {
        var h;
        o = o;
        let x = 0;
        this.pauseTime !== void 0
          ? (x = this.pauseTime)
          : (x = (d - this.startTime) * this.rate),
          (this.t = x),
          (x /= 1e3),
          (x = Math.max(x - o, 0)),
          this.playState === "finished" &&
            this.pauseTime === void 0 &&
            (x = this.totalDuration);
        const A = x / this.duration;
        let f = Math.floor(A),
          y = A % 1;
        !y && A >= 1 && (y = 1), y === 1 && f--;
        const S = f % 2;
        (l === "reverse" ||
          (l === "alternate" && S) ||
          (l === "alternate-reverse" && !S)) &&
          (y = 1 - y);
        const P = x >= this.totalDuration ? 1 : Math.min(y, 1),
          j = c(this.easing(P));
        e(j),
          this.pauseTime === void 0 &&
          (this.playState === "finished" || x >= this.totalDuration + a)
            ? ((this.playState = "finished"),
              (h = this.resolve) === null || h === void 0 || h.call(this, j))
            : this.playState !== "idle" &&
              (this.frameRequestId = requestAnimationFrame(this.tick));
      }),
        this.play();
    }
    play() {
      const e = performance.now();
      (this.playState = "running"),
        this.pauseTime !== void 0
          ? (this.startTime = e - this.pauseTime)
          : this.startTime || (this.startTime = e),
        (this.cancelTimestamp = this.startTime),
        (this.pauseTime = void 0),
        (this.frameRequestId = requestAnimationFrame(this.tick));
    }
    pause() {
      (this.playState = "paused"), (this.pauseTime = this.t);
    }
    finish() {
      (this.playState = "finished"), this.tick(0);
    }
    stop() {
      var e;
      (this.playState = "idle"),
        this.frameRequestId !== void 0 &&
          cancelAnimationFrame(this.frameRequestId),
        (e = this.reject) === null || e === void 0 || e.call(this, !1);
    }
    cancel() {
      this.stop(), this.tick(this.cancelTimestamp);
    }
    reverse() {
      this.rate *= -1;
    }
    commitStyles() {}
    updateDuration(e) {
      (this.duration = e), (this.totalDuration = e * (this.repeat + 1));
    }
    get currentTime() {
      return this.t;
    }
    set currentTime(e) {
      this.pauseTime !== void 0 || this.rate === 0
        ? (this.pauseTime = e)
        : (this.startTime = performance.now() - e / this.rate);
    }
    get playbackRate() {
      return this.rate;
    }
    set playbackRate(e) {
      this.rate = e;
    }
  }
  class Qn {
    setAnimation(e) {
      (this.animation = e),
        e?.finished.then(() => this.clearAnimation()).catch(() => {});
    }
    clearAnimation() {
      this.animation = this.generator = void 0;
    }
  }
  const qt = new WeakMap();
  function Te(t) {
    return (
      qt.has(t) || qt.set(t, { transforms: [], values: new Map() }), qt.get(t)
    );
  }
  function tr(t, e) {
    return t.has(e) || t.set(e, new Qn()), t.get(e);
  }
  const er = ["", "X", "Y", "Z"],
    nr = ["translate", "scale", "rotate", "skew"],
    Z = { x: "translateX", y: "translateY", z: "translateZ" },
    Ce = {
      syntax: "<angle>",
      initialValue: "0deg",
      toDefaultUnit: (t) => t + "deg",
    },
    rr = {
      translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (t) => t + "px",
      },
      rotate: Ce,
      scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: U },
      skew: Ce,
    },
    J = new Map(),
    bt = (t) => `--motion-${t}`,
    vt = ["x", "y", "z"];
  nr.forEach((t) => {
    er.forEach((e) => {
      vt.push(t + e), J.set(bt(t + e), rr[t]);
    });
  });
  const ir = (t, e) => vt.indexOf(t) - vt.indexOf(e),
    or = new Set(vt),
    It = (t) => or.has(t),
    sr = (t, e) => {
      Z[e] && (e = Z[e]);
      const { transforms: n } = Te(t);
      we(n, e), (t.style.transform = ke(n));
    },
    ke = (t) => t.sort(ir).reduce(ar, "").trim(),
    ar = (t, e) => `${t} ${e}(var(${bt(e)}))`,
    zt = (t) => t.startsWith("--"),
    Oe = new Set();
  function lr(t) {
    if (!Oe.has(t)) {
      Oe.add(t);
      try {
        const { syntax: e, initialValue: n } = J.has(t) ? J.get(t) : {};
        CSS.registerProperty({
          name: t,
          inherits: !1,
          syntax: e,
          initialValue: n,
        });
      } catch {}
    }
  }
  const Ut = (t, e) => document.createElement("div").animate(t, e),
    Pe = {
      cssRegisterProperty: () =>
        typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
      partialKeyframes: () => {
        try {
          Ut({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () =>
        Boolean(Ut({ opacity: [0, 1] }, { duration: 0.001 }).finished),
      linearEasing: () => {
        try {
          Ut({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch {
          return !1;
        }
        return !0;
      },
    },
    Ft = {},
    Q = {};
  for (const t in Pe)
    Q[t] = () => (Ft[t] === void 0 && (Ft[t] = Pe[t]()), Ft[t]);
  const cr = 0.015,
    ur = (t, e) => {
      let n = "";
      const r = Math.round(e / cr);
      for (let i = 0; i < r; i++) n += t(Lt(0, r - 1, i)) + ", ";
      return n.substring(0, n.length - 2);
    },
    $e = (t, e) =>
      it(t)
        ? Q.linearEasing()
          ? `linear(${ur(t, e)})`
          : M.easing
        : _e(t)
        ? fr(t)
        : t,
    fr = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`;
  function dr(t, e) {
    for (let n = 0; n < t.length; n++)
      t[n] === null && (t[n] = n ? t[n - 1] : e());
    return t;
  }
  const hr = (t) => (Array.isArray(t) ? t : [t]);
  function Vt(t) {
    return Z[t] && (t = Z[t]), It(t) ? bt(t) : t;
  }
  const st = {
    get: (t, e) => {
      e = Vt(e);
      let n = zt(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
      if (!n && n !== 0) {
        const r = J.get(e);
        r && (n = r.initialValue);
      }
      return n;
    },
    set: (t, e, n) => {
      (e = Vt(e)), zt(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
    },
  };
  function pr(t, e = !0) {
    if (!(!t || t.playState === "finished"))
      try {
        t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
      } catch {}
  }
  function gr(t, e) {
    var n;
    let r = e?.toDefaultUnit || U;
    const i = t[t.length - 1];
    if (Kn(i)) {
      const o =
        ((n = i.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0
          ? void 0
          : n[2]) || "";
      o && (r = (a) => a + o);
    }
    return r;
  }
  function yr() {
    return window.__MOTION_DEV_TOOLS_RECORD;
  }
  function wr(t, e, n, r = {}, i) {
    const o = yr(),
      a = r.record !== !1 && o;
    let s,
      {
        duration: u = M.duration,
        delay: l = M.delay,
        endDelay: c = M.endDelay,
        repeat: d = M.repeat,
        easing: h = M.easing,
        persist: x = !1,
        direction: A,
        offset: f,
        allowWebkitAcceleration: y = !1,
      } = r;
    const S = Te(t),
      P = It(e);
    let j = Q.waapi();
    P && sr(t, e);
    const T = Vt(e),
      N = tr(S.values, T),
      v = J.get(T);
    return (
      pr(N.animation, !(Nt(h) && N.generator) && r.record !== !1),
      () => {
        const g = () => {
          var w, V;
          return (V =
            (w = st.get(t, T)) !== null && w !== void 0
              ? w
              : v?.initialValue) !== null && V !== void 0
            ? V
            : 0;
        };
        let p = dr(hr(n), g);
        const L = gr(p, v);
        if (Nt(h)) {
          const w = h.createAnimation(p, e !== "opacity", g, T, N);
          (h = w.easing), (p = w.keyframes || p), (u = w.duration || u);
        }
        if (
          (zt(T) && (Q.cssRegisterProperty() ? lr(T) : (j = !1)),
          P && !Q.linearEasing() && (it(h) || (Y(h) && h.some(it))) && (j = !1),
          j)
        ) {
          v && (p = p.map((D) => (rt(D) ? v.toDefaultUnit(D) : D))),
            p.length === 1 && (!Q.partialKeyframes() || a) && p.unshift(g());
          const w = {
            delay: Dt.ms(l),
            duration: Dt.ms(u),
            endDelay: Dt.ms(c),
            easing: Y(h) ? void 0 : $e(h, u),
            direction: A,
            iterations: d + 1,
            fill: "both",
          };
          (s = t.animate(
            {
              [T]: p,
              offset: f,
              easing: Y(h) ? h.map((D) => $e(D, u)) : void 0,
            },
            w
          )),
            s.finished ||
              (s.finished = new Promise((D, fi) => {
                (s.onfinish = D), (s.oncancel = fi);
              }));
          const V = p[p.length - 1];
          s.finished
            .then(() => {
              x || (st.set(t, T, V), s.cancel());
            })
            .catch(ve),
            y || (s.playbackRate = 1.000001);
        } else if (i && P)
          (p = p.map((w) => (typeof w == "string" ? parseFloat(w) : w))),
            p.length === 1 && p.unshift(parseFloat(g())),
            (s = new i(
              (w) => {
                st.set(t, T, L ? L(w) : w);
              },
              p,
              Object.assign(Object.assign({}, r), { duration: u, easing: h })
            ));
        else {
          const w = p[p.length - 1];
          st.set(t, T, v && rt(w) ? v.toDefaultUnit(w) : w);
        }
        return (
          a &&
            o(
              t,
              e,
              p,
              { duration: u, delay: l, easing: h, repeat: d, offset: f },
              "motion-one"
            ),
          N.setAnimation(s),
          s
        );
      }
    );
  }
  const mr = (t, e) =>
    t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
  function br(t, e) {
    var n;
    return (
      typeof t == "string"
        ? e
          ? (((n = e[t]) !== null && n !== void 0) ||
              (e[t] = document.querySelectorAll(t)),
            (t = e[t]))
          : (t = document.querySelectorAll(t))
        : t instanceof Element && (t = [t]),
      Array.from(t || [])
    );
  }
  function Re(t, e) {
    var n = {};
    for (var r in t)
      Object.prototype.hasOwnProperty.call(t, r) &&
        e.indexOf(r) < 0 &&
        (n[r] = t[r]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
        e.indexOf(r[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, r[i]) &&
          (n[r[i]] = t[r[i]]);
    return n;
  }
  const vr = { any: 0, all: 1 };
  function xr(t, e, { root: n, margin: r, amount: i = "any" } = {}) {
    if (typeof IntersectionObserver > "u") return () => {};
    const o = br(t),
      a = new WeakMap(),
      s = (l) => {
        l.forEach((c) => {
          const d = a.get(c.target);
          if (c.isIntersecting !== Boolean(d))
            if (c.isIntersecting) {
              const h = e(c);
              it(h) ? a.set(c.target, h) : u.unobserve(c.target);
            } else d && (d(c), a.delete(c.target));
        });
      },
      u = new IntersectionObserver(s, {
        root: n,
        rootMargin: r,
        threshold: typeof i == "number" ? i : vr[i],
      });
    return o.forEach((l) => u.observe(l)), () => u.disconnect();
  }
  function _r(t, e) {
    return typeof t != typeof e
      ? !0
      : Array.isArray(t) && Array.isArray(e)
      ? !Sr(t, e)
      : t !== e;
  }
  function Sr(t, e) {
    const n = e.length;
    if (n !== t.length) return !1;
    for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
    return !0;
  }
  function Er(t) {
    return typeof t == "object";
  }
  function Me(t, e) {
    if (Er(t)) return t;
    if (t && e) return e[t];
  }
  let F;
  function Ar() {
    if (!F) return;
    const t = F.sort(Cr).map(kr);
    t.forEach(je), t.forEach(je), (F = void 0);
  }
  function Ht(t) {
    F ? we(F, t) : ((F = [t]), requestAnimationFrame(Ar));
  }
  function Tr(t) {
    F && Un(F, t);
  }
  const Cr = (t, e) => t.getDepth() - e.getDepth(),
    kr = (t) => t.animateUpdates(),
    je = (t) => t.next(),
    Le = (t, e) => new CustomEvent(t, { detail: { target: e } });
  function Bt(t, e, n) {
    t.dispatchEvent(new CustomEvent(e, { detail: { originalEvent: n } }));
  }
  function Ne(t, e, n) {
    t.dispatchEvent(new CustomEvent(e, { detail: { originalEntry: n } }));
  }
  const Or = {
      isActive: (t) => Boolean(t.inView),
      subscribe: (t, { enable: e, disable: n }, { inViewOptions: r = {} }) => {
        const { once: i } = r,
          o = Re(r, ["once"]);
        return xr(
          t,
          (a) => {
            if ((e(), Ne(t, "viewenter", a), !i))
              return (s) => {
                n(), Ne(t, "viewleave", s);
              };
          },
          o
        );
      },
    },
    De = (t, e, n) => (r) => {
      (r.pointerType && r.pointerType !== "mouse") || (n(), Bt(t, e, r));
    },
    xt = {
      inView: Or,
      hover: {
        isActive: (t) => Boolean(t.hover),
        subscribe: (t, { enable: e, disable: n }) => {
          const r = De(t, "hoverstart", e),
            i = De(t, "hoverend", n);
          return (
            t.addEventListener("pointerenter", r),
            t.addEventListener("pointerleave", i),
            () => {
              t.removeEventListener("pointerenter", r),
                t.removeEventListener("pointerleave", i);
            }
          );
        },
      },
      press: {
        isActive: (t) => Boolean(t.press),
        subscribe: (t, { enable: e, disable: n }) => {
          const r = (o) => {
              n(),
                Bt(t, "pressend", o),
                window.removeEventListener("pointerup", r);
            },
            i = (o) => {
              e(),
                Bt(t, "pressstart", o),
                window.addEventListener("pointerup", r);
            };
          return (
            t.addEventListener("pointerdown", i),
            () => {
              t.removeEventListener("pointerdown", i),
                window.removeEventListener("pointerup", r);
            }
          );
        },
      },
    },
    qe = ["initial", "animate", ...Object.keys(xt), "exit"],
    Ie = new WeakMap();
  function Pr(t = {}, e) {
    let n,
      r = e ? e.getDepth() + 1 : 0;
    const i = { initial: !0, animate: !0 },
      o = {},
      a = {};
    for (const f of qe)
      a[f] = typeof t[f] == "string" ? t[f] : e?.getContext()[f];
    const s = t.initial === !1 ? "animate" : "initial";
    let u = Me(t[s] || a[s], t.variants) || {},
      l = Re(u, ["transition"]);
    const c = Object.assign({}, l);
    function* d() {
      var f, y;
      const S = l;
      l = {};
      const P = {};
      for (const g of qe) {
        if (!i[g]) continue;
        const p = Me(t[g]);
        if (p)
          for (const L in p)
            L !== "transition" &&
              ((l[L] = p[L]),
              (P[L] = mr(
                (y =
                  (f = p.transition) !== null && f !== void 0
                    ? f
                    : t.transition) !== null && y !== void 0
                  ? y
                  : {},
                L
              )));
      }
      const j = new Set([...Object.keys(l), ...Object.keys(S)]),
        T = [];
      j.forEach((g) => {
        var p;
        l[g] === void 0 && (l[g] = c[g]),
          _r(S[g], l[g]) &&
            (((p = c[g]) !== null && p !== void 0) || (c[g] = st.get(n, g)),
            T.push(wr(n, g, l[g], P[g], Jn)));
      }),
        yield;
      const N = T.map((g) => g()).filter(Boolean);
      if (!N.length) return;
      const v = l;
      n.dispatchEvent(Le("motionstart", v)),
        Promise.all(N.map((g) => g.finished))
          .then(() => {
            n.dispatchEvent(Le("motioncomplete", v));
          })
          .catch(ve);
    }
    const h = (f, y) => () => {
        (i[f] = y), Ht(A);
      },
      x = () => {
        for (const f in xt) {
          const y = xt[f].isActive(t),
            S = o[f];
          y && !S
            ? (o[f] = xt[f].subscribe(
                n,
                { enable: h(f, !0), disable: h(f, !1) },
                t
              ))
            : !y && S && (S(), delete o[f]);
        }
      },
      A = {
        update: (f) => {
          n && ((t = f), x(), Ht(A));
        },
        setActive: (f, y) => {
          n && ((i[f] = y), Ht(A));
        },
        animateUpdates: d,
        getDepth: () => r,
        getTarget: () => l,
        getOptions: () => t,
        getContext: () => a,
        mount: (f) => (
          (n = f),
          Ie.set(n, A),
          x(),
          () => {
            Ie.delete(n), Tr(A);
            for (const y in o) o[y]();
          }
        ),
        isMounted: () => Boolean(n),
      };
    return A;
  }
  function $r(t) {
    const e = {},
      n = [];
    for (let r in t) {
      const i = t[r];
      It(r) && (Z[r] && (r = Z[r]), n.push(r), (r = bt(r)));
      let o = Array.isArray(i) ? i[0] : i;
      const a = J.get(r);
      a && (o = rt(i) ? a.toDefaultUnit(i) : i), (e[r] = o);
    }
    return n.length && (e.transform = ke(n)), e;
  }
  const Rr = { initial: () => !0, addCleanup: dt, addMount: Jt },
    ze = Qt(),
    Mr = Qt(Rr);
  function jr(t, e, n, r) {
    const { addCleanup: i, addMount: o, initial: a } = n,
      s = Pr(a() ? e() : { ...e(), initial: !1 }, r);
    return (
      o(
        rn.bind(void 0, At(), () => {
          i(s.mount(t())), ft(() => s.update(e()));
        })
      ),
      s
    );
  }
  var Lr = /([^:; ]*):\s*([^;]*)/g;
  function Ue(t) {
    const e = {};
    let n;
    for (; (n = Lr.exec(t)); ) e[n[1]] = n[2];
    return e;
  }
  function Nr(t, e) {
    if (typeof t == "object" && typeof e == "object") return { ...t, ...e };
    if (typeof t == "string" && typeof e == "string") return `${t};${e}`;
    const n = typeof t == "object" ? t : Ue(t),
      r = typeof e == "object" ? e : Ue(e);
    return { ...n, ...r };
  }
  const Fe = (t) => {
      const [e, , n] = se(
          t,
          [
            "initial",
            "animate",
            "inView",
            "inViewOptions",
            "hover",
            "press",
            "variants",
            "transition",
            "exit",
          ],
          [
            "tag",
            "ref",
            "style",
            "onMotionStart",
            "onMotionComplete",
            "onHoverStart",
            "onHoverEnd",
            "onPressStart",
            "onPressEnd",
            "onViewEnter",
            "onViewLeave",
          ]
        ),
        r = jr(
          () => o,
          () => ({ ...e }),
          te(Mr),
          te(ze)
        ),
        i = $r(r.getTarget());
      let o;
      return C(ze.Provider, {
        value: r,
        get children() {
          return C(
            Mn,
            $t(
              {
                ref: (a) => {
                  (o = a), t.ref?.(a);
                },
                get component() {
                  return $(() => t.tag || "div");
                },
                get style() {
                  return O(() => !!t.style)() ? Nr(t.style, i) : i;
                },
                get ["on:motionstart"]() {
                  return t.onMotionStart;
                },
                get ["on:motioncomplete"]() {
                  return t.onMotionComplete;
                },
                get ["on:hoverstart"]() {
                  return t.onHoverStart;
                },
                get ["on:hoverend"]() {
                  return t.onHoverEnd;
                },
                get ["on:pressstart"]() {
                  return t.onPressStart;
                },
                get ["on:pressend"]() {
                  return t.onPressEnd;
                },
                get ["on:viewenter"]() {
                  return t.onViewEnter;
                },
                get ["on:viewleave"]() {
                  return t.onViewLeave;
                },
              },
              n
            )
          );
        },
      });
    },
    Dr = new Proxy(Fe, {
      get: (t, e) => (n) => (delete n.tag, C(Fe, $t(n, { tag: e }))),
    });
  function qr(t, e, n = {}) {
    let r = [],
      i = [],
      o = 0;
    dt(() => r.forEach((l) => l()));
    const a = (l) => {
        if (l === 0)
          return (
            r.forEach((c) => c()),
            n.fallback
              ? tt((c) => ((r = [c]), (i = [n.fallback()])))
              : ((r = []), (i = []))
          );
        if (o === 0) {
          r[0] && r[0]();
          for (let c = 0; c < l; c++) i[c] = tt(s.bind(void 0, c));
          return i;
        }
        {
          const c = o - l;
          if (c > 0) {
            for (let d = o - 1; d >= l; d--) r[d]();
            return i.splice(l, c), r.splice(l, c), i;
          }
        }
        for (let c = o; c < l; c++) i[c] = tt(s.bind(void 0, c));
        return i;
      },
      s = (l, c) => ((r[l] = c), e(l)),
      u = O(() => Math.floor(Math.max(t(), 0)));
    return () => {
      const l = u();
      return $(() => {
        const c = a(l);
        return (o = l), c;
      });
    };
  }
  function Ir(t) {
    const e = t.fallback ? () => t.fallback : void 0,
      n = typeof t.children == "function" ? t.children : () => t.children;
    return qr(() => t.times, n, { fallback: e });
  }
  class Ve extends Error {
    constructor(e, n, r) {
      const i = e.status || e.status === 0 ? e.status : "",
        o = e.statusText || "",
        a = `${i} ${o}`.trim(),
        s = a ? `status code ${a}` : "an unknown error";
      super(`Request failed with ${s}`),
        Object.defineProperty(this, "response", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "request", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "options", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.name = "HTTPError"),
        (this.response = e),
        (this.request = n),
        (this.options = r);
    }
  }
  class He extends Error {
    constructor(e) {
      super("Request timed out"),
        Object.defineProperty(this, "request", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this.name = "TimeoutError"),
        (this.request = e);
    }
  }
  const _t = (t) => t !== null && typeof t == "object",
    St = (...t) => {
      for (const e of t)
        if ((!_t(e) || Array.isArray(e)) && typeof e < "u")
          throw new TypeError("The `options` argument must be an object");
      return Kt({}, ...t);
    },
    Be = (t = {}, e = {}) => {
      const n = new globalThis.Headers(t),
        r = e instanceof globalThis.Headers,
        i = new globalThis.Headers(e);
      for (const [o, a] of i.entries())
        (r && a === "undefined") || a === void 0 ? n.delete(o) : n.set(o, a);
      return n;
    },
    Kt = (...t) => {
      let e = {},
        n = {};
      for (const r of t)
        if (Array.isArray(r)) Array.isArray(e) || (e = []), (e = [...e, ...r]);
        else if (_t(r)) {
          for (let [i, o] of Object.entries(r))
            _t(o) && i in e && (o = Kt(e[i], o)), (e = { ...e, [i]: o });
          _t(r.headers) && ((n = Be(n, r.headers)), (e.headers = n));
        }
      return e;
    },
    zr = (() => {
      let t = !1,
        e = !1;
      return (
        typeof globalThis.ReadableStream == "function" &&
          (e = new globalThis.Request("https://a.com", {
            body: new globalThis.ReadableStream(),
            method: "POST",
            get duplex() {
              return (t = !0), "half";
            },
          }).headers.has("Content-Type")),
        t && !e
      );
    })(),
    Ur = typeof globalThis.AbortController == "function",
    Fr = typeof globalThis.ReadableStream == "function",
    Vr = typeof globalThis.FormData == "function",
    Ke = ["get", "post", "put", "patch", "head", "delete"],
    Hr = {
      json: "application/json",
      text: "text/*",
      formData: "multipart/form-data",
      arrayBuffer: "*/*",
      blob: "*/*",
    },
    Gt = 2147483647,
    Ge = Symbol("stop"),
    Br = (t) => (Ke.includes(t) ? t.toUpperCase() : t),
    Kr = ["get", "put", "head", "delete", "options", "trace"],
    Gr = [408, 413, 429, 500, 502, 503, 504],
    We = [413, 429, 503],
    Xe = {
      limit: 2,
      methods: Kr,
      statusCodes: Gr,
      afterStatusCodes: We,
      maxRetryAfter: Number.POSITIVE_INFINITY,
      backoffLimit: Number.POSITIVE_INFINITY,
    },
    Wr = (t = {}) => {
      if (typeof t == "number") return { ...Xe, limit: t };
      if (t.methods && !Array.isArray(t.methods))
        throw new Error("retry.methods must be an array");
      if (t.statusCodes && !Array.isArray(t.statusCodes))
        throw new Error("retry.statusCodes must be an array");
      return { ...Xe, ...t, afterStatusCodes: We };
    };
  async function Xr(t, e, n) {
    return new Promise((r, i) => {
      const o = setTimeout(() => {
        e && e.abort(), i(new He(t));
      }, n.timeout);
      n.fetch(t)
        .then(r)
        .catch(i)
        .then(() => {
          clearTimeout(o);
        });
    });
  }
  const Yr = Boolean(globalThis.DOMException);
  function Ye(t) {
    if (Yr)
      return new DOMException(
        t?.reason ?? "The operation was aborted.",
        "AbortError"
      );
    const e = new Error(t?.reason ?? "The operation was aborted.");
    return (e.name = "AbortError"), e;
  }
  async function Zr(t, { signal: e }) {
    return new Promise((n, r) => {
      if (e) {
        if (e.aborted) {
          r(Ye(e));
          return;
        }
        e.addEventListener("abort", i, { once: !0 });
      }
      function i() {
        r(Ye(e)), clearTimeout(o);
      }
      const o = setTimeout(() => {
        e?.removeEventListener("abort", i), n();
      }, t);
    });
  }
  class Et {
    static create(e, n) {
      const r = new Et(e, n),
        i = async () => {
          if (r._options.timeout > Gt)
            throw new RangeError(
              `The \`timeout\` option cannot be greater than ${Gt}`
            );
          await Promise.resolve();
          let s = await r._fetch();
          for (const u of r._options.hooks.afterResponse) {
            const l = await u(
              r.request,
              r._options,
              r._decorateResponse(s.clone())
            );
            l instanceof globalThis.Response && (s = l);
          }
          if ((r._decorateResponse(s), !s.ok && r._options.throwHttpErrors)) {
            let u = new Ve(s, r.request, r._options);
            for (const l of r._options.hooks.beforeError) u = await l(u);
            throw u;
          }
          if (r._options.onDownloadProgress) {
            if (typeof r._options.onDownloadProgress != "function")
              throw new TypeError(
                "The `onDownloadProgress` option must be a function"
              );
            if (!Fr)
              throw new Error(
                "Streams are not supported in your environment. `ReadableStream` is missing."
              );
            return r._stream(s.clone(), r._options.onDownloadProgress);
          }
          return s;
        },
        a = r._options.retry.methods.includes(r.request.method.toLowerCase())
          ? r._retry(i)
          : i();
      for (const [s, u] of Object.entries(Hr))
        a[s] = async () => {
          r.request.headers.set("accept", r.request.headers.get("accept") || u);
          const c = (await a).clone();
          if (s === "json") {
            if (
              c.status === 204 ||
              (await c.clone().arrayBuffer()).byteLength === 0
            )
              return "";
            if (n.parseJson) return n.parseJson(await c.text());
          }
          return c[s]();
        };
      return a;
    }
    constructor(e, n = {}) {
      if (
        (Object.defineProperty(this, "request", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "abortController", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "_retryCount", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: 0,
        }),
        Object.defineProperty(this, "_input", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        Object.defineProperty(this, "_options", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
        (this._input = e),
        (this._options = {
          credentials: this._input.credentials || "same-origin",
          ...n,
          headers: Be(this._input.headers, n.headers),
          hooks: Kt(
            {
              beforeRequest: [],
              beforeRetry: [],
              beforeError: [],
              afterResponse: [],
            },
            n.hooks
          ),
          method: Br(n.method ?? this._input.method),
          prefixUrl: String(n.prefixUrl || ""),
          retry: Wr(n.retry),
          throwHttpErrors: n.throwHttpErrors !== !1,
          timeout: typeof n.timeout > "u" ? 1e4 : n.timeout,
          fetch: n.fetch ?? globalThis.fetch.bind(globalThis),
        }),
        typeof this._input != "string" &&
          !(
            this._input instanceof URL ||
            this._input instanceof globalThis.Request
          ))
      )
        throw new TypeError("`input` must be a string, URL, or Request");
      if (this._options.prefixUrl && typeof this._input == "string") {
        if (this._input.startsWith("/"))
          throw new Error(
            "`input` must not begin with a slash when using `prefixUrl`"
          );
        this._options.prefixUrl.endsWith("/") ||
          (this._options.prefixUrl += "/"),
          (this._input = this._options.prefixUrl + this._input);
      }
      if (Ur) {
        if (
          ((this.abortController = new globalThis.AbortController()),
          this._options.signal)
        ) {
          const r = this._options.signal;
          this._options.signal.addEventListener("abort", () => {
            this.abortController.abort(r.reason);
          });
        }
        this._options.signal = this.abortController.signal;
      }
      if (
        (zr && (this._options.duplex = "half"),
        (this.request = new globalThis.Request(this._input, this._options)),
        this._options.searchParams)
      ) {
        const i =
            "?" +
            (typeof this._options.searchParams == "string"
              ? this._options.searchParams.replace(/^\?/, "")
              : new URLSearchParams(this._options.searchParams).toString()),
          o = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, i);
        ((Vr && this._options.body instanceof globalThis.FormData) ||
          this._options.body instanceof URLSearchParams) &&
          !(this._options.headers && this._options.headers["content-type"]) &&
          this.request.headers.delete("content-type"),
          (this.request = new globalThis.Request(
            new globalThis.Request(o, { ...this.request }),
            this._options
          ));
      }
      this._options.json !== void 0 &&
        ((this._options.body = JSON.stringify(this._options.json)),
        this.request.headers.set(
          "content-type",
          this._options.headers.get("content-type") ?? "application/json"
        ),
        (this.request = new globalThis.Request(this.request, {
          body: this._options.body,
        })));
    }
    _calculateRetryDelay(e) {
      if (
        (this._retryCount++,
        this._retryCount < this._options.retry.limit && !(e instanceof He))
      ) {
        if (e instanceof Ve) {
          if (!this._options.retry.statusCodes.includes(e.response.status))
            return 0;
          const r = e.response.headers.get("Retry-After");
          if (
            r &&
            this._options.retry.afterStatusCodes.includes(e.response.status)
          ) {
            let i = Number(r);
            return (
              Number.isNaN(i) ? (i = Date.parse(r) - Date.now()) : (i *= 1e3),
              typeof this._options.retry.maxRetryAfter < "u" &&
              i > this._options.retry.maxRetryAfter
                ? 0
                : i
            );
          }
          if (e.response.status === 413) return 0;
        }
        const n = 0.3;
        return Math.min(
          this._options.retry.backoffLimit,
          n * 2 ** (this._retryCount - 1) * 1e3
        );
      }
      return 0;
    }
    _decorateResponse(e) {
      return (
        this._options.parseJson &&
          (e.json = async () => this._options.parseJson(await e.text())),
        e
      );
    }
    async _retry(e) {
      try {
        return await e();
      } catch (n) {
        const r = Math.min(this._calculateRetryDelay(n), Gt);
        if (r !== 0 && this._retryCount > 0) {
          await Zr(r, { signal: this._options.signal });
          for (const i of this._options.hooks.beforeRetry)
            if (
              (await i({
                request: this.request,
                options: this._options,
                error: n,
                retryCount: this._retryCount,
              })) === Ge
            )
              return;
          return this._retry(e);
        }
        throw n;
      }
    }
    async _fetch() {
      for (const e of this._options.hooks.beforeRequest) {
        const n = await e(this.request, this._options);
        if (n instanceof Request) {
          this.request = n;
          break;
        }
        if (n instanceof Response) return n;
      }
      return this._options.timeout === !1
        ? this._options.fetch(this.request.clone())
        : Xr(this.request.clone(), this.abortController, this._options);
    }
    _stream(e, n) {
      const r = Number(e.headers.get("content-length")) || 0;
      let i = 0;
      return e.status === 204
        ? (n &&
            n(
              { percent: 1, totalBytes: r, transferredBytes: i },
              new Uint8Array()
            ),
          new globalThis.Response(null, {
            status: e.status,
            statusText: e.statusText,
            headers: e.headers,
          }))
        : new globalThis.Response(
            new globalThis.ReadableStream({
              async start(o) {
                const a = e.body.getReader();
                n &&
                  n(
                    { percent: 0, transferredBytes: 0, totalBytes: r },
                    new Uint8Array()
                  );
                async function s() {
                  const { done: u, value: l } = await a.read();
                  if (u) {
                    o.close();
                    return;
                  }
                  if (n) {
                    i += l.byteLength;
                    const c = r === 0 ? 0 : i / r;
                    n({ percent: c, transferredBytes: i, totalBytes: r }, l);
                  }
                  o.enqueue(l), await s();
                }
                await s();
              },
            }),
            { status: e.status, statusText: e.statusText, headers: e.headers }
          );
    }
  }
  /*! MIT License © Sindre Sorhus */ const Wt = (t) => {
      const e = (n, r) => Et.create(n, St(t, r));
      for (const n of Ke)
        e[n] = (r, i) => Et.create(r, St(t, i, { method: n }));
      return (
        (e.create = (n) => Wt(St(n))),
        (e.extend = (n) => Wt(St(t, n))),
        (e.stop = Ge),
        e
      );
    },
    Jr = Wt(),
    Qr = R(
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 27"><g clip-path="url(#a)"><path fill="#D4D4D4" d="M18.6 18.556a9.26 9.26 0 1 0 0-18.52 9.26 9.26 0 0 0 0 18.52Z"></path><path fill="#5A5A5A" fill-rule="evenodd" d="M7.084 8.235H6a6 6 0 0 0-6 6v6.74a6 6 0 0 0 6 6h6.74a6 6 0 0 0 5.998-5.857c-6.468 0-11.712-5.244-11.712-11.712 0-.395.02-.786.058-1.17Zm2.357 0a9.37 9.37 0 0 0 9.297 10.54l.001-4.54a6 6 0 0 0-6-6H9.441Z" clip-rule="evenodd"></path><path fill="#959595" fill-rule="evenodd" d="M18.74 18.776a9.37 9.37 0 0 1-9.297-10.54h3.296a6 6 0 0 1 6 6v4.54Z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h28v27H0z"></path></clipPath></defs></svg>',
      16
    ),
    ti = (t = {}) =>
      (() => {
        const e = Qr.cloneNode(!0);
        return Mt(e, t, !0, !0), e;
      })(),
    ei = R(
      '<div class="border-t border-gray-200/75 w-full px-5 py-5"><div class="flex items-center gap-1"></div></div>',
      4
    ),
    ni = R('<div role="group" class="pt-3 flex flex-wrap gap-2.5"></div>', 2),
    ri = R(
      '<div class="border-t border-gray-200/75 w-full px-5 py-5"><p class="text-gray-800 leading-[1.775]"></p></div>',
      4
    ),
    ii = R(
      `<div class="border-t border-gray-200/75 w-full px-5 py-5"><p class="text-gray-800 leading-[1.775]">I'm sorry, I'm having trouble generating your answer. Please try asking your question again.</p></div>`,
      4
    ),
    oi = R(
      '<div role="dialog" aria-modal="true" class="w-full max-w-2xl z-[999] bg-white rounded-xl shadow-lg border border-gray-300/10 fixed top-24 left-1/2 transform -translate-x-1/2 transition-all"><div class="px-5 py-5"><input autocomplete="off" autocapitalize="off" placeholder="Ask a question..." class="w-full outline-none caret-gray-500 text-gray-900 placeholder:text-gray-400"></div><div class="border-t border-gray-200/75 w-full px-5 py-2 flex items-center justify-between"><div class="flex items-center gap-2"><span class="text-xs text-gray-400 leading-none">Powered by Relevance AI</span></div><div class="flex items-center gap-2"><div class="px-1 py-0.5 rounded bg-gray-50 w-fit text-xs border border-gray-300/25 text-gray-600">⏎</div><span class="text-xs text-gray-600">Submit question</span></div></div></div>',
      17
    ),
    si = R('<div class="w-2 h-2 rounded-full bg-gray-400"></div>', 2),
    ai = R(
      '<a role="option" target="_blank"><button class="py-0.5 px-2 rounded-md bg-indigo-100 group text-indigo-800 text-sm flex items-center gap-1.5"><span class="group-hover:underline"></span></button></a>',
      6
    );
  function li(t) {
    let e;
    Jt(() => {
      e?.focus();
    });
    const n = (f) => {
        f.key === "Enter" && r() && A();
      },
      [r, i] = B(""),
      [o, a] = B(!1),
      [s, u] = B("none"),
      [l, c] = B(null),
      d = O(() => {
        if (!l()) return null;
        const {
          instantAnswerResults: { answer: f },
        } = l();
        return f;
      }),
      h = O(() => {
        if (!l()) return null;
        const {
          instantAnswerResults: { references: f },
        } = l();
        return f;
      }),
      x = O(() => Array.isArray(h()) && h().length > 0),
      A = async () => {
        c(null), a(!0), u("loading");
        try {
          const f = await Jr.post(t.config.url, {
            headers: { Authorization: `${t.config.auth_header}` },
            json: {
              vectorSearchQuery: [
                {
                  field: t.config.vector_field,
                  model: t.config?.model ?? "all-mpnet-base-v2",
                  query: r(),
                },
              ],
              minimumRelevance: 0.1,
              pageSize: 3,
              instantAnswerQuery: {
                field: t.config.field,
                query: r(),
                preset: "support3",
                urlField: t.config.reference_url_field,
                titleField: t.config.reference_title_field,
              },
            },
          }).json();
          if (f.instantAnswerResults?.status === "failed") throw new Error();
          c(f), u("success"), a(!1);
        } catch {
          u("error");
        }
      };
    return (() => {
      const f = oi.cloneNode(!0),
        y = f.firstChild,
        S = y.firstChild,
        P = y.nextSibling,
        j = P.firstChild,
        T = j.firstChild;
      (S.$$keydown = (v) => n(v)),
        (S.$$input = (v) => {
          i(v.currentTarget.value);
        });
      const N = e;
      return (
        typeof N == "function" ? En(N, S) : (e = S),
        G(S, "spellcheck", !1),
        k(
          f,
          C(nt, {
            get when() {
              return s() === "loading";
            },
            get children() {
              const v = ei.cloneNode(!0),
                g = v.firstChild;
              return (
                k(
                  g,
                  C(Ir, {
                    times: 3,
                    children: (p) =>
                      C(Dr.div, {
                        class: "flex items-center gap-1",
                        animate: {
                          opacity: [0.8, 1, 0.8],
                          scale: [0.8, 1, 0.8],
                        },
                        transition: {
                          offset: [0, 0.2, 1],
                          duration: 0.2 * 3,
                          delay: p * 0.2,
                          repeat: 1 / 0,
                        },
                        get children() {
                          return si.cloneNode(!0);
                        },
                      }),
                  })
                ),
                v
              );
            },
          }),
          P
        ),
        k(
          f,
          C(nt, {
            get when() {
              return d();
            },
            get children() {
              const v = ri.cloneNode(!0),
                g = v.firstChild;
              return (
                k(g, d),
                k(
                  v,
                  C(nt, {
                    get when() {
                      return x();
                    },
                    get children() {
                      const p = ni.cloneNode(!0);
                      return (
                        k(p, () =>
                          h()?.map((L) =>
                            (() => {
                              const w = ai.cloneNode(!0),
                                V = w.firstChild,
                                D = V.firstChild;
                              return (
                                k(
                                  V,
                                  C(In, {
                                    size: 12,
                                    class: "!text-indigo-800 opacity-80",
                                  }),
                                  D
                                ),
                                k(D, () => L.title),
                                I(() => G(w, "href", L.url)),
                                w
                              );
                            })()
                          )
                        ),
                        p
                      );
                    },
                  }),
                  null
                ),
                v
              );
            },
          }),
          P
        ),
        k(
          f,
          C(nt, {
            get when() {
              return s() === "error";
            },
            get children() {
              return ii.cloneNode(!0);
            },
          }),
          P
        ),
        k(j, C(ti, { class: "h-3 opacity-60" }), T),
        f
      );
    })();
  }
  Rt(["input", "keydown"]);
  const ci = R(
    '<button aria-label="Open help prompt" class="fixed bottom-6 right-6 bg-white rounded-full border border-gray-200/50 hover:bg-gray-50 shadow p-2 w-fit h-fit"></button>',
    2
  );
  function ui() {
    const [t, e] = B(!1),
      n = () => {
        e(!1);
      };
    ft(() => {
      t() && Nn(["Escape"], n);
    });
    const r = document.currentScript?.getAttribute("config"),
      i = r ? atob(r) : void 0;
    let o;
    try {
      return (
        (o = JSON.parse(i ?? "")),
        [
          (() => {
            const s = ci.cloneNode(!0);
            return (
              (s.$$click = () => e(!t())),
              k(s, C(zn, { size: 24, class: "!text-gray-800" })),
              s
            );
          })(),
          C(nt, {
            get when() {
              return t();
            },
            get children() {
              return C(li, { config: o });
            },
          }),
        ]
      );
    } catch {
      console.error(
        "[Ask Relevance] Invalid configuration. Ensure that your configuration is encoded correctly."
      );
    }
  }
  Rt(["click"]);
  const Ze = document.createElement("div");
  document.body.appendChild(Ze), bn(() => C(ui, {}), Ze);
})();
