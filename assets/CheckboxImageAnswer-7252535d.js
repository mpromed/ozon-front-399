import{u as i,o as t,c as a,a as s,n as c,b as n}from"./index-58b47191.js";import{_ as l}from"./answerCheckMark-485011a2.js";import{_ as r}from"./_plugin-vue_export-helper-c27b6911.js";const h={class:"answer-checkbox"},d=["src"],m={class:"bottom-caption"},k={class:"answer-checkbox-container"},u={key:0,src:l,alt:"check mark"},b=["innerHTML"],x={__name:"CheckboxImageAnswer",props:{isChecked:{type:Boolean,default:!1},isDisable:{type:Boolean,default:!1},answerText:{type:String,default:""},isRight:{type:Boolean,default:!1},isRightAlt:{type:Boolean,default:!1},checkboxColor:{type:String,default:"#2ea809"},imageURL:{type:String,default:""}},setup(e){return i(o=>({"040cb03a":e.checkboxColor})),(o,f)=>(t(),a("li",null,[s("div",h,[s("img",{src:e.imageURL,class:"answer-checkbox-image"},null,8,d),s("div",m,[s("div",k,[s("div",{class:c([{"white-checkbox":!e.isChecked,"purple-checkbox":e.isChecked||e.isDisable&&e.isRight,"cursor-pointer":!e.isDisable,"alt-checkbox":e.isDisable&&e.isRightAlt},"answer-checkbox-rectangle"])},[e.isChecked?(t(),a("img",u)):n("",!0)],2)]),s("div",{innerHTML:e.answerText,class:c([{"cursor-pointer":!e.isDisable},"answer-checkbox-text"])},null,10,b)])])]))}},w=r(x,[["__scopeId","data-v-904c4c4f"]]);export{w as default};
