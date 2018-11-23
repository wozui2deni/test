<template>
  <!--这是登录区域-->
  <div class="container">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">注册</h1>
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
        <button id='login' type="button" class="mui-btn mui-btn-block mui-btn-primary" @click="toCheck">注册</button>
      </div>
      <div class="mui-content-padded oauth-area">

      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "register",
      data(){
          return{
            username:"",
            password:"",
          }
      },
      methods:{
          toCheck(){
            this.axios.get("http://localhost:3000/user?username="+this.username).then(result=>{
              if (result.data.length>0){
                alert("用户名已存在");
              } else{
                this.toRegister();
              }
            })
          },
          toRegister(){
            this.axios.post("http://localhost:3000/user",{"id":Math.random()*100000000+2,"username":this.username,"password":this.password}).then(result=> {
              // console.log(result);
              alert("注册成功");
              this.$router.push({path: "/login"})
            }).catch(error=>{
              alert("注册失败:"+error);
            })
          }
      }
    }
</script>

<style scoped lang="scss">

</style>
