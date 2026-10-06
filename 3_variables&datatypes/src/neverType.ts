// Never it stop the execute of program, it throw the error and it also goes in infinity loop

// function throwError(message: string): never {
//     throw new Error(message)
// }

// throwError("No message")

function infinityLoop(): never {
    while(true) {
        console.log("Running...")
    }
}  

infinityLoop()