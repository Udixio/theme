'use strict';

var core = require('@nestjs/core');
var tslib = require('tslib');
var common = require('@nestjs/common');
var materialColorUtilities = require('@material/material-color-utilities');

function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return e;
  };
  var t,
    e = {},
    r = Object.prototype,
    n = r.hasOwnProperty,
    o = Object.defineProperty || function (t, e, r) {
      t[e] = r.value;
    },
    i = "function" == typeof Symbol ? Symbol : {},
    a = i.iterator || "@@iterator",
    c = i.asyncIterator || "@@asyncIterator",
    u = i.toStringTag || "@@toStringTag";
  function define(t, e, r) {
    return Object.defineProperty(t, e, {
      value: r,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), t[e];
  }
  try {
    define({}, "");
  } catch (t) {
    define = function (t, e, r) {
      return t[e] = r;
    };
  }
  function wrap(t, e, r, n) {
    var i = e && e.prototype instanceof Generator ? e : Generator,
      a = Object.create(i.prototype),
      c = new Context(n || []);
    return o(a, "_invoke", {
      value: makeInvokeMethod(t, r, c)
    }), a;
  }
  function tryCatch(t, e, r) {
    try {
      return {
        type: "normal",
        arg: t.call(e, r)
      };
    } catch (t) {
      return {
        type: "throw",
        arg: t
      };
    }
  }
  e.wrap = wrap;
  var h = "suspendedStart",
    l = "suspendedYield",
    f = "executing",
    s = "completed",
    y = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var p = {};
  define(p, a, function () {
    return this;
  });
  var d = Object.getPrototypeOf,
    v = d && d(d(values([])));
  v && v !== r && n.call(v, a) && (p = v);
  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
  function defineIteratorMethods(t) {
    ["next", "throw", "return"].forEach(function (e) {
      define(t, e, function (t) {
        return this._invoke(e, t);
      });
    });
  }
  function AsyncIterator(t, e) {
    function invoke(r, o, i, a) {
      var c = tryCatch(t[r], t, o);
      if ("throw" !== c.type) {
        var u = c.arg,
          h = u.value;
        return h && "object" == typeof h && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
          invoke("next", t, i, a);
        }, function (t) {
          invoke("throw", t, i, a);
        }) : e.resolve(h).then(function (t) {
          u.value = t, i(u);
        }, function (t) {
          return invoke("throw", t, i, a);
        });
      }
      a(c.arg);
    }
    var r;
    o(this, "_invoke", {
      value: function (t, n) {
        function callInvokeWithMethodAndArg() {
          return new e(function (e, r) {
            invoke(t, n, e, r);
          });
        }
        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(e, r, n) {
    var o = h;
    return function (i, a) {
      if (o === f) throw Error("Generator is already running");
      if (o === s) {
        if ("throw" === i) throw a;
        return {
          value: t,
          done: !0
        };
      }
      for (n.method = i, n.arg = a;;) {
        var c = n.delegate;
        if (c) {
          var u = maybeInvokeDelegate(c, n);
          if (u) {
            if (u === y) continue;
            return u;
          }
        }
        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
          if (o === h) throw o = s, n.arg;
          n.dispatchException(n.arg);
        } else "return" === n.method && n.abrupt("return", n.arg);
        o = f;
        var p = tryCatch(e, r, n);
        if ("normal" === p.type) {
          if (o = n.done ? s : l, p.arg === y) continue;
          return {
            value: p.arg,
            done: n.done
          };
        }
        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
      }
    };
  }
  function maybeInvokeDelegate(e, r) {
    var n = r.method,
      o = e.iterator[n];
    if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
    var i = tryCatch(o, e.iterator, r.arg);
    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
    var a = i.arg;
    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
  }
  function pushTryEntry(t) {
    var e = {
      tryLoc: t[0]
    };
    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
  }
  function resetTryEntry(t) {
    var e = t.completion || {};
    e.type = "normal", delete e.arg, t.completion = e;
  }
  function Context(t) {
    this.tryEntries = [{
      tryLoc: "root"
    }], t.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(e) {
    if (e || "" === e) {
      var r = e[a];
      if (r) return r.call(e);
      if ("function" == typeof e.next) return e;
      if (!isNaN(e.length)) {
        var o = -1,
          i = function next() {
            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
            return next.value = t, next.done = !0, next;
          };
        return i.next = i;
      }
    }
    throw new TypeError(typeof e + " is not iterable");
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), o(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
    var e = "function" == typeof t && t.constructor;
    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
  }, e.mark = function (t) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
  }, e.awrap = function (t) {
    return {
      __await: t
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
    return this;
  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
    void 0 === i && (i = Promise);
    var a = new AsyncIterator(wrap(t, r, n, o), i);
    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
      return t.done ? t.value : a.next();
    });
  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
    return this;
  }), define(g, "toString", function () {
    return "[object Generator]";
  }), e.keys = function (t) {
    var e = Object(t),
      r = [];
    for (var n in e) r.push(n);
    return r.reverse(), function next() {
      for (; r.length;) {
        var t = r.pop();
        if (t in e) return next.value = t, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, e.values = values, Context.prototype = {
    constructor: Context,
    reset: function (e) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
    },
    stop: function () {
      this.done = !0;
      var t = this.tryEntries[0].completion;
      if ("throw" === t.type) throw t.arg;
      return this.rval;
    },
    dispatchException: function (e) {
      if (this.done) throw e;
      var r = this;
      function handle(n, o) {
        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
      }
      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
        var i = this.tryEntries[o],
          a = i.completion;
        if ("root" === i.tryLoc) return handle("end");
        if (i.tryLoc <= this.prev) {
          var c = n.call(i, "catchLoc"),
            u = n.call(i, "finallyLoc");
          if (c && u) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          } else if (c) {
            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
          } else {
            if (!u) throw Error("try statement without catch or finally");
            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
          }
        }
      }
    },
    abrupt: function (t, e) {
      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
        var o = this.tryEntries[r];
        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
          var i = o;
          break;
        }
      }
      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
      var a = i ? i.completion : {};
      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
    },
    complete: function (t, e) {
      if ("throw" === t.type) throw t.arg;
      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
    },
    finish: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
      }
    },
    catch: function (t) {
      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
        var r = this.tryEntries[e];
        if (r.tryLoc === t) {
          var n = r.completion;
          if ("throw" === n.type) {
            var o = n.arg;
            resetTryEntry(r);
          }
          return o;
        }
      }
      throw Error("illegal catch attempt");
    },
    delegateYield: function (e, r, n) {
      return this.delegate = {
        iterator: values(e),
        resultName: r,
        nextLoc: n
      }, "next" === this.method && (this.arg = t), y;
    }
  }, e;
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A class containing the contrast curve for a dynamic color on its background.
 *
 * The four values correspond to contrast requirements for contrast levels
 * -1.0, 0.0, 0.5, and 1.0, respectively.
 */
