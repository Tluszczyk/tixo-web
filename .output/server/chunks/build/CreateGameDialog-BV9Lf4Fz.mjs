import { c as useRouter, B as BaseButton } from './server.mjs';
import { defineComponent, ref, computed, watch, withCtx, createVNode, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderTeleport, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { u as users, g as games } from './games-aIlt4Osa.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreateGameDialog",
  __ssrInlineRender: true,
  props: {
    visible: { type: Boolean }
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const router = useRouter();
    const selectedSymbol = ref("X");
    const gameMode = ref("ONLINE");
    const selectedModel = ref("M3");
    const requestedOpponentId = ref("");
    const loading = ref(false);
    const error = ref(null);
    const bots = ref([]);
    const selectedBotId = ref(null);
    const loadingBots = ref(false);
    const isValidatingUser = ref(false);
    const isUserVerified = ref(false);
    const canCreate = computed(() => {
      if (loading.value || isValidatingUser.value) return false;
      if (gameMode.value === "AI") {
        return !!selectedBotId.value && !loadingBots.value;
      }
      if (gameMode.value === "ONLINE") {
        return requestedOpponentId.value.trim().length === 0 || isUserVerified.value;
      }
      return true;
    });
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
    let validationTimeout = null;
    watch(requestedOpponentId, (newId) => {
      if (gameMode.value !== "ONLINE") return;
      isUserVerified.value = false;
      error.value = null;
      if (validationTimeout) clearTimeout(validationTimeout);
      const id = newId.trim();
      if (!id) return;
      isValidatingUser.value = true;
      validationTimeout = setTimeout(async () => {
        try {
          const user = await users.getUser(id);
          if (user) {
            isUserVerified.value = true;
          } else {
            error.value = "Target user not found.";
          }
        } catch {
          error.value = "Failed to verify user.";
        } finally {
          isValidatingUser.value = false;
        }
      }, 500);
    });
    const handleCreate = async () => {
      loading.value = true;
      error.value = null;
      try {
        const isOnDevice = gameMode.value === "LOCAL";
        let opponentId = gameMode.value === "ONLINE" ? requestedOpponentId.value.trim() || null : null;
        if (gameMode.value === "AI") {
          if (selectedBotId.value) {
            opponentId = selectedBotId.value;
          } else {
            opponentId = selectedSymbol.value === "X" ? `AI_O_${selectedModel.value}` : `AI_X_${selectedModel.value}`;
          }
        }
        const gameId = await games.createGame(selectedSymbol.value, isOnDevice, opponentId);
        if (gameId) {
          emit("close");
          await router.push(`/game/${gameId}`);
        } else {
          error.value = "Failed to create game. Please try again.";
        }
      } catch (e) {
        console.error("Create game error:", e);
        error.value = "An unexpected error occurred.";
      } finally {
        loading.value = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBaseButton = BaseButton;
      ssrRenderTeleport(_push, (_push2) => {
        if (__props.visible) {
          _push2(`<div class="fixed inset-0 z-[9999] flex items-center justify-center p-4"><div class="absolute inset-0 bg-void/80 backdrop-blur-md"></div><div class="relative w-full max-w-md max-h-[90vh] flex flex-col glass border-glass-border rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in duration-300"><div class="p-6 sm:p-8 flex-1 overflow-y-auto custom-scrollbar space-y-6 sm:space-y-8"><div class="text-center space-y-2"><h3 class="text-3xl font-black text-app-text tracking-tight">New Match</h3><p class="text-app-text-muted opacity-60">Choose your side to begin the battle.</p></div><div class="grid grid-cols-2 gap-4">`);
          _push2(ssrRenderComponent(_component_CommonBaseButton, {
            onClick: ($event) => selectedSymbol.value = "X",
            variant: selectedSymbol.value === "X" ? "primary" : "secondary",
            class: ["group relative h-28 sm:h-32 !rounded-2xl !border-2 flex flex-col items-center justify-center transition-all duration-300", selectedSymbol.value === "X" ? "!border-red-500 !bg-red-500/10" : ""]
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<span class="${ssrRenderClass([selectedSymbol.value === "X" ? "text-red-500" : "text-app-text-muted opacity-20", "text-5xl sm:text-6xl font-black mb-1 sm:mb-2 transition-transform group-hover:scale-110"])}"${_scopeId}>X</span><span class="${ssrRenderClass([selectedSymbol.value === "X" ? "text-red-400" : "text-app-text-muted opacity-40", "text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]"])}"${_scopeId}>Player 1</span>`);
                if (selectedSymbol.value === "X") {
                  _push3(`<div class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in"${_scopeId}><i class="pi pi-check text-[10px] text-white font-bold"${_scopeId}></i></div>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  createVNode("span", {
                    class: ["text-5xl sm:text-6xl font-black mb-1 sm:mb-2 transition-transform group-hover:scale-110", selectedSymbol.value === "X" ? "text-red-500" : "text-app-text-muted opacity-20"]
                  }, "X", 2),
                  createVNode("span", {
                    class: ["text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]", selectedSymbol.value === "X" ? "text-red-400" : "text-app-text-muted opacity-40"]
                  }, "Player 1", 2),
                  selectedSymbol.value === "X" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in"
                  }, [
                    createVNode("i", { class: "pi pi-check text-[10px] text-white font-bold" })
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(_component_CommonBaseButton, {
            onClick: ($event) => selectedSymbol.value = "O",
            variant: selectedSymbol.value === "O" ? "primary" : "secondary",
            class: ["group relative h-28 sm:h-32 !rounded-2xl !border-2 flex flex-col items-center justify-center transition-all duration-300", selectedSymbol.value === "O" ? "!border-blue-500 !bg-blue-500/10" : ""]
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<span class="${ssrRenderClass([selectedSymbol.value === "O" ? "text-blue-500" : "text-app-text-muted opacity-20", "text-5xl sm:text-6xl font-black mb-1 sm:mb-2 transition-transform group-hover:scale-110"])}"${_scopeId}>O</span><span class="${ssrRenderClass([selectedSymbol.value === "O" ? "text-blue-400" : "text-app-text-muted opacity-40", "text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]"])}"${_scopeId}>Player 2</span>`);
                if (selectedSymbol.value === "O") {
                  _push3(`<div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in"${_scopeId}><i class="pi pi-check text-[10px] text-white font-bold"${_scopeId}></i></div>`);
                } else {
                  _push3(`<!---->`);
                }
              } else {
                return [
                  createVNode("span", {
                    class: ["text-5xl sm:text-6xl font-black mb-1 sm:mb-2 transition-transform group-hover:scale-110", selectedSymbol.value === "O" ? "text-blue-500" : "text-app-text-muted opacity-20"]
                  }, "O", 2),
                  createVNode("span", {
                    class: ["text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em]", selectedSymbol.value === "O" ? "text-blue-400" : "text-app-text-muted opacity-40"]
                  }, "Player 2", 2),
                  selectedSymbol.value === "O" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in"
                  }, [
                    createVNode("i", { class: "pi pi-check text-[10px] text-white font-bold" })
                  ])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div><div class="space-y-3"><label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 block">Game Mode</label><div class="grid grid-cols-1 gap-3">`);
          _push2(ssrRenderComponent(_component_CommonBaseButton, {
            onClick: ($event) => gameMode.value = "ONLINE",
            variant: "secondary",
            class: ["!flex !items-center !space-x-4 !p-4 !rounded-2xl !border-2 !transition-all !duration-300 !text-left !h-auto", gameMode.value === "ONLINE" ? "!border-blue-500/50 !bg-blue-500/10" : ""]
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<div class="${ssrRenderClass([
                  gameMode.value === "ONLINE" ? "bg-blue-500/20 text-blue-500" : "bg-app-text/10 text-app-text-muted opacity-40",
                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                ])}"${_scopeId}><i class="pi pi-globe text-xl"${_scopeId}></i></div><div class="flex-1"${_scopeId}><p class="${ssrRenderClass([gameMode.value === "ONLINE" ? "text-blue-500" : "text-app-text", "font-black text-[10px] uppercase tracking-[0.2em]"])}"${_scopeId}> Online Multiplayer </p><p class="text-[9px] uppercase font-black tracking-widest text-app-text-muted opacity-40"${_scopeId}>Play against someone else</p></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: [
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                      gameMode.value === "ONLINE" ? "bg-blue-500/20 text-blue-500" : "bg-app-text/10 text-app-text-muted opacity-40"
                    ]
                  }, [
                    createVNode("i", { class: "pi pi-globe text-xl" })
                  ], 2),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("p", {
                      class: ["font-black text-[10px] uppercase tracking-[0.2em]", gameMode.value === "ONLINE" ? "text-blue-500" : "text-app-text"]
                    }, " Online Multiplayer ", 2),
                    createVNode("p", { class: "text-[9px] uppercase font-black tracking-widest text-app-text-muted opacity-40" }, "Play against someone else")
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(_component_CommonBaseButton, {
            onClick: ($event) => gameMode.value = "AI",
            variant: "secondary",
            class: ["!flex !items-center !space-x-4 !p-4 !rounded-2xl !border-2 !transition-all !duration-300 !text-left !h-auto", gameMode.value === "AI" ? "!border-purple-500/50 !bg-purple-500/10" : ""]
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<div class="${ssrRenderClass([
                  gameMode.value === "AI" ? "bg-purple-500/20 text-purple-500" : "bg-app-text/10 text-app-text-muted opacity-40",
                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                ])}"${_scopeId}><i class="pi pi-android text-xl"${_scopeId}></i></div><div class="flex-1"${_scopeId}><p class="${ssrRenderClass([gameMode.value === "AI" ? "text-purple-500" : "text-app-text", "font-black text-[10px] uppercase tracking-[0.2em]"])}"${_scopeId}> Play vs AI </p><p class="text-[9px] uppercase font-black tracking-widest text-app-text-muted opacity-40"${_scopeId}>Challenge the model</p></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: [
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                      gameMode.value === "AI" ? "bg-purple-500/20 text-purple-500" : "bg-app-text/10 text-app-text-muted opacity-40"
                    ]
                  }, [
                    createVNode("i", { class: "pi pi-android text-xl" })
                  ], 2),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("p", {
                      class: ["font-black text-[10px] uppercase tracking-[0.2em]", gameMode.value === "AI" ? "text-purple-500" : "text-app-text"]
                    }, " Play vs AI ", 2),
                    createVNode("p", { class: "text-[9px] uppercase font-black tracking-widest text-app-text-muted opacity-40" }, "Challenge the model")
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(_component_CommonBaseButton, {
            onClick: ($event) => gameMode.value = "LOCAL",
            variant: "secondary",
            class: ["!flex !items-center !space-x-4 !p-4 !rounded-2xl !border-2 !transition-all !duration-300 !text-left !h-auto", gameMode.value === "LOCAL" ? "!border-amber-500/50 !bg-amber-500/10" : ""]
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<div class="${ssrRenderClass([
                  gameMode.value === "LOCAL" ? "bg-amber-500/20 text-amber-500" : "bg-app-text/10 text-app-text-muted opacity-40",
                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                ])}"${_scopeId}><i class="pi pi-mobile text-xl"${_scopeId}></i></div><div class="flex-1"${_scopeId}><p class="${ssrRenderClass([gameMode.value === "LOCAL" ? "text-amber-500" : "text-app-text", "font-black text-[10px] uppercase tracking-[0.2em]"])}"${_scopeId}> Pass &amp; Play </p><p class="text-[9px] uppercase font-black tracking-widest text-app-text-muted opacity-40"${_scopeId}>Two players, one device</p></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: [
                      "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                      gameMode.value === "LOCAL" ? "bg-amber-500/20 text-amber-500" : "bg-app-text/10 text-app-text-muted opacity-40"
                    ]
                  }, [
                    createVNode("i", { class: "pi pi-mobile text-xl" })
                  ], 2),
                  createVNode("div", { class: "flex-1" }, [
                    createVNode("p", {
                      class: ["font-black text-[10px] uppercase tracking-[0.2em]", gameMode.value === "LOCAL" ? "text-amber-500" : "text-app-text"]
                    }, " Pass & Play ", 2),
                    createVNode("p", { class: "text-[9px] uppercase font-black tracking-widest text-app-text-muted opacity-40" }, "Two players, one device")
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div></div>`);
          if (gameMode.value === "AI") {
            _push2(`<div class="space-y-3"><label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 block">Select Opponent AI</label>`);
            if (loadingBots.value) {
              _push2(`<div class="flex justify-center py-4"><i class="pi pi-spin pi-spinner text-purple-500"></i></div>`);
            } else if (bots.value.length > 0) {
              _push2(`<div class="space-y-2 max-h-32 sm:max-h-48 overflow-y-auto pr-2 custom-scrollbar"><!--[-->`);
              ssrRenderList(bots.value, (bot) => {
                _push2(ssrRenderComponent(_component_CommonBaseButton, {
                  key: bot.$id,
                  onClick: ($event) => selectedBotId.value = bot.$id,
                  variant: "secondary",
                  class: ["!w-full !flex !items-center !justify-between !p-3 !rounded-xl !border-2 !transition-all !duration-300 !text-left !h-auto", selectedBotId.value === bot.$id ? "!border-purple-500/50 !bg-purple-500/10" : ""]
                }, {
                  default: withCtx((_, _push3, _parent2, _scopeId) => {
                    var _a, _b, _c, _d;
                    if (_push3) {
                      _push3(`<div class="flex items-center space-x-3"${_scopeId}><div class="${ssrRenderClass([
                        selectedBotId.value === bot.$id ? "bg-purple-500/20 text-purple-500" : "bg-app-text/10 text-app-text-muted opacity-40",
                        "w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      ])}"${_scopeId}><i class="pi pi-android text-sm"${_scopeId}></i></div><div${_scopeId}><p class="${ssrRenderClass([selectedBotId.value === bot.$id ? "text-purple-400" : "text-app-text", "font-black text-[10px] uppercase tracking-widest"])}"${_scopeId}>${ssrInterpolate(bot.name)}</p><p class="text-[8px] uppercase font-black text-app-text-muted opacity-40"${_scopeId}>${ssrInterpolate(((_b = (_a = bot.prefs) == null ? void 0 : _a.modelName) == null ? void 0 : _b.toLowerCase()) || "Heuristic")} AI </p></div></div><div class="text-right"${_scopeId}><p class="text-[10px] font-black text-purple-500"${_scopeId}>${ssrInterpolate(bot.rating || 1500)}</p><p class="text-[8px] text-app-text-muted opacity-40 uppercase tracking-tighter"${_scopeId}>Rating</p></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "flex items-center space-x-3" }, [
                          createVNode("div", {
                            class: [
                              "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                              selectedBotId.value === bot.$id ? "bg-purple-500/20 text-purple-500" : "bg-app-text/10 text-app-text-muted opacity-40"
                            ]
                          }, [
                            createVNode("i", { class: "pi pi-android text-sm" })
                          ], 2),
                          createVNode("div", null, [
                            createVNode("p", {
                              class: ["font-black text-[10px] uppercase tracking-widest", selectedBotId.value === bot.$id ? "text-purple-400" : "text-app-text"]
                            }, toDisplayString(bot.name), 3),
                            createVNode("p", { class: "text-[8px] uppercase font-black text-app-text-muted opacity-40" }, toDisplayString(((_d = (_c = bot.prefs) == null ? void 0 : _c.modelName) == null ? void 0 : _d.toLowerCase()) || "Heuristic") + " AI ", 1)
                          ])
                        ]),
                        createVNode("div", { class: "text-right" }, [
                          createVNode("p", { class: "text-[10px] font-black text-purple-500" }, toDisplayString(bot.rating || 1500), 1),
                          createVNode("p", { class: "text-[8px] text-app-text-muted opacity-40 uppercase tracking-tighter" }, "Rating")
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              });
              _push2(`<!--]--></div>`);
            } else {
              _push2(`<div class="text-center py-4 text-app-text-muted opacity-40 text-xs">No AI bots available.</div>`);
            }
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          if (gameMode.value === "ONLINE") {
            _push2(`<div class="space-y-3"><label class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-40 block">Invite Opponent (Optional)</label><div class="relative group"><i class="pi pi-user absolute left-4 top-1/2 -translate-y-1/2 text-app-text-muted opacity-40 group-focus-within:text-blue-500 transition-colors"></i><input${ssrRenderAttr("value", requestedOpponentId.value)} type="text" placeholder="Enter User ID" class="${ssrRenderClass([{ "border-green-500/50": isUserVerified.value, "border-red-500/50": error.value && requestedOpponentId.value }, "w-full bg-void border-2 border-glass-border rounded-2xl py-4 pl-12 pr-12 text-app-text text-sm font-bold placeholder:text-app-text-muted outline-none transition-all"])}"><div class="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">`);
            if (isValidatingUser.value) {
              _push2(`<i class="pi pi-spin pi-spinner text-blue-500 text-xs"></i>`);
            } else if (isUserVerified.value) {
              _push2(`<i class="pi pi-check-circle text-green-500 text-xs"></i>`);
            } else if (error.value && requestedOpponentId.value) {
              _push2(`<i class="pi pi-times-circle text-red-500 text-xs"></i>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><p class="text-[9px] text-app-text-muted opacity-40 font-medium"> Enter a valid User ID to challenge someone directly, or leave blank to open the lobby to anyone. </p></div>`);
          } else {
            _push2(`<!---->`);
          }
          if (error.value) {
            _push2(`<div class="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">${ssrInterpolate(error.value)}</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`<div class="flex flex-col space-y-3">`);
          _push2(ssrRenderComponent(_component_CommonBaseButton, {
            onClick: handleCreate,
            disabled: !canCreate.value,
            variant: "primary",
            size: "lg",
            block: "",
            loading: loading.value || isValidatingUser.value
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(`<span${_scopeId}>${ssrInterpolate(loading.value ? "Creating Match..." : isValidatingUser.value ? "Verifying User..." : gameMode.value === "AI" && !selectedBotId.value ? "Select AI Opponent" : gameMode.value === "ONLINE" && requestedOpponentId.value.trim() && !isUserVerified.value ? "Invalid Opponent" : gameMode.value === "ONLINE" && !requestedOpponentId.value.trim() ? "Create Open Match" : "Create Match")}</span>`);
              } else {
                return [
                  createVNode("span", null, toDisplayString(loading.value ? "Creating Match..." : isValidatingUser.value ? "Verifying User..." : gameMode.value === "AI" && !selectedBotId.value ? "Select AI Opponent" : gameMode.value === "ONLINE" && requestedOpponentId.value.trim() && !isUserVerified.value ? "Invalid Opponent" : gameMode.value === "ONLINE" && !requestedOpponentId.value.trim() ? "Create Open Match" : "Create Match"), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(ssrRenderComponent(_component_CommonBaseButton, {
            onClick: ($event) => emit("close"),
            disabled: loading.value,
            variant: "secondary",
            size: "lg",
            block: ""
          }, {
            default: withCtx((_, _push3, _parent2, _scopeId) => {
              if (_push3) {
                _push3(` Cancel `);
              } else {
                return [
                  createTextVNode(" Cancel ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push2(`</div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
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
