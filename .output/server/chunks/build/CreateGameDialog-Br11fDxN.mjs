import { defineComponent, ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { u as useRouter } from './server.mjs';
import { u as users } from './users-x0j5YX6M.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateGameDialog",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    useRouter();
    const selectedSymbol = ref("X");
    const gameMode = ref("ONLINE");
    ref("M3");
    const requestedOpponentId = ref("");
    const loading = ref(false);
    const error = ref(null);
    const bots = ref([]);
    const selectedBotId = ref(null);
    const loadingBots = ref(false);
    const fetchBots = async () => {
      loadingBots.value = true;
      try {
        bots.value = await users.listBots();
        const firstBot = bots.value[0];
        if (firstBot) {
          selectedBotId.value = firstBot.$id;
        }
      } catch (e) {
        console.error("Failed to fetch bots:", e);
      } finally {
        loadingBots.value = false;
      }
    };
    watch(
      () => props.visible,
      (newVal) => {
        if (newVal && gameMode.value === "AI") {
          fetchBots();
        }
      }
    );
    watch(gameMode, (newMode) => {
      if (newMode === "AI" && props.visible && bots.value.length === 0) {
        fetchBots();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[100] flex items-center justify-center p-4" }, _attrs))}><div class="absolute inset-0 bg-void/80 backdrop-blur-md"></div><div class="relative w-full max-w-md glass border-glass-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300"><div class="p-8 space-y-8"><div class="text-center space-y-2"><h3 class="text-3xl font-black text-app-text tracking-tight">New Match</h3><p class="text-app-text-muted opacity-60">Choose your side to begin the battle.</p></div><div class="grid grid-cols-2 gap-4"><button class="${ssrRenderClass([
          "group relative aspect-square rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300",
          selectedSymbol.value === "X" ? "border-red-500 bg-red-500/10" : "border-glass-border bg-glass-white hover:border-app-text/20"
        ])}"><span class="${ssrRenderClass([selectedSymbol.value === "X" ? "text-red-500" : "text-app-text-muted opacity-20", "text-6xl font-black mb-2 transition-transform group-hover:scale-110"])}">X</span><span class="${ssrRenderClass([selectedSymbol.value === "X" ? "text-red-400" : "text-app-text-muted opacity-40", "text-xs font-bold uppercase tracking-widest"])}">Player 1</span>`);
        if (selectedSymbol.value === "X") {
          _push(`<div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in"><i class="pi pi-check text-[10px] text-white font-bold"></i></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button><button class="${ssrRenderClass([
          "group relative aspect-square rounded-2xl border-2 flex flex-col items-center justify-center transition-all duration-300",
          selectedSymbol.value === "O" ? "border-blue-500 bg-blue-500/10" : "border-glass-border bg-glass-white hover:border-app-text/20"
        ])}"><span class="${ssrRenderClass([selectedSymbol.value === "O" ? "text-blue-500" : "text-app-text-muted opacity-20", "text-6xl font-black mb-2 transition-transform group-hover:scale-110"])}">O</span><span class="${ssrRenderClass([selectedSymbol.value === "O" ? "text-blue-400" : "text-app-text-muted opacity-40", "text-xs font-bold uppercase tracking-widest"])}">Player 2</span>`);
        if (selectedSymbol.value === "O") {
          _push(`<div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in"><i class="pi pi-check text-[10px] text-white font-bold"></i></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</button></div><div class="space-y-3"><label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 block">Game Mode</label><div class="grid grid-cols-1 gap-3"><button class="${ssrRenderClass([
          gameMode.value === "ONLINE" ? "border-blue-500/50 bg-blue-500/10" : "border-glass-border bg-glass-white hover:border-app-text/20",
          "flex items-center space-x-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left"
        ])}"><div class="${ssrRenderClass([
          gameMode.value === "ONLINE" ? "bg-blue-500/20 text-blue-500" : "bg-app-text/10 text-app-text-muted opacity-40",
          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        ])}"><i class="pi pi-globe text-xl"></i></div><div><p class="${ssrRenderClass([gameMode.value === "ONLINE" ? "text-blue-500" : "text-app-text", "font-bold text-sm"])}"> Online Multiplayer </p><p class="text-xs text-app-text-muted opacity-40">Play against someone else</p></div></button><button class="${ssrRenderClass([
          gameMode.value === "AI" ? "border-purple-500/50 bg-purple-500/10" : "border-glass-border bg-glass-white hover:border-app-text/20",
          "flex items-center space-x-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left"
        ])}"><div class="${ssrRenderClass([
          gameMode.value === "AI" ? "bg-purple-500/20 text-purple-500" : "bg-app-text/10 text-app-text-muted opacity-40",
          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        ])}"><i class="pi pi-android text-xl"></i></div><div><p class="${ssrRenderClass([gameMode.value === "AI" ? "text-purple-500" : "text-app-text", "font-bold text-sm"])}"> Play vs AI </p><p class="text-xs text-app-text-muted opacity-40">Challenge the model</p></div></button><button class="${ssrRenderClass([
          gameMode.value === "LOCAL" ? "border-amber-500/50 bg-amber-500/10" : "border-glass-border bg-glass-white hover:border-app-text/20",
          "flex items-center space-x-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left"
        ])}"><div class="${ssrRenderClass([
          gameMode.value === "LOCAL" ? "bg-amber-500/20 text-amber-500" : "bg-app-text/10 text-app-text-muted opacity-40",
          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
        ])}"><i class="pi pi-mobile text-xl"></i></div><div><p class="${ssrRenderClass([gameMode.value === "LOCAL" ? "text-amber-500" : "text-app-text", "font-bold text-sm"])}"> Pass &amp; Play </p><p class="text-xs text-app-text-muted opacity-40">Two players, one device</p></div></button></div></div>`);
        if (gameMode.value === "AI") {
          _push(`<div class="space-y-3"><label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 block">Select Opponent AI</label>`);
          if (loadingBots.value) {
            _push(`<div class="flex justify-center py-4"><i class="pi pi-spin pi-spinner text-purple-500"></i></div>`);
          } else if (bots.value.length > 0) {
            _push(`<div class="space-y-2 max-h-48 overflow-y-auto pr-2 custom-scrollbar"><!--[-->`);
            ssrRenderList(bots.value, (bot) => {
              var _a, _b;
              _push(`<button class="${ssrRenderClass([
                selectedBotId.value === bot.$id ? "border-purple-500/50 bg-purple-500/10" : "border-glass-border bg-glass-white hover:border-app-text/20",
                "w-full flex items-center justify-between p-3 rounded-xl border-2 transition-all duration-300 text-left"
              ])}"><div class="flex items-center space-x-3"><div class="${ssrRenderClass([
                selectedBotId.value === bot.$id ? "bg-purple-500/20 text-purple-500" : "bg-app-text/10 text-app-text-muted opacity-40",
                "w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
              ])}"><i class="pi pi-android text-sm"></i></div><div><p class="${ssrRenderClass([selectedBotId.value === bot.$id ? "text-purple-400" : "text-app-text", "font-bold text-xs"])}">${ssrInterpolate(bot.name)}</p><p class="text-[10px] text-app-text-muted opacity-40 capitalize">${ssrInterpolate(((_b = (_a = bot.prefs) == null ? void 0 : _a.modelName) == null ? void 0 : _b.toLowerCase()) || "Heuristic")} AI </p></div></div><div class="text-right"><p class="text-[10px] font-black text-purple-500">${ssrInterpolate(bot.rating || 1500)}</p><p class="text-[8px] text-app-text-muted opacity-40 uppercase tracking-tighter">Rating</p></div></button>`);
            });
            _push(`<!--]--></div>`);
          } else {
            _push(`<div class="text-center py-4 text-app-text-muted opacity-40 text-xs">No AI bots available.</div>`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (gameMode.value === "ONLINE") {
          _push(`<div class="space-y-3"><label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 block">Invite Opponent (Optional)</label><div class="relative group"><i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-app-text-muted opacity-40 group-focus-within:text-blue-500 transition-colors"></i><input${ssrRenderAttr("value", requestedOpponentId.value)} type="text" placeholder="Enter User ID" class="w-full bg-void border-2 border-glass-border rounded-2xl py-4 pl-12 pr-4 text-app-text text-sm font-bold placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:border-blue-500 outline-none transition-all"></div><p class="text-[9px] text-app-text-muted opacity-40 font-medium"> Only the specified user will be able to join this match. </p></div>`);
        } else {
          _push(`<!---->`);
        }
        if (error.value) {
          _push(`<div class="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">${ssrInterpolate(error.value)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-col space-y-3"><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="w-full py-4 rounded-2xl bg-app-text text-void font-bold hover:opacity-90 transition-all shadow-xl disabled:opacity-50 flex items-center justify-center space-x-2">`);
        if (loading.value) {
          _push(`<i class="pi pi-spin pi-spinner"></i>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span>${ssrInterpolate(loading.value ? "Creating Match..." : "Create Match")}</span></button><button${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="w-full py-4 rounded-2xl bg-glass-white border border-glass-border text-app-text-muted font-bold hover:bg-glass-white hover:text-app-text transition-all active:scale-[0.98]"> Cancel </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CreateGameDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=CreateGameDialog-Br11fDxN.mjs.map
