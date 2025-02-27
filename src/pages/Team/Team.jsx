import { DataGrid } from '@mui/x-data-grid';
import { rows } from './data';
import { saveAs } from 'file-saver';
import Papa from 'papaparse';
import { Box, Button, Paper, useTheme } from '@mui/material';
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
      align: 'center',
      headerAlign: 'center',
      minWidth: 10,
    },
    {
      field: 'name',
      headerName: 'Name',
      align: 'center',
      headerAlign: 'center',
      minWidth: 150,
    },
    {
      field: 'Email',
      headerName: 'Email',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'Age',
      headerName: 'Age',
      align: 'center',
      headerAlign: 'center',
      minWidth: 150,
    },
    {
      field: 'Phone',
      headerName: 'Phone',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      minWidth: 150,
    },
    {
      field: 'Access',
      headerName: 'Access',
      flex: 1,
      align: 'center',
      headerAlign: 'center',
      minWidth: 150,
      renderCell: ({ row: { Access } }) => {
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
    <Paper elevation={4} style={{ height: 600, overflowX: 'auto' }}>
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
    </Paper>
  );
}
