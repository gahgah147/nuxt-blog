<template>
    <div class="notification-container flex flex-col">
      <div
        aria-live="assertive"
        class="pointer-events-none fixed inset-0 z-50 flex items-end px-4 py-7 sm:items-start sm:p-6"
      >
        <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
          <NotificationBar
            v-for="notification in notifications"
            :key="notification.id"
            :notification="notification"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const { notifications } = useNotification()
  </script>