var ContrastCurve = /*#__PURE__*/function () {
  /**
   * Creates a `ContrastCurve` object.
   *
   * @param low Contrast requirement for contrast level -1.0
   * @param normal Contrast requirement for contrast level 0.0
   * @param medium Contrast requirement for contrast level 0.5
   * @param high Contrast requirement for contrast level 1.0
   */
  function ContrastCurve(low, normal, medium, high) {
    this.low = void 0;
    this.normal = void 0;
    this.medium = void 0;
    this.high = void 0;
    this.low = low;
    this.normal = normal;
    this.medium = medium;
    this.high = high;
  }
  /**
   * Returns the contrast ratio at a given contrast level.
   *
   * @param contrastLevel The contrast level. 0.0 is the default (normal);
   * -1.0 is the lowest; 1.0 is the highest.
   * @return The contrast ratio, a number between 1.0 and 21.0.
   */
  var _proto = ContrastCurve.prototype;
  _proto.getContrast = function getContrast(contrastLevel) {
    if (contrastLevel <= -1.0) {
      return this.low;
    } else if (contrastLevel < 0.0) {
      return materialColorUtilities.lerp(this.low, this.normal, (contrastLevel - -1) / 1);
    } else if (contrastLevel < 0.5) {
      return materialColorUtilities.lerp(this.normal, this.medium, (contrastLevel - 0) / 0.5);
    } else if (contrastLevel < 1.0) {
      return materialColorUtilities.lerp(this.medium, this.high, (contrastLevel - 0.5) / 0.5);
    } else {
      return this.high;
    }
  };
  return ContrastCurve;
}();

/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Documents a constraint between two DynamicColors, in which their tones must
 * have a certain distance from each other.
 *
 * Prefer a DynamicColor with a background, this is for special cases when
 * designers want tonal distance, literally contrast, between two colors that
 * don't have a background / foreground relationship or a contrast guarantee.
 */
var ToneDeltaPair =
/**
 * Documents a constraint in tone distance between two DynamicColors.
 *
 * The polarity is an adjective that describes "A", compared to "B".
 *
 * For instance, ToneDeltaPair(A, B, 15, 'darker', stayTogether) states that
 * A's tone should be at least 15 darker than B's.
 *
 * 'nearer' and 'farther' describes closeness to the surface roles. For
 * instance, ToneDeltaPair(A, B, 10, 'nearer', stayTogether) states that A
 * should be 10 lighter than B in light mode, and 10 darker than B in dark
 * mode.
 *
 * @param roleA The first role in a pair.
 * @param roleB The second role in a pair.
 * @param delta Required difference between tones. Absolute value, negative
 * values have undefined behavior.
 * @param polarity The relative relation between tones of roleA and roleB,
 * as described above.
 * @param stayTogether Whether these two roles should stay on the same side of
 * the "awkward zone" (T50-59). This is necessary for certain cases where
 * one role has two backgrounds.
 */
function ToneDeltaPair(roleA, roleB, delta, polarity, stayTogether) {
  this.roleA = void 0;
  this.roleB = void 0;
  this.delta = void 0;
  this.polarity = void 0;
  this.stayTogether = void 0;
  this.roleA = roleA;
  this.roleB = roleB;
  this.delta = delta;
  this.polarity = polarity;
  this.stayTogether = stayTogether;
};

/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A color that adjusts itself based on UI state provided by DynamicScheme.
 *
 * Colors without backgrounds do not change tone when contrast changes. Colors
 * with backgrounds become closer to their background as contrast lowers, and
 * further when contrast increases.
 *
 * Prefer static constructors. They require either a hexcode, a palette and
 * tone, or a hue and chroma. Optionally, they can provide a background
 * DynamicColor.
 */
