# Input Text

## 簡介

`Input Text`是基礎的 Input 元件，提供了一個輸入框，可依使用需求選擇 input type，如需添加 icon 可選擇放置位置。

## VSCode Snippet

```md
jinput
```

## 元件程式碼

```javascript
<script setup>",
	import { ref, computed } from 'vue';
	import InputField from './UI/Form/InputField.vue'
	import InputText from './UI/Form/InputText.vue'
	// [資料及前端格式檢查]
	const textData = ref('')
	const isValidTame = computed(() => {
	// 依需求設定驗證方式
	return textData.value ? textData.value !== '' : null
	})
	const textlData = ref('')
	const textErrorMsg = ref('Text錯誤訊息')
	const textHelperMsg = ref('Text說明文字')
	const isValidName = computed(() => {
		// 格式驗證
		return nameData.value ? nameData.value !== '' : null
	})
</script>

<template>
	<InputField
		for=\"text\"
		label=\"輸入框標題\"
		:valid=\"isValidName\"
		:errorMsg=\"textErrorMsg\"
		:helperMsg=\"textHelperMsg\"
		required
	>
		<InputText
			v-model=\"nameData\"
			inputType=\"text\"
      inputStyle=\"輸入框icon位置\"
      icon=\"icon代碼\"
			placeholder=\"輸入框提醒文字\"
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
| modelValue  | any    | Null |                                                                                                              | true     |
| inputType   | String | Null | 設定 input type，可設定` text` `tel` `url `...等                                                             | false    |
| input style | String | Null | 設定 icon 位置，`default`表示不顯示 icon，`prependIcon`表示 icon 在前，`appendIcon`表示 icon 在後            | false    |
| icon        | String | Null | icon 樣式，如需更換請透過[連結](https://icones.js.org/)查詢，`Icon`元件詳細請點 [請點](../form/InputWrap.md) | false    |
| placeholder | String | Null | 設定選單提示文字                                                                                             | false    |
