import { defineComponent, ref, computed, mergeProps, unref, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _sfc_main$2 } from './GameListItem-YCnEV8Lc.mjs';
import { _ as _sfc_main$3 } from './CreateGameDialog-Br11fDxN.mjs';
import { G as GameStatus } from './GameStatus-DcfBG9k6.mjs';
import { d as useAuthStore } from './server.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GameFilterDialog",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean },
    initialFilters: {},
    currentUserId: {}
  },
  emits: ["close", "apply"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const filters = ref({ ...props.initialFilters });
    watch(
      () => props.initialFilters,
      (newVal) => {
        filters.value = { ...newVal };
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[150] flex items-center justify-center p-4" }, _attrs))}><div class="absolute inset-0 bg-void/90 backdrop-blur-md"></div><div class="relative w-full max-w-2xl glass border-glass-border rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300"><div class="p-8 lg:p-12 space-y-10"><div class="flex items-center justify-between"><div class="space-y-1"><h3 class="text-3xl font-black text-app-text uppercase italic"> Filters<span class="text-indigo-500">.</span></h3><p class="text-xs font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20"> Refine Operational Data </p></div><button class="text-xs font-black uppercase tracking-widest text-indigo-500 hover:text-app-text transition-colors"> Reset All </button></div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="space-y-3"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Player Identifier</label><input${ssrRenderAttr("value", filters.value.playerId)} type="text" placeholder="User ID..." class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-sm text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/30 transition-all mono"></div><div class="space-y-3"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Creator Identifier</label><input${ssrRenderAttr("value", filters.value.creatorId)} type="text" placeholder="Creator ID..." class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-sm text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/30 transition-all mono"></div><div class="space-y-3 md:col-span-2"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Operational Statuses</label><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(Object.values(unref(GameStatus)), (status) => {
          _push(`<button class="${ssrRenderClass([
            "px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all border",
            filters.value.statuses.includes(status) ? "bg-indigo-500 border-indigo-400 text-white shadow-lg shadow-indigo-500/20" : "glass border-glass-border text-app-text-muted opacity-30 hover:border-app-text/20"
          ])}">${ssrInterpolate(status.replace(/_/g, " "))}</button>`);
        });
        _push(`<!--]--></div></div><div class="space-y-3"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Temporal Window</label><div class="relative"><select class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-sm text-app-text bg-void focus:outline-none focus:border-indigo-500/30 transition-all appearance-none cursor-pointer"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "all") : ssrLooseEqual(filters.value.dateRange, "all")) ? " selected" : ""}>All Time</option><option value="today"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "today") : ssrLooseEqual(filters.value.dateRange, "today")) ? " selected" : ""}>Last 24 Hours</option><option value="week"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "week") : ssrLooseEqual(filters.value.dateRange, "week")) ? " selected" : ""}>Last 7 Days</option><option value="month"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "month") : ssrLooseEqual(filters.value.dateRange, "month")) ? " selected" : ""}>Last 30 Days</option></select><div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-app-text-muted opacity-20"><i class="pi pi-chevron-down"></i></div></div></div><div class="space-y-3"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Local Protocol</label><div class="flex p-1.5 rounded-2xl glass border-glass-border h-[60px]"><button class="${ssrRenderClass([
          "flex-1 rounded-xl text-[10px] font-black uppercase transition-all",
          filters.value.isOnDevice === true ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "text-app-text-muted opacity-20 hover:opacity-40"
        ])}"> Local </button><button class="${ssrRenderClass([
          "flex-1 rounded-xl text-[10px] font-black uppercase transition-all",
          filters.value.isOnDevice === false ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/20" : "text-app-text-muted opacity-20 hover:opacity-40"
        ])}"> Remote </button></div></div>`);
        if (__props.currentUserId) {
          _push(`<div class="flex items-center justify-between px-6 py-4 rounded-2xl glass border-glass-border cursor-pointer hover:bg-glass-white transition-all h-[68px] mt-auto"><span class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30">My Engagements</span><div class="${ssrRenderClass([
            "w-10 h-5 rounded-full relative transition-all duration-300",
            filters.value.myGamesOnly ? "bg-indigo-500" : "bg-app-text/10"
          ])}"><div class="${ssrRenderClass([
            "absolute top-1 w-3 h-3 bg-white rounded-full transition-all duration-300 shadow-sm",
            filters.value.myGamesOnly ? "left-6" : "left-1"
          ])}"></div></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="space-y-4 pt-6 border-t border-glass-border"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Sequencing</label><div class="grid grid-cols-2 gap-6"><div class="flex p-1.5 rounded-2xl glass border-glass-border"><button class="${ssrRenderClass([
          "flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all",
          filters.value.sortBy === "createdAt" ? "bg-app-text/10 text-app-text" : "text-app-text-muted opacity-20 hover:opacity-40"
        ])}"> Created </button><button class="${ssrRenderClass([
          "flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all",
          filters.value.sortBy === "updatedAt" ? "bg-app-text/10 text-app-text" : "text-app-text-muted opacity-20 hover:opacity-40"
        ])}"> Updated </button></div><div class="flex p-1.5 rounded-2xl glass border-glass-border"><button class="${ssrRenderClass([
          "flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all",
          filters.value.sortOrder === "desc" ? "bg-app-text/10 text-app-text" : "text-app-text-muted opacity-20 hover:opacity-40"
        ])}"> Desc </button><button class="${ssrRenderClass([
          "flex-1 py-3 rounded-xl text-[10px] font-black uppercase transition-all",
          filters.value.sortOrder === "asc" ? "bg-app-text/10 text-app-text" : "text-app-text-muted opacity-20 hover:opacity-40"
        ])}"> Asc </button></div></div></div><div class="flex gap-6 pt-6"><button class="flex-1 py-5 rounded-2xl glass border-glass-border text-xs font-black uppercase tracking-widest text-app-text-muted opacity-40 hover:bg-glass-white transition-all"> Cancel </button><button class="flex-[2] py-5 rounded-2xl bg-app-text text-void text-xs font-black uppercase tracking-[0.2em] shadow-2xl hover:opacity-90 transition-all"> Apply Parameters </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameList/GameFilterDialog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GameList",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const allGames = ref([]);
    const loading = ref(true);
    const showCreateDialog = ref(false);
    const showFilterDialog = ref(false);
    const filters = ref({
      playerId: "",
      creatorId: "",
      myGamesOnly: false,
      statuses: [],
      isOnDevice: null,
      dateRange: "all",
      sortBy: "createdAt",
      sortOrder: "desc"
    });
    const filteredGames = computed(() => {
      let result = [...allGames.value];
      if (filters.value.playerId) {
        result = result.filter(
          (g) => {
            var _a, _b;
            return ((_a = g.xPlayerId) == null ? void 0 : _a.includes(filters.value.playerId)) || ((_b = g.oPlayerId) == null ? void 0 : _b.includes(filters.value.playerId));
          }
        );
      }
      if (filters.value.creatorId) {
        result = result.filter((g) => {
          var _a;
          return (_a = g.creatorId) == null ? void 0 : _a.includes(filters.value.creatorId);
        });
      }
      if (filters.value.myGamesOnly && authStore.user) {
        const uid = authStore.user.$id;
        result = result.filter((g) => g.xPlayerId === uid || g.oPlayerId === uid || g.creatorId === uid);
      }
      if (filters.value.statuses.length > 0) {
        result = result.filter((g) => filters.value.statuses.includes(g.status));
      }
      if (filters.value.isOnDevice !== null) {
        result = result.filter((g) => g.isOnDevice === filters.value.isOnDevice);
      }
      if (filters.value.dateRange !== "all") {
        const now = /* @__PURE__ */ new Date();
        const cutoff = /* @__PURE__ */ new Date();
        if (filters.value.dateRange === "today") cutoff.setHours(now.getHours() - 24);
        else if (filters.value.dateRange === "week") cutoff.setDate(now.getDate() - 7);
        else if (filters.value.dateRange === "month") cutoff.setMonth(now.getMonth() - 1);
        result = result.filter((g) => new Date(g.$createdAt).getTime() >= cutoff.getTime());
      }
      result.sort((a, b) => {
        const key = filters.value.sortBy === "createdAt" ? "$createdAt" : "$updatedAt";
        const valA = new Date(a[key]).getTime();
        const valB = new Date(b[key]).getTime();
        return filters.value.sortOrder === "desc" ? valB - valA : valA - valB;
      });
      return result;
    });
    const activeGames = computed(() => {
      return filteredGames.value.filter(
        (g) => g.status === GameStatus.IN_PROGRESS || g.status === GameStatus.WAITING_FOR_OPPONENT
      );
    });
    const recentMatches = computed(() => {
      return filteredGames.value.filter(
        (g) => g.status === GameStatus.FINISHED || g.status === GameStatus.CANCELLED
      );
    });
    const handleApplyFilters = (newFilters) => {
      filters.value = newFilters;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex flex-col space-y-8" }, _attrs))}><div class="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2"><div class="space-y-1"><h2 class="text-2xl lg:text-3xl font-black text-app-text uppercase italic"> Active Operations<span class="text-indigo-500">.</span></h2><p class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20"> Live Operational Data </p></div><div class="flex items-center gap-3 w-full md:w-auto"><button class="w-12 h-12 lg:w-10 lg:h-10 rounded-xl glass border-glass-border text-app-text-muted opacity-40 hover:text-app-text hover:opacity-100 hover:border-indigo-500/30 transition-all flex items-center justify-center cursor-pointer group shrink-0" title="Synchronize"><i class="${ssrRenderClass([{ "animate-spin": loading.value }, "pi pi-refresh text-sm lg:text-xs group-hover:scale-110 transition-transform"])}"></i></button><button class="${ssrRenderClass([
        "flex-1 md:flex-none px-4 lg:px-6 py-3 rounded-xl border text-[10px] font-black uppercase tracking-widest transition-all flex items-center justify-center gap-3 cursor-pointer",
        showFilterDialog.value ? "bg-indigo-500 border-indigo-400 text-white" : "glass border-glass-border text-app-text-muted opacity-40 hover:text-app-text hover:opacity-100 hover:border-indigo-500/30"
      ])}"><i class="pi pi-filter text-[10px]"></i><span>Parameters</span></button><button class="flex-1 md:flex-none px-4 lg:px-8 py-3 rounded-xl bg-app-text text-void text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-3 cursor-pointer"><i class="pi pi-plus text-[10px]"></i><span>Initialize</span></button></div></div>`);
      if (loading.value) {
        _push(`<div class="grid grid-cols-1 xl:grid-cols-2 gap-8"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="h-44 sm:h-48 w-full glass border-glass-border rounded-3xl animate-pulse"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (activeGames.value.length === 0) {
        _push(`<div class="py-20 flex flex-col items-center justify-center glass border-glass-border rounded-[2.5rem] border-dashed"><div class="w-20 h-20 rounded-full glass border-glass-border flex items-center justify-center text-app-text-muted opacity-10 mb-6"><i class="pi pi-inbox text-4xl"></i></div><p class="text-app-text-muted opacity-20 text-[10px] font-black uppercase tracking-[0.2em]"> No Active Operations Found </p><button class="mt-6 text-indigo-500 text-[10px] font-black uppercase tracking-widest hover:text-app-text transition-colors"> Initiate New Protocol </button></div>`);
      } else {
        _push(`<div class="grid grid-cols-1 xl:grid-cols-2 gap-8"><!--[-->`);
        ssrRenderList(activeGames.value, (game) => {
          _push(ssrRenderComponent(_sfc_main$2, {
            key: game.$id,
            game,
            "current-user": unref(authStore).user
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(_sfc_main$3, {
        visible: showCreateDialog.value,
        onClose: ($event) => showCreateDialog.value = false
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        visible: showFilterDialog.value,
        "initial-filters": filters.value,
        "current-user-id": (_a = unref(authStore).user) == null ? void 0 : _a.$id,
        onClose: ($event) => showFilterDialog.value = false,
        onApply: handleApplyFilters
      }, null, _parent));
      _push(`<div class="mt-16 pt-16 border-t border-glass-border"><div class="flex items-center justify-between mb-8 px-2"><div class="space-y-1"><h2 class="text-xl font-black text-app-text uppercase italic"> Archives<span class="text-indigo-500">.</span></h2><p class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20"> Historical Engagement Records </p></div></div>`);
      if (loading.value) {
        _push(`<div class="grid grid-cols-1 xl:grid-cols-2 gap-8"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="h-44 sm:h-48 w-full glass border-glass-border rounded-3xl animate-pulse"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (recentMatches.value.length === 0) {
        _push(`<div class="py-12 text-center text-app-text-muted opacity-10 text-[10px] font-black uppercase tracking-widest italic"> Historical database empty </div>`);
      } else {
        _push(`<div class="grid grid-cols-1 xl:grid-cols-2 gap-8 opacity-60 grayscale-[0.5] hover:grayscale-0 hover:opacity-100 transition-all duration-700"><!--[-->`);
        ssrRenderList(recentMatches.value, (game) => {
          _push(ssrRenderComponent(_sfc_main$2, {
            key: game.$id,
            game,
            "current-user": unref(authStore).user
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameList/GameList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=GameList-u8i4C0yO.mjs.map
