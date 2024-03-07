import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs';
import { canvasInfo } from "./index";
import { Spinner, UISpinner } from './ui-components/UISpinner';

const widthFactor:number = .5
const heightFactor:number = .5
const spinner = new Spinner('images/loadingAnimation/spinner.png', 600)

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
            margin: { top: canvasInfo.height * (1.0 - heightFactor) / 2 - 64, left: canvasInfo.width * (1.0 - widthFactor) / 2 - 64 },

        }}
    />
  </UiEntity>
)

spinner.show()

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
