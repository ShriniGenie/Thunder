var va = Object.defineProperty;
var _a = (s,e,t)=>e in s ? va(s, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : s[e] = t;
var X = (s,e,t)=>(_a(s, typeof e != "symbol" ? e + "" : e, t),
t)
  , gt = (s,e,t)=>{
    if (!e.has(s))
        throw TypeError("Cannot " + t)
}
;
var as = (s,e,t)=>(gt(s, e, "read from private field"),
t ? t.call(s) : e.get(s))
  , Ss = (s,e,t)=>{
    if (e.has(s))
        throw TypeError("Cannot add the same private member more than once");
    e instanceof WeakSet ? e.add(s) : e.set(s, t)
}
  , os = (s,e,t,a)=>(gt(s, e, "write to private field"),
a ? a.call(s, t) : e.set(s, t),
t);
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
        a(o);
    new MutationObserver(o=>{
        for (const n of o)
            if (n.type === "childList")
                for (const i of n.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && a(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(o) {
        const n = {};
        return o.integrity && (n.integrity = o.integrity),
        o.referrerpolicy && (n.referrerPolicy = o.referrerpolicy),
        o.crossorigin === "use-credentials" ? n.credentials = "include" : o.crossorigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function a(o) {
        if (o.ep)
            return;
        o.ep = !0;
        const n = t(o);
        fetch(o.href, n)
    }
}
)();
function G() {}
const Is = s=>s;
function za(s, e) {
    for (const t in e)
        s[t] = e[t];
    return s
}
function ja(s) {
    return !!s && (typeof s == "object" || typeof s == "function") && typeof s.then == "function"
}
function na(s) {
    return s()
}
function yt() {
    return Object.create(null)
}
function le(s) {
    s.forEach(na)
}
function Ie(s) {
    return typeof s == "function"
}
function ee(s, e) {
    return s != s ? e == e : s !== e || s && typeof s == "object" || typeof s == "function"
}
function $a(s) {
    return Object.keys(s).length === 0
}
function Sa(s, ...e) {
    if (s == null)
        return G;
    const t = s.subscribe(...e);
    return t.unsubscribe ? ()=>t.unsubscribe() : t
}
function je(s, e, t) {
    s.$$.on_destroy.push(Sa(e, t))
}
function Pe(s, e, t, a) {
    if (s) {
        const o = la(s, e, t, a);
        return s[0](o)
    }
}
function la(s, e, t, a) {
    return s[1] && a ? za(t.ctx.slice(), s[1](a(e))) : t.ctx
}
function We(s, e, t, a) {
    if (s[2] && a) {
        const o = s[2](a(t));
        if (e.dirty === void 0)
            return o;
        if (typeof o == "object") {
            const n = []
              , i = Math.max(e.dirty.length, o.length);
            for (let l = 0; l < i; l += 1)
                n[l] = e.dirty[l] | o[l];
            return n
        }
        return e.dirty | o
    }
    return e.dirty
}
function Ue(s, e, t, a, o, n) {
    if (o) {
        const i = la(e, t, a, n);
        s.p(i, o)
    }
}
function Be(s) {
    if (s.ctx.length > 32) {
        const e = []
          , t = s.ctx.length / 32;
        for (let a = 0; a < t; a++)
            e[a] = -1;
        return e
    }
    return -1
}
function Ws(s) {
    let e = !1;
    return function(...t) {
        e || (e = !0,
        s.call(this, ...t))
    }
}
function bt(s) {
    return s ?? ""
}
function Ae(s, e, t) {
    return s.set(t),
    e
}
const ua = typeof window < "u";
let ot = ua ? ()=>window.performance.now() : ()=>Date.now()
  , rt = ua ? s=>requestAnimationFrame(s) : G;
const us = new Set;
function ca(s) {
    us.forEach(e=>{
        e.c(s) || (us.delete(e),
        e.f())
    }
    ),
    us.size !== 0 && rt(ca)
}
function it(s) {
    let e;
    return us.size === 0 && rt(ca),
    {
        promise: new Promise(t=>{
            us.add(e = {
                c: s,
                f: t
            })
        }
        ),
        abort() {
            us.delete(e)
        }
    }
}
function k(s, e) {
    s.appendChild(e)
}
function da(s) {
    if (!s)
        return document;
    const e = s.getRootNode ? s.getRootNode() : s.ownerDocument;
    return e && e.host ? e : s.ownerDocument
}
function qa(s) {
    const e = q("style");
    return xa(da(s), e),
    e.sheet
}
function xa(s, e) {
    return k(s.head || s, e),
    e.sheet
}
function $(s, e, t) {
    s.insertBefore(e, t || null)
}
function z(s) {
    s.parentNode && s.parentNode.removeChild(s)
}
function Oe(s, e) {
    for (let t = 0; t < s.length; t += 1)
        s[t] && s[t].d(e)
}
function q(s) {
    return document.createElement(s)
}
function ge(s) {
    return document.createElementNS("http://www.w3.org/2000/svg", s)
}
function D(s) {
    return document.createTextNode(s)
}
function E() {
    return D(" ")
}
function vs() {
    return D("")
}
function V(s, e, t, a) {
    return s.addEventListener(e, t, a),
    ()=>s.removeEventListener(e, t, a)
}
function Ms(s) {
    return function(e) {
        return e.preventDefault(),
        s.call(this, e)
    }
}
function Ns(s) {
    return function(e) {
        e.target === this && s.call(this, e)
    }
}
function w(s, e, t) {
    t == null ? s.removeAttribute(e) : s.getAttribute(e) !== t && s.setAttribute(e, t)
}
function fa(s) {
    return s === "" ? null : +s
}
function Ca(s) {
    return Array.from(s.childNodes)
}
function J(s, e) {
    e = "" + e,
    s.wholeText !== e && (s.data = e)
}
function Es(s, e) {
    s.value = e ?? ""
}
function Ee(s, e, t, a) {
    t === null ? s.style.removeProperty(e) : s.style.setProperty(e, t, a ? "important" : "")
}
function Ls(s, e) {
    for (let t = 0; t < s.options.length; t += 1) {
        const a = s.options[t];
        if (a.__value === e) {
            a.selected = !0;
            return
        }
    }
    s.selectedIndex = -1
}
function ma(s) {
    const e = s.querySelector(":checked") || s.options[0];
    return e && e.__value
}
function te(s, e, t) {
    s.classList[t ? "add" : "remove"](e)
}
function nt(s, e, {bubbles: t=!1, cancelable: a=!1}={}) {
    const o = document.createEvent("CustomEvent");
    return o.initCustomEvent(s, t, a, e),
    o
}
function kt(s, e) {
    return new s(e)
}
const Os = new Map;
let Ds = 0;
function Ta(s) {
    let e = 5381
      , t = s.length;
    for (; t--; )
        e = (e << 5) - e ^ s.charCodeAt(t);
    return e >>> 0
}
function Ma(s, e) {
    const t = {
        stylesheet: qa(e),
        rules: {}
    };
    return Os.set(s, t),
    t
}
function Hs(s, e, t, a, o, n, i, l=0) {
    const r = 16.666 / a;
    let u = `{
`;
    for (let g = 0; g <= 1; g += r) {
        const b = e + (t - e) * n(g);
        u += g * 100 + `%{${i(b, 1 - b)}}
`
    }
    const c = u + `100% {${i(t, 1 - t)}}
}`
      , d = `__svelte_ ${Ta(c)}_ ${l}`
      , f = da(s)
      , {stylesheet: m, rules: p} = Os.get(f) || Ma(f, s);
    p[d] || (p[d] = !0,
    m.insertRule(`@keyframes ${d} ${c}`, m.cssRules.length));
    const h = s.style.animation || "";
    return s.style.animation = `${h ? `${h}, ` : ""}${d} ${a}ms linear ${o}ms 1 both`,
    Ds += 1,
    d
}
function As(s, e) {
    const t = (s.style.animation || "").split(", ")
      , a = t.filter(e ? n=>n.indexOf(e) < 0 : n=>n.indexOf("__svelte") === -1)
      , o = t.length - a.length;
    o && (s.style.animation = a.join(", "),
    Ds -= o,
    Ds || Na())
}
function Na() {
    rt(()=>{
        Ds || (Os.forEach(s=>{
            const {ownerNode: e} = s.stylesheet;
            e && z(e)
        }
        ),
        Os.clear())
    }
    )
}
let _s;
function Re(s) {
    _s = s
}
function ps() {
    if (!_s)
        throw new Error("Function called outside component initialization");
    return _s
}
function pa(s) {
    ps().$$.on_mount.push(s)
}
function ha(s) {
    ps().$$.on_destroy.push(s)
}
function Ye() {
    const s = ps();
    return (e,t,{cancelable: a=!1}={})=>{
        const o = s.$$.callbacks[e];
        if (o) {
            const n = nt(e, t, {
                cancelable: a
            });
            return o.slice().forEach(i=>{
                i.call(s, n)
            }
            ),
            !n.defaultPrevented
        }
        return !0
    }
}
function ga(s, e) {
    return ps().$$.context.set(s, e),
    e
}
function hs(s) {
    return ps().$$.context.get(s)
}
function Ea(s, e) {
    const t = s.$$.callbacks[e.type];
    t && t.slice().forEach(a=>a.call(this, e))
}
const ls = []
  , ie = []
  , xs = []
  , Xs = []
  , La = Promise.resolve();
let Vs = !1;
function Oa() {
    Vs || (Vs = !0,
    La.then(lt))
}
function $e(s) {
    xs.push(s)
}
function he(s) {
    Xs.push(s)
}
const Us = new Set;
let rs = 0;
function lt() {
    if (rs !== 0)
        return;
    const s = _s;
    do {
        try {
            for (; rs < ls.length; ) {
                const e = ls[rs];
                rs++,
                Re(e),
                Da(e.$$)
            }
        } catch (e) {
            throw ls.length = 0,
            rs = 0,
            e
        }
        for (Re(null),
        ls.length = 0,
        rs = 0; ie.length; )
            ie.pop()();
        for (let e = 0; e < xs.length; e += 1) {
            const t = xs[e];
            Us.has(t) || (Us.add(t),
            t())
        }
        xs.length = 0
    } while (ls.length);
    for (; Xs.length; )
        Xs.pop()();
    Vs = !1,
    Us.clear(),
    Re(s)
}
function Da(s) {
    if (s.fragment !== null) {
        s.update(),
        le(s.before_update);
        const e = s.dirty;
        s.dirty = [-1],
        s.fragment && s.fragment.p(s.ctx, e),
        s.after_update.forEach($e)
    }
}
let bs;
function ut() {
    return bs || (bs = Promise.resolve(),
    bs.then(()=>{
        bs = null
    }
    )),
    bs
}
function Ke(s, e, t) {
    s.dispatchEvent(nt(`${e ? "intro" : "outro"}${t}`))
}
const Cs = new Set;
let Le;
function fe() {
    Le = {
        r: 0,
        c: [],
        p: Le
    }
}
function me() {
    Le.r || le(Le.c),
    Le = Le.p
}
function j(s, e) {
    s && s.i && (Cs.delete(s),
    s.i(e))
}
function x(s, e, t, a) {
    if (s && s.o) {
        if (Cs.has(s))
            return;
        Cs.add(s),
        Le.c.push(()=>{
            Cs.delete(s),
            a && (t && s.d(1),
            a())
        }
        ),
        s.o(e)
    } else
        a && a()
}
const ct = {
    duration: 0
};
function Ha(s, e, t) {
    const a = {
        direction: "in"
    };
    let o = e(s, t, a), n = !1, i, l, r = 0;
    function u() {
        i && As(s, i)
    }
    function c() {
        const {delay: f=0, duration: m=300, easing: p=Is, tick: h=G, css: g} = o || ct;
        g && (i = Hs(s, 0, 1, m, f, p, g, r++)),
        h(0, 1);
        const b = ot() + f
          , y = b + m;
        l && l.abort(),
        n = !0,
        $e(()=>Ke(s, !0, "start")),
        l = it(v=>{
            if (n) {
                if (v >= y)
                    return h(1, 0),
                    Ke(s, !0, "end"),
                    u(),
                    n = !1;
                if (v >= b) {
                    const S = p((v - b) / m);
                    h(S, 1 - S)
                }
            }
            return n
        }
        )
    }
    let d = !1;
    return {
        start() {
            d || (d = !0,
            As(s),
            Ie(o) ? (o = o(a),
            ut().then(c)) : c())
        },
        invalidate() {
            d = !1
        },
        end() {
            n && (u(),
            n = !1)
        }
    }
}
function Aa(s, e, t) {
    const a = {
        direction: "out"
    };
    let o = e(s, t, a), n = !0, i;
    const l = Le;
    l.r += 1;
    function r() {
        const {delay: u=0, duration: c=300, easing: d=Is, tick: f=G, css: m} = o || ct;
        m && (i = Hs(s, 1, 0, c, u, d, m));
        const p = ot() + u
          , h = p + c;
        $e(()=>Ke(s, !1, "start")),
        it(g=>{
            if (n) {
                if (g >= h)
                    return f(0, 1),
                    Ke(s, !1, "end"),
                    --l.r || le(l.c),
                    !1;
                if (g >= p) {
                    const b = d((g - p) / c);
                    f(1 - b, b)
                }
            }
            return n
        }
        )
    }
    return Ie(o) ? ut().then(()=>{
        o = o(a),
        r()
    }
    ) : r(),
    {
        end(u) {
            u && o.tick && o.tick(1, 0),
            n && (i && As(s, i),
            n = !1)
        }
    }
}
function Ve(s, e, t, a) {
    const o = {
        direction: "both"
    };
    let n = e(s, t, o)
      , i = a ? 0 : 1
      , l = null
      , r = null
      , u = null;
    function c() {
        u && As(s, u)
    }
    function d(m, p) {
        const h = m.b - i;
        return p *= Math.abs(h),
        {
            a: i,
            b: m.b,
            d: h,
            duration: p,
            start: m.start,
            end: m.start + p,
            group: m.group
        }
    }
    function f(m) {
        const {delay: p=0, duration: h=300, easing: g=Is, tick: b=G, css: y} = n || ct
          , v = {
            start: ot() + p,
            b: m
        };
        m || (v.group = Le,
        Le.r += 1),
        l || r ? r = v : (y && (c(),
        u = Hs(s, i, m, h, p, g, y)),
        m && b(0, 1),
        l = d(v, h),
        $e(()=>Ke(s, m, "start")),
        it(S=>{
            if (r && S > r.start && (l = d(r, h),
            r = null,
            Ke(s, l.b, "start"),
            y && (c(),
            u = Hs(s, i, l.b, l.duration, 0, g, n.css))),
            l) {
                if (S >= l.end)
                    b(i = l.b, 1 - i),
                    Ke(s, l.b, "end"),
                    r || (l.b ? c() : --l.group.r || le(l.group.c)),
                    l = null;
                else if (S >= l.start) {
                    const C = S - l.start;
                    i = l.a + l.d * g(C / l.duration),
                    b(i, 1 - i)
                }
            }
            return !!(l || r)
        }
        ))
    }
    return {
        run(m) {
            Ie(n) ? ut().then(()=>{
                n = n(o),
                f(m)
            }
            ) : f(m)
        },
        end() {
            c(),
            l = r = null
        }
    }
}
function wt(s, e) {
    const t = e.token = {};
    function a(o, n, i, l) {
        if (e.token !== t)
            return;
        e.resolved = l;
        let r = e.ctx;
        i !== void 0 && (r = r.slice(),
        r[i] = l);
        const u = o && (e.current = o)(r);
        let c = !1;
        e.block && (e.blocks ? e.blocks.forEach((d,f)=>{
            f !== n && d && (fe(),
            x(d, 1, 1, ()=>{
                e.blocks[f] === d && (e.blocks[f] = null)
            }
            ),
            me())
        }
        ) : e.block.d(1),
        u.c(),
        j(u, 1),
        u.m(e.mount(), e.anchor),
        c = !0),
        e.block = u,
        e.blocks && (e.blocks[n] = u),
        c && lt()
    }
    if (ja(s)) {
        const o = ps();
        if (s.then(n=>{
            Re(o),
            a(e.then, 1, e.value, n),
            Re(null)
        }
        , n=>{
            if (Re(o),
            a(e.catch, 2, e.error, n),
            Re(null),
            !e.hasCatch)
                throw n
        }
        ),
        e.current !== e.pending)
            return a(e.pending, 0),
            !0
    } else {
        if (e.current !== e.then)
            return a(e.then, 1, e.value, s),
            !0;
        e.resolved = s
    }
}
function Ra(s, e, t) {
    const a = e.slice()
      , {resolved: o} = s;
    s.current === s.then && (a[s.value] = o),
    s.current === s.catch && (a[s.error] = o),
    s.block.p(a, t)
}
function Ia(s, e) {
    s.d(1),
    e.delete(s.key)
}
function Pa(s, e, t, a, o, n, i, l, r, u, c, d) {
    let f = s.length
      , m = n.length
      , p = f;
    const h = {};
    for (; p--; )
        h[s[p].key] = p;
    const g = []
      , b = new Map
      , y = new Map;
    for (p = m; p--; ) {
        const N = d(o, n, p)
          , L = t(N);
        let _ = i.get(L);
        _ ? a && _.p(N, e) : (_ = u(L, N),
        _.c()),
        b.set(L, g[p] = _),
        L in h && y.set(L, Math.abs(p - h[L]))
    }
    const v = new Set
      , S = new Set;
    function C(N) {
        j(N, 1),
        N.m(l, c),
        i.set(N.key, N),
        c = N.first,
        m--
    }
    for (; f && m; ) {
        const N = g[m - 1]
          , L = s[f - 1]
          , _ = N.key
          , O = L.key;
        N === L ? (c = N.first,
        f--,
        m--) : b.has(O) ? !i.has(_) || v.has(_) ? C(N) : S.has(O) ? f-- : y.get(_) > y.get(O) ? (S.add(_),
        C(N)) : (v.add(O),
        f--) : (r(L, i),
        f--)
    }
    for (; f--; ) {
        const N = s[f];
        b.has(N.key) || r(N, i)
    }
    for (; m; )
        C(g[m - 1]);
    return g
}
function pe(s, e, t) {
    const a = s.$$.props[e];
    a !== void 0 && (s.$$.bound[a] = t,
    t(s.$$.ctx[a]))
}
function I(s) {
    s && s.c()
}
function A(s, e, t, a) {
    const {fragment: o, after_update: n} = s.$$;
    o && o.m(e, t),
    a || $e(()=>{
        const i = s.$$.on_mount.map(na).filter(Ie);
        s.$$.on_destroy ? s.$$.on_destroy.push(...i) : le(i),
        s.$$.on_mount = []
    }
    ),
    n.forEach($e)
}
function R(s, e) {
    const t = s.$$;
    t.fragment !== null && (le(t.on_destroy),
    t.fragment && t.fragment.d(e),
    t.on_destroy = t.fragment = null,
    t.ctx = [])
}
function Wa(s, e) {
    s.$$.dirty[0] === -1 && (ls.push(s),
    Oa(),
    s.$$.dirty.fill(0)),
    s.$$.dirty[e / 31 | 0] |= 1 << e % 31
}
function ae(s, e, t, a, o, n, i, l=[-1]) {
    const r = _s;
    Re(s);
    const u = s.$$ = {
        fragment: null,
        ctx: [],
        props: n,
        update: G,
        not_equal: o,
        bound: yt(),
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(e.context || (r ? r.$$.context : [])),
        callbacks: yt(),
        dirty: l,
        skip_bound: !1,
        root: e.target || r.$$.root
    };
    i && i(u.root);
    let c = !1;
    if (u.ctx = t ? t(s, e.props || {}, (d,f,...m)=>{
        const p = m.length ? m[0] : f;
        return u.ctx && o(u.ctx[d], u.ctx[d] = p) && (!u.skip_bound && u.bound[d] && u.bound[d](p),
        c && Wa(s, d)),
        f
    }
    ) : [],
    u.update(),
    c = !0,
    le(u.before_update),
    u.fragment = a ? a(u.ctx) : !1,
    e.target) {
        if (e.hydrate) {
            const d = Ca(e.target);
            u.fragment && u.fragment.l(d),
            d.forEach(z)
        } else
            u.fragment && u.fragment.c();
        e.intro && j(s.$$.fragment),
        A(s, e.target, e.anchor, e.customElement),
        lt()
    }
    Re(r)
}
class oe {
    $destroy() {
        R(this, 1),
        this.$destroy = G
    }
    $on(e, t) {
        if (!Ie(t))
            return G;
        const a = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
        return a.push(t),
        ()=>{
            const o = a.indexOf(t);
            o !== -1 && a.splice(o, 1)
        }
    }
    $set(e) {
        this.$$set && !$a(e) && (this.$$.skip_bound = !0,
        this.$$set(e),
        this.$$.skip_bound = !1)
    }
}
const Ua = s=>({})
  , vt = s=>({})
  , Ba = s=>({})
  , _t = s=>({});
function Ga(s) {
    let e, t, a, o, n;
    const i = s[2][1]
      , l = Pe(i, s, s[1], _t)
      , r = s[2][2]
      , u = Pe(r, s, s[1], vt);
    return {
        c() {
            e = q("div"),
            t = q("div"),
            l && l.c(),
            a = E(),
            o = q("div"),
            u && u.c(),
            w(t, "class", "svelte-1cu43ge"),
            w(o, "class", "svelte-1cu43ge"),
            w(e, "class", "sep svelte-1cu43ge"),
            te(e, "visible", s[0])
        },
        m(c, d) {
            $(c, e, d),
            k(e, t),
            l && l.m(t, null),
            k(e, a),
            k(e, o),
            u && u.m(o, null),
            n = !0
        },
        p(c, [d]) {
            l && l.p && (!n || d & 2) && Ue(l, i, c, c[1], n ? We(i, c[1], d, Ba) : Be(c[1]), _t),
            u && u.p && (!n || d & 2) && Ue(u, r, c, c[1], n ? We(r, c[1], d, Ua) : Be(c[1]), vt),
            (!n || d & 1) && te(e, "visible", c[0])
        },
        i(c) {
            n || (j(l, c),
            j(u, c),
            n = !0)
        },
        o(c) {
            x(l, c),
            x(u, c),
            n = !1
        },
        d(c) {
            c && z(e),
            l && l.d(c),
            u && u.d(c)
        }
    }
}
function Xa(s, e, t) {
    let {$$slots: a={}, $$scope: o} = e
      , {visible: n=!0} = e;
    return s.$$set = i=>{
        "visible"in i && t(0, n = i.visible),
        "$$scope"in i && t(1, o = i.$$scope)
    }
    ,
    [n, o, a]
}
class Va extends oe {
    constructor(e) {
        super(),
        ae(this, e, Xa, Ga, ee, {
            visible: 0
        })
    }
}
function zt(s, e, t) {
    const a = s.slice();
    return a[3] = e[t],
    a
}
function Ya(s) {
    let e, t, a, o, n;
    return {
        c() {
            e = q("div"),
            t = D("Your word was "),
            a = q("strong"),
            o = D(s[0]),
            n = D(". (failed to fetch definition)")
        },
        m(i, l) {
            $(i, e, l),
            k(e, t),
            k(e, a),
            k(a, o),
            k(e, n)
        },
        p(i, l) {
            l & 1 && J(o, i[0])
        },
        d(i) {
            i && z(e)
        }
    }
}
function Fa(s) {
    let e, t, a, o, n = s[2].meanings[0].partOfSpeech + "", i, l, r, u, c = s[0] !== s[2].word && jt(s), d = s[2].meanings[0].definitions.slice(0, 1 + s[1] - (s[0] !== s[2].word ? 1 : 0)), f = [];
    for (let m = 0; m < d.length; m += 1)
        f[m] = $t(zt(s, d, m));
    return {
        c() {
            e = q("h2"),
            t = D(s[0]),
            a = E(),
            o = q("em"),
            i = D(n),
            l = E(),
            r = q("ol"),
            c && c.c(),
            u = E();
            for (let m = 0; m < f.length; m += 1)
                f[m].c();
            w(e, "class", "svelte-1cpaagx"),
            w(r, "class", "svelte-1cpaagx")
        },
        m(m, p) {
            $(m, e, p),
            k(e, t),
            $(m, a, p),
            $(m, o, p),
            k(o, i),
            $(m, l, p),
            $(m, r, p),
            c && c.m(r, null),
            k(r, u);
            for (let h = 0; h < f.length; h += 1)
                f[h].m(r, null)
        },
        p(m, p) {
            if (p & 1 && J(t, m[0]),
            p & 1 && n !== (n = m[2].meanings[0].partOfSpeech + "") && J(i, n),
            m[0] !== m[2].word ? c ? c.p(m, p) : (c = jt(m),
            c.c(),
            c.m(r, u)) : c && (c.d(1),
            c = null),
            p & 3) {
                d = m[2].meanings[0].definitions.slice(0, 1 + m[1] - (m[0] !== m[2].word ? 1 : 0));
                let h;
                for (h = 0; h < d.length; h += 1) {
                    const g = zt(m, d, h);
                    f[h] ? f[h].p(g, p) : (f[h] = $t(g),
                    f[h].c(),
                    f[h].m(r, null))
                }
                for (; h < f.length; h += 1)
                    f[h].d(1);
                f.length = d.length
            }
        },
        d(m) {
            m && z(e),
            m && z(a),
            m && z(o),
            m && z(l),
            m && z(r),
            c && c.d(),
            Oe(f, m)
        }
    }
}
function jt(s) {
    let e, t, a = s[2].word + "", o, n;
    return {
        c() {
            e = q("li"),
            t = D("variant of "),
            o = D(a),
            n = D("."),
            w(e, "class", "svelte-1cpaagx")
        },
        m(i, l) {
            $(i, e, l),
            k(e, t),
            k(e, o),
            k(e, n)
        },
        p(i, l) {
            l & 1 && a !== (a = i[2].word + "") && J(o, a)
        },
        d(i) {
            i && z(e)
        }
    }
}
function $t(s) {
    let e, t = s[3].definition + "", a;
    return {
        c() {
            e = q("li"),
            a = D(t),
            w(e, "class", "svelte-1cpaagx")
        },
        m(o, n) {
            $(o, e, n),
            k(e, a)
        },
        p(o, n) {
            n & 3 && t !== (t = o[3].definition + "") && J(a, t)
        },
        d(o) {
            o && z(e)
        }
    }
}
function Ka(s) {
    let e;
    return {
        c() {
            e = q("h4"),
            e.textContent = "Fetching definition..."
        },
        m(t, a) {
            $(t, e, a)
        },
        p: G,
        d(t) {
            t && z(e)
        }
    }
}
function Ja(s) {
    let e, t, a = {
        ctx: s,
        current: null,
        token: null,
        hasCatch: !0,
        pending: Ka,
        then: Fa,
        catch: Ya,
        value: 2
    };
    return wt(t = St(s[0]), a),
    {
        c() {
            e = q("div"),
            a.block.c(),
            w(e, "class", "def")
        },
        m(o, n) {
            $(o, e, n),
            a.block.m(e, a.anchor = null),
            a.mount = ()=>e,
            a.anchor = null
        },
        p(o, [n]) {
            s = o,
            a.ctx = s,
            n & 1 && t !== (t = St(s[0])) && wt(t, a) || Ra(a, s, n)
        },
        i: G,
        o: G,
        d(o) {
            o && z(e),
            a.block.d(),
            a.token = null,
            a = null
        }
    }
}
const Bs = new Map;
async function St(s) {
    if (!Bs.has(s)) {
        const e = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${s}`, {
            mode: "cors"
        });
        if (e.ok)
            Bs.set(s, (await e.json())[0]);
        else
            throw new Error("Failed to fetch definition")
    }
    return Bs.get(s)
}
function Za(s, e, t) {
    let {word: a} = e
      , {alternates: o=9} = e;
    return s.$$set = n=>{
        "word"in n && t(0, a = n.word),
        "alternates"in n && t(1, o = n.alternates)
    }
    ,
    [a, o]
}
class ya extends oe {
    constructor(e) {
        super(),
        ae(this, e, Za, Ja, ee, {
            word: 0,
            alternates: 1
        })
    }
}
const is = [];
function ba(s, e=G) {
    let t;
    const a = new Set;
    function o(l) {
        if (ee(s, l) && (s = l,
        t)) {
            const r = !is.length;
            for (const u of a)
                u[1](),
                is.push(u, s);
            if (r) {
                for (let u = 0; u < is.length; u += 2)
                    is[u][0](is[u + 1]);
                is.length = 0
            }
        }
    }
    function n(l) {
        o(l(s))
    }
    function i(l, r=G) {
        const u = [l, r];
        return a.add(u),
        a.size === 1 && (t = e(o) || G),
        l(s),
        ()=>{
            a.delete(u),
            a.size === 0 && (t(),
            t = null)
        }
    }
    return {
        set: o,
        update: n,
        subscribe: i
    }
}
var Qe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qa(s) {
    if (s.__esModule)
        return s;
    var e = s.default;
    if (typeof e == "function") {
        var t = function a() {
            if (this instanceof a) {
                var o = [null];
                o.push.apply(o, arguments);
                var n = Function.bind.apply(e, o);
                return new n
            }
            return e.apply(this, arguments)
        };
        t.prototype = e.prototype
    } else
        t = {};
    return Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    Object.keys(s).forEach(function(a) {
        var o = Object.getOwnPropertyDescriptor(s, a);
        Object.defineProperty(t, a, o.get ? o : {
            enumerable: !0,
            get: function() {
                return s[a]
            }
        })
    }),
    t
}
var Ys = {}
  , eo = {
    get exports() {
        return Ys
    },
    set exports(s) {
        Ys = s
    }
};
(function(s) {
    (function(e, t, a) {
        function o(r) {
            var u = this
              , c = l();
            u.next = function() {
                var d = 2091639 * u.s0 + u.c * 23283064365386963e-26;
                return u.s0 = u.s1,
                u.s1 = u.s2,
                u.s2 = d - (u.c = d | 0)
            }
            ,
            u.c = 1,
            u.s0 = c(" "),
            u.s1 = c(" "),
            u.s2 = c(" "),
            u.s0 -= c(r),
            u.s0 < 0 && (u.s0 += 1),
            u.s1 -= c(r),
            u.s1 < 0 && (u.s1 += 1),
            u.s2 -= c(r),
            u.s2 < 0 && (u.s2 += 1),
            c = null
        }
        function n(r, u) {
            return u.c = r.c,
            u.s0 = r.s0,
            u.s1 = r.s1,
            u.s2 = r.s2,
            u
        }
        function i(r, u) {
            var c = new o(r)
              , d = u && u.state
              , f = c.next;
            return f.int32 = function() {
                return c.next() * 4294967296 | 0
            }
            ,
            f.double = function() {
                return f() + (f() * 2097152 | 0) * 11102230246251565e-32
            }
            ,
            f.quick = f,
            d && (typeof d == "object" && n(d, c),
            f.state = function() {
                return n(c, {})
            }
            ),
            f
        }
        function l() {
            var r = 4022871197
              , u = function(c) {
                c = String(c);
                for (var d = 0; d < c.length; d++) {
                    r += c.charCodeAt(d);
                    var f = .02519603282416938 * r;
                    r = f >>> 0,
                    f -= r,
                    f *= r,
                    r = f >>> 0,
                    f -= r,
                    r += f * 4294967296
                }
                return (r >>> 0) * 23283064365386963e-26
            };
            return u
        }
        t && t.exports ? t.exports = i : a && a.amd ? a(function() {
            return i
        }) : this.alea = i
    }
    )(Qe, s, !1)
}
)(eo);
var Fs = {}
  , so = {
    get exports() {
        return Fs
    },
    set exports(s) {
        Fs = s
    }
};
(function(s) {
    (function(e, t, a) {
        function o(l) {
            var r = this
              , u = "";
            r.x = 0,
            r.y = 0,
            r.z = 0,
            r.w = 0,
            r.next = function() {
                var d = r.x ^ r.x << 11;
                return r.x = r.y,
                r.y = r.z,
                r.z = r.w,
                r.w ^= r.w >>> 19 ^ d ^ d >>> 8
            }
            ,
            l === (l | 0) ? r.x = l : u += l;
            for (var c = 0; c < u.length + 64; c++)
                r.x ^= u.charCodeAt(c) | 0,
                r.next()
        }
        function n(l, r) {
            return r.x = l.x,
            r.y = l.y,
            r.z = l.z,
            r.w = l.w,
            r
        }
        function i(l, r) {
            var u = new o(l)
              , c = r && r.state
              , d = function() {
                return (u.next() >>> 0) / 4294967296
            };
            return d.double = function() {
                do
                    var f = u.next() >>> 11
                      , m = (u.next() >>> 0) / 4294967296
                      , p = (f + m) / (1 << 21);
                while (p === 0);
                return p
            }
            ,
            d.int32 = u.next,
            d.quick = d,
            c && (typeof c == "object" && n(c, u),
            d.state = function() {
                return n(u, {})
            }
            ),
            d
        }
        t && t.exports ? t.exports = i : a && a.amd ? a(function() {
            return i
        }) : this.xor128 = i
    }
    )(Qe, s, !1)
}
)(so);
var Ks = {}
  , to = {
    get exports() {
        return Ks
    },
    set exports(s) {
        Ks = s
    }
};
(function(s) {
    (function(e, t, a) {
        function o(l) {
            var r = this
              , u = "";
            r.next = function() {
                var d = r.x ^ r.x >>> 2;
                return r.x = r.y,
                r.y = r.z,
                r.z = r.w,
                r.w = r.v,
                (r.d = r.d + 362437 | 0) + (r.v = r.v ^ r.v << 4 ^ (d ^ d << 1)) | 0
            }
            ,
            r.x = 0,
            r.y = 0,
            r.z = 0,
            r.w = 0,
            r.v = 0,
            l === (l | 0) ? r.x = l : u += l;
            for (var c = 0; c < u.length + 64; c++)
                r.x ^= u.charCodeAt(c) | 0,
                c == u.length && (r.d = r.x << 10 ^ r.x >>> 4),
                r.next()
        }
        function n(l, r) {
            return r.x = l.x,
            r.y = l.y,
            r.z = l.z,
            r.w = l.w,
            r.v = l.v,
            r.d = l.d,
            r
        }
        function i(l, r) {
            var u = new o(l)
              , c = r && r.state
              , d = function() {
                return (u.next() >>> 0) / 4294967296
            };
            return d.double = function() {
                do
                    var f = u.next() >>> 11
                      , m = (u.next() >>> 0) / 4294967296
                      , p = (f + m) / (1 << 21);
                while (p === 0);
                return p
            }
            ,
            d.int32 = u.next,
            d.quick = d,
            c && (typeof c == "object" && n(c, u),
            d.state = function() {
                return n(u, {})
            }
            ),
            d
        }
        t && t.exports ? t.exports = i : a && a.amd ? a(function() {
            return i
        }) : this.xorwow = i
    }
    )(Qe, s, !1)
}
)(to);
var Js = {}
  , ao = {
    get exports() {
        return Js
    },
    set exports(s) {
        Js = s
    }
};
(function(s) {
    (function(e, t, a) {
        function o(l) {
            var r = this;
            r.next = function() {
                var c = r.x, d = r.i, f, m;
                return f = c[d],
                f ^= f >>> 7,
                m = f ^ f << 24,
                f = c[d + 1 & 7],
                m ^= f ^ f >>> 10,
                f = c[d + 3 & 7],
                m ^= f ^ f >>> 3,
                f = c[d + 4 & 7],
                m ^= f ^ f << 7,
                f = c[d + 7 & 7],
                f = f ^ f << 13,
                m ^= f ^ f << 9,
                c[d] = m,
                r.i = d + 1 & 7,
                m
            }
            ;
            function u(c, d) {
                var f, m = [];
                if (d === (d | 0))
                    m[0] = d;
                else
                    for (d = "" + d,
                    f = 0; f < d.length; ++f)
                        m[f & 7] = m[f & 7] << 15 ^ d.charCodeAt(f) + m[f + 1 & 7] << 13;
                for (; m.length < 8; )
                    m.push(0);
                for (f = 0; f < 8 && m[f] === 0; ++f)
                    ;
                for (f == 8 ? m[7] = -1 : m[f],
                c.x = m,
                c.i = 0,
                f = 256; f > 0; --f)
                    c.next()
            }
            u(r, l)
        }
        function n(l, r) {
            return r.x = l.x.slice(),
            r.i = l.i,
            r
        }
        function i(l, r) {
            l == null && (l = +new Date);
            var u = new o(l)
              , c = r && r.state
              , d = function() {
                return (u.next() >>> 0) / 4294967296
            };
            return d.double = function() {
                do
                    var f = u.next() >>> 11
                      , m = (u.next() >>> 0) / 4294967296
                      , p = (f + m) / (1 << 21);
                while (p === 0);
                return p
            }
            ,
            d.int32 = u.next,
            d.quick = d,
            c && (c.x && n(c, u),
            d.state = function() {
                return n(u, {})
            }
            ),
            d
        }
        t && t.exports ? t.exports = i : a && a.amd ? a(function() {
            return i
        }) : this.xorshift7 = i
    }
    )(Qe, s, !1)
}
)(ao);
var Zs = {}
  , oo = {
    get exports() {
        return Zs
    },
    set exports(s) {
        Zs = s
    }
};
(function(s) {
    (function(e, t, a) {
        function o(l) {
            var r = this;
            r.next = function() {
                var c = r.w, d = r.X, f = r.i, m, p;
                return r.w = c = c + 1640531527 | 0,
                p = d[f + 34 & 127],
                m = d[f = f + 1 & 127],
                p ^= p << 13,
                m ^= m << 17,
                p ^= p >>> 15,
                m ^= m >>> 12,
                p = d[f] = p ^ m,
                r.i = f,
                p + (c ^ c >>> 16) | 0
            }
            ;
            function u(c, d) {
                var f, m, p, h, g, b = [], y = 128;
                for (d === (d | 0) ? (m = d,
                d = null) : (d = d + "\0",
                m = 0,
                y = Math.max(y, d.length)),
                p = 0,
                h = -32; h < y; ++h)
                    d && (m ^= d.charCodeAt((h + 32) % d.length)),
                    h === 0 && (g = m),
                    m ^= m << 10,
                    m ^= m >>> 15,
                    m ^= m << 4,
                    m ^= m >>> 13,
                    h >= 0 && (g = g + 1640531527 | 0,
                    f = b[h & 127] ^= m + g,
                    p = f == 0 ? p + 1 : 0);
                for (p >= 128 && (b[(d && d.length || 0) & 127] = -1),
                p = 127,
                h = 4 * 128; h > 0; --h)
                    m = b[p + 34 & 127],
                    f = b[p = p + 1 & 127],
                    m ^= m << 13,
                    f ^= f << 17,
                    m ^= m >>> 15,
                    f ^= f >>> 12,
                    b[p] = m ^ f;
                c.w = g,
                c.X = b,
                c.i = p
            }
            u(r, l)
        }
        function n(l, r) {
            return r.i = l.i,
            r.w = l.w,
            r.X = l.X.slice(),
            r
        }
        function i(l, r) {
            l == null && (l = +new Date);
            var u = new o(l)
              , c = r && r.state
              , d = function() {
                return (u.next() >>> 0) / 4294967296
            };
            return d.double = function() {
                do
                    var f = u.next() >>> 11
                      , m = (u.next() >>> 0) / 4294967296
                      , p = (f + m) / (1 << 21);
                while (p === 0);
                return p
            }
            ,
            d.int32 = u.next,
            d.quick = d,
            c && (c.X && n(c, u),
            d.state = function() {
                return n(u, {})
            }
            ),
            d
        }
        t && t.exports ? t.exports = i : a && a.amd ? a(function() {
            return i
        }) : this.xor4096 = i
    }
    )(Qe, s, !1)
}
)(oo);
var Qs = {}
  , ro = {
    get exports() {
        return Qs
    },
    set exports(s) {
        Qs = s
    }
};
(function(s) {
    (function(e, t, a) {
        function o(l) {
            var r = this
              , u = "";
            r.next = function() {
                var d = r.b
                  , f = r.c
                  , m = r.d
                  , p = r.a;
                return d = d << 25 ^ d >>> 7 ^ f,
                f = f - m | 0,
                m = m << 24 ^ m >>> 8 ^ p,
                p = p - d | 0,
                r.b = d = d << 20 ^ d >>> 12 ^ f,
                r.c = f = f - m | 0,
                r.d = m << 16 ^ f >>> 16 ^ p,
                r.a = p - d | 0
            }
            ,
            r.a = 0,
            r.b = 0,
            r.c = -1640531527,
            r.d = 1367130551,
            l === Math.floor(l) ? (r.a = l / 4294967296 | 0,
            r.b = l | 0) : u += l;
            for (var c = 0; c < u.length + 20; c++)
                r.b ^= u.charCodeAt(c) | 0,
                r.next()
        }
        function n(l, r) {
            return r.a = l.a,
            r.b = l.b,
            r.c = l.c,
            r.d = l.d,
            r
        }
        function i(l, r) {
            var u = new o(l)
              , c = r && r.state
              , d = function() {
                return (u.next() >>> 0) / 4294967296
            };
            return d.double = function() {
                do
                    var f = u.next() >>> 11
                      , m = (u.next() >>> 0) / 4294967296
                      , p = (f + m) / (1 << 21);
                while (p === 0);
                return p
            }
            ,
            d.int32 = u.next,
            d.quick = d,
            c && (typeof c == "object" && n(c, u),
            d.state = function() {
                return n(u, {})
            }
            ),
            d
        }
        t && t.exports ? t.exports = i : a && a.amd ? a(function() {
            return i
        }) : this.tychei = i
    }
    )(Qe, s, !1)
}
)(ro);
var et = {}
  , io = {
    get exports() {
        return et
    },
    set exports(s) {
        et = s
    }
};
const no = {}
  , lo = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: no
}, Symbol.toStringTag, {
    value: "Module"
}))
  , uo = Qa(lo);
(function(s) {
    (function(e, t, a) {
        var o = 256, n = 6, i = 52, l = "random", r = a.pow(o, n), u = a.pow(2, i), c = u * 2, d = o - 1, f;
        function m(S, C, N) {
            var L = [];
            C = C == !0 ? {
                entropy: !0
            } : C || {};
            var _ = b(g(C.entropy ? [S, v(t)] : S ?? y(), 3), L)
              , O = new p(L)
              , M = function() {
                for (var T = O.g(n), F = r, re = 0; T < u; )
                    T = (T + re) * o,
                    F *= o,
                    re = O.g(1);
                for (; T >= c; )
                    T /= 2,
                    F /= 2,
                    re >>>= 1;
                return (T + re) / F
            };
            return M.int32 = function() {
                return O.g(4) | 0
            }
            ,
            M.quick = function() {
                return O.g(4) / 4294967296
            }
            ,
            M.double = M,
            b(v(O.S), t),
            (C.pass || N || function(T, F, re, Z) {
                return Z && (Z.S && h(Z, O),
                T.state = function() {
                    return h(O, {})
                }
                ),
                re ? (a[l] = T,
                F) : T
            }
            )(M, _, "global"in C ? C.global : this == a, C.state)
        }
        function p(S) {
            var C, N = S.length, L = this, _ = 0, O = L.i = L.j = 0, M = L.S = [];
            for (N || (S = [N++]); _ < o; )
                M[_] = _++;
            for (_ = 0; _ < o; _++)
                M[_] = M[O = d & O + S[_ % N] + (C = M[_])],
                M[O] = C;
            (L.g = function(T) {
                for (var F, re = 0, Z = L.i, W = L.j, se = L.S; T--; )
                    F = se[Z = d & Z + 1],
                    re = re * o + se[d & (se[Z] = se[W = d & W + F]) + (se[W] = F)];
                return L.i = Z,
                L.j = W,
                re
            }
            )(o)
        }
        function h(S, C) {
            return C.i = S.i,
            C.j = S.j,
            C.S = S.S.slice(),
            C
        }
        function g(S, C) {
            var N = [], L = typeof S, _;
            if (C && L == "object")
                for (_ in S)
                    try {
                        N.push(g(S[_], C - 1))
                    } catch {}
            return N.length ? N : L == "string" ? S : S + "\0"
        }
        function b(S, C) {
            for (var N = S + "", L, _ = 0; _ < N.length; )
                C[d & _] = d & (L ^= C[d & _] * 19) + N.charCodeAt(_++);
            return v(C)
        }
        function y() {
            try {
                var S;
                return f && (S = f.randomBytes) ? S = S(o) : (S = new Uint8Array(o),
                (e.crypto || e.msCrypto).getRandomValues(S)),
                v(S)
            } catch {
                var C = e.navigator
                  , N = C && C.plugins;
                return [+new Date, e, N, e.screen, v(t)]
            }
        }
        function v(S) {
            return String.fromCharCode.apply(0, S)
        }
        if (b(a.random(), t),
        s.exports) {
            s.exports = m;
            try {
                f = uo
            } catch {}
        } else
            a["seed" + l] = m
    }
    )(typeof self < "u" ? self : Qe, [], Math)
}
)(io);
var co = Ys
  , fo = Fs
  , mo = Ks
  , po = Js
  , ho = Zs
  , go = Qs
  , es = et;
es.alea = co;
es.xor128 = fo;
es.xorwow = mo;
es.xorshift7 = po;
es.xor4096 = ho;
es.tychei = go;
var yo = es
  , ve = (s=>(s[s.daily = 0] = "daily",
s[s.hourly = 1] = "hourly",
s[s.infinite = 2] = "infinite",
s))(ve || {})
  , ce = (s=>(s[s.SECOND = 1e3] = "SECOND",
s[s.MINUTE = 6e4] = "MINUTE",
s[s.HOUR = 36e5] = "HOUR",
s[s.DAY = 864e5] = "DAY",
s))(ce || {});
const Gs = {
    words: ["cigar", "rebut", "sissy", "humph", "awake", "blush", "focal", "evade", "naval", "serve", "heath", "dwarf", "model", "karma", "stink", "grade", "quiet", "bench", "abate", "feign", "major", "death", "fresh", "crust", "stool", "colon", "abase", "marry", "react", "batty", "pride", "floss", "helix", "croak", "staff", "paper", "unfed", "whelp", "trawl", "outdo", "adobe", "crazy", "sower", "repay", "digit", "crate", "cluck", "spike", "mimic", "pound", "maxim", "linen", "unmet", "flesh", "booby", "forth", "first", "stand", "belly", "ivory", "seedy", "print", "yearn", "drain", "bribe", "stout", "panel", "crass", "flume", "offal", "agree", "error", "swirl", "argue", "bleed", "delta", "flick", "totem", "wooer", "front", "shrub", "parry", "biome", "lapel", "start", "greet", "goner", "golem", "lusty", "loopy", "round", "audit", "lying", "gamma", "labor", "islet", "civic", "forge", "corny", "moult", "basic", "salad", "agate", "spicy", "spray", "essay", "fjord", "spend", "kebab", "guild", "aback", "motor", "alone", "hatch", "hyper", "thumb", "dowry", "ought", "belch", "dutch", "pilot", "tweed", "comet", "jaunt", "enema", "steed", "abyss", "growl", "fling", "dozen", "boozy", "erode", "world", "gouge", "click", "briar", "great", "altar", "pulpy", "blurt", "coast", "duchy", "groin", "fixer", "group", "rogue", "badly", "smart", "pithy", "gaudy", "chill", "heron", "vodka", "finer", "surer", "radio", "rouge", "perch", "retch", "wrote", "clock", "tilde", "store", "prove", "bring", "solve", "cheat", "grime", "exult", "usher", "epoch", "triad", "break", "rhino", "viral", "conic", "masse", "sonic", "vital", "trace", "using", "peach", "champ", "baton", "brake", "pluck", "craze", "gripe", "weary", "picky", "acute", "ferry", "aside", "tapir", "troll", "unify", "rebus", "boost", "truss", "siege", "tiger", "banal", "slump", "crank", "gorge", "query", "drink", "favor", "abbey", "tangy", "panic", "solar", "shire", "proxy", "point", "robot", "prick", "wince", "crimp", "knoll", "sugar", "whack", "mount", "perky", "could", "wrung", "light", "those", "moist", "shard", "pleat", "aloft", "skill", "elder", "frame", "humor", "pause", "ulcer", "ultra", "robin", "cynic", "agora", "aroma", "caulk", "shake", "pupal", "dodge", "swill", "tacit", "other", "thorn", "trove", "bloke", "vivid", "spill", "chant", "choke", "rupee", "nasty", "mourn", "ahead", "brine", "cloth", "hoard", "sweet", "month", "lapse", "watch", "today", "focus", "smelt", "tease", "cater", "movie", "lynch", "saute", "allow", "renew", "their", "slosh", "purge", "chest", "depot", "epoxy", "nymph", "found", "shall", "harry", "stove", "lowly", "snout", "trope", "fewer", "shawl", "natal", "fibre", "comma", "foray", "scare", "stair", "black", "squad", "royal", "chunk", "mince", "slave", "shame", "cheek", "ample", "flair", "foyer", "cargo", "oxide", "plant", "olive", "inert", "askew", "heist", "shown", "zesty", "hasty", "trash", "fella", "larva", "forgo", "story", "hairy", "train", "homer", "badge", "midst", "canny", "fetus", "butch", "farce", "slung", "tipsy", "metal", "yield", "delve", "being", "scour", "glass", "gamer", "scrap", "money", "hinge", "album", "vouch", "asset", "tiara", "crept", "bayou", "atoll", "manor", "creak", "showy", "phase", "froth", "depth", "gloom", "flood", "trait", "girth", "piety", "payer", "goose", "float", "donor", "atone", "primo", "apron", "blown", "cacao", "loser", "input", "gloat", "awful", "brink", "smite", "beady", "rusty", "retro", "droll", "gawky", "hutch", "pinto", "gaily", "egret", "lilac", "sever", "field", "fluff", "hydro", "flack", "agape", "wench", "voice", "stead", "stalk", "berth", "madam", "night", "bland", "liver", "wedge", "augur", "roomy", "wacky", "flock", "angry", "bobby", "trite", "aphid", "tryst", "midge", "power", "elope", "cinch", "motto", "stomp", "upset", "bluff", "cramp", "quart", "coyly", "youth", "rhyme", "buggy", "alien", "smear", "unfit", "patty", "cling", "glean", "label", "hunky", "khaki", "poker", "gruel", "twice", "twang", "shrug", "treat", "unlit", "waste", "merit", "woven", "octal", "needy", "clown", "widow", "irony", "ruder", "gauze", "chief", "onset", "prize", "fungi", "charm", "gully", "inter", "whoop", "taunt", "leery", "class", "theme", "lofty", "tibia", "booze", "alpha", "thyme", "eclat", "doubt", "parer", "chute", "stick", "trice", "alike", "sooth", "recap", "saint", "liege", "glory", "grate", "admit", "brisk", "soggy", "usurp", "scald", "scorn", "leave", "twine", "sting", "bough", "marsh", "sloth", "dandy", "vigor", "howdy", "enjoy", "valid", "ionic", "equal", "unset", "floor", "catch", "spade", "stein", "exist", "quirk", "denim", "grove", "spiel", "mummy", "fault", "foggy", "flout", "carry", "sneak", "libel", "waltz", "aptly", "piney", "inept", "aloud", "photo", "dream", "stale", "vomit", "ombre", "fanny", "unite", "snarl", "baker", "there", "glyph", "pooch", "hippy", "spell", "folly", "louse", "gulch", "vault", "godly", "threw", "fleet", "grave", "inane", "shock", "crave", "spite", "valve", "skimp", "claim", "rainy", "musty", "pique", "daddy", "quasi", "arise", "aging", "valet", "opium", "avert", "stuck", "recut", "mulch", "genre", "plume", "rifle", "count", "incur", "total", "wrest", "mocha", "deter", "study", "lover", "safer", "rivet", "funny", "smoke", "mound", "undue", "sedan", "pagan", "swine", "guile", "gusty", "equip", "tough", "canoe", "chaos", "covet", "human", "udder", "lunch", "blast", "stray", "manga", "melee", "lefty", "quick", "paste", "given", "octet", "risen", "groan", "leaky", "grind", "carve", "loose", "sadly", "spilt", "apple", "slack", "honey", "final", "sheen", "eerie", "minty", "slick", "derby", "wharf", "spelt", "coach", "erupt", "singe", "price", "spawn", "fairy", "jiffy", "filmy", "stack", "chose", "sleep", "ardor", "nanny", "niece", "woozy", "handy", "grace", "ditto", "stank", "cream", "usual", "diode", "valor", "angle", "ninja", "muddy", "chase", "reply", "prone", "spoil", "heart", "shade", "diner", "arson", "onion", "sleet", "dowel", "couch", "palsy", "bowel", "smile", "evoke", "creek", "lance", "eagle", "idiot", "siren", "built", "embed", "award", "dross", "annul", "goody", "frown", "patio", "laden", "humid", "elite", "lymph", "edify", "might", "reset", "visit", "gusto", "purse", "vapor", "crock", "write", "sunny", "loath", "chaff", "slide", "queer", "venom", "stamp", "sorry", "still", "acorn", "aping", "pushy", "tamer", "hater", "mania", "awoke", "brawn", "swift", "exile", "birch", "lucky", "freer", "risky", "ghost", "plier", "lunar", "winch", "snare", "nurse", "house", "borax", "nicer", "lurch", "exalt", "about", "savvy", "toxin", "tunic", "pried", "inlay", "chump", "lanky", "cress", "eater", "elude", "cycle", "kitty", "boule", "moron", "tenet", "place", "lobby", "plush", "vigil", "index", "blink", "clung", "qualm", "croup", "clink", "juicy", "stage", "decay", "nerve", "flier", "shaft", "crook", "clean", "china", "ridge", "vowel", "gnome", "snuck", "icing", "spiny", "rigor", "snail", "flown", "rabid", "prose", "thank", "poppy", "budge", "fiber", "moldy", "dowdy", "kneel", "track", "caddy", "quell", "dumpy", "paler", "swore", "rebar", "scuba", "splat", "flyer", "horny", "mason", "doing", "ozone", "amply", "molar", "ovary", "beset", "queue", "cliff", "magic", "truce", "sport", "fritz", "edict", "twirl", "verse", "llama", "eaten", "range", "whisk", "hovel", "rehab", "macaw", "sigma", "spout", "verve", "sushi", "dying", "fetid", "brain", "buddy", "thump", "scion", "candy", "chord", "basin", "march", "crowd", "arbor", "gayly", "musky", "stain", "dally", "bless", "bravo", "stung", "title", "ruler", "kiosk", "blond", "ennui", "layer", "fluid", "tatty", "score", "cutie", "zebra", "barge", "matey", "bluer", "aider", "shook", "river", "privy", "betel", "frisk", "bongo", "begun", "azure", "weave", "genie", "sound", "glove", "braid", "scope", "wryly", "rover", "assay", "ocean", "bloom", "irate", "later", "woken", "silky", "wreck", "dwelt", "slate", "smack", "solid", "amaze", "hazel", "wrist", "jolly", "globe", "flint", "rouse", "civil", "vista", "relax", "cover", "alive", "beech", "jetty", "bliss", "vocal", "often", "dolly", "eight", "joker", "since", "event", "ensue", "shunt", "diver", "poser", "worst", "sweep", "alley", "creed", "anime", "leafy", "bosom", "dunce", "stare", "pudgy", "waive", "choir", "stood", "spoke", "outgo", "delay", "bilge", "ideal", "clasp", "seize", "hotly", "laugh", "sieve", "block", "meant", "grape", "noose", "hardy", "shied", "drawl", "daisy", "putty", "strut", "burnt", "tulip", "crick", "idyll", "vixen", "furor", "geeky", "cough", "naive", "shoal", "stork", "bathe", "aunty", "check", "prime", "brass", "outer", "furry", "razor", "elect", "evict", "imply", "demur", "quota", "haven", "cavil", "swear", "crump", "dough", "gavel", "wagon", "salon", "nudge", "harem", "pitch", "sworn", "pupil", "excel", "stony", "cabin", "unzip", "queen", "trout", "polyp", "earth", "storm", "until", "taper", "enter", "child", "adopt", "minor", "fatty", "husky", "brave", "filet", "slime", "glint", "tread", "steal", "regal", "guest", "every", "murky", "share", "spore", "hoist", "buxom", "inner", "otter", "dimly", "level", "sumac", "donut", "stilt", "arena", "sheet", "scrub", "fancy", "slimy", "pearl", "silly", "porch", "dingo", "sepia", "amble", "shady", "bread", "friar", "reign", "dairy", "quill", "cross", "brood", "tuber", "shear", "posit", "blank", "villa", "shank", "piggy", "freak", "which", "among", "fecal", "shell", "would", "algae", "large", "rabbi", "agony", "amuse", "bushy", "copse", "swoon", "knife", "pouch", "ascot", "plane", "crown", "urban", "snide", "relay", "abide", "viola", "rajah", "straw", "dilly", "crash", "amass", "third", "trick", "tutor", "woody", "blurb", "grief", "disco", "where", "sassy", "beach", "sauna", "comic", "clued", "creep", "caste", "graze", "snuff", "frock", "gonad", "drunk", "prong", "lurid", "steel", "halve", "buyer", "vinyl", "utile", "smell", "adage", "worry", "tasty", "local", "trade", "finch", "ashen", "modal", "gaunt", "clove", "enact", "adorn", "roast", "speck", "sheik", "missy", "grunt", "snoop", "party", "touch", "mafia", "emcee", "array", "south", "vapid", "jelly", "skulk", "angst", "tubal", "lower", "crest", "sweat", "cyber", "adore", "tardy", "swami", "notch", "groom", "roach", "hitch", "young", "align", "ready", "frond", "strap", "puree", "realm", "venue", "swarm", "offer", "seven", "dryer", "diary", "dryly", "drank", "acrid", "heady", "theta", "junto", "pixie", "quoth", "bonus", "shalt", "penne", "amend", "datum", "build", "piano", "shelf", "lodge", "suing", "rearm", "coral", "ramen", "worth", "psalm", "infer", "overt", "mayor", "ovoid", "glide", "usage", "poise", "randy", "chuck", "prank", "fishy", "tooth", "ether", "drove", "idler", "swath", "stint", "while", "begat", "apply", "slang", "tarot", "radar", "credo", "aware", "canon", "shift", "timer", "bylaw", "serum", "three", "steak", "iliac", "shirk", "blunt", "puppy", "penal", "joist", "bunny", "shape", "beget", "wheel", "adept", "stunt", "stole", "topaz", "chore", "fluke", "afoot", "bloat", "bully", "dense", "caper", "sneer", "boxer", "jumbo", "lunge", "space", "avail", "short", "slurp", "loyal", "flirt", "pizza", "conch", "tempo", "droop", "plate", "bible", "plunk", "afoul", "savoy", "steep", "agile", "stake", "dwell", "knave", "beard", "arose", "motif", "smash", "broil", "glare", "shove", "baggy", "mammy", "swamp", "along", "rugby", "wager", "quack", "squat", "snaky", "debit", "mange", "skate", "ninth", "joust", "tramp", "spurn", "medal", "micro", "rebel", "flank", "learn", "nadir", "maple", "comfy", "remit", "gruff", "ester", "least", "mogul", "fetch", "cause", "oaken", "aglow", "meaty", "gaffe", "shyly", "racer", "prowl", "thief", "stern", "poesy", "rocky", "tweet", "waist", "spire", "grope", "havoc", "patsy", "truly", "forty", "deity", "uncle", "swish", "giver", "preen", "bevel", "lemur", "draft", "slope", "annoy", "lingo", "bleak", "ditty", "curly", "cedar", "dirge", "grown", "horde", "drool", "shuck", "crypt", "cumin", "stock", "gravy", "locus", "wider", "breed", "quite", "chafe", "cache", "blimp", "deign", "fiend", "logic", "cheap", "elide", "rigid", "false", "renal", "pence", "rowdy", "shoot", "blaze", "envoy", "posse", "brief", "never", "abort", "mouse", "mucky", "sulky", "fiery", "media", "trunk", "yeast", "clear", "skunk", "scalp", "bitty", "cider", "koala", "duvet", "segue", "creme", "super", "grill", "after", "owner", "ember", "reach", "nobly", "empty", "speed", "gipsy", "recur", "smock", "dread", "merge", "burst", "kappa", "amity", "shaky", "hover", "carol", "snort", "synod", "faint", "haunt", "flour", "chair", "detox", "shrew", "tense", "plied", "quark", "burly", "novel", "waxen", "stoic", "jerky", "blitz", "beefy", "lyric", "hussy", "towel", "quilt", "below", "bingo", "wispy", "brash", "scone", "toast", "easel", "saucy", "value", "spice", "honor", "route", "sharp", "bawdy", "radii", "skull", "phony", "issue", "lager", "swell", "urine", "gassy", "trial", "flora", "upper", "latch", "wight", "brick", "retry", "holly", "decal", "grass", "shack", "dogma", "mover", "defer", "sober", "optic", "crier", "vying", "nomad", "flute", "hippo", "shark", "drier", "obese", "bugle", "tawny", "chalk", "feast", "ruddy", "pedal", "scarf", "cruel", "bleat", "tidal", "slush", "semen", "windy", "dusty", "sally", "igloo", "nerdy", "jewel", "shone", "whale", "hymen", "abuse", "fugue", "elbow", "crumb", "pansy", "welsh", "syrup", "terse", "suave", "gamut", "swung", "drake", "freed", "afire", "shirt", "grout", "oddly", "tithe", "plaid", "dummy", "broom", "blind", "torch", "enemy", "again", "tying", "pesky", "alter", "gazer", "noble", "ethos", "bride", "extol", "decor", "hobby", "beast", "idiom", "utter", "these", "sixth", "alarm", "erase", "elegy", "spunk", "piper", "scaly", "scold", "hefty", "chick", "sooty", "canal", "whiny", "slash", "quake", "joint", "swept", "prude", "heavy", "wield", "femme", "lasso", "maize", "shale", "screw", "spree", "smoky", "whiff", "scent", "glade", "spent", "prism", "stoke", "riper", "orbit", "cocoa", "guilt", "humus", "shush", "table", "smirk", "wrong", "noisy", "alert", "shiny", "elate", "resin", "whole", "hunch", "pixel", "polar", "hotel", "sword", "cleat", "mango", "rumba", "puffy", "filly", "billy", "leash", "clout", "dance", "ovate", "facet", "chili", "paint", "liner", "curio", "salty", "audio", "snake", "fable", "cloak", "navel", "spurt", "pesto", "balmy", "flash", "unwed", "early", "churn", "weedy", "stump", "lease", "witty", "wimpy", "spoof", "saner", "blend", "salsa", "thick", "warty", "manic", "blare", "squib", "spoon", "probe", "crepe", "knack", "force", "debut", "order", "haste", "teeth", "agent", "widen", "icily", "slice", "ingot", "clash", "juror", "blood", "abode", "throw", "unity", "pivot", "slept", "troop", "spare", "sewer", "parse", "morph", "cacti", "tacky", "spool", "demon", "moody", "annex", "begin", "fuzzy", "patch", "water", "lumpy", "admin", "omega", "limit", "tabby", "macho", "aisle", "skiff", "basis", "plank", "verge", "botch", "crawl", "lousy", "slain", "cubic", "raise", "wrack", "guide", "foist", "cameo", "under", "actor", "revue", "fraud", "harpy", "scoop", "climb", "refer", "olden", "clerk", "debar", "tally", "ethic", "cairn", "tulle", "ghoul", "hilly", "crude", "apart", "scale", "older", "plain", "sperm", "briny", "abbot", "rerun", "quest", "crisp", "bound", "befit", "drawn", "suite", "itchy", "cheer", "bagel", "guess", "broad", "axiom", "chard", "caput", "leant", "harsh", "curse", "proud", "swing", "opine", "taste", "lupus", "gumbo", "miner", "green", "chasm", "lipid", "topic", "armor", "brush", "crane", "mural", "abled", "habit", "bossy", "maker", "dusky", "dizzy", "lithe", "brook", "jazzy", "fifty", "sense", "giant", "surly", "legal", "fatal", "flunk", "began", "prune", "small", "slant", "scoff", "torus", "ninny", "covey", "viper", "taken", "moral", "vogue", "owing", "token", "entry", "booth", "voter", "chide", "elfin", "ebony", "neigh", "minim", "melon", "kneed", "decoy", "voila", "ankle", "arrow", "mushy", "tribe", "cease", "eager", "birth", "graph", "odder", "terra", "weird", "tried", "clack", "color", "rough", "weigh", "uncut", "ladle", "strip", "craft", "minus", "dicey", "titan", "lucid", "vicar", "dress", "ditch", "gypsy", "pasta", "taffy", "flame", "swoop", "aloof", "sight", "broke", "teary", "chart", "sixty", "wordy", "sheer", "leper", "nosey", "bulge", "savor", "clamp", "funky", "foamy", "toxic", "brand", "plumb", "dingy", "butte", "drill", "tripe", "bicep", "tenor", "krill", "worse", "drama", "hyena", "think", "ratio", "cobra", "basil", "scrum", "bused", "phone", "court", "camel", "proof", "heard", "angel", "petal", "pouty", "throb", "maybe", "fetal", "sprig", "spine", "shout", "cadet", "macro", "dodgy", "satyr", "rarer", "binge", "trend", "nutty", "leapt", "amiss", "split", "myrrh", "width", "sonar", "tower", "baron", "fever", "waver", "spark", "belie", "sloop", "expel", "smote", "baler", "above", "north", "wafer", "scant", "frill", "awash", "snack", "scowl", "frail", "drift", "limbo", "fence", "motel", "ounce", "wreak", "revel", "talon", "prior", "knelt", "cello", "flake", "debug", "anode", "crime", "salve", "scout", "imbue", "pinky", "stave", "vague", "chock", "fight", "video", "stone", "teach", "cleft", "frost", "prawn", "booty", "twist", "apnea", "stiff", "plaza", "ledge", "tweak", "board", "grant", "medic", "bacon", "cable", "brawl", "slunk", "raspy", "forum", "drone", "women", "mucus", "boast", "toddy", "coven", "tumor", "truer", "wrath", "stall", "steam", "axial", "purer", "daily", "trail", "niche", "mealy", "juice", "nylon", "plump", "merry", "flail", "papal", "wheat", "berry", "cower", "erect", "brute", "leggy", "snipe", "sinew", "skier", "penny", "jumpy", "rally", "umbra", "scary", "modem", "gross", "avian", "greed", "satin", "tonic", "parka", "sniff", "livid", "stark", "trump", "giddy", "reuse", "taboo", "avoid", "quote", "devil", "liken", "gloss", "gayer", "beret", "noise", "gland", "dealt", "sling", "rumor", "opera", "thigh", "tonga", "flare", "wound", "white", "bulky", "etude", "horse", "circa", "paddy", "inbox", "fizzy", "grain", "exert", "surge", "gleam", "belle", "salvo", "crush", "fruit", "sappy", "taker", "tract", "ovine", "spiky", "frank", "reedy", "filth", "spasm", "heave", "mambo", "right", "clank", "trust", "lumen", "borne", "spook", "sauce", "amber", "lathe", "carat", "corer", "dirty", "slyly", "affix", "alloy", "taint", "sheep", "kinky", "wooly", "mauve", "flung", "yacht", "fried", "quail", "brunt", "grimy", "curvy", "cagey", "rinse", "deuce", "state", "grasp", "milky", "bison", "graft", "sandy", "baste", "flask", "hedge", "girly", "swash", "boney", "coupe", "endow", "abhor", "welch", "blade", "tight", "geese", "miser", "mirth", "cloud", "cabal", "leech", "close", "tenth", "pecan", "droit", "grail", "clone", "guise", "ralph", "tango", "biddy", "smith", "mower", "payee", "serif", "drape", "fifth", "spank", "glaze", "allot", "truck", "kayak", "virus", "testy", "tepee", "fully", "zonal", "metro", "curry", "grand", "banjo", "axion", "bezel", "occur", "chain", "nasal", "gooey", "filer", "brace", "allay", "pubic", "raven", "plead", "gnash", "flaky", "munch", "dully", "eking", "thing", "slink", "hurry", "theft", "shorn", "pygmy", "ranch", "wring", "lemon", "shore", "mamma", "froze", "newer", "style", "moose", "antic", "drown", "vegan", "chess", "guppy", "union", "lever", "lorry", "image", "cabby", "druid", "exact", "truth", "dopey", "spear", "cried", "chime", "crony", "stunk", "timid", "batch", "gauge", "rotor", "crack", "curve", "latte", "witch", "bunch", "repel", "anvil", "soapy", "meter", "broth", "madly", "dried", "scene", "known", "magma", "roost", "woman", "thong", "punch", "pasty", "downy", "knead", "whirl", "rapid", "clang", "anger", "drive", "goofy", "email", "music", "stuff", "bleep", "rider", "mecca", "folio", "setup", "verso", "quash", "fauna", "gummy", "happy", "newly", "fussy", "relic", "guava", "ratty", "fudge", "femur", "chirp", "forte", "alibi", "whine", "petty", "golly", "plait", "fleck", "felon", "gourd", "brown", "thrum", "ficus", "stash", "decry", "wiser", "junta", "visor", "daunt", "scree", "impel", "await", "press", "whose", "turbo", "stoop", "speak", "mangy", "eying", "inlet", "crone", "pulse", "mossy", "staid", "hence", "pinch", "teddy", "sully", "snore", "ripen", "snowy", "attic", "going", "leach", "mouth", "hound", "clump", "tonal", "bigot", "peril", "piece", "blame", "haute", "spied", "undid", "intro", "basal", "shine", "gecko", "rodeo", "guard", "steer", "loamy", "scamp", "scram", "manly", "hello", "vaunt", "organ", "feral", "knock", "extra", "condo", "adapt", "willy", "polka", "rayon", "skirt", "faith", "torso", "match", "mercy", "tepid", "sleek", "riser", "twixt", "peace", "flush", "catty", "login", "eject", "roger", "rival", "untie", "refit", "aorta", "adult", "judge", "rower", "artsy", "rural", "shave"],
    valid: ["aahed", "aalii", "aargh", "aarti", "abaca", "abaci", "abacs", "abaft", "abaka", "abamp", "aband", "abash", "abask", "abaya", "abbas", "abbed", "abbes", "abcee", "abeam", "abear", "abele", "abers", "abets", "abies", "abler", "ables", "ablet", "ablow", "abmho", "abohm", "aboil", "aboma", "aboon", "abord", "abore", "abram", "abray", "abrim", "abrin", "abris", "absey", "absit", "abuna", "abune", "abuts", "abuzz", "abyes", "abysm", "acais", "acari", "accas", "accoy", "acerb", "acers", "aceta", "achar", "ached", "aches", "achoo", "acids", "acidy", "acing", "acini", "ackee", "acker", "acmes", "acmic", "acned", "acnes", "acock", "acold", "acred", "acres", "acros", "acted", "actin", "acton", "acyls", "adaws", "adays", "adbot", "addax", "added", "adder", "addio", "addle", "adeem", "adhan", "adieu", "adios", "adits", "adman", "admen", "admix", "adobo", "adown", "adoze", "adrad", "adred", "adsum", "aduki", "adunc", "adust", "advew", "adyta", "adzed", "adzes", "aecia", "aedes", "aegis", "aeons", "aerie", "aeros", "aesir", "afald", "afara", "afars", "afear", "aflaj", "afore", "afrit", "afros", "agama", "agami", "agars", "agast", "agave", "agaze", "agene", "agers", "agger", "aggie", "aggri", "aggro", "aggry", "aghas", "agila", "agios", "agism", "agist", "agita", "aglee", "aglet", "agley", "agloo", "aglus", "agmas", "agoge", "agone", "agons", "agood", "agria", "agrin", "agros", "agued", "agues", "aguna", "aguti", "aheap", "ahent", "ahigh", "ahind", "ahing", "ahint", "ahold", "ahull", "ahuru", "aidas", "aided", "aides", "aidoi", "aidos", "aiery", "aigas", "aight", "ailed", "aimed", "aimer", "ainee", "ainga", "aioli", "aired", "airer", "airns", "airth", "airts", "aitch", "aitus", "aiver", "aiyee", "aizle", "ajies", "ajiva", "ajuga", "ajwan", "akees", "akela", "akene", "aking", "akita", "akkas", "alaap", "alack", "alamo", "aland", "alane", "alang", "alans", "alant", "alapa", "alaps", "alary", "alate", "alays", "albas", "albee", "alcid", "alcos", "aldea", "alder", "aldol", "aleck", "alecs", "alefs", "aleft", "aleph", "alews", "aleye", "alfas", "algal", "algas", "algid", "algin", "algor", "algum", "alias", "alifs", "aline", "alist", "aliya", "alkie", "alkos", "alkyd", "alkyl", "allee", "allel", "allis", "allod", "allyl", "almah", "almas", "almeh", "almes", "almud", "almug", "alods", "aloed", "aloes", "aloha", "aloin", "aloos", "alowe", "altho", "altos", "alula", "alums", "alure", "alvar", "alway", "amahs", "amain", "amate", "amaut", "amban", "ambit", "ambos", "ambry", "ameba", "ameer", "amene", "amens", "ament", "amias", "amice", "amici", "amide", "amido", "amids", "amies", "amiga", "amigo", "amine", "amino", "amins", "amirs", "amlas", "amman", "ammon", "ammos", "amnia", "amnic", "amnio", "amoks", "amole", "amort", "amour", "amove", "amowt", "amped", "ampul", "amrit", "amuck", "amyls", "anana", "anata", "ancho", "ancle", "ancon", "andro", "anear", "anele", "anent", "angas", "anglo", "anigh", "anile", "anils", "anima", "animi", "anion", "anise", "anker", "ankhs", "ankus", "anlas", "annal", "annas", "annat", "anoas", "anole", "anomy", "ansae", "antae", "antar", "antas", "anted", "antes", "antis", "antra", "antre", "antsy", "anura", "anyon", "apace", "apage", "apaid", "apayd", "apays", "apeak", "apeek", "apers", "apert", "apery", "apgar", "aphis", "apian", "apiol", "apish", "apism", "apode", "apods", "apoop", "aport", "appal", "appay", "appel", "appro", "appui", "appuy", "apres", "apses", "apsis", "apsos", "apted", "apter", "aquae", "aquas", "araba", "araks", "arame", "arars", "arbas", "arced", "archi", "arcos", "arcus", "ardeb", "ardri", "aread", "areae", "areal", "arear", "areas", "areca", "aredd", "arede", "arefy", "areic", "arene", "arepa", "arere", "arete", "arets", "arett", "argal", "argan", "argil", "argle", "argol", "argon", "argot", "argus", "arhat", "arias", "ariel", "ariki", "arils", "ariot", "arish", "arked", "arled", "arles", "armed", "armer", "armet", "armil", "arnas", "arnut", "aroba", "aroha", "aroid", "arpas", "arpen", "arrah", "arras", "arret", "arris", "arroz", "arsed", "arses", "arsey", "arsis", "artal", "artel", "artic", "artis", "aruhe", "arums", "arval", "arvee", "arvos", "aryls", "asana", "ascon", "ascus", "asdic", "ashed", "ashes", "ashet", "asked", "asker", "askoi", "askos", "aspen", "asper", "aspic", "aspie", "aspis", "aspro", "assai", "assam", "asses", "assez", "assot", "aster", "astir", "astun", "asura", "asway", "aswim", "asyla", "ataps", "ataxy", "atigi", "atilt", "atimy", "atlas", "atman", "atmas", "atmos", "atocs", "atoke", "atoks", "atoms", "atomy", "atony", "atopy", "atria", "atrip", "attap", "attar", "atuas", "audad", "auger", "aught", "aulas", "aulic", "auloi", "aulos", "aumil", "aunes", "aunts", "aurae", "aural", "aurar", "auras", "aurei", "aures", "auric", "auris", "aurum", "autos", "auxin", "avale", "avant", "avast", "avels", "avens", "avers", "avgas", "avine", "avion", "avise", "aviso", "avize", "avows", "avyze", "awarn", "awato", "awave", "aways", "awdls", "aweel", "aweto", "awing", "awmry", "awned", "awner", "awols", "awork", "axels", "axile", "axils", "axing", "axite", "axled", "axles", "axman", "axmen", "axoid", "axone", "axons", "ayahs", "ayaya", "ayelp", "aygre", "ayins", "ayont", "ayres", "ayrie", "azans", "azide", "azido", "azine", "azlon", "azoic", "azole", "azons", "azote", "azoth", "azuki", "azurn", "azury", "azygy", "azyme", "azyms", "baaed", "baals", "babas", "babel", "babes", "babka", "baboo", "babul", "babus", "bacca", "bacco", "baccy", "bacha", "bachs", "backs", "baddy", "baels", "baffs", "baffy", "bafts", "baghs", "bagie", "bahts", "bahus", "bahut", "bails", "bairn", "baisa", "baith", "baits", "baiza", "baize", "bajan", "bajra", "bajri", "bajus", "baked", "baken", "bakes", "bakra", "balas", "balds", "baldy", "baled", "bales", "balks", "balky", "balls", "bally", "balms", "baloo", "balsa", "balti", "balun", "balus", "bambi", "banak", "banco", "bancs", "banda", "bandh", "bands", "bandy", "baned", "banes", "bangs", "bania", "banks", "banns", "bants", "bantu", "banty", "banya", "bapus", "barbe", "barbs", "barby", "barca", "barde", "bardo", "bards", "bardy", "bared", "barer", "bares", "barfi", "barfs", "baric", "barks", "barky", "barms", "barmy", "barns", "barny", "barps", "barra", "barre", "barro", "barry", "barye", "basan", "based", "basen", "baser", "bases", "basho", "basij", "basks", "bason", "basse", "bassi", "basso", "bassy", "basta", "basti", "basto", "basts", "bated", "bates", "baths", "batik", "batta", "batts", "battu", "bauds", "bauks", "baulk", "baurs", "bavin", "bawds", "bawks", "bawls", "bawns", "bawrs", "bawty", "bayed", "bayer", "bayes", "bayle", "bayts", "bazar", "bazoo", "beads", "beaks", "beaky", "beals", "beams", "beamy", "beano", "beans", "beany", "beare", "bears", "beath", "beats", "beaty", "beaus", "beaut", "beaux", "bebop", "becap", "becke", "becks", "bedad", "bedel", "bedes", "bedew", "bedim", "bedye", "beedi", "beefs", "beeps", "beers", "beery", "beets", "befog", "begad", "begar", "begem", "begot", "begum", "beige", "beigy", "beins", "bekah", "belah", "belar", "belay", "belee", "belga", "bells", "belon", "belts", "bemad", "bemas", "bemix", "bemud", "bends", "bendy", "benes", "benet", "benga", "benis", "benne", "benni", "benny", "bento", "bents", "benty", "bepat", "beray", "beres", "bergs", "berko", "berks", "berme", "berms", "berob", "beryl", "besat", "besaw", "besee", "beses", "besit", "besom", "besot", "besti", "bests", "betas", "beted", "betes", "beths", "betid", "beton", "betta", "betty", "bever", "bevor", "bevue", "bevvy", "bewet", "bewig", "bezes", "bezil", "bezzy", "bhais", "bhaji", "bhang", "bhats", "bhels", "bhoot", "bhuna", "bhuts", "biach", "biali", "bialy", "bibbs", "bibes", "biccy", "bices", "bided", "bider", "bides", "bidet", "bidis", "bidon", "bield", "biers", "biffo", "biffs", "biffy", "bifid", "bigae", "biggs", "biggy", "bigha", "bight", "bigly", "bigos", "bijou", "biked", "biker", "bikes", "bikie", "bilbo", "bilby", "biled", "biles", "bilgy", "bilks", "bills", "bimah", "bimas", "bimbo", "binal", "bindi", "binds", "biner", "bines", "bings", "bingy", "binit", "binks", "bints", "biogs", "biont", "biota", "biped", "bipod", "birds", "birks", "birle", "birls", "biros", "birrs", "birse", "birsy", "bises", "bisks", "bisom", "bitch", "biter", "bites", "bitos", "bitou", "bitsy", "bitte", "bitts", "bivia", "bivvy", "bizes", "bizzo", "bizzy", "blabs", "blads", "blady", "blaer", "blaes", "blaff", "blags", "blahs", "blain", "blams", "blart", "blase", "blash", "blate", "blats", "blatt", "blaud", "blawn", "blaws", "blays", "blear", "blebs", "blech", "blees", "blent", "blert", "blest", "blets", "bleys", "blimy", "bling", "blini", "blins", "bliny", "blips", "blist", "blite", "blits", "blive", "blobs", "blocs", "blogs", "blook", "bloop", "blore", "blots", "blows", "blowy", "blubs", "blude", "bluds", "bludy", "blued", "blues", "bluet", "bluey", "bluid", "blume", "blunk", "blurs", "blype", "boabs", "boaks", "boars", "boart", "boats", "bobac", "bobak", "bobas", "bobol", "bobos", "bocca", "bocce", "bocci", "boche", "bocks", "boded", "bodes", "bodge", "bodhi", "bodle", "boeps", "boets", "boeuf", "boffo", "boffs", "bogan", "bogey", "boggy", "bogie", "bogle", "bogue", "bogus", "bohea", "bohos", "boils", "boing", "boink", "boite", "boked", "bokeh", "bokes", "bokos", "bolar", "bolas", "bolds", "boles", "bolix", "bolls", "bolos", "bolts", "bolus", "bomas", "bombe", "bombo", "bombs", "bonce", "bonds", "boned", "boner", "bones", "bongs", "bonie", "bonks", "bonne", "bonny", "bonza", "bonze", "booai", "booay", "boobs", "boody", "booed", "boofy", "boogy", "boohs", "books", "booky", "bools", "booms", "boomy", "boong", "boons", "boord", "boors", "boose", "boots", "boppy", "borak", "boral", "boras", "borde", "bords", "bored", "boree", "borel", "borer", "bores", "borgo", "boric", "borks", "borms", "borna", "boron", "borts", "borty", "bortz", "bosie", "bosks", "bosky", "boson", "bosun", "botas", "botel", "botes", "bothy", "botte", "botts", "botty", "bouge", "bouks", "boult", "bouns", "bourd", "bourg", "bourn", "bouse", "bousy", "bouts", "bovid", "bowat", "bowed", "bower", "bowes", "bowet", "bowie", "bowls", "bowne", "bowrs", "bowse", "boxed", "boxen", "boxes", "boxla", "boxty", "boyar", "boyau", "boyed", "boyfs", "boygs", "boyla", "boyos", "boysy", "bozos", "braai", "brach", "brack", "bract", "brads", "braes", "brags", "brail", "braks", "braky", "brame", "brane", "brank", "brans", "brant", "brast", "brats", "brava", "bravi", "braws", "braxy", "brays", "braza", "braze", "bream", "brede", "breds", "breem", "breer", "brees", "breid", "breis", "breme", "brens", "brent", "brere", "brers", "breve", "brews", "breys", "brier", "bries", "brigs", "briki", "briks", "brill", "brims", "brins", "brios", "brise", "briss", "brith", "brits", "britt", "brize", "broch", "brock", "brods", "brogh", "brogs", "brome", "bromo", "bronc", "brond", "brool", "broos", "brose", "brosy", "brows", "brugh", "bruin", "bruit", "brule", "brume", "brung", "brusk", "brust", "bruts", "buats", "buaze", "bubal", "bubas", "bubba", "bubbe", "bubby", "bubus", "buchu", "bucko", "bucks", "bucku", "budas", "budis", "budos", "buffa", "buffe", "buffi", "buffo", "buffs", "buffy", "bufos", "bufty", "buhls", "buhrs", "buiks", "buist", "bukes", "bulbs", "bulgy", "bulks", "bulla", "bulls", "bulse", "bumbo", "bumfs", "bumph", "bumps", "bumpy", "bunas", "bunce", "bunco", "bunde", "bundh", "bunds", "bundt", "bundu", "bundy", "bungs", "bungy", "bunia", "bunje", "bunjy", "bunko", "bunks", "bunns", "bunts", "bunty", "bunya", "buoys", "buppy", "buran", "buras", "burbs", "burds", "buret", "burfi", "burgh", "burgs", "burin", "burka", "burke", "burks", "burls", "burns", "buroo", "burps", "burqa", "burro", "burrs", "burry", "bursa", "burse", "busby", "buses", "busks", "busky", "bussu", "busti", "busts", "busty", "buteo", "butes", "butle", "butoh", "butts", "butty", "butut", "butyl", "buzzy", "bwana", "bwazi", "byded", "bydes", "byked", "bykes", "byres", "byrls", "byssi", "bytes", "byway", "caaed", "cabas", "caber", "cabob", "caboc", "cabre", "cacas", "cacks", "cacky", "cadee", "cades", "cadge", "cadgy", "cadie", "cadis", "cadre", "caeca", "caese", "cafes", "caffs", "caged", "cager", "cages", "cagot", "cahow", "caids", "cains", "caird", "cajon", "cajun", "caked", "cakes", "cakey", "calfs", "calid", "calif", "calix", "calks", "calla", "calls", "calms", "calmy", "calos", "calpa", "calps", "calve", "calyx", "caman", "camas", "cames", "camis", "camos", "campi", "campo", "camps", "campy", "camus", "caned", "caneh", "caner", "canes", "cangs", "canid", "canna", "canns", "canso", "canst", "canto", "cants", "canty", "capas", "caped", "capes", "capex", "caphs", "capiz", "caple", "capon", "capos", "capot", "capri", "capul", "carap", "carbo", "carbs", "carby", "cardi", "cards", "cardy", "cared", "carer", "cares", "caret", "carex", "carks", "carle", "carls", "carns", "carny", "carob", "carom", "caron", "carpi", "carps", "carrs", "carse", "carta", "carte", "carts", "carvy", "casas", "casco", "cased", "cases", "casks", "casky", "casts", "casus", "cates", "cauda", "cauks", "cauld", "cauls", "caums", "caups", "cauri", "causa", "cavas", "caved", "cavel", "caver", "caves", "cavie", "cawed", "cawks", "caxon", "ceaze", "cebid", "cecal", "cecum", "ceded", "ceder", "cedes", "cedis", "ceiba", "ceili", "ceils", "celeb", "cella", "celli", "cells", "celom", "celts", "cense", "cento", "cents", "centu", "ceorl", "cepes", "cerci", "cered", "ceres", "cerge", "ceria", "ceric", "cerne", "ceroc", "ceros", "certs", "certy", "cesse", "cesta", "cesti", "cetes", "cetyl", "cezve", "chace", "chack", "chaco", "chado", "chads", "chaft", "chais", "chals", "chams", "chana", "chang", "chank", "chape", "chaps", "chapt", "chara", "chare", "chark", "charr", "chars", "chary", "chats", "chave", "chavs", "chawk", "chaws", "chaya", "chays", "cheep", "chefs", "cheka", "chela", "chelp", "chemo", "chems", "chere", "chert", "cheth", "chevy", "chews", "chewy", "chiao", "chias", "chibs", "chica", "chich", "chico", "chics", "chiel", "chiks", "chile", "chimb", "chimo", "chimp", "chine", "ching", "chink", "chino", "chins", "chips", "chirk", "chirl", "chirm", "chiro", "chirr", "chirt", "chiru", "chits", "chive", "chivs", "chivy", "chizz", "choco", "chocs", "chode", "chogs", "choil", "choko", "choky", "chola", "choli", "cholo", "chomp", "chons", "choof", "chook", "choom", "choon", "chops", "chota", "chott", "chout", "choux", "chowk", "chows", "chubs", "chufa", "chuff", "chugs", "chums", "churl", "churr", "chuse", "chuts", "chyle", "chyme", "chynd", "cibol", "cided", "cides", "ciels", "ciggy", "cilia", "cills", "cimar", "cimex", "cinct", "cines", "cinqs", "cions", "cippi", "circs", "cires", "cirls", "cirri", "cisco", "cissy", "cists", "cital", "cited", "citer", "cites", "cives", "civet", "civie", "civvy", "clach", "clade", "clads", "claes", "clags", "clame", "clams", "clans", "claps", "clapt", "claro", "clart", "clary", "clast", "clats", "claut", "clave", "clavi", "claws", "clays", "cleck", "cleek", "cleep", "clefs", "clegs", "cleik", "clems", "clepe", "clept", "cleve", "clews", "clied", "clies", "clift", "clime", "cline", "clint", "clipe", "clips", "clipt", "clits", "cloam", "clods", "cloff", "clogs", "cloke", "clomb", "clomp", "clonk", "clons", "cloop", "cloot", "clops", "clote", "clots", "clour", "clous", "clows", "cloye", "cloys", "cloze", "clubs", "clues", "cluey", "clunk", "clype", "cnida", "coact", "coady", "coala", "coals", "coaly", "coapt", "coarb", "coate", "coati", "coats", "cobbs", "cobby", "cobia", "coble", "cobza", "cocas", "cocci", "cocco", "cocks", "cocky", "cocos", "codas", "codec", "coded", "coden", "coder", "codes", "codex", "codon", "coeds", "coffs", "cogie", "cogon", "cogue", "cohab", "cohen", "cohoe", "cohog", "cohos", "coifs", "coign", "coils", "coins", "coirs", "coits", "coked", "cokes", "colas", "colby", "colds", "coled", "coles", "coley", "colic", "colin", "colls", "colly", "colog", "colts", "colza", "comae", "comal", "comas", "combe", "combi", "combo", "combs", "comby", "comer", "comes", "comix", "commo", "comms", "commy", "compo", "comps", "compt", "comte", "comus", "coned", "cones", "coney", "confs", "conga", "conge", "congo", "conia", "conin", "conks", "conky", "conne", "conns", "conte", "conto", "conus", "convo", "cooch", "cooed", "cooee", "cooer", "cooey", "coofs", "cooks", "cooky", "cools", "cooly", "coomb", "cooms", "coomy", "coons", "coops", "coopt", "coost", "coots", "cooze", "copal", "copay", "coped", "copen", "coper", "copes", "coppy", "copra", "copsy", "coqui", "coram", "corbe", "corby", "cords", "cored", "cores", "corey", "corgi", "coria", "corks", "corky", "corms", "corni", "corno", "corns", "cornu", "corps", "corse", "corso", "cosec", "cosed", "coses", "coset", "cosey", "cosie", "costa", "coste", "costs", "cotan", "coted", "cotes", "coths", "cotta", "cotts", "coude", "coups", "courb", "courd", "coure", "cours", "couta", "couth", "coved", "coves", "covin", "cowal", "cowan", "cowed", "cowks", "cowls", "cowps", "cowry", "coxae", "coxal", "coxed", "coxes", "coxib", "coyau", "coyed", "coyer", "coypu", "cozed", "cozen", "cozes", "cozey", "cozie", "craal", "crabs", "crags", "craic", "craig", "crake", "crame", "crams", "crans", "crape", "craps", "crapy", "crare", "craws", "crays", "creds", "creel", "crees", "crems", "crena", "creps", "crepy", "crewe", "crews", "crias", "cribs", "cries", "crims", "crine", "crios", "cripe", "crips", "crise", "crith", "crits", "croci", "crocs", "croft", "crogs", "cromb", "crome", "cronk", "crons", "crool", "croon", "crops", "crore", "crost", "crout", "crows", "croze", "cruck", "crudo", "cruds", "crudy", "crues", "cruet", "cruft", "crunk", "cruor", "crura", "cruse", "crusy", "cruve", "crwth", "cryer", "ctene", "cubby", "cubeb", "cubed", "cuber", "cubes", "cubit", "cuddy", "cuffo", "cuffs", "cuifs", "cuing", "cuish", "cuits", "cukes", "culch", "culet", "culex", "culls", "cully", "culms", "culpa", "culti", "cults", "culty", "cumec", "cundy", "cunei", "cunit", "cunts", "cupel", "cupid", "cuppa", "cuppy", "curat", "curbs", "curch", "curds", "curdy", "cured", "curer", "cures", "curet", "curfs", "curia", "curie", "curli", "curls", "curns", "curny", "currs", "cursi", "curst", "cusec", "cushy", "cusks", "cusps", "cuspy", "cusso", "cusum", "cutch", "cuter", "cutes", "cutey", "cutin", "cutis", "cutto", "cutty", "cutup", "cuvee", "cuzes", "cwtch", "cyano", "cyans", "cycad", "cycas", "cyclo", "cyder", "cylix", "cymae", "cymar", "cymas", "cymes", "cymol", "cysts", "cytes", "cyton", "czars", "daals", "dabba", "daces", "dacha", "dacks", "dadah", "dadas", "dados", "daffs", "daffy", "dagga", "daggy", "dagos", "dahls", "daiko", "daine", "daint", "daker", "daled", "dales", "dalis", "dalle", "dalts", "daman", "damar", "dames", "damme", "damns", "damps", "dampy", "dancy", "dangs", "danio", "danks", "danny", "dants", "daraf", "darbs", "darcy", "dared", "darer", "dares", "darga", "dargs", "daric", "daris", "darks", "darky", "darns", "darre", "darts", "darzi", "dashi", "dashy", "datal", "dated", "dater", "dates", "datos", "datto", "daube", "daubs", "dauby", "dauds", "dault", "daurs", "dauts", "daven", "davit", "dawah", "dawds", "dawed", "dawen", "dawks", "dawns", "dawts", "dayan", "daych", "daynt", "dazed", "dazer", "dazes", "deads", "deair", "deals", "deans", "deare", "dearn", "dears", "deary", "deash", "deave", "deaws", "deawy", "debag", "debby", "debel", "debes", "debts", "debud", "debur", "debus", "debye", "decad", "decaf", "decan", "decko", "decks", "decos", "dedal", "deeds", "deedy", "deely", "deems", "deens", "deeps", "deere", "deers", "deets", "deeve", "deevs", "defat", "deffo", "defis", "defog", "degas", "degum", "degus", "deice", "deids", "deify", "deils", "deism", "deist", "deked", "dekes", "dekko", "deled", "deles", "delfs", "delft", "delis", "dells", "delly", "delos", "delph", "delts", "deman", "demes", "demic", "demit", "demob", "demoi", "demos", "dempt", "denar", "denay", "dench", "denes", "denet", "denis", "dents", "deoxy", "derat", "deray", "dered", "deres", "derig", "derma", "derms", "derns", "derny", "deros", "derro", "derry", "derth", "dervs", "desex", "deshi", "desis", "desks", "desse", "devas", "devel", "devis", "devon", "devos", "devot", "dewan", "dewar", "dewax", "dewed", "dexes", "dexie", "dhaba", "dhaks", "dhals", "dhikr", "dhobi", "dhole", "dholl", "dhols", "dhoti", "dhows", "dhuti", "diact", "dials", "diane", "diazo", "dibbs", "diced", "dicer", "dices", "dicht", "dicks", "dicky", "dicot", "dicta", "dicts", "dicty", "diddy", "didie", "didos", "didst", "diebs", "diels", "diene", "diets", "diffs", "dight", "dikas", "diked", "diker", "dikes", "dikey", "dildo", "dilli", "dills", "dimbo", "dimer", "dimes", "dimps", "dinar", "dined", "dines", "dinge", "dings", "dinic", "dinks", "dinky", "dinna", "dinos", "dints", "diols", "diota", "dippy", "dipso", "diram", "direr", "dirke", "dirks", "dirls", "dirts", "disas", "disci", "discs", "dishy", "disks", "disme", "dital", "ditas", "dited", "dites", "ditsy", "ditts", "ditzy", "divan", "divas", "dived", "dives", "divis", "divna", "divos", "divot", "divvy", "diwan", "dixie", "dixit", "diyas", "dizen", "djinn", "djins", "doabs", "doats", "dobby", "dobes", "dobie", "dobla", "dobra", "dobro", "docht", "docks", "docos", "docus", "doddy", "dodos", "doeks", "doers", "doest", "doeth", "doffs", "dogan", "doges", "dogey", "doggo", "doggy", "dogie", "dohyo", "doilt", "doily", "doits", "dojos", "dolce", "dolci", "doled", "doles", "dolia", "dolls", "dolma", "dolor", "dolos", "dolts", "domal", "domed", "domes", "domic", "donah", "donas", "donee", "doner", "donga", "dongs", "donko", "donna", "donne", "donny", "donsy", "doobs", "dooce", "doody", "dooks", "doole", "dools", "dooly", "dooms", "doomy", "doona", "doorn", "doors", "doozy", "dopas", "doped", "doper", "dopes", "dorad", "dorba", "dorbs", "doree", "dores", "doric", "doris", "dorks", "dorky", "dorms", "dormy", "dorps", "dorrs", "dorsa", "dorse", "dorts", "dorty", "dosai", "dosas", "dosed", "doseh", "doser", "doses", "dosha", "dotal", "doted", "doter", "dotes", "dotty", "douar", "douce", "doucs", "douks", "doula", "douma", "doums", "doups", "doura", "douse", "douts", "doved", "doven", "dover", "doves", "dovie", "dowar", "dowds", "dowed", "dower", "dowie", "dowle", "dowls", "dowly", "downa", "downs", "dowps", "dowse", "dowts", "doxed", "doxes", "doxie", "doyen", "doyly", "dozed", "dozer", "dozes", "drabs", "drack", "draco", "draff", "drags", "drail", "drams", "drant", "draps", "drats", "drave", "draws", "drays", "drear", "dreck", "dreed", "dreer", "drees", "dregs", "dreks", "drent", "drere", "drest", "dreys", "dribs", "drice", "dries", "drily", "drips", "dript", "droid", "droil", "droke", "drole", "drome", "drony", "droob", "droog", "drook", "drops", "dropt", "drouk", "drows", "drubs", "drugs", "drums", "drupe", "druse", "drusy", "druxy", "dryad", "dryas", "dsobo", "dsomo", "duads", "duals", "duans", "duars", "dubbo", "ducal", "ducat", "duces", "ducks", "ducky", "ducts", "duddy", "duded", "dudes", "duels", "duets", "duett", "duffs", "dufus", "duing", "duits", "dukas", "duked", "dukes", "dukka", "dulce", "dules", "dulia", "dulls", "dulse", "dumas", "dumbo", "dumbs", "dumka", "dumky", "dumps", "dunam", "dunch", "dunes", "dungs", "dungy", "dunks", "dunno", "dunny", "dunsh", "dunts", "duomi", "duomo", "duped", "duper", "dupes", "duple", "duply", "duppy", "dural", "duras", "dured", "dures", "durgy", "durns", "duroc", "duros", "duroy", "durra", "durrs", "durry", "durst", "durum", "durzi", "dusks", "dusts", "duxes", "dwaal", "dwale", "dwalm", "dwams", "dwang", "dwaum", "dweeb", "dwile", "dwine", "dyads", "dyers", "dyked", "dykes", "dykey", "dykon", "dynel", "dynes", "dzhos", "eagre", "ealed", "eales", "eaned", "eards", "eared", "earls", "earns", "earnt", "earst", "eased", "easer", "eases", "easle", "easts", "eathe", "eaved", "eaves", "ebbed", "ebbet", "ebons", "ebook", "ecads", "eched", "eches", "echos", "ecrus", "edema", "edged", "edger", "edges", "edile", "edits", "educe", "educt", "eejit", "eensy", "eeven", "eevns", "effed", "egads", "egers", "egest", "eggar", "egged", "egger", "egmas", "ehing", "eider", "eidos", "eigne", "eiked", "eikon", "eilds", "eisel", "ejido", "ekkas", "elain", "eland", "elans", "elchi", "eldin", "elemi", "elfed", "eliad", "elint", "elmen", "eloge", "elogy", "eloin", "elops", "elpee", "elsin", "elute", "elvan", "elven", "elver", "elves", "emacs", "embar", "embay", "embog", "embow", "embox", "embus", "emeer", "emend", "emerg", "emery", "emeus", "emics", "emirs", "emits", "emmas", "emmer", "emmet", "emmew", "emmys", "emoji", "emong", "emote", "emove", "empts", "emule", "emure", "emyde", "emyds", "enarm", "enate", "ended", "ender", "endew", "endue", "enews", "enfix", "eniac", "enlit", "enmew", "ennog", "enoki", "enols", "enorm", "enows", "enrol", "ensew", "ensky", "entia", "enure", "enurn", "envoi", "enzym", "eorls", "eosin", "epact", "epees", "ephah", "ephas", "ephod", "ephor", "epics", "epode", "epopt", "epris", "eques", "equid", "erbia", "erevs", "ergon", "ergos", "ergot", "erhus", "erica", "erick", "erics", "ering", "erned", "ernes", "erose", "erred", "erses", "eruct", "erugo", "eruvs", "erven", "ervil", "escar", "escot", "esile", "eskar", "esker", "esnes", "esses", "estoc", "estop", "estro", "etage", "etape", "etats", "etens", "ethal", "ethne", "ethyl", "etics", "etnas", "ettin", "ettle", "etuis", "etwee", "etyma", "eughs", "euked", "eupad", "euros", "eusol", "evens", "evert", "evets", "evhoe", "evils", "evite", "evohe", "ewers", "ewest", "ewhow", "ewked", "exams", "exeat", "execs", "exeem", "exeme", "exfil", "exies", "exine", "exing", "exits", "exode", "exome", "exons", "expat", "expos", "exude", "exuls", "exurb", "eyass", "eyers", "eyots", "eyras", "eyres", "eyrie", "eyrir", "ezine", "fabby", "faced", "facer", "faces", "facia", "facta", "facts", "faddy", "faded", "fader", "fades", "fadge", "fados", "faena", "faery", "faffs", "faffy", "faggy", "fagin", "fagot", "faiks", "fails", "faine", "fains", "fairs", "faked", "faker", "fakes", "fakey", "fakie", "fakir", "falaj", "falls", "famed", "fames", "fanal", "fands", "fanes", "fanga", "fango", "fangs", "fanks", "fanon", "fanos", "fanum", "faqir", "farad", "farci", "farcy", "fards", "fared", "farer", "fares", "farle", "farls", "farms", "faros", "farro", "farse", "farts", "fasci", "fasti", "fasts", "fated", "fates", "fatly", "fatso", "fatwa", "faugh", "fauld", "fauns", "faurd", "fauts", "fauve", "favas", "favel", "faver", "faves", "favus", "fawns", "fawny", "faxed", "faxes", "fayed", "fayer", "fayne", "fayre", "fazed", "fazes", "feals", "feare", "fears", "feart", "fease", "feats", "feaze", "feces", "fecht", "fecit", "fecks", "fedex", "feebs", "feeds", "feels", "feens", "feers", "feese", "feeze", "fehme", "feint", "feist", "felch", "felid", "fells", "felly", "felts", "felty", "femal", "femes", "femmy", "fends", "fendy", "fenis", "fenks", "fenny", "fents", "feods", "feoff", "ferer", "feres", "feria", "ferly", "fermi", "ferms", "ferns", "ferny", "fesse", "festa", "fests", "festy", "fetas", "feted", "fetes", "fetor", "fetta", "fetts", "fetwa", "feuar", "feuds", "feued", "feyed", "feyer", "feyly", "fezes", "fezzy", "fiars", "fiats", "fibro", "fices", "fiche", "fichu", "ficin", "ficos", "fides", "fidge", "fidos", "fiefs", "fient", "fiere", "fiers", "fiest", "fifed", "fifer", "fifes", "fifis", "figgy", "figos", "fiked", "fikes", "filar", "filch", "filed", "files", "filii", "filks", "fille", "fillo", "fills", "filmi", "films", "filos", "filum", "finca", "finds", "fined", "fines", "finis", "finks", "finny", "finos", "fiord", "fiqhs", "fique", "fired", "firer", "fires", "firie", "firks", "firms", "firns", "firry", "firth", "fiscs", "fisks", "fists", "fisty", "fitch", "fitly", "fitna", "fitte", "fitts", "fiver", "fives", "fixed", "fixes", "fixit", "fjeld", "flabs", "flaff", "flags", "flaks", "flamm", "flams", "flamy", "flane", "flans", "flaps", "flary", "flats", "flava", "flawn", "flaws", "flawy", "flaxy", "flays", "fleam", "fleas", "fleek", "fleer", "flees", "flegs", "fleme", "fleur", "flews", "flexi", "flexo", "fleys", "flics", "flied", "flies", "flimp", "flims", "flips", "flirs", "flisk", "flite", "flits", "flitt", "flobs", "flocs", "floes", "flogs", "flong", "flops", "flors", "flory", "flosh", "flota", "flote", "flows", "flubs", "flued", "flues", "fluey", "fluky", "flump", "fluor", "flurr", "fluty", "fluyt", "flyby", "flype", "flyte", "foals", "foams", "foehn", "fogey", "fogie", "fogle", "fogou", "fohns", "foids", "foils", "foins", "folds", "foley", "folia", "folic", "folie", "folks", "folky", "fomes", "fonda", "fonds", "fondu", "fones", "fonly", "fonts", "foods", "foody", "fools", "foots", "footy", "foram", "forbs", "forby", "fordo", "fords", "forel", "fores", "forex", "forks", "forky", "forme", "forms", "forts", "forza", "forze", "fossa", "fosse", "fouat", "fouds", "fouer", "fouet", "foule", "fouls", "fount", "fours", "fouth", "fovea", "fowls", "fowth", "foxed", "foxes", "foxie", "foyle", "foyne", "frabs", "frack", "fract", "frags", "fraim", "franc", "frape", "fraps", "frass", "frate", "frati", "frats", "fraus", "frays", "frees", "freet", "freit", "fremd", "frena", "freon", "frere", "frets", "fribs", "frier", "fries", "frigs", "frise", "frist", "frith", "frits", "fritt", "frize", "frizz", "froes", "frogs", "frons", "frore", "frorn", "frory", "frosh", "frows", "frowy", "frugs", "frump", "frush", "frust", "fryer", "fubar", "fubby", "fubsy", "fucks", "fucus", "fuddy", "fudgy", "fuels", "fuero", "fuffs", "fuffy", "fugal", "fuggy", "fugie", "fugio", "fugle", "fugly", "fugus", "fujis", "fulls", "fumed", "fumer", "fumes", "fumet", "fundi", "funds", "fundy", "fungo", "fungs", "funks", "fural", "furan", "furca", "furls", "furol", "furrs", "furth", "furze", "furzy", "fused", "fusee", "fusel", "fuses", "fusil", "fusks", "fusts", "fusty", "futon", "fuzed", "fuzee", "fuzes", "fuzil", "fyces", "fyked", "fykes", "fyles", "fyrds", "fytte", "gabba", "gabby", "gable", "gaddi", "gades", "gadge", "gadid", "gadis", "gadje", "gadjo", "gadso", "gaffs", "gaged", "gager", "gages", "gaids", "gains", "gairs", "gaita", "gaits", "gaitt", "gajos", "galah", "galas", "galax", "galea", "galed", "gales", "galls", "gally", "galop", "galut", "galvo", "gamas", "gamay", "gamba", "gambe", "gambo", "gambs", "gamed", "games", "gamey", "gamic", "gamin", "gamme", "gammy", "gamps", "ganch", "gandy", "ganef", "ganev", "gangs", "ganja", "ganof", "gants", "gaols", "gaped", "gaper", "gapes", "gapos", "gappy", "garbe", "garbo", "garbs", "garda", "gares", "garis", "garms", "garni", "garre", "garth", "garum", "gases", "gasps", "gaspy", "gasts", "gatch", "gated", "gater", "gates", "gaths", "gator", "gauch", "gaucy", "gauds", "gauje", "gault", "gaums", "gaumy", "gaups", "gaurs", "gauss", "gauzy", "gavot", "gawcy", "gawds", "gawks", "gawps", "gawsy", "gayal", "gazal", "gazar", "gazed", "gazes", "gazon", "gazoo", "geals", "geans", "geare", "gears", "geats", "gebur", "gecks", "geeks", "geeps", "geest", "geist", "geits", "gelds", "gelee", "gelid", "gelly", "gelts", "gemel", "gemma", "gemmy", "gemot", "genal", "genas", "genes", "genet", "genic", "genii", "genip", "genny", "genoa", "genom", "genro", "gents", "genty", "genua", "genus", "geode", "geoid", "gerah", "gerbe", "geres", "gerle", "germs", "germy", "gerne", "gesse", "gesso", "geste", "gests", "getas", "getup", "geums", "geyan", "geyer", "ghast", "ghats", "ghaut", "ghazi", "ghees", "ghest", "ghyll", "gibed", "gibel", "giber", "gibes", "gibli", "gibus", "gifts", "gigas", "gighe", "gigot", "gigue", "gilas", "gilds", "gilet", "gills", "gilly", "gilpy", "gilts", "gimel", "gimme", "gimps", "gimpy", "ginch", "ginge", "gings", "ginks", "ginny", "ginzo", "gipon", "gippo", "gippy", "girds", "girls", "girns", "giron", "giros", "girrs", "girsh", "girts", "gismo", "gisms", "gists", "gitch", "gites", "giust", "gived", "gives", "gizmo", "glace", "glads", "glady", "glaik", "glair", "glams", "glans", "glary", "glaum", "glaur", "glazy", "gleba", "glebe", "gleby", "glede", "gleds", "gleed", "gleek", "glees", "gleet", "gleis", "glens", "glent", "gleys", "glial", "glias", "glibs", "gliff", "glift", "glike", "glime", "glims", "glisk", "glits", "glitz", "gloam", "globi", "globs", "globy", "glode", "glogg", "gloms", "gloop", "glops", "glost", "glout", "glows", "gloze", "glued", "gluer", "glues", "gluey", "glugs", "glume", "glums", "gluon", "glute", "gluts", "gnarl", "gnarr", "gnars", "gnats", "gnawn", "gnaws", "gnows", "goads", "goafs", "goals", "goary", "goats", "goaty", "goban", "gobar", "gobbi", "gobbo", "gobby", "gobis", "gobos", "godet", "godso", "goels", "goers", "goest", "goeth", "goety", "gofer", "goffs", "gogga", "gogos", "goier", "gojis", "golds", "goldy", "goles", "golfs", "golpe", "golps", "gombo", "gomer", "gompa", "gonch", "gonef", "gongs", "gonia", "gonif", "gonks", "gonna", "gonof", "gonys", "gonzo", "gooby", "goods", "goofs", "googs", "gooks", "gooky", "goold", "gools", "gooly", "goons", "goony", "goops", "goopy", "goors", "goory", "goosy", "gopak", "gopik", "goral", "goras", "gored", "gores", "goris", "gorms", "gormy", "gorps", "gorse", "gorsy", "gosht", "gosse", "gotch", "goths", "gothy", "gotta", "gouch", "gouks", "goura", "gouts", "gouty", "gowan", "gowds", "gowfs", "gowks", "gowls", "gowns", "goxes", "goyim", "goyle", "graal", "grabs", "grads", "graff", "graip", "grama", "grame", "gramp", "grams", "grana", "grans", "grapy", "gravs", "grays", "grebe", "grebo", "grece", "greek", "grees", "grege", "grego", "grein", "grens", "grese", "greve", "grews", "greys", "grice", "gride", "grids", "griff", "grift", "grigs", "grike", "grins", "griot", "grips", "gript", "gripy", "grise", "grist", "grisy", "grith", "grits", "grize", "groat", "grody", "grogs", "groks", "groma", "grone", "groof", "grosz", "grots", "grouf", "grovy", "grows", "grrls", "grrrl", "grubs", "grued", "grues", "grufe", "grume", "grump", "grund", "gryce", "gryde", "gryke", "grype", "grypt", "guaco", "guana", "guano", "guans", "guars", "gucks", "gucky", "gudes", "guffs", "gugas", "guids", "guimp", "guiro", "gulag", "gular", "gulas", "gules", "gulet", "gulfs", "gulfy", "gulls", "gulph", "gulps", "gulpy", "gumma", "gummi", "gumps", "gundy", "gunge", "gungy", "gunks", "gunky", "gunny", "guqin", "gurdy", "gurge", "gurls", "gurly", "gurns", "gurry", "gursh", "gurus", "gushy", "gusla", "gusle", "gusli", "gussy", "gusts", "gutsy", "gutta", "gutty", "guyed", "guyle", "guyot", "guyse", "gwine", "gyals", "gyans", "gybed", "gybes", "gyeld", "gymps", "gynae", "gynie", "gynny", "gynos", "gyoza", "gypos", "gyppo", "gyppy", "gyral", "gyred", "gyres", "gyron", "gyros", "gyrus", "gytes", "gyved", "gyves", "haafs", "haars", "hable", "habus", "hacek", "hacks", "hadal", "haded", "hades", "hadji", "hadst", "haems", "haets", "haffs", "hafiz", "hafts", "haggs", "hahas", "haick", "haika", "haiks", "haiku", "hails", "haily", "hains", "haint", "hairs", "haith", "hajes", "hajis", "hajji", "hakam", "hakas", "hakea", "hakes", "hakim", "hakus", "halal", "haled", "haler", "hales", "halfa", "halfs", "halid", "hallo", "halls", "halma", "halms", "halon", "halos", "halse", "halts", "halva", "halwa", "hamal", "hamba", "hamed", "hames", "hammy", "hamza", "hanap", "hance", "hanch", "hands", "hangi", "hangs", "hanks", "hanky", "hansa", "hanse", "hants", "haole", "haoma", "hapax", "haply", "happi", "hapus", "haram", "hards", "hared", "hares", "harim", "harks", "harls", "harms", "harns", "haros", "harps", "harts", "hashy", "hasks", "hasps", "hasta", "hated", "hates", "hatha", "hauds", "haufs", "haugh", "hauld", "haulm", "hauls", "hault", "hauns", "hause", "haver", "haves", "hawed", "hawks", "hawms", "hawse", "hayed", "hayer", "hayey", "hayle", "hazan", "hazed", "hazer", "hazes", "heads", "heald", "heals", "heame", "heaps", "heapy", "heare", "hears", "heast", "heats", "heben", "hebes", "hecht", "hecks", "heder", "hedgy", "heeds", "heedy", "heels", "heeze", "hefte", "hefts", "heids", "heigh", "heils", "heirs", "hejab", "hejra", "heled", "heles", "helio", "hells", "helms", "helos", "helot", "helps", "helve", "hemal", "hemes", "hemic", "hemin", "hemps", "hempy", "hench", "hends", "henge", "henna", "henny", "henry", "hents", "hepar", "herbs", "herby", "herds", "heres", "herls", "herma", "herms", "herns", "heros", "herry", "herse", "hertz", "herye", "hesps", "hests", "hetes", "heths", "heuch", "heugh", "hevea", "hewed", "hewer", "hewgh", "hexad", "hexed", "hexer", "hexes", "hexyl", "heyed", "hiant", "hicks", "hided", "hider", "hides", "hiems", "highs", "hight", "hijab", "hijra", "hiked", "hiker", "hikes", "hikoi", "hilar", "hilch", "hillo", "hills", "hilts", "hilum", "hilus", "himbo", "hinau", "hinds", "hings", "hinky", "hinny", "hints", "hiois", "hiply", "hired", "hiree", "hirer", "hires", "hissy", "hists", "hithe", "hived", "hiver", "hives", "hizen", "hoaed", "hoagy", "hoars", "hoary", "hoast", "hobos", "hocks", "hocus", "hodad", "hodja", "hoers", "hogan", "hogen", "hoggs", "hoghs", "hohed", "hoick", "hoied", "hoiks", "hoing", "hoise", "hokas", "hoked", "hokes", "hokey", "hokis", "hokku", "hokum", "holds", "holed", "holes", "holey", "holks", "holla", "hollo", "holme", "holms", "holon", "holos", "holts", "homas", "homed", "homes", "homey", "homie", "homme", "homos", "honan", "honda", "honds", "honed", "honer", "hones", "hongi", "hongs", "honks", "honky", "hooch", "hoods", "hoody", "hooey", "hoofs", "hooka", "hooks", "hooky", "hooly", "hoons", "hoops", "hoord", "hoors", "hoosh", "hoots", "hooty", "hoove", "hopak", "hoped", "hoper", "hopes", "hoppy", "horah", "horal", "horas", "horis", "horks", "horme", "horns", "horst", "horsy", "hosed", "hosel", "hosen", "hoser", "hoses", "hosey", "hosta", "hosts", "hotch", "hoten", "hotty", "houff", "houfs", "hough", "houri", "hours", "houts", "hovea", "hoved", "hoven", "hoves", "howbe", "howes", "howff", "howfs", "howks", "howls", "howre", "howso", "hoxed", "hoxes", "hoyas", "hoyed", "hoyle", "hubby", "hucks", "hudna", "hudud", "huers", "huffs", "huffy", "huger", "huggy", "huhus", "huias", "hulas", "hules", "hulks", "hulky", "hullo", "hulls", "hully", "humas", "humfs", "humic", "humps", "humpy", "hunks", "hunts", "hurds", "hurls", "hurly", "hurra", "hurst", "hurts", "hushy", "husks", "husos", "hutia", "huzza", "huzzy", "hwyls", "hydra", "hyens", "hygge", "hying", "hykes", "hylas", "hyleg", "hyles", "hylic", "hymns", "hynde", "hyoid", "hyped", "hypes", "hypha", "hyphy", "hypos", "hyrax", "hyson", "hythe", "iambi", "iambs", "ibrik", "icers", "iched", "iches", "ichor", "icier", "icker", "ickle", "icons", "ictal", "ictic", "ictus", "idant", "ideas", "idees", "ident", "idled", "idles", "idola", "idols", "idyls", "iftar", "igapo", "igged", "iglus", "ihram", "ikans", "ikats", "ikons", "ileac", "ileal", "ileum", "ileus", "iliad", "ilial", "ilium", "iller", "illth", "imago", "imams", "imari", "imaum", "imbar", "imbed", "imide", "imido", "imids", "imine", "imino", "immew", "immit", "immix", "imped", "impis", "impot", "impro", "imshi", "imshy", "inapt", "inarm", "inbye", "incel", "incle", "incog", "incus", "incut", "indew", "india", "indie", "indol", "indow", "indri", "indue", "inerm", "infix", "infos", "infra", "ingan", "ingle", "inion", "inked", "inker", "inkle", "inned", "innit", "inorb", "inrun", "inset", "inspo", "intel", "intil", "intis", "intra", "inula", "inure", "inurn", "inust", "invar", "inwit", "iodic", "iodid", "iodin", "iotas", "ippon", "irade", "irids", "iring", "irked", "iroko", "irone", "irons", "isbas", "ishes", "isled", "isles", "isnae", "issei", "istle", "items", "ither", "ivied", "ivies", "ixias", "ixnay", "ixora", "ixtle", "izard", "izars", "izzat", "jaaps", "jabot", "jacal", "jacks", "jacky", "jaded", "jades", "jafas", "jaffa", "jagas", "jager", "jaggs", "jaggy", "jagir", "jagra", "jails", "jaker", "jakes", "jakey", "jalap", "jalop", "jambe", "jambo", "jambs", "jambu", "james", "jammy", "jamon", "janes", "janns", "janny", "janty", "japan", "japed", "japer", "japes", "jarks", "jarls", "jarps", "jarta", "jarul", "jasey", "jaspe", "jasps", "jatos", "jauks", "jaups", "javas", "javel", "jawan", "jawed", "jaxie", "jeans", "jeats", "jebel", "jedis", "jeels", "jeely", "jeeps", "jeers", "jeeze", "jefes", "jeffs", "jehad", "jehus", "jelab", "jello", "jells", "jembe", "jemmy", "jenny", "jeons", "jerid", "jerks", "jerry", "jesse", "jests", "jesus", "jetes", "jeton", "jeune", "jewed", "jewie", "jhala", "jiaos", "jibba", "jibbs", "jibed", "jiber", "jibes", "jiffs", "jiggy", "jigot", "jihad", "jills", "jilts", "jimmy", "jimpy", "jingo", "jinks", "jinne", "jinni", "jinns", "jirds", "jirga", "jirre", "jisms", "jived", "jiver", "jives", "jivey", "jnana", "jobed", "jobes", "jocko", "jocks", "jocky", "jocos", "jodel", "joeys", "johns", "joins", "joked", "jokes", "jokey", "jokol", "joled", "joles", "jolls", "jolts", "jolty", "jomon", "jomos", "jones", "jongs", "jonty", "jooks", "joram", "jorum", "jotas", "jotty", "jotun", "joual", "jougs", "jouks", "joule", "jours", "jowar", "jowed", "jowls", "jowly", "joyed", "jubas", "jubes", "jucos", "judas", "judgy", "judos", "jugal", "jugum", "jujus", "juked", "jukes", "jukus", "julep", "jumar", "jumby", "jumps", "junco", "junks", "junky", "jupes", "jupon", "jural", "jurat", "jurel", "jures", "justs", "jutes", "jutty", "juves", "juvie", "kaama", "kabab", "kabar", "kabob", "kacha", "kacks", "kadai", "kades", "kadis", "kafir", "kagos", "kagus", "kahal", "kaiak", "kaids", "kaies", "kaifs", "kaika", "kaiks", "kails", "kaims", "kaing", "kains", "kakas", "kakis", "kalam", "kales", "kalif", "kalis", "kalpa", "kamas", "kames", "kamik", "kamis", "kamme", "kanae", "kanas", "kandy", "kaneh", "kanes", "kanga", "kangs", "kanji", "kants", "kanzu", "kaons", "kapas", "kaphs", "kapok", "kapow", "kapus", "kaput", "karas", "karat", "karks", "karns", "karoo", "karos", "karri", "karst", "karsy", "karts", "karzy", "kasha", "kasme", "katal", "katas", "katis", "katti", "kaugh", "kauri", "kauru", "kaury", "kaval", "kavas", "kawas", "kawau", "kawed", "kayle", "kayos", "kazis", "kazoo", "kbars", "kebar", "kebob", "kecks", "kedge", "kedgy", "keech", "keefs", "keeks", "keels", "keema", "keeno", "keens", "keeps", "keets", "keeve", "kefir", "kehua", "keirs", "kelep", "kelim", "kells", "kelly", "kelps", "kelpy", "kelts", "kelty", "kembo", "kembs", "kemps", "kempt", "kempy", "kenaf", "kench", "kendo", "kenos", "kente", "kents", "kepis", "kerbs", "kerel", "kerfs", "kerky", "kerma", "kerne", "kerns", "keros", "kerry", "kerve", "kesar", "kests", "ketas", "ketch", "ketes", "ketol", "kevel", "kevil", "kexes", "keyed", "keyer", "khadi", "khafs", "khans", "khaph", "khats", "khaya", "khazi", "kheda", "kheth", "khets", "khoja", "khors", "khoum", "khuds", "kiaat", "kiack", "kiang", "kibbe", "kibbi", "kibei", "kibes", "kibla", "kicks", "kicky", "kiddo", "kiddy", "kidel", "kidge", "kiefs", "kiers", "kieve", "kievs", "kight", "kikes", "kikoi", "kiley", "kilim", "kills", "kilns", "kilos", "kilps", "kilts", "kilty", "kimbo", "kinas", "kinda", "kinds", "kindy", "kines", "kings", "kinin", "kinks", "kinos", "kiore", "kipes", "kippa", "kipps", "kirby", "kirks", "kirns", "kirri", "kisan", "kissy", "kists", "kited", "kiter", "kites", "kithe", "kiths", "kitul", "kivas", "kiwis", "klang", "klaps", "klett", "klick", "klieg", "kliks", "klong", "kloof", "kluge", "klutz", "knags", "knaps", "knarl", "knars", "knaur", "knawe", "knees", "knell", "knish", "knits", "knive", "knobs", "knops", "knosp", "knots", "knout", "knowe", "knows", "knubs", "knurl", "knurr", "knurs", "knuts", "koans", "koaps", "koban", "kobos", "koels", "koffs", "kofta", "kogal", "kohas", "kohen", "kohls", "koine", "kojis", "kokam", "kokas", "koker", "kokra", "kokum", "kolas", "kolos", "kombu", "konbu", "kondo", "konks", "kooks", "kooky", "koori", "kopek", "kophs", "kopje", "koppa", "korai", "koras", "korat", "kores", "korma", "koros", "korun", "korus", "koses", "kotch", "kotos", "kotow", "koura", "kraal", "krabs", "kraft", "krais", "krait", "krang", "krans", "kranz", "kraut", "krays", "kreep", "kreng", "krewe", "krona", "krone", "kroon", "krubi", "krunk", "ksars", "kubie", "kudos", "kudus", "kudzu", "kufis", "kugel", "kuias", "kukri", "kukus", "kulak", "kulan", "kulas", "kulfi", "kumis", "kumys", "kuris", "kurre", "kurta", "kurus", "kusso", "kutas", "kutch", "kutis", "kutus", "kuzus", "kvass", "kvell", "kwela", "kyack", "kyaks", "kyang", "kyars", "kyats", "kybos", "kydst", "kyles", "kylie", "kylin", "kylix", "kyloe", "kynde", "kynds", "kypes", "kyrie", "kytes", "kythe", "laari", "labda", "labia", "labis", "labra", "laced", "lacer", "laces", "lacet", "lacey", "lacks", "laddy", "laded", "lader", "lades", "laers", "laevo", "lagan", "lahal", "lahar", "laich", "laics", "laids", "laigh", "laika", "laiks", "laird", "lairs", "lairy", "laith", "laity", "laked", "laker", "lakes", "lakhs", "lakin", "laksa", "laldy", "lalls", "lamas", "lambs", "lamby", "lamed", "lamer", "lames", "lamia", "lammy", "lamps", "lanai", "lanas", "lanch", "lande", "lands", "lanes", "lanks", "lants", "lapin", "lapis", "lapje", "larch", "lards", "lardy", "laree", "lares", "largo", "laris", "larks", "larky", "larns", "larnt", "larum", "lased", "laser", "lases", "lassi", "lassu", "lassy", "lasts", "latah", "lated", "laten", "latex", "lathi", "laths", "lathy", "latke", "latus", "lauan", "lauch", "lauds", "laufs", "laund", "laura", "laval", "lavas", "laved", "laver", "laves", "lavra", "lavvy", "lawed", "lawer", "lawin", "lawks", "lawns", "lawny", "laxed", "laxer", "laxes", "laxly", "layed", "layin", "layup", "lazar", "lazed", "lazes", "lazos", "lazzi", "lazzo", "leads", "leady", "leafs", "leaks", "leams", "leans", "leany", "leaps", "leare", "lears", "leary", "leats", "leavy", "leaze", "leben", "leccy", "ledes", "ledgy", "ledum", "leear", "leeks", "leeps", "leers", "leese", "leets", "leeze", "lefte", "lefts", "leger", "leges", "legge", "leggo", "legit", "lehrs", "lehua", "leirs", "leish", "leman", "lemed", "lemel", "lemes", "lemma", "lemme", "lends", "lenes", "lengs", "lenis", "lenos", "lense", "lenti", "lento", "leone", "lepid", "lepra", "lepta", "lered", "leres", "lerps", "lesbo", "leses", "lests", "letch", "lethe", "letup", "leuch", "leuco", "leuds", "leugh", "levas", "levee", "leves", "levin", "levis", "lewis", "lexes", "lexis", "lezes", "lezza", "lezzy", "liana", "liane", "liang", "liard", "liars", "liart", "liber", "libra", "libri", "lichi", "licht", "licit", "licks", "lidar", "lidos", "liefs", "liens", "liers", "lieus", "lieve", "lifer", "lifes", "lifts", "ligan", "liger", "ligge", "ligne", "liked", "liker", "likes", "likin", "lills", "lilos", "lilts", "liman", "limas", "limax", "limba", "limbi", "limbs", "limby", "limed", "limen", "limes", "limey", "limma", "limns", "limos", "limpa", "limps", "linac", "linch", "linds", "lindy", "lined", "lines", "liney", "linga", "lings", "lingy", "linin", "links", "linky", "linns", "linny", "linos", "lints", "linty", "linum", "linux", "lions", "lipas", "lipes", "lipin", "lipos", "lippy", "liras", "lirks", "lirot", "lisks", "lisle", "lisps", "lists", "litai", "litas", "lited", "liter", "lites", "litho", "liths", "litre", "lived", "liven", "lives", "livor", "livre", "llano", "loach", "loads", "loafs", "loams", "loans", "loast", "loave", "lobar", "lobed", "lobes", "lobos", "lobus", "loche", "lochs", "locie", "locis", "locks", "locos", "locum", "loden", "lodes", "loess", "lofts", "logan", "loges", "loggy", "logia", "logie", "logoi", "logon", "logos", "lohan", "loids", "loins", "loipe", "loirs", "lokes", "lolls", "lolly", "lolog", "lomas", "lomed", "lomes", "loner", "longa", "longe", "longs", "looby", "looed", "looey", "loofa", "loofs", "looie", "looks", "looky", "looms", "loons", "loony", "loops", "loord", "loots", "loped", "loper", "lopes", "loppy", "loral", "loran", "lords", "lordy", "lorel", "lores", "loric", "loris", "losed", "losel", "losen", "loses", "lossy", "lotah", "lotas", "lotes", "lotic", "lotos", "lotsa", "lotta", "lotte", "lotto", "lotus", "loued", "lough", "louie", "louis", "louma", "lound", "louns", "loupe", "loups", "loure", "lours", "loury", "louts", "lovat", "loved", "loves", "lovey", "lovie", "lowan", "lowed", "lowes", "lownd", "lowne", "lowns", "lowps", "lowry", "lowse", "lowts", "loxed", "loxes", "lozen", "luach", "luaus", "lubed", "lubes", "lubra", "luces", "lucks", "lucre", "ludes", "ludic", "ludos", "luffa", "luffs", "luged", "luger", "luges", "lulls", "lulus", "lumas", "lumbi", "lumme", "lummy", "lumps", "lunas", "lunes", "lunet", "lungi", "lungs", "lunks", "lunts", "lupin", "lured", "lurer", "lures", "lurex", "lurgi", "lurgy", "lurks", "lurry", "lurve", "luser", "lushy", "lusks", "lusts", "lusus", "lutea", "luted", "luter", "lutes", "luvvy", "luxed", "luxer", "luxes", "lweis", "lyams", "lyard", "lyart", "lyase", "lycea", "lycee", "lycra", "lymes", "lynes", "lyres", "lysed", "lyses", "lysin", "lysis", "lysol", "lyssa", "lyted", "lytes", "lythe", "lytic", "lytta", "maaed", "maare", "maars", "mabes", "macas", "maced", "macer", "maces", "mache", "machi", "machs", "macks", "macle", "macon", "madge", "madid", "madre", "maerl", "mafic", "mages", "maggs", "magot", "magus", "mahoe", "mahua", "mahwa", "maids", "maiko", "maiks", "maile", "maill", "mails", "maims", "mains", "maire", "mairs", "maise", "maist", "makar", "makes", "makis", "makos", "malam", "malar", "malas", "malax", "males", "malic", "malik", "malis", "malls", "malms", "malmy", "malts", "malty", "malus", "malva", "malwa", "mamas", "mamba", "mamee", "mamey", "mamie", "manas", "manat", "mandi", "maneb", "maned", "maneh", "manes", "manet", "mangs", "manis", "manky", "manna", "manos", "manse", "manta", "manto", "manty", "manul", "manus", "mapau", "maqui", "marae", "marah", "maras", "marcs", "mardy", "mares", "marge", "margs", "maria", "marid", "marka", "marks", "marle", "marls", "marly", "marms", "maron", "maror", "marra", "marri", "marse", "marts", "marvy", "masas", "mased", "maser", "mases", "mashy", "masks", "massa", "massy", "masts", "masty", "masus", "matai", "mated", "mater", "mates", "maths", "matin", "matlo", "matte", "matts", "matza", "matzo", "mauby", "mauds", "mauls", "maund", "mauri", "mausy", "mauts", "mauzy", "maven", "mavie", "mavin", "mavis", "mawed", "mawks", "mawky", "mawns", "mawrs", "maxed", "maxes", "maxis", "mayan", "mayas", "mayed", "mayos", "mayst", "mazed", "mazer", "mazes", "mazey", "mazut", "mbira", "meads", "meals", "meane", "means", "meany", "meare", "mease", "meath", "meats", "mebos", "mechs", "mecks", "medii", "medle", "meeds", "meers", "meets", "meffs", "meins", "meint", "meiny", "meith", "mekka", "melas", "melba", "melds", "melic", "melik", "mells", "melts", "melty", "memes", "memos", "menad", "mends", "mened", "menes", "menge", "mengs", "mensa", "mense", "mensh", "menta", "mento", "menus", "meous", "meows", "merch", "mercs", "merde", "mered", "merel", "merer", "meres", "meril", "meris", "merks", "merle", "merls", "merse", "mesal", "mesas", "mesel", "meses", "meshy", "mesic", "mesne", "meson", "messy", "mesto", "meted", "metes", "metho", "meths", "metic", "metif", "metis", "metol", "metre", "meuse", "meved", "meves", "mewed", "mewls", "meynt", "mezes", "mezze", "mezzo", "mhorr", "miaou", "miaow", "miasm", "miaul", "micas", "miche", "micht", "micks", "micky", "micos", "micra", "middy", "midgy", "midis", "miens", "mieve", "miffs", "miffy", "mifty", "miggs", "mihas", "mihis", "miked", "mikes", "mikra", "mikva", "milch", "milds", "miler", "miles", "milfs", "milia", "milko", "milks", "mille", "mills", "milor", "milos", "milpa", "milts", "milty", "miltz", "mimed", "mimeo", "mimer", "mimes", "mimsy", "minae", "minar", "minas", "mincy", "minds", "mined", "mines", "minge", "mings", "mingy", "minis", "minke", "minks", "minny", "minos", "mints", "mired", "mires", "mirex", "mirid", "mirin", "mirks", "mirky", "mirly", "miros", "mirvs", "mirza", "misch", "misdo", "mises", "misgo", "misos", "missa", "mists", "misty", "mitch", "miter", "mites", "mitis", "mitre", "mitts", "mixed", "mixen", "mixer", "mixes", "mixte", "mixup", "mizen", "mizzy", "mneme", "moans", "moats", "mobby", "mobes", "mobey", "mobie", "moble", "mochi", "mochs", "mochy", "mocks", "moder", "modes", "modge", "modii", "modus", "moers", "mofos", "moggy", "mohel", "mohos", "mohrs", "mohua", "mohur", "moile", "moils", "moira", "moire", "moits", "mojos", "mokes", "mokis", "mokos", "molal", "molas", "molds", "moled", "moles", "molla", "molls", "molly", "molto", "molts", "molys", "momes", "momma", "mommy", "momus", "monad", "monal", "monas", "monde", "mondo", "moner", "mongo", "mongs", "monic", "monie", "monks", "monos", "monte", "monty", "moobs", "mooch", "moods", "mooed", "mooks", "moola", "mooli", "mools", "mooly", "moong", "moons", "moony", "moops", "moors", "moory", "moots", "moove", "moped", "moper", "mopes", "mopey", "moppy", "mopsy", "mopus", "morae", "moras", "morat", "moray", "morel", "mores", "moria", "morne", "morns", "morra", "morro", "morse", "morts", "mosed", "moses", "mosey", "mosks", "mosso", "moste", "mosts", "moted", "moten", "motes", "motet", "motey", "moths", "mothy", "motis", "motte", "motts", "motty", "motus", "motza", "mouch", "moues", "mould", "mouls", "moups", "moust", "mousy", "moved", "moves", "mowas", "mowed", "mowra", "moxas", "moxie", "moyas", "moyle", "moyls", "mozed", "mozes", "mozos", "mpret", "mucho", "mucic", "mucid", "mucin", "mucks", "mucor", "mucro", "mudge", "mudir", "mudra", "muffs", "mufti", "mugga", "muggs", "muggy", "muhly", "muids", "muils", "muirs", "muist", "mujik", "mulct", "muled", "mules", "muley", "mulga", "mulie", "mulla", "mulls", "mulse", "mulsh", "mumms", "mumps", "mumsy", "mumus", "munga", "munge", "mungo", "mungs", "munis", "munts", "muntu", "muons", "muras", "mured", "mures", "murex", "murid", "murks", "murls", "murly", "murra", "murre", "murri", "murrs", "murry", "murti", "murva", "musar", "musca", "mused", "muser", "muses", "muset", "musha", "musit", "musks", "musos", "musse", "mussy", "musth", "musts", "mutch", "muted", "muter", "mutes", "mutha", "mutis", "muton", "mutts", "muxed", "muxes", "muzak", "muzzy", "mvule", "myall", "mylar", "mynah", "mynas", "myoid", "myoma", "myope", "myops", "myopy", "mysid", "mythi", "myths", "mythy", "myxos", "mzees", "naams", "naans", "nabes", "nabis", "nabks", "nabla", "nabob", "nache", "nacho", "nacre", "nadas", "naeve", "naevi", "naffs", "nagas", "naggy", "nagor", "nahal", "naiad", "naifs", "naiks", "nails", "naira", "nairu", "naked", "naker", "nakfa", "nalas", "naled", "nalla", "named", "namer", "names", "namma", "namus", "nanas", "nance", "nancy", "nandu", "nanna", "nanos", "nanua", "napas", "naped", "napes", "napoo", "nappa", "nappe", "nappy", "naras", "narco", "narcs", "nards", "nares", "naric", "naris", "narks", "narky", "narre", "nashi", "natch", "nates", "natis", "natty", "nauch", "naunt", "navar", "naves", "navew", "navvy", "nawab", "nazes", "nazir", "nazis", "nduja", "neafe", "neals", "neaps", "nears", "neath", "neats", "nebek", "nebel", "necks", "neddy", "needs", "neeld", "neele", "neemb", "neems", "neeps", "neese", "neeze", "negro", "negus", "neifs", "neist", "neive", "nelis", "nelly", "nemas", "nemns", "nempt", "nenes", "neons", "neper", "nepit", "neral", "nerds", "nerka", "nerks", "nerol", "nerts", "nertz", "nervy", "nests", "netes", "netop", "netts", "netty", "neuks", "neume", "neums", "nevel", "neves", "nevus", "newbs", "newed", "newel", "newie", "newsy", "newts", "nexts", "nexus", "ngaio", "ngana", "ngati", "ngoma", "ngwee", "nicad", "nicht", "nicks", "nicol", "nidal", "nided", "nides", "nidor", "nidus", "niefs", "nieve", "nifes", "niffs", "niffy", "nifty", "niger", "nighs", "nihil", "nikab", "nikah", "nikau", "nills", "nimbi", "nimbs", "nimps", "niner", "nines", "ninon", "nipas", "nippy", "niqab", "nirls", "nirly", "nisei", "nisse", "nisus", "niter", "nites", "nitid", "niton", "nitre", "nitro", "nitry", "nitty", "nival", "nixed", "nixer", "nixes", "nixie", "nizam", "nkosi", "noahs", "nobby", "nocks", "nodal", "noddy", "nodes", "nodus", "noels", "noggs", "nohow", "noils", "noily", "noint", "noirs", "noles", "nolls", "nolos", "nomas", "nomen", "nomes", "nomic", "nomoi", "nomos", "nonas", "nonce", "nones", "nonet", "nongs", "nonis", "nonny", "nonyl", "noobs", "nooit", "nooks", "nooky", "noons", "noops", "nopal", "noria", "noris", "norks", "norma", "norms", "nosed", "noser", "noses", "notal", "noted", "noter", "notes", "notum", "nould", "noule", "nouls", "nouns", "nouny", "noups", "novae", "novas", "novum", "noway", "nowed", "nowls", "nowts", "nowty", "noxal", "noxes", "noyau", "noyed", "noyes", "nubby", "nubia", "nucha", "nuddy", "nuder", "nudes", "nudie", "nudzh", "nuffs", "nugae", "nuked", "nukes", "nulla", "nulls", "numbs", "numen", "nummy", "nunny", "nurds", "nurdy", "nurls", "nurrs", "nutso", "nutsy", "nyaff", "nyala", "nying", "nyssa", "oaked", "oaker", "oakum", "oared", "oases", "oasis", "oasts", "oaten", "oater", "oaths", "oaves", "obang", "obeah", "obeli", "obeys", "obias", "obied", "obiit", "obits", "objet", "oboes", "obole", "oboli", "obols", "occam", "ocher", "oches", "ochre", "ochry", "ocker", "ocrea", "octad", "octan", "octas", "octyl", "oculi", "odahs", "odals", "odeon", "odeum", "odism", "odist", "odium", "odors", "odour", "odyle", "odyls", "ofays", "offed", "offie", "oflag", "ofter", "ogams", "ogeed", "ogees", "oggin", "ogham", "ogive", "ogled", "ogler", "ogles", "ogmic", "ogres", "ohias", "ohing", "ohmic", "ohone", "oidia", "oiled", "oiler", "oinks", "oints", "ojime", "okapi", "okays", "okehs", "okras", "oktas", "oldie", "oleic", "olein", "olent", "oleos", "oleum", "olios", "ollas", "ollav", "oller", "ollie", "ology", "olpae", "olpes", "omasa", "omber", "ombus", "omens", "omers", "omits", "omlah", "omovs", "omrah", "oncer", "onces", "oncet", "oncus", "onely", "oners", "onery", "onium", "onkus", "onlay", "onned", "ontic", "oobit", "oohed", "oomph", "oonts", "ooped", "oorie", "ooses", "ootid", "oozed", "oozes", "opahs", "opals", "opens", "opepe", "oping", "oppos", "opsin", "opted", "opter", "orach", "oracy", "orals", "orang", "orant", "orate", "orbed", "orcas", "orcin", "ordos", "oread", "orfes", "orgia", "orgic", "orgue", "oribi", "oriel", "orixa", "orles", "orlon", "orlop", "ormer", "ornis", "orpin", "orris", "ortho", "orval", "orzos", "oscar", "oshac", "osier", "osmic", "osmol", "ossia", "ostia", "otaku", "otary", "ottar", "ottos", "oubit", "oucht", "ouens", "ouija", "oulks", "oumas", "oundy", "oupas", "ouped", "ouphe", "ouphs", "ourie", "ousel", "ousts", "outby", "outed", "outre", "outro", "outta", "ouzel", "ouzos", "ovals", "ovels", "ovens", "overs", "ovist", "ovoli", "ovolo", "ovule", "owche", "owies", "owled", "owler", "owlet", "owned", "owres", "owrie", "owsen", "oxbow", "oxers", "oxeye", "oxids", "oxies", "oxime", "oxims", "oxlip", "oxter", "oyers", "ozeki", "ozzie", "paals", "paans", "pacas", "paced", "pacer", "paces", "pacey", "pacha", "packs", "pacos", "pacta", "pacts", "padis", "padle", "padma", "padre", "padri", "paean", "paedo", "paeon", "paged", "pager", "pages", "pagle", "pagod", "pagri", "paiks", "pails", "pains", "paire", "pairs", "paisa", "paise", "pakka", "palas", "palay", "palea", "paled", "pales", "palet", "palis", "palki", "palla", "palls", "pally", "palms", "palmy", "palpi", "palps", "palsa", "pampa", "panax", "pance", "panda", "pands", "pandy", "paned", "panes", "panga", "pangs", "panim", "panko", "panne", "panni", "panto", "pants", "panty", "paoli", "paolo", "papas", "papaw", "papes", "pappi", "pappy", "parae", "paras", "parch", "pardi", "pards", "pardy", "pared", "paren", "pareo", "pares", "pareu", "parev", "parge", "pargo", "paris", "parki", "parks", "parky", "parle", "parly", "parma", "parol", "parps", "parra", "parrs", "parti", "parts", "parve", "parvo", "paseo", "pases", "pasha", "pashm", "paska", "paspy", "passe", "pasts", "pated", "paten", "pater", "pates", "paths", "patin", "patka", "patly", "patte", "patus", "pauas", "pauls", "pavan", "paved", "paven", "paver", "paves", "pavid", "pavin", "pavis", "pawas", "pawaw", "pawed", "pawer", "pawks", "pawky", "pawls", "pawns", "paxes", "payed", "payor", "paysd", "peage", "peags", "peaks", "peaky", "peals", "peans", "peare", "pears", "peart", "pease", "peats", "peaty", "peavy", "peaze", "pebas", "pechs", "pecke", "pecks", "pecky", "pedes", "pedis", "pedro", "peece", "peeks", "peels", "peens", "peeoy", "peepe", "peeps", "peers", "peery", "peeve", "peggy", "peghs", "peins", "peise", "peize", "pekan", "pekes", "pekin", "pekoe", "pelas", "pelau", "peles", "pelfs", "pells", "pelma", "pelon", "pelta", "pelts", "pends", "pendu", "pened", "penes", "pengo", "penie", "penis", "penks", "penna", "penni", "pents", "peons", "peony", "pepla", "pepos", "peppy", "pepsi", "perai", "perce", "percs", "perdu", "perdy", "perea", "peres", "peris", "perks", "perms", "perns", "perog", "perps", "perry", "perse", "perst", "perts", "perve", "pervo", "pervs", "pervy", "pesos", "pests", "pesty", "petar", "peter", "petit", "petre", "petri", "petti", "petto", "pewee", "pewit", "peyse", "phage", "phang", "phare", "pharm", "pheer", "phene", "pheon", "phese", "phial", "phish", "phizz", "phlox", "phoca", "phono", "phons", "phots", "phpht", "phuts", "phyla", "phyle", "piani", "pians", "pibal", "pical", "picas", "piccy", "picks", "picot", "picra", "picul", "piend", "piers", "piert", "pieta", "piets", "piezo", "pight", "pigmy", "piing", "pikas", "pikau", "piked", "piker", "pikes", "pikey", "pikis", "pikul", "pilae", "pilaf", "pilao", "pilar", "pilau", "pilaw", "pilch", "pilea", "piled", "pilei", "piler", "piles", "pilis", "pills", "pilow", "pilum", "pilus", "pimas", "pimps", "pinas", "pined", "pines", "pingo", "pings", "pinko", "pinks", "pinna", "pinny", "pinon", "pinot", "pinta", "pints", "pinup", "pions", "piony", "pious", "pioye", "pioys", "pipal", "pipas", "piped", "pipes", "pipet", "pipis", "pipit", "pippy", "pipul", "pirai", "pirls", "pirns", "pirog", "pisco", "pises", "pisky", "pisos", "pissy", "piste", "pitas", "piths", "piton", "pitot", "pitta", "piums", "pixes", "pized", "pizes", "plaas", "plack", "plage", "plans", "plaps", "plash", "plasm", "plast", "plats", "platt", "platy", "playa", "plays", "pleas", "plebe", "plebs", "plena", "pleon", "plesh", "plews", "plica", "plies", "plims", "pling", "plink", "ploat", "plods", "plong", "plonk", "plook", "plops", "plots", "plotz", "plouk", "plows", "ploye", "ploys", "plues", "pluff", "plugs", "plums", "plumy", "pluot", "pluto", "plyer", "poach", "poaka", "poake", "poboy", "pocks", "pocky", "podal", "poddy", "podex", "podge", "podgy", "podia", "poems", "poeps", "poets", "pogey", "pogge", "pogos", "pohed", "poilu", "poind", "pokal", "poked", "pokes", "pokey", "pokie", "poled", "poler", "poles", "poley", "polio", "polis", "polje", "polks", "polls", "polly", "polos", "polts", "polys", "pombe", "pomes", "pommy", "pomos", "pomps", "ponce", "poncy", "ponds", "pones", "poney", "ponga", "pongo", "pongs", "pongy", "ponks", "ponts", "ponty", "ponzu", "poods", "pooed", "poofs", "poofy", "poohs", "pooja", "pooka", "pooks", "pools", "poons", "poops", "poopy", "poori", "poort", "poots", "poove", "poovy", "popes", "poppa", "popsy", "porae", "poral", "pored", "porer", "pores", "porge", "porgy", "porin", "porks", "porky", "porno", "porns", "porny", "porta", "ports", "porty", "posed", "poses", "posey", "posho", "posts", "potae", "potch", "poted", "potes", "potin", "potoo", "potsy", "potto", "potts", "potty", "pouff", "poufs", "pouke", "pouks", "poule", "poulp", "poult", "poupe", "poupt", "pours", "pouts", "powan", "powin", "pownd", "powns", "powny", "powre", "poxed", "poxes", "poynt", "poyou", "poyse", "pozzy", "praam", "prads", "prahu", "prams", "prana", "prang", "praos", "prase", "prate", "prats", "pratt", "praty", "praus", "prays", "predy", "preed", "prees", "preif", "prems", "premy", "prent", "preon", "preop", "preps", "presa", "prese", "prest", "preve", "prexy", "preys", "prial", "pricy", "prief", "prier", "pries", "prigs", "prill", "prima", "primi", "primp", "prims", "primy", "prink", "prion", "prise", "priss", "proas", "probs", "prods", "proem", "profs", "progs", "proin", "proke", "prole", "proll", "promo", "proms", "pronk", "props", "prore", "proso", "pross", "prost", "prosy", "proto", "proul", "prows", "proyn", "prunt", "pruta", "pryer", "pryse", "pseud", "pshaw", "psion", "psoae", "psoai", "psoas", "psora", "psych", "psyop", "pubco", "pubes", "pubis", "pucan", "pucer", "puces", "pucka", "pucks", "puddy", "pudge", "pudic", "pudor", "pudsy", "pudus", "puers", "puffa", "puffs", "puggy", "pugil", "puhas", "pujah", "pujas", "pukas", "puked", "puker", "pukes", "pukey", "pukka", "pukus", "pulao", "pulas", "puled", "puler", "pules", "pulik", "pulis", "pulka", "pulks", "pulli", "pulls", "pully", "pulmo", "pulps", "pulus", "pumas", "pumie", "pumps", "punas", "punce", "punga", "pungs", "punji", "punka", "punks", "punky", "punny", "punto", "punts", "punty", "pupae", "pupas", "pupus", "purda", "pured", "pures", "purin", "puris", "purls", "purpy", "purrs", "pursy", "purty", "puses", "pusle", "pussy", "putid", "puton", "putti", "putto", "putts", "puzel", "pwned", "pyats", "pyets", "pygal", "pyins", "pylon", "pyned", "pynes", "pyoid", "pyots", "pyral", "pyran", "pyres", "pyrex", "pyric", "pyros", "pyxed", "pyxes", "pyxie", "pyxis", "pzazz", "qadis", "qaids", "qajaq", "qanat", "qapik", "qibla", "qophs", "qorma", "quads", "quaff", "quags", "quair", "quais", "quaky", "quale", "quant", "quare", "quass", "quate", "quats", "quayd", "quays", "qubit", "quean", "queme", "quena", "quern", "queyn", "queys", "quich", "quids", "quiff", "quims", "quina", "quine", "quino", "quins", "quint", "quipo", "quips", "quipu", "quire", "quirt", "quist", "quits", "quoad", "quods", "quoif", "quoin", "quoit", "quoll", "quonk", "quops", "qursh", "quyte", "rabat", "rabic", "rabis", "raced", "races", "rache", "racks", "racon", "radge", "radix", "radon", "raffs", "rafts", "ragas", "ragde", "raged", "ragee", "rager", "rages", "ragga", "raggs", "raggy", "ragis", "ragus", "rahed", "rahui", "raias", "raids", "raiks", "raile", "rails", "raine", "rains", "raird", "raita", "raits", "rajas", "rajes", "raked", "rakee", "raker", "rakes", "rakia", "rakis", "rakus", "rales", "ramal", "ramee", "ramet", "ramie", "ramin", "ramis", "rammy", "ramps", "ramus", "ranas", "rance", "rands", "ranee", "ranga", "rangi", "rangs", "rangy", "ranid", "ranis", "ranke", "ranks", "rants", "raped", "raper", "rapes", "raphe", "rappe", "rared", "raree", "rares", "rarks", "rased", "raser", "rases", "rasps", "rasse", "rasta", "ratal", "ratan", "ratas", "ratch", "rated", "ratel", "rater", "rates", "ratha", "rathe", "raths", "ratoo", "ratos", "ratus", "rauns", "raupo", "raved", "ravel", "raver", "raves", "ravey", "ravin", "rawer", "rawin", "rawly", "rawns", "raxed", "raxes", "rayah", "rayas", "rayed", "rayle", "rayne", "razed", "razee", "razer", "razes", "razoo", "readd", "reads", "reais", "reaks", "realo", "reals", "reame", "reams", "reamy", "reans", "reaps", "rears", "reast", "reata", "reate", "reave", "rebbe", "rebec", "rebid", "rebit", "rebop", "rebuy", "recal", "recce", "recco", "reccy", "recit", "recks", "recon", "recta", "recti", "recto", "redan", "redds", "reddy", "reded", "redes", "redia", "redid", "redip", "redly", "redon", "redos", "redox", "redry", "redub", "redux", "redye", "reech", "reede", "reeds", "reefs", "reefy", "reeks", "reeky", "reels", "reens", "reest", "reeve", "refed", "refel", "reffo", "refis", "refix", "refly", "refry", "regar", "reges", "reggo", "regie", "regma", "regna", "regos", "regur", "rehem", "reifs", "reify", "reiki", "reiks", "reink", "reins", "reird", "reist", "reive", "rejig", "rejon", "reked", "rekes", "rekey", "relet", "relie", "relit", "rello", "reman", "remap", "remen", "remet", "remex", "remix", "renay", "rends", "reney", "renga", "renig", "renin", "renne", "renos", "rente", "rents", "reoil", "reorg", "repeg", "repin", "repla", "repos", "repot", "repps", "repro", "reran", "rerig", "resat", "resaw", "resay", "resee", "reses", "resew", "resid", "resit", "resod", "resow", "resto", "rests", "resty", "resus", "retag", "retax", "retem", "retia", "retie", "retox", "revet", "revie", "rewan", "rewax", "rewed", "rewet", "rewin", "rewon", "rewth", "rexes", "rezes", "rheas", "rheme", "rheum", "rhies", "rhime", "rhine", "rhody", "rhomb", "rhone", "rhumb", "rhyne", "rhyta", "riads", "rials", "riant", "riata", "ribas", "ribby", "ribes", "riced", "ricer", "rices", "ricey", "richt", "ricin", "ricks", "rides", "ridgy", "ridic", "riels", "riems", "rieve", "rifer", "riffs", "rifte", "rifts", "rifty", "riggs", "rigol", "riled", "riles", "riley", "rille", "rills", "rimae", "rimed", "rimer", "rimes", "rimus", "rinds", "rindy", "rines", "rings", "rinks", "rioja", "riots", "riped", "ripes", "ripps", "rises", "rishi", "risks", "risps", "risus", "rites", "ritts", "ritzy", "rivas", "rived", "rivel", "riven", "rives", "riyal", "rizas", "roads", "roams", "roans", "roars", "roary", "roate", "robed", "robes", "roble", "rocks", "roded", "rodes", "roguy", "rohes", "roids", "roils", "roily", "roins", "roist", "rojak", "rojis", "roked", "roker", "rokes", "rolag", "roles", "rolfs", "rolls", "romal", "roman", "romeo", "romps", "ronde", "rondo", "roneo", "rones", "ronin", "ronne", "ronte", "ronts", "roods", "roofs", "roofy", "rooks", "rooky", "rooms", "roons", "roops", "roopy", "roosa", "roose", "roots", "rooty", "roped", "roper", "ropes", "ropey", "roque", "roral", "rores", "roric", "rorid", "rorie", "rorts", "rorty", "rosed", "roses", "roset", "roshi", "rosin", "rosit", "rosti", "rosts", "rotal", "rotan", "rotas", "rotch", "roted", "rotes", "rotis", "rotls", "roton", "rotos", "rotte", "rouen", "roues", "roule", "rouls", "roums", "roups", "roupy", "roust", "routh", "routs", "roved", "roven", "roves", "rowan", "rowed", "rowel", "rowen", "rowie", "rowme", "rownd", "rowth", "rowts", "royne", "royst", "rozet", "rozit", "ruana", "rubai", "rubby", "rubel", "rubes", "rubin", "ruble", "rubli", "rubus", "ruche", "rucks", "rudas", "rudds", "rudes", "rudie", "rudis", "rueda", "ruers", "ruffe", "ruffs", "rugae", "rugal", "ruggy", "ruing", "ruins", "rukhs", "ruled", "rules", "rumal", "rumbo", "rumen", "rumes", "rumly", "rummy", "rumpo", "rumps", "rumpy", "runch", "runds", "runed", "runes", "rungs", "runic", "runny", "runts", "runty", "rupia", "rurps", "rurus", "rusas", "ruses", "rushy", "rusks", "rusma", "russe", "rusts", "ruths", "rutin", "rutty", "ryals", "rybat", "ryked", "rykes", "rymme", "rynds", "ryots", "ryper", "saags", "sabal", "sabed", "saber", "sabes", "sabha", "sabin", "sabir", "sable", "sabot", "sabra", "sabre", "sacks", "sacra", "saddo", "sades", "sadhe", "sadhu", "sadis", "sados", "sadza", "safed", "safes", "sagas", "sager", "sages", "saggy", "sagos", "sagum", "saheb", "sahib", "saice", "saick", "saics", "saids", "saiga", "sails", "saims", "saine", "sains", "sairs", "saist", "saith", "sajou", "sakai", "saker", "sakes", "sakia", "sakis", "sakti", "salal", "salat", "salep", "sales", "salet", "salic", "salix", "salle", "salmi", "salol", "salop", "salpa", "salps", "salse", "salto", "salts", "salue", "salut", "saman", "samas", "samba", "sambo", "samek", "samel", "samen", "sames", "samey", "samfu", "sammy", "sampi", "samps", "sands", "saned", "sanes", "sanga", "sangh", "sango", "sangs", "sanko", "sansa", "santo", "sants", "saola", "sapan", "sapid", "sapor", "saran", "sards", "sared", "saree", "sarge", "sargo", "sarin", "saris", "sarks", "sarky", "sarod", "saros", "sarus", "saser", "sasin", "sasse", "satai", "satay", "sated", "satem", "sates", "satis", "sauba", "sauch", "saugh", "sauls", "sault", "saunt", "saury", "sauts", "saved", "saver", "saves", "savey", "savin", "sawah", "sawed", "sawer", "saxes", "sayed", "sayer", "sayid", "sayne", "sayon", "sayst", "sazes", "scabs", "scads", "scaff", "scags", "scail", "scala", "scall", "scams", "scand", "scans", "scapa", "scape", "scapi", "scarp", "scars", "scart", "scath", "scats", "scatt", "scaud", "scaup", "scaur", "scaws", "sceat", "scena", "scend", "schav", "schmo", "schul", "schwa", "sclim", "scody", "scogs", "scoog", "scoot", "scopa", "scops", "scots", "scoug", "scoup", "scowp", "scows", "scrab", "scrae", "scrag", "scran", "scrat", "scraw", "scray", "scrim", "scrip", "scrob", "scrod", "scrog", "scrow", "scudi", "scudo", "scuds", "scuff", "scuft", "scugs", "sculk", "scull", "sculp", "sculs", "scums", "scups", "scurf", "scurs", "scuse", "scuta", "scute", "scuts", "scuzz", "scyes", "sdayn", "sdein", "seals", "seame", "seams", "seamy", "seans", "seare", "sears", "sease", "seats", "seaze", "sebum", "secco", "sechs", "sects", "seder", "sedes", "sedge", "sedgy", "sedum", "seeds", "seeks", "seeld", "seels", "seely", "seems", "seeps", "seepy", "seers", "sefer", "segar", "segni", "segno", "segol", "segos", "sehri", "seifs", "seils", "seine", "seirs", "seise", "seism", "seity", "seiza", "sekos", "sekts", "selah", "seles", "selfs", "sella", "selle", "sells", "selva", "semee", "semes", "semie", "semis", "senas", "sends", "senes", "sengi", "senna", "senor", "sensa", "sensi", "sente", "senti", "sents", "senvy", "senza", "sepad", "sepal", "sepic", "sepoy", "septa", "septs", "serac", "serai", "seral", "sered", "serer", "seres", "serfs", "serge", "seric", "serin", "serks", "seron", "serow", "serra", "serre", "serrs", "serry", "servo", "sesey", "sessa", "setae", "setal", "seton", "setts", "sewan", "sewar", "sewed", "sewel", "sewen", "sewin", "sexed", "sexer", "sexes", "sexto", "sexts", "seyen", "shads", "shags", "shahs", "shako", "shakt", "shalm", "shaly", "shama", "shams", "shand", "shans", "shaps", "sharn", "shash", "shaul", "shawm", "shawn", "shaws", "shaya", "shays", "shchi", "sheaf", "sheal", "sheas", "sheds", "sheel", "shend", "shent", "sheol", "sherd", "shere", "shero", "shets", "sheva", "shewn", "shews", "shiai", "shiel", "shier", "shies", "shill", "shily", "shims", "shins", "ships", "shirr", "shirs", "shish", "shiso", "shist", "shite", "shits", "shiur", "shiva", "shive", "shivs", "shlep", "shlub", "shmek", "shmoe", "shoat", "shoed", "shoer", "shoes", "shogi", "shogs", "shoji", "shojo", "shola", "shool", "shoon", "shoos", "shope", "shops", "shorl", "shote", "shots", "shott", "showd", "shows", "shoyu", "shred", "shris", "shrow", "shtik", "shtum", "shtup", "shule", "shuln", "shuls", "shuns", "shura", "shute", "shuts", "shwas", "shyer", "sials", "sibbs", "sibyl", "sices", "sicht", "sicko", "sicks", "sicky", "sidas", "sided", "sider", "sides", "sidha", "sidhe", "sidle", "sield", "siens", "sient", "sieth", "sieur", "sifts", "sighs", "sigil", "sigla", "signa", "signs", "sijos", "sikas", "siker", "sikes", "silds", "siled", "silen", "siler", "siles", "silex", "silks", "sills", "silos", "silts", "silty", "silva", "simar", "simas", "simba", "simis", "simps", "simul", "sinds", "sined", "sines", "sings", "sinhs", "sinks", "sinky", "sinus", "siped", "sipes", "sippy", "sired", "siree", "sires", "sirih", "siris", "siroc", "sirra", "sirup", "sisal", "sises", "sista", "sists", "sitar", "sited", "sites", "sithe", "sitka", "situp", "situs", "siver", "sixer", "sixes", "sixmo", "sixte", "sizar", "sized", "sizel", "sizer", "sizes", "skags", "skail", "skald", "skank", "skart", "skats", "skatt", "skaws", "skean", "skear", "skeds", "skeed", "skeef", "skeen", "skeer", "skees", "skeet", "skegg", "skegs", "skein", "skelf", "skell", "skelm", "skelp", "skene", "skens", "skeos", "skeps", "skers", "skets", "skews", "skids", "skied", "skies", "skiey", "skimo", "skims", "skink", "skins", "skint", "skios", "skips", "skirl", "skirr", "skite", "skits", "skive", "skivy", "sklim", "skoal", "skody", "skoff", "skogs", "skols", "skool", "skort", "skosh", "skran", "skrik", "skuas", "skugs", "skyed", "skyer", "skyey", "skyfs", "skyre", "skyrs", "skyte", "slabs", "slade", "slaes", "slags", "slaid", "slake", "slams", "slane", "slank", "slaps", "slart", "slats", "slaty", "slaws", "slays", "slebs", "sleds", "sleer", "slews", "sleys", "slier", "slily", "slims", "slipe", "slips", "slipt", "slish", "slits", "slive", "sloan", "slobs", "sloes", "slogs", "sloid", "slojd", "slomo", "sloom", "sloot", "slops", "slopy", "slorm", "slots", "slove", "slows", "sloyd", "slubb", "slubs", "slued", "slues", "sluff", "slugs", "sluit", "slums", "slurb", "slurs", "sluse", "sluts", "slyer", "slype", "smaak", "smaik", "smalm", "smalt", "smarm", "smaze", "smeek", "smees", "smeik", "smeke", "smerk", "smews", "smirr", "smirs", "smits", "smogs", "smoko", "smolt", "smoor", "smoot", "smore", "smorg", "smout", "smowt", "smugs", "smurs", "smush", "smuts", "snabs", "snafu", "snags", "snaps", "snarf", "snark", "snars", "snary", "snash", "snath", "snaws", "snead", "sneap", "snebs", "sneck", "sneds", "sneed", "snees", "snell", "snibs", "snick", "snies", "snift", "snigs", "snips", "snipy", "snirt", "snits", "snobs", "snods", "snoek", "snoep", "snogs", "snoke", "snood", "snook", "snool", "snoot", "snots", "snowk", "snows", "snubs", "snugs", "snush", "snyes", "soaks", "soaps", "soare", "soars", "soave", "sobas", "socas", "soces", "socko", "socks", "socle", "sodas", "soddy", "sodic", "sodom", "sofar", "sofas", "softa", "softs", "softy", "soger", "sohur", "soils", "soily", "sojas", "sojus", "sokah", "soken", "sokes", "sokol", "solah", "solan", "solas", "solde", "soldi", "soldo", "solds", "soled", "solei", "soler", "soles", "solon", "solos", "solum", "solus", "soman", "somas", "sonce", "sonde", "sones", "songs", "sonly", "sonne", "sonny", "sonse", "sonsy", "sooey", "sooks", "sooky", "soole", "sools", "sooms", "soops", "soote", "soots", "sophs", "sophy", "sopor", "soppy", "sopra", "soral", "soras", "sorbo", "sorbs", "sorda", "sordo", "sords", "sored", "soree", "sorel", "sorer", "sores", "sorex", "sorgo", "sorns", "sorra", "sorta", "sorts", "sorus", "soths", "sotol", "souce", "souct", "sough", "souks", "souls", "soums", "soups", "soupy", "sours", "souse", "souts", "sowar", "sowce", "sowed", "sowff", "sowfs", "sowle", "sowls", "sowms", "sownd", "sowne", "sowps", "sowse", "sowth", "soyas", "soyle", "soyuz", "sozin", "spacy", "spado", "spaed", "spaer", "spaes", "spags", "spahi", "spail", "spain", "spait", "spake", "spald", "spale", "spall", "spalt", "spams", "spane", "spang", "spans", "spard", "spars", "spart", "spate", "spats", "spaul", "spawl", "spaws", "spayd", "spays", "spaza", "spazz", "speal", "spean", "speat", "specs", "spect", "speel", "speer", "speil", "speir", "speks", "speld", "spelk", "speos", "spets", "speug", "spews", "spewy", "spial", "spica", "spick", "spics", "spide", "spier", "spies", "spiff", "spifs", "spiks", "spile", "spims", "spina", "spink", "spins", "spirt", "spiry", "spits", "spitz", "spivs", "splay", "splog", "spode", "spods", "spoom", "spoor", "spoot", "spork", "sposh", "spots", "sprad", "sprag", "sprat", "spred", "sprew", "sprit", "sprod", "sprog", "sprue", "sprug", "spuds", "spued", "spuer", "spues", "spugs", "spule", "spume", "spumy", "spurs", "sputa", "spyal", "spyre", "squab", "squaw", "squeg", "squid", "squit", "squiz", "stabs", "stade", "stags", "stagy", "staig", "stane", "stang", "staph", "staps", "starn", "starr", "stars", "stats", "staun", "staws", "stays", "stean", "stear", "stedd", "stede", "steds", "steek", "steem", "steen", "steil", "stela", "stele", "stell", "steme", "stems", "stend", "steno", "stens", "stent", "steps", "stept", "stere", "stets", "stews", "stewy", "steys", "stich", "stied", "sties", "stilb", "stile", "stime", "stims", "stimy", "stipa", "stipe", "stire", "stirk", "stirp", "stirs", "stive", "stivy", "stoae", "stoai", "stoas", "stoat", "stobs", "stoep", "stogy", "stoit", "stoln", "stoma", "stond", "stong", "stonk", "stonn", "stook", "stoor", "stope", "stops", "stopt", "stoss", "stots", "stott", "stoun", "stoup", "stour", "stown", "stowp", "stows", "strad", "strae", "strag", "strak", "strep", "strew", "stria", "strig", "strim", "strop", "strow", "stroy", "strum", "stubs", "stude", "studs", "stull", "stulm", "stumm", "stums", "stuns", "stupa", "stupe", "sture", "sturt", "styed", "styes", "styli", "stylo", "styme", "stymy", "styre", "styte", "subah", "subas", "subby", "suber", "subha", "succi", "sucks", "sucky", "sucre", "sudds", "sudor", "sudsy", "suede", "suent", "suers", "suete", "suets", "suety", "sugan", "sughs", "sugos", "suhur", "suids", "suint", "suits", "sujee", "sukhs", "sukuk", "sulci", "sulfa", "sulfo", "sulks", "sulph", "sulus", "sumis", "summa", "sumos", "sumph", "sumps", "sunis", "sunks", "sunna", "sunns", "sunup", "supes", "supra", "surah", "sural", "suras", "surat", "surds", "sured", "sures", "surfs", "surfy", "surgy", "surra", "sused", "suses", "susus", "sutor", "sutra", "sutta", "swabs", "swack", "swads", "swage", "swags", "swail", "swain", "swale", "swaly", "swamy", "swang", "swank", "swans", "swaps", "swapt", "sward", "sware", "swarf", "swart", "swats", "swayl", "sways", "sweal", "swede", "sweed", "sweel", "sweer", "swees", "sweir", "swelt", "swerf", "sweys", "swies", "swigs", "swile", "swims", "swink", "swipe", "swire", "swiss", "swith", "swits", "swive", "swizz", "swobs", "swole", "swoln", "swops", "swopt", "swots", "swoun", "sybbe", "sybil", "syboe", "sybow", "sycee", "syces", "sycon", "syens", "syker", "sykes", "sylis", "sylph", "sylva", "symar", "synch", "syncs", "synds", "syned", "synes", "synth", "syped", "sypes", "syphs", "syrah", "syren", "sysop", "sythe", "syver", "taals", "taata", "taber", "tabes", "tabid", "tabis", "tabla", "tabor", "tabun", "tabus", "tacan", "taces", "tacet", "tache", "tacho", "tachs", "tacks", "tacos", "tacts", "taels", "tafia", "taggy", "tagma", "tahas", "tahrs", "taiga", "taigs", "taiko", "tails", "tains", "taira", "taish", "taits", "tajes", "takas", "takes", "takhi", "takin", "takis", "takky", "talak", "talaq", "talar", "talas", "talcs", "talcy", "talea", "taler", "tales", "talks", "talky", "talls", "talma", "talpa", "taluk", "talus", "tamal", "tamed", "tames", "tamin", "tamis", "tammy", "tamps", "tanas", "tanga", "tangi", "tangs", "tanhs", "tanka", "tanks", "tanky", "tanna", "tansy", "tanti", "tanto", "tanty", "tapas", "taped", "tapen", "tapes", "tapet", "tapis", "tappa", "tapus", "taras", "tardo", "tared", "tares", "targa", "targe", "tarns", "taroc", "tarok", "taros", "tarps", "tarre", "tarry", "tarsi", "tarts", "tarty", "tasar", "tased", "taser", "tases", "tasks", "tassa", "tasse", "tasso", "tatar", "tater", "tates", "taths", "tatie", "tatou", "tatts", "tatus", "taube", "tauld", "tauon", "taupe", "tauts", "tavah", "tavas", "taver", "tawai", "tawas", "tawed", "tawer", "tawie", "tawse", "tawts", "taxed", "taxer", "taxes", "taxis", "taxol", "taxon", "taxor", "taxus", "tayra", "tazza", "tazze", "teade", "teads", "teaed", "teaks", "teals", "teams", "tears", "teats", "teaze", "techs", "techy", "tecta", "teels", "teems", "teend", "teene", "teens", "teeny", "teers", "teffs", "teggs", "tegua", "tegus", "tehrs", "teiid", "teils", "teind", "teins", "telae", "telco", "teles", "telex", "telia", "telic", "tells", "telly", "teloi", "telos", "temed", "temes", "tempi", "temps", "tempt", "temse", "tench", "tends", "tendu", "tenes", "tenge", "tenia", "tenne", "tenno", "tenny", "tenon", "tents", "tenty", "tenue", "tepal", "tepas", "tepoy", "terai", "teras", "terce", "terek", "teres", "terfe", "terfs", "terga", "terms", "terne", "terns", "terry", "terts", "tesla", "testa", "teste", "tests", "tetes", "teths", "tetra", "tetri", "teuch", "teugh", "tewed", "tewel", "tewit", "texas", "texes", "texts", "thack", "thagi", "thaim", "thale", "thali", "thana", "thane", "thang", "thans", "thanx", "tharm", "thars", "thaws", "thawy", "thebe", "theca", "theed", "theek", "thees", "thegn", "theic", "thein", "thelf", "thema", "thens", "theow", "therm", "thesp", "thete", "thews", "thewy", "thigs", "thilk", "thill", "thine", "thins", "thiol", "thirl", "thoft", "thole", "tholi", "thoro", "thorp", "thous", "thowl", "thrae", "thraw", "thrid", "thrip", "throe", "thuds", "thugs", "thuja", "thunk", "thurl", "thuya", "thymi", "thymy", "tians", "tiars", "tical", "ticca", "ticed", "tices", "tichy", "ticks", "ticky", "tiddy", "tided", "tides", "tiers", "tiffs", "tifos", "tifts", "tiges", "tigon", "tikas", "tikes", "tikis", "tikka", "tilak", "tiled", "tiler", "tiles", "tills", "tilly", "tilth", "tilts", "timbo", "timed", "times", "timon", "timps", "tinas", "tinct", "tinds", "tinea", "tined", "tines", "tinge", "tings", "tinks", "tinny", "tints", "tinty", "tipis", "tippy", "tired", "tires", "tirls", "tiros", "tirrs", "titch", "titer", "titis", "titre", "titty", "titup", "tiyin", "tiyns", "tizes", "tizzy", "toads", "toady", "toaze", "tocks", "tocky", "tocos", "todde", "toeas", "toffs", "toffy", "tofts", "tofus", "togae", "togas", "toged", "toges", "togue", "tohos", "toile", "toils", "toing", "toise", "toits", "tokay", "toked", "toker", "tokes", "tokos", "tolan", "tolar", "tolas", "toled", "toles", "tolls", "tolly", "tolts", "tolus", "tolyl", "toman", "tombs", "tomes", "tomia", "tommy", "tomos", "tondi", "tondo", "toned", "toner", "tones", "toney", "tongs", "tonka", "tonks", "tonne", "tonus", "tools", "tooms", "toons", "toots", "toped", "topee", "topek", "toper", "topes", "tophe", "tophi", "tophs", "topis", "topoi", "topos", "toppy", "toque", "torah", "toran", "toras", "torcs", "tores", "toric", "torii", "toros", "torot", "torrs", "torse", "torsi", "torsk", "torta", "torte", "torts", "tosas", "tosed", "toses", "toshy", "tossy", "toted", "toter", "totes", "totty", "touks", "touns", "tours", "touse", "tousy", "touts", "touze", "touzy", "towed", "towie", "towns", "towny", "towse", "towsy", "towts", "towze", "towzy", "toyed", "toyer", "toyon", "toyos", "tozed", "tozes", "tozie", "trabs", "trads", "tragi", "traik", "trams", "trank", "tranq", "trans", "trant", "trape", "traps", "trapt", "trass", "trats", "tratt", "trave", "trayf", "trays", "treck", "treed", "treen", "trees", "trefa", "treif", "treks", "trema", "trems", "tress", "trest", "trets", "trews", "treyf", "treys", "triac", "tride", "trier", "tries", "triff", "trigo", "trigs", "trike", "trild", "trill", "trims", "trine", "trins", "triol", "trior", "trios", "trips", "tripy", "trist", "troad", "troak", "troat", "trock", "trode", "trods", "trogs", "trois", "troke", "tromp", "trona", "tronc", "trone", "tronk", "trons", "trooz", "troth", "trots", "trows", "troys", "trued", "trues", "trugo", "trugs", "trull", "tryer", "tryke", "tryma", "tryps", "tsade", "tsadi", "tsars", "tsked", "tsuba", "tsubo", "tuans", "tuart", "tuath", "tubae", "tubar", "tubas", "tubby", "tubed", "tubes", "tucks", "tufas", "tuffe", "tuffs", "tufts", "tufty", "tugra", "tuile", "tuina", "tuism", "tuktu", "tules", "tulpa", "tulsi", "tumid", "tummy", "tumps", "tumpy", "tunas", "tunds", "tuned", "tuner", "tunes", "tungs", "tunny", "tupek", "tupik", "tuple", "tuque", "turds", "turfs", "turfy", "turks", "turme", "turms", "turns", "turnt", "turps", "turrs", "tushy", "tusks", "tusky", "tutee", "tutti", "tutty", "tutus", "tuxes", "tuyer", "twaes", "twain", "twals", "twank", "twats", "tways", "tweel", "tween", "tweep", "tweer", "twerk", "twerp", "twier", "twigs", "twill", "twilt", "twink", "twins", "twiny", "twire", "twirp", "twite", "twits", "twoer", "twyer", "tyees", "tyers", "tyiyn", "tykes", "tyler", "tymps", "tynde", "tyned", "tynes", "typal", "typed", "types", "typey", "typic", "typos", "typps", "typto", "tyran", "tyred", "tyres", "tyros", "tythe", "tzars", "udals", "udons", "ugali", "ugged", "uhlan", "uhuru", "ukase", "ulama", "ulans", "ulema", "ulmin", "ulnad", "ulnae", "ulnar", "ulnas", "ulpan", "ulvas", "ulyie", "ulzie", "umami", "umbel", "umber", "umble", "umbos", "umbre", "umiac", "umiak", "umiaq", "ummah", "ummas", "ummed", "umped", "umphs", "umpie", "umpty", "umrah", "umras", "unais", "unapt", "unarm", "unary", "unaus", "unbag", "unban", "unbar", "unbed", "unbid", "unbox", "uncap", "unces", "uncia", "uncos", "uncoy", "uncus", "undam", "undee", "undos", "undug", "uneth", "unfix", "ungag", "unget", "ungod", "ungot", "ungum", "unhat", "unhip", "unica", "units", "unjam", "unked", "unket", "unkid", "unlaw", "unlay", "unled", "unlet", "unlid", "unman", "unmew", "unmix", "unpay", "unpeg", "unpen", "unpin", "unred", "unrid", "unrig", "unrip", "unsaw", "unsay", "unsee", "unsew", "unsex", "unsod", "untax", "untin", "unwet", "unwit", "unwon", "upbow", "upbye", "updos", "updry", "upend", "upjet", "uplay", "upled", "uplit", "upped", "upran", "uprun", "upsee", "upsey", "uptak", "upter", "uptie", "uraei", "urali", "uraos", "urare", "urari", "urase", "urate", "urbex", "urbia", "urdee", "ureal", "ureas", "uredo", "ureic", "urena", "urent", "urged", "urger", "urges", "urial", "urite", "urman", "urnal", "urned", "urped", "ursae", "ursid", "urson", "urubu", "urvas", "users", "usnea", "usque", "usure", "usury", "uteri", "uveal", "uveas", "uvula", "vacua", "vaded", "vades", "vagal", "vagus", "vails", "vaire", "vairs", "vairy", "vakas", "vakil", "vales", "valis", "valse", "vamps", "vampy", "vanda", "vaned", "vanes", "vangs", "vants", "vaped", "vaper", "vapes", "varan", "varas", "vardy", "varec", "vares", "varia", "varix", "varna", "varus", "varve", "vasal", "vases", "vasts", "vasty", "vatic", "vatus", "vauch", "vaute", "vauts", "vawte", "vaxes", "veale", "veals", "vealy", "veena", "veeps", "veers", "veery", "vegas", "veges", "vegie", "vegos", "vehme", "veils", "veily", "veins", "veiny", "velar", "velds", "veldt", "veles", "vells", "velum", "venae", "venal", "vends", "vendu", "veney", "venge", "venin", "vents", "venus", "verbs", "verra", "verry", "verst", "verts", "vertu", "vespa", "vesta", "vests", "vetch", "vexed", "vexer", "vexes", "vexil", "vezir", "vials", "viand", "vibes", "vibex", "vibey", "viced", "vices", "vichy", "viers", "views", "viewy", "vifda", "viffs", "vigas", "vigia", "vilde", "viler", "villi", "vills", "vimen", "vinal", "vinas", "vinca", "vined", "viner", "vines", "vinew", "vinic", "vinos", "vints", "viold", "viols", "vired", "vireo", "vires", "virga", "virge", "virid", "virls", "virtu", "visas", "vised", "vises", "visie", "visne", "vison", "visto", "vitae", "vitas", "vitex", "vitro", "vitta", "vivas", "vivat", "vivda", "viver", "vives", "vizir", "vizor", "vleis", "vlies", "vlogs", "voars", "vocab", "voces", "voddy", "vodou", "vodun", "voema", "vogie", "voids", "voile", "voips", "volae", "volar", "voled", "voles", "volet", "volks", "volta", "volte", "volti", "volts", "volva", "volve", "vomer", "voted", "votes", "vouge", "voulu", "vowed", "vower", "voxel", "vozhd", "vraic", "vrils", "vroom", "vrous", "vrouw", "vrows", "vuggs", "vuggy", "vughs", "vughy", "vulgo", "vulns", "vulva", "vutty", "waacs", "wacke", "wacko", "wacks", "wadds", "waddy", "waded", "wader", "wades", "wadge", "wadis", "wadts", "waffs", "wafts", "waged", "wages", "wagga", "wagyu", "wahoo", "waide", "waifs", "waift", "wails", "wains", "wairs", "waite", "waits", "wakas", "waked", "waken", "waker", "wakes", "wakfs", "waldo", "walds", "waled", "waler", "wales", "walie", "walis", "walks", "walla", "walls", "wally", "walty", "wamed", "wames", "wamus", "wands", "waned", "wanes", "waney", "wangs", "wanks", "wanky", "wanle", "wanly", "wanna", "wants", "wanty", "wanze", "waqfs", "warbs", "warby", "wards", "wared", "wares", "warez", "warks", "warms", "warns", "warps", "warre", "warst", "warts", "wases", "washy", "wasms", "wasps", "waspy", "wasts", "watap", "watts", "wauff", "waugh", "wauks", "waulk", "wauls", "waurs", "waved", "waves", "wavey", "wawas", "wawes", "wawls", "waxed", "waxer", "waxes", "wayed", "wazir", "wazoo", "weald", "weals", "weamb", "weans", "wears", "webby", "weber", "wecht", "wedel", "wedgy", "weeds", "weeke", "weeks", "weels", "weems", "weens", "weeny", "weeps", "weepy", "weest", "weete", "weets", "wefte", "wefts", "weids", "weils", "weirs", "weise", "weize", "wekas", "welds", "welke", "welks", "welkt", "wells", "welly", "welts", "wembs", "wends", "wenge", "wenny", "wents", "weros", "wersh", "wests", "wetas", "wetly", "wexed", "wexes", "whamo", "whams", "whang", "whaps", "whare", "whata", "whats", "whaup", "whaur", "wheal", "whear", "wheen", "wheep", "wheft", "whelk", "whelm", "whens", "whets", "whews", "wheys", "whids", "whift", "whigs", "whilk", "whims", "whins", "whios", "whips", "whipt", "whirr", "whirs", "whish", "whiss", "whist", "whits", "whity", "whizz", "whomp", "whoof", "whoot", "whops", "whore", "whorl", "whort", "whoso", "whows", "whump", "whups", "whyda", "wicca", "wicks", "wicky", "widdy", "wides", "wiels", "wifed", "wifes", "wifey", "wifie", "wifty", "wigan", "wigga", "wiggy", "wikis", "wilco", "wilds", "wiled", "wiles", "wilga", "wilis", "wilja", "wills", "wilts", "wimps", "winds", "wined", "wines", "winey", "winge", "wings", "wingy", "winks", "winna", "winns", "winos", "winze", "wiped", "wiper", "wipes", "wired", "wirer", "wires", "wirra", "wised", "wises", "wisha", "wisht", "wisps", "wists", "witan", "wited", "wites", "withe", "withs", "withy", "wived", "wiver", "wives", "wizen", "wizes", "woads", "woald", "wocks", "wodge", "woful", "wojus", "woker", "wokka", "wolds", "wolfs", "wolly", "wolve", "wombs", "womby", "womyn", "wonga", "wongi", "wonks", "wonky", "wonts", "woods", "wooed", "woofs", "woofy", "woold", "wools", "woons", "woops", "woopy", "woose", "woosh", "wootz", "words", "works", "worms", "wormy", "worts", "wowed", "wowee", "woxen", "wrang", "wraps", "wrapt", "wrast", "wrate", "wrawl", "wrens", "wrick", "wried", "wrier", "wries", "writs", "wroke", "wroot", "wroth", "wryer", "wuddy", "wudus", "wulls", "wurst", "wuses", "wushu", "wussy", "wuxia", "wyled", "wyles", "wynds", "wynns", "wyted", "wytes", "xebec", "xenia", "xenic", "xenon", "xeric", "xerox", "xerus", "xoana", "xrays", "xylan", "xylem", "xylic", "xylol", "xylyl", "xysti", "xysts", "yaars", "yabas", "yabba", "yabby", "yacca", "yacka", "yacks", "yaffs", "yager", "yages", "yagis", "yahoo", "yaird", "yakka", "yakow", "yales", "yamen", "yampy", "yamun", "yangs", "yanks", "yapok", "yapon", "yapps", "yappy", "yarak", "yarco", "yards", "yarer", "yarfa", "yarks", "yarns", "yarrs", "yarta", "yarto", "yates", "yauds", "yauld", "yaups", "yawed", "yawey", "yawls", "yawns", "yawny", "yawps", "ybore", "yclad", "ycled", "ycond", "ydrad", "ydred", "yeads", "yeahs", "yealm", "yeans", "yeard", "years", "yecch", "yechs", "yechy", "yedes", "yeeds", "yeesh", "yeggs", "yelks", "yells", "yelms", "yelps", "yelts", "yenta", "yente", "yerba", "yerds", "yerks", "yeses", "yesks", "yests", "yesty", "yetis", "yetts", "yeuks", "yeuky", "yeven", "yeves", "yewen", "yexed", "yexes", "yfere", "yiked", "yikes", "yills", "yince", "yipes", "yippy", "yirds", "yirks", "yirrs", "yirth", "yites", "yitie", "ylems", "ylike", "ylkes", "ymolt", "ympes", "yobbo", "yobby", "yocks", "yodel", "yodhs", "yodle", "yogas", "yogee", "yoghs", "yogic", "yogin", "yogis", "yoick", "yojan", "yoked", "yokel", "yoker", "yokes", "yokul", "yolks", "yolky", "yomim", "yomps", "yonic", "yonis", "yonks", "yoofs", "yoops", "yores", "yorks", "yorps", "youks", "yourn", "yours", "yourt", "youse", "yowed", "yowes", "yowie", "yowls", "yowza", "yrapt", "yrent", "yrivd", "yrneh", "ysame", "ytost", "yuans", "yucas", "yucca", "yucch", "yucko", "yucks", "yucky", "yufts", "yugas", "yuked", "yukes", "yukky", "yukos", "yulan", "yules", "yummo", "yummy", "yumps", "yupon", "yuppy", "yurta", "yurts", "yuzus", "zabra", "zacks", "zaida", "zaidy", "zaire", "zakat", "zaman", "zambo", "zamia", "zanja", "zante", "zanza", "zanze", "zappy", "zarfs", "zaris", "zatis", "zaxes", "zayin", "zazen", "zeals", "zebec", "zebub", "zebus", "zedas", "zeins", "zendo", "zerda", "zerks", "zeros", "zests", "zetas", "zexes", "zezes", "zhomo", "zibet", "ziffs", "zigan", "zilas", "zilch", "zilla", "zills", "zimbi", "zimbs", "zinco", "zincs", "zincy", "zineb", "zines", "zings", "zingy", "zinke", "zinky", "zippo", "zippy", "ziram", "zitis", "zizel", "zizit", "zlote", "zloty", "zoaea", "zobos", "zobus", "zocco", "zoeae", "zoeal", "zoeas", "zoism", "zoist", "zombi", "zonae", "zonda", "zoned", "zoner", "zones", "zonks", "zooea", "zooey", "zooid", "zooks", "zooms", "zoons", "zooty", "zoppa", "zoppo", "zoril", "zoris", "zorro", "zouks", "zowee", "zowie", "zulus", "zupan", "zupas", "zuppa", "zurfs", "zuzim", "zygal", "zygon", "zymes", "zymic"]
}
  , ze = 6
  , ke = 5
  , Je = {
    ...Gs,
    contains: s=>Gs.words.includes(s) || Gs.valid.includes(s)
};
let bo = class {
    constructor() {
        X(this, "value");
        X(this, "notSet");
        this.notSet = new Set
    }
    not(e) {
        this.notSet.add(e)
    }
}
;
class ko {
    constructor() {
        X(this, "letterCounts");
        X(this, "notSet");
        X(this, "word");
        this.notSet = new Set,
        this.letterCounts = new Map,
        this.word = [];
        for (let e = 0; e < ke; ++e)
            this.word.push(new bo)
    }
    confirmCount(e) {
        let t = this.letterCounts.get(e);
        t ? t[1] = !0 : this.not(e)
    }
    countConfirmed(e) {
        const t = this.letterCounts.get(e);
        return t ? t[1] : !1
    }
    setCount(e, t) {
        let a = this.letterCounts.get(e);
        a ? a[0] = t : this.letterCounts.set(e, [t, !1])
    }
    incrementCount(e) {
        ++this.letterCounts.get(e)[0]
    }
    not(e) {
        this.notSet.add(e)
    }
    inGlobalNotList(e) {
        return this.notSet.has(e)
    }
    lettersNotAt(e) {
        return new Set([...this.notSet, ...this.word[e].notSet])
    }
}
function wo(s, e) {
    const t = new ko;
    for (let o = 0; o < s; ++o) {
        const n = new Set;
        for (let i = 0; i < ke; ++i) {
            const l = e.state[o][i]
              , r = e.words[o][i];
            if (l === "⬛") {
                t.confirmCount(r),
                t.inGlobalNotList(r) || t.word[i].not(r);
                continue
            }
            n.has(r) ? t.incrementCount(r) : t.countConfirmed(r) || (n.add(r),
            t.setCount(r, 1)),
            l === "🟩" ? t.word[i].value = r : t.word[i].not(r)
        }
    }
    let a = "";
    for (let o = 0; o < t.word.length; ++o)
        a += t.word[o].value ? t.word[o].value : `[^${[...t.lettersNotAt(o)].join(" ")}]`;
    return o=>{
        if (new RegExp(a).test(o)) {
            const n = o.split("");
            for (const i of t.letterCounts) {
                const l = vo(n, i[0]);
                if (!l || i[1][1] && l !== i[1][0])
                    return !1
            }
            return !0
        }
        return !1
    }
}
function vo(s, e) {
    return s.reduce((t,a)=>a === e ? t + 1 : t, 0)
}
function _o(s) {
    switch (s % 10) {
    case 1:
        return `${s}st`;
    case 2:
        return `${s}nd`;
    case 3:
        return `${s}rd`;
    default:
        return `${s}th`
    }
}
const ns = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
function cs(s, e) {
    const t = e ?? Date.now();
    switch (s) {
    case ve.daily:
        return Date.UTC(1970, 0, 1 + Math.floor((t - new Date().getTimezoneOffset() * ce.MINUTE) / ce.DAY));
    case ve.hourly:
        return t - t % ce.HOUR;
    case ve.infinite:
        return t - t % ce.SECOND
    }
}
const K = {
    default: ve.daily,
    modes: [{
        name: "Daily",
        unit: ce.DAY,
        start: 16423704e5,
        seed: cs(ve.daily),
        historical: !1,
        streak: !0,
        useTimeZone: !0
    }, {
        name: "Hourly",
        unit: ce.HOUR,
        start: 16425288e5,
        seed: cs(ve.hourly),
        historical: !1,
        icon: "m50,7h100v33c0,40 -35,40 -35,60c0,20 35,20 35,60v33h-100v-33c0,-40 35,-40 35,-60c0,-20 -35,-20 -35,-60z",
        streak: !0
    }, {
        name: "Infinite",
        unit: ce.SECOND,
        start: 16424286e5,
        seed: cs(ve.infinite),
        historical: !1,
        icon: "m7,100c0,-50 68,-50 93,0c25,50 93,50 93,0c0,-50 -68,-50 -93,0c-25,50 -93,50 -93,0z"
    }]
};
function Ze(s, e) {
    const t = e ? cs(s) : K.modes[s].seed;
    return Math.round((t - K.modes[s].start) / K.modes[s].unit) + 1
}
function ka(s, e, t) {
    const a = yo(`${t}`);
    return Math.floor(s + (e - s) * a())
}
const Fe = 200
  , zo = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"];
class dt {
    toString() {
        return JSON.stringify(this)
    }
}
var ds, js;
class st extends dt {
    constructor(t, a) {
        super();
        X(this, "active");
        X(this, "guesses");
        X(this, "validHard");
        X(this, "time");
        X(this, "wordNumber");
        X(this, "board");
        Ss(this, ds, !1);
        Ss(this, js, void 0);
        os(this, js, t),
        a && this.parse(a),
        as(this, ds) || (this.active = !0,
        this.guesses = 0,
        this.validHard = !0,
        this.time = K.modes[t].seed,
        this.wordNumber = Ze(t),
        this.board = {
            words: Array(ze).fill(""),
            state: Array.from({
                length: ze
            }, ()=>Array(ke).fill("🔳"))
        },
        os(this, ds, !0))
    }
    get latestWord() {
        return this.board.words[this.guesses]
    }
    get lastState() {
        return this.board.state[this.guesses - 1]
    }
    get lastWord() {
        return this.board.words[this.guesses - 1]
    }
    checkHardMode() {
        for (let t = 0; t < ke; ++t)
            if (this.board.state[this.guesses - 1][t] === "🟩" && this.board.words[this.guesses - 1][t] !== this.board.words[this.guesses][t])
                return {
                    pos: t,
                    char: this.board.words[this.guesses - 1][t],
                    type: "🟩"
                };
        for (let t = 0; t < ke; ++t)
            if (this.board.state[this.guesses - 1][t] === "🟨" && !this.board.words[this.guesses].includes(this.board.words[this.guesses - 1][t]))
                return {
                    pos: t,
                    char: this.board.words[this.guesses - 1][t],
                    type: "🟨"
                };
        return {
            pos: -1,
            char: "",
            type: "⬛"
        }
    }
    guess(t) {
        const a = t.split("")
          , o = Array(ke).fill("⬛");
        for (let n = 0; n < ke; ++n)
            a[n] === this.latestWord.charAt(n) && (o[n] = "🟩",
            a[n] = "$");
        for (let n = 0; n < ke; ++n) {
            const i = a.indexOf(this.latestWord[n]);
            o[n] !== "🟩" && i >= 0 && (a[i] = "$",
            o[n] = "🟨")
        }
        return o
    }
    parse(t) {
        const a = JSON.parse(t);
        a.wordNumber === Ze(as(this, js)) && (this.active = a.active,
        this.guesses = a.guesses,
        this.validHard = a.validHard,
        this.time = a.time,
        this.wordNumber = a.wordNumber,
        this.board = a.board,
        os(this, ds, !0))
    }
}
ds = new WeakMap,
js = new WeakMap;
let wa = class extends dt {
    constructor(t) {
        super();
        X(this, "hard", new Array(K.modes.length).fill(!1));
        X(this, "dark", !0);
        X(this, "colorblind", !1);
        X(this, "tutorial", 3);
        if (t) {
            const a = JSON.parse(t);
            this.hard = a.hard,
            this.dark = a.dark,
            this.colorblind = a.colorblind,
            this.tutorial = a.tutorial
        }
    }
}
;
var Xe;
class jo extends dt {
    constructor(t) {
        super();
        X(this, "played", 0);
        X(this, "lastGame", 0);
        X(this, "guesses", {
            fail: 0,
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0,
            6: 0
        });
        X(this, "streak");
        X(this, "maxStreak");
        Ss(this, Xe, !1);
        typeof t == "string" ? this.parse(t) : K.modes[t].streak && (this.streak = 0,
        this.maxStreak = 0,
        os(this, Xe, !0))
    }
    parse(t) {
        const a = JSON.parse(t);
        this.played = a.played,
        this.lastGame = a.lastGame,
        this.guesses = a.guesses,
        a.streak != null && (this.streak = a.streak,
        this.maxStreak = a.maxStreak,
        os(this, Xe, !0))
    }
    addWin(t, a) {
        ++this.guesses[t],
        ++this.played,
        as(this, Xe) && (this.streak = a.seed - this.lastGame > a.unit ? 1 : this.streak + 1,
        this.maxStreak = Math.max(this.streak, this.maxStreak)),
        this.lastGame = a.seed
    }
    addLoss(t) {
        ++this.guesses.fail,
        ++this.played,
        as(this, Xe) && (this.streak = 0),
        this.lastGame = t.seed
    }
    get hasStreak() {
        return as(this, Xe)
    }
}
Xe = new WeakMap;
class ft {
    constructor(e) {
        X(this, "a", "🔳");
        X(this, "b", "🔳");
        X(this, "c", "🔳");
        X(this, "d", "🔳");
        X(this, "e", "🔳");
        X(this, "f", "🔳");
        X(this, "g", "🔳");
        X(this, "h", "🔳");
        X(this, "i", "🔳");
        X(this, "j", "🔳");
        X(this, "k", "🔳");
        X(this, "l", "🔳");
        X(this, "m", "🔳");
        X(this, "n", "🔳");
        X(this, "o", "🔳");
        X(this, "p", "🔳");
        X(this, "q", "🔳");
        X(this, "r", "🔳");
        X(this, "s", "🔳");
        X(this, "t", "🔳");
        X(this, "u", "🔳");
        X(this, "v", "🔳");
        X(this, "w", "🔳");
        X(this, "x", "🔳");
        X(this, "y", "🔳");
        X(this, "z", "🔳");
        if (e)
            for (let t = 0; t < ze; ++t)
                for (let a = 0; a < e.words[t].length; ++a)
                    (this[e.words[t][a]] === "🔳" || e.state[t][a] === "🟩") && (this[e.words[t][a]] = e.state[t][a])
    }
    update(e, t) {
        e.forEach((a,o)=>{
            (this[t[o]] === "🔳" || a === "🟩") && (this[t[o]] = a)
        }
        )
    }
}
function tt(s) {
    return s.useTimeZone ? s.unit - (Date.now() - (s.seed + new Date().getTimezoneOffset() * ce.MINUTE)) : s.unit - (Date.now() - s.seed)
}
function at(s) {
    return !(s.active || s.guesses > 0 && s.board.state[s.guesses - 1].join("") === "🟩".repeat(ke))
}
const Ce = class {
    constructor(e, t=Ce.noop) {
        X(this, "stop");
        X(this, "start");
        X(this, "value");
        X(this, "subscribers");
        this.subscribers = new Set,
        this.start = t,
        this.value = e
    }
    set(e, t=!1) {
        if ((t || Ce.safe_not_equal(this.value, e)) && (this.value = e,
        stop)) {
            const a = !Ce.subscriber_queue.length;
            for (const o of this.subscribers)
                o[1](),
                Ce.subscriber_queue.push(o, this.value);
            if (a) {
                for (let o = 0; o < Ce.subscriber_queue.length; o += 2)
                    Ce.subscriber_queue[o][0](Ce.subscriber_queue[o + 1]);
                Ce.subscriber_queue.length = 0
            }
        }
    }
    update(e) {
        this.set(e(this.value))
    }
    subscribe(e, t=Ce.noop) {
        const a = [e, t];
        return this.subscribers.add(a),
        this.subscribers.size === 1 && (this.stop = this.start(this.set) || Ce.noop),
        e(this.value),
        ()=>{
            this.subscribers.delete(a),
            this.subscribers.size === 0 && (this.stop(),
            this.stop = null)
        }
    }
    static safe_not_equal(e, t) {
        return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function"
    }
    static noop() {
        return null
    }
}
;
let Ts = Ce;
X(Ts, "subscriber_queue", []);
const ne = new Ts
  , ws = ba(new ft)
  , Te = ba(new wa);
function $o(s) {
    let e, t, a;
    return {
        c() {
            e = q("div"),
            e.innerHTML = `share
	<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="white" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg>`,
            w(e, "class", "svelte-gyq5p4")
        },
        m(o, n) {
            $(o, e, n),
            t || (a = [V(e, "click", s[0]), V(e, "keydown", s[0])],
            t = !0)
        },
        p: G,
        i: G,
        o: G,
        d(o) {
            o && z(e),
            t = !1,
            le(a)
        }
    }
}
function So(s, e, t) {
    let a;
    je(s, ne, l=>t(2, a = l));
    let {state: o} = e;
    const n = hs("toaster");
    function i() {
        navigator.clipboard.writeText(`${K.modes[a].name} Wordle+ #${o.wordNumber} ${at(o) ? "X" : o.guesses}/${o.board.words.length}

    ${o.board.state.slice(0, o.guesses).map(l=>l.join("")).join(`
    `)}
mikhad.github.io/wordle`),
        n.pop("Copied")
    }
    return s.$$set = l=>{
        "state"in l && t(1, o = l.state)
    }
    ,
    [i, o]
}
class qo extends oe {
    constructor(e) {
        super(),
        ae(this, e, So, $o, ee, {
            state: 1
        })
    }
}
function xo(s) {
    let e, t, a, o, n, i, l;
    return {
        c() {
            e = q("div"),
            t = q("div"),
            a = D(s[0]),
            o = E(),
            n = q("div"),
            i = D(s[0]),
            w(t, "class", "front svelte-frmspd"),
            w(n, "class", "back svelte-frmspd"),
            w(e, "data-animation", s[5]),
            w(e, "class", l = "tile " + s[1] + " " + s[3] + " svelte-frmspd"),
            Ee(e, "transition-delay", s[2] * Fe + "ms"),
            te(e, "value", s[0]),
            te(e, "pop", s[4])
        },
        m(r, u) {
            $(r, e, u),
            k(e, t),
            k(t, a),
            k(e, o),
            k(e, n),
            k(n, i)
        },
        p(r, [u]) {
            u & 1 && J(a, r[0]),
            u & 1 && J(i, r[0]),
            u & 32 && w(e, "data-animation", r[5]),
            u & 10 && l !== (l = "tile " + r[1] + " " + r[3] + " svelte-frmspd") && w(e, "class", l),
            u & 4 && Ee(e, "transition-delay", r[2] * Fe + "ms"),
            u & 11 && te(e, "value", r[0]),
            u & 26 && te(e, "pop", r[4])
        },
        i: G,
        o: G,
        d(r) {
            r && z(e)
        }
    }
}
function Co(s, e, t) {
    let {value: a=""} = e
      , {state: o} = e
      , {position: n=0} = e;
    function i() {
        setTimeout(()=>t(5, u = "bounce"), (ze + n) * Fe)
    }
    let l, r = !1, u = "";
    const c = ne.subscribe(()=>{
        t(5, u = ""),
        t(3, l = "🔳"),
        setTimeout(()=>t(3, l = ""), 10)
    }
    );
    return setTimeout(()=>t(4, r = !0), 200),
    ha(c),
    s.$$set = d=>{
        "value"in d && t(0, a = d.value),
        "state"in d && t(1, o = d.state),
        "position"in d && t(2, n = d.position)
    }
    ,
    s.$$.update = ()=>{
        s.$$.dirty & 1 && !a && t(5, u = "")
    }
    ,
    [a, o, n, l, r, u, i]
}
class be extends oe {
    constructor(e) {
        super(),
        ae(this, e, Co, xo, ee, {
            value: 0,
            state: 1,
            position: 2,
            bounce: 6
        })
    }
    get bounce() {
        return this.$$.ctx[6]
    }
}
function qt(s, e, t) {
    const a = s.slice();
    return a[15] = e[t],
    a[16] = e,
    a[17] = t,
    a
}
function xt(s) {
    let e, t = s[17], a;
    const o = ()=>s[10](e, t)
      , n = ()=>s[10](null, t);
    let i = {
        state: s[3][s[17]],
        value: s[2].charAt(s[17]),
        position: s[17]
    };
    return e = new be({
        props: i
    }),
    o(),
    {
        c() {
            I(e.$$.fragment)
        },
        m(l, r) {
            A(e, l, r),
            a = !0
        },
        p(l, r) {
            t !== l[17] && (n(),
            t = l[17],
            o());
            const u = {};
            r & 8 && (u.state = l[3][l[17]]),
            r & 4 && (u.value = l[2].charAt(l[17])),
            e.$set(u)
        },
        i(l) {
            a || (j(e.$$.fragment, l),
            a = !0)
        },
        o(l) {
            x(e.$$.fragment, l),
            a = !1
        },
        d(l) {
            n(),
            R(e, l)
        }
    }
}
function To(s) {
    let e, t, a, o, n = Array(ke), i = [];
    for (let r = 0; r < n.length; r += 1)
        i[r] = xt(qt(s, n, r));
    const l = r=>x(i[r], 1, 1, ()=>{
        i[r] = null
    }
    );
    return {
        c() {
            e = q("div");
            for (let r = 0; r < i.length; r += 1)
                i[r].c();
            w(e, "class", "board-row svelte-ssibky"),
            w(e, "data-animation", s[4]),
            te(e, "complete", s[0] > s[1])
        },
        m(r, u) {
            $(r, e, u);
            for (let c = 0; c < i.length; c += 1)
                i[c].m(e, null);
            t = !0,
            a || (o = [V(e, "contextmenu", Ms(s[11])), V(e, "dblclick", Ms(s[12])), V(e, "touchstart", s[7]), V(e, "animationend", s[13])],
            a = !0)
        },
        p(r, [u]) {
            if (u & 44) {
                n = Array(ke);
                let c;
                for (c = 0; c < n.length; c += 1) {
                    const d = qt(r, n, c);
                    i[c] ? (i[c].p(d, u),
                    j(i[c], 1)) : (i[c] = xt(d),
                    i[c].c(),
                    j(i[c], 1),
                    i[c].m(e, null))
                }
                for (fe(),
                c = n.length; c < i.length; c += 1)
                    l(c);
                me()
            }
            (!t || u & 16) && w(e, "data-animation", r[4]),
            (!t || u & 3) && te(e, "complete", r[0] > r[1])
        },
        i(r) {
            if (!t) {
                for (let u = 0; u < n.length; u += 1)
                    j(i[u]);
                t = !0
            }
        },
        o(r) {
            i = i.filter(Boolean);
            for (let u = 0; u < i.length; u += 1)
                x(i[u]);
            t = !1
        },
        d(r) {
            r && z(e),
            Oe(i, r),
            a = !1,
            le(o)
        }
    }
}
const Mo = 400;
function No(s, e, t) {
    let {guesses: a} = e
      , {num: o} = e
      , {value: n=""} = e
      , {state: i} = e;
    function l() {
        t(4, c = "shake")
    }
    function r() {
        d.forEach(y=>y.bounce())
    }
    const u = Ye();
    let c = ""
      , d = []
      , f = 0;
    function m(y) {
        Date.now() - f <= Mo ? (y.preventDefault(),
        u("ctx", {
            x: y.changedTouches[0].clientX,
            y: y.changedTouches[0].clientY
        })) : f = Date.now()
    }
    function p(y, v) {
        ie[y ? "unshift" : "push"](()=>{
            d[v] = y,
            t(5, d)
        }
        )
    }
    const h = y=>u("ctx", {
        x: y.clientX,
        y: y.clientY
    })
      , g = y=>u("ctx", {
        x: y.clientX,
        y: y.clientY
    })
      , b = ()=>t(4, c = "");
    return s.$$set = y=>{
        "guesses"in y && t(0, a = y.guesses),
        "num"in y && t(1, o = y.num),
        "value"in y && t(2, n = y.value),
        "state"in y && t(3, i = y.state)
    }
    ,
    [a, o, n, i, c, d, u, m, l, r, p, h, g, b]
}
class Eo extends oe {
    constructor(e) {
        super(),
        ae(this, e, No, To, ee, {
            guesses: 0,
            num: 1,
            value: 2,
            state: 3,
            shake: 8,
            bounce: 9
        })
    }
    get shake() {
        return this.$$.ctx[8]
    }
    get bounce() {
        return this.$$.ctx[9]
    }
}
function Lo(s) {
    let e, t, a = s[3] > 1 ? "are" : "is", o, n, i, l, r, u, c, d = s[3] > 1 ? "s" : "", f, m, p, h, g, b, y = s[4] > 1 ? "es" : "", v;
    return {
        c() {
            e = q("div"),
            t = D("Considering all hints, there "),
            o = D(a),
            n = D(`:
			`),
            i = q("br"),
            l = q("br"),
            r = E(),
            u = D(s[3]),
            c = D(" possible answer"),
            f = D(d),
            m = E(),
            p = q("br"),
            h = E(),
            g = D(s[4]),
            b = D(" valid guess"),
            v = D(y)
        },
        m(S, C) {
            $(S, e, C),
            k(e, t),
            k(e, o),
            k(e, n),
            k(e, i),
            k(e, l),
            k(e, r),
            k(e, u),
            k(e, c),
            k(e, f),
            k(e, m),
            k(e, p),
            k(e, h),
            k(e, g),
            k(e, b),
            k(e, v)
        },
        p(S, C) {
            C & 8 && a !== (a = S[3] > 1 ? "are" : "is") && J(o, a),
            C & 8 && J(u, S[3]),
            C & 8 && d !== (d = S[3] > 1 ? "s" : "") && J(f, d),
            C & 16 && J(g, S[4]),
            C & 16 && y !== (y = S[4] > 1 ? "es" : "") && J(v, y)
        },
        i: G,
        o: G,
        d(S) {
            S && z(e)
        }
    }
}
function Oo(s) {
    let e, t, a, o, n, i, l, r = s[3] > 1 ? "s" : "", u, c, d, f, m, p, h = s[4] > 1 ? "es" : "", g, b, y, v;
    return y = new ya({
        props: {
            word: s[2],
            alternates: 1
        }
    }),
    {
        c() {
            e = q("div"),
            t = D(`Considering all hints, this row had:
			`),
            a = q("br"),
            o = q("br"),
            n = E(),
            i = D(s[3]),
            l = D(" possible answer"),
            u = D(r),
            c = E(),
            d = q("br"),
            f = E(),
            m = D(s[4]),
            p = D(" valid guess"),
            g = D(h),
            b = E(),
            I(y.$$.fragment)
        },
        m(S, C) {
            $(S, e, C),
            k(e, t),
            k(e, a),
            k(e, o),
            k(e, n),
            k(e, i),
            k(e, l),
            k(e, u),
            k(e, c),
            k(e, d),
            k(e, f),
            k(e, m),
            k(e, p),
            k(e, g),
            $(S, b, C),
            A(y, S, C),
            v = !0
        },
        p(S, C) {
            (!v || C & 8) && J(i, S[3]),
            (!v || C & 8) && r !== (r = S[3] > 1 ? "s" : "") && J(u, r),
            (!v || C & 16) && J(m, S[4]),
            (!v || C & 16) && h !== (h = S[4] > 1 ? "es" : "") && J(g, h);
            const N = {};
            C & 4 && (N.word = S[2]),
            y.$set(N)
        },
        i(S) {
            v || (j(y.$$.fragment, S),
            v = !0)
        },
        o(S) {
            x(y.$$.fragment, S),
            v = !1
        },
        d(S) {
            S && z(e),
            S && z(b),
            R(y, S)
        }
    }
}
function Do(s) {
    let e, t, a, o;
    const n = [Oo, Lo]
      , i = [];
    function l(r, u) {
        return r[2] !== "" ? 0 : 1
    }
    return t = l(s),
    a = i[t] = n[t](s),
    {
        c() {
            e = q("div"),
            a.c(),
            w(e, "class", "ctx-menu svelte-uw0qlf"),
            Ee(e, "top", s[1] + "px"),
            Ee(e, "left", s[0] + "px")
        },
        m(r, u) {
            $(r, e, u),
            i[t].m(e, null),
            o = !0
        },
        p(r, [u]) {
            let c = t;
            t = l(r),
            t === c ? i[t].p(r, u) : (fe(),
            x(i[c], 1, 1, ()=>{
                i[c] = null
            }
            ),
            me(),
            a = i[t],
            a ? a.p(r, u) : (a = i[t] = n[t](r),
            a.c()),
            j(a, 1),
            a.m(e, null)),
            (!o || u & 2) && Ee(e, "top", r[1] + "px"),
            (!o || u & 1) && Ee(e, "left", r[0] + "px")
        },
        i(r) {
            o || (j(a),
            o = !0)
        },
        o(r) {
            x(a),
            o = !1
        },
        d(r) {
            r && z(e),
            i[t].d()
        }
    }
}
function Ho(s, e, t) {
    let {x: a=0} = e
      , {y: o=0} = e
      , {word: n=""} = e
      , {pAns: i} = e
      , {pSols: l} = e;
    const r = +getComputedStyle(document.body).getPropertyValue("--game-width") / 2;
    return s.$$set = u=>{
        "x"in u && t(0, a = u.x),
        "y"in u && t(1, o = u.y),
        "word"in u && t(2, n = u.word),
        "pAns"in u && t(3, i = u.pAns),
        "pSols"in u && t(4, l = u.pSols)
    }
    ,
    s.$$.update = ()=>{
        s.$$.dirty & 1 && t(0, a = window.innerWidth - a < r ? window.innerWidth - r : a)
    }
    ,
    [a, o, n, i, l]
}
class Ao extends oe {
    constructor(e) {
        super(),
        ae(this, e, Ho, Do, ee, {
            x: 0,
            y: 1,
            word: 2,
            pAns: 3,
            pSols: 4
        })
    }
}
function Ro(s) {
    const e = s - 1;
    return e * e * e + 1
}
function fs(s, {delay: e=0, duration: t=400, easing: a=Is}={}) {
    const o = +getComputedStyle(s).opacity;
    return {
        delay: e,
        duration: t,
        easing: a,
        css: n=>`opacity: ${n * o}`
    }
}
function Rs(s, {delay: e=0, duration: t=400, easing: a=Ro, start: o=0, opacity: n=0}={}) {
    const i = getComputedStyle(s)
      , l = +i.opacity
      , r = i.transform === "none" ? "" : i.transform
      , u = 1 - o
      , c = l * (1 - n);
    return {
        delay: e,
        duration: t,
        easing: a,
        css: (d,f)=>`
			transform: ${r} scale(${1 - u * f});
			opacity: ${l - c * f}
		`
    }
}
function Ct(s, e, t) {
    const a = s.slice();
    return a[28] = e[t],
    a[29] = e,
    a[30] = t,
    a
}
function Tt(s) {
    let e, t;
    return e = new Ao({
        props: {
            pAns: s[7],
            pSols: s[8],
            x: s[9],
            y: s[10],
            word: s[11]
        }
    }),
    {
        c() {
            I(e.$$.fragment)
        },
        m(a, o) {
            A(e, a, o),
            t = !0
        },
        p(a, o) {
            const n = {};
            o & 128 && (n.pAns = a[7]),
            o & 256 && (n.pSols = a[8]),
            o & 512 && (n.x = a[9]),
            o & 1024 && (n.y = a[10]),
            o & 2048 && (n.word = a[11]),
            e.$set(n)
        },
        i(a) {
            t || (j(e.$$.fragment, a),
            t = !0)
        },
        o(a) {
            x(e.$$.fragment, a),
            t = !1
        },
        d(a) {
            R(e, a)
        }
    }
}
function Mt(s) {
    let e, t = s[30], a, o;
    const n = ()=>s[20](e, t)
      , i = ()=>s[20](null, t);
    function l(c) {
        s[21](c, s[30])
    }
    function r(...c) {
        return s[22](s[30], ...c)
    }
    let u = {
        num: s[30],
        guesses: s[2],
        state: s[1].state[s[30]]
    };
    return s[0][s[30]] !== void 0 && (u.value = s[0][s[30]]),
    e = new Eo({
        props: u
    }),
    n(),
    ie.push(()=>pe(e, "value", l)),
    e.$on("ctx", r),
    {
        c() {
            I(e.$$.fragment)
        },
        m(c, d) {
            A(e, c, d),
            o = !0
        },
        p(c, d) {
            s = c,
            t !== s[30] && (i(),
            t = s[30],
            n());
            const f = {};
            d & 4 && (f.guesses = s[2]),
            d & 2 && (f.state = s[1].state[s[30]]),
            !a && d & 1 && (a = !0,
            f.value = s[0][s[30]],
            he(()=>a = !1)),
            e.$set(f)
        },
        i(c) {
            o || (j(e.$$.fragment, c),
            o = !0)
        },
        o(c) {
            x(e.$$.fragment, c),
            o = !1
        },
        d(c) {
            i(),
            R(e, c)
        }
    }
}
function Nt(s) {
    let e, t;
    return {
        c() {
            e = ge("svg"),
            t = ge("path"),
            w(t, "d", s[3]),
            w(t, "stroke-width", "14"),
            w(t, "class", "svelte-1a3c44u"),
            w(e, "xmlns", "http://www.w3.org/2000/svg"),
            w(e, "viewBox", "0 0 200 200"),
            w(e, "fill", "none"),
            w(e, "class", "svelte-1a3c44u")
        },
        m(a, o) {
            $(a, e, o),
            k(e, t)
        },
        p(a, o) {
            o & 8 && w(t, "d", a[3])
        },
        d(a) {
            a && z(e)
        }
    }
}
function Et(s) {
    let e, t, a, o, n;
    return {
        c() {
            e = q("div"),
            e.innerHTML = `double tap a row to see a word&#39;s definition, or how many words can be played there
			<span class="ok">OK</span>`,
            w(e, "class", "tutorial svelte-1a3c44u")
        },
        m(i, l) {
            $(i, e, l),
            a = !0,
            o || (n = [V(e, "click", s[23]), V(e, "keydown", s[24])],
            o = !0)
        },
        p: G,
        i(i) {
            a || ($e(()=>{
                t || (t = Ve(e, Rs, {}, !0)),
                t.run(1)
            }
            ),
            a = !0)
        },
        o(i) {
            t || (t = Ve(e, Rs, {}, !1)),
            t.run(0),
            a = !1
        },
        d(i) {
            i && z(e),
            i && t && t.end(),
            o = !1,
            le(n)
        }
    }
}
function Io(s) {
    let e, t, a, o, n, i, l, r = s[6] && Tt(s), u = s[0], c = [];
    for (let p = 0; p < u.length; p += 1)
        c[p] = Mt(Ct(s, u, p));
    const d = p=>x(c[p], 1, 1, ()=>{
        c[p] = null
    }
    );
    let f = s[3] && Nt(s)
      , m = s[4] && Et(s);
    return {
        c() {
            r && r.c(),
            e = E(),
            t = q("div");
            for (let p = 0; p < c.length; p += 1)
                c[p].c();
            a = E(),
            f && f.c(),
            o = E(),
            m && m.c(),
            w(t, "class", "board svelte-1a3c44u")
        },
        m(p, h) {
            r && r.m(p, h),
            $(p, e, h),
            $(p, t, h);
            for (let g = 0; g < c.length; g += 1)
                c[g].m(t, null);
            k(t, a),
            f && f.m(t, null),
            k(t, o),
            m && m.m(t, null),
            n = !0,
            i || (l = [V(t, "touchstart", s[14]), V(t, "touchend", s[15]), V(t, "touchmove", Ms(s[19]))],
            i = !0)
        },
        p(p, [h]) {
            if (p[6] ? r ? (r.p(p, h),
            h & 64 && j(r, 1)) : (r = Tt(p),
            r.c(),
            j(r, 1),
            r.m(e.parentNode, e)) : r && (fe(),
            x(r, 1, 1, ()=>{
                r = null
            }
            ),
            me()),
            h & 8231) {
                u = p[0];
                let g;
                for (g = 0; g < u.length; g += 1) {
                    const b = Ct(p, u, g);
                    c[g] ? (c[g].p(b, h),
                    j(c[g], 1)) : (c[g] = Mt(b),
                    c[g].c(),
                    j(c[g], 1),
                    c[g].m(t, a))
                }
                for (fe(),
                g = u.length; g < c.length; g += 1)
                    d(g);
                me()
            }
            p[3] ? f ? f.p(p, h) : (f = Nt(p),
            f.c(),
            f.m(t, o)) : f && (f.d(1),
            f = null),
            p[4] ? m ? (m.p(p, h),
            h & 16 && j(m, 1)) : (m = Et(p),
            m.c(),
            j(m, 1),
            m.m(t, null)) : m && (fe(),
            x(m, 1, 1, ()=>{
                m = null
            }
            ),
            me())
        },
        i(p) {
            if (!n) {
                j(r);
                for (let h = 0; h < u.length; h += 1)
                    j(c[h]);
                j(m),
                n = !0
            }
        },
        o(p) {
            x(r),
            c = c.filter(Boolean);
            for (let h = 0; h < c.length; h += 1)
                x(c[h]);
            x(m),
            n = !1
        },
        d(p) {
            r && r.d(p),
            p && z(e),
            p && z(t),
            Oe(c, p),
            f && f.d(),
            m && m.d(),
            i = !1,
            le(l)
        }
    }
}
const Po = 120
  , Wo = 100
  , Uo = 300;
function Bo(s, e, t) {
    let {value: a} = e
      , {board: o} = e
      , {guesses: n} = e
      , {icon: i} = e
      , {tutorial: l} = e;
    function r(W) {
        f[W].shake()
    }
    function u(W) {
        f[W].bounce()
    }
    function c(W) {
        (!W || !W.defaultPrevented) && t(6, m = !1)
    }
    const d = Ye();
    let f = []
      , m = !1
      , p = 0
      , h = 0
      , g = 0
      , b = 0
      , y = "";
    function v(W, se, de, Se) {
        if (n >= de) {
            t(9, g = W),
            t(10, b = se),
            t(6, m = !0),
            t(11, y = n > de ? Se : "");
            const B = wo(de, o);
            t(7, p = Je.words.filter(Q=>B(Q)).length),
            t(8, h = p + Je.valid.filter(Q=>B(Q)).length)
        }
    }
    let S, C, N;
    function L(W) {
        S = W.changedTouches[0].pageX,
        C = W.changedTouches[0].pageY,
        N = Date.now()
    }
    function _(W) {
        let se = W.changedTouches[0].clientX - S
          , de = W.changedTouches[0].clientY - C;
        Date.now() - N > Uo || Math.abs(se) >= Po && Math.abs(de) < Wo && d("swipe", {
            direction: se < 0 ? "left" : "right"
        })
    }
    function O(W) {
        Ea.call(this, s, W)
    }
    function M(W, se) {
        ie[W ? "unshift" : "push"](()=>{
            f[se] = W,
            t(5, f)
        }
        )
    }
    function T(W, se) {
        s.$$.not_equal(a[se], W) && (a[se] = W,
        t(0, a))
    }
    const F = (W,se)=>v(se.detail.x, se.detail.y, W, a[W])
      , re = ()=>d("closeTutPopUp")
      , Z = ()=>d("closeTutPopUp");
    return s.$$set = W=>{
        "value"in W && t(0, a = W.value),
        "board"in W && t(1, o = W.board),
        "guesses"in W && t(2, n = W.guesses),
        "icon"in W && t(3, i = W.icon),
        "tutorial"in W && t(4, l = W.tutorial)
    }
    ,
    [a, o, n, i, l, f, m, p, h, g, b, y, d, v, L, _, r, u, c, O, M, T, F, re, Z]
}
class Go extends oe {
    constructor(e) {
        super(),
        ae(this, e, Bo, Io, ee, {
            value: 0,
            board: 1,
            guesses: 2,
            icon: 3,
            tutorial: 4,
            shake: 16,
            bounce: 17,
            hideCtx: 18
        })
    }
    get shake() {
        return this.$$.ctx[16]
    }
    get bounce() {
        return this.$$.ctx[17]
    }
    get hideCtx() {
        return this.$$.ctx[18]
    }
}
function Xo(s) {
    let e, t, a, o, n, i, l, r, u, c, d, f, m, p, h, g, b, y, v, S, C, N, L, _, O, M, T, F, re, Z, W, se, de, Se, B, Q, ye, Me, we, H, Y, De, ue, qe, He, xe, U, Ne, mt, ss, pt, ts, ht, $s, Ps, gs, ys;
    return y = new be({
        props: {
            value: "w",
            state: "🟩"
        }
    }),
    S = new be({
        props: {
            value: "e",
            state: "🔳"
        }
    }),
    N = new be({
        props: {
            value: "a",
            state: "🔳"
        }
    }),
    _ = new be({
        props: {
            value: "r",
            state: "🔳"
        }
    }),
    M = new be({
        props: {
            value: "y",
            state: "🔳"
        }
    }),
    W = new be({
        props: {
            value: "p",
            state: "🔳"
        }
    }),
    de = new be({
        props: {
            value: "i",
            state: "🟨"
        }
    }),
    B = new be({
        props: {
            value: "l",
            state: "🔳"
        }
    }),
    ye = new be({
        props: {
            value: "l",
            state: "🔳"
        }
    }),
    we = new be({
        props: {
            value: "s",
            state: "🔳"
        }
    }),
    qe = new be({
        props: {
            value: "v",
            state: "🔳"
        }
    }),
    xe = new be({
        props: {
            value: "a",
            state: "🔳"
        }
    }),
    Ne = new be({
        props: {
            value: "g",
            state: "🔳"
        }
    }),
    ss = new be({
        props: {
            value: "u",
            state: "⬛"
        }
    }),
    ts = new be({
        props: {
            value: "e",
            state: "🔳"
        }
    }),
    {
        c() {
            e = q("h3"),
            e.textContent = "how to play",
            t = E(),
            a = q("div"),
            o = D("Guess the "),
            n = q("strong"),
            n.textContent = "WORDLE",
            i = D(" in "),
            l = D(ze),
            r = D(" tries."),
            u = E(),
            c = q("div"),
            c.textContent = `Each guess must be a valid ${ke} letter word. Hit the enter button to submit.`,
            d = E(),
            f = q("div"),
            f.textContent = `After each guess, the color of the tiles will change to show how close your guess was to the
	word.`,
            m = E(),
            p = q("div"),
            h = q("div"),
            h.innerHTML = "<strong>Examples</strong>",
            g = E(),
            b = q("div"),
            I(y.$$.fragment),
            v = E(),
            I(S.$$.fragment),
            C = E(),
            I(N.$$.fragment),
            L = E(),
            I(_.$$.fragment),
            O = E(),
            I(M.$$.fragment),
            T = E(),
            F = q("div"),
            F.innerHTML = "The letter <strong>W</strong> is in the word and in the correct spot.",
            re = E(),
            Z = q("div"),
            I(W.$$.fragment),
            se = E(),
            I(de.$$.fragment),
            Se = E(),
            I(B.$$.fragment),
            Q = E(),
            I(ye.$$.fragment),
            Me = E(),
            I(we.$$.fragment),
            H = E(),
            Y = q("div"),
            Y.innerHTML = "The letter <strong>I</strong> is in the word but in the wrong spot.",
            De = E(),
            ue = q("div"),
            I(qe.$$.fragment),
            He = E(),
            I(xe.$$.fragment),
            U = E(),
            I(Ne.$$.fragment),
            mt = E(),
            I(ss.$$.fragment),
            pt = E(),
            I(ts.$$.fragment),
            ht = E(),
            $s = q("div"),
            $s.innerHTML = "The letter <strong>U</strong> is not in the word in any spot.",
            Ps = E(),
            gs = q("div"),
            gs.innerHTML = `This is a recreation of the original <a href="https://www.nytimes.com/games/wordle/" target="_blank" rel="noreferrer">Wordle</a>
	by Josh Wardle with additional modes and features, allowing you to play infinite wordles. Switch
	to infinite mode to play an unlimited number of times.
	<br/><br/>
	Open the settings menu to see some of the additional features.
	<br/>
	Written with Svelte, in Typescript by
	<a href="https://github.com/MikhaD" target="_blank" rel="noreferrer">MikhaD</a>.`,
            w(a, "class", "svelte-6daei"),
            w(c, "class", "svelte-6daei"),
            w(f, "class", "svelte-6daei"),
            w(h, "class", "svelte-6daei"),
            w(b, "class", "row svelte-6daei"),
            w(F, "class", "svelte-6daei"),
            w(Z, "class", "row svelte-6daei"),
            w(Y, "class", "svelte-6daei"),
            w(ue, "class", "row svelte-6daei"),
            w($s, "class", "svelte-6daei"),
            w(p, "class", "examples svelte-6daei"),
            te(p, "complete", s[0]),
            w(gs, "class", "svelte-6daei")
        },
        m(P, _e) {
            $(P, e, _e),
            $(P, t, _e),
            $(P, a, _e),
            k(a, o),
            k(a, n),
            k(a, i),
            k(a, l),
            k(a, r),
            $(P, u, _e),
            $(P, c, _e),
            $(P, d, _e),
            $(P, f, _e),
            $(P, m, _e),
            $(P, p, _e),
            k(p, h),
            k(p, g),
            k(p, b),
            A(y, b, null),
            k(b, v),
            A(S, b, null),
            k(b, C),
            A(N, b, null),
            k(b, L),
            A(_, b, null),
            k(b, O),
            A(M, b, null),
            k(p, T),
            k(p, F),
            k(p, re),
            k(p, Z),
            A(W, Z, null),
            k(Z, se),
            A(de, Z, null),
            k(Z, Se),
            A(B, Z, null),
            k(Z, Q),
            A(ye, Z, null),
            k(Z, Me),
            A(we, Z, null),
            k(p, H),
            k(p, Y),
            k(p, De),
            k(p, ue),
            A(qe, ue, null),
            k(ue, He),
            A(xe, ue, null),
            k(ue, U),
            A(Ne, ue, null),
            k(ue, mt),
            A(ss, ue, null),
            k(ue, pt),
            A(ts, ue, null),
            k(p, ht),
            k(p, $s),
            $(P, Ps, _e),
            $(P, gs, _e),
            ys = !0
        },
        p(P, [_e]) {
            (!ys || _e & 1) && te(p, "complete", P[0])
        },
        i(P) {
            ys || (j(y.$$.fragment, P),
            j(S.$$.fragment, P),
            j(N.$$.fragment, P),
            j(_.$$.fragment, P),
            j(M.$$.fragment, P),
            j(W.$$.fragment, P),
            j(de.$$.fragment, P),
            j(B.$$.fragment, P),
            j(ye.$$.fragment, P),
            j(we.$$.fragment, P),
            j(qe.$$.fragment, P),
            j(xe.$$.fragment, P),
            j(Ne.$$.fragment, P),
            j(ss.$$.fragment, P),
            j(ts.$$.fragment, P),
            ys = !0)
        },
        o(P) {
            x(y.$$.fragment, P),
            x(S.$$.fragment, P),
            x(N.$$.fragment, P),
            x(_.$$.fragment, P),
            x(M.$$.fragment, P),
            x(W.$$.fragment, P),
            x(de.$$.fragment, P),
            x(B.$$.fragment, P),
            x(ye.$$.fragment, P),
            x(we.$$.fragment, P),
            x(qe.$$.fragment, P),
            x(xe.$$.fragment, P),
            x(Ne.$$.fragment, P),
            x(ss.$$.fragment, P),
            x(ts.$$.fragment, P),
            ys = !1
        },
        d(P) {
            P && z(e),
            P && z(t),
            P && z(a),
            P && z(u),
            P && z(c),
            P && z(d),
            P && z(f),
            P && z(m),
            P && z(p),
            R(y),
            R(S),
            R(N),
            R(_),
            R(M),
            R(W),
            R(de),
            R(B),
            R(ye),
            R(we),
            R(qe),
            R(xe),
            R(Ne),
            R(ss),
            R(ts),
            P && z(Ps),
            P && z(gs)
        }
    }
}
function Vo(s, e, t) {
    let {visible: a} = e;
    return s.$$set = o=>{
        "visible"in o && t(0, a = o.visible)
    }
    ,
    [a]
}
class Yo extends oe {
    constructor(e) {
        super(),
        ae(this, e, Vo, Xo, ee, {
            visible: 0
        })
    }
}
function Fo(s) {
    let e, t, a;
    return {
        c() {
            e = q("div"),
            e.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-1pg4aff"><path d="M4.609 12c0-4.082 3.309-7.391 7.391-7.391a7.39 7.39 0 0 1 6.523 3.912l-1.653 1.567H22v-5.13l-1.572 1.659C18.652 3.841 15.542 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10c4.589 0 8.453-3.09 9.631-7.301l-2.512-.703c-.871 3.113-3.73 5.395-7.119 5.395-4.082 0-7.391-3.309-7.391-7.391z"></path></svg>',
            w(e, "class", "button svelte-1pg4aff")
        },
        m(o, n) {
            $(o, e, n),
            t || (a = [V(e, "click", s[4]), V(e, "keydown", s[5])],
            t = !0)
        },
        p: G,
        d(o) {
            o && z(e),
            t = !1,
            le(a)
        }
    }
}
function Ko(s) {
    let e, t = `${Math.floor(s[0] / ce.HOUR)}`.padStart(2, "0") + "", a, o, n = `${Math.floor(s[0] % ce.HOUR / ce.MINUTE)}`.padStart(2, "0") + "", i, l, r = `${Math.floor(s[0] % ce.MINUTE / ce.SECOND)}`.padStart(2, "0") + "", u;
    return {
        c() {
            e = q("div"),
            a = D(t),
            o = D(":"),
            i = D(n),
            l = D(":"),
            u = D(r),
            w(e, "class", "timer svelte-1pg4aff")
        },
        m(c, d) {
            $(c, e, d),
            k(e, a),
            k(e, o),
            k(e, i),
            k(e, l),
            k(e, u)
        },
        p(c, d) {
            d & 1 && t !== (t = `${Math.floor(c[0] / ce.HOUR)}`.padStart(2, "0") + "") && J(a, t),
            d & 1 && n !== (n = `${Math.floor(c[0] % ce.HOUR / ce.MINUTE)}`.padStart(2, "0") + "") && J(i, n),
            d & 1 && r !== (r = `${Math.floor(c[0] % ce.MINUTE / ce.SECOND)}`.padStart(2, "0") + "") && J(u, r)
        },
        d(c) {
            c && z(e)
        }
    }
}
function Jo(s) {
    let e, t, a;
    function o(l, r) {
        return l[0] > 0 ? Ko : Fo
    }
    let n = o(s)
      , i = n(s);
    return {
        c() {
            e = q("h3"),
            e.textContent = "Next wordle",
            t = E(),
            a = q("div"),
            i.c(),
            w(e, "class", "svelte-1pg4aff"),
            w(a, "class", "container svelte-1pg4aff")
        },
        m(l, r) {
            $(l, e, r),
            $(l, t, r),
            $(l, a, r),
            i.m(a, null)
        },
        p(l, [r]) {
            n === (n = o(l)) && i ? i.p(l, r) : (i.d(1),
            i = n(l),
            i && (i.c(),
            i.m(a, null)))
        },
        i: G,
        o: G,
        d(l) {
            l && z(e),
            l && z(t),
            l && z(a),
            i.d()
        }
    }
}
function Zo(s, e, t) {
    let a;
    je(s, ne, c=>t(3, a = c));
    const o = Ye();
    let n = 1e3, i;
    function l(c) {
        clearInterval(i),
        t(0, n = tt(K.modes[c])),
        n < 0 && o("timeup"),
        i = setInterval(()=>{
            t(0, n = tt(K.modes[c])),
            n < 0 && (clearInterval(i),
            o("timeup"))
        }
        , ce.SECOND)
    }
    const r = ()=>o("reload")
      , u = ()=>o("reload");
    return s.$$.update = ()=>{
        s.$$.dirty & 8 && l(a)
    }
    ,
    [n, o, l, a, r, u]
}
class Qo extends oe {
    constructor(e) {
        super(),
        ae(this, e, Zo, Jo, ee, {
            reset: 2
        })
    }
    get reset() {
        return this.$$.ctx[2]
    }
}
function Lt(s, e, t) {
    const a = s.slice();
    return a[2] = e[t],
    a
}
function Ot(s) {
    let e, t = s[2] + "", a, o, n;
    return {
        c() {
            e = q("div"),
            a = D(t),
            w(e, "class", "slice svelte-1dgg1bc")
        },
        m(i, l) {
            $(i, e, l),
            k(e, a),
            n = !0
        },
        p(i, l) {
            (!n || l & 1) && t !== (t = i[2] + "") && J(a, t)
        },
        i(i) {
            n || (o && o.end(1),
            n = !0)
        },
        o(i) {
            o = Aa(e, fs, {
                duration: 200
            }),
            n = !1
        },
        d(i) {
            i && z(e),
            i && o && o.end()
        }
    }
}
function er(s) {
    let e, t, a = s[0], o = [];
    for (let i = 0; i < a.length; i += 1)
        o[i] = Ot(Lt(s, a, i));
    const n = i=>x(o[i], 1, 1, ()=>{
        o[i] = null
    }
    );
    return {
        c() {
            e = q("div");
            for (let i = 0; i < o.length; i += 1)
                o[i].c();
            w(e, "class", "toast svelte-1dgg1bc")
        },
        m(i, l) {
            $(i, e, l);
            for (let r = 0; r < o.length; r += 1)
                o[r].m(e, null);
            t = !0
        },
        p(i, [l]) {
            if (l & 1) {
                a = i[0];
                let r;
                for (r = 0; r < a.length; r += 1) {
                    const u = Lt(i, a, r);
                    o[r] ? (o[r].p(u, l),
                    j(o[r], 1)) : (o[r] = Ot(u),
                    o[r].c(),
                    j(o[r], 1),
                    o[r].m(e, null))
                }
                for (fe(),
                r = a.length; r < o.length; r += 1)
                    n(r);
                me()
            }
        },
        i(i) {
            if (!t) {
                for (let l = 0; l < a.length; l += 1)
                    j(o[l]);
                t = !0
            }
        },
        o(i) {
            o = o.filter(Boolean);
            for (let l = 0; l < o.length; l += 1)
                x(o[l]);
            t = !1
        },
        d(i) {
            i && z(e),
            Oe(o, i)
        }
    }
}
function sr(s, e, t) {
    function a(n, i=1) {
        t(0, o = [n, ...o]),
        setTimeout(()=>t(0, o = o.slice(0, o.length - 1)), i * 1e3)
    }
    let o = [];
    return [o, a]
}
class tr extends oe {
    constructor(e) {
        super(),
        ae(this, e, sr, er, ee, {
            pop: 1
        })
    }
    get pop() {
        return this.$$.ctx[1]
    }
}
function ar(s) {
    let e, t, a, o = s[0] + 1 + "", n, i, l = Ge.length + "", r, u, c, d = Ge[s[0]] + "", f, m, p, h, g, b, y, v, S;
    return {
        c() {
            e = q("div"),
            t = q("div"),
            a = D("Tip "),
            n = D(o),
            i = D("/"),
            r = D(l),
            u = E(),
            c = q("div"),
            f = D(d),
            m = E(),
            p = ge("svg"),
            h = ge("path"),
            g = E(),
            b = ge("svg"),
            y = ge("path"),
            w(t, "class", "number svelte-ksmmv8"),
            w(c, "class", "tip svelte-ksmmv8"),
            w(h, "d", "M75,0L25,50L75,100z"),
            w(p, "class", "left svelte-ksmmv8"),
            w(p, "xmlns", "http://www.w3.org/2000/svg"),
            w(p, "viewBox", "0 0 100 100"),
            w(y, "d", "M25,0L75,50L25,100z"),
            w(b, "class", "right svelte-ksmmv8"),
            w(b, "xmlns", "http://www.w3.org/2000/svg"),
            w(b, "viewBox", "0 0 100 100"),
            w(e, "class", "outer svelte-ksmmv8")
        },
        m(C, N) {
            $(C, e, N),
            k(e, t),
            k(t, a),
            k(t, n),
            k(t, i),
            k(t, r),
            k(e, u),
            k(e, c),
            k(c, f),
            k(e, m),
            k(e, p),
            k(p, h),
            k(e, g),
            k(e, b),
            k(b, y),
            v || (S = [V(p, "click", s[2]), V(p, "keydown", s[2]), V(b, "click", s[1]), V(b, "keypress", s[1])],
            v = !0)
        },
        p(C, [N]) {
            N & 1 && o !== (o = C[0] + 1 + "") && J(n, o),
            N & 1 && d !== (d = Ge[C[0]] + "") && J(f, d)
        },
        i: G,
        o: G,
        d(C) {
            C && z(e),
            v = !1,
            le(S)
        }
    }
}
const Ge = ["You can change the gamemode by clicking WORDLE+ or swiping the board left or right.", "Hard mode is game mode specific. Turning it on in one game mode won't change it on the others.", "Double tap or right click a word on the board to learn its definition.", "Hard mode can be enabled during a game if you haven't violated the hard mode rules yet.", "Double tap or right click the next row to see how many possible words can be played there, if you use all the previous information.", "Because words are chosen from the list randomly it is possible to get the same word again.", "When you see the refresh button in the top left corner it means a new word is ready.", "Everyone has the same wordle at the same time. Your word #73 is the same as everyone elses #73.", "There are more valid guesses than possible words, ie. not all 5 letter words can be selected as an answer by the game.", "Historical games don't count towards your stats. Historical games are when you follow a link to a specific game number.", "Only the data for latest historical game is saved for each game mode."];
function or(s, e, t) {
    let {change: a} = e
      , o = Math.floor(Ge.length * Math.random());
    function n() {
        t(0, o = (o + 1) % Ge.length)
    }
    function i() {
        t(0, o = (o - 1 + Ge.length) % Ge.length)
    }
    return s.$$set = l=>{
        "change"in l && t(3, a = l.change)
    }
    ,
    s.$$.update = ()=>{
        s.$$.dirty & 8 && a && t(0, o = Math.floor(Ge.length * Math.random()))
    }
    ,
    [o, n, i, a]
}
class rr extends oe {
    constructor(e) {
        super(),
        ae(this, e, or, ar, ee, {
            change: 3
        })
    }
}
function ir(s) {
    let e, t, a, o;
    const n = s[2].default
      , i = Pe(n, s, s[1], null);
    return {
        c() {
            e = ge("svg"),
            i && i.c(),
            w(e, "xmlns", "http://www.w3.org/2000/svg"),
            w(e, "viewBox", "0 0 24 24"),
            w(e, "class", "svelte-17ud64h")
        },
        m(l, r) {
            $(l, e, r),
            i && i.m(e, null),
            t = !0,
            a || (o = [V(e, "click", function() {
                Ie(s[0]) && s[0].apply(this, arguments)
            }), V(e, "keypress", function() {
                Ie(s[0]) && s[0].apply(this, arguments)
            })],
            a = !0)
        },
        p(l, [r]) {
            s = l,
            i && i.p && (!t || r & 2) && Ue(i, n, s, s[1], t ? We(n, s[1], r, null) : Be(s[1]), null)
        },
        i(l) {
            t || (j(i, l),
            t = !0)
        },
        o(l) {
            x(i, l),
            t = !1
        },
        d(l) {
            l && z(e),
            i && i.d(l),
            a = !1,
            le(o)
        }
    }
}
function nr(s, e, t) {
    let {$$slots: a={}, $$scope: o} = e
      , {onClick: n=()=>{}
    } = e;
    return s.$$set = i=>{
        "onClick"in i && t(0, n = i.onClick),
        "$$scope"in i && t(1, o = i.$$scope)
    }
    ,
    [n, o, a]
}
class ms extends oe {
    constructor(e) {
        super(),
        ae(this, e, nr, ir, ee, {
            onClick: 0
        })
    }
}
function lr(s) {
    let e;
    return {
        c() {
            e = ge("path"),
            w(e, "d", "M4.167 4.167c-1.381 1.381-1.381 3.619 0 5L6.5 11.5a1.18 1.18 0 0 1 0 1.667 1.18 1.18 0 0 1-1.667 0L2.5 10.833C.199 8.532.199 4.801 2.5 2.5s6.032-2.301 8.333 0l3.333 3.333c2.301 2.301 2.301 6.032 0 8.333a1.18 1.18 0 0 1-1.667 0 1.18 1.18 0 0 1 0-1.667c1.381-1.381 1.381-3.619 0-5L9.167 4.167c-1.381-1.381-3.619-1.381-5 0zm5.667 14c-2.301-2.301-2.301-6.032 0-8.333a1.18 1.18 0 0 1 1.667 0 1.18 1.18 0 0 1 0 1.667c-1.381 1.381-1.381 3.619 0 5l3.333 3.333c1.381 1.381 3.619 1.381 5 0s1.381-3.619 0-5L17.5 12.5a1.18 1.18 0 0 1 0-1.667 1.18 1.18 0 0 1 1.667 0l2.333 2.333c2.301 2.301 2.301 6.032 0 8.333s-6.032 2.301-8.333 0l-3.333-3.333z")
        },
        m(t, a) {
            $(t, e, a)
        },
        p: G,
        d(t) {
            t && z(e)
        }
    }
}
function ur(s) {
    let e, t, a, o = K.modes[s[1]].name + "", n, i, l, r, u, c, d;
    return t = new ms({
        props: {
            $$slots: {
                default: [lr]
            },
            $$scope: {
                ctx: s
            }
        }
    }),
    {
        c() {
            e = q("div"),
            I(t.$$.fragment),
            a = D(`
	Copy link to this game (`),
            n = D(o),
            i = D(" #"),
            l = D(s[0]),
            r = D(")"),
            w(e, "class", "share-historic svelte-11bt4nm")
        },
        m(f, m) {
            $(f, e, m),
            A(t, e, null),
            k(e, a),
            k(e, n),
            k(e, i),
            k(e, l),
            k(e, r),
            u = !0,
            c || (d = [V(e, "click", s[2]), V(e, "keypress", s[2])],
            c = !0)
        },
        p(f, [m]) {
            const p = {};
            m & 16 && (p.$$scope = {
                dirty: m,
                ctx: f
            }),
            t.$set(p),
            (!u || m & 2) && o !== (o = K.modes[f[1]].name + "") && J(n, o),
            (!u || m & 1) && J(l, f[0])
        },
        i(f) {
            u || (j(t.$$.fragment, f),
            u = !0)
        },
        o(f) {
            x(t.$$.fragment, f),
            u = !1
        },
        d(f) {
            f && z(e),
            R(t),
            c = !1,
            le(d)
        }
    }
}
function cr(s, e, t) {
    let a;
    je(s, ne, l=>t(1, a = l));
    let {wordNumber: o} = e;
    const n = hs("toaster");
    function i() {
        n.pop("Copied"),
        navigator.clipboard.writeText(`${window.location.href}/${o}`)
    }
    return s.$$set = l=>{
        "wordNumber"in l && t(0, o = l.wordNumber)
    }
    ,
    [o, a, i]
}
class dr extends oe {
    constructor(e) {
        super(),
        ae(this, e, cr, ur, ee, {
            wordNumber: 0
        })
    }
}
function Dt(s, e, t) {
    const a = s.slice();
    return a[20] = e[t],
    a[22] = t,
    a
}
function Ht(s) {
    let e, t, a, o;
    return {
        c() {
            e = q("form"),
            t = q("input"),
            w(t, "type", "text"),
            w(t, "placeholder", "Example: " + window.location + "/1"),
            w(t, "class", "svelte-l3vk6s"),
            te(t, "valid", s[0])
        },
        m(n, i) {
            $(n, e, i),
            k(e, t),
            Es(t, s[2]),
            a || (o = [V(t, "input", s[11]), V(t, "input", s[12]), V(t, "keydown", s[9])],
            a = !0)
        },
        p(n, i) {
            i & 4 && t.value !== n[2] && Es(t, n[2]),
            i & 1 && te(t, "valid", n[0])
        },
        d(n) {
            n && z(e),
            a = !1,
            le(o)
        }
    }
}
function At(s) {
    let e, t = s[20] + "", a;
    return {
        c() {
            e = q("option"),
            a = D(t),
            e.__value = s[22],
            e.value = e.__value
        },
        m(o, n) {
            $(o, e, n),
            k(e, a)
        },
        p: G,
        d(o) {
            o && z(e)
        }
    }
}
function fr(s) {
    let e, t, a = s[4], o, n, i, l, r, u, c, d, f, m, p, h, g, b = Ze(s[4], !0) - 1 + "", y, v, S, C, N, L = Ht(s), _ = s[5], O = [];
    for (let M = 0; M < _.length; M += 1)
        O[M] = At(Dt(s, _, M));
    return {
        c() {
            e = q("h3"),
            e.textContent = "Play a historical game",
            t = E(),
            L.c(),
            o = E(),
            n = q("div"),
            n.textContent = "Paste in a link",
            i = E(),
            l = q("h3"),
            l.textContent = "or",
            r = E(),
            u = q("div"),
            c = q("form"),
            d = q("input"),
            f = E(),
            m = q("select");
            for (let M = 0; M < O.length; M += 1)
                O[M].c();
            p = E(),
            h = q("div"),
            g = D("Enter a game number between 1 and "),
            y = D(b),
            v = E(),
            S = q("div"),
            S.textContent = "play",
            w(n, "class", "svelte-l3vk6s"),
            w(d, "type", "number"),
            w(d, "placeholder", "Example: 1"),
            w(d, "class", "svelte-l3vk6s"),
            te(d, "valid", s[1]),
            w(c, "class", "svelte-l3vk6s"),
            w(m, "class", "svelte-l3vk6s"),
            s[4] === void 0 && $e(()=>s[15].call(m)),
            w(u, "class", "number svelte-l3vk6s"),
            w(h, "class", "svelte-l3vk6s"),
            w(S, "class", "button svelte-l3vk6s"),
            te(S, "disabled", !s[0] && !s[1])
        },
        m(M, T) {
            $(M, e, T),
            $(M, t, T),
            L.m(M, T),
            $(M, o, T),
            $(M, n, T),
            $(M, i, T),
            $(M, l, T),
            $(M, r, T),
            $(M, u, T),
            k(u, c),
            k(c, d),
            Es(d, s[3]),
            k(u, f),
            k(u, m);
            for (let F = 0; F < O.length; F += 1)
                O[F].m(m, null);
            Ls(m, s[4]),
            $(M, p, T),
            $(M, h, T),
            k(h, g),
            k(h, y),
            $(M, v, T),
            $(M, S, T),
            C || (N = [V(d, "input", s[13]), V(d, "input", s[14]), V(d, "keydown", s[9]), V(m, "change", s[15]), V(S, "click", s[8]), V(S, "keydown", s[8])],
            C = !0)
        },
        p(M, [T]) {
            if (T & 16 && ee(a, a = M[4]) ? (L.d(1),
            L = Ht(M),
            L.c(),
            L.m(o.parentNode, o)) : L.p(M, T),
            T & 8 && fa(d.value) !== M[3] && Es(d, M[3]),
            T & 2 && te(d, "valid", M[1]),
            T & 32) {
                _ = M[5];
                let F;
                for (F = 0; F < _.length; F += 1) {
                    const re = Dt(M, _, F);
                    O[F] ? O[F].p(re, T) : (O[F] = At(re),
                    O[F].c(),
                    O[F].m(m, null))
                }
                for (; F < O.length; F += 1)
                    O[F].d(1);
                O.length = _.length
            }
            T & 16 && Ls(m, M[4]),
            T & 16 && b !== (b = Ze(M[4], !0) - 1 + "") && J(y, b),
            T & 3 && te(S, "disabled", !M[0] && !M[1])
        },
        i: G,
        o: G,
        d(M) {
            M && z(e),
            M && z(t),
            L.d(M),
            M && z(o),
            M && z(n),
            M && z(i),
            M && z(l),
            M && z(r),
            M && z(u),
            Oe(O, M),
            M && z(p),
            M && z(h),
            M && z(v),
            M && z(S),
            C = !1,
            le(N)
        }
    }
}
function mr(s, e, t) {
    let a;
    je(s, ne, L=>t(4, a = L));
    let {showSettings: o} = e;
    const n = hs("toaster")
      , i = K.modes.map(L=>L.name.toLowerCase());
    let l = !1, r = !1, u = "", c = "", d, f;
    function m() {
        t(2, u = ""),
        t(3, c = ""),
        t(0, l = !1),
        t(1, r = !1)
    }
    function p(L, _) {
        return !isNaN(L) && L > 0 && L < _ ? (f = L,
        !0) : !1
    }
    function h() {
        const L = u.slice(u.indexOf("#") + 1).toLowerCase().split("/");
        return L.length !== 2 || !(L[0]in ve) || !p(+L[1], Ze(ve[L[0]], !0)) ? !1 : (d = ve[L[0]],
        !0)
    }
    function g(L) {
        if (!l && !r)
            return;
        const _ = r ? a : d
          , O = K.modes[_];
        O.historical = !0,
        O.seed = cs(a, (f - 1) * O.unit + O.start),
        ne.set(_, !0),
        L.currentTarget.dispatchEvent(nt("close", null, {
            bubbles: !0
        })),
        t(10, o = !1),
        n.pop(`${ve[a]} wordle #${f}`, 2),
        m()
    }
    ne.subscribe(()=>{
        o || m()
    }
    );
    function b(L) {
        L.key === "Enter" && (L.preventDefault(),
        L.currentTarget.blur(),
        g(L))
    }
    function y() {
        u = this.value,
        t(2, u)
    }
    const v = ()=>t(0, l = h());
    function S() {
        c = fa(this.value),
        t(3, c)
    }
    const C = ()=>t(1, r = p(+c, Ze(a, !0)));
    function N() {
        a = ma(this),
        ne.set(a)
    }
    return s.$$set = L=>{
        "showSettings"in L && t(10, o = L.showSettings)
    }
    ,
    [l, r, u, c, a, i, p, h, g, b, o, y, v, S, C, N]
}
class pr extends oe {
    constructor(e) {
        super(),
        ae(this, e, mr, fr, ee, {
            showSettings: 10
        })
    }
}
function hr(s) {
    let e, t, a, o, n, i;
    return {
        c() {
            e = q("section"),
            t = q("div"),
            a = D(s[0]),
            o = E(),
            n = q("div"),
            i = D(s[1]),
            w(t, "class", "stat svelte-dvu5v6"),
            w(n, "class", "name svelte-dvu5v6"),
            w(e, "class", "svelte-dvu5v6")
        },
        m(l, r) {
            $(l, e, r),
            k(e, t),
            k(t, a),
            k(e, o),
            k(e, n),
            k(n, i)
        },
        p(l, [r]) {
            r & 1 && J(a, l[0]),
            r & 2 && J(i, l[1])
        },
        i: G,
        o: G,
        d(l) {
            l && z(e)
        }
    }
}
function gr(s, e, t) {
    let {stat: a} = e
      , {name: o} = e;
    return s.$$set = n=>{
        "stat"in n && t(0, a = n.stat),
        "name"in n && t(1, o = n.name)
    }
    ,
    [a, o]
}
class yr extends oe {
    constructor(e) {
        super(),
        ae(this, e, gr, hr, ee, {
            stat: 0,
            name: 1
        })
    }
}
function Rt(s, e, t) {
    const a = s.slice();
    return a[3] = e[t],
    a
}
function It(s) {
    let e, t;
    return e = new yr({
        props: {
            name: s[3][0],
            stat: s[3][1]
        }
    }),
    {
        c() {
            I(e.$$.fragment)
        },
        m(a, o) {
            A(e, a, o),
            t = !0
        },
        p(a, o) {
            const n = {};
            o & 1 && (n.name = a[3][0]),
            o & 1 && (n.stat = a[3][1]),
            e.$set(n)
        },
        i(a) {
            t || (j(e.$$.fragment, a),
            t = !0)
        },
        o(a) {
            x(e.$$.fragment, a),
            t = !1
        },
        d(a) {
            R(e, a)
        }
    }
}
function br(s) {
    let e, t, a = K.modes[s[1]].name + "", o, n, i, l, r, u = s[0], c = [];
    for (let f = 0; f < u.length; f += 1)
        c[f] = It(Rt(s, u, f));
    const d = f=>x(c[f], 1, 1, ()=>{
        c[f] = null
    }
    );
    return {
        c() {
            e = q("h3"),
            t = D("Statistics ("),
            o = D(a),
            n = D(")"),
            i = E(),
            l = q("div");
            for (let f = 0; f < c.length; f += 1)
                c[f].c();
            w(l, "class", "svelte-ljn64v")
        },
        m(f, m) {
            $(f, e, m),
            k(e, t),
            k(e, o),
            k(e, n),
            $(f, i, m),
            $(f, l, m);
            for (let p = 0; p < c.length; p += 1)
                c[p].m(l, null);
            r = !0
        },
        p(f, [m]) {
            if ((!r || m & 2) && a !== (a = K.modes[f[1]].name + "") && J(o, a),
            m & 1) {
                u = f[0];
                let p;
                for (p = 0; p < u.length; p += 1) {
                    const h = Rt(f, u, p);
                    c[p] ? (c[p].p(h, m),
                    j(c[p], 1)) : (c[p] = It(h),
                    c[p].c(),
                    j(c[p], 1),
                    c[p].m(l, null))
                }
                for (fe(),
                p = u.length; p < c.length; p += 1)
                    d(p);
                me()
            }
        },
        i(f) {
            if (!r) {
                for (let m = 0; m < u.length; m += 1)
                    j(c[m]);
                r = !0
            }
        },
        o(f) {
            c = c.filter(Boolean);
            for (let m = 0; m < c.length; m += 1)
                x(c[m]);
            r = !1
        },
        d(f) {
            f && z(e),
            f && z(i),
            f && z(l),
            Oe(c, f)
        }
    }
}
function kr(s, e, t) {
    let a;
    je(s, ne, i=>t(1, a = i));
    let {data: o} = e, n;
    return s.$$set = i=>{
        "data"in i && t(2, o = i.data)
    }
    ,
    s.$$.update = ()=>{
        s.$$.dirty & 5 && (t(0, n = [["Played", o.played], ["Win %", Math.round((o.played - o.guesses.fail) / o.played * 100) || 0], ["Average Guesses", (Object.entries(o.guesses).reduce((i,l)=>isNaN(+l[0]) ? i : i + +l[0] * l[1], 0) / o.played || 0).toFixed(1)]]),
        o.guesses.fail > 0 && n.push(["Lost", o.guesses.fail]),
        o.hasStreak && (n.push(["Current Streak", o.streak]),
        n.push(["Max Streak", o.maxStreak])))
    }
    ,
    [n, a, o]
}
class wr extends oe {
    constructor(e) {
        super(),
        ae(this, e, kr, br, ee, {
            data: 2
        })
    }
}
function Pt(s, e, t) {
    const a = s.slice();
    a[3] = e[t],
    a[6] = t;
    const o = Number(a[3][0]);
    return a[4] = o,
    a
}
function Wt(s) {
    let e, t, a = s[3][0] + "", o, n, i, l = s[3][1] + "", r, u;
    return {
        c() {
            e = q("div"),
            t = q("span"),
            o = D(a),
            n = E(),
            i = q("div"),
            r = D(l),
            u = E(),
            w(t, "class", "guess svelte-1pserw8"),
            w(i, "class", "bar svelte-1pserw8"),
            Ee(i, "width", s[3][1] / s[2] * 100 + "%"),
            te(i, "this", s[4] === s[0].guesses && !s[0].active && !at(s[0])),
            w(e, "class", "graph svelte-1pserw8")
        },
        m(c, d) {
            $(c, e, d),
            k(e, t),
            k(t, o),
            k(e, n),
            k(e, i),
            k(i, r),
            k(e, u)
        },
        p(c, d) {
            d & 2 && a !== (a = c[3][0] + "") && J(o, a),
            d & 2 && l !== (l = c[3][1] + "") && J(r, l),
            d & 6 && Ee(i, "width", c[3][1] / c[2] * 100 + "%"),
            d & 3 && te(i, "this", c[4] === c[0].guesses && !c[0].active && !at(c[0]))
        },
        d(c) {
            c && z(e)
        }
    }
}
function Ut(s, e) {
    let t, a = !isNaN(e[4]), o, n = a && Wt(e);
    return {
        key: s,
        first: null,
        c() {
            t = vs(),
            n && n.c(),
            o = vs(),
            this.first = t
        },
        m(i, l) {
            $(i, t, l),
            n && n.m(i, l),
            $(i, o, l)
        },
        p(i, l) {
            e = i,
            l & 2 && (a = !isNaN(e[4])),
            a ? n ? n.p(e, l) : (n = Wt(e),
            n.c(),
            n.m(o.parentNode, o)) : n && (n.d(1),
            n = null)
        },
        d(i) {
            i && z(t),
            n && n.d(i),
            i && z(o)
        }
    }
}
function vr(s) {
    let e, t, a, o = [], n = new Map, i = Object.entries(s[1]);
    const l = r=>r[3][0];
    for (let r = 0; r < i.length; r += 1) {
        let u = Pt(s, i, r)
          , c = l(u);
        n.set(c, o[r] = Ut(c, u))
    }
    return {
        c() {
            e = q("h3"),
            e.textContent = "guess distribution",
            t = E(),
            a = q("div");
            for (let r = 0; r < o.length; r += 1)
                o[r].c();
            w(a, "class", "container svelte-1pserw8")
        },
        m(r, u) {
            $(r, e, u),
            $(r, t, u),
            $(r, a, u);
            for (let c = 0; c < o.length; c += 1)
                o[c].m(a, null)
        },
        p(r, [u]) {
            u & 7 && (i = Object.entries(r[1]),
            o = Pa(o, u, l, 1, r, i, n, a, Ia, Ut, null, Pt))
        },
        i: G,
        o: G,
        d(r) {
            r && z(e),
            r && z(t),
            r && z(a);
            for (let u = 0; u < o.length; u += 1)
                o[u].d()
        }
    }
}
function _r(s, e, t) {
    let a, {game: o} = e, {distribution: n} = e;
    return s.$$set = i=>{
        "game"in i && t(0, o = i.game),
        "distribution"in i && t(1, n = i.distribution)
    }
    ,
    s.$$.update = ()=>{
        s.$$.dirty & 2 && t(2, a = Object.entries(n).reduce((i,l)=>isNaN(Number(l[0])) ? i : Math.max(l[1], i), 1))
    }
    ,
    [o, n, a]
}
class zr extends oe {
    constructor(e) {
        super(),
        ae(this, e, _r, vr, ee, {
            game: 0,
            distribution: 1
        })
    }
}
function jr(s) {
    let e;
    return {
        c() {
            e = ge("path"),
            w(e, "d", "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z")
        },
        m(t, a) {
            $(t, e, a)
        },
        p: G,
        d(t) {
            t && z(e)
        }
    }
}
function Bt(s) {
    let e, t;
    return e = new ms({
        props: {
            onClick: s[7],
            $$slots: {
                default: [$r]
            },
            $$scope: {
                ctx: s
            }
        }
    }),
    {
        c() {
            I(e.$$.fragment)
        },
        m(a, o) {
            A(e, a, o),
            t = !0
        },
        p(a, o) {
            const n = {};
            o & 16384 && (n.$$scope = {
                dirty: o,
                ctx: a
            }),
            e.$set(n)
        },
        i(a) {
            t || (j(e.$$.fragment, a),
            t = !0)
        },
        o(a) {
            x(e.$$.fragment, a),
            t = !1
        },
        d(a) {
            R(e, a)
        }
    }
}
function $r(s) {
    let e, t, a;
    return {
        c() {
            e = ge("path"),
            w(e, "d", "M4.609 12c0-4.082 3.309-7.391 7.391-7.391a7.39 7.39 0 0 1 6.523 3.912l-1.653 1.567H22v-5.13l-1.572 1.659C18.652 3.841 15.542 2 12 2 6.477 2 2 6.477 2 12s4.477 10 10 10c4.589 0 8.453-3.09 9.631-7.301l-2.512-.703c-.871 3.113-3.73 5.395-7.119 5.395-4.082 0-7.391-3.309-7.391-7.391z")
        },
        m(o, n) {
            $(o, e, n),
            a = !0
        },
        p: G,
        i(o) {
            a || ($e(()=>{
                t || (t = Ve(e, fs, {
                    duration: 200
                }, !0)),
                t.run(1)
            }
            ),
            a = !0)
        },
        o(o) {
            t || (t = Ve(e, fs, {
                duration: 200
            }, !1)),
            t.run(0),
            a = !1
        },
        d(o) {
            o && z(e),
            o && t && t.end()
        }
    }
}
function Gt(s) {
    let e, t;
    return e = new ms({
        props: {
            onClick: s[10],
            $$slots: {
                default: [Sr]
            },
            $$scope: {
                ctx: s
            }
        }
    }),
    {
        c() {
            I(e.$$.fragment)
        },
        m(a, o) {
            A(e, a, o),
            t = !0
        },
        p(a, o) {
            const n = {};
            o & 16384 && (n.$$scope = {
                dirty: o,
                ctx: a
            }),
            e.$set(n)
        },
        i(a) {
            t || (j(e.$$.fragment, a),
            t = !0)
        },
        o(a) {
            x(e.$$.fragment, a),
            t = !1
        },
        d(a) {
            R(e, a)
        }
    }
}
function Sr(s) {
    let e, t, a;
    return {
        c() {
            e = ge("path"),
            w(e, "d", "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z")
        },
        m(o, n) {
            $(o, e, n),
            a = !0
        },
        p: G,
        i(o) {
            a || ($e(()=>{
                t || (t = Ve(e, fs, {
                    duration: 200
                }, !0)),
                t.run(1)
            }
            ),
            a = !0)
        },
        o(o) {
            t || (t = Ve(e, fs, {
                duration: 200
            }, !1)),
            t.run(0),
            a = !1
        },
        d(o) {
            o && z(e),
            o && t && t.end()
        }
    }
}
function qr(s) {
    let e;
    return {
        c() {
            e = ge("path"),
            w(e, "d", "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z")
        },
        m(t, a) {
            $(t, e, a)
        },
        p: G,
        d(t) {
            t && z(e)
        }
    }
}
function Xt(s) {
    let e, t, a, o, n;
    return {
        c() {
            e = q("div"),
            e.innerHTML = `Swipe board or tap WORDLE+ to change game mode
			<span class="ok">OK</span>`,
            w(e, "class", "tutorial")
        },
        m(i, l) {
            $(i, e, l),
            a = !0,
            o || (n = [V(e, "click", s[12]), V(e, "keydown", s[13])],
            o = !0)
        },
        p: G,
        i(i) {
            a || ($e(()=>{
                t || (t = Ve(e, Rs, {}, !0)),
                t.run(1)
            }
            ),
            a = !0)
        },
        o(i) {
            t || (t = Ve(e, Rs, {}, !1)),
            t.run(0),
            a = !1
        },
        d(i) {
            i && z(e),
            i && t && t.end(),
            o = !1,
            le(n)
        }
    }
}
function xr(s) {
    let e, t, a, o, n, i, l, r, u, c, d, f, m, p;
    a = new ms({
        props: {
            onClick: s[6],
            $$slots: {
                default: [jr]
            },
            $$scope: {
                ctx: s
            }
        }
    });
    let h = s[0] && Bt(s)
      , g = s[1] && Gt(s);
    c = new ms({
        props: {
            onClick: s[11],
            $$slots: {
                default: [qr]
            },
            $$scope: {
                ctx: s
            }
        }
    });
    let b = s[2] && Xt(s);
    return {
        c() {
            e = q("header"),
            t = q("div"),
            I(a.$$.fragment),
            o = E(),
            h && h.c(),
            n = E(),
            i = q("h1"),
            i.textContent = "wordle+",
            l = E(),
            r = q("div"),
            g && g.c(),
            u = E(),
            I(c.$$.fragment),
            d = E(),
            b && b.c(),
            w(t, "class", "icons svelte-2k6r7n"),
            w(i, "class", "svelte-2k6r7n"),
            w(r, "class", "icons svelte-2k6r7n"),
            w(e, "class", "svelte-2k6r7n")
        },
        m(y, v) {
            $(y, e, v),
            k(e, t),
            A(a, t, null),
            k(t, o),
            h && h.m(t, null),
            k(e, n),
            k(e, i),
            k(e, l),
            k(e, r),
            g && g.m(r, null),
            k(r, u),
            A(c, r, null),
            k(e, d),
            b && b.m(e, null),
            f = !0,
            m || (p = [V(i, "click", Ns(s[8])), V(i, "contextmenu", Ns(Ms(s[9])))],
            m = !0)
        },
        p(y, [v]) {
            const S = {};
            v & 16384 && (S.$$scope = {
                dirty: v,
                ctx: y
            }),
            a.$set(S),
            y[0] ? h ? (h.p(y, v),
            v & 1 && j(h, 1)) : (h = Bt(y),
            h.c(),
            j(h, 1),
            h.m(t, null)) : h && (fe(),
            x(h, 1, 1, ()=>{
                h = null
            }
            ),
            me()),
            y[1] ? g ? (g.p(y, v),
            v & 2 && j(g, 1)) : (g = Gt(y),
            g.c(),
            j(g, 1),
            g.m(r, u)) : g && (fe(),
            x(g, 1, 1, ()=>{
                g = null
            }
            ),
            me());
            const C = {};
            v & 16384 && (C.$$scope = {
                dirty: v,
                ctx: y
            }),
            c.$set(C),
            y[2] ? b ? (b.p(y, v),
            v & 4 && j(b, 1)) : (b = Xt(y),
            b.c(),
            j(b, 1),
            b.m(e, null)) : b && (fe(),
            x(b, 1, 1, ()=>{
                b = null
            }
            ),
            me())
        },
        i(y) {
            f || (j(a.$$.fragment, y),
            j(h),
            j(g),
            j(c.$$.fragment, y),
            j(b),
            f = !0)
        },
        o(y) {
            x(a.$$.fragment, y),
            x(h),
            x(g),
            x(c.$$.fragment, y),
            x(b),
            f = !1
        },
        d(y) {
            y && z(e),
            R(a),
            h && h.d(),
            g && g.d(),
            R(c),
            b && b.d(),
            m = !1,
            le(p)
        }
    }
}
function Cr(s, e, t) {
    let a;
    je(s, ne, b=>t(4, a = b));
    let {showStats: o} = e
      , {tutorial: n} = e
      , {showRefresh: i} = e
      , {toaster: l=hs("toaster")} = e;
    const r = Ye();
    ne.subscribe(b=>{
        tt(K.modes[b]) > 0 && t(0, i = !1)
    }
    );
    const u = ()=>r("tutorial")
      , c = ()=>r("reload")
      , d = ()=>{
        Ae(ne, a = (a + 1) % K.modes.length, a),
        l.pop(K.modes[a].name)
    }
      , f = ()=>{
        Ae(ne, a = (a - 1 + K.modes.length) % K.modes.length, a),
        l.pop(K.modes[a].name)
    }
      , m = ()=>r("stats")
      , p = ()=>r("settings")
      , h = ()=>r("closeTutPopUp")
      , g = ()=>r("closeTutPopUp");
    return s.$$set = b=>{
        "showStats"in b && t(1, o = b.showStats),
        "tutorial"in b && t(2, n = b.tutorial),
        "showRefresh"in b && t(0, i = b.showRefresh),
        "toaster"in b && t(3, l = b.toaster)
    }
    ,
    [i, o, n, l, a, r, u, c, d, f, m, p, h, g]
}
class Tr extends oe {
    constructor(e) {
        super(),
        ae(this, e, Cr, xr, ee, {
            showStats: 1,
            tutorial: 2,
            showRefresh: 0,
            toaster: 3
        })
    }
}
function Mr(s) {
    let e, t, a, o, n, i;
    const l = s[4].default
      , r = Pe(l, s, s[3], null);
    return {
        c() {
            e = q("div"),
            t = D(s[0]),
            r && r.c(),
            w(e, "class", a = bt(s[1]) + " svelte-1ymomqm"),
            te(e, "big", s[0].length !== 1)
        },
        m(u, c) {
            $(u, e, c),
            k(e, t),
            r && r.m(e, null),
            o = !0,
            n || (i = V(e, "click", s[5]),
            n = !0)
        },
        p(u, [c]) {
            (!o || c & 1) && J(t, u[0]),
            r && r.p && (!o || c & 8) && Ue(r, l, u, u[3], o ? We(l, u[3], c, null) : Be(u[3]), null),
            (!o || c & 2 && a !== (a = bt(u[1]) + " svelte-1ymomqm")) && w(e, "class", a),
            (!o || c & 3) && te(e, "big", u[0].length !== 1)
        },
        i(u) {
            o || (j(r, u),
            o = !0)
        },
        o(u) {
            x(r, u),
            o = !1
        },
        d(u) {
            u && z(e),
            r && r.d(u),
            n = !1,
            i()
        }
    }
}
function Nr(s, e, t) {
    let {$$slots: a={}, $$scope: o} = e
      , {letter: n} = e
      , {state: i="🔳"} = e;
    const l = Ye()
      , r = ()=>l("keystroke", n);
    return s.$$set = u=>{
        "letter"in u && t(0, n = u.letter),
        "state"in u && t(1, i = u.state),
        "$$scope"in u && t(3, o = u.$$scope)
    }
    ,
    [n, i, l, o, a, r]
}
class zs extends oe {
    constructor(e) {
        super(),
        ae(this, e, Nr, Mr, ee, {
            letter: 0,
            state: 1
        })
    }
}
function Vt(s, e, t) {
    const a = s.slice();
    return a[13] = e[t],
    a
}
function Yt(s, e, t) {
    const a = s.slice();
    return a[13] = e[t],
    a
}
function Ft(s, e, t) {
    const a = s.slice();
    return a[13] = e[t],
    a
}
function Kt(s) {
    let e, t;
    return e = new zs({
        props: {
            letter: s[13],
            state: s[2][s[13]]
        }
    }),
    e.$on("keystroke", s[8]),
    {
        c() {
            I(e.$$.fragment)
        },
        m(a, o) {
            A(e, a, o),
            t = !0
        },
        p(a, o) {
            const n = {};
            o & 4 && (n.state = a[2][a[13]]),
            e.$set(n)
        },
        i(a) {
            t || (j(e.$$.fragment, a),
            t = !0)
        },
        o(a) {
            x(e.$$.fragment, a),
            t = !1
        },
        d(a) {
            R(e, a)
        }
    }
}
function Jt(s) {
    let e, t;
    return e = new zs({
        props: {
            letter: s[13],
            state: s[2][s[13]]
        }
    }),
    e.$on("keystroke", s[9]),
    {
        c() {
            I(e.$$.fragment)
        },
        m(a, o) {
            A(e, a, o),
            t = !0
        },
        p(a, o) {
            const n = {};
            o & 4 && (n.state = a[2][a[13]]),
            e.$set(n)
        },
        i(a) {
            t || (j(e.$$.fragment, a),
            t = !0)
        },
        o(a) {
            x(e.$$.fragment, a),
            t = !1
        },
        d(a) {
            R(e, a)
        }
    }
}
function Zt(s) {
    let e, t;
    return e = new zs({
        props: {
            letter: s[13],
            state: s[2][s[13]]
        }
    }),
    e.$on("keystroke", s[11]),
    {
        c() {
            I(e.$$.fragment)
        },
        m(a, o) {
            A(e, a, o),
            t = !0
        },
        p(a, o) {
            const n = {};
            o & 4 && (n.state = a[2][a[13]]),
            e.$set(n)
        },
        i(a) {
            t || (j(e.$$.fragment, a),
            t = !0)
        },
        o(a) {
            x(e.$$.fragment, a),
            t = !1
        },
        d(a) {
            R(e, a)
        }
    }
}
function Er(s) {
    let e, t;
    return {
        c() {
            e = ge("svg"),
            t = ge("path"),
            w(t, "d", "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"),
            w(e, "xmlns", "http://www.w3.org/2000/svg"),
            w(e, "viewBox", "0 0 24 24"),
            w(e, "class", "svelte-bldt10")
        },
        m(a, o) {
            $(a, e, o),
            k(e, t)
        },
        p: G,
        d(a) {
            a && z(e)
        }
    }
}
function Lr(s) {
    let e, t, a, o, n, i, l, r, u, c, d, f, m, p, h = ns[0], g = [];
    for (let _ = 0; _ < h.length; _ += 1)
        g[_] = Kt(Ft(s, h, _));
    const b = _=>x(g[_], 1, 1, ()=>{
        g[_] = null
    }
    );
    let y = ns[1]
      , v = [];
    for (let _ = 0; _ < y.length; _ += 1)
        v[_] = Jt(Yt(s, y, _));
    const S = _=>x(v[_], 1, 1, ()=>{
        v[_] = null
    }
    );
    r = new zs({
        props: {
            letter: "ENTER"
        }
    }),
    r.$on("keystroke", s[10]);
    let C = ns[2]
      , N = [];
    for (let _ = 0; _ < C.length; _ += 1)
        N[_] = Zt(Vt(s, C, _));
    const L = _=>x(N[_], 1, 1, ()=>{
        N[_] = null
    }
    );
    return d = new zs({
        props: {
            letter: "",
            $$slots: {
                default: [Er]
            },
            $$scope: {
                ctx: s
            }
        }
    }),
    d.$on("keystroke", s[5]),
    {
        c() {
            e = E(),
            t = q("div"),
            a = q("div");
            for (let _ = 0; _ < g.length; _ += 1)
                g[_].c();
            o = E(),
            n = q("div");
            for (let _ = 0; _ < v.length; _ += 1)
                v[_].c();
            i = E(),
            l = q("div"),
            I(r.$$.fragment),
            u = E();
            for (let _ = 0; _ < N.length; _ += 1)
                N[_].c();
            c = E(),
            I(d.$$.fragment),
            w(a, "class", "row svelte-bldt10"),
            w(n, "class", "row svelte-bldt10"),
            w(l, "class", "row svelte-bldt10"),
            w(t, "class", "keyboard svelte-bldt10"),
            te(t, "preventChange", s[1])
        },
        m(_, O) {
            $(_, e, O),
            $(_, t, O),
            k(t, a);
            for (let M = 0; M < g.length; M += 1)
                g[M].m(a, null);
            k(t, o),
            k(t, n);
            for (let M = 0; M < v.length; M += 1)
                v[M].m(n, null);
            k(t, i),
            k(t, l),
            A(r, l, null),
            k(l, u);
            for (let M = 0; M < N.length; M += 1)
                N[M].m(l, null);
            k(l, c),
            A(d, l, null),
            f = !0,
            m || (p = V(document.body, "keydown", s[6]),
            m = !0)
        },
        p(_, [O]) {
            if (O & 20) {
                h = ns[0];
                let T;
                for (T = 0; T < h.length; T += 1) {
                    const F = Ft(_, h, T);
                    g[T] ? (g[T].p(F, O),
                    j(g[T], 1)) : (g[T] = Kt(F),
                    g[T].c(),
                    j(g[T], 1),
                    g[T].m(a, null))
                }
                for (fe(),
                T = h.length; T < g.length; T += 1)
                    b(T);
                me()
            }
            if (O & 20) {
                y = ns[1];
                let T;
                for (T = 0; T < y.length; T += 1) {
                    const F = Yt(_, y, T);
                    v[T] ? (v[T].p(F, O),
                    j(v[T], 1)) : (v[T] = Jt(F),
                    v[T].c(),
                    j(v[T], 1),
                    v[T].m(n, null))
                }
                for (fe(),
                T = y.length; T < v.length; T += 1)
                    S(T);
                me()
            }
            if (O & 20) {
                C = ns[2];
                let T;
                for (T = 0; T < C.length; T += 1) {
                    const F = Vt(_, C, T);
                    N[T] ? (N[T].p(F, O),
                    j(N[T], 1)) : (N[T] = Zt(F),
                    N[T].c(),
                    j(N[T], 1),
                    N[T].m(l, c))
                }
                for (fe(),
                T = C.length; T < N.length; T += 1)
                    L(T);
                me()
            }
            const M = {};
            O & 1048576 && (M.$$scope = {
                dirty: O,
                ctx: _
            }),
            d.$set(M),
            (!f || O & 2) && te(t, "preventChange", _[1])
        },
        i(_) {
            if (!f) {
                for (let O = 0; O < h.length; O += 1)
                    j(g[O]);
                for (let O = 0; O < y.length; O += 1)
                    j(v[O]);
                j(r.$$.fragment, _);
                for (let O = 0; O < C.length; O += 1)
                    j(N[O]);
                j(d.$$.fragment, _),
                f = !0
            }
        },
        o(_) {
            g = g.filter(Boolean);
            for (let O = 0; O < g.length; O += 1)
                x(g[O]);
            v = v.filter(Boolean);
            for (let O = 0; O < v.length; O += 1)
                x(v[O]);
            x(r.$$.fragment, _),
            N = N.filter(Boolean);
            for (let O = 0; O < N.length; O += 1)
                x(N[O]);
            x(d.$$.fragment, _),
            f = !1
        },
        d(_) {
            _ && z(e),
            _ && z(t),
            Oe(g, _),
            Oe(v, _),
            R(r),
            Oe(N, _),
            R(d),
            m = !1,
            p()
        }
    }
}
function Or(s, e, t) {
    let a;
    je(s, ws, g=>t(2, a = g));
    let {value: o=""} = e
      , {disabled: n=!1} = e
      , i = !0;
    const l = Ye();
    function r(g) {
        !n && o.length < ke && (l("keystroke", g),
        t(7, o += g))
    }
    function u() {
        n || t(7, o = o.slice(0, o.length - 1))
    }
    function c(g) {
        if (!g.defaultPrevented) {
            if (!n && !g.ctrlKey && !g.altKey) {
                if (g.key && /^[a-z]$/.test(g.key.toLowerCase()))
                    return r(g.key.toLowerCase());
                if (g.key === "Backspace")
                    return u();
                if (g.key === "Enter")
                    return l("submitWord")
            }
            g.key === "Escape" && l("esc")
        }
    }
    const d = ne.subscribe(()=>{
        t(1, i = !0),
        setTimeout(()=>t(1, i = !1), 200)
    }
    );
    ha(d);
    const f = g=>r(g.detail)
      , m = g=>r(g.detail)
      , p = ()=>!n && l("submitWord")
      , h = g=>r(g.detail);
    return s.$$set = g=>{
        "value"in g && t(7, o = g.value),
        "disabled"in g && t(0, n = g.disabled)
    }
    ,
    [n, i, a, l, r, u, c, o, f, m, p, h]
}
class Dr extends oe {
    constructor(e) {
        super(),
        ae(this, e, Or, Lr, ee, {
            value: 7,
            disabled: 0
        })
    }
}
const Hr = s=>({})
  , Qt = s=>({});
function Ar(s) {
    let e;
    return {
        c() {
            e = ge("path"),
            w(e, "d", "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z")
        },
        m(t, a) {
            $(t, e, a)
        },
        p: G,
        d(t) {
            t && z(e)
        }
    }
}
function Rr(s) {
    let e, t, a, o, n, i, l, r, u, c, d, f;
    o = new ms({
        props: {
            $$slots: {
                default: [Ar]
            },
            $$scope: {
                ctx: s
            }
        }
    });
    const m = s[3].default
      , p = Pe(m, s, s[4], null)
      , h = s[3].footer
      , g = Pe(h, s, s[4], Qt);
    return {
        c() {
            e = q("div"),
            t = q("div"),
            a = q("div"),
            I(o.$$.fragment),
            n = E(),
            i = q("div"),
            p && p.c(),
            l = E(),
            r = q("div"),
            g && g.c(),
            w(a, "class", "exit svelte-5i44vt"),
            w(i, "class", "content svelte-5i44vt"),
            w(r, "class", "footer svelte-5i44vt"),
            w(t, "class", "modal svelte-5i44vt"),
            w(e, "class", u = "overlay " + (s[1] ? "fullscreen" : "popup") + " svelte-5i44vt"),
            te(e, "visible", s[0])
        },
        m(b, y) {
            $(b, e, y),
            k(e, t),
            k(t, a),
            A(o, a, null),
            k(t, n),
            k(t, i),
            p && p.m(i, null),
            k(t, l),
            k(t, r),
            g && g.m(r, null),
            c = !0,
            d || (f = [V(a, "click", s[2]), V(a, "keydown", s[2]), V(i, "close", s[2]), V(e, "click", Ns(s[2])), V(e, "keydown", Ns(s[2]))],
            d = !0)
        },
        p(b, [y]) {
            const v = {};
            y & 16 && (v.$$scope = {
                dirty: y,
                ctx: b
            }),
            o.$set(v),
            p && p.p && (!c || y & 16) && Ue(p, m, b, b[4], c ? We(m, b[4], y, null) : Be(b[4]), null),
            g && g.p && (!c || y & 16) && Ue(g, h, b, b[4], c ? We(h, b[4], y, Hr) : Be(b[4]), Qt),
            (!c || y & 2 && u !== (u = "overlay " + (b[1] ? "fullscreen" : "popup") + " svelte-5i44vt")) && w(e, "class", u),
            (!c || y & 3) && te(e, "visible", b[0])
        },
        i(b) {
            c || (j(o.$$.fragment, b),
            j(p, b),
            j(g, b),
            c = !0)
        },
        o(b) {
            x(o.$$.fragment, b),
            x(p, b),
            x(g, b),
            c = !1
        },
        d(b) {
            b && z(e),
            R(o),
            p && p.d(b),
            g && g.d(b),
            d = !1,
            le(f)
        }
    }
}
function Ir(s, e, t) {
    let {$$slots: a={}, $$scope: o} = e
      , {visible: n=!1} = e
      , {fullscreen: i=!1} = e;
    const l = Ye();
    function r() {
        t(0, n = !1),
        l("close")
    }
    return s.$$set = u=>{
        "visible"in u && t(0, n = u.visible),
        "fullscreen"in u && t(1, i = u.fullscreen),
        "$$scope"in u && t(4, o = u.$$scope)
    }
    ,
    [n, i, r, a, o]
}
class qs extends oe {
    constructor(e) {
        super(),
        ae(this, e, Ir, Rr, ee, {
            visible: 0,
            fullscreen: 1
        })
    }
}
function Pr(s) {
    let e, t, a;
    return {
        c() {
            e = q("div"),
            w(e, "disabled", s[1]),
            w(e, "class", "svelte-16o9p8g"),
            te(e, "checked", s[0])
        },
        m(o, n) {
            $(o, e, n),
            t || (a = V(e, "click", s[2]),
            t = !0)
        },
        p(o, [n]) {
            n & 2 && w(e, "disabled", o[1]),
            n & 1 && te(e, "checked", o[0])
        },
        i: G,
        o: G,
        d(o) {
            o && z(e),
            t = !1,
            a()
        }
    }
}
function Wr(s, e, t) {
    let {value: a} = e
      , {disabled: o=!1} = e;
    const n = i=>!o && t(0, a = !a);
    return s.$$set = i=>{
        "value"in i && t(0, a = i.value),
        "disabled"in i && t(1, o = i.disabled)
    }
    ,
    [a, o, n]
}
class Ur extends oe {
    constructor(e) {
        super(),
        ae(this, e, Wr, Pr, ee, {
            value: 0,
            disabled: 1
        })
    }
}
function ea(s, e, t) {
    const a = s.slice();
    return a[4] = e[t],
    a[6] = t,
    a
}
function sa(s) {
    let e, t = s[4] + "", a;
    return {
        c() {
            e = q("option"),
            a = D(t),
            e.__value = s[6],
            e.value = e.__value
        },
        m(o, n) {
            $(o, e, n),
            k(e, a)
        },
        p(o, n) {
            n & 2 && t !== (t = o[4] + "") && J(a, t)
        },
        d(o) {
            o && z(e)
        }
    }
}
function Br(s) {
    let e, t, a, o = s[1], n = [];
    for (let i = 0; i < o.length; i += 1)
        n[i] = sa(ea(s, o, i));
    return {
        c() {
            e = q("select");
            for (let i = 0; i < n.length; i += 1)
                n[i].c();
            e.disabled = s[2],
            s[0] === void 0 && $e(()=>s[3].call(e))
        },
        m(i, l) {
            $(i, e, l);
            for (let r = 0; r < n.length; r += 1)
                n[r].m(e, null);
            Ls(e, s[0]),
            t || (a = V(e, "change", s[3]),
            t = !0)
        },
        p(i, [l]) {
            if (l & 2) {
                o = i[1];
                let r;
                for (r = 0; r < o.length; r += 1) {
                    const u = ea(i, o, r);
                    n[r] ? n[r].p(u, l) : (n[r] = sa(u),
                    n[r].c(),
                    n[r].m(e, null))
                }
                for (; r < n.length; r += 1)
                    n[r].d(1);
                n.length = o.length
            }
            l & 4 && (e.disabled = i[2]),
            l & 1 && Ls(e, i[0])
        },
        i: G,
        o: G,
        d(i) {
            i && z(e),
            Oe(n, i),
            t = !1,
            a()
        }
    }
}
function Gr(s, e, t) {
    let {value: a} = e
      , {options: o} = e
      , {disabled: n=!1} = e;
    function i() {
        a = ma(this),
        t(0, a)
    }
    return s.$$set = l=>{
        "value"in l && t(0, a = l.value),
        "options"in l && t(1, o = l.options),
        "disabled"in l && t(2, n = l.disabled)
    }
    ,
    [a, o, n, i]
}
class Xr extends oe {
    constructor(e) {
        super(),
        ae(this, e, Gr, Br, ee, {
            value: 0,
            options: 1,
            disabled: 2
        })
    }
}
const Vr = s=>({})
  , ta = s=>({})
  , Yr = s=>({})
  , aa = s=>({})
  , Fr = s=>({})
  , oa = s=>({});
function Kr(s) {
    let e, t, a, o;
    function n(r) {
        s[7](r)
    }
    var i = s[4][s[1]];
    function l(r) {
        let u = {
            options: r[2],
            disabled: r[3]
        };
        return r[0] !== void 0 && (u.value = r[0]),
        {
            props: u
        }
    }
    return i && (e = kt(i, l(s)),
    ie.push(()=>pe(e, "value", n))),
    {
        c() {
            e && I(e.$$.fragment),
            a = vs()
        },
        m(r, u) {
            e && A(e, r, u),
            $(r, a, u),
            o = !0
        },
        p(r, u) {
            const c = {};
            if (u & 4 && (c.options = r[2]),
            u & 8 && (c.disabled = r[3]),
            !t && u & 1 && (t = !0,
            c.value = r[0],
            he(()=>t = !1)),
            i !== (i = r[4][r[1]])) {
                if (e) {
                    fe();
                    const d = e;
                    x(d.$$.fragment, 1, 0, ()=>{
                        R(d, 1)
                    }
                    ),
                    me()
                }
                i ? (e = kt(i, l(r)),
                ie.push(()=>pe(e, "value", n)),
                I(e.$$.fragment),
                j(e.$$.fragment, 1),
                A(e, a.parentNode, a)) : e = null
            } else
                i && e.$set(c)
        },
        i(r) {
            o || (e && j(e.$$.fragment, r),
            o = !0)
        },
        o(r) {
            e && x(e.$$.fragment, r),
            o = !1
        },
        d(r) {
            r && z(a),
            e && R(e, r)
        }
    }
}
function Jr(s) {
    let e;
    const t = s[6].custom
      , a = Pe(t, s, s[5], ta);
    return {
        c() {
            a && a.c()
        },
        m(o, n) {
            a && a.m(o, n),
            e = !0
        },
        p(o, n) {
            a && a.p && (!e || n & 32) && Ue(a, t, o, o[5], e ? We(t, o[5], n, Vr) : Be(o[5]), ta)
        },
        i(o) {
            e || (j(a, o),
            e = !0)
        },
        o(o) {
            x(a, o),
            e = !1
        },
        d(o) {
            a && a.d(o)
        }
    }
}
function Zr(s) {
    let e, t, a, o, n, i, l, r, u;
    const c = s[6].title
      , d = Pe(c, s, s[5], oa)
      , f = s[6].desc
      , m = Pe(f, s, s[5], aa)
      , p = [Jr, Kr]
      , h = [];
    function g(b, y) {
        return b[1] === "custom" ? 0 : 1
    }
    return l = g(s),
    r = h[l] = p[l](s),
    {
        c() {
            e = q("div"),
            t = q("div"),
            a = q("div"),
            d && d.c(),
            o = E(),
            n = q("div"),
            m && m.c(),
            i = E(),
            r.c(),
            w(a, "class", "title svelte-40b4uj"),
            w(n, "class", "desc svelte-40b4uj"),
            w(e, "class", "setting svelte-40b4uj")
        },
        m(b, y) {
            $(b, e, y),
            k(e, t),
            k(t, a),
            d && d.m(a, null),
            k(t, o),
            k(t, n),
            m && m.m(n, null),
            k(e, i),
            h[l].m(e, null),
            u = !0
        },
        p(b, [y]) {
            d && d.p && (!u || y & 32) && Ue(d, c, b, b[5], u ? We(c, b[5], y, Fr) : Be(b[5]), oa),
            m && m.p && (!u || y & 32) && Ue(m, f, b, b[5], u ? We(f, b[5], y, Yr) : Be(b[5]), aa);
            let v = l;
            l = g(b),
            l === v ? h[l].p(b, y) : (fe(),
            x(h[v], 1, 1, ()=>{
                h[v] = null
            }
            ),
            me(),
            r = h[l],
            r ? r.p(b, y) : (r = h[l] = p[l](b),
            r.c()),
            j(r, 1),
            r.m(e, null))
        },
        i(b) {
            u || (j(d, b),
            j(m, b),
            j(r),
            u = !0)
        },
        o(b) {
            x(d, b),
            x(m, b),
            x(r),
            u = !1
        },
        d(b) {
            b && z(e),
            d && d.d(b),
            m && m.d(b),
            h[l].d()
        }
    }
}
function Qr(s, e, t) {
    let {$$slots: a={}, $$scope: o} = e
      , {value: n} = e
      , {type: i} = e
      , {options: l=[]} = e
      , {disabled: r=!1} = e;
    const u = {
        switch: Ur,
        dropdown: Xr
    };
    function c(d) {
        n = d,
        t(0, n)
    }
    return s.$$set = d=>{
        "value"in d && t(0, n = d.value),
        "type"in d && t(1, i = d.type),
        "options"in d && t(2, l = d.options),
        "disabled"in d && t(3, r = d.disabled),
        "$$scope"in d && t(5, o = d.$$scope)
    }
    ,
    [n, i, l, r, u, o, a, c]
}
class ks extends oe {
    constructor(e) {
        super(),
        ae(this, e, Qr, Zr, ee, {
            value: 0,
            type: 1,
            options: 2,
            disabled: 3
        })
    }
}
function ei(s) {
    let e;
    return {
        c() {
            e = D("Hard Mode")
        },
        m(t, a) {
            $(t, e, a)
        },
        d(t) {
            t && z(e)
        }
    }
}
function si(s) {
    let e;
    return {
        c() {
            e = D("Any revealed hints must be used in subsequent guesses")
        },
        m(t, a) {
            $(t, e, a)
        },
        d(t) {
            t && z(e)
        }
    }
}
function ti(s) {
    let e;
    return {
        c() {
            e = D("Dark Theme")
        },
        m(t, a) {
            $(t, e, a)
        },
        d(t) {
            t && z(e)
        }
    }
}
function ai(s) {
    let e;
    return {
        c() {
            e = D("Color Blind Mode")
        },
        m(t, a) {
            $(t, e, a)
        },
        d(t) {
            t && z(e)
        }
    }
}
function oi(s) {
    let e;
    return {
        c() {
            e = D("High contrast colors")
        },
        m(t, a) {
            $(t, e, a)
        },
        d(t) {
            t && z(e)
        }
    }
}
function ri(s) {
    let e;
    return {
        c() {
            e = D("Game Mode")
        },
        m(t, a) {
            $(t, e, a)
        },
        d(t) {
            t && z(e)
        }
    }
}
function ii(s) {
    let e;
    return {
        c() {
            e = D("The game mode determines how often the word refreshes")
        },
        m(t, a) {
            $(t, e, a)
        },
        d(t) {
            t && z(e)
        }
    }
}
function ni(s) {
    let e;
    return {
        c() {
            e = D("Play Historical Game")
        },
        m(t, a) {
            $(t, e, a)
        },
        d(t) {
            t && z(e)
        }
    }
}
function li(s) {
    let e;
    return {
        c() {
            e = D("Play a previous word by pasting in a link or setting the date number")
        },
        m(t, a) {
            $(t, e, a)
        },
        d(t) {
            t && z(e)
        }
    }
}
function ui(s) {
    let e, t, a, o;
    return {
        c() {
            e = ge("svg"),
            t = ge("path"),
            w(t, "d", "M19.391 12c0-4.082-3.309-7.391-7.391-7.391a7.39 7.39 0 0 0-6.523 3.912l1.653 1.567H2v-5.13l1.572 1.659A9.99 9.99 0 0 1 12 2a10 10 0 1 1 0 20c-4.589 0-8.453-3.09-9.631-7.301l2.512-.703c.871 3.113 3.73 5.395 7.119 5.395 4.082 0 7.391-3.309 7.391-7.391zM12 7.5a1 1 0 0 1 1 1v3.062l3.288 3.031a1 1 0 0 1-1.356 1.471L11 12.438V8.5a1 1 0 0 1 1-1z"),
            w(e, "class", "custom svelte-1ktskry"),
            w(e, "xmlns", "http://www.w3.org/2000/svg"),
            w(e, "viewBox", "0 0 24 24")
        },
        m(n, i) {
            $(n, e, i),
            k(e, t),
            a || (o = V(e, "click", s[11]),
            a = !0)
        },
        p: G,
        d(n) {
            n && z(e),
            a = !1,
            o()
        }
    }
}
function ci(s) {
    let e, t, a, o, n, i, l, r, u, c, d, f, m, p, h, g, b, y, v, S, C, N, L, _;
    function O(B) {
        s[6](B)
    }
    let M = {
        type: "switch",
        disabled: !s[0].validHard,
        $$slots: {
            desc: [si],
            title: [ei]
        },
        $$scope: {
            ctx: s
        }
    };
    s[1].hard[s[2]] !== void 0 && (M.value = s[1].hard[s[2]]),
    i = new ks({
        props: M
    }),
    ie.push(()=>pe(i, "value", O));
    function T(B) {
        s[8](B)
    }
    let F = {
        type: "switch",
        $$slots: {
            title: [ti]
        },
        $$scope: {
            ctx: s
        }
    };
    s[1].dark !== void 0 && (F.value = s[1].dark),
    u = new ks({
        props: F
    }),
    ie.push(()=>pe(u, "value", T));
    function re(B) {
        s[9](B)
    }
    let Z = {
        type: "switch",
        $$slots: {
            desc: [oi],
            title: [ai]
        },
        $$scope: {
            ctx: s
        }
    };
    s[1].colorblind !== void 0 && (Z.value = s[1].colorblind),
    f = new ks({
        props: Z
    }),
    ie.push(()=>pe(f, "value", re));
    function W(B) {
        s[10](B)
    }
    let se = {
        type: "dropdown",
        options: K.modes.map(di),
        $$slots: {
            desc: [ii],
            title: [ri]
        },
        $$scope: {
            ctx: s
        }
    };
    s[2] !== void 0 && (se.value = s[2]),
    h = new ks({
        props: se
    }),
    ie.push(()=>pe(h, "value", W));
    function de(B) {
        s[12](B)
    }
    let Se = {
        type: "custom",
        $$slots: {
            custom: [ui],
            desc: [li],
            title: [ni]
        },
        $$scope: {
            ctx: s
        }
    };
    return s[2] !== void 0 && (Se.value = s[2]),
    y = new ks({
        props: Se
    }),
    ie.push(()=>pe(y, "value", de)),
    {
        c() {
            e = q("div"),
            t = q("div"),
            a = q("h3"),
            a.textContent = "settings",
            o = E(),
            n = q("div"),
            I(i.$$.fragment),
            r = E(),
            I(u.$$.fragment),
            d = E(),
            I(f.$$.fragment),
            p = E(),
            I(h.$$.fragment),
            b = E(),
            I(y.$$.fragment),
            S = E(),
            C = q("div"),
            C.innerHTML = `<a href="https://github.com/MikhaD/wordle" target="_blank" rel="noreferrer">Leave a ⭐</a> 
			<a href="https://github.com/MikhaD/wordle/issues" target="_blank" rel="noreferrer">Report a Bug</a>`,
            w(C, "class", "links svelte-1ktskry"),
            w(t, "class", "settings-top"),
            w(e, "class", "outer svelte-1ktskry")
        },
        m(B, Q) {
            $(B, e, Q),
            k(e, t),
            k(t, a),
            k(t, o),
            k(t, n),
            A(i, n, null),
            k(t, r),
            A(u, t, null),
            k(t, d),
            A(f, t, null),
            k(t, p),
            A(h, t, null),
            k(t, b),
            A(y, t, null),
            k(t, S),
            k(t, C),
            N = !0,
            L || (_ = V(n, "click", s[7]),
            L = !0)
        },
        p(B, [Q]) {
            const ye = {};
            Q & 1 && (ye.disabled = !B[0].validHard),
            Q & 8192 && (ye.$$scope = {
                dirty: Q,
                ctx: B
            }),
            !l && Q & 6 && (l = !0,
            ye.value = B[1].hard[B[2]],
            he(()=>l = !1)),
            i.$set(ye);
            const Me = {};
            Q & 8192 && (Me.$$scope = {
                dirty: Q,
                ctx: B
            }),
            !c && Q & 2 && (c = !0,
            Me.value = B[1].dark,
            he(()=>c = !1)),
            u.$set(Me);
            const we = {};
            Q & 8192 && (we.$$scope = {
                dirty: Q,
                ctx: B
            }),
            !m && Q & 2 && (m = !0,
            we.value = B[1].colorblind,
            he(()=>m = !1)),
            f.$set(we);
            const H = {};
            Q & 8192 && (H.$$scope = {
                dirty: Q,
                ctx: B
            }),
            !g && Q & 4 && (g = !0,
            H.value = B[2],
            he(()=>g = !1)),
            h.$set(H);
            const Y = {};
            Q & 8192 && (Y.$$scope = {
                dirty: Q,
                ctx: B
            }),
            !v && Q & 4 && (v = !0,
            Y.value = B[2],
            he(()=>v = !1)),
            y.$set(Y)
        },
        i(B) {
            N || (j(i.$$.fragment, B),
            j(u.$$.fragment, B),
            j(f.$$.fragment, B),
            j(h.$$.fragment, B),
            j(y.$$.fragment, B),
            N = !0)
        },
        o(B) {
            x(i.$$.fragment, B),
            x(u.$$.fragment, B),
            x(f.$$.fragment, B),
            x(h.$$.fragment, B),
            x(y.$$.fragment, B),
            N = !1
        },
        d(B) {
            B && z(e),
            R(i),
            R(u),
            R(f),
            R(h),
            R(y),
            L = !1,
            _()
        }
    }
}
const di = s=>s.name;
function fi(s, e, t) {
    let a, o;
    je(s, Te, g=>t(1, a = g)),
    je(s, ne, g=>t(2, o = g));
    let {state: n} = e;
    const i = hs("toaster")
      , l = Ye();
    let r;
    pa(()=>{
        t(5, r = document.documentElement)
    }
    );
    function u(g) {
        s.$$.not_equal(a.hard[o], g) && (a.hard[o] = g,
        Te.set(a))
    }
    const c = ()=>{
        n.validHard || i.pop("Game has already violated hard mode")
    }
    ;
    function d(g) {
        s.$$.not_equal(a.dark, g) && (a.dark = g,
        Te.set(a))
    }
    function f(g) {
        s.$$.not_equal(a.colorblind, g) && (a.colorblind = g,
        Te.set(a))
    }
    function m(g) {
        o = g,
        ne.set(o)
    }
    const p = ()=>l("historical");
    function h(g) {
        o = g,
        ne.set(o)
    }
    return s.$$set = g=>{
        "state"in g && t(0, n = g.state)
    }
    ,
    s.$$.update = ()=>{
        s.$$.dirty & 34 && r && (a.dark ? r.classList.remove("light") : r.classList.add("light"),
        a.colorblind ? r.classList.add("colorblind") : r.classList.remove("colorblind"),
        localStorage.setItem("settings", a.toString()))
    }
    ,
    [n, a, o, i, l, r, u, c, d, f, m, p, h]
}
class mi extends oe {
    constructor(e) {
        super(),
        ae(this, e, fi, ci, ee, {
            state: 0
        })
    }
}
function pi(s) {
    let e, t;
    return e = new Yo({
        props: {
            visible: s[5]
        }
    }),
    {
        c() {
            I(e.$$.fragment)
        },
        m(a, o) {
            A(e, a, o),
            t = !0
        },
        p(a, o) {
            const n = {};
            o[0] & 32 && (n.visible = a[5]),
            e.$set(n)
        },
        i(a) {
            t || (j(e.$$.fragment, a),
            t = !0)
        },
        o(a) {
            x(e.$$.fragment, a),
            t = !1
        },
        d(a) {
            R(e, a)
        }
    }
}
function hi(s) {
    let e, t, a, o;
    return e = new wr({
        props: {
            data: s[1]
        }
    }),
    a = new zr({
        props: {
            distribution: s[1].guesses,
            game: s[2]
        }
    }),
    {
        c() {
            I(e.$$.fragment),
            t = E(),
            I(a.$$.fragment)
        },
        m(n, i) {
            A(e, n, i),
            $(n, t, i),
            A(a, n, i),
            o = !0
        },
        p(n, i) {
            const l = {};
            i[0] & 2 && (l.data = n[1]),
            e.$set(l);
            const r = {};
            i[0] & 2 && (r.distribution = n[1].guesses),
            i[0] & 4 && (r.game = n[2]),
            a.$set(r)
        },
        i(n) {
            o || (j(e.$$.fragment, n),
            j(a.$$.fragment, n),
            o = !0)
        },
        o(n) {
            x(e.$$.fragment, n),
            x(a.$$.fragment, n),
            o = !1
        },
        d(n) {
            R(e, n),
            n && z(t),
            R(a, n)
        }
    }
}
function gi(s) {
    let e;
    return {
        c() {
            e = q("h2"),
            e.textContent = "Statistics not available for historical games",
            w(e, "class", "historical svelte-zu82m8")
        },
        m(t, a) {
            $(t, e, a)
        },
        p: G,
        i: G,
        o: G,
        d(t) {
            t && z(e)
        }
    }
}
function yi(s) {
    let e, t, a = {
        slot: "1"
    };
    return e = new Qo({
        props: a
    }),
    s[32](e),
    e.$on("timeup", s[33]),
    e.$on("reload", s[17]),
    {
        c() {
            I(e.$$.fragment)
        },
        m(o, n) {
            A(e, o, n),
            t = !0
        },
        p(o, n) {
            const i = {};
            e.$set(i)
        },
        i(o) {
            t || (j(e.$$.fragment, o),
            t = !0)
        },
        o(o) {
            x(e.$$.fragment, o),
            t = !1
        },
        d(o) {
            s[32](null),
            R(e, o)
        }
    }
}
function bi(s) {
    let e, t;
    return e = new qo({
        props: {
            slot: "2",
            state: s[2]
        }
    }),
    {
        c() {
            I(e.$$.fragment)
        },
        m(a, o) {
            A(e, a, o),
            t = !0
        },
        p(a, o) {
            const n = {};
            o[0] & 4 && (n.state = a[2]),
            e.$set(n)
        },
        i(a) {
            t || (j(e.$$.fragment, a),
            t = !0)
        },
        o(a) {
            x(e.$$.fragment, a),
            t = !1
        },
        d(a) {
            R(e, a)
        }
    }
}
function ki(s) {
    let e, t, a, o;
    return {
        c() {
            e = q("div"),
            e.textContent = "give up",
            w(e, "class", "button concede svelte-zu82m8")
        },
        m(n, i) {
            $(n, e, i),
            a || (o = [V(e, "click", s[16]), V(e, "keydown", s[16])],
            a = !0)
        },
        p: G,
        i(n) {
            t || $e(()=>{
                t = Ha(e, fs, {
                    delay: 300
                }),
                t.start()
            }
            )
        },
        o: G,
        d(n) {
            n && z(e),
            a = !1,
            le(o)
        }
    }
}
function wi(s) {
    let e, t;
    return e = new ya({
        props: {
            word: s[0],
            alternates: 2
        }
    }),
    {
        c() {
            I(e.$$.fragment)
        },
        m(a, o) {
            A(e, a, o),
            t = !0
        },
        p(a, o) {
            const n = {};
            o[0] & 1 && (n.word = a[0]),
            e.$set(n)
        },
        i(a) {
            t || (j(e.$$.fragment, a),
            t = !0)
        },
        o(a) {
            x(e.$$.fragment, a),
            t = !1
        },
        d(a) {
            R(e, a)
        }
    }
}
function vi(s) {
    let e, t, a, o, n, i, l, r, u, c, d;
    const f = [gi, hi]
      , m = [];
    function p(y, v) {
        return y[4].modes[y[12]].historical ? 0 : 1
    }
    e = p(s),
    t = m[e] = f[e](s),
    o = new Va({
        props: {
            visible: !s[2].active,
            $$slots: {
                2: [bi],
                1: [yi]
            },
            $$scope: {
                ctx: s
            }
        }
    }),
    i = new dr({
        props: {
            wordNumber: s[2].wordNumber
        }
    });
    const h = [wi, ki]
      , g = [];
    function b(y, v) {
        return y[2].active ? 1 : 0
    }
    return r = b(s),
    u = g[r] = h[r](s),
    {
        c() {
            t.c(),
            a = E(),
            I(o.$$.fragment),
            n = E(),
            I(i.$$.fragment),
            l = E(),
            u.c(),
            c = vs()
        },
        m(y, v) {
            m[e].m(y, v),
            $(y, a, v),
            A(o, y, v),
            $(y, n, v),
            A(i, y, v),
            $(y, l, v),
            g[r].m(y, v),
            $(y, c, v),
            d = !0
        },
        p(y, v) {
            let S = e;
            e = p(y),
            e === S ? m[e].p(y, v) : (fe(),
            x(m[S], 1, 1, ()=>{
                m[S] = null
            }
            ),
            me(),
            t = m[e],
            t ? t.p(y, v) : (t = m[e] = f[e](y),
            t.c()),
            j(t, 1),
            t.m(a.parentNode, a));
            const C = {};
            v[0] & 4 && (C.visible = !y[2].active),
            v[0] & 2564 | v[1] & 16384 && (C.$$scope = {
                dirty: v,
                ctx: y
            }),
            o.$set(C);
            const N = {};
            v[0] & 4 && (N.wordNumber = y[2].wordNumber),
            i.$set(N);
            let L = r;
            r = b(y),
            r === L ? g[r].p(y, v) : (fe(),
            x(g[L], 1, 1, ()=>{
                g[L] = null
            }
            ),
            me(),
            u = g[r],
            u ? u.p(y, v) : (u = g[r] = h[r](y),
            u.c()),
            j(u, 1),
            u.m(c.parentNode, c))
        },
        i(y) {
            d || (j(t),
            j(o.$$.fragment, y),
            j(i.$$.fragment, y),
            j(u),
            d = !0)
        },
        o(y) {
            x(t),
            x(o.$$.fragment, y),
            x(i.$$.fragment, y),
            x(u),
            d = !1
        },
        d(y) {
            m[e].d(y),
            y && z(a),
            R(o, y),
            y && z(n),
            R(i, y),
            y && z(l),
            g[r].d(y),
            y && z(c)
        }
    }
}
function ra(s) {
    let e, t, a;
    return {
        c() {
            e = q("div"),
            e.textContent = "give up",
            w(e, "class", "button concede svelte-zu82m8")
        },
        m(o, n) {
            $(o, e, n),
            t || (a = [V(e, "click", s[16]), V(e, "keydown", s[16])],
            t = !0)
        },
        p: G,
        d(o) {
            o && z(e),
            t = !1,
            le(a)
        }
    }
}
function _i(s) {
    let e, t, a, o, n;
    e = new mi({
        props: {
            state: s[2]
        }
    }),
    e.$on("historical", s[36]);
    let i = s[2].active && ra(s);
    return o = new rr({
        props: {
            change: s[6]
        }
    }),
    {
        c() {
            I(e.$$.fragment),
            t = E(),
            i && i.c(),
            a = E(),
            I(o.$$.fragment)
        },
        m(l, r) {
            A(e, l, r),
            $(l, t, r),
            i && i.m(l, r),
            $(l, a, r),
            A(o, l, r),
            n = !0
        },
        p(l, r) {
            const u = {};
            r[0] & 4 && (u.state = l[2]),
            e.$set(u),
            l[2].active ? i ? i.p(l, r) : (i = ra(l),
            i.c(),
            i.m(a.parentNode, a)) : i && (i.d(1),
            i = null);
            const c = {};
            r[0] & 64 && (c.change = l[6]),
            o.$set(c)
        },
        i(l) {
            n || (j(e.$$.fragment, l),
            j(o.$$.fragment, l),
            n = !0)
        },
        o(l) {
            x(e.$$.fragment, l),
            x(o.$$.fragment, l),
            n = !1
        },
        d(l) {
            R(e, l),
            l && z(t),
            i && i.d(l),
            l && z(a),
            R(o, l)
        }
    }
}
function zi(s) {
    let e, t, a, o, n, i, l = s[4].modes[s[12]].name + "", r, u, c = s[2].wordNumber + "", d, f, m;
    return {
        c() {
            e = q("a"),
            e.textContent = "Original Wordle",
            t = E(),
            a = q("div"),
            o = q("div"),
            o.textContent = `v ${s[14]}`,
            n = E(),
            i = q("div"),
            r = D(l),
            u = D(" word #"),
            d = D(c),
            w(e, "href", "https://www.nytimes.com/games/wordle/"),
            w(e, "target", "_blank"),
            w(e, "rel", "noreferrer"),
            w(i, "title", "double click to reset your stats"),
            w(i, "class", "word")
        },
        m(p, h) {
            $(p, e, h),
            $(p, t, h),
            $(p, a, h),
            k(a, o),
            k(a, n),
            k(a, i),
            k(i, r),
            k(i, u),
            k(i, d),
            f || (m = V(i, "dblclick", s[35]),
            f = !0)
        },
        p(p, h) {
            h[0] & 4112 && l !== (l = p[4].modes[p[12]].name + "") && J(r, l),
            h[0] & 4 && c !== (c = p[2].wordNumber + "") && J(d, c)
        },
        d(p) {
            p && z(e),
            p && z(t),
            p && z(a),
            f = !1,
            m()
        }
    }
}
function ji(s) {
    let e, t, a;
    function o(i) {
        s[38](i)
    }
    let n = {};
    return s[6] !== void 0 && (n.showSettings = s[6]),
    e = new pr({
        props: n
    }),
    ie.push(()=>pe(e, "showSettings", o)),
    {
        c() {
            I(e.$$.fragment)
        },
        m(i, l) {
            A(e, i, l),
            a = !0
        },
        p(i, l) {
            const r = {};
            !t && l[0] & 64 && (t = !0,
            r.showSettings = i[6],
            he(()=>t = !1)),
            e.$set(r)
        },
        i(i) {
            a || (j(e.$$.fragment, i),
            a = !0)
        },
        o(i) {
            x(e.$$.fragment, i),
            a = !1
        },
        d(i) {
            R(e, i)
        }
    }
}
function $i(s) {
    let e, t, a, o, n, i, l, r, u, c, d, f, m, p, h, g, b, y, v, S, C, N, L, _, O;
    function M(H) {
        s[19](H)
    }
    let T = {
        tutorial: s[13].tutorial === 2,
        showStats: s[1].played > 0 || s[4].modes[s[12]].historical && !s[2].active
    };
    s[9] !== void 0 && (T.showRefresh = s[9]),
    a = new Tr({
        props: T
    }),
    ie.push(()=>pe(a, "showRefresh", M)),
    a.$on("closeTutPopUp", Ws(s[20])),
    a.$on("stats", s[21]),
    a.$on("tutorial", s[22]),
    a.$on("settings", s[23]),
    a.$on("reload", s[17]);
    function F(H) {
        s[25](H)
    }
    let re = {
        tutorial: s[13].tutorial === 1,
        board: s[2].board,
        guesses: s[2].guesses,
        icon: s[4].modes[s[12]].icon
    };
    s[2].board.words !== void 0 && (re.value = s[2].board.words),
    i = new Go({
        props: re
    }),
    s[24](i),
    ie.push(()=>pe(i, "value", F)),
    i.$on("closeTutPopUp", Ws(s[26])),
    i.$on("swipe", s[18]);
    function Z(H) {
        s[27](H)
    }
    let W = {
        disabled: !s[2].active || s[13].tutorial === 3 || s[8]
    };
    s[2].board.words[s[2].guesses === ze ? 0 : s[2].guesses] !== void 0 && (W.value = s[2].board.words[s[2].guesses === ze ? 0 : s[2].guesses]),
    u = new Dr({
        props: W
    }),
    ie.push(()=>pe(u, "value", Z)),
    u.$on("keystroke", s[28]),
    u.$on("submitWord", s[15]),
    u.$on("esc", s[29]);
    function se(H) {
        s[30](H)
    }
    let de = {
        fullscreen: s[13].tutorial === 0,
        $$slots: {
            default: [pi]
        },
        $$scope: {
            ctx: s
        }
    };
    s[5] !== void 0 && (de.visible = s[5]),
    f = new qs({
        props: de
    }),
    ie.push(()=>pe(f, "visible", se)),
    f.$on("close", Ws(s[31]));
    function Se(H) {
        s[34](H)
    }
    let B = {
        $$slots: {
            default: [vi]
        },
        $$scope: {
            ctx: s
        }
    };
    s[7] !== void 0 && (B.visible = s[7]),
    h = new qs({
        props: B
    }),
    ie.push(()=>pe(h, "visible", Se));
    function Q(H) {
        s[37](H)
    }
    let ye = {
        fullscreen: !0,
        $$slots: {
            footer: [zi],
            default: [_i]
        },
        $$scope: {
            ctx: s
        }
    };
    s[6] !== void 0 && (ye.visible = s[6]),
    y = new qs({
        props: ye
    }),
    ie.push(()=>pe(y, "visible", Q));
    function Me(H) {
        s[39](H)
    }
    let we = {
        $$slots: {
            default: [ji]
        },
        $$scope: {
            ctx: s
        }
    };
    return s[8] !== void 0 && (we.visible = s[8]),
    C = new qs({
        props: we
    }),
    ie.push(()=>pe(C, "visible", Me)),
    {
        c() {
            e = E(),
            t = q("main"),
            I(a.$$.fragment),
            n = E(),
            I(i.$$.fragment),
            r = E(),
            I(u.$$.fragment),
            d = E(),
            I(f.$$.fragment),
            p = E(),
            I(h.$$.fragment),
            b = E(),
            I(y.$$.fragment),
            S = E(),
            I(C.$$.fragment),
            Ee(t, "--rows", ze),
            Ee(t, "--cols", ke),
            w(t, "class", "svelte-zu82m8"),
            te(t, "guesses", s[2].guesses !== 0)
        },
        m(H, Y) {
            $(H, e, Y),
            $(H, t, Y),
            A(a, t, null),
            k(t, n),
            A(i, t, null),
            k(t, r),
            A(u, t, null),
            $(H, d, Y),
            A(f, H, Y),
            $(H, p, Y),
            A(h, H, Y),
            $(H, b, Y),
            A(y, H, Y),
            $(H, S, Y),
            A(C, H, Y),
            L = !0,
            _ || (O = [V(document.body, "click", function() {
                Ie(s[10].hideCtx) && s[10].hideCtx.apply(this, arguments)
            }), V(document.body, "contextmenu", function() {
                Ie(s[10].hideCtx) && s[10].hideCtx.apply(this, arguments)
            })],
            _ = !0)
        },
        p(H, Y) {
            s = H;
            const De = {};
            Y[0] & 8192 && (De.tutorial = s[13].tutorial === 2),
            Y[0] & 4118 && (De.showStats = s[1].played > 0 || s[4].modes[s[12]].historical && !s[2].active),
            !o && Y[0] & 512 && (o = !0,
            De.showRefresh = s[9],
            he(()=>o = !1)),
            a.$set(De);
            const ue = {};
            Y[0] & 8192 && (ue.tutorial = s[13].tutorial === 1),
            Y[0] & 4 && (ue.board = s[2].board),
            Y[0] & 4 && (ue.guesses = s[2].guesses),
            Y[0] & 4112 && (ue.icon = s[4].modes[s[12]].icon),
            !l && Y[0] & 4 && (l = !0,
            ue.value = s[2].board.words,
            he(()=>l = !1)),
            i.$set(ue);
            const qe = {};
            Y[0] & 8452 && (qe.disabled = !s[2].active || s[13].tutorial === 3 || s[8]),
            !c && Y[0] & 4 && (c = !0,
            qe.value = s[2].board.words[s[2].guesses === ze ? 0 : s[2].guesses],
            he(()=>c = !1)),
            u.$set(qe),
            (!L || Y[0] & 4) && te(t, "guesses", s[2].guesses !== 0);
            const He = {};
            Y[0] & 8192 && (He.fullscreen = s[13].tutorial === 0),
            Y[0] & 32 | Y[1] & 16384 && (He.$$scope = {
                dirty: Y,
                ctx: s
            }),
            !m && Y[0] & 32 && (m = !0,
            He.visible = s[5],
            he(()=>m = !1)),
            f.$set(He);
            const xe = {};
            Y[0] & 6679 | Y[1] & 16384 && (xe.$$scope = {
                dirty: Y,
                ctx: s
            }),
            !g && Y[0] & 128 && (g = !0,
            xe.visible = s[7],
            he(()=>g = !1)),
            h.$set(xe);
            const U = {};
            Y[0] & 4444 | Y[1] & 16384 && (U.$$scope = {
                dirty: Y,
                ctx: s
            }),
            !v && Y[0] & 64 && (v = !0,
            U.visible = s[6],
            he(()=>v = !1)),
            y.$set(U);
            const Ne = {};
            Y[0] & 64 | Y[1] & 16384 && (Ne.$$scope = {
                dirty: Y,
                ctx: s
            }),
            !N && Y[0] & 256 && (N = !0,
            Ne.visible = s[8],
            he(()=>N = !1)),
            C.$set(Ne)
        },
        i(H) {
            L || (j(a.$$.fragment, H),
            j(i.$$.fragment, H),
            j(u.$$.fragment, H),
            j(f.$$.fragment, H),
            j(h.$$.fragment, H),
            j(y.$$.fragment, H),
            j(C.$$.fragment, H),
            L = !0)
        },
        o(H) {
            x(a.$$.fragment, H),
            x(i.$$.fragment, H),
            x(u.$$.fragment, H),
            x(f.$$.fragment, H),
            x(h.$$.fragment, H),
            x(y.$$.fragment, H),
            x(C.$$.fragment, H),
            L = !1
        },
        d(H) {
            H && z(e),
            H && z(t),
            R(a),
            s[24](null),
            R(i),
            R(u),
            H && z(d),
            R(f, H),
            H && z(p),
            R(h, H),
            H && z(b),
            R(y, H),
            H && z(S),
            R(C, H),
            _ = !1,
            le(O)
        }
    }
}
function Si(s, e, t) {
    let a, o, n;
    je(s, ne, U=>t(12, a = U)),
    je(s, ws, U=>t(40, o = U)),
    je(s, Te, U=>t(13, n = U));
    let {word: i} = e
      , {stats: l} = e
      , {game: r} = e
      , {toaster: u} = e;
    ga("toaster", u);
    const c = hs("version")
      , d = Fe * ze + 800;
    let f = n.tutorial === 3, m = !1, p = !1, h = !1, g = !1, b, y;
    function v() {
        if (r.latestWord.length !== ke)
            u.pop("Not enough letters"),
            b.shake(r.guesses);
        else if (Je.contains(r.latestWord)) {
            if (r.guesses > 0) {
                const U = r.checkHardMode();
                if (n.hard[a]) {
                    if (U.type === "🟩") {
                        u.pop(`${_o(U.pos + 1)} letter must be ${U.char.toUpperCase()}`),
                        b.shake(r.guesses);
                        return
                    } else if (U.type === "🟨") {
                        u.pop(`Guess must contain ${U.char.toUpperCase()}`),
                        b.shake(r.guesses);
                        return
                    }
                } else
                    U.type !== "⬛" && t(2, r.validHard = !1, r)
            }
            t(2, r.board.state[r.guesses] = r.guess(i), r),
            t(2, ++r.guesses, r),
            o.update(r.lastState, r.lastWord),
            ws.set(o),
            r.lastWord === i ? S() : r.guesses === ze && C()
        } else
            u.pop("Not in word list"),
            b.shake(r.guesses)
    }
    function S() {
        b.bounce(r.guesses - 1),
        t(2, r.active = !1, r),
        setTimeout(()=>u.pop(zo[r.guesses - 1]), Fe * ke + Fe),
        setTimeout(_, d * 1.4),
        K.modes[a].historical || (l.addWin(r.guesses, K.modes[a]),
        t(1, l),
        localStorage.setItem(`stats-${a}`, l.toString()))
    }
    function C() {
        t(2, r.active = !1, r),
        setTimeout(_, d),
        K.modes[a].historical || (l.addLoss(K.modes[a]),
        t(1, l),
        localStorage.setItem(`stats-${a}`, l.toString()))
    }
    function N() {
        t(6, m = !1),
        setTimeout(_, Fe),
        C()
    }
    function L() {
        t(4, K.modes[a].historical = !1, K),
        t(4, K.modes[a].seed = cs(a), K),
        t(2, r = new st(a,localStorage.getItem(`state-${a}`))),
        t(0, i = Je.words[ka(0, Je.words.length, K.modes[a].seed)]),
        Ae(ws, o = new ft, o),
        t(7, p = !1),
        t(9, g = !1),
        y.reset(a)
    }
    function _() {
        r.active || t(7, p = !0)
    }
    function O(U) {
        switch (U.detail.direction) {
        case "left":
            Ae(ne, a = (a + 1) % K.modes.length, a),
            u.pop(K.modes[a].name);
            break;
        case "right":
            Ae(ne, a = (a - 1 + K.modes.length) % K.modes.length, a),
            u.pop(K.modes[a].name);
            break
        }
    }
    pa(()=>{
        r.active || setTimeout(_, d)
    }
    );
    function M(U) {
        g = U,
        t(9, g)
    }
    const T = ()=>Ae(Te, n.tutorial = 1, n)
      , F = ()=>t(7, p = !0)
      , re = ()=>t(5, f = !0)
      , Z = ()=>t(6, m = !0);
    function W(U) {
        ie[U ? "unshift" : "push"](()=>{
            b = U,
            t(10, b)
        }
        )
    }
    function se(U) {
        s.$$.not_equal(r.board.words, U) && (r.board.words = U,
        t(2, r))
    }
    const de = ()=>Ae(Te, n.tutorial = 0, n);
    function Se(U) {
        s.$$.not_equal(r.board.words[r.guesses === ze ? 0 : r.guesses], U) && (r.board.words[r.guesses === ze ? 0 : r.guesses] = U,
        t(2, r))
    }
    const B = ()=>{
        n.tutorial && Ae(Te, n.tutorial = 0, n),
        b.hideCtx()
    }
      , Q = ()=>{
        t(5, f = !1),
        t(7, p = !1),
        t(6, m = !1)
    }
    ;
    function ye(U) {
        f = U,
        t(5, f)
    }
    const Me = ()=>n.tutorial === 3 && Ae(Te, --n.tutorial, n);
    function we(U) {
        ie[U ? "unshift" : "push"](()=>{
            y = U,
            t(11, y)
        }
        )
    }
    const H = ()=>t(9, g = !0);
    function Y(U) {
        p = U,
        t(7, p)
    }
    const De = ()=>{
        localStorage.clear(),
        u.pop("localStorage cleared")
    }
      , ue = ()=>t(8, h = !0);
    function qe(U) {
        m = U,
        t(6, m)
    }
    function He(U) {
        m = U,
        t(6, m)
    }
    function xe(U) {
        h = U,
        t(8, h)
    }
    return s.$$set = U=>{
        "word"in U && t(0, i = U.word),
        "stats"in U && t(1, l = U.stats),
        "game"in U && t(2, r = U.game),
        "toaster"in U && t(3, u = U.toaster)
    }
    ,
    [i, l, r, u, K, f, m, p, h, g, b, y, a, n, c, v, N, L, O, M, T, F, re, Z, W, se, de, Se, B, Q, ye, Me, we, H, Y, De, ue, qe, He, xe]
}
class qi extends oe {
    constructor(e) {
        super(),
        ae(this, e, Si, $i, ee, {
            word: 0,
            stats: 1,
            game: 2,
            toaster: 3
        }, null, [-1, -1])
    }
}
function ia(s) {
    let e, t, a, o;
    function n(r) {
        s[6](r)
    }
    function i(r) {
        s[7](r)
    }
    let l = {
        stats: s[1],
        toaster: s[3]
    };
    return s[2] !== void 0 && (l.word = s[2]),
    s[0] !== void 0 && (l.game = s[0]),
    e = new qi({
        props: l
    }),
    ie.push(()=>pe(e, "word", n)),
    ie.push(()=>pe(e, "game", i)),
    {
        c() {
            I(e.$$.fragment)
        },
        m(r, u) {
            A(e, r, u),
            o = !0
        },
        p(r, u) {
            const c = {};
            u & 2 && (c.stats = r[1]),
            u & 8 && (c.toaster = r[3]),
            !t && u & 4 && (t = !0,
            c.word = r[2],
            he(()=>t = !1)),
            !a && u & 1 && (a = !0,
            c.game = r[0],
            he(()=>a = !1)),
            e.$set(c)
        },
        i(r) {
            o || (j(e.$$.fragment, r),
            o = !0)
        },
        o(r) {
            x(e.$$.fragment, r),
            o = !1
        },
        d(r) {
            R(e, r)
        }
    }
}
function xi(s) {
    let e, t, a, o, n = {};
    e = new tr({
        props: n
    }),
    s[5](e);
    let i = s[3] && ia(s);
    return {
        c() {
            I(e.$$.fragment),
            t = E(),
            i && i.c(),
            a = vs()
        },
        m(l, r) {
            A(e, l, r),
            $(l, t, r),
            i && i.m(l, r),
            $(l, a, r),
            o = !0
        },
        p(l, [r]) {
            const u = {};
            e.$set(u),
            l[3] ? i ? (i.p(l, r),
            r & 8 && j(i, 1)) : (i = ia(l),
            i.c(),
            j(i, 1),
            i.m(a.parentNode, a)) : i && (fe(),
            x(i, 1, 1, ()=>{
                i = null
            }
            ),
            me())
        },
        i(l) {
            o || (j(e.$$.fragment, l),
            j(i),
            o = !0)
        },
        o(l) {
            x(e.$$.fragment, l),
            x(i),
            o = !1
        },
        d(l) {
            s[5](null),
            R(e, l),
            l && z(t),
            i && i.d(l),
            l && z(a)
        }
    }
}
document.title = "Wordle+ | An infinite word guessing game";
function Ci(s, e, t) {
    let a;
    je(s, ne, h=>t(8, a = h));
    let {version: o} = e;
    ga("version", o),
    localStorage.setItem("version", o);
    let n, i, l, r;
    Te.set(new wa(localStorage.getItem("settings"))),
    Te.subscribe(h=>localStorage.setItem("settings", JSON.stringify(h)));
    const u = window.location.hash.slice(1).split("/")
      , c = isNaN(ve[u[0]]) ? +localStorage.getItem("mode") || K.default : ve[u[0]];
    ne.set(c),
    !isNaN(+u[1]) && +u[1] < Ze(c) && (K.modes[c].seed = (+u[1] - 1) * K.modes[c].unit + K.modes[c].start,
    K.modes[c].historical = !0),
    ne.subscribe(h=>{
        localStorage.setItem("mode", `${h}`),
        window.location.hash = ve[h],
        t(1, n = new jo(localStorage.getItem(`stats-${h}`) || h)),
        t(2, i = Je.words[ka(0, Je.words.length, K.modes[h].seed)]),
        K.modes[h].historical ? t(0, l = new st(h,localStorage.getItem(`state-${h}-h`))) : t(0, l = new st(h,localStorage.getItem(`state-${h}`))),
        ws.set(new ft(l.board))
    }
    );
    function d(h) {
        K.modes[a].historical ? localStorage.setItem(`state-${a}-h`, h.toString()) : localStorage.setItem(`state-${a}`, h.toString())
    }
    function f(h) {
        ie[h ? "unshift" : "push"](()=>{
            r = h,
            t(3, r)
        }
        )
    }
    function m(h) {
        i = h,
        t(2, i)
    }
    function p(h) {
        l = h,
        t(0, l)
    }
    return s.$$set = h=>{
        "version"in h && t(4, o = h.version)
    }
    ,
    s.$$.update = ()=>{
        s.$$.dirty & 1 && d(l)
    }
    ,
    [l, n, i, r, o, f, m, p]
}
class Ti extends oe {
    constructor(e) {
        super(),
        ae(this, e, Ci, xi, ee, {
            version: 4
        })
    }
}
//! IF ANYTHING IN THIS FILE IS CHANGED MAKE SURE setVersion.js HAS ALSO BEEN UPDATED
new Ti({
    target: document.body,
    props: {
        version: "1.5.2"
    }
});