var DynamicColor = /*#__PURE__*/function () {
  /**
   * The base constructor for DynamicColor.
   *
   * _Strongly_ prefer using one of the convenience constructors. This class is
   * arguably too flexible to ensure it can support any scenario. Functional
   * arguments allow  overriding without risks that come with subclasses.
   *
   * For example, the default behavior of adjust tone at max contrast
   * to be at a 7.0 ratio with its background is principled and
   * matches accessibility guidance. That does not mean it's the desired
   * approach for _every_ design system, and every color pairing,
   * always, in every case.
   *
   * @param name The name of the dynamic color. Defaults to empty.
   * @param palette Function that provides a TonalPalette given
   * DynamicScheme. A TonalPalette is defined by a hue and chroma, so this
   * replaces the need to specify hue/chroma. By providing a tonal palette, when
   * contrast adjustments are made, intended chroma can be preserved.
   * @param tone Function that provides a tone, given a DynamicScheme.
   * @param isBackground Whether this dynamic color is a background, with
   * some other color as the foreground. Defaults to false.
   * @param background The background of the dynamic color (as a function of a
   *     `DynamicScheme`), if it exists.
   * @param secondBackground A second background of the dynamic color (as a
   *     function of a `DynamicScheme`), if it
   * exists.
   * @param contrastCurve A `ContrastCurve` object specifying how its contrast
   * against its background should behave in various contrast levels options.
   * @param toneDeltaPair A `ToneDeltaPair` object specifying a tone delta
   * constraint between two colors. One of them must be the color being
   * constructed.
   */
  function DynamicColor(name, palette, tone, isBackground, background, secondBackground, contrastCurve, toneDeltaPair) {
    this.name = void 0;
    this.palette = void 0;
    this.tone = void 0;
    this.isBackground = void 0;
    this.background = void 0;
    this.secondBackground = void 0;
    this.contrastCurve = void 0;
    this.toneDeltaPair = void 0;
    this.hctCache = new Map();
    this.name = name;
    this.palette = palette;
    this.tone = tone;
    this.isBackground = isBackground;
    this.background = background;
    this.secondBackground = secondBackground;
    this.contrastCurve = contrastCurve;
    this.toneDeltaPair = toneDeltaPair;
    if (!background && secondBackground) {
      throw new Error("Color " + name + " has secondBackground" + "defined, but background is not defined.");
    }
    if (!background && contrastCurve) {
      throw new Error("Color " + name + " has contrastCurve" + "defined, but background is not defined.");
    }
    if (background && !contrastCurve) {
      throw new Error("Color " + name + " has background" + "defined, but contrastCurve is not defined.");
    }
  }
  /**
   * Create a DynamicColor defined by a TonalPalette and HCT tone.
   *
   * @param args Functions with DynamicScheme as input. Must provide a palette
   * and tone. May provide a background DynamicColor and ToneDeltaConstraint.
   */
  DynamicColor.fromPalette = function fromPalette(args) {
    var _args$name, _args$isBackground;
    return new DynamicColor((_args$name = args.name) != null ? _args$name : '', args.palette, args.tone, (_args$isBackground = args.isBackground) != null ? _args$isBackground : false, args.background, args.secondBackground, args.contrastCurve, args.toneDeltaPair);
  }
  /**
   * Given a background tone, find a foreground tone, while ensuring they reach
   * a contrast ratio that is as close to [ratio] as possible.
   *
   * @param bgTone Tone in HCT. Range is 0 to 100, undefined behavior when it
   *     falls outside that range.
   * @param ratio The contrast ratio desired between bgTone and the return
   *     value.
   */;
  DynamicColor.foregroundTone = function foregroundTone(bgTone, ratio) {
    var lighterTone = materialColorUtilities.Contrast.lighterUnsafe(bgTone, ratio);
    var darkerTone = materialColorUtilities.Contrast.darkerUnsafe(bgTone, ratio);
    var lighterRatio = materialColorUtilities.Contrast.ratioOfTones(lighterTone, bgTone);
    var darkerRatio = materialColorUtilities.Contrast.ratioOfTones(darkerTone, bgTone);
    var preferLighter = DynamicColor.tonePrefersLightForeground(bgTone);
    if (preferLighter) {
      // This handles an edge case where the initial contrast ratio is high
      // (ex. 13.0), and the ratio passed to the function is that high
      // ratio, and both the lighter and darker ratio fails to pass that
      // ratio.
      //
      // This was observed with Tonal Spot's On Primary Container turning
      // black momentarily between high and max contrast in light mode. PC's
      // standard tone was T90, OPC's was T10, it was light mode, and the
      // contrast value was 0.6568521221032331.
      var negligibleDifference = Math.abs(lighterRatio - darkerRatio) < 0.1 && lighterRatio < ratio && darkerRatio < ratio;
      return lighterRatio >= ratio || lighterRatio >= darkerRatio || negligibleDifference ? lighterTone : darkerTone;
    } else {
      return darkerRatio >= ratio || darkerRatio >= lighterRatio ? darkerTone : lighterTone;
    }
  }
  /**
   * Returns whether [tone] prefers a light foreground.
   *
   * People prefer white foregrounds on ~T60-70. Observed over time, and also
   * by Andrew Somers during research for APCA.
   *
   * T60 used as to create the smallest discontinuity possible when skipping
   * down to T49 in order to ensure light foregrounds.
   * Since `tertiaryContainer` in dark monochrome scheme requires a tone of
   * 60, it should not be adjusted. Therefore, 60 is excluded here.
   */;
  DynamicColor.tonePrefersLightForeground = function tonePrefersLightForeground(tone) {
    return Math.round(tone) < 60.0;
  }
  /**
   * Returns whether [tone] can reach a contrast ratio of 4.5 with a lighter
   * color.
   */;
  DynamicColor.toneAllowsLightForeground = function toneAllowsLightForeground(tone) {
    return Math.round(tone) <= 49.0;
  }
  /**
   * Adjust a tone such that white has 4.5 contrast, if the tone is
   * reasonably close to supporting it.
   */;
  DynamicColor.enableLightForeground = function enableLightForeground(tone) {
    if (DynamicColor.tonePrefersLightForeground(tone) && !DynamicColor.toneAllowsLightForeground(tone)) {
      return 49.0;
    }
    return tone;
  }
  /**
   * Return a ARGB integer (i.e. a hex code).
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */;
  var _proto = DynamicColor.prototype;
  _proto.getArgb = function getArgb(scheme) {
    return this.getHct(scheme).toInt();
  }
  /**
   * Return a color, expressed in the HCT color space, that this
   * DynamicColor is under the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */;
  _proto.getHct = function getHct(scheme) {
    var cachedAnswer = this.hctCache.get(scheme);
    if (cachedAnswer != null) {
      return cachedAnswer;
    }
    var tone = this.getTone(scheme);
    var answer = this.palette(scheme).getHct(tone);
    if (this.hctCache.size > 4) {
      this.hctCache.clear();
    }
    this.hctCache.set(scheme, answer);
    return answer;
  }
  /**
   * Return a tone, T in the HCT color space, that this DynamicColor is under
   * the conditions in scheme.
   *
   * @param scheme Defines the conditions of the user interface, for example,
   * whether or not it is dark mode or light mode, and what the desired
   * contrast level is.
   */;
  _proto.getTone = function getTone(scheme) {
    var decreasingContrast = scheme.contrastLevel < 0;
    // Case 1: dual foreground, pair of colors with delta constraint.
    if (this.toneDeltaPair) {
      var toneDeltaPair = this.toneDeltaPair(scheme);
      var roleA = toneDeltaPair.roleA;
      var roleB = toneDeltaPair.roleB;
      var delta = toneDeltaPair.delta;
      var polarity = toneDeltaPair.polarity;
      var stayTogether = toneDeltaPair.stayTogether;
      var bg = this.background(scheme);
      var bgTone = bg.getTone(scheme);
      var aIsNearer = polarity === 'nearer' || polarity === 'lighter' && !scheme.isDark || polarity === 'darker' && scheme.isDark;
      var nearer = aIsNearer ? roleA : roleB;
      var farther = aIsNearer ? roleB : roleA;
      var amNearer = this.name === nearer.name;
      var expansionDir = scheme.isDark ? 1 : -1;
      // 1st round: solve to min, each
      var nContrast = nearer.contrastCurve.getContrast(scheme.contrastLevel);
      var fContrast = farther.contrastCurve.getContrast(scheme.contrastLevel);
      // If a color is good enough, it is not adjusted.
      // Initial and adjusted tones for `nearer`
      var nInitialTone = nearer.tone(scheme);
      var nTone = materialColorUtilities.Contrast.ratioOfTones(bgTone, nInitialTone) >= nContrast ? nInitialTone : DynamicColor.foregroundTone(bgTone, nContrast);
      // Initial and adjusted tones for `farther`
      var fInitialTone = farther.tone(scheme);
      var fTone = materialColorUtilities.Contrast.ratioOfTones(bgTone, fInitialTone) >= fContrast ? fInitialTone : DynamicColor.foregroundTone(bgTone, fContrast);
      if (decreasingContrast) {
        // If decreasing contrast, adjust color to the "bare minimum"
        // that satisfies contrast.
        nTone = DynamicColor.foregroundTone(bgTone, nContrast);
        fTone = DynamicColor.foregroundTone(bgTone, fContrast);
      }
      if ((fTone - nTone) * expansionDir >= delta) ; else {
        // 2nd round: expand farther to match delta.
        fTone = materialColorUtilities.clampDouble(0, 100, nTone + delta * expansionDir);
        if ((fTone - nTone) * expansionDir >= delta) ; else {
          // 3rd round: contract nearer to match delta.
          nTone = materialColorUtilities.clampDouble(0, 100, fTone - delta * expansionDir);
        }
      }
      // Avoids the 50-59 awkward zone.
      if (50 <= nTone && nTone < 60) {
        // If `nearer` is in the awkward zone, move it away, together with
        // `farther`.
        if (expansionDir > 0) {
          nTone = 60;
          fTone = Math.max(fTone, nTone + delta * expansionDir);
        } else {
          nTone = 49;
          fTone = Math.min(fTone, nTone + delta * expansionDir);
        }
      } else if (50 <= fTone && fTone < 60) {
        if (stayTogether) {
          // Fixes both, to avoid two colors on opposite sides of the "awkward
          // zone".
          if (expansionDir > 0) {
            nTone = 60;
            fTone = Math.max(fTone, nTone + delta * expansionDir);
          } else {
            nTone = 49;
            fTone = Math.min(fTone, nTone + delta * expansionDir);
          }
        } else {
          // Not required to stay together; fixes just one.
          if (expansionDir > 0) {
            fTone = 60;
          } else {
            fTone = 49;
          }
        }
      }
      // Returns `nTone` if this color is `nearer`, otherwise `fTone`.
      return amNearer ? nTone : fTone;
    } else {
      // Case 2: No contrast pair; just solve for itself.
      var answer = this.tone(scheme);
      if (this.background == null) {
        return answer; // No adjustment for colors with no background.
      }
      var _bgTone = this.background(scheme).getTone(scheme);
      var desiredRatio = this.contrastCurve.getContrast(scheme.contrastLevel);
      if (materialColorUtilities.Contrast.ratioOfTones(_bgTone, answer) >= desiredRatio) ; else {
        // Rough improvement.
        answer = DynamicColor.foregroundTone(_bgTone, desiredRatio);
      }
      if (decreasingContrast) {
        answer = DynamicColor.foregroundTone(_bgTone, desiredRatio);
      }
      if (this.isBackground && 50 <= answer && answer < 60) {
        // Must adjust
        if (materialColorUtilities.Contrast.ratioOfTones(49, _bgTone) >= desiredRatio) {
          answer = 49;
        } else {
          answer = 60;
        }
      }
      if (this.secondBackground) {
        // Case 3: Adjust for dual backgrounds.
        var _ref = [this.background, this.secondBackground],
          bg1 = _ref[0],
          bg2 = _ref[1];
        var _ref2 = [bg1(scheme).getTone(scheme), bg2(scheme).getTone(scheme)],
          bgTone1 = _ref2[0],
          bgTone2 = _ref2[1];
        var _ref3 = [Math.max(bgTone1, bgTone2), Math.min(bgTone1, bgTone2)],
          upper = _ref3[0],
          lower = _ref3[1];
        if (materialColorUtilities.Contrast.ratioOfTones(upper, answer) >= desiredRatio && materialColorUtilities.Contrast.ratioOfTones(lower, answer) >= desiredRatio) {
          return answer;
        }
        // The darkest light tone that satisfies the desired ratio,
        // or -1 if such ratio cannot be reached.
        var lightOption = materialColorUtilities.Contrast.lighter(upper, desiredRatio);
        // The lightest dark tone that satisfies the desired ratio,
        // or -1 if such ratio cannot be reached.
        var darkOption = materialColorUtilities.Contrast.darker(lower, desiredRatio);
        // Tones suitable for the foreground.
        var availables = [];
        if (lightOption !== -1) availables.push(lightOption);
        if (darkOption !== -1) availables.push(darkOption);
        var prefersLight = DynamicColor.tonePrefersLightForeground(bgTone1) || DynamicColor.tonePrefersLightForeground(bgTone2);
        if (prefersLight) {
          return lightOption < 0 ? 100 : lightOption;
        }
        if (availables.length === 1) {
          return availables[0];
        }
        return darkOption < 0 ? 0 : darkOption;
      }
      return answer;
    }
  };
  return DynamicColor;
}();

