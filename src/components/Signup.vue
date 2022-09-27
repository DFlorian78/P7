<script>
  import { url, headers } from "../.././services/fetchOptions"
  export default {
  name : "Signup",

  data() {
    return {
      email: "test10@test.fr",
      password: "123456",
      invalidCredentials:false,
      error:null
    }
  },
  methods: {
  signUp: async function () {
    console.log("sign up")
    const options = {
      method: "POST",
      headers : {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: this.email, password: this.password })
    }
    const res =fetch(url + "auth/signup", options) 
      .then((res) => {
      if (res.status === 200) {
        return res.json()
      } else {
        throw new Error("Failed to sign up")
      }
    })
    .then((res) => {
    console.log("res:", res)
      this.$router.push("/login")
  })
  .catch((err) => console.log("err:", err))
}
}
}
</script>

<template>
  <main class="form-signin w-100 m-auto">

<div
  style="display:block;z-index:-10;overflow:hidden;position:absolute;top:0;left:0;right:0;bottom:0;box-sizing:border-box;margin:0; background-color:#FD2D01">

  <img alt=""
    src="../../images/202698_le-demenagement-facteur-de-performance-de-l-entreprise-print-021285072872.jpg"
    decoding="async"
    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;opacity:.7;"
    sizes="100vw">
  <div class="z-10 flex flex-col items-center justify-center w-full max-w-xl mx-auto"></div>
</div>
<section class="login flex flex-col w-full px-4 py-6 bg-white sm:rounded-lg shadow sm:p6" style="padding-top:20px;padding-bottom:20px;border-radius:20px; margin-top:60px; margin-bottom:70px">
  <div class="mt-2">

    <div id="headlessui-tabs-panel-4" role="tabpanel" aria-labelledby="headlessui-tabs-tab-2" tabindex="0">
      <form>
        <div
          style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
          <img class="mb-4 d-block mx-auto" src="../../images/icon-left-font-monochrome-black.svg" alt=""
            style="max-width:100%; min-width:100%; min-height:100%;max-height:100%">
        </div>
        <h1 class="h3 mb-3 fw-normal d-flex justify-content-center">Inscription</h1>

        <div class="form-floating">
          <input type="text" class="form-control" id="floatingInput" placeholder="Pseudonyme" v-model="pseudo" required="required" @invalid="formInvalid">
          <label for="floatingInput">Pseudonyme</label>
        </div>
        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" required="required" @invalid="formInvalid">
          <label for="floatingInput">Adresse e-mail</label>
        </div>
        <div class="form-floating" style="padding-bottom:20px">
          <input type="password" class="form-control" id="floatingPassword" placeholder="" v-model="password" required="required" @invalid="formInvalid">
          <label for="floatingPassword">Mot de passe</label>
        </div>
        <div
          style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
          <div class="flex checkbox mb-3">
          </div>
        </div>
        
        <button class="w-100 btn btn-lg btn-danger" type="submit" @click.prevent="() => signUp(this.email, this.password)">S'inscrire</button>
        </form>
        <div class="col-md-12 ">
                          <div class="login-or">
                             <hr class="hr-or">
                             <span class="span-or">ou</span>
                          </div>
                       </div>
        <div class="form-group">
                          <p class="text-center">Vous avez déjà un compte? <a href="/login" id="signup">Connectez-vous</a></p>
                       </div>
    </div>
  </div>
</section>
</main>
</template>

<style>

html,
body {
  height: 100%;
}

body {
  align-items: center;
  padding-top: 0px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
  padding-top:40px;

}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-top: 20px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-top: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.form-signin input[type="text"] {
  margin-top: 20px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}


.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
.login-or {
         position: relative;
         color: #aaa;
         margin-top: 10px;
         margin-bottom: 10px;
         padding-top: 10px;
         padding-bottom: 10px;
         }
         .span-or {
         display: block;
         position: absolute;
         left: 50%;
         top: -2px;
         margin-left: -25px;
         background-color: #fff;
         width: 50px;
         text-align: center;
         }
         .hr-or {
         height: 1px;
         margin-top: 0px !important;
         margin-bottom: 0px !important;
         }
         a{
         text-decoration:none !important;
         }
</style>