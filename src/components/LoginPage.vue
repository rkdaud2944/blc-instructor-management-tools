<template>
  <div>
    <div>
      <h2>Please Log In</h2>
      <div class="loginForm">
        선택해주세요
        <!-- <form @submit.prevent="fnLogin">
          <p>
            <input class="w3-input" name="uid" placeholder="Enter your ID" v-model="user_id"><br>
          </p>
          <p>
            <input name="password" class="w3-input" placeholder="Enter your password" v-model="user_pw" type="password">
          </p>
          <p>
            <button type="submit" class="w3-button w3-green w3-round">Login</button>
          </p>
        </form> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      user_id: '',
      user_pw: ''
    }
  },
  methods: {
    fnLogin() {
      if (this.user_id === '') {
        alert('ID를 입력하세요.')
        return
      }

      if (this.user_pw === '') {
        alert('비밀번호를 입력하세요.')
        return
      }

      alert('로그인 되었습니다.')
    }
  }
}
</script>

<style>
.loginForm {
  display: block;
  width: 800px;
  border: black solid 1px;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>