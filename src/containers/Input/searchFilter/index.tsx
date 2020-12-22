import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete, {
  createFilterOptions,
} from "@material-ui/lab/Autocomplete";
import "./style.scss";
interface Props {
  onSelect?: (item: any) => void;
  input?: { name?: string }[];
  onChange?: (e: string) => void;
  placeHolder?: string;
}

export const SearchFilterInput = (props: Props) => {
  const { onSelect, input, onChange, placeHolder } = props;
  const [value, setValue] = React.useState({
    name: "",
  });
  return (
    <Autocomplete
      className="auto-complete"
      value={value || placeHolder}
      fullWidth
      onKeyUp={(e: any) => {
        if (onChange) onChange(e.target?.value);
      }}
      onChange={(event, newValue: any) => {
        if (onSelect && newValue) {
          onSelect(newValue);
        }
        console.log((event as any).target?.value);

        if (typeof newValue === "string") {
          setValue({
            name: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          setValue({
            name: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={input || []}
      getOptionLabel={(option) => {
        if (typeof option === "string") {
          return option;
        }
        if (option.inputValue) {
          return option.inputValue;
        }
        return option.name;
      }}
      renderOption={(option) => option.name}
      renderInput={(params) => (
        <TextField {...params} placeholder={placeHolder} variant="outlined" />
      )}
    />
  );
};
