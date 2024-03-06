<template>
    <div>
        <h2>에러 페이지</h2>
        <p>{{ errorMessage }}</p>
    </div>
</template>

<script>
export default {
props: {
    errorMessage: {
    type: String,
    required: true,
    },
},
}
</script>
