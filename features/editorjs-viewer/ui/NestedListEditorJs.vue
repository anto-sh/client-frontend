<script setup lang="ts">
import { sanitizeHtml } from '~/shared/utils/sanitizeHtml'
import { useNestedListEditorJsModel } from '../model/useNestedListEditorJsModel'

interface Props {
  children: Array<{
    content: string
    items?: Array<any>
    meta?: { checked: boolean }
  }>
  content: string
  meta?: { checked: boolean }
  listStyle: string
}
const props = defineProps<Props>()

const { isCheckbox, getListClasses } = useNestedListEditorJsModel(toRef(props, 'listStyle'))
</script>

<template>
  <li class="mb-1">
    <Checkbox
      v-if="isCheckbox"
      :default-value="meta?.checked"
      binary
      readonly
      :input-class="{ 'pointer-events-none': true }"
    />
    <span :class="{ 'ml-2': isCheckbox }" v-html="sanitizeHtml(content)" />
    <component
      :is="listStyle === 'ordered' ? 'ol' : 'ul'"
      v-if="children.length > 0"
      :class="getListClasses(listStyle)"
    >
      <NestedListEditorJs
        v-for="(item, index) in children"
        :key="index"
        :children="item.items || []"
        :content="item.content"
        :list-style="listStyle"
        :meta="item?.meta"
      />
    </component>
  </li>
</template>
