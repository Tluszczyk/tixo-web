import { defineComponent, computed, mergeProps, useSSRContext, ref, watch, unref, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as __nuxt_component_0 } from "./nuxt-link-C9J5Jg0a.js";
import { B as BaseButton, c as useRouter } from "../server.mjs";
import { G as GameStatus } from "./GameStatus-DcfBG9k6.js";
import { u as users } from "./games-aIlt4Osa.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "GameThumbnail",
  __ssrInlineRender: true,
  props: {
    board: {},
    tileWinners: {}
  },
  setup(__props) {
    const props = __props;
    const deserializedBoard = computed(() => {
      let b = props.board || ".".repeat(81);
      if (b.length < 81) b = b.padEnd(81, ".");
      const tiles = [];
      for (let ty = 0; ty < 3; ty++) {
        for (let tx = 0; tx < 3; tx++) {
          const tile = [];
          for (let cy = 0; cy < 3; cy++) {
            for (let cx = 0; cx < 3; cx++) {
              const x = tx * 3 + cx;
              const y = ty * 3 + cy;
              tile.push(b[y * 9 + x]);
            }
          }
          tiles.push(tile);
        }
      }
      return tiles;
    });
    const deserializedTileWinners = computed(() => {
      let tw = props.tileWinners || ".".repeat(9);
      if (tw.length < 9) tw = tw.padEnd(9, ".");
      return tw.split("");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full bg-void/50 grid grid-cols-3 grid-rows-3 gap-[2px] p-[2px]" }, _attrs))}><!--[-->`);
      ssrRenderList(deserializedBoard.value, (tile, i) => {
        _push(`<div class="${ssrRenderClass([[
          deserializedTileWinners.value[i] === "X" ? "bg-red-500/10" : deserializedTileWinners.value[i] === "O" ? "bg-blue-500/10" : "bg-glass-white"
        ], "grid grid-cols-3 grid-rows-3 gap-[1px] p-[1px] relative rounded-sm transition-all duration-500 overflow-hidden"])}"><!--[-->`);
        ssrRenderList(tile, (cell, j) => {
          _push(`<div class="flex items-center justify-center aspect-square rounded-[1px]">`);
          if (cell === "X") {
            _push(`<div class="w-full h-full flex items-center justify-center text-[6px] font-black marker-x opacity-90"> X </div>`);
          } else if (cell === "O") {
            _push(`<div class="w-full h-full flex items-center justify-center text-[6px] font-black marker-o opacity-90"> O </div>`);
          } else {
            _push(`<div class="w-[1px] h-[1px] rounded-full bg-app-text-muted opacity-20"></div>`);
          }
          _push(`</div>`);
        });
        _push(`<!--]-->`);
        if (deserializedTileWinners.value[i] !== ".") {
          _push(`<div class="absolute inset-0 pointer-events-none flex items-center justify-center"><div class="${ssrRenderClass([[
            deserializedTileWinners.value[i] === "X" ? "border-red-500/30 bg-red-500/5" : deserializedTileWinners.value[i] === "O" ? "border-blue-500/30 bg-blue-500/5" : "border-glass-border bg-glass-white"
          ], "w-full h-full border"])}"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameList/GameThumbnail.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GameInfo",
  __ssrInlineRender: true,
  props: {
    game: {}
  },
  setup(__props) {
    const props = __props;
    const xPlayer = ref(null);
    const oPlayer = ref(null);
    const fetchPlayers = async () => {
      if (props.game.xPlayerId) {
        xPlayer.value = await users.getUser(props.game.xPlayerId);
      }
      if (props.game.oPlayerId) {
        oPlayer.value = await users.getUser(props.game.oPlayerId);
      }
    };
    watch(() => props.game, fetchPlayers);
    const formatTime = (dateStr) => {
      const date = new Date(dateStr);
      return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    };
    const formatStatus = (status) => {
      return status.replace(/_/g, " ");
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-full flex flex-col justify-between py-0.5 sm:py-1" }, _attrs))}><div class="flex items-start justify-between gap-2"><div class="flex flex-col gap-0.5 sm:gap-1.5 min-w-0"><h3 class="text-sm sm:text-lg font-black text-app-text uppercase tracking-tight group-hover:text-indigo-400 transition-colors leading-none truncate">${ssrInterpolate(__props.game.status === unref(GameStatus).FINISHED ? __props.game.winner === "TIE" || __props.game.winner === "D" ? "Draw" : `Player ${__props.game.winner} Won` : __props.game.status === unref(GameStatus).CANCELLED ? "Void" : __props.game.status === unref(GameStatus).WAITING_FOR_OPPONENT ? "Pending" : "Live Match")}</h3><p class="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.1em] sm:tracking-[0.2em] text-app-text-muted opacity-40 group-hover:text-app-text-muted opacity-60 transition-colors truncate">${ssrInterpolate(__props.game.isOnDevice ? "Local Network" : "Global Server")} // ${ssrInterpolate(formatStatus(__props.game.status))}</p></div>`);
      if (__props.game.isOnDevice) {
        _push(`<div class="shrink-0 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-amber-500/40 bg-amber-500/10 text-[8px] sm:text-[9px] font-black tracking-widest text-amber-400 uppercase shadow-[0_0_10px_rgba(251,191,36,0.15)]"> Local </div>`);
      } else if (__props.game.status === unref(GameStatus).IN_PROGRESS) {
        _push(`<div class="shrink-0 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-[8px] sm:text-[9px] font-black tracking-widest text-indigo-400 uppercase shadow-[0_0_10px_rgba(129,140,248,0.15)]"> Live </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-1.5 sm:py-3 min-w-0"><div class="flex items-center gap-2 sm:gap-3 min-w-0"><div class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center"><span class="text-xs sm:text-sm font-black marker-x">X</span></div><div class="flex flex-col min-w-0"><div class="flex items-center gap-1.5 sm:gap-2 mb-0.5"><span class="text-[8px] sm:text-[9px] font-bold text-app-text-muted opacity-30 uppercase tracking-widest leading-none">P X</span>`);
      if (xPlayer.value?.rating) {
        _push(`<span class="text-[8px] sm:text-[9px] font-black text-indigo-400 mono px-1 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 leading-none">${ssrInterpolate(xPlayer.value.rating)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!__props.game.requestedOpponentId?.startsWith("AI_X") && xPlayer.value?.$id) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/users/${xPlayer.value.$id}`,
          onClick: () => {
          },
          class: "text-[10px] sm:text-xs mono text-app-text-muted opacity-70 font-bold truncate max-w-[80px] sm:max-w-[100px] hover:text-indigo-400 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(xPlayer.value?.name || (__props.game.xPlayerId ? __props.game.xPlayerId.substring(0, 12) : "..."))}`);
            } else {
              return [
                createTextVNode(toDisplayString(xPlayer.value?.name || (__props.game.xPlayerId ? __props.game.xPlayerId.substring(0, 12) : "...")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<span class="text-[10px] sm:text-xs mono text-app-text-muted opacity-70 font-bold truncate max-w-[80px] sm:max-w-[100px]">${ssrInterpolate(__props.game.requestedOpponentId?.startsWith("AI_X") ? "Tixo AI" : "...")}</span>`);
      }
      _push(`</div></div><div class="hidden sm:block text-app-text-muted opacity-20 text-xs mono font-black">VS</div><div class="flex items-center gap-2 sm:gap-3 min-w-0"><div class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center"><span class="text-xs sm:text-sm font-black marker-o">O</span></div><div class="flex flex-col min-w-0"><div class="flex items-center gap-1.5 sm:gap-2 mb-0.5"><span class="text-[8px] sm:text-[9px] font-bold text-app-text-muted opacity-30 uppercase tracking-widest leading-none">P O</span>`);
      if (oPlayer.value?.rating) {
        _push(`<span class="text-[8px] sm:text-[9px] font-black text-indigo-400 mono px-1 py-0.5 rounded-md bg-indigo-500/10 border border-indigo-500/20 leading-none">${ssrInterpolate(oPlayer.value.rating)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (!__props.game.requestedOpponentId?.startsWith("AI_O") && !__props.game.isOnDevice && oPlayer.value?.$id) {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: `/users/${oPlayer.value.$id}`,
          onClick: () => {
          },
          class: "text-[10px] sm:text-xs mono text-app-text-muted opacity-70 font-bold truncate max-w-[80px] sm:max-w-[100px] hover:text-indigo-400 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(oPlayer.value?.name || (__props.game.oPlayerId ? __props.game.oPlayerId.substring(0, 12) : "..."))}`);
            } else {
              return [
                createTextVNode(toDisplayString(oPlayer.value?.name || (__props.game.oPlayerId ? __props.game.oPlayerId.substring(0, 12) : "...")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<span class="text-[10px] sm:text-xs mono text-app-text-muted opacity-70 font-bold truncate max-w-[80px] sm:max-w-[100px]">${ssrInterpolate(__props.game.requestedOpponentId?.startsWith("AI_O") ? "Tixo AI" : __props.game.isOnDevice && !__props.game.requestedOpponentId?.startsWith("AI_X") ? oPlayer.value?.name || "Local Player" : "...")}</span>`);
      }
      _push(`</div></div></div><div class="flex items-center justify-between mt-auto pt-2 sm:pt-3 border-t border-glass-border gap-2"><div class="flex items-center gap-1.5 sm:gap-2 min-w-0"><i class="pi pi-clock text-[9px] sm:text-[10px] text-app-text-muted opacity-30 shrink-0"></i><span class="text-[8px] sm:text-[10px] mono text-app-text-muted opacity-40 uppercase font-black truncate">${ssrInterpolate(formatTime(__props.game.$createdAt))}</span></div>`);
      _push(ssrRenderComponent(BaseButton, {
        class: "shrink-0",
        size: "sm",
        variant: "secondary",
        "icon-right": "pi pi-arrow-right"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>${ssrInterpolate(__props.game.status === unref(GameStatus).IN_PROGRESS ? "Engage" : "Inspect")}</span>`);
          } else {
            return [
              createVNode("span", null, toDisplayString(__props.game.status === unref(GameStatus).IN_PROGRESS ? "Engage" : "Inspect"), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameList/GameInfo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GameListItem",
  __ssrInlineRender: true,
  props: {
    game: {},
    currentUser: {}
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const isMyTurn = computed(() => {
      if (!props.game || !props.currentUser || props.game.status !== GameStatus.IN_PROGRESS)
        return false;
      if (props.game.isOnDevice) return props.game.creatorId === props.currentUser?.$id;
      return props.game.nextPlayerId === props.currentUser?.$id;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "group flex flex-row h-44 sm:h-48 w-full glass rounded-2xl sm:rounded-3xl transition-all duration-500 cursor-pointer overflow-hidden p-3 sm:p-4 gap-3 sm:gap-6 hover:shadow-2xl active:scale-[0.98]",
          isMyTurn.value ? "border-yellow-500/50 bg-yellow-500/[0.05] hover:border-yellow-500/80 hover:bg-yellow-500/[0.1] hover:shadow-yellow-500/10" : "border-glass-border hover:border-indigo-500/50 hover:bg-glass-white hover:shadow-indigo-500/10"
        ]
      }, _attrs))}><div class="h-full aspect-square shrink-0 rounded-xl sm:rounded-2xl overflow-hidden glass border-glass-border shadow-inner p-1">`);
      _push(ssrRenderComponent(_sfc_main$2, {
        board: __props.game.board,
        "tile-winners": __props.game.tileWinners
      }, null, _parent));
      _push(`</div><div class="h-full grow min-w-0 overflow-hidden">`);
      _push(ssrRenderComponent(_sfc_main$1, { game: __props.game }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameList/GameListItem.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
