module.exports = {
  title: "RCF 元件庫技術文件",
  description: "Just playing around",
  base: "/RCF_vuepress/",
  // 設定頁面主題
  themeConfig: {
    displayAllHeaders: false,
    sidebarDepth: 3,
    activeHeaderLinks: false,

    sidebar: {
      "/component/": [
        // "" /* /foo/ */,
        {
          title: "通用元件",
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            {
              title: "icon",
              path: "/component/utility/icon.md",
              // 可选的, 默认值是 true,
            },
          ],
        },
        {
          title: "表單元件",
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            // input
            {
              title: "select",
              path: "/component/form/Select.md",
            },
            {
              title: "Input Wrap",
              path: "/component/form/InputWrap.md",
            },
            {
              title: "Input Text",
              path: "/component/form/InputText.md",
            },
            {
              title: "Input Email",
              path: "/component/form/InputEmail.md",
            },
            // check
            {
              title: "Checkbox 全選",
              path: "/component/form/checkAll.md",
            },
            {
              title: "checkbox",
              path: "/component/form/checkbox.md",
            },
            {
              title: "checkLimit",
              path: "/component/form/checkLimit.md",
            },
            {
              title: "radio button",
              path: "/component/form/radiobutton.md",
            },
            {
              title: "radio combo",
              path: "/component/form/radioCombo.md",
            },
            {
              title: "radio set",
              path: "/component/form/radioSet.md",
            },
          ],
        },
      ],

      // fallback
      "/": ["" /* / */ /* /about.html */],
    },
    nav: [
      { text: "指南", link: "/" },
      { text: "元件", link: "/component/" },

      // 下拉式nav寫法
      // {
      //   text: "Languages",
      //   ariaLabel: "Language Menu",
      //   items: [
      //     { text: "Chinese", link: "/language/chinese/" },
      //     { text: "Japanese", link: "/language/japanese/" },
      //   ],
      // },
      // { text: "External", link: "https://google.com" },
    ],
  },
};

// 如果你想为不同的页面组来显示不同的侧边栏，首先，将你的页面文件组织成下述的目录结构：
// sidebar: {
//   '/foo/': [
//     '',     /* /foo/ */
//     'one',  /* /foo/one.html */
//     'two'   /* /foo/two.html */
//   ],

//   '/bar/': [
//     '',      /* /bar/ */
//     'three', /* /bar/three.html */
//     'four'   /* /bar/four.html */
//   ],

//   // fallback
//   '/': [
//     '',        /* / */
//     'contact', /* /contact.html */
//     'about'    /* /about.html */
//   ]
// };

// sidebar: [
//   "/",
//   "/utility/",
//   {
//     title: "[ 表單元件 ]",
//     path: "/form/",
//     collapsable: true, // 可选的, 默认值是 true,

//     children: ["/form/select.md", "/form/textfiled.md"],
//   },
// ],

//  sidebarDepth: 1,
//         children: [
//           {
//             title: "通用元件",
//             path: "/component/utility/",
//             collapsable: false, // 可选的, 默认值是 true,
//             sidebarDepth: 3,
//             children: [
//               {
//                 title: "fuck",
//                 path: "/component/form/select.md",
//               },

//               "/component/form/textfiled.md",
//             ],
//           },
//         ],
//       },

//       {
//         title: "表單元件",
//         path: "/component/form/",
//         collapsable: true, // 可选的, 默认值是 true,

//         // children: [
//         //   "/component/form/select.md",
//         //   "/component/form/textfiled.md",
//         // ],
//       },
//     ],
