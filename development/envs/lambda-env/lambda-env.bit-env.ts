/**
 * this env extends node-env version 0.1.4.
 * to inspect its config @see https://bit.cloud/teambit/node-env?version=0.1.4
 * */
import { NodeEnv } from '@teambit/node.node';
import { Compiler } from "@teambit/compiler";
import { EnvHandler } from "@teambit/envs";
import {
  TypescriptCompiler,
  resolveTypes,
  TypescriptTask,
} from "@teambit/typescript.typescript-compiler";

export class LambdaEnv extends NodeEnv {
  /* shorthand name for the environment */
  name = "lambda-env";

  /* the compiler to use during development */
  compiler(): EnvHandler<Compiler> {
    /**
     * @see https://bit.dev/reference/typescript/using-typescript
     */
    
    return TypescriptCompiler.from({
      tsconfig: require.resolve("./config/tsconfig.json"),
      types: resolveTypes(__dirname, ["./types"]),
    });
  }

  /**
   * a set of processes to be performed before a component is snapped, during its build phase
   * @see https://bit.dev/docs/node-env/build-pipelines
   */
  build() {
    return super.build().replace([
      TypescriptTask.from({
        tsconfig: require.resolve("./config/tsconfig.json"),
        types: resolveTypes(__dirname, ["./types"]),
      }),
    ]);
  }
}

export default new LambdaEnv();