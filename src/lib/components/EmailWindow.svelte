<script>
    import Window from "./Window.svelte";

    // No peeking ;)
    const correctWord = "Correct"
    let input = ''
    let showError = false

    function login() {
        if (input === correctWord) {
            
        } else {
            showError = true
        }
    }

    function close() {
        showError = false
        input = ''
    }
</script>

<Window title="Email" iconPath="assets/mail.png">
    <div class="flex flex-col items-center p-6">
        <h1 class="text-3xl pb-8">LMU Mail</h1>
        <div class="grid grid-cols-2 gap-4">
            <p>Email:</p>
            <input class="windows-box-shadow ring-0 outline-none" type="text" value="reinhold.letz@lmu.de" readonly>

            <p>Password:</p>
            <input class="windows-box-shadow ring-0 outline-none" type="password" bind:value={input}>

        </div>
        <button class="btn mt-8" on:click={login} style="padding: 0 20px;">Login</button>
    </div>
</Window>
{#if showError}
    <div class="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Window title="Error">
            <div class="flex flex-col items-center p-6">
                <div class="flex items-center gap-4">
                    <img src="assets/error.png" alt="error">
                    <h1 class="text-2xl">Incorrect Password</h1>
                </div>
                <button class="btn mt-4" on:click={close} style="padding: 0 20px;">Ok</button>
            </div>
        </Window>
    </div>
{/if}