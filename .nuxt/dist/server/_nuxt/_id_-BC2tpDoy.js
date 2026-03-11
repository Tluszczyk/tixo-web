import { B as BaseButton, b as useAuthStore, d as useRoute, c as useRouter, a as useSeoMeta, e as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, useSSRContext, ref, computed, watch, openBlock, createBlock, createVNode, createCommentVNode, Fragment, Transition } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { g as games, u as users } from "./games-B7zgyYbT.js";
import { G as GameStatus } from "./GameStatus-DcfBG9k6.js";
import { _ as _sfc_main$2 } from "./Board-04WGI2Q_.js";
import { _ as _sfc_main$6 } from "./CreateGameDialog-BRA7ik-Y.js";
import { c as coordToIndex, g as getSmallBoard, a as check3x3Winner, M as MatchTimeline, _ as _sfc_main$3, G as GameAnalyticsDashboard, b as _sfc_main$4, d as _sfc_main$5, e as _sfc_main$7, r as rebuildGameState, P as Player, f as getBestMove, A as AI_MODELS, i as isCellAvailable } from "./GameHeader-CH2izX1G.js";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/hookable/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
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
import "echarts/core";
import "echarts/renderers";
import "echarts/charts";
import "echarts/components";
import "./nuxt-link-C9J5Jg0a.js";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TacticalDashboard",
  __ssrInlineRender: true,
  props: {
    game: {},
    xPlayer: {},
    oPlayer: {},
    isPlayerInGame: { type: Boolean },
    isMyTurn: { type: Boolean },
    isAITurn: { type: Boolean },
    currentPlayer: {},
    selectedCell: {},
    selectedHistoryIndex: {},
    joining: { type: Boolean },
    abandoning: { type: Boolean }
  },
  emits: ["clear-history", "clear-selection", "submit-move", "join-match", "abandon-click"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex flex-col gap-4 animate-in fade-in slide-in-from-right-8 duration-1000" }, _attrs))}><div class="glass p-5 rounded-[1.5rem] border-glass-border space-y-4"><div class="flex items-center justify-between"><div class="flex flex-col"><span class="text-[8px] font-black uppercase tracking-[0.3em] text-app-text-muted opacity-40">Operational Status</span><h3 class="text-base font-black text-app-text uppercase italic tracking-tight">${ssrInterpolate(__props.game?.status === unref(GameStatus).IN_PROGRESS ? __props.isAITurn ? "AI Computing" : __props.isMyTurn ? "Your Turn" : "Opponent Turn" : __props.game?.status === unref(GameStatus).WAITING_FOR_OPPONENT ? "Awaiting Host" : "Session Terminated")}</h3></div><div class="w-10 h-10 rounded-xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500 shadow-xl">`);
      if (__props.isAITurn || __props.game?.status === unref(GameStatus).WAITING_FOR_OPPONENT) {
        _push(`<i class="pi pi-spin pi-spinner text-sm"></i>`);
      } else if (__props.isMyTurn) {
        _push(`<i class="pi pi-bolt text-sm"></i>`);
      } else {
        _push(`<i class="pi pi-hourglass text-sm"></i>`);
      }
      _push(`</div></div>`);
      if (__props.game?.status === unref(GameStatus).IN_PROGRESS) {
        _push(`<div class="flex items-center gap-4 p-3 bg-void/50 rounded-xl border border-glass-border/50"><div class="${ssrRenderClass(["text-3xl font-black w-12 h-12 flex items-center justify-center rounded-lg bg-app-text/5", __props.currentPlayer === "X" ? "marker-x" : "marker-o"])}">${ssrInterpolate(__props.currentPlayer)}</div><div class="flex-1 min-w-0"><p class="text-[8px] font-black uppercase tracking-widest text-app-text-muted opacity-40 mb-0.5">Current Operator</p><p class="text-xs font-bold text-app-text truncate">${ssrInterpolate(__props.currentPlayer === "X" ? __props.xPlayer?.name || "X Player" : __props.oPlayer?.name || "O Player")}</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex-1 flex flex-col gap-4">`);
      if (__props.selectedCell !== null && __props.isMyTurn) {
        _push(`<div class="glass p-5 rounded-[1.5rem] border-indigo-500/30 bg-indigo-500/[0.02] flex flex-col gap-4"><div class="text-center"><p class="text-[9px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-1">Tactical Confirmation</p><p class="text-app-text-muted text-[10px] font-medium leading-tight">Execute maneuver at selected coordinates.</p></div><div class="flex flex-col gap-2">`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("submit-move"),
          variant: "primary",
          size: "md",
          block: "",
          "icon-left": "pi pi-check-circle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Confirm Move `);
            } else {
              return [
                createTextVNode(" Confirm Move ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("clear-selection"),
          variant: "secondary",
          size: "sm",
          block: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Abort `);
            } else {
              return [
                createTextVNode(" Abort ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else if (__props.selectedHistoryIndex !== null) {
        _push(`<div class="glass p-6 rounded-[1.5rem] border-amber-500/20 bg-amber-500/[0.02] flex flex-col gap-4 text-center"><div class="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 flex items-center justify-center mx-auto"><i class="pi pi-history"></i></div><div class="space-y-1"><p class="text-[9px] font-black uppercase tracking-[0.3em] text-amber-500">History Mode</p><p class="text-lg font-black text-app-text italic">Move ${ssrInterpolate(__props.selectedHistoryIndex + 1)}</p></div>`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("clear-history"),
          variant: "secondary",
          size: "sm",
          block: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Return to Active `);
            } else {
              return [
                createTextVNode(" Return to Active ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (__props.game?.status === unref(GameStatus).WAITING_FOR_OPPONENT && !__props.isPlayerInGame) {
        _push(`<div class="glass p-6 rounded-[1.5rem] border-indigo-500/20 flex flex-col gap-4 text-center"><div class="w-12 h-12 rounded-xl glass border-indigo-500/10 flex items-center justify-center text-indigo-500/40 mx-auto"><i class="pi pi-plus text-xl"></i></div><div class="space-y-1"><h4 class="text-base font-black text-app-text uppercase italic">Join Operation</h4><p class="text-[8px] font-black uppercase tracking-widest text-app-text-muted opacity-40">Authorize to engage</p></div>`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("join-match"),
          disabled: __props.joining,
          loading: __props.joining,
          variant: "primary",
          size: "md",
          block: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Authorize `);
            } else {
              return [
                createTextVNode(" Authorize ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.isPlayerInGame && (__props.game?.status === unref(GameStatus).IN_PROGRESS || __props.game?.status === unref(GameStatus).WAITING_FOR_OPPONENT)) {
        _push(`<div class="mt-2"><div class="glass p-4 rounded-2xl border-glass-border flex items-center justify-between group hover:border-red-500/30 transition-all duration-500"><div class="flex items-center gap-3"><div class="w-8 h-8 rounded-lg bg-red-500/5 border border-red-500/10 flex items-center justify-center text-red-500/40 group-hover:bg-red-500/10 group-hover:text-red-500 transition-all"><i class="pi pi-flag text-[10px]"></i></div><div><p class="text-[8px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 leading-none mb-1">Termination</p><p class="text-[9px] font-bold text-app-text group-hover:text-red-400 transition-colors leading-none">Resignation</p></div></div>`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("abandon-click"),
          disabled: __props.abandoning,
          variant: "ghost",
          size: "sm",
          class: "text-red-400 hover:text-red-500"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate((__props.game?.moveHistory || []).length < 2 ? "Cancel" : "Abandon")}`);
            } else {
              return [
                createTextVNode(toDisplayString((__props.game?.moveHistory || []).length < 2 ? "Cancel" : "Abandon"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Game/TacticalDashboard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const route = useRoute();
    const router = useRouter();
    useSeoMeta({
      title: () => `Active Match #${route.params.id}`,
      description: () => `Live battle in progress for Match #${route.params.id} on Tixo. Precision tactics and fractal Tic-Tac-Toe strategies.`,
      ogTitle: () => `Active Match #${route.params.id} | Tixo`,
      ogDescription: () => `Live battle in progress for Match #${route.params.id} on Tixo. Precision tactics and fractal Tic-Tac-Toe strategies.`
    });
    const game = ref(null);
    const xPlayer = ref(null);
    const oPlayer = ref(null);
    const loading = ref(true);
    const joining = ref(false);
    const selectedCell = ref(null);
    const selectedHistoryIndex = ref(null);
    const showGameOverModal = ref(false);
    const showAbandonModal = ref(false);
    const showCreateGameDialog = ref(false);
    const abandoning = ref(false);
    const isAnalyzing = ref(false);
    const showAnalytics = ref(false);
    const triggerAnalysis = async () => {
      if (!game.value || game.value.status !== GameStatus.FINISHED && game.value.status !== GameStatus.CANCELLED) return;
      if (!authStore.isLoggedIn) {
        authStore.openLoginModal(route.fullPath);
        return;
      }
      showAnalytics.value = true;
      isAnalyzing.value = true;
      try {
        const success = await games.analyzeGame(game.value.$id);
        if (success) {
          const updatedGame = await games.getGame(game.value.$id);
          if (updatedGame) {
            game.value = updatedGame;
            const { tablesDB } = await import("../server.mjs").then((n) => n.w);
            const { Query } = await import("../server.mjs").then((n) => n.v);
            const response = await tablesDB.listRows({
              databaseId: "tixo",
              tableId: "game-analytics",
              queries: [Query.equal("gameId", game.value.$id)]
            });
            if (response.total > 0) {
              game.value.analytics = response.rows[0];
            }
          }
        }
      } catch (error) {
        console.error("Analysis failed:", error);
      } finally {
        isAnalyzing.value = false;
      }
    };
    let subscription = null;
    const handleAbandon = async () => {
      if (!game.value || abandoning.value) return;
      abandoning.value = true;
      try {
        const result = await games.abandonGame(game.value.$id);
        if (result?.success) {
          showAbandonModal.value = false;
          await fetchGame();
          showGameOverModal.value = true;
        }
      } catch (error) {
        console.error("Failed to abandon game:", error);
      } finally {
        abandoning.value = false;
      }
    };
    const historicalState = computed(() => {
      if (selectedHistoryIndex.value === null || !game.value) return null;
      const moves = game.value.moveHistory || [];
      const limit = selectedHistoryIndex.value + 1;
      const boardArray = ".".repeat(81).split("");
      const tileWinnersArray = ".".repeat(9).split("");
      for (let i = 0; i < limit; i++) {
        const move = moves[i];
        if (!move) continue;
        const symbol = i % 2 === 0 ? "X" : "O";
        const pos = coordToIndex(move);
        boardArray[pos] = symbol;
        const sbIdx = Math.floor(Math.floor(pos / 9) / 3) * 3 + Math.floor(pos % 9 / 3);
        const sb = getSmallBoard(boardArray.join(""), sbIdx);
        const winner = check3x3Winner(sb);
        if (winner && tileWinnersArray[sbIdx] === ".") {
          tileWinnersArray[sbIdx] = winner;
        }
      }
      return {
        board: boardArray.join(""),
        tileWinners: tileWinnersArray.join("")
      };
    });
    const highlightedHistoryCell = computed(() => {
      if (selectedHistoryIndex.value === null || !game.value || !game.value.moveHistory) return null;
      const move = game.value.moveHistory[selectedHistoryIndex.value];
      return move ? coordToIndex(move) : null;
    });
    const recommendedHistoryCell = computed(() => {
      const analyticsData = game.value?.analytics;
      if (selectedHistoryIndex.value === null || !analyticsData || !analyticsData.recommendations) return null;
      const rec = analyticsData.recommendations[selectedHistoryIndex.value];
      return rec ? coordToIndex(rec) : null;
    });
    const fetchPlayers = async () => {
      if (game.value?.xPlayerId) {
        xPlayer.value = await users.getUser(game.value.xPlayerId);
      }
      if (game.value?.oPlayerId) {
        oPlayer.value = await users.getUser(game.value.oPlayerId);
      }
    };
    const fetchGame = async () => {
      loading.value = true;
      const gameId = route.params.id;
      try {
        if (!authStore.user) {
          await authStore.checkAuth();
        }
        if (!gameId) {
          loading.value = false;
          return;
        }
        const gameData = await games.getGame(gameId);
        if (gameData) {
          game.value = gameData;
          await fetchPlayers();
          const isFinished = gameData.status === GameStatus.FINISHED || gameData.status === GameStatus.CANCELLED;
          const isAnalyzing2 = gameData.analysisStatus === "ANALYSIS_COMPLETE" || gameData.analysisStatus === "ANALYSIS_IN_PROCESS";
          if (isFinished) {
            showAnalytics.value = true;
            if (isAnalyzing2) {
              const { tablesDB } = await import("../server.mjs").then((n) => n.w);
              const { Query } = await import("../server.mjs").then((n) => n.v);
              const response = await tablesDB.listRows({
                databaseId: "tixo",
                tableId: "game-analytics",
                queries: [Query.equal("gameId", gameData.$id)]
              });
              if (response.total > 0 && game.value) {
                game.value.analytics = response.rows[0];
              }
            }
          }
        } else {
          console.error("Game not found");
        }
      } catch (error) {
        console.error("Failed to fetch game or user:", error);
      } finally {
        loading.value = false;
      }
    };
    const isGuest = computed(() => {
      return !authStore.isLoggedIn;
    });
    const handleGameEnd = async () => {
      if (!game.value) return;
      if (isGuest.value) {
        try {
          const { tablesDB } = await import("../server.mjs").then((n) => n.w);
          const { Query } = await import("../server.mjs").then((n) => n.v);
          const response = await tablesDB.listRows({
            databaseId: "tixo",
            tableId: "game-analytics",
            queries: [Query.equal("gameId", game.value.$id)]
          });
          if (response.total > 0) {
            if (false) ;
          }
        } catch (e) {
          console.error("Failed to save guest game data", e);
        }
      }
    };
    const joinMatch = async () => {
      if (!game.value || joining.value) return;
      if (!authStore.isLoggedIn) {
        authStore.openLoginModal(route.fullPath);
        return;
      }
      joining.value = true;
      try {
        const success = await games.joinGame(game.value.$id);
        if (success) {
          await fetchGame();
        }
      } catch (error) {
        console.error("Failed to join game:", error);
      } finally {
        joining.value = false;
      }
    };
    const isPlayerInGame = computed(() => {
      if (!game.value || !authStore.user) return false;
      if (game.value.isOnDevice) return game.value.creatorId === authStore.user.$id;
      return game.value.xPlayerId === authStore.user.$id || game.value.oPlayerId === authStore.user.$id;
    });
    const isMyTurn = computed(() => {
      if (!game.value || !authStore.user || game.value.status !== GameStatus.IN_PROGRESS)
        return false;
      if (isAITurn.value) return false;
      if (game.value.isOnDevice) return game.value.creatorId === authStore.user.$id;
      return game.value.nextPlayerId === authStore.user.$id;
    });
    const currentPlayer = computed(() => {
      if (!game.value) return "X";
      return (game.value.moveHistory?.length || 0) % 2 === 0 ? "X" : "O";
    });
    const isAITurn = computed(() => {
      if (!game.value || game.value.status !== GameStatus.IN_PROGRESS) return false;
      if (!game.value.isOnDevice) return false;
      const historyLen = game.value.moveHistory?.length || 0;
      if (game.value.requestedOpponentId?.startsWith("AI_O") && historyLen % 2 !== 0) return true;
      if (game.value.requestedOpponentId?.startsWith("AI_X") && historyLen % 2 === 0) return true;
      return false;
    });
    const isAILoading = ref(false);
    const makeAIMove = async () => {
      if (!game.value || !isAITurn.value || isAILoading.value) return;
      isAILoading.value = true;
      await new Promise((r) => setTimeout(r, 500));
      const state = rebuildGameState(game.value.moveHistory || []);
      const isX = game.value.requestedOpponentId?.startsWith("AI_X");
      const aiPlayer = isX ? Player.X : Player.O;
      const modelMatch = game.value.requestedOpponentId?.match(/AI_[XO]_(M[1-5])/);
      const modelName = modelMatch?.[1] || "M5";
      const model = AI_MODELS[modelName] || AI_MODELS["M5"];
      if (!model) return;
      await new Promise((r) => setTimeout(r, 50));
      const bestMove = getBestMove(state, model.depth, model.weights, aiPlayer, model.errorRate);
      if (bestMove !== -1) {
        const sbIdx = Math.floor(bestMove / 9);
        const cellIdx = bestMove % 9;
        const x = sbIdx % 3 * 3 + cellIdx % 3;
        const y = Math.floor(sbIdx / 3) * 3 + Math.floor(cellIdx / 3);
        const result = await games.submitMove(game.value.$id, x, y);
        await fetchGame();
        if (result?.status === GameStatus.FINISHED || result?.status === GameStatus.CANCELLED) {
          showGameOverModal.value = true;
          await handleGameEnd();
        }
      }
      isAILoading.value = false;
    };
    watch(
      isAITurn,
      (turn) => {
        if (turn) {
          makeAIMove();
        }
      },
      { immediate: true }
    );
    const displayBoard = computed(() => {
      if (!game.value) return ".".repeat(81);
      if (selectedCell.value === null) return game.value.board;
      const b = game.value.board.split("");
      while (b.length < 81) b.push(".");
      b[selectedCell.value] = currentPlayer.value;
      return b.join("");
    });
    const handleCellClick = (index) => {
      if (game.value?.status !== GameStatus.IN_PROGRESS) return;
      if (isGuest.value) {
        authStore.openLoginModal(route.fullPath);
        return;
      }
      if (!isPlayerInGame.value) return;
      if (!isMyTurn.value) return;
      if (selectedCell.value === index) {
        selectedCell.value = null;
      } else {
        if (isCellAvailable(index, game.value.board, game.value.availableMoves)) {
          selectedCell.value = index;
        }
      }
    };
    const submitMove = () => {
      if (selectedCell.value === null) return;
      if (!isPlayerInGame.value || !isMyTurn.value) return;
      const x = selectedCell.value % 9;
      const y = Math.floor(selectedCell.value / 9);
      games.submitMove(game.value?.$id ?? "", x, y).then((result) => {
        if (result?.success) {
          selectedCell.value = null;
          fetchGame().then(() => {
            if (result.status === GameStatus.FINISHED || result.status === GameStatus.CANCELLED) {
              showGameOverModal.value = true;
              handleGameEnd();
            }
          });
        }
      }).catch((error) => {
        console.error("Failed to submit move:", error);
      });
    };
    watch(() => route.params.id, (newId) => {
      if (newId) {
        fetchGame();
        if (subscription) subscription.close();
        import("../server.mjs").then((n) => n.w).then(({ realtime }) => {
          realtime.subscribe(
            [`databases.tixo.collections.games.documents.${newId}`],
            (response) => {
              if (response.events.some((e) => e.includes(".update") || e.includes(".patch"))) {
                const oldStatus = game.value?.status;
                const newGame = response.payload;
                game.value = newGame;
                fetchPlayers();
                if ((newGame.status === GameStatus.FINISHED || newGame.status === GameStatus.CANCELLED) && oldStatus && oldStatus !== GameStatus.FINISHED && oldStatus !== GameStatus.CANCELLED) {
                  showGameOverModal.value = true;
                }
              }
            }
          ).then((s) => subscription = s);
        });
      }
    });
    const matchResult = computed(() => {
      if (!game.value || !authStore.user) return "";
      if (game.value.status === GameStatus.CANCELLED) return "CANCELLED";
      if (game.value.winner === "None") return "";
      if (game.value.winner === "D" || game.value.winner === "TIE") return "DRAW";
      const userSymbol = game.value.xPlayerId === authStore.user.$id ? "X" : "O";
      return game.value.winner === userSymbol ? "WIN" : "LOSS";
    });
    const goBack = () => {
      router.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        "header-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$7, {
              game: game.value,
              "x-player": xPlayer.value,
              "o-player": oPlayer.value,
              onBack: goBack
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$7, {
                game: game.value,
                "x-player": xPlayer.value,
                "o-player": oPlayer.value,
                onBack: goBack
              }, null, 8, ["game", "x-player", "o-player"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loading.value) {
              _push2(`<div class="flex flex-col items-center justify-center min-h-[60vh]" data-v-25e30391${_scopeId}><i class="pi pi-spin pi-spinner text-4xl text-blue-500 mb-4" data-v-25e30391${_scopeId}></i><p class="text-app-text-muted opacity-40 animate-pulse" data-v-25e30391${_scopeId}>Loading game state...</p></div>`);
            } else if (!game.value) {
              _push2(`<div class="flex flex-col items-center justify-center min-h-[60vh] text-center" data-v-25e30391${_scopeId}><i class="pi pi-exclamation-triangle text-4xl text-amber-500 mb-4" data-v-25e30391${_scopeId}></i><h2 class="text-2xl font-bold text-app-text mb-2" data-v-25e30391${_scopeId}>Game Not Found</h2><p class="text-app-text-muted opacity-40 mb-6" data-v-25e30391${_scopeId}> The game you&#39;re looking for doesn&#39;t exist or has been removed. </p>`);
              _push2(ssrRenderComponent(BaseButton, {
                onClick: goBack,
                variant: "secondary",
                size: "md"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Go Back `);
                  } else {
                    return [
                      createTextVNode(" Go Back ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<div class="flex flex-col pb-12 h-full min-h-[calc(100vh-120px)] overflow-x-hidden px-4" data-v-25e30391${_scopeId}><div class="${ssrRenderClass([game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED || isPlayerInGame.value ? "lg:grid-cols-[140px_1fr_var(--right-panel-width)]" : "lg:grid-cols-[140px_1fr] lg:max-w-7xl mx-auto", "grid grid-cols-1 gap-12 transition-all duration-1000 ease-in-out w-full"])}" style="${ssrRenderStyle({ "--right-panel-width": showAnalytics.value || isGuest.value ? "800px" : "400px" })}" data-v-25e30391${_scopeId}>`);
              _push2(ssrRenderComponent(MatchTimeline, {
                class: "order-2 lg:order-1",
                "move-history": game.value.moveHistory || [],
                "selected-history-index": selectedHistoryIndex.value,
                "is-on-device": game.value.isOnDevice,
                onSelectMove: ($event) => selectedHistoryIndex.value = $event
              }, null, _parent2, _scopeId));
              _push2(`<div class="order-1 lg:order-2 flex flex-col items-center justify-center py-4 lg:py-0 min-h-[75vh] transition-all duration-1000 ease-in-out w-full" data-v-25e30391${_scopeId}><div class="flex flex-col items-center justify-center space-y-8 lg:space-y-16 w-full" data-v-25e30391${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$2, {
                "available-moves": selectedHistoryIndex.value !== null ? "" : game.value?.availableMoves,
                board: selectedHistoryIndex.value !== null ? historicalState.value?.board : displayBoard.value,
                "tile-winners": selectedHistoryIndex.value !== null ? historicalState.value?.tileWinners : game.value.tileWinners,
                "selected-cell": selectedCell.value,
                "highlighted-cell": highlightedHistoryCell.value,
                "recommended-cell": recommendedHistoryCell.value,
                "current-player": currentPlayer.value,
                readonly: selectedHistoryIndex.value !== null || game.value.status !== unref(GameStatus).IN_PROGRESS,
                onCellClick: handleCellClick
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                "game-status": game.value.status,
                "is-player-in-game": isPlayerInGame.value,
                "is-my-turn": isMyTurn.value,
                "is-a-i-turn": isAITurn.value,
                "current-player": currentPlayer.value,
                "selected-cell": selectedCell.value,
                "selected-history-index": selectedHistoryIndex.value,
                joining: joining.value,
                abandoning: abandoning.value,
                "move-history-count": (game.value?.moveHistory || []).length,
                onClearHistory: ($event) => selectedHistoryIndex.value = null,
                onClearSelection: ($event) => selectedCell.value = null,
                onSubmitMove: submitMove,
                onJoinMatch: joinMatch,
                onAbandonMatch: ($event) => showAbandonModal.value = true
              }, null, _parent2, _scopeId));
              _push2(`<div class="hidden lg:flex flex-col items-center gap-1 opacity-20 hover:opacity-100 transition-opacity pt-12 border-t border-glass-border w-full" data-v-25e30391${_scopeId}><span class="text-[8px] font-black uppercase tracking-[0.4em] text-app-text-muted opacity-20" data-v-25e30391${_scopeId}>Game Session Key</span><span class="text-[9px] mono text-app-text-muted opacity-30" data-v-25e30391${_scopeId}>${ssrInterpolate(game.value.$id)}</span></div></div></div>`);
              if (game.value) {
                _push2(`<div class="lg:hidden order-3 space-y-6 pb-12" data-v-25e30391${_scopeId}><div class="h-[1px] w-full bg-glass-border" data-v-25e30391${_scopeId}></div><div class="glass p-6 rounded-[2rem] border-glass-border space-y-4" data-v-25e30391${_scopeId}><div class="flex items-center gap-3 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]" data-v-25e30391${_scopeId}><i class="pi pi-info-circle" data-v-25e30391${_scopeId}></i><span data-v-25e30391${_scopeId}>Match Intelligence</span></div><div class="flex flex-col gap-4" data-v-25e30391${_scopeId}><div class="flex items-center justify-between" data-v-25e30391${_scopeId}><div class="flex items-center gap-3" data-v-25e30391${_scopeId}><div class="w-8 h-8 rounded-lg glass flex items-center justify-center marker-x font-black" data-v-25e30391${_scopeId}>X</div><div data-v-25e30391${_scopeId}><p class="text-xs font-bold text-app-text" data-v-25e30391${_scopeId}>${ssrInterpolate(game.value.requestedOpponentId?.startsWith("AI_X") ? "Tixo AI" : xPlayer.value?.name || "Pending")}</p>`);
                if (xPlayer.value?.rating && !game.value.requestedOpponentId?.startsWith("AI_X")) {
                  _push2(`<p class="text-[9px] mono text-indigo-400 font-black" data-v-25e30391${_scopeId}>Rating: ${ssrInterpolate(xPlayer.value.rating)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
                if (currentPlayer.value === "X" && game.value.status === unref(GameStatus).IN_PROGRESS) {
                  _push2(`<span class="w-2 h-2 rounded-full bg-red-400 animate-pulse" data-v-25e30391${_scopeId}></span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex items-center justify-center" data-v-25e30391${_scopeId}><span class="text-[9px] font-black text-app-text-muted opacity-20 uppercase tracking-[0.3em]" data-v-25e30391${_scopeId}>VS</span></div><div class="flex items-center justify-between" data-v-25e30391${_scopeId}><div class="flex items-center gap-3" data-v-25e30391${_scopeId}><div class="w-8 h-8 rounded-lg glass flex items-center justify-center marker-o font-black" data-v-25e30391${_scopeId}>O</div><div data-v-25e30391${_scopeId}><p class="text-xs font-bold text-app-text" data-v-25e30391${_scopeId}>${ssrInterpolate(game.value.requestedOpponentId?.startsWith("AI_O") ? "Tixo AI" : game.value.isOnDevice && !game.value.requestedOpponentId?.startsWith("AI_X") ? oPlayer.value?.name || "Local Player" : oPlayer.value?.name || "Waiting...")}</p>`);
                if (oPlayer.value?.rating && !game.value.requestedOpponentId?.startsWith("AI_O")) {
                  _push2(`<p class="text-[9px] mono text-indigo-400 font-black" data-v-25e30391${_scopeId}>Rating: ${ssrInterpolate(oPlayer.value.rating)}</p>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div>`);
                if (currentPlayer.value === "O" && game.value.status === unref(GameStatus).IN_PROGRESS) {
                  _push2(`<span class="w-2 h-2 rounded-full bg-blue-400 animate-pulse" data-v-25e30391${_scopeId}></span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div><div class="pt-4 border-t border-glass-border/30 flex items-center justify-between" data-v-25e30391${_scopeId}><span class="text-[9px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-25e30391${_scopeId}>Status</span><span class="${ssrRenderClass([
                  "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border",
                  game.value.status === unref(GameStatus).IN_PROGRESS ? "text-green-500 border-green-500/20 bg-green-500/5" : game.value.status === unref(GameStatus).FINISHED ? "text-blue-500 border-blue-500/20 bg-blue-500/5" : game.value.status === unref(GameStatus).CANCELLED ? "text-red-500 border-red-500/20 bg-red-500/5" : "text-amber-500 border-amber-500/20 bg-amber-500/5"
                ])}" data-v-25e30391${_scopeId}>${ssrInterpolate(game.value.status.replace(/_/g, " "))}</span></div></div><div class="flex flex-col items-center gap-1 opacity-20 pt-6" data-v-25e30391${_scopeId}><span class="text-[8px] font-black uppercase tracking-[0.4em] text-app-text-muted" data-v-25e30391${_scopeId}>Game Session Key</span><span class="text-[9px] mono text-app-text-muted" data-v-25e30391${_scopeId}>${ssrInterpolate(game.value.$id)}</span></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED || isPlayerInGame.value) {
                _push2(`<div class="hidden lg:flex flex-col shrink-0 transition-all duration-1000 ease-out p-4 relative items-center justify-center lg:order-3" style="${ssrRenderStyle({
                  width: showAnalytics.value || isGuest.value ? "800px" : "400px",
                  opacity: 1,
                  transform: "translateX(0)"
                })}" data-v-25e30391${_scopeId}>`);
                if (game.value.status !== unref(GameStatus).FINISHED && game.value.status !== unref(GameStatus).CANCELLED) {
                  _push2(`<div class="w-full h-full" data-v-25e30391${_scopeId}>`);
                  _push2(ssrRenderComponent(_sfc_main$1, {
                    game: game.value,
                    "x-player": xPlayer.value,
                    "o-player": oPlayer.value,
                    "is-player-in-game": isPlayerInGame.value,
                    "is-my-turn": isMyTurn.value,
                    "is-a-i-turn": isAITurn.value,
                    "current-player": currentPlayer.value,
                    "selected-cell": selectedCell.value,
                    "selected-history-index": selectedHistoryIndex.value,
                    joining: joining.value,
                    abandoning: abandoning.value,
                    onClearHistory: ($event) => selectedHistoryIndex.value = null,
                    onClearSelection: ($event) => selectedCell.value = null,
                    onSubmitMove: submitMove,
                    onJoinMatch: joinMatch,
                    onAbandonClick: ($event) => showAbandonModal.value = true
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<!--[-->`);
                  if (isGuest.value) {
                    _push2(`<div class="absolute inset-0 z-50 flex items-center justify-center p-8 bg-void/20 backdrop-blur-sm" data-v-25e30391${_scopeId}><div class="glass p-12 rounded-[3rem] border-indigo-500/30 flex flex-col items-center text-center space-y-8 shadow-2xl" data-v-25e30391${_scopeId}><div class="w-20 h-20 rounded-3xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500" data-v-25e30391${_scopeId}><i class="pi pi-lock text-3xl" data-v-25e30391${_scopeId}></i></div><div class="space-y-2" data-v-25e30391${_scopeId}><h4 class="text-2xl font-black text-app-text uppercase italic" data-v-25e30391${_scopeId}>Intelligence Locked</h4><p class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-25e30391${_scopeId}>Log in to unlock full move analysis</p></div>`);
                    _push2(ssrRenderComponent(BaseButton, {
                      onClick: ($event) => unref(authStore).openLoginModal(unref(route).fullPath),
                      variant: "primary",
                      size: "md",
                      block: ""
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(` Authorize to Unlock `);
                        } else {
                          return [
                            createTextVNode(" Authorize to Unlock ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent2, _scopeId));
                    _push2(`</div></div>`);
                  } else {
                    _push2(`<div class="${ssrRenderClass([{ "blur-md": isGuest.value }, "h-full w-full"])}" data-v-25e30391${_scopeId}>`);
                    if (showAnalytics.value || isGuest.value) {
                      _push2(ssrRenderComponent(GameAnalyticsDashboard, {
                        "game-id": game.value.$id,
                        winner: game.value.winner,
                        "selected-turn": selectedHistoryIndex.value,
                        "analysis-status": game.value.analysisStatus,
                        onTurnSelect: ($event) => selectedHistoryIndex.value = $event,
                        onTriggerAnalysis: triggerAnalysis
                      }, null, _parent2, _scopeId));
                    } else {
                      _push2(`<!---->`);
                    }
                    _push2(`</div>`);
                  }
                  _push2(`<!--]-->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if ((game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED) && game.value) {
                _push2(`<div class="lg:hidden mt-8 px-4 pb-12 relative" data-v-25e30391${_scopeId}><h3 class="text-xl font-black text-app-text uppercase italic mb-6" data-v-25e30391${_scopeId}> Tactical Analysis<span class="text-indigo-500" data-v-25e30391${_scopeId}>.</span></h3>`);
                if (isGuest.value) {
                  _push2(`<div class="absolute inset-0 z-50 flex items-center justify-center p-8 bg-void/20 backdrop-blur-sm" data-v-25e30391${_scopeId}><div class="glass p-8 rounded-[2rem] border-indigo-500/30 flex flex-col items-center text-center space-y-6 shadow-2xl" data-v-25e30391${_scopeId}><p class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-25e30391${_scopeId}>Log in to unlock full move analysis</p>`);
                  _push2(ssrRenderComponent(BaseButton, {
                    onClick: ($event) => unref(authStore).openLoginModal(unref(route).fullPath),
                    variant: "primary",
                    size: "md",
                    block: ""
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` Authorize to Unlock `);
                      } else {
                        return [
                          createTextVNode(" Authorize to Unlock ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="${ssrRenderClass({ "blur-md pointer-events-none": isGuest.value })}" data-v-25e30391${_scopeId}>`);
                _push2(ssrRenderComponent(GameAnalyticsDashboard, {
                  "game-id": game.value.$id,
                  winner: game.value.winner,
                  "selected-turn": selectedHistoryIndex.value,
                  "analysis-status": game.value.analysisStatus,
                  onTurnSelect: ($event) => selectedHistoryIndex.value = $event,
                  onTriggerAnalysis: triggerAnalysis
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
            _push2(ssrRenderComponent(_sfc_main$4, {
              show: showAbandonModal.value,
              game: game.value,
              abandoning: abandoning.value,
              onClose: ($event) => showAbandonModal.value = false,
              onConfirm: handleAbandon
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              show: showGameOverModal.value,
              "match-result": matchResult.value,
              onClose: ($event) => showGameOverModal.value = false,
              onCreateNew: ($event) => {
                showCreateGameDialog.value = true;
                showGameOverModal.value = false;
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, {
              visible: showCreateGameDialog.value,
              onClose: ($event) => showCreateGameDialog.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              loading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col items-center justify-center min-h-[60vh]"
              }, [
                createVNode("i", { class: "pi pi-spin pi-spinner text-4xl text-blue-500 mb-4" }),
                createVNode("p", { class: "text-app-text-muted opacity-40 animate-pulse" }, "Loading game state...")
              ])) : !game.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "flex flex-col items-center justify-center min-h-[60vh] text-center"
              }, [
                createVNode("i", { class: "pi pi-exclamation-triangle text-4xl text-amber-500 mb-4" }),
                createVNode("h2", { class: "text-2xl font-bold text-app-text mb-2" }, "Game Not Found"),
                createVNode("p", { class: "text-app-text-muted opacity-40 mb-6" }, " The game you're looking for doesn't exist or has been removed. "),
                createVNode(BaseButton, {
                  onClick: goBack,
                  variant: "secondary",
                  size: "md"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Go Back ")
                  ]),
                  _: 1
                })
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: "flex flex-col pb-12 h-full min-h-[calc(100vh-120px)] overflow-x-hidden px-4"
              }, [
                createVNode("div", {
                  class: ["grid grid-cols-1 gap-12 transition-all duration-1000 ease-in-out w-full", game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED || isPlayerInGame.value ? "lg:grid-cols-[140px_1fr_var(--right-panel-width)]" : "lg:grid-cols-[140px_1fr] lg:max-w-7xl mx-auto"],
                  style: { "--right-panel-width": showAnalytics.value || isGuest.value ? "800px" : "400px" }
                }, [
                  createVNode(MatchTimeline, {
                    class: "order-2 lg:order-1",
                    "move-history": game.value.moveHistory || [],
                    "selected-history-index": selectedHistoryIndex.value,
                    "is-on-device": game.value.isOnDevice,
                    onSelectMove: ($event) => selectedHistoryIndex.value = $event
                  }, null, 8, ["move-history", "selected-history-index", "is-on-device", "onSelectMove"]),
                  createVNode("div", { class: "order-1 lg:order-2 flex flex-col items-center justify-center py-4 lg:py-0 min-h-[75vh] transition-all duration-1000 ease-in-out w-full" }, [
                    createVNode("div", { class: "flex flex-col items-center justify-center space-y-8 lg:space-y-16 w-full" }, [
                      createVNode(_sfc_main$2, {
                        "available-moves": selectedHistoryIndex.value !== null ? "" : game.value?.availableMoves,
                        board: selectedHistoryIndex.value !== null ? historicalState.value?.board : displayBoard.value,
                        "tile-winners": selectedHistoryIndex.value !== null ? historicalState.value?.tileWinners : game.value.tileWinners,
                        "selected-cell": selectedCell.value,
                        "highlighted-cell": highlightedHistoryCell.value,
                        "recommended-cell": recommendedHistoryCell.value,
                        "current-player": currentPlayer.value,
                        readonly: selectedHistoryIndex.value !== null || game.value.status !== unref(GameStatus).IN_PROGRESS,
                        onCellClick: handleCellClick
                      }, null, 8, ["available-moves", "board", "tile-winners", "selected-cell", "highlighted-cell", "recommended-cell", "current-player", "readonly"]),
                      createVNode(_sfc_main$3, {
                        "game-status": game.value.status,
                        "is-player-in-game": isPlayerInGame.value,
                        "is-my-turn": isMyTurn.value,
                        "is-a-i-turn": isAITurn.value,
                        "current-player": currentPlayer.value,
                        "selected-cell": selectedCell.value,
                        "selected-history-index": selectedHistoryIndex.value,
                        joining: joining.value,
                        abandoning: abandoning.value,
                        "move-history-count": (game.value?.moveHistory || []).length,
                        onClearHistory: ($event) => selectedHistoryIndex.value = null,
                        onClearSelection: ($event) => selectedCell.value = null,
                        onSubmitMove: submitMove,
                        onJoinMatch: joinMatch,
                        onAbandonMatch: ($event) => showAbandonModal.value = true
                      }, null, 8, ["game-status", "is-player-in-game", "is-my-turn", "is-a-i-turn", "current-player", "selected-cell", "selected-history-index", "joining", "abandoning", "move-history-count", "onClearHistory", "onClearSelection", "onAbandonMatch"]),
                      createVNode("div", { class: "hidden lg:flex flex-col items-center gap-1 opacity-20 hover:opacity-100 transition-opacity pt-12 border-t border-glass-border w-full" }, [
                        createVNode("span", { class: "text-[8px] font-black uppercase tracking-[0.4em] text-app-text-muted opacity-20" }, "Game Session Key"),
                        createVNode("span", { class: "text-[9px] mono text-app-text-muted opacity-30" }, toDisplayString(game.value.$id), 1)
                      ])
                    ])
                  ]),
                  game.value ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "lg:hidden order-3 space-y-6 pb-12"
                  }, [
                    createVNode("div", { class: "h-[1px] w-full bg-glass-border" }),
                    createVNode("div", { class: "glass p-6 rounded-[2rem] border-glass-border space-y-4" }, [
                      createVNode("div", { class: "flex items-center gap-3 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]" }, [
                        createVNode("i", { class: "pi pi-info-circle" }),
                        createVNode("span", null, "Match Intelligence")
                      ]),
                      createVNode("div", { class: "flex flex-col gap-4" }, [
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("div", { class: "w-8 h-8 rounded-lg glass flex items-center justify-center marker-x font-black" }, "X"),
                            createVNode("div", null, [
                              createVNode("p", { class: "text-xs font-bold text-app-text" }, toDisplayString(game.value.requestedOpponentId?.startsWith("AI_X") ? "Tixo AI" : xPlayer.value?.name || "Pending"), 1),
                              xPlayer.value?.rating && !game.value.requestedOpponentId?.startsWith("AI_X") ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-[9px] mono text-indigo-400 font-black"
                              }, "Rating: " + toDisplayString(xPlayer.value.rating), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          currentPlayer.value === "X" && game.value.status === unref(GameStatus).IN_PROGRESS ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "w-2 h-2 rounded-full bg-red-400 animate-pulse"
                          })) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "flex items-center justify-center" }, [
                          createVNode("span", { class: "text-[9px] font-black text-app-text-muted opacity-20 uppercase tracking-[0.3em]" }, "VS")
                        ]),
                        createVNode("div", { class: "flex items-center justify-between" }, [
                          createVNode("div", { class: "flex items-center gap-3" }, [
                            createVNode("div", { class: "w-8 h-8 rounded-lg glass flex items-center justify-center marker-o font-black" }, "O"),
                            createVNode("div", null, [
                              createVNode("p", { class: "text-xs font-bold text-app-text" }, toDisplayString(game.value.requestedOpponentId?.startsWith("AI_O") ? "Tixo AI" : game.value.isOnDevice && !game.value.requestedOpponentId?.startsWith("AI_X") ? oPlayer.value?.name || "Local Player" : oPlayer.value?.name || "Waiting..."), 1),
                              oPlayer.value?.rating && !game.value.requestedOpponentId?.startsWith("AI_O") ? (openBlock(), createBlock("p", {
                                key: 0,
                                class: "text-[9px] mono text-indigo-400 font-black"
                              }, "Rating: " + toDisplayString(oPlayer.value.rating), 1)) : createCommentVNode("", true)
                            ])
                          ]),
                          currentPlayer.value === "O" && game.value.status === unref(GameStatus).IN_PROGRESS ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "w-2 h-2 rounded-full bg-blue-400 animate-pulse"
                          })) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "pt-4 border-t border-glass-border/30 flex items-center justify-between" }, [
                        createVNode("span", { class: "text-[9px] font-black uppercase tracking-widest text-app-text-muted opacity-40" }, "Status"),
                        createVNode("span", {
                          class: [
                            "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded border",
                            game.value.status === unref(GameStatus).IN_PROGRESS ? "text-green-500 border-green-500/20 bg-green-500/5" : game.value.status === unref(GameStatus).FINISHED ? "text-blue-500 border-blue-500/20 bg-blue-500/5" : game.value.status === unref(GameStatus).CANCELLED ? "text-red-500 border-red-500/20 bg-red-500/5" : "text-amber-500 border-amber-500/20 bg-amber-500/5"
                          ]
                        }, toDisplayString(game.value.status.replace(/_/g, " ")), 3)
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col items-center gap-1 opacity-20 pt-6" }, [
                      createVNode("span", { class: "text-[8px] font-black uppercase tracking-[0.4em] text-app-text-muted" }, "Game Session Key"),
                      createVNode("span", { class: "text-[9px] mono text-app-text-muted" }, toDisplayString(game.value.$id), 1)
                    ])
                  ])) : createCommentVNode("", true),
                  game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED || isPlayerInGame.value ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "hidden lg:flex flex-col shrink-0 transition-all duration-1000 ease-out p-4 relative items-center justify-center lg:order-3",
                    style: {
                      width: showAnalytics.value || isGuest.value ? "800px" : "400px",
                      opacity: 1,
                      transform: "translateX(0)"
                    }
                  }, [
                    game.value.status !== unref(GameStatus).FINISHED && game.value.status !== unref(GameStatus).CANCELLED ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "w-full h-full"
                    }, [
                      createVNode(_sfc_main$1, {
                        game: game.value,
                        "x-player": xPlayer.value,
                        "o-player": oPlayer.value,
                        "is-player-in-game": isPlayerInGame.value,
                        "is-my-turn": isMyTurn.value,
                        "is-a-i-turn": isAITurn.value,
                        "current-player": currentPlayer.value,
                        "selected-cell": selectedCell.value,
                        "selected-history-index": selectedHistoryIndex.value,
                        joining: joining.value,
                        abandoning: abandoning.value,
                        onClearHistory: ($event) => selectedHistoryIndex.value = null,
                        onClearSelection: ($event) => selectedCell.value = null,
                        onSubmitMove: submitMove,
                        onJoinMatch: joinMatch,
                        onAbandonClick: ($event) => showAbandonModal.value = true
                      }, null, 8, ["game", "x-player", "o-player", "is-player-in-game", "is-my-turn", "is-a-i-turn", "current-player", "selected-cell", "selected-history-index", "joining", "abandoning", "onClearHistory", "onClearSelection", "onAbandonClick"])
                    ])) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      isGuest.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "absolute inset-0 z-50 flex items-center justify-center p-8 bg-void/20 backdrop-blur-sm"
                      }, [
                        createVNode("div", { class: "glass p-12 rounded-[3rem] border-indigo-500/30 flex flex-col items-center text-center space-y-8 shadow-2xl" }, [
                          createVNode("div", { class: "w-20 h-20 rounded-3xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500" }, [
                            createVNode("i", { class: "pi pi-lock text-3xl" })
                          ]),
                          createVNode("div", { class: "space-y-2" }, [
                            createVNode("h4", { class: "text-2xl font-black text-app-text uppercase italic" }, "Intelligence Locked"),
                            createVNode("p", { class: "text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" }, "Log in to unlock full move analysis")
                          ]),
                          createVNode(BaseButton, {
                            onClick: ($event) => unref(authStore).openLoginModal(unref(route).fullPath),
                            variant: "primary",
                            size: "md",
                            block: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Authorize to Unlock ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: ["h-full w-full", { "blur-md": isGuest.value }]
                      }, [
                        createVNode(Transition, {
                          "enter-active-class": "transition duration-1000 ease-out",
                          "enter-from-class": "opacity-0 translate-x-20",
                          "enter-to-class": "opacity-100 translate-x-0"
                        }, {
                          default: withCtx(() => [
                            showAnalytics.value || isGuest.value ? (openBlock(), createBlock(GameAnalyticsDashboard, {
                              key: 0,
                              "game-id": game.value.$id,
                              winner: game.value.winner,
                              "selected-turn": selectedHistoryIndex.value,
                              "analysis-status": game.value.analysisStatus,
                              onTurnSelect: ($event) => selectedHistoryIndex.value = $event,
                              onTriggerAnalysis: triggerAnalysis
                            }, null, 8, ["game-id", "winner", "selected-turn", "analysis-status", "onTurnSelect"])) : createCommentVNode("", true)
                          ]),
                          _: 1
                        })
                      ], 2))
                    ], 64))
                  ], 4)) : createCommentVNode("", true)
                ], 6),
                createVNode(Transition, {
                  "enter-active-class": "transition duration-1000 ease-out",
                  "enter-from-class": "opacity-0 translate-y-20",
                  "enter-to-class": "opacity-100 translate-y-0"
                }, {
                  default: withCtx(() => [
                    (game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED) && game.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "lg:hidden mt-8 px-4 pb-12 relative"
                    }, [
                      createVNode("h3", { class: "text-xl font-black text-app-text uppercase italic mb-6" }, [
                        createTextVNode(" Tactical Analysis"),
                        createVNode("span", { class: "text-indigo-500" }, ".")
                      ]),
                      isGuest.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "absolute inset-0 z-50 flex items-center justify-center p-8 bg-void/20 backdrop-blur-sm"
                      }, [
                        createVNode("div", { class: "glass p-8 rounded-[2rem] border-indigo-500/30 flex flex-col items-center text-center space-y-6 shadow-2xl" }, [
                          createVNode("p", { class: "text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" }, "Log in to unlock full move analysis"),
                          createVNode(BaseButton, {
                            onClick: ($event) => unref(authStore).openLoginModal(unref(route).fullPath),
                            variant: "primary",
                            size: "md",
                            block: ""
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Authorize to Unlock ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", {
                        class: { "blur-md pointer-events-none": isGuest.value }
                      }, [
                        createVNode(GameAnalyticsDashboard, {
                          "game-id": game.value.$id,
                          winner: game.value.winner,
                          "selected-turn": selectedHistoryIndex.value,
                          "analysis-status": game.value.analysisStatus,
                          onTurnSelect: ($event) => selectedHistoryIndex.value = $event,
                          onTriggerAnalysis: triggerAnalysis
                        }, null, 8, ["game-id", "winner", "selected-turn", "analysis-status", "onTurnSelect"])
                      ], 2)
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])),
              createVNode(_sfc_main$4, {
                show: showAbandonModal.value,
                game: game.value,
                abandoning: abandoning.value,
                onClose: ($event) => showAbandonModal.value = false,
                onConfirm: handleAbandon
              }, null, 8, ["show", "game", "abandoning", "onClose"]),
              createVNode(_sfc_main$5, {
                show: showGameOverModal.value,
                "match-result": matchResult.value,
                onClose: ($event) => showGameOverModal.value = false,
                onCreateNew: ($event) => {
                  showCreateGameDialog.value = true;
                  showGameOverModal.value = false;
                }
              }, null, 8, ["show", "match-result", "onClose", "onCreateNew"]),
              createVNode(_sfc_main$6, {
                visible: showCreateGameDialog.value,
                onClose: ($event) => showCreateGameDialog.value = false
              }, null, 8, ["visible", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/game/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25e30391"]]);
export {
  _id_ as default
};
