import {RadioGroup, FormControlLabel, Radio} from '@mui/material';

export default function ColourSwitcher({onChange, layoutType}) {
  return (
    <>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="default"
        value={layoutType}
        name="profile-style-radio-group"
        id="profile-style-radio-group"
        onChange={onChange}
      >
        <FormControlLabel value="default" control={<Radio />} label="Default" />
        <FormControlLabel value="emo" control={<Radio />} label="Emo" />
        <FormControlLabel value="pink" control={<Radio />} label="Pink" />
      </RadioGroup>
    </>
  )
}
