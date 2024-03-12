type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <div className="error-msg">{message}</div>;
};

export default ErrorMessage;
