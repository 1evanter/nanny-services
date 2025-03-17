import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import styles from "./Filter.module.css"

type FilterProps = {
  handleFilter: (e: SelectChangeEvent) => void;
    filter: string;
}

export const Filter = ({ handleFilter, filter }: FilterProps) => {
    return (
          <div className={styles.filter}>
        <p>Filters</p>
        <Select
            value={filter}
            onChange={handleFilter}
            className={styles.select}
            displayEmpty
            MenuProps={{
    disablePortal: true,
  }}
            sx={{
              '& .MuiSelect-icon': {
                color: 'rgb(251, 251, 251)',
              },  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgb(16, 57, 49) !important",
    },
            }}
        >
          <MenuItem value="A to Z">A to Z</MenuItem>
          <MenuItem value="Z to A">Z to A</MenuItem>
          <MenuItem value="Less than 10$">Less than 10$ ↑</MenuItem>
          <MenuItem value="Greater than 10$">Greater than 10$ ↓</MenuItem>
          <MenuItem value="Popular">Popular ↓</MenuItem>
          <MenuItem value="Not popular">Not popular ↑</MenuItem>
          <MenuItem value="">Show all</MenuItem>
        </Select>
      </div>
    )
}