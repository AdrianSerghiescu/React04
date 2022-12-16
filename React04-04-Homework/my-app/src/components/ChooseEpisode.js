import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ChooseEpisode = ({ total, name, setId }) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, maxWidth: 500 }}>
      <InputLabel id="name">
        Choose an episode to see all the characters that played in it
      </InputLabel>
      <Select
        variant="filled"
        labelId="name"
        label="Choose an episode to see all characters"
        onChange={(e) => setId(e.target.value)}
        id={name}
      >
        <MenuItem>
          <em>Choose Episode..</em>
        </MenuItem>
        {[...Array(total).keys()].map((x) => {
          return (
            <MenuItem value={x + 1}>
              {name} - {x + 1}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default ChooseEpisode;
