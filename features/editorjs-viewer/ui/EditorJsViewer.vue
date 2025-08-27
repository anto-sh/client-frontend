<script setup lang="ts">
import type { OutputData } from '@editorjs/editorjs'
import { sanitizeHtml } from '~/shared/utils/sanitizeHtml'
import { useEditorJsViewerModel } from '../model/useEditorJsViewerModel'

interface Props {
  data?: OutputData
}

defineProps<Props>()
const { getHeaderClasses, getImageClasses, getListClasses, getTableData, getTableHeaders } =
  useEditorJsViewerModel()
</script>

<template>
  <div class="content rounded-lg">
    <template v-for="block in data?.blocks" :key="block.id">
      <!-- Header -->
      <component
        :is="`h${block.data.level}`"
        v-if="block.type === 'header'"
        :class="getHeaderClasses(block.data.level)"
      >
        {{ block.data.text }}
      </component>

      <!-- Paragraph -->
      <p
        v-else-if="block.type === 'paragraph'"
        class="mb-4 leading-relaxed"
        v-html="sanitizeHtml(block.data.text)"
      />

      <!-- List -->
      <component
        :is="block.data.style === 'ordered' ? 'ol' : 'ul'"
        v-else-if="block.type === 'list'"
        :class="getListClasses(block.data.style)"
      >
        <NestedListEditorJs
          v-for="(item, index) in block.data.items"
          :key="index"
          :children="item.items || []"
          :content="item.content"
          :list-style="block.data.style"
          :meta="item?.meta"
        />
      </component>

      <!-- Quote -->
      <Card v-else-if="block.type === 'quote'" class="mb-6 border-l-4 border-primary-500">
        <template #content>
          <blockquote class="text-lg italic pl-4">
            <p v-html="sanitizeHtml(block.data.text)" class="mb-2" />
            <cite
              v-if="block.data.caption"
              class="text-sm font-medium"
              v-html="sanitizeHtml(block.data.caption)"
            />
          </blockquote>
        </template>
      </Card>

      <!-- Table -->
      <div v-else-if="block.type === 'table'" class="mb-6 overflow-x-auto">
        <DataTable
          :value="getTableData(block.data.content)"
          class="w-full"
          :pt="{
            table: 'min-w-full',
            headerRow: 'bg-gray-700',
            headerCell: 'px-4 py-2 text-left',
            bodyRow: 'border-t border-gray-600',
            bodyCell: 'px-4 py-2',
          }"
        >
          <Column
            v-for="(header, index) in getTableHeaders(block.data.content)"
            :key="index"
            :field="`col${index}`"
            :header="header"
          >
            <template #body="slotProps">
              <span v-html="sanitizeHtml(slotProps.data[`col${index}`])" />
            </template>
          </Column>
        </DataTable>
      </div>

      <!-- Warning -->
      <Message v-else-if="block.type === 'warning'" severity="warn" class="mb-6">
        <template #icon>
          <i class="pi pi-exclamation-triangle mr-3" />
        </template>
        <div>
          <h4
            v-if="block.data.title"
            class="font-semibold mb-2"
            v-html="sanitizeHtml(block.data.title)"
          />
          <p v-html="sanitizeHtml(block.data.message)" />
        </div>
      </Message>

      <!-- Delimiter -->
      <Divider v-else-if="block.type === 'delimiter'" class="my-8" />

      <!-- Embed -->
      <Card v-else-if="block.type === 'embed'" class="mb-6">
        <template #content>
          <div class="aspect-video">
            <iframe
              :src="block.data.embed"
              :width="block.data.width || '100%'"
              :height="block.data.height || 'auto'"
              frameborder="0"
              allowfullscreen
              class="w-full h-full rounded"
            />
          </div>
          <p
            v-if="block.data.caption"
            class="text-sm mt-2 text-center"
            v-html="sanitizeHtml(block.data.caption)"
          />
        </template>
      </Card>

      <!-- Image -->
      <figure v-else-if="block.type === 'image'" :class="getImageClasses(block.data)" class="mb-6">
        <Image
          :src="block.data.file?.url || block.data.url"
          :alt="block.data.caption || ''"
          :class="block.data.stretched ? 'w-full' : 'max-w-full mx-auto'"
          image-class="w-full rounded-lg object-cover"
        />
        <figcaption
          v-if="block.data.caption"
          class="text-sm text-gray-300 mt-2 text-center"
          v-html="sanitizeHtml(block.data.caption)"
        />
      </figure>
    </template>
  </div>
</template>

<style lang="postcss">
.content {
  mark {
    color: var(--p-text-color);
    font-weight: 500;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0) 50%,
      color-mix(in srgb, var(--p-primary-600) 40%, transparent) 50%,
      color-mix(in srgb, var(--p-primary-600) 40%, transparent) 100%
    );
  }

  u {
    @apply underline decoration-2 underline-offset-2;
  }

  a {
    @apply text-primary-300 underline;
  }
}
</style>
