import { Color4 } from '@dcl/sdk/math';
import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs';

let primary = Color4.Red()
let secondary = Color4.Green()

const uiComponent = () => (
	<UiEntity
		uiTransform={{
      maxWidth: '100%',
			height: '100%',
      overflow: 'scroll',
      alignItems: 'baseline',      
		}}
    	>
        <UiEntity
          uiTransform={{
            minWidth: 150,
            minHeight: 150,
            
          }}
          uiBackground={{ color: Color4.Green() }}
        />
        <UiEntity
          uiTransform={{
            minWidth: 150,
            minHeight: 150,
          }}
          uiBackground={{ color: Color4.Red() }}
        />
        <UiEntity
          uiTransform={{
            minWidth: 150,
            minHeight: 150,
          }}
          uiBackground={{ color: Color4.Blue() }}
        />

  </UiEntity>
)



export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
