import { HexColorPicker, HexColorInput } from "react-colorful";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

//Referencing https://www.npmjs.com/package/react-colorful for implementation
//https://codesandbox.io/s/react-colorful-customization-demo-forked-cg6x8x?file=/src/styles.css:396-431 for styling

const ColorPickerWrapper = styled.div`
  position: absolute;
  right: 105%;
  top: 0;
  width: 300px;
  padding: 15px;
  border: 1px solid ${theme.colors.black[40]};
  border-radius: 8px;
  background-color: ${theme.colors.black[5]};
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

const StyledHexColorPicker = styled(HexColorPicker)`
  &.react-colorful {
    width: 100%;
  }

  .react-colorful__saturation {
    border-bottom: none;
    border-radius: 8px;
  }

  .react-colorful__hue {
    height: 15px;
    margin-top: 10px;
    border-radius: 8px;
  }

  .react-colorful__hue-pointer,
  .react-colorful__saturation-pointer {
    height: 20px;
    width: 20px;
    border: 3px solid white;
  }

`

const StyledHexColorInput = styled(HexColorInput)`
  background-color:  ${theme.colors.black[10]};
  padding: 10px;
  width: 100%;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  margin-top: 10px;
`

function ColorPicker({ color, onChange }) {

  return (
    <ColorPickerWrapper>
      <StyledHexColorPicker color={color} onChange={onChange} />
      <StyledHexColorInput color={color} onChange={onChange} prefixed/>
    </ColorPickerWrapper>
  )
}

export default ColorPicker;