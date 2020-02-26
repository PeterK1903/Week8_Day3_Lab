<template lang="html">
  <form  v-on:submit='handleSubmit'>
    <h2>Add a Booking</h2>
    <label for="name">Name:</label>
    <input type="text" id="name" v-model="name" required/>
    <label for="email">Email:</label>
    <input type="text" id="email" v-model="email" required/>
    <label for="isCheckedIn">Guest Checked in:</label>
    <input type="radio" id="isCheckedInYes" name="isCheckedIn" v-model="isCheckedIn" value="true">
    <label for="isCheckedInYes">Yes</label>
    <input type="radio" id="isCheckedInNo" name="isCheckedIn" v-model="isCheckedIn" value="false">
    <label for="isCheckedInNo">No</label>
    <input type="submit" value="Add Guest">

  </form>
</template>

<script>

import {eventBus} from '../main.js'
import BookingsService from '../services/BookingsService.js'

export default {
  name: 'booking-form',
  data(){
    return {
      name: "",
      email: "",
      isCheckedIn: false
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        isCheckedIn: this.isCheckedIn
      };
      BookingsService.createBooking(payload)
      .then(booking => {
        eventBus.$emit('booking-added', booking);
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
