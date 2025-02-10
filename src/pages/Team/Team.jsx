import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { Box, Button, useTheme } from '@mui/material';
import {
  AdminPanelSettings,
  ManageAccounts,
  Person,
} from '@mui/icons-material';

export default function Team() {
  const theme = useTheme();
  const handleExportCSV = () => {
    const csv = Papa.unparse(rows); // تحويل البيانات إلى CSV
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'team-data.csv'); // تحميل الملف تلقائيًا
  };

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 150,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Email',
      headerName: 'Email',
      width: 150,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Age',
      headerName: 'Age',
      width: 150,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Phone',
      headerName: 'Phone',
      width: 150,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Access',
      headerName: 'Access',
      width: 150,
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      renderCell: ({ row: { Access } }) => {
        console.log(Access.toLowerCase());

        return (
          <Box
            sx={{
              width: 'fit-content',
              mx: 'auto',
            }}
          >
            <Button
              startIcon={
                Access.toLowerCase() === 'Admin' ? (
                  <AdminPanelSettings />
                ) : Access.toLowerCase() === 'User' ? (
                  <Person />
                ) : (
                  <ManageAccounts />
                )
              }
              color={
                theme.palette.mode === 'dark'
                  ? theme.palette.primary.dark
                  : theme.palette.primary.light
              }
              sx={{
                py: 1,
                px: 2,
                borderRadius: '5px',
                bgcolor:
                  Access.toLowerCase() === 'Admin'.toLowerCase()
                    ? theme.palette.error.dark
                    : Access.toLowerCase() === 'User'.toLowerCase()
                    ? theme.palette.secondary.dark
                    : theme.palette.primary.dark,
              }}
            >
              {Access}{' '}
            </Button>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: 500, width: '100%' }}>
      <Button
        onClick={handleExportCSV}
        sx={{
          marginBottom: 1,
          display: 'block',
          ml: 'auto',
          bgcolor:
            theme.palette.mode === 'dark'
              ? theme.palette.grey[800]
              : theme.palette.grey[400],
        }}
      >
        Export
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        autoPageSize
      />
    </div>
  );
}
