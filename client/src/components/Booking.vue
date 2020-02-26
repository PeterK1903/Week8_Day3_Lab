<template lang="html">
<main>

 <h2>{{booking.name}}</h2>
 <p>{{booking.email}}</p>
 <p>{{booking.isCheckedIn}}</p>

 <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
 <label for="isGuestCheckedIn">Guest Checked in:</label>
 <input type="radio" id="isCheckedInYes" name="isGuestCheckedIn" v-on:change="changesCheckedIn" value="true">
 <label for="isGuestCheckedInYes">Yes</label>
 <input type="radio" id="isCheckedInNo" name="isGuestCheckedIn" v-on:change="changesCheckedIn" value="false">
 <label for="isCheckedInNo">No</label>

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
      .then(response => eventBus.$emit('booking-deleted', id));
    },
    changesCheckedIn(event){
      const payload = {
        isCheckedIn: this.booking.isCheckedIn
      }
      BookingsService.updateBooking(id, payload)
      .then(booking => {
        eventBus.$emit('booking-updated', booking)
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
