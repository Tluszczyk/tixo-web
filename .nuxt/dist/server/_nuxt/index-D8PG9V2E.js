import { s as script$2 } from "./index-2v-gS-ry.js";
import { style } from "@primeuix/styles/stepper";
import { p as BaseStyle } from "../server.mjs";
import { openBlock, createElementBlock, mergeProps, renderSlot, createCommentVNode } from "vue";
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
    var props = _ref.props;
    return ["p-stepper p-component", {
      "p-readonly": props.linear
    }];
  },
  separator: "p-stepper-separator"
};
var StepperStyle = BaseStyle.extend({
  name: "stepper",
  style,
  classes
});
var script$1 = {
  name: "BaseStepper",
  "extends": script$2,
  props: {
    value: {
      type: [String, Number],
      "default": void 0
    },
    linear: {
      type: Boolean,
      "default": false
    }
  },
  style: StepperStyle,
  provide: function provide() {
    return {
      $pcStepper: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Stepper",
  "extends": script$1,
  inheritAttrs: false,
  emits: ["update:value"],
  data: function data() {
    return {
      d_value: this.value
    };
  },
  watch: {
    value: function value(newValue) {
      this.d_value = newValue;
    }
  },
  methods: {
    updateValue: function updateValue(newValue) {
      if (this.d_value !== newValue) {
        this.d_value = newValue;
        this.$emit("update:value", newValue);
      }
    },
    isStepActive: function isStepActive(value2) {
      return this.d_value === value2;
    },
    isStepDisabled: function isStepDisabled() {
      return this.linear;
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    role: "tablist"
  }, _ctx.ptmi("root")), [_ctx.$slots.start ? renderSlot(_ctx.$slots, "start", {
    key: 0
  }) : createCommentVNode("", true), renderSlot(_ctx.$slots, "default"), _ctx.$slots.end ? renderSlot(_ctx.$slots, "end", {
    key: 1
  }) : createCommentVNode("", true)], 16);
}
script.render = render;
export {
  script as default
};
