import { Color4Type } from '@dcl/sdk/ecs';
import { Color4 } from '@dcl/sdk/math';
import ReactEcs, { Dropdown, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs';


function selectOption(index: number) {
  switch (index) {
    case 0:
      textColor = Color4.Red()
      break
    case 1:
      textColor = Color4.Blue()
      break
    case 2:
      textColor = Color4.Green()
      break
  }
}

let textColor: Color4Type = Color4.Red()

const uiComponent = () => (
  <UiEntity
      uiTransform={{
        width: '200px',
        height: '100px',
        alignContent: 'auto',
        flexDirection: 'column',
        alignSelf: 'center',
      }}
    >
      <Label
        value="Select a color"
        fontSize={18}
        color={textColor}
        uiTransform={{
          width: '140px',
          height: '40px',
        }}
      />
      <Dropdown
        options={[`Red`, `Blue`, `Green`]}
        onChange={selectOption}
        uiTransform={{
          width: '100px',
          height: '40px',
        }}
      />
    </UiEntity>
  )

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}