<template>
    <div class="has-text-centered">
        <table class="table">
            <thead>
                <tr>
                    <th>Sl No.</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Phone</th>
                    <th>Website</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,id) in userList" :key='id'>
                    <td>{{++id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.username}}</td>
                    <td>{{user.phone}}</td>
                    <td>{{user.website}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data: function() {
        return{
            userList: []
        }
    },
    created(){
        this.$http.get('users')
        .then(response =>{
            this.userList = response.data;
        })
        .catch(e => {
            console.log(e);
        })
    }
}
</script>