var ColorEntity = /*#__PURE__*/function () {
  function ColorEntity(option) {
    this.option = void 0;
    this.option = option;
  }
  var _proto = ColorEntity.prototype;
  _proto.update = function update(args) {
    this.option = _extends({}, this.option, args);
  };
  _proto.getHex = function getHex(scheme) {
    return materialColorUtilities.hexFromArgb(this.getArgb(scheme));
  };
  _proto.getArgb = function getArgb(scheme) {
    return this.getDynamicColor().getArgb(scheme);
  };
  _proto.getName = function getName() {
    return this.option.name.replace(/([A-Z])/g, '_$1').toLowerCase();
  };
  _proto.getDynamicColor = function getDynamicColor() {
    return DynamicColor.fromPalette(_extends({}, this.option, {
      name: this.getName()
    }));
  };
  return ColorEntity;
}();

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
var DynamicColorService = /*#__PURE__*/function () {
  function DynamicColorService() {
    this.colorMap = new Map();
  }
  var _proto = DynamicColorService.prototype;
  _proto.createOrUpdate = function createOrUpdate(key, args) {
    if (!this.colorMap.has(key)) {
      this.colorMap.set(key, new ColorEntity(_extends({}, args, {
        name: key
      })));
    } else {
      var colorEntity = this.colorMap.get(key);
      if (!colorEntity) {
        throw new Error('Color entity not found');
      }
      colorEntity.update(_extends({}, args, {
        name: key
      }));
      this.colorMap.set(key, colorEntity);
    }
  };
  _proto.get = function get(key) {
    var color = this.colorMap.get(key);
    if (color) {
      return color.getDynamicColor();
    } else {
      throw new Error("Color " + key + " does not exist");
    }
  };
  _proto.highestSurface = function highestSurface(s) {
    return s.isDark ? this.get('surfaceBright') : this.get('surfaceDim');
  };
  _proto.addFromPalette = function addFromPalette(key) {
    var _this = this;
    var colorKey = key;
    var ColorKey = capitalizeFirstLetter(key);
    var onColorKey = 'on' + ColorKey;
    var colorKeyContainer = colorKey + 'Container';
    var onColorKeyContainer = 'on' + ColorKey + 'Container';
    var inverseColorKey = 'inverse' + ColorKey;
    var colorKeyFixed = colorKey + 'Fixed';
    var colorKeyFixedDim = colorKey + 'FixedDim';
    var onColorKeyFixed = 'on' + ColorKey + 'Fixed';
    var onColorKeyFixedVariant = 'on' + ColorKey + 'FixedVariant';
    this.createOrUpdate(colorKey, {
      palette: function palette(s) {
        return s.getPalette(key);
      },
      tone: function tone(s) {
        return s.isDark ? 80 : 40;
      },
      isBackground: true,
      background: function background(s) {
        return _this.highestSurface(s);
      },
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
      toneDeltaPair: function toneDeltaPair(s) {
        return new ToneDeltaPair(_this.get(colorKeyContainer), _this.get(colorKey), 15, 'nearer', false);
      }
    });
    this.createOrUpdate(onColorKey, {
      palette: function palette(s) {
        return s.getPalette(key);
      },
      tone: function tone(s) {
        return s.isDark ? 20 : 100;
      },
      background: function background(s) {
        return _this.get(colorKey);
      },
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    this.createOrUpdate(colorKeyContainer, {
      palette: function palette(s) {
        return s.getPalette(key);
      },
      tone: function tone(s) {
        return s.isDark ? 30 : 90;
      },
      isBackground: true,
      background: function background(s) {
        return _this.highestSurface(s);
      },
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: function toneDeltaPair(s) {
        return new ToneDeltaPair(_this.get(colorKeyContainer), _this.get(colorKey), 15, 'nearer', false);
      }
    });
    this.createOrUpdate(onColorKeyContainer, {
      palette: function palette(s) {
        return s.getPalette(key);
      },
      tone: function tone(s) {
        return s.isDark ? 90 : 10;
      },
      background: function background(s) {
        return _this.get(colorKeyContainer);
      },
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    this.createOrUpdate(inverseColorKey, {
      palette: function palette(s) {
        return s.getPalette(key);
      },
      tone: function tone(s) {
        return s.isDark ? 40 : 80;
      },
      background: function background(s) {
        return _this.get('inverseSurface');
      },
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
    });
    this.createOrUpdate(colorKeyFixed, {
      palette: function palette(s) {
        return s.getPalette(key);
      },
      tone: function tone(s) {
        return 90.0;
      },
      isBackground: true,
      background: function background(s) {
        return _this.highestSurface(s);
      },
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: function toneDeltaPair(s) {
        return new ToneDeltaPair(_this.get(colorKeyFixed), _this.get(colorKeyFixedDim), 10, 'lighter', true);
      }
    });
    this.createOrUpdate(colorKeyFixedDim, {
      palette: function palette(s) {
        return s.getPalette(key);
      },
      tone: function tone(s) {
        return 80.0;
      },
      isBackground: true,
      background: function background(s) {
        return _this.highestSurface(s);
      },
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: function toneDeltaPair(s) {
        return new ToneDeltaPair(_this.get(colorKeyFixed), _this.get(colorKeyFixedDim), 10, 'lighter', true);
      }
    });
    this.createOrUpdate(onColorKeyFixed, {
      palette: function palette(s) {
        return s.getPalette(key);
      },
      tone: function tone(s) {
        return 10.0;
      },
      background: function background(s) {
        return _this.get(colorKeyFixedDim);
      },
      secondBackground: function secondBackground(s) {
        return _this.get(colorKeyFixed);
      },
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    });
    this.createOrUpdate(onColorKeyFixedVariant, {
      palette: function palette(s) {
        return s.getPalette(key);
      },
      tone: function tone(s) {
        return 30.0;
      },
      background: function background(s) {
        return _this.get(colorKeyFixedDim);
      },
      secondBackground: function secondBackground(s) {
        return _this.get(colorKeyFixed);
      },
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
    });
  };
  return DynamicColorService;
}();
DynamicColorService = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Injectable()], DynamicColorService);

function findDesiredChromaByTone(hue, chroma, tone, byDecreasingTone) {
  var answer = tone;
  var closestToChroma = materialColorUtilities.Hct.from(hue, chroma, tone);
  if (closestToChroma.chroma < chroma) {
    var chromaPeak = closestToChroma.chroma;
    while (closestToChroma.chroma < chroma) {
      answer += byDecreasingTone ? -1.0 : 1.0;
      var potentialSolution = materialColorUtilities.Hct.from(hue, chroma, answer);
      if (chromaPeak > potentialSolution.chroma) {
        break;
      }
      if (Math.abs(potentialSolution.chroma - chroma) < 0.4) {
        break;
      }
      var potentialDelta = Math.abs(potentialSolution.chroma - chroma);
      var currentDelta = Math.abs(closestToChroma.chroma - chroma);
      if (potentialDelta < currentDelta) {
        closestToChroma = potentialSolution;
      }
      chromaPeak = Math.max(chromaPeak, potentialSolution.chroma);
    }
  }
  return answer;
}
var DefaultColorModel = function DefaultColorModel(dynamicColorService) {
  var _this = this;
  this.dynamicColorService = void 0;
  this.colors = {
    background: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 6 : 98;
      },
      isBackground: true
    },
    onBackground: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 90 : 10;
      },
      background: function background(s) {
        return _this.dynamicColorService.get('background');
      },
      contrastCurve: new ContrastCurve(3, 3, 4.5, 7)
    },
    surface: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 6 : 98;
      },
      isBackground: true
    },
    surfaceDim: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 6 : 87;
      },
      isBackground: true
    },
    surfaceBright: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 24 : 98;
      },
      isBackground: true
    },
    surfaceContainerLowest: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 4 : 100;
      },
      isBackground: true
    },
    surfaceContainerLow: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 10 : 96;
      },
      isBackground: true
    },
    surfaceContainer: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 12 : 94;
      },
      isBackground: true
    },
    surfaceContainerHigh: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 17 : 92;
      },
      isBackground: true
    },
    surfaceContainerHighest: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 22 : 90;
      },
      isBackground: true
    },
    onSurface: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 90 : 10;
      },
      background: function background(s) {
        return _this.dynamicColorService.highestSurface(s);
      },
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    },
    surfaceVariant: {
      palette: function palette(s) {
        return s.getPalette('neutralVariantPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 30 : 90;
      },
      isBackground: true
    },
    onSurfaceVariant: {
      palette: function palette(s) {
        return s.getPalette('neutralVariantPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 80 : 30;
      },
      background: function background(s) {
        return _this.dynamicColorService.highestSurface(s);
      },
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
    },
    inverseSurface: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 90 : 20;
      }
    },
    inverseOnSurface: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 20 : 95;
      },
      background: function background(s) {
        return _this.dynamicColorService.get('inverseSurface');
      },
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    },
    outline: {
      palette: function palette(s) {
        return s.getPalette('neutralVariantPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 60 : 50;
      },
      background: function background(s) {
        return _this.dynamicColorService.highestSurface(s);
      },
      contrastCurve: new ContrastCurve(1.5, 3, 4.5, 7)
    },
    outlineVariant: {
      palette: function palette(s) {
        return s.getPalette('neutralVariantPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 30 : 80;
      },
      background: function background(s) {
        return _this.dynamicColorService.highestSurface(s);
      },
      contrastCurve: new ContrastCurve(1, 1, 3, 7)
    },
    shadow: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return 0;
      }
    },
    scrim: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return 0;
      }
    },
    surfaceTint: {
      palette: function palette(s) {
        return s.getPalette('neutralPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 80 : 40;
      },
      isBackground: true
    },
    secondaryContainer: {
      tone: function tone(s) {
        var initialTone = s.isDark ? 30 : 90;
        return findDesiredChromaByTone(s.getPalette('secondary').hue, s.getPalette('secondary').chroma, initialTone, !s.isDark);
      }
    },
    onSecondaryContainer: {
      tone: function tone(s) {
        return DynamicColor.foregroundTone(_this.dynamicColorService.get('secondaryContainer').tone(s), 4.5);
      }
    },
    tertiaryContainer: {
      palette: function palette(s) {
        return s.getPalette('tertiaryPalette');
      },
      tone: function tone(s) {
        var proposedHct = s.getPalette('tertiaryPalette').getHct(s.sourceColorHct.tone);
        return materialColorUtilities.DislikeAnalyzer.fixIfDisliked(proposedHct).tone;
      }
    },
    onTertiaryContainer: {
      palette: function palette(s) {
        return s.getPalette('tertiaryPalette');
      },
      tone: function tone(s) {
        return DynamicColor.foregroundTone(_this.dynamicColorService.get('tertiaryContainer').tone(s), 4.5);
      }
    },
    error: {
      palette: function palette(s) {
        return s.getPalette('errorPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 80 : 40;
      },
      isBackground: true,
      background: function background(s) {
        return _this.dynamicColorService.highestSurface(s);
      },
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11),
      toneDeltaPair: function toneDeltaPair(s) {
        return new ToneDeltaPair(_this.dynamicColorService.get('errorContainer'), _this.dynamicColorService.get('error'), 15, 'nearer', false);
      }
    },
    onError: {
      palette: function palette(s) {
        return s.getPalette('errorPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 20 : 100;
      },
      background: function background(s) {
        return _this.dynamicColorService.get('error');
      },
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    },
    errorContainer: {
      palette: function palette(s) {
        return s.getPalette('errorPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 30 : 90;
      },
      isBackground: true,
      background: function background(s) {
        return _this.dynamicColorService.highestSurface(s);
      },
      contrastCurve: new ContrastCurve(1, 1, 3, 7),
      toneDeltaPair: function toneDeltaPair(s) {
        return new ToneDeltaPair(_this.dynamicColorService.get('errorContainer'), _this.dynamicColorService.get('error'), 15, 'nearer', false);
      }
    },
    onErrorContainer: {
      palette: function palette(s) {
        return s.getPalette('errorPalette');
      },
      tone: function tone(s) {
        return s.isDark ? 90 : 10;
      },
      background: function background(s) {
        return _this.dynamicColorService.get('errorContainer');
      },
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    },
    onTertiaryFixed: {
      palette: function palette(s) {
        return s.getPalette('tertiaryPalette');
      },
      tone: function tone(s) {
        return 10.0;
      },
      background: function background(s) {
        return _this.dynamicColorService.get('tertiaryFixedDim');
      },
      secondBackground: function secondBackground(s) {
        return _this.dynamicColorService.get('tertiaryFixed');
      },
      contrastCurve: new ContrastCurve(4.5, 7, 11, 21)
    },
    onTertiaryFixedVariant: {
      palette: function palette(s) {
        return s.getPalette('tertiaryPalette');
      },
      tone: function tone(s) {
        return 30.0;
      },
      background: function background(s) {
        return _this.dynamicColorService.get('tertiaryFixedDim');
      },
      secondBackground: function secondBackground(s) {
        return _this.dynamicColorService.get('tertiaryFixed');
      },
      contrastCurve: new ContrastCurve(3, 4.5, 7, 11)
    }
  };
  this.dynamicColorService = dynamicColorService;
};
DefaultColorModel = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Injectable(), /*#__PURE__*/tslib.__metadata("design:paramtypes", [DynamicColorService])], DefaultColorModel);

