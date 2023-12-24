import classes from "@/components/Link/style.module.scss";

interface Props {
  href: string;
  children?: React.ReactNode;
}

const Link: React.FC<Props> = ({ href, children }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={classes.activeLink}>
      {children}
    </a>
  );
};

export default Link;
