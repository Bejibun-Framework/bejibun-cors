import App from "@bejibun/app";
import Logger from "@bejibun/logger";
import path from "path";
/**
 * Copies the package's CORS config files into the application config directory.
 */
const configPath = path.resolve(__dirname, "config");
/** Matches JavaScript and TypeScript source file extensions. */
const regex = /\.(m?js|ts)$/;
/** Config file paths discovered under the local config directory. */
const configs = Array.from(new Bun.Glob("**/*").scanSync({
    cwd: configPath
})).filter((value) => regex.test(value) && !value.endsWith(".d.ts"));
/** Copies each discovered config file into the application config directory. */
for (const config of configs) {
    const destination = config.replace(regex, ".ts");
    await Bun.write(App.Path.configPath(destination), await Bun.file(path.resolve(configPath, config)).text());
    Logger.setContext("CONFIGURE").info(`Copying ${config} into config/${destination}`);
}
