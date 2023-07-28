<template>
  <div class="mx-6 mb-4 bg-white py-24">
    <div class="flex flex-col items-center">
      <h1 class="text-6xl font-semibold text-gray-800">這裡是首頁</h1>
      <div class="my-4 flex flex-col space-y-4">
        <NuxtLink to="/posts">前往 Posts</NuxtLink>
        <NuxtLink to="/about">前往 About</NuxtLink>
        <NuxtLink to="/contact">前往 Contact</NuxtLink>
        <NuxtLink to="/clientAndServer">前往 Client And Server</NuxtLink>
        <NuxtLink to="/counter/increment">前往 /counter/increment</NuxtLink>
        <NuxtLink to="/counter/surprise">前往 /counter/surprise</NuxtLink>
        <NuxtLink to="/counter">前往 /counter</NuxtLink>
        <NuxtLink to="/show">前往 /show</NuxtLink>
        <NuxtLink to="/profile">前往 /profile</NuxtLink>
        <NuxtLink to="/login">前往 Login</NuxtLink>
        <NuxtLink to="/login_2">前往 login_2</NuxtLink>
        <NuxtLink to="/cookie">前往 cookie</NuxtLink>
        <NuxtLink class="text-md mt-12 rounded-sm bg-emerald-500 py-2 px-4 font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
          to="/manage/articles/create"
        >
          前往撰寫文章
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
