import { defineComponent, ref, mergeProps, withCtx, unref, createVNode, createBlock, createCommentVNode, createTextVNode, openBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { d as useAuthStore, u as useRouter } from './server.mjs';
import { D as DashboardLayout } from './DashboardLayout-Cyy2dxQQ.mjs';
import { _ as _sfc_main$1 } from './GameList-u8i4C0yO.mjs';
import { B as Board } from './Board-BO2ZmLpn.mjs';
import { _ as _sfc_main$2 } from './CreateGameDialog-Br11fDxN.mjs';
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
import './GameListItem-YCnEV8Lc.mjs';
import './GameStatus-DcfBG9k6.mjs';
import './users-x0j5YX6M.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "contents" }, _attrs))}>`);
      _push(ssrRenderComponent(DashboardLayout, null, {
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
            _push2(`<div class="space-y-20 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000"${_scopeId}><section class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"${_scopeId}><div class="space-y-8"${_scopeId}><div class="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]"${_scopeId}><span class="relative flex h-2 w-2"${_scopeId}><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"${_scopeId}></span><span class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"${_scopeId}></span></span><span${_scopeId}>Live Operational Status</span></div><div class="space-y-2"${_scopeId}><h1 class="text-6xl font-black text-app-text leading-[0.9] tracking-tighter uppercase italic"${_scopeId}> Tactical <br${_scopeId}><span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-500"${_scopeId}>Superiority.</span></h1><p class="text-sm font-bold uppercase tracking-[0.3em] text-app-text-muted opacity-40 pt-4"${_scopeId}> Ultimate Strategy Redefined </p></div><p class="text-app-text-muted text-sm leading-relaxed max-w-md font-medium"${_scopeId}> Experience the depth of classic Tic-Tac-Toe reimagined as a fractal battle for board supremacy. Precision, logic, and cold-blooded tactics. </p><div class="flex items-center gap-6 pt-4"${_scopeId}><button class="px-10 py-4 bg-app-text text-void text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:opacity-90 transition-all shadow-2xl active:scale-95"${_scopeId}> Initiate Match </button><button class="px-10 py-4 glass border-glass-border text-app-text-muted text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-glass-white transition-all"${_scopeId}> Intel </button></div></div><div class="flex justify-center lg:justify-end w-full"${_scopeId}><div class="relative w-full max-w-[min(90vw,65vh)] lg:max-w-[70vh] cursor-pointer group"${_scopeId}><div class="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-1000"${_scopeId}></div>`);
            _push2(ssrRenderComponent(Board, {
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
              _push2(`<section class="py-16 flex flex-col items-center justify-center glass border-glass-border rounded-[2.5rem] border-dashed bg-indigo-500/[0.02]"${_scopeId}><div class="flex flex-col items-center text-center space-y-6"${_scopeId}><div class="w-16 h-16 rounded-2xl glass border-indigo-500/20 flex items-center justify-center text-indigo-500/40"${_scopeId}><i class="pi pi-shield text-2xl"${_scopeId}></i></div><div class="space-y-2"${_scopeId}><h3 class="text-lg font-black text-app-text uppercase italic"${_scopeId}>Elevate Your Command</h3><p class="text-app-text-muted opacity-40 text-[10px] font-black uppercase tracking-widest"${_scopeId}>Authorize to track your personal progress and engage in new operations</p></div><button class="px-10 py-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-500 transition-all shadow-2xl active:scale-95"${_scopeId}> Authorize Protocol </button></div></section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
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
                      createVNode("button", {
                        onClick: handleInitiateMatch,
                        class: "px-10 py-4 bg-app-text text-void text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:opacity-90 transition-all shadow-2xl active:scale-95"
                      }, " Initiate Match "),
                      createVNode("button", {
                        onClick: ($event) => unref(router).push("/how-to-play"),
                        class: "px-10 py-4 glass border-glass-border text-app-text-muted text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-glass-white transition-all"
                      }, " Intel ", 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "flex justify-center lg:justify-end w-full" }, [
                    createVNode("div", {
                      class: "relative w-full max-w-[min(90vw,65vh)] lg:max-w-[70vh] cursor-pointer group",
                      onClick: goToFeatured
                    }, [
                      createVNode("div", { class: "absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-1000" }),
                      createVNode(Board, {
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
                    createVNode("button", {
                      onClick: ($event) => unref(authStore).openLoginModal("/"),
                      class: "px-10 py-4 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-500 transition-all shadow-2xl active:scale-95"
                    }, " Authorize Protocol ", 8, ["onClick"])
                  ])
                ])) : createCommentVNode("", true)
              ]),
              createVNode(_sfc_main$2, {
                visible: showCreateDialog.value,
                onClose: ($event) => showCreateDialog.value = false
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-O7qOa3Ql.mjs.map
