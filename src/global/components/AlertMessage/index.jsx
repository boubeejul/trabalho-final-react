import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export function AlertMessage() {
  return (
    <Stack sx={{ width: '300px' }} spacing={2}>
      <Alert severity="error">Verifique usuário e senha!</Alert>
    </Stack>
  );
}