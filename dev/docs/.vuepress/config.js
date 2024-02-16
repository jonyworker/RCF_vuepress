module.exports = {
  title: "RCF 元件庫技術文件",
  description: "Just playing around",

  // 設定頁面主題
  themeConfig: {
    displayAllHeaders: false,
    sidebarDepth: 3,
    activeHeaderLinks: false,

    sidebar: {
      "/component/": [
        // "" /* /foo/ */,
        {
          title: "通用元件", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            {
              title: "icon", // 必要的
              path: "/component/utility/icon.md", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              // 可选的, 默认值是 true,
            },
          ],
        },
        {
          title: "表單元件", // 必要的
          collapsable: false, // 可选的, 默认值是 true,
          children: [
            {
              title: "select", // 必要的
              path: "/component/form/select.md", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            },
            {
              title: "TextFiled", // 必要的
              path: "/component/form/textfiled.md", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
              collapsable: true, // 可选的, 默认值是 true,
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
//     title: "[ 表單元件 ]", // 必要的
//     path: "/form/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//     collapsable: true, // 可选的, 默认值是 true,

//     children: ["/form/select.md", "/form/textfiled.md"],
//   },
// ],

//  sidebarDepth: 1,
//         children: [
//           {
//             title: "通用元件", // 必要的
//             path: "/component/utility/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
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
//         title: "表單元件", // 必要的
//         path: "/component/form/", // 可选的, 标题的跳转链接，应为绝对路径且必须存在
//         collapsable: true, // 可选的, 默认值是 true,

//         // children: [
//         //   "/component/form/select.md",
//         //   "/component/form/textfiled.md",
//         // ],
//       },
//     ],
