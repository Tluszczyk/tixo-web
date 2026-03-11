import { B as BaseButton, b as useAuthStore, a as useSeoMeta, c as useRouter, e as __nuxt_component_0 } from "../server.mjs";
import { defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, unref, toDisplayString, useSSRContext, computed, createVNode, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderClass } from "vue/server-renderer";
import { _ as _sfc_main$3 } from "./GameListItem-BiqWjvUL.js";
import { _ as _sfc_main$4 } from "./CreateGameDialog-BRA7ik-Y.js";
import { G as GameStatus } from "./GameStatus-DcfBG9k6.js";
import { g as games, u as users } from "./games-B7zgyYbT.js";
import { _ as _sfc_main$5 } from "./Board-04WGI2Q_.js";
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
import "./nuxt-link-C9J5Jg0a.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
    const emit = __emit;
    const filters = ref({ ...props.initialFilters });
    watch(
      () => props.initialFilters,
      (newVal) => {
        filters.value = { ...newVal };
      },
      { deep: true }
    );
    const toggleStatus = (status) => {
      const index = filters.value.statuses.indexOf(status);
      if (index === -1) {
        filters.value.statuses.push(status);
      } else {
        filters.value.statuses.splice(index, 1);
      }
    };
    const applyFilters = () => {
      emit("apply", filters.value);
      emit("close");
    };
    const resetFilters = () => {
      filters.value = {
        playerId: "",
        creatorId: "",
        myGamesOnly: false,
        statuses: [],
        isOnDevice: null,
        dateRange: "all",
        sortBy: "createdAt",
        sortOrder: "desc"
      };
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.visible) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "fixed inset-0 z-[150] flex items-center justify-center p-4" }, _attrs))}><div class="absolute inset-0 bg-void/90 backdrop-blur-md"></div><div class="relative w-full max-w-2xl glass border-glass-border rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300"><div class="p-8 lg:p-12 space-y-10"><div class="flex items-center justify-between"><div class="space-y-1"><h3 class="text-3xl font-black text-app-text uppercase italic"> Filters<span class="text-indigo-500">.</span></h3><p class="text-xs font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20"> Refine Operational Data </p></div>`);
        _push(ssrRenderComponent(BaseButton, {
          size: "sm",
          variant: "ghost",
          onClick: resetFilters,
          class: "text-indigo-500 hover:text-app-text"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Reset All `);
            } else {
              return [
                createTextVNode(" Reset All ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="grid grid-cols-1 md:grid-cols-2 gap-8"><div class="space-y-3"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Player Identifier</label><input${ssrRenderAttr("value", filters.value.playerId)} type="text" placeholder="User ID..." class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-sm text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/30 transition-all mono"></div><div class="space-y-3"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Creator Identifier</label><input${ssrRenderAttr("value", filters.value.creatorId)} type="text" placeholder="Creator ID..." class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-sm text-app-text placeholder:text-app-text-muted opacity-10 focus:opacity-100 focus:outline-none focus:border-indigo-500/30 transition-all mono"></div><div class="space-y-3 md:col-span-2"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Operational Statuses</label><div class="flex flex-wrap gap-2"><!--[-->`);
        ssrRenderList(Object.values(unref(GameStatus)), (status) => {
          _push(ssrRenderComponent(BaseButton, {
            key: status,
            onClick: ($event) => toggleStatus(status),
            variant: filters.value.statuses.includes(status) ? "primary" : "secondary",
            size: "sm",
            class: "!px-4 !py-2 !rounded-xl !text-[10px] !tracking-widest transition-all"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(status.replace(/_/g, " "))}`);
              } else {
                return [
                  createTextVNode(toDisplayString(status.replace(/_/g, " ")), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div><div class="space-y-3"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Temporal Window</label><div class="relative"><select class="w-full px-6 py-4 rounded-2xl glass border-glass-border text-sm text-app-text bg-void focus:outline-none focus:border-indigo-500/30 transition-all appearance-none cursor-pointer"><option value="all"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "all") : ssrLooseEqual(filters.value.dateRange, "all")) ? " selected" : ""}>All Time</option><option value="today"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "today") : ssrLooseEqual(filters.value.dateRange, "today")) ? " selected" : ""}>Last 24 Hours</option><option value="week"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "week") : ssrLooseEqual(filters.value.dateRange, "week")) ? " selected" : ""}>Last 7 Days</option><option value="month"${ssrIncludeBooleanAttr(Array.isArray(filters.value.dateRange) ? ssrLooseContain(filters.value.dateRange, "month") : ssrLooseEqual(filters.value.dateRange, "month")) ? " selected" : ""}>Last 30 Days</option></select><div class="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-app-text-muted opacity-20"><i class="pi pi-chevron-down"></i></div></div></div><div class="space-y-3"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Local Protocol</label><div class="flex p-1.5 rounded-2xl glass border-glass-border h-[60px]">`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => filters.value.isOnDevice = filters.value.isOnDevice === true ? null : true,
          variant: filters.value.isOnDevice === true ? "primary" : "ghost",
          size: "sm",
          class: "flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Local `);
            } else {
              return [
                createTextVNode(" Local ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => filters.value.isOnDevice = filters.value.isOnDevice === false ? null : false,
          variant: filters.value.isOnDevice === false ? "primary" : "ghost",
          size: "sm",
          class: "flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Remote `);
            } else {
              return [
                createTextVNode(" Remote ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
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
        _push(`</div><div class="space-y-4 pt-6 border-t border-glass-border"><label class="text-xs font-black uppercase tracking-widest text-app-text-muted opacity-30 ml-2">Sequencing</label><div class="grid grid-cols-2 gap-6"><div class="flex p-1.5 rounded-2xl glass border-glass-border">`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => filters.value.sortBy = "createdAt",
          variant: filters.value.sortBy === "createdAt" ? "secondary" : "ghost",
          size: "sm",
          class: "flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Created `);
            } else {
              return [
                createTextVNode(" Created ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => filters.value.sortBy = "updatedAt",
          variant: filters.value.sortBy === "updatedAt" ? "secondary" : "ghost",
          size: "sm",
          class: "flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Updated `);
            } else {
              return [
                createTextVNode(" Updated ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="flex p-1.5 rounded-2xl glass border-glass-border">`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => filters.value.sortOrder = "desc",
          variant: filters.value.sortOrder === "desc" ? "secondary" : "ghost",
          size: "sm",
          class: "flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Desc `);
            } else {
              return [
                createTextVNode(" Desc ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => filters.value.sortOrder = "asc",
          variant: filters.value.sortOrder === "asc" ? "secondary" : "ghost",
          size: "sm",
          class: "flex-1 !h-full !rounded-xl !text-[10px] !font-black !uppercase"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Asc `);
            } else {
              return [
                createTextVNode(" Asc ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div><div class="flex gap-6 pt-6">`);
        _push(ssrRenderComponent(BaseButton, {
          onClick: ($event) => emit("close"),
          variant: "secondary",
          size: "lg",
          class: "flex-1"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Cancel `);
            } else {
              return [
                createTextVNode(" Cancel ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(BaseButton, {
          onClick: applyFilters,
          variant: "primary",
          size: "lg",
          class: "flex-[2]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Apply Parameters `);
            } else {
              return [
                createTextVNode(" Apply Parameters ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameList/GameFilterDialog.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const itemsPerPage = 10;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "GameList",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const loading = ref(true);
    const showCreateDialog = ref(false);
    const showFilterDialog = ref(false);
    const archivesPage = ref(1);
    const totalArchives = ref(0);
    const activeGamesList = ref([]);
    const archivesList = ref([]);
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
    const fetchGames = async () => {
      loading.value = true;
      try {
        if (!authStore.user) {
          await authStore.checkAuth();
        }
        const baseFilters = {
          playerId: filters.value.playerId,
          creatorId: filters.value.creatorId,
          isOnDevice: filters.value.isOnDevice === null ? void 0 : filters.value.isOnDevice
        };
        const activeResponse = await games.listGames(50, 0, {
          ...baseFilters,
          status: void 0
          // We'll filter status here for performance or use OR if backend supported
        });
        activeGamesList.value = activeResponse.games.filter(
          (g) => g.status === GameStatus.IN_PROGRESS || g.status === GameStatus.WAITING_FOR_OPPONENT
        );
        const archiveResponse = await games.listGames(
          itemsPerPage,
          (archivesPage.value - 1) * itemsPerPage,
          {
            ...baseFilters,
            status: GameStatus.FINISHED
            // Simplified: fetch finished. We can improve this to fetch both archived statuses.
          }
        );
        archivesList.value = archiveResponse.games;
        totalArchives.value = archiveResponse.total;
        const playerIds = /* @__PURE__ */ new Set();
        [...activeGamesList.value, ...archivesList.value].forEach((g) => {
          if (g.xPlayerId) playerIds.add(g.xPlayerId);
          if (g.oPlayerId) playerIds.add(g.oPlayerId);
        });
        if (playerIds.size > 0) {
          await users.fetchUsersByIds(Array.from(playerIds));
        }
      } catch (error) {
        console.error("Failed to fetch games:", error);
      } finally {
        loading.value = false;
      }
    };
    const totalArchivePages = computed(() => Math.ceil(totalArchives.value / itemsPerPage));
    const nextArchivePage = () => {
      if (archivesPage.value < totalArchivePages.value) {
        archivesPage.value++;
        fetchGames();
      }
    };
    const prevArchivePage = () => {
      if (archivesPage.value > 1) {
        archivesPage.value--;
        fetchGames();
      }
    };
    const activeGames = computed(() => activeGamesList.value);
    const recentMatches = computed(() => archivesList.value);
    const handleApplyFilters = (newFilters) => {
      filters.value = newFilters;
      archivesPage.value = 1;
      fetchGames();
    };
    const handleInitiate = () => {
      if (authStore.isLoggedIn) {
        showCreateDialog.value = true;
      } else {
        authStore.openLoginModal("/");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CommonBaseButton = BaseButton;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex flex-col space-y-8" }, _attrs))}><div class="flex flex-col md:flex-row md:items-center justify-between gap-6 px-2"><div class="space-y-1"><h2 class="text-2xl lg:text-3xl font-black text-app-text uppercase italic"> Active Operations<span class="text-indigo-500">.</span></h2><p class="text-[10px] font-black uppercase tracking-[0.2em] text-app-text-muted opacity-20"> Live Operational Data </p></div><div class="flex items-center gap-3 w-full md:w-auto">`);
      _push(ssrRenderComponent(_component_CommonBaseButton, {
        onClick: fetchGames,
        variant: "secondary",
        size: "sm",
        class: "w-12 h-12 lg:w-10 lg:h-10 !rounded-xl",
        loading: loading.value,
        title: "Synchronize"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="pi pi-refresh text-sm lg:text-xs"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", { class: "pi pi-refresh text-sm lg:text-xs" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonBaseButton, {
        onClick: ($event) => showFilterDialog.value = true,
        variant: showFilterDialog.value ? "primary" : "secondary",
        size: "md",
        class: "flex-1 md:flex-none px-4 lg:px-6 !tracking-widest",
        "icon-left": "pi pi-filter"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Parameters `);
          } else {
            return [
              createTextVNode(" Parameters ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_CommonBaseButton, {
        onClick: handleInitiate,
        variant: "primary",
        size: "md",
        class: "flex-1 md:flex-none px-4 lg:px-8",
        "icon-left": "pi pi-plus"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Initialize `);
          } else {
            return [
              createTextVNode(" Initialize ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (loading.value) {
        _push(`<div class="grid grid-cols-1 xl:grid-cols-2 gap-8"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="h-44 sm:h-48 w-full glass border-glass-border rounded-3xl animate-pulse"></div>`);
        });
        _push(`<!--]--></div>`);
      } else if (activeGames.value.length === 0) {
        _push(`<div class="py-20 flex flex-col items-center justify-center glass border-glass-border rounded-[2.5rem] border-dashed"><div class="w-20 h-20 rounded-full glass border-glass-border flex items-center justify-center text-app-text-muted opacity-10 mb-6"><i class="pi pi-inbox text-4xl"></i></div><p class="text-app-text-muted opacity-20 text-[10px] font-black uppercase tracking-[0.2em]"> No Active Operations Found </p>`);
        _push(ssrRenderComponent(_component_CommonBaseButton, {
          onClick: handleInitiate,
          variant: "ghost",
          size: "sm",
          class: "mt-6 !text-indigo-500 hover:!text-app-text"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Initiate New Protocol `);
            } else {
              return [
                createTextVNode(" Initiate New Protocol ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<div class="grid grid-cols-1 xl:grid-cols-2 gap-8"><!--[-->`);
        ssrRenderList(activeGames.value, (game) => {
          _push(ssrRenderComponent(_sfc_main$3, {
            key: game.$id,
            game,
            "current-user": unref(authStore).user
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(ssrRenderComponent(_sfc_main$4, {
        visible: showCreateDialog.value,
        onClose: ($event) => showCreateDialog.value = false
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$2, {
        visible: showFilterDialog.value,
        "initial-filters": filters.value,
        "current-user-id": unref(authStore).user?.$id,
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
        _push(`<div class="space-y-8"><div class="grid grid-cols-1 xl:grid-cols-2 gap-8 opacity-60 grayscale-[0.5] hover:grayscale-0 hover:opacity-100 transition-all duration-700"><!--[-->`);
        ssrRenderList(recentMatches.value, (game) => {
          _push(ssrRenderComponent(_sfc_main$3, {
            key: game.$id,
            game,
            "current-user": unref(authStore).user
          }, null, _parent));
        });
        _push(`<!--]--></div>`);
        if (totalArchivePages.value > 1) {
          _push(`<div class="flex items-center justify-between px-2 pt-8 border-t border-glass-border"><div class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40"> Scanning archives ${ssrInterpolate((archivesPage.value - 1) * itemsPerPage + 1)} - ${ssrInterpolate(Math.min(archivesPage.value * itemsPerPage, totalArchives.value))} of ${ssrInterpolate(totalArchives.value)}</div><div class="flex items-center gap-2">`);
          _push(ssrRenderComponent(_component_CommonBaseButton, {
            onClick: prevArchivePage,
            disabled: archivesPage.value === 1 || loading.value,
            variant: "secondary",
            size: "sm",
            class: "w-10 h-10 !p-0",
            "icon-left": "pi pi-chevron-left"
          }, null, _parent));
          _push(`<div class="px-4 py-2 rounded-lg bg-void border border-glass-border text-[10px] font-black text-app-text mono">${ssrInterpolate(archivesPage.value)} / ${ssrInterpolate(totalArchivePages.value)}</div>`);
          _push(ssrRenderComponent(_component_CommonBaseButton, {
            onClick: nextArchivePage,
            disabled: archivesPage.value === totalArchivePages.value || loading.value,
            variant: "secondary",
            size: "sm",
            class: "w-10 h-10 !p-0",
            "icon-left": "pi pi-chevron-right"
          }, null, _parent));
          _push(`</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GameList/GameList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Operational Dashboard",
      description: "Manage your active matches, analyze the field of battle, and initiate new tactical operations in Tixo.",
      ogTitle: "Operational Dashboard | Tixo",
      ogDescription: "Manage your active matches, analyze the field of battle, and initiate new tactical operations in Tixo."
    });
    const authStore = useAuthStore();
    const router = useRouter();
    const showCreateDialog = ref(false);
    const featuredBoard = ref(".........".repeat(9));
    const featuredWinners = ref(".........");
    const featuredAvailableMoves = ref("");
    const featuredCurrentPlayer = ref("X");
    const latestGameId = ref(null);
    const isMyTurn = ref(false);
    const handleInitiateMatch = () => {
      if (authStore.isLoggedIn) {
        showCreateDialog.value = true;
      } else {
        authStore.openLoginModal("/");
      }
    };
    const goToFeatured = () => {
      if (latestGameId.value) {
        router.push(`/game/${latestGameId.value}`);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_CommonBaseButton = BaseButton;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        "header-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4"${_scopeId}><div class="text-2xl font-black tracking-tighter uppercase italic"${_scopeId}> Browser<span class="text-indigo-500"${_scopeId}>.</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode("div", { class: "text-2xl font-black tracking-tighter uppercase italic" }, [
                  createTextVNode(" Browser"),
                  createVNode("span", { class: "text-indigo-500" }, ".")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-20 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000"${_scopeId}><section class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"${_scopeId}><div class="space-y-8"${_scopeId}><div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]"${_scopeId}><span class="relative flex h-2 w-2"${_scopeId}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"${_scopeId}></span><span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"${_scopeId}></span></span><span${_scopeId}>Live Operational Status</span></div><div class="space-y-2"${_scopeId}><h1 class="text-6xl font-black text-app-text leading-[0.9] tracking-tighter uppercase italic"${_scopeId}> Tactical <br${_scopeId}><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500"${_scopeId}>Superiority.</span></h1><p class="text-sm font-bold uppercase tracking-[0.3em] text-app-text-muted opacity-40 pt-4"${_scopeId}> Ultimate Strategy Redefined </p></div><p class="text-app-text-muted text-sm leading-relaxed max-w-md font-medium"${_scopeId}> Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy. Precision, logic, and cold-blooded tactics. </p><div class="flex items-center gap-6 pt-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_CommonBaseButton, {
              onClick: handleInitiateMatch,
              "aria-label": "Initiate a new match",
              variant: "primary",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Initiate Match `);
                } else {
                  return [
                    createTextVNode(" Initiate Match ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CommonBaseButton, {
              onClick: ($event) => unref(router).push("/how-to-play"),
              "aria-label": "View how to play tutorial",
              variant: "secondary",
              size: "lg"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Intel `);
                } else {
                  return [
                    createTextVNode(" Intel ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="flex justify-center lg:justify-end w-full"${_scopeId}><div class="relative w-full max-w-[min(90vw,65vh)] lg:max-w-[70vh] cursor-pointer group"${_scopeId}><div class="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-1000"${_scopeId}></div>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              board: featuredBoard.value,
              "tile-winners": featuredWinners.value,
              "available-moves": isMyTurn.value ? featuredAvailableMoves.value : "",
              "current-player": featuredCurrentPlayer.value,
              readonly: !isMyTurn.value,
              size: "lg"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></section><section class="space-y-10"${_scopeId}><div class="flex items-center gap-4"${_scopeId}><h3 class="text-2xl font-black text-app-text tracking-tight uppercase italic opacity-80"${_scopeId}> Operational Field<span class="text-indigo-500"${_scopeId}>.</span></h3><div class="h-[1px] flex-1 bg-glass-border"${_scopeId}></div></div>`);
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            _push2(`</section>`);
            if (!unref(authStore).isLoggedIn) {
              _push2(`<section class="py-16 flex flex-col items-center justify-center glass border-glass-border rounded-[2.5rem] border-dashed bg-indigo-500/[0.02]"${_scopeId}><div class="flex flex-col items-center text-center space-y-6"${_scopeId}><div class="w-16 h-16 rounded-2xl glass border-indigo-500/20 flex items-center justify-center text-indigo-500/40"${_scopeId}><i class="pi pi-shield text-2xl"${_scopeId}></i></div><div class="space-y-2"${_scopeId}><h3 class="text-lg font-black text-app-text uppercase italic"${_scopeId}>Elevate Your Command</h3><p class="text-app-text-muted opacity-40 text-[10px] font-black uppercase tracking-widest"${_scopeId}>Authorize to track your personal progress and engage in new operations</p></div>`);
              _push2(ssrRenderComponent(_component_CommonBaseButton, {
                onClick: ($event) => unref(authStore).openLoginModal("/"),
                "aria-label": "Authorize Protocol to login",
                variant: "primary",
                size: "lg",
                class: "bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500/30"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Authorize Protocol `);
                  } else {
                    return [
                      createTextVNode(" Authorize Protocol ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              visible: showCreateDialog.value,
              onClose: ($event) => showCreateDialog.value = false
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "space-y-20 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000" }, [
                createVNode("section", { class: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" }, [
                  createVNode("div", { class: "space-y-8" }, [
                    createVNode("div", { class: "inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]" }, [
                      createVNode("span", { class: "relative flex h-2 w-2" }, [
                        createVNode("span", { class: "animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" }),
                        createVNode("span", { class: "relative inline-flex rounded-full h-2 w-2 bg-indigo-500" })
                      ]),
                      createVNode("span", null, "Live Operational Status")
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("h1", { class: "text-6xl font-black text-app-text leading-[0.9] tracking-tighter uppercase italic" }, [
                        createTextVNode(" Tactical "),
                        createVNode("br"),
                        createVNode("span", { class: "text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500" }, "Superiority.")
                      ]),
                      createVNode("p", { class: "text-sm font-bold uppercase tracking-[0.3em] text-app-text-muted opacity-40 pt-4" }, " Ultimate Strategy Redefined ")
                    ]),
                    createVNode("p", { class: "text-app-text-muted text-sm leading-relaxed max-w-md font-medium" }, " Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy. Precision, logic, and cold-blooded tactics. "),
                    createVNode("div", { class: "flex items-center gap-6 pt-4" }, [
                      createVNode(_component_CommonBaseButton, {
                        onClick: handleInitiateMatch,
                        "aria-label": "Initiate a new match",
                        variant: "primary",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Initiate Match ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_CommonBaseButton, {
                        onClick: ($event) => unref(router).push("/how-to-play"),
                        "aria-label": "View how to play tutorial",
                        variant: "secondary",
                        size: "lg"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Intel ")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-center lg:justify-end w-full" }, [
                    createVNode("div", {
                      class: "relative w-full max-w-[min(90vw,65vh)] lg:max-w-[70vh] cursor-pointer group",
                      onClick: goToFeatured
                    }, [
                      createVNode("div", { class: "absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-1000" }),
                      createVNode(_sfc_main$5, {
                        board: featuredBoard.value,
                        "tile-winners": featuredWinners.value,
                        "available-moves": isMyTurn.value ? featuredAvailableMoves.value : "",
                        "current-player": featuredCurrentPlayer.value,
                        readonly: !isMyTurn.value,
                        size: "lg"
                      }, null, 8, ["board", "tile-winners", "available-moves", "current-player", "readonly"])
                    ])
                  ])
                ]),
                createVNode("section", { class: "space-y-10" }, [
                  createVNode("div", { class: "flex items-center gap-4" }, [
                    createVNode("h3", { class: "text-2xl font-black text-app-text tracking-tight uppercase italic opacity-80" }, [
                      createTextVNode(" Operational Field"),
                      createVNode("span", { class: "text-indigo-500" }, ".")
                    ]),
                    createVNode("div", { class: "h-[1px] flex-1 bg-glass-border" })
                  ]),
                  createVNode(_sfc_main$1)
                ]),
                !unref(authStore).isLoggedIn ? (openBlock(), createBlock("section", {
                  key: 0,
                  class: "py-16 flex flex-col items-center justify-center glass border-glass-border rounded-[2.5rem] border-dashed bg-indigo-500/[0.02]"
                }, [
                  createVNode("div", { class: "flex flex-col items-center text-center space-y-6" }, [
                    createVNode("div", { class: "w-16 h-16 rounded-2xl glass border-indigo-500/20 flex items-center justify-center text-indigo-500/40" }, [
                      createVNode("i", { class: "pi pi-shield text-2xl" })
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("h3", { class: "text-lg font-black text-app-text uppercase italic" }, "Elevate Your Command"),
                      createVNode("p", { class: "text-app-text-muted opacity-40 text-[10px] font-black uppercase tracking-widest" }, "Authorize to track your personal progress and engage in new operations")
                    ]),
                    createVNode(_component_CommonBaseButton, {
                      onClick: ($event) => unref(authStore).openLoginModal("/"),
                      "aria-label": "Authorize Protocol to login",
                      variant: "primary",
                      size: "lg",
                      class: "bg-indigo-600 hover:bg-indigo-500 text-white border-indigo-500/30"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Authorize Protocol ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createVNode(_sfc_main$4, {
                visible: showCreateDialog.value,
                onClose: ($event) => showCreateDialog.value = false
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
