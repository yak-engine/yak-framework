!(function (e) {
  var t = {};
  function s(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, s), (o.l = !0), o.exports;
  }
  (s.m = e),
    (s.c = t),
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
        for (var o in e)
          s.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
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
    (s.p = ""),
    s((s.s = 0));
})([
  function (e, t, s) {
    "use strict";
    s.r(t);
    var n = function (e, t, s) {
        (this.modalLayerClass = "a11y-modal-layer"),
          (this.hiddenClass = "a11y-hidden"),
          (this.dismissClass = "a11y-modal-dismiss");
      },
      o = function (e, t) {
        var s = this;
        (this.modalNode = e),
          (this.dismissNode = this.modalNode.querySelector(
            "." + t.options.dismissClass
          )),
          this.dismissNode.addEventListener("click", function () {
            t.close(s);
          });
      },
      i = function (e) {
        var t = this;
        (this.instances = []),
          (this.configure = function (e) {
            var s = new o(document.querySelector("#" + e), t),
              n = s.modalNode.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
              );
            return (
              (s.firstFocusableElement = n[0]),
              (s.lastFocusableElement = n[n.length - 1]),
              (s.firstFocusTrapElement = document.createElement("div")),
              (s.firstFocusTrapElement.tabIndex = 0),
              s.firstFocusTrapElement.addEventListener("focus", function (e) {
                s.lastFocusableElement.focus();
              }),
              (s.lastFocusTrapElement = document.createElement("div")),
              (s.lastFocusTrapElement.tabIndex = 0),
              s.lastFocusTrapElement.addEventListener("focus", function (e) {
                s.firstFocusableElement.focus();
              }),
              s.modalNode.parentNode.insertBefore(
                s.firstFocusTrapElement,
                s.modalNode
              ),
              s.modalNode.parentNode.insertBefore(
                s.lastFocusTrapElement,
                s.modalNode.nextSibling
              ),
              t.instances.push(s),
              s
            );
          }),
          (this.open = function (e) {
            var s = t.instances.filter(function (t) {
              return t.modalNode.id === e;
            })[0];
            s || ((s = t.configure(e)), t.instances.push(s)),
              s.modalNode.parentNode.classList.remove(t.options.hiddenClass),
              t.modalLayer.classList.contains(t.options.hiddenClass) &&
                t.modalLayer.classList.remove(t.options.hiddenClass),
              s.firstFocusableElement.focus();
          }),
          (this.close = function (e) {
            var s = t.instances.indexOf(e, 0);
            t.instances.splice(s, 1),
              e.modalNode.parentNode.classList.add(t.options.hiddenClass),
              s > 0 && t.instances[s - 1].firstFocusableElement.focus();
          }),
          (this.options = e || new n());
        var s = new n();
        (this.options.modalLayerClass =
          this.options.modalLayerClass || s.modalLayerClass),
          (this.options.hiddenClass =
            this.options.hiddenClass || s.hiddenClass),
          (this.options.dismissClass =
            this.options.dismissClass || s.dismissClass),
          (this.instances = []),
          (this.modalLayer = document.querySelector(
            "." + this.options.modalLayerClass
          ));
      };
    t.default = i;
    window.addEventListener("DOMContentLoaded", function () {
      window.a11yModal = window.a11yModal || new i();
    });
  },
]);
