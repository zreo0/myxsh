<template>
  <div class="login-container">
    <div class="login-form-container">
      <Row>
        <i-col span="6" offset="9">
          <i-form ref="loginForm" :model="loginForm" :rules="rulesLogin" >
            <Form-item prop="user">
              <i-input type="text" size="large" v-model="loginForm.user" placeholder="Username">
                <Icon type="ios-person-outline" slot="prepend" size="20"></Icon>
              </i-input>
            </Form-item>
            <Form-item prop="password">
              <i-input type="password" size="large" v-model="loginForm.password" placeholder="Password" @on-enter="handleSubmit('loginForm')">
                <Icon type="ios-locked-outline" slot="prepend" size="20"></Icon>
              </i-input>
            </Form-item>
            <Form-item>
              <i-button type="primary" @click.native="handleSubmit('loginForm')" long>Login</i-button>
            </Form-item>
          </i-form>
        </i-col>
      </Row>
    </div>
    <div class="bgSakura">
      <Sakura></Sakura>
    </div>
  </div>

</template>

<script>
import Sakura from './sakura/sakura.vue'
import { mapState } from 'vuex'
export default {
  name: 'login',
  components: {
    Sakura
  },
  data () {
    return {
      loginForm: {
        user: '',
        password: ''
      },
      rulesLogin: {
        user: [
          {
            required: true,
            message: '请填写用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请填写密码',
            trigger: 'blur'
          },
          {
            type: 'string',
            min: 6,
            message: '密码长度不能小于6位',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleSubmit(name) {
      console.log(this.$store.state.count);
      this.$refs[name].validate(
        (valid) => {
          if (valid) {
            var userName = this.loginForm.user;
            // 验证
            if (userName == 'sadmin' && this.loginForm.password == 'sadmin') {
              // 验证成功 
              localStorage.userName = userName;
              this.$store.commit('setUser');
              
              this.$Message.success('提交成功！');
              this.$router.push({path: '/home'});
            } else {
              this.$Message.error('验证失败！请检查用户名或密码！');
            }

          } else {
            this.$Message.error('表单验证失败，请检查输入！');
          }
        }
      );
    }
  }
}
</script>

<style scoped>
::-webkit-scrollbar {
  width: 0px;
}
* {  
  margin: 0;
  padding: 0;
  list-style-type: none;
}
a, img {
  border:0;
}
.login-container {
  /*margin-top: 10%;*/
  position: relative;
  width: 100%;
  height: 100%;

}
.login-form-container {
  position: fixed;
  top: 25%;
  width: 100%;
  padding-top: 30px;
  background-color: rgba(255, 255, 255, 0.3);
  /*background-image: url('../assets/login-form-bg.jpg');*/
  
}
.bgSakura{

}
</style>
