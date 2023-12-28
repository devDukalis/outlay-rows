import classes from "@/pages/NotFound/style.module.scss";

export default function NotFound() {
  return (
    <div className={classes.notFound}>
      <h1>404</h1>
      <p>Страница не найдена</p>
    </div>
  );
}
