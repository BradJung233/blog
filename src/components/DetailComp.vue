<template>
    <!-- {{$route.params.id}} -->
    {{블로그글[$route.params.id].blogId}}
    <div class="container mt-4">
        <h4>상세 페이지</h4>
        <h5>{{블로그글[$route.params.id].title}}</h5>
        <p>{{블로그글[$route.params.id].content}}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props : {
        블로그글 : Array,
    },
}
</script>

<style>

</style>