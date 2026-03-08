import { defineComponent, ref, computed, withCtx, createVNode, createBlock, createCommentVNode, openBlock, Fragment, renderList, toDisplayString, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { D as DashboardLayout } from './DashboardLayout-Cyy2dxQQ.mjs';
import { B as Board } from './Board-BO2ZmLpn.mjs';
import { _ as _export_sfc, u as useRouter } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "how-to-play",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const steps = [
      {
        title: "The Board",
        description: `Ultimate Tic-Tac-Toe is played on a 3x3 grid of 9 smaller Tic-Tac-Toe boards. That's 81 squares in total!`,
        board: ".".repeat(81),
        tileWinners: ".".repeat(9),
        highlightedCell: null,
        highlightedTile: null,
        note: null
      },
      {
        title: "Your First Move",
        description: `The first player (X) can place their mark anywhere on the board. Let's say they pick the center-right square of the top-left board.`,
        board: ".....X...".padEnd(81, "."),
        tileWinners: ".".repeat(9),
        highlightedCell: 5,
        highlightedTile: null,
        note: null
      },
      {
        title: "The Movement Rule",
        description: `Here's the twist: whichever square you pick in a small board, your opponent must play in the corresponding small board on the big grid. Since X played in the center-right square, O must now play somewhere in the center-right small board.`,
        board: ".....X...".padEnd(81, "."),
        tileWinners: ".".repeat(9),
        highlightedCell: 5,
        highlightedTile: 5,
        note: null
      },
      {
        title: "Winning a Local Board",
        description: `When you get three in a row in a small board, you win that board! It then counts as a giant X or O for the main game.`,
        board: "XXX......" + ".".repeat(72),
        tileWinners: "X........",
        highlightedCell: null,
        highlightedTile: null,
        note: null
      },
      {
        title: "Winning the Game",
        description: `To win the overall game, you need to win three small boards in a row, column, or diagonal on the large 3x3 grid.`,
        board: "XXX......".repeat(3) + ".".repeat(54),
        tileWinners: "XXX......",
        highlightedCell: null,
        highlightedTile: null,
        note: null
      },
      {
        title: "The Free Choice",
        description: `If you are sent to a board that is already won or completely full, you get a "Free Choice" and can play in any available square on any board!`,
        board: "XXX......" + ".".repeat(72),
        tileWinners: "X........",
        highlightedCell: null,
        highlightedTile: null,
        note: `Strategy Tip: Sometimes it's better to send your opponent to a board where they can't do much, or even to a board you've already won to give them a free choice if you have a better move elsewhere!`
      }
    ];
    const currentStep = ref(0);
    const step = computed(() => steps[currentStep.value]);
    const nextStep = () => {
      if (currentStep.value < steps.length - 1) {
        currentStep.value++;
      }
    };
    const prevStep = () => {
      if (currentStep.value > 0) {
        currentStep.value--;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(DashboardLayout, _attrs, {
        "header-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-4" data-v-ef3f87f7${_scopeId}><button class="p-2 hover:bg-glass-white rounded-lg text-app-text-muted hover:text-app-text transition-colors" data-v-ef3f87f7${_scopeId}><i class="pi pi-arrow-left" data-v-ef3f87f7${_scopeId}></i></button><div class="flex items-center space-x-2" data-v-ef3f87f7${_scopeId}><i class="pi pi-book text-blue-500 text-xl" data-v-ef3f87f7${_scopeId}></i><span class="text-xl font-bold text-app-text tracking-tight" data-v-ef3f87f7${_scopeId}>How to Play</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-4" }, [
                createVNode("button", {
                  onClick: ($event) => unref(router).push("/"),
                  class: "p-2 hover:bg-glass-white rounded-lg text-app-text-muted hover:text-app-text transition-colors"
                }, [
                  createVNode("i", { class: "pi pi-arrow-left" })
                ], 8, ["onClick"]),
                createVNode("div", { class: "flex items-center space-x-2" }, [
                  createVNode("i", { class: "pi pi-book text-blue-500 text-xl" }),
                  createVNode("span", { class: "text-xl font-bold text-app-text tracking-tight" }, "How to Play")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-w-6xl mx-auto py-8 px-4" data-v-ef3f87f7${_scopeId}>`);
            if (step.value) {
              _push2(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-v-ef3f87f7${_scopeId}><div class="relative group" data-v-ef3f87f7${_scopeId}><div class="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" data-v-ef3f87f7${_scopeId}></div><div class="relative" data-v-ef3f87f7${_scopeId}>`);
              _push2(ssrRenderComponent(Board, {
                board: step.value.board,
                "tile-winners": step.value.tileWinners,
                "selected-cell": step.value.highlightedCell,
                readonly: ""
              }, null, _parent2, _scopeId));
              if (step.value.highlightedTile !== null) {
                _push2(`<div class="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-4 pointer-events-none" data-v-ef3f87f7${_scopeId}><!--[-->`);
                ssrRenderList(9, (i) => {
                  _push2(`<div class="${ssrRenderClass([
                    "rounded-xl border-4 transition-all duration-500",
                    step.value.highlightedTile === i - 1 ? "border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.4)] animate-pulse" : "border-transparent"
                  ])}" data-v-ef3f87f7${_scopeId}></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="space-y-8" data-v-ef3f87f7${_scopeId}><div class="space-y-4" data-v-ef3f87f7${_scopeId}><div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider" data-v-ef3f87f7${_scopeId}> Step ${ssrInterpolate(currentStep.value + 1)} of ${ssrInterpolate(steps.length)}</div><h2 class="text-4xl font-extrabold text-app-text tracking-tight" data-v-ef3f87f7${_scopeId}>${ssrInterpolate(step.value.title)}</h2><p class="text-xl text-app-text-muted opacity-60 leading-relaxed" data-v-ef3f87f7${_scopeId}>${ssrInterpolate(step.value.description)}</p>`);
              if (step.value.note) {
                _push2(`<div class="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl" data-v-ef3f87f7${_scopeId}><p class="text-indigo-400 text-sm italic" data-v-ef3f87f7${_scopeId}><i class="pi pi-info-circle mr-2" data-v-ef3f87f7${_scopeId}></i> ${ssrInterpolate(step.value.note)}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center space-x-4" data-v-ef3f87f7${_scopeId}><button${ssrIncludeBooleanAttr(currentStep.value === 0) ? " disabled" : ""} class="flex-1 px-6 py-4 rounded-2xl bg-glass-white border border-glass-border text-app-text-muted font-bold hover:bg-glass-white hover:text-app-text transition-all disabled:opacity-50 disabled:cursor-not-allowed" data-v-ef3f87f7${_scopeId}> Back </button>`);
              if (currentStep.value < steps.length - 1) {
                _push2(`<button class="flex-[2] px-6 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98]" data-v-ef3f87f7${_scopeId}> Next Step </button>`);
              } else {
                _push2(`<button class="flex-[2] px-6 py-4 rounded-2xl bg-green-600 text-white font-bold hover:bg-green-500 transition-all shadow-xl shadow-green-900/20 active:scale-[0.98]" data-v-ef3f87f7${_scopeId}> Got it, let&#39;s play! </button>`);
              }
              _push2(`</div><div class="flex justify-center space-x-2" data-v-ef3f87f7${_scopeId}><!--[-->`);
              ssrRenderList(steps, (_2, i) => {
                _push2(`<div class="${ssrRenderClass([i === currentStep.value ? "w-8 bg-blue-500" : "bg-glass-border", "w-2 h-2 rounded-full transition-all duration-300"])}" data-v-ef3f87f7${_scopeId}></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-w-6xl mx-auto py-8 px-4" }, [
                step.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                }, [
                  createVNode("div", { class: "relative group" }, [
                    createVNode("div", { class: "absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" }),
                    createVNode("div", { class: "relative" }, [
                      createVNode(Board, {
                        board: step.value.board,
                        "tile-winners": step.value.tileWinners,
                        "selected-cell": step.value.highlightedCell,
                        readonly: ""
                      }, null, 8, ["board", "tile-winners", "selected-cell"]),
                      step.value.highlightedTile !== null ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-4 pointer-events-none"
                      }, [
                        (openBlock(), createBlock(Fragment, null, renderList(9, (i) => {
                          return createVNode("div", {
                            key: i,
                            class: [
                              "rounded-xl border-4 transition-all duration-500",
                              step.value.highlightedTile === i - 1 ? "border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.4)] animate-pulse" : "border-transparent"
                            ]
                          }, null, 2);
                        }), 64))
                      ])) : createCommentVNode("", true)
                    ])
                  ]),
                  createVNode("div", { class: "space-y-8" }, [
                    createVNode("div", { class: "space-y-4" }, [
                      createVNode("div", { class: "inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider" }, " Step " + toDisplayString(currentStep.value + 1) + " of " + toDisplayString(steps.length), 1),
                      createVNode("h2", { class: "text-4xl font-extrabold text-app-text tracking-tight" }, toDisplayString(step.value.title), 1),
                      createVNode("p", { class: "text-xl text-app-text-muted opacity-60 leading-relaxed" }, toDisplayString(step.value.description), 1),
                      step.value.note ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl"
                      }, [
                        createVNode("p", { class: "text-indigo-400 text-sm italic" }, [
                          createVNode("i", { class: "pi pi-info-circle mr-2" }),
                          createTextVNode(" " + toDisplayString(step.value.note), 1)
                        ])
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode("div", { class: "flex items-center space-x-4" }, [
                      createVNode("button", {
                        onClick: prevStep,
                        disabled: currentStep.value === 0,
                        class: "flex-1 px-6 py-4 rounded-2xl bg-glass-white border border-glass-border text-app-text-muted font-bold hover:bg-glass-white hover:text-app-text transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      }, " Back ", 8, ["disabled"]),
                      currentStep.value < steps.length - 1 ? (openBlock(), createBlock("button", {
                        key: 0,
                        onClick: nextStep,
                        class: "flex-[2] px-6 py-4 rounded-2xl bg-blue-600 text-white font-bold hover:bg-blue-500 transition-all shadow-xl shadow-blue-900/20 active:scale-[0.98]"
                      }, " Next Step ")) : (openBlock(), createBlock("button", {
                        key: 1,
                        onClick: ($event) => unref(router).push("/"),
                        class: "flex-[2] px-6 py-4 rounded-2xl bg-green-600 text-white font-bold hover:bg-green-500 transition-all shadow-xl shadow-green-900/20 active:scale-[0.98]"
                      }, " Got it, let's play! ", 8, ["onClick"]))
                    ]),
                    createVNode("div", { class: "flex justify-center space-x-2" }, [
                      (openBlock(), createBlock(Fragment, null, renderList(steps, (_2, i) => {
                        return createVNode("div", {
                          key: i,
                          class: ["w-2 h-2 rounded-full transition-all duration-300", i === currentStep.value ? "w-8 bg-blue-500" : "bg-glass-border"]
                        }, null, 2);
                      }), 64))
                    ])
                  ])
                ])) : createCommentVNode("", true)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/how-to-play.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const howToPlay = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ef3f87f7"]]);

export { howToPlay as default };
//# sourceMappingURL=how-to-play-NmXC-CCn.mjs.map
