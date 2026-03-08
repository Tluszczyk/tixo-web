import { defineComponent, ref, computed, watch, mergeProps, withCtx, unref, createBlock, createVNode, openBlock, createCommentVNode, toDisplayString, Transition, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc, d as useAuthStore, g as useRoute, u as useRouter, i as realtime } from './server.mjs';
import { g as games } from './games-BVE3tVOm.mjs';
import { u as users } from './users-x0j5YX6M.mjs';
import { G as GameStatus } from './GameStatus-DcfBG9k6.mjs';
import { B as Board } from './Board-BO2ZmLpn.mjs';
import { _ as _sfc_main$4 } from './CreateGameDialog-Br11fDxN.mjs';
import { D as DashboardLayout } from './DashboardLayout-Cyy2dxQQ.mjs';
import { c as coordToIndex, g as getSmallBoard, a as check3x3Winner, M as MatchTimeline, _ as _sfc_main$3, G as GameAnalyticsDashboard, b as _sfc_main$1, d as _sfc_main$2, e as _sfc_main$5, r as rebuildGameState, P as Player, f as getBestMove, A as AI_MODELS, i as isCellAvailable } from './GameHeader-BbjoHctG.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '@primevue/core/base/style';
import '@primevue/core/basecomponent/style';
import '@primeuix/styles/autocomplete';
import '@primeuix/utils/object';
import '@primeuix/styles/cascadeselect';
import '@primeuix/styles/checkbox';
import '@primeuix/styles/checkboxgroup';
import '@primeuix/styles/colorpicker';
import '@primeuix/styles/datepicker';
import '@primeuix/styles/floatlabel';
import '@primeuix/styles/iconfield';
import '@primeuix/styles/iftalabel';
import '@primeuix/styles/inputchips';
import '@primeuix/styles/inputgroup';
import '@primeuix/styles/inputnumber';
import '@primeuix/styles/inputotp';
import '@primeuix/styles/inputtext';
import '@primeuix/styles/knob';
import '@primeuix/styles/listbox';
import '@primeuix/styles/multiselect';
import '@primeuix/styles/password';
import '@primeuix/styles/radiobutton';
import '@primeuix/styles/radiobuttongroup';
import '@primeuix/styles/rating';
import '@primeuix/styles/select';
import '@primeuix/styles/selectbutton';
import '@primeuix/styles/slider';
import '@primeuix/styles/textarea';
import '@primeuix/styles/togglebutton';
import '@primeuix/styles/toggleswitch';
import '@primeuix/styles/treeselect';
import '@primeuix/styles/button';
import '@primeuix/styles/buttongroup';
import '@primeuix/styles/speeddial';
import '@primeuix/styles/splitbutton';
import '@primeuix/styles/datatable';
import '@primeuix/styles/dataview';
import '@primeuix/styles/orderlist';
import '@primeuix/styles/organizationchart';
import '@primeuix/styles/paginator';
import '@primeuix/styles/picklist';
import '@primeuix/styles/tree';
import '@primeuix/styles/treetable';
import '@primeuix/styles/timeline';
import '@primeuix/styles/virtualscroller';
import '@primeuix/styles/accordion';
import '@primeuix/styles/card';
import '@primeuix/styles/divider';
import '@primeuix/styles/fieldset';
import '@primeuix/styles/panel';
import '@primeuix/styles/scrollpanel';
import '@primeuix/styles/splitter';
import '@primeuix/styles/stepper';
import '@primeuix/styles/tabview';
import '@primeuix/styles/tabs';
import '@primeuix/styles/toolbar';
import '@primeuix/styles/confirmdialog';
import '@primeuix/styles/confirmpopup';
import '@primeuix/styles/dialog';
import '@primeuix/styles/drawer';
import '@primeuix/styles/popover';
import '@primeuix/styles/fileupload';
import '@primeuix/styles/breadcrumb';
import '@primeuix/styles/contextmenu';
import '@primeuix/styles/dock';
import '@primeuix/styles/menu';
import '@primeuix/styles/menubar';
import '@primeuix/styles/megamenu';
import '@primeuix/styles/panelmenu';
import '@primeuix/styles/steps';
import '@primeuix/styles/tabmenu';
import '@primeuix/styles/tieredmenu';
import '@primeuix/styles/message';
import '@primeuix/styles/inlinemessage';
import '@primeuix/styles/toast';
import '@primeuix/styles/carousel';
import '@primeuix/styles/galleria';
import '@primeuix/styles/image';
import '@primeuix/styles/imagecompare';
import '@primeuix/styles/avatar';
import '@primeuix/styles/badge';
import '@primeuix/styles/blockui';
import '@primeuix/styles/chip';
import '@primeuix/styles/inplace';
import '@primeuix/styles/metergroup';
import '@primeuix/styles/overlaybadge';
import '@primeuix/styles/scrolltop';
import '@primeuix/styles/skeleton';
import '@primeuix/styles/progressbar';
import '@primeuix/styles/progressspinner';
import '@primeuix/styles/tag';
import '@primeuix/styles/terminal';
import '@primevue/forms/form/style';
import '@primevue/forms/formfield/style';
import '@primeuix/styles/tooltip';
import '@primeuix/styles/ripple';
import '@primeuix/styled';
import 'node:url';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import 'appwrite';
import 'echarts/core';
import 'echarts/renderers';
import 'echarts/charts';
import 'echarts/components';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const route = useRoute();
    const router = useRouter();
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
            const { tablesDB } = await import('./server.mjs').then((n) => n.q);
            const { Query } = await import('appwrite');
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
        const success = await games.abandonGame(game.value.$id);
        if (success) {
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
      var _a;
      const analyticsData = (_a = game.value) == null ? void 0 : _a.analytics;
      if (selectedHistoryIndex.value === null || !analyticsData || !analyticsData.recommendations) return null;
      const rec = analyticsData.recommendations[selectedHistoryIndex.value];
      return rec ? coordToIndex(rec) : null;
    });
    const fetchPlayers = async () => {
      var _a, _b;
      if ((_a = game.value) == null ? void 0 : _a.xPlayerId) {
        xPlayer.value = await users.getUser(game.value.xPlayerId);
      }
      if ((_b = game.value) == null ? void 0 : _b.oPlayerId) {
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
          if (isFinished && isAnalyzing2) {
            showAnalytics.value = true;
            const { tablesDB } = await import('./server.mjs').then((n) => n.q);
            const { Query } = await import('appwrite');
            const response = await tablesDB.listRows({
              databaseId: "tixo",
              tableId: "game-analytics",
              queries: [Query.equal("gameId", gameData.$id)]
            });
            if (response.total > 0 && game.value) {
              game.value.analytics = response.rows[0];
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
          const { tablesDB } = await import('./server.mjs').then((n) => n.q);
          const { Query } = await import('appwrite');
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
      var _a;
      if (!game.value) return "X";
      return (((_a = game.value.moveHistory) == null ? void 0 : _a.length) || 0) % 2 === 0 ? "X" : "O";
    });
    const isAITurn = computed(() => {
      var _a, _b, _c;
      if (!game.value || game.value.status !== GameStatus.IN_PROGRESS) return false;
      if (!game.value.isOnDevice) return false;
      const historyLen = ((_a = game.value.moveHistory) == null ? void 0 : _a.length) || 0;
      if (((_b = game.value.requestedOpponentId) == null ? void 0 : _b.startsWith("AI_O")) && historyLen % 2 !== 0) return true;
      if (((_c = game.value.requestedOpponentId) == null ? void 0 : _c.startsWith("AI_X")) && historyLen % 2 === 0) return true;
      return false;
    });
    const isAILoading = ref(false);
    const makeAIMove = async () => {
      var _a, _b;
      if (!game.value || !isAITurn.value || isAILoading.value) return;
      isAILoading.value = true;
      await new Promise((r) => setTimeout(r, 500));
      const state = rebuildGameState(game.value.moveHistory || []);
      const isX = (_a = game.value.requestedOpponentId) == null ? void 0 : _a.startsWith("AI_X");
      const aiPlayer = isX ? Player.X : Player.O;
      const modelMatch = (_b = game.value.requestedOpponentId) == null ? void 0 : _b.match(/AI_[XO]_(M[1-5])/);
      const modelName = (modelMatch == null ? void 0 : modelMatch[1]) || "M5";
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
        if ((result == null ? void 0 : result.status) === GameStatus.FINISHED || (result == null ? void 0 : result.status) === GameStatus.CANCELLED) {
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
      var _a;
      if (((_a = game.value) == null ? void 0 : _a.status) !== GameStatus.IN_PROGRESS) return;
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
      var _a, _b;
      if (selectedCell.value === null) return;
      if (!isPlayerInGame.value || !isMyTurn.value) return;
      const x = selectedCell.value % 9;
      const y = Math.floor(selectedCell.value / 9);
      games.submitMove((_b = (_a = game.value) == null ? void 0 : _a.$id) != null ? _b : "", x, y).then((result) => {
        if (result == null ? void 0 : result.success) {
          selectedCell.value = null;
          fetchGame().then(() => {
            if (result.status === GameStatus.FINISHED || result.status === GameStatus.CANCELLED) {
              showGameOverModal.value = true;
              handleGameEnd();
            }
          });
        }
      });
    };
    watch(() => route.params.id, (newId) => {
      if (newId) {
        fetchGame();
        if (subscription) subscription.close();
        realtime.subscribe(
          [`databases.tixo.collections.games.documents.${newId}`],
          (response) => {
            var _a;
            if (response.events.some((e) => e.includes(".update") || e.includes(".patch"))) {
              const oldStatus = (_a = game.value) == null ? void 0 : _a.status;
              const newGame = response.payload;
              game.value = newGame;
              fetchPlayers();
              if ((newGame.status === GameStatus.FINISHED || newGame.status === GameStatus.CANCELLED) && oldStatus && oldStatus !== GameStatus.FINISHED && oldStatus !== GameStatus.CANCELLED) {
                showGameOverModal.value = true;
              }
            }
          }
        ).then((s) => subscription = s);
      }
    });
    const matchResult = computed(() => {
      if (!game.value || !authStore.user) return "";
      if (game.value.status === GameStatus.CANCELLED) return "CANCELLED";
      if (game.value.winner === "None") return "";
      if (game.value.winner === "D") return "DRAW";
      const userSymbol = game.value.xPlayerId === authStore.user.$id ? "X" : "O";
      return game.value.winner === userSymbol ? "WIN" : "LOSS";
    });
    const goBack = () => {
      router.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contents" }, _attrs))} data-v-2eb4f406>`);
      _push(ssrRenderComponent(DashboardLayout, null, {
        "header-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              game: game.value,
              "x-player": xPlayer.value,
              "o-player": oPlayer.value,
              onBack: goBack
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$5, {
                game: game.value,
                "x-player": xPlayer.value,
                "o-player": oPlayer.value,
                onBack: goBack
              }, null, 8, ["game", "x-player", "o-player"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            if (loading.value) {
              _push2(`<div class="flex flex-col items-center justify-center min-h-[60vh]" data-v-2eb4f406${_scopeId}><i class="pi pi-spin pi-spinner text-4xl text-blue-500 mb-4" data-v-2eb4f406${_scopeId}></i><p class="text-app-text-muted opacity-40 animate-pulse" data-v-2eb4f406${_scopeId}>Loading game state...</p></div>`);
            } else if (!game.value) {
              _push2(`<div class="flex flex-col items-center justify-center min-h-[60vh] text-center" data-v-2eb4f406${_scopeId}><i class="pi pi-exclamation-triangle text-4xl text-amber-500 mb-4" data-v-2eb4f406${_scopeId}></i><h2 class="text-2xl font-bold text-app-text mb-2" data-v-2eb4f406${_scopeId}>Game Not Found</h2><p class="text-app-text-muted opacity-40 mb-6" data-v-2eb4f406${_scopeId}> The game you&#39;re looking for doesn&#39;t exist or has been removed. </p><button class="px-6 py-2 rounded-xl bg-glass-white text-app-text font-bold hover:bg-indigo-500/20 transition-all border border-glass-border" data-v-2eb4f406${_scopeId}> Go Back </button></div>`);
            } else {
              _push2(`<div class="flex flex-col pb-12 h-full min-h-[calc(100vh-120px)] overflow-x-hidden px-4" data-v-2eb4f406${_scopeId}><div class="${ssrRenderClass([game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED ? "lg:grid-cols-[120px_1fr_var(--analytics-width)]" : "lg:grid-cols-[120px_1fr] lg:max-w-7xl mx-auto", "grid grid-cols-1 gap-12 transition-all duration-1000 ease-in-out w-full"])}" style="${ssrRenderStyle({ "--analytics-width": showAnalytics.value || isGuest.value ? "800px" : "400px" })}" data-v-2eb4f406${_scopeId}>`);
              _push2(ssrRenderComponent(MatchTimeline, {
                "move-history": game.value.moveHistory || [],
                "selected-history-index": selectedHistoryIndex.value,
                "is-on-device": game.value.isOnDevice,
                onSelectMove: ($event) => selectedHistoryIndex.value = $event
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex flex-col items-center justify-center py-4 lg:py-0 min-h-[75vh] transition-all duration-1000 ease-in-out w-full" data-v-2eb4f406${_scopeId}><div class="flex flex-col items-center justify-center space-y-8 lg:space-y-16 w-full" data-v-2eb4f406${_scopeId}>`);
              _push2(ssrRenderComponent(Board, {
                "available-moves": selectedHistoryIndex.value !== null ? "" : (_a = game.value) == null ? void 0 : _a.availableMoves,
                board: selectedHistoryIndex.value !== null ? (_b = historicalState.value) == null ? void 0 : _b.board : displayBoard.value,
                "tile-winners": selectedHistoryIndex.value !== null ? (_c = historicalState.value) == null ? void 0 : _c.tileWinners : game.value.tileWinners,
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
                onClearHistory: ($event) => selectedHistoryIndex.value = null,
                onClearSelection: ($event) => selectedCell.value = null,
                onSubmitMove: submitMove,
                onJoinMatch: joinMatch,
                onAbandonMatch: ($event) => showAbandonModal.value = true
              }, null, _parent2, _scopeId));
              _push2(`<div class="flex flex-col items-center gap-1 opacity-20 hover:opacity-100 transition-opacity pt-12 border-t border-glass-border w-full" data-v-2eb4f406${_scopeId}><span class="text-[8px] font-black uppercase tracking-[0.4em] text-app-text-muted opacity-20" data-v-2eb4f406${_scopeId}>Game Session Key</span><span class="text-[9px] mono text-app-text-muted opacity-30" data-v-2eb4f406${_scopeId}>${ssrInterpolate(game.value.$id)}</span></div></div></div>`);
              if (game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED) {
                _push2(`<div class="hidden lg:flex flex-col shrink-0 transition-all duration-1000 ease-out p-4 relative items-center justify-center" style="${ssrRenderStyle({
                  width: showAnalytics.value || isGuest.value ? "800px" : "400px",
                  opacity: 1,
                  transform: "translateX(0)"
                })}" data-v-2eb4f406${_scopeId}>`);
                if (isGuest.value) {
                  _push2(`<div class="absolute inset-0 z-50 flex items-center justify-center p-8 bg-void/20 backdrop-blur-sm" data-v-2eb4f406${_scopeId}><div class="glass p-12 rounded-[3rem] border-indigo-500/30 flex flex-col items-center text-center space-y-8 shadow-2xl" data-v-2eb4f406${_scopeId}><div class="w-20 h-20 rounded-3xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500" data-v-2eb4f406${_scopeId}><i class="pi pi-lock text-3xl" data-v-2eb4f406${_scopeId}></i></div><div class="space-y-2" data-v-2eb4f406${_scopeId}><h4 class="text-2xl font-black text-app-text uppercase italic" data-v-2eb4f406${_scopeId}>Intelligence Locked</h4><p class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-2eb4f406${_scopeId}>Log in to unlock full move analysis</p></div><button class="px-10 py-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl active:scale-[0.98]" data-v-2eb4f406${_scopeId}> Authorize to Unlock </button></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (!showAnalytics.value && !isGuest.value) {
                  _push2(`<div class="w-full flex justify-center" data-v-2eb4f406${_scopeId}><button class="group relative flex flex-col items-center gap-6 p-8 rounded-[2.5rem] glass border-glass-border hover:border-indigo-500/30 transition-all duration-700 hover:scale-105 w-full max-w-sm" data-v-2eb4f406${_scopeId}><div class="w-20 h-20 rounded-2xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500 shadow-2xl shadow-indigo-500/10 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500" data-v-2eb4f406${_scopeId}><i class="pi pi-bolt text-4xl" data-v-2eb4f406${_scopeId}></i></div><div class="space-y-2 text-center" data-v-2eb4f406${_scopeId}><h4 class="text-lg font-black text-app-text uppercase italic tracking-tight" data-v-2eb4f406${_scopeId}>Tactical Synthesis</h4><p class="text-[9px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20 group-hover:opacity-40 transition-opacity" data-v-2eb4f406${_scopeId}>Unlock deep move evaluations</p></div></button></div>`);
                } else {
                  _push2(`<div class="${ssrRenderClass([{ "blur-md": isGuest.value }, "h-full w-full"])}" data-v-2eb4f406${_scopeId}>`);
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
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if ((game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED) && game.value) {
                _push2(`<div class="lg:hidden mt-8 px-4 pb-12 relative" data-v-2eb4f406${_scopeId}><h3 class="text-xl font-black text-app-text uppercase italic mb-6" data-v-2eb4f406${_scopeId}> Tactical Analysis<span class="text-indigo-500" data-v-2eb4f406${_scopeId}>.</span></h3>`);
                if (isGuest.value) {
                  _push2(`<div class="absolute inset-0 z-50 flex items-center justify-center p-8 bg-void/20 backdrop-blur-sm" data-v-2eb4f406${_scopeId}><div class="glass p-8 rounded-[2rem] border-indigo-500/30 flex flex-col items-center text-center space-y-6 shadow-2xl" data-v-2eb4f406${_scopeId}><p class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-2eb4f406${_scopeId}>Log in to unlock full move analysis</p><button class="px-8 py-3 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-500 transition-all shadow-2xl" data-v-2eb4f406${_scopeId}> Authorize to Unlock </button></div></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (!showAnalytics.value && !isGuest.value) {
                  _push2(`<div class="py-12 flex flex-col items-center justify-center glass rounded-3xl border border-glass-border space-y-6 shadow-2xl" data-v-2eb4f406${_scopeId}><p class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-20" data-v-2eb4f406${_scopeId}> Tactical data is available for review </p><button class="px-10 py-4 bg-indigo-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl" data-v-2eb4f406${_scopeId}> Request Analysis </button></div>`);
                } else {
                  _push2(`<div class="${ssrRenderClass({ "blur-md pointer-events-none": isGuest.value })}" data-v-2eb4f406${_scopeId}>`);
                  _push2(ssrRenderComponent(GameAnalyticsDashboard, {
                    "game-id": game.value.$id,
                    winner: game.value.winner,
                    "selected-turn": selectedHistoryIndex.value,
                    "analysis-status": game.value.analysisStatus,
                    onTurnSelect: ($event) => selectedHistoryIndex.value = $event,
                    onTriggerAnalysis: triggerAnalysis
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            }
            _push2(ssrRenderComponent(_sfc_main$1, {
              show: showAbandonModal.value,
              game: game.value,
              abandoning: abandoning.value,
              onClose: ($event) => showAbandonModal.value = false,
              onConfirm: handleAbandon
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              show: showGameOverModal.value,
              "match-result": matchResult.value,
              onClose: ($event) => showGameOverModal.value = false,
              onCreateNew: ($event) => {
                showCreateGameDialog.value = true;
                showGameOverModal.value = false;
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$4, {
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
                createVNode("button", {
                  onClick: goBack,
                  class: "px-6 py-2 rounded-xl bg-glass-white text-app-text font-bold hover:bg-indigo-500/20 transition-all border border-glass-border"
                }, " Go Back ")
              ])) : (openBlock(), createBlock("div", {
                key: 2,
                class: "flex flex-col pb-12 h-full min-h-[calc(100vh-120px)] overflow-x-hidden px-4"
              }, [
                createVNode("div", {
                  class: ["grid grid-cols-1 gap-12 transition-all duration-1000 ease-in-out w-full", game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED ? "lg:grid-cols-[120px_1fr_var(--analytics-width)]" : "lg:grid-cols-[120px_1fr] lg:max-w-7xl mx-auto"],
                  style: { "--analytics-width": showAnalytics.value || isGuest.value ? "800px" : "400px" }
                }, [
                  createVNode(MatchTimeline, {
                    "move-history": game.value.moveHistory || [],
                    "selected-history-index": selectedHistoryIndex.value,
                    "is-on-device": game.value.isOnDevice,
                    onSelectMove: ($event) => selectedHistoryIndex.value = $event
                  }, null, 8, ["move-history", "selected-history-index", "is-on-device", "onSelectMove"]),
                  createVNode("div", { class: "flex flex-col items-center justify-center py-4 lg:py-0 min-h-[75vh] transition-all duration-1000 ease-in-out w-full" }, [
                    createVNode("div", { class: "flex flex-col items-center justify-center space-y-8 lg:space-y-16 w-full" }, [
                      createVNode(Board, {
                        "available-moves": selectedHistoryIndex.value !== null ? "" : (_d = game.value) == null ? void 0 : _d.availableMoves,
                        board: selectedHistoryIndex.value !== null ? (_e = historicalState.value) == null ? void 0 : _e.board : displayBoard.value,
                        "tile-winners": selectedHistoryIndex.value !== null ? (_f = historicalState.value) == null ? void 0 : _f.tileWinners : game.value.tileWinners,
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
                        onClearHistory: ($event) => selectedHistoryIndex.value = null,
                        onClearSelection: ($event) => selectedCell.value = null,
                        onSubmitMove: submitMove,
                        onJoinMatch: joinMatch,
                        onAbandonMatch: ($event) => showAbandonModal.value = true
                      }, null, 8, ["game-status", "is-player-in-game", "is-my-turn", "is-a-i-turn", "current-player", "selected-cell", "selected-history-index", "joining", "onClearHistory", "onClearSelection", "onAbandonMatch"]),
                      createVNode("div", { class: "flex flex-col items-center gap-1 opacity-20 hover:opacity-100 transition-opacity pt-12 border-t border-glass-border w-full" }, [
                        createVNode("span", { class: "text-[8px] font-black uppercase tracking-[0.4em] text-app-text-muted opacity-20" }, "Game Session Key"),
                        createVNode("span", { class: "text-[9px] mono text-app-text-muted opacity-30" }, toDisplayString(game.value.$id), 1)
                      ])
                    ])
                  ]),
                  game.value.status === unref(GameStatus).FINISHED || game.value.status === unref(GameStatus).CANCELLED ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "hidden lg:flex flex-col shrink-0 transition-all duration-1000 ease-out p-4 relative items-center justify-center",
                    style: {
                      width: showAnalytics.value || isGuest.value ? "800px" : "400px",
                      opacity: 1,
                      transform: "translateX(0)"
                    }
                  }, [
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
                        createVNode("button", {
                          onClick: ($event) => unref(authStore).openLoginModal(unref(route).fullPath),
                          class: "px-10 py-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl active:scale-[0.98]"
                        }, " Authorize to Unlock ", 8, ["onClick"])
                      ])
                    ])) : createCommentVNode("", true),
                    !showAnalytics.value && !isGuest.value ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "w-full flex justify-center"
                    }, [
                      createVNode("button", {
                        onClick: triggerAnalysis,
                        class: "group relative flex flex-col items-center gap-6 p-8 rounded-[2.5rem] glass border-glass-border hover:border-indigo-500/30 transition-all duration-700 hover:scale-105 w-full max-w-sm"
                      }, [
                        createVNode("div", { class: "w-20 h-20 rounded-2xl glass flex items-center justify-center border-indigo-500/20 text-indigo-500 shadow-2xl shadow-indigo-500/10 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500" }, [
                          createVNode("i", { class: "pi pi-bolt text-4xl" })
                        ]),
                        createVNode("div", { class: "space-y-2 text-center" }, [
                          createVNode("h4", { class: "text-lg font-black text-app-text uppercase italic tracking-tight" }, "Tactical Synthesis"),
                          createVNode("p", { class: "text-[9px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20 group-hover:opacity-40 transition-opacity" }, "Unlock deep move evaluations")
                        ])
                      ])
                    ])) : (openBlock(), createBlock("div", {
                      key: 2,
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
                          createVNode("button", {
                            onClick: ($event) => unref(authStore).openLoginModal(unref(route).fullPath),
                            class: "px-8 py-3 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-500 transition-all shadow-2xl"
                          }, " Authorize to Unlock ", 8, ["onClick"])
                        ])
                      ])) : createCommentVNode("", true),
                      !showAnalytics.value && !isGuest.value ? (openBlock(), createBlock("div", {
                        key: 1,
                        class: "py-12 flex flex-col items-center justify-center glass rounded-3xl border border-glass-border space-y-6 shadow-2xl"
                      }, [
                        createVNode("p", { class: "text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-20" }, " Tactical data is available for review "),
                        createVNode("button", {
                          onClick: triggerAnalysis,
                          class: "px-10 py-4 bg-indigo-600 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-indigo-500 transition-all shadow-2xl"
                        }, " Request Analysis ")
                      ])) : (openBlock(), createBlock("div", {
                        key: 2,
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
                      ], 2))
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ])),
              createVNode(_sfc_main$1, {
                show: showAbandonModal.value,
                game: game.value,
                abandoning: abandoning.value,
                onClose: ($event) => showAbandonModal.value = false,
                onConfirm: handleAbandon
              }, null, 8, ["show", "game", "abandoning", "onClose"]),
              createVNode(_sfc_main$2, {
                show: showGameOverModal.value,
                "match-result": matchResult.value,
                onClose: ($event) => showGameOverModal.value = false,
                onCreateNew: ($event) => {
                  showCreateGameDialog.value = true;
                  showGameOverModal.value = false;
                }
              }, null, 8, ["show", "match-result", "onClose", "onCreateNew"]),
              createVNode(_sfc_main$4, {
                visible: showCreateGameDialog.value,
                onClose: ($event) => showCreateGameDialog.value = false
              }, null, 8, ["visible", "onClose"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/game/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-2eb4f406"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-BeOArL6v.mjs.map
