<script setup lang="ts">
import { ref } from 'vue';

const showCompleteDescription = ref(false)
</script>

<template>
  <div class="grid mx-auto justify-center items-start text-white bg-blue-200 w-full h-full">
    <div class="flex flex-col bg-gradientBackground rounded-lg w-full max-w-[976px]">
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
        <div class="col-span-2 flex flex-col text-sm">
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
            𝙷𝚖𝚖! 𝙰𝚑, 𝚘𝚑… 𝚑𝚎𝚕𝚕𝚘 𝚝𝚑𝚎𝚛𝚎. 𝙵𝚘𝚛𝚐𝚒𝚟𝚎 𝚖𝚎, 𝙸 𝚠𝚊𝚜 𝚓𝚞𝚜𝚝 𝚙𝚘𝚗𝚍𝚎𝚛𝚒𝚗𝚐… 𝚊𝚋𝚘𝚞𝚝 𝚖𝚢 𝚙𝚘𝚘𝚛 𝚏𝚘𝚛𝚝𝚞𝚗𝚎. 𝙸 𝚍𝚒𝚍 𝚗𝚘𝚝 𝚏𝚒𝚗𝚍 𝚖𝚢 𝚘𝚠𝚗 𝚜𝚞𝚗, 𝚗𝚘𝚝 𝚒𝚗 𝙰𝚗𝚘𝚛 𝙻𝚘𝚗𝚍𝚘, 𝚗𝚘𝚛...
          </p>
          <p
            v-else
            class="text-gray-300"
          >
            𝙷𝚖𝚖! 𝙰𝚑, 𝚘𝚑… 𝚑𝚎𝚕𝚕𝚘 𝚝𝚑𝚎𝚛𝚎. 𝙵𝚘𝚛𝚐𝚒𝚟𝚎 𝚖𝚎, 𝙸 𝚠𝚊𝚜 𝚓𝚞𝚜𝚝 𝚙𝚘𝚗𝚍𝚎𝚛𝚒𝚗𝚐… 𝚊𝚋𝚘𝚞𝚝 𝚖𝚢 𝚙𝚘𝚘𝚛 𝚏𝚘𝚛𝚝𝚞𝚗𝚎. 𝙸 𝚍𝚒𝚍 𝚗𝚘𝚝 𝚏𝚒𝚗𝚍 𝚖𝚢 𝚘𝚠𝚗 𝚜𝚞𝚗, 𝚗𝚘𝚝 𝚒𝚗 𝙰𝚗𝚘𝚛 𝙻𝚘𝚗𝚍𝚘, 𝚗𝚘𝚛
            𝚒𝚗 𝚃𝚠𝚒𝚕𝚒𝚐𝚑𝚝 𝙱𝚕𝚒𝚐𝚑𝚝𝚝𝚘𝚠𝚗. 𝚆𝚑𝚎𝚛𝚎 𝚎𝚕𝚜𝚎 𝚖𝚒𝚐𝚑𝚝 𝚖𝚢 𝚜𝚞𝚗 𝚋𝚎? 𝙻𝚘𝚜𝚝 𝙸𝚣𝚊𝚕𝚒𝚝𝚑, 𝚘𝚛 𝚝𝚑𝚎 𝚃𝚘𝚖𝚋 𝚘𝚏 𝚝𝚑𝚎 𝙶𝚛𝚊𝚟𝚎𝚕𝚘𝚛𝚍… ? 𝙱𝚞𝚝 𝙸 𝚌𝚊𝚗𝚗𝚘𝚝 𝚐𝚒𝚟𝚎 𝚞𝚙. 𝙸 𝚋𝚎𝚌𝚊𝚖𝚎 𝚄𝚗𝚍𝚎𝚊𝚍
            𝚝𝚘 𝚙𝚞𝚛𝚜𝚞𝚎 𝚝𝚑𝚒𝚜! 𝙱𝚞𝚝 𝚠𝚑𝚎𝚗 𝙸 𝚙𝚎𝚎𝚛 𝚊𝚝 𝚝𝚑𝚎 𝚂𝚞𝚗 𝚞𝚙 𝚊𝚋𝚘𝚟𝚎, 𝚒𝚝 𝚘𝚌𝚌𝚞𝚛𝚜 𝚝𝚘 𝚖𝚎…𝚆𝚑𝚊𝚝 𝚒𝚏 𝙸 𝚊𝚖 𝚜𝚎𝚎𝚗 𝚊𝚜 𝚊 𝚕𝚊𝚞𝚐𝚑𝚒𝚗𝚐 𝚜𝚝𝚘𝚌𝚔, 𝚊𝚜 𝚊 𝚋𝚕𝚒𝚗𝚍 𝚏𝚘𝚘𝚕 𝚠𝚒𝚝𝚑𝚘𝚞𝚝 𝚛𝚎𝚊𝚜𝚘𝚗?
            𝚆𝚎𝚕𝚕, 𝙸 𝚜𝚞𝚙𝚙𝚘𝚜𝚎 𝚝𝚑𝚎𝚢 𝚠𝚘𝚞𝚕𝚍𝚗'𝚝 𝚋𝚎 𝚏𝚊𝚛 𝚘𝚏𝚏! 𝙷𝚊𝚑 𝚑𝚊𝚑 𝚑𝚊𝚑!
          </p>
          <button
            type="button"
            class="hover:text-sky-300 mt-2 font-medium text-left"
            @click="showCompleteDescription = !showCompleteDescription"
          >
            {{ showCompleteDescription ? 'Ver menos informações' : 'Ver mais informações' }}
          </button>
        </div>
        <div class="flex flex-col ml-3">
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
          <div class="flex mt-4">
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
                  +9999xp
                </span>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
