import { equals } from "@primeuix/utils/object";
import { mergeProps, renderSlot, openBlock, createElementBlock, Fragment, withDirectives, createBlock, resolveDynamicComponent, withCtx, vShow, createCommentVNode, normalizeClass } from "vue";
import { s as script$2 } from "./index-2v-gS-ry.js";
import { p as BaseStyle } from "../server.mjs";
import "@primeuix/styled";
import "@primeuix/utils/dom";
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
    return ["p-tabpanel", {
      "p-tabpanel-active": instance.active
    }];
  }
};
var TabPanelStyle = BaseStyle.extend({
  name: "tabpanel",
  classes
});
var script$1 = {
  name: "BaseTabPanel",
  "extends": script$2,
  props: {
    // in Tabs
    value: {
      type: [String, Number],
      "default": void 0
    },
    as: {
      type: [String, Object],
      "default": "DIV"
    },
    asChild: {
      type: Boolean,
      "default": false
    },
    // in TabView
    header: null,
    headerStyle: null,
    headerClass: null,
    headerProps: null,
    headerActionProps: null,
    contentStyle: null,
    contentClass: null,
    contentProps: null,
    disabled: Boolean
  },
  style: TabPanelStyle,
  provide: function provide() {
    return {
      $pcTabPanel: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "TabPanel",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$pcTabs"],
  computed: {
    active: function active() {
      var _this$$pcTabs;
      return equals((_this$$pcTabs = this.$pcTabs) === null || _this$$pcTabs === void 0 ? void 0 : _this$$pcTabs.d_value, this.value);
    },
    id: function id() {
      var _this$$pcTabs2;
      return "".concat((_this$$pcTabs2 = this.$pcTabs) === null || _this$$pcTabs2 === void 0 ? void 0 : _this$$pcTabs2.$id, "_tabpanel_").concat(this.value);
    },
    ariaLabelledby: function ariaLabelledby() {
      var _this$$pcTabs3;
      return "".concat((_this$$pcTabs3 = this.$pcTabs) === null || _this$$pcTabs3 === void 0 ? void 0 : _this$$pcTabs3.$id, "_tab_").concat(this.value);
    },
    attrs: function attrs() {
      return mergeProps(this.a11yAttrs, this.ptmi("root", this.ptParams));
    },
    a11yAttrs: function a11yAttrs() {
      var _this$$pcTabs4;
      return {
        id: this.id,
        tabindex: (_this$$pcTabs4 = this.$pcTabs) === null || _this$$pcTabs4 === void 0 ? void 0 : _this$$pcTabs4.tabindex,
        role: "tabpanel",
        "aria-labelledby": this.ariaLabelledby,
        "data-pc-name": "tabpanel",
        "data-p-active": this.active
      };
    },
    ptParams: function ptParams() {
      return {
        context: {
          active: this.active
        }
      };
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$options$$pcTabs, _$options$$pcTabs2;
  return !$options.$pcTabs ? renderSlot(_ctx.$slots, "default", {
    key: 0
  }) : (openBlock(), createElementBlock(Fragment, {
    key: 1
  }, [!_ctx.asChild ? (openBlock(), createElementBlock(Fragment, {
    key: 0
  }, [((_$options$$pcTabs = $options.$pcTabs) !== null && _$options$$pcTabs !== void 0 && _$options$$pcTabs.lazy ? $options.active : true) ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx("root")
  }, $options.attrs), {
    "default": withCtx(function() {
      return [renderSlot(_ctx.$slots, "default")];
    }),
    _: 3
  }, 16, ["class"])), [[vShow, (_$options$$pcTabs2 = $options.$pcTabs) !== null && _$options$$pcTabs2 !== void 0 && _$options$$pcTabs2.lazy ? true : $options.active]]) : createCommentVNode("", true)], 64)) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx("root")),
    active: $options.active,
    a11yAttrs: $options.a11yAttrs
  })], 64));
}
script.render = render;
export {
  script as default
};
