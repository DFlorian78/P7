<script>
import Comment from "./Comment.vue"
import { url, headers, currentUser } from "../../services/fetchOptions"

export default {
    name: "Post",
    components: {
        Comment
    },
    /// On crée nos props pour le schèma de nos posts
    props: ["post"],
    data() {
        return {
            currentComment: null,
            currentUser: currentUser
        }
    },
    //// On crée nos ajouts de commentaires avec addComment, et on bind notre v-model avec currentComment
    mounted() { },
    methods: {
        addComment(e) {
            console.log(this.currentComment)
            console.log(this.$props.post.id)
            //// On fait une copie de headers pour avoir sa méthode, spread operator
            const options = {
                headers: { ...headers, "Content-type": "application/json" },
                method: 'POST',
                body: JSON.stringify({
                    comment: this.currentComment
                })
            }
            fetch(url + "posts/" + this.$props.post.id, options)
                .then((res) => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        throw new Error("Failed to fetch posts")
                    }
                })
                .then((res) => {
                    console.log("res:", res)
                    this.$router.go()
                })
                .catch((err) => console.log("err:", err))
        },

        //fonction pour supprimer nos posts
        deletePost(e) {
            fetch(url + "posts/" + this.$props.post.id, {
                headers: { ...headers, "Content-Type": "application/json" },
                method: "DELETE"
            })
                .then((res) => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        throw new Error("Failed to delete post")
                    }
                })
                .then((res) => {
                    console.log("res:", res)
                    this.$router.go()
                })
                .catch((err) => console.log("err:", err))
        },

        modifyPost(e) {
            document.getElementById('message').value = this.$props.post.content;
            document.getElementById('articleid').value = this.$props.post.id;
            document.getElementById('send').value = "Modifier";
        },

        likeOrUnlike(like) {
            let userId = this.$props.post.userId;

            fetch(url + "posts/" + this.$props.post.id + "/like", {
                headers: { ...headers, "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    like: like

                })
            })
                .then((res) => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        throw new Error("Failed to like post")
                    }
                })
                .then((res) => {
                    console.log("res:", res)
                    //this.$router.go()
                })
                .catch((err) => console.log("err:", err))
            return false;
        },

        doILike(likes) {
            let usersliked = likes.split(",");
            if (usersliked.includes(currentUser.id.toString()))
                return 0;
            return 1;
        },

        doIDislike(dislikes) {
            let usersdisliked = dislikes.split(",");
            if (usersdisliked.includes(currentUser.id.toString()))
                return 0;
            return -1;
        },

    }
}
</script>


<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
    <div class="px-3 py-2">
        <main>
            <div class="card gedf-card">
                <div class="card-header">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="mr-2">
                                <img class="rounded-circle" width="45" src="https://picsum.photos/50/50" alt="">
                            </div>
                            <div class="ml-2">
                                <div class="h5 m-2">{{post.user.email}}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div class="dropdown">
                                <button v-if="post.userId  == currentUser.id || currentUser.is_admin==1" class=" btn btn-link" type="button" @click.prevent="modifyPost">
                                    <i  class="bi bi-pencil-square" ></i>
                                </button>
                                <button v-if="post.userId  == currentUser.id || currentUser.is_admin==1" class="btn btn-link" type="button" @click="deletePost">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="card-body">
                    <div class="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i> Il y'a 10 min</div>
                    <a class="card-link" href="#">
                        <img :src="post.imageUrl" class="card-img-top" alt="..." />
                    </a>

                    <p class="card-text" style="color:black;">
                        {{post.content}}
                    </p>
                </div>
                <div class="card-footer">
                    <a href="#" @click="likeOrUnlike(doILike(post.usersliked))" class="card-link" :class="{liked: doILike(post.usersliked)==0 }"><i class="fa fa-thumbs-up"></i> J'aime</a>

                    <a href="#" @click="likeOrUnlike(doIDislike(post.usersdisliked))" class="card-link" :class="{disliked: doIDislike(post.usersdisliked)==0 }"><i class="fa fa-thumbs-down"></i> Je n'aime
                        pas</a>

                    <a href="#" class="card-link"><i class="fa fa-comment"></i> Commentaires</a>

                    <div v-for="comment in post.comments">
                        <Comment :user="comment.user.email" :content="comment.content"></Comment>
                    </div>
                    <div class="d-flex gap-1 mt-4">
                        <img class="rounded-circle" width="35" height="35" src="https://picsum.photos/50/50" alt="">
                        <input type="text" class="form-control" placeholder="Ecrivez un commentaire"
                            aria-label="Username" v-model="currentComment" />
                        <button type="button" class="btn btn-danger ms-auto" @click="addComment">Poster</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,900;1,900&display=swap');

a:hover {
    color:unset !important;
}
.card-img-top {
    object-fit: fill;
    max-width: 44rem;
    max-height: 28rem;
}

.card-link {
    color: black;
    margin-right: 5px;
}

.liked {
    color: green;
}
.disliked {
    color:red;
}

.gedf-drop1 {
    color: black !important;
}

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