<template lang="html">
<main>
  <bookings-form />
  <bookings-list />
</main>

</template>

<script>

import BookingForm from './components/BookingForm.vue';
import BookingsList from './components/BookingsList.vue';

export default {
  name: 'app',
  components: {
    'bookings-form': BookingForm,
    'bookings-list': BookingsList
  }
}
</script>

<style lang="css" scoped>
</style>
