<template>
    <div>
        <ul>
            <li v-for="result in searchResults" :key="result.id">
                <div>
                    Ingredients:
                    <ul>
                        <li v-for="(ingredient, index) in result.ingredients" :key="index">
                            {{ Object.keys(ingredient)[0] }} - {{ Object.values(ingredient)[0] }}
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        inputData: String, // inputData props를 정의
        searchResults: Array // searchResults props를 정의
    }
};
</script>