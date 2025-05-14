import { Typography } from '../typography'
import { Card } from './default'

type CardStatusProps = {
  title: string,
  message?: string,
  status: 'danger' | 'warning' | 'success' | 'info',
  label: string,
}

const icons = {
  danger: 'error',
  success: 'check_circle',
  warning: 'warning',
  info: 'info',
}

export const CardStatus = ({ title, message, status, label }: CardStatusProps) => (
  <Card className={`flex flex-row justify-between !py-4 px-4 md:px-8 !bg-${status} text-white`} title={label}>
    <div>
      <Typography type="h5">{title}</Typography>
      <Typography type="h2" className="font-bold">{message}</Typography>
    </div>
    <div className="hidden md:block chart">
      <span className="material-symbols-outlined !text-6xl">{icons[status]}</span>
    </div>
  </Card>
)
