---
title: 团队成员
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

// 核心团队
const core = [
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=1343352337&s=640',
    name: 'system_mini',
    title: '服主 & 服务器+团队创始人',
    links: [
      { icon: 'github', link: 'https://github.com/EndlessPixel' },
      { icon: 'qq', link: 'https://qm.qq.com/q/neDwQpKicM' },
      { icon: 'bilibili', link: 'https://space.bilibili.com/8409405' },
      { icon: 'kuaishou', link: 'https://www.kuaishou.com/profile/3xth2cp4jf5ha6c' },
      { icon: 'facebook', link: 'https://www.facebook.com/system_mini' },
      { icon: 'twitch', link: 'https://www.twitch.tv/system_mini' },
      { icon: 'modrinth', link: 'https://modrinth.com/user/EndlessPixel' }
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=3785267350&s=640',
    name: 'MCL',
    title: '团队副创始人',
    links: [
        { icon: 'qq', link: 'https://qm.qq.com/q/PH24WXzoEo' }
    ]
  },
  {
    avatar: 'http://q.qlogo.cn/g?b=qq&nk=2384269718&s=640',
    name: 'LANt',
    title: '域名提供',
    links: [
        { icon: 'github', link: 'https://github.com/239LAN' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/3493282111818118' },
        { icon: 'tiktok', link: 'https://www.douyin.com/user/MS4wLjABAAAAtr1NLpE8IeFbRo9dr6hVWC_oJb4OWXrlq2pkr-pnMtc' }
    ]
  }
]

// 管理团队
const managers = [
  {
    avatar: 'https://github.com/管理1.png',
    name: '管理1',
    title: '游戏服主管理'
  }
]
</script>
<VPTeamPage>
  <VPTeamPageSection>
    <template #title>我们的团队</template>
    <template #members>
      <VPTeamMembers size="medium" :members="core" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>