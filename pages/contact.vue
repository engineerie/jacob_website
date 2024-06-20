<template>
  <div>
    <div class="flex mb-2">
      <h2 class="text-xl">Contact</h2>
    </div>
    <transition name="fade-grow">
      <div class="container ">
        <form action="https://formsubmit.co/jacob.bertilsson@gmail.com" method="POST">
          <div class="form-group">
            <div class="form-row">
              <div class="col mb-2 w-52">
                <UInput variant="outline" type="name" name="name" class="form-control" placeholder="Name" required
                  :ui="{ rounded: 'rounded-lg', }" />
              </div>
              <div class="col mb-2 w-52">
                <UInput variant="outline" type="email" name="email" class="form-control" placeholder="Email" required
                  :ui="{ rounded: 'rounded-lg', }" />
              </div>
            </div>
          </div>
          <div class="form-group mb-2">
            <UTextarea variant="outline" placeholder="Message" name="message" required :ui="{ rounded: 'rounded-lg', }">
            </UTextarea>
          </div>
          <UButton type="submit" color="white" variant="solid" class="rounded-lg">Send message</UButton>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    this.isVisible = true;
  },
}
</script>

<style scoped>
.fade-grow-enter-active,
.fade-grow-leave-active {
  transition: opacity 0.6s,
}

.fade-grow-enter-from,
.fade-grow-leave-to {
  opacity: 0;
}
</style>
