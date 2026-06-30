export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? "/weather-app/" : "/",
  plugins: [react()],
});
