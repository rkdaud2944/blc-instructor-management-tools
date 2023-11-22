<template>
  <div>
    <div>
      <!-- <h2>Please Log In</h2> -->
      <div class="loginForm" v-if="first_tap">
        <img class="logo" :src="logo" />
        <label for="loginOption"></label>
        <div class="menu">
          <div>
            <button
              class="menuButton icon_button"
              @click="tutor_id_login('option1')"
              @mouseover="setHoverImage('tutorHover')"
              @mouseleave="setHoverImage(null)"
            >
              <img
                class="icon"
                :src="hoverImage === 'tutorHover' ? tutorHover : tutor"
                alt="Tutor Image"
              />
            </button>
            <p class="font-style">선생님 ID 로그인</p>
          </div>
          <div>
            <button
              class="menuButton icon_button"
              @click="school_login('option2')"
              @mouseover="setHoverImage('schoolHover')"
              @mouseleave="setHoverImage(null)"
            >
              <img
                class="icon"
                :src="hoverImage === 'schoolHover' ? schoolHover : school"
                alt="School Image"
              />
            </button>
            <p class="font-style">교육기관 로그인</p>
          </div>
          <div>
            <button
              class="menuButton icon_button"
              @click="admin_login('option3')"
              @mouseover="setHoverImage('adminHover')"
              @mouseleave="setHoverImage(null)"
            >
              <img
                class="icon"
                :src="hoverImage === 'adminHover' ? adminHover : admin"
                alt="Admin Image"
              />
            </button>
            <p class="font-style">관리자 로그인</p>
          </div>
        </div>
      </div>
      <div v-if="tutor_login_page">
        <form class="loginForm">
          튜터
          <label for="user_id">ID:</label>
          <input v-model="user_id" type="text" id="user_id" />
          <label for="user_pw">Password:</label>
          <input v-model="user_pw" type="password" id="user_pw" />
          <button @click="fnLogin">Login</button>
        </form>
      </div>
      <div v-if="school_login_page">
        <form class="loginForm">
          <label for="user_id">I교육D:</label>
          <input v-model="user_id" type="text" id="user_id" />
          <label for="user_pw">Password:</label>
          <input v-model="user_pw" type="password" id="user_pw" />
          <button @click="fnLogin">Login</button>
        </form>
      </div>
      <div v-if="admin_login_page">
        <form class="loginForm">
          <label for="user_id">I어드D:</label>
          <input v-model="user_id" type="text" id="user_id" />
          <label for="user_pw">Password:</label>
          <input v-model="user_pw" type="password" id="user_pw" />
          <button @click="fnLogin">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>



<script>
import images from "@/assets/images";
export default {
  data() {
    return {
      logo: images.logo,
      tutor: images.tutor,
      school: images.school,
      admin: images.admin,
      tutorHover: images.tutorHover,
      schoolHover: images.schoolHover,
      adminHover: images.adminHover,
      user_id: '',
      user_pw: '',
      selectedOption: '',
      tutor_login_page : false,
      school_login_page : false,
      admin_login_page : false,
      first_tap : true,
      hoverImage: null,
    };
  },
  methods: {
    fnLogin() {
      // Your login method
    },
    tutor_id_login(option) {
      this.selectedOption = option;
      this.tutor_login_page = true;
      this.first_tap = false;
    },
    school_login(option) {
      this.selectedOption = option;
      this.school_login_page = true;
      this.first_tap = false;
    },
    admin_login(option) {
      this.selectedOption = option;
      this.admin_login_page = true;
      this.first_tap = false;
    },
    selectOption(option) {
      this.selectedOption = option;
    },
    setHoverImage(image) {
      this.hoverImage = image;
    },
  },
};
</script>
<style>

/* @media (max-width: 600px) {
  .menu {
    flex-direction: column;
    align-items: center;
  }

  .menuButton {
    margin: 0;
    margin-top: 10px;
  }
} */
.logo {
  width: 30%;
  display: block;
  margin-left: 38px;
}
.font-style {
  font-size: 14px;
}
.loginForm {
  display: block;
  width: 500px;
  height: 250px;
  border: black solid 3px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.menuButton {
  width: 100px;
  height: 100px;
  padding: 16px 32px;
  font-size: 18px;
  cursor: pointer;
  background-color: #ffffff;
  border: 3px solid black;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  margin: 0;
}

.menuButton:hover {
  background-color: #000000;
}
.icon{
  width: 90%;
  height: auto;
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.icon_button{
  position: relative;
  overflow: hidden;
}
</style>