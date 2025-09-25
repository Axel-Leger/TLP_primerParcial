// import { runAdapter } from "./adapter";

import { runAdapter } from "./adapter";
import { runFactory } from "./factory";
import { runSingleton } from "./singleton";

(
  async () => {
    
    console.log("==========================");
    // await runObserver();
    
    console.log("==========================");
    await runAdapter();

    console.log("==========================");
    await runFactory();

    console.log("==========================");
    await runSingleton();
  }
)();