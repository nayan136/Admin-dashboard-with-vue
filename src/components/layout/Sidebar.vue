<template>
    
    <nav class="menu">
        <p class="menu-label">
        General
        </p>
        <ul class="menu-list">
        <li><router-link to="/" href="#"><span class="icon is-small"><i class="fa fa-tachometer"></i></span> Dashboard</router-link></li>
        </ul>
        <p class="menu-label">
        Administration
        </p>
        <ul class="menu-list">
        <li><router-link to="/about"><span class="icon is-small"><i class="fa fa-pencil-square-o"></i></span> About</router-link></li>
        <li><router-link to="/user_list"><span class="icon is-small"><i class="fa fa-desktop"></i></span> User List</router-link></li>
        <li><router-link to="/post_list"><span class="icon is-small"><i class="fa fa-table"></i></span> Post List</router-link></li>
        <li><a href="/bulma-admin-dashboard-template/presentations.html"><span class="icon is-small"><i class="fa fa-bar-chart"></i></span> Presentations</a></li>

        <li>
            <a class=""><i class="fa fa-cog"></i> Settings</a>
            <ul>
            <li><a>Members</a></li>
            <li><a>Plugins</a></li>
            <li><a>Add a member</a></li>
            </ul>
        </li>
        </ul>
        <p class="menu-label">
        Live On
        </p>
        <ul class="menu-list">
        <li><a><span class="icon is-small"><i class="fa fa-bug"></i></span> Additional Pages</a></li>
        <li><a><span class="icon is-small"><i class="fa fa-windows"></i></span> Extras</a></li>
        <li><a><span class="icon is-small"><i class="fa fa-laptop"></i></span> Landing Page</a></li>
        </ul>
    </nav>

</template>
