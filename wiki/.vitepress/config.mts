import { defineConfig } from 'vitepress'

const currentYear = new Date().getFullYear()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/EndlessPixel-Wiki/',
  title: "EndlessPixel",
  description: "Server Wiki",
  lastUpdated: true,
  cleanUrls: true,
  sitemap: {
    hostname: 'https://wiki.epmc.top'
  },
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      detailsLabel: '详细信息'
    }
  },
  themeConfig: {
    siteTitle: 'EndlessPixel Wiki',
    logo: '/Logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs' },
      { text: 'API开放文档', link: '/api' },
      { text: '服务器状态', link: 'https://sys.epmc.top' },
      { text: '返回官网', link: 'https://www.epmc.top' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '开始', link: '/docs' },
          {
            text: '新手入门', collapsed: false, items: [
              { text: '服务器版本说明', link: '/beginner/version' },
              { text: '服务器规则', link: '/beginner/rule' },
              { text: '相关链接', link: '/beginner/link' }
            ]
          },
          {
            text: '服务器指令', collapsed: false, items: [
              { text: '登录与注册', link: '/server_common/login' },
              { text: '传送', link: '/server_common/tp' },
              { text: '皮肤', link: '/server_common/skin' },
              { text: '技能', link: '/server_common/skill' },
              { text: '领地', link: '/server_common/dominion' },
              { text: '自杀', link: '/server_common/killme' },
              { text: '福利', link: '/server_common/welfare' }
            ]
          },
          {
            text: '服务器特色玩法', collapsed: false, items: [
              {
                text: '维度与地形', collapsed: true, items: [
                  { text: '主世界维度升级', link: '/server_feature/overworld' },
                  { text: '下界维度升级', link: '/server_feature/nether' },
                  { text: '末地维度升级', link: '/server_feature/end' },
                  { text: '海洋探索', link: '/server_feature/ocean' },
                  { text: '原版结构更新', link: '/server_feature/structure' }
                ]
              },
              {
                text: '功能与系统', collapsed: true, items: [
                  { text: '特殊交互功能', link: '/server_feature/interaction' },
                  { text: '特色附魔系统', link: '/server_feature/enchant' },
                  { text: '大师切割机', link: '/server_feature/cutter' },
                  { text: '更多循声守卫战利品', link: '/server_feature/warden_loot' },
                  { text: 'BlazeandCave 成就包', link: '/server_feature/achievement' },
                  { text: '附魔金苹果配方恢复', link: '/server_feature/enchanted_apple' },
                  { text: '粘液科技玩法', link: '/server_feature/slimefun' }
                ]
              }
            ]
          },
          {
            text: '安全', collapsed: false, items: [
              { text: '箱子锁', link: '/safe/block_lock' },
              { text: '领地保护', link: '/safe/dominion' },
            ]
          },
          {
            text: '常见问题及解决策略',
            collapsed: true,
            items: [
              { text: '常见连接问题', link: '/faq/common' },
              { text: '其他疑难问题', link: '/faq/other' }
            ]
          },
          {
            text: '整合包相关', collapsed: true, items: [
              { text: '整合包简介', link: '/modpack/integration' }
            ]
          },
          {
            text: '关于我们',
            collapsed: false,
            items: [
              { text: '关于 EndlessPixel', link: '/about/intro' },
              { text: '团队成员', link: '/about/team' },
              { text: '服务支持信息', link: '/about/support' },
              { text: '服主写的古文', link: '/about/essay' }
            ]
          },
          { text: '一周年庆特别公告', link: '/anniversary', },
          { text: 'API开放文档', link: '/api' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/EndlessPixel' },
      { icon: 'discord', link: 'https://discord.gg/k63hRWt3fF' },
      { icon: 'qq', link: 'https://qm.qq.com/q/DDHVYsSfB0' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/8409405' },
      { icon: 'kuaishou', link: 'https://www.kuaishou.com/profile/3xth2cp4jf5ha6c' },
      { icon: 'facebook', link: 'https://www.facebook.com/system_mini' },
      { icon: 'twitch', link: 'https://www.twitch.tv/system_mini' },
      { icon: 'modrinth', link: 'https://modrinth.com/organization/endlesspixel-studio' }
    ],

    footer: {
      message: '"Minecraft" 和 "我的世界" 是 Mojang AB 的注册商标。本站与 Mojang 或 Microsoft 无任何关联。',
      copyright: `Copyright © 2024-${currentYear} EndlessPixel Studio`
    },

    lastUpdatedText: '最后更新',
    editLink: {
      pattern: 'https://github.com/EndlessPixel/EndlessPixel-Wiki/edit/main/wiki/:path',
      text: '在 GitHub 上编辑此页'
    },

    outline: {
      label: '页面导航',
      level: [2, 3]
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详细列表',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '没有结果',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '输入',
                  navigateText: '导航',
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: 'Esc'
                }
              }
            }
          }
        }
      }
    }
  }
})
