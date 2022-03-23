import { Text } from "../../Spectrum";

const Details = ({ children, ...props }) => (
  <Text.Body {...props}>{children}</Text.Body>
);

export { Details };
