"use strict";(self["webpackChunkadminsystem1"]=self["webpackChunkadminsystem1"]||[]).push([[20],{4350:function(e,s,r){r.r(s),r.d(s,{default:function(){return u}});var t=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"login"},[t("div",{staticClass:"out"},[t("img",{staticClass:"img",attrs:{src:r(4043),alt:""}}),t("div",{staticClass:"inner"},[t("el-form",{ref:"loginForm",attrs:{"label-position":e.labelPosition,"label-width":"80px",model:e.loginForm,rules:e.loginRules,"status-icon":""}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{attrs:{placeholder:"请输入账号",clearable:"",validate:""},model:{value:e.loginForm.username,callback:function(s){e.$set(e.loginForm,"username",s)},expression:"loginForm.username"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{placeholder:"请输入密码","show-password":"",clearable:"",validate:""},model:{value:e.loginForm.password,callback:function(s){e.$set(e.loginForm,"password",s)},expression:"loginForm.password"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.loginIn}},[e._v("登录")]),t("el-button",{on:{click:function(s){return e.resetForm("loginForm")}}},[e._v("重置")])],1)],1)],1)])])},o=[],a=r(2275),l={data:function(){return{labelPosition:"right",loginForm:{username:"",password:""},loginRules:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{min:3,max:15,message:"长度在 3 到 15 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:5,message:"长度至少为8个字符",trigger:"blur"}]}}},methods:{loginIn:function(){var e=this;this.$refs.loginForm.validate((function(s){s?(0,a.p9)(e.loginForm).then((function(s){"401"==s.data.code?e.$message.error(s.data.txt):"200"==s.data.code&&(window.sessionStorage.setItem("token",s.data.token),e.$router.push("/home"),e.$message({message:"登录成功",type:"success"}))})):e.$message.error("错了哦，账号或密码格式不正确!")}))},resetForm:function(e){this.$refs[e].resetFields()}}},n=l,i=r(1001),m=(0,i.Z)(n,t,o,!1,null,null,null),u=m.exports},4043:function(e,s,r){e.exports=r.p+"img/logo1.14b52db9.jpg"}}]);
//# sourceMappingURL=20-legacy.e62a87bd.js.map