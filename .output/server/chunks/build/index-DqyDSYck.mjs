import { _ as _export_sfc, a as useSeoMeta, b as useAuthStore, c as useRouter, d as useRoute, e as __nuxt_component_0, B as BaseButton } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-C9J5Jg0a.mjs';
import { defineComponent, ref, computed, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, withDirectives, withKeys, vModelText, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { g as games, u as users } from './games-aIlt4Osa.mjs';
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

const itemsPerPage = 25;
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Personnel Directory",
      description: "Connect with other players, view their tactical ratings, and challenge them to a match of Ultimate Tic-Tac-Toe.",
      ogTitle: "Personnel Directory | Tixo",
      ogDescription: "Connect with other players, view their tactical ratings, and challenge them to a match of Ultimate Tic-Tac-Toe."
    });
    const authStore = useAuthStore();
    const router = useRouter();
    const route = useRoute();
    const userList = ref([]);
    const searchId = ref("");
    const isLoading = ref(false);
    const requestingGame = ref(null);
    const currentPage = ref(1);
    const totalUsers = ref(0);
    const fetchUsers = async () => {
      isLoading.value = true;
      try {
        const response = await users.listUsers(searchId.value, itemsPerPage, (currentPage.value - 1) * itemsPerPage);
        userList.value = response.users;
        totalUsers.value = response.total;
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        isLoading.value = false;
      }
    };
    const totalPages = computed(() => Math.ceil(totalUsers.value / itemsPerPage));
    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
        fetchUsers();
      }
    };
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
        fetchUsers();
      }
    };
    const requestGame = async (targetUserId) => {
      if (requestingGame.value) return;
      if (!authStore.isLoggedIn) {
        authStore.openLoginModal(route.fullPath);
        return;
      }
      requestingGame.value = targetUserId;
      try {
        const gameId = await games.createGame("X", false, targetUserId);
        if (gameId) {
          await router.push(`/game/${gameId}`);
        }
      } catch (error) {
        console.error("Failed to request game:", error);
      } finally {
        requestingGame.value = null;
      }
    };
    const onSearch = () => {
      currentPage.value = 1;
      fetchUsers();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLayout = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_NuxtLayout, mergeProps({ name: "default" }, _attrs), {
        "header-left": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center gap-4" data-v-ba085646${_scopeId}><div class="text-2xl font-black tracking-tighter uppercase italic" data-v-ba085646${_scopeId}> Personnel<span class="text-indigo-500" data-v-ba085646${_scopeId}>.</span></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center gap-4" }, [
                createVNode("div", { class: "text-2xl font-black tracking-tighter uppercase italic" }, [
                  createTextVNode(" Personnel"),
                  createVNode("span", { class: "text-indigo-500" }, ".")
                ])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700" data-v-ba085646${_scopeId}><section class="glass p-6 rounded-2xl border-glass-border space-y-4" data-v-ba085646${_scopeId}><div class="flex items-center gap-3 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]" data-v-ba085646${_scopeId}><i class="pi pi-search text-xs" data-v-ba085646${_scopeId}></i><span data-v-ba085646${_scopeId}>Identification Filter</span></div><div class="flex gap-4" data-v-ba085646${_scopeId}><div class="relative group flex-1" data-v-ba085646${_scopeId}><input${ssrRenderAttr("value", searchId.value)} type="text" placeholder="Search by User ID..." class="w-full bg-void border border-glass-border rounded-xl px-4 py-3 text-app-text placeholder:text-app-text-muted opacity-20 focus:opacity-100 focus:outline-none focus:border-indigo-500/50 transition-all text-sm font-medium" data-v-ba085646${_scopeId}>`);
            if (isLoading.value) {
              _push2(`<div class="absolute right-4 top-1/2 -translate-y-1/2" data-v-ba085646${_scopeId}><i class="pi pi-spin pi-spinner text-indigo-500" data-v-ba085646${_scopeId}></i></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
            _push2(ssrRenderComponent(BaseButton, {
              onClick: onSearch,
              variant: "primary",
              size: "md",
              loading: isLoading.value,
              disabled: isLoading.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Query `);
                } else {
                  return [
                    createTextVNode(" Query ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></section><section class="glass rounded-2xl border-glass-border overflow-hidden" data-v-ba085646${_scopeId}><div class="overflow-x-auto" data-v-ba085646${_scopeId}><table class="w-full border-collapse" data-v-ba085646${_scopeId}><thead data-v-ba085646${_scopeId}><tr class="text-left border-b border-glass-border bg-app-text/5" data-v-ba085646${_scopeId}><th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-ba085646${_scopeId}> ID </th><th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-ba085646${_scopeId}> Name </th><th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-ba085646${_scopeId}> Rating </th><th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-ba085646${_scopeId}> Email </th><th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-ba085646${_scopeId}> Registered </th><th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-ba085646${_scopeId}> Status </th><th class="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40 text-right" data-v-ba085646${_scopeId}> Operations </th></tr></thead><tbody class="divide-y divide-glass-border" data-v-ba085646${_scopeId}><!--[-->`);
            ssrRenderList(userList.value, (user) => {
              _push2(`<tr class="hover:bg-app-text/5 transition-colors group" data-v-ba085646${_scopeId}><td class="px-6 py-4" data-v-ba085646${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/users/${user.$id}`,
                class: "text-xs font-mono text-indigo-400/80 hover:text-indigo-400 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(user.$id)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(user.$id), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-6 py-4" data-v-ba085646${_scopeId}>`);
              _push2(ssrRenderComponent(_component_NuxtLink, {
                to: `/users/${user.$id}`,
                class: "text-sm font-bold text-app-text hover:text-indigo-400 transition-colors"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(user.name || "Anonymous")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(user.name || "Anonymous"), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</td><td class="px-6 py-4" data-v-ba085646${_scopeId}><div class="flex items-center gap-2" data-v-ba085646${_scopeId}><div class="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" data-v-ba085646${_scopeId}></div><span class="text-sm font-black text-indigo-400 mono" data-v-ba085646${_scopeId}>${ssrInterpolate(user.rating || 1500)}</span></div></td><td class="px-6 py-4" data-v-ba085646${_scopeId}><span class="text-xs text-app-text-muted opacity-40" data-v-ba085646${_scopeId}>${ssrInterpolate(user.email)}</span></td><td class="px-6 py-4" data-v-ba085646${_scopeId}><span class="text-xs text-app-text-muted opacity-40" data-v-ba085646${_scopeId}>${ssrInterpolate(new Date(user.registration).toLocaleDateString())}</span></td><td class="px-6 py-4" data-v-ba085646${_scopeId}><span class="${ssrRenderClass([
                "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                user.status ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
              ])}" data-v-ba085646${_scopeId}>${ssrInterpolate(user.status ? "Active" : "Disabled")}</span></td><td class="px-6 py-4 text-right h-full" data-v-ba085646${_scopeId}><div class="flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity" data-v-ba085646${_scopeId}>`);
              _push2(ssrRenderComponent(BaseButton, {
                onClick: ($event) => requestGame(user.$id),
                disabled: !!requestingGame.value,
                loading: requestingGame.value === user.$id,
                variant: "primary",
                size: "sm",
                "icon-left": "pi pi-bolt",
                class: "px-4"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` Request Match `);
                  } else {
                    return [
                      createTextVNode(" Request Match ")
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]-->`);
            if (userList.value.length === 0 && !isLoading.value) {
              _push2(`<tr data-v-ba085646${_scopeId}><td colspan="6" class="px-6 py-12 text-center" data-v-ba085646${_scopeId}><div class="flex flex-col items-center gap-2 text-app-text-muted opacity-20" data-v-ba085646${_scopeId}><i class="pi pi-users text-3xl mb-2" data-v-ba085646${_scopeId}></i><span class="text-xs font-black uppercase tracking-widest" data-v-ba085646${_scopeId}>No Personnel Found</span></div></td></tr>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</tbody></table></div>`);
            if (totalPages.value > 1) {
              _push2(`<div class="px-6 py-4 bg-app-text/5 border-t border-glass-border flex items-center justify-between" data-v-ba085646${_scopeId}><div class="text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" data-v-ba085646${_scopeId}> Scanning records ${ssrInterpolate((currentPage.value - 1) * itemsPerPage + 1)} - ${ssrInterpolate(Math.min(currentPage.value * itemsPerPage, totalUsers.value))} OF ${ssrInterpolate(totalUsers.value)}</div><div class="flex items-center gap-2" data-v-ba085646${_scopeId}>`);
              _push2(ssrRenderComponent(BaseButton, {
                onClick: prevPage,
                disabled: currentPage.value === 1 || isLoading.value,
                variant: "secondary",
                size: "sm",
                class: "w-10 h-10",
                "icon-left": "pi pi-chevron-left"
              }, null, _parent2, _scopeId));
              _push2(`<div class="px-4 py-2 rounded-lg bg-void border border-glass-border text-[10px] font-black text-app-text mono" data-v-ba085646${_scopeId}>${ssrInterpolate(currentPage.value)} / ${ssrInterpolate(totalPages.value)}</div>`);
              _push2(ssrRenderComponent(BaseButton, {
                onClick: nextPage,
                disabled: currentPage.value === totalPages.value || isLoading.value,
                variant: "secondary",
                size: "sm",
                class: "w-10 h-10",
                "icon-left": "pi pi-chevron-right"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</section></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700" }, [
                createVNode("section", { class: "glass p-6 rounded-2xl border-glass-border space-y-4" }, [
                  createVNode("div", { class: "flex items-center gap-3 text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em]" }, [
                    createVNode("i", { class: "pi pi-search text-xs" }),
                    createVNode("span", null, "Identification Filter")
                  ]),
                  createVNode("div", { class: "flex gap-4" }, [
                    createVNode("div", { class: "relative group flex-1" }, [
                      withDirectives(createVNode("input", {
                        "onUpdate:modelValue": ($event) => searchId.value = $event,
                        type: "text",
                        placeholder: "Search by User ID...",
                        class: "w-full bg-void border border-glass-border rounded-xl px-4 py-3 text-app-text placeholder:text-app-text-muted opacity-20 focus:opacity-100 focus:outline-none focus:border-indigo-500/50 transition-all text-sm font-medium",
                        onKeyup: withKeys(onSearch, ["enter"])
                      }, null, 40, ["onUpdate:modelValue"]), [
                        [vModelText, searchId.value]
                      ]),
                      isLoading.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "absolute right-4 top-1/2 -translate-y-1/2"
                      }, [
                        createVNode("i", { class: "pi pi-spin pi-spinner text-indigo-500" })
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(BaseButton, {
                      onClick: onSearch,
                      variant: "primary",
                      size: "md",
                      loading: isLoading.value,
                      disabled: isLoading.value
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Query ")
                      ]),
                      _: 1
                    }, 8, ["loading", "disabled"])
                  ])
                ]),
                createVNode("section", { class: "glass rounded-2xl border-glass-border overflow-hidden" }, [
                  createVNode("div", { class: "overflow-x-auto" }, [
                    createVNode("table", { class: "w-full border-collapse" }, [
                      createVNode("thead", null, [
                        createVNode("tr", { class: "text-left border-b border-glass-border bg-app-text/5" }, [
                          createVNode("th", { class: "px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" }, " ID "),
                          createVNode("th", { class: "px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" }, " Name "),
                          createVNode("th", { class: "px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" }, " Rating "),
                          createVNode("th", { class: "px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" }, " Email "),
                          createVNode("th", { class: "px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" }, " Registered "),
                          createVNode("th", { class: "px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" }, " Status "),
                          createVNode("th", { class: "px-6 py-4 text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40 text-right" }, " Operations ")
                        ])
                      ]),
                      createVNode("tbody", { class: "divide-y divide-glass-border" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(userList.value, (user) => {
                          return openBlock(), createBlock("tr", {
                            key: user.$id,
                            class: "hover:bg-app-text/5 transition-colors group"
                          }, [
                            createVNode("td", { class: "px-6 py-4" }, [
                              createVNode(_component_NuxtLink, {
                                to: `/users/${user.$id}`,
                                class: "text-xs font-mono text-indigo-400/80 hover:text-indigo-400 transition-colors"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(user.$id), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            createVNode("td", { class: "px-6 py-4" }, [
                              createVNode(_component_NuxtLink, {
                                to: `/users/${user.$id}`,
                                class: "text-sm font-bold text-app-text hover:text-indigo-400 transition-colors"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(user.name || "Anonymous"), 1)
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            createVNode("td", { class: "px-6 py-4" }, [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("div", { class: "w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]" }),
                                createVNode("span", { class: "text-sm font-black text-indigo-400 mono" }, toDisplayString(user.rating || 1500), 1)
                              ])
                            ]),
                            createVNode("td", { class: "px-6 py-4" }, [
                              createVNode("span", { class: "text-xs text-app-text-muted opacity-40" }, toDisplayString(user.email), 1)
                            ]),
                            createVNode("td", { class: "px-6 py-4" }, [
                              createVNode("span", { class: "text-xs text-app-text-muted opacity-40" }, toDisplayString(new Date(user.registration).toLocaleDateString()), 1)
                            ]),
                            createVNode("td", { class: "px-6 py-4" }, [
                              createVNode("span", {
                                class: [
                                  "inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                                  user.status ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                                ]
                              }, toDisplayString(user.status ? "Active" : "Disabled"), 3)
                            ]),
                            createVNode("td", { class: "px-6 py-4 text-right h-full" }, [
                              createVNode("div", { class: "flex justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity" }, [
                                createVNode(BaseButton, {
                                  onClick: ($event) => requestGame(user.$id),
                                  disabled: !!requestingGame.value,
                                  loading: requestingGame.value === user.$id,
                                  variant: "primary",
                                  size: "sm",
                                  "icon-left": "pi pi-bolt",
                                  class: "px-4"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Request Match ")
                                  ]),
                                  _: 1
                                }, 8, ["onClick", "disabled", "loading"])
                              ])
                            ])
                          ]);
                        }), 128)),
                        userList.value.length === 0 && !isLoading.value ? (openBlock(), createBlock("tr", { key: 0 }, [
                          createVNode("td", {
                            colspan: "6",
                            class: "px-6 py-12 text-center"
                          }, [
                            createVNode("div", { class: "flex flex-col items-center gap-2 text-app-text-muted opacity-20" }, [
                              createVNode("i", { class: "pi pi-users text-3xl mb-2" }),
                              createVNode("span", { class: "text-xs font-black uppercase tracking-widest" }, "No Personnel Found")
                            ])
                          ])
                        ])) : createCommentVNode("", true)
                      ])
                    ])
                  ]),
                  totalPages.value > 1 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "px-6 py-4 bg-app-text/5 border-t border-glass-border flex items-center justify-between"
                  }, [
                    createVNode("div", { class: "text-[10px] font-black uppercase tracking-widest text-app-text-muted opacity-40" }, " Scanning records " + toDisplayString((currentPage.value - 1) * itemsPerPage + 1) + " - " + toDisplayString(Math.min(currentPage.value * itemsPerPage, totalUsers.value)) + " OF " + toDisplayString(totalUsers.value), 1),
                    createVNode("div", { class: "flex items-center gap-2" }, [
                      createVNode(BaseButton, {
                        onClick: prevPage,
                        disabled: currentPage.value === 1 || isLoading.value,
                        variant: "secondary",
                        size: "sm",
                        class: "w-10 h-10",
                        "icon-left": "pi pi-chevron-left"
                      }, null, 8, ["disabled"]),
                      createVNode("div", { class: "px-4 py-2 rounded-lg bg-void border border-glass-border text-[10px] font-black text-app-text mono" }, toDisplayString(currentPage.value) + " / " + toDisplayString(totalPages.value), 1),
                      createVNode(BaseButton, {
                        onClick: nextPage,
                        disabled: currentPage.value === totalPages.value || isLoading.value,
                        variant: "secondary",
                        size: "sm",
                        class: "w-10 h-10",
                        "icon-left": "pi pi-chevron-right"
                      }, null, 8, ["disabled"])
                    ])
                  ])) : createCommentVNode("", true)
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ba085646"]]);

export { index as default };
