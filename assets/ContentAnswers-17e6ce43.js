import{u as T,d as b,r as g,e as f,f as y,o as s,c as o,g as r,b as c,h as v,a as p,F as D,i as w,n as C}from"./index-58b47191.js";import R from"./ButtonAnswer-28cbfabb.js";import _ from"./CheckboxAnswer-067779f5.js";import $ from"./CheckboxImageAnswer-7252535d.js";import B from"./ContentImages-f3ac4f56.js";import I from"./ContentAnswersOnImage-71459fb8.js";import S from"./ContentText-698ef747.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./answerCheckMark-485011a2.js";import"./ModalImage-296cf88b.js";const M={key:1,class:"left-side"},H={class:"content-answers"},U={key:0},V=["innerHTML"],W={key:1,class:"answers-checkboxes-list"},N={key:2,class:"answers-image-checkboxes-list"},O={key:3,class:"answers-buttons-list"},j=["innerHTML"],Y={__name:"ContentAnswers",props:["componentData","testStyle"],emits:["action","chooseAction"],setup(n,{emit:d}){const e=n;T(t=>({"63c78bdc":u.value,"6b1e89d6":h.value})),b();const u=g(""),h=g(null);e.componentData.columns?u.value=`repeat(${e.componentData.columns}, minmax(0, 1fr))`:u.value="repeat(2, minmax(0, 1fr))";const L=f(()=>`<p>${e.componentData.legendText} <span style="color: ${e.componentData.legendTextColor};">${e.componentData.legendColoredText}</span>`),m=t=>{if(!e.componentData.isComplete)if(e.componentData.multiple)e.componentData.answersList[t].isChecked?e.componentData.answersList[t].isChecked=!1:e.componentData.answersList[t].isChecked=!0;else{for(let i=0;i<e.componentData.answersList.length;i++)e.componentData.answersList[i].isChecked=!1;e.componentData.answersList[t].isChecked=!0,e.componentData.answersList[t].action&&e.componentData.answersList[t].action.clickAction?d("action",e.componentData.answersList[t].action):d("chooseAction",e.componentData.answersList[t].action)}},x=()=>{if(e.componentData.answersList)for(let t=e.componentData.answersList.length-1;t>0;t--){const i=Math.floor(Math.random()*(t+1));[e.componentData.answersList[t],e.componentData.answersList[i]]=[e.componentData.answersList[i],e.componentData.answersList[t]]}},A=f(()=>e.componentData.answersList.every(t=>!t.isChecked));return y(()=>{e.componentData.doShuffle&&A.value&&x(),e.componentData.answersList&&(h.value=`${100/e.componentData.answersList.length}%`,console.log(12321214,h.value))}),(t,i)=>(s(),o("div",{class:C({"multi-wrapper":n.componentData.isAnswersWithImage,"image-answers-wrapper":n.componentData.isAnswersOnImage})},[n.componentData.isAnswersOnImage?(s(),r(I,{key:0,componentData:e.componentData,onSwitchAnswer:m},null,8,["componentData"])):c("",!0),n.componentData.isAnswersWithImage?(s(),o("div",M,[v(B,{componentData:n.componentData.imagesData},null,8,["componentData"])])):c("",!0),p("div",{class:C([{"right-side":n.componentData.isAnswersWithImage},"flex-justify-center"])},[n.componentData.isAnswersWithImage&&n.componentData.textData!=null?(s(),r(S,{key:0,componentData:n.componentData.textData,testStyle:e.testStyle},null,8,["componentData","testStyle"])):c("",!0),p("div",H,[e.componentData.hints?(s(),o("div",U,[p("div",{innerHTML:e.componentData.hintText,class:"answers-hint-text"},null,8,V)])):c("",!0),e.componentData.answersButtonType==="checkboxes"?(s(),o("ul",W,[(s(!0),o(D,null,w(e.componentData.answersList,(a,l)=>(s(),r(_,{key:l,answerText:a.answerText,isChecked:!!a.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!a.isRight,isRightAlt:!!a.isRightAlt,checkboxColor:n.componentData.legendTextColor,onClick:k=>m(l),class:"answers-checkboxes-list-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","onClick"]))),128))])):c("",!0),e.componentData.answersButtonType==="imageCheckboxes"?(s(),o("ul",N,[(s(!0),o(D,null,w(e.componentData.answersList,(a,l)=>(s(),r($,{key:l,answerText:a.answerText,isChecked:!!a.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!a.isRight,isRightAlt:!!a.isRightAlt,checkboxColor:n.componentData.legendTextColor,imageURL:a.image.imageURL,onClick:k=>m(l),class:"answers-checkboxeslist-image-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","imageURL","onClick"]))),128))])):c("",!0),e.componentData.answersButtonType==="buttons"?(s(),o("div",O,[(s(!0),o(D,null,w(e.componentData.answersList,(a,l)=>(s(),r(R,{answerText:a.answerText,isChecked:!!a.isChecked,onClick:k=>m(l),class:"answers-buttons-list-iiem"},null,8,["answerText","isChecked","onClick"]))),256))])):c("",!0),n.componentData.showLegend?(s(),o("div",{key:4,innerHTML:L.value,class:"answers-legend"},null,8,j)):c("",!0)])],2)],2))}};export{Y as default};
