<template>
    <div class="page">
        <div class="nav">
            <ul>
                <li>
                    <nuxt-link to="/settings">General</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/settings/deck">Desk</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/settings/schedule">Schedule</nuxt-link>
                </li>
            </ul>
        </div>
        <main class="main">
            <h3>Schedule settings....</h3>
        </main>
    </div>
</template>

<style>
    .page {
        display: flex;
    }
    .main{
        margin-left:3rem;
    }
</style>