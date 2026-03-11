import { uuid } from "@primeuix/utils";
import { s as script$2 } from "./index-CpSjXzfP.js";
import { style } from "@primeuix/styles/checkboxgroup";
import { p as BaseStyle } from "../server.mjs";
import { openBlock, createElementBlock, mergeProps, renderSlot } from "vue";
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
import "appwrite";
var classes = {
  root: "p-checkbox-group p-component"
};
var CheckboxGroupStyle = BaseStyle.extend({
  name: "checkboxgroup",
  style,
  classes
});
var script$1 = {
  name: "BaseCheckboxGroup",
  "extends": script$2,
  style: CheckboxGroupStyle,
  provide: function provide() {
    return {
      $pcCheckboxGroup: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "CheckboxGroup",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      groupName: this.name
    };
  },
  watch: {
    name: function name(newValue) {
      this.groupName = newValue || uuid("checkbox-group-");
    }
  },
  mounted: function mounted() {
    this.groupName = this.groupName || uuid("checkbox-group-");
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root")
  }, _ctx.ptmi("root")), [renderSlot(_ctx.$slots, "default")], 16);
}
script.render = render;
export {
  script as default
};
