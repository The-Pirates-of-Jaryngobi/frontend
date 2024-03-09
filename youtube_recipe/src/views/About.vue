<template>
    <AboutHero />
    <welcome />
    <div class="about-detail">
        <dataCriteria />
        <verticalLine />
        <contactUs />
        <faq />
        <thanks />
    </div>
</template>

<script>
import AboutHero from '../components/AboutHero.vue';
import contactUs from '../components/contactUs.vue';
import welcome from '../components/welcome.vue';
import dataCriteria from '../components/dataCriteria.vue';
import verticalLine from '../components/verticalLine.vue';
import faq from '../components/faq.vue';
import thanks from '../components/thanks.vue';

export default {
    components: {
        AboutHero,
        contactUs,
        welcome,
        dataCriteria,
        verticalLine,
        faq,
        thanks,
    },
}
</script>

<style scoped>
.about-detail {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20vh 10vw;
    gap: 80px;
}

</style>