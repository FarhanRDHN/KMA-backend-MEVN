<template>
<div>
    <h2>Hi, Im {{ store.user }}</h2>
</div>
</template>

<script setup>
import useAuthStore from '@/stores/useAuthStore';

const store = useAuthStore();

</script>
