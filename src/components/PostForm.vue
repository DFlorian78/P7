<script>
import post from "./Post.vue"
import { url, headers } from "../../services/fetchOptions"
export default {
    name: "PostForm",
    data() {
        return {
            content: "",
            selectedImage: null
        }
    },

    ///// FAIRE UN POST
    methods: {
        handleNewFile(e) {
            this.selectedImage = e.target.files[0]
        },
        handleClick() {
            const { VITE_SERVER_ADDRESS, VITE_SERVER_PORT } = import.meta.env
            const url = `http://${VITE_SERVER_ADDRESS}:${VITE_SERVER_PORT}/`

            const formData = new FormData()
            formData.append("content", this.content)
            formData.append("image", this.selectedImage)
            const options = {
                headers,
                method: "POST",
                body: formData,

            }
            fetch(url + "posts", options)
                .then((res) => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        throw new Error("Failed to fetch posts")
                    }
                })
                .then((res) => {
                    this.$router.go()
                })
                .catch((err) => console.log("err", err))
        }
    }
}


</script>
<template>
    <div class="card-body">
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                <div class="form-group">
                    <label class="sr-only" for="message">post</label>
                    <textarea class="form-control" id="message" rows="3" placeholder="Quoi de neuf ?"
                        v-model="content"></textarea>
                </div>
                <div class="btn-group">
                    <div class="d-flex">
                        <label for="file-input" class="btn btn-danger mt-3 ms-auto" style="margin-right: 10px">Ajouter
                            une image</label>

                        <input id="file-input" type="file" @change="handleNewFile" />
                        <button @click="handleClick" type="submit" class="btn btn-danger mt-3 ms-auto">Envoyer</button>
                        <span v-if="selectedImage">{{selectedImage.name}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<style>
body {
    background-color: #eeeeee;
}

.h7 {
    font-size: 0.8rem;
}

.gedf-wrapper {
    margin-top: 0.97rem;
}

@media (min-width: 992px) {
    .gedf-main {
        padding-left: 4rem;
        padding-right: 4rem;
    }

    .gedf-card {
        margin-bottom: 2.77rem;
    }
}

/**Reset Bootstrap*/
.dropdown-toggle::after {
    content: none;
    display: none;
}
</style>