import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, Input, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { canvasInfo } from "./index";

const widthFactor:number = .5
const heightFactor:number = .5
let currentValue: string = ''

const uiComponent = () => (
  <UiEntity
    uiTransform={{
      height: canvasInfo.height * heightFactor,
      width: canvasInfo.width * widthFactor,
      margin: { top: canvasInfo.height * (1.0 - heightFactor) / 2, left: canvasInfo.width * (1.0 - widthFactor) / 2 },
      flexDirection: 'column',
    }}
    uiBackground={{
      color: Color4.Gray(),
    }}
  >
    <Input
      onSubmit={(value) => {
        handleSubmitText(value)
      }}
      fontSize={35}
      placeholder={'type something'}
      placeholderColor={Color4.Black()}
      value={currentValue}
      onChange={($) => (currentValue = $)}
      uiTransform={{
        height: '80px',
        margin: '15px',
      }}
    ></Input>
    <Button
      value="Submit text"
      variant="primary"
      uiTransform={{ alignSelf: 'center', padding: '25px' }}
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
