<template>
    <header class="hero is-light">
        <div class="hero-head">
            <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
    
                <router-link to="/" class="navbar-item m-r-xl">
                    <h2>Admin Dashboard</h2>
                </router-link>
                <router-link to="/" class="navbar-item is-tab is-hidden-mobile"><span class="icon is-medium"><i class="fa fa-2x fa-home m-r-md"></i></span>Home</router-link>
                <a class="navbar-item is-tab is-hidden-mobile">Features</a>
                <a class="navbar-item is-tab is-hidden-mobile">Pricing</a>
                <a class="navbar-item is-tab is-hidden-mobile">About</a>
    
                <button class="button navbar-burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
                </button>
    
            </div>
    
    
            <div class="navbar-menu navbar-end" id="navMenu">
                <a class="navbar-item is-tab is-hidden-tablet is-active">Home</a>
                <a class="navbar-item is-tab is-hidden-tablet">Features</a>
                <a class="navbar-item is-tab is-hidden-tablet">Pricing</a>
                <a class="navbar-item is-tab is-hidden-tablet">About</a>
                <a class="navbar-item nav-tag">
                <span class="icon is-small">
                    <i class="fa fa-envelope-o"></i>
                </span>
                <span class="tag is-primary tag-notif">6</span>
                </a>
                <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link">
                    <figure class="image is-32x32" style="margin-right:.5em;">
                    <img src="https://avatars1.githubusercontent.com/u/7221389?v=4&s=32">
                    </figure>
                    mazipan
                </a>
    
                <div class="navbar-dropdown is-right">
                    <a class="navbar-item">
                        <span class="icon is-small">
                        <i class="fa fa-user-o"></i>
                        </span>
                        Profile
                    </a>
                    <hr class="navbar-divider">
                    <a class="navbar-item">
                        <span class="icon is-small">
                        <i class="fa fa-power-off"></i>
                        </span>
                        Logout
                    </a>
                </div>
                </div>
            </div>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data: function(){
        return {
           
        }        
    },
    methods:{
        
    }
}
</script>

