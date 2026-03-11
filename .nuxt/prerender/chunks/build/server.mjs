import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { ref, computed, hasInjectionContext, inject, defineComponent, unref, shallowRef, watch, getCurrentInstance, provide, cloneVNode, h, createElementBlock, defineAsyncComponent, readonly, nextTick, Suspense, mergeProps, shallowReactive, Fragment, useSSRContext, createApp, withCtx, createVNode, createTextVNode, toDisplayString, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, reactive, effectScope, getCurrentScope, toRef, isReadonly, toRaw, isRef, isShallow, isReactive, markRaw } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue/index.mjs';
import { $fetch } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ofetch/dist/node.mjs';
import { e as baseURL } from '../nitro/nitro.mjs';
import { createHooks } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/hookable/dist/index.mjs';
import { getContext, executeAsync } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unctx/dist/index.mjs';
import { sanitizeStatusCode, createError as createError$1, appendHeader } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/h3/dist/index.mjs';
import { defineStore, createPinia, setActivePinia, shouldHydrate } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/pinia/dist/pinia.prod.cjs';
import { defu } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/defu/dist/defu.mjs';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue-router/vue-router.node.mjs';
import { parseURL, encodePath, decodePath, hasProtocol, isScriptProtocol, joinURL, withQuery } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ufo/dist/index.mjs';
import { EventBus } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/eventbus/index.mjs';
import { Theme as Theme$1, css as css$1, dt, ThemeService } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styled/dist/index.mjs';
import { mergeKeys } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/index.mjs';
import { equals, removeAccents, resolveFieldData, resolve, minifyCSS, isNotEmpty } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/object/index.mjs';
import { style } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/base/index.mjs';
import { isClient, setAttributes, setAttribute, isExist } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/dom/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderTeleport, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue/server-renderer/index.mjs';
import { u as useSeoMeta$1, a as useHead$1, h as headSymbol } from '../_/renderer.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/destr/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ohash/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/klona/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/scule/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/radix3/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/consola/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/core/base/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/core/basecomponent/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/autocomplete/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/cascadeselect/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/checkbox/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/checkboxgroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/colorpicker/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/datepicker/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/floatlabel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/iconfield/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/iftalabel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputchips/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputgroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputnumber/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputotp/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputtext/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/knob/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/listbox/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/multiselect/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/password/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/radiobutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/radiobuttongroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/rating/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/select/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/selectbutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/slider/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/textarea/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/togglebutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/toggleswitch/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/treeselect/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/button/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/buttongroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/speeddial/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/splitbutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/datatable/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/dataview/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/orderlist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/organizationchart/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/paginator/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/picklist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tree/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/treetable/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/timeline/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/virtualscroller/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/accordion/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/card/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/divider/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/fieldset/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/panel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/scrollpanel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/splitter/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/stepper/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tabview/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tabs/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/toolbar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/confirmdialog/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/confirmpopup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/dialog/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/drawer/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/popover/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/fileupload/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/breadcrumb/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/contextmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/dock/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/menu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/menubar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/megamenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/panelmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/steps/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tabmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tieredmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/message/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inlinemessage/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/toast/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/carousel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/galleria/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/image/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/imagecompare/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/avatar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/badge/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/blockui/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/chip/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inplace/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/metergroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/overlaybadge/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/scrolltop/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/skeleton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/progressbar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/progressspinner/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tag/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/terminal/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/forms/form/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/forms/formfield/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tooltip/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/ripple/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/pathe/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/fast-xml-parser/src/fxp.js';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unhead/dist/server.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/devalue/index.js';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unhead/dist/utils.mjs';

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
if (!("global" in globalThis)) {
  globalThis.global = globalThis;
}
const appLayoutTransition = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const appId = "nuxt-app";
const crawlLinks = true;
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.21.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...options.ssrContext?.payload || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  const resolvedPlugins = /* @__PURE__ */ new Set();
  const unresolvedPlugins = [];
  const parallels = [];
  let error = void 0;
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    const unresolvedPluginsForThisPlugin = plugin2.dependsOn?.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.has(name)) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.add(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      }).catch((e) => {
        if (!plugin2.parallel && !nuxtApp.payload.error) {
          throw e;
        }
        error ||= e;
      });
      if (plugin2.parallel) {
        parallels.push(promise);
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (nuxtApp.ssrContext?.islandContext && plugin2.env?.islands === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (error) {
    throw nuxtApp.payload.error || error;
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
const definePayloadPlugin = defineNuxtPlugin;
function callWithNuxt(nuxt, setup2, args) {
  const fn = () => setup2();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = getCurrentInstance()?.appContext.app.$nuxt;
  }
  nuxtAppInstance ||= getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = /* @__PURE__ */ Symbol("layout-meta");
const PageRouteSymbol = /* @__PURE__ */ Symbol("route");
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
globalThis._importMeta_.url.replace(/\/app\/.*$/, "/");
const useRouter = () => {
  return useNuxtApp()?.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const URL_QUOTE_RE = /"/g;
const navigateTo = (to, options) => {
  to ||= "/";
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = options?.external || isExternalHost;
  if (isExternal) {
    if (!options?.external) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(URL_QUOTE_RE, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext["~renderResponse"] = {
          statusCode: sanitizeStatusCode(options?.redirectCode || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options?.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  const encodedTo = typeof to === "string" ? encodeRoutePath(to) : to;
  return options?.replace ? router.replace(encodedTo) : router.push(encodedTo);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
function encodeRoutePath(url) {
  const parsed = parseURL(url);
  return encodePath(decodePath(parsed.pathname)) + parsed.search + parsed.hash;
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = /* @__NO_SIDE_EFFECTS__ */ () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const error2 = /* @__PURE__ */ useError();
    if (false) ;
    error2.value ||= nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  if (typeof error !== "string" && error.statusText) {
    error.message ??= error.statusText;
  }
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  Object.defineProperty(nuxtError, "status", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusCode,
    configurable: true
  });
  Object.defineProperty(nuxtError, "statusText", {
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    get: () => nuxtError.statusMessage,
    configurable: true
  });
  return nuxtError;
};
function injectHead(nuxtApp) {
  const nuxt = nuxtApp || tryUseNuxtApp();
  return nuxt?.ssrContext?.head || nuxt?.runWithContext(() => {
    if (hasInjectionContext()) {
      return inject(headSymbol);
    }
  });
}
function useHead(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useHead$1(input, { head, ...options });
  }
}
function useSeoMeta(input, options = {}) {
  const head = injectHead(options.nuxt);
  if (head) {
    return useSeoMeta$1(input, { head, ...options });
  }
}
const matcher = /* @__PURE__ */ (() => {
  const $0 = {};
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    if (p === "/dashboard") {
      r.unshift({ data: $0 });
    }
    if (p === "/profile") {
      r.unshift({ data: $0 });
    }
    if (p === "/__sitemap__/style.xsl") {
      r.unshift({ data: $0 });
    }
    if (p === "/sitemap.xml") {
      r.unshift({ data: $0 });
    }
    if (p === "/_nuxt") {
      r.unshift({ data: $0 });
    }
    let s = p.split("/");
    s.length - 1;
    if (s[1] === "game") {
      r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
    }
    if (s[1] === "analysis") {
      r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
    }
    if (s[1] === "users") {
      r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
    }
    return r;
  };
})();
const _routeRulesMatcher = (path) => defu({}, ...matcher("", path).map((r) => r.data).reverse());
const routeRulesMatcher$1 = _routeRulesMatcher;
function getRouteRules(arg) {
  const path = typeof arg === "string" ? arg : arg.path;
  try {
    return routeRulesMatcher$1(path);
  } catch (e) {
    console.error("[nuxt] Error matching route rules.", e);
    return {};
  }
}
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext["~payloadReducers"][name] = reduce;
  }
}
const payloadPlugin = definePayloadPlugin(() => {
  definePayloadReducer(
    "skipHydrate",
    // We need to return something truthy to be treated as a match
    (data) => !shouldHydrate(data) && 1
  );
});
const unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    nuxtApp.vueApp.use(head);
  }
});
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
const __nuxt_page_meta$7 = {
  layout: "center"
};
const __nuxt_page_meta$6 = {
  layout: false
};
const __nuxt_page_meta$5 = {
  layout: false
};
const __nuxt_page_meta$4 = {
  layout: false
};
const __nuxt_page_meta$3 = {
  layout: false
};
const __nuxt_page_meta$2 = {
  layout: false
};
const __nuxt_page_meta$1 = {
  layout: false
};
const __nuxt_page_meta = {
  layout: false
};
const _routes = [
  {
    name: "index",
    path: "/",
    meta: { "middleware": "dashboard-redirect" },
    component: () => import('./index-D-bPkbZN.mjs')
  },
  {
    name: "login",
    path: "/login",
    meta: __nuxt_page_meta$7 || {},
    component: () => import('./login-2kb2RSUf.mjs')
  },
  {
    name: "profile",
    path: "/profile",
    meta: { ...__nuxt_page_meta$6 || {}, ...{ "middleware": "auth" } },
    component: () => import('./profile-DaMCloqk.mjs')
  },
  {
    name: "dashboard",
    path: "/dashboard",
    meta: __nuxt_page_meta$5 || {},
    component: () => import('./dashboard-CK1aLIYJ.mjs')
  },
  {
    name: "game-id",
    path: "/game/:id()",
    meta: __nuxt_page_meta$4 || {},
    component: () => import('./_id_-BC2tpDoy.mjs')
  },
  {
    name: "users-id",
    path: "/users/:id()",
    meta: __nuxt_page_meta$3 || {},
    component: () => import('./_id_-B5xKnax_.mjs')
  },
  {
    name: "how-to-play",
    path: "/how-to-play",
    meta: __nuxt_page_meta$2 || {},
    component: () => import('./how-to-play-D9R3pEXw.mjs')
  },
  {
    name: "users",
    path: "/users",
    meta: __nuxt_page_meta$1 || {},
    component: () => import('./index-YywJJbCm.mjs')
  },
  {
    name: "analysis-id",
    path: "/analysis/:id()",
    meta: __nuxt_page_meta || {},
    component: () => import('./_id_-Ch3K98Fb.mjs')
  }
];
const _wrapInTransition = (props, children) => {
  return { default: () => children.default?.() };
};
const ROUTE_KEY_PARENTHESES_RE = /(:\w+)\([^)]+\)/g;
const ROUTE_KEY_SYMBOLS_RE = /(:\w+)[?+*]/g;
const ROUTE_KEY_NORMAL_RE = /:\w+/g;
function generateRouteKey(route) {
  const source = route?.meta.key ?? route.path.replace(ROUTE_KEY_PARENTHESES_RE, "$1").replace(ROUTE_KEY_SYMBOLS_RE, "$1").replace(ROUTE_KEY_NORMAL_RE, (r) => route.params[r.slice(1)]?.toString() || "");
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => comp.components && comp.components.default === from.matched[index]?.components?.default
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    const nuxtApp = useNuxtApp();
    const hashScrollBehaviour = useRouter().options?.scrollBehaviorType ?? "auto";
    if (to.path.replace(/\/$/, "") === from.path.replace(/\/$/, "")) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior: hashScrollBehaviour };
      }
      return false;
    }
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (routeAllowsScrollToTop === false) {
      return false;
    }
    const hookToWait = nuxtApp._runningTransition ? "page:transition:finish" : "page:loading:end";
    return new Promise((resolve2) => {
      if (from === START_LOCATION) {
        resolve2(_calculatePosition(to, from, savedPosition, hashScrollBehaviour));
        return;
      }
      nuxtApp.hooks.hookOnce(hookToWait, () => {
        requestAnimationFrame(() => resolve2(_calculatePosition(to, from, savedPosition, hashScrollBehaviour)));
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
function _calculatePosition(to, from, savedPosition, defaultHashScrollBehaviour) {
  if (savedPosition) {
    return savedPosition;
  }
  const isPageNavigation = isChangingPage(to, from);
  if (to.hash) {
    return {
      el: to.hash,
      top: _getHashElementScrollMarginTop(to.hash),
      behavior: isPageNavigation ? defaultHashScrollBehaviour : "instant"
    };
  }
  return {
    left: 0,
    top: 0
  };
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  if (!to.meta?.validate) {
    return;
  }
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    fatal: false,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    status: result && (result.status || result.statusCode) || 404,
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    statusText: result && (result.statusText || result.statusMessage) || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  return error;
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware((to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {
  auth: () => import('./auth-Dir3HZWN.mjs'),
  "dashboard-redirect": () => import('./dashboard-redirect-C_EeOkJj.mjs')
};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes2 = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes: routes2
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    router.afterEach((to, from) => {
      if (to.matched.at(-1)?.components?.default === from.matched.at(-1)?.components?.default) {
        syncCurrentRoute();
      }
    });
    const route = { sync: syncCurrentRoute };
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware ||= {
      global: [],
      named: {}
    };
    const error = /* @__PURE__ */ useError();
    if (!nuxtApp.ssrContext?.islandContext) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if (failure?.type === 4) {
          return;
        }
        if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if (nuxtApp.ssrContext?.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!nuxtApp.ssrContext?.islandContext) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        const routeRules = getRouteRules({ path: to.path });
        if (routeRules.appMiddleware) {
          for (const key in routeRules.appMiddleware) {
            if (routeRules.appMiddleware[key]) {
              middlewareEntries.add(key);
            } else {
              middlewareEntries.delete(key);
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await namedMiddleware[entry2]?.().then((r) => r.default || r) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          try {
            if (false) ;
            const result = await nuxtApp.runWithContext(() => middleware(to, from));
            if (true) {
              if (result === false || result instanceof Error) {
                const error2 = result || createError({
                  status: 404,
                  statusText: `Page Not Found: ${initialURL}`
                });
                await nuxtApp.runWithContext(() => showError(error2));
                return false;
              }
            }
            if (result === true) {
              continue;
            }
            if (result === false) {
              return result;
            }
            if (result) {
              if (isNuxtError(result) && result.fatal) {
                await nuxtApp.runWithContext(() => showError(result));
              }
              return result;
            }
          } catch (err) {
            const error2 = createError(err);
            if (error2.fatal) {
              await nuxtApp.runWithContext(() => showError(error2));
            }
            return error2;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach((to) => {
      if (to.matched.length === 0 && !error.value) {
        return nuxtApp.runWithContext(() => showError(createError({
          status: 404,
          fatal: false,
          statusText: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
const __nuxt_component_0$1 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
function useRequestEvent(nuxtApp) {
  nuxtApp ||= useNuxtApp();
  return nuxtApp.ssrContext?.event;
}
function prerenderRoutes(path) {
  const paths = toArray$1(path);
  appendHeader(useRequestEvent(), "x-nitro-prerender", paths.map((p) => encodeURIComponent(p)).join(", "));
}
const _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt-site-config:init",
  enforce: "pre",
  async setup(nuxtApp) {
    const stack = useRequestEvent()?.context?.siteConfig;
    const state = useState("site-config");
    {
      nuxtApp.hooks.hook("app:rendered", () => {
        state.value = stack?.get({
          debug: (/* @__PURE__ */ useRuntimeConfig())["nuxt-site-config"].debug,
          resolveRefs: true
        });
      });
    }
    return {
      provide: {
        nuxtSiteConfig: stack
      }
    };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "pinia",
  setup(nuxtApp) {
    const pinia = createPinia();
    nuxtApp.vueApp.use(pinia);
    setActivePinia(pinia);
    {
      nuxtApp.payload.pinia = toRaw(pinia.state.value);
    }
    return {
      provide: {
        pinia
      }
    };
  }
});
const LazyAutoComplete = defineAsyncComponent(() => import('./index-BUyTtAd9.mjs').then((r) => r["default"] || r.default || r));
const LazyCalendar = defineAsyncComponent(() => import('./index-flC0nzP5.mjs').then((r) => r["default"] || r.default || r));
const LazyCascadeSelect = defineAsyncComponent(() => import('./index-DxFw9wh0.mjs').then((r) => r["default"] || r.default || r));
const LazyCheckbox = defineAsyncComponent(() => import('./index-CTCByymr.mjs').then((r) => r["default"] || r.default || r));
const LazyCheckboxGroup = defineAsyncComponent(() => import('./index-CRxgNgty.mjs').then((r) => r["default"] || r.default || r));
const LazyChips = defineAsyncComponent(() => import('./index-DmjfChgP.mjs').then((r) => r["default"] || r.default || r));
const LazyColorPicker = defineAsyncComponent(() => import('./index--T_0heWa.mjs').then((r) => r["default"] || r.default || r));
const LazyDatePicker = defineAsyncComponent(() => import('./index-CDpTXRiB.mjs').then((r) => r["default"] || r.default || r));
const LazyDropdown = defineAsyncComponent(() => import('./index-C0X0ZUUl.mjs').then((r) => r["default"] || r.default || r));
const LazyFloatLabel = defineAsyncComponent(() => import('./index-BlqOmsHL.mjs').then((r) => r["default"] || r.default || r));
const LazyFluid = defineAsyncComponent(() => import('./index-B1KM6w04.mjs').then((r) => r["default"] || r.default || r));
const LazyIconField = defineAsyncComponent(() => import('./index-CXsIa7WL.mjs').then((r) => r["default"] || r.default || r));
const LazyIftaLabel = defineAsyncComponent(() => import('./index-CELpz_N3.mjs').then((r) => r["default"] || r.default || r));
const LazyInputChips = defineAsyncComponent(() => import('./index-FOeNhAeu.mjs').then((r) => r["default"] || r.default || r));
const LazyInputGroup = defineAsyncComponent(() => import('./index-C84iJ8Y_.mjs').then((r) => r["default"] || r.default || r));
const LazyInputGroupAddon = defineAsyncComponent(() => import('./index-BtLEM-dT.mjs').then((r) => r["default"] || r.default || r));
const LazyInputIcon = defineAsyncComponent(() => import('./index-B7Lxpcvz.mjs').then((r) => r["default"] || r.default || r));
const LazyInputMask = defineAsyncComponent(() => import('./index-BnTJl1Tt.mjs').then((r) => r["default"] || r.default || r));
const LazyInputNumber = defineAsyncComponent(() => import('./index-DCRJ3sft.mjs').then((r) => r["default"] || r.default || r));
const LazyInputOtp = defineAsyncComponent(() => import('./index-C9VAIAai.mjs').then((r) => r["default"] || r.default || r));
const LazyInputSwitch = defineAsyncComponent(() => import('./index-BwjTcEzS.mjs').then((r) => r["default"] || r.default || r));
const LazyInputText = defineAsyncComponent(() => import('./index-B4F31ksn.mjs').then((r) => r["default"] || r.default || r));
const LazyKnob = defineAsyncComponent(() => import('./index-B533Awq-.mjs').then((r) => r["default"] || r.default || r));
const LazyListbox = defineAsyncComponent(() => import('./index-Cw33Ym1n.mjs').then((r) => r["default"] || r.default || r));
const LazyMultiSelect = defineAsyncComponent(() => import('./index-BRlCT5oT.mjs').then((r) => r["default"] || r.default || r));
const LazyPassword = defineAsyncComponent(() => import('./index-BT2VxpfZ.mjs').then((r) => r["default"] || r.default || r));
const LazyRadioButton = defineAsyncComponent(() => import('./index-C6CrVPxW.mjs').then((r) => r["default"] || r.default || r));
const LazyRadioButtonGroup = defineAsyncComponent(() => import('./index-CdPjcaxH.mjs').then((r) => r["default"] || r.default || r));
const LazyRating = defineAsyncComponent(() => import('./index-Tg8HeQxo.mjs').then((r) => r["default"] || r.default || r));
const LazySelect = defineAsyncComponent(() => import('./index-mXgiWtzr.mjs').then((r) => r["default"] || r.default || r));
const LazySelectButton = defineAsyncComponent(() => import('./index-D45XxH_3.mjs').then((r) => r["default"] || r.default || r));
const LazySlider = defineAsyncComponent(() => import('./index-CJrkZ867.mjs').then((r) => r["default"] || r.default || r));
const LazyTextarea = defineAsyncComponent(() => import('./index-9MHyhLLt.mjs').then((r) => r["default"] || r.default || r));
const LazyToggleButton = defineAsyncComponent(() => import('./index-UgUYfdvV.mjs').then((r) => r["default"] || r.default || r));
const LazyToggleSwitch = defineAsyncComponent(() => import('./index-CNa-YtbV.mjs').then((r) => r["default"] || r.default || r));
const LazyTreeSelect = defineAsyncComponent(() => import('./index-DRvzTe3w.mjs').then((r) => r["default"] || r.default || r));
const LazyButton = defineAsyncComponent(() => import('./index-BApb0QfQ.mjs').then((r) => r["default"] || r.default || r));
const LazyButtonGroup = defineAsyncComponent(() => import('./index-BNQbM4sV.mjs').then((r) => r["default"] || r.default || r));
const LazySpeedDial = defineAsyncComponent(() => import('./index-BV6Ij-hE.mjs').then((r) => r["default"] || r.default || r));
const LazySplitButton = defineAsyncComponent(() => import('./index-BOpIAxef.mjs').then((r) => r["default"] || r.default || r));
const LazyColumn = defineAsyncComponent(() => import('./index-C69IzMoq.mjs').then((r) => r["default"] || r.default || r));
const LazyRow = defineAsyncComponent(() => import('./index-4iLtA1Vm.mjs').then((r) => r["default"] || r.default || r));
const LazyColumnGroup = defineAsyncComponent(() => import('./index-D7IhBHS5.mjs').then((r) => r["default"] || r.default || r));
const LazyDataTable = defineAsyncComponent(() => import('./index-Gl7fM4NY.mjs').then((r) => r["default"] || r.default || r));
const LazyDataView = defineAsyncComponent(() => import('./index-DLyG3Ata.mjs').then((r) => r["default"] || r.default || r));
const LazyOrderList = defineAsyncComponent(() => import('./index-DY2IxNJQ.mjs').then((r) => r["default"] || r.default || r));
const LazyOrganizationChart = defineAsyncComponent(() => import('./index-B_3rDvfa.mjs').then((r) => r["default"] || r.default || r));
const LazyPaginator = defineAsyncComponent(() => import('./index-Cl1_mXKt.mjs').then((r) => r["default"] || r.default || r));
const LazyPickList = defineAsyncComponent(() => import('./index-Dct9I1WE.mjs').then((r) => r["default"] || r.default || r));
const LazyTree = defineAsyncComponent(() => import('./index-B89kIMjU.mjs').then((r) => r["default"] || r.default || r));
const LazyTreeTable = defineAsyncComponent(() => import('./index-CVHpn8bj.mjs').then((r) => r["default"] || r.default || r));
const LazyTimeline = defineAsyncComponent(() => import('./index-DT_qS2E4.mjs').then((r) => r["default"] || r.default || r));
const LazyVirtualScroller = defineAsyncComponent(() => import('./index-B3ij-0Pf.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordion = defineAsyncComponent(() => import('./index-BpX_ipBa.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionPanel = defineAsyncComponent(() => import('./index-Ck7bLtny.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionHeader = defineAsyncComponent(() => import('./index-Dejn3Ode.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionContent = defineAsyncComponent(() => import('./index-q-oIof6w.mjs').then((r) => r["default"] || r.default || r));
const LazyAccordionTab = defineAsyncComponent(() => import('./index-CclHbxDY.mjs').then((r) => r["default"] || r.default || r));
const LazyCard = defineAsyncComponent(() => import('./index-B4liAXip.mjs').then((r) => r["default"] || r.default || r));
const LazyDeferredContent = defineAsyncComponent(() => import('./index-dicVoVvZ.mjs').then((r) => r["default"] || r.default || r));
const LazyDivider = defineAsyncComponent(() => import('./index-09lv-t43.mjs').then((r) => r["default"] || r.default || r));
const LazyFieldset = defineAsyncComponent(() => import('./index-CrcIaNPg.mjs').then((r) => r["default"] || r.default || r));
const LazyPanel = defineAsyncComponent(() => import('./index-gD2xf7tz.mjs').then((r) => r["default"] || r.default || r));
const LazyScrollPanel = defineAsyncComponent(() => import('./index-BYHnjJr9.mjs').then((r) => r["default"] || r.default || r));
const LazySplitter = defineAsyncComponent(() => import('./index-yr3AOXai.mjs').then((r) => r["default"] || r.default || r));
const LazySplitterPanel = defineAsyncComponent(() => import('./index-DLl022Qv.mjs').then((r) => r["default"] || r.default || r));
const LazyStepper = defineAsyncComponent(() => import('./index-DrZwOtk3.mjs').then((r) => r["default"] || r.default || r));
const LazyStepList = defineAsyncComponent(() => import('./index-CFM0bUbn.mjs').then((r) => r["default"] || r.default || r));
const LazyStep = defineAsyncComponent(() => import('./index-B_hbWkyG.mjs').then((r) => r["default"] || r.default || r));
const LazyStepItem = defineAsyncComponent(() => import('./index-DXaqgwwu.mjs').then((r) => r["default"] || r.default || r));
const LazyStepPanels = defineAsyncComponent(() => import('./index-CmwjWw4p.mjs').then((r) => r["default"] || r.default || r));
const LazyStepPanel = defineAsyncComponent(() => import('./index-Cydea7Nb.mjs').then((r) => r["default"] || r.default || r));
const LazyTabView = defineAsyncComponent(() => import('./index-CvSG_BhV.mjs').then((r) => r["default"] || r.default || r));
const LazyTabs = defineAsyncComponent(() => import('./index-RrhdbzD8.mjs').then((r) => r["default"] || r.default || r));
const LazyTabList = defineAsyncComponent(() => import('./index-T_QLpskJ.mjs').then((r) => r["default"] || r.default || r));
const LazyTab = defineAsyncComponent(() => import('./index-BK7wvDvC.mjs').then((r) => r["default"] || r.default || r));
const LazyTabPanels = defineAsyncComponent(() => import('./index-8DFY8Pbq.mjs').then((r) => r["default"] || r.default || r));
const LazyTabPanel = defineAsyncComponent(() => import('./index-C9fUjwFw.mjs').then((r) => r["default"] || r.default || r));
const LazyToolbar = defineAsyncComponent(() => import('./index-C2XwZCSU.mjs').then((r) => r["default"] || r.default || r));
const LazyConfirmDialog = defineAsyncComponent(() => import('./index-BJASihyp.mjs').then((r) => r["default"] || r.default || r));
const LazyConfirmPopup = defineAsyncComponent(() => import('./index-BvMXNl18.mjs').then((r) => r["default"] || r.default || r));
const LazyDialog = defineAsyncComponent(() => import('./index-xcnWPxJy.mjs').then((r) => r["default"] || r.default || r));
const LazyDrawer = defineAsyncComponent(() => import('./index-B0WjOo0x.mjs').then((r) => r["default"] || r.default || r));
const LazyDynamicDialog = defineAsyncComponent(() => import('./index-ckJPIVBq.mjs').then((r) => r["default"] || r.default || r));
const LazyOverlayPanel = defineAsyncComponent(() => import('./index-B_t3hhrZ.mjs').then((r) => r["default"] || r.default || r));
const LazyPopover = defineAsyncComponent(() => import('./index-1NRtqvaW.mjs').then((r) => r["default"] || r.default || r));
const LazyFileUpload = defineAsyncComponent(() => import('./index-B5vk1R68.mjs').then((r) => r["default"] || r.default || r));
const LazyBreadcrumb = defineAsyncComponent(() => import('./index-DLcVnYBi.mjs').then((r) => r["default"] || r.default || r));
const LazyContextMenu = defineAsyncComponent(() => import('./index-_riAAajz.mjs').then((r) => r["default"] || r.default || r));
const LazyDock = defineAsyncComponent(() => import('./index-CsMRM2gX.mjs').then((r) => r["default"] || r.default || r));
const LazyMenu = defineAsyncComponent(() => import('./index-DpMqaiCJ.mjs').then((r) => r["default"] || r.default || r));
const LazyMenubar = defineAsyncComponent(() => import('./index-BvQgmWkw.mjs').then((r) => r["default"] || r.default || r));
const LazyMegaMenu = defineAsyncComponent(() => import('./index-BZDsIJWW.mjs').then((r) => r["default"] || r.default || r));
const LazyPanelMenu = defineAsyncComponent(() => import('./index-CWD2ny8d.mjs').then((r) => r["default"] || r.default || r));
const LazySteps = defineAsyncComponent(() => import('./index-DT2JndUG.mjs').then((r) => r["default"] || r.default || r));
const LazyTabMenu = defineAsyncComponent(() => import('./index-Sf9yKwYH.mjs').then((r) => r["default"] || r.default || r));
const LazyTieredMenu = defineAsyncComponent(() => import('./index-DLI1q3qe.mjs').then((r) => r["default"] || r.default || r));
const LazyMessage = defineAsyncComponent(() => import('./index-DmtasYaW.mjs').then((r) => r["default"] || r.default || r));
const LazyInlineMessage = defineAsyncComponent(() => import('./index-BCwLt5KG.mjs').then((r) => r["default"] || r.default || r));
const LazyToast = defineAsyncComponent(() => import('./index-BVsSNRvu.mjs').then((r) => r["default"] || r.default || r));
const LazyCarousel = defineAsyncComponent(() => import('./index-BhkPYJ41.mjs').then((r) => r["default"] || r.default || r));
const LazyGalleria = defineAsyncComponent(() => import('./index-Cfd-k5ei.mjs').then((r) => r["default"] || r.default || r));
const LazyImage = defineAsyncComponent(() => import('./index-HVnQSYRe.mjs').then((r) => r["default"] || r.default || r));
const LazyImageCompare = defineAsyncComponent(() => import('./index-CBy3ysIv.mjs').then((r) => r["default"] || r.default || r));
const LazyAvatar = defineAsyncComponent(() => import('./index-9JlO_imp.mjs').then((r) => r["default"] || r.default || r));
const LazyAvatarGroup = defineAsyncComponent(() => import('./index-1o3vMeJj.mjs').then((r) => r["default"] || r.default || r));
const LazyBadge = defineAsyncComponent(() => import('./index-38qaj1aM.mjs').then((r) => r["default"] || r.default || r));
const LazyBlockUI = defineAsyncComponent(() => import('./index-R5MOtCO-.mjs').then((r) => r["default"] || r.default || r));
const LazyChip = defineAsyncComponent(() => import('./index-C2RzmpdK.mjs').then((r) => r["default"] || r.default || r));
const LazyInplace = defineAsyncComponent(() => import('./index-Dwllle5w.mjs').then((r) => r["default"] || r.default || r));
const LazyMeterGroup = defineAsyncComponent(() => import('./index-C_fi85U7.mjs').then((r) => r["default"] || r.default || r));
const LazyOverlayBadge = defineAsyncComponent(() => import('./index-DtsOxHW_.mjs').then((r) => r["default"] || r.default || r));
const LazyScrollTop = defineAsyncComponent(() => import('./index-WEYuDxXf.mjs').then((r) => r["default"] || r.default || r));
const LazySkeleton = defineAsyncComponent(() => import('./index-HT374YwG.mjs').then((r) => r["default"] || r.default || r));
const LazyProgressBar = defineAsyncComponent(() => import('./index-BpigwHEv.mjs').then((r) => r["default"] || r.default || r));
const LazyProgressSpinner = defineAsyncComponent(() => import('./index-XDmQFkTB.mjs').then((r) => r["default"] || r.default || r));
const LazyTag = defineAsyncComponent(() => import('./index-DDE7sVTp.mjs').then((r) => r["default"] || r.default || r));
const LazyTerminal = defineAsyncComponent(() => import('./index-Df9N-fVb.mjs').then((r) => r["default"] || r.default || r));
const LazyForm = defineAsyncComponent(() => import('./index-D-OvI6RB.mjs').then((r) => r["default"] || r.default || r));
const LazyFormField = defineAsyncComponent(() => import('./index-Dn76ZwCd.mjs').then((r) => r["default"] || r.default || r));
const lazyGlobalComponents = [
  ["AutoComplete", LazyAutoComplete],
  ["Calendar", LazyCalendar],
  ["CascadeSelect", LazyCascadeSelect],
  ["Checkbox", LazyCheckbox],
  ["CheckboxGroup", LazyCheckboxGroup],
  ["Chips", LazyChips],
  ["ColorPicker", LazyColorPicker],
  ["DatePicker", LazyDatePicker],
  ["Dropdown", LazyDropdown],
  ["FloatLabel", LazyFloatLabel],
  ["Fluid", LazyFluid],
  ["IconField", LazyIconField],
  ["IftaLabel", LazyIftaLabel],
  ["InputChips", LazyInputChips],
  ["InputGroup", LazyInputGroup],
  ["InputGroupAddon", LazyInputGroupAddon],
  ["InputIcon", LazyInputIcon],
  ["InputMask", LazyInputMask],
  ["InputNumber", LazyInputNumber],
  ["InputOtp", LazyInputOtp],
  ["InputSwitch", LazyInputSwitch],
  ["InputText", LazyInputText],
  ["Knob", LazyKnob],
  ["Listbox", LazyListbox],
  ["MultiSelect", LazyMultiSelect],
  ["Password", LazyPassword],
  ["RadioButton", LazyRadioButton],
  ["RadioButtonGroup", LazyRadioButtonGroup],
  ["Rating", LazyRating],
  ["Select", LazySelect],
  ["SelectButton", LazySelectButton],
  ["Slider", LazySlider],
  ["Textarea", LazyTextarea],
  ["ToggleButton", LazyToggleButton],
  ["ToggleSwitch", LazyToggleSwitch],
  ["TreeSelect", LazyTreeSelect],
  ["Button", LazyButton],
  ["ButtonGroup", LazyButtonGroup],
  ["SpeedDial", LazySpeedDial],
  ["SplitButton", LazySplitButton],
  ["Column", LazyColumn],
  ["Row", LazyRow],
  ["ColumnGroup", LazyColumnGroup],
  ["DataTable", LazyDataTable],
  ["DataView", LazyDataView],
  ["OrderList", LazyOrderList],
  ["OrganizationChart", LazyOrganizationChart],
  ["Paginator", LazyPaginator],
  ["PickList", LazyPickList],
  ["Tree", LazyTree],
  ["TreeTable", LazyTreeTable],
  ["Timeline", LazyTimeline],
  ["VirtualScroller", LazyVirtualScroller],
  ["Accordion", LazyAccordion],
  ["AccordionPanel", LazyAccordionPanel],
  ["AccordionHeader", LazyAccordionHeader],
  ["AccordionContent", LazyAccordionContent],
  ["AccordionTab", LazyAccordionTab],
  ["Card", LazyCard],
  ["DeferredContent", LazyDeferredContent],
  ["Divider", LazyDivider],
  ["Fieldset", LazyFieldset],
  ["Panel", LazyPanel],
  ["ScrollPanel", LazyScrollPanel],
  ["Splitter", LazySplitter],
  ["SplitterPanel", LazySplitterPanel],
  ["Stepper", LazyStepper],
  ["StepList", LazyStepList],
  ["Step", LazyStep],
  ["StepItem", LazyStepItem],
  ["StepPanels", LazyStepPanels],
  ["StepPanel", LazyStepPanel],
  ["TabView", LazyTabView],
  ["Tabs", LazyTabs],
  ["TabList", LazyTabList],
  ["Tab", LazyTab],
  ["TabPanels", LazyTabPanels],
  ["TabPanel", LazyTabPanel],
  ["Toolbar", LazyToolbar],
  ["ConfirmDialog", LazyConfirmDialog],
  ["ConfirmPopup", LazyConfirmPopup],
  ["Dialog", LazyDialog],
  ["Drawer", LazyDrawer],
  ["DynamicDialog", LazyDynamicDialog],
  ["OverlayPanel", LazyOverlayPanel],
  ["Popover", LazyPopover],
  ["FileUpload", LazyFileUpload],
  ["Breadcrumb", LazyBreadcrumb],
  ["ContextMenu", LazyContextMenu],
  ["Dock", LazyDock],
  ["Menu", LazyMenu],
  ["Menubar", LazyMenubar],
  ["MegaMenu", LazyMegaMenu],
  ["PanelMenu", LazyPanelMenu],
  ["Steps", LazySteps],
  ["TabMenu", LazyTabMenu],
  ["TieredMenu", LazyTieredMenu],
  ["Message", LazyMessage],
  ["InlineMessage", LazyInlineMessage],
  ["Toast", LazyToast],
  ["Carousel", LazyCarousel],
  ["Galleria", LazyGalleria],
  ["Image", LazyImage],
  ["ImageCompare", LazyImageCompare],
  ["Avatar", LazyAvatar],
  ["AvatarGroup", LazyAvatarGroup],
  ["Badge", LazyBadge],
  ["BlockUI", LazyBlockUI],
  ["Chip", LazyChip],
  ["Inplace", LazyInplace],
  ["MeterGroup", LazyMeterGroup],
  ["OverlayBadge", LazyOverlayBadge],
  ["ScrollTop", LazyScrollTop],
  ["Skeleton", LazySkeleton],
  ["ProgressBar", LazyProgressBar],
  ["ProgressSpinner", LazyProgressSpinner],
  ["Tag", LazyTag],
  ["Terminal", LazyTerminal],
  ["Form", LazyForm],
  ["FormField", LazyFormField]
];
const components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk = /* @__PURE__ */ defineNuxtPlugin({
  setup() {
    const event = useRequestEvent();
    const ctx = event?.context?.robots;
    event?.context?.robotsProduction;
    if (!ctx)
      return;
    useHead({
      meta: [
        {
          "name": "robots",
          "content": () => ctx.rule || "",
          "data-hint": () => void 0,
          "data-production-content": () => void 0
        }
      ]
    });
  }
});
var FilterMatchMode = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
var FilterOperator = {
  AND: "and",
  OR: "or"
};
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray$1(r)) || e) {
      t && (r = t);
      var _n = 0, F = function F2() {
      };
      return { s: F, n: function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, e: function e2(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function s() {
    t = t.call(r);
  }, n: function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function e2(r2) {
    u = true, o = r2;
  }, f: function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray$1(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray$1(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray$1(r, a) : void 0;
  }
}
function _arrayLikeToArray$1(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var FilterService = {
  filter: function filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    var filteredItems = [];
    if (!value) {
      return filteredItems;
    }
    var _iterator = _createForOfIteratorHelper(value), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;
        if (typeof item === "string") {
          if (this.filters[filterMatchMode](item, filterValue, filterLocale)) {
            filteredItems.push(item);
            continue;
          }
        } else {
          var _iterator2 = _createForOfIteratorHelper(fields), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var field = _step2.value;
              var fieldValue = resolveFieldData(item, field);
              if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                filteredItems.push(item);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return filteredItems;
  },
  filters: {
    startsWith: function startsWith(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: function contains(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: function notContains(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: function endsWith(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: function equals2(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() === filter2.getTime();
      else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: function notEquals(value, filter2, filterLocale) {
      if (filter2 === void 0 || filter2 === null || filter2 === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter2.getTime) return value.getTime() !== filter2.getTime();
      else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != removeAccents(filter2.toString()).toLocaleLowerCase(filterLocale);
    },
    "in": function _in(value, filter2) {
      if (filter2 === void 0 || filter2 === null || filter2.length === 0) {
        return true;
      }
      for (var i = 0; i < filter2.length; i++) {
        if (equals(value, filter2[i])) {
          return true;
        }
      }
      return false;
    },
    between: function between(value, filter2) {
      if (filter2 == null || filter2[0] == null || filter2[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter2[0].getTime() <= value.getTime() && value.getTime() <= filter2[1].getTime();
      else return filter2[0] <= value && value <= filter2[1];
    },
    lt: function lt(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() < filter2.getTime();
      else return value < filter2;
    },
    lte: function lte(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() <= filter2.getTime();
      else return value <= filter2;
    },
    gt: function gt(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() > filter2.getTime();
      else return value > filter2;
    },
    gte: function gte(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter2.getTime) return value.getTime() >= filter2.getTime();
      else return value >= filter2;
    },
    dateIs: function dateIs(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter2.toDateString();
    },
    dateIsNot: function dateIsNot(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter2.toDateString();
    },
    dateBefore: function dateBefore(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter2.getTime();
    },
    dateAfter: function dateAfter(value, filter2) {
      if (filter2 === void 0 || filter2 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() > filter2.getTime();
    }
  },
  register: function register(rule, fn) {
    this.filters[rule] = fn;
  }
};
function _typeof$2(o) {
  "@babel/helpers - typeof";
  return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$2(o);
}
function ownKeys$2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$2(Object(t), true).forEach(function(r2) {
      _defineProperty$2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$2(e, r, t) {
  return (r = _toPropertyKey$2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$2(t) {
  var i = _toPrimitive$2(t, "string");
  return "symbol" == _typeof$2(i) ? i : i + "";
}
function _toPrimitive$2(t, r) {
  if ("object" != _typeof$2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
  if (getCurrentInstance() && getCurrentInstance().components) ;
  else if (sync) fn();
  else nextTick(fn);
}
var _id = 0;
function useStyle(css3) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var isLoaded = ref(false);
  var cssRef = ref(css3);
  var styleRef = ref(null);
  var defaultDocument = isClient() ? (void 0).document : void 0;
  var _options$document = options.document, document = _options$document === void 0 ? defaultDocument : _options$document, _options$immediate = options.immediate, immediate = _options$immediate === void 0 ? true : _options$immediate, _options$manual = options.manual, manual = _options$manual === void 0 ? false : _options$manual, _options$name = options.name, name = _options$name === void 0 ? "style_".concat(++_id) : _options$name, _options$id = options.id, id = _options$id === void 0 ? void 0 : _options$id, _options$media = options.media, media = _options$media === void 0 ? void 0 : _options$media, _options$nonce = options.nonce, nonce = _options$nonce === void 0 ? void 0 : _options$nonce, _options$first = options.first, first = _options$first === void 0 ? false : _options$first, _options$onMounted = options.onMounted, onStyleMounted = _options$onMounted === void 0 ? void 0 : _options$onMounted, _options$onUpdated = options.onUpdated, onStyleUpdated = _options$onUpdated === void 0 ? void 0 : _options$onUpdated, _options$onLoad = options.onLoad, onStyleLoaded = _options$onLoad === void 0 ? void 0 : _options$onLoad, _options$props = options.props, props = _options$props === void 0 ? {} : _options$props;
  var stop = function stop2() {
  };
  var load2 = function load22(_css) {
    var _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!document) return;
    var _styleProps = _objectSpread$2(_objectSpread$2({}, props), _props);
    var _name = _styleProps.name || name, _id2 = _styleProps.id || id, _nonce = _styleProps.nonce || nonce;
    styleRef.value = document.querySelector('style[data-primevue-style-id="'.concat(_name, '"]')) || document.getElementById(_id2) || document.createElement("style");
    if (!styleRef.value.isConnected) {
      cssRef.value = _css || css3;
      setAttributes(styleRef.value, {
        type: "text/css",
        id: _id2,
        media,
        nonce: _nonce
      });
      first ? document.head.prepend(styleRef.value) : document.head.appendChild(styleRef.value);
      setAttribute(styleRef.value, "data-primevue-style-id", _name);
      setAttributes(styleRef.value, _styleProps);
      styleRef.value.onload = function(event) {
        return onStyleLoaded === null || onStyleLoaded === void 0 ? void 0 : onStyleLoaded(event, {
          name: _name
        });
      };
      onStyleMounted === null || onStyleMounted === void 0 || onStyleMounted(_name);
    }
    if (isLoaded.value) return;
    stop = watch(cssRef, function(value) {
      styleRef.value.textContent = value;
      onStyleUpdated === null || onStyleUpdated === void 0 || onStyleUpdated(_name);
    }, {
      immediate: true
    });
    isLoaded.value = true;
  };
  var unload = function unload2() {
    if (!document || !isLoaded.value) return;
    stop();
    isExist(styleRef.value) && document.head.removeChild(styleRef.value);
    isLoaded.value = false;
    styleRef.value = null;
  };
  if (immediate && !manual) tryOnMounted(load2);
  return {
    id,
    name,
    el: styleRef,
    css: cssRef,
    unload,
    load: load2,
    isLoaded: readonly(isLoaded)
  };
}
function _typeof$1(o) {
  "@babel/helpers - typeof";
  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof$1(o);
}
var _templateObject, _templateObject2, _templateObject3, _templateObject4;
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) ;
      else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys$1(Object(t), true).forEach(function(r2) {
      _defineProperty$1(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (r = _toPropertyKey$1(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey$1(t) {
  var i = _toPrimitive$1(t, "string");
  return "symbol" == _typeof$1(i) ? i : i + "";
}
function _toPrimitive$1(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _taggedTemplateLiteral(e, t) {
  return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } }));
}
var css = function css2(_ref) {
  var dt2 = _ref.dt;
  return "\n.p-hidden-accessible {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    opacity: 0;\n    overflow: hidden;\n    padding: 0;\n    pointer-events: none;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n\n.p-overflow-hidden {\n    overflow: hidden;\n    padding-right: ".concat(dt2("scrollbar.width"), ";\n}\n");
};
var classes = {};
var inlineStyles = {};
var BaseStyle = {
  name: "base",
  css,
  style,
  classes,
  inlineStyles,
  load: function load(style2) {
    var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var transform = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function(cs) {
      return cs;
    };
    var computedStyle = transform(css$1(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), style2));
    return isNotEmpty(computedStyle) ? useStyle(minifyCSS(computedStyle), _objectSpread$1({
      name: this.name
    }, options)) : {};
  },
  loadCSS: function loadCSS() {
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return this.load(this.css, options);
  },
  loadStyle: function loadStyle() {
    var _this = this;
    var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var style2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
    return this.load(this.style, options, function() {
      var computedStyle = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return Theme$1.transformCSS(options.name || _this.name, "".concat(computedStyle).concat(css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["", ""])), style2)));
    });
  },
  getCommonTheme: function getCommonTheme(params) {
    return Theme$1.getCommon(this.name, params);
  },
  getComponentTheme: function getComponentTheme(params) {
    return Theme$1.getComponent(this.name, params);
  },
  getDirectiveTheme: function getDirectiveTheme(params) {
    return Theme$1.getDirective(this.name, params);
  },
  getPresetTheme: function getPresetTheme(preset, selector, params) {
    return Theme$1.getCustomPreset(this.name, preset, selector, params);
  },
  getLayerOrderThemeCSS: function getLayerOrderThemeCSS() {
    return Theme$1.getLayerOrderCSS(this.name);
  },
  getStyleSheet: function getStyleSheet() {
    var extendedCSS = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.css) {
      var _css = resolve(this.css, {
        dt
      }) || "";
      var _style = minifyCSS(css$1(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", "", ""])), _css, extendedCSS));
      var _props = Object.entries(props).reduce(function(acc, _ref2) {
        var _ref3 = _slicedToArray(_ref2, 2), k = _ref3[0], v = _ref3[1];
        return acc.push("".concat(k, '="').concat(v, '"')) && acc;
      }, []).join(" ");
      return isNotEmpty(_style) ? '<style type="text/css" data-primevue-style-id="'.concat(this.name, '" ').concat(_props, ">").concat(_style, "</style>") : "";
    }
    return "";
  },
  getCommonThemeStyleSheet: function getCommonThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return Theme$1.getCommonStyleSheet(this.name, params, props);
  },
  getThemeStyleSheet: function getThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var css3 = [Theme$1.getStyleSheet(this.name, params, props)];
    if (this.style) {
      var name = this.name === "base" ? "global-style" : "".concat(this.name, "-style");
      var _css = css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["", ""])), resolve(this.style, {
        dt
      }));
      var _style = minifyCSS(Theme$1.transformCSS(name, _css));
      var _props = Object.entries(props).reduce(function(acc, _ref4) {
        var _ref5 = _slicedToArray(_ref4, 2), k = _ref5[0], v = _ref5[1];
        return acc.push("".concat(k, '="').concat(v, '"')) && acc;
      }, []).join(" ");
      isNotEmpty(_style) && css3.push('<style type="text/css" data-primevue-style-id="'.concat(name, '" ').concat(_props, ">").concat(_style, "</style>"));
    }
    return css3.join("");
  },
  extend: function extend(inStyle) {
    return _objectSpread$1(_objectSpread$1({}, this), {}, {
      css: void 0,
      style: void 0
    }, inStyle);
  }
};
var PrimeVueService = EventBus();
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
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
var defaultOptions = {
  ripple: false,
  inputStyle: null,
  inputVariant: null,
  locale: {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    completed: "Completed",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    today: "Today",
    weekHeader: "Wk",
    firstDayOfWeek: 0,
    showMonthAfterYear: false,
    dateFormat: "mm/dd/yy",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyFilterMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    fileChosenMessage: "{0} files",
    noFileChosenMessage: "No file chosen",
    emptyMessage: "No available options",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "Page {page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  },
  filterMatchModeOptions: {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  },
  zIndex: {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  },
  theme: void 0,
  unstyled: false,
  pt: void 0,
  ptOptions: {
    mergeSections: true,
    mergeProps: false
  },
  csp: {
    nonce: void 0
  }
};
var PrimeVueSymbol = /* @__PURE__ */ Symbol();
function setup(app, options) {
  var PrimeVue2 = {
    config: reactive(options)
  };
  app.config.globalProperties.$primevue = PrimeVue2;
  app.provide(PrimeVueSymbol, PrimeVue2);
  clearConfig();
  setupConfig(app, PrimeVue2);
  return PrimeVue2;
}
var stopWatchers = [];
function clearConfig() {
  ThemeService.clear();
  stopWatchers.forEach(function(fn) {
    return fn === null || fn === void 0 ? void 0 : fn();
  });
  stopWatchers = [];
}
function setupConfig(app, PrimeVue2) {
  var isThemeChanged = ref(false);
  var loadCommonTheme = function loadCommonTheme2() {
    var _PrimeVue$config;
    if (((_PrimeVue$config = PrimeVue2.config) === null || _PrimeVue$config === void 0 ? void 0 : _PrimeVue$config.theme) === "none") return;
    if (!Theme$1.isStyleNameLoaded("common")) {
      var _BaseStyle$getCommonT, _PrimeVue$config2;
      var _ref = ((_BaseStyle$getCommonT = BaseStyle.getCommonTheme) === null || _BaseStyle$getCommonT === void 0 ? void 0 : _BaseStyle$getCommonT.call(BaseStyle)) || {}, primitive = _ref.primitive, semantic = _ref.semantic, global = _ref.global, style2 = _ref.style;
      var styleOptions = {
        nonce: (_PrimeVue$config2 = PrimeVue2.config) === null || _PrimeVue$config2 === void 0 || (_PrimeVue$config2 = _PrimeVue$config2.csp) === null || _PrimeVue$config2 === void 0 ? void 0 : _PrimeVue$config2.nonce
      };
      BaseStyle.load(primitive === null || primitive === void 0 ? void 0 : primitive.css, _objectSpread({
        name: "primitive-variables"
      }, styleOptions));
      BaseStyle.load(semantic === null || semantic === void 0 ? void 0 : semantic.css, _objectSpread({
        name: "semantic-variables"
      }, styleOptions));
      BaseStyle.load(global === null || global === void 0 ? void 0 : global.css, _objectSpread({
        name: "global-variables"
      }, styleOptions));
      BaseStyle.loadStyle(_objectSpread({
        name: "global-style"
      }, styleOptions), style2);
      Theme$1.setLoadedStyleName("common");
    }
  };
  ThemeService.on("theme:change", function(newTheme) {
    if (!isThemeChanged.value) {
      app.config.globalProperties.$primevue.config.theme = newTheme;
      isThemeChanged.value = true;
    }
  });
  var stopConfigWatcher = watch(PrimeVue2.config, function(newValue, oldValue) {
    PrimeVueService.emit("config:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopRippleWatcher = watch(function() {
    return PrimeVue2.config.ripple;
  }, function(newValue, oldValue) {
    PrimeVueService.emit("config:ripple:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  var stopThemeWatcher = watch(function() {
    return PrimeVue2.config.theme;
  }, function(newValue, oldValue) {
    if (!isThemeChanged.value) {
      Theme$1.setTheme(newValue);
    }
    if (!PrimeVue2.config.unstyled) {
      loadCommonTheme();
    }
    isThemeChanged.value = false;
    PrimeVueService.emit("config:theme:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: false
  });
  var stopUnstyledWatcher = watch(function() {
    return PrimeVue2.config.unstyled;
  }, function(newValue, oldValue) {
    if (!newValue && PrimeVue2.config.theme) {
      loadCommonTheme();
    }
    PrimeVueService.emit("config:unstyled:change", {
      newValue,
      oldValue
    });
  }, {
    immediate: true,
    deep: true
  });
  stopWatchers.push(stopConfigWatcher);
  stopWatchers.push(stopRippleWatcher);
  stopWatchers.push(stopThemeWatcher);
  stopWatchers.push(stopUnstyledWatcher);
}
var PrimeVue = {
  install: function install(app, options) {
    var configOptions = mergeKeys(defaultOptions, options);
    setup(app, configOptions);
  }
};
var ConfirmationEventBus = EventBus();
var PrimeVueConfirmSymbol = /* @__PURE__ */ Symbol();
var ConfirmationService = {
  install: function install2(app) {
    var ConfirmationService2 = {
      require: function require2(options) {
        ConfirmationEventBus.emit("confirm", options);
      },
      close: function close() {
        ConfirmationEventBus.emit("close");
      }
    };
    app.config.globalProperties.$confirm = ConfirmationService2;
    app.provide(PrimeVueConfirmSymbol, ConfirmationService2);
  }
};
var DynamicDialogEventBus = EventBus();
var PrimeVueDialogSymbol = /* @__PURE__ */ Symbol();
var DialogService = {
  install: function install3(app) {
    var DialogService2 = {
      open: function open(content, options) {
        var instance = {
          content: content && markRaw(content),
          options: options || {},
          data: options && options.data,
          close: function close(params) {
            DynamicDialogEventBus.emit("close", {
              instance,
              params
            });
          }
        };
        DynamicDialogEventBus.emit("open", {
          instance
        });
        return instance;
      }
    };
    app.config.globalProperties.$dialog = DialogService2;
    app.provide(PrimeVueDialogSymbol, DialogService2);
  }
};
var ToastEventBus = EventBus();
var PrimeVueToastSymbol = /* @__PURE__ */ Symbol();
var ToastService = {
  install: function install4(app) {
    var ToastService2 = {
      add: function add(message) {
        ToastEventBus.emit("add", message);
      },
      remove: function remove(message) {
        ToastEventBus.emit("remove", message);
      },
      removeGroup: function removeGroup(group) {
        ToastEventBus.emit("remove-group", group);
      },
      removeAllGroups: function removeAllGroups() {
        ToastEventBus.emit("remove-all-groups");
      }
    };
    app.config.globalProperties.$toast = ToastService2;
    app.provide(PrimeVueToastSymbol, ToastService2);
  }
};
const primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0 = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  const runtimeConfig = /* @__PURE__ */ useRuntimeConfig();
  const config = runtimeConfig?.public?.primevue ?? {};
  const { usePrimeVue = true, options = {} } = config;
  const pt = {};
  const theme = { theme: options?.theme };
  usePrimeVue && vueApp.use(PrimeVue, { ...options, ...pt, ...theme });
  vueApp.use(ConfirmationService);
  vueApp.use(DialogService);
  vueApp.use(ToastService);
});
let routes;
const prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk = /* @__PURE__ */ defineNuxtPlugin(async () => {
  let __temp, __restore;
  if (routes && !routes.length) {
    return;
  }
  routes ||= Array.from(processRoutes(([__temp, __restore] = executeAsync(() => routerOptions.routes?.(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes));
  const batch = routes.splice(0, 10);
  prerenderRoutes(batch);
});
const OPTIONAL_PARAM_RE = /^\/?:.*(?:\?|\(\.\*\)\*)$/;
function shouldPrerender(path) {
  return crawlLinks;
}
function processRoutes(routes2, currentPath = "/", routesToPrerender = /* @__PURE__ */ new Set()) {
  for (const route of routes2) {
    if (OPTIONAL_PARAM_RE.test(route.path) && !route.children?.length && shouldPrerender()) {
      routesToPrerender.add(currentPath);
    }
    if (route.path.includes(":")) {
      continue;
    }
    const fullPath = joinURL(currentPath, route.path);
    {
      routesToPrerender.add(fullPath);
    }
    if (route.children) {
      processRoutes(route.children, fullPath, routesToPrerender);
    }
  }
  return routesToPrerender;
}
const plugins = [
  payloadPlugin,
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk,
  primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0,
  prerender_server_sqIxOBipVr4FbVMA9kqWL0wT8FPop6sKAXLVfifsJzk
];
const layouts = {
  center: defineAsyncComponent(() => import('./center-CFcxdWoD.mjs').then((m) => m.default || m)),
  default: defineAsyncComponent(() => import('./default-0FILFBbV.mjs').then((m) => m.default || m)),
  hmf: defineAsyncComponent(() => import('./hmf-Cd9lbOPg.mjs').then((m) => m.default || m))
};
const routeRulesMatcher = _routeRulesMatcher;
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  setup(props, context) {
    return () => h(layouts[props.name], props.layoutProps, context.slots);
  }
});
const nuxtLayoutProps = {
  name: {
    type: [String, Boolean, Object],
    default: null
  },
  fallback: {
    type: [String, Object],
    default: null
  }
};
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: nuxtLayoutProps,
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const shouldUseEagerRoute = !injectedRoute || injectedRoute === useRoute();
    const route = shouldUseEagerRoute ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route?.meta.layout ?? routeRulesMatcher(route?.path).appLayout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = shallowRef();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    let lastLayout;
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route?.meta.layoutTransition ?? appLayoutTransition;
      const previouslyRenderedLayout = lastLayout;
      lastLayout = layout.value;
      return _wrapInTransition(hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, route.meta.layoutProps ?? {}, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              isRenderingNewLayout: (name) => {
                return name !== previouslyRenderedLayout && name === layout.value;
              },
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    },
    isRenderingNewLayout: {
      type: Function,
      required: true
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        // When name=false, always return true so NuxtPage doesn't skip rendering
        isCurrent: (route) => name === false || name === (route.meta.layout ?? routeRulesMatcher(route.path).appLayout ?? "default")
      });
    }
    const injectedRoute = inject(PageRouteSymbol);
    const isNotWithinNuxtPage = injectedRoute && injectedRoute === useRoute();
    if (isNotWithinNuxtPage) {
      const vueRouterRoute = useRoute$1();
      const reactiveChildRoute = {};
      for (const _key in vueRouterRoute) {
        const key = _key;
        Object.defineProperty(reactiveChildRoute, key, {
          enumerable: true,
          get: () => {
            return props.isRenderingNewLayout(props.name) ? vueRouterRoute[key] : injectedRoute[key];
          }
        });
      }
      provide(PageRouteSymbol, shallowReactive(reactiveChildRoute));
    }
    return () => {
      if (!name || typeof name === "string" && !(name in layouts)) {
        return context.slots.default?.();
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const defineRouteProvider = (name = "RouteProvider") => defineComponent({
  name,
  props: {
    route: {
      type: Object,
      required: true
    },
    vnode: Object,
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      if (!props.vnode) {
        return props.vnode;
      }
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const RouteProvider = defineRouteProvider();
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          return h(Suspense, { suspensible: true }, {
            default() {
              return h(RouteProvider, {
                vnode: slots.default ? normalizeSlot(slots.default, routeProps) : routeProps.Component,
                route: routeProps.route,
                vnodeRef: pageRef
              });
            }
          });
        }
      });
    };
  }
});
function normalizeSlot(slot, data) {
  const slotContent = slot(data);
  return slotContent.length === 1 ? h(slotContent[0]) : h(Fragment, void 0, slotContent);
}
const useThemeStore = defineStore("theme", () => {
  const getInitialTheme = () => {
    return "dark";
  };
  const theme = ref(getInitialTheme());
  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };
  watch(
    theme,
    (newTheme) => {
    },
    { immediate: true }
  );
  return { theme, toggleTheme };
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    variant: { default: "primary" },
    size: { default: "md" },
    iconLeft: {},
    iconRight: {},
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    type: { default: "button" },
    block: { type: Boolean, default: false },
    animate: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: __props.type,
        disabled: __props.disabled || __props.loading,
        class: [
          "base-button",
          `base-button--${__props.variant}`,
          `base-button--${__props.size}`,
          {
            "base-button--loading": __props.loading,
            "base-button--block": __props.block,
            "base-button--animate": __props.animate
          }
        ]
      }, _ctx.$attrs, _attrs))} data-v-5a2b2f4c><div class="base-button__content" data-v-5a2b2f4c>`);
      ssrRenderSlot(_ctx.$slots, "left", {}, () => {
        if (__props.iconLeft) {
          _push(`<i class="${ssrRenderClass([__props.iconLeft, "base-button__icon"])}" data-v-5a2b2f4c></i>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      if (_ctx.$slots.default) {
        _push(`<span class="base-button__text" data-v-5a2b2f4c>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "right", {}, () => {
        if (__props.iconRight) {
          _push(`<i class="${ssrRenderClass([__props.iconRight, "base-button__icon"])}" data-v-5a2b2f4c></i>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`</div>`);
      if (__props.loading) {
        _push(`<div class="base-button__loader" data-v-5a2b2f4c><i class="pi pi-spin pi-spinner" data-v-5a2b2f4c></i></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Common/BaseButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BaseButton = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-5a2b2f4c"]]);
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, [])).next());
  });
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
class Query {
  /**
   * Constructor for Query class.
   *
   * @param {string} method
   * @param {AttributesTypes} attribute
   * @param {QueryTypes} values
   */
  constructor(method, attribute, values) {
    this.method = method;
    this.attribute = attribute;
    if (values !== void 0) {
      if (Array.isArray(values)) {
        this.values = values;
      } else {
        this.values = [values];
      }
    }
  }
  /**
   * Convert the query object to a JSON string.
   *
   * @returns {string}
   */
  toString() {
    return JSON.stringify({
      method: this.method,
      attribute: this.attribute,
      values: this.values
    });
  }
}
Query.equal = (attribute, value) => new Query("equal", attribute, value).toString();
Query.notEqual = (attribute, value) => new Query("notEqual", attribute, value).toString();
Query.lessThan = (attribute, value) => new Query("lessThan", attribute, value).toString();
Query.lessThanEqual = (attribute, value) => new Query("lessThanEqual", attribute, value).toString();
Query.greaterThan = (attribute, value) => new Query("greaterThan", attribute, value).toString();
Query.greaterThanEqual = (attribute, value) => new Query("greaterThanEqual", attribute, value).toString();
Query.isNull = (attribute) => new Query("isNull", attribute).toString();
Query.isNotNull = (attribute) => new Query("isNotNull", attribute).toString();
Query.between = (attribute, start, end) => new Query("between", attribute, [start, end]).toString();
Query.startsWith = (attribute, value) => new Query("startsWith", attribute, value).toString();
Query.endsWith = (attribute, value) => new Query("endsWith", attribute, value).toString();
Query.select = (attributes) => new Query("select", void 0, attributes).toString();
Query.search = (attribute, value) => new Query("search", attribute, value).toString();
Query.orderDesc = (attribute) => new Query("orderDesc", attribute).toString();
Query.orderAsc = (attribute) => new Query("orderAsc", attribute).toString();
Query.orderRandom = () => new Query("orderRandom").toString();
Query.cursorAfter = (documentId) => new Query("cursorAfter", void 0, documentId).toString();
Query.cursorBefore = (documentId) => new Query("cursorBefore", void 0, documentId).toString();
Query.limit = (limit) => new Query("limit", void 0, limit).toString();
Query.offset = (offset) => new Query("offset", void 0, offset).toString();
Query.contains = (attribute, value) => new Query("contains", attribute, value).toString();
Query.notContains = (attribute, value) => new Query("notContains", attribute, value).toString();
Query.notSearch = (attribute, value) => new Query("notSearch", attribute, value).toString();
Query.notBetween = (attribute, start, end) => new Query("notBetween", attribute, [start, end]).toString();
Query.notStartsWith = (attribute, value) => new Query("notStartsWith", attribute, value).toString();
Query.notEndsWith = (attribute, value) => new Query("notEndsWith", attribute, value).toString();
Query.createdBefore = (value) => Query.lessThan("$createdAt", value);
Query.createdAfter = (value) => Query.greaterThan("$createdAt", value);
Query.createdBetween = (start, end) => Query.between("$createdAt", start, end);
Query.updatedBefore = (value) => Query.lessThan("$updatedAt", value);
Query.updatedAfter = (value) => Query.greaterThan("$updatedAt", value);
Query.updatedBetween = (start, end) => Query.between("$updatedAt", start, end);
Query.or = (queries) => new Query("or", void 0, queries.map((query) => JSON.parse(query))).toString();
Query.and = (queries) => new Query("and", void 0, queries.map((query) => JSON.parse(query))).toString();
Query.distanceEqual = (attribute, values, distance, meters = true) => new Query("distanceEqual", attribute, [[values, distance, meters]]).toString();
Query.distanceNotEqual = (attribute, values, distance, meters = true) => new Query("distanceNotEqual", attribute, [[values, distance, meters]]).toString();
Query.distanceGreaterThan = (attribute, values, distance, meters = true) => new Query("distanceGreaterThan", attribute, [[values, distance, meters]]).toString();
Query.distanceLessThan = (attribute, values, distance, meters = true) => new Query("distanceLessThan", attribute, [[values, distance, meters]]).toString();
Query.intersects = (attribute, values) => new Query("intersects", attribute, [values]).toString();
Query.notIntersects = (attribute, values) => new Query("notIntersects", attribute, [values]).toString();
Query.crosses = (attribute, values) => new Query("crosses", attribute, [values]).toString();
Query.notCrosses = (attribute, values) => new Query("notCrosses", attribute, [values]).toString();
Query.overlaps = (attribute, values) => new Query("overlaps", attribute, [values]).toString();
Query.notOverlaps = (attribute, values) => new Query("notOverlaps", attribute, [values]).toString();
Query.touches = (attribute, values) => new Query("touches", attribute, [values]).toString();
Query.notTouches = (attribute, values) => new Query("notTouches", attribute, [values]).toString();
class AppwriteException extends Error {
  /**
   * Initializes a Appwrite Exception.
   *
   * @param {string} message - The error message.
   * @param {number} code - The error code. Default is 0.
   * @param {string} type - The error type. Default is an empty string.
   * @param {string} response - The response string. Default is an empty string.
   */
  constructor(message, code = 0, type = "", response = "") {
    super(message);
    this.name = "AppwriteException";
    this.message = message;
    this.code = code;
    this.type = type;
    this.response = response;
  }
}
class Client {
  constructor() {
    this.config = {
      endpoint: "https://cloud.appwrite.io/v1",
      endpointRealtime: "",
      project: "",
      jwt: "",
      locale: "",
      session: "",
      devkey: ""
    };
    this.headers = {
      "x-sdk-name": "Web",
      "x-sdk-platform": "client",
      "x-sdk-language": "web",
      "x-sdk-version": "21.5.0",
      "X-Appwrite-Response-Format": "1.8.0"
    };
    this.realtime = {
      socket: void 0,
      timeout: void 0,
      heartbeat: void 0,
      url: "",
      channels: /* @__PURE__ */ new Set(),
      subscriptions: /* @__PURE__ */ new Map(),
      subscriptionsCounter: 0,
      reconnect: true,
      reconnectAttempts: 0,
      lastMessage: void 0,
      connect: () => {
        clearTimeout(this.realtime.timeout);
        this.realtime.timeout = void 0;
      },
      getTimeout: () => {
        switch (true) {
          case this.realtime.reconnectAttempts < 5:
            return 1e3;
          case this.realtime.reconnectAttempts < 15:
            return 5e3;
          case this.realtime.reconnectAttempts < 100:
            return 1e4;
          default:
            return 6e4;
        }
      },
      createHeartbeat: () => {
        if (this.realtime.heartbeat) {
          clearTimeout(this.realtime.heartbeat);
        }
        this.realtime.heartbeat = void 0;
      },
      createSocket: () => {
        var _a2, _b, _c;
        if (this.realtime.channels.size < 1) {
          this.realtime.reconnect = false;
          (_a2 = this.realtime.socket) === null || _a2 === void 0 ? void 0 : _a2.close();
          return;
        }
        const channels = new URLSearchParams();
        if (this.config.project) {
          channels.set("project", this.config.project);
        }
        this.realtime.channels.forEach((channel) => {
          channels.append("channels[]", channel);
        });
        const url = this.config.endpointRealtime + "/realtime?" + channels.toString();
        if (url !== this.realtime.url || // Check if URL is present
        !this.realtime.socket || // Check if WebSocket has not been created
        ((_b = this.realtime.socket) === null || _b === void 0 ? void 0 : _b.readyState) > WebSocket.OPEN) {
          if (this.realtime.socket && ((_c = this.realtime.socket) === null || _c === void 0 ? void 0 : _c.readyState) < WebSocket.CLOSING) {
            this.realtime.reconnect = false;
            this.realtime.socket.close();
          }
          this.realtime.url = url;
          this.realtime.socket = new WebSocket(url);
          this.realtime.socket.addEventListener("message", this.realtime.onMessage);
          this.realtime.socket.addEventListener("open", (_event) => {
            this.realtime.reconnectAttempts = 0;
            this.realtime.createHeartbeat();
          });
          this.realtime.socket.addEventListener("close", (event) => {
            var _a3, _b2, _c2;
            if (!this.realtime.reconnect || ((_b2 = (_a3 = this.realtime) === null || _a3 === void 0 ? void 0 : _a3.lastMessage) === null || _b2 === void 0 ? void 0 : _b2.type) === "error" && // Check if last message was of type error
            ((_c2 = this.realtime) === null || _c2 === void 0 ? void 0 : _c2.lastMessage.data).code === 1008) {
              this.realtime.reconnect = true;
              return;
            }
            const timeout = this.realtime.getTimeout();
            console.error(`Realtime got disconnected. Reconnect will be attempted in ${timeout / 1e3} seconds.`, event.reason);
            setTimeout(() => {
              this.realtime.reconnectAttempts++;
              this.realtime.createSocket();
            }, timeout);
          });
        }
      },
      onMessage: (event) => {
        var _a2, _b;
        try {
          const message = JSON.parse(event.data);
          this.realtime.lastMessage = message;
          switch (message.type) {
            case "connected":
              let session = this.config.session;
              if (!session) {
                const cookie = JSON.parse((_a2 = (void 0).localStorage.getItem("cookieFallback")) !== null && _a2 !== void 0 ? _a2 : "{}");
                session = cookie === null || cookie === void 0 ? void 0 : cookie[`a_session_${this.config.project}`];
              }
              const messageData = message.data;
              if (session && !messageData.user) {
                (_b = this.realtime.socket) === null || _b === void 0 ? void 0 : _b.send(JSON.stringify({
                  type: "authentication",
                  data: {
                    session
                  }
                }));
              }
              break;
            case "event":
              let data = message.data;
              if (data === null || data === void 0 ? void 0 : data.channels) {
                const isSubscribed = data.channels.some((channel) => this.realtime.channels.has(channel));
                if (!isSubscribed)
                  return;
                this.realtime.subscriptions.forEach((subscription) => {
                  if (data.channels.some((channel) => subscription.channels.includes(channel))) {
                    setTimeout(() => subscription.callback(data));
                  }
                });
              }
              break;
            case "pong":
              break;
            // Handle pong response if needed
            case "error":
              throw message.data;
            default:
              break;
          }
        } catch (e) {
          console.error(e);
        }
      },
      cleanUp: (channels) => {
        this.realtime.channels.forEach((channel) => {
          if (channels.includes(channel)) {
            let found = Array.from(this.realtime.subscriptions).some(([_key, subscription]) => {
              return subscription.channels.includes(channel);
            });
            if (!found) {
              this.realtime.channels.delete(channel);
            }
          }
        });
      }
    };
  }
  /**
   * Set Endpoint
   *
   * Your project endpoint
   *
   * @param {string} endpoint
   *
   * @returns {this}
   */
  setEndpoint(endpoint2) {
    if (!endpoint2.startsWith("http://") && !endpoint2.startsWith("https://")) {
      throw new AppwriteException("Invalid endpoint URL: " + endpoint2);
    }
    this.config.endpoint = endpoint2;
    this.config.endpointRealtime = endpoint2.replace("https://", "wss://").replace("http://", "ws://");
    return this;
  }
  /**
   * Set Realtime Endpoint
   *
   * @param {string} endpointRealtime
   *
   * @returns {this}
   */
  setEndpointRealtime(endpointRealtime) {
    if (!endpointRealtime.startsWith("ws://") && !endpointRealtime.startsWith("wss://")) {
      throw new AppwriteException("Invalid realtime endpoint URL: " + endpointRealtime);
    }
    this.config.endpointRealtime = endpointRealtime;
    return this;
  }
  /**
   * Set Project
   *
   * Your project ID
   *
   * @param value string
   *
   * @return {this}
   */
  setProject(value) {
    this.headers["X-Appwrite-Project"] = value;
    this.config.project = value;
    return this;
  }
  /**
   * Set JWT
   *
   * Your secret JSON Web Token
   *
   * @param value string
   *
   * @return {this}
   */
  setJWT(value) {
    this.headers["X-Appwrite-JWT"] = value;
    this.config.jwt = value;
    return this;
  }
  /**
   * Set Locale
   *
   * @param value string
   *
   * @return {this}
   */
  setLocale(value) {
    this.headers["X-Appwrite-Locale"] = value;
    this.config.locale = value;
    return this;
  }
  /**
   * Set Session
   *
   * The user session to authenticate with
   *
   * @param value string
   *
   * @return {this}
   */
  setSession(value) {
    this.headers["X-Appwrite-Session"] = value;
    this.config.session = value;
    return this;
  }
  /**
   * Set DevKey
   *
   * Your secret dev API key
   *
   * @param value string
   *
   * @return {this}
   */
  setDevKey(value) {
    this.headers["X-Appwrite-Dev-Key"] = value;
    this.config.devkey = value;
    return this;
  }
  /**
   * Subscribes to Appwrite events and passes you the payload in realtime.
   *
   * @deprecated Use the Realtime service instead.
   * @see Realtime
   *
   * @param {string|string[]} channels
   * Channel to subscribe - pass a single channel as a string or multiple with an array of strings.
   *
   * Possible channels are:
   * - account
   * - collections
   * - collections.[ID]
   * - collections.[ID].documents
   * - documents
   * - documents.[ID]
   * - files
   * - files.[ID]
   * - executions
   * - executions.[ID]
   * - functions.[ID]
   * - teams
   * - teams.[ID]
   * - memberships
   * - memberships.[ID]
   * @param {(payload: RealtimeMessage) => void} callback Is called on every realtime update.
   * @returns {() => void} Unsubscribes from events.
   */
  subscribe(channels, callback) {
    let channelArray = typeof channels === "string" ? [channels] : channels;
    channelArray.forEach((channel) => this.realtime.channels.add(channel));
    const counter = this.realtime.subscriptionsCounter++;
    this.realtime.subscriptions.set(counter, {
      channels: channelArray,
      callback
    });
    this.realtime.connect();
    return () => {
      this.realtime.subscriptions.delete(counter);
      this.realtime.cleanUp(channelArray);
      this.realtime.connect();
    };
  }
  prepareRequest(method, url, headers = {}, params = {}) {
    method = method.toUpperCase();
    headers = Object.assign({}, this.headers, headers);
    let options = {
      method,
      headers
    };
    if (headers["X-Appwrite-Dev-Key"] === void 0) {
      options.credentials = "include";
    }
    if (method === "GET") {
      for (const [key, value] of Object.entries(Client.flatten(params))) {
        url.searchParams.append(key, value);
      }
    } else {
      switch (headers["content-type"]) {
        case "application/json":
          options.body = JSON.stringify(params);
          break;
        case "multipart/form-data":
          const formData = new FormData();
          for (const [key, value] of Object.entries(params)) {
            if (value instanceof File) {
              formData.append(key, value, value.name);
            } else if (Array.isArray(value)) {
              for (const nestedValue of value) {
                formData.append(`${key}[]`, nestedValue);
              }
            } else {
              formData.append(key, value);
            }
          }
          options.body = formData;
          delete headers["content-type"];
          break;
      }
    }
    return { uri: url.toString(), options };
  }
  chunkedUpload(method, url, headers = {}, originalPayload = {}, onProgress) {
    var _a2;
    return __awaiter(this, void 0, void 0, function* () {
      const [fileParam, file] = (_a2 = Object.entries(originalPayload).find(([_, value]) => value instanceof File)) !== null && _a2 !== void 0 ? _a2 : [];
      if (!file || !fileParam) {
        throw new Error("File not found in payload");
      }
      if (file.size <= Client.CHUNK_SIZE) {
        return yield this.call(method, url, headers, originalPayload);
      }
      let start = 0;
      let response = null;
      while (start < file.size) {
        let end = start + Client.CHUNK_SIZE;
        if (end >= file.size) {
          end = file.size;
        }
        headers["content-range"] = `bytes ${start}-${end - 1}/${file.size}`;
        const chunk = file.slice(start, end);
        let payload = Object.assign({}, originalPayload);
        payload[fileParam] = new File([chunk], file.name);
        response = yield this.call(method, url, headers, payload);
        if (onProgress && typeof onProgress === "function") {
          onProgress({
            $id: response.$id,
            progress: Math.round(end / file.size * 100),
            sizeUploaded: end,
            chunksTotal: Math.ceil(file.size / Client.CHUNK_SIZE),
            chunksUploaded: Math.ceil(end / Client.CHUNK_SIZE)
          });
        }
        if (response && response.$id) {
          headers["x-appwrite-id"] = response.$id;
        }
        start = end;
      }
      return response;
    });
  }
  ping() {
    return __awaiter(this, void 0, void 0, function* () {
      return this.call("GET", new URL(this.config.endpoint + "/ping"));
    });
  }
  call(method, url, headers = {}, params = {}, responseType = "json") {
    var _a2, _b;
    return __awaiter(this, void 0, void 0, function* () {
      const { uri, options } = this.prepareRequest(method, url, headers, params);
      let data = null;
      const response = yield fetch(uri, options);
      if (response.type === "opaque") {
        throw new AppwriteException(`Invalid Origin. Register your new client (${(void 0).location.host}) as a new Web platform on your project console dashboard`, 403, "forbidden", "");
      }
      const warnings = response.headers.get("x-appwrite-warning");
      if (warnings) {
        warnings.split(";").forEach((warning) => console.warn("Warning: " + warning));
      }
      if ((_a2 = response.headers.get("content-type")) === null || _a2 === void 0 ? void 0 : _a2.includes("application/json")) {
        data = yield response.json();
      } else if (responseType === "arrayBuffer") {
        data = yield response.arrayBuffer();
      } else {
        data = {
          message: yield response.text()
        };
      }
      if (400 <= response.status) {
        let responseText = "";
        if (((_b = response.headers.get("content-type")) === null || _b === void 0 ? void 0 : _b.includes("application/json")) || responseType === "arrayBuffer") {
          responseText = JSON.stringify(data);
        } else {
          responseText = data === null || data === void 0 ? void 0 : data.message;
        }
        throw new AppwriteException(data === null || data === void 0 ? void 0 : data.message, response.status, data === null || data === void 0 ? void 0 : data.type, responseText);
      }
      response.headers.get("X-Fallback-Cookies");
      return data;
    });
  }
  static flatten(data, prefix = "") {
    let output = {};
    for (const [key, value] of Object.entries(data)) {
      let finalKey = prefix ? prefix + "[" + key + "]" : key;
      if (Array.isArray(value)) {
        output = Object.assign(Object.assign({}, output), Client.flatten(value, finalKey));
      } else {
        output[finalKey] = value;
      }
    }
    return output;
  }
}
Client.CHUNK_SIZE = 1024 * 1024 * 5;
class Service {
  constructor(client2) {
    this.client = client2;
  }
  static flatten(data, prefix = "") {
    let output = {};
    for (const [key, value] of Object.entries(data)) {
      let finalKey = prefix ? prefix + "[" + key + "]" : key;
      if (Array.isArray(value)) {
        output = Object.assign(Object.assign({}, output), Service.flatten(value, finalKey));
      } else {
        output[finalKey] = value;
      }
    }
    return output;
  }
}
Service.CHUNK_SIZE = 5 * 1024 * 1024;
class Account {
  constructor(client2) {
    this.client = client2;
  }
  /**
   * Get the currently logged in user.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  get() {
    const apiPath = "/account";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  create(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        email: rest[0],
        password: rest[1],
        name: rest[2]
      };
    }
    const userId = params.userId;
    const email = params.email;
    const password = params.password;
    const name = params.name;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof email === "undefined") {
      throw new AppwriteException('Missing required parameter: "email"');
    }
    if (typeof password === "undefined") {
      throw new AppwriteException('Missing required parameter: "password"');
    }
    const apiPath = "/account";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof email !== "undefined") {
      payload["email"] = email;
    }
    if (typeof password !== "undefined") {
      payload["password"] = password;
    }
    if (typeof name !== "undefined") {
      payload["name"] = name;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  updateEmail(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        email: paramsOrFirst,
        password: rest[0]
      };
    }
    const email = params.email;
    const password = params.password;
    if (typeof email === "undefined") {
      throw new AppwriteException('Missing required parameter: "email"');
    }
    if (typeof password === "undefined") {
      throw new AppwriteException('Missing required parameter: "password"');
    }
    const apiPath = "/account/email";
    const payload = {};
    if (typeof email !== "undefined") {
      payload["email"] = email;
    }
    if (typeof password !== "undefined") {
      payload["password"] = password;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  listIdentities(paramsOrFirst, ...rest) {
    let params;
    if (!paramsOrFirst || paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        queries: paramsOrFirst,
        total: rest[0]
      };
    }
    const queries = params.queries;
    const total = params.total;
    const apiPath = "/account/identities";
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    if (typeof total !== "undefined") {
      payload["total"] = total;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  deleteIdentity(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        identityId: paramsOrFirst
      };
    }
    const identityId = params.identityId;
    if (typeof identityId === "undefined") {
      throw new AppwriteException('Missing required parameter: "identityId"');
    }
    const apiPath = "/account/identities/{identityId}".replace("{identityId}", identityId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  /**
   * Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.Jwt>}
   */
  createJWT() {
    const apiPath = "/account/jwts";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  listLogs(paramsOrFirst, ...rest) {
    let params;
    if (!paramsOrFirst || paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        queries: paramsOrFirst,
        total: rest[0]
      };
    }
    const queries = params.queries;
    const total = params.total;
    const apiPath = "/account/logs";
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    if (typeof total !== "undefined") {
      payload["total"] = total;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  updateMFA(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        mfa: paramsOrFirst
      };
    }
    const mfa = params.mfa;
    if (typeof mfa === "undefined") {
      throw new AppwriteException('Missing required parameter: "mfa"');
    }
    const apiPath = "/account/mfa";
    const payload = {};
    if (typeof mfa !== "undefined") {
      payload["mfa"] = mfa;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  createMfaAuthenticator(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "type" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        type: paramsOrFirst
      };
    }
    const type = params.type;
    if (typeof type === "undefined") {
      throw new AppwriteException('Missing required parameter: "type"');
    }
    const apiPath = "/account/mfa/authenticators/{type}".replace("{type}", type);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  createMFAAuthenticator(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "type" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        type: paramsOrFirst
      };
    }
    const type = params.type;
    if (typeof type === "undefined") {
      throw new AppwriteException('Missing required parameter: "type"');
    }
    const apiPath = "/account/mfa/authenticators/{type}".replace("{type}", type);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  updateMfaAuthenticator(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "type" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        type: paramsOrFirst,
        otp: rest[0]
      };
    }
    const type = params.type;
    const otp = params.otp;
    if (typeof type === "undefined") {
      throw new AppwriteException('Missing required parameter: "type"');
    }
    if (typeof otp === "undefined") {
      throw new AppwriteException('Missing required parameter: "otp"');
    }
    const apiPath = "/account/mfa/authenticators/{type}".replace("{type}", type);
    const payload = {};
    if (typeof otp !== "undefined") {
      payload["otp"] = otp;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  updateMFAAuthenticator(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "type" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        type: paramsOrFirst,
        otp: rest[0]
      };
    }
    const type = params.type;
    const otp = params.otp;
    if (typeof type === "undefined") {
      throw new AppwriteException('Missing required parameter: "type"');
    }
    if (typeof otp === "undefined") {
      throw new AppwriteException('Missing required parameter: "otp"');
    }
    const apiPath = "/account/mfa/authenticators/{type}".replace("{type}", type);
    const payload = {};
    if (typeof otp !== "undefined") {
      payload["otp"] = otp;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  deleteMfaAuthenticator(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "type" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        type: paramsOrFirst
      };
    }
    const type = params.type;
    if (typeof type === "undefined") {
      throw new AppwriteException('Missing required parameter: "type"');
    }
    const apiPath = "/account/mfa/authenticators/{type}".replace("{type}", type);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  deleteMFAAuthenticator(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "type" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        type: paramsOrFirst
      };
    }
    const type = params.type;
    if (typeof type === "undefined") {
      throw new AppwriteException('Missing required parameter: "type"');
    }
    const apiPath = "/account/mfa/authenticators/{type}".replace("{type}", type);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  createMfaChallenge(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "factor" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        factor: paramsOrFirst
      };
    }
    const factor = params.factor;
    if (typeof factor === "undefined") {
      throw new AppwriteException('Missing required parameter: "factor"');
    }
    const apiPath = "/account/mfa/challenges";
    const payload = {};
    if (typeof factor !== "undefined") {
      payload["factor"] = factor;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  createMFAChallenge(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "factor" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        factor: paramsOrFirst
      };
    }
    const factor = params.factor;
    if (typeof factor === "undefined") {
      throw new AppwriteException('Missing required parameter: "factor"');
    }
    const apiPath = "/account/mfa/challenges";
    const payload = {};
    if (typeof factor !== "undefined") {
      payload["factor"] = factor;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  updateMfaChallenge(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        challengeId: paramsOrFirst,
        otp: rest[0]
      };
    }
    const challengeId = params.challengeId;
    const otp = params.otp;
    if (typeof challengeId === "undefined") {
      throw new AppwriteException('Missing required parameter: "challengeId"');
    }
    if (typeof otp === "undefined") {
      throw new AppwriteException('Missing required parameter: "otp"');
    }
    const apiPath = "/account/mfa/challenges";
    const payload = {};
    if (typeof challengeId !== "undefined") {
      payload["challengeId"] = challengeId;
    }
    if (typeof otp !== "undefined") {
      payload["otp"] = otp;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  updateMFAChallenge(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        challengeId: paramsOrFirst,
        otp: rest[0]
      };
    }
    const challengeId = params.challengeId;
    const otp = params.otp;
    if (typeof challengeId === "undefined") {
      throw new AppwriteException('Missing required parameter: "challengeId"');
    }
    if (typeof otp === "undefined") {
      throw new AppwriteException('Missing required parameter: "otp"');
    }
    const apiPath = "/account/mfa/challenges";
    const payload = {};
    if (typeof challengeId !== "undefined") {
      payload["challengeId"] = challengeId;
    }
    if (typeof otp !== "undefined") {
      payload["otp"] = otp;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  /**
   * List the factors available on the account to be used as a MFA challange.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.MfaFactors>}
   * @deprecated This API has been deprecated since 1.8.0. Please use `Account.listMFAFactors` instead.
   */
  listMfaFactors() {
    const apiPath = "/account/mfa/factors";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * List the factors available on the account to be used as a MFA challange.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.MfaFactors>}
   */
  listMFAFactors() {
    const apiPath = "/account/mfa/factors";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * Get recovery codes that can be used as backup for MFA flow. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to read recovery codes.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.MfaRecoveryCodes>}
   * @deprecated This API has been deprecated since 1.8.0. Please use `Account.getMFARecoveryCodes` instead.
   */
  getMfaRecoveryCodes() {
    const apiPath = "/account/mfa/recovery-codes";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * Get recovery codes that can be used as backup for MFA flow. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to read recovery codes.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.MfaRecoveryCodes>}
   */
  getMFARecoveryCodes() {
    const apiPath = "/account/mfa/recovery-codes";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * Generate recovery codes as backup for MFA flow. It's recommended to generate and show then immediately after user successfully adds their authehticator. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.MfaRecoveryCodes>}
   * @deprecated This API has been deprecated since 1.8.0. Please use `Account.createMFARecoveryCodes` instead.
   */
  createMfaRecoveryCodes() {
    const apiPath = "/account/mfa/recovery-codes";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  /**
   * Generate recovery codes as backup for MFA flow. It's recommended to generate and show then immediately after user successfully adds their authehticator. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.MfaRecoveryCodes>}
   */
  createMFARecoveryCodes() {
    const apiPath = "/account/mfa/recovery-codes";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  /**
   * Regenerate recovery codes that can be used as backup for MFA flow. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to regenreate recovery codes.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.MfaRecoveryCodes>}
   * @deprecated This API has been deprecated since 1.8.0. Please use `Account.updateMFARecoveryCodes` instead.
   */
  updateMfaRecoveryCodes() {
    const apiPath = "/account/mfa/recovery-codes";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  /**
   * Regenerate recovery codes that can be used as backup for MFA flow. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to regenreate recovery codes.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.MfaRecoveryCodes>}
   */
  updateMFARecoveryCodes() {
    const apiPath = "/account/mfa/recovery-codes";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  updateName(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        name: paramsOrFirst
      };
    }
    const name = params.name;
    if (typeof name === "undefined") {
      throw new AppwriteException('Missing required parameter: "name"');
    }
    const apiPath = "/account/name";
    const payload = {};
    if (typeof name !== "undefined") {
      payload["name"] = name;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  updatePassword(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        password: paramsOrFirst,
        oldPassword: rest[0]
      };
    }
    const password = params.password;
    const oldPassword = params.oldPassword;
    if (typeof password === "undefined") {
      throw new AppwriteException('Missing required parameter: "password"');
    }
    const apiPath = "/account/password";
    const payload = {};
    if (typeof password !== "undefined") {
      payload["password"] = password;
    }
    if (typeof oldPassword !== "undefined") {
      payload["oldPassword"] = oldPassword;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  updatePhone(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        phone: paramsOrFirst,
        password: rest[0]
      };
    }
    const phone = params.phone;
    const password = params.password;
    if (typeof phone === "undefined") {
      throw new AppwriteException('Missing required parameter: "phone"');
    }
    if (typeof password === "undefined") {
      throw new AppwriteException('Missing required parameter: "password"');
    }
    const apiPath = "/account/phone";
    const payload = {};
    if (typeof phone !== "undefined") {
      payload["phone"] = phone;
    }
    if (typeof password !== "undefined") {
      payload["password"] = password;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  /**
   * Get the preferences as a key-value object for the currently logged in user.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Preferences>}
   */
  getPrefs() {
    const apiPath = "/account/prefs";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  updatePrefs(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "prefs" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        prefs: paramsOrFirst
      };
    }
    const prefs = params.prefs;
    if (typeof prefs === "undefined") {
      throw new AppwriteException('Missing required parameter: "prefs"');
    }
    const apiPath = "/account/prefs";
    const payload = {};
    if (typeof prefs !== "undefined") {
      payload["prefs"] = prefs;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  createRecovery(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        email: paramsOrFirst,
        url: rest[0]
      };
    }
    const email = params.email;
    const url = params.url;
    if (typeof email === "undefined") {
      throw new AppwriteException('Missing required parameter: "email"');
    }
    if (typeof url === "undefined") {
      throw new AppwriteException('Missing required parameter: "url"');
    }
    const apiPath = "/account/recovery";
    const payload = {};
    if (typeof email !== "undefined") {
      payload["email"] = email;
    }
    if (typeof url !== "undefined") {
      payload["url"] = url;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  updateRecovery(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        secret: rest[0],
        password: rest[1]
      };
    }
    const userId = params.userId;
    const secret = params.secret;
    const password = params.password;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof secret === "undefined") {
      throw new AppwriteException('Missing required parameter: "secret"');
    }
    if (typeof password === "undefined") {
      throw new AppwriteException('Missing required parameter: "password"');
    }
    const apiPath = "/account/recovery";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof secret !== "undefined") {
      payload["secret"] = secret;
    }
    if (typeof password !== "undefined") {
      payload["password"] = password;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  /**
   * Get the list of active sessions across different devices for the currently logged in user.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.SessionList>}
   */
  listSessions() {
    const apiPath = "/account/sessions";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * Delete all sessions from the user account and remove any sessions cookies from the end client.
   *
   * @throws {AppwriteException}
   * @returns {Promise<{}>}
   */
  deleteSessions() {
    const apiPath = "/account/sessions";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  /**
   * Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail) or create an [OAuth2 session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.Session>}
   */
  createAnonymousSession() {
    const apiPath = "/account/sessions/anonymous";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  createEmailPasswordSession(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        email: paramsOrFirst,
        password: rest[0]
      };
    }
    const email = params.email;
    const password = params.password;
    if (typeof email === "undefined") {
      throw new AppwriteException('Missing required parameter: "email"');
    }
    if (typeof password === "undefined") {
      throw new AppwriteException('Missing required parameter: "password"');
    }
    const apiPath = "/account/sessions/email";
    const payload = {};
    if (typeof email !== "undefined") {
      payload["email"] = email;
    }
    if (typeof password !== "undefined") {
      payload["password"] = password;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  updateMagicURLSession(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        secret: rest[0]
      };
    }
    const userId = params.userId;
    const secret = params.secret;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof secret === "undefined") {
      throw new AppwriteException('Missing required parameter: "secret"');
    }
    const apiPath = "/account/sessions/magic-url";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof secret !== "undefined") {
      payload["secret"] = secret;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  createOAuth2Session(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "provider" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        provider: paramsOrFirst,
        success: rest[0],
        failure: rest[1],
        scopes: rest[2]
      };
    }
    const provider = params.provider;
    const success = params.success;
    const failure = params.failure;
    const scopes = params.scopes;
    if (typeof provider === "undefined") {
      throw new AppwriteException('Missing required parameter: "provider"');
    }
    const apiPath = "/account/sessions/oauth2/{provider}".replace("{provider}", provider);
    const payload = {};
    if (typeof success !== "undefined") {
      payload["success"] = success;
    }
    if (typeof failure !== "undefined") {
      payload["failure"] = failure;
    }
    if (typeof scopes !== "undefined") {
      payload["scopes"] = scopes;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    {
      return uri.toString();
    }
  }
  updatePhoneSession(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        secret: rest[0]
      };
    }
    const userId = params.userId;
    const secret = params.secret;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof secret === "undefined") {
      throw new AppwriteException('Missing required parameter: "secret"');
    }
    const apiPath = "/account/sessions/phone";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof secret !== "undefined") {
      payload["secret"] = secret;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  createSession(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        secret: rest[0]
      };
    }
    const userId = params.userId;
    const secret = params.secret;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof secret === "undefined") {
      throw new AppwriteException('Missing required parameter: "secret"');
    }
    const apiPath = "/account/sessions/token";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof secret !== "undefined") {
      payload["secret"] = secret;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  getSession(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        sessionId: paramsOrFirst
      };
    }
    const sessionId = params.sessionId;
    if (typeof sessionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "sessionId"');
    }
    const apiPath = "/account/sessions/{sessionId}".replace("{sessionId}", sessionId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  updateSession(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        sessionId: paramsOrFirst
      };
    }
    const sessionId = params.sessionId;
    if (typeof sessionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "sessionId"');
    }
    const apiPath = "/account/sessions/{sessionId}".replace("{sessionId}", sessionId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  deleteSession(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        sessionId: paramsOrFirst
      };
    }
    const sessionId = params.sessionId;
    if (typeof sessionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "sessionId"');
    }
    const apiPath = "/account/sessions/{sessionId}".replace("{sessionId}", sessionId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  /**
   * Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.User<Preferences>>}
   */
  updateStatus() {
    const apiPath = "/account/status";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  createPushTarget(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        targetId: paramsOrFirst,
        identifier: rest[0],
        providerId: rest[1]
      };
    }
    const targetId = params.targetId;
    const identifier = params.identifier;
    const providerId = params.providerId;
    if (typeof targetId === "undefined") {
      throw new AppwriteException('Missing required parameter: "targetId"');
    }
    if (typeof identifier === "undefined") {
      throw new AppwriteException('Missing required parameter: "identifier"');
    }
    const apiPath = "/account/targets/push";
    const payload = {};
    if (typeof targetId !== "undefined") {
      payload["targetId"] = targetId;
    }
    if (typeof identifier !== "undefined") {
      payload["identifier"] = identifier;
    }
    if (typeof providerId !== "undefined") {
      payload["providerId"] = providerId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  updatePushTarget(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        targetId: paramsOrFirst,
        identifier: rest[0]
      };
    }
    const targetId = params.targetId;
    const identifier = params.identifier;
    if (typeof targetId === "undefined") {
      throw new AppwriteException('Missing required parameter: "targetId"');
    }
    if (typeof identifier === "undefined") {
      throw new AppwriteException('Missing required parameter: "identifier"');
    }
    const apiPath = "/account/targets/{targetId}/push".replace("{targetId}", targetId);
    const payload = {};
    if (typeof identifier !== "undefined") {
      payload["identifier"] = identifier;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  deletePushTarget(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        targetId: paramsOrFirst
      };
    }
    const targetId = params.targetId;
    if (typeof targetId === "undefined") {
      throw new AppwriteException('Missing required parameter: "targetId"');
    }
    const apiPath = "/account/targets/{targetId}/push".replace("{targetId}", targetId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  createEmailToken(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        email: rest[0],
        phrase: rest[1]
      };
    }
    const userId = params.userId;
    const email = params.email;
    const phrase = params.phrase;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof email === "undefined") {
      throw new AppwriteException('Missing required parameter: "email"');
    }
    const apiPath = "/account/tokens/email";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof email !== "undefined") {
      payload["email"] = email;
    }
    if (typeof phrase !== "undefined") {
      payload["phrase"] = phrase;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  createMagicURLToken(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        email: rest[0],
        url: rest[1],
        phrase: rest[2]
      };
    }
    const userId = params.userId;
    const email = params.email;
    const url = params.url;
    const phrase = params.phrase;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof email === "undefined") {
      throw new AppwriteException('Missing required parameter: "email"');
    }
    const apiPath = "/account/tokens/magic-url";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof email !== "undefined") {
      payload["email"] = email;
    }
    if (typeof url !== "undefined") {
      payload["url"] = url;
    }
    if (typeof phrase !== "undefined") {
      payload["phrase"] = phrase;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  createOAuth2Token(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "provider" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        provider: paramsOrFirst,
        success: rest[0],
        failure: rest[1],
        scopes: rest[2]
      };
    }
    const provider = params.provider;
    const success = params.success;
    const failure = params.failure;
    const scopes = params.scopes;
    if (typeof provider === "undefined") {
      throw new AppwriteException('Missing required parameter: "provider"');
    }
    const apiPath = "/account/tokens/oauth2/{provider}".replace("{provider}", provider);
    const payload = {};
    if (typeof success !== "undefined") {
      payload["success"] = success;
    }
    if (typeof failure !== "undefined") {
      payload["failure"] = failure;
    }
    if (typeof scopes !== "undefined") {
      payload["scopes"] = scopes;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    {
      return uri.toString();
    }
  }
  createPhoneToken(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        phone: rest[0]
      };
    }
    const userId = params.userId;
    const phone = params.phone;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof phone === "undefined") {
      throw new AppwriteException('Missing required parameter: "phone"');
    }
    const apiPath = "/account/tokens/phone";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof phone !== "undefined") {
      payload["phone"] = phone;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  createEmailVerification(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        url: paramsOrFirst
      };
    }
    const url = params.url;
    if (typeof url === "undefined") {
      throw new AppwriteException('Missing required parameter: "url"');
    }
    const apiPath = "/account/verifications/email";
    const payload = {};
    if (typeof url !== "undefined") {
      payload["url"] = url;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  createVerification(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        url: paramsOrFirst
      };
    }
    const url = params.url;
    if (typeof url === "undefined") {
      throw new AppwriteException('Missing required parameter: "url"');
    }
    const apiPath = "/account/verifications/email";
    const payload = {};
    if (typeof url !== "undefined") {
      payload["url"] = url;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  updateEmailVerification(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        secret: rest[0]
      };
    }
    const userId = params.userId;
    const secret = params.secret;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof secret === "undefined") {
      throw new AppwriteException('Missing required parameter: "secret"');
    }
    const apiPath = "/account/verifications/email";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof secret !== "undefined") {
      payload["secret"] = secret;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  updateVerification(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        secret: rest[0]
      };
    }
    const userId = params.userId;
    const secret = params.secret;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof secret === "undefined") {
      throw new AppwriteException('Missing required parameter: "secret"');
    }
    const apiPath = "/account/verifications/email";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof secret !== "undefined") {
      payload["secret"] = secret;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  /**
   * Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone) endpoint. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification). The verification code sent to the user's phone number is valid for 15 minutes.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.Token>}
   */
  createPhoneVerification() {
    const apiPath = "/account/verifications/phone";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  updatePhoneVerification(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        userId: paramsOrFirst,
        secret: rest[0]
      };
    }
    const userId = params.userId;
    const secret = params.secret;
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof secret === "undefined") {
      throw new AppwriteException('Missing required parameter: "secret"');
    }
    const apiPath = "/account/verifications/phone";
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof secret !== "undefined") {
      payload["secret"] = secret;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
}
class Avatars {
  constructor(client2) {
    this.client = client2;
  }
  getBrowser(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "code" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        code: paramsOrFirst,
        width: rest[0],
        height: rest[1],
        quality: rest[2]
      };
    }
    const code = params.code;
    const width = params.width;
    const height = params.height;
    const quality = params.quality;
    if (typeof code === "undefined") {
      throw new AppwriteException('Missing required parameter: "code"');
    }
    const apiPath = "/avatars/browsers/{code}".replace("{code}", code);
    const payload = {};
    if (typeof width !== "undefined") {
      payload["width"] = width;
    }
    if (typeof height !== "undefined") {
      payload["height"] = height;
    }
    if (typeof quality !== "undefined") {
      payload["quality"] = quality;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
  getCreditCard(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "code" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        code: paramsOrFirst,
        width: rest[0],
        height: rest[1],
        quality: rest[2]
      };
    }
    const code = params.code;
    const width = params.width;
    const height = params.height;
    const quality = params.quality;
    if (typeof code === "undefined") {
      throw new AppwriteException('Missing required parameter: "code"');
    }
    const apiPath = "/avatars/credit-cards/{code}".replace("{code}", code);
    const payload = {};
    if (typeof width !== "undefined") {
      payload["width"] = width;
    }
    if (typeof height !== "undefined") {
      payload["height"] = height;
    }
    if (typeof quality !== "undefined") {
      payload["quality"] = quality;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
  getFavicon(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        url: paramsOrFirst
      };
    }
    const url = params.url;
    if (typeof url === "undefined") {
      throw new AppwriteException('Missing required parameter: "url"');
    }
    const apiPath = "/avatars/favicon";
    const payload = {};
    if (typeof url !== "undefined") {
      payload["url"] = url;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
  getFlag(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "code" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        code: paramsOrFirst,
        width: rest[0],
        height: rest[1],
        quality: rest[2]
      };
    }
    const code = params.code;
    const width = params.width;
    const height = params.height;
    const quality = params.quality;
    if (typeof code === "undefined") {
      throw new AppwriteException('Missing required parameter: "code"');
    }
    const apiPath = "/avatars/flags/{code}".replace("{code}", code);
    const payload = {};
    if (typeof width !== "undefined") {
      payload["width"] = width;
    }
    if (typeof height !== "undefined") {
      payload["height"] = height;
    }
    if (typeof quality !== "undefined") {
      payload["quality"] = quality;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
  getImage(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        url: paramsOrFirst,
        width: rest[0],
        height: rest[1]
      };
    }
    const url = params.url;
    const width = params.width;
    const height = params.height;
    if (typeof url === "undefined") {
      throw new AppwriteException('Missing required parameter: "url"');
    }
    const apiPath = "/avatars/image";
    const payload = {};
    if (typeof url !== "undefined") {
      payload["url"] = url;
    }
    if (typeof width !== "undefined") {
      payload["width"] = width;
    }
    if (typeof height !== "undefined") {
      payload["height"] = height;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
  getInitials(paramsOrFirst, ...rest) {
    let params;
    if (!paramsOrFirst || paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        name: paramsOrFirst,
        width: rest[0],
        height: rest[1],
        background: rest[2]
      };
    }
    const name = params.name;
    const width = params.width;
    const height = params.height;
    const background = params.background;
    const apiPath = "/avatars/initials";
    const payload = {};
    if (typeof name !== "undefined") {
      payload["name"] = name;
    }
    if (typeof width !== "undefined") {
      payload["width"] = width;
    }
    if (typeof height !== "undefined") {
      payload["height"] = height;
    }
    if (typeof background !== "undefined") {
      payload["background"] = background;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
  getQR(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        text: paramsOrFirst,
        size: rest[0],
        margin: rest[1],
        download: rest[2]
      };
    }
    const text = params.text;
    const size = params.size;
    const margin = params.margin;
    const download = params.download;
    if (typeof text === "undefined") {
      throw new AppwriteException('Missing required parameter: "text"');
    }
    const apiPath = "/avatars/qr";
    const payload = {};
    if (typeof text !== "undefined") {
      payload["text"] = text;
    }
    if (typeof size !== "undefined") {
      payload["size"] = size;
    }
    if (typeof margin !== "undefined") {
      payload["margin"] = margin;
    }
    if (typeof download !== "undefined") {
      payload["download"] = download;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
  getScreenshot(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        url: paramsOrFirst,
        headers: rest[0],
        viewportWidth: rest[1],
        viewportHeight: rest[2],
        scale: rest[3],
        theme: rest[4],
        userAgent: rest[5],
        fullpage: rest[6],
        locale: rest[7],
        timezone: rest[8],
        latitude: rest[9],
        longitude: rest[10],
        accuracy: rest[11],
        touch: rest[12],
        permissions: rest[13],
        sleep: rest[14],
        width: rest[15],
        height: rest[16],
        quality: rest[17],
        output: rest[18]
      };
    }
    const url = params.url;
    const headers = params.headers;
    const viewportWidth = params.viewportWidth;
    const viewportHeight = params.viewportHeight;
    const scale = params.scale;
    const theme = params.theme;
    const userAgent = params.userAgent;
    const fullpage = params.fullpage;
    const locale = params.locale;
    const timezone = params.timezone;
    const latitude = params.latitude;
    const longitude = params.longitude;
    const accuracy = params.accuracy;
    const touch = params.touch;
    const permissions = params.permissions;
    const sleep = params.sleep;
    const width = params.width;
    const height = params.height;
    const quality = params.quality;
    const output = params.output;
    if (typeof url === "undefined") {
      throw new AppwriteException('Missing required parameter: "url"');
    }
    const apiPath = "/avatars/screenshots";
    const payload = {};
    if (typeof url !== "undefined") {
      payload["url"] = url;
    }
    if (typeof headers !== "undefined") {
      payload["headers"] = headers;
    }
    if (typeof viewportWidth !== "undefined") {
      payload["viewportWidth"] = viewportWidth;
    }
    if (typeof viewportHeight !== "undefined") {
      payload["viewportHeight"] = viewportHeight;
    }
    if (typeof scale !== "undefined") {
      payload["scale"] = scale;
    }
    if (typeof theme !== "undefined") {
      payload["theme"] = theme;
    }
    if (typeof userAgent !== "undefined") {
      payload["userAgent"] = userAgent;
    }
    if (typeof fullpage !== "undefined") {
      payload["fullpage"] = fullpage;
    }
    if (typeof locale !== "undefined") {
      payload["locale"] = locale;
    }
    if (typeof timezone !== "undefined") {
      payload["timezone"] = timezone;
    }
    if (typeof latitude !== "undefined") {
      payload["latitude"] = latitude;
    }
    if (typeof longitude !== "undefined") {
      payload["longitude"] = longitude;
    }
    if (typeof accuracy !== "undefined") {
      payload["accuracy"] = accuracy;
    }
    if (typeof touch !== "undefined") {
      payload["touch"] = touch;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    if (typeof sleep !== "undefined") {
      payload["sleep"] = sleep;
    }
    if (typeof width !== "undefined") {
      payload["width"] = width;
    }
    if (typeof height !== "undefined") {
      payload["height"] = height;
    }
    if (typeof quality !== "undefined") {
      payload["quality"] = quality;
    }
    if (typeof output !== "undefined") {
      payload["output"] = output;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
}
class Databases {
  constructor(client2) {
    this.client = client2;
  }
  listTransactions(paramsOrFirst) {
    let params;
    if (!paramsOrFirst || paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        queries: paramsOrFirst
      };
    }
    const queries = params.queries;
    const apiPath = "/databases/transactions";
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  createTransaction(paramsOrFirst) {
    let params;
    if (!paramsOrFirst || paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        ttl: paramsOrFirst
      };
    }
    const ttl = params.ttl;
    const apiPath = "/databases/transactions";
    const payload = {};
    if (typeof ttl !== "undefined") {
      payload["ttl"] = ttl;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  getTransaction(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        transactionId: paramsOrFirst
      };
    }
    const transactionId = params.transactionId;
    if (typeof transactionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "transactionId"');
    }
    const apiPath = "/databases/transactions/{transactionId}".replace("{transactionId}", transactionId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  updateTransaction(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        transactionId: paramsOrFirst,
        commit: rest[0],
        rollback: rest[1]
      };
    }
    const transactionId = params.transactionId;
    const commit = params.commit;
    const rollback = params.rollback;
    if (typeof transactionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "transactionId"');
    }
    const apiPath = "/databases/transactions/{transactionId}".replace("{transactionId}", transactionId);
    const payload = {};
    if (typeof commit !== "undefined") {
      payload["commit"] = commit;
    }
    if (typeof rollback !== "undefined") {
      payload["rollback"] = rollback;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  deleteTransaction(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        transactionId: paramsOrFirst
      };
    }
    const transactionId = params.transactionId;
    if (typeof transactionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "transactionId"');
    }
    const apiPath = "/databases/transactions/{transactionId}".replace("{transactionId}", transactionId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  createOperations(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        transactionId: paramsOrFirst,
        operations: rest[0]
      };
    }
    const transactionId = params.transactionId;
    const operations = params.operations;
    if (typeof transactionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "transactionId"');
    }
    const apiPath = "/databases/transactions/{transactionId}/operations".replace("{transactionId}", transactionId);
    const payload = {};
    if (typeof operations !== "undefined") {
      payload["operations"] = operations;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  listDocuments(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        collectionId: rest[0],
        queries: rest[1],
        transactionId: rest[2],
        total: rest[3]
      };
    }
    const databaseId = params.databaseId;
    const collectionId = params.collectionId;
    const queries = params.queries;
    const transactionId = params.transactionId;
    const total = params.total;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId);
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    if (typeof total !== "undefined") {
      payload["total"] = total;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  createDocument(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        collectionId: rest[0],
        documentId: rest[1],
        data: rest[2],
        permissions: rest[3],
        transactionId: rest[4]
      };
    }
    const databaseId = params.databaseId;
    const collectionId = params.collectionId;
    const documentId = params.documentId;
    const data = params.data;
    const permissions = params.permissions;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    if (typeof data === "undefined") {
      throw new AppwriteException('Missing required parameter: "data"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId);
    const payload = {};
    if (typeof documentId !== "undefined") {
      payload["documentId"] = documentId;
    }
    if (typeof data !== "undefined") {
      payload["data"] = data;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  getDocument(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        collectionId: rest[0],
        documentId: rest[1],
        queries: rest[2],
        transactionId: rest[3]
      };
    }
    const databaseId = params.databaseId;
    const collectionId = params.collectionId;
    const documentId = params.documentId;
    const queries = params.queries;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  upsertDocument(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        collectionId: rest[0],
        documentId: rest[1],
        data: rest[2],
        permissions: rest[3],
        transactionId: rest[4]
      };
    }
    const databaseId = params.databaseId;
    const collectionId = params.collectionId;
    const documentId = params.documentId;
    const data = params.data;
    const permissions = params.permissions;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    if (typeof data === "undefined") {
      throw new AppwriteException('Missing required parameter: "data"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
    const payload = {};
    if (typeof data !== "undefined") {
      payload["data"] = data;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  updateDocument(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        collectionId: rest[0],
        documentId: rest[1],
        data: rest[2],
        permissions: rest[3],
        transactionId: rest[4]
      };
    }
    const databaseId = params.databaseId;
    const collectionId = params.collectionId;
    const documentId = params.documentId;
    const data = params.data;
    const permissions = params.permissions;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
    const payload = {};
    if (typeof data !== "undefined") {
      payload["data"] = data;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  deleteDocument(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        collectionId: rest[0],
        documentId: rest[1],
        transactionId: rest[2]
      };
    }
    const databaseId = params.databaseId;
    const collectionId = params.collectionId;
    const documentId = params.documentId;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId);
    const payload = {};
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  decrementDocumentAttribute(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        collectionId: rest[0],
        documentId: rest[1],
        attribute: rest[2],
        value: rest[3],
        min: rest[4],
        transactionId: rest[5]
      };
    }
    const databaseId = params.databaseId;
    const collectionId = params.collectionId;
    const documentId = params.documentId;
    const attribute = params.attribute;
    const value = params.value;
    const min = params.min;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    if (typeof attribute === "undefined") {
      throw new AppwriteException('Missing required parameter: "attribute"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/decrement".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId).replace("{attribute}", attribute);
    const payload = {};
    if (typeof value !== "undefined") {
      payload["value"] = value;
    }
    if (typeof min !== "undefined") {
      payload["min"] = min;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  incrementDocumentAttribute(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        collectionId: rest[0],
        documentId: rest[1],
        attribute: rest[2],
        value: rest[3],
        max: rest[4],
        transactionId: rest[5]
      };
    }
    const databaseId = params.databaseId;
    const collectionId = params.collectionId;
    const documentId = params.documentId;
    const attribute = params.attribute;
    const value = params.value;
    const max = params.max;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof collectionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }
    if (typeof documentId === "undefined") {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }
    if (typeof attribute === "undefined") {
      throw new AppwriteException('Missing required parameter: "attribute"');
    }
    const apiPath = "/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/{attribute}/increment".replace("{databaseId}", databaseId).replace("{collectionId}", collectionId).replace("{documentId}", documentId).replace("{attribute}", attribute);
    const payload = {};
    if (typeof value !== "undefined") {
      payload["value"] = value;
    }
    if (typeof max !== "undefined") {
      payload["max"] = max;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
}
class Functions {
  constructor(client2) {
    this.client = client2;
  }
  listExecutions(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        functionId: paramsOrFirst,
        queries: rest[0],
        total: rest[1]
      };
    }
    const functionId = params.functionId;
    const queries = params.queries;
    const total = params.total;
    if (typeof functionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "functionId"');
    }
    const apiPath = "/functions/{functionId}/executions".replace("{functionId}", functionId);
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    if (typeof total !== "undefined") {
      payload["total"] = total;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  createExecution(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        functionId: paramsOrFirst,
        body: rest[0],
        async: rest[1],
        xpath: rest[2],
        method: rest[3],
        headers: rest[4],
        scheduledAt: rest[5]
      };
    }
    const functionId = params.functionId;
    const body = params.body;
    const async = params.async;
    const xpath = params.xpath;
    const method = params.method;
    const headers = params.headers;
    const scheduledAt = params.scheduledAt;
    if (typeof functionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "functionId"');
    }
    const apiPath = "/functions/{functionId}/executions".replace("{functionId}", functionId);
    const payload = {};
    if (typeof body !== "undefined") {
      payload["body"] = body;
    }
    if (typeof async !== "undefined") {
      payload["async"] = async;
    }
    if (typeof xpath !== "undefined") {
      payload["path"] = xpath;
    }
    if (typeof method !== "undefined") {
      payload["method"] = method;
    }
    if (typeof headers !== "undefined") {
      payload["headers"] = headers;
    }
    if (typeof scheduledAt !== "undefined") {
      payload["scheduledAt"] = scheduledAt;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  getExecution(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        functionId: paramsOrFirst,
        executionId: rest[0]
      };
    }
    const functionId = params.functionId;
    const executionId = params.executionId;
    if (typeof functionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "functionId"');
    }
    if (typeof executionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "executionId"');
    }
    const apiPath = "/functions/{functionId}/executions/{executionId}".replace("{functionId}", functionId).replace("{executionId}", executionId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
}
class Graphql {
  constructor(client2) {
    this.client = client2;
  }
  query(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "query" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        query: paramsOrFirst
      };
    }
    const query = params.query;
    if (typeof query === "undefined") {
      throw new AppwriteException('Missing required parameter: "query"');
    }
    const apiPath = "/graphql";
    const payload = {};
    if (typeof query !== "undefined") {
      payload["query"] = query;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "x-sdk-graphql": "true",
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  mutation(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst) && "query" in paramsOrFirst) {
      params = paramsOrFirst || {};
    } else {
      params = {
        query: paramsOrFirst
      };
    }
    const query = params.query;
    if (typeof query === "undefined") {
      throw new AppwriteException('Missing required parameter: "query"');
    }
    const apiPath = "/graphql/mutation";
    const payload = {};
    if (typeof query !== "undefined") {
      payload["query"] = query;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "x-sdk-graphql": "true",
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
}
class Locale {
  constructor(client2) {
    this.client = client2;
  }
  /**
   * Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.
   *
   * ([IP Geolocation by DB-IP](https://db-ip.com))
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.Locale>}
   */
  get() {
    const apiPath = "/locale";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * List of all locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.LocaleCodeList>}
   */
  listCodes() {
    const apiPath = "/locale/codes";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * List of all continents. You can use the locale header to get the data in a supported language.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.ContinentList>}
   */
  listContinents() {
    const apiPath = "/locale/continents";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * List of all countries. You can use the locale header to get the data in a supported language.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.CountryList>}
   */
  listCountries() {
    const apiPath = "/locale/countries";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.CountryList>}
   */
  listCountriesEU() {
    const apiPath = "/locale/countries/eu";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * List of all countries phone codes. You can use the locale header to get the data in a supported language.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.PhoneList>}
   */
  listCountriesPhones() {
    const apiPath = "/locale/countries/phones";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.CurrencyList>}
   */
  listCurrencies() {
    const apiPath = "/locale/currencies";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  /**
   * List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.
   *
   * @throws {AppwriteException}
   * @returns {Promise<Models.LanguageList>}
   */
  listLanguages() {
    const apiPath = "/locale/languages";
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
}
class Messaging {
  constructor(client2) {
    this.client = client2;
  }
  createSubscriber(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        topicId: paramsOrFirst,
        subscriberId: rest[0],
        targetId: rest[1]
      };
    }
    const topicId = params.topicId;
    const subscriberId = params.subscriberId;
    const targetId = params.targetId;
    if (typeof topicId === "undefined") {
      throw new AppwriteException('Missing required parameter: "topicId"');
    }
    if (typeof subscriberId === "undefined") {
      throw new AppwriteException('Missing required parameter: "subscriberId"');
    }
    if (typeof targetId === "undefined") {
      throw new AppwriteException('Missing required parameter: "targetId"');
    }
    const apiPath = "/messaging/topics/{topicId}/subscribers".replace("{topicId}", topicId);
    const payload = {};
    if (typeof subscriberId !== "undefined") {
      payload["subscriberId"] = subscriberId;
    }
    if (typeof targetId !== "undefined") {
      payload["targetId"] = targetId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  deleteSubscriber(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        topicId: paramsOrFirst,
        subscriberId: rest[0]
      };
    }
    const topicId = params.topicId;
    const subscriberId = params.subscriberId;
    if (typeof topicId === "undefined") {
      throw new AppwriteException('Missing required parameter: "topicId"');
    }
    if (typeof subscriberId === "undefined") {
      throw new AppwriteException('Missing required parameter: "subscriberId"');
    }
    const apiPath = "/messaging/topics/{topicId}/subscribers/{subscriberId}".replace("{topicId}", topicId).replace("{subscriberId}", subscriberId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
}
class Storage {
  constructor(client2) {
    this.client = client2;
  }
  listFiles(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        bucketId: paramsOrFirst,
        queries: rest[0],
        search: rest[1],
        total: rest[2]
      };
    }
    const bucketId = params.bucketId;
    const queries = params.queries;
    const search = params.search;
    const total = params.total;
    if (typeof bucketId === "undefined") {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }
    const apiPath = "/storage/buckets/{bucketId}/files".replace("{bucketId}", bucketId);
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    if (typeof search !== "undefined") {
      payload["search"] = search;
    }
    if (typeof total !== "undefined") {
      payload["total"] = total;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  createFile(paramsOrFirst, ...rest) {
    let params;
    let onProgress;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
      onProgress = paramsOrFirst === null || paramsOrFirst === void 0 ? void 0 : paramsOrFirst.onProgress;
    } else {
      params = {
        bucketId: paramsOrFirst,
        fileId: rest[0],
        file: rest[1],
        permissions: rest[2]
      };
      onProgress = rest[3];
    }
    const bucketId = params.bucketId;
    const fileId = params.fileId;
    const file = params.file;
    const permissions = params.permissions;
    if (typeof bucketId === "undefined") {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }
    if (typeof fileId === "undefined") {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }
    if (typeof file === "undefined") {
      throw new AppwriteException('Missing required parameter: "file"');
    }
    const apiPath = "/storage/buckets/{bucketId}/files".replace("{bucketId}", bucketId);
    const payload = {};
    if (typeof fileId !== "undefined") {
      payload["fileId"] = fileId;
    }
    if (typeof file !== "undefined") {
      payload["file"] = file;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "multipart/form-data"
    };
    return this.client.chunkedUpload("post", uri, apiHeaders, payload, onProgress);
  }
  getFile(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        bucketId: paramsOrFirst,
        fileId: rest[0]
      };
    }
    const bucketId = params.bucketId;
    const fileId = params.fileId;
    if (typeof bucketId === "undefined") {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }
    if (typeof fileId === "undefined") {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }
    const apiPath = "/storage/buckets/{bucketId}/files/{fileId}".replace("{bucketId}", bucketId).replace("{fileId}", fileId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  updateFile(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        bucketId: paramsOrFirst,
        fileId: rest[0],
        name: rest[1],
        permissions: rest[2]
      };
    }
    const bucketId = params.bucketId;
    const fileId = params.fileId;
    const name = params.name;
    const permissions = params.permissions;
    if (typeof bucketId === "undefined") {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }
    if (typeof fileId === "undefined") {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }
    const apiPath = "/storage/buckets/{bucketId}/files/{fileId}".replace("{bucketId}", bucketId).replace("{fileId}", fileId);
    const payload = {};
    if (typeof name !== "undefined") {
      payload["name"] = name;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  deleteFile(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        bucketId: paramsOrFirst,
        fileId: rest[0]
      };
    }
    const bucketId = params.bucketId;
    const fileId = params.fileId;
    if (typeof bucketId === "undefined") {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }
    if (typeof fileId === "undefined") {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }
    const apiPath = "/storage/buckets/{bucketId}/files/{fileId}".replace("{bucketId}", bucketId).replace("{fileId}", fileId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  getFileDownload(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        bucketId: paramsOrFirst,
        fileId: rest[0],
        token: rest[1]
      };
    }
    const bucketId = params.bucketId;
    const fileId = params.fileId;
    const token = params.token;
    if (typeof bucketId === "undefined") {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }
    if (typeof fileId === "undefined") {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }
    const apiPath = "/storage/buckets/{bucketId}/files/{fileId}/download".replace("{bucketId}", bucketId).replace("{fileId}", fileId);
    const payload = {};
    if (typeof token !== "undefined") {
      payload["token"] = token;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
  getFilePreview(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        bucketId: paramsOrFirst,
        fileId: rest[0],
        width: rest[1],
        height: rest[2],
        gravity: rest[3],
        quality: rest[4],
        borderWidth: rest[5],
        borderColor: rest[6],
        borderRadius: rest[7],
        opacity: rest[8],
        rotation: rest[9],
        background: rest[10],
        output: rest[11],
        token: rest[12]
      };
    }
    const bucketId = params.bucketId;
    const fileId = params.fileId;
    const width = params.width;
    const height = params.height;
    const gravity = params.gravity;
    const quality = params.quality;
    const borderWidth = params.borderWidth;
    const borderColor = params.borderColor;
    const borderRadius = params.borderRadius;
    const opacity = params.opacity;
    const rotation = params.rotation;
    const background = params.background;
    const output = params.output;
    const token = params.token;
    if (typeof bucketId === "undefined") {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }
    if (typeof fileId === "undefined") {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }
    const apiPath = "/storage/buckets/{bucketId}/files/{fileId}/preview".replace("{bucketId}", bucketId).replace("{fileId}", fileId);
    const payload = {};
    if (typeof width !== "undefined") {
      payload["width"] = width;
    }
    if (typeof height !== "undefined") {
      payload["height"] = height;
    }
    if (typeof gravity !== "undefined") {
      payload["gravity"] = gravity;
    }
    if (typeof quality !== "undefined") {
      payload["quality"] = quality;
    }
    if (typeof borderWidth !== "undefined") {
      payload["borderWidth"] = borderWidth;
    }
    if (typeof borderColor !== "undefined") {
      payload["borderColor"] = borderColor;
    }
    if (typeof borderRadius !== "undefined") {
      payload["borderRadius"] = borderRadius;
    }
    if (typeof opacity !== "undefined") {
      payload["opacity"] = opacity;
    }
    if (typeof rotation !== "undefined") {
      payload["rotation"] = rotation;
    }
    if (typeof background !== "undefined") {
      payload["background"] = background;
    }
    if (typeof output !== "undefined") {
      payload["output"] = output;
    }
    if (typeof token !== "undefined") {
      payload["token"] = token;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
  getFileView(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        bucketId: paramsOrFirst,
        fileId: rest[0],
        token: rest[1]
      };
    }
    const bucketId = params.bucketId;
    const fileId = params.fileId;
    const token = params.token;
    if (typeof bucketId === "undefined") {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }
    if (typeof fileId === "undefined") {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }
    const apiPath = "/storage/buckets/{bucketId}/files/{fileId}/view".replace("{bucketId}", bucketId).replace("{fileId}", fileId);
    const payload = {};
    if (typeof token !== "undefined") {
      payload["token"] = token;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    payload["project"] = this.client.config.project;
    for (const [key, value] of Object.entries(Service.flatten(payload))) {
      uri.searchParams.append(key, value);
    }
    return uri.toString();
  }
}
class TablesDB {
  constructor(client2) {
    this.client = client2;
  }
  listTransactions(paramsOrFirst) {
    let params;
    if (!paramsOrFirst || paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        queries: paramsOrFirst
      };
    }
    const queries = params.queries;
    const apiPath = "/tablesdb/transactions";
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  createTransaction(paramsOrFirst) {
    let params;
    if (!paramsOrFirst || paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        ttl: paramsOrFirst
      };
    }
    const ttl = params.ttl;
    const apiPath = "/tablesdb/transactions";
    const payload = {};
    if (typeof ttl !== "undefined") {
      payload["ttl"] = ttl;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  getTransaction(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        transactionId: paramsOrFirst
      };
    }
    const transactionId = params.transactionId;
    if (typeof transactionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "transactionId"');
    }
    const apiPath = "/tablesdb/transactions/{transactionId}".replace("{transactionId}", transactionId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  updateTransaction(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        transactionId: paramsOrFirst,
        commit: rest[0],
        rollback: rest[1]
      };
    }
    const transactionId = params.transactionId;
    const commit = params.commit;
    const rollback = params.rollback;
    if (typeof transactionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "transactionId"');
    }
    const apiPath = "/tablesdb/transactions/{transactionId}".replace("{transactionId}", transactionId);
    const payload = {};
    if (typeof commit !== "undefined") {
      payload["commit"] = commit;
    }
    if (typeof rollback !== "undefined") {
      payload["rollback"] = rollback;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  deleteTransaction(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        transactionId: paramsOrFirst
      };
    }
    const transactionId = params.transactionId;
    if (typeof transactionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "transactionId"');
    }
    const apiPath = "/tablesdb/transactions/{transactionId}".replace("{transactionId}", transactionId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  createOperations(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        transactionId: paramsOrFirst,
        operations: rest[0]
      };
    }
    const transactionId = params.transactionId;
    const operations = params.operations;
    if (typeof transactionId === "undefined") {
      throw new AppwriteException('Missing required parameter: "transactionId"');
    }
    const apiPath = "/tablesdb/transactions/{transactionId}/operations".replace("{transactionId}", transactionId);
    const payload = {};
    if (typeof operations !== "undefined") {
      payload["operations"] = operations;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  listRows(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        tableId: rest[0],
        queries: rest[1],
        transactionId: rest[2],
        total: rest[3]
      };
    }
    const databaseId = params.databaseId;
    const tableId = params.tableId;
    const queries = params.queries;
    const transactionId = params.transactionId;
    const total = params.total;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof tableId === "undefined") {
      throw new AppwriteException('Missing required parameter: "tableId"');
    }
    const apiPath = "/tablesdb/{databaseId}/tables/{tableId}/rows".replace("{databaseId}", databaseId).replace("{tableId}", tableId);
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    if (typeof total !== "undefined") {
      payload["total"] = total;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  createRow(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        tableId: rest[0],
        rowId: rest[1],
        data: rest[2],
        permissions: rest[3],
        transactionId: rest[4]
      };
    }
    const databaseId = params.databaseId;
    const tableId = params.tableId;
    const rowId = params.rowId;
    const data = params.data;
    const permissions = params.permissions;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof tableId === "undefined") {
      throw new AppwriteException('Missing required parameter: "tableId"');
    }
    if (typeof rowId === "undefined") {
      throw new AppwriteException('Missing required parameter: "rowId"');
    }
    if (typeof data === "undefined") {
      throw new AppwriteException('Missing required parameter: "data"');
    }
    const apiPath = "/tablesdb/{databaseId}/tables/{tableId}/rows".replace("{databaseId}", databaseId).replace("{tableId}", tableId);
    const payload = {};
    if (typeof rowId !== "undefined") {
      payload["rowId"] = rowId;
    }
    if (typeof data !== "undefined") {
      payload["data"] = data;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  getRow(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        tableId: rest[0],
        rowId: rest[1],
        queries: rest[2],
        transactionId: rest[3]
      };
    }
    const databaseId = params.databaseId;
    const tableId = params.tableId;
    const rowId = params.rowId;
    const queries = params.queries;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof tableId === "undefined") {
      throw new AppwriteException('Missing required parameter: "tableId"');
    }
    if (typeof rowId === "undefined") {
      throw new AppwriteException('Missing required parameter: "rowId"');
    }
    const apiPath = "/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}".replace("{databaseId}", databaseId).replace("{tableId}", tableId).replace("{rowId}", rowId);
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  upsertRow(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        tableId: rest[0],
        rowId: rest[1],
        data: rest[2],
        permissions: rest[3],
        transactionId: rest[4]
      };
    }
    const databaseId = params.databaseId;
    const tableId = params.tableId;
    const rowId = params.rowId;
    const data = params.data;
    const permissions = params.permissions;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof tableId === "undefined") {
      throw new AppwriteException('Missing required parameter: "tableId"');
    }
    if (typeof rowId === "undefined") {
      throw new AppwriteException('Missing required parameter: "rowId"');
    }
    const apiPath = "/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}".replace("{databaseId}", databaseId).replace("{tableId}", tableId).replace("{rowId}", rowId);
    const payload = {};
    if (typeof data !== "undefined") {
      payload["data"] = data;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  updateRow(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        tableId: rest[0],
        rowId: rest[1],
        data: rest[2],
        permissions: rest[3],
        transactionId: rest[4]
      };
    }
    const databaseId = params.databaseId;
    const tableId = params.tableId;
    const rowId = params.rowId;
    const data = params.data;
    const permissions = params.permissions;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof tableId === "undefined") {
      throw new AppwriteException('Missing required parameter: "tableId"');
    }
    if (typeof rowId === "undefined") {
      throw new AppwriteException('Missing required parameter: "rowId"');
    }
    const apiPath = "/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}".replace("{databaseId}", databaseId).replace("{tableId}", tableId).replace("{rowId}", rowId);
    const payload = {};
    if (typeof data !== "undefined") {
      payload["data"] = data;
    }
    if (typeof permissions !== "undefined") {
      payload["permissions"] = permissions;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  deleteRow(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        tableId: rest[0],
        rowId: rest[1],
        transactionId: rest[2]
      };
    }
    const databaseId = params.databaseId;
    const tableId = params.tableId;
    const rowId = params.rowId;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof tableId === "undefined") {
      throw new AppwriteException('Missing required parameter: "tableId"');
    }
    if (typeof rowId === "undefined") {
      throw new AppwriteException('Missing required parameter: "rowId"');
    }
    const apiPath = "/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}".replace("{databaseId}", databaseId).replace("{tableId}", tableId).replace("{rowId}", rowId);
    const payload = {};
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  decrementRowColumn(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        tableId: rest[0],
        rowId: rest[1],
        column: rest[2],
        value: rest[3],
        min: rest[4],
        transactionId: rest[5]
      };
    }
    const databaseId = params.databaseId;
    const tableId = params.tableId;
    const rowId = params.rowId;
    const column = params.column;
    const value = params.value;
    const min = params.min;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof tableId === "undefined") {
      throw new AppwriteException('Missing required parameter: "tableId"');
    }
    if (typeof rowId === "undefined") {
      throw new AppwriteException('Missing required parameter: "rowId"');
    }
    if (typeof column === "undefined") {
      throw new AppwriteException('Missing required parameter: "column"');
    }
    const apiPath = "/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/decrement".replace("{databaseId}", databaseId).replace("{tableId}", tableId).replace("{rowId}", rowId).replace("{column}", column);
    const payload = {};
    if (typeof value !== "undefined") {
      payload["value"] = value;
    }
    if (typeof min !== "undefined") {
      payload["min"] = min;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  incrementRowColumn(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        databaseId: paramsOrFirst,
        tableId: rest[0],
        rowId: rest[1],
        column: rest[2],
        value: rest[3],
        max: rest[4],
        transactionId: rest[5]
      };
    }
    const databaseId = params.databaseId;
    const tableId = params.tableId;
    const rowId = params.rowId;
    const column = params.column;
    const value = params.value;
    const max = params.max;
    const transactionId = params.transactionId;
    if (typeof databaseId === "undefined") {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }
    if (typeof tableId === "undefined") {
      throw new AppwriteException('Missing required parameter: "tableId"');
    }
    if (typeof rowId === "undefined") {
      throw new AppwriteException('Missing required parameter: "rowId"');
    }
    if (typeof column === "undefined") {
      throw new AppwriteException('Missing required parameter: "column"');
    }
    const apiPath = "/tablesdb/{databaseId}/tables/{tableId}/rows/{rowId}/{column}/increment".replace("{databaseId}", databaseId).replace("{tableId}", tableId).replace("{rowId}", rowId).replace("{column}", column);
    const payload = {};
    if (typeof value !== "undefined") {
      payload["value"] = value;
    }
    if (typeof max !== "undefined") {
      payload["max"] = max;
    }
    if (typeof transactionId !== "undefined") {
      payload["transactionId"] = transactionId;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
}
class Teams {
  constructor(client2) {
    this.client = client2;
  }
  list(paramsOrFirst, ...rest) {
    let params;
    if (!paramsOrFirst || paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        queries: paramsOrFirst,
        search: rest[0],
        total: rest[1]
      };
    }
    const queries = params.queries;
    const search = params.search;
    const total = params.total;
    const apiPath = "/teams";
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    if (typeof search !== "undefined") {
      payload["search"] = search;
    }
    if (typeof total !== "undefined") {
      payload["total"] = total;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  create(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst,
        name: rest[0],
        roles: rest[1]
      };
    }
    const teamId = params.teamId;
    const name = params.name;
    const roles = params.roles;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    if (typeof name === "undefined") {
      throw new AppwriteException('Missing required parameter: "name"');
    }
    const apiPath = "/teams";
    const payload = {};
    if (typeof teamId !== "undefined") {
      payload["teamId"] = teamId;
    }
    if (typeof name !== "undefined") {
      payload["name"] = name;
    }
    if (typeof roles !== "undefined") {
      payload["roles"] = roles;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  get(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst
      };
    }
    const teamId = params.teamId;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    const apiPath = "/teams/{teamId}".replace("{teamId}", teamId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  updateName(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst,
        name: rest[0]
      };
    }
    const teamId = params.teamId;
    const name = params.name;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    if (typeof name === "undefined") {
      throw new AppwriteException('Missing required parameter: "name"');
    }
    const apiPath = "/teams/{teamId}".replace("{teamId}", teamId);
    const payload = {};
    if (typeof name !== "undefined") {
      payload["name"] = name;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
  delete(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst
      };
    }
    const teamId = params.teamId;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    const apiPath = "/teams/{teamId}".replace("{teamId}", teamId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  listMemberships(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst,
        queries: rest[0],
        search: rest[1],
        total: rest[2]
      };
    }
    const teamId = params.teamId;
    const queries = params.queries;
    const search = params.search;
    const total = params.total;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    const apiPath = "/teams/{teamId}/memberships".replace("{teamId}", teamId);
    const payload = {};
    if (typeof queries !== "undefined") {
      payload["queries"] = queries;
    }
    if (typeof search !== "undefined") {
      payload["search"] = search;
    }
    if (typeof total !== "undefined") {
      payload["total"] = total;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  createMembership(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst,
        roles: rest[0],
        email: rest[1],
        userId: rest[2],
        phone: rest[3],
        url: rest[4],
        name: rest[5]
      };
    }
    const teamId = params.teamId;
    const roles = params.roles;
    const email = params.email;
    const userId = params.userId;
    const phone = params.phone;
    const url = params.url;
    const name = params.name;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    if (typeof roles === "undefined") {
      throw new AppwriteException('Missing required parameter: "roles"');
    }
    const apiPath = "/teams/{teamId}/memberships".replace("{teamId}", teamId);
    const payload = {};
    if (typeof email !== "undefined") {
      payload["email"] = email;
    }
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof phone !== "undefined") {
      payload["phone"] = phone;
    }
    if (typeof roles !== "undefined") {
      payload["roles"] = roles;
    }
    if (typeof url !== "undefined") {
      payload["url"] = url;
    }
    if (typeof name !== "undefined") {
      payload["name"] = name;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("post", uri, apiHeaders, payload);
  }
  getMembership(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst,
        membershipId: rest[0]
      };
    }
    const teamId = params.teamId;
    const membershipId = params.membershipId;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    if (typeof membershipId === "undefined") {
      throw new AppwriteException('Missing required parameter: "membershipId"');
    }
    const apiPath = "/teams/{teamId}/memberships/{membershipId}".replace("{teamId}", teamId).replace("{membershipId}", membershipId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  updateMembership(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst,
        membershipId: rest[0],
        roles: rest[1]
      };
    }
    const teamId = params.teamId;
    const membershipId = params.membershipId;
    const roles = params.roles;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    if (typeof membershipId === "undefined") {
      throw new AppwriteException('Missing required parameter: "membershipId"');
    }
    if (typeof roles === "undefined") {
      throw new AppwriteException('Missing required parameter: "roles"');
    }
    const apiPath = "/teams/{teamId}/memberships/{membershipId}".replace("{teamId}", teamId).replace("{membershipId}", membershipId);
    const payload = {};
    if (typeof roles !== "undefined") {
      payload["roles"] = roles;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  deleteMembership(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst,
        membershipId: rest[0]
      };
    }
    const teamId = params.teamId;
    const membershipId = params.membershipId;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    if (typeof membershipId === "undefined") {
      throw new AppwriteException('Missing required parameter: "membershipId"');
    }
    const apiPath = "/teams/{teamId}/memberships/{membershipId}".replace("{teamId}", teamId).replace("{membershipId}", membershipId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("delete", uri, apiHeaders, payload);
  }
  updateMembershipStatus(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst,
        membershipId: rest[0],
        userId: rest[1],
        secret: rest[2]
      };
    }
    const teamId = params.teamId;
    const membershipId = params.membershipId;
    const userId = params.userId;
    const secret = params.secret;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    if (typeof membershipId === "undefined") {
      throw new AppwriteException('Missing required parameter: "membershipId"');
    }
    if (typeof userId === "undefined") {
      throw new AppwriteException('Missing required parameter: "userId"');
    }
    if (typeof secret === "undefined") {
      throw new AppwriteException('Missing required parameter: "secret"');
    }
    const apiPath = "/teams/{teamId}/memberships/{membershipId}/status".replace("{teamId}", teamId).replace("{membershipId}", membershipId);
    const payload = {};
    if (typeof userId !== "undefined") {
      payload["userId"] = userId;
    }
    if (typeof secret !== "undefined") {
      payload["secret"] = secret;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("patch", uri, apiHeaders, payload);
  }
  getPrefs(paramsOrFirst) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst
      };
    }
    const teamId = params.teamId;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    const apiPath = "/teams/{teamId}/prefs".replace("{teamId}", teamId);
    const payload = {};
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {};
    return this.client.call("get", uri, apiHeaders, payload);
  }
  updatePrefs(paramsOrFirst, ...rest) {
    let params;
    if (paramsOrFirst && typeof paramsOrFirst === "object" && !Array.isArray(paramsOrFirst)) {
      params = paramsOrFirst || {};
    } else {
      params = {
        teamId: paramsOrFirst,
        prefs: rest[0]
      };
    }
    const teamId = params.teamId;
    const prefs = params.prefs;
    if (typeof teamId === "undefined") {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }
    if (typeof prefs === "undefined") {
      throw new AppwriteException('Missing required parameter: "prefs"');
    }
    const apiPath = "/teams/{teamId}/prefs".replace("{teamId}", teamId);
    const payload = {};
    if (typeof prefs !== "undefined") {
      payload["prefs"] = prefs;
    }
    const uri = new URL(this.client.config.endpoint + apiPath);
    const apiHeaders = {
      "content-type": "application/json"
    };
    return this.client.call("put", uri, apiHeaders, payload);
  }
}
var RealtimeCode;
(function(RealtimeCode2) {
  RealtimeCode2[RealtimeCode2["NORMAL_CLOSURE"] = 1e3] = "NORMAL_CLOSURE";
  RealtimeCode2[RealtimeCode2["POLICY_VIOLATION"] = 1008] = "POLICY_VIOLATION";
  RealtimeCode2[RealtimeCode2["UNKNOWN_ERROR"] = -1] = "UNKNOWN_ERROR";
})(RealtimeCode || (RealtimeCode = {}));
class Realtime {
  constructor(client2) {
    this.TYPE_ERROR = "error";
    this.TYPE_EVENT = "event";
    this.TYPE_PONG = "pong";
    this.TYPE_CONNECTED = "connected";
    this.DEBOUNCE_MS = 1;
    this.HEARTBEAT_INTERVAL = 2e4;
    this.activeChannels = /* @__PURE__ */ new Set();
    this.activeSubscriptions = /* @__PURE__ */ new Map();
    this.subCallDepth = 0;
    this.reconnectAttempts = 0;
    this.subscriptionsCounter = 0;
    this.reconnect = true;
    this.onErrorCallbacks = [];
    this.onCloseCallbacks = [];
    this.onOpenCallbacks = [];
    this.client = client2;
  }
  /**
   * Register a callback function to be called when an error occurs
   *
   * @param {Function} callback - Callback function to handle errors
   * @returns {void}
   */
  onError(callback) {
    this.onErrorCallbacks.push(callback);
  }
  /**
   * Register a callback function to be called when the connection closes
   *
   * @param {Function} callback - Callback function to handle connection close
   * @returns {void}
   */
  onClose(callback) {
    this.onCloseCallbacks.push(callback);
  }
  /**
   * Register a callback function to be called when the connection opens
   *
   * @param {Function} callback - Callback function to handle connection open
   * @returns {void}
   */
  onOpen(callback) {
    this.onOpenCallbacks.push(callback);
  }
  startHeartbeat() {
    this.stopHeartbeat();
    this.heartbeatTimer = (void 0).setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify({ type: "ping" }));
      }
    }, this.HEARTBEAT_INTERVAL);
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) {
      (void 0).clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = void 0;
    }
  }
  createSocket() {
    return __awaiter(this, void 0, void 0, function* () {
      if (this.activeChannels.size === 0) {
        this.reconnect = false;
        yield this.closeSocket();
        return;
      }
      const projectId2 = this.client.config.project;
      if (!projectId2) {
        throw new AppwriteException("Missing project ID");
      }
      let queryParams = `project=${projectId2}`;
      for (const channel of this.activeChannels) {
        queryParams += `&channels[]=${encodeURIComponent(channel)}`;
      }
      const endpoint2 = this.client.config.endpointRealtime !== "" ? this.client.config.endpointRealtime : this.client.config.endpoint || "";
      const realtimeEndpoint = endpoint2.replace("https://", "wss://").replace("http://", "ws://");
      const url = `${realtimeEndpoint}/realtime?${queryParams}`;
      if (this.socket) {
        this.reconnect = false;
        yield this.closeSocket();
      }
      return new Promise((resolve2, reject) => {
        try {
          this.socket = new WebSocket(url);
          this.socket.addEventListener("open", () => {
            this.reconnectAttempts = 0;
            this.onOpenCallbacks.forEach((callback) => callback());
            this.startHeartbeat();
            resolve2();
          });
          this.socket.addEventListener("message", (event) => {
            try {
              const message = JSON.parse(event.data);
              this.handleMessage(message);
            } catch (error) {
              console.error("Failed to parse message:", error);
            }
          });
          this.socket.addEventListener("close", (event) => __awaiter(this, void 0, void 0, function* () {
            this.stopHeartbeat();
            this.onCloseCallbacks.forEach((callback) => callback());
            if (!this.reconnect || event.code === RealtimeCode.POLICY_VIOLATION) {
              this.reconnect = true;
              return;
            }
            const timeout = this.getTimeout();
            console.log(`Realtime disconnected. Re-connecting in ${timeout / 1e3} seconds.`);
            yield this.sleep(timeout);
            this.reconnectAttempts++;
            try {
              yield this.createSocket();
            } catch (error) {
              console.error("Failed to reconnect:", error);
            }
          }));
          this.socket.addEventListener("error", (event) => {
            this.stopHeartbeat();
            const error = new Error("WebSocket error");
            console.error("WebSocket error:", error.message);
            this.onErrorCallbacks.forEach((callback) => callback(error));
            reject(error);
          });
        } catch (error) {
          reject(error);
        }
      });
    });
  }
  closeSocket() {
    return __awaiter(this, void 0, void 0, function* () {
      this.stopHeartbeat();
      if (this.socket) {
        return new Promise((resolve2) => {
          if (!this.socket) {
            resolve2();
            return;
          }
          if (this.socket.readyState === WebSocket.OPEN || this.socket.readyState === WebSocket.CONNECTING) {
            this.socket.addEventListener("close", () => {
              resolve2();
            }, { once: true });
            this.socket.close(RealtimeCode.NORMAL_CLOSURE);
          } else {
            resolve2();
          }
        });
      }
    });
  }
  getTimeout() {
    if (this.reconnectAttempts < 5) {
      return 1e3;
    } else if (this.reconnectAttempts < 15) {
      return 5e3;
    } else if (this.reconnectAttempts < 100) {
      return 1e4;
    } else {
      return 6e4;
    }
  }
  sleep(ms) {
    return new Promise((resolve2) => setTimeout(resolve2, ms));
  }
  subscribe(channelsOrChannel, callback) {
    return __awaiter(this, void 0, void 0, function* () {
      const channels = Array.isArray(channelsOrChannel) ? new Set(channelsOrChannel) : /* @__PURE__ */ new Set([channelsOrChannel]);
      this.subscriptionsCounter++;
      const count = this.subscriptionsCounter;
      for (const channel of channels) {
        this.activeChannels.add(channel);
      }
      this.activeSubscriptions.set(count, {
        channels,
        callback
      });
      this.subCallDepth++;
      yield this.sleep(this.DEBOUNCE_MS);
      if (this.subCallDepth === 1) {
        yield this.createSocket();
      }
      this.subCallDepth--;
      return {
        close: () => __awaiter(this, void 0, void 0, function* () {
          this.activeSubscriptions.delete(count);
          this.cleanUp(channels);
          yield this.createSocket();
        })
      };
    });
  }
  cleanUp(channels) {
    this.activeChannels = new Set(Array.from(this.activeChannels).filter((channel) => {
      if (!channels.has(channel)) {
        return true;
      }
      const subsWithChannel = Array.from(this.activeSubscriptions.values()).filter((sub) => sub.channels.has(channel));
      return subsWithChannel.length > 0;
    }));
  }
  handleMessage(message) {
    if (!message.type) {
      return;
    }
    switch (message.type) {
      case this.TYPE_CONNECTED:
        this.handleResponseConnected(message);
        break;
      case this.TYPE_ERROR:
        this.handleResponseError(message);
        break;
      case this.TYPE_EVENT:
        this.handleResponseEvent(message);
        break;
      case this.TYPE_PONG:
        break;
    }
  }
  handleResponseConnected(message) {
    var _a2, _b;
    if (!message.data) {
      return;
    }
    const messageData = message.data;
    let session = this.client.config.session;
    if (!session) {
      try {
        const cookie = JSON.parse((_a2 = (void 0).localStorage.getItem("cookieFallback")) !== null && _a2 !== void 0 ? _a2 : "{}");
        session = cookie === null || cookie === void 0 ? void 0 : cookie[`a_session_${this.client.config.project}`];
      } catch (error) {
        console.error("Failed to parse cookie fallback:", error);
      }
    }
    if (session && !messageData.user) {
      (_b = this.socket) === null || _b === void 0 ? void 0 : _b.send(JSON.stringify({
        type: "authentication",
        data: {
          session
        }
      }));
    }
  }
  handleResponseError(message) {
    var _a2, _b;
    const error = new AppwriteException(((_a2 = message.data) === null || _a2 === void 0 ? void 0 : _a2.message) || "Unknown error");
    const statusCode = (_b = message.data) === null || _b === void 0 ? void 0 : _b.code;
    this.onErrorCallbacks.forEach((callback) => callback(error, statusCode));
  }
  handleResponseEvent(message) {
    const data = message.data;
    if (!data) {
      return;
    }
    const channels = data.channels;
    const events = data.events;
    const payload = data.payload;
    const timestamp = data.timestamp;
    if (!channels || !events || !payload) {
      return;
    }
    const hasActiveChannel = channels.some((channel) => this.activeChannels.has(channel));
    if (!hasActiveChannel) {
      return;
    }
    for (const [_, subscription] of this.activeSubscriptions) {
      const hasSubscribedChannel = channels.some((channel) => subscription.channels.has(channel));
      if (hasSubscribedChannel) {
        const response = {
          events,
          channels,
          timestamp,
          payload
        };
        subscription.callback(response);
      }
    }
  }
}
class Permission {
}
Permission.read = (role) => {
  return `read("${role}")`;
};
Permission.write = (role) => {
  return `write("${role}")`;
};
Permission.create = (role) => {
  return `create("${role}")`;
};
Permission.update = (role) => {
  return `update("${role}")`;
};
Permission.delete = (role) => {
  return `delete("${role}")`;
};
class Role {
  /**
   * Grants access to anyone.
   *
   * This includes authenticated and unauthenticated users.
   *
   * @returns {string}
   */
  static any() {
    return "any";
  }
  /**
   * Grants access to a specific user by user ID.
   *
   * You can optionally pass verified or unverified for
   * `status` to target specific types of users.
   *
   * @param {string} id
   * @param {string} status
   * @returns {string}
   */
  static user(id, status = "") {
    if (status === "") {
      return `user:${id}`;
    }
    return `user:${id}/${status}`;
  }
  /**
   * Grants access to any authenticated or anonymous user.
   *
   * You can optionally pass verified or unverified for
   * `status` to target specific types of users.
   *
   * @param {string} status
   * @returns {string}
   */
  static users(status = "") {
    if (status === "") {
      return "users";
    }
    return `users/${status}`;
  }
  /**
   * Grants access to any guest user without a session.
   *
   * Authenticated users don't have access to this role.
   *
   * @returns {string}
   */
  static guests() {
    return "guests";
  }
  /**
   * Grants access to a team by team ID.
   *
   * You can optionally pass a role for `role` to target
   * team members with the specified role.
   *
   * @param {string} id
   * @param {string} role
   * @returns {string}
   */
  static team(id, role = "") {
    if (role === "") {
      return `team:${id}`;
    }
    return `team:${id}/${role}`;
  }
  /**
   * Grants access to a specific member of a team.
   *
   * When the member is removed from the team, they will
   * no longer have access.
   *
   * @param {string} id
   * @returns {string}
   */
  static member(id) {
    return `member:${id}`;
  }
  /**
   * Grants access to a user with the specified label.
   *
   * @param {string} name
   * @returns  {string}
   */
  static label(name) {
    return `label:${name}`;
  }
}
var _a, _ID_hexTimestamp;
class ID {
  /**
   * Uses the provided ID as the ID for the resource.
   *
   * @param {string} id
   * @returns {string}
   */
  static custom(id) {
    return id;
  }
  /**
   * Have Appwrite generate a unique ID for you.
   *
   * @param {number} padding. Default is 7.
   * @returns {string}
   */
  static unique(padding = 7) {
    const baseId = __classPrivateFieldGet(ID, _a, "m", _ID_hexTimestamp).call(ID);
    let randomPadding = "";
    for (let i = 0; i < padding; i++) {
      const randomHexDigit = Math.floor(Math.random() * 16).toString(16);
      randomPadding += randomHexDigit;
    }
    return baseId + randomPadding;
  }
}
_a = ID, _ID_hexTimestamp = function _ID_hexTimestamp2() {
  const now = /* @__PURE__ */ new Date();
  const sec = Math.floor(now.getTime() / 1e3);
  const msec = now.getMilliseconds();
  const hexTimestamp = sec.toString(16) + msec.toString(16).padStart(5, "0");
  return hexTimestamp;
};
var Condition;
(function(Condition2) {
  Condition2["Equal"] = "equal";
  Condition2["NotEqual"] = "notEqual";
  Condition2["GreaterThan"] = "greaterThan";
  Condition2["GreaterThanEqual"] = "greaterThanEqual";
  Condition2["LessThan"] = "lessThan";
  Condition2["LessThanEqual"] = "lessThanEqual";
  Condition2["Contains"] = "contains";
  Condition2["IsNull"] = "isNull";
  Condition2["IsNotNull"] = "isNotNull";
})(Condition || (Condition = {}));
class Operator {
  /**
   * Constructor for Operator class.
   *
   * @param {string} method
   * @param {OperatorValues} values
   */
  constructor(method, values) {
    this.method = method;
    if (values !== void 0) {
      if (Array.isArray(values)) {
        this.values = values;
      } else {
        this.values = [values];
      }
    }
  }
  /**
   * Convert the operator object to a JSON string.
   *
   * @returns {string}
   */
  toString() {
    return JSON.stringify({
      method: this.method,
      values: this.values
    });
  }
}
Operator.increment = (value = 1, max) => {
  if (isNaN(value) || !isFinite(value)) {
    throw new Error("Value cannot be NaN or Infinity");
  }
  if (max !== void 0 && (isNaN(max) || !isFinite(max))) {
    throw new Error("Max cannot be NaN or Infinity");
  }
  const values = [value];
  if (max !== void 0) {
    values.push(max);
  }
  return new Operator("increment", values).toString();
};
Operator.decrement = (value = 1, min) => {
  if (isNaN(value) || !isFinite(value)) {
    throw new Error("Value cannot be NaN or Infinity");
  }
  if (min !== void 0 && (isNaN(min) || !isFinite(min))) {
    throw new Error("Min cannot be NaN or Infinity");
  }
  const values = [value];
  if (min !== void 0) {
    values.push(min);
  }
  return new Operator("decrement", values).toString();
};
Operator.multiply = (factor, max) => {
  if (isNaN(factor) || !isFinite(factor)) {
    throw new Error("Factor cannot be NaN or Infinity");
  }
  if (max !== void 0 && (isNaN(max) || !isFinite(max))) {
    throw new Error("Max cannot be NaN or Infinity");
  }
  const values = [factor];
  if (max !== void 0) {
    values.push(max);
  }
  return new Operator("multiply", values).toString();
};
Operator.divide = (divisor, min) => {
  if (isNaN(divisor) || !isFinite(divisor)) {
    throw new Error("Divisor cannot be NaN or Infinity");
  }
  if (min !== void 0 && (isNaN(min) || !isFinite(min))) {
    throw new Error("Min cannot be NaN or Infinity");
  }
  if (divisor === 0) {
    throw new Error("Divisor cannot be zero");
  }
  const values = [divisor];
  if (min !== void 0) {
    values.push(min);
  }
  return new Operator("divide", values).toString();
};
Operator.modulo = (divisor) => {
  if (isNaN(divisor) || !isFinite(divisor)) {
    throw new Error("Divisor cannot be NaN or Infinity");
  }
  if (divisor === 0) {
    throw new Error("Divisor cannot be zero");
  }
  return new Operator("modulo", [divisor]).toString();
};
Operator.power = (exponent, max) => {
  if (isNaN(exponent) || !isFinite(exponent)) {
    throw new Error("Exponent cannot be NaN or Infinity");
  }
  if (max !== void 0 && (isNaN(max) || !isFinite(max))) {
    throw new Error("Max cannot be NaN or Infinity");
  }
  const values = [exponent];
  if (max !== void 0) {
    values.push(max);
  }
  return new Operator("power", values).toString();
};
Operator.arrayAppend = (values) => new Operator("arrayAppend", values).toString();
Operator.arrayPrepend = (values) => new Operator("arrayPrepend", values).toString();
Operator.arrayInsert = (index, value) => new Operator("arrayInsert", [index, value]).toString();
Operator.arrayRemove = (value) => new Operator("arrayRemove", [value]).toString();
Operator.arrayUnique = () => new Operator("arrayUnique", []).toString();
Operator.arrayIntersect = (values) => new Operator("arrayIntersect", values).toString();
Operator.arrayDiff = (values) => new Operator("arrayDiff", values).toString();
Operator.arrayFilter = (condition, value) => {
  const values = [condition, value === void 0 ? null : value];
  return new Operator("arrayFilter", values).toString();
};
Operator.stringConcat = (value) => new Operator("stringConcat", [value]).toString();
Operator.stringReplace = (search, replace) => new Operator("stringReplace", [search, replace]).toString();
Operator.toggle = () => new Operator("toggle", []).toString();
Operator.dateAddDays = (days) => new Operator("dateAddDays", [days]).toString();
Operator.dateSubDays = (days) => new Operator("dateSubDays", [days]).toString();
Operator.dateSetNow = () => new Operator("dateSetNow", []).toString();
var AuthenticatorType;
(function(AuthenticatorType2) {
  AuthenticatorType2["Totp"] = "totp";
})(AuthenticatorType || (AuthenticatorType = {}));
var AuthenticationFactor;
(function(AuthenticationFactor2) {
  AuthenticationFactor2["Email"] = "email";
  AuthenticationFactor2["Phone"] = "phone";
  AuthenticationFactor2["Totp"] = "totp";
  AuthenticationFactor2["Recoverycode"] = "recoverycode";
})(AuthenticationFactor || (AuthenticationFactor = {}));
var OAuthProvider;
(function(OAuthProvider2) {
  OAuthProvider2["Amazon"] = "amazon";
  OAuthProvider2["Apple"] = "apple";
  OAuthProvider2["Auth0"] = "auth0";
  OAuthProvider2["Authentik"] = "authentik";
  OAuthProvider2["Autodesk"] = "autodesk";
  OAuthProvider2["Bitbucket"] = "bitbucket";
  OAuthProvider2["Bitly"] = "bitly";
  OAuthProvider2["Box"] = "box";
  OAuthProvider2["Dailymotion"] = "dailymotion";
  OAuthProvider2["Discord"] = "discord";
  OAuthProvider2["Disqus"] = "disqus";
  OAuthProvider2["Dropbox"] = "dropbox";
  OAuthProvider2["Etsy"] = "etsy";
  OAuthProvider2["Facebook"] = "facebook";
  OAuthProvider2["Figma"] = "figma";
  OAuthProvider2["Github"] = "github";
  OAuthProvider2["Gitlab"] = "gitlab";
  OAuthProvider2["Google"] = "google";
  OAuthProvider2["Linkedin"] = "linkedin";
  OAuthProvider2["Microsoft"] = "microsoft";
  OAuthProvider2["Notion"] = "notion";
  OAuthProvider2["Oidc"] = "oidc";
  OAuthProvider2["Okta"] = "okta";
  OAuthProvider2["Paypal"] = "paypal";
  OAuthProvider2["PaypalSandbox"] = "paypalSandbox";
  OAuthProvider2["Podio"] = "podio";
  OAuthProvider2["Salesforce"] = "salesforce";
  OAuthProvider2["Slack"] = "slack";
  OAuthProvider2["Spotify"] = "spotify";
  OAuthProvider2["Stripe"] = "stripe";
  OAuthProvider2["Tradeshift"] = "tradeshift";
  OAuthProvider2["TradeshiftBox"] = "tradeshiftBox";
  OAuthProvider2["Twitch"] = "twitch";
  OAuthProvider2["Wordpress"] = "wordpress";
  OAuthProvider2["Yahoo"] = "yahoo";
  OAuthProvider2["Yammer"] = "yammer";
  OAuthProvider2["Yandex"] = "yandex";
  OAuthProvider2["Zoho"] = "zoho";
  OAuthProvider2["Zoom"] = "zoom";
  OAuthProvider2["Mock"] = "mock";
})(OAuthProvider || (OAuthProvider = {}));
var Browser;
(function(Browser2) {
  Browser2["AvantBrowser"] = "aa";
  Browser2["AndroidWebViewBeta"] = "an";
  Browser2["GoogleChrome"] = "ch";
  Browser2["GoogleChromeIOS"] = "ci";
  Browser2["GoogleChromeMobile"] = "cm";
  Browser2["Chromium"] = "cr";
  Browser2["MozillaFirefox"] = "ff";
  Browser2["Safari"] = "sf";
  Browser2["MobileSafari"] = "mf";
  Browser2["MicrosoftEdge"] = "ps";
  Browser2["MicrosoftEdgeIOS"] = "oi";
  Browser2["OperaMini"] = "om";
  Browser2["Opera"] = "op";
  Browser2["OperaNext"] = "on";
})(Browser || (Browser = {}));
var CreditCard;
(function(CreditCard2) {
  CreditCard2["AmericanExpress"] = "amex";
  CreditCard2["Argencard"] = "argencard";
  CreditCard2["Cabal"] = "cabal";
  CreditCard2["Cencosud"] = "cencosud";
  CreditCard2["DinersClub"] = "diners";
  CreditCard2["Discover"] = "discover";
  CreditCard2["Elo"] = "elo";
  CreditCard2["Hipercard"] = "hipercard";
  CreditCard2["JCB"] = "jcb";
  CreditCard2["Mastercard"] = "mastercard";
  CreditCard2["Naranja"] = "naranja";
  CreditCard2["TarjetaShopping"] = "targeta-shopping";
  CreditCard2["UnionPay"] = "unionpay";
  CreditCard2["Visa"] = "visa";
  CreditCard2["MIR"] = "mir";
  CreditCard2["Maestro"] = "maestro";
  CreditCard2["Rupay"] = "rupay";
})(CreditCard || (CreditCard = {}));
var Flag;
(function(Flag2) {
  Flag2["Afghanistan"] = "af";
  Flag2["Angola"] = "ao";
  Flag2["Albania"] = "al";
  Flag2["Andorra"] = "ad";
  Flag2["UnitedArabEmirates"] = "ae";
  Flag2["Argentina"] = "ar";
  Flag2["Armenia"] = "am";
  Flag2["AntiguaAndBarbuda"] = "ag";
  Flag2["Australia"] = "au";
  Flag2["Austria"] = "at";
  Flag2["Azerbaijan"] = "az";
  Flag2["Burundi"] = "bi";
  Flag2["Belgium"] = "be";
  Flag2["Benin"] = "bj";
  Flag2["BurkinaFaso"] = "bf";
  Flag2["Bangladesh"] = "bd";
  Flag2["Bulgaria"] = "bg";
  Flag2["Bahrain"] = "bh";
  Flag2["Bahamas"] = "bs";
  Flag2["BosniaAndHerzegovina"] = "ba";
  Flag2["Belarus"] = "by";
  Flag2["Belize"] = "bz";
  Flag2["Bolivia"] = "bo";
  Flag2["Brazil"] = "br";
  Flag2["Barbados"] = "bb";
  Flag2["BruneiDarussalam"] = "bn";
  Flag2["Bhutan"] = "bt";
  Flag2["Botswana"] = "bw";
  Flag2["CentralAfricanRepublic"] = "cf";
  Flag2["Canada"] = "ca";
  Flag2["Switzerland"] = "ch";
  Flag2["Chile"] = "cl";
  Flag2["China"] = "cn";
  Flag2["CoteDIvoire"] = "ci";
  Flag2["Cameroon"] = "cm";
  Flag2["DemocraticRepublicOfTheCongo"] = "cd";
  Flag2["RepublicOfTheCongo"] = "cg";
  Flag2["Colombia"] = "co";
  Flag2["Comoros"] = "km";
  Flag2["CapeVerde"] = "cv";
  Flag2["CostaRica"] = "cr";
  Flag2["Cuba"] = "cu";
  Flag2["Cyprus"] = "cy";
  Flag2["CzechRepublic"] = "cz";
  Flag2["Germany"] = "de";
  Flag2["Djibouti"] = "dj";
  Flag2["Dominica"] = "dm";
  Flag2["Denmark"] = "dk";
  Flag2["DominicanRepublic"] = "do";
  Flag2["Algeria"] = "dz";
  Flag2["Ecuador"] = "ec";
  Flag2["Egypt"] = "eg";
  Flag2["Eritrea"] = "er";
  Flag2["Spain"] = "es";
  Flag2["Estonia"] = "ee";
  Flag2["Ethiopia"] = "et";
  Flag2["Finland"] = "fi";
  Flag2["Fiji"] = "fj";
  Flag2["France"] = "fr";
  Flag2["MicronesiaFederatedStatesOf"] = "fm";
  Flag2["Gabon"] = "ga";
  Flag2["UnitedKingdom"] = "gb";
  Flag2["Georgia"] = "ge";
  Flag2["Ghana"] = "gh";
  Flag2["Guinea"] = "gn";
  Flag2["Gambia"] = "gm";
  Flag2["GuineaBissau"] = "gw";
  Flag2["EquatorialGuinea"] = "gq";
  Flag2["Greece"] = "gr";
  Flag2["Grenada"] = "gd";
  Flag2["Guatemala"] = "gt";
  Flag2["Guyana"] = "gy";
  Flag2["Honduras"] = "hn";
  Flag2["Croatia"] = "hr";
  Flag2["Haiti"] = "ht";
  Flag2["Hungary"] = "hu";
  Flag2["Indonesia"] = "id";
  Flag2["India"] = "in";
  Flag2["Ireland"] = "ie";
  Flag2["IranIslamicRepublicOf"] = "ir";
  Flag2["Iraq"] = "iq";
  Flag2["Iceland"] = "is";
  Flag2["Israel"] = "il";
  Flag2["Italy"] = "it";
  Flag2["Jamaica"] = "jm";
  Flag2["Jordan"] = "jo";
  Flag2["Japan"] = "jp";
  Flag2["Kazakhstan"] = "kz";
  Flag2["Kenya"] = "ke";
  Flag2["Kyrgyzstan"] = "kg";
  Flag2["Cambodia"] = "kh";
  Flag2["Kiribati"] = "ki";
  Flag2["SaintKittsAndNevis"] = "kn";
  Flag2["SouthKorea"] = "kr";
  Flag2["Kuwait"] = "kw";
  Flag2["LaoPeopleSDemocraticRepublic"] = "la";
  Flag2["Lebanon"] = "lb";
  Flag2["Liberia"] = "lr";
  Flag2["Libya"] = "ly";
  Flag2["SaintLucia"] = "lc";
  Flag2["Liechtenstein"] = "li";
  Flag2["SriLanka"] = "lk";
  Flag2["Lesotho"] = "ls";
  Flag2["Lithuania"] = "lt";
  Flag2["Luxembourg"] = "lu";
  Flag2["Latvia"] = "lv";
  Flag2["Morocco"] = "ma";
  Flag2["Monaco"] = "mc";
  Flag2["Moldova"] = "md";
  Flag2["Madagascar"] = "mg";
  Flag2["Maldives"] = "mv";
  Flag2["Mexico"] = "mx";
  Flag2["MarshallIslands"] = "mh";
  Flag2["NorthMacedonia"] = "mk";
  Flag2["Mali"] = "ml";
  Flag2["Malta"] = "mt";
  Flag2["Myanmar"] = "mm";
  Flag2["Montenegro"] = "me";
  Flag2["Mongolia"] = "mn";
  Flag2["Mozambique"] = "mz";
  Flag2["Mauritania"] = "mr";
  Flag2["Mauritius"] = "mu";
  Flag2["Malawi"] = "mw";
  Flag2["Malaysia"] = "my";
  Flag2["Namibia"] = "na";
  Flag2["Niger"] = "ne";
  Flag2["Nigeria"] = "ng";
  Flag2["Nicaragua"] = "ni";
  Flag2["Netherlands"] = "nl";
  Flag2["Norway"] = "no";
  Flag2["Nepal"] = "np";
  Flag2["Nauru"] = "nr";
  Flag2["NewZealand"] = "nz";
  Flag2["Oman"] = "om";
  Flag2["Pakistan"] = "pk";
  Flag2["Panama"] = "pa";
  Flag2["Peru"] = "pe";
  Flag2["Philippines"] = "ph";
  Flag2["Palau"] = "pw";
  Flag2["PapuaNewGuinea"] = "pg";
  Flag2["Poland"] = "pl";
  Flag2["FrenchPolynesia"] = "pf";
  Flag2["NorthKorea"] = "kp";
  Flag2["Portugal"] = "pt";
  Flag2["Paraguay"] = "py";
  Flag2["Qatar"] = "qa";
  Flag2["Romania"] = "ro";
  Flag2["Russia"] = "ru";
  Flag2["Rwanda"] = "rw";
  Flag2["SaudiArabia"] = "sa";
  Flag2["Sudan"] = "sd";
  Flag2["Senegal"] = "sn";
  Flag2["Singapore"] = "sg";
  Flag2["SolomonIslands"] = "sb";
  Flag2["SierraLeone"] = "sl";
  Flag2["ElSalvador"] = "sv";
  Flag2["SanMarino"] = "sm";
  Flag2["Somalia"] = "so";
  Flag2["Serbia"] = "rs";
  Flag2["SouthSudan"] = "ss";
  Flag2["SaoTomeAndPrincipe"] = "st";
  Flag2["Suriname"] = "sr";
  Flag2["Slovakia"] = "sk";
  Flag2["Slovenia"] = "si";
  Flag2["Sweden"] = "se";
  Flag2["Eswatini"] = "sz";
  Flag2["Seychelles"] = "sc";
  Flag2["Syria"] = "sy";
  Flag2["Chad"] = "td";
  Flag2["Togo"] = "tg";
  Flag2["Thailand"] = "th";
  Flag2["Tajikistan"] = "tj";
  Flag2["Turkmenistan"] = "tm";
  Flag2["TimorLeste"] = "tl";
  Flag2["Tonga"] = "to";
  Flag2["TrinidadAndTobago"] = "tt";
  Flag2["Tunisia"] = "tn";
  Flag2["Turkey"] = "tr";
  Flag2["Tuvalu"] = "tv";
  Flag2["Tanzania"] = "tz";
  Flag2["Uganda"] = "ug";
  Flag2["Ukraine"] = "ua";
  Flag2["Uruguay"] = "uy";
  Flag2["UnitedStates"] = "us";
  Flag2["Uzbekistan"] = "uz";
  Flag2["VaticanCity"] = "va";
  Flag2["SaintVincentAndTheGrenadines"] = "vc";
  Flag2["Venezuela"] = "ve";
  Flag2["Vietnam"] = "vn";
  Flag2["Vanuatu"] = "vu";
  Flag2["Samoa"] = "ws";
  Flag2["Yemen"] = "ye";
  Flag2["SouthAfrica"] = "za";
  Flag2["Zambia"] = "zm";
  Flag2["Zimbabwe"] = "zw";
})(Flag || (Flag = {}));
var Theme;
(function(Theme2) {
  Theme2["Light"] = "light";
  Theme2["Dark"] = "dark";
})(Theme || (Theme = {}));
var Timezone;
(function(Timezone2) {
  Timezone2["AfricaAbidjan"] = "africa/abidjan";
  Timezone2["AfricaAccra"] = "africa/accra";
  Timezone2["AfricaAddisAbaba"] = "africa/addis_ababa";
  Timezone2["AfricaAlgiers"] = "africa/algiers";
  Timezone2["AfricaAsmara"] = "africa/asmara";
  Timezone2["AfricaBamako"] = "africa/bamako";
  Timezone2["AfricaBangui"] = "africa/bangui";
  Timezone2["AfricaBanjul"] = "africa/banjul";
  Timezone2["AfricaBissau"] = "africa/bissau";
  Timezone2["AfricaBlantyre"] = "africa/blantyre";
  Timezone2["AfricaBrazzaville"] = "africa/brazzaville";
  Timezone2["AfricaBujumbura"] = "africa/bujumbura";
  Timezone2["AfricaCairo"] = "africa/cairo";
  Timezone2["AfricaCasablanca"] = "africa/casablanca";
  Timezone2["AfricaCeuta"] = "africa/ceuta";
  Timezone2["AfricaConakry"] = "africa/conakry";
  Timezone2["AfricaDakar"] = "africa/dakar";
  Timezone2["AfricaDarEsSalaam"] = "africa/dar_es_salaam";
  Timezone2["AfricaDjibouti"] = "africa/djibouti";
  Timezone2["AfricaDouala"] = "africa/douala";
  Timezone2["AfricaElAaiun"] = "africa/el_aaiun";
  Timezone2["AfricaFreetown"] = "africa/freetown";
  Timezone2["AfricaGaborone"] = "africa/gaborone";
  Timezone2["AfricaHarare"] = "africa/harare";
  Timezone2["AfricaJohannesburg"] = "africa/johannesburg";
  Timezone2["AfricaJuba"] = "africa/juba";
  Timezone2["AfricaKampala"] = "africa/kampala";
  Timezone2["AfricaKhartoum"] = "africa/khartoum";
  Timezone2["AfricaKigali"] = "africa/kigali";
  Timezone2["AfricaKinshasa"] = "africa/kinshasa";
  Timezone2["AfricaLagos"] = "africa/lagos";
  Timezone2["AfricaLibreville"] = "africa/libreville";
  Timezone2["AfricaLome"] = "africa/lome";
  Timezone2["AfricaLuanda"] = "africa/luanda";
  Timezone2["AfricaLubumbashi"] = "africa/lubumbashi";
  Timezone2["AfricaLusaka"] = "africa/lusaka";
  Timezone2["AfricaMalabo"] = "africa/malabo";
  Timezone2["AfricaMaputo"] = "africa/maputo";
  Timezone2["AfricaMaseru"] = "africa/maseru";
  Timezone2["AfricaMbabane"] = "africa/mbabane";
  Timezone2["AfricaMogadishu"] = "africa/mogadishu";
  Timezone2["AfricaMonrovia"] = "africa/monrovia";
  Timezone2["AfricaNairobi"] = "africa/nairobi";
  Timezone2["AfricaNdjamena"] = "africa/ndjamena";
  Timezone2["AfricaNiamey"] = "africa/niamey";
  Timezone2["AfricaNouakchott"] = "africa/nouakchott";
  Timezone2["AfricaOuagadougou"] = "africa/ouagadougou";
  Timezone2["AfricaPortonovo"] = "africa/porto-novo";
  Timezone2["AfricaSaoTome"] = "africa/sao_tome";
  Timezone2["AfricaTripoli"] = "africa/tripoli";
  Timezone2["AfricaTunis"] = "africa/tunis";
  Timezone2["AfricaWindhoek"] = "africa/windhoek";
  Timezone2["AmericaAdak"] = "america/adak";
  Timezone2["AmericaAnchorage"] = "america/anchorage";
  Timezone2["AmericaAnguilla"] = "america/anguilla";
  Timezone2["AmericaAntigua"] = "america/antigua";
  Timezone2["AmericaAraguaina"] = "america/araguaina";
  Timezone2["AmericaArgentinaBuenosAires"] = "america/argentina/buenos_aires";
  Timezone2["AmericaArgentinaCatamarca"] = "america/argentina/catamarca";
  Timezone2["AmericaArgentinaCordoba"] = "america/argentina/cordoba";
  Timezone2["AmericaArgentinaJujuy"] = "america/argentina/jujuy";
  Timezone2["AmericaArgentinaLaRioja"] = "america/argentina/la_rioja";
  Timezone2["AmericaArgentinaMendoza"] = "america/argentina/mendoza";
  Timezone2["AmericaArgentinaRioGallegos"] = "america/argentina/rio_gallegos";
  Timezone2["AmericaArgentinaSalta"] = "america/argentina/salta";
  Timezone2["AmericaArgentinaSanJuan"] = "america/argentina/san_juan";
  Timezone2["AmericaArgentinaSanLuis"] = "america/argentina/san_luis";
  Timezone2["AmericaArgentinaTucuman"] = "america/argentina/tucuman";
  Timezone2["AmericaArgentinaUshuaia"] = "america/argentina/ushuaia";
  Timezone2["AmericaAruba"] = "america/aruba";
  Timezone2["AmericaAsuncion"] = "america/asuncion";
  Timezone2["AmericaAtikokan"] = "america/atikokan";
  Timezone2["AmericaBahia"] = "america/bahia";
  Timezone2["AmericaBahiaBanderas"] = "america/bahia_banderas";
  Timezone2["AmericaBarbados"] = "america/barbados";
  Timezone2["AmericaBelem"] = "america/belem";
  Timezone2["AmericaBelize"] = "america/belize";
  Timezone2["AmericaBlancsablon"] = "america/blanc-sablon";
  Timezone2["AmericaBoaVista"] = "america/boa_vista";
  Timezone2["AmericaBogota"] = "america/bogota";
  Timezone2["AmericaBoise"] = "america/boise";
  Timezone2["AmericaCambridgeBay"] = "america/cambridge_bay";
  Timezone2["AmericaCampoGrande"] = "america/campo_grande";
  Timezone2["AmericaCancun"] = "america/cancun";
  Timezone2["AmericaCaracas"] = "america/caracas";
  Timezone2["AmericaCayenne"] = "america/cayenne";
  Timezone2["AmericaCayman"] = "america/cayman";
  Timezone2["AmericaChicago"] = "america/chicago";
  Timezone2["AmericaChihuahua"] = "america/chihuahua";
  Timezone2["AmericaCiudadJuarez"] = "america/ciudad_juarez";
  Timezone2["AmericaCostaRica"] = "america/costa_rica";
  Timezone2["AmericaCoyhaique"] = "america/coyhaique";
  Timezone2["AmericaCreston"] = "america/creston";
  Timezone2["AmericaCuiaba"] = "america/cuiaba";
  Timezone2["AmericaCuracao"] = "america/curacao";
  Timezone2["AmericaDanmarkshavn"] = "america/danmarkshavn";
  Timezone2["AmericaDawson"] = "america/dawson";
  Timezone2["AmericaDawsonCreek"] = "america/dawson_creek";
  Timezone2["AmericaDenver"] = "america/denver";
  Timezone2["AmericaDetroit"] = "america/detroit";
  Timezone2["AmericaDominica"] = "america/dominica";
  Timezone2["AmericaEdmonton"] = "america/edmonton";
  Timezone2["AmericaEirunepe"] = "america/eirunepe";
  Timezone2["AmericaElSalvador"] = "america/el_salvador";
  Timezone2["AmericaFortNelson"] = "america/fort_nelson";
  Timezone2["AmericaFortaleza"] = "america/fortaleza";
  Timezone2["AmericaGlaceBay"] = "america/glace_bay";
  Timezone2["AmericaGooseBay"] = "america/goose_bay";
  Timezone2["AmericaGrandTurk"] = "america/grand_turk";
  Timezone2["AmericaGrenada"] = "america/grenada";
  Timezone2["AmericaGuadeloupe"] = "america/guadeloupe";
  Timezone2["AmericaGuatemala"] = "america/guatemala";
  Timezone2["AmericaGuayaquil"] = "america/guayaquil";
  Timezone2["AmericaGuyana"] = "america/guyana";
  Timezone2["AmericaHalifax"] = "america/halifax";
  Timezone2["AmericaHavana"] = "america/havana";
  Timezone2["AmericaHermosillo"] = "america/hermosillo";
  Timezone2["AmericaIndianaIndianapolis"] = "america/indiana/indianapolis";
  Timezone2["AmericaIndianaKnox"] = "america/indiana/knox";
  Timezone2["AmericaIndianaMarengo"] = "america/indiana/marengo";
  Timezone2["AmericaIndianaPetersburg"] = "america/indiana/petersburg";
  Timezone2["AmericaIndianaTellCity"] = "america/indiana/tell_city";
  Timezone2["AmericaIndianaVevay"] = "america/indiana/vevay";
  Timezone2["AmericaIndianaVincennes"] = "america/indiana/vincennes";
  Timezone2["AmericaIndianaWinamac"] = "america/indiana/winamac";
  Timezone2["AmericaInuvik"] = "america/inuvik";
  Timezone2["AmericaIqaluit"] = "america/iqaluit";
  Timezone2["AmericaJamaica"] = "america/jamaica";
  Timezone2["AmericaJuneau"] = "america/juneau";
  Timezone2["AmericaKentuckyLouisville"] = "america/kentucky/louisville";
  Timezone2["AmericaKentuckyMonticello"] = "america/kentucky/monticello";
  Timezone2["AmericaKralendijk"] = "america/kralendijk";
  Timezone2["AmericaLaPaz"] = "america/la_paz";
  Timezone2["AmericaLima"] = "america/lima";
  Timezone2["AmericaLosAngeles"] = "america/los_angeles";
  Timezone2["AmericaLowerPrinces"] = "america/lower_princes";
  Timezone2["AmericaMaceio"] = "america/maceio";
  Timezone2["AmericaManagua"] = "america/managua";
  Timezone2["AmericaManaus"] = "america/manaus";
  Timezone2["AmericaMarigot"] = "america/marigot";
  Timezone2["AmericaMartinique"] = "america/martinique";
  Timezone2["AmericaMatamoros"] = "america/matamoros";
  Timezone2["AmericaMazatlan"] = "america/mazatlan";
  Timezone2["AmericaMenominee"] = "america/menominee";
  Timezone2["AmericaMerida"] = "america/merida";
  Timezone2["AmericaMetlakatla"] = "america/metlakatla";
  Timezone2["AmericaMexicoCity"] = "america/mexico_city";
  Timezone2["AmericaMiquelon"] = "america/miquelon";
  Timezone2["AmericaMoncton"] = "america/moncton";
  Timezone2["AmericaMonterrey"] = "america/monterrey";
  Timezone2["AmericaMontevideo"] = "america/montevideo";
  Timezone2["AmericaMontserrat"] = "america/montserrat";
  Timezone2["AmericaNassau"] = "america/nassau";
  Timezone2["AmericaNewYork"] = "america/new_york";
  Timezone2["AmericaNome"] = "america/nome";
  Timezone2["AmericaNoronha"] = "america/noronha";
  Timezone2["AmericaNorthDakotaBeulah"] = "america/north_dakota/beulah";
  Timezone2["AmericaNorthDakotaCenter"] = "america/north_dakota/center";
  Timezone2["AmericaNorthDakotaNewSalem"] = "america/north_dakota/new_salem";
  Timezone2["AmericaNuuk"] = "america/nuuk";
  Timezone2["AmericaOjinaga"] = "america/ojinaga";
  Timezone2["AmericaPanama"] = "america/panama";
  Timezone2["AmericaParamaribo"] = "america/paramaribo";
  Timezone2["AmericaPhoenix"] = "america/phoenix";
  Timezone2["AmericaPortauprince"] = "america/port-au-prince";
  Timezone2["AmericaPortOfSpain"] = "america/port_of_spain";
  Timezone2["AmericaPortoVelho"] = "america/porto_velho";
  Timezone2["AmericaPuertoRico"] = "america/puerto_rico";
  Timezone2["AmericaPuntaArenas"] = "america/punta_arenas";
  Timezone2["AmericaRankinInlet"] = "america/rankin_inlet";
  Timezone2["AmericaRecife"] = "america/recife";
  Timezone2["AmericaRegina"] = "america/regina";
  Timezone2["AmericaResolute"] = "america/resolute";
  Timezone2["AmericaRioBranco"] = "america/rio_branco";
  Timezone2["AmericaSantarem"] = "america/santarem";
  Timezone2["AmericaSantiago"] = "america/santiago";
  Timezone2["AmericaSantoDomingo"] = "america/santo_domingo";
  Timezone2["AmericaSaoPaulo"] = "america/sao_paulo";
  Timezone2["AmericaScoresbysund"] = "america/scoresbysund";
  Timezone2["AmericaSitka"] = "america/sitka";
  Timezone2["AmericaStBarthelemy"] = "america/st_barthelemy";
  Timezone2["AmericaStJohns"] = "america/st_johns";
  Timezone2["AmericaStKitts"] = "america/st_kitts";
  Timezone2["AmericaStLucia"] = "america/st_lucia";
  Timezone2["AmericaStThomas"] = "america/st_thomas";
  Timezone2["AmericaStVincent"] = "america/st_vincent";
  Timezone2["AmericaSwiftCurrent"] = "america/swift_current";
  Timezone2["AmericaTegucigalpa"] = "america/tegucigalpa";
  Timezone2["AmericaThule"] = "america/thule";
  Timezone2["AmericaTijuana"] = "america/tijuana";
  Timezone2["AmericaToronto"] = "america/toronto";
  Timezone2["AmericaTortola"] = "america/tortola";
  Timezone2["AmericaVancouver"] = "america/vancouver";
  Timezone2["AmericaWhitehorse"] = "america/whitehorse";
  Timezone2["AmericaWinnipeg"] = "america/winnipeg";
  Timezone2["AmericaYakutat"] = "america/yakutat";
  Timezone2["AntarcticaCasey"] = "antarctica/casey";
  Timezone2["AntarcticaDavis"] = "antarctica/davis";
  Timezone2["AntarcticaDumontdurville"] = "antarctica/dumontdurville";
  Timezone2["AntarcticaMacquarie"] = "antarctica/macquarie";
  Timezone2["AntarcticaMawson"] = "antarctica/mawson";
  Timezone2["AntarcticaMcmurdo"] = "antarctica/mcmurdo";
  Timezone2["AntarcticaPalmer"] = "antarctica/palmer";
  Timezone2["AntarcticaRothera"] = "antarctica/rothera";
  Timezone2["AntarcticaSyowa"] = "antarctica/syowa";
  Timezone2["AntarcticaTroll"] = "antarctica/troll";
  Timezone2["AntarcticaVostok"] = "antarctica/vostok";
  Timezone2["ArcticLongyearbyen"] = "arctic/longyearbyen";
  Timezone2["AsiaAden"] = "asia/aden";
  Timezone2["AsiaAlmaty"] = "asia/almaty";
  Timezone2["AsiaAmman"] = "asia/amman";
  Timezone2["AsiaAnadyr"] = "asia/anadyr";
  Timezone2["AsiaAqtau"] = "asia/aqtau";
  Timezone2["AsiaAqtobe"] = "asia/aqtobe";
  Timezone2["AsiaAshgabat"] = "asia/ashgabat";
  Timezone2["AsiaAtyrau"] = "asia/atyrau";
  Timezone2["AsiaBaghdad"] = "asia/baghdad";
  Timezone2["AsiaBahrain"] = "asia/bahrain";
  Timezone2["AsiaBaku"] = "asia/baku";
  Timezone2["AsiaBangkok"] = "asia/bangkok";
  Timezone2["AsiaBarnaul"] = "asia/barnaul";
  Timezone2["AsiaBeirut"] = "asia/beirut";
  Timezone2["AsiaBishkek"] = "asia/bishkek";
  Timezone2["AsiaBrunei"] = "asia/brunei";
  Timezone2["AsiaChita"] = "asia/chita";
  Timezone2["AsiaColombo"] = "asia/colombo";
  Timezone2["AsiaDamascus"] = "asia/damascus";
  Timezone2["AsiaDhaka"] = "asia/dhaka";
  Timezone2["AsiaDili"] = "asia/dili";
  Timezone2["AsiaDubai"] = "asia/dubai";
  Timezone2["AsiaDushanbe"] = "asia/dushanbe";
  Timezone2["AsiaFamagusta"] = "asia/famagusta";
  Timezone2["AsiaGaza"] = "asia/gaza";
  Timezone2["AsiaHebron"] = "asia/hebron";
  Timezone2["AsiaHoChiMinh"] = "asia/ho_chi_minh";
  Timezone2["AsiaHongKong"] = "asia/hong_kong";
  Timezone2["AsiaHovd"] = "asia/hovd";
  Timezone2["AsiaIrkutsk"] = "asia/irkutsk";
  Timezone2["AsiaJakarta"] = "asia/jakarta";
  Timezone2["AsiaJayapura"] = "asia/jayapura";
  Timezone2["AsiaJerusalem"] = "asia/jerusalem";
  Timezone2["AsiaKabul"] = "asia/kabul";
  Timezone2["AsiaKamchatka"] = "asia/kamchatka";
  Timezone2["AsiaKarachi"] = "asia/karachi";
  Timezone2["AsiaKathmandu"] = "asia/kathmandu";
  Timezone2["AsiaKhandyga"] = "asia/khandyga";
  Timezone2["AsiaKolkata"] = "asia/kolkata";
  Timezone2["AsiaKrasnoyarsk"] = "asia/krasnoyarsk";
  Timezone2["AsiaKualaLumpur"] = "asia/kuala_lumpur";
  Timezone2["AsiaKuching"] = "asia/kuching";
  Timezone2["AsiaKuwait"] = "asia/kuwait";
  Timezone2["AsiaMacau"] = "asia/macau";
  Timezone2["AsiaMagadan"] = "asia/magadan";
  Timezone2["AsiaMakassar"] = "asia/makassar";
  Timezone2["AsiaManila"] = "asia/manila";
  Timezone2["AsiaMuscat"] = "asia/muscat";
  Timezone2["AsiaNicosia"] = "asia/nicosia";
  Timezone2["AsiaNovokuznetsk"] = "asia/novokuznetsk";
  Timezone2["AsiaNovosibirsk"] = "asia/novosibirsk";
  Timezone2["AsiaOmsk"] = "asia/omsk";
  Timezone2["AsiaOral"] = "asia/oral";
  Timezone2["AsiaPhnomPenh"] = "asia/phnom_penh";
  Timezone2["AsiaPontianak"] = "asia/pontianak";
  Timezone2["AsiaPyongyang"] = "asia/pyongyang";
  Timezone2["AsiaQatar"] = "asia/qatar";
  Timezone2["AsiaQostanay"] = "asia/qostanay";
  Timezone2["AsiaQyzylorda"] = "asia/qyzylorda";
  Timezone2["AsiaRiyadh"] = "asia/riyadh";
  Timezone2["AsiaSakhalin"] = "asia/sakhalin";
  Timezone2["AsiaSamarkand"] = "asia/samarkand";
  Timezone2["AsiaSeoul"] = "asia/seoul";
  Timezone2["AsiaShanghai"] = "asia/shanghai";
  Timezone2["AsiaSingapore"] = "asia/singapore";
  Timezone2["AsiaSrednekolymsk"] = "asia/srednekolymsk";
  Timezone2["AsiaTaipei"] = "asia/taipei";
  Timezone2["AsiaTashkent"] = "asia/tashkent";
  Timezone2["AsiaTbilisi"] = "asia/tbilisi";
  Timezone2["AsiaTehran"] = "asia/tehran";
  Timezone2["AsiaThimphu"] = "asia/thimphu";
  Timezone2["AsiaTokyo"] = "asia/tokyo";
  Timezone2["AsiaTomsk"] = "asia/tomsk";
  Timezone2["AsiaUlaanbaatar"] = "asia/ulaanbaatar";
  Timezone2["AsiaUrumqi"] = "asia/urumqi";
  Timezone2["AsiaUstnera"] = "asia/ust-nera";
  Timezone2["AsiaVientiane"] = "asia/vientiane";
  Timezone2["AsiaVladivostok"] = "asia/vladivostok";
  Timezone2["AsiaYakutsk"] = "asia/yakutsk";
  Timezone2["AsiaYangon"] = "asia/yangon";
  Timezone2["AsiaYekaterinburg"] = "asia/yekaterinburg";
  Timezone2["AsiaYerevan"] = "asia/yerevan";
  Timezone2["AtlanticAzores"] = "atlantic/azores";
  Timezone2["AtlanticBermuda"] = "atlantic/bermuda";
  Timezone2["AtlanticCanary"] = "atlantic/canary";
  Timezone2["AtlanticCapeVerde"] = "atlantic/cape_verde";
  Timezone2["AtlanticFaroe"] = "atlantic/faroe";
  Timezone2["AtlanticMadeira"] = "atlantic/madeira";
  Timezone2["AtlanticReykjavik"] = "atlantic/reykjavik";
  Timezone2["AtlanticSouthGeorgia"] = "atlantic/south_georgia";
  Timezone2["AtlanticStHelena"] = "atlantic/st_helena";
  Timezone2["AtlanticStanley"] = "atlantic/stanley";
  Timezone2["AustraliaAdelaide"] = "australia/adelaide";
  Timezone2["AustraliaBrisbane"] = "australia/brisbane";
  Timezone2["AustraliaBrokenHill"] = "australia/broken_hill";
  Timezone2["AustraliaDarwin"] = "australia/darwin";
  Timezone2["AustraliaEucla"] = "australia/eucla";
  Timezone2["AustraliaHobart"] = "australia/hobart";
  Timezone2["AustraliaLindeman"] = "australia/lindeman";
  Timezone2["AustraliaLordHowe"] = "australia/lord_howe";
  Timezone2["AustraliaMelbourne"] = "australia/melbourne";
  Timezone2["AustraliaPerth"] = "australia/perth";
  Timezone2["AustraliaSydney"] = "australia/sydney";
  Timezone2["EuropeAmsterdam"] = "europe/amsterdam";
  Timezone2["EuropeAndorra"] = "europe/andorra";
  Timezone2["EuropeAstrakhan"] = "europe/astrakhan";
  Timezone2["EuropeAthens"] = "europe/athens";
  Timezone2["EuropeBelgrade"] = "europe/belgrade";
  Timezone2["EuropeBerlin"] = "europe/berlin";
  Timezone2["EuropeBratislava"] = "europe/bratislava";
  Timezone2["EuropeBrussels"] = "europe/brussels";
  Timezone2["EuropeBucharest"] = "europe/bucharest";
  Timezone2["EuropeBudapest"] = "europe/budapest";
  Timezone2["EuropeBusingen"] = "europe/busingen";
  Timezone2["EuropeChisinau"] = "europe/chisinau";
  Timezone2["EuropeCopenhagen"] = "europe/copenhagen";
  Timezone2["EuropeDublin"] = "europe/dublin";
  Timezone2["EuropeGibraltar"] = "europe/gibraltar";
  Timezone2["EuropeGuernsey"] = "europe/guernsey";
  Timezone2["EuropeHelsinki"] = "europe/helsinki";
  Timezone2["EuropeIsleOfMan"] = "europe/isle_of_man";
  Timezone2["EuropeIstanbul"] = "europe/istanbul";
  Timezone2["EuropeJersey"] = "europe/jersey";
  Timezone2["EuropeKaliningrad"] = "europe/kaliningrad";
  Timezone2["EuropeKirov"] = "europe/kirov";
  Timezone2["EuropeKyiv"] = "europe/kyiv";
  Timezone2["EuropeLisbon"] = "europe/lisbon";
  Timezone2["EuropeLjubljana"] = "europe/ljubljana";
  Timezone2["EuropeLondon"] = "europe/london";
  Timezone2["EuropeLuxembourg"] = "europe/luxembourg";
  Timezone2["EuropeMadrid"] = "europe/madrid";
  Timezone2["EuropeMalta"] = "europe/malta";
  Timezone2["EuropeMariehamn"] = "europe/mariehamn";
  Timezone2["EuropeMinsk"] = "europe/minsk";
  Timezone2["EuropeMonaco"] = "europe/monaco";
  Timezone2["EuropeMoscow"] = "europe/moscow";
  Timezone2["EuropeOslo"] = "europe/oslo";
  Timezone2["EuropeParis"] = "europe/paris";
  Timezone2["EuropePodgorica"] = "europe/podgorica";
  Timezone2["EuropePrague"] = "europe/prague";
  Timezone2["EuropeRiga"] = "europe/riga";
  Timezone2["EuropeRome"] = "europe/rome";
  Timezone2["EuropeSamara"] = "europe/samara";
  Timezone2["EuropeSanMarino"] = "europe/san_marino";
  Timezone2["EuropeSarajevo"] = "europe/sarajevo";
  Timezone2["EuropeSaratov"] = "europe/saratov";
  Timezone2["EuropeSimferopol"] = "europe/simferopol";
  Timezone2["EuropeSkopje"] = "europe/skopje";
  Timezone2["EuropeSofia"] = "europe/sofia";
  Timezone2["EuropeStockholm"] = "europe/stockholm";
  Timezone2["EuropeTallinn"] = "europe/tallinn";
  Timezone2["EuropeTirane"] = "europe/tirane";
  Timezone2["EuropeUlyanovsk"] = "europe/ulyanovsk";
  Timezone2["EuropeVaduz"] = "europe/vaduz";
  Timezone2["EuropeVatican"] = "europe/vatican";
  Timezone2["EuropeVienna"] = "europe/vienna";
  Timezone2["EuropeVilnius"] = "europe/vilnius";
  Timezone2["EuropeVolgograd"] = "europe/volgograd";
  Timezone2["EuropeWarsaw"] = "europe/warsaw";
  Timezone2["EuropeZagreb"] = "europe/zagreb";
  Timezone2["EuropeZurich"] = "europe/zurich";
  Timezone2["IndianAntananarivo"] = "indian/antananarivo";
  Timezone2["IndianChagos"] = "indian/chagos";
  Timezone2["IndianChristmas"] = "indian/christmas";
  Timezone2["IndianCocos"] = "indian/cocos";
  Timezone2["IndianComoro"] = "indian/comoro";
  Timezone2["IndianKerguelen"] = "indian/kerguelen";
  Timezone2["IndianMahe"] = "indian/mahe";
  Timezone2["IndianMaldives"] = "indian/maldives";
  Timezone2["IndianMauritius"] = "indian/mauritius";
  Timezone2["IndianMayotte"] = "indian/mayotte";
  Timezone2["IndianReunion"] = "indian/reunion";
  Timezone2["PacificApia"] = "pacific/apia";
  Timezone2["PacificAuckland"] = "pacific/auckland";
  Timezone2["PacificBougainville"] = "pacific/bougainville";
  Timezone2["PacificChatham"] = "pacific/chatham";
  Timezone2["PacificChuuk"] = "pacific/chuuk";
  Timezone2["PacificEaster"] = "pacific/easter";
  Timezone2["PacificEfate"] = "pacific/efate";
  Timezone2["PacificFakaofo"] = "pacific/fakaofo";
  Timezone2["PacificFiji"] = "pacific/fiji";
  Timezone2["PacificFunafuti"] = "pacific/funafuti";
  Timezone2["PacificGalapagos"] = "pacific/galapagos";
  Timezone2["PacificGambier"] = "pacific/gambier";
  Timezone2["PacificGuadalcanal"] = "pacific/guadalcanal";
  Timezone2["PacificGuam"] = "pacific/guam";
  Timezone2["PacificHonolulu"] = "pacific/honolulu";
  Timezone2["PacificKanton"] = "pacific/kanton";
  Timezone2["PacificKiritimati"] = "pacific/kiritimati";
  Timezone2["PacificKosrae"] = "pacific/kosrae";
  Timezone2["PacificKwajalein"] = "pacific/kwajalein";
  Timezone2["PacificMajuro"] = "pacific/majuro";
  Timezone2["PacificMarquesas"] = "pacific/marquesas";
  Timezone2["PacificMidway"] = "pacific/midway";
  Timezone2["PacificNauru"] = "pacific/nauru";
  Timezone2["PacificNiue"] = "pacific/niue";
  Timezone2["PacificNorfolk"] = "pacific/norfolk";
  Timezone2["PacificNoumea"] = "pacific/noumea";
  Timezone2["PacificPagoPago"] = "pacific/pago_pago";
  Timezone2["PacificPalau"] = "pacific/palau";
  Timezone2["PacificPitcairn"] = "pacific/pitcairn";
  Timezone2["PacificPohnpei"] = "pacific/pohnpei";
  Timezone2["PacificPortMoresby"] = "pacific/port_moresby";
  Timezone2["PacificRarotonga"] = "pacific/rarotonga";
  Timezone2["PacificSaipan"] = "pacific/saipan";
  Timezone2["PacificTahiti"] = "pacific/tahiti";
  Timezone2["PacificTarawa"] = "pacific/tarawa";
  Timezone2["PacificTongatapu"] = "pacific/tongatapu";
  Timezone2["PacificWake"] = "pacific/wake";
  Timezone2["PacificWallis"] = "pacific/wallis";
  Timezone2["Utc"] = "utc";
})(Timezone || (Timezone = {}));
var Output;
(function(Output2) {
  Output2["Jpg"] = "jpg";
  Output2["Jpeg"] = "jpeg";
  Output2["Png"] = "png";
  Output2["Webp"] = "webp";
  Output2["Heic"] = "heic";
  Output2["Avif"] = "avif";
  Output2["Gif"] = "gif";
})(Output || (Output = {}));
var ExecutionMethod;
(function(ExecutionMethod2) {
  ExecutionMethod2["GET"] = "GET";
  ExecutionMethod2["POST"] = "POST";
  ExecutionMethod2["PUT"] = "PUT";
  ExecutionMethod2["PATCH"] = "PATCH";
  ExecutionMethod2["DELETE"] = "DELETE";
  ExecutionMethod2["OPTIONS"] = "OPTIONS";
  ExecutionMethod2["HEAD"] = "HEAD";
})(ExecutionMethod || (ExecutionMethod = {}));
var ImageGravity;
(function(ImageGravity2) {
  ImageGravity2["Center"] = "center";
  ImageGravity2["Topleft"] = "top-left";
  ImageGravity2["Top"] = "top";
  ImageGravity2["Topright"] = "top-right";
  ImageGravity2["Left"] = "left";
  ImageGravity2["Right"] = "right";
  ImageGravity2["Bottomleft"] = "bottom-left";
  ImageGravity2["Bottom"] = "bottom";
  ImageGravity2["Bottomright"] = "bottom-right";
})(ImageGravity || (ImageGravity = {}));
var ImageFormat;
(function(ImageFormat2) {
  ImageFormat2["Jpg"] = "jpg";
  ImageFormat2["Jpeg"] = "jpeg";
  ImageFormat2["Png"] = "png";
  ImageFormat2["Webp"] = "webp";
  ImageFormat2["Heic"] = "heic";
  ImageFormat2["Avif"] = "avif";
  ImageFormat2["Gif"] = "gif";
})(ImageFormat || (ImageFormat = {}));
var ExecutionTrigger;
(function(ExecutionTrigger2) {
  ExecutionTrigger2["Http"] = "http";
  ExecutionTrigger2["Schedule"] = "schedule";
  ExecutionTrigger2["Event"] = "event";
})(ExecutionTrigger || (ExecutionTrigger = {}));
var ExecutionStatus;
(function(ExecutionStatus2) {
  ExecutionStatus2["Waiting"] = "waiting";
  ExecutionStatus2["Processing"] = "processing";
  ExecutionStatus2["Completed"] = "completed";
  ExecutionStatus2["Failed"] = "failed";
  ExecutionStatus2["Scheduled"] = "scheduled";
})(ExecutionStatus || (ExecutionStatus = {}));
const sdk = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Account,
  AppwriteException,
  get AuthenticationFactor() {
    return AuthenticationFactor;
  },
  get AuthenticatorType() {
    return AuthenticatorType;
  },
  Avatars,
  get Browser() {
    return Browser;
  },
  Client,
  get Condition() {
    return Condition;
  },
  get CreditCard() {
    return CreditCard;
  },
  Databases,
  get ExecutionMethod() {
    return ExecutionMethod;
  },
  get ExecutionStatus() {
    return ExecutionStatus;
  },
  get ExecutionTrigger() {
    return ExecutionTrigger;
  },
  get Flag() {
    return Flag;
  },
  Functions,
  Graphql,
  ID,
  get ImageFormat() {
    return ImageFormat;
  },
  get ImageGravity() {
    return ImageGravity;
  },
  Locale,
  Messaging,
  get OAuthProvider() {
    return OAuthProvider;
  },
  Operator,
  get Output() {
    return Output;
  },
  Permission,
  Query,
  Realtime,
  Role,
  Storage,
  TablesDB,
  Teams,
  get Theme() {
    return Theme;
  },
  get Timezone() {
    return Timezone;
  }
}, Symbol.toStringTag, { value: "Module" }));
const client = new Client();
const endpoint = "http://192.168.88.212/v1";
const projectId = "tixo";
client.setEndpoint(endpoint).setProject(projectId);
const account = new Account(client);
const tablesDB = new TablesDB(client);
const functions = new Functions(client);
const realtime = {};
const appwriteClient = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ID,
  account,
  client,
  functions,
  realtime,
  tablesDB
}, Symbol.toStringTag, { value: "Module" }));
var LoginStatus = /* @__PURE__ */ ((LoginStatus2) => {
  LoginStatus2[LoginStatus2["OK"] = 0] = "OK";
  LoginStatus2[LoginStatus2["INVALID_CREDENTIALS"] = 1] = "INVALID_CREDENTIALS";
  LoginStatus2[LoginStatus2["USER_ALREADY_EXISTS"] = 2] = "USER_ALREADY_EXISTS";
  LoginStatus2[LoginStatus2["USER_BLOCKED"] = 3] = "USER_BLOCKED";
  LoginStatus2[LoginStatus2["RATE_LIMIT_EXCEEDED"] = 4] = "RATE_LIMIT_EXCEEDED";
  LoginStatus2[LoginStatus2["INVALID_FORMAT"] = 5] = "INVALID_FORMAT";
  LoginStatus2[LoginStatus2["PASSWORD_RECENTLY_USED"] = 6] = "PASSWORD_RECENTLY_USED";
  LoginStatus2[LoginStatus2["UNKNOWN_ERROR"] = 7] = "UNKNOWN_ERROR";
  return LoginStatus2;
})(LoginStatus || {});
class AuthService {
  handleAuthError(e, mapping) {
    if (e instanceof AppwriteException) {
      return {
        status: mapping[e.type] ?? 7,
        message: e.message
      };
    }
    return {
      status: 7,
      message: e instanceof Error ? e.message : "Unknown error"
    };
  }
  /**
   * Registers a new user and logs them in.
   *
   * @param email The user's email.
   * @param password The user's password.
   * @param name The user's name.
   * @returns A Promise that resolves with the AuthResult.
   */
  async register(email, password, name) {
    try {
      const userId = name.toLowerCase().replace(/[^a-z0-9\._-]/g, "-");
      await account.create(userId, email, password, name);
      return await this.login(email, password);
    } catch (e) {
      return this.handleAuthError(e, {
        user_already_exists: 2,
        user_invalid_email: 5,
        user_invalid_password: 5,
        general_rate_limit_exceeded: 4
        /* RATE_LIMIT_EXCEEDED */
      });
    }
  }
  /**
   * Authenticates a user with the backend using email and password to obtain a cookie.
   *
   * @param email The user's email.
   * @param password The user's password.
   * @returns A Promise that resolves with the authentication cookie string, or rejects on failure.
   */
  async login(email, password) {
    try {
      await account.createEmailPasswordSession({
        email,
        password
      });
      return {
        status: 0
        /* OK */
      };
    } catch (e) {
      return this.handleAuthError(e, {
        user_invalid_credentials: 1,
        user_blocked: 3,
        general_rate_limit_exceeded: 4
        /* RATE_LIMIT_EXCEEDED */
      });
    }
  }
  /**
   * Authenticates the current session cookie with the backend.
   *
   * @returns A Promise that resolves to true if the session is valid, false otherwise.
   */
  async authenticate() {
    try {
      await account.get();
      return true;
    } catch (e) {
      if (e instanceof AppwriteException && e.type === "general_rate_limit_exceeded") {
        return false;
      }
      return false;
    }
  }
  /**
   * Returns the current authenticated user.
   */
  async getCurrentUser() {
    try {
      return await account.get();
    } catch {
      return null;
    }
  }
  /**
   * Fetches full user details via backend function and ensures registration.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async getUserDetails() {
    try {
      const execution = await functions.createExecution({
        functionId: "app-handler",
        xpath: "/users/me",
        method: ExecutionMethod.GET
      });
      if (execution.status === "completed") {
        try {
          const response = JSON.parse(execution.responseBody);
          return response.user || null;
        } catch (e) {
          console.error("Failed to parse getUserDetails response", e);
          return null;
        }
      }
      return null;
    } catch {
      return null;
    }
  }
  /**
   * Authenticates a user anonymously.
   *
   * @returns A Promise that resolves with the AuthResult.
   */
  async loginAnonymously() {
    try {
      await account.createAnonymousSession();
      return {
        status: 0
        /* OK */
      };
    } catch (e) {
      return this.handleAuthError(e, {
        general_rate_limit_exceeded: 4
        /* RATE_LIMIT_EXCEEDED */
      });
    }
  }
  /**
   * Logs out the current user by deleting the current session.
   */
  async logout() {
    try {
      await account.deleteSession("current");
      return true;
    } catch {
      return false;
    }
  }
  /**
   * Fetches the rating history for the current user.
   */
  async getRatingHistory(userId) {
    try {
      const response = await tablesDB.listRows({
        databaseId: "tixo",
        tableId: "rating",
        queries: [
          Query.equal("userId", userId),
          Query.orderAsc("$createdAt"),
          Query.limit(100)
        ]
      });
      return response.rows;
    } catch (e) {
      console.error("Failed to fetch rating history", e);
      return [];
    }
  }
  /**
   * Initiates Google OAuth2 login.
   */
  async loginWithGoogle(redirect) {
    return;
  }
}
const auth = new AuthService();
const useAuthStore = defineStore("auth", () => {
  const user = ref(null);
  const isLoginModalOpen = ref(false);
  const redirectAfterLogin = ref(null);
  const isLoggedIn = computed(() => !!user.value);
  async function checkAuth() {
    try {
      const currentUser = await auth.getCurrentUser();
      user.value = currentUser;
      if (currentUser) {
        await auth.getUserDetails();
      }
      return !!currentUser;
    } catch {
      user.value = null;
      return false;
    }
  }
  function openLoginModal(redirect) {
    redirectAfterLogin.value = redirect || null;
    isLoginModalOpen.value = true;
  }
  function closeLoginModal() {
    isLoginModalOpen.value = false;
    redirectAfterLogin.value = null;
  }
  async function logout() {
    await auth.logout();
    user.value = null;
  }
  return {
    user,
    isLoggedIn,
    isLoginModalOpen,
    redirectAfterLogin,
    checkAuth,
    openLoginModal,
    closeLoginModal,
    logout
  };
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "LoginModal",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const router = useRouter();
    const email = ref("");
    const password = ref("");
    const name = ref("");
    const isRegister = ref(false);
    const loading = ref(false);
    const error = ref(null);
    const isLocalhost = ref(false);
    const handleGoogleLogin = async () => {
      if (isLocalhost.value) return;
      loading.value = true;
      error.value = null;
      try {
        const redirect = authStore.redirectAfterLogin || "/";
        await auth.loginWithGoogle(redirect);
      } catch (e) {
        console.error("Google login error:", e);
        error.value = "Failed to initiate Google login";
        loading.value = false;
      }
    };
    const loginAnonymously = async () => {
      loading.value = true;
      error.value = null;
      try {
        const result = await auth.loginAnonymously();
        if (result.status === LoginStatus.OK) {
          await authStore.checkAuth();
          const redirect = authStore.redirectAfterLogin;
          authStore.closeLoginModal();
          if (redirect) {
            router.push(redirect);
          }
        } else {
          error.value = `Guest Protocol Failure: ${result.message}`;
        }
      } catch (e) {
        console.error("Anonymous login error:", e);
        error.value = "Connection failure";
      } finally {
        loading.value = false;
      }
    };
    const closeModal = () => {
      authStore.closeLoginModal();
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(authStore).isLoginModalOpen) {
          _push2(`<div class="fixed inset-0 z-[100] flex items-center justify-center bg-void/80 backdrop-blur-md px-4" data-v-ae42cb97><div class="w-full max-w-md relative animate-in zoom-in duration-300" data-v-ae42cb97>`);
          _push2(ssrRenderComponent(BaseButton, {
            size: "sm",
            variant: "ghost",
            class: "absolute -top-12 right-0 w-10 h-10 rounded-full z-10",
            onClick: closeModal
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<i class="pi pi-times hover:rotate-90 transition-transform" data-v-ae42cb97${_scopeId}></i>`);
              } else {
                return [
                  createVNode("i", { class: "pi pi-times hover:rotate-90 transition-transform" })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`<div class="space-y-8" data-v-ae42cb97><div class="text-center space-y-4" data-v-ae42cb97><div class="inline-flex items-center gap-3 px-4 py-1 rounded-full glass border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.3em] mb-4" data-v-ae42cb97> Security Protocol Active </div><h1 class="text-5xl font-black text-app-text tracking-tighter uppercase italic leading-none" data-v-ae42cb97> Tixo<span class="text-indigo-500" data-v-ae42cb97>.</span></h1></div><div class="glass border-glass-border rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden group" data-v-ae42cb97><div class="absolute -top-24 -right-24 w-48 h-48 bg-indigo-600/10 blur-3xl rounded-full transition-all duration-1000 group-hover:bg-indigo-600/20" data-v-ae42cb97></div><form class="space-y-6 relative z-10" data-v-ae42cb97>`);
          if (isRegister.value) {
            _push2(`<div class="space-y-2" data-v-ae42cb97><label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-30 ml-4" data-v-ae42cb97>Name</label><input${ssrRenderAttr("value", name.value)} type="text" required placeholder="Operator Name" class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/50 transition-all text-sm mono" data-v-ae42cb97></div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="space-y-2" data-v-ae42cb97><label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-30 ml-4" data-v-ae42cb97>Identifier</label><input${ssrRenderAttr("value", email.value)} type="email" required placeholder="operator@tixo.net" class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/50 transition-all text-sm mono" data-v-ae42cb97></div><div class="space-y-2" data-v-ae42cb97><label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-30 ml-4" data-v-ae42cb97>Access Key</label><input${ssrRenderAttr("value", password.value)} type="password" required placeholder="••••••••" class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/50 transition-all text-sm mono" data-v-ae42cb97></div>`);
          if (error.value) {
            _push2(`<div class="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest text-center animate-shake" data-v-ae42cb97>${ssrInterpolate(error.value)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(ssrRenderComponent(BaseButton, {
            type: "submit",
            disabled: loading.value,
            size: "lg",
            variant: "primary",
            block: "",
            loading: loading.value
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(isRegister.value ? "Commission Account" : "Authorize")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(isRegister.value ? "Commission Account" : "Authorize"), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`<div class="text-center" data-v-ae42cb97>`);
          _push2(ssrRenderComponent(BaseButton, {
            type: "button",
            variant: "ghost",
            size: "sm",
            onClick: ($event) => isRegister.value = !isRegister.value,
            class: "text-app-text-muted opacity-20 hover:opacity-40 transition-all font-black uppercase tracking-[0.2em] !bg-transparent"
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`${ssrInterpolate(isRegister.value ? "Already commissioned? Access Protocol" : "New operator? Request Commission")}`);
              } else {
                return [
                  createTextVNode(toDisplayString(isRegister.value ? "Already commissioned? Access Protocol" : "New operator? Request Commission"), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div></form><div class="relative z-10 mt-8 space-y-6" data-v-ae42cb97><div class="flex items-center gap-4" data-v-ae42cb97><div class="h-[1px] flex-1 bg-glass-border" data-v-ae42cb97></div><span class="text-[9px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-10" data-v-ae42cb97>External Access</span><div class="h-[1px] flex-1 bg-glass-border" data-v-ae42cb97></div></div>`);
          _push2(ssrRenderComponent(BaseButton, {
            variant: "secondary",
            size: "md",
            block: "",
            disabled: loading.value || isLocalhost.value,
            loading: loading.value,
            "icon-left": "pi pi-google",
            onClick: handleGoogleLogin,
            class: [
              "transition-all",
              isLocalhost.value ? "opacity-20 grayscale cursor-not-allowed pointer-events-none" : "text-app-text-muted opacity-40 hover:opacity-100 hover:text-app-text"
            ]
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<span data-v-ae42cb97${_scopeId}>${ssrInterpolate(isLocalhost.value ? "Google (Cloud Only)" : "Google Protocol")}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(isLocalhost.value ? "Google (Cloud Only)" : "Google Protocol"), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(BaseButton, {
            variant: "secondary",
            size: "md",
            block: "",
            disabled: loading.value,
            loading: loading.value,
            "icon-left": "pi pi-user-plus",
            onClick: loginAnonymously,
            class: "text-app-text-muted opacity-40 hover:opacity-100 hover:text-app-text"
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<span data-v-ae42cb97${_scopeId}>Guest Protocol</span>`);
              } else {
                return [
                  createVNode("span", null, "Guest Protocol")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div></div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoginModal.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LoginModal = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-ae42cb97"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "app",
  __ssrInlineRender: true,
  setup(__props) {
    useThemeStore();
    const config = /* @__PURE__ */ useRuntimeConfig();
    const route = useRoute();
    useHead({
      titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk} | Tixo - Ultimate Tic-Tac-Toe` : "Tixo - Ultimate Tic-Tac-Toe";
      },
      htmlAttrs: {
        lang: "en"
      },
      link: [
        {
          rel: "canonical",
          href: () => `${config.public.siteUrl}${route.path}`
        }
      ],
      script: [
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-Y7EWYYGQ6H"
        },
        {
          innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Y7EWYYGQ6H');
      `,
          type: "text/javascript"
        }
      ]
    });
    useSeoMeta({
      ogTitle: "Tixo - Ultimate Tic-Tac-Toe",
      description: "Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy. Precision, logic, and cold-blooded tactics.",
      ogDescription: "Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy. Precision, logic, and cold-blooded tactics.",
      ogImage: `${config.public.siteUrl}/og-image.png`,
      ogType: "website",
      twitterCard: "summary_large_image",
      twitterTitle: "Tixo - Ultimate Tic-Tac-Toe",
      twitterDescription: "Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy.",
      twitterImage: `${config.public.siteUrl}/og-image.png`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(LoginModal, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_NuxtPage),
              createVNode(LoginModal)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    const status = Number(_error.statusCode || 500);
    const is404 = status === 404;
    const statusText = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-r0aWn0Ca.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-D2JnY-nW.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ status: unref(status), statusText: unref(statusText), statusCode: unref(status), statusMessage: unref(statusText), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = /* @__PURE__ */ useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(_sfc_main$2), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error ||= createError(error);
    }
    if (ssrContext && (ssrContext["~renderResponse"] || ssrContext._renderResponse)) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry_default = ((ssrContext) => entry(ssrContext));

export { BaseButton as B, ConfirmationEventBus as C, DynamicDialogEventBus as D, ExecutionMethod as E, FilterService as F, PrimeVueService as P, Query as Q, ToastEventBus as T, _export_sfc as _, useSeoMeta as a, useAuthStore as b, useRouter as c, useRoute as d, entry_default as default, __nuxt_component_0 as e, auth as f, useThemeStore as g, __nuxt_component_0$1 as h, functions as i, encodeRoutePath as j, useNuxtApp as k, useRuntimeConfig as l, nuxtLinkDefaults as m, navigateTo as n, defineNuxtRouteMiddleware as o, BaseStyle as p, FilterMatchMode as q, resolveRouteObject as r, FilterOperator as s, tablesDB as t, useHead as u, sdk as v, appwriteClient as w };
