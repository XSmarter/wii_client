<template>
    <div class="wii-user-login">
        <div class="wii-user-login-main">
            <div class="wii-user-login-box wii-user-login-header">
                <h2>Ta 在哪？</h2>
                <p>一个专业的寻人寻物，失物招领平台</p>
            </div>
            <div class="wii-user-login-box wii-user-login-body">
                <div class="mayui-form-item">
                    <label class="wii-user-login-icon mayui-icon mayui-icon-user"></label>
                    <input type="text" class="mayui-form" id="user-name" v-model="userName" placeholder="请输入用户名" />
                </div>
                <div class="mayui-form-item">
                    <label class="wii-user-login-icon mayui-icon mayui-icon-userpwd"></label>
                    <input type="text" class="mayui-form" id="password" v-model="password" placeholder="请输入密码" />
                </div>
                <div class="mayui-form-item">
                    <input type="checkbox" name="remember" id="remember" title="记住密码" class="mayui-vm"> <label for="remember" class="mayui-vm">记住密码</label>
                </div>
                <div class="mayui-form-item">
                    <button class="mayui-btn mayui-btn-fluid" id="login_submit_id" @click="login">登 入</button>
                </div>
            </div>
        </div>
        <div class="wii-user-login-footer">
            <p>© 2018 <a href="http://www.wii.pub/" target="_blank">www.wii.pub</a></p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      userName:'',
      password:''
    }
  },
  methods: {
    login () {
      this.$api.user.login({
              name:this.userName,
              password:this.password
          }).then(res=> {
              // 执行某些操作
              if(res.data.success){
                localStorage.setItem("token",res.data.token);
                this.$store.commit('increment', res.data);
                this.$router.push('/');
              }else{
                alert(res.data.message);
              }
          })
    }
  }
}
</script>

<style scoped>
.wii-user-login {
  position: relative;
  left: 0;
  top: 0;
  padding: 110px 0;
  min-height: 100%;
  box-sizing: border-box;
}
.wii-user-login-main {
  width: 375px;
  margin: 0 auto;
  box-sizing: border-box;
}
.wii-user-login-box {
  padding: 20px;
}
.wii-user-login-header {
  text-align: center;
}
.wii-user-login-header h2 {
  margin-bottom: 10px;
  font-weight: 300;
  font-size: 30px;
  color: #000;
}
.wii-user-login-header p {
  font-weight: 300;
  color: #999;
}
.wii-user-login-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  line-height: 30px;
  padding: 20px;
  text-align: center;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.5);
}
.wii-user-login-body .mayui-form-item {
  position: relative;
}
.wii-user-login-body .mayui-form-item .mayui-form {
  padding-left: 38px;
}
.wii-user-login-icon {
  position: absolute;
  left: 1px;
  top: 1px;
  width: 38px;
  line-height: 36px;
  text-align: center;
  color: #d2d2d2;
}
</style>
