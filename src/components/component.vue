<template>
<div>
  <h1>Create Event {{ userName }}</h1>
  <p>There are {{catLength}} categories</p>
  <ul>
    <li v-for="cat in categories" :key="cat">
        {{cat}}
    </li>
  </ul>
<p>
{{ getEventById(3) }}
</p>
</div>

</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapState(['user', 'categories']),
    ...mapGetters(['getEventById', 'catLength'])
  }
}
</script>