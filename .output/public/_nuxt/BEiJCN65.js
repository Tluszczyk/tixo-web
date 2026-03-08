import{s as e}from"./ymrn0yUV.js";import{al as a,y as n,z as s,az as i,aA as p}from"./BQFPj5ZW.js";import{s as r}from"./jc0MLXVe.js";import"./BMTRIWps.js";var u=`
    .p-radiobutton-group {
        display: inline-flex;
    }
`,d={root:"p-radiobutton-group p-component"},m=a.extend({name:"radiobuttongroup",style:u,classes:d}),l={name:"BaseRadioButtonGroup",extends:e,style:m,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},c={name:"RadioButtonGroup",extends:l,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||r("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||r("radiobutton-group-")}};function f(t,o,g,h,$,v){return s(),n("div",p({class:t.cx("root")},t.ptmi("root")),[i(t.$slots,"default")],16)}c.render=f;export{c as default};
