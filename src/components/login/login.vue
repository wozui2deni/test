<template>
  <!--这是登录区域-->
  <div class="container">
      <header class="mui-bar mui-bar-nav">
        <h1 class="mui-title">登录</h1>
      </header>
      <div class="mui-content">
        <form id='login-form' class="mui-input-group">
          <div class="mui-input-row">
            <label>账号</label>
            <input id='account' type="text" v-model="username" class="mui-input-clear mui-input" placeholder="请输入账号">
          </div>
          <div class="mui-input-row">
            <label>密码</label>
            <input id='password' type="password" v-model="password" class="mui-input-clear mui-input" placeholder="请输入密码">
          </div>
        </form>
        <div class="mui-content-padded">
          <button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="toLogin">登录</button>
          <div class="link-area"><router-link to="/register">注册账号</router-link> <span class="spliter">|</span> <a id='forgetPassword'>忘记密码</a>
          </div>
        </div>
        <div class="mui-content-padded oauth-area">

        </div>
      </div>
    </div>
</template>

<script>
  import Vue from "vue"
  export default {
    name: "login",
    data(){
      return{
        username:"",
        password:"",
        list:[]
      }
    },
    methods:{
      toLogin(){
        this.axios.get("http://localhost:3000/user?username="+this.username+"&password="+this.password).then(result=>{
            if(result.data.length>0){
              // console.log(result);
              alert("登陆成功");
              window.sessionStorage.setItem("username",this.username);
              this.$router.push({path:"/loginContainer"})
            }else{
              alert("用户名或密码有误");
            }
        }).catch(error=>{
          // console.log(error);
          alert("登录失败:"+error)
        });
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
