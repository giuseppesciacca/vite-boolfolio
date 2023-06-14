<script>
export default {
    name: 'AppHeader'
}
</script>

<template>
    <header id="app_header" class="py-5 bg-dark text-danger">
        <div class="container">
            <h1 class="text-center">My Boolfolio</h1>

            <nav class="navbar navbar-expand navbar-light bg-dark">
                <ul class="nav navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active text-white" href="#" aria-current="page">Home
                            <span class="visually-hidden">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">Contacts</a>
                    </li>
                </ul>
            </nav>
            <!-- /nav -->
        </div>
    </header>
</template>

<style lang="scss" scoped></style>