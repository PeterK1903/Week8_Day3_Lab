<template lang="html">
<main>

 <h2>{{booking.name}}</h2>
 <p>{{booking.email}}</p>
 <p>{{booking.isCheckedIn}}</p>

 <button v-on:click="handleDelete(booking._id)">Delete Booking</button>

</main>
</template>

<script>

import BookingsService from '../services/BookingsService.js'
import { eventBus } from '../main.js'

export default {
  name: "booking",
  props: ['booking'],
  methods: {
    handleDelete(id){
      BookingsService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
