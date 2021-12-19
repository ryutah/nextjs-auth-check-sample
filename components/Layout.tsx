const style = {
  margin: "auto",
  padding: "1rem",
  width: "560px",
  "text-align": "center",
};

type Props = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: Props) => (
  <div style={style}>{children}</div>
);
