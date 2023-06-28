import { format } from "date-fns";

export function helloService() {
  return {
    message: `Hello!, ${format(new Date(), "'Today is' eeee")}`,
  };
}
