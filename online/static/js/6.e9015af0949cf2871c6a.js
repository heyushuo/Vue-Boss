webpackJsonp([6],{107:function(t,a,e){var i=e(76);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(55)("e04c6c78",i,!0)},158:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"message",data:function(){return{apiUrl:"",messageNav:[{title:"聊天",isOn:!0},{title:"互动",isOn:!1}],meschatData:{},listBar:[{title:"对我感兴趣",isHad:!0},{title:"看过我",isHad:!1},{title:"新职位",isHad:!1}],tempIndex:0,interactData:[],lists:[]}},methods:{initApiUrl:function(){var t="https://"+window.location.host+"/";this.apiUrl=t+"static/data/message.json"},fenchData:function(){var t=this;this.$http.get(t.apiUrl).then(function(a){var e=a.data;0==a.data.code&&(t.meschatData=e.data.chat.chat_lists,t.interactData=e.data.interactive,t.lists=t.interactData[0])}).catch(function(){alert(error)})},toggleOn:function(t,a){t.isOn||(this.messageNav.filter(function(t){t.isOn=!1}),t.isOn=!0)},toggleTab:function(t,a){this.lists=this.interactData[a],t.isHad||(this.listBar.filter(function(t){t.isHad=!1}),t.isHad=!0)}},mounted:function(){},created:function(){this.initApiUrl(),this.fenchData()}}},63:function(t,a,e){function i(t){e(107)}var s=e(3)(e(158),e(94),i,"data-v-3a057156",null);t.exports=s.exports},76:function(t,a,e){a=t.exports=e(54)(!1),a.push([t.i,'.message-list[data-v-3a057156]{position:relative}.messge_bar[data-v-3a057156]{width:100%;height:1.28rem;background:#53cac3;text-align:center;position:fixed;z-index:50}.messge_bar span[data-v-3a057156]{float:left;width:1.8rem;text-align:center;padding:.1rem 0;font-size:.4rem;color:#fff;display:inline-block}.messge_bar span[data-v-3a057156]:first-child{border-top-left-radius:.1rem;border-bottom-left-radius:.1rem}.messge_bar span[data-v-3a057156]:nth-child(2){border-top-right-radius:.1rem;border-bottom-right-radius:.1rem}.message_box[data-v-3a057156]{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border:1px solid #fff;border-radius:.1rem}.messge_bar span.on[data-v-3a057156]{background:#fff;color:#53cac3}.message_show[data-v-3a057156]{padding-top:1.3rem;padding-bottom:1.4rem;-webkit-overflow-scrolling:touch;overflow-scrolling:touch}.clear[data-v-3a057156]:after{display:table;content:"";clear:both}.meschat h4[data-v-3a057156]{background:#fff;line-height:1.8;padding:.167rem .417rem;font-size:.444rem;border-left:.083rem solid #42bfee;margin-top:.278rem;border-bottom:.028rem solid #e9efef;border-top:.028rem solid #e9efef}.meschat h4 span[data-v-3a057156]{float:right;padding:.139rem .333rem;background:#c3c3c3;color:#fff;border-radius:.083rem;font-size:.278rem;line-height:normal;margin-top:.056rem}.chatlist[data-v-3a057156]{background:#fff;padding:0 .556rem}.chatlist li[data-v-3a057156]{position:relative;padding:.278rem 0;border-bottom:.028rem solid #e9efef}.chatlist li[data-v-3a057156]:last-child{border-bottom:none}.chatlist li .infoleft[data-v-3a057156]{width:2rem;position:relative;margin-right:-2rem}.chatlist li .infoleft img[data-v-3a057156]{width:1.389rem;height:1.389rem;border-radius:1.389rem}.chatlist li .pull_right[data-v-3a057156]{width:100%;padding-left:2rem}.pull_right p[data-v-3a057156]{color:#ccc}.chatlist li p .name[data-v-3a057156]{font-size:.389rem;color:#333}.chatlist li p span[data-v-3a057156]{color:#999}.inter_header[data-v-3a057156]{height:1rem;line-height:1rem;border-bottom:.013rem solid #e9efef}.inter_bar[data-v-3a057156]{width:8rem;margin:0 auto}.inter_bar li[data-v-3a057156]{text-align:center;color:#cbcbcb}.inter_bar li.isHad[data-v-3a057156]{border-bottom:2px solid #53cac3;color:#979797}.interact-list[data-v-3a057156]{padding:.2rem .4rem}.interact-same[data-v-3a057156]{border-bottom:1px solid #e9efef;position:relative;height:2.2rem}.interact-same .interact-msg[data-v-3a057156]{position:absolute;width:6.8rem;left:2.4rem;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.interact-same .interact-msg h3[data-v-3a057156]{font-size:.4rem;color:#5c5c5c;font-weight:100}.interact-same .interact-msg h3 span[data-v-3a057156]{float:right;font-size:.3rem;color:gray}.interact-same .interact-msg p[data-v-3a057156]{color:gray;margin-top:.06rem}.interact-same .interact-msg p span[data-v-3a057156]{margin-right:.2rem}.inter-img[data-v-3a057156]{width:1.6rem;height:1.6rem;position:absolute;left:.3rem;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.inter-img img[data-v-3a057156]{width:auto;height:100%;position:absolute;left:-100%;top:-100%;right:-100%;bottom:-100%;margin:auto;border-radius:50%;cursor:pointer;border:.013333rem solid #fff;z-index:8}',""])},94:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"message-list"},[e("div",{staticClass:"messge_bar clear"},[e("div",{staticClass:"message_box"},t._l(t.messageNav,function(a,i){return e("span",{class:{on:a.isOn},on:{click:function(e){t.toggleOn(a,i)}}},[t._v(t._s(a.title))])}))]),t._v(" "),e("div",{staticClass:"message_show"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.messageNav[0].isOn,expression:"messageNav[0].isOn"}],staticClass:"meschat"},[t._m(0),t._v(" "),e("div",{staticClass:"chatlist"},[e("ul",{staticClass:"code"},t._l(t.meschatData,function(a,i){return e("router-link",{key:i,staticClass:"clear",attrs:{tag:"li",to:{path:"meschatDetail"}}},[e("div",{staticClass:"infoleft"},[e("img",{attrs:{src:a.chat_img}})]),t._v(" "),e("div",{staticClass:"inforight pull_right"},[e("p",{staticClass:"clear"},[e("span",{staticClass:"name"},[t._v(t._s(a.chat_name))]),e("span",{staticClass:"inforight"},[t._v(t._s(a.chat_time))])]),t._v(" "),e("p",[e("span",[t._v(t._s(a.chat_title[0]))]),t._v(" | "),e("span",[t._v(t._s(a.chat_title[1]))])]),t._v(" "),e("p",[t._v(t._s(a.chat_msg.chat_msg_detial[1]))])])])}))])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.messageNav[1].isOn,expression:"messageNav[1].isOn"}],staticClass:"info_list"},[e("div",{staticClass:"inter_header"},[e("ul",{staticClass:"inter_bar flex_parent"},t._l(t.listBar,function(a,i){return e("li",{staticClass:"flex_child",class:{isHad:a.isHad},on:{click:function(e){t.toggleTab(a,i)}}},[t._v(t._s(a.title))])}))]),t._v(" "),e("div",{staticClass:"interact-list"},t._l(t.lists,function(a,i){return e("div",{staticClass:"interact-same"},[e("div",{staticClass:"inter-img"},[e("img",{attrs:{src:a.comp_pic,alt:""}})]),t._v(" "),e("div",{staticClass:"interact-msg"},[e("h3",{staticClass:"clear"},[t._v(t._s(a.hot_pos_name)+" "),e("span",[t._v(t._s(a.end_time))])]),t._v(" "),e("p",[t._v(t._s(a.comp_name))]),t._v(" "),e("p",[e("span",[e("i",{staticClass:"icon-seniority"}),t._v(t._s(a.seniority))]),e("span",[e("i",{staticClass:"icon-education"}),t._v(t._s(a.education))]),e("span",[e("i",{staticClass:"iconfont icon-qian"}),t._v(t._s(a.job_money))])])])])}))])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h4",{staticClass:"clear"},[t._v("联系人"),e("span",[t._v("查看新开聊(0)")])])}]}}});