"use strict";
// Never it stop the execute of program, it throw the error and it also goes in infinity loop
Object.defineProperty(exports, "__esModule", { value: true });
// function throwError(message: string): never {
//     throw new Error(message)
// }
// throwError("No message")
function infinityLoop() {
    while (true) {
        console.log("Running...");
    }
}
infinityLoop();
