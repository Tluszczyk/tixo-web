import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass } from "vue/server-renderer";
import { g as useThemeStore } from "../server.mjs";
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
import "@primeuix/styled";
import "@primeuix/utils";
import "@primeuix/utils/object";
import "@primeuix/styles/base";
import "@primeuix/utils/dom";
import "appwrite";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "hmf",
  __ssrInlineRender: true,
  setup(__props) {
    const themeStore = useThemeStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col w-full h-full bg-void min-h-screen transition-colors duration-300" }, _attrs))}><header class="w-full flex justify-between items-center px-8 py-4 bg-void/80 border-b border-glass-border shrink-0 sticky top-0 z-50 backdrop-blur-md"><div class="flex items-center space-x-3"><div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-900/20"> TT </div><span class="text-xl font-bold tracking-tight text-app-text hidden sm:block">tixo</span></div><div class="flex-1 max-w-2xl mx-12 hidden md:block">`);
      ssrRenderSlot(_ctx.$slots, "header-middle", {}, null, _push, _parent);
      _push(`</div><div class="flex items-center space-x-4"><button class="w-10 h-10 rounded-xl glass border-glass-border flex items-center justify-center text-app-text-muted hover:text-app-text hover:border-indigo-500/30 transition-all" title="Toggle Theme"><i class="${ssrRenderClass([unref(themeStore).theme === "dark" ? "pi-sun" : "pi-moon", "pi"])}"></i></button>`);
      ssrRenderSlot(_ctx.$slots, "header", {}, null, _push, _parent);
      _push(`</div></header><main class="w-full flex-1 flex flex-col items-center overflow-y-auto"><div class="w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-10">`);
      ssrRenderSlot(_ctx.$slots, "main", {}, null, _push, _parent);
      _push(`</div></main><footer class="w-full bg-void border-t border-glass-border py-12 shrink-0"><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0"><div class="flex flex-col items-center md:items-start"><div class="flex items-center space-x-2 mb-2"><div class="w-6 h-6 bg-blue-600 rounded flex items-center justify-center text-white text-[10px] font-bold"> TT </div><span class="text-sm font-bold text-app-text-muted">tixo Platform</span></div><p class="text-xs text-app-text-muted opacity-40 font-medium tracking-wide uppercase"> © 2026 tixo Inc. All rights reserved. </p></div><div class="flex items-center space-x-8"><a href="#" class="text-xs font-semibold text-app-text-muted hover:text-app-text transition-colors">Documentation</a><a href="#" class="text-xs font-semibold text-app-text-muted hover:text-app-text transition-colors">Terms of Service</a><a href="#" class="text-xs font-semibold text-app-text-muted hover:text-app-text transition-colors">Privacy Policy</a></div>`);
      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push, _parent);
      _push(`</div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/hmf.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
