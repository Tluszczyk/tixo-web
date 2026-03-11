import { cn } from "@primeuix/utils";
import { mergeProps, openBlock, createElementBlock } from "vue";
import { s as script$2 } from "./index-DCu77hr6.js";
import { style } from "@primeuix/styles/textarea";
import { p as BaseStyle } from "../server.mjs";
import "./index-CpSjXzfP.js";
import "./index-2v-gS-ry.js";
import "@primeuix/styled";
import "@primeuix/utils/dom";
import "@primeuix/utils/object";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/hookable/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unctx/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ufo/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/klona/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@unhead/vue/dist/index.mjs";
import "@primeuix/utils/eventbus";
import "@primeuix/styles/base";
import "vue/server-renderer";
var classes = {
  root: function root(_ref) {
    var instance = _ref.instance, props = _ref.props;
    return ["p-textarea p-component", {
      "p-filled": instance.$filled,
      "p-textarea-resizable ": props.autoResize,
      "p-textarea-sm p-inputfield-sm": props.size === "small",
      "p-textarea-lg p-inputfield-lg": props.size === "large",
      "p-invalid": instance.$invalid,
      "p-variant-filled": instance.$variant === "filled",
      "p-textarea-fluid": instance.$fluid
    }];
  }
};
var TextareaStyle = BaseStyle.extend({
  name: "textarea",
  style,
  classes
});
var script$1 = {
  name: "BaseTextarea",
  "extends": script$2,
  props: {
    autoResize: Boolean
  },
  style: TextareaStyle,
  provide: function provide() {
    return {
      $pcTextarea: this,
      $parentInstance: this
    };
  }
};
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var script = {
  name: "Textarea",
  "extends": script$1,
  inheritAttrs: false,
  observer: null,
  mounted: function mounted() {
    var _this = this;
    if (this.autoResize) {
      this.observer = new ResizeObserver(function() {
        requestAnimationFrame(function() {
          _this.resize();
        });
      });
      this.observer.observe(this.$el);
    }
  },
  updated: function updated() {
    if (this.autoResize) {
      this.resize();
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    resize: function resize() {
      if (!this.$el.offsetParent) return;
      var currentHeight = this.$el.style.height;
      var currentHeightValue = parseInt(currentHeight) || 0;
      var initialScrollHeight = this.$el.scrollHeight;
      var needsExpanding = !currentHeightValue || initialScrollHeight > currentHeightValue;
      var needsShrinking = currentHeightValue && initialScrollHeight < currentHeightValue;
      if (needsShrinking) {
        this.$el.style.height = "auto";
        this.$el.style.height = "".concat(this.$el.scrollHeight, "px");
      } else if (needsExpanding) {
        this.$el.style.height = "".concat(initialScrollHeight, "px");
      }
    },
    onInput: function onInput(event) {
      if (this.autoResize) {
        this.resize();
      }
      this.writeValue(event.target.value, event);
    }
  },
  computed: {
    attrs: function attrs() {
      return mergeProps(this.ptmi("root", {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    },
    dataP: function dataP() {
      return cn(_defineProperty({
        invalid: this.$invalid,
        fluid: this.$fluid,
        filled: this.$variant === "filled"
      }, this.size, this.size));
    }
  }
};
var _hoisted_1 = ["value", "name", "disabled", "aria-invalid", "data-p"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("textarea", mergeProps({
    "class": _ctx.cx("root"),
    value: _ctx.d_value,
    name: _ctx.name,
    disabled: _ctx.disabled,
    "aria-invalid": _ctx.invalid || void 0,
    "data-p": $options.dataP,
    onInput: _cache[0] || (_cache[0] = function() {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, $options.attrs), null, 16, _hoisted_1);
}
script.render = render;
export {
  script as default
};
