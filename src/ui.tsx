import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs';
import { canvasInfo } from "./index";
import { SpriteAnimation, UIAnimatedSprite } from './ui-components/UIAnimatedSprite';

const widthFactor:number = .5
const heightFactor:number = .5
const mySprite = new SpriteAnimation("images/spriteAnimation/walk_anim_sprite.png", 4, 2, 20)
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

<UIAnimatedSprite
      spriteAnimator={mySprite}
      uiTransform={{
        width: 120,
        height: 240,
        positionType: 'absolute',
        position: { top: '4%', left: '23%' }
      }}
    />
  </UiEntity>
)

mySprite.show()

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
