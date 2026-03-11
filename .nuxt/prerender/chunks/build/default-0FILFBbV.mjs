import { defineComponent, ref, computed, watch, mergeProps, unref, withCtx, openBlock, createBlock, toDisplayString, createCommentVNode, createVNode, useSSRContext } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderList } from 'file:///home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc, b as useAuthStore, d as useRoute, c as useRouter, g as useThemeStore, B as BaseButton } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const router = useRouter();
    const route = useRoute();
    const isExpanded = ref(false);
    const menuItems = [
      { label: "Match", icon: "pi pi-compass", route: "/", requiresAuth: false },
      { label: "Tactics", icon: "pi pi-book", route: "/how-to-play", requiresAuth: false },
      { label: "Users", icon: "pi pi-users", route: "/users", requiresAuth: false },
      { label: "Profile", icon: "pi pi-user", route: "/profile", requiresAuth: true }
    ];
    const secondaryItems = [
      { label: "Settings", icon: "pi pi-cog", route: "/settings" },
      { label: "Privacy Policy", icon: "pi pi-shield", route: "/privacy" }
    ];
    const handleNavigation = (routePath) => {
      router.push(routePath);
    };
    const handleLogout = async () => {
      if (isGuest.value) {
        authStore.openLoginModal(route.fullPath);
      } else {
        await authStore.logout();
        await router.push("/");
      }
    };
    const isGuest = computed(() => !authStore.isLoggedIn);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        class: [
          "h-full bg-sidebar border-r border-glass-border flex flex-col py-8 transition-all duration-500 ease-in-out relative z-60",
          isExpanded.value ? "w-64 px-6" : "w-24 px-4 items-center"
        ]
      }, _attrs))}><div class="${ssrRenderClass([
        "mb-12 flex items-center transition-all duration-500",
        isExpanded.value ? "justify-between w-full" : "justify-center"
      ])}"><div class="text-2xl font-black tracking-tighter uppercase italic text-app-text flex items-center gap-2 cursor-pointer transition-all duration-500 overflow-hidden"><span class="shrink-0">T<span class="${ssrRenderClass([
        "transition-all duration-500",
        isExpanded.value ? "opacity-0 w-0" : "text-indigo-500 opacity-100 w-auto"
      ])}">.</span></span><span class="${ssrRenderClass([
        "overflow-hidden whitespace-nowrap transition-all duration-500",
        isExpanded.value ? "opacity-100 max-w-24" : "opacity-0 max-w-0",
        isExpanded.value ? "delay-300" : ""
      ])}"> IXO<span class="text-indigo-500">.</span></span></div></div><nav class="flex-1 flex flex-col gap-4 w-full"><!--[-->`);
      ssrRenderList(menuItems, (item) => {
        _push(ssrRenderComponent(BaseButton, {
          key: item.label,
          onClick: ($event) => handleNavigation(item.route),
          variant: unref(route).path === item.route ? "primary" : "secondary",
          class: [
            "relative flex items-center transition-all duration-500 group overflow-hidden",
            isExpanded.value ? "px-4 h-12 gap-4 w-full rounded-2xl" : "w-14 h-14 justify-center rounded-2xl",
            item.requiresAuth && isGuest.value ? "opacity-50 grayscale-[0.5]" : ""
          ]
        }, {
          left: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="relative"${_scopeId}><i class="${ssrRenderClass([
                item.icon,
                "text-lg transition-all duration-500 shrink-0",
                isExpanded.value ? "" : "group-hover:scale-110",
                unref(route).path === item.route ? "text-void" : "text-app-text-muted group-hover:text-app-text"
              ])}"${_scopeId}></i>`);
              if (item.requiresAuth && isGuest.value) {
                _push2(`<i class="pi pi-lock absolute -top-1 -right-1 text-[8px] text-indigo-500"${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "relative" }, [
                  createVNode("i", {
                    class: [
                      item.icon,
                      "text-lg transition-all duration-500 shrink-0",
                      isExpanded.value ? "" : "group-hover:scale-110",
                      unref(route).path === item.route ? "text-void" : "text-app-text-muted group-hover:text-app-text"
                    ]
                  }, null, 2),
                  item.requiresAuth && isGuest.value ? (openBlock(), createBlock("i", {
                    key: 0,
                    class: "pi pi-lock absolute -top-1 -right-1 text-[8px] text-indigo-500"
                  })) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (isExpanded.value) {
                _push2(`<span class="text-[10px] font-black uppercase tracking-widest whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (!isExpanded.value) {
                _push2(`<span class="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-indigo-600 text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50 shadow-xl shadow-black/50"${_scopeId}>${ssrInterpolate(item.label)} ${ssrInterpolate(item.requiresAuth && isGuest.value ? "(Auth Required)" : "")}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                isExpanded.value ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-[10px] font-black uppercase tracking-widest whitespace-nowrap"
                }, toDisplayString(item.label), 1)) : createCommentVNode("", true),
                !isExpanded.value ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-indigo-600 text-[10px] font-black uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50 shadow-xl shadow-black/50"
                }, toDisplayString(item.label) + " " + toDisplayString(item.requiresAuth && isGuest.value ? "(Auth Required)" : ""), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav><div class="mt-auto pt-8 border-t border-glass-border flex flex-col gap-4 w-full"><!--[-->`);
      ssrRenderList(secondaryItems, (item) => {
        _push(ssrRenderComponent(BaseButton, {
          key: item.label,
          onClick: ($event) => handleNavigation(item.route),
          variant: unref(route).path === item.route ? "primary" : "secondary",
          size: "sm",
          class: [
            "relative transition-all duration-500 group overflow-hidden",
            isExpanded.value ? "px-4 h-10 w-full rounded-2xl" : "w-14 h-10 justify-center rounded-2xl"
          ]
        }, {
          left: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<i class="${ssrRenderClass([
                item.icon,
                "text-sm transition-all duration-500 shrink-0",
                isExpanded.value ? "" : "group-hover:scale-110",
                unref(route).path === item.route ? "text-void" : "text-app-text-muted group-hover:text-app-text"
              ])}"${_scopeId}></i>`);
            } else {
              return [
                createVNode("i", {
                  class: [
                    item.icon,
                    "text-sm transition-all duration-500 shrink-0",
                    isExpanded.value ? "" : "group-hover:scale-110",
                    unref(route).path === item.route ? "text-void" : "text-app-text-muted group-hover:text-app-text"
                  ]
                }, null, 2)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (isExpanded.value) {
                _push2(`<span class="text-[9px] font-bold uppercase tracking-widest whitespace-nowrap"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (!isExpanded.value) {
                _push2(`<span class="absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-sidebar text-[10px] font-black uppercase tracking-widest text-app-text opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50 shadow-xl"${_scopeId}>${ssrInterpolate(item.label)}</span>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                isExpanded.value ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "text-[9px] font-bold uppercase tracking-widest whitespace-nowrap"
                }, toDisplayString(item.label), 1)) : createCommentVNode("", true),
                !isExpanded.value ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: "absolute left-full ml-4 px-3 py-1.5 rounded-lg bg-sidebar text-[10px] font-black uppercase tracking-widest text-app-text opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2.5 group-hover:translate-x-0 pointer-events-none whitespace-nowrap z-50 shadow-xl"
                }, toDisplayString(item.label), 1)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(BaseButton, {
        onClick: handleLogout,
        variant: isGuest.value ? "info" : "danger",
        size: "sm",
        class: [
          "relative transition-all duration-500 group overflow-hidden",
          isExpanded.value ? "px-4 h-10 w-full rounded-2xl" : "w-14 h-10 justify-center rounded-2xl"
        ]
      }, {
        left: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (!isGuest.value) {
              _push2(`<i class="pi pi-power-off text-sm shrink-0 transition-all duration-500"${_scopeId}></i>`);
            } else {
              _push2(`<i class="pi pi-sign-in text-sm shrink-0 transition-all duration-500"${_scopeId}></i>`);
            }
          } else {
            return [
              !isGuest.value ? (openBlock(), createBlock("i", {
                key: 0,
                class: "pi pi-power-off text-sm shrink-0 transition-all duration-500"
              })) : (openBlock(), createBlock("i", {
                key: 1,
                class: "pi pi-sign-in text-sm shrink-0 transition-all duration-500"
              }))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (isExpanded.value) {
              _push2(`<span class="text-[9px] font-bold uppercase tracking-widest whitespace-nowrap"${_scopeId}>${ssrInterpolate(isGuest.value ? "Authorize" : "Disconnect")}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              isExpanded.value ? (openBlock(), createBlock("span", {
                key: 0,
                class: "text-[9px] font-bold uppercase tracking-widest whitespace-nowrap"
              }, toDisplayString(isGuest.value ? "Authorize" : "Disconnect"), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const authStore = useAuthStore();
    const isSidebarOpen = ref(false);
    const showNotifications = ref(false);
    const route = useRoute();
    useRouter();
    const themeStore = useThemeStore();
    const userName = computed(() => {
      var _a;
      return ((_a = authStore.user) == null ? void 0 : _a.name) || "Player";
    });
    const notificationList = ref([]);
    const newNotification = ref(null);
    ref(null);
    const unreadCount = computed(() => notificationList.value.filter((n) => !n.isOpened).length);
    watch(
      () => route.path,
      () => {
        isSidebarOpen.value = false;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex h-screen w-screen overflow-hidden bg-void relative noise" }, _attrs))} data-v-b049cd52>`);
      if (isSidebarOpen.value) {
        _push(`<div class="fixed inset-0 bg-void/80 backdrop-blur-sm z-40 lg:hidden" data-v-b049cd52></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([
        "fixed inset-y-0 left-0 z-50 transform lg:relative lg:translate-x-0 transition-transform duration-500 ease-in-out",
        isSidebarOpen.value ? "translate-x-0" : "-translate-x-full"
      ])}" data-v-b049cd52>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div><div class="flex-1 flex flex-col min-w-0 overflow-hidden relative" data-v-b049cd52><header class="h-20 flex items-center justify-between px-6 lg:px-12 border-b border-glass-border bg-void/50 backdrop-blur-md shrink-0 z-20" data-v-b049cd52><div class="flex items-center gap-6" data-v-b049cd52><button class="lg:hidden p-2 rounded-lg text-app-text-muted hover:text-app-text hover:bg-glass-white transition-all" data-v-b049cd52><i class="${ssrRenderClass([isSidebarOpen.value ? "pi-times" : "pi-bars", "pi"])}" data-v-b049cd52></i></button>`);
      ssrRenderSlot(_ctx.$slots, "header-left", {}, null, _push, _parent);
      _push(`</div><div class="flex items-center gap-6 lg:gap-12" data-v-b049cd52>`);
      ssrRenderSlot(_ctx.$slots, "header-right", {}, null, _push, _parent);
      _push(`<div class="flex items-center gap-6" data-v-b049cd52><button class="w-10 h-10 rounded-xl glass border-glass-border flex items-center justify-center text-app-text-muted hover:text-app-text hover:border-indigo-500/30 transition-all" title="Toggle Theme" data-v-b049cd52><i class="${ssrRenderClass([unref(themeStore).theme === "dark" ? "pi-sun" : "pi-moon", "pi"])}" data-v-b049cd52></i></button><div class="relative" data-v-b049cd52><button class="w-10 h-10 rounded-xl glass border-glass-border flex items-center justify-center text-app-text-muted hover:text-app-text hover:border-indigo-500/30 transition-all relative" data-v-b049cd52><i class="pi pi-bell text-sm" data-v-b049cd52></i>`);
      if (unreadCount.value > 0) {
        _push(`<div class="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-void flex items-center justify-center" data-v-b049cd52><span class="text-[8px] font-black text-white" data-v-b049cd52>${ssrInterpolate(unreadCount.value)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button>`);
      if (showNotifications.value) {
        _push(`<div class="fixed sm:absolute right-4 sm:right-0 mt-20 sm:mt-4 w-[calc(100vw-32px)] sm:w-96 bg-void/95 backdrop-blur-3xl border border-glass-border rounded-3xl shadow-2xl overflow-hidden z-[100]" data-v-b049cd52><div class="p-6 border-b border-glass-border flex items-center justify-between" data-v-b049cd52><span class="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-500" data-v-b049cd52>Communications</span><div class="flex items-center gap-4" data-v-b049cd52>`);
        if (unreadCount.value > 0) {
          _push(`<button class="text-[9px] font-black uppercase tracking-widest text-indigo-400/60 hover:text-indigo-400 transition-colors" data-v-b049cd52> Mark all read </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="text-[9px] font-bold text-app-text-muted uppercase mono" data-v-b049cd52>${ssrInterpolate(notificationList.value.length)} TOTAL</span></div></div><div class="max-h-96 overflow-y-auto custom-scrollbar" data-v-b049cd52><!--[-->`);
        ssrRenderList(notificationList.value, (notif) => {
          _push(`<div class="p-6 hover:bg-glass-white transition-all cursor-pointer border-b border-glass-border/30 last:border-0 relative group" data-v-b049cd52>`);
          if (!notif.isOpened) {
            _push(`<div class="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-indigo-500 rounded-full shadow-[0_0_12px_#6366f1]" data-v-b049cd52></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<p class="${ssrRenderClass([
            notif.isOpened ? "text-app-text-muted font-medium" : "text-app-text font-black",
            "text-[13px] leading-relaxed mb-1.5"
          ])}" data-v-b049cd52>${ssrInterpolate(notif.message)}</p><span class="text-[10px] font-bold uppercase tracking-[0.1em] text-app-text-muted" data-v-b049cd52>${ssrInterpolate(new Date(notif.$createdAt).toLocaleTimeString())}</span></div>`);
        });
        _push(`<!--]-->`);
        if (notificationList.value.length === 0) {
          _push(`<div class="p-12 text-center flex flex-col items-center gap-3" data-v-b049cd52><i class="pi pi-bell-slash text-2xl text-app-text-muted opacity-20" data-v-b049cd52></i><span class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-20" data-v-b049cd52>No Communications</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="flex items-center gap-3 cursor-pointer group" data-v-b049cd52><div class="text-right hidden sm:block" data-v-b049cd52><p class="text-[10px] font-bold text-app-text-muted uppercase tracking-[0.2em]" data-v-b049cd52> Profile </p><p class="text-xs font-bold text-app-text group-hover:text-blue-400 transition-colors" data-v-b049cd52>${ssrInterpolate(userName.value)}</p></div><div class="w-10 h-10 rounded-full glass flex items-center justify-center border-glass-border group-hover:border-blue-500/30 transition-all" data-v-b049cd52><i class="pi pi-user text-app-text-muted text-sm group-hover:text-app-text" data-v-b049cd52></i></div></div></div></div></header><main class="flex-1 overflow-y-auto custom-scrollbar relative" data-v-b049cd52><div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.03)_0%,_transparent_70%)]" data-v-b049cd52></div><div class="w-full mx-auto p-4 lg:p-8 relative z-10 h-full" data-v-b049cd52>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main>`);
      if (newNotification.value) {
        _push(`<div class="fixed inset-x-4 bottom-8 sm:inset-auto sm:right-8 sm:bottom-8 z-[200]" data-v-b049cd52><div class="bg-void/95 backdrop-blur-3xl border border-indigo-500/30 p-8 rounded-[2.5rem] shadow-2xl w-full max-w-md mx-auto sm:mx-0 flex items-center gap-8" data-v-b049cd52><div class="h-16 w-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20" data-v-b049cd52><i class="pi pi-bolt text-xl animate-pulse" data-v-b049cd52></i></div><div class="flex-1 space-y-2" data-v-b049cd52><p class="text-[10px] font-black text-indigo-500 uppercase tracking-[0.2em]" data-v-b049cd52> Incoming Transmission </p><p class="text-sm font-bold text-app-text leading-relaxed" data-v-b049cd52>${ssrInterpolate(newNotification.value.message)}</p><div class="flex items-center gap-4 pt-3" data-v-b049cd52><button class="text-[10px] font-black text-app-text-muted opacity-30 hover:text-app-text uppercase tracking-[0.2em] transition-colors" data-v-b049cd52> Ignore </button><button class="px-6 py-2.5 bg-indigo-500 text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl hover:bg-indigo-400 shadow-lg shadow-indigo-500/20 transition-all" data-v-b049cd52> View </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b049cd52"]]);

export { _default as default };
