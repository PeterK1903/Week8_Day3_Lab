<template lang="html">
<main>
  <booking v-for="booking, index in bookings" :key="index" :booking="booking" />
</main>
</template>

<script>

import {eventBus} from '../main.js';
import BookingsService from '../services/BookingsService.js';
import Booking from './Booking.vue';

export default {
  name: "bookings-list",
  data () {
    return {
      bookings: []
    }
  },
  components: {
    'booking': Booking
  },
  mounted(){
    this.fetchData();
    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    })

  },
  methods: {
    fetchData(){
      BookingsService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
