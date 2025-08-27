<script setup lang="ts">
import { computed } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const currentYear = computed(() => new Date().getFullYear())

const openWhatsApp = () => {
  const phoneNumber = '79138886463'
  const message = 'Здравствуйте!'
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')
}

const openTelegram = () => {
  const username = 'rehabilitationTomsk'
  const url = `https://t.me/${username}`
  window.open(url, '_blank')
}

const openTelegramChannel = () => {
  const username = 'rehabilitationVtomsk'
  const url = `https://t.me/${username}`
  window.open(url, '_blank')
}
</script>

<template>
  <footer class="bg-surface-800 py-8 mt-auto">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Левая часть - контактная информация -->
        <div class="space-y-6">
          <!-- Адрес -->
          <div>
            <h3 class="text-lg font-semibold text-primary-400">Адрес</h3>
            <p class="text-gray-300">
              г. Томск, ул. Кирова, д. 51, лит. А, стр. 5<br />
              правое крыло, 7 этаж, офис 718
            </p>
          </div>

          <!-- Как добраться -->
          <!-- <div>
            <h3 class="text-lg font-semibold text-primary-400">Как добраться</h3>
            <p class="text-gray-300">
              От метро "Центральная" пешком 5 минут.<br />
              Выход 2, направо по ул. Примерная до дома 123.
            </p>
          </div> -->

          <!-- Время работы -->
          <div>
            <h3 class="text-lg font-semibold text-primary-400">Время работы</h3>
            <div class="text-gray-300">
              <p>Пн, Ср, Пт: <span class="text-primary-300">9:00 - 21:30</span></p>
              <p>Вт, Чт: <span class="text-primary-300">7:30 - 21:30</span></p>
              <p>Сб: <span class="text-primary-300">9:30 - 16:30</span></p>
              <p>Вс: <span class="text-primary-300">12:00 - 16:00</span></p>
            </div>
          </div>

          <!-- Контакты -->
          <div>
            <h3 class="text-lg font-semibold text-primary-400 mb-2">Контакты</h3>
            <div class="space-y-3">
              <!-- Телефон -->
              <PhoneLink />
              <div class="flex items-center space-x-4">
                <!-- WhatsApp -->
                <Button
                  icon="pi pi-whatsapp"
                  rounded
                  outlined
                  severity="success"
                  class="text-green-400 hover:text-green-300"
                  @click="openWhatsApp"
                />
                <!-- Telegram -->
                <Button
                  icon="pi pi-send"
                  outlined
                  rounded
                  severity="info"
                  class="text-blue-400 hover:text-blue-300"
                  @click="openTelegram"
                />
              </div>
              <div class="cursor-pointer" @click="openTelegramChannel">
                <h4 class="text-md font-bold mb-1">Наш канал в Telegram</h4>
                <Button outlined severity="info" label="Перейти" />
              </div>
            </div>
          </div>
        </div>

        <!-- Правая часть - карта -->
        <div>
          <h3 class="text-lg font-semibold text-primary-400 mb-2">Мы на карте</h3>
          <div
            class="w-full min-h-[400px] h-[calc(100%-30px)] bg-gray-700 rounded-lg overflow-hidden"
          >
            <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Af875e4c00b09728fb2ab2072d7317a23fbb1eaa7e4b4bf0bf917fbfc48fad0dc&amp;source=constructor"
              width="100%"
              height="100%"
              frameborder="1"
              allowfullscreen="true"
              style="position: relative"
            ></iframe>
          </div>
        </div>
      </div>

      <!-- Нижняя часть футера -->
      <Divider class="my-6 border-gray-600" />

      <div class="text-center text-gray-400 text-sm">
        <p>&copy; {{ currentYear }} ИП Поздеева Анна Сергеевна. Все права защищены.</p>
      </div>
    </div>
  </footer>
</template>
