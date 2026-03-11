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
  root: "p-inputicon"
};
var InputIconStyle = BaseStyle.extend({
  name: "inputicon",
  classes
});
var script$1 = {
  name: "BaseInputIcon",
  "extends": script$2,
  style: InputIconStyle,
  props: {
    "class": null
  },
  provide: function provide() {
    return {
      $pcInputIcon: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "InputIcon",
  "extends": script$1,
  inheritAttrs: false,
  computed: {
    containerClass: function containerClass() {
      return [this.cx("root"), this["class"]];
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": $options.containerClass
  }, _ctx.ptmi("root"), {
    "aria-hidden": "true"
  }), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;
export {
  script as default
};
