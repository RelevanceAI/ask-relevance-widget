(function () {
  "use strict";
  var Yt = document.createElement("style");
  (Yt.textContent = `*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.fixed{position:fixed}.bottom-6{bottom:1.5rem}.left-1\\/2{left:50%}.right-6{right:1.5rem}.top-24{top:6rem}.z-\\[999\\]{z-index:999}.flex{display:flex}.h-2{height:.5rem}.h-3{height:.75rem}.h-fit{height:fit-content}.w-2{width:.5rem}.w-fit{width:fit-content}.w-full{width:100%}.max-w-2xl{max-width:42rem}.-translate-x-1\\/2{--tw-translate-x: -50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-1\\.5{gap:.375rem}.gap-2{gap:.5rem}.gap-2\\.5{gap:.625rem}.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-full{border-radius:9999px}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.border{border-width:1px}.border-t{border-top-width:1px}.border-gray-200\\/75{border-color:#e5e7ebbf}.border-gray-300\\/25{border-color:#d1d5db40}.border-gray-300\\/30{border-color:#d1d5db4d}.border-gray-300\\/75{border-color:#d1d5dbbf}.bg-gray-400{--tw-bg-opacity: 1;background-color:rgb(156 163 175 / var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-indigo-100{--tw-bg-opacity: 1;background-color:rgb(224 231 255 / var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-2{padding:.5rem}.px-1{padding-left:.25rem;padding-right:.25rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.py-0{padding-top:0;padding-bottom:0}.py-0\\.5{padding-top:.125rem;padding-bottom:.125rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.py-5{padding-top:1.25rem;padding-bottom:1.25rem}.pt-3{padding-top:.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.leading-\\[1\\.775\\]{line-height:1.775}.leading-none{line-height:1}.\\!text-gray-800{--tw-text-opacity: 1 !important;color:rgb(31 41 55 / var(--tw-text-opacity))!important}.\\!text-indigo-800{--tw-text-opacity: 1 !important;color:rgb(55 48 163 / var(--tw-text-opacity))!important}.text-gray-400{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity: 1;color:rgb(75 85 99 / var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-indigo-800{--tw-text-opacity: 1;color:rgb(55 48 163 / var(--tw-text-opacity))}.caret-gray-500{caret-color:#6b7280}.opacity-60{opacity:.6}.opacity-80{opacity:.8}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline-none{outline:2px solid transparent;outline-offset:2px}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.placeholder\\:text-gray-400::placeholder{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.group:hover .group-hover\\:underline{text-decoration-line:underline}
`),
    document.head.appendChild(Yt);
  const E = {};
  function rn(t) {
    E.context = t;
  }
  const on = (t, e) => t === e,
    lt = Symbol("solid-proxy"),
    sn = Symbol("solid-dev-component"),
    ct = { equals: on };
  let Zt = ie;
  const U = 1,
    ut = 2,
    Jt = { owned: null, cleanups: null, context: null, owner: null };
  var v = null;
  let B = null,
    y = null,
    T = null,
    z = null,
    ft = 0;
  function et(t, e) {
    const n = y,
      r = v,
      i = t.length === 0,
      o = i
        ? Jt
        : {
            owned: null,
            cleanups: null,
            context: null,
            owner: e === void 0 ? r : e,
          },
      a = i ? t : () => t(() => R(() => wt(o)));
    (v = o), (y = null);
    try {
      return K(a, !0);
    } finally {
      (y = n), (v = r);
    }
  }
  function H(t, e) {
    e = e ? Object.assign({}, ct, e) : ct;
    const n = {
        value: t,
        observers: null,
        observerSlots: null,
        comparator: e.equals || void 0,
      },
      r = (i) => (typeof i == "function" && (i = i(n.value)), re(n, i));
    return [ne.bind(n), r];
  }
  function D(t, e, n) {
    const r = Ct(t, e, !1, U);
    nt(r);
  }
  function dt(t, e, n) {
    Zt = hn;
    const r = Ct(t, e, !1, U);
    (r.user = !0), z ? z.push(r) : nt(r);
  }
  function O(t, e, n) {
    n = n ? Object.assign({}, ct, n) : ct;
    const r = Ct(t, e, !0, 0);
    return (
      (r.observers = null),
      (r.observerSlots = null),
      (r.comparator = n.equals || void 0),
      nt(r),
      ne.bind(r)
    );
  }
  function an(t) {
    return K(t, !1);
  }
  function R(t) {
    if (y === null) return t();
    const e = y;
    y = null;
    try {
      return t();
    } finally {
      y = e;
    }
  }
  function ln(t, e, n) {
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
      const u = R(() => e(s, i, a));
      return (i = s), u;
    };
  }
  function Qt(t) {
    dt(() => R(t));
  }
  function ht(t) {
    return (
      v === null ||
        (v.cleanups === null ? (v.cleanups = [t]) : v.cleanups.push(t)),
      t
    );
  }
  function Tt() {
    return v;
  }
  function cn(t, e) {
    const n = v,
      r = y;
    (v = t), (y = null);
    try {
      return K(e, !0);
    } catch (i) {
      kt(i);
    } finally {
      (v = n), (y = r);
    }
  }
  function te(t, e) {
    const n = Symbol("context");
    return { id: n, Provider: gn(n), defaultValue: t };
  }
  function ee(t) {
    let e;
    return (e = se(v, t.id)) !== void 0 ? e : t.defaultValue;
  }
  function un(t) {
    const e = O(t),
      n = O(() => Ot(e()));
    return (
      (n.toArray = () => {
        const r = n();
        return Array.isArray(r) ? r : r != null ? [r] : [];
      }),
      n
    );
  }
  function ne() {
    const t = B;
    if (this.sources && (this.state || t))
      if (this.state === U || t) nt(this);
      else {
        const e = T;
        (T = null), K(() => gt(this), !1), (T = e);
      }
    if (y) {
      const e = this.observers ? this.observers.length : 0;
      y.sources
        ? (y.sources.push(this), y.sourceSlots.push(e))
        : ((y.sources = [this]), (y.sourceSlots = [e])),
        this.observers
          ? (this.observers.push(y),
            this.observerSlots.push(y.sources.length - 1))
          : ((this.observers = [y]),
            (this.observerSlots = [y.sources.length - 1]));
    }
    return this.value;
  }
  function re(t, e, n) {
    let r = t.value;
    return (
      (!t.comparator || !t.comparator(r, e)) &&
        ((t.value = e),
        t.observers &&
          t.observers.length &&
          K(() => {
            for (let i = 0; i < t.observers.length; i += 1) {
              const o = t.observers[i],
                a = B && B.running;
              a && B.disposed.has(o),
                ((a && !o.tState) || (!a && !o.state)) &&
                  (o.pure ? T.push(o) : z.push(o), o.observers && oe(o)),
                a || (o.state = U);
            }
            if (T.length > 1e6) throw ((T = []), new Error());
          }, !1)),
      e
    );
  }
  function nt(t) {
    if (!t.fn) return;
    wt(t);
    const e = v,
      n = y,
      r = ft;
    (y = v = t), fn(t, t.value, r), (y = n), (v = e);
  }
  function fn(t, e, n) {
    let r;
    try {
      r = t.fn(e);
    } catch (i) {
      return (
        t.pure &&
          ((t.state = U), t.owned && t.owned.forEach(wt), (t.owned = null)),
        (t.updatedAt = n + 1),
        kt(i)
      );
    }
    (!t.updatedAt || t.updatedAt <= n) &&
      (t.updatedAt != null && "observers" in t ? re(t, r) : (t.value = r),
      (t.updatedAt = n));
  }
  function Ct(t, e, n, r = U, i) {
    const o = {
      fn: t,
      state: r,
      updatedAt: null,
      owned: null,
      sources: null,
      sourceSlots: null,
      cleanups: null,
      value: e,
      owner: v,
      context: null,
      pure: n,
    };
    return (
      v === null || (v !== Jt && (v.owned ? v.owned.push(o) : (v.owned = [o]))),
      o
    );
  }
  function pt(t) {
    const e = B;
    if (t.state === 0 || e) return;
    if (t.state === ut || e) return gt(t);
    if (t.suspense && R(t.suspense.inFallback))
      return t.suspense.effects.push(t);
    const n = [t];
    for (; (t = t.owner) && (!t.updatedAt || t.updatedAt < ft); )
      (t.state || e) && n.push(t);
    for (let r = n.length - 1; r >= 0; r--)
      if (((t = n[r]), t.state === U || e)) nt(t);
      else if (t.state === ut || e) {
        const i = T;
        (T = null), K(() => gt(t, n[0]), !1), (T = i);
      }
  }
  function K(t, e) {
    if (T) return t();
    let n = !1;
    e || (T = []), z ? (n = !0) : (z = []), ft++;
    try {
      const r = t();
      return dn(n), r;
    } catch (r) {
      n || (z = null), (T = null), kt(r);
    }
  }
  function dn(t) {
    if ((T && (ie(T), (T = null)), t)) return;
    const e = z;
    (z = null), e.length && K(() => Zt(e), !1);
  }
  function ie(t) {
    for (let e = 0; e < t.length; e++) pt(t[e]);
  }
  function hn(t) {
    let e,
      n = 0;
    for (e = 0; e < t.length; e++) {
      const r = t[e];
      r.user ? (t[n++] = r) : pt(r);
    }
    for (E.context && rn(), e = 0; e < n; e++) pt(t[e]);
  }
  function gt(t, e) {
    const n = B;
    t.state = 0;
    for (let r = 0; r < t.sources.length; r += 1) {
      const i = t.sources[r];
      i.sources &&
        (i.state === U || n
          ? i !== e && (!i.updatedAt || i.updatedAt < ft) && pt(i)
          : (i.state === ut || n) && gt(i, e));
    }
  }
  function oe(t) {
    const e = B;
    for (let n = 0; n < t.observers.length; n += 1) {
      const r = t.observers[n];
      (!r.state || e) &&
        ((r.state = ut), r.pure ? T.push(r) : z.push(r), r.observers && oe(r));
    }
  }
  function wt(t) {
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
      for (e = 0; e < t.owned.length; e++) wt(t.owned[e]);
      t.owned = null;
    }
    if (t.cleanups) {
      for (e = 0; e < t.cleanups.length; e++) t.cleanups[e]();
      t.cleanups = null;
    }
    (t.state = 0), (t.context = null);
  }
  function pn(t) {
    return t instanceof Error || typeof t == "string"
      ? t
      : new Error("Unknown error");
  }
  function kt(t) {
    throw ((t = pn(t)), t);
  }
  function se(t, e) {
    return t
      ? t.context && t.context[e] !== void 0
        ? t.context[e]
        : se(t.owner, e)
      : void 0;
  }
  function Ot(t) {
    if (typeof t == "function" && !t.length) return Ot(t());
    if (Array.isArray(t)) {
      const e = [];
      for (let n = 0; n < t.length; n++) {
        const r = Ot(t[n]);
        Array.isArray(r) ? e.push.apply(e, r) : e.push(r);
      }
      return e;
    }
    return t;
  }
  function gn(t, e) {
    return function (r) {
      let i;
      return (
        D(
          () =>
            (i = R(
              () => ((v.context = { [t]: r.value }), un(() => r.children))
            )),
          void 0
        ),
        i
      );
    };
  }
  function C(t, e) {
    return R(() => t(e || {}));
  }
  function mt() {
    return !0;
  }
  const $t = {
    get(t, e, n) {
      return e === lt ? n : t.get(e);
    },
    has(t, e) {
      return e === lt ? !0 : t.has(e);
    },
    set: mt,
    deleteProperty: mt,
    getOwnPropertyDescriptor(t, e) {
      return {
        configurable: !0,
        enumerable: !0,
        get() {
          return t.get(e);
        },
        set: mt,
        deleteProperty: mt,
      };
    },
    ownKeys(t) {
      return t.keys();
    },
  };
  function Pt(t) {
    return (t = typeof t == "function" ? t() : t) ? t : {};
  }
  function Rt(...t) {
    let e = !1;
    for (let r = 0; r < t.length; r++) {
      const i = t[r];
      (e = e || (!!i && lt in i)),
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
        $t
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
  function ae(t, ...e) {
    const n = new Set(e.flat());
    if (lt in t) {
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
            $t
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
            $t
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
  function W(t) {
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
          return (e = n || a), a ? R(() => o(i)) : o;
        }
        return t.fallback;
      },
      void 0,
      void 0
    );
  }
  const wn = [
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
    mn = new Set([
      "className",
      "value",
      "readOnly",
      "formNoValidate",
      "isMap",
      "noModule",
      "playsInline",
      ...wn,
    ]),
    yn = new Set(["innerHTML", "textContent", "innerText", "children"]),
    bn = Object.assign(Object.create(null), {
      className: "class",
      htmlFor: "for",
    }),
    le = Object.assign(Object.create(null), {
      class: "className",
      formnovalidate: "formNoValidate",
      ismap: "isMap",
      nomodule: "noModule",
      playsinline: "playsInline",
      readonly: "readOnly",
    }),
    vn = new Set([
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
    xn = new Set([
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
    _n = {
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
    };
  function Sn(t, e, n) {
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
          let f = s;
          for (; f < o; ) l.set(n[f], f++);
        }
        const c = l.get(e[a]);
        if (c != null)
          if (s < c && c < o) {
            let f = a,
              d = 1,
              x;
            for (
              ;
              ++f < i && f < o && !((x = l.get(e[f])) == null || x !== c + d);

            )
              d++;
            if (d > c - s) {
              const A = e[a];
              for (; s < c; ) t.insertBefore(n[s++], A);
            } else t.replaceChild(n[s++], e[a++]);
          } else a++;
        else e[a++].remove();
      }
    }
  }
  const ce = "_$DX_DELEGATE";
  function En(t, e, n, r = {}) {
    let i;
    return (
      et((o) => {
        (i = o),
          e === document ? t() : k(e, t(), e.firstChild ? null : void 0, n);
      }, r.owner),
      () => {
        i(), (e.textContent = "");
      }
    );
  }
  function M(t, e, n) {
    const r = document.createElement("template");
    if (((r.innerHTML = t), e && r.innerHTML.split("<").length - 1 !== e))
      throw `The browser resolved template HTML does not match JSX input:
${r.innerHTML}

${t}. Is your HTML properly formed?`;
    let i = r.content.firstChild;
    return n && (i = i.firstChild), i;
  }
  function Mt(t, e = window.document) {
    const n = e[ce] || (e[ce] = new Set());
    for (let r = 0, i = t.length; r < i; r++) {
      const o = t[r];
      n.has(o) || (n.add(o), e.addEventListener(o, Pn));
    }
  }
  function G(t, e, n) {
    n == null ? t.removeAttribute(e) : t.setAttribute(e, n);
  }
  function An(t, e, n, r) {
    r == null ? t.removeAttributeNS(e, n) : t.setAttributeNS(e, n, r);
  }
  function Tn(t, e) {
    e == null ? t.removeAttribute("class") : (t.className = e);
  }
  function Cn(t, e, n, r) {
    if (r)
      Array.isArray(n)
        ? ((t[`$$${e}`] = n[0]), (t[`$$${e}Data`] = n[1]))
        : (t[`$$${e}`] = n);
    else if (Array.isArray(n)) {
      const i = n[0];
      t.addEventListener(e, (n[0] = (o) => i.call(t, n[1], o)));
    } else t.addEventListener(e, n);
  }
  function ue(t, e, n = {}) {
    const r = Object.keys(e || {}),
      i = Object.keys(n);
    let o, a;
    for (o = 0, a = i.length; o < a; o++) {
      const s = i[o];
      !s || s === "undefined" || e[s] || (he(t, s, !1), delete n[s]);
    }
    for (o = 0, a = r.length; o < a; o++) {
      const s = r[o],
        u = !!e[s];
      !s || s === "undefined" || n[s] === u || !u || (he(t, s, !0), (n[s] = u));
    }
    return n;
  }
  function fe(t, e, n) {
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
  function jt(t, e = {}, n, r) {
    const i = {};
    return (
      r || D(() => (i.children = X(t, e.children, i.children))),
      D(() => e.ref && e.ref(t)),
      D(() => kn(t, e, n, !0, i, !0)),
      i
    );
  }
  function de(t, e, n) {
    return R(() => t(e, n));
  }
  function k(t, e, n, r) {
    if ((n !== void 0 && !r && (r = []), typeof e != "function"))
      return X(t, e, r, n);
    D((i) => X(t, e(), i, n), r);
  }
  function kn(t, e, n, r, i = {}, o = !1) {
    e || (e = {});
    for (const a in i)
      if (!(a in e)) {
        if (a === "children") continue;
        i[a] = pe(t, a, null, i[a], n, o);
      }
    for (const a in e) {
      if (a === "children") {
        r || X(t, e.children);
        continue;
      }
      const s = e[a];
      i[a] = pe(t, a, s, i[a], n, o);
    }
  }
  function On(t) {
    let e, n;
    if (!E.context || !(e = E.registry.get((n = Rn())))) {
      if (
        (E.context &&
          console.warn("Unable to find DOM nodes for hydration key:", n),
        !t)
      )
        throw new Error(
          "Unrecoverable Hydration Mismatch. No template for key: " + n
        );
      return t.cloneNode(!0);
    }
    return E.completed && E.completed.add(e), E.registry.delete(n), e;
  }
  function $n(t) {
    return t.toLowerCase().replace(/-([a-z])/g, (e, n) => n.toUpperCase());
  }
  function he(t, e, n) {
    const r = e.trim().split(/\s+/);
    for (let i = 0, o = r.length; i < o; i++) t.classList.toggle(r[i], n);
  }
  function pe(t, e, n, r, i, o) {
    let a, s, u;
    if (e === "style") return fe(t, n, r);
    if (e === "classList") return ue(t, n, r);
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
        c = vn.has(l);
      if (!c && r) {
        const f = Array.isArray(r) ? r[0] : r;
        t.removeEventListener(l, f);
      }
      (c || n) && (Cn(t, l, n, c), c && Mt([l]));
    } else if (
      (u = yn.has(e)) ||
      (!i && (le[e] || (s = mn.has(e)))) ||
      (a = t.nodeName.includes("-"))
    )
      e === "class" || e === "className"
        ? Tn(t, n)
        : a && !s && !u
        ? (t[$n(e)] = n)
        : (t[le[e] || e] = n);
    else {
      const l = i && e.indexOf(":") > -1 && _n[e.split(":")[0]];
      l ? An(t, l, e, n) : G(t, bn[e] || e, n);
    }
    return n;
  }
  function Pn(t) {
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
        E.registry &&
          !E.done &&
          ((E.done = !0),
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
  function X(t, e, n, r, i) {
    for (E.context && !n && (n = [...t.childNodes]); typeof n == "function"; )
      n = n();
    if (e === n) return n;
    const o = typeof e,
      a = r !== void 0;
    if (
      ((t = (a && n[0] && n[0].parentNode) || t),
      o === "string" || o === "number")
    ) {
      if (E.context) return n;
      if ((o === "number" && (e = e.toString()), a)) {
        let s = n[0];
        s && s.nodeType === 3 ? (s.data = e) : (s = document.createTextNode(e)),
          (n = Y(t, n, r, s));
      } else
        n !== "" && typeof n == "string"
          ? (n = t.firstChild.data = e)
          : (n = t.textContent = e);
    } else if (e == null || o === "boolean") {
      if (E.context) return n;
      n = Y(t, n, r);
    } else {
      if (o === "function")
        return (
          D(() => {
            let s = e();
            for (; typeof s == "function"; ) s = s();
            n = X(t, s, n, r);
          }),
          () => n
        );
      if (Array.isArray(e)) {
        const s = [],
          u = n && Array.isArray(n);
        if (Lt(s, e, n, i)) return D(() => (n = X(t, s, n, r, !0))), () => n;
        if (E.context) {
          if (!s.length) return n;
          for (let l = 0; l < s.length; l++)
            if (s[l].parentNode) return (n = s);
        }
        if (s.length === 0) {
          if (((n = Y(t, n, r)), a)) return n;
        } else
          u
            ? n.length === 0
              ? ge(t, s, r)
              : Sn(t, n, s)
            : (n && Y(t), ge(t, s));
        n = s;
      } else if (e instanceof Node) {
        if (E.context && e.parentNode) return (n = a ? [e] : e);
        if (Array.isArray(n)) {
          if (a) return (n = Y(t, n, r, e));
          Y(t, n, null, e);
        } else
          n == null || n === "" || !t.firstChild
            ? t.appendChild(e)
            : t.replaceChild(e, t.firstChild);
        n = e;
      } else console.warn("Unrecognized value. Skipped inserting", e);
    }
    return n;
  }
  function Lt(t, e, n, r) {
    let i = !1;
    for (let o = 0, a = e.length; o < a; o++) {
      let s = e[o],
        u = n && n[o];
      if (s instanceof Node) t.push(s);
      else if (!(s == null || s === !0 || s === !1))
        if (Array.isArray(s)) i = Lt(t, s, u) || i;
        else if (typeof s == "function")
          if (r) {
            for (; typeof s == "function"; ) s = s();
            i =
              Lt(t, Array.isArray(s) ? s : [s], Array.isArray(u) ? u : [u]) ||
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
  function ge(t, e, n = null) {
    for (let r = 0, i = e.length; r < i; r++) t.insertBefore(e[r], n);
  }
  function Y(t, e, n, r) {
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
  function Rn() {
    const t = E.context;
    return `${t.id}${t.count++}`;
  }
  const Mn = !1,
    jn = "http://www.w3.org/2000/svg";
  function Ln(t, e = !1) {
    return e ? document.createElementNS(jn, t) : document.createElement(t);
  }
  function Dn(t) {
    const [e, n] = ae(t, ["component"]),
      r = O(() => e.component);
    return O(() => {
      const i = r();
      switch (typeof i) {
        case "function":
          return Object.assign(i, { [sn]: !0 }), R(() => i(n));
        case "string":
          const o = xn.has(i),
            a = E.context ? On() : Ln(i, o);
          return jt(a, n, o), a;
      }
    });
  }
  const pi = "";
  var yt = (t, e) =>
      t === e || (t.length === e.length && t.every((n, r) => n === e[r])),
    Nn = (t) => (Tt() ? ht(t) : t);
  function bt(t, e, n, r) {
    return (
      t.addEventListener(e, n, r), Nn(t.removeEventListener.bind(t, e, n, r))
    );
  }
  function we(t) {
    let e = 0,
      n,
      r;
    return () => (
      r ||
        et((i) => {
          (n = t(i)), (r = i);
        }),
      e++,
      Tt() &&
        ht(() => {
          e--,
            queueMicrotask(() => {
              e || !r || (r(), (r = void 0), (n = void 0));
            });
        }),
      n
    );
  }
  function me(t, e) {
    for (let n = t.length - 1; n >= 0; n--) {
      const r = e.slice(0, n + 1);
      if (!yt(t[n], r)) return !1;
    }
    return !0;
  }
  var ye = we(() => {
      const [t, e] = H([]),
        [n, r] = H(null),
        i = () => e([]);
      return (
        bt(window, "keydown", (o) => {
          if (o.repeat || typeof o.key != "string") return;
          const a = o.key.toUpperCase();
          t().includes(a) ||
            an(() => {
              r(o), e((s) => [...s, a]);
            });
        }),
        bt(window, "keyup", (o) => {
          if (typeof o.key != "string") return;
          const a = o.key.toUpperCase();
          e((s) => s.filter((u) => u !== a));
        }),
        bt(window, "blur", i),
        bt(window, "contextmenu", (o) => {
          o.defaultPrevented || i();
        }),
        [t, { event: n }]
      );
    }),
    qn = we(() => {
      const [t] = ye();
      return O((e) => (t().length === 0 ? [] : [...e, t()]), []);
    });
  function In(t, e, n = {}) {
    if (!t.length) return;
    t = t.map((c) => c.toUpperCase());
    const { preventDefault: r = !0, requireReset: i = !1 } = n,
      [, { event: o }] = ye(),
      a = qn();
    let s = !1;
    dt(
      ln(
        a,
        i
          ? (c) => {
              if (!c.length) return (s = !1);
              s ||
                (c.length < t.length
                  ? me(c, t.slice(0, c.length))
                    ? r && o().preventDefault()
                    : (s = !0)
                  : ((s = !0), me(c, t) && (r && o().preventDefault(), e())));
            }
          : (c) => {
              const f = c.at(-1);
              if (f) {
                if (r && f.length < t.length) {
                  yt(f, t.slice(0, t.length - 1)) && o().preventDefault();
                  return;
                }
                if (yt(f, t)) {
                  const d = c.at(-2);
                  (!d || yt(d, t.slice(0, t.length - 1))) &&
                    (r && o().preventDefault(), e());
                }
              }
            }
      )
    );
  }
  const zn = M(
      '<svg fill="currentColor" stroke-width="0" xmlns="http://www.w3.org/2000/svg"></svg>',
      2
    ),
    Un = M("<title></title>", 2);
  function be(t, e) {
    const n = Rt(t.a, e);
    return (() => {
      const r = zn.cloneNode(!0);
      return (
        jt(r, n, !0, !0),
        k(r, () => Mn, null),
        k(
          r,
          (() => {
            const i = O(() => !!e.title, !0);
            return () =>
              i() &&
              (() => {
                const o = Un.cloneNode(!0);
                return k(o, () => e.title), o;
              })();
          })(),
          null
        ),
        D(
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
              (i._v$2 = fe(r, a, i._v$2)),
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
  function Fn(t) {
    return be(
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
  function Vn(t) {
    return be(
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
  function ve(t, e) {
    t.indexOf(e) === -1 && t.push(e);
  }
  function Bn(t, e) {
    const n = t.indexOf(e);
    n > -1 && t.splice(n, 1);
  }
  const xe = (t, e, n) => Math.min(Math.max(n, t), e),
    j = { duration: 0.3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" },
    rt = (t) => typeof t == "number",
    Z = (t) => Array.isArray(t) && !rt(t[0]),
    Hn = (t, e, n) => {
      const r = e - t;
      return ((((n - t) % r) + r) % r) + t;
    };
  function Kn(t, e) {
    return Z(t) ? t[Hn(0, t.length, e)] : t;
  }
  const _e = (t, e, n) => -n * t + n * e + t,
    Se = () => {},
    F = (t) => t,
    Dt = (t, e, n) => (e - t === 0 ? 1 : (n - t) / (e - t));
  function Ee(t, e) {
    const n = t[t.length - 1];
    for (let r = 1; r <= e; r++) {
      const i = Dt(0, e, r);
      t.push(_e(n, 1, i));
    }
  }
  function Gn(t) {
    const e = [0];
    return Ee(e, t - 1), e;
  }
  function Wn(t, e = Gn(t.length), n = F) {
    const r = t.length,
      i = r - e.length;
    return (
      i > 0 && Ee(e, i),
      (o) => {
        let a = 0;
        for (; a < r - 2 && !(o < e[a + 1]); a++);
        let s = xe(0, 1, Dt(e[a], e[a + 1], o));
        return (s = Kn(n, a)(s)), _e(t[a], t[a + 1], s);
      }
    );
  }
  const Ae = (t) => Array.isArray(t) && rt(t[0]),
    Nt = (t) => typeof t == "object" && Boolean(t.createAnimation),
    it = (t) => typeof t == "function",
    Xn = (t) => typeof t == "string",
    qt = { ms: (t) => t * 1e3, s: (t) => t / 1e3 },
    Te = (t, e, n) =>
      (((1 - 3 * n + 3 * e) * t + (3 * n - 6 * e)) * t + 3 * e) * t,
    Yn = 1e-7,
    Zn = 12;
  function Jn(t, e, n, r, i) {
    let o,
      a,
      s = 0;
    do (a = e + (n - e) / 2), (o = Te(a, r, i) - t), o > 0 ? (n = a) : (e = a);
    while (Math.abs(o) > Yn && ++s < Zn);
    return a;
  }
  function ot(t, e, n, r) {
    if (t === e && n === r) return F;
    const i = (o) => Jn(o, 0, 1, t, n);
    return (o) => (o === 0 || o === 1 ? o : Te(i(o), e, r));
  }
  const Qn =
      (t, e = "end") =>
      (n) => {
        n = e === "end" ? Math.min(n, 0.999) : Math.max(n, 0.001);
        const r = n * t,
          i = e === "end" ? Math.floor(r) : Math.ceil(r);
        return xe(0, 1, i / t);
      },
    Ce = {
      ease: ot(0.25, 0.1, 0.25, 1),
      "ease-in": ot(0.42, 0, 1, 1),
      "ease-in-out": ot(0.42, 0, 0.58, 1),
      "ease-out": ot(0, 0, 0.58, 1),
    },
    tr = /\((.*?)\)/;
  function ke(t) {
    if (it(t)) return t;
    if (Ae(t)) return ot(...t);
    if (Ce[t]) return Ce[t];
    if (t.startsWith("steps")) {
      const e = tr.exec(t);
      if (e) {
        const n = e[1].split(",");
        return Qn(parseFloat(n[0]), n[1].trim());
      }
    }
    return F;
  }
  class er {
    constructor(
      e,
      n = [0, 1],
      {
        easing: r,
        duration: i = j.duration,
        delay: o = j.delay,
        endDelay: a = j.endDelay,
        repeat: s = j.repeat,
        offset: u,
        direction: l = "normal",
      } = {}
    ) {
      if (
        ((this.startTime = null),
        (this.rate = 1),
        (this.t = 0),
        (this.cancelTimestamp = null),
        (this.easing = F),
        (this.duration = 0),
        (this.totalDuration = 0),
        (this.repeat = 0),
        (this.playState = "idle"),
        (this.finished = new Promise((f, d) => {
          (this.resolve = f), (this.reject = d);
        })),
        (r = r || j.easing),
        Nt(r))
      ) {
        const f = r.createAnimation(n);
        (r = f.easing), (n = f.keyframes || n), (i = f.duration || i);
      }
      (this.repeat = s),
        (this.easing = Z(r) ? F : ke(r)),
        this.updateDuration(i);
      const c = Wn(n, u, Z(r) ? r.map(ke) : F);
      (this.tick = (f) => {
        var d;
        o = o;
        let x = 0;
        this.pauseTime !== void 0
          ? (x = this.pauseTime)
          : (x = (f - this.startTime) * this.rate),
          (this.t = x),
          (x /= 1e3),
          (x = Math.max(x - o, 0)),
          this.playState === "finished" &&
            this.pauseTime === void 0 &&
            (x = this.totalDuration);
        const A = x / this.duration;
        let p = Math.floor(A),
          b = A % 1;
        !b && A >= 1 && (b = 1), b === 1 && p--;
        const h = p % 2;
        (l === "reverse" ||
          (l === "alternate" && h) ||
          (l === "alternate-reverse" && !h)) &&
          (b = 1 - b);
        const L = x >= this.totalDuration ? 1 : Math.min(b, 1),
          $ = c(this.easing(L));
        e($),
          this.pauseTime === void 0 &&
          (this.playState === "finished" || x >= this.totalDuration + a)
            ? ((this.playState = "finished"),
              (d = this.resolve) === null || d === void 0 || d.call(this, $))
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
  class nr {
    setAnimation(e) {
      (this.animation = e),
        e?.finished.then(() => this.clearAnimation()).catch(() => {});
    }
    clearAnimation() {
      this.animation = this.generator = void 0;
    }
  }
  const It = new WeakMap();
  function Oe(t) {
    return (
      It.has(t) || It.set(t, { transforms: [], values: new Map() }), It.get(t)
    );
  }
  function rr(t, e) {
    return t.has(e) || t.set(e, new nr()), t.get(e);
  }
  const ir = ["", "X", "Y", "Z"],
    or = ["translate", "scale", "rotate", "skew"],
    J = { x: "translateX", y: "translateY", z: "translateZ" },
    $e = {
      syntax: "<angle>",
      initialValue: "0deg",
      toDefaultUnit: (t) => t + "deg",
    },
    sr = {
      translate: {
        syntax: "<length-percentage>",
        initialValue: "0px",
        toDefaultUnit: (t) => t + "px",
      },
      rotate: $e,
      scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: F },
      skew: $e,
    },
    Q = new Map(),
    vt = (t) => `--motion-${t}`,
    xt = ["x", "y", "z"];
  or.forEach((t) => {
    ir.forEach((e) => {
      xt.push(t + e), Q.set(vt(t + e), sr[t]);
    });
  });
  const ar = (t, e) => xt.indexOf(t) - xt.indexOf(e),
    lr = new Set(xt),
    zt = (t) => lr.has(t),
    cr = (t, e) => {
      J[e] && (e = J[e]);
      const { transforms: n } = Oe(t);
      ve(n, e), (t.style.transform = Pe(n));
    },
    Pe = (t) => t.sort(ar).reduce(ur, "").trim(),
    ur = (t, e) => `${t} ${e}(var(${vt(e)}))`,
    Ut = (t) => t.startsWith("--"),
    Re = new Set();
  function fr(t) {
    if (!Re.has(t)) {
      Re.add(t);
      try {
        const { syntax: e, initialValue: n } = Q.has(t) ? Q.get(t) : {};
        CSS.registerProperty({
          name: t,
          inherits: !1,
          syntax: e,
          initialValue: n,
        });
      } catch {}
    }
  }
  const Ft = (t, e) => document.createElement("div").animate(t, e),
    Me = {
      cssRegisterProperty: () =>
        typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"),
      waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"),
      partialKeyframes: () => {
        try {
          Ft({ opacity: [1] });
        } catch {
          return !1;
        }
        return !0;
      },
      finished: () =>
        Boolean(Ft({ opacity: [0, 1] }, { duration: 0.001 }).finished),
      linearEasing: () => {
        try {
          Ft({ opacity: 0 }, { easing: "linear(0, 1)" });
        } catch {
          return !1;
        }
        return !0;
      },
    },
    Vt = {},
    tt = {};
  for (const t in Me)
    tt[t] = () => (Vt[t] === void 0 && (Vt[t] = Me[t]()), Vt[t]);
  const dr = 0.015,
    hr = (t, e) => {
      let n = "";
      const r = Math.round(e / dr);
      for (let i = 0; i < r; i++) n += t(Dt(0, r - 1, i)) + ", ";
      return n.substring(0, n.length - 2);
    },
    je = (t, e) =>
      it(t)
        ? tt.linearEasing()
          ? `linear(${hr(t, e)})`
          : j.easing
        : Ae(t)
        ? pr(t)
        : t,
    pr = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`;
  function gr(t, e) {
    for (let n = 0; n < t.length; n++)
      t[n] === null && (t[n] = n ? t[n - 1] : e());
    return t;
  }
  const wr = (t) => (Array.isArray(t) ? t : [t]);
  function Bt(t) {
    return J[t] && (t = J[t]), zt(t) ? vt(t) : t;
  }
  const st = {
    get: (t, e) => {
      e = Bt(e);
      let n = Ut(e) ? t.style.getPropertyValue(e) : getComputedStyle(t)[e];
      if (!n && n !== 0) {
        const r = Q.get(e);
        r && (n = r.initialValue);
      }
      return n;
    },
    set: (t, e, n) => {
      (e = Bt(e)), Ut(e) ? t.style.setProperty(e, n) : (t.style[e] = n);
    },
  };
  function mr(t, e = !0) {
    if (!(!t || t.playState === "finished"))
      try {
        t.stop ? t.stop() : (e && t.commitStyles(), t.cancel());
      } catch {}
  }
  function yr(t, e) {
    var n;
    let r = e?.toDefaultUnit || F;
    const i = t[t.length - 1];
    if (Xn(i)) {
      const o =
        ((n = i.match(/(-?[\d.]+)([a-z%]*)/)) === null || n === void 0
          ? void 0
          : n[2]) || "";
      o && (r = (a) => a + o);
    }
    return r;
  }
  function br() {
    return window.__MOTION_DEV_TOOLS_RECORD;
  }
  function vr(t, e, n, r = {}, i) {
    const o = br(),
      a = r.record !== !1 && o;
    let s,
      {
        duration: u = j.duration,
        delay: l = j.delay,
        endDelay: c = j.endDelay,
        repeat: f = j.repeat,
        easing: d = j.easing,
        persist: x = !1,
        direction: A,
        offset: p,
        allowWebkitAcceleration: b = !1,
      } = r;
    const h = Oe(t),
      L = zt(e);
    let $ = tt.waapi();
    L && cr(t, e);
    const S = Bt(e),
      N = rr(h.values, S),
      P = Q.get(S);
    return (
      mr(N.animation, !(Nt(d) && N.generator) && r.record !== !1),
      () => {
        const w = () => {
          var m, q;
          return (q =
            (m = st.get(t, S)) !== null && m !== void 0
              ? m
              : P?.initialValue) !== null && q !== void 0
            ? q
            : 0;
        };
        let g = gr(wr(n), w);
        const _ = yr(g, P);
        if (Nt(d)) {
          const m = d.createAnimation(g, e !== "opacity", w, S, N);
          (d = m.easing), (g = m.keyframes || g), (u = m.duration || u);
        }
        if (
          (Ut(S) && (tt.cssRegisterProperty() ? fr(S) : ($ = !1)),
          L &&
            !tt.linearEasing() &&
            (it(d) || (Z(d) && d.some(it))) &&
            ($ = !1),
          $)
        ) {
          P && (g = g.map((I) => (rt(I) ? P.toDefaultUnit(I) : I))),
            g.length === 1 && (!tt.partialKeyframes() || a) && g.unshift(w());
          const m = {
            delay: qt.ms(l),
            duration: qt.ms(u),
            endDelay: qt.ms(c),
            easing: Z(d) ? void 0 : je(d, u),
            direction: A,
            iterations: f + 1,
            fill: "both",
          };
          (s = t.animate(
            {
              [S]: g,
              offset: p,
              easing: Z(d) ? d.map((I) => je(I, u)) : void 0,
            },
            m
          )),
            s.finished ||
              (s.finished = new Promise((I, at) => {
                (s.onfinish = I), (s.oncancel = at);
              }));
          const q = g[g.length - 1];
          s.finished
            .then(() => {
              x || (st.set(t, S, q), s.cancel());
            })
            .catch(Se),
            b || (s.playbackRate = 1.000001);
        } else if (i && L)
          (g = g.map((m) => (typeof m == "string" ? parseFloat(m) : m))),
            g.length === 1 && g.unshift(parseFloat(w())),
            (s = new i(
              (m) => {
                st.set(t, S, _ ? _(m) : m);
              },
              g,
              Object.assign(Object.assign({}, r), { duration: u, easing: d })
            ));
        else {
          const m = g[g.length - 1];
          st.set(t, S, P && rt(m) ? P.toDefaultUnit(m) : m);
        }
        return (
          a &&
            o(
              t,
              e,
              g,
              { duration: u, delay: l, easing: d, repeat: f, offset: p },
              "motion-one"
            ),
          N.setAnimation(s),
          s
        );
      }
    );
  }
  const xr = (t, e) =>
    t[e] ? Object.assign(Object.assign({}, t), t[e]) : Object.assign({}, t);
  function _r(t, e) {
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
  function Le(t, e) {
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
  const Sr = { any: 0, all: 1 };
  function Er(t, e, { root: n, margin: r, amount: i = "any" } = {}) {
    if (typeof IntersectionObserver > "u") return () => {};
    const o = _r(t),
      a = new WeakMap(),
      s = (l) => {
        l.forEach((c) => {
          const f = a.get(c.target);
          if (c.isIntersecting !== Boolean(f))
            if (c.isIntersecting) {
              const d = e(c);
              it(d) ? a.set(c.target, d) : u.unobserve(c.target);
            } else f && (f(c), a.delete(c.target));
        });
      },
      u = new IntersectionObserver(s, {
        root: n,
        rootMargin: r,
        threshold: typeof i == "number" ? i : Sr[i],
      });
    return o.forEach((l) => u.observe(l)), () => u.disconnect();
  }
  function Ar(t, e) {
    return typeof t != typeof e
      ? !0
      : Array.isArray(t) && Array.isArray(e)
      ? !Tr(t, e)
      : t !== e;
  }
  function Tr(t, e) {
    const n = e.length;
    if (n !== t.length) return !1;
    for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
    return !0;
  }
  function Cr(t) {
    return typeof t == "object";
  }
  function De(t, e) {
    if (Cr(t)) return t;
    if (t && e) return e[t];
  }
  let V;
  function kr() {
    if (!V) return;
    const t = V.sort($r).map(Pr);
    t.forEach(Ne), t.forEach(Ne), (V = void 0);
  }
  function Ht(t) {
    V ? ve(V, t) : ((V = [t]), requestAnimationFrame(kr));
  }
  function Or(t) {
    V && Bn(V, t);
  }
  const $r = (t, e) => t.getDepth() - e.getDepth(),
    Pr = (t) => t.animateUpdates(),
    Ne = (t) => t.next(),
    qe = (t, e) => new CustomEvent(t, { detail: { target: e } });
  function Kt(t, e, n) {
    t.dispatchEvent(new CustomEvent(e, { detail: { originalEvent: n } }));
  }
  function Ie(t, e, n) {
    t.dispatchEvent(new CustomEvent(e, { detail: { originalEntry: n } }));
  }
  const Rr = {
      isActive: (t) => Boolean(t.inView),
      subscribe: (t, { enable: e, disable: n }, { inViewOptions: r = {} }) => {
        const { once: i } = r,
          o = Le(r, ["once"]);
        return Er(
          t,
          (a) => {
            if ((e(), Ie(t, "viewenter", a), !i))
              return (s) => {
                n(), Ie(t, "viewleave", s);
              };
          },
          o
        );
      },
    },
    ze = (t, e, n) => (r) => {
      (r.pointerType && r.pointerType !== "mouse") || (n(), Kt(t, e, r));
    },
    _t = {
      inView: Rr,
      hover: {
        isActive: (t) => Boolean(t.hover),
        subscribe: (t, { enable: e, disable: n }) => {
          const r = ze(t, "hoverstart", e),
            i = ze(t, "hoverend", n);
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
                Kt(t, "pressend", o),
                window.removeEventListener("pointerup", r);
            },
            i = (o) => {
              e(),
                Kt(t, "pressstart", o),
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
    Ue = ["initial", "animate", ...Object.keys(_t), "exit"],
    Fe = new WeakMap();
  function Mr(t = {}, e) {
    let n,
      r = e ? e.getDepth() + 1 : 0;
    const i = { initial: !0, animate: !0 },
      o = {},
      a = {};
    for (const p of Ue)
      a[p] = typeof t[p] == "string" ? t[p] : e?.getContext()[p];
    const s = t.initial === !1 ? "animate" : "initial";
    let u = De(t[s] || a[s], t.variants) || {},
      l = Le(u, ["transition"]);
    const c = Object.assign({}, l);
    function* f() {
      var p, b;
      const h = l;
      l = {};
      const L = {};
      for (const w of Ue) {
        if (!i[w]) continue;
        const g = De(t[w]);
        if (g)
          for (const _ in g)
            _ !== "transition" &&
              ((l[_] = g[_]),
              (L[_] = xr(
                (b =
                  (p = g.transition) !== null && p !== void 0
                    ? p
                    : t.transition) !== null && b !== void 0
                  ? b
                  : {},
                _
              )));
      }
      const $ = new Set([...Object.keys(l), ...Object.keys(h)]),
        S = [];
      $.forEach((w) => {
        var g;
        l[w] === void 0 && (l[w] = c[w]),
          Ar(h[w], l[w]) &&
            (((g = c[w]) !== null && g !== void 0) || (c[w] = st.get(n, w)),
            S.push(vr(n, w, l[w], L[w], er)));
      }),
        yield;
      const N = S.map((w) => w()).filter(Boolean);
      if (!N.length) return;
      const P = l;
      n.dispatchEvent(qe("motionstart", P)),
        Promise.all(N.map((w) => w.finished))
          .then(() => {
            n.dispatchEvent(qe("motioncomplete", P));
          })
          .catch(Se);
    }
    const d = (p, b) => () => {
        (i[p] = b), Ht(A);
      },
      x = () => {
        for (const p in _t) {
          const b = _t[p].isActive(t),
            h = o[p];
          b && !h
            ? (o[p] = _t[p].subscribe(
                n,
                { enable: d(p, !0), disable: d(p, !1) },
                t
              ))
            : !b && h && (h(), delete o[p]);
        }
      },
      A = {
        update: (p) => {
          n && ((t = p), x(), Ht(A));
        },
        setActive: (p, b) => {
          n && ((i[p] = b), Ht(A));
        },
        animateUpdates: f,
        getDepth: () => r,
        getTarget: () => l,
        getOptions: () => t,
        getContext: () => a,
        mount: (p) => (
          (n = p),
          Fe.set(n, A),
          x(),
          () => {
            Fe.delete(n), Or(A);
            for (const b in o) o[b]();
          }
        ),
        isMounted: () => Boolean(n),
      };
    return A;
  }
  function jr(t) {
    const e = {},
      n = [];
    for (let r in t) {
      const i = t[r];
      zt(r) && (J[r] && (r = J[r]), n.push(r), (r = vt(r)));
      let o = Array.isArray(i) ? i[0] : i;
      const a = Q.get(r);
      a && (o = rt(i) ? a.toDefaultUnit(i) : i), (e[r] = o);
    }
    return n.length && (e.transform = Pe(n)), e;
  }
  const Lr = { initial: () => !0, addCleanup: ht, addMount: Qt },
    Ve = te(),
    Dr = te(Lr);
  function Nr(t, e, n, r) {
    const { addCleanup: i, addMount: o, initial: a } = n,
      s = Mr(a() ? e() : { ...e(), initial: !1 }, r);
    return (
      o(
        cn.bind(void 0, Tt(), () => {
          i(s.mount(t())), dt(() => s.update(e()));
        })
      ),
      s
    );
  }
  var qr = /([^:; ]*):\s*([^;]*)/g;
  function Be(t) {
    const e = {};
    let n;
    for (; (n = qr.exec(t)); ) e[n[1]] = n[2];
    return e;
  }
  function Ir(t, e) {
    if (typeof t == "object" && typeof e == "object") return { ...t, ...e };
    if (typeof t == "string" && typeof e == "string") return `${t};${e}`;
    const n = typeof t == "object" ? t : Be(t),
      r = typeof e == "object" ? e : Be(e);
    return { ...n, ...r };
  }
  const He = (t) => {
      const [e, , n] = ae(
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
        r = Nr(
          () => o,
          () => ({ ...e }),
          ee(Dr),
          ee(Ve)
        ),
        i = jr(r.getTarget());
      let o;
      return C(Ve.Provider, {
        value: r,
        get children() {
          return C(
            Dn,
            Rt(
              {
                ref: (a) => {
                  (o = a), t.ref?.(a);
                },
                get component() {
                  return R(() => t.tag || "div");
                },
                get style() {
                  return O(() => !!t.style)() ? Ir(t.style, i) : i;
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
    zr = new Proxy(He, {
      get: (t, e) => (n) => (delete n.tag, C(He, Rt(n, { tag: e }))),
    });
  function Ur(t, e, n = {}) {
    let r = [],
      i = [],
      o = 0;
    ht(() => r.forEach((l) => l()));
    const a = (l) => {
        if (l === 0)
          return (
            r.forEach((c) => c()),
            n.fallback
              ? et((c) => ((r = [c]), (i = [n.fallback()])))
              : ((r = []), (i = []))
          );
        if (o === 0) {
          r[0] && r[0]();
          for (let c = 0; c < l; c++) i[c] = et(s.bind(void 0, c));
          return i;
        }
        {
          const c = o - l;
          if (c > 0) {
            for (let f = o - 1; f >= l; f--) r[f]();
            return i.splice(l, c), r.splice(l, c), i;
          }
        }
        for (let c = o; c < l; c++) i[c] = et(s.bind(void 0, c));
        return i;
      },
      s = (l, c) => ((r[l] = c), e(l)),
      u = O(() => Math.floor(Math.max(t(), 0)));
    return () => {
      const l = u();
      return R(() => {
        const c = a(l);
        return (o = l), c;
      });
    };
  }
  function Fr(t) {
    const e = t.fallback ? () => t.fallback : void 0,
      n = typeof t.children == "function" ? t.children : () => t.children;
    return Ur(() => t.times, n, { fallback: e });
  }
  class Ke extends Error {
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
  class Ge extends Error {
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
  const St = (t) => t !== null && typeof t == "object",
    Et = (...t) => {
      for (const e of t)
        if ((!St(e) || Array.isArray(e)) && typeof e < "u")
          throw new TypeError("The `options` argument must be an object");
      return Gt({}, ...t);
    },
    We = (t = {}, e = {}) => {
      const n = new globalThis.Headers(t),
        r = e instanceof globalThis.Headers,
        i = new globalThis.Headers(e);
      for (const [o, a] of i.entries())
        (r && a === "undefined") || a === void 0 ? n.delete(o) : n.set(o, a);
      return n;
    },
    Gt = (...t) => {
      let e = {},
        n = {};
      for (const r of t)
        if (Array.isArray(r)) Array.isArray(e) || (e = []), (e = [...e, ...r]);
        else if (St(r)) {
          for (let [i, o] of Object.entries(r))
            St(o) && i in e && (o = Gt(e[i], o)), (e = { ...e, [i]: o });
          St(r.headers) && ((n = We(n, r.headers)), (e.headers = n));
        }
      return e;
    },
    Vr = (() => {
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
    Br = typeof globalThis.AbortController == "function",
    Hr = typeof globalThis.ReadableStream == "function",
    Kr = typeof globalThis.FormData == "function",
    Xe = ["get", "post", "put", "patch", "head", "delete"],
    Gr = {
      json: "application/json",
      text: "text/*",
      formData: "multipart/form-data",
      arrayBuffer: "*/*",
      blob: "*/*",
    },
    Wt = 2147483647,
    Ye = Symbol("stop"),
    Wr = (t) => (Xe.includes(t) ? t.toUpperCase() : t),
    Xr = ["get", "put", "head", "delete", "options", "trace"],
    Yr = [408, 413, 429, 500, 502, 503, 504],
    Ze = [413, 429, 503],
    Je = {
      limit: 2,
      methods: Xr,
      statusCodes: Yr,
      afterStatusCodes: Ze,
      maxRetryAfter: Number.POSITIVE_INFINITY,
      backoffLimit: Number.POSITIVE_INFINITY,
    },
    Zr = (t = {}) => {
      if (typeof t == "number") return { ...Je, limit: t };
      if (t.methods && !Array.isArray(t.methods))
        throw new Error("retry.methods must be an array");
      if (t.statusCodes && !Array.isArray(t.statusCodes))
        throw new Error("retry.statusCodes must be an array");
      return { ...Je, ...t, afterStatusCodes: Ze };
    };
  async function Jr(t, e, n) {
    return new Promise((r, i) => {
      const o = setTimeout(() => {
        e && e.abort(), i(new Ge(t));
      }, n.timeout);
      n.fetch(t)
        .then(r)
        .catch(i)
        .then(() => {
          clearTimeout(o);
        });
    });
  }
  const Qr = Boolean(globalThis.DOMException);
  function Qe(t) {
    if (Qr)
      return new DOMException(
        t?.reason ?? "The operation was aborted.",
        "AbortError"
      );
    const e = new Error(t?.reason ?? "The operation was aborted.");
    return (e.name = "AbortError"), e;
  }
  async function ti(t, { signal: e }) {
    return new Promise((n, r) => {
      if (e) {
        if (e.aborted) {
          r(Qe(e));
          return;
        }
        e.addEventListener("abort", i, { once: !0 });
      }
      function i() {
        r(Qe(e)), clearTimeout(o);
      }
      const o = setTimeout(() => {
        e?.removeEventListener("abort", i), n();
      }, t);
    });
  }
  class At {
    static create(e, n) {
      const r = new At(e, n),
        i = async () => {
          if (r._options.timeout > Wt)
            throw new RangeError(
              `The \`timeout\` option cannot be greater than ${Wt}`
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
            let u = new Ke(s, r.request, r._options);
            for (const l of r._options.hooks.beforeError) u = await l(u);
            throw u;
          }
          if (r._options.onDownloadProgress) {
            if (typeof r._options.onDownloadProgress != "function")
              throw new TypeError(
                "The `onDownloadProgress` option must be a function"
              );
            if (!Hr)
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
      for (const [s, u] of Object.entries(Gr))
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
          headers: We(this._input.headers, n.headers),
          hooks: Gt(
            {
              beforeRequest: [],
              beforeRetry: [],
              beforeError: [],
              afterResponse: [],
            },
            n.hooks
          ),
          method: Wr(n.method ?? this._input.method),
          prefixUrl: String(n.prefixUrl || ""),
          retry: Zr(n.retry),
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
      if (Br) {
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
        (Vr && (this._options.duplex = "half"),
        (this.request = new globalThis.Request(this._input, this._options)),
        this._options.searchParams)
      ) {
        const i =
            "?" +
            (typeof this._options.searchParams == "string"
              ? this._options.searchParams.replace(/^\?/, "")
              : new URLSearchParams(this._options.searchParams).toString()),
          o = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, i);
        ((Kr && this._options.body instanceof globalThis.FormData) ||
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
        this._retryCount < this._options.retry.limit && !(e instanceof Ge))
      ) {
        if (e instanceof Ke) {
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
        const r = Math.min(this._calculateRetryDelay(n), Wt);
        if (r !== 0 && this._retryCount > 0) {
          await ti(r, { signal: this._options.signal });
          for (const i of this._options.hooks.beforeRetry)
            if (
              (await i({
                request: this.request,
                options: this._options,
                error: n,
                retryCount: this._retryCount,
              })) === Ye
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
        : Jr(this.request.clone(), this.abortController, this._options);
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
  /*! MIT License © Sindre Sorhus */ const Xt = (t) => {
      const e = (n, r) => At.create(n, Et(t, r));
      for (const n of Xe)
        e[n] = (r, i) => At.create(r, Et(t, i, { method: n }));
      return (
        (e.create = (n) => Xt(Et(n))),
        (e.extend = (n) => Xt(Et(t, n))),
        (e.stop = Ye),
        e
      );
    },
    ei = Xt(),
    ni = M(
      '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 27"><g clip-path="url(#a)"><path fill="#D4D4D4" d="M18.6 18.556a9.26 9.26 0 1 0 0-18.52 9.26 9.26 0 0 0 0 18.52Z"></path><path fill="#5A5A5A" fill-rule="evenodd" d="M7.084 8.235H6a6 6 0 0 0-6 6v6.74a6 6 0 0 0 6 6h6.74a6 6 0 0 0 5.998-5.857c-6.468 0-11.712-5.244-11.712-11.712 0-.395.02-.786.058-1.17Zm2.357 0a9.37 9.37 0 0 0 9.297 10.54l.001-4.54a6 6 0 0 0-6-6H9.441Z" clip-rule="evenodd"></path><path fill="#959595" fill-rule="evenodd" d="M18.74 18.776a9.37 9.37 0 0 1-9.297-10.54h3.296a6 6 0 0 1 6 6v4.54Z" clip-rule="evenodd"></path></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h28v27H0z"></path></clipPath></defs></svg>',
      16
    ),
    ri = (t = {}) =>
      (() => {
        const e = ni.cloneNode(!0);
        return jt(e, t, !0, !0), e;
      })(),
    ii = M(
      '<div class="border-t border-gray-200/75 w-full px-5 py-5"><div class="flex items-center gap-1"></div></div>',
      4
    ),
    oi = M('<div role="group" class="pt-3 flex flex-wrap gap-2.5"></div>', 2),
    si = M(
      '<div class="border-t border-gray-200/75 w-full px-5 py-5"><p class="text-gray-800 leading-[1.775]"></p></div>',
      4
    ),
    ai = M(
      `<div class="border-t border-gray-200/75 w-full px-5 py-5"><p class="text-gray-800 leading-[1.775]">I'm sorry, I'm having trouble generating your answer. Please try asking your question again.</p></div>`,
      4
    ),
    li = M(
      '<div role="dialog" aria-modal="true" class="w-full max-w-2xl z-[999] bg-white rounded-xl shadow-lg border border-gray-300/30 transition-all"><div class="px-5 py-5"><input autocomplete="off" autocapitalize="off" placeholder="Ask a question..." class="w-full outline-none caret-gray-500 text-gray-900 placeholder:text-gray-400"></div><div class="border-t border-gray-200/75 w-full px-5 py-2 flex items-center justify-between"><div class="flex items-center gap-2"><span class="text-xs text-gray-400 leading-none whitespace-nowrap">Powered by Relevance AI</span></div><div class="flex items-center gap-2"><div class="px-1 py-0.5 rounded bg-gray-50 w-fit text-xs border border-gray-300/25 text-gray-600">⏎</div><span class="text-xs text-gray-600">Submit question</span></div></div></div>',
      17
    ),
    ci = M('<div class="w-2 h-2 rounded-full bg-gray-400"></div>', 2),
    ui = M(
      '<a role="option" target="_blank"><button class="py-0.5 px-2 rounded-md bg-indigo-100 group text-indigo-800 text-sm flex items-center gap-1.5"><span class="group-hover:underline"></span></button></a>',
      6
    );
  function fi(t) {
    let e;
    const n = t?.demo;
    let r;
    Qt(() => {
      if ((e?.focus(), n)) {
        const h = document.getElementById("widget-preview");
        console.log("[Debugging] Running in demo mode", h, r),
          r && h?.appendChild(r);
      }
    });
    const i = (h) => {
        h.key === "Enter" && o() && b();
      },
      [o, a] = H(""),
      [s, u] = H(!1),
      [l, c] = H("none"),
      [f, d] = H(null),
      x = O(() => {
        if (!f()) return null;
        const {
          instantAnswerResults: { answer: h },
        } = f();
        return h;
      }),
      A = O(() => {
        if (!f()) return null;
        const {
          instantAnswerResults: { references: h },
        } = f();
        return h;
      }),
      p = O(() => Array.isArray(A()) && A().length > 0),
      b = async () => {
        d(null), u(!0), c("loading");
        try {
          const h = await ei
            .post(t.config.url, {
              headers: { Authorization: `${t.config.auth_header}` },
              json: {
                vectorSearchQuery: [
                  {
                    field: t.config.vector_field,
                    model: t.config?.model ?? "all-mpnet-base-v2",
                    query: o(),
                  },
                ],
                minimumRelevance: 0.1,
                pageSize: 3,
                instantAnswerQuery: {
                  field: t.config.field,
                  query: o(),
                  preset: "support3",
                  urlField: t.config.reference_url_field,
                  titleField: t.config.reference_title_field,
                },
              },
            })
            .json();
          if (h.instantAnswerResults?.status === "failed") throw new Error();
          d(h), c("success"), u(!1);
        } catch {
          c("error");
        }
      };
    return (() => {
      const h = li.cloneNode(!0),
        L = h.firstChild,
        $ = L.firstChild,
        S = L.nextSibling,
        N = S.firstChild,
        P = N.firstChild,
        w = r;
      typeof w == "function" ? de(w, h) : (r = h),
        ($.$$keydown = (_) => i(_)),
        ($.$$input = (_) => {
          a(_.currentTarget.value);
        });
      const g = e;
      return (
        typeof g == "function" ? de(g, $) : (e = $),
        G($, "spellcheck", !1),
        k(
          h,
          C(W, {
            get when() {
              return l() === "loading";
            },
            get children() {
              const _ = ii.cloneNode(!0),
                m = _.firstChild;
              return (
                k(
                  m,
                  C(Fr, {
                    times: 3,
                    children: (q) =>
                      C(zr.div, {
                        class: "flex items-center gap-1",
                        animate: {
                          opacity: [0.8, 1, 0.8],
                          scale: [0.8, 1, 0.8],
                        },
                        transition: {
                          offset: [0, 0.2, 1],
                          duration: 0.2 * 3,
                          delay: q * 0.2,
                          repeat: 1 / 0,
                        },
                        get children() {
                          return ci.cloneNode(!0);
                        },
                      }),
                  })
                ),
                _
              );
            },
          }),
          S
        ),
        k(
          h,
          C(W, {
            get when() {
              return x();
            },
            get children() {
              const _ = si.cloneNode(!0),
                m = _.firstChild;
              return (
                k(m, x),
                k(
                  _,
                  C(W, {
                    get when() {
                      return p();
                    },
                    get children() {
                      const q = oi.cloneNode(!0);
                      return (
                        k(q, () =>
                          A()?.map((I) =>
                            (() => {
                              const at = ui.cloneNode(!0),
                                en = at.firstChild,
                                nn = en.firstChild;
                              return (
                                k(
                                  en,
                                  C(Fn, {
                                    size: 12,
                                    class: "!text-indigo-800 opacity-80",
                                  }),
                                  nn
                                ),
                                k(nn, () => I.title),
                                D(() => G(at, "href", I.url)),
                                at
                              );
                            })()
                          )
                        ),
                        q
                      );
                    },
                  }),
                  null
                ),
                _
              );
            },
          }),
          S
        ),
        k(
          h,
          C(W, {
            get when() {
              return l() === "error";
            },
            get children() {
              return ai.cloneNode(!0);
            },
          }),
          S
        ),
        k(N, C(ri, { class: "h-3 opacity-60" }), P),
        D((_) =>
          ue(
            h,
            { "fixed top-24 left-1/2 transform -translate-x-1/2": !t?.demo },
            _
          )
        ),
        h
      );
    })();
  }
  Mt(["input", "keydown"]);
  const di = M(
    '<button aria-label="Open help prompt" class="fixed bottom-6 right-6 bg-white rounded-full border border-gray-300/75 hover:bg-gray-100 shadow p-2 w-fit h-fit"></button>',
    2
  );
  function hi() {
    const [t, e] = H(!1),
      n = () => {
        e(!1);
      };
    dt(() => {
      t() && !a && In(["Escape"], n);
    });
    const r = document.currentScript?.getAttribute("config"),
      i = r ? atob(r) : void 0;
    let o;
    const a = document.currentScript?.getAttribute("demo") === "true";
    try {
      return (
        (o = JSON.parse(i ?? "")),
        [
          C(W, {
            when: !a,
            get children() {
              const u = di.cloneNode(!0);
              return (
                (u.$$click = () => e(!t())),
                k(u, C(Vn, { size: 24, class: "!text-gray-800" })),
                u
              );
            },
          }),
          C(W, {
            get when() {
              return a || t();
            },
            get children() {
              return C(fi, { config: o, demo: a });
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
  Mt(["click"]);
  const tn = document.createElement("div");
  document.body.appendChild(tn), En(() => C(hi, {}), tn);
})();
