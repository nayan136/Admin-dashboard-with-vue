<template>

    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>Sl No</th>
                    <th>User</th>
                    <th>Title</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post,id) in postList" :key='id'>
                    <td>{{++id}}</td>
                    <td>{{post.userId}}</td>
                    <td>
                        <router-link :to="{ name:'comments',params:{postId: post.id}}">
                            {{post.title}}
                        </router-link></td>
                    <td>{{post.body}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
export default {
    data: function() {
        return{
            postList: []
        }
    },
    created(){
        this.$http.get('posts')
        .then(response =>{
            this.postList = response.data;
        })
        .catch(e => {
            console.log(e);
        })
    }
}
</script>