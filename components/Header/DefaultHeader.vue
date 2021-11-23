<template>
  <div>
    <header>
      <nav>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/decks">Decks</nuxt-link></li>
          <li><nuxt-link to="/profile">Profile</nuxt-link></li>
          <li><nuxt-link to="/settings">Settings</nuxt-link></li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<style>
    header{
        display: flex;
        color: #fff;
        background: #000;
        height: 60px;
        
    }
    nav, ul {
            height: inherit;
        }
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style:none;

    }
    li {        
        margin: 01.5rem;
    }
    a{
      text-decoration: none;
    }

</style>