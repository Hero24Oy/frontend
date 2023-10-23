import { Trigger } from '../CallingCodeTrigger';

type GetCallingCodeTrigger = (
  selectedCode: string,
) => (props: Record<string, unknown>) => JSX.Element;

export const getCallingCodeTrigger: GetCallingCodeTrigger =
  (selectedCode) => (props) =>
    Trigger({ triggerProps: { ...props }, code: selectedCode });

// ({ ...triggerProps }: { [x: string]: any; }) => Element
