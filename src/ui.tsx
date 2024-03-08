import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Input, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { canvasInfo } from "./index";

const widthFactor:number = .1
const heightFactor:number = .1
let currentValue: string = ''

const uiComponent = () => (
  <UiEntity
    uiTransform={{
      height: canvasInfo.height * heightFactor,
      width: canvasInfo.width * widthFactor,
      margin: { top: canvasInfo.height * (1.0 - heightFactor) / 2, left: canvasInfo.width * (1.0 - widthFactor) / 2 },
      flexDirection: 'column',
      justifyContent: 'center'
    }}
    uiBackground={{
      color: Color4.create(0, 0, 0, 0.8),
    }}
  >
    <Button
      value="Large text button with padding = 10px"
      variant="primary"
      uiTransform={{ alignSelf: 'center', padding:'10px'}}
      onMouseDown={() => {
        handleSubmitText(currentValue)
        currentValue = ''
      }}
    />
  </UiEntity>
)

function handleSubmitText(value: string) {
  console.log('submitted value: ' + value)
  // do something with text
}

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
