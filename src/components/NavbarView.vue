<template>
  <div
    class="wrapper-header fixed top-0 left-0 w-full z-50 h-20 bg-white shadow-md px-32"
  >
    <div class="flex h-20 justify-center content-center items-center">
      <div class="flex-initial w-1/3 flex items-center h-20">
        <a href="/about" class="contents w-full">
          <!-- <font-awesome-icon :icon="['fas', 'gear']" class="fa-3x" /> -->
          <img
            src="../assets/logo/logo 5.png"
            alt="my logo"
            class="max-h-full max-w-full object-contain"
          />
          <div class="ml-4">My Logo</div>
        </a>
      </div>
      <div
        class="flex-initial w-1/3 h-20 justify-center items-center content-center"
      >
        <div class="flex w-full">
          <div class="flex-1 text-center">
            <button class="btn btn-ghost rounded-3xl">About Us</button>
          </div>
          <div class="flex-1 text-center">
            <button class="btn btn-ghost rounded-3xl">Solutions</button>
          </div>
          <div class="flex-1 text-center">
            <button class="btn btn-ghost rounded-3xl">Technology</button>
          </div>
        </div>
      </div>
      <div class="flex-initial w-1/3 h-20 content-center text-end">
        <div class="flex w-full">
          <div class="flex-1">
            <button class="btn btn-ghost rounded-3xl mr-4">
              Log in
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="fa-1x ml-2"
              />
            </button>

            <button class="btn ml-2 btn-outline rounded-3xl">
              Contact Sales
              <font-awesome-icon
                :icon="['fas', 'arrow-right']"
                class="fa-1x ml-2"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
