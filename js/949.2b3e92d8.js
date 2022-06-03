"use strict";(self["webpackChunkadminsystem1"]=self["webpackChunkadminsystem1"]||[]).push([[949],{4381:function(e,r,a){a.r(r),a.d(r,{default:function(){return m}});var t=function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("div",{staticClass:"adduser"},[a("el-card",{attrs:{shadow:"never"}},[a("el-row",[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"add-header"},[a("i",{staticClass:"el-icon-user-solid"}),a("span",[e._v("添加客户详细信息")])])])],1)],1),a("div",{staticClass:"add-main"},[a("el-card",{attrs:{shadow:"never"}},[a("el-row",[a("el-col",{attrs:{span:16,offset:3,"margin-top":"10px"}},[a("el-form",{ref:"adduserForm",staticClass:"demo-ruleForm",attrs:{model:e.adduserForm,"status-icon":"",rules:e.adduserFormRules,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"客户名称",prop:"nickname"}},[a("el-input",{model:{value:e.adduserForm.nickname,callback:function(r){e.$set(e.adduserForm,"nickname","string"===typeof r?r.trim():r)},expression:"adduserForm.nickname"}})],1),a("el-form-item",{attrs:{label:"联系电话",prop:"contact"}},[a("el-input",{model:{value:e.adduserForm.contact,callback:function(r){e.$set(e.adduserForm,"contact","string"===typeof r?r.trim():r)},expression:"adduserForm.contact"}})],1),a("el-form-item",{attrs:{label:"QQ",prop:"qq"}},[a("el-input",{model:{value:e.adduserForm.qq,callback:function(r){e.$set(e.adduserForm,"qq","string"===typeof r?r.trim():r)},expression:"adduserForm.qq"}})],1),a("el-form-item",{attrs:{label:"微信",prop:"weixin"}},[a("el-input",{model:{value:e.adduserForm.weixin,callback:function(r){e.$set(e.adduserForm,"weixin","string"===typeof r?r.trim():r)},expression:"adduserForm.weixin"}})],1),a("el-form-item",{attrs:{label:"专业咨询",prop:"zhuanye"}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.adduserForm.zhuanye,callback:function(r){e.$set(e.adduserForm,"zhuanye",r)},expression:"adduserForm.zhuanye"}},e._l(e.zhuanyeList,(function(e){return a("el-option",{key:e.id,attrs:{value:e.classname}})})),1)],1),a("el-col",{attrs:{span:20}},[a("el-input",{model:{value:e.adduserForm.infoclass,callback:function(r){e.$set(e.adduserForm,"infoclass",r)},expression:"adduserForm.infoclass"}})],1)],1)],1),a("el-form-item",{attrs:{label:"信息来源",prop:"laiyuan"}},[a("el-input",{model:{value:e.adduserForm.laiyuan,callback:function(r){e.$set(e.adduserForm,"laiyuan","string"===typeof r?r.trim():r)},expression:"adduserForm.laiyuan"}})],1),a("el-form-item",{attrs:{label:"所在地",prop:"dizhi"}},[a("el-input",{model:{value:e.adduserForm.dizhi,callback:function(r){e.$set(e.adduserForm,"dizhi","string"===typeof r?r.trim():r)},expression:"adduserForm.dizhi"}})],1),a("el-form-item",{attrs:{label:"选择客服",prop:"kefu"}},[a("el-select",{attrs:{multiple:"",placeholder:"请选择"},model:{value:e.adduserForm.kefu,callback:function(r){e.$set(e.adduserForm,"kefu","string"===typeof r?r.trim():r)},expression:"adduserForm.kefu"}},e._l(e.kefuList,(function(e){return a("el-option",{key:e.id,attrs:{value:e.classname}})})),1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即创建")]),a("el-button",{on:{click:function(r){return e.resetForm(e.adduserForm)}}},[e._v("重置")])],1)],1)],1)],1)],1)],1)],1)},s=[],i=a(2275),l=a(6193),o={data(){return{kefuList:[],zhuanyeList:[],adduserForm:{nickname:"",contact:"",qq:"",weixin:"",laiyuan:"",dizhi:"",kefu:[],zhuanye:"",infoclass:""},adduserFormRules:{nickname:[{required:!0,message:"请输入活动名称",trigger:"blur"}],zhuanye:[{required:!0,message:"请输入专业",trigger:"blur"}],laiyuan:[{required:!0,message:"请输入来源",trigger:"blur"}],dizhi:[{required:!0,message:"请输入地址",trigger:"blur"}],kefu:[{type:"array",required:!0,message:"请至少选择一个客服",trigger:"change"}],infoclass:[{required:!0,message:"请输入专业信息",trigger:"blur"}],contact:[{validator:l.p,trigger:"blur"}],qq:[{validator:l.p,trigger:"blur"}],weixin:[{validator:l.p,trigger:"blur"}]}}},methods:{onSubmit(){this.$refs.adduserForm.validate((e=>{e?(console.log(this.adduserForm),(0,i.cn)(this.adduserForm).then((e=>{this.$router.push("/alluser")}))):(this.$message.error("请重新输入"),this.resetForm(this.adduserForm),this.adduserForm.infoclass="")}))},resetForm(e){this.$refs.adduserForm.resetFields()},getXialaInfo(){(0,i.b8)().then((e=>{this.zhuanyeList=e.data.infoclass,this.kefuList=e.data.kefu}))}},mounted(){this.getXialaInfo()}},n=o,u=a(1001),d=(0,u.Z)(n,t,s,!1,null,null,null),m=d.exports}}]);
//# sourceMappingURL=949.2b3e92d8.js.map