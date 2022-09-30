<script>
  import { url, headers } from "../.././services/fetchOptions"
  import axios from "axios"
import { resetTracking } from "@vue/reactivity"
    function checkCredentials (email, password, router) {
      const { VITE_SERVER_ADDRESS, VITE_SERVER_PORT} = import.meta.env
      const url = `http://${VITE_SERVER_ADDRESS}:${VITE_SERVER_PORT}/`
      const options = {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      }
      fetch(url + 'auth/login', options)
        .then((res) => {
          if(res.ok) 
          return res.json()
          res.text().then((err) => {
              const { error } = JSON.parse(err)
              this.error = error
              throw new Error(error)
          })
    })
        .then((res) => {
          console.log("res:", res)
          const token = res.token
          localStorage.setItem("token", token)
          localStorage.setItem("currentUser", JSON.stringify({id:res.id, email:res.email, is_admin:res.is_admin}))
          router.push("/home")
          })
          .catch((err) =>{
            console.error(err)
          })
    }

  export default {
      name : "Login",
      ///Fonction pour récuperer nos data de signup/login 
      data () {
      return {
         email:"test@test.fr", password:"test", confirmPassword:"test", invalidCredentials:false, error:null, hasInvalidCredentials:false, isLoginMode: true,
        }
    },
      methods: {
        checkCredentials,
        isFormValid : isFormValid ,
        toggleLoginMode(){
          this.isLoginMode =!this.isLoginMode
        },

        signUp: async function (email, password, confirmPassword, router) {
          console.log("sign up")
          const body = JSON.stringify({
            email, password, confirmPassword, router })
          const options = {
            method: "POST",
            headers : {
              "Content-Type": "application/json",
              "Accept": "application/json"
          },
          }
          try {
           await axios.post(url + "auth/signup",body, options)
            this.$router.go("/")
          } catch(err){
            const error = err.response.data.error
            this.error = error
                throw new Error("Failed to sign up:" + error)
                
            } 
          }
},
      watch: {
        email(value) {
          const isValueEmpty = value === ""
          console.log("isValueEmpty", isValueEmpty)
          this.isFormValid(!isValueEmpty)
          },
        password(value) {
          const isValueEmpty = value === ""
          console.log("isValueEmpty", isValueEmpty)
          this.isFormValid(!isValueEmpty)
      }
    }
  }
  
function isFormValid(bool){
  console.log("isFormValid:", bool)
  this.invalidCredentials = !bool
}
</script>

<template>
  <main class="form-signin w-100 m-auto">
    <form :class="this.invalidCredentials ? 'hasErrors' : ''">

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
            <h1 class="h3 mb-3 fw-normal d-flex justify-content-center">Connexion</h1>

            <div class="form-floating">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="email" required="required" @invalid="formInvalid"/>
              <label for="floatingInput">Adresse e-mail</label>
            </div>
            <div class="form-floating" style="padding-bottom:10px">
              <input type="password" class="form-control" id="floatingPassword" placeholder="password" v-model="password" required="true" @invalid="formInvalid"/>
              <label for="floatingPassword">Mot de passe</label></div>

              <div v-if="!isLoginMode" class="form-floating" style="padding-bottom:20px">
              <input type="password" class="form-control" placeholder="Confirm Password" v-model="confirmPassword" required="true" @invalid="formInvalid"/>
              <label for="floatingPassword">Mot de passe</label>

                

              <span v-if="invalidCredentials" class="error-msg">Le champ ne peux pas être vide</span>
              <span v-if="error" class="error-msg">{{ error }}</span>
            </div>
            <div
              style="display:inline-block;max-width:100%;overflow:hidden;position:relative;box-sizing:border-box;margin:0">
              <div class="flex checkbox mb-3">
              </div>
            </div>
            
            <button v-if="isLoginMode" class="w-100 btn btn-lg btn-danger" type="submit" @click.prevent="() => checkCredentials(this.email, this.password, this.$router)" :disabled="invalidCredentials">Connexion</button>
            <button v-else class="w-100 btn btn-lg btn-danger" type="submit" @click.prevent="() => signUp(this.email, this.password, this.confirmPassword, this.$router)">S'inscrire</button>
            </form>
            <div class="col-md-12 ">
                              <div class="login-or">
                                 <hr class="hr-or">
                                 <span class="span-or">ou</span>
                              </div>
                           </div>
            <div class="form-group">
                              <p class="text-center" @click.prevent="toggleLoginMode">{{this.isLoginMode? "Vous n'avez pas encore de compte?" : "Vous avez déjà un compte?"}} <a href="">{{this.isLoginMode? "Inscrivez-vous" : "Connectez vous"}}</a></p>
                           </div>
        </div>
      </div>
    </section>
    </form>
  </main>
</template>


<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,900;1,900&display=swap');
html,
body {
  height: 100%;
  font-family: 'Lato', sans-serif !important;
}

body {
  align-items: center;
  padding-top: 0px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.error-msg {
  color:red;
}
.form-signin {
  max-width: 330px;
  padding: 15px;
  padding-top:50px;
  padding-bottom: 40px!important;
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