var SchemeService = /*#__PURE__*/function () {
  function SchemeService() {
    this.options = void 0;
  }
  var _proto = SchemeService.prototype;
  _proto.getPalette = function getPalette(key) {
    if (!this.options) {
      throw new Error('Scheme options is not set');
    }
    var palette = this.options.palettes.get(key);
    if (!palette) {
      throw new Error("Palette " + key + " not found");
    }
    return palette;
  };
  return _createClass(SchemeService, [{
    key: "contrastLevel",
    get: function get() {
      if (!this.options) {
        throw new Error('Scheme options is not set');
      }
      return this.options.contrastLevel;
    }
  }, {
    key: "isDark",
    get: function get() {
      if (!this.options) {
        throw new Error('Scheme options is not set');
      }
      return this.options.isDark;
    }
  }, {
    key: "sourceColorHct",
    get: function get() {
      if (!this.options) {
        throw new Error('Scheme options is not set');
      }
      return materialColorUtilities.Hct.fromInt(this.options.sourceColorArgb);
    }
  }]);
}();
SchemeService = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Injectable()], SchemeService);

var ColorService = /*#__PURE__*/function () {
  function ColorService(defaultColorModel, dynamicColorService, schemeService) {
    this.defaultColorModel = void 0;
    this.dynamicColorService = void 0;
    this.schemeService = void 0;
    this.defaultColorModel = defaultColorModel;
    this.dynamicColorService = dynamicColorService;
    this.schemeService = schemeService;
  }
  var _proto = ColorService.prototype;
  _proto.addBaseColors = function addBaseColors() {
    this.dynamicColorService.addFromPalette('primary');
    this.dynamicColorService.addFromPalette('secondary');
    this.dynamicColorService.addFromPalette('tertiary');
    for (var _i = 0, _Object$entries = Object.entries(this.defaultColorModel.colors); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _Object$entries[_i],
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      this.dynamicColorService.createOrUpdate(key, value);
    }
  };
  _proto.getArgb = function getArgb(key) {
    return this.dynamicColorService.get(key).getArgb(this.schemeService);
  };
  _proto.getHex = function getHex(key) {
    return materialColorUtilities.hexFromArgb(this.getArgb(key));
  };
  _proto.getHct = function getHct(key) {
    return this.dynamicColorService.get(key).getHct(this.schemeService);
  };
  return ColorService;
}();
ColorService = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Injectable(), /*#__PURE__*/tslib.__metadata("design:paramtypes", [DefaultColorModel, DynamicColorService, SchemeService])], ColorService);

