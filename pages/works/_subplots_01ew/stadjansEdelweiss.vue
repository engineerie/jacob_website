<template>
    <div class="hidden">
        <NuxtImg src="images/stadjan_01.png" width="1200" format="webp" class="rounded-xl" />
    </div>
    <div class="pb-10">
        <div class="flex justify-between mb-2">
            <h2 class="text-xl">Migrant edelweiss</h2>
            <UButton icon="i-heroicons-arrow-uturn-left" to="/works/_subplots_01ew" variant="ghost" color="gray" />
        </div>
        <transition name="fade-grow">
            <div v-if="isImageVisible">
                <NuxtImg src="images/stadjan_01.png" width="1200" format="webp" class="rounded-sm" />

                <div class="grid lg:grid-cols-4 grid-cols-1 mt-3 gap-y-3 lg:gap-3">
                    <div
                        class="col-span-3 border-r border-t rounded-tr-sm rounded dark:border-gray-800 border-gray-300 pl-4 py-4 pr-8 dark:text-gray-200 order-2 lg:order-1">
                        <!-- <h1 class="text-xl mb-2">Intro</h1> -->
                        <p>
                        <div class=" text-neutral-500">
                            “It all began in the
                            late 1970s when an Italian-born man named Ido Poloni wanted to bring with him to
                            Sweden a dear memory from his homeland, the fabled edelweiss plant. After a
                            summer stay at Foskdalsvallen in Särna, he found it natural to choose Dalarna's
                            perhaps most alpine location for the planting attempt, namely Städjan's peak.
                            Bringing about 20 plants from Cortina in northern Italy, Ido planted edelweiss
                            on suitable rocks that resembled their natural habitat. Here the noble flower
                            also found itself at home and is still growing on some of Städjan's rock
                            ledges.”<a href="#footnote1" id="ref1" class="text-xs text-blue-600 hover:underline">[1]</a>
                        </div>
                        <br>
                        Our interest in Ido's transplanted edelweiss led us to a field trip to the
                        Städjan-Nipfjället national reserve in western Sweden, near the Norwegian border, on
                        traditional Sámi territory. Although the edelweiss is often cherished as a symbol of alpine
                        nationalism and a mountaineering trophy, we found its role in this new setting to be quite
                        different. Located on a comparatively accessible summit and introduced by a migrant, the
                        flower did not symbolize heroic athleticism or environmental purity. Instead, it stood out
                        as both an ecological and cultural anomaly, questioning traditional narratives of
                        conservation and belonging.
                        <br><br>
                        <!-- <div class="italic">
                            “Most of us are appalled when
                            foreign humans are treated as somehow intrinsically dangerous. Yet the
                            orthodoxy in conservation is to demonize foreign species in just that way.” -Fred
                            Pearce (The New Wild)
                        </div> -->

                        <br>
                        <NuxtImg src="images/stadjan_04.png" width="1200" format="webp" class="rounded-sm" />

                        <div class="text-xs text-neutral-500 mt-2">
                            The County Administrative Board did not look kindly on Ido Poloni's planting of edelweiss on
                            Städjan. However, the reserve regulations did not mention anything about planting, so the
                            authorities had to reluctantly let the alpine plant remain.
                            <a href="#footnote2" id="ref2" class="text-xs text-blue-600 hover:underline">[2]</a>

                        </div>
                        <br>

                        <!-- It's easy to depict, as the local
                        newspaper did in the 70's, the planting attempt as a romantic folly in discord
                        with an institutional rational. But what if the state bureaucracy is
                        the one clinging on to a romantic idea of nature and place? The 1970's environmental
                        movement, including its later expression in governmental policy, was characterised by
                        protectionism: an approach to conservation that emphasises the protection of
                        individual species within environments where they're considered to belong. The
                        idea leans on the conception of the existence of an original or pristine state
                        of ecosystems; an idea that still lingers in many minds and regulations.
                        And as environmental journalist Fred Pearce states in his book the New Wild, when we
                        imagine the world as made up of tightly knit ecosystems that are perfect and
                        stable, where every species has evolved to have a unique roll, there is little
                        room for any appreciation for alien species.  “Most of us are appalled when
                            foreign humans are treated as somehow intrinsically dangerous. Yet the
                            orthodoxy in conservation is to demonize foreign species in just that way.” -Fred
                            Pearce (The New Wild) Despite how hard it is to unlearn, the
                        understanding of ecosystems
                        as stable and balanced is wrong. Change itself is not the threat but rather the baseline, or
                        as
                        Pearce would pose it, perhaps even a salvation. While it's true that in some instances
                        alien species cause havoc to ecosystems, the dull reality is that most of the
                        time often-feared foreign species don't make the headlines at all. They rarely
                        outcompete local species, instead they usually either become incorporated as contributors
                        to the overall health of ecosystems: pollinating crops, spreading seeds, and positively
                        mingling with native species in the food chain. Or they fail to properly
                        establish themselves and gradually cease away, which seems to be the case with
                        the edelweiss on Mount Städjan. -->
                        It's easy to characterise, as the local newspaper did in the 1970s, the planting of edelweiss as
                        a romantic folly at odds with a more institutional rationale. But what if it's the state
                        bureaucracy that's clinging to an outdated, romanticised notion of nature and place? The
                        environmental movement of the 1970s, which later influenced governmental policy, was marked by a
                        protectionist approach to conservation, focusing on safeguarding native species within their
                        traditional habitats. This approach is rooted in the belief in an original or pristine state of
                        ecosystems—an idea that persists in many minds and regulations today.
                        <br><br>
                        As environmental journalist Fred Pearce argues in his book The New Wild, imagining
                        the world as composed of stable, perfect ecosystems where every species has a unique role leaves
                        little room for appreciating alien species. He notes, “Most of us are appalled when foreign
                        humans are treated as somehow intrinsically dangerous. Yet the orthodoxy in conservation is to
                        demonize foreign species in just that way.” Despite the difficulty in
                        unlearning these misconceptions, the understanding of ecosystems as stable entities is
                        fundamentally flawed. Change is not a threat but rather the norm, and as Pearce suggests,
                        perhaps even a form of salvation.
                        <a href="#footnote3" id="ref3" class="text-xs text-blue-600 hover:underline">[3]</a>
                        <br><br>
                        While it's true that in some cases, alien species can disrupt ecosystems, the reality is that
                        these often-feared foreign species rarely make the headlines. More commonly, they either
                        contribute positively to ecosystem health—by pollinating crops, spreading seeds, and integrating
                        into the food chain—or they fail to establish themselves and gradually fade away. This latter
                        scenario seems to be the case with the edelweiss on Mount Städjan.
                        <br><br>
                        After several hours exploring Städjan's distinctive volcano-shaped summit, we concluded our
                        search without spotting the edelweiss. It's possible we missed the right hiding spot, or perhaps
                        the flowers have already vanished. Given the popularity of Städjan among hikers, it's plausible
                        that the plants may have been picked to extinction. Indeed, the desire of hikers to collect such
                        botanical trophies has historically led to a sharp decline in the edelweiss population in the
                        Alps, long before the threat of climate change loomed. This paradox of admiration, both
                        cherishing and endangering the plant, is what led to its protected status in 1878 under one of
                        Europe's first environmental protection laws. Interestingly, this legislation was
                        motivated more by commercial interests to benefit local collectors than by environmental
                        concerns.<a href="#footnote4" id="ref4" class="text-xs text-blue-600 hover:underline">[4]</a>

                        </p>
                    </div>
                    <div
                        class="col-span-1 border-l border rounded-sm dark:border-gray-800 border-gray-300 py-2 dark:text-gray-200 text-sm h-fit order-1 lg:order-2">

                        <ul class="divide-y dark:divide-gray-800 divide-gray-300 list-none">
                            <!-- <li class="py-2 pl-4">2021</li> -->
                            <li class="py-2 pl-4">Jacob Bertilsson, Quentin Lazzareschi</li>
                            <li class="py-2 pl-4">
                                <nuxt-link to="/works/_subplots_01ew"
                                    class="text-blue-600 dark:text-blue-500">_Subplots_01ew </nuxt-link>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="mt-10">
                    <hr>
                    <ol class="list-decimal text-sm mt-4">
                        <li id="footnote1">
                            <p class="text-sm text-gray-600">
                                Ljung, Tomas, and Lennart Bratt. “Städjans Edelweiss - Om Ut- Och Inplanterade Växter i
                                Dalarnas Natur.” Trollius 21 (1996). https://www.dalafloran.se/trollius/nr_21_25.pdf.

                                <UButton icon="i-heroicons-arrow-uturn-left" to="#ref1" variant="ghost" color="gray"
                                    size="xs" class="w-4 h-4" />
                            </p>
                        </li>
                        <li id="footnote2">
                            <p class="text-sm text-gray-600">
                                Ibid.
                                <UButton icon="i-heroicons-arrow-uturn-left" to="#ref2" variant="ghost" color="gray"
                                    size="xs" class="w-4 h-4" />
                            </p>
                        </li>
                        <li id="footnote3">
                            <p class="text-sm text-gray-600">
                                Pearce, Fred. The new wild: Why invasive species will be nature's salvation. London:
                                Icon, 2016.

                                <UButton icon="i-heroicons-arrow-uturn-left" to="#ref3" variant="ghost" color="gray"
                                    size="xs" class="w-4 h-4" />
                            </p>
                        </li>
                        <li id="footnote4">
                            <p class="text-sm text-gray-600">
                                Roudik, Peter, Author, Edith Palmer, Kelly Buchanan, Tariq Ahmad, and
                                U.S.. Global Legal Research Directorate Law Library Of Congress. Plant protection:
                                edelweiss: Austria, France, Germany, India, Slovenia, and Switzerland. composeds by
                                Zeldin, Wendy I., Authoriler [Washingon, DC: The Law Library of Congress, Global Legal
                                Research Center, 2012] Pdf. https://www.loc.gov/item/2018298764/.
                                <UButton icon="i-heroicons-arrow-uturn-left" to="#ref4" variant="ghost" color="gray"
                                    size="xs" class="w-4 h-4" />


                            </p>
                        </li>
                        <!-- Additional footnotes can be added here -->
                    </ol>

                </div>
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