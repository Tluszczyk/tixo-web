import script$2 from "./index-BApb0QfQ.js";
import { p as BaseStyle, C as ConfirmationEventBus } from "../server.mjs";
import script$3 from "./index-xcnWPxJy.js";
import { s as script$4 } from "./index-2v-gS-ry.js";
import { style } from "@primeuix/styles/confirmdialog";
import { resolveComponent, openBlock, createBlock, normalizeClass, createSlots, withCtx, createElementBlock, Fragment, renderSlot, resolveDynamicComponent, mergeProps, createCommentVNode, createElementVNode, toDisplayString, createVNode } from "vue";
import "@primeuix/utils";
import "@primeuix/utils/object";
import "./index-Bde-dTsh.js";
import "./index-BkTysYgF.js";
import "./index-38qaj1aM.js";
import "@primeuix/styles/badge";
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
import "@primeuix/styles/base";
import "vue/server-renderer";
import "./index-C_90L85X.js";
import "./index-CAbaPkAW.js";
import "@primeuix/utils/uuid";
import "@primeuix/styles/ripple";
import "@primeuix/styles/button";
import "@primeuix/utils/zindex";
import "./index-Bzd4Or7L.js";
import "./index-aXtX58o5.js";
import "./index-zZrFrjQS.js";
import "./index-Din928lO.js";
import "@primeuix/styles/dialog";
var classes = {
  root: "p-confirmdialog",
  icon: "p-confirmdialog-icon",
  message: "p-confirmdialog-message",
  pcRejectButton: "p-confirmdialog-reject-button",
  pcAcceptButton: "p-confirmdialog-accept-button"
};
var ConfirmDialogStyle = BaseStyle.extend({
  name: "confirmdialog",
  style,
  classes
});
var script$1 = {
  name: "BaseConfirmDialog",
  "extends": script$4,
  props: {
    group: String,
    breakpoints: {
      type: Object,
      "default": null
    },
    draggable: {
      type: Boolean,
      "default": true
    }
  },
  style: ConfirmDialogStyle,
  provide: function provide() {
    return {
      $pcConfirmDialog: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "ConfirmDialog",
  "extends": script$1,
  confirmListener: null,
  closeListener: null,
  data: function data() {
    return {
      visible: false,
      confirmation: null
    };
  },
  mounted: function mounted() {
    var _this = this;
    this.confirmListener = function(options) {
      if (!options) {
        return;
      }
      if (options.group === _this.group) {
        _this.confirmation = options;
        if (_this.confirmation.onShow) {
          _this.confirmation.onShow();
        }
        _this.visible = true;
      }
    };
    this.closeListener = function() {
      _this.visible = false;
      _this.confirmation = null;
    };
    ConfirmationEventBus.on("confirm", this.confirmListener);
    ConfirmationEventBus.on("close", this.closeListener);
  },
  beforeUnmount: function beforeUnmount() {
    ConfirmationEventBus.off("confirm", this.confirmListener);
    ConfirmationEventBus.off("close", this.closeListener);
  },
  methods: {
    accept: function accept() {
      if (this.confirmation.accept) {
        this.confirmation.accept();
      }
      this.visible = false;
    },
    reject: function reject() {
      if (this.confirmation.reject) {
        this.confirmation.reject();
      }
      this.visible = false;
    },
    onHide: function onHide() {
      if (this.confirmation.onHide) {
        this.confirmation.onHide();
      }
      this.visible = false;
    }
  },
  computed: {
    appendTo: function appendTo() {
      return this.confirmation ? this.confirmation.appendTo : "body";
    },
    target: function target() {
      return this.confirmation ? this.confirmation.target : null;
    },
    modal: function modal() {
      return this.confirmation ? this.confirmation.modal == null ? true : this.confirmation.modal : true;
    },
    header: function header() {
      return this.confirmation ? this.confirmation.header : null;
    },
    message: function message() {
      return this.confirmation ? this.confirmation.message : null;
    },
    blockScroll: function blockScroll() {
      return this.confirmation ? this.confirmation.blockScroll : true;
    },
    position: function position() {
      return this.confirmation ? this.confirmation.position : null;
    },
    acceptLabel: function acceptLabel() {
      if (this.confirmation) {
        var _confirmation$acceptP;
        var confirmation = this.confirmation;
        return confirmation.acceptLabel || ((_confirmation$acceptP = confirmation.acceptProps) === null || _confirmation$acceptP === void 0 ? void 0 : _confirmation$acceptP.label) || this.$primevue.config.locale.accept;
      }
      return this.$primevue.config.locale.accept;
    },
    rejectLabel: function rejectLabel() {
      if (this.confirmation) {
        var _confirmation$rejectP;
        var confirmation = this.confirmation;
        return confirmation.rejectLabel || ((_confirmation$rejectP = confirmation.rejectProps) === null || _confirmation$rejectP === void 0 ? void 0 : _confirmation$rejectP.label) || this.$primevue.config.locale.reject;
      }
      return this.$primevue.config.locale.reject;
    },
    acceptIcon: function acceptIcon() {
      var _this$confirmation;
      return this.confirmation ? this.confirmation.acceptIcon : (_this$confirmation = this.confirmation) !== null && _this$confirmation !== void 0 && _this$confirmation.acceptProps ? this.confirmation.acceptProps.icon : null;
    },
    rejectIcon: function rejectIcon() {
      var _this$confirmation2;
      return this.confirmation ? this.confirmation.rejectIcon : (_this$confirmation2 = this.confirmation) !== null && _this$confirmation2 !== void 0 && _this$confirmation2.rejectProps ? this.confirmation.rejectProps.icon : null;
    },
    autoFocusAccept: function autoFocusAccept() {
      return this.confirmation.defaultFocus === void 0 || this.confirmation.defaultFocus === "accept" ? true : false;
    },
    autoFocusReject: function autoFocusReject() {
      return this.confirmation.defaultFocus === "reject" ? true : false;
    },
    closeOnEscape: function closeOnEscape() {
      return this.confirmation ? this.confirmation.closeOnEscape : true;
    }
  },
  components: {
    Dialog: script$3,
    Button: script$2
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Button = resolveComponent("Button");
  var _component_Dialog = resolveComponent("Dialog");
  return openBlock(), createBlock(_component_Dialog, {
    visible: $data.visible,
    "onUpdate:visible": [_cache[2] || (_cache[2] = function($event) {
      return $data.visible = $event;
    }), $options.onHide],
    role: "alertdialog",
    "class": normalizeClass(_ctx.cx("root")),
    modal: $options.modal,
    header: $options.header,
    blockScroll: $options.blockScroll,
    appendTo: $options.appendTo,
    position: $options.position,
    breakpoints: _ctx.breakpoints,
    closeOnEscape: $options.closeOnEscape,
    draggable: _ctx.draggable,
    pt: _ctx.pt,
    unstyled: _ctx.unstyled
  }, createSlots({
    "default": withCtx(function() {
      return [!_ctx.$slots.container ? (openBlock(), createElementBlock(Fragment, {
        key: 0
      }, [!_ctx.$slots.message ? (openBlock(), createElementBlock(Fragment, {
        key: 0
      }, [renderSlot(_ctx.$slots, "icon", {}, function() {
        return [_ctx.$slots.icon ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.icon), {
          key: 0,
          "class": normalizeClass(_ctx.cx("icon"))
        }, null, 8, ["class"])) : $data.confirmation.icon ? (openBlock(), createElementBlock("span", mergeProps({
          key: 1,
          "class": [$data.confirmation.icon, _ctx.cx("icon")]
        }, _ctx.ptm("icon")), null, 16)) : createCommentVNode("", true)];
      }), createElementVNode("span", mergeProps({
        "class": _ctx.cx("message")
      }, _ctx.ptm("message")), toDisplayString($options.message), 17)], 64)) : (openBlock(), createBlock(resolveDynamicComponent(_ctx.$slots.message), {
        key: 1,
        message: $data.confirmation
      }, null, 8, ["message"]))], 64)) : createCommentVNode("", true)];
    }),
    _: 2
  }, [_ctx.$slots.container ? {
    name: "container",
    fn: withCtx(function(slotProps) {
      return [renderSlot(_ctx.$slots, "container", {
        message: $data.confirmation,
        closeCallback: slotProps.closeCallback,
        acceptCallback: $options.accept,
        rejectCallback: $options.reject,
        initDragCallback: slotProps.initDragCallback
      })];
    }),
    key: "0"
  } : void 0, !_ctx.$slots.container ? {
    name: "footer",
    fn: withCtx(function() {
      var _$data$confirmation$r;
      return [createVNode(_component_Button, mergeProps({
        "class": [_ctx.cx("pcRejectButton"), $data.confirmation.rejectClass],
        autofocus: $options.autoFocusReject,
        unstyled: _ctx.unstyled,
        text: ((_$data$confirmation$r = $data.confirmation.rejectProps) === null || _$data$confirmation$r === void 0 ? void 0 : _$data$confirmation$r.text) || false,
        onClick: _cache[0] || (_cache[0] = function($event) {
          return $options.reject();
        })
      }, $data.confirmation.rejectProps, {
        label: $options.rejectLabel,
        pt: _ctx.ptm("pcRejectButton")
      }), createSlots({
        _: 2
      }, [$options.rejectIcon || _ctx.$slots.rejecticon ? {
        name: "icon",
        fn: withCtx(function(iconProps) {
          return [renderSlot(_ctx.$slots, "rejecticon", {}, function() {
            return [createElementVNode("span", mergeProps({
              "class": [$options.rejectIcon, iconProps["class"]]
            }, _ctx.ptm("pcRejectButton")["icon"], {
              "data-pc-section": "rejectbuttonicon"
            }), null, 16)];
          })];
        }),
        key: "0"
      } : void 0]), 1040, ["class", "autofocus", "unstyled", "text", "label", "pt"]), createVNode(_component_Button, mergeProps({
        label: $options.acceptLabel,
        "class": [_ctx.cx("pcAcceptButton"), $data.confirmation.acceptClass],
        autofocus: $options.autoFocusAccept,
        unstyled: _ctx.unstyled,
        onClick: _cache[1] || (_cache[1] = function($event) {
          return $options.accept();
        })
      }, $data.confirmation.acceptProps, {
        pt: _ctx.ptm("pcAcceptButton")
      }), createSlots({
        _: 2
      }, [$options.acceptIcon || _ctx.$slots.accepticon ? {
        name: "icon",
        fn: withCtx(function(iconProps) {
          return [renderSlot(_ctx.$slots, "accepticon", {}, function() {
            return [createElementVNode("span", mergeProps({
              "class": [$options.acceptIcon, iconProps["class"]]
            }, _ctx.ptm("pcAcceptButton")["icon"], {
              "data-pc-section": "acceptbuttonicon"
            }), null, 16)];
          })];
        }),
        key: "0"
      } : void 0]), 1040, ["label", "class", "autofocus", "unstyled", "pt"])];
    }),
    key: "1"
  } : void 0]), 1032, ["visible", "class", "modal", "header", "blockScroll", "appendTo", "position", "breakpoints", "closeOnEscape", "draggable", "onUpdate:visible", "pt", "unstyled"]);
}
script.render = render;
export {
  script as default
};
