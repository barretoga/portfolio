<template>
  <div 
    role="status" 
    class="flex flex-col items-center gap-2 mt-2 animate-pulse"
  >
    <!-- Album Image Skeleton -->
    <div 
      class="w-32 h-32 bg-gray-700 rounded-md shadow-lg flex items-center justify-center"
    >
      <svg
        class="w-12 h-12 text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 18"
      >
        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
      </svg>
    </div>

    <!-- Track Info Skeleton -->
    <div class="flex flex-col items-center text-center w-full gap-2">
      <!-- Track Name -->
      <div class="h-4 bg-gray-700 rounded-full w-32"></div>
      
      <!-- Artist Name -->
      <div class="h-3 bg-gray-700 rounded-full w-24"></div>
    </div>

    <span class="sr-only">Loading Spotify track...</span>
  </div>
</template>
