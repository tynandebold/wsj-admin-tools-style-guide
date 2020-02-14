const gulp = require("gulp");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const pkg = require("./package.json");

gulp.task("scss", () => {
  return gulp
    .src("./src/scss/wsj-admin-tools-theme.scss")
    .pipe(postcss())
    .pipe(rename(`wsj-admin-tools-theme.${pkg.version}.min.css`))
    .pipe(gulp.dest("public/css"));
});

gulp.task("watch", () => {
  gulp.watch("./src/scss/**/*", ["scss"]);
});
