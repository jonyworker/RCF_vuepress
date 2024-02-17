# Input Email<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" style="vertical-align: text-bottom;padding-left: 8px;color: #aaa;"><path fill="currentColor" d="M5 5v4h1v14H5v4h4v-1h14v1h4v-4h-1V9h1V5h-4v1H9V5zm4 3h14v1h1v14h-1v1H9v-1H8V9h1zm1 2v8h4v4h8v-8h-4v-4zm2 2h4v4h-4zm6 4h2v4h-4v-2h2z"/></svg>

![input email component](../../.vuepress/public/inputemail.png)

## 簡介

`Input Email`是以`Input Text`為基礎搭建的元件，提供了一個輸入框，讓使用者可以輸入 email。含有基本的 email 前端格式驗證。

## VSCode Snippet

```md
jinput:email
```

## 元件程式碼

```javascript
<script setup>
  import { ref, computed } from 'vue';
  import InputField from './UI/Form/InputField.vue'
  import InputText from './UI/Form/InputText.vue'
  // [電子郵件資料及前端格式檢查]
  const emailData = ref('')
  const emailErrorMsg = ref('Email格式不正確')
  const emailHelperMsg = ref('')
  const isValidEmail = computed(() => {
    // email格式驗證
    return emailData.value != ''
      ? /^+([-]?+)*@+([-]?+)*({2,3})+$/.test(emailData.value)
      : null
  })
</script>

<template>
  <InputField
    for="email"
    label="電子郵件"
    :valid="isValidEmail"
    :errorMsg="emailErrorMsg"
    :helperMsg="emailHelperMsg"
    required
  >
    <InputText
      v-model="emailData"
      inputType="email"
      inputStyle="prependIcon"
      icon="mdi:email-outline"
      placeholder="請輸入電子郵件"
    ></InputText>
  </InputField>
</template>
```

::: tip
[InputWrap 元件詳細設定請參照此連結](../form/InputWrap.md)
:::

## 元件 Props

| Prop Name   | type   | 預設 | 說明                                                                                                         | required |
| :---------- | :----- | :--- | :----------------------------------------------------------------------------------------------------------- | :------- |
| inputType   | String | Null | 設定 input type，本元件直接設定為 email                                                                      | false    |
| input style | String | Null | 設定 icon 位置，`default`表示不顯示 icon，`prependIcon`表示 icon 在前，`appendIcon`表示 icon 在後            | false    |
| icon        | String | Null | icon 樣式，如需更換請透過[連結](https://icones.js.org/)查詢，`Icon`元件詳細請點 [請點](../form/InputWrap.md) | false    |
| placeholder | String | Null | 設定選單提示文字                                                                                             | false    |
