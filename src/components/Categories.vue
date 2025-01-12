<script setup>

</script>

<template>
<div class="categories container container-flex-column">
    <div class="categories-nav container-flex-row">
        <h2>Browse By Category</h2>
        <div class="nav-arrows">
            <img src="../assets/img/category/arrow_left.svg" style="padding-left: 32px;">
            <img src="../assets/img/category/arrow_right.svg" style="padding-left: 32px;">
        </div>
    </div>
    <div class="categories-cnt container-flex-row">
        <div class="category-card"><router-link to="/api/category/2"><img src="../assets/img/category/phones.svg"><p>Phones</p></router-link></div>
        <div class="category-card"><router-link to="/api/category/5"><img src="../assets/img/category/smartwatches.svg"><p>Smart Watches</p></router-link></div>
        <div class="category-card"><router-link to="/api/category/2"><img src="../assets/img/category/cameras.svg"><p>Cameras</p></router-link></div>
        <div class="category-card"><router-link to="/api/category/6"><img src="../assets/img/category/headphones.svg"><p>Headphones</p></router-link></div>
        <div class="category-card"><router-link to="/api/category/3"><img src="../assets/img/category/computers.svg"><p>Computers</p></router-link></div>
        <div class="category-card"><router-link to="/api/category/4"><img src="../assets/img/category/gaming.svg"><p>Gaming</p></router-link></div>
        <router-view></router-view>
    </div>
</div>
</template>

<style scoped>
.categories {
    height: fit-content;
    background: #FAFAFA;
    align-items: center;
    align-content: center;
    padding-left: 5%;
    padding-right: 5%;
}
.categories-nav {
    width: 100%;
    font-family: "ABeeZee", sans-serif;
    font-size: 24px;
    font-style: italic;
    font-weight: 400;
    line-height: 32px;
    letter-spacing: 0.01em;
    text-align: left;
    height: fit-content;
    margin-top: 32px;
    padding-bottom: 2%;
}

.categories-cnt {
    width: 100%;
    height: fit-content;
    margin-bottom: 32px;
}
.category-card {
    background: #EDEDED;
    width: 160px;
    height: 128px;
    padding: 24px 52px 24px 52px;
    gap: 8px;
    border-radius: 5%;
    opacity: 0px;
    border-radius: 5%;
    font-family: "ABeeZee", sans-serif;
    font-size: 16px;
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-top: 8px;
    margin-bottom: 8px;
}
</style>
