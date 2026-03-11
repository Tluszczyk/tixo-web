import { shallowReactive, reactive, effectScope, getCurrentScope, hasInjectionContext, getCurrentInstance, inject, toRef, shallowRef, isReadonly, defineComponent, createElementBlock, provide, cloneVNode, h, isRef, isShallow, isReactive, toRaw, defineAsyncComponent, ref, readonly, nextTick, watch, markRaw, computed, unref, Suspense, mergeProps, Fragment, useSSRContext, withCtx, createVNode, createTextVNode, toDisplayString, onErrorCaptured, onServerPrefetch, resolveDynamicComponent, createApp } from "vue";
import { $fetch } from "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ofetch/dist/node.mjs";
import { baseURL } from "#internal/nuxt/paths";
import { createHooks } from "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/hookable/dist/index.mjs";
import { getContext, executeAsync } from "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unctx/dist/index.mjs";
import { sanitizeStatusCode, createError as createError$1 } from "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/h3/dist/index.mjs";
import { shouldHydrate, createPinia, setActivePinia, defineStore } from "pinia";
import { defu } from "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/defu/dist/defu.mjs";
import { START_LOCATION, createMemoryHistory, createRouter, useRoute as useRoute$1, RouterView } from "vue-router";
import { hasProtocol, joinURL, parseURL, encodePath, decodePath, withQuery, isScriptProtocol } from "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ufo/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/klona/dist/index.mjs";
import { useHead as useHead$1, useSeoMeta as useSeoMeta$1, headSymbol } from "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@unhead/vue/dist/index.mjs";
import { EventBus } from "@primeuix/utils/eventbus";
import { Theme, css as css$1, dt, ThemeService } from "@primeuix/styled";
import { mergeKeys } from "@primeuix/utils";
import { equals, removeAccents, resolveFieldData, resolve, minifyCSS, isNotEmpty } from "@primeuix/utils/object";
import { style } from "@primeuix/styles/base";
import { isClient, setAttributes, setAttribute, isExist } from "@primeuix/utils/dom";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderClass, ssrRenderTeleport, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderSuspense, ssrRenderVNode } from "vue/server-renderer";
import { Functions, Account, Client, TablesDB, AppwriteException, ExecutionMethod, Query } from "appwrite";
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
import.meta.url.replace(/\/app\/.*$/, "/");
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
    if (p === "/__sitemap__/style.xsl") {
      r.unshift({ data: $0 });
    }
    if (p === "/sitemap.xml") {
      r.unshift({ data: $0 });
    }
    if (p === "/_nuxt") {
      r.unshift({ data: $0 });
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
    component: () => import("./_nuxt/index-Ba-k070f.js")
  },
  {
    name: "login",
    path: "/login",
    meta: __nuxt_page_meta$7 || {},
    component: () => import("./_nuxt/login-DF1-YkNX.js")
  },
  {
    name: "profile",
    path: "/profile",
    meta: { ...__nuxt_page_meta$6 || {}, ...{ "middleware": "auth" } },
    component: () => import("./_nuxt/profile-DiUFQ7P_.js")
  },
  {
    name: "dashboard",
    path: "/dashboard",
    meta: __nuxt_page_meta$5 || {},
    component: () => import("./_nuxt/dashboard-DI1SaqbJ.js")
  },
  {
    name: "game-id",
    path: "/game/:id()",
    meta: __nuxt_page_meta$4 || {},
    component: () => import("./_nuxt/_id_-CdxRcHl_.js")
  },
  {
    name: "users-id",
    path: "/users/:id()",
    meta: __nuxt_page_meta$3 || {},
    component: () => import("./_nuxt/_id_-CpvLYQAM.js")
  },
  {
    name: "how-to-play",
    path: "/how-to-play",
    meta: __nuxt_page_meta$2 || {},
    component: () => import("./_nuxt/how-to-play-4RFXTKc2.js")
  },
  {
    name: "users",
    path: "/users",
    meta: __nuxt_page_meta$1 || {},
    component: () => import("./_nuxt/index-DqyDSYck.js")
  },
  {
    name: "analysis-id",
    path: "/analysis/:id()",
    meta: __nuxt_page_meta || {},
    component: () => import("./_nuxt/_id_-Bzy5-aNQ.js")
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
  auth: () => import("./_nuxt/auth-D8ub0CLb.js"),
  "dashboard-redirect": () => import("./_nuxt/dashboard-redirect-DuaDkUMf.js")
};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    const history = routerOptions.history?.(routerBase) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
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
      routes
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
const LazyAutoComplete = defineAsyncComponent(() => import("./_nuxt/index-C1FqTMwr.js").then((r) => r["default"] || r.default || r));
const LazyCalendar = defineAsyncComponent(() => import("./_nuxt/index-BMTWcldY.js").then((r) => r["default"] || r.default || r));
const LazyCascadeSelect = defineAsyncComponent(() => import("./_nuxt/index-6QONMWfe.js").then((r) => r["default"] || r.default || r));
const LazyCheckbox = defineAsyncComponent(() => import("./_nuxt/index-DgLCjvdi.js").then((r) => r["default"] || r.default || r));
const LazyCheckboxGroup = defineAsyncComponent(() => import("./_nuxt/index-DV6Kx03Z.js").then((r) => r["default"] || r.default || r));
const LazyChips = defineAsyncComponent(() => import("./_nuxt/index-DAcJnF0w.js").then((r) => r["default"] || r.default || r));
const LazyColorPicker = defineAsyncComponent(() => import("./_nuxt/index-Bt20yTrB.js").then((r) => r["default"] || r.default || r));
const LazyDatePicker = defineAsyncComponent(() => import("./_nuxt/index-DyS007PF.js").then((r) => r["default"] || r.default || r));
const LazyDropdown = defineAsyncComponent(() => import("./_nuxt/index-KrZlWect.js").then((r) => r["default"] || r.default || r));
const LazyFloatLabel = defineAsyncComponent(() => import("./_nuxt/index-BeCwoqtZ.js").then((r) => r["default"] || r.default || r));
const LazyFluid = defineAsyncComponent(() => import("./_nuxt/index-ZPxjNh9g.js").then((r) => r["default"] || r.default || r));
const LazyIconField = defineAsyncComponent(() => import("./_nuxt/index-B2ZpIagv.js").then((r) => r["default"] || r.default || r));
const LazyIftaLabel = defineAsyncComponent(() => import("./_nuxt/index-CuMi-hsl.js").then((r) => r["default"] || r.default || r));
const LazyInputChips = defineAsyncComponent(() => import("./_nuxt/index-CRJ2TJ8I.js").then((r) => r["default"] || r.default || r));
const LazyInputGroup = defineAsyncComponent(() => import("./_nuxt/index-PjJuycxk.js").then((r) => r["default"] || r.default || r));
const LazyInputGroupAddon = defineAsyncComponent(() => import("./_nuxt/index-BX0ICFQQ.js").then((r) => r["default"] || r.default || r));
const LazyInputIcon = defineAsyncComponent(() => import("./_nuxt/index-DD_LE5jY.js").then((r) => r["default"] || r.default || r));
const LazyInputMask = defineAsyncComponent(() => import("./_nuxt/index-Cc9eExKS.js").then((r) => r["default"] || r.default || r));
const LazyInputNumber = defineAsyncComponent(() => import("./_nuxt/index-DLqvo1gg.js").then((r) => r["default"] || r.default || r));
const LazyInputOtp = defineAsyncComponent(() => import("./_nuxt/index-BMNQL34c.js").then((r) => r["default"] || r.default || r));
const LazyInputSwitch = defineAsyncComponent(() => import("./_nuxt/index-kVyw_imW.js").then((r) => r["default"] || r.default || r));
const LazyInputText = defineAsyncComponent(() => import("./_nuxt/index-jz-hRLyR.js").then((r) => r["default"] || r.default || r));
const LazyKnob = defineAsyncComponent(() => import("./_nuxt/index-9Oo4v1dt.js").then((r) => r["default"] || r.default || r));
const LazyListbox = defineAsyncComponent(() => import("./_nuxt/index-BwppWK4w.js").then((r) => r["default"] || r.default || r));
const LazyMultiSelect = defineAsyncComponent(() => import("./_nuxt/index-2M1By7FP.js").then((r) => r["default"] || r.default || r));
const LazyPassword = defineAsyncComponent(() => import("./_nuxt/index-Bh6XbAX6.js").then((r) => r["default"] || r.default || r));
const LazyRadioButton = defineAsyncComponent(() => import("./_nuxt/index-DdCk2Fg_.js").then((r) => r["default"] || r.default || r));
const LazyRadioButtonGroup = defineAsyncComponent(() => import("./_nuxt/index-CJkaf2e9.js").then((r) => r["default"] || r.default || r));
const LazyRating = defineAsyncComponent(() => import("./_nuxt/index-BME3_GMV.js").then((r) => r["default"] || r.default || r));
const LazySelect = defineAsyncComponent(() => import("./_nuxt/index-DuuQKIiB.js").then((r) => r["default"] || r.default || r));
const LazySelectButton = defineAsyncComponent(() => import("./_nuxt/index-D3LuLw5Z.js").then((r) => r["default"] || r.default || r));
const LazySlider = defineAsyncComponent(() => import("./_nuxt/index-CJx7YAVJ.js").then((r) => r["default"] || r.default || r));
const LazyTextarea = defineAsyncComponent(() => import("./_nuxt/index-DSg3XwTa.js").then((r) => r["default"] || r.default || r));
const LazyToggleButton = defineAsyncComponent(() => import("./_nuxt/index-nS0UWGb4.js").then((r) => r["default"] || r.default || r));
const LazyToggleSwitch = defineAsyncComponent(() => import("./_nuxt/index-B3aR_Z2E.js").then((r) => r["default"] || r.default || r));
const LazyTreeSelect = defineAsyncComponent(() => import("./_nuxt/index-CuUEO-U9.js").then((r) => r["default"] || r.default || r));
const LazyButton = defineAsyncComponent(() => import("./_nuxt/index-BCjCnbNO.js").then((r) => r["default"] || r.default || r));
const LazyButtonGroup = defineAsyncComponent(() => import("./_nuxt/index-CTqm2DjK.js").then((r) => r["default"] || r.default || r));
const LazySpeedDial = defineAsyncComponent(() => import("./_nuxt/index-NC1CxGBL.js").then((r) => r["default"] || r.default || r));
const LazySplitButton = defineAsyncComponent(() => import("./_nuxt/index-DCodlfnV.js").then((r) => r["default"] || r.default || r));
const LazyColumn = defineAsyncComponent(() => import("./_nuxt/index-mwOVgQFi.js").then((r) => r["default"] || r.default || r));
const LazyRow = defineAsyncComponent(() => import("./_nuxt/index-DLZfbL-9.js").then((r) => r["default"] || r.default || r));
const LazyColumnGroup = defineAsyncComponent(() => import("./_nuxt/index-D9MoHbXX.js").then((r) => r["default"] || r.default || r));
const LazyDataTable = defineAsyncComponent(() => import("./_nuxt/index-DjGWboSg.js").then((r) => r["default"] || r.default || r));
const LazyDataView = defineAsyncComponent(() => import("./_nuxt/index-BjuGe3Kb.js").then((r) => r["default"] || r.default || r));
const LazyOrderList = defineAsyncComponent(() => import("./_nuxt/index-Dcf8L5rh.js").then((r) => r["default"] || r.default || r));
const LazyOrganizationChart = defineAsyncComponent(() => import("./_nuxt/index-gLH1L391.js").then((r) => r["default"] || r.default || r));
const LazyPaginator = defineAsyncComponent(() => import("./_nuxt/index-Du3YzZNT.js").then((r) => r["default"] || r.default || r));
const LazyPickList = defineAsyncComponent(() => import("./_nuxt/index-M7GDs4Qk.js").then((r) => r["default"] || r.default || r));
const LazyTree = defineAsyncComponent(() => import("./_nuxt/index-ClFj3BEW.js").then((r) => r["default"] || r.default || r));
const LazyTreeTable = defineAsyncComponent(() => import("./_nuxt/index-DYBjpdWH.js").then((r) => r["default"] || r.default || r));
const LazyTimeline = defineAsyncComponent(() => import("./_nuxt/index-CXe3pL0B.js").then((r) => r["default"] || r.default || r));
const LazyVirtualScroller = defineAsyncComponent(() => import("./_nuxt/index-DjSYkxMh.js").then((r) => r["default"] || r.default || r));
const LazyAccordion = defineAsyncComponent(() => import("./_nuxt/index-NVyPUrOx.js").then((r) => r["default"] || r.default || r));
const LazyAccordionPanel = defineAsyncComponent(() => import("./_nuxt/index-BJsWU-fm.js").then((r) => r["default"] || r.default || r));
const LazyAccordionHeader = defineAsyncComponent(() => import("./_nuxt/index-loJZknH2.js").then((r) => r["default"] || r.default || r));
const LazyAccordionContent = defineAsyncComponent(() => import("./_nuxt/index-BNSWkzej.js").then((r) => r["default"] || r.default || r));
const LazyAccordionTab = defineAsyncComponent(() => import("./_nuxt/index-B4FDvtGd.js").then((r) => r["default"] || r.default || r));
const LazyCard = defineAsyncComponent(() => import("./_nuxt/index-DzuX6Eo4.js").then((r) => r["default"] || r.default || r));
const LazyDeferredContent = defineAsyncComponent(() => import("./_nuxt/index-C0wVN4Hs.js").then((r) => r["default"] || r.default || r));
const LazyDivider = defineAsyncComponent(() => import("./_nuxt/index-DkzMKnBJ.js").then((r) => r["default"] || r.default || r));
const LazyFieldset = defineAsyncComponent(() => import("./_nuxt/index-D8mbSy00.js").then((r) => r["default"] || r.default || r));
const LazyPanel = defineAsyncComponent(() => import("./_nuxt/index-BvPRJfqh.js").then((r) => r["default"] || r.default || r));
const LazyScrollPanel = defineAsyncComponent(() => import("./_nuxt/index-BBnunnFk.js").then((r) => r["default"] || r.default || r));
const LazySplitter = defineAsyncComponent(() => import("./_nuxt/index-YIVC7oN8.js").then((r) => r["default"] || r.default || r));
const LazySplitterPanel = defineAsyncComponent(() => import("./_nuxt/index-BJOVrdDw.js").then((r) => r["default"] || r.default || r));
const LazyStepper = defineAsyncComponent(() => import("./_nuxt/index-D8PG9V2E.js").then((r) => r["default"] || r.default || r));
const LazyStepList = defineAsyncComponent(() => import("./_nuxt/index-BaDyrMCq.js").then((r) => r["default"] || r.default || r));
const LazyStep = defineAsyncComponent(() => import("./_nuxt/index-KsQG4MoA.js").then((r) => r["default"] || r.default || r));
const LazyStepItem = defineAsyncComponent(() => import("./_nuxt/index-DtDUCrFk.js").then((r) => r["default"] || r.default || r));
const LazyStepPanels = defineAsyncComponent(() => import("./_nuxt/index-DVMZZPLe.js").then((r) => r["default"] || r.default || r));
const LazyStepPanel = defineAsyncComponent(() => import("./_nuxt/index-B-3hN5YY.js").then((r) => r["default"] || r.default || r));
const LazyTabView = defineAsyncComponent(() => import("./_nuxt/index-CAZzzv-F.js").then((r) => r["default"] || r.default || r));
const LazyTabs = defineAsyncComponent(() => import("./_nuxt/index-BlvF-EDv.js").then((r) => r["default"] || r.default || r));
const LazyTabList = defineAsyncComponent(() => import("./_nuxt/index-v6nNLKpe.js").then((r) => r["default"] || r.default || r));
const LazyTab = defineAsyncComponent(() => import("./_nuxt/index-CLVpxBu3.js").then((r) => r["default"] || r.default || r));
const LazyTabPanels = defineAsyncComponent(() => import("./_nuxt/index-CVCZIVIP.js").then((r) => r["default"] || r.default || r));
const LazyTabPanel = defineAsyncComponent(() => import("./_nuxt/index-CnAauFRb.js").then((r) => r["default"] || r.default || r));
const LazyToolbar = defineAsyncComponent(() => import("./_nuxt/index-BjgbWfXs.js").then((r) => r["default"] || r.default || r));
const LazyConfirmDialog = defineAsyncComponent(() => import("./_nuxt/index-Cr0BOL4-.js").then((r) => r["default"] || r.default || r));
const LazyConfirmPopup = defineAsyncComponent(() => import("./_nuxt/index-CXxSzeZd.js").then((r) => r["default"] || r.default || r));
const LazyDialog = defineAsyncComponent(() => import("./_nuxt/index-I6qq4YSB.js").then((r) => r["default"] || r.default || r));
const LazyDrawer = defineAsyncComponent(() => import("./_nuxt/index-DOrm5QmX.js").then((r) => r["default"] || r.default || r));
const LazyDynamicDialog = defineAsyncComponent(() => import("./_nuxt/index-CjiBDyc6.js").then((r) => r["default"] || r.default || r));
const LazyOverlayPanel = defineAsyncComponent(() => import("./_nuxt/index-Bjhe2xvT.js").then((r) => r["default"] || r.default || r));
const LazyPopover = defineAsyncComponent(() => import("./_nuxt/index-BgBpRhlL.js").then((r) => r["default"] || r.default || r));
const LazyFileUpload = defineAsyncComponent(() => import("./_nuxt/index-CvhFBxao.js").then((r) => r["default"] || r.default || r));
const LazyBreadcrumb = defineAsyncComponent(() => import("./_nuxt/index-Bo_Ekghi.js").then((r) => r["default"] || r.default || r));
const LazyContextMenu = defineAsyncComponent(() => import("./_nuxt/index-DPIhGJum.js").then((r) => r["default"] || r.default || r));
const LazyDock = defineAsyncComponent(() => import("./_nuxt/index-CDSfmaCK.js").then((r) => r["default"] || r.default || r));
const LazyMenu = defineAsyncComponent(() => import("./_nuxt/index-Co9RXYcf.js").then((r) => r["default"] || r.default || r));
const LazyMenubar = defineAsyncComponent(() => import("./_nuxt/index-BSNHDxcn.js").then((r) => r["default"] || r.default || r));
const LazyMegaMenu = defineAsyncComponent(() => import("./_nuxt/index-DwTIf5Ks.js").then((r) => r["default"] || r.default || r));
const LazyPanelMenu = defineAsyncComponent(() => import("./_nuxt/index-BbVO22W2.js").then((r) => r["default"] || r.default || r));
const LazySteps = defineAsyncComponent(() => import("./_nuxt/index-BL5aDgJJ.js").then((r) => r["default"] || r.default || r));
const LazyTabMenu = defineAsyncComponent(() => import("./_nuxt/index-3iwgjqbQ.js").then((r) => r["default"] || r.default || r));
const LazyTieredMenu = defineAsyncComponent(() => import("./_nuxt/index-DomsKdMF.js").then((r) => r["default"] || r.default || r));
const LazyMessage = defineAsyncComponent(() => import("./_nuxt/index-CW88VtJ7.js").then((r) => r["default"] || r.default || r));
const LazyInlineMessage = defineAsyncComponent(() => import("./_nuxt/index-CHrXWet3.js").then((r) => r["default"] || r.default || r));
const LazyToast = defineAsyncComponent(() => import("./_nuxt/index-D2cB1nen.js").then((r) => r["default"] || r.default || r));
const LazyCarousel = defineAsyncComponent(() => import("./_nuxt/index-CWu42XXr.js").then((r) => r["default"] || r.default || r));
const LazyGalleria = defineAsyncComponent(() => import("./_nuxt/index-DQglSIUR.js").then((r) => r["default"] || r.default || r));
const LazyImage = defineAsyncComponent(() => import("./_nuxt/index-CKcS7MsO.js").then((r) => r["default"] || r.default || r));
const LazyImageCompare = defineAsyncComponent(() => import("./_nuxt/index-kwg6u0Kg.js").then((r) => r["default"] || r.default || r));
const LazyAvatar = defineAsyncComponent(() => import("./_nuxt/index-BtQtd8-P.js").then((r) => r["default"] || r.default || r));
const LazyAvatarGroup = defineAsyncComponent(() => import("./_nuxt/index-BZWYCJY-.js").then((r) => r["default"] || r.default || r));
const LazyBadge = defineAsyncComponent(() => import("./_nuxt/index-Bs3jKnTd.js").then((r) => r["default"] || r.default || r));
const LazyBlockUI = defineAsyncComponent(() => import("./_nuxt/index-pMExRPuU.js").then((r) => r["default"] || r.default || r));
const LazyChip = defineAsyncComponent(() => import("./_nuxt/index-BZbpA57u.js").then((r) => r["default"] || r.default || r));
const LazyInplace = defineAsyncComponent(() => import("./_nuxt/index-CUhbUo33.js").then((r) => r["default"] || r.default || r));
const LazyMeterGroup = defineAsyncComponent(() => import("./_nuxt/index-CXc3igo3.js").then((r) => r["default"] || r.default || r));
const LazyOverlayBadge = defineAsyncComponent(() => import("./_nuxt/index-Q56GoBhX.js").then((r) => r["default"] || r.default || r));
const LazyScrollTop = defineAsyncComponent(() => import("./_nuxt/index-Ufxujazo.js").then((r) => r["default"] || r.default || r));
const LazySkeleton = defineAsyncComponent(() => import("./_nuxt/index-D_0hJHXk.js").then((r) => r["default"] || r.default || r));
const LazyProgressBar = defineAsyncComponent(() => import("./_nuxt/index-Bu8qsO_a.js").then((r) => r["default"] || r.default || r));
const LazyProgressSpinner = defineAsyncComponent(() => import("./_nuxt/index-Dmh981s-.js").then((r) => r["default"] || r.default || r));
const LazyTag = defineAsyncComponent(() => import("./_nuxt/index-DLq7v4np.js").then((r) => r["default"] || r.default || r));
const LazyTerminal = defineAsyncComponent(() => import("./_nuxt/index-BbLT4aRo.js").then((r) => r["default"] || r.default || r));
const LazyForm = defineAsyncComponent(() => import("./_nuxt/index-7WBBtXvk.js").then((r) => r["default"] || r.default || r));
const LazyFormField = defineAsyncComponent(() => import("./_nuxt/index-iWVInaQV.js").then((r) => r["default"] || r.default || r));
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
      return Theme.transformCSS(options.name || _this.name, "".concat(computedStyle).concat(css$1(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["", ""])), style2)));
    });
  },
  getCommonTheme: function getCommonTheme(params) {
    return Theme.getCommon(this.name, params);
  },
  getComponentTheme: function getComponentTheme(params) {
    return Theme.getComponent(this.name, params);
  },
  getDirectiveTheme: function getDirectiveTheme(params) {
    return Theme.getDirective(this.name, params);
  },
  getPresetTheme: function getPresetTheme(preset, selector, params) {
    return Theme.getCustomPreset(this.name, preset, selector, params);
  },
  getLayerOrderThemeCSS: function getLayerOrderThemeCSS() {
    return Theme.getLayerOrderCSS(this.name);
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
    return Theme.getCommonStyleSheet(this.name, params, props);
  },
  getThemeStyleSheet: function getThemeStyleSheet(params) {
    var props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    var css3 = [Theme.getStyleSheet(this.name, params, props)];
    if (this.style) {
      var name = this.name === "base" ? "global-style" : "".concat(this.name, "-style");
      var _css = css$1(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["", ""])), resolve(this.style, {
        dt
      }));
      var _style = minifyCSS(Theme.transformCSS(name, _css));
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
    if (!Theme.isStyleNameLoaded("common")) {
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
      Theme.setLoadedStyleName("common");
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
      Theme.setTheme(newValue);
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
const plugins = [
  payloadPlugin,
  unhead_k2P3m_ZDyjlr2mMYnoDPwavjsDN8hBlk9cFai0bbopU,
  plugin$1,
  _0_siteConfig_tU0SxKrPeVRXWcGu2sOnIfhNDbYiKNfDCvYZhRueG0Q,
  revive_payload_server_MVtmlZaQpj6ApFmshWfUWl5PehCebzaBf2NuRMiIbms,
  plugin,
  components_plugin_z4hgvsiddfKkfXTP6M8M4zG5Cb7sGnDhcryKVM45Di4,
  robot_meta_server_bRHpso_4KN_Ec3RJzqCvbuvfZsNOeE_4TgpL8dCNuwk,
  primevue_plugin_0tbz5Y3Ab_H50qf9PQhqyN3k7XWjmG9dWGLJNwEfVI0
];
const layouts = {
  center: defineAsyncComponent(() => import("./_nuxt/center-YNG8fz3I.js").then((m) => m.default || m)),
  default: defineAsyncComponent(() => import("./_nuxt/default-DnyxMOLT.js").then((m) => m.default || m)),
  hmf: defineAsyncComponent(() => import("./_nuxt/hmf-BZQYOUz8.js").then((m) => m.default || m))
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
    const _Error404 = defineAsyncComponent(() => import("./_nuxt/error-404-Hlduy3fj.js"));
    const _Error = defineAsyncComponent(() => import("./_nuxt/error-500-DP2eTUbL.js"));
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
export {
  BaseButton as B,
  ConfirmationEventBus as C,
  DynamicDialogEventBus as D,
  FilterService as F,
  PrimeVueService as P,
  ToastEventBus as T,
  _export_sfc as _,
  useSeoMeta as a,
  useAuthStore as b,
  useRouter as c,
  useRoute as d,
  entry_default as default,
  __nuxt_component_0 as e,
  auth as f,
  useThemeStore as g,
  __nuxt_component_0$1 as h,
  functions as i,
  encodeRoutePath as j,
  useNuxtApp as k,
  useRuntimeConfig as l,
  nuxtLinkDefaults as m,
  navigateTo as n,
  defineNuxtRouteMiddleware as o,
  BaseStyle as p,
  FilterMatchMode as q,
  resolveRouteObject as r,
  FilterOperator as s,
  tablesDB as t,
  useHead as u,
  appwriteClient as v
};
