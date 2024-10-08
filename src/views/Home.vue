<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { badgeItems } from '~/static/badges';
import { useUserStore } from '~/stores/user';
import { notify } from '~/utils/notify';

const { t, locale } = useI18n()
const showCompleteDescription = ref(false)
const commentary = ref('')
const userStore = useUserStore()
const { execute: getUserRepositories, isLoading: isLoadingRepositories } = userStore.repositories()

getUserRepositories()

const repositories = computed(() => {
  return userStore.$state.repositories
})

function switchLanguage() {
  locale.value = locale.value === 'en' ? 'pt' : 'en'
}

function sendEmail() {
  const mailtoLink = `mailto:gabrielbarretogasparelo?subject=${t('email_title')}&body=${commentary.value}`;

  window.open(mailtoLink, '_blank');

  commentary.value = ''
  notify(t('send_message'), 'success')
}
</script>

<template>
  <div class="grid mx-auto justify-center items-start text-white bg-black w-full h-full">
    <Video
      class="absolute inset-0 w-full min-h-[120vh] object-cover z-0"
      src="wallpaper.webm"
      type="video/webm"
    />
    <div
      class="flex flex-col bg-gradient-to-br overflow-x-hidden mb-[5rem] from-gradient-background via-gradient-background to-gradient-showcase-header-left rounded-lg max-w-[976px] w-full lg:w-[976px] z-[4] relative"
    >
      <div class="flex flex-col lg:flex-row items-center lg:items-start py-8 px-6">
        <div class="relative w-full max-w-[200px]">
          <Image
            class="w-[164px] h-[164px] border-2 border-sky-300"
            src="gatinho.webp"
            :alt="t('alt_profile_image')"
          />
          <Image
            class="absolute -left-4 -top-4 w-[196px] h-[196px]"
            src="moldura.png"
            :alt="t('alt_profile_frame')"
          />
        </div>
        <div class="flex flex-col w-full max-w-[90%] lg:max-w-[450px] lg:pr-5 lg:pt-0 pt-5 text-sm">
          <h1 class="text-2xl">barreto</h1>
          <div class="flex mb-5">
            <span
              class="pr-4"
            >
              gabriel
            </span>
            <Image
              class="w-[16px] h-[11px] mt-1 mr-1"
              src="br.webp"
              :alt="t('alt_brazil_flag_icon')"
            />
            <span>
              Bauru, São Paulo, {{ t('country') }}
            </span>
          </div>
          <div
            :class="{
              'max-h-[50px] overflow-hidden line-clamp-2': !showCompleteDescription,
              'max-h-[500px] overflow-visible transition-all duration-500 ease-linear': showCompleteDescription,
            }"
            class="text-gray-300"
          >              
            <p
              class="mt-2"
            >
              {{ t('about_first_part') }}
              <br><br>
              {{ t('about_second_part') }}
            </p>
          </div>
          <button
            type="button"
            class="hover:text-sky-300 mt-2 font-medium text-left transition-all duration-200 ease-linear"
            @click="showCompleteDescription = !showCompleteDescription"
          >
            {{ showCompleteDescription ? t('see_less') : t('see_more') }}
          </button>
        </div>
        <div class="flex flex-row lg:justify-normal justify-between lg:flex-col w-full max-w-[90%] lg:max-w-[268px] col-span-2">
          <div class="flex items-center">
            <h1
              class="mr-2 text-xl"
            >
              {{ t('age') }}
            </h1>
            <span
              class="border-yellow-300 border-2 p-[2px] px-[4px] rounded-full"
            >
              24
            </span>
          </div>
          <div class="flex mt-4 bg-box-background rounded p-3 py-2">
            <Image
              class="w-[60px] h-[54px] object-cover p-1 rounded-lg"
              src="vue-logo.webp"
              alt="Logo Vue"
            />
            <div class="flex flex-col ml-3 text-xs justify-center">
              <span>
                Vue
              </span>
              <span>
                {{ t('job_title') }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex lg:flex-row flex-col items-center lg:items-start">
        <div class="w-full max-w-[90%] lg:mx-0 lg:max-w-[652px] lg:px-3 lg:ml-2 mb-4">
          <div class="bg-box-background rounded mx-2 lg:mx-0">
            <div class="flex bg-gradient-to-r from-gradient-showcase-header-left to-color-showcase-header rounded-t-md px-3 pt-1">
              <h2 class="text-lg mb-2 my-2">
                {{ t('graduation_title') }}
              </h2>
              <a
                href="https://fatecjahu.edu.br/cursos/gestao-da-tecnologia-da-informacao/"
                target="_blank"
                class="flex items-center ml-2 hover:text-sky-300 transition-all duration-150"
              >
                <Icon
                  icon="akar-icons:link-out"
                  width="1em"
                />
              </a>
            </div>
            <p class="text-sm p-5">
              {{ t('graduation_description') }}
            </p>
          </div>
          <div class="bg-box-background lg:mx-0 mx-2 rounded mt-5">
            <div class="flex bg-gradient-to-r from-gradient-showcase-header-left to-color-showcase-header rounded-t-md px-3 pt-1">
              <h2 class="text-lg mb-2 my-2">
                {{ t('projects') }}
              </h2>
              <a
                href="https://github.com/barretoga?tab=repositories"
                target="_blank"
                class="flex items-center ml-2 hover:text-sky-300 transition-all duration-150"
              >
                <Icon
                  icon="akar-icons:link-out"
                  width="1em"
                />
              </a>
            </div>
            <div class="grid items-center lg:items-start lg:grid-cols-5 gap-1 lg:gap-2 p-2">
              <a
                class="lg:col-span-4 lg:w-[486px] lg:h-[334px] w-[100%] h-[150px] lg:mx-0 mx-auto hover:border-gray-50 border border-transparent transition-all duration-200 overflow-hidden"
                href="https://barretodev.vercel.app/"
                target="_blank"
              >
                <Image
                  class="lg:w-[506px] lg:h-[334px] w-[100%] h-[150px] hover:scale-110 transition-all duration-200 lg:object-cover"
                  src="blog.webp"
                  alt="Blog"
                />
              </a>
              <div class="flex flex-col lg:items-start items-center w-full col-span-1 gap-y-1">
                <a
                  class="lg:w-[116px] lg:h-[80px] w-[100%] h-[150px] hover:border-gray-50 border border-transparent relative transition-all duration-200 overflow-hidden"
                  href="https://commer-application.netlify.app/"
                  target="_blank"
                >
                  <Image
                    class="lg:w-[116px] lg:h-[80px] w-[100%] h-[150px] hover:scale-110 transition-all duration-200 object-cover"
                    src="commer.webp"
                    alt="Commer"
                  />
                  <div class="lg:w-[116px] lg:items-start lg:pt-1 pt-0 flex flex-col items-center justify-center lg:justify-normal lg:h-[80px] w-[100%] h-[150px] top-0 bg-yellow-700/70 absolute opacity-0 hover:opacity-100 transition-all duration-200">
                    <span class="text-xs text-center w-full font-semibold">
                      Work in progress
                    </span>
                    <Icon
                      class="mx-auto lg:mt-0 mt-2"
                      icon="noto:construction"
                      width="3em"
                    />
                  </div>
                </a>
                <a
                  class="lg:w-[116px] lg:h-[80px] w-[100%] h-[150px] hover:border-gray-50 border border-transparent relative transition-all duration-200 overflow-hidden"
                  href="https://github.com/barretoga/commer-api"
                  target="_blank"
                >
                  <Image
                    class="lg:w-[116px] lg:h-[80px] w-[100%] h-[150px] hover:scale-110 transition-all duration-200 object-cover"
                    src="commer.webp"
                    alt="Commer API"
                  />
                  <div class="absolute lg:w-[116px] lg:h-[80px] w-[100%] h-[150px] text-black/80 bg-gray-300/50 font-bold text-xl top-0">
                    <Icon
                      class="mx-auto lg:mt-1 mt-9"
                      icon="tabler:database-cog"
                      width="3em"
                    />
                  </div>
                  <div class="lg:w-[116px] lg:items-start lg:pt-1 pt-0 flex flex-col items-center justify-center lg:justify-normal lg:h-[80px] w-[100%] h-[150px] top-0 bg-yellow-700/70 absolute opacity-0 hover:opacity-100 transition-all duration-200">
                    <span class="text-xs text-center w-full font-semibold">
                      Work in progress
                    </span>
                    <Icon
                      class="mx-auto lg:mt-0 mt-5"
                      icon="noto:construction"
                      width="3em"
                    />
                  </div>
                </a>
                <a
                  class="lg:w-[116px] lg:h-[80px] w-[100%] h-[150px] hover:border-gray-50 border border-transparent relative transition-all duration-200 overflow-hidden"
                  href="https://github.com/barretoga/nlw-2024-planner"
                  target="_blank"
                >
                  <Image
                    class="lg:w-[116px] lg:h-[80px] w-[100%] h-[150px] hover:scale-110 transition-all duration-200 object-cover"
                    src="nlw.webp"
                    alt="NLW Planner"
                  />
                </a>
                <a
                  class="lg:w-[116px] lg:h-[80px] w-[100%] h-[150px] bg-[#222223] hover:border-gray-50 border border-transparent flex items-center transition-all duration-200 overflow-hidden"
                  href="https://github.com/barretoga?tab=repositories"
                  target="_blank"
                >
                  <span class="mx-auto">
                    +{{ repositories.length - 4 }}
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div class="bg-box-background lg:mx-0 mx-2 rounded mt-5">
            <div class="flex flex-col bg-gradient-to-r from-gradient-showcase-header-left to-color-showcase-header rounded-t-md px-3 pt-1">
              <h2 class="text-lg mr-2 mt-2">
                {{ t('comment_title') }}
              </h2>
              <span class="text-xs mt-2 mb-3">
                {{ t('comment_description') }}
              </span>
            </div>
            <textarea
              v-model="commentary"
              class="bg-box-background w-full h-[5rem] p-2 text-xs -mb-2"
              autocomplete="false"
              :placeholder="t('comment_placeholder')"
              @keydown.enter.prevent="sendEmail"
            />
          </div>
        </div>
        <div class="flex flex-col w-full max-w-[85%] bg-box-background rounded-md p-3 ml-0 mr-0 lg:ml-4 lg:mr-4 mb-4 lg:max-w-[288px] pb-10">
          <span class="text-xl text-[#57CDBE]">
            Working
          </span>
          <div class="flex mt-10 items-end">
            <span class="text-sm">
              {{ t('technologies') }}
            </span>
            <span class="text-slate-400 ml-3 -mb-1 text-2xl">
              {{ badgeItems.length }}
            </span>
          </div>
          <Swiper
            :items="badgeItems"
            :loop="true"
            :slides-per-view="4"
            :autoplay="{
              delay: 1000,
              disableOnInteraction: false,
            }"
            class="h-[70px] w-full mt-2"
          >
            <template #default="{ item }">
              <Image
                :src="item.image_path"
                :alt="item.name"
                class="w-[54px] h-[54px] object-cover p-1 rounded-lg"
              />
            </template>
          </Swiper>
          <a
          href="https://github.com/barretoga"
            target="_blank"
            class="text-sm mt-10 hover:text-slate-300/70 transition-all duration-200"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielbarretogasparelo/"
            target="_blank"
            class="text-sm mt-3 hover:text-slate-300/70 transition-all duration-200"
          >
            Linkedin
          </a>
          <a
            href="mailto:gabrielbarretogasparelo@gmail.com.br?subject=Proposta de emprego&body=Olá Gabriel Barreto!"
            target="_blank"
            class="text-sm mt-3 hover:text-slate-300/70 transition-all duration-200"
          >
            E-mail
          </a>
          <a
            href="https://drive.google.com/file/d/1dNDv_Yx7C6suBzkcvwP42SduOVQq8-89/view?usp=sharing"
            target="_blank"
            class="text-sm mt-3 hover:text-slate-300/70 transition-all duration-200"
          >
            {{ t('cv') }}
          </a>
          <a
            href="https://github.com/barretoga/my-vscode-config"
            target="_blank"
            class="text-sm mt-3 hover:text-slate-300/70 transition-all duration-200"
          >
            {{ t('vscode_configuration_item') }}
          </a>
          <button
            @click="switchLanguage"
            class="text-sm text-left mt-3 hover:text-slate-300/70 transition-all duration-200"
          >
            {{ t('change_language') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
