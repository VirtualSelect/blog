export const Friends: Friend[] = [
  {
    title: '愧怍',
    description: '道阻且长，行则将至',
    website: 'https://kuizuo.cn',
    avatar: 'https://kuizuo.cn/img/logo.png',
  },
  {
    title: '宇宁',
    description: '纸上得来终觉浅，绝知此事要躬行',
    website: 'https://yn-wiki.com',
    avatar: 'https://yn-wiki.com/img/logo.svg',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
