import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs';
import { canvasInfo } from "./index";
import { UISpinner, Spinner } from './ui-components/UISpinner';
import { SpriteAnimation, UIAnimatedSprite } from './ui-components/UIAnimatedSprite'

const widthFactor:number = .5
const heightFactor:number = .5
const spinner = new Spinner('images/loadingAnimation/spinner.png', 600)
const mySprite = new SpriteAnimation("images/loadingAnimation/loading-sprite.png", 4, 2, 20)

const uiComponent = () => (
  <UiEntity
    uiTransform={{
      height: canvasInfo.height * heightFactor,
      width: canvasInfo.width * widthFactor,
      margin: { top: canvasInfo.height * (1.0 - heightFactor) / 2, left: canvasInfo.width * (1.0 - widthFactor) / 2 },
      display: 'flex',
      flexDirection: 'column',
    }}
    uiBackground={{
		texture: {
			src: "images/bg2.png",
      
		},
    // textureMode: 'stretch'
    textureMode: 'nine-slices',
    textureSlices: {
      top: 0.3,
      bottom: 0.3,
      left: 0.3,
      right: 0.3
    }
	}}
  >

<UISpinner
      spinner={spinner}
      uiTransform={{
        width: 128,
        height: 128,
        positionType: 'absolute',
        position: { top: canvasInfo.height * heightFactor / 2-64, left: canvasInfo.width * widthFactor /2-250  }
      }}
    />

<UIAnimatedSprite
      spriteAnimator={mySprite}
      uiTransform={{
        width: 128,
        height: 128,
        positionType: 'absolute',
        position: { top: canvasInfo.height * heightFactor / 2-64, left: canvasInfo.width * widthFactor /2+250-128 }
      }}
    />

  
  </UiEntity>
)

spinner.show()
mySprite.show()

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
