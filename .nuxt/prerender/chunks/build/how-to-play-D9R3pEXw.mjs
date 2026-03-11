import { _ as _export_sfc, a as useSeoMeta, c as useRouter, e as __nuxt_component_0, B as BaseButton } from './server.mjs';
import { defineComponent, ref, computed, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, toDisplayString, useSSRContext } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue/server-renderer/index.mjs';
import { _ as _sfc_main$1 } from './Board-04WGI2Q_.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/h3/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ufo/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/destr/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/hookable/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/node-mock-http/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ohash/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/klona/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/defu/dist/defu.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/scule/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unctx/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/radix3/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/consola/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/core/base/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/core/basecomponent/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/autocomplete/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/object/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/cascadeselect/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/checkbox/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/checkboxgroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/colorpicker/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/datepicker/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/floatlabel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/iconfield/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/iftalabel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputchips/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputgroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputnumber/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputotp/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inputtext/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/knob/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/listbox/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/multiselect/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/password/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/radiobutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/radiobuttongroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/rating/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/select/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/selectbutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/slider/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/textarea/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/togglebutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/toggleswitch/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/treeselect/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/button/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/buttongroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/speeddial/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/splitbutton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/datatable/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/dataview/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/orderlist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/organizationchart/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/paginator/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/picklist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tree/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/treetable/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/timeline/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/virtualscroller/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/accordion/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/card/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/divider/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/fieldset/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/panel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/scrollpanel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/splitter/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/stepper/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tabview/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tabs/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/toolbar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/confirmdialog/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/confirmpopup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/dialog/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/drawer/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/popover/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/fileupload/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/breadcrumb/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/contextmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/dock/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/menu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/menubar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/megamenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/panelmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/steps/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tabmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tieredmenu/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/message/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inlinemessage/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/toast/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/carousel/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/galleria/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/image/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/imagecompare/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/avatar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/badge/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/blockui/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/chip/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/inplace/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/metergroup/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/overlaybadge/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/scrolltop/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/skeleton/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/progressbar/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/progressspinner/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tag/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/terminal/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/forms/form/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primevue/forms/formfield/style/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/tooltip/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/ripple/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styled/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/pathe/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/fast-xml-parser/src/fxp.js';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/pinia/dist/pinia.prod.cjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue-router/vue-router.node.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/eventbus/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/styles/dist/base/index.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@primeuix/utils/dist/dom/index.mjs';
import '../_/renderer.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unhead/dist/server.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/devalue/index.js';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unhead/dist/plugins.mjs';
import 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unhead/dist/utils.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "how-to-play",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "How to Play",
      description: "Master the rules of Ultimate Tic-Tac-Toe. Learn about the fractal board grid, the movement rule, and winning strategies.",
      ogTitle: "How to Play | Tixo",
      ogDescription: "Master the rules of Ultimate Tic-Tac-Toe. Learn about the fractal board grid, the movement rule, and winning strategies."
    });
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
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_BaseButton = resolveComponent("BaseButton");
      const _component_CommonBaseButton = BaseButton;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        "header-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-4" data-v-7f141a0d${_scopeId}>`);
            _push2(ssrRenderComponent(_component_BaseButton, {
              onClick: ($event) => unref(router).push("/"),
              variant: "ghost",
              size: "sm",
              "aria-label": "Go back to dashboard",
              class: "!w-10 !h-10 !p-0 text-app-text-muted hover:text-app-text transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-arrow-left" data-v-7f141a0d${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-arrow-left" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex items-center space-x-2" data-v-7f141a0d${_scopeId}><i class="pi pi-book text-blue-500 text-xl" data-v-7f141a0d${_scopeId}></i><span class="text-xl font-bold text-app-text tracking-tight" data-v-7f141a0d${_scopeId}>How to Play</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-4" }, [
                createVNode(_component_BaseButton, {
                  onClick: ($event) => unref(router).push("/"),
                  variant: "ghost",
                  size: "sm",
                  "aria-label": "Go back to dashboard",
                  class: "!w-10 !h-10 !p-0 text-app-text-muted hover:text-app-text transition-colors"
                }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "pi pi-arrow-left" })
                  ]),
                  _: 1
                }, 8, ["onClick"]),
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
            _push2(`<div class="max-w-6xl mx-auto py-8 px-4" data-v-7f141a0d${_scopeId}>`);
            if (step.value) {
              _push2(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-v-7f141a0d${_scopeId}><div class="relative group" data-v-7f141a0d${_scopeId}><div class="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-2xl rounded-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" data-v-7f141a0d${_scopeId}></div><div class="relative" data-v-7f141a0d${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$1, {
                board: step.value.board,
                "tile-winners": step.value.tileWinners,
                "selected-cell": step.value.highlightedCell,
                readonly: ""
              }, null, _parent2, _scopeId));
              if (step.value.highlightedTile !== null) {
                _push2(`<div class="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-3 p-4 pointer-events-none" data-v-7f141a0d${_scopeId}><!--[-->`);
                ssrRenderList(9, (i) => {
                  _push2(`<div class="${ssrRenderClass([
                    "rounded-xl border-4 transition-all duration-500",
                    step.value.highlightedTile === i - 1 ? "border-yellow-400 shadow-[0_0_30px_rgba(250,204,21,0.4)] animate-pulse" : "border-transparent"
                  ])}" data-v-7f141a0d${_scopeId}></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div><div class="space-y-8" data-v-7f141a0d${_scopeId}><div class="space-y-4" data-v-7f141a0d${_scopeId}><div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider" data-v-7f141a0d${_scopeId}> Step ${ssrInterpolate(currentStep.value + 1)} of ${ssrInterpolate(steps.length)}</div><h1 class="text-4xl font-extrabold text-app-text tracking-tight" data-v-7f141a0d${_scopeId}>${ssrInterpolate(step.value.title)}</h1><p class="text-xl text-app-text-muted opacity-60 leading-relaxed" data-v-7f141a0d${_scopeId}>${ssrInterpolate(step.value.description)}</p>`);
              if (step.value.note) {
                _push2(`<div class="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl" data-v-7f141a0d${_scopeId}><p class="text-indigo-400 text-sm italic" data-v-7f141a0d${_scopeId}><i class="pi pi-info-circle mr-2" data-v-7f141a0d${_scopeId}></i> ${ssrInterpolate(step.value.note)}</p></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div class="flex items-center space-x-4" data-v-7f141a0d${_scopeId}>`);
              _push2(ssrRenderComponent(_component_CommonBaseButton, {
                onClick: prevStep,
                disabled: currentStep.value === 0,
                "aria-label": "Previous tutorial step",
                variant: "secondary",
                class: "flex-1"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Back `);
                  } else {
                    return [
                      createTextVNode(" Back ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              if (currentStep.value < steps.length - 1) {
                _push2(ssrRenderComponent(_component_CommonBaseButton, {
                  onClick: nextStep,
                  "aria-label": "Next tutorial step",
                  variant: "info",
                  class: "flex-[2]",
                  animate: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Next Step `);
                    } else {
                      return [
                        createTextVNode(" Next Step ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(ssrRenderComponent(_component_CommonBaseButton, {
                  onClick: ($event) => unref(router).push("/"),
                  "aria-label": "Finish tutorial and go to dashboard",
                  variant: "success",
                  class: "flex-[2]",
                  animate: ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` Got it, let&#39;s play! `);
                    } else {
                      return [
                        createTextVNode(" Got it, let's play! ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              }
              _push2(`</div><div class="flex justify-center space-x-2" data-v-7f141a0d${_scopeId}><!--[-->`);
              ssrRenderList(steps, (_2, i) => {
                _push2(`<div class="${ssrRenderClass([i === currentStep.value ? "w-8 bg-blue-500" : "bg-glass-border", "w-2 h-2 rounded-full transition-all duration-300"])}" data-v-7f141a0d${_scopeId}></div>`);
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
                      createVNode(_sfc_main$1, {
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
                      createVNode("h1", { class: "text-4xl font-extrabold text-app-text tracking-tight" }, toDisplayString(step.value.title), 1),
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
                      createVNode(_component_CommonBaseButton, {
                        onClick: prevStep,
                        disabled: currentStep.value === 0,
                        "aria-label": "Previous tutorial step",
                        variant: "secondary",
                        class: "flex-1"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Back ")
                        ]),
                        _: 1
                      }, 8, ["disabled"]),
                      currentStep.value < steps.length - 1 ? (openBlock(), createBlock(_component_CommonBaseButton, {
                        key: 0,
                        onClick: nextStep,
                        "aria-label": "Next tutorial step",
                        variant: "info",
                        class: "flex-[2]",
                        animate: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Next Step ")
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_component_CommonBaseButton, {
                        key: 1,
                        onClick: ($event) => unref(router).push("/"),
                        "aria-label": "Finish tutorial and go to dashboard",
                        variant: "success",
                        class: "flex-[2]",
                        animate: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Got it, let's play! ")
                        ]),
                        _: 1
                      }, 8, ["onClick"]))
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
const howToPlay = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f141a0d"]]);

export { howToPlay as default };
