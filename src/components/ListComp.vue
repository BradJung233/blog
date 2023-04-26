/<template>
  <div v-for="(blog,i) in 블로그글" :key="i">
    <h5 @click="$router.push('/detail/'+ i + '')">{{blog.title}}</h5>
    <p>{{blog.date}}</p>
  </div>
  <!-- <div>
    <h5 @click="$router.push('/detail/1')">{{블로그글[1].title}}</h5>
    <p>{{블로그글[1].date}}</p>
  </div>
  <div>
    <h5 @click="$router.push('/detail/2')">{{블로그글[2].title}}</h5>
    <p>{{블로그글[2].date}}</p>
  </div> -->
</template>

<script>
export default {
  name : 'listVue',
  props : {
    블로그글 : Array,
  }
}
</script>

<style>

</style>