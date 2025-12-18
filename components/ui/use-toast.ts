type ToastProps = {
  title?: string
  description?: string
  duration?: number
  variant?: "default" | "destructive"
  action?: React.ReactNode
}

export function toast(props: ToastProps) {
  // In a real implementation, this would manage toast state
  console.log("Toast:", props)
}
