import { EventBus } from "@primeuix/utils/eventbus";
import { s as script$2 } from "./index-2v-gS-ry.js";
import { style } from "@primeuix/styles/terminal";
import { p as BaseStyle } from "../server.mjs";
import { openBlock, createElementBlock, mergeProps, toDisplayString, createCommentVNode, createElementVNode, Fragment, renderList, withDirectives, vModelText } from "vue";
import "@primeuix/styled";
import "@primeuix/utils/dom";
import "@primeuix/utils/object";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/hookable/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/unctx/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/h3/dist/index.mjs";
import "pinia";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/defu/dist/defu.mjs";
import "vue-router";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/ufo/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/klona/dist/index.mjs";
import "/home/tluszczyk/dev/Multilanguage/tixo/tixo-web/node_modules/@unhead/vue/dist/index.mjs";
import "@primeuix/utils";
import "@primeuix/styles/base";
import "vue/server-renderer";
var TerminalService = EventBus();
var classes = {
  root: "p-terminal p-component",
  welcomeMessage: "p-terminal-welcome-message",
  commandList: "p-terminal-command-list",
  command: "p-terminal-command",
  commandValue: "p-terminal-command-value",
  commandResponse: "p-terminal-command-response",
  prompt: "p-terminal-prompt",
  promptLabel: "p-terminal-prompt-label",
  promptValue: "p-terminal-prompt-value"
};
var TerminalStyle = BaseStyle.extend({
  name: "terminal",
  style,
  classes
});
var script$1 = {
  name: "BaseTerminal",
  "extends": script$2,
  props: {
    welcomeMessage: {
      type: String,
      "default": null
    },
    prompt: {
      type: String,
      "default": null
    }
  },
  style: TerminalStyle,
  provide: function provide() {
    return {
      $pcTerminal: this,
      $parentInstance: this
    };
  }
};
var script = {
  name: "Terminal",
  "extends": script$1,
  inheritAttrs: false,
  data: function data() {
    return {
      commandText: null,
      commands: []
    };
  },
  mounted: function mounted() {
    TerminalService.on("response", this.responseListener);
    this.$refs.input.focus();
  },
  updated: function updated() {
    this.$el.scrollTop = this.$el.scrollHeight;
  },
  beforeUnmount: function beforeUnmount() {
    TerminalService.off("response", this.responseListener);
  },
  methods: {
    onClick: function onClick() {
      this.$refs.input.focus();
    },
    onKeydown: function onKeydown(event) {
      if (event.key === "Enter" && this.commandText) {
        this.commands.push({
          text: this.commandText
        });
        TerminalService.emit("command", this.commandText);
        this.commandText = "";
      }
    },
    responseListener: function responseListener(response) {
      this.commands[this.commands.length - 1].response = response;
    }
  }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", mergeProps({
    "class": _ctx.cx("root"),
    onClick: _cache[2] || (_cache[2] = function() {
      return $options.onClick && $options.onClick.apply($options, arguments);
    })
  }, _ctx.ptmi("root")), [_ctx.welcomeMessage ? (openBlock(), createElementBlock("div", mergeProps({
    key: 0,
    "class": _ctx.cx("welcomeMessage")
  }, _ctx.ptm("welcomeMessage")), toDisplayString(_ctx.welcomeMessage), 17)) : createCommentVNode("", true), createElementVNode("div", mergeProps({
    "class": _ctx.cx("commandList")
  }, _ctx.ptm("content")), [(openBlock(true), createElementBlock(Fragment, null, renderList($data.commands, function(command, i) {
    return openBlock(), createElementBlock("div", mergeProps({
      key: command.text + i.toString(),
      "class": _ctx.cx("command")
    }, {
      ref_for: true
    }, _ctx.ptm("commands")), [createElementVNode("span", mergeProps({
      "class": _ctx.cx("promptLabel")
    }, {
      ref_for: true
    }, _ctx.ptm("prompt")), toDisplayString(_ctx.prompt), 17), createElementVNode("span", mergeProps({
      "class": _ctx.cx("commandValue")
    }, {
      ref_for: true
    }, _ctx.ptm("command")), toDisplayString(command.text), 17), createElementVNode("div", mergeProps({
      "class": _ctx.cx("commandResponse"),
      "aria-live": "polite"
    }, {
      ref_for: true
    }, _ctx.ptm("response")), toDisplayString(command.response), 17)], 16);
  }), 128))], 16), createElementVNode("div", mergeProps({
    "class": _ctx.cx("prompt")
  }, _ctx.ptm("container")), [createElementVNode("span", mergeProps({
    "class": _ctx.cx("promptLabel")
  }, _ctx.ptm("prompt")), toDisplayString(_ctx.prompt), 17), withDirectives(createElementVNode("input", mergeProps({
    ref: "input",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function($event) {
      return $data.commandText = $event;
    }),
    "class": _ctx.cx("promptValue"),
    type: "text",
    autocomplete: "off",
    onKeydown: _cache[1] || (_cache[1] = function() {
      return $options.onKeydown && $options.onKeydown.apply($options, arguments);
    })
  }, _ctx.ptm("commandText")), null, 16), [[vModelText, $data.commandText]])], 16)], 16);
}
script.render = render;
export {
  script as default
};
