<script setup lang="ts">
import { ref } from 'vue';

const showCompleteDescription = ref(false)
</script>

<template>
  <div class="grid mx-auto justify-center items-start text-white bg-black w-full h-full">
    <Video
      class="absolute inset-0 w-full h-full object-cover z-0"
      src="/src/assets/videos/wallpaper.webm"
      type="video/webm"
    />
    <div
      class="flex flex-col bg-gradient-background rounded-lg w-full max-w-[976px] z-[4] relative"
    >
      <div class="grid grid-cols-4 py-8 px-6">
        <div class="relative">
          <Image
            class="w-[164px] h-[164px] border-2 border-sky-300"
            src="/src/assets/images/gatinho.png"
            alt="Imagem de perfil"
          />
          <Image
            class="absolute -left-4 -top-4 w-[196px] h-[196px]"
            src="/src/assets/images/moldura.png"
            alt="Moldura do perfil"
          />
        </div>
        <div class="col-span-2 -ml-9 pr-5 flex flex-col text-sm">
          <h1 class="text-2xl">barreto</h1>
          <div class="flex mb-5">
            <span
              class="pr-4"
            >
              gabriel
            </span>
            <Image
              class="w-[16px] h-[11px] mt-1 mr-1"
              src="/src/assets/images/br.png"
              alt="Bandeira do Brasil"
            />
            <span>
              Bauru, Sao Paulo, Brazil
            </span>
          </div>
          <p
            v-if="!showCompleteDescription"
            class="text-gray-300"
          >
            Olá, me chamo Gabriel Barreto, sou um Desenvolvedor Front-end e atualmente atuo pela Labi9 Tecnologia da informação como Front-end Tech Lead...
          </p>
          <div
            v-else
            class="text-gray-300"
          >
            <p>
              Olá, me chamo Gabriel Barreto, sou um Desenvolvedor Front-end e atualmente atuo pela Labi9 Tecnologia da informação como Front-end Tech Lead.
            </p>
            <p
              class="mt-2"
            >
              Atuei em projetos que vão desde landing pages estáticas e backoffices a até aplicações WebApp que utilizam recursos como PWA e web sockets. Veja 
              um pouco mais sobre minha trajetória através deste portfólio 🙇‍♂️
            </p>
          </div>
          <button
            type="button"
            class="hover:text-sky-300 mt-2 font-medium text-left"
            @click="showCompleteDescription = !showCompleteDescription"
          >
            {{ showCompleteDescription ? 'Ver menos informações' : 'Ver mais informações' }}
          </button>
        </div>
        <div class="flex flex-col">
          <div class="flex items-center">
            <h1
              class="mr-2 text-xl"
            >
              Nível
            </h1>
            <span
              class="border-yellow-300 border-2 p-[2px] px-[4px] rounded-full"
            >
              24
            </span>
          </div>
          <div class="flex mt-4 bg-[rgba(0,0,0,0.3)] rounded p-3 py-2">
            <Image
              class="w-[54px] h-[54px] mr-3"
              src="/src/assets/images/logo-vue.png"
              alt="Logo Vue"
            />
            <div class="flex flex-col text-xs justify-center">
              <span>
                Vue
              </span>
              <span>
                undefined XP
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
