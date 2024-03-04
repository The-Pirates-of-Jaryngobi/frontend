<!--
<template>
    <header>
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="../views/Result.vue">
                <img src="/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
                The Cheapest Youtube Recipe
                </a>
            </div>
        </nav>
    </header>
-->
<template>
    <header class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">로고</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">메뉴1</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">메뉴2</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">메뉴3</a>
            </li>
            </ul>
        </div>
    </header>
</template>

</template>


<script>
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from 'bootstrap';

export default {
    components: {
        Navbar,
    },
}
</script>


<style>
header {
    background-color: #f2f2f2;
    padding: 20px;
}
h1 {
    color: #333;
}
</style>

