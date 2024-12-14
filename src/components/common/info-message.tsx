import { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react';

type InfoMessageType = 'info' | 'success' | 'warning' | 'error';

interface InfoMessageProps {
  title: string;
  message: string;
  type?: InfoMessageType;
}

const iconMap = {
  info: Info,
  success: CheckCircle,
  warning: AlertTriangle,
  error: AlertCircle,
};

const styleMap = {
  info: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
};

export function InfoMessage({
  title,
  message,
  type = 'info',
}: InfoMessageProps) {
  const Icon = iconMap[type];
  const style = styleMap[type];

  return (
    <div
      aria-labelledby="info-message-title"
      className={`flex items-center gap-4 p-6 lg:gap-6 lg:p-10 ${style}`}
      role="alert"
    >
      <Icon
        className="h-6 w-6 flex-shrink-0 lg:h-10 lg:w-10"
        aria-hidden="true"
      />
      <div className="space-y-1 lg:space-y-2">
        <h3
          id="info-message-title"
          className="text-[18px] font-bold leading-[28px] lg:text-[32px] lg:leading-[40px]"
        >
          {title}
        </h3>
        <p className="text-[14px] font-medium leading-[20px] lg:text-[18px] lg:leading-[24px]">
          {message}
        </p>
      </div>
    </div>
  );
}
