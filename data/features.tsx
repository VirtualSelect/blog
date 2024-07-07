import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import Translate, { translate } from '@docusaurus/Translate'

export type FeatureItem = {
  title: string
  text: JSX.Element
  Svg: React.ComponentType<React.ComponentProps<'svg'>>
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: 'Java后端开发工程师',
    }),
    text: (
      <Translate>
        普普通通Java后端开发工程师一枚，有代码强迫症。
      </Translate>
    ),
    Svg: WebDeveloperSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '技术狂热者',
    }),
    text: (
      <Translate>
        喜欢研究新鲜事物。
      </Translate>
    ),
    Svg: SpiderSvg,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    text: (
      <Translate>
        希望积极参与开源社区，为开源项目贡献代码。
      </Translate>
    ),
    Svg: OpenSourceSvg,
  },
]

export default FEATURES
