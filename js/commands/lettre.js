terminal.addCommand("lettre", async function() {
    await terminal.modules.load("window", terminal)
    let terminalWindow = terminal.modules.window.make({
        iframeUrl: "../lettre/",
        name: "Lettre"
    })
    terminal.onInterrupt(() => {
        terminalWindow.close()
    })
}, {
    description: "start lettre"
})