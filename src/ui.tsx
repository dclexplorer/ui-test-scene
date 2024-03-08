import { Color4 } from '@dcl/sdk/math'
import ReactEcs, { Button, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { canvasInfo } from "./index";


const widthFactor:number = .3
const heightFactor:number = .3
var isMenuVisible: boolean = false

const uiComponent = () => (
  // parent
  <UiEntity
    uiTransform={{
      minHeight: canvasInfo.height * heightFactor,
      width: canvasInfo.width * widthFactor,
      margin: { top: canvasInfo.height * (1.0 - heightFactor) / 2, left: canvasInfo.width * (1.0 - widthFactor) / 2 },
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center' 
    }}
    uiBackground={{ color: Color4.Blue() }}

  >
     
      // Menu
     <UiEntity
      uiTransform={{
          height: 100,
          width: '100%',
          alignContent: 'center',
          justifyContent: 'center',
          display: isMenuVisible ? 'flex': 'none'
       }}
        uiText={{
          value: "Menu",
          fontSize: 30
       }}
       uiBackground={{ color: Color4.Green() }}
     />
     // button
     <Button
       uiTransform={{
          width: 100,
          height: 30,
         
       }}
       value="Toggle Menu"
       uiBackground={{ color: Color4.Red() }}
       onMouseUp = {toggleMenuVisibility}
     />
  </UiEntity>
)

// Function to toggle the state of the menu
function toggleMenuVisibility(){
 isMenuVisible = !isMenuVisible
}

export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}
