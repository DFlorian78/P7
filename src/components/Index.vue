<script>
    export default {
      name: "Login",
      // data() {
      //   return {
      //     username: '',
      //     password: '',
      //     error: '',
      //     }
      // },
      // methods: {
      //   login() {
      //     if (this.username === "admin" && this.password === "admin") {
      //       this.$router.push("/")
      //     } else {
      //       this.error = "Ivalid credentials"
      //     }
      //   }
      // }
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
      </main>
    </template>
    
    
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,900;1,900&display=swap');
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
    </style>