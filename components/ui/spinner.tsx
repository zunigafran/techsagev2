import RefreshIcon from '@mui/icons-material/Refresh';

import { cn } from "@/lib/utils"

function Spinner({ className, ...props }: React.ComponentProps<typeof RefreshIcon>) {
  return (
    <RefreshIcon
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin", className)}
      {...props}
    />
  )
}

export { Spinner }
