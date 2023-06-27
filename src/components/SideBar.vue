<script>
export default {
    name: 'SideBar',
}
</script>

<template>
    <div id="side_nav" class="d-flex flex-column justify-content-between align-items-center p-1">
        <ul class="list-unstyled">
            <li class="nav-item">
                <a href="https://github.com/giuseppesciacca" class="my-3 nav-link">
                    <font-awesome-icon :icon="['fab', 'github']" size="xl" />
                </a>
            </li>
            <li class="nav-item">
                <a href="https://www.linkedin.com/in/giuseppe-s-b43079167" class="nav-link me-1">
                    <font-awesome-icon :icon="['fab', 'linkedin']" size="xl" />
                </a>
            </li>
        </ul>
    </div>

    <div id="go_up" class="d-flex align-items-center justify-content-center">
        <a href="#"><font-awesome-icon :icon="['fas', 'arrow-up']" /></a>
    </div>
</template>

<style lang="scss" scoped>
#side_nav {
    background-color: white;
    position: fixed;
    top: calc(100vh / 4);
    right: 0;
    z-index: 100;
    box-shadow: 0px 0px 5px 0px yellow;
    border-radius: 0.25rem;
}

#go_up {
    width: 50px;
    height: 50px;
    background-color: yellow;
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    z-index: 100;

    a {
        color: black;
    }
}
</style>