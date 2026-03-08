import { defineComponent, ref, computed, watch, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, d as useAuthStore, g as useRoute, u as useRouter, f as useThemeStore } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    useRouter();
    const route = useRoute();
    const isExpanded = ref(false);
    const menuItems = [
      { label: "Match", icon: "pi pi-compass", route: "/", requiresAuth: false },
      { label: "Operational", icon: "pi pi-server", route: "/dashboard", requiresAuth: true },
      { label: "Tactics", icon: "pi pi-book", route: "/how-to-play", requiresAuth: false },
      { label: "Users", icon: "pi pi-users", route: "/users", requiresAuth: false },
      { label: "Profile", icon: "pi pi-user", route: "/profile", requiresAuth: true }
    ];
    const secondaryItems = [
      { label: "Settings", icon: "pi pi-cog", route: "/settings" },
      { label: "Privacy Policy", icon: "pi pi-shield", route: "/privacy" }
    ];
    const isGuest = computed(() => !authStore.isLoggedIn);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: [
          "h-full bg-sidebar border-r border-glass-border flex flex-col py-8 transition-all duration-500 ease-in-out relative z-60",
          isExpanded.value ? "w-64 px-6" : "w-24 px-4 items-center"
        ]
      }, _attrs))}><div class="${ssrRenderClass([
        "mb-12 flex items-center transition-all duration-500",
        isExpanded.value ? "justify-between w-full" : "justify-center"
      ])}"><div class="text-2xl font-black tracking-tighter uppercase italic text-app-text flex items-center gap-2 cursor-pointer transition-all duration-500 overflow-hidden"><span class="shrink-0">T<span class="${ssrRenderClass([
        "transition-all duration-500",
        isExpanded.value ? "opacity-0 w-0" : "text-indigo-500 opacity-100 w-auto"
      ])}">.</span></span><span class="${ssrRenderClass([
        "overflow-hidden whitespace-nowrap transition-all duration-500",
        isExpanded.value ? "opacity-100 max-w-24" : "opacity-0 max-w-0",
        isExpanded.value ? "delay-300" : ""
      ])}"> IXO<span class="text-indigo-500">.</span></span></div></div><nav class="flex-1 flex flex-col gap-4 w-full"><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(`<button class="${ssrRenderClass([
          "relative flex items-center rounded-2xl glass transition-all duration-500 group overflow-hidden",
          isExpanded.value ? "px-4 h-12 gap-4 w-full" : "w-14 h-14 justify-center",
          unref(route).path === item.route ? "border-indigo-500/60 bg-indigo-500/10 shadow-[0_0_15px_rgba(99,102,241,0.1)]" : "border-glass-border hover:border-indigo-500/30 hover:bg-glass-white",
          item.requiresAuth && isGuest.value ? "opacity-50 grayscale-[0.5]" : ""
        ])}">`);
        if (unref(route).path === item.route) {
          _push(`<div class="absolute inset-y-0 left-0 w-0.75 bg-indigo-500 shadow-[2px_0_10px_rgba(99,102,241,0.5)]"></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="relative"><i class="${ssrRenderClass([
          item.icon,
          "text-lg transition-all duration-500 shrink-0",
          isExpanded.value ? "" : "group-hover:scale-110",
          unref(route).path === item.route ? "text-indigo-400" : "text-app-text-muted group-hover:text-app-text"
        ])}"></i>`);
        if (item.requiresAuth && isGuest.value) {
          _push(`<i class="pi pi-lock absolute -top-1 -right-1 text-[8px] text-indigo-500"></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><span class="${ssrRenderClass([
          "text-[10px] font-black uppercase tracking-widest overflow-hidden whitespace-nowrap transition-all duration-500",
          isExpanded.value ? "opacity-100 max-w-24" : "opacity-0 max-w-0",
          isExpanded.value ? "delay-300" : ""
        ])}">${ssrInterpolate(item.label)}</span>`);
        if (!isExpanded.value) {
          _push(`<span class="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-indigo-600 text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50 shadow-xl shadow-black/50">${ssrInterpolate(item.label)} ${ssrInterpolate(item.requiresAuth && isGuest.value ? "(Auth Required)" : "")}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--></nav><div class="mt-auto pt-8 border-t border-glass-border flex flex-col gap-4 w-full"><!--[-->`);
      ssrRenderList(secondaryItems, (item) => {
        _push(`<button class="${ssrRenderClass([
          "relative flex items-center rounded-2xl glass transition-all duration-500 group overflow-hidden",
          isExpanded.value ? "px-4 h-10 gap-4 w-full" : "w-14 h-10 justify-center",
          unref(route).path === item.route ? "border-indigo-500/60 bg-indigo-500/10" : "border-glass-border hover:border-indigo-500/30 hover:bg-glass-white"
        ])}"><i class="${ssrRenderClass([
          item.icon,
          "text-sm transition-all duration-500 shrink-0",
          isExpanded.value ? "" : "group-hover:scale-110",
          unref(route).path === item.route ? "text-indigo-400" : "text-app-text-muted group-hover:text-app-text"
        ])}"></i><span class="${ssrRenderClass([
          "text-[9px] font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap transition-all duration-500",
          isExpanded.value ? "opacity-100 max-w-24" : "opacity-0 max-w-0",
          isExpanded.value ? "delay-300" : ""
        ])}">${ssrInterpolate(item.label)}</span>`);
        if (!isExpanded.value) {
          _push(`<span class="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-sidebar text-[10px] font-black uppercase tracking-widest text-app-text opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50 shadow-xl">${ssrInterpolate(item.label)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button>`);
      });
      _push(`<!--]--><button class="${ssrRenderClass([
        "relative flex items-center rounded-2xl glass transition-all duration-500 group overflow-hidden border-red-500/10 hover:bg-red-500/10 hover:border-red-500/40",
        isExpanded.value ? "px-4 h-10 gap-4 w-full" : "w-14 h-10 justify-center",
        isGuest.value ? "border-indigo-500/20 hover:bg-indigo-500/10 hover:border-indigo-500/40" : ""
      ])}">`);
      if (!isGuest.value) {
        _push(`<i class="pi pi-power-off text-sm text-red-500/60 group-hover:text-red-500 shrink-0 transition-all duration-500"></i>`);
      } else {
        _push(`<i class="pi pi-sign-in text-sm text-indigo-500/60 group-hover:text-indigo-500 shrink-0 transition-all duration-500"></i>`);
      }
      _push(`<span class="${ssrRenderClass([
        "text-[9px] font-bold uppercase tracking-widest overflow-hidden whitespace-nowrap transition-all duration-500",
        isExpanded.value ? "opacity-100 max-w-24" : "opacity-0 max-w-0",
        isExpanded.value ? "delay-300" : "",
        "text-app-text-muted",
        !isGuest.value ? "group-hover:text-red-500" : "group-hover:text-indigo-500"
      ])}">${ssrInterpolate(isGuest.value ? "Authorize" : "Disconnect")}</span></button></div></aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DashboardLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const isSidebarOpen = ref(false);
    const showNotifications = ref(false);
    const route = useRoute();
    useRouter();
    const themeStore = useThemeStore();
    const userName = computed(() => {
      var _a;
      return ((_a = authStore.user) == null ? void 0 : _a.name) || "Player";
    });
    const notificationList = ref([]);
    const newNotification = ref(null);
    ref(null);
    const unreadCount = computed(() => notificationList.value.filter((n) => !n.isOpened).length);
    watch(
      () => route.path,
      () => {
        isSidebarOpen.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen w-screen overflow-hidden bg-void relative noise" }, _attrs))} data-v-22d40b61>`);
      if (isSidebarOpen.value) {
        _push(`<div class="fixed inset-0 bg-void/80 backdrop-blur-sm z-40 lg:hidden" data-v-22d40b61></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([
        "fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition-transform duration-500 ease-in-out",
        isSidebarOpen.value ? "translate-x-0" : "-translate-x-full"
      ])}" data-v-22d40b61>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="flex-1 flex flex-col min-w-0 overflow-hidden relative" data-v-22d40b61><header class="h-20 flex items-center justify-between px-6 lg:px-12 border-b border-glass-border bg-void/50 backdrop-blur-md shrink-0 z-20" data-v-22d40b61><div class="flex items-center gap-6" data-v-22d40b61><button class="lg:hidden p-2 rounded-lg text-app-text-muted hover:text-app-text hover:bg-glass-white transition-all" data-v-22d40b61><i class="${ssrRenderClass([isSidebarOpen.value ? "pi-times" : "pi-bars", "pi"])}" data-v-22d40b61></i></button>`);
      ssrRenderSlot(_ctx.$slots, "header-left", {}, null, _push, _parent);
      _push(`</div><div class="flex items-center gap-6 lg:gap-12" data-v-22d40b61>`);
      ssrRenderSlot(_ctx.$slots, "header-right", {}, null, _push, _parent);
      _push(`<div class="flex items-center gap-6" data-v-22d40b61><button class="w-10 h-10 rounded-xl glass border-glass-border flex items-center justify-center text-app-text-muted hover:text-app-text hover:border-indigo-500/30 transition-all" title="Toggle Theme" data-v-22d40b61><i class="${ssrRenderClass([unref(themeStore).theme === "dark" ? "pi-sun" : "pi-moon", "pi"])}" data-v-22d40b61></i></button><div class="relative" data-v-22d40b61><button class="w-10 h-10 rounded-xl glass border-glass-border flex items-center justify-center text-app-text-muted hover:text-app-text hover:border-indigo-500/30 transition-all relative" data-v-22d40b61><i class="pi pi-bell text-sm" data-v-22d40b61></i>`);
      if (unreadCount.value > 0) {
        _push(`<div class="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-void flex items-center justify-center" data-v-22d40b61><span class="text-[8px] font-black text-white" data-v-22d40b61>${ssrInterpolate(unreadCount.value)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      if (showNotifications.value) {
        _push(`<div class="absolute right-0 mt-4 w-96 bg-void/95 backdrop-blur-3xl border border-glass-border rounded-3xl shadow-2xl overflow-hidden z-[100]" data-v-22d40b61><div class="p-6 border-b border-glass-border flex items-center justify-between" data-v-22d40b61><span class="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500" data-v-22d40b61>Communications</span><div class="flex items-center gap-4" data-v-22d40b61>`);
        if (unreadCount.value > 0) {
          _push(`<button class="text-[9px] font-black uppercase tracking-widest text-indigo-400/60 hover:text-indigo-400 transition-colors" data-v-22d40b61> Mark all read </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="text-[9px] font-bold text-app-text-muted uppercase mono" data-v-22d40b61>${ssrInterpolate(notificationList.value.length)} TOTAL</span></div></div><div class="max-h-96 overflow-y-auto custom-scrollbar" data-v-22d40b61><!--[-->`);
        ssrRenderList(notificationList.value, (notif) => {
          _push(`<div class="p-6 hover:bg-glass-white transition-all cursor-pointer border-b border-glass-border/30 last:border-0 relative group" data-v-22d40b61>`);
          if (!notif.isOpened) {
            _push(`<div class="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1]" data-v-22d40b61></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="${ssrRenderClass([
            notif.isOpened ? "text-app-text-muted font-medium" : "text-app-text font-black",
            "text-[13px] leading-relaxed mb-1.5"
          ])}" data-v-22d40b61>${ssrInterpolate(notif.message)}</p><span class="text-[10px] font-bold uppercase tracking-[0.1em] text-app-text-muted" data-v-22d40b61>${ssrInterpolate(new Date(notif.$createdAt).toLocaleTimeString())}</span></div>`);
        });
        _push(`<!--]-->`);
        if (notificationList.value.length === 0) {
          _push(`<div class="p-12 text-center flex flex-col items-center gap-3" data-v-22d40b61><i class="pi pi-bell-slash text-2xl text-app-text-muted opacity-20" data-v-22d40b61></i><span class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-20" data-v-22d40b61>No Communications</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center gap-3 cursor-pointer group" data-v-22d40b61><div class="text-right hidden sm:block" data-v-22d40b61><p class="text-[10px] font-bold text-app-text-muted uppercase tracking-[0.2em]" data-v-22d40b61> Profile </p><p class="text-xs font-bold text-app-text group-hover:text-blue-400 transition-colors" data-v-22d40b61>${ssrInterpolate(userName.value)}</p></div><div class="w-10 h-10 rounded-full glass flex items-center justify-center border-glass-border group-hover:border-blue-500/30 transition-all" data-v-22d40b61><i class="pi pi-user text-app-text-muted text-sm group-hover:text-app-text" data-v-22d40b61></i></div></div></div></div></header><main class="flex-1 overflow-y-auto custom-scrollbar relative" data-v-22d40b61><div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.03)_0%,_transparent_70%)]" data-v-22d40b61></div><div class="w-full mx-auto p-4 lg:p-8 relative z-10 h-full" data-v-22d40b61>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
      if (newNotification.value) {
        _push(`<div class="fixed bottom-8 right-8 z-[200]" data-v-22d40b61><div class="bg-void/95 backdrop-blur-3xl border border-indigo-500/30 p-8 rounded-[2.5rem] shadow-2xl max-w-md flex items-center gap-8" data-v-22d40b61><div class="h-16 w-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20" data-v-22d40b61><i class="pi pi-bolt text-xl animate-pulse" data-v-22d40b61></i></div><div class="flex-1 space-y-2" data-v-22d40b61><p class="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]" data-v-22d40b61> Incoming Transmission </p><p class="text-sm font-bold text-app-text leading-relaxed" data-v-22d40b61>${ssrInterpolate(newNotification.value.message)}</p><div class="flex items-center gap-4 pt-3" data-v-22d40b61><button class="text-[10px] font-black text-app-text-muted opacity-30 hover:text-app-text uppercase tracking-[0.2em] transition-colors" data-v-22d40b61> Ignore </button><button class="px-6 py-2.5 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-400 shadow-lg shadow-indigo-500/20 transition-all" data-v-22d40b61> View </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/DashboardLayout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const DashboardLayout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22d40b61"]]);

export { DashboardLayout as D };
//# sourceMappingURL=DashboardLayout-Cyy2dxQQ.mjs.map
