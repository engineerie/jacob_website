<template>
    <div class="hidden">
        <NuxtImg src="images/ConsideringForestry.jpg" class="shadow-md" height="850" format="webp" />
    </div>
    <div class="pb-10">
        <div class="flex justify-between mb-2">
            <h2 class="text-xl">Considering forestry: A science for managing the outside</h2>
            <UButton icon="i-heroicons-arrow-uturn-left" to="/writings" variant="ghost" color="gray" />
        </div>
        <transition name="fade-grow">
            <div v-if="isImageVisible" class="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <NuxtImg src="images/ConsideringForestry.jpg" class="shadow-md col-span-1 lg:col-span-5" height="850"
                    format="webp" />
                <div
                    class="col-span-1 lg:col-span-7 border rounded-sm dark:border-gray-800 border-gray-300 py-2 dark:text-gray-200 text-sm lg:order-2">

                    <ul class="divide-y dark:divide-gray-800 divide-gray-300 list-none">
                        <li class="py-2 px-5">MA Research Architecture thesis</li>
                        <li class="py-2 px-5">Goldsmiths University of London</li>

                        <li class="py-2 px-5">2022</li>
                        <li class="py-2 px-5">
                            <NuxtLink target="blank"
                                to="https://drive.google.com/file/d/1Ns2brErQCdHbvmc8KzvPe_yWfkoLSYPE/view?usp=drive_link"
                                class="text-blue-600 dark:text-blue-500">
                                Access PDF on Google drive
                                <!-- <Icon name="heroicons:arrow-up-right" class="ml-2" /> -->
                            </NuxtLink>
                        </li>
                        <li class="py-2 px-5">In this dissertation, I consider what it means
                            to model (and twin) complex systems such as
                            forests environments. I argue that in designing
                            and producing these models, it's necessary to
                            go beyond a focus on exactitude and precision.<br><br>
                            In developing this argument, I draw methodological
                            connections between closer-to-nature forestry
                            and cybernetic planning, regarding both as
                            management approaches that share an aim of
                            creating conditions for system parts to govern
                            themselves.
                        </li>



                    </ul>
                </div>
                <!-- <div class="grid lg:grid-cols-4 grid-cols-1 mt-3 gap-y-3 lg:gap-3">
                    <div
                        class="col-span-3 border-r border-t rounded-tr-sm rounded dark:border-gray-800 border-gray-300 pl-4 py-4 pr-8 dark:text-gray-200 order-2 lg:order-1">
                        <h1 class="text-xl mb-2">Intro</h1>
                        <p>
                        </p>
                    </div>
                   
                </div> -->

            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isImageVisible: false,
        };
    },
    mounted() {
        this.isImageVisible = true;
    },
}
</script>

<style scoped>
.fade-grow-enter-active,
.fade-grow-leave-active {
    transition: opacity 0.6s, transform 0.6s;
}

.fade-grow-enter-from,
.fade-grow-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>