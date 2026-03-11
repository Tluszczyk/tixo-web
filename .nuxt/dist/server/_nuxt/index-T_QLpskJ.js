import { cn } from "@primeuix/utils";
import { getWidth, getHeight, findSingle, getOuterHeight, getOffset, getOuterWidth, isRTL } from "@primeuix/utils/dom";
import { s as script$3 } from "./index-DZDB-Qm_.js";
import { s as script$2 } from "./index-Cb3yGitF.js";
import { R as Ripple } from "./index-C_90L85X.js";
import { s as script$4 } from "./index-2v-gS-ry.js";
import { p as BaseStyle } from "../server.mjs";
import { resolveDirective, openBlock, createElementBlock, mergeProps, withDirectives, createBlock, resolveDynamicComponent, createCommentVNode, createElementVNode, renderSlot } from "vue";
import "./index-BkTysYgF.js";
import "@primeuix/utils/object";
import "./index-CAbaPkAW.js";
import "@primeuix/styled";
import "@primeuix/utils/uuid";
import "@primeuix/styles/ripple";
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
  root: "p-tablist",
  content: "p-tablist-content p-tablist-viewport",
  tabList: "p-tablist-tab-list",
  activeBar: "p-tablist-active-bar",
  prevButton: "p-tablist-prev-button p-tablist-nav-button",
  nextButton: "p-tablist-next-button p-tablist-nav-button"
};
var TabListStyle = BaseStyle.extend({
  name: "tablist",
  classes
});
var script$1 = {
  name: "BaseTabList",
  "extends": script$4,
  props: {},
  style: TabListStyle,
  provide: function provide() {
    return {
      $pcTabList: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "TabList",
  "extends": script$1,
  inheritAttrs: false,
  inject: ["$pcTabs"],
  data: function data() {
    return {
      isPrevButtonEnabled: false,
      isNextButtonEnabled: true
    };
  },
  resizeObserver: void 0,
  watch: {
    showNavigators: function showNavigators(newValue) {
      newValue ? this.bindResizeObserver() : this.unbindResizeObserver();
    },
    activeValue: {
      flush: "post",
      handler: function handler() {
        this.updateInkBar();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;
    setTimeout(function() {
      _this.updateInkBar();
    }, 150);
    if (this.showNavigators) {
      this.updateButtonState();
      this.bindResizeObserver();
    }
  },
  updated: function updated() {
    this.showNavigators && this.updateButtonState();
  },
  beforeUnmount: function beforeUnmount() {
    this.unbindResizeObserver();
  },
  methods: {
    onScroll: function onScroll(event) {
      this.showNavigators && this.updateButtonState();
      event.preventDefault();
    },
    onPrevButtonClick: function onPrevButtonClick() {
      var content = this.$refs.content;
      var buttonWidths = this.getVisibleButtonWidths();
      var width = getWidth(content) - buttonWidths;
      var currentScrollLeft = Math.abs(content.scrollLeft);
      var scrollStep = width * 0.8;
      var targetScrollLeft = currentScrollLeft - scrollStep;
      var scrollLeft = Math.max(targetScrollLeft, 0);
      content.scrollLeft = isRTL(content) ? -1 * scrollLeft : scrollLeft;
    },
    onNextButtonClick: function onNextButtonClick() {
      var content = this.$refs.content;
      var buttonWidths = this.getVisibleButtonWidths();
      var width = getWidth(content) - buttonWidths;
      var currentScrollLeft = Math.abs(content.scrollLeft);
      var scrollStep = width * 0.8;
      var targetScrollLeft = currentScrollLeft + scrollStep;
      var maxScrollLeft = content.scrollWidth - width;
      var scrollLeft = Math.min(targetScrollLeft, maxScrollLeft);
      content.scrollLeft = isRTL(content) ? -1 * scrollLeft : scrollLeft;
    },
    bindResizeObserver: function bindResizeObserver() {
      var _this2 = this;
      this.resizeObserver = new ResizeObserver(function() {
        return _this2.updateButtonState();
      });
      this.resizeObserver.observe(this.$refs.list);
    },
    unbindResizeObserver: function unbindResizeObserver() {
      var _this$resizeObserver;
      (_this$resizeObserver = this.resizeObserver) === null || _this$resizeObserver === void 0 || _this$resizeObserver.unobserve(this.$refs.list);
      this.resizeObserver = void 0;
    },
    updateInkBar: function updateInkBar() {
      var _this$$refs = this.$refs, content = _this$$refs.content, inkbar = _this$$refs.inkbar, tabs = _this$$refs.tabs;
      if (!inkbar) return;
      var activeTab = findSingle(content, '[data-pc-name="tab"][data-p-active="true"]');
      if (this.$pcTabs.isVertical()) {
        inkbar.style.height = getOuterHeight(activeTab) + "px";
        inkbar.style.top = getOffset(activeTab).top - getOffset(tabs).top + "px";
      } else {
        inkbar.style.width = getOuterWidth(activeTab) + "px";
        inkbar.style.left = getOffset(activeTab).left - getOffset(tabs).left + "px";
      }
    },
    updateButtonState: function updateButtonState() {
      var _this$$refs2 = this.$refs, list = _this$$refs2.list, content = _this$$refs2.content;
      var scrollTop = content.scrollTop, scrollWidth = content.scrollWidth, scrollHeight = content.scrollHeight, offsetWidth = content.offsetWidth, offsetHeight = content.offsetHeight;
      var scrollLeft = Math.abs(content.scrollLeft);
      var _ref = [getWidth(content), getHeight(content)], width = _ref[0], height = _ref[1];
      if (this.$pcTabs.isVertical()) {
        this.isPrevButtonEnabled = scrollTop !== 0;
        this.isNextButtonEnabled = list.offsetHeight >= offsetHeight && parseInt(scrollTop) !== scrollHeight - height;
      } else {
        this.isPrevButtonEnabled = scrollLeft !== 0;
        this.isNextButtonEnabled = list.offsetWidth >= offsetWidth && parseInt(scrollLeft) !== scrollWidth - width;
      }
    },
    getVisibleButtonWidths: function getVisibleButtonWidths() {
      var _this$$refs3 = this.$refs, prevButton = _this$$refs3.prevButton, nextButton = _this$$refs3.nextButton;
      var width = 0;
      if (this.showNavigators) {
        width = ((prevButton === null || prevButton === void 0 ? void 0 : prevButton.offsetWidth) || 0) + ((nextButton === null || nextButton === void 0 ? void 0 : nextButton.offsetWidth) || 0);
      }
      return width;
    }
  },
  computed: {
    templates: function templates() {
      return this.$pcTabs.$slots;
    },
    activeValue: function activeValue() {
      return this.$pcTabs.d_value;
    },
    showNavigators: function showNavigators2() {
      return this.$pcTabs.showNavigators;
    },
    prevButtonAriaLabel: function prevButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.previous : void 0;
    },
    nextButtonAriaLabel: function nextButtonAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.next : void 0;
    },
    dataP: function dataP() {
      return cn({
        scrollable: this.$pcTabs.scrollable
      });
    }
  },
  components: {
    ChevronLeftIcon: script$3,
    ChevronRightIcon: script$2
  },
  directives: {
    ripple: Ripple
  }
};
var _hoisted_1 = ["data-p"];
var _hoisted_2 = ["aria-label", "tabindex"];
var _hoisted_3 = ["data-p"];
var _hoisted_4 = ["aria-orientation"];
var _hoisted_5 = ["aria-label", "tabindex"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createElementBlock("div", mergeProps({
    ref: "list",
    "class": _ctx.cx("root"),
    "data-p": $options.dataP
  }, _ctx.ptmi("root")), [$options.showNavigators && $data.isPrevButtonEnabled ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 0,
    ref: "prevButton",
    type: "button",
    "class": _ctx.cx("prevButton"),
    "aria-label": $options.prevButtonAriaLabel,
    tabindex: $options.$pcTabs.tabindex,
    onClick: _cache[0] || (_cache[0] = function() {
      return $options.onPrevButtonClick && $options.onPrevButtonClick.apply($options, arguments);
    })
  }, _ctx.ptm("prevButton"), {
    "data-pc-group-section": "navigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($options.templates.previcon || "ChevronLeftIcon"), mergeProps({
    "aria-hidden": "true"
  }, _ctx.ptm("prevIcon")), null, 16))], 16, _hoisted_2)), [[_directive_ripple]]) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    ref: "content",
    "class": _ctx.cx("content"),
    onScroll: _cache[1] || (_cache[1] = function() {
      return $options.onScroll && $options.onScroll.apply($options, arguments);
    }),
    "data-p": $options.dataP
  }, _ctx.ptm("content")), [createElementVNode("div", mergeProps({
    ref: "tabs",
    "class": _ctx.cx("tabList"),
    role: "tablist",
    "aria-orientation": $options.$pcTabs.orientation || "horizontal"
  }, _ctx.ptm("tabList")), [renderSlot(_ctx.$slots, "default"), createElementVNode("span", mergeProps({
    ref: "inkbar",
    "class": _ctx.cx("activeBar"),
    role: "presentation",
    "aria-hidden": "true"
  }, _ctx.ptm("activeBar")), null, 16)], 16, _hoisted_4)], 16, _hoisted_3), $options.showNavigators && $data.isNextButtonEnabled ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
    key: 1,
    ref: "nextButton",
    type: "button",
    "class": _ctx.cx("nextButton"),
    "aria-label": $options.nextButtonAriaLabel,
    tabindex: $options.$pcTabs.tabindex,
    onClick: _cache[2] || (_cache[2] = function() {
      return $options.onNextButtonClick && $options.onNextButtonClick.apply($options, arguments);
    })
  }, _ctx.ptm("nextButton"), {
    "data-pc-group-section": "navigator"
  }), [(openBlock(), createBlock(resolveDynamicComponent($options.templates.nexticon || "ChevronRightIcon"), mergeProps({
    "aria-hidden": "true"
  }, _ctx.ptm("nextIcon")), null, 16))], 16, _hoisted_5)), [[_directive_ripple]]) : createCommentVNode("", true)], 16, _hoisted_1);
}
script.render = render;
export {
  script as default
};
