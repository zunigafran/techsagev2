"use client"

import * as React from "react"
import FormGroupMUI from "@mui/material/FormGroup"

import { cn } from "@/lib/utils"

function FormGroup({ className, ...props }: React.ComponentProps<typeof FormGroupMUI>) {
  return (
    <FormGroupMUI
      className={cn("flex flex-col gap-6", className)}
      {...props}
    />
  )
}

export { FormGroup }