var ThemeService = /*#__PURE__*/function () {
  function ThemeService(schemeService) {
    this.schemeService = void 0;
    this.schemeService = schemeService;
    // this.addPalette({key: "primary", addDefaultColors: true})
    // this.addPalette({key: "secondary", addDefaultColors: true})
    // this.addPalette({key: "tertiary", addDefaultColors: true})
    // this.addPalette({key: "error", palette: TonalPalette.fromHueAndChroma(25.0, 84.0)})
    // this.addPalette({key: "neutral"})
    // this.addPalette({key: "neutralVariant"})
  }
  // addPalette({key, palette, addDefaultColors}: {key: string; palette: TonalPalette; addDefaultColors: boolean}) {
  //   this.themeOptions.palettes.set(key, palette);
  //   if (addDefaultColors){
  //     this.colorService.addPalette(key)
  //   }
  // }
  // create(args: ThemeOptions): SchemeService {
  //   return new SchemeService(args, this.colorService)
  // }
  //
  // update(options: Partial<ThemeOptions>): SchemeService {
  //   Object.assign(this.themeOptions, options);
  //   return this.theme();
  // }
  var _proto = ThemeService.prototype;
  _proto.create = function create(options) {
    this.schemeService.options = options;
  };
  _proto.update = function update(options) {
    this.schemeService.options = _extends({}, this.schemeService.options, options);
  };
  return ThemeService;
}();
ThemeService = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Injectable(), /*#__PURE__*/tslib.__metadata("design:paramtypes", [SchemeService])], ThemeService);

