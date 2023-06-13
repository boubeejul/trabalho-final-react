import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export function AlertMessage(props) {

  switch(props.type) {
    case "error":
      return (
        <Stack sx={{ width: '300px' }} spacing={2}>
          <Alert severity="error">{props.message}</Alert>
        </Stack>
      );
    case "success":
      return (
        <Stack sx={{ width: '300px' }} spacing={2}>
          <Alert severity="success">{props.message}</Alert>
        </Stack>
      );
    case "warning":
      return (
        <Stack sx={{ width: '300px' }} spacing={2}>
          <Alert severity="warning">{props.message}</Alert>
        </Stack>
      );
    case "info":
      return (
        <Stack sx={{ width: '300px' }} spacing={2}>
          <Alert severity="info">{props.message}</Alert>
        </Stack>
      );
  }
}