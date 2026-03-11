import { s as script$2 } from "./index-2v-gS-ry.js";
import { p as BaseStyle } from "../server.mjs";
import { openBlock, createElementBlock, mergeProps, renderSlot } from "vue";
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
import "@primeuix/utils";
import "@primeuix/styles/base";
import "vue/server-renderer";
import "appwrite";
var classes = {
  root: function root(_ref) {
    var instance = _ref.instance;
    return ["p-stepitem", {
      "p-stepitem-active": instance.isActive
    }];
  }
};
var StepItemStyle = BaseStyle.extend({
  name: "stepitem",
  classes
});
var script$1 = {
  name: "BaseStepItem",
  "extends": script$2,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    }
  },
  style: StepItemStyle,
  provide: function provide() {
    return {
      $pcStepItem: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "StepItem",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$pcStepper"],
  computed: {
    isActive: function isActive() {
      var _this$$pcStepper;
      return ((_this$$pcStepper = this.$pcStepper) === null || _this$$pcStepper === void 0 ? void 0 : _this$$pcStepper.d_value) === this.value;
    }
  }
};
var _hoisted_1 = ["data-p-active"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    "data-p-active": $options.isActive
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16, _hoisted_1);
}
script.render = render;
export {
  script as default
};
