import { Color4 } from '@dcl/sdk/math';
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs';

let primary = Color4.Red()
let secondary = Color4.Green()

const uiComponent = () => (
	<UiEntity
		uiTransform={{
      alignItems: 'center',
			alignContent: 'center',
      justifyContent:'center',
      flexDirection:'row',
			width: '100%',
			height: '100%',
		}}
    	>
          <Button
      value="Click Me"
      uiBackground={{color: primary}}
      uiTransform={{ width: 80, height: 20, margin: 4 }}
      onMouseDown={() => {
        console.log('Clicked on the UI')
      }}
    />
    <Button
      value="Click Me"
      uiBackground={{color: secondary}}
      uiTransform={{ width: 80, height: 20, margin: 4 }}
      onMouseDown={() => {
        console.log('Clicked on the UI')
      }}
    />

    <Label
      onMouseDown={handleClick}
      value={'swap color'}
      fontSize={18}
      uiTransform={{ width:200, height: 30 }}
    />

  </UiEntity>
)

function handleClick() {
  primary = Color4.Green()
  secondary = Color4.Red()
}

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
