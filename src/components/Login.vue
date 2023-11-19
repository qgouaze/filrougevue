<script>
export default {
  data() {
    return {
      nickName: "",
      password: "",
      isLoggedIn: false,
      account: true,
    };
  },
  methods: {
    switchAccountOrNot() {
      this.account = !this.account;
    },
    register() {
      if (localStorage.getItem(this.nickName)) {
        alert("An similarly named account already exists");
        return;
      }
      localStorage.setItem(
        this.nickName,
        JSON.stringify({ password: this.password })
      );
      this.isLoggedIn = true;

      this.nickName = "";
      this.password = "";
    },
    login() {
      //THIS IS HARDCODED, implement a database query
      if (this.nickName === "Plop" && this.password === "plop") {
        localStorage.setItem(
          "nickName",
          JSON.stringify({ nickName: this.nickName })
        );
        this.isLoggedIn = true;
        localStorage.setItem("isLoggedIn", "true");
      } else {
        alert("Invalid username or password");
      }
    },
    logout() {
      localStorage.removeItem("nickName");
      localStorage.setItem("isLoggedIn", "false");
      console.log("Localstorage loggedIn set to false");
      this.nickName = "";
      this.password = "";
      this.isLoggedIn = false;
    },
    checkLoggedIn() {
      if (localStorage.getItem("nickName") != null) {
        const user = localStorage.getItem("nickName");

        if (user != null && user.length >= 1) {
          this.isLoggedIn = true;
          localStorage.setItem("isLoggedIn", "true");
          this.nickName = JSON.parse(user).nickName;
        }
      }
    },
  },
  mounted() {
    this.checkLoggedIn();
  },
};
</script>

<template>
  <div v-if="this.isLoggedIn" class="welcomeOnceLoggedIn">
    <h2>You are Logged in!</h2>
    <button @click="logout">LogOut</button>
  </div>

  <div v-else-if="this.account" class="registerForm">
    <h2>Register</h2>
    <form @submit.prevent="register" class="registerForm">
      <div>
        <label for="nickName">Username:</label>
        <input type="text" id="nickName" v-model="nickName" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Register</button>
    </form>
    <p>
      Already have an account?
      <span @click="switchAccountOrNot">Click here!</span>
    </p>
  </div>

  <div v-else class="loginForm">
    <h2>Log into your account</h2>
    <form @submit.prevent="login" class="loginForm">
      <div>
        <label for="nickName">Username:</label>
        <input type="text" id="nickNameame" v-model="nickName" />
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
      </div>
      <button type="submit">Login</button>
    </form>
    <p>
      New to this website?
      <span @click="switchAccountOrNot">Create an account!</span>
    </p>
  </div>
</template>

<style scoped>
.input {
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
}

.loginForm,
.registerForm {
  border: 1px dotted lightgrey;
  width: 500px;
  margin: 0 auto;
  padding: 20px;
}

input {
  width: 175px;
}
h2 {
  margin-bottom: 20px;
  border-bottom: 1px solid lightgrey;
}
.switchLoginRegister {
  font-size: small;
  text-decoration: underline;
}
.switchLoginRegister:hover {
  color: black;
}
span {
  text-decoration: underline;
}
</style>