var AppService = function AppService(colorService, themeService) {
  this.colorService = void 0;
  this.themeService = void 0;
  this.colorService = colorService;
  this.themeService = themeService;
};
AppService = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Injectable(), /*#__PURE__*/tslib.__metadata("design:paramtypes", [ColorService, ThemeService])], AppService);

var ThemeModule = function ThemeModule() {};
ThemeModule = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Module({
  providers: [SchemeService, ThemeService],
  exports: [ThemeService, SchemeService]
})], ThemeModule);

var ColorModule = function ColorModule() {};
ColorModule = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Module({
  imports: [ThemeModule],
  providers: [DefaultColorModel, ColorService, DynamicColorService],
  exports: [ColorService]
})], ColorModule);

var AppModule = function AppModule() {};
AppModule = /*#__PURE__*/tslib.__decorate([/*#__PURE__*/common.Module({
  imports: [ColorModule, ThemeModule],
  providers: [AppService]
})], AppModule);

function bootstrap() {
  return _bootstrap.apply(this, arguments);
}
function _bootstrap() {
  _bootstrap = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var app;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return core.NestFactory.create(AppModule);
        case 2:
          app = _context.sent;
          _context.next = 5;
          return app.listen(3000);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _bootstrap.apply(this, arguments);
}
bootstrap();
//# sourceMappingURL=udixio-theme.cjs.development.js.map
