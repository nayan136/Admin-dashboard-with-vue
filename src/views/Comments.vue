<template>
    <table class="table">
        <thead>
            <tr>
                <th>Sl No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(comment,id) in comments" :key="id">
                <td>{{++id}}</td>
                <td>{{comment.name}}</td>
                <td>{{comment.email}}</td>
                <td>{{comment.body}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data(){
        return{
            comments: [],
            id: 0
        }
    },
    created(){
        this.id = this.$route.params.postId;
        this.$http.get('posts/'+this.id+'/comments')
        .then(response =>{
            this.comments = response.data;
        })
        .catch(e => {
            console.log(e);
        })
    }
}
</script>

