import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { columns, rows } from './data';

export default function ContactInfo() {
  return (
    <div style={{ height: 600, width: '98%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        autoPageSize
        slots={{ toolbar: GridToolbar }}
      />
    </div>
  );
}
