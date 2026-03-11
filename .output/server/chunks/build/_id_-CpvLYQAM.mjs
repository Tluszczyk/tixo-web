import { d as useRoute, a as useSeoMeta, e as __nuxt_component_0, B as BaseButton } from './server.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { g as games } from './games-aIlt4Osa.mjs';
import { U as UserDashboard } from './UserDashboard-CP70_vQK.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'consola';
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
import 'fast-xml-parser';
import 'pinia';
import 'vue-router';
import '@primeuix/utils/eventbus';
import '@primeuix/utils';
import '@primeuix/styles/base';
import '@primeuix/utils/dom';
import 'appwrite';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';
import './GameListItem-yyLTPBCw.mjs';
import './nuxt-link-C9J5Jg0a.mjs';
import './GameStatus-DcfBG9k6.mjs';
import 'echarts/core';
import 'echarts/renderers';
import 'echarts/charts';
import 'echarts/components';
import 'vue-echarts';

const itemsPerPage = 10;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const userId = route.params.id;
    const user = ref(null);
    const userGames = ref([]);
    const ratingHistory = ref([]);
    const loading = ref(true);
    const currentPage = ref(1);
    const totalGames = ref(0);
    useSeoMeta({
      title: () => user.value ? `${user.value.name}'s Dashboard` : "User Dashboard",
      description: () => user.value ? `View tactical records and match chronicles of ${user.value.name} on Tixo.` : "View tactical records and match chronicles on Tixo."
    });
    const fetchUserGames = async () => {
      if (!user.value) return;
      try {
        const response = await games.listGames(
          itemsPerPage,
          (currentPage.value - 1) * itemsPerPage,
          { playerId: userId }
        );
        userGames.value = response.games;
        totalGames.value = response.total;
      } catch (e) {
        console.error("Failed to fetch user games", e);
      }
    };
    const handlePageChange = async (newPage) => {
      currentPage.value = newPage;
      await fetchUserGames();
    };
    const goBack = () => {
      (void 0).history.back();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        "header-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center space-x-4"${_scopeId}>`);
            _push2(ssrRenderComponent(BaseButton, {
              onClick: goBack,
              variant: "ghost",
              size: "sm",
              class: "!w-10 !h-10 !p-0 text-app-text-muted hover:text-app-text transition-colors"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<i class="pi pi-arrow-left"${_scopeId2}></i>`);
                } else {
                  return [
                    createVNode("i", { class: "pi pi-arrow-left" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="text-2xl font-black tracking-tighter uppercase italic"${_scopeId}> Intelligence<span class="text-indigo-500"${_scopeId}>.</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center space-x-4" }, [
                createVNode(BaseButton, {
                  onClick: goBack,
                  variant: "ghost",
                  size: "sm",
                  class: "!w-10 !h-10 !p-0 text-app-text-muted hover:text-app-text transition-colors"
                }, {
                  default: withCtx(() => [
                    createVNode("i", { class: "pi pi-arrow-left" })
                  ]),
                  _: 1
                }),
                createVNode("div", { class: "text-2xl font-black tracking-tighter uppercase italic" }, [
                  createTextVNode(" Intelligence"),
                  createVNode("span", { class: "text-indigo-500" }, ".")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (loading.value) {
              _push2(`<div class="flex flex-col items-center justify-center min-h-[60vh]"${_scopeId}><i class="pi pi-spin pi-spinner text-4xl text-indigo-500 mb-4"${_scopeId}></i><p class="text-app-text-muted opacity-40 font-bold uppercase tracking-widest text-[10px]"${_scopeId}>Syncing Data</p></div>`);
            } else if (!user.value) {
              _push2(`<div class="flex flex-col items-center justify-center min-h-[60vh] text-center"${_scopeId}><i class="pi pi-exclamation-triangle text-4xl text-amber-500 mb-4"${_scopeId}></i><h2 class="text-2xl font-bold text-app-text mb-2"${_scopeId}>User Not Found</h2><p class="text-app-text-muted opacity-40 mb-6"${_scopeId}>The intelligence record for this ID does not exist.</p>`);
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
              _push2(ssrRenderComponent(UserDashboard, {
                user: user.value,
                "user-details": user.value,
                "user-games": userGames.value,
                "total-games": totalGames.value,
                "rating-history": ratingHistory.value,
                "is-own-profile": false,
                "current-page": currentPage.value,
                "items-per-page": itemsPerPage,
                onPageChange: handlePageChange
              }, null, _parent2, _scopeId));
            }
          } else {
            return [
              loading.value ? (openBlock(), createBlock("div", {
                key: 0,
                class: "flex flex-col items-center justify-center min-h-[60vh]"
              }, [
                createVNode("i", { class: "pi pi-spin pi-spinner text-4xl text-indigo-500 mb-4" }),
                createVNode("p", { class: "text-app-text-muted opacity-40 font-bold uppercase tracking-widest text-[10px]" }, "Syncing Data")
              ])) : !user.value ? (openBlock(), createBlock("div", {
                key: 1,
                class: "flex flex-col items-center justify-center min-h-[60vh] text-center"
              }, [
                createVNode("i", { class: "pi pi-exclamation-triangle text-4xl text-amber-500 mb-4" }),
                createVNode("h2", { class: "text-2xl font-bold text-app-text mb-2" }, "User Not Found"),
                createVNode("p", { class: "text-app-text-muted opacity-40 mb-6" }, "The intelligence record for this ID does not exist."),
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
              ])) : (openBlock(), createBlock(UserDashboard, {
                key: 2,
                user: user.value,
                "user-details": user.value,
                "user-games": userGames.value,
                "total-games": totalGames.value,
                "rating-history": ratingHistory.value,
                "is-own-profile": false,
                "current-page": currentPage.value,
                "items-per-page": itemsPerPage,
                onPageChange: handlePageChange
              }, null, 8, ["user", "user-details", "user-games", "total-games", "rating-history", "current-page"]))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
