<template>
    <nav class="breadcrumb is-small" aria-label="breadcrumbs">
        <ul>
        <li class="p-r-xs">Home</li>
        <li v-for="(breadcrumb, id) in breadcrumbList" :key="id">
            <span class="p-l-xs">{{breadcrumb.name}}</span>          
        </li>
        </ul>
    </nav>
</template>
<script>
export default {
    data:function(){
        return{
            breadcrumbList: []
        }
    },
    watch:{
        '$route'(){
            this.breadcrumbList = this.$route.meta.breadcrumb;
            //console.log(JSON.stringify(this.breadcrumbList[0].name, null, 2))
        }
    }
}
</script